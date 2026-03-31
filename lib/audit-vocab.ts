
import fs from 'fs';
import path from 'path';

const filePath = 'c:/Users/yiğithan/Desktop/steady shell/steady shell/lib/vocabulary-en-a2.ts';

function countWordsPerUnit() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const units = content.match(/const u\d+: EnglishUnitVocabulary = \{/g);
    
    if (!units) {
        console.log("No units found.");
        return;
    }

    const report: { unit: string; count: number }[] = [];
    units.forEach(unit => {
        const unitMatch = unit.match(/u\d+/);
        const unitName = unitMatch ? unitMatch[0] : "unknown";
        const unitRegex = new RegExp(`${unitName}: EnglishUnitVocabulary = \\{[\\s\\S]*?words: \\[([\\s\\S]*?)\\]`, 'm');
        const match = content.match(unitRegex);
        if (match) {
            const wordsBlock = match[1];
            const wordMatches = wordsBlock.match(/\{ word: /g);
            report.push({ unit: unitName, count: wordMatches ? wordMatches.length : 0 });
        }
    });

    console.log(JSON.stringify(report, null, 2));
}

countWordsPerUnit();
