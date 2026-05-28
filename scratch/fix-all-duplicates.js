const fs = require('fs');
const path = require('path');

const LIB = path.join(__dirname, '..', 'lib');

// ============ FIXES FOR questions-fr-a2.ts ============
function fixFrA2() {
    const file = path.join(LIB, 'questions-fr-a2.ts');
    let content = fs.readFileSync(file, 'utf8');
    let fixCount = 0;
    const lines = content.split('\n');

    // Helper: replace a specific line (1-indexed)
    function replaceLine(lineNum, oldText, newText) {
        const idx = lineNum - 1;
        if (idx >= 0 && idx < lines.length && lines[idx].includes(oldText)) {
            lines[idx] = lines[idx].replace(oldText, newText);
            fixCount++;
            return true;
        }
        console.log(`  WARNING: Could not find "${oldText.substring(0,40)}" at line ${lineNum}`);
        return false;
    }

    console.log('Fixing questions-fr-a2.ts...');

    // Fix 1: line 1938 - duplicate hint "Renkleri uyumlu yapmak gerekir." (unit380Quiz4)
    replaceLine(1938, 'hint: "Renkleri uyumlu yapmak gerekir."', 'hint: "Aksesuarlar kıyafeti tamamlar."');
    replaceLine(1938, 'correctAnswer: "Il faut assortir les couleurs."', 'correctAnswer: "Les accessoires complètent la tenue."');

    // Fix 2: line 88 - duplicate hint "Maaş beklentileriniz nelerdir?" (unit361Quiz4)
    replaceLine(88, 'hint: "Maaş beklentileriniz nelerdir?"', 'hint: "Hangi pozisyona başvuruyorsunuz?"');
    replaceLine(88, 'correctAnswer: "Quelles sont vos prétentions salariales ?"', 'correctAnswer: "Pour quel poste postulez-vous ?"');

    // Fix 3: line 186 - duplicate hint "Gülümseyerek konuştu." (unit362Quiz4)
    replaceLine(186, 'hint: "Gülümseyerek konuştu."', 'hint: "Şarkı söyleyerek yürüdü."');
    replaceLine(186, 'correctAnswer: "Il a parlé en souriant."', 'correctAnswer: "Il a marché en chantant."');

    // Fix 4: line 674 - duplicate hint "Herkes çevre için çaba göstermelidir." (unit367Quiz4)
    replaceLine(674, 'hint: "Herkes çevre için çaba göstermelidir."', 'hint: "Doğayı korumak herkesin sorumluluğudur."');
    replaceLine(674, 'Il faut que tout le monde fasse', 'Protéger la nature est la responsabilité de');
    // Try alternate fix if the above didn't work
    if (fixCount < 5) {
        // If exact text didn't match, try broader approach
    }

    // Fix 5: line 1285 - duplicate hint "Gelenekler" (unit374Quiz1)
    replaceLine(1285, 'hint: "Gelenekler"', 'hint: "Törenler"');
    replaceLine(1285, 'correctAnswer: "Les traditions"', 'correctAnswer: "Les cérémonies"');

    // Fix 6: line 90 - duplicate FILL_BLANK "___-vous m" (unit361Quiz4) same answer "Pourriez"
    replaceLine(90, '"Pourriez"', '"Aimeriez"');
    replaceLine(90, '___-vous m', 'Souhaiteriez-___');

    // Fix 7: line 521 - duplicate FILL_BLANK "Il mange ___ regardant la télé." (unit366Quiz2)
    replaceLine(521, 'Il mange ___ regardant la télé.', 'Il travaille ___ écoutant de la musique.');

    // Fix 8: line 284 - duplicate FILL_BLANK "Voici l" (unit363Quiz4) same answer "qui"
    replaceLine(284, 'Voici l', 'Connaissez-vous l');

    // Fix 9: line 608 - duplicate FILL_BLANK "Beaucoup d" (unit367Quiz1) 
    replaceLine(608, '"espèces"', '"animaux"');
    
    // Fix 10: line 648 - duplicate FILL_BLANK "Beaucoup d" (unit367Quiz3)
    replaceLine(648, '"extinction"', '"habitats"');

    // Fix 11: line 683 - duplicate FILL_BLANK "Il faut qu" (unit367Quiz4)
    replaceLine(683, '"finissent"', '"participent"');

    // Fix 12: line 877 - duplicate FILL_BLANK "Bien qu" (unit369Quiz4)
    replaceLine(877, '"étudie"', '"travaille"');

    // Fix 13: line 871 - duplicate FILL_BLANK "Je veux t" (unit369Quiz4)
    replaceLine(871, '"aies"', '"réussisses"');

    // Fix 14: line 1925 - duplicate FILL_BLANK "Je ___ une veste." (unit380Quiz4)
    replaceLine(1925, 'Je ___ une veste.', 'Je ___ un manteau.');

    // Fix 15: line 1926 - duplicate FILL_BLANK "Elle ___ une robe noire." (unit380Quiz4) same answer "porte"
    replaceLine(1926, 'Elle ___ une robe noire.', 'Elle ___ un chapeau élégant.');

    // Fix 16: line 2219 - duplicate FILL_BLANK "La ___ est confirmée." (unit383Quiz4)
    replaceLine(2219, 'La ___ est confirmée.', 'La ___ est vérifiée.');

    // Fix 17-23: LISTENING audioText duplicates - change the second occurrence
    // line 888 - "Recycler" duplicate (unit370Quiz1)
    replaceLine(888, 'audioText: "Recycler"', 'audioText: "Réutiliser"');
    replaceLine(888, '"Recycler"', '"Réutiliser"'); // fix in answers too if needed

    // line 1845 - "La planète" duplicate (unit379Quiz4)
    replaceLine(1845, 'audioText: "La planète"', 'audioText: "Le système solaire"');

    // line 1459 - "Le poème" duplicate (unit375Quiz4)
    replaceLine(1459, 'audioText: "Le poème"', 'audioText: "Le roman"');
    replaceLine(1459, '"Le poème"', '"Le roman"');

    // line 1458 - "Le théâtre" duplicate (unit375Quiz4)
    replaceLine(1458, 'audioText: "Le théâtre"', 'audioText: "La danse"');
    replaceLine(1458, '"Le théâtre"', '"La danse"');

    // line 1557 - "La constitution" duplicate (unit376Quiz4)
    replaceLine(1557, 'audioText: "La constitution"', 'audioText: "Le parlement"');
    replaceLine(1557, '"Anayasa"', '"Parlamento"');

    // line 1770 - "Le télescope" duplicate (unit379Quiz1)
    replaceLine(1770, 'audioText: "Le télescope"', 'audioText: "Le microscope"');
    replaceLine(1770, '"Le télescope"', '"Le microscope"');

    // line 1847 - "La lune" duplicate (unit379Quiz4)
    replaceLine(1847, 'audioText: "La lune"', 'audioText: "Les étoiles"');
    replaceLine(1847, '"La lune"', '"Les étoiles"');

    // line 1942 - "La soie" duplicate (unit380Quiz4)
    replaceLine(1942, 'audioText: "La soie"', 'audioText: "Le velours"');
    replaceLine(1942, '"La soie"', '"Le velours"');

    // line 1944 - "Le cuir" duplicate (unit380Quiz4)
    replaceLine(1944, 'audioText: "Le cuir"', 'audioText: "Le lin"');
    replaceLine(1944, '"Le cuir"', '"Le lin"');

    // line 2041 - "La livraison" duplicate (unit381Quiz4)
    replaceLine(2041, 'audioText: "La livraison"', 'audioText: "Le remboursement"');
    replaceLine(2041, '"Teslimat"', '"İade"');

    // line 2139 - "La concurrence" duplicate (unit382Quiz4)
    replaceLine(2139, 'audioText: "La concurrence"', 'audioText: "Le marché"');
    replaceLine(2139, '"La concurrence"', '"Le marché"');

    // line 2508 - "La liberté d" duplicate (unit386Quiz4) 
    replaceLine(2508, 'audioText: "La liberté d', 'audioText: "Le droit de vote');

    // Rebuild and save
    content = lines.join('\n');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`  Fixed ${fixCount} replacements in questions-fr-a2.ts`);
}

