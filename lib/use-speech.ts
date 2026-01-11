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

    // Browser desteği kontrolü
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const synth = window.speechSynthesis;

            if (!SpeechRecognition || !synth) {
                setIsSupported(false);
                setError('Tarayıcınız ses özelliklerini desteklemiyor. Chrome veya Edge kullanın.');
            } else {
                synthRef.current = synth;
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
            recognition.maxAlternatives = 1;

            recognition.onstart = () => {
                setIsListening(true);
                setTranscript('');
                setError(null);
            };

            recognition.onresult = (event) => {
                const result = event.results[event.results.length - 1];
                const text = result[0].transcript;
                setTranscript(text);
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

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = LANGUAGE_CODES[languageCode] || 'es-ES';
        utterance.rate = 0.9; // Biraz yavaş (öğrenme için)
        utterance.pitch = 1;

        // Dile uygun ses bul
        const voices = synthRef.current.getVoices();
        const targetLang = LANGUAGE_CODES[languageCode] || 'es-ES';
        const voice = voices.find(v => v.lang.startsWith(targetLang.split('-')[0]));
        if (voice) {
            utterance.voice = voice;
        }

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

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
