const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scratch/duplicate-report.json', 'utf8'));

// Filter out false positives caused by French apostrophe truncation
const falsePositiveLetters = ['L', 'J', 'C', 'D', 'N', 'S', 'Q', 'I', 'M', 'E', 'O', 'A'];

const real = data.duplicates.filter(d => {
    // Extract the quoted content from questionText
    const match = d.questionText.match(/"([^"]+)"/);
    if (!match) return true;
    const content = match[1];
    // If content is just a single letter, it's likely a false positive from apostrophe truncation
    if (content.length <= 2) return false;
    return true;
});

console.log(`Total duplicates in report: ${data.totalDuplicateIssues}`);
console.log(`False positives (apostrophe truncation): ${data.totalDuplicateIssues - real.length}`);
console.log(`REAL duplicates to fix: ${real.length}`);
console.log('\n=== REAL DUPLICATES ===\n');

real.forEach(d => {
    console.log(`[${d.fileName}] ${d.type}`);
    console.log(`  Quiz: ${d.quizName}`);
    console.log(`  Text: ${d.questionText}`);
    console.log(`  Count: ${d.duplicateCount}`);
    console.log(`  Lines: ${d.lineNumbers.join(', ')}`);
    if (d.details) {
        d.details.forEach(det => {
            console.log(`    - id:${det.id} answer:"${det.correctOptionText}" line:${det.line} ${det.quizName ? '('+det.quizName+')' : ''}`);
        });
    }
    console.log('');
});

// Also save filtered results
fs.writeFileSync('scratch/real-duplicates.json', JSON.stringify(real, null, 2));
console.log(`\nSaved ${real.length} real duplicates to scratch/real-duplicates.json`);
