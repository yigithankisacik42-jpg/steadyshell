const fs = require('fs');
const path = require('path');

const LIB = path.join(__dirname, '..', 'lib');

function fixFileBySearch(filename, replacements) {
    const file = path.join(LIB, filename);
    let content = fs.readFileSync(file, 'utf8');
    let fixCount = 0;

    for (const [oldText, newText, description] of replacements) {
        const count = (content.match(new RegExp(escapeRegex(oldText), 'g')) || []).length;
        if (count === 0) {
            console.log('  SKIP: "' + oldText.substring(0, 50) + '..." not found');
            continue;
        }
        
        if (count === 1 && description && description.includes('KEEP_FIRST')) {
            console.log('  SKIP (only 1 occurrence, keeping): ' + oldText.substring(0, 50));
            continue;
        }

        // For duplicates, we replace only the LAST occurrence
        if (count >= 2) {
            const lastIndex = content.lastIndexOf(oldText);
            content = content.substring(0, lastIndex) + newText + content.substring(lastIndex + oldText.length);
            fixCount++;
            console.log('  FIXED last of ' + count + ' occurrences: ' + oldText.substring(0, 50) + '...');
        } else {
            content = content.replace(oldText, newText);
            fixCount++;
            console.log('  FIXED: ' + oldText.substring(0, 50) + '...');
        }
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log('  Total: ' + fixCount + ' fixes applied to ' + filename + '\n');
    return fixCount;
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

console.log('=== FIXING FR-A2 DUPLICATES (Search-Based) ===\n');

const fra2Fixes = [
    // TRANSLATE hint duplicates - replace LAST occurrence with new question
    ['hint: "Maaş beklentileriniz nelerdir?"', 'hint: "Hangi pozisyona başvuruyorsunuz?"'],
    ['hint: "Gülümseyerek konuştu."', 'hint: "Şarkı söyleyerek yürüdü."'],
    ['hint: "Herkes çevre için çaba göstermelidir."', 'hint: "Atıkları azaltmak herkesin görevidir."'],
    ['hint: "Gelenekler"', 'hint: "Festivaller"'],
    ['hint: "Renkleri uyumlu yapmak gerekir."', 'hint: "Aksesuarlar kıyafeti tamamlar."'],

    // FILL_BLANK sentence duplicates
    ['sentence: "Il mange ___ regardant la télé."', 'sentence: "Il travaille ___ écoutant de la musique."'],
    ['sentence: "Elle ___ une robe noire."', 'sentence: "Elle ___ un chapeau élégant."'],
    ['sentence: "Je ___ une veste."', 'sentence: "Je ___ un pull chaud."'],
    ['sentence: "La ___ est confirmée."', 'sentence: "La ___ est vérifiée."'],

    // LISTENING audioText duplicates
    ['audioText: "Recycler"', 'audioText: "Réutiliser"'],
    ['audioText: "La planète"', 'audioText: "Le système solaire"'],
    ['audioText: "Le poème"', 'audioText: "Le roman"'],
    ['audioText: "Le théâtre"', 'audioText: "La danse"'],
    ['audioText: "La constitution"', 'audioText: "Le parlement"'],
    ['audioText: "Le télescope"', 'audioText: "Le microscope"'],
    ['audioText: "La lune"', 'audioText: "Les étoiles"'],
    ['audioText: "La soie"', 'audioText: "Le velours"'],
    ['audioText: "Le cuir"', 'audioText: "Le lin"'],
    ['audioText: "La livraison"', 'audioText: "Le remboursement"'],
    ['audioText: "La concurrence"', 'audioText: "Le marché"'],
];

fixFileBySearch('questions-fr-a2.ts', fra2Fixes);

// Also fix FR-A1-part2 that failed earlier
console.log('=== FIXING FR-A1-PART2 ===\n');
fixFileBySearch('questions-fr-a1-part2.ts', [
    ['hint: "Avrupa"', 'hint: "Asya"'],
]);

console.log('=== ALL SEARCH-BASED FIXES COMPLETE ===');