// ============ FIXES FOR questions-fr-b1.ts ============
function fixFrB1() {
    const file = path.join(LIB, 'questions-fr-b1.ts');
    let content = fs.readFileSync(file, 'utf8');
    let fixCount = 0;
    const lines = content.split('\n');

    function replaceLine(lineNum, oldText, newText) {
        const idx = lineNum - 1;
        if (idx >= 0 && idx < lines.length && lines[idx].includes(oldText)) {
            lines[idx] = lines[idx].replace(oldText, newText);
            fixCount++;
            return true;
        }
        console.log(`  WARNING: Could not find "${oldText.substring(0,40)}" at line ${lineNum}`);
        return false;
    }

    console.log('Fixing questions-fr-b1.ts...');

    // Duplicate hints
    replaceLine(1938, 'hint: "Renkleri uyumlu yapmak gerekir."', 'hint: "Kumaş kalitesi önemlidir."');
    replaceLine(88, 'hint: "Maaş beklentileriniz nelerdir?"', 'hint: "İş deneyiminiz kaç yıl?"');
    replaceLine(186, 'hint: "Gülümseyerek konuştu."', 'hint: "Koşarak geldi."');
    replaceLine(674, 'hint: "Herkes çevre için çaba göstermelidir."', 'hint: "Atıkları azaltmalıyız."');
    replaceLine(1285, 'hint: "Gelenekler"', 'hint: "Festivaller"');

    // Duplicate FILL_BLANKs
    replaceLine(90, '___-vous m', '___-vous l');
    replaceLine(521, 'Il mange ___ regardant la télé.', 'Elle étudie ___ buvant du café.');
    replaceLine(284, 'Voici l', 'Je connais l');
    replaceLine(608, '"espèces"', '"forêts"');
    replaceLine(648, '"extinction"', '"pollution"');
    replaceLine(683, '"finissent"', '"agissent"');
    replaceLine(877, '"étudie"', '"parte"');
    replaceLine(871, '"aies"', '"viennes"');
    replaceLine(1925, 'Je ___ une veste.', 'Je ___ des chaussures.');
    replaceLine(1926, 'Elle ___ une robe noire.', 'Elle ___ des lunettes de soleil.');
    replaceLine(2219, 'La ___ est confirmée.', 'La ___ est publiée.');

    // Duplicate audio
    replaceLine(888, 'audioText: "Recycler"', 'audioText: "Composter"');
    replaceLine(1845, 'audioText: "La planète"', 'audioText: "Le cosmos"');
    replaceLine(1459, 'audioText: "Le poème"', 'audioText: "La nouvelle"');
    replaceLine(1458, 'audioText: "Le théâtre"', 'audioText: "Le cinéma"');
    replaceLine(1557, 'audioText: "La constitution"', 'audioText: "La démocratie"');
    replaceLine(1770, 'audioText: "Le télescope"', 'audioText: "Le satellite"');
    replaceLine(1847, 'audioText: "La lune"', 'audioText: "Le soleil"');
    replaceLine(1942, 'audioText: "La soie"', 'audioText: "La laine"');
    replaceLine(1944, 'audioText: "Le cuir"', 'audioText: "Le coton"');
    replaceLine(2041, 'audioText: "La livraison"', 'audioText: "Le colis"');
    replaceLine(2139, 'audioText: "La concurrence"', 'audioText: "La stratégie"');
    replaceLine(2508, 'audioText: "La liberté d', 'audioText: "Les droits de l');

    content = lines.join('\n');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`  Fixed ${fixCount} replacements in questions-fr-b1.ts`);
}

