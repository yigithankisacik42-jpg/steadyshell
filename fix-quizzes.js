const fs = require('fs');
const file = 'c:/Users/yiğithan/Desktop/steady shell/steady shell/lib/questions-fr-a2.ts';
let content = fs.readFileSync(file, 'utf8');

// The marker for newly inserted quizzes at the bottom
const newStartMarker = "// Unit 350 Quiz 1: Doğa ve Piknik (Kelime Bilgisi)";
const newEndMarker = "const unit360Quiz1: Question[] = [";

if (!content.includes(newStartMarker)) {
    console.log("New start marker not found!");
    process.exit(1);
}

const newStartIndex = content.lastIndexOf(newStartMarker);
const newEndIndex = content.lastIndexOf(newEndMarker);

// Extract the new quizzes string
let newQuizzesText = content.substring(newStartIndex, newEndIndex).trim();

// Remove from the bottom FIRST to avoid messing up indices
content = content.substring(0, newStartIndex) + content.substring(newEndIndex);

// Now find the old quizzes and replace them
const oldStartMarker = "// UNIT 350: Arkadaş Buluşması - Teklif Etme";
const oldEndMarker = "// Unit 351 Quiz 1: Temel Telefon Kelimeleri";

const oldStartIndex = content.indexOf(oldStartMarker);
const oldEndIndex = content.indexOf(oldEndMarker);

if (oldStartIndex === -1 || oldEndIndex === -1) {
    console.log("Old markers not found!");
    process.exit(1);
}

// Replace the old chunk with the new chunk we extracted
content = content.substring(0, oldStartIndex) + newQuizzesText + "\n\n" + content.substring(oldEndIndex);

fs.writeFileSync(file, content, 'utf8');
console.log("Success! Old quizzes replaced with new quizzes in the correct location.");
