
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

    const report = [];
    units.forEach(unit => {
        const unitName = unit.match(/u\d+/)[0];
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