// ============ FIXES FOR questions-fr-a1.ts ============
function fixFrA1() {
    const file = path.join(LIB, 'questions-fr-a1.ts');
    let content = fs.readFileSync(file, 'utf8');
    let fixCount = 0;
    const lines = content.split('\n');

    function replaceLine(lineNum, oldText, newText) {
        const idx = lineNum - 1;
        if (idx >= 0 && idx < lines.length && lines[idx].includes(oldText)) {
            lines[idx] = lines[idx].replace(oldText, newText);
            fixCount++;
            return true;
        }
        console.log(`  WARNING: Could not find "${oldText.substring(0,40)}" at line ${lineNum}`);
        return false;
    }

    console.log('Fixing questions-fr-a1.ts...');

    // Fix 1: line 110 - duplicate FILL_BLANK "Comment ___ tu?" (unit301Quiz4)
    replaceLine(110, 'Comment ___ tu?', 'Comment ___-vous?');
    replaceLine(110, '"vas"', '"allez"');

    // Fix 2: line 145 - duplicate audioText "Je ne comprends pas" (unit302Quiz2)
    replaceLine(145, 'audioText: "Je ne comprends pas"', 'audioText: "Je ne sais pas"');

    content = lines.join('\n');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`  Fixed ${fixCount} replacements in questions-fr-a1.ts`);
}

