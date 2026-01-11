/**
 * İspanyolca aksanları normalize eder - Türk klavyeler için
 * á, é, í, ó, ú, ü, ñ gibi karakterleri basit ASCII'ye çevirir
 */
export function normalizeSpanish(text: string): string {
    if (!text) return "";

    const accentMap: { [key: string]: string } = {
        'á': 'a', 'à': 'a', 'ä': 'a', 'â': 'a',
        'é': 'e', 'è': 'e', 'ë': 'e', 'ê': 'e',
        'í': 'i', 'ì': 'i', 'ï': 'i', 'î': 'i',
        'ó': 'o', 'ò': 'o', 'ö': 'o', 'ô': 'o',
        'ú': 'u', 'ù': 'u', 'ü': 'u', 'û': 'u',
        'ñ': 'n',
        'ç': 'c',
        '¿': '', '¡': '',
        'Á': 'A', 'À': 'A', 'Ä': 'A', 'Â': 'A',
        'É': 'E', 'È': 'E', 'Ë': 'E', 'Ê': 'E',
        'Í': 'I', 'Ì': 'I', 'Ï': 'I', 'Î': 'I',
        'Ó': 'O', 'Ò': 'O', 'Ö': 'O', 'Ô': 'O',
        'Ú': 'U', 'Ù': 'U', 'Ü': 'U', 'Û': 'U',
        'Ñ': 'N',
        'Ç': 'C',
    };

    return text
        .split('')
        .map(char => accentMap[char] || char)
        .join('')
        .toLowerCase()
        // Tüm noktalama işaretlerini kaldır
        .replace(/[?!.,;:'"¿¡]/g, '')
        // Birden fazla boşluğu tek boşluğa çevir
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * İki cevabı aksan duyarsız karşılaştırır
 * Returns true if they match (ignoring accents)
 */
export function compareAnswers(userAnswer: string, correctAnswer: string): boolean {
    const normalizedUser = normalizeSpanish(userAnswer);
    const normalizedCorrect = normalizeSpanish(correctAnswer);

    // Debug için konsola yaz
    console.log('User:', normalizedUser, '| Correct:', normalizedCorrect, '| Match:', normalizedUser === normalizedCorrect);

    return normalizedUser === normalizedCorrect;
}

/**
 * Kullanıcının cevabında eksik aksan var mı?
 * Returns true if user answer is correct but missing accents
 */
export function hasMissingAccents(userAnswer: string, correctAnswer: string): boolean {
    // Normalize both
    const normalizedUser = normalizeSpanish(userAnswer);
    const normalizedCorrect = normalizeSpanish(correctAnswer);

    // If normalized versions match but original user input differs from correct answer
    if (normalizedUser === normalizedCorrect) {
        // Check if correct answer has accents that user didn't include
        const answerClean = correctAnswer.toLowerCase().replace(/[?!.,;:'"¿¡]/g, '').replace(/\s+/g, ' ').trim();
        const userClean = userAnswer.toLowerCase().replace(/[?!.,;:'"¿¡]/g, '').replace(/\s+/g, ' ').trim();
        return answerClean !== userClean;
    }
    return false;
}
