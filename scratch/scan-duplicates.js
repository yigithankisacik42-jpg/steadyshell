/**
 * SteadyShell Duplicate Question Scanner
 * 
 * Scans ALL question .ts files for duplicate questions:
 *   1. Same question text within the same quiz
 *   2. Same question+answer across quizzes in the same file
 *   3. Same hint for TRANSLATE questions within same quiz
 *   4. Same sentence for FILL_BLANK questions within same quiz
 *   5. Same audioText for LISTENING questions within same quiz
 *   6. Cross-quiz same question+correctAnswer in same file
 */

const fs = require('fs');
const path = require('path');

const LIB_DIR = path.join(__dirname, '..', 'lib');
const OUTPUT_FILE = path.join(__dirname, 'duplicate-report.json');

// Collect all question files
function getQuestionFiles() {
    const files = fs.readdirSync(LIB_DIR).filter(f => {
        return f.startsWith('questions') && f.endsWith('.ts') && !fs.statSync(path.join(LIB_DIR, f)).isDirectory();
    });
    return files.sort();
}

// Extract quiz arrays and their questions from file content
function extractQuizzes(content, fileName) {
    const lines = content.split(/\r?\n/);
    const quizzes = [];

    // Find quiz array declarations: const/export const unitXQuizY: Question[] = [
    // Also matches patterns like unit301Quiz1, unit3Quiz1, etc.
    const quizStartRegex = /(?:export\s+)?(?:const|let|var)\s+([\w]+(?:Quiz|quiz)\d+)\s*:\s*Question\[\]\s*=\s*\[/;

    let currentQuiz = null;
    let bracketDepth = 0;
    let inQuiz = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const match = line.match(quizStartRegex);

        if (match && !inQuiz) {
            currentQuiz = {
                name: match[1],
                startLine: i + 1,
                content: '',
                lines: []
            };
            inQuiz = true;
            bracketDepth = 0;
            // Count opening brackets on this line
            for (const ch of line) {
                if (ch === '[') bracketDepth++;
                if (ch === ']') bracketDepth--;
            }
            currentQuiz.content += line + '\n';
            currentQuiz.lines.push(i + 1);

            if (bracketDepth <= 0 && line.includes(']')) {
                // Single-line quiz (unlikely but handle it)
                inQuiz = false;
                quizzes.push(currentQuiz);
                currentQuiz = null;
            }
            continue;
        }

        if (inQuiz) {
            for (const ch of line) {
                if (ch === '[') bracketDepth++;
                if (ch === ']') bracketDepth--;
            }
            currentQuiz.content += line + '\n';
            currentQuiz.lines.push(i + 1);

            if (bracketDepth <= 0) {
                inQuiz = false;
                currentQuiz.endLine = i + 1;
                quizzes.push(currentQuiz);
                currentQuiz = null;
            }
        }
    }

    return quizzes;
}