// ============ FIXES FOR questions-fr-a1-part2.ts ============
function fixFrA1Part2() {
    const file = path.join(LIB, 'questions-fr-a1-part2.ts');
    let content = fs.readFileSync(file, 'utf8');
    let fixCount = 0;
    const lines = content.split('\n');

    function replaceLine(lineNum, oldText, newText) {
        const idx = lineNum - 1;
        if (idx >= 0 && idx < lines.length && lines[idx].includes(oldText)) {
            lines[idx] = lines[idx].replace(oldText, newText);
            fixCount++;
            return true;
        }
        console.log(`  WARNING: Could not find "${oldText.substring(0,40)}" at line ${lineNum}`);
        return false;
    }

    console.log('Fixing questions-fr-a1-part2.ts...');

    // Fix 1: line 345 - duplicate hint "Avrupa" (unit307Quiz3)
    replaceLine(345, 'hint: "Avrupa"', 'hint: "Asya"');
    replaceLine(345, "correctAnswer: \"L'Europe\"", "correctAnswer: \"L'Asie\"");

    // Fix 2: line 369 - duplicate FILL_BLANK "Elle est ___." (unit307Quiz4)
    replaceLine(369, 'Elle est ___.', 'Il est ___.');

    content = lines.join('\n');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`  Fixed ${fixCount} replacements in questions-fr-a1-part2.ts`);
}

// ============ FIXES FOR questions-fr-a1-part3.ts ============
function fixFrA1Part3() {
    const file = path.join(LIB, 'questions-fr-a1-part3.ts');
    let content = fs.readFileSync(file, 'utf8');
    let fixCount = 0;
    const lines = content.split('\n');

    function replaceLine(lineNum, oldText, newText) {
        const idx = lineNum - 1;
        if (idx >= 0 && idx < lines.length && lines[idx].includes(oldText)) {
            lines[idx] = lines[idx].replace(oldText, newText);
            fixCount++;
            return true;
        }
        console.log(`  WARNING: Could not find "${oldText.substring(0,40)}" at line ${lineNum}`);
        return false;
    }

    console.log('Fixing questions-fr-a1-part3.ts...');

    // Fix: line 65 - duplicate FILL_BLANK "Elle travaille comme ___." (unit308Quiz3)
    replaceLine(65, 'Elle travaille comme ___.', 'Mon père travaille comme ___.');

    content = lines.join('\n');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`  Fixed ${fixCount} replacements in questions-fr-a1-part3.ts`);
}

// ============ RUN ALL FIXES ============
console.log('=== STARTING DUPLICATE FIXES ===\n');
fixFrA1();
fixFrA1Part2();
fixFrA1Part3();
fixFrA2();
fixFrB1();
console.log('\n=== ALL FIXES COMPLETE ===');
