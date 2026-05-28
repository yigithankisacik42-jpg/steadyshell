const fs = require('fs');
const path = require('path');

const LIB = path.join(__dirname, '..', 'lib');

function fixByContent(filename, searchAndReplace) {
    const file = path.join(LIB, filename);
    let content = fs.readFileSync(file, 'utf8');
    let fixCount = 0;

    for (const [search, replace] of searchAndReplace) {
        // Count occurrences
        let count = 0;
        let idx = -1;
        let tempIdx = 0;
        while ((tempIdx = content.indexOf(search, tempIdx)) !== -1) {
            count++;
            idx = tempIdx;
            tempIdx += search.length;
        }

        if (count >= 2) {
            // Replace the LAST occurrence only
            content = content.substring(0, idx) + replace + content.substring(idx + search.length);
            fixCount++;
            console.log('  FIXED (last of ' + count + '): ' + search.substring(0, 60));
        } else if (count === 0) {
            console.log('  NOT FOUND: ' + search.substring(0, 60));
        } else {
            console.log('  SKIP (only 1 occurrence): ' + search.substring(0, 60));
        }
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log('  => ' + fixCount + ' fixes applied to ' + filename + '\n');
    return fixCount;
}

console.log('=== FIXING FR-A2 DUPLICATES ===\n');

// These are the actual duplicate texts to fix in questions-fr-a2.ts
fixByContent('questions-fr-a2.ts', [
    // TRANSLATE hint duplicates (keep first, change last)
    ['hint: "Çok eğlendik"', 'hint: "Harika vakit geçirdik"'],
    ['hint: "Tren saat kaçta?"', 'hint: "Otobüs saat kaçta?"'],
    ['hint: "Günün yemeği nedir?"', 'hint: "Bugünün çorbası nedir?"'],
    ['hint: "İndirim var mı?"', 'hint: "Promosyon var mı?"'],
    ['hint: "Oraya gitmek istiyorum."', 'hint: "Oraya ulaşmak istiyorum."'],
    ['hint: "Ondan biraz almak istiyorum."', 'hint: "Biraz daha almak istiyorum."'],
    ['hint: "Metronun önünde buluşuyoruz."', 'hint: "Parkın girişinde buluşuyoruz."'],
    ['hint: "Neden olmasın?"', 'hint: "Harika bir fikir!"'],
    ['hint: "Sinemaya gitmek ister misin?"', 'hint: "Konsere gitmek ister misin?"'],
    ['hint: "Nerede buluşuyoruz?"', 'hint: "Saat kaçta buluşuyoruz?"'],
    ['hint: "Rica ederim"', 'hint: "Önemli değil"'],
    ['hint: "Buradan uzak mı?"', 'hint: "Buradan yakın mı?"'],
    ['hint: "Yürüyerek 10 dakika"', 'hint: "Arabayla 5 dakika"'],
    ['hint: "Müzenin yanında"', 'hint: "Kütüphanenin karşısında"'],
    ['hint: "Nezaket çok önemli"', 'hint: "Saygı çok önemli"'],
    ['hint: "Daha hafif"', 'hint: "Daha kolay"'],
    ['hint: "Hoca dersi açıklıyor"', 'hint: "Öğrenci soruyu cevaplıyor"'],
    
    // FILL_BLANK sentence duplicates
    ['sentence: "Où est la ___?"', 'sentence: "Où se trouve le ___?"'],
    ['sentence: "La valise est ___ (perdre)."', 'sentence: "La clé est ___ (trouver)."'],
    ['sentence: "Ne ___ pas le four !"', 'sentence: "Ne ___ pas la porte !"'],
    ['sentence: "On se retrouve ___ le métro."', 'sentence: "On se retrouve ___ la gare."'],
    ['sentence: "Je suis ___."', 'sentence: "Elle est ___."'],
    ['sentence: "Je vous en ___."', 'sentence: "Je vous en remercie ___."'],
    ['sentence: "Je suis ___ ligne."', 'sentence: "Je reste ___ ligne."'],

    // LISTENING audioText duplicates
    ['audioText: "Servez chaud"', 'audioText: "Servez froid"'],
]);

console.log('=== FIXING FR-A1-PART2 ===\n');
fixByContent('questions-fr-a1-part2.ts', [
    ['hint: "Avrupa"', 'hint: "Asya"'],
    ['sentence: "Elle est ___."', 'sentence: "Il est ___."'],
]);

console.log('=== VERIFY FR-B1 FIXES ===\n');
// Check if FR-B1 was properly fixed
const frb1Content = fs.readFileSync(path.join(LIB, 'questions-fr-b1.ts'), 'utf8');
const checks = [
    'Maaş beklentileriniz nelerdir?',
    'Gülümseyerek konuştu.',
    'Il mange ___ regardant la télé.',
    'Elle ___ une robe noire.',
    'La ___ est confirmée.'
];
checks.forEach(c => {
    const count = (frb1Content.match(new RegExp(c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    console.log('  FR-B1 "' + c.substring(0,40) + '": ' + count + ' occurrence(s) ' + (count <= 1 ? '✅' : '❌ STILL DUPLICATE'));
});

console.log('\n=== ALL FIXES COMPLETE ===');
