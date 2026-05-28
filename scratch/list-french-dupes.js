const fs = require('fs');
const r = JSON.parse(fs.readFileSync('scratch/real-duplicates.json', 'utf8'));

// FR-A2 duplicates
const fra2 = r.filter(d => d.fileName === 'questions-fr-a2.ts');
console.log('FR-A2 real duplicates:', fra2.length);
fra2.forEach((d, i) => {
    console.log((i+1) + '. [' + d.type + '] Quiz:' + d.quizName);
    console.log('   Text:' + d.questionText.substring(0, 100));
    console.log('   Lines:' + d.lineNumbers.join(','));
    if (d.details) {
        d.details.forEach(det => {
            console.log('   -> id:' + det.id + ' answer:"' + det.correctOptionText + '" line:' + det.line + (det.quizName ? ' (' + det.quizName + ')' : ''));
        });
    }
    console.log('');
});

// FR-B1 duplicates
const frb1 = r.filter(d => d.fileName === 'questions-fr-b1.ts');
console.log('\nFR-B1 real duplicates:', frb1.length);
frb1.forEach((d, i) => {
    console.log((i+1) + '. [' + d.type + '] Quiz:' + d.quizName);
    console.log('   Text:' + d.questionText.substring(0, 100));
    console.log('   Lines:' + d.lineNumbers.join(','));
    if (d.details) {
        d.details.forEach(det => {
            console.log('   -> id:' + det.id + ' answer:"' + det.correctOptionText + '" line:' + det.line + (det.quizName ? ' (' + det.quizName + ')' : ''));
        });
    }
    console.log('');
});

// FR-A1 duplicates
const fra1 = r.filter(d => d.fileName.startsWith('questions-fr-a1'));
console.log('\nFR-A1 parts real duplicates:', fra1.length);
fra1.forEach((d, i) => {
    console.log((i+1) + '. [' + d.type + '] File:' + d.fileName + ' Quiz:' + d.quizName);
    console.log('   Text:' + d.questionText.substring(0, 100));
    console.log('   Lines:' + d.lineNumbers.join(','));
    console.log('');
});