// Extract individual question objects from quiz content
function extractQuestions(quizContent, quizStartLine) {
    const questions = [];

    // We'll parse question objects by finding { id: ... } patterns
    // Each question is an object starting with { id: N, ...
    const lines = quizContent.split(/\r?\n/);
    
    // Regex patterns for extracting fields
    const idRegex = /\bid\s*:\s*(\d+)/;
    const typeRegex = /\btype\s*:\s*["'](\w+)["']/;
    const questionTextRegex = /\bquestion\s*:\s*["']([^"']*(?:["'][^"']*?)*)["']/;
    const hintRegex = /\bhint\s*:\s*["']([^"']*?)["']/;
    const correctAnswerRegex = /\bcorrectAnswer\s*:\s*["']([^"']*?)["']/;
    const sentenceRegex = /\bsentence\s*:\s*["']([^"']*?)["']/;
    const audioTextRegex = /\baudioText\s*:\s*["']([^"']*?)["']/;
    
    // Find all question blocks - each line with "id:" followed by question fields
    // Since questions are typically on one or a few lines, let's accumulate them
    let currentBlock = '';
    let blockStartLine = 0;
    let braceDepth = 0;
    let inBlock = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Detect start of a question object
        if (!inBlock && line.match(/\{\s*id\s*:/)) {
            inBlock = true;
            currentBlock = '';
            blockStartLine = quizStartLine + i;
            braceDepth = 0;
        }

        if (inBlock) {
            currentBlock += line + '\n';
            for (const ch of line) {
                if (ch === '{') braceDepth++;
                if (ch === '}') braceDepth--;
            }

            if (braceDepth <= 0) {
                // Extract fields from block
                const q = {};
                const idMatch = currentBlock.match(idRegex);
                const typeMatch = currentBlock.match(typeRegex);
                const questionMatch = currentBlock.match(questionTextRegex);
                const hintMatch = currentBlock.match(hintRegex);
                const correctAnswerMatch = currentBlock.match(correctAnswerRegex);
                const sentenceMatch = currentBlock.match(sentenceRegex);
                const audioTextMatch = currentBlock.match(audioTextRegex);
                
                // Extract correct option text
                let correctOptionText = null;
                const optionsMatch = currentBlock.match(/options\s*:\s*\[([\s\S]*?)\]/);
                if (optionsMatch) {
                    // Find options with correct: true
                    const optionsStr = optionsMatch[1];
                    const optionBlocks = optionsStr.split(/\}\s*,\s*\{/);
                    for (const optBlock of optionBlocks) {
                        if (optBlock.includes('correct: true') || optBlock.includes('correct:true')) {
                            const textMatch = optBlock.match(/text\s*:\s*["']([^"']*?)["']/);
                            if (textMatch) {
                                correctOptionText = textMatch[1];
                            }
                        }
                    }
                }

                q.id = idMatch ? parseInt(idMatch[1]) : null;
                q.type = typeMatch ? typeMatch[1] : null;
                q.question = questionMatch ? questionMatch[1] : null;
                q.hint = hintMatch ? hintMatch[1] : null;
                q.correctAnswer = correctAnswerMatch ? correctAnswerMatch[1] : null;
                q.sentence = sentenceMatch ? sentenceMatch[1] : null;
                q.audioText = audioTextMatch ? audioTextMatch[1] : null;
                q.correctOptionText = correctOptionText;
                q.lineNumber = blockStartLine;

                if (q.id !== null) {
                    questions.push(q);
                }

                inBlock = false;
                currentBlock = '';
            }
        }
    }

    return questions;
}

function findDuplicates(quizzes, fileName) {
    const duplicates = [];

    // ====== CHECK 1: Within same quiz - same question text ======
    for (const quiz of quizzes) {
        const questionMap = {};
        for (const q of quiz.questions) {
            if (!q.question) continue;
            const key = q.question.trim().toLowerCase();
            if (!questionMap[key]) questionMap[key] = [];
            questionMap[key].push(q);
        }
        for (const [text, items] of Object.entries(questionMap)) {
            if (items.length > 1) {
                duplicates.push({
                    type: 'SAME_QUESTION_IN_QUIZ',
                    fileName,
                    quizName: quiz.name,
                    questionText: items[0].question,
                    duplicateCount: items.length,
                    lineNumbers: items.map(i => i.lineNumber),
                    details: items.map(i => ({
                        id: i.id,
                        type: i.type,
                        hint: i.hint,
                        correctAnswer: i.correctAnswer || i.correctOptionText,
                        line: i.lineNumber
                    }))
                });
            }
        }
    }

    // ====== CHECK 2: Within same quiz - same hint for TRANSLATE ======
    for (const quiz of quizzes) {
        const hintMap = {};
        for (const q of quiz.questions) {
            if (q.type !== 'TRANSLATE' || !q.hint) continue;
            const key = q.hint.trim().toLowerCase();
            if (!hintMap[key]) hintMap[key] = [];
            hintMap[key].push(q);
        }
        for (const [hint, items] of Object.entries(hintMap)) {
            if (items.length > 1) {
                duplicates.push({
                    type: 'SAME_HINT_IN_QUIZ',
                    fileName,
                    quizName: quiz.name,
                    questionText: `TRANSLATE hint: "${items[0].hint}"`,
                    duplicateCount: items.length,
                    lineNumbers: items.map(i => i.lineNumber),
                    details: items.map(i => ({
                        id: i.id,
                        correctAnswer: i.correctAnswer,
                        line: i.lineNumber
                    }))
                });
            }
        }
    }

    // ====== CHECK 3: Within same quiz - same sentence for FILL_BLANK ======
    for (const quiz of quizzes) {
        const sentenceMap = {};
        for (const q of quiz.questions) {
            if (q.type !== 'FILL_BLANK' || !q.sentence) continue;
            const key = q.sentence.trim().toLowerCase();
            if (!sentenceMap[key]) sentenceMap[key] = [];
            sentenceMap[key].push(q);
        }
        for (const [sent, items] of Object.entries(sentenceMap)) {
            if (items.length > 1) {
                duplicates.push({
                    type: 'SAME_SENTENCE_IN_QUIZ',
                    fileName,
                    quizName: quiz.name,
                    questionText: `FILL_BLANK sentence: "${items[0].sentence}"`,
                    duplicateCount: items.length,
                    lineNumbers: items.map(i => i.lineNumber),
                    details: items.map(i => ({
                        id: i.id,
                        correctOptionText: i.correctOptionText,
                        line: i.lineNumber
                    }))
                });
            }
        }
    }

    // ====== CHECK 4: Within same quiz - same audioText for LISTENING ======
    for (const quiz of quizzes) {
        const audioMap = {};
        for (const q of quiz.questions) {
            if (q.type !== 'LISTENING' || !q.audioText) continue;
            const key = q.audioText.trim().toLowerCase();
            if (!audioMap[key]) audioMap[key] = [];
            audioMap[key].push(q);
        }
        for (const [audio, items] of Object.entries(audioMap)) {
            if (items.length > 1) {
                duplicates.push({
                    type: 'SAME_AUDIO_IN_QUIZ',
                    fileName,
                    quizName: quiz.name,
                    questionText: `LISTENING audioText: "${items[0].audioText}"`,
                    duplicateCount: items.length,
                    lineNumbers: items.map(i => i.lineNumber),
                    details: items.map(i => ({
                        id: i.id,
                        correctOptionText: i.correctOptionText,
                        line: i.lineNumber
                    }))
                });
            }
        }
    }

    // ====== CHECK 5: Across quizzes in same file - same question+answer ======
    const crossQuizMap = {};
    for (const quiz of quizzes) {
        for (const q of quiz.questions) {
            if (!q.question) continue;
            const answer = q.correctAnswer || q.correctOptionText || q.hint || '';
            const key = (q.question.trim() + '||' + answer.trim()).toLowerCase();
            if (!crossQuizMap[key]) crossQuizMap[key] = [];
            crossQuizMap[key].push({ ...q, quizName: quiz.name });
        }
    }
    for (const [key, items] of Object.entries(crossQuizMap)) {
        if (items.length > 1) {
            // Only report if they span different quizzes
            const uniqueQuizzes = new Set(items.map(i => i.quizName));
            if (uniqueQuizzes.size > 1) {
                duplicates.push({
                    type: 'SAME_QUESTION_ANSWER_ACROSS_QUIZZES',
                    fileName,
                    quizName: Array.from(uniqueQuizzes).join(', '),
                    questionText: items[0].question,
                    answer: items[0].correctAnswer || items[0].correctOptionText || items[0].hint,
                    duplicateCount: items.length,
                    lineNumbers: items.map(i => i.lineNumber),
                    details: items.map(i => ({
                        quizName: i.quizName,
                        id: i.id,
                        type: i.type,
                        line: i.lineNumber
                    }))
                });
            }
        }
    }

    // ====== CHECK 6: Across quizzes - same hint text for TRANSLATE ======
    const crossHintMap = {};
    for (const quiz of quizzes) {
        for (const q of quiz.questions) {
            if (q.type !== 'TRANSLATE' || !q.hint) continue;
            const key = q.hint.trim().toLowerCase();
            if (!crossHintMap[key]) crossHintMap[key] = [];
            crossHintMap[key].push({ ...q, quizName: quiz.name });
        }
    }
    for (const [key, items] of Object.entries(crossHintMap)) {
        if (items.length > 1) {
            const uniqueQuizzes = new Set(items.map(i => i.quizName));
            if (uniqueQuizzes.size > 1) {
                duplicates.push({
                    type: 'SAME_HINT_ACROSS_QUIZZES',
                    fileName,
                    quizName: Array.from(uniqueQuizzes).join(', '),
                    questionText: `TRANSLATE hint: "${items[0].hint}"`,
                    duplicateCount: items.length,
                    lineNumbers: items.map(i => i.lineNumber),
                    details: items.map(i => ({
                        quizName: i.quizName,
                        id: i.id,
                        correctAnswer: i.correctAnswer,
                        line: i.lineNumber
                    }))
                });
            }
        }
    }

    // ====== CHECK 7: Across quizzes - same sentence for FILL_BLANK ======
    const crossSentenceMap = {};
    for (const quiz of quizzes) {
        for (const q of quiz.questions) {
            if (q.type !== 'FILL_BLANK' || !q.sentence) continue;
            const key = q.sentence.trim().toLowerCase();
            if (!crossSentenceMap[key]) crossSentenceMap[key] = [];
            crossSentenceMap[key].push({ ...q, quizName: quiz.name });
        }
    }
    for (const [key, items] of Object.entries(crossSentenceMap)) {
        if (items.length > 1) {
            const uniqueQuizzes = new Set(items.map(i => i.quizName));
            if (uniqueQuizzes.size > 1) {
                duplicates.push({
                    type: 'SAME_SENTENCE_ACROSS_QUIZZES',
                    fileName,
                    quizName: Array.from(uniqueQuizzes).join(', '),
                    questionText: `FILL_BLANK sentence: "${items[0].sentence}"`,
                    duplicateCount: items.length,
                    lineNumbers: items.map(i => i.lineNumber),
                    details: items.map(i => ({
                        quizName: i.quizName,
                        id: i.id,
                        correctOptionText: i.correctOptionText,
                        line: i.lineNumber
                    }))
                });
            }
        }
    }

    // ====== CHECK 8: Across quizzes - same audioText for LISTENING ======
    const crossAudioMap = {};
    for (const quiz of quizzes) {
        for (const q of quiz.questions) {
            if (q.type !== 'LISTENING' || !q.audioText) continue;
            const key = q.audioText.trim().toLowerCase();
            if (!crossAudioMap[key]) crossAudioMap[key] = [];
            crossAudioMap[key].push({ ...q, quizName: quiz.name });
        }
    }
    for (const [key, items] of Object.entries(crossAudioMap)) {
        if (items.length > 1) {
            const uniqueQuizzes = new Set(items.map(i => i.quizName));
            if (uniqueQuizzes.size > 1) {
                duplicates.push({
                    type: 'SAME_AUDIO_ACROSS_QUIZZES',
                    fileName,
                    quizName: Array.from(uniqueQuizzes).join(', '),
                    questionText: `LISTENING audioText: "${items[0].audioText}"`,
                    duplicateCount: items.length,
                    lineNumbers: items.map(i => i.lineNumber),
                    details: items.map(i => ({
                        quizName: i.quizName,
                        id: i.id,
                        correctOptionText: i.correctOptionText,
                        line: i.lineNumber
                    }))
                });
            }
        }
    }

    return duplicates;
}

// Main execution
function main() {
    console.log('=== SteadyShell Duplicate Question Scanner ===\n');

    const files = getQuestionFiles();
    console.log(`Found ${files.length} question files to scan:\n`);
    files.forEach(f => console.log(`  - ${f}`));
    console.log('');

    const allDuplicates = [];
    const fileSummaries = [];
    let totalQuestions = 0;
    let totalQuizzes = 0;

    for (const file of files) {
        const filePath = path.join(LIB_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        // Check if file uses dynamic question generation (like German/English files)
        const isDynamic = content.includes('function get') && content.includes('for (let i = 0;');

        const quizzes = extractQuizzes(content, file);

        // For dynamic files, also check word arrays
        let dynamicDuplicates = [];
        if (isDynamic) {
            dynamicDuplicates = findDynamicWordDuplicates(content, file);
            allDuplicates.push(...dynamicDuplicates);
        }

        if (quizzes.length === 0) {
            console.log(`[${file}] No static quiz arrays found${isDynamic ? ' (uses dynamic generation, checked word arrays)' : ''}`);
            fileSummaries.push({
                fileName: file,
                quizCount: 0,
                questionCount: 0,
                duplicateCount: dynamicDuplicates.length,
                note: isDynamic ? 'Dynamic generation - checked word arrays' : 'No quiz arrays found'
            });
            continue;
        }

        // Process each quiz
        let fileQuestionCount = 0;
        for (const quiz of quizzes) {
            const questions = extractQuestions(quiz.content, quiz.startLine);
            quiz.questions = questions;
            fileQuestionCount += questions.length;
        }

        totalQuestions += fileQuestionCount;
        totalQuizzes += quizzes.length;

        // Find duplicates
        const fileDuplicates = findDuplicates(quizzes, file);
        allDuplicates.push(...fileDuplicates);

        console.log(`[${file}] ${quizzes.length} quizzes, ${fileQuestionCount} questions, ${fileDuplicates.length} duplicate issues`);

        fileSummaries.push({
            fileName: file,
            quizCount: quizzes.length,
            questionCount: fileQuestionCount,
            duplicateCount: fileDuplicates.length
        });
    }

    // Group duplicates by type for summary
    const byType = {};
    for (const d of allDuplicates) {
        if (!byType[d.type]) byType[d.type] = [];
        byType[d.type].push(d);
    }

    console.log('\n=== SUMMARY ===');
    console.log(`Total files scanned: ${files.length}`);
    console.log(`Total static quizzes found: ${totalQuizzes}`);
    console.log(`Total static questions extracted: ${totalQuestions}`);
    console.log(`Total duplicate issues found: ${allDuplicates.length}`);
    console.log('');

    for (const [type, items] of Object.entries(byType)) {
        console.log(`  ${type}: ${items.length} issues`);
    }

    // Print details
    if (allDuplicates.length > 0) {
        console.log('\n=== DUPLICATE DETAILS ===\n');
        for (const d of allDuplicates) {
            console.log(`[${d.type}] ${d.fileName} > ${d.quizName}`);
            console.log(`  Question: ${d.questionText}`);
            if (d.answer) console.log(`  Answer: ${d.answer}`);
            console.log(`  Count: ${d.duplicateCount}, Lines: ${d.lineNumbers.join(', ')}`);
            if (d.details) {
                for (const det of d.details) {
                    const extra = [];
                    if (det.quizName) extra.push(`quiz: ${det.quizName}`);
                    if (det.type) extra.push(`type: ${det.type}`);
                    if (det.hint) extra.push(`hint: "${det.hint}"`);
                    if (det.correctAnswer) extra.push(`answer: "${det.correctAnswer}"`);
                    if (det.correctOptionText) extra.push(`correct: "${det.correctOptionText}"`);
                    console.log(`    - id:${det.id}, line:${det.line}${extra.length ? ', ' + extra.join(', ') : ''}`);
                }
            }
            console.log('');
        }
    }

    // Write report
    const report = {
        scanDate: new Date().toISOString(),
        totalFiles: files.length,
        totalQuizzes,
        totalQuestions,
        totalDuplicateIssues: allDuplicates.length,
        summaryByType: Object.fromEntries(
            Object.entries(byType).map(([type, items]) => [type, items.length])
        ),
        fileSummaries,
        duplicates: allDuplicates
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2), 'utf-8');
    console.log(`\nReport saved to: ${OUTPUT_FILE}`);

    return report;
}

// Check dynamic word arrays for duplicates
function findDynamicWordDuplicates(content, fileName) {
    const duplicates = [];
    
    // Extract word arrays - pattern: ["word", "translation"]
    const wordPairRegex = /\["([^"]+)",\s*"([^"]+)"\]/g;
    
    // Find topic blocks (e.g., 501: { words: [...], ... })
    const topicRegex = /(\d+)\s*:\s*\{[\s\S]*?words\s*:\s*\[([\s\S]*?)\]\s*,/g;
    let topicMatch;
    
    while ((topicMatch = topicRegex.exec(content)) !== null) {
        const topicId = topicMatch[1];
        const wordsBlock = topicMatch[2];
        
        const words = [];
        let wordMatch;
        const localWordRegex = /\["([^"]+)",\s*"([^"]+)"\]/g;
        while ((wordMatch = localWordRegex.exec(wordsBlock)) !== null) {
            words.push({
                original: wordMatch[1],
                translation: wordMatch[2]
            });
        }
        
        // Check for duplicate original words
        const origMap = {};
        for (const w of words) {
            const key = w.original.toLowerCase();
            if (!origMap[key]) origMap[key] = [];
            origMap[key].push(w);
        }
        
        for (const [key, items] of Object.entries(origMap)) {
            if (items.length > 1) {
                duplicates.push({
                    type: 'DUPLICATE_WORD_IN_TOPIC',
                    fileName,
                    quizName: `topic_${topicId}`,
                    questionText: `Word: "${items[0].original}" appears ${items.length} times`,
                    duplicateCount: items.length,
                    lineNumbers: [],
                    details: items.map(i => ({
                        original: i.original,
                        translation: i.translation
                    }))
                });
            }
        }
        
        // Check for duplicate translations
        const transMap = {};
        for (const w of words) {
            const key = w.translation.toLowerCase();
            if (!transMap[key]) transMap[key] = [];
            transMap[key].push(w);
        }
        
        for (const [key, items] of Object.entries(transMap)) {
            if (items.length > 1) {
                // Only flag if original words are also the same
                const originals = new Set(items.map(i => i.original.toLowerCase()));
                if (originals.size === 1) {
                    duplicates.push({
                        type: 'DUPLICATE_WORD_TRANSLATION_IN_TOPIC',
                        fileName,
                        quizName: `topic_${topicId}`,
                        questionText: `Word+Translation: "${items[0].original}" = "${items[0].translation}" appears ${items.length} times`,
                        duplicateCount: items.length,
                        lineNumbers: [],
                        details: items.map(i => ({
                            original: i.original,
                            translation: i.translation
                        }))
                    });
                }
            }
        }
    }
    
    return duplicates;
}

main();
