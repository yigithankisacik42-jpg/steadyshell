const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, 'lib', 'questions-fr-b1.ts');
const tempQuestions = JSON.parse(fs.readFileSync(path.join(__dirname, 'temp_unit390_questions.json'), 'utf8'));

let content = fs.readFileSync(questionsFile, 'utf8');

// 1. Generate the Quiz Arrays
let quizArraysText = '';
const startId = 2401; // Unit 389 ended at 2400 (if I was correct)
let currentId = startId;

tempQuestions.forEach((quiz, index) => {
    quizArraysText += `const unit390Quiz${index + 1}: Question[] = [\n`;
    quiz.forEach((q, qIndex) => {
        const options = q.options.map((opt, i) => {
            const id = String.fromCharCode(97 + i);
            const isCorrect = opt === q.answer;
            return `{ id: "${id}", text: "${opt.replace(/"/g, '\\"')}", correct: ${isCorrect} }`;
        }).join(', ');
        
        let type = "SELECT";
        if (q.question.includes("Doldur")) type = "FILL_BLANK";
        else if (q.question.includes("Duyduğunu")) type = "LISTENING";
        else if (q.question.includes("Çevir") || q.question.includes("Fransızcasını yaz")) type = "TRANSLATE";

        quizArraysText += `    { id: ${currentId++}, type: "${type}", question: "${q.question.replace(/"/g, '\\"')}", options: [${options}] }${qIndex === quiz.length - 1 ? '' : ','}\n`;
    });
    quizArraysText += `];\n`;
});

// 2. Insert Quiz Arrays before "function shuffle"
const shuffleIdx = content.indexOf('function shuffle');
if (shuffleIdx === -1) {
    console.error('Could not find shuffle function');
    process.exit(1);
}
content = content.slice(0, shuffleIdx) + quizArraysText + '\n' + content.slice(shuffleIdx);

// 3. Update getFrenchB1Quiz mapping
const insertionStr = 'if (unitId === 389) {';
const insertionPoint = content.indexOf(insertionStr);
if (insertionPoint === -1) {
    console.error('Could not find unit 389 mapping');
    process.exit(1);
}

// Find the end of the unit 389 block
let braceCount = 0;
let endIdx = -1;
for (let i = insertionPoint; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') {
        braceCount--;
        if (braceCount === 0) {
            endIdx = i + 1;
            break;
        }
    }
}

const mappingCode = `
    // Return hardcoded, perfectly tailored quizzes for UNIT 390
    if (unitId === 390) {
        if (quizIndex === 1) return unit390Quiz1;
        if (quizIndex === 2) return unit390Quiz2;
        if (quizIndex === 3) return unit390Quiz3;
        if (quizIndex === 4) return unit390Quiz4;
    }
`;

content = content.slice(0, endIdx) + mappingCode + content.slice(endIdx);

fs.writeFileSync(questionsFile, content);
console.log('Successfully inducted Unit 390 quizzes.');
