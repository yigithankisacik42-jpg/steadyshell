const fs = require('fs');
const path = require('path');

const files = [
    'lib/vocabulary-fr-b1.ts',
    'lib/speakings-fr-b1.ts',
    'lib/phrases-fr-b1.ts',
    'lib/readings-fr-b1.ts',
    'lib/questions-fr-b1.ts'
];

let report = '';

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (!fs.existsSync(filePath)) {
        report += `FILE_NOT_FOUND: ${file}\n`;
        return;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    report += `AUDITING: ${file}\n`;
    
    // Bracket balance
    const open = (content.match(/\{/g) || []).length;
    const close = (content.match(/\}/g) || []).length;
    if (open !== close) report += `- ERROR: Bracket mismatch (Open: ${open}, Close: ${close})\n`;
    
    const openArr = (content.match(/\[/g) || []).length;
    const closeArr = (content.match(/\]/g) || []).length;
    if (openArr !== closeArr) report += `- ERROR: Array bracket mismatch (Open: ${openArr}, Close: ${closeArr})\n`;

    // Unit IDs
    const unitIds = (content.match(/unitId: \d+/g) || []).map(s => s.split(': ')[1]);
    const seenUnits = new Set();
    const dups = [];
    unitIds.forEach(id => {
        if (seenUnits.has(id)) dups.push(id);
        seenUnits.add(id);
    });
    if (dups.length > 0) report += `- ERROR: Duplicate Unit IDs: ${dups.join(', ')}\n`;
    
    // Check if Unit 389 and 390 exist
    if (!seenUnits.has('389')) report += `- WARNING: Unit 389 missing\n`;
    if (!seenUnits.has('390')) report += `- WARNING: Unit 390 missing\n`;

    // File specific checks
    if (file === 'lib/questions-fr-b1.ts') {
        const questionCount = (content.match(/id: \d+/g) || []).length;
        report += `- INFO: Total questions found: ${questionCount}\n`;
    }
    
    report += '\n';
});

fs.writeFileSync('mega_audit_report.txt', report, 'utf8');
console.log('Mega audit complete. Results in mega_audit_report.txt');
