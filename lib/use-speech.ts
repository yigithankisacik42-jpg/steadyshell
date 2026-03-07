"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

// Dil kodları - Web Speech API formatı
const LANGUAGE_CODES: Record<string, string> = {
    'es': 'es-ES', // İspanyolca (İspanya)
    'en': 'en-US', // İngilizce (ABD)
    'fr': 'fr-FR', // Fransızca (Fransa)
    'de': 'de-DE', // Almanca
    'it': 'it-IT', // İtalyanca
    'tr': 'tr-TR', // Türkçe
};

interface UseSpeechReturn {
    // Ses Tanıma (Speech-to-Text)
    isListening: boolean;
    transcript: string;
    startListening: () => void;
    stopListening: () => void;

    // Ses Sentezi (Text-to-Speech)
    isSpeaking: boolean;
    speak: (text: string) => void;
    stopSpeaking: () => void;

    // Durum
    isSupported: boolean;
    error: string | null;
}

export function useSpeech(languageCode: string = 'es'): UseSpeechReturn {
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isSupported, setIsSupported] = useState(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recognitionRef = useRef<any>(null);
    const synthRef = useRef<SpeechSynthesis | null>(null);

    // Browser desteği kontrolü ve sesleri yükleme
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const synth = window.speechSynthesis;

            if (!SpeechRecognition || !synth) {
                setIsSupported(false);
                setError('Tarayıcınız ses özelliklerini desteklemiyor. Chrome veya Edge kullanın.');
            } else {
                synthRef.current = synth;

                // Chrome'da seslerin yüklenmesi asenkrondur. 
                // Boş gelmesini engellemek için önceden çağırıyoruz ve event dinliyoruz.
                const loadVoices = () => {
                    synth.getVoices();
                };
                loadVoices();
                if (synth.onvoiceschanged !== undefined) {
                    synth.onvoiceschanged = loadVoices;
                }
            }
        }
    }, []);

    // Ses Tanıma Başlat
    const startListening = useCallback(() => {
        if (!isSupported) return;

        try {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();

            recognition.lang = LANGUAGE_CODES[languageCode] || 'es-ES';
            recognition.continuous = false;
            recognition.interimResults = true;
            recognition.maxAlternatives = 3; // Daha iyi alternatifleri denemesi için

            recognition.onstart = () => {
                setIsListening(true);
                setTranscript('');
                setError(null);
            };

            recognition.onresult = (event) => {
                let finalTranscript = '';
                let interimTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    } else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }

                // Final varsa onu set et, yoksa interimi set et ki UI'da canlı dalgalanma görünsün.
                setTranscript(finalTranscript || interimTranscript);
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                if (event.error === 'no-speech') {
                    setError('Ses algılanamadı. Tekrar deneyin.');
                } else if (event.error === 'not-allowed') {
                    setError('Mikrofon izni gerekli. Tarayıcı ayarlarından izin verin.');
                } else {
                    setError('Ses tanıma hatası: ' + event.error);
                }
                setIsListening(false);
            };

            recognition.onend = () => {
                setIsListening(false);
            };

            recognitionRef.current = recognition;
            recognition.start();

        } catch (err) {
            console.error('Error starting recognition:', err);
            setError('Ses tanıma başlatılamadı.');
            setIsListening(false);
        }
    }, [isSupported, languageCode]);

    // Ses Tanıma Durdur
    const stopListening = useCallback(() => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
            setIsListening(false);
        }
    }, []);

    // Metni Seslendir (Text-to-Speech)
    const speak = useCallback((text: string) => {
        if (!synthRef.current) return;

        // Önce varsa mevcut sesi durdur
        synthRef.current.cancel();

        // Metni temizle: Türkçe açıklamaları (💡, ✨ vb.) filtrele
        let cleanText = text;
        const delimiters = ['💡', '✨', '📝', '❌', '✅', '\n\nTürkçe:', '\n\nNot:'];

        for (const delimiter of delimiters) {
            if (cleanText.includes(delimiter)) {
                cleanText = cleanText.split(delimiter)[0].trim();
            }
        }

        // Emojileri temizle (TTS bazı emojileri kelime olarak okur)
        cleanText = cleanText.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');

        const utterance = new SpeechSynthesisUtterance(cleanText);
        const targetLang = LANGUAGE_CODES[languageCode] || 'es-ES';
        utterance.lang = targetLang;

        // Rate'i 1.0 (normal) hızına veya dil öğrenmeye uygun 0.95'e çekmek kaliteyi artırır. Çok yavaşlarsa robotikleşir.
        utterance.rate = 0.95;
        utterance.pitch = 1.05; // Biraz daha samimi ve neşeli bir ton (-1 ile 2 arası, 1 = normal)

        // Dile uygun en kaliteli sesi bul
        const voices = synthRef.current.getVoices();
        const langPrefix = targetLang.split('-')[0];

        // 1. Önce tam dil kodu eşleşenleri bul (örn: fr-FR)
        let exactVoices = voices.filter(v => v.lang === targetLang || v.lang.replace('_', '-') === targetLang);

        // Eğer tam eşleşme yoksa o dilin ailesindeki tüm sesleri bul (örn: tüm 'fr' başlayanlar)
        const langVoices = exactVoices.length > 0 ? exactVoices : voices.filter(v => v.lang.startsWith(langPrefix));

        if (langVoices.length > 0) {
            // Telaffuzu en iyi olan servisleri önceliklendir (Google, Neural gibi) ve kadın sesi tercih et ("Female")
            const premiumVoice = langVoices.find(v =>
                (v.name.includes('Google') || v.name.includes('Neural') || v.name.includes('Premium') || v.name.includes('Online'))
            );

            // Eğer premium bulunamadıysa, Microsoft'un yerel kaliteli seslerine bak (örn: Microsoft Hortense Desktop)
            const microsoftVoice = langVoices.find(v => v.name.includes('Microsoft'));

            // iOS/MacOS için Siri/Apple kalite seslerini yakalamaya çalış
            const appleVoice = langVoices.find(v => v.name.includes('Thomas') || v.name.includes('Amelie') || v.name.includes('Monica') || v.name.includes('Daniel') || v.name.includes('Jorge'));

            // Ses ataması (Premium > Apple/Siri > Microsoft > Standart)
            if (premiumVoice) {
                utterance.voice = premiumVoice;
            } else if (appleVoice) {
                utterance.voice = appleVoice;
            } else if (microsoftVoice) {
                utterance.voice = microsoftVoice;
            } else {
                utterance.voice = langVoices[0]; // İlk bulduğunu kullan
            }

            console.log("Seçilen TTS Sesi:", utterance.voice.name, utterance.voice.lang);
        }

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = (e) => {
            console.error("Speech Synthesis Error:", e);
            setIsSpeaking(false);
        };

        synthRef.current.speak(utterance);
    }, [languageCode]);

    // Seslendirmeyi Durdur
    const stopSpeaking = useCallback(() => {
        if (synthRef.current) {
            synthRef.current.cancel();
            setIsSpeaking(false);
        }
    }, []);

    // Cleanup
    useEffect(() => {
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.abort();
            }
            if (synthRef.current) {
                synthRef.current.cancel();
            }
        };
    }, []);

    return {
        isListening,
        transcript,
        startListening,
        stopListening,
        isSpeaking,
        speak,
        stopSpeaking,
        isSupported,
        error
    };
}

// TypeScript için global tanımlar
// SpeechRecognition Web API için tip tanımları
interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
    readonly error: string;
    readonly message: string;
}

interface SpeechRecognitionInstance extends EventTarget {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    onstart: ((this: SpeechRecognitionInstance, ev: Event) => void) | null;
    onresult: ((this: SpeechRecognitionInstance, ev: SpeechRecognitionEvent) => void) | null;
    onerror: ((this: SpeechRecognitionInstance, ev: SpeechRecognitionErrorEvent) => void) | null;
    onend: ((this: SpeechRecognitionInstance, ev: Event) => void) | null;
    start(): void;
    stop(): void;
    abort(): void;
}

interface SpeechRecognitionConstructor {
    new(): SpeechRecognitionInstance;
}

declare global {
    interface Window {
        SpeechRecognition: SpeechRecognitionConstructor;
        webkitSpeechRecognition: SpeechRecognitionConstructor;
    }
}

export { };
