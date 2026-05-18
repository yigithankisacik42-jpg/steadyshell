import { Question, QuestionOption } from './questions';
import { getFrB2VocabularyForUnit } from './vocabulary-fr-b2';
import { getFrB2PhrasesForUnit } from './phrases-fr-b2';
import { getFrB2SpeakingForUnit } from './speakings-fr-b2';
import { getFrB2ReadingForUnit } from './readings-fr-b2';
import { getFrB2GrammarForUnit } from './grammar-fr-b2';

function shuffle<T>(array: T[], seed: number): T[] {
    let currentIndex = array.length, temporaryValue, randomIndex;
    let currentSeed = seed;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(seededRandom(currentSeed++) * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function seededRandom(seed: number): number {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

export function getFrenchB2Quiz(unitId: number, quizIndex: number): Question[] {
    const vocab = getFrB2VocabularyForUnit(unitId);
    const phrases = getFrB2PhrasesForUnit(unitId);
    const speaking = getFrB2SpeakingForUnit(unitId);
    const reading = getFrB2ReadingForUnit(unitId);

    const questions: Question[] = [];
    let qId = 1;
    const baseSeed = unitId * 100 + quizIndex;

    const generateOptions = (correctText: string, wrongSources: string[], seed: number): QuestionOption[] => {
        const wrongs = shuffle([...wrongSources].filter(w => w !== correctText), seed).slice(0, 3);
        const options = [
            { id: "correct", text: correctText, correct: true },
            { id: "w1", text: wrongs[0] || "Faux 1", correct: false },
            { id: "w2", text: wrongs[1] || "Faux 2", correct: false },
            { id: "w3", text: wrongs[2] || "Faux 3", correct: false }
        ];
        return shuffle(options, seed + 1).map((opt, i) => ({ ...opt, id: String.fromCharCode(97 + i) }));
    };

    const allVocabMeanings = vocab.map(v => v.meaning);
    const allVocabWords = vocab.map(v => v.word);
    const allPhraseMeanings = phrases.map(p => p.meaning);
    const allPhraseTexts = phrases.map(p => p.text);

    if (quizIndex === 1) {
        // Quiz 1: Vocab Select (10), Vocab Listening (5), Phrase Select (5)
        for (let i = 0; i < 10; i++) {
            const v = vocab[i % vocab.length];
            questions.push({
                id: qId++,
                type: "SELECT",
                question: `'${v.word}' ne demek?`,
                options: generateOptions(v.meaning, allVocabMeanings, baseSeed + qId),
            });
        }
        for (let i = 10; i < 15; i++) {
            const v = vocab[i % vocab.length];
            questions.push({
                id: qId++,
                type: "LISTENING",
                question: "Choisissez ce que vous entendez :",
                audioText: v.word,
                options: generateOptions(v.meaning, allVocabMeanings, baseSeed + qId),
            });
        }
        for (let i = 0; i < 5; i++) {
            const p = phrases[i % phrases.length];
            questions.push({
                id: qId++,
                type: "SELECT",
                question: `'${p.text}' ne demek?`,
                options: generateOptions(p.meaning, allPhraseMeanings, baseSeed + qId),
            });
        }
    } else if (quizIndex === 2) {
        // Quiz 2: Phrase Trans (5), Vocab Trans (5), Speaking Listen (5), Vocab Select (5)
        for (let i = 0; i < 5; i++) {
            const p = phrases[i % phrases.length];
            questions.push({
                id: qId++,
                type: "TRANSLATE",
                question: "Traduisez la phrase :",
                hint: p.meaning,
                correctAnswer: p.text
            });
        }
        for (let i = 0; i < 5; i++) {
            const v = vocab[i % vocab.length];
            questions.push({
                id: qId++,
                type: "TRANSLATE",
                question: "Fransızcasını yaz:",
                hint: v.meaning,
                correctAnswer: v.word
            });
        }
        for (let i = 0; i < 5; i++) {
            const s = speaking[i % speaking.length];
            questions.push({
                id: qId++,
                type: "LISTENING",
                question: "Choisissez ce que vous entendez :",
                audioText: s.text,
                options: generateOptions(s.translation, speaking.map(sp => sp.translation), baseSeed + qId),
            });
        }
        for (let i = 5; i < 10; i++) {
            const v = vocab[i % vocab.length];
            questions.push({
                id: qId++,
                type: "SELECT",
                question: `'${v.word}' ne demek?`,
                options: generateOptions(v.meaning, allVocabMeanings, baseSeed + qId),
            });
        }
    } else if (quizIndex === 3) {
        // Quiz 3: Reading Questions (10), Phrase Listen (5), Speaking Trans (5)
        if (reading && reading.questions && reading.questions.length >= 1) {
            for (let i = 0; i < Math.min(10, reading.questions.length); i++) {
                const rq = reading.questions[i];
                questions.push({
                    id: qId++,
                    type: "SELECT",
                    question: rq.question,
                    options: generateOptions(rq.correctAnswer, rq.options, baseSeed + qId),
                });
            }
        }
        // Fill remaining up to 10 from vocabulary
        while (questions.length < 10) {
            const v = vocab[questions.length % vocab.length];
            questions.push({
                id: qId++,
                type: "SELECT",
                question: `'${v.word}' ne demek?`,
                options: generateOptions(v.meaning, allVocabMeanings, baseSeed + qId),
            });
        }

        for (let i = 0; i < 5; i++) {
            const p = phrases[i % phrases.length];
            questions.push({
                id: qId++,
                type: "LISTENING",
                question: "Choisissez ce que vous entendez :",
                audioText: p.text,
                options: generateOptions(p.meaning, allPhraseMeanings, baseSeed + qId),
            });
        }
        for (let i = 0; i < 5; i++) {
            const s = speaking[i % speaking.length];
            questions.push({
                id: qId++,
                type: "TRANSLATE",
                question: "Traduisez la phrase :",
                hint: s.translation,
                correctAnswer: s.text
            });
        }
    } else {
        // Quiz 4: Fill Blank (10) and Mixed Translate (10)
        let fillBlanksAdded = 0;
        for (let v of vocab) {
            if (v.example && fillBlanksAdded < 10) {
                const wordLower = v.word.toLowerCase();
                const exampleLower = v.example.toLowerCase();
                if (exampleLower.includes(wordLower)) {
                    const idx = exampleLower.indexOf(wordLower);
                    const originalWordCase = v.example.substring(idx, idx + v.word.length);
                    const blanked = v.example.replace(originalWordCase, "___");
                    questions.push({
                        id: qId++,
                        type: "FILL_BLANK",
                        question: "Complétez la phrase :",
                        sentence: blanked,
                        options: generateOptions(v.word, allVocabWords, baseSeed + qId),
                    });
                    fillBlanksAdded++;
                }
            }
        }
        
        while(fillBlanksAdded < 10) {
            const p = phrases[fillBlanksAdded % phrases.length];
            questions.push({
                id: qId++,
                type: "SELECT",
                question: `'${p.meaning}' nasıl söylenir?`,
                options: generateOptions(p.text, allPhraseTexts, baseSeed + qId),
            });
            fillBlanksAdded++;
        }

        for (let i = 0; i < 5; i++) {
            const p = phrases[i % phrases.length];
            questions.push({
                id: qId++,
                type: "TRANSLATE",
                question: "Traduisez la phrase :",
                hint: p.meaning,
                correctAnswer: p.text
            });
        }
        for (let i = 0; i < 5; i++) {
            const v = vocab[i % vocab.length];
            questions.push({
                id: qId++,
                type: "TRANSLATE",
                question: "Fransızcasını yaz:",
                hint: v.meaning,
                correctAnswer: v.word
            });
        }
    }

    return questions.slice(0, 20);
}
