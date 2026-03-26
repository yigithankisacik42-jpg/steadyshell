const fs = require('fs');
const path = require('path');

const files = [
    'lib/vocabulary-fr-b1.ts',
    'lib/speakings-fr-b1.ts',
    'lib/phrases-fr-b1.ts',
    'lib/readings-fr-b1.ts',
    'lib/questions-fr-b1.ts',
    'lib/grammar-fr-b1.ts'
];

const replacements = {
    'Ã©': 'é',
    'Ã ': 'à',
    'Ã¨': 'è',
    'Ãª': 'ê',
    'Ã®': 'î',
    'Ã´': 'ô',
    'Ã»': 'û',
    'Ã§': 'ç',
    'Ã¹': 'ù',
    'Ã«': 'ë',
    'Ã«': 'ë',
    'Ã ': 'à',
    'Ã¢': 'â',
    // Turkish
    'Ä±': 'ı',
    'ÄŸ': 'ğ',
    'ÅŸ': 'ş',
    'Ã¶': 'ö',
    'Ã¼': 'ü',
    'Ã‡': 'Ç',
    'Ä°': 'İ',
    'Åž': 'Ş',
    'Ã–': 'Ö',
    'Ãœ': 'Ü',
    'â€œ': '"',
    'â€?': '"',
    'â€™': "'"
};

files.forEach(file => {
    const absPath = path.resolve(file);
    if (!fs.existsSync(absPath)) return;
    
    let content = fs.readFileSync(absPath, 'utf8');
    let original = content;
    
    Object.entries(replacements).forEach(([garble, correct]) => {
        content = content.split(garble).join(correct);
    });
    
    if (content !== original) {
        fs.writeFileSync(absPath, content, 'utf8');
        console.log(`Fixed encoding in ${file}`);
    } else {
        console.log(`No garbles found in ${file}`);
    }
});
