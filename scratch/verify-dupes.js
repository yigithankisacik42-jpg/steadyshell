const fs = require('fs');
const r = JSON.parse(fs.readFileSync('scratch/duplicate-report.json', 'utf8'));

// Check each file's duplicates and filter by actual content length
['questions-fr-a2.ts', 'questions-fr-b1.ts', 'questions-fr-a1.ts'].forEach(fname => {
    const entries = r.duplicates.filter(d => d.fileName === fname);
    const real = entries.filter(d => {
        const m = d.questionText.match(/"([^"]+)"/);
        return m && m[1].length > 2;
    });
    console.log(fname + ': Total=' + entries.length + ' FalsePositive=' + (entries.length - real.length) + ' Real=' + real.length);
    if (real.length > 0) {
        real.forEach(d => {
            console.log('  ' + d.type + ' | ' + d.quizName + ' | ' + d.questionText.substring(0, 80));
        });
    }
    console.log('');
});

// Summary
const allReal = r.duplicates.filter(d => {
    const m = d.questionText.match(/"([^"]+)"/);
    return m && m[1].length > 2;
});

console.log('\n=== OVERALL SUMMARY ===');
console.log('Total reported duplicates:', r.totalDuplicateIssues);
console.log('False positives (single letter from apostrophes):', r.totalDuplicateIssues - allReal.length);
console.log('Real duplicates:', allReal.length);

// Group by file
const byFile = {};
allReal.forEach(d => {
    byFile[d.fileName] = (byFile[d.fileName] || 0) + 1;
});
console.log('\nReal duplicates by file:');
Object.entries(byFile).sort((a,b) => b[1]-a[1]).forEach(([f,c]) => {
    console.log('  ' + f + ': ' + c);
});
