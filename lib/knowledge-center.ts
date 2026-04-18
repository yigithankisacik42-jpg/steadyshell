/**
 * SteadyShell Knowledge Center - Offline Engine
 * Unifies grammar, vocabulary, and scenario hints under a single rule-based system.
 */

import { curriculum, findUnitById } from './curriculum';
import { getEnglishA1GrammarForUnit } from './grammar-en-a1';
import { getEnglishA2GrammarForUnit } from './grammar-en-a2';
import { getFrenchA1GrammarForUnit } from './grammar-fr-a1';
import { getGermanA1GrammarForUnit } from './grammar-de-a1';
// Note: We can expand these as needed

export type SupportedLang = "es" | "en" | "fr" | "de";

export interface KnowledgeResult {
    unitId: number;
    title: string;
    description: string;
    langCode: string;
    levelCode: string;
}

/**
 * Normalizes text for keyword matching
 */
function normalizeText(input: string): string {
    return input.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s?]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

/**
 * Searches the curriculum for units matching the query keywords
 */
export function searchKnowledgeBase(query: string, langCode: string): KnowledgeResult[] {
    const normalizedQuery = normalizeText(query);
    const results: KnowledgeResult[] = [];
    
    const langCurriculum = curriculum.find(c => c.langCode === langCode);
    if (!langCurriculum) return [];

    langCurriculum.levels.forEach(level => {
        level.units.forEach(unit => {
            const normalizedTitle = normalizeText(unit.title);
            const normalizedDesc = normalizeText(unit.description);
            
            // Basic keyword matching
            if (normalizedTitle.includes(normalizedQuery) || normalizedDesc.includes(normalizedQuery)) {
                results.push({
                    unitId: unit.id,
                    title: unit.title,
                    description: unit.description,
                    langCode: langCode,
                    levelCode: level.levelCode
                });
            }
        });
    });

    return results.slice(0, 5); // Return top 5 matches
}

/**
 * Maps common mistakes or questions to specific Unit IDs for immediate feedback
 */
const HINT_MAP: Record<string, number> = {
    // English
    "to be": 101,
    "am is are": 101,
    "numbers": 102,
    "there is": 102,
    "possessive": 103,
    "my your": 103,
    "a an the": 104,
    "articles": 104,
    "some any": 105,
    "countable": 106,
    "in on at": 107,
    "prepositions": 107,
    
    // Spanish (example mappings)
    "ser": 1,
    "estar": 9,
    "plural": 2,
    "familia": 3,
    "color": 4,
    "querer": 5,

    // French
    "salut": 301,
    "alphabet": 302,
    "nombres": 303,
    "famille": 305,
    "jours": 306,
    "metier": 308,
    "corps": 311,
    "vetements": 312,
    "nourriture": 313,
    "boisson": 314,
    "heure": 315,
    "meteo": 318,
    "ville": 320,
    "restaurant": 326,
    "animaux": 328,

    // German
    "hallo": 501,
    "vorstellen": 501,
    "zahlen": 502,
    "familie": 503,
    "essen": 505,
    "trinken": 506,
    "tage": 507,
    "mobel": 510,
    "korper": 511,
    "kleidung": 512,
    "tiere": 513,
    "berufe": 514,
    "stadt": 515,
    "uhrzeit": 518,
    "wetter": 519,
    "hobbys": 520,
    "artikel": 526,
    "akkusativ": 527,
};

/**
 * Returns a unit recommendation based on text analysis
 */
export function getKnowledgeHint(text: string): KnowledgeResult | null {
    const normalized = normalizeText(text);
    
    for (const [key, unitId] of Object.entries(HINT_MAP)) {
        if (normalized.includes(key)) {
            const found = findUnitById(unitId);
            if (found) {
                return {
                    unitId: found.unit.id,
                    title: found.unit.title,
                    description: found.unit.description,
                    langCode: found.langCode,
                    levelCode: found.levelCode
                };
            }
        }
    }
    
    return null;
}
