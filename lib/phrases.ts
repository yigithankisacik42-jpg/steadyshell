/**
 * SteadyShell Kalıplar (Phrases) Veritabanı - İspanyolca A1
 * Günlük hayatta sık kullanılan kalıplar ve deyimler
 */

export interface Phrase {
    target: string;
    native: string;
    pronunciation: string;
}

export interface UnitPhrases {
    unitId: number;
    title: string;
    level?: string;
    phrases: Phrase[];
}

// ... (Existing content remains same until import section)

import { getA2PhrasesForUnit } from './phrases-a2';
import { getB1PhrasesForUnit } from './phrases-b1';
import { getB2PhrasesForUnit } from './phrases-b2';
import { getEnglishA1PhrasesForUnit } from './phrases-en-a1';
import { getEnglishA2PhrasesForUnit } from './phrases-en-a2';
import { getFrenchA1PhrasesForUnit } from './phrases-fr-a1';
import { getFrenchA2PhrasesForUnit } from './phrases-fr-a2';
import { getUnit } from './curriculum';

export function getPhrasesForUnit(unitId: number): UnitPhrases {
    // === İNGİLİZCE ÜNİTELER (ID 101-220) ===
    // İngilizce A1 (101-130)
    if (unitId >= 101 && unitId <= 130) {
        const enPhrases = getEnglishA1PhrasesForUnit(unitId);
        const unitInfo = getUnit("en", "A1", unitId);
        return {
            unitId: enPhrases.unitId,
            title: unitInfo?.title || enPhrases.title,
            level: "A1",
            phrases: enPhrases.phrases.map(p => ({
                target: p.phrase,
                native: p.meaning,
                pronunciation: ""
            }))
        };
    }

    // İngilizce A2 (131-160)
    if (unitId >= 131 && unitId <= 160) {
        const enPhrases = getEnglishA2PhrasesForUnit(unitId);
        const unitInfo = getUnit("en", "A2", unitId);
        return {
            unitId: enPhrases.unitId,
            title: unitInfo?.title || enPhrases.title,
            level: "A2",
            phrases: enPhrases.phrases.map(p => ({
                target: p.phrase,
                native: p.meaning,
                pronunciation: ""
            }))
        };
    }

    // Fransızca A1 (301-330)
    if (unitId >= 301 && unitId <= 330) {
        const frPhrases = getFrenchA1PhrasesForUnit(unitId);
        if (frPhrases) {
            return {
                unitId: frPhrases.unitId,
                title: frPhrases.title,
                level: "A1",
                phrases: frPhrases.phrases.map(p => ({
                    target: p.text,
                    native: p.meaning,
                    pronunciation: p.pronunciation
                }))
            };
        }
    }

    // Fransızca A2 (331-360)
    if (unitId >= 331 && unitId <= 360) {
        const frA2Phrases = getFrenchA2PhrasesForUnit(unitId);
        if (frA2Phrases) {
            return {
                unitId: frA2Phrases.unitId,
                title: frA2Phrases.title,
                level: "A2",
                phrases: frA2Phrases.phrases.map(p => ({
                    target: p.text,
                    native: p.meaning,
                    pronunciation: p.pronunciation
                }))
            };
        }
    }

    // === İSPANYOLCA ÜNİTELER (ID 1-100) ===
    // B2 üniteleri (91-110) - curriculum.ts ile senkron
    if (unitId >= 91 && unitId <= 110) {
        const b2Phrases = getB2PhrasesForUnit(unitId);
        const unitInfo = getUnit("es", "B2", unitId);
        return {
            unitId,
            title: unitInfo?.title || `Ünite ${unitId}`,
            level: "B2",
            phrases: b2Phrases.map(p => ({
                target: p.target,
                native: p.native,
                pronunciation: p.pronunciation
            }))
        };
    }

    // B1 üniteleri (61-90) - curriculum.ts ile senkron
    if (unitId >= 61 && unitId <= 90) {
        const phrases = getB1PhrasesForUnit(unitId);
        const unitInfo = getUnit("es", "B1", unitId);

        return {
            unitId,
            title: unitInfo?.title || `Ünite ${unitId}`,
            level: "B1",
            phrases: phrases.map(p => ({
                target: p.target,
                native: p.native,
                pronunciation: p.pronunciation
            }))
        };
    }

    // A2 üniteleri (31-60) - curriculum.ts ile senkron
    if (unitId >= 31 && unitId <= 60) {
        const a2Phrases = getA2PhrasesForUnit(unitId);
        const unitInfo = getUnit("es", "A2", unitId);
        // getA2PhrasesForUnit returns UnitPhrases, merge with info
        return {
            ...a2Phrases,
            title: unitInfo?.title || a2Phrases.title,
            level: "A2"
        };
    }

    // A1 üniteleri (1-30)
    const phrases: { [key: number]: UnitPhrases } = {
        1: unit1Phrases, 2: unit2Phrases, 3: unit3Phrases, 4: unit4Phrases, 5: unit5Phrases,
        6: unit6Phrases, 7: unit7Phrases, 8: unit8Phrases, 9: unit9Phrases, 10: unit10Phrases,
        11: unit11Phrases, 12: unit12Phrases, 13: unit13Phrases, 14: unit14Phrases, 15: unit15Phrases,
        16: unit16Phrases, 17: unit17Phrases, 18: unit18Phrases, 19: unit19Phrases, 20: unit20Phrases,
        21: unit21Phrases, 22: unit22Phrases, 23: unit23Phrases, 24: unit24Phrases, 25: unit25Phrases,
        26: unit26Phrases, 27: unit27Phrases, 28: unit28Phrases, 29: unit29Phrases, 30: unit30Phrases
    };

    if (phrases[unitId]) {
        const unitInfo = getUnit("es", "A1", unitId);
        return {
            ...phrases[unitId],
            title: unitInfo?.title || phrases[unitId].title,
            level: "A1"
        };
    }

    return { unitId, title: "Kalıplar", level: "A1", phrases: [] };
}
const unit1Phrases: UnitPhrases = {
    unitId: 1, title: "Tanışma Kalıpları",
    phrases: [
        { target: "Mucho gusto", native: "Tanıştığımıza memnun oldum", pronunciation: "MU-cho GUS-to" },
        { target: "Encantado / Encantada", native: "Memnun oldum (Erkek/Kadın söyler)", pronunciation: "en-kan-TA-do" },
        { target: "¿Cómo te llamas?", native: "Adın ne?", pronunciation: "KO-mo te YA-mas" },
        { target: "Me llamo...", native: "Benim adım...", pronunciation: "me YA-mo" },
        { target: "¿De dónde eres?", native: "Nerelisin?", pronunciation: "de DON-de E-res" },
        { target: "Soy de Turquía", native: "Türkiyeliyim", pronunciation: "soy de tur-KI-a" },
        { target: "Bienvenido", native: "Hoş geldin", pronunciation: "bien-ve-NI-do" },
        { target: "Igualmente", native: "Ben de (memnun oldum)", pronunciation: "i-gual-MEN-te" },
        { target: "¿Cómo se llama usted?", native: "Adınız ne? (Resmi)", pronunciation: "KO-mo se YA-ma us-TED" },
        { target: "Es un placer", native: "Bu bir zevk", pronunciation: "es un pla-SER" },
        { target: "¿Y tú?", native: "Ya sen?", pronunciation: "i TU" },
        { target: "Soy turco/turca", native: "Türküm", pronunciation: "soy TUR-ko/TUR-ka" },
        { target: "El gusto es mío", native: "Zevk benim", pronunciation: "el GUS-to es MI-o" },
        { target: "Permite que me presente", native: "Kendimi tanıtmama izin ver", pronunciation: "per-MI-te ke me pre-SEN-te" },
        { target: "Nos vemos pronto", native: "Yakında görüşürüz", pronunciation: "nos VE-mos PRON-to" }
    ]
};

// ===== ÜNİTE 2: SAYILAR VE MİKTAR =====
const unit2Phrases: UnitPhrases = {
    unitId: 2, title: "Sayılar ve Miktar",
    phrases: [
        { target: "Un poco", native: "Biraz", pronunciation: "un PO-ko" },
        { target: "Mucho", native: "Çok", pronunciation: "MU-cho" },
        { target: "Demasiado", native: "Çok fazla (aşırı)", pronunciation: "de-ma-SIA-do" },
        { target: "¿Cuántos años tienes?", native: "Kaç yaşındasın?", pronunciation: "KUAN-tos A-nyos TIE-nes" },
        { target: "Tengo ... años", native: "... yaşındayım", pronunciation: "TEN-go ... A-nyos" },
        { target: "Dame dos, por favor", native: "Bana iki tane ver lütfen", pronunciation: "DA-me dos por fa-VOR" },
        { target: "Es el número uno", native: "O bir numara (en iyisi)", pronunciation: "es el NU-me-ro U-no" },
        { target: "Una vez más", native: "Bir kez daha", pronunciation: "U-na ves mas" },
        { target: "Nada más", native: "Başka bir şey yok", pronunciation: "NA-da mas" },
        { target: "Bastante", native: "Yeterince / Epey", pronunciation: "bas-TAN-te" },
        { target: "Algunos / Algunas", native: "Bazıları / Birkaç tane", pronunciation: "al-GU-nos" },
        { target: "La mitad", native: "Yarısı", pronunciation: "la mi-TAD" },
        { target: "El doble", native: "İki katı", pronunciation: "el DOB-le" },
        { target: "Por lo menos", native: "En azından", pronunciation: "por lo ME-nos" },
        { target: "Cada uno", native: "Her biri", pronunciation: "KA-da U-no" }
    ]
};

// ===== ÜNİTE 3: AİLE HAKKINDA KONUŞMA =====
const unit3Phrases: UnitPhrases = {
    unitId: 3, title: "Aile Sohbetleri",
    phrases: [
        { target: "Te presento a mi madre", native: "Seni annemle tanıştırayım", pronunciation: "te pre-SEN-to a mi MAD-re" },
        { target: "¿Tienes hermanos?", native: "Kardeşin var mı?", pronunciation: "TIE-nes er-MA-nos" },
        { target: "Soy hijo único", native: "Tek çocuğum", pronunciation: "soy I-ho U-ni-ko" },
        { target: "Mi familia es grande", native: "Ailem geniştir/büyüktür", pronunciation: "mi fa-MI-lia es GRAN-de" },
        { target: "Vivo con mis padres", native: "Ailemle yaşıyorum", pronunciation: "VI-vo con mis PAD-res" },
        { target: "Mis abuelos viven lejos", native: "Dedemler uzakta yaşıyor", pronunciation: "mis a-BUE-los VI-ven LE-hos" },
        { target: "El hermano mayor", native: "Abi (büyük erkek kardeş)", pronunciation: "el er-MA-no ma-YOR" },
        { target: "La hermana menor", native: "Kız kardeş (küçük)", pronunciation: "la er-MA-na me-NOR" },
        { target: "Somos una familia unida", native: "Birbirimize bağlı bir aileyiz", pronunciation: "SO-mos u-na fa-MI-lia u-NI-da" },
        { target: "¿Estás casado/a?", native: "Evli misin?", pronunciation: "es-TAS ka-SA-do" },
        { target: "Estoy soltero/a", native: "Bekarım", pronunciation: "es-TOY sol-TE-ro" },
        { target: "Tengo dos hijos", native: "İki çocuğum var", pronunciation: "TEN-go dos I-hos" },
        { target: "Mi pareja", native: "Partnerim / Eşim", pronunciation: "mi pa-RE-ha" },
        { target: "Nos llevamos bien", native: "İyi anlaşıyoruz", pronunciation: "nos ye-VA-mos bien" },
        { target: "Es como un hermano para mí", native: "O benim için bir kardeş gibi", pronunciation: "es KO-mo un er-MA-no pa-ra MI" }
    ]
};

// ===== ÜNİTE 4: RENKLİ DÜNYA =====
const unit4Phrases: UnitPhrases = {
    unitId: 4, title: "Renklerle İfade",
    phrases: [
        { target: "Me gusta el color rojo", native: "Kırmızı rengi severim", pronunciation: "me GUS-ta el co-LOR RO-ho" },
        { target: "Lo quiero en azul", native: "Mavisini istiyorum", pronunciation: "lo KIE-ro en a-SUL" },
        { target: "Es muy colorido", native: "Çok renkli", pronunciation: "es muy co-lo-RI-do" },
        { target: "Blanco y negro", native: "Siyah beyaz", pronunciation: "BLAN-co i NEG-ro" },
        { target: "Ponerse rojo", native: "Kızarmak (utanmak)", pronunciation: "po-NER-se RO-ho" },
        { target: "Príncipe azul", native: "Beyaz atlı prens (İspanyolcada mavi!)", pronunciation: "PRIN-ci-pe a-SUL" },
        { target: "Verlo todo negro", native: "Her şeyi karanlık (kötü) görmek", pronunciation: "VER-lo TO-do NEG-ro" },
        { target: "Media naranja", native: "Ruh ikizi (Yarım portakal)", pronunciation: "ME-dia na-RAN-ha" },
        { target: "¿De qué color es?", native: "Hangi renk?", pronunciation: "de KE co-LOR es" },
        { target: "Es de color verde", native: "Yeşil rengi", pronunciation: "es de co-LOR VER-de" },
        { target: "Colores vivos", native: "Canlı renkler", pronunciation: "co-LO-res VI-vos" },
        { target: "Colores oscuros", native: "Koyu renkler", pronunciation: "co-LO-res os-KU-ros" },
        { target: "Colores claros", native: "Açık renkler", pronunciation: "co-LO-res KLA-ros" },
        { target: "Es mi color favorito", native: "En sevdiğim renk", pronunciation: "es mi co-LOR fa-vo-RI-to" },
        { target: "Parece gris", native: "Gri görünüyor", pronunciation: "pa-RE-ce gris" }
    ]
};

// ===== ÜNİTE 5: YEMEK ZAMANI =====
const unit5Phrases: UnitPhrases = {
    unitId: 5, title: "Afiyet Olsun",
    phrases: [
        { target: "¡Buen provecho!", native: "Afiyet olsun!", pronunciation: "buen pro-VE-cho" },
        { target: "Tengo hambre", native: "Açım", pronunciation: "TEN-go AM-bre" },
        { target: "La comida está deliciosa", native: "Yemek çok lezzetli", pronunciation: "la co-MI-da es-TA de-li-CIO-sa" },
        { target: "¿Me trae la cuenta?", native: "Hesabı getirebilir misiniz?", pronunciation: "me TRA-e la CUEN-ta" },
        { target: "Soy vegetariano", native: "Vejetaryenim", pronunciation: "soy ve-he-ta-RIA-no" },
        { target: "Sin cebolla, por favor", native: "Soğansız lütfen", pronunciation: "sin ce-BO-ya" },
        { target: "¿Qué recomiendas?", native: "Ne önerirsin?", pronunciation: "KE re-co-MIEN-das" },
        { target: "Estoy lleno", native: "Doydum", pronunciation: "es-TOY YE-no" },
        { target: "Una mesa para dos", native: "İki kişilik bir masa", pronunciation: "u-na ME-sa pa-ra dos" },
        { target: "¿Qué hay de comer?", native: "Yemek ne var?", pronunciation: "KE ay de co-MER" },
        { target: "El plato del día", native: "Günün tabağı", pronunciation: "el PLA-to del DI-a" },
        { target: "Para llevar", native: "Paket için / Götürmek için", pronunciation: "pa-ra ye-VAR" },
        { target: "Está muy rico", native: "Çok lezzetli", pronunciation: "es-TA muy RI-ko" },
        { target: "¿Me puede traer más pan?", native: "Daha fazla ekmek getirebilir misiniz?", pronunciation: "me PUE-de tra-ER mas pan" },
        { target: "Soy alérgico a...", native: "... alerjim var", pronunciation: "soy a-LER-hi-ko a" }
    ]
};

// ===== ÜNİTE 6: BİR ŞEYLER İÇMEK =====
const unit6Phrases: UnitPhrases = {
    unitId: 6, title: "İçecek Siparişi",
    phrases: [
        { target: "Tengo sed", native: "Susadım", pronunciation: "TEN-go sed" },
        { target: "Un café con leche", native: "Sütlü kahve lütfen", pronunciation: "un ca-FE con LE-che" },
        { target: "Sin azúcar", native: "Şekersiz", pronunciation: "sin a-SU-car" },
        { target: "Con hielo", native: "Buzlu", pronunciation: "con IE-lo" },
        { target: "¡Salud!", native: "Şerefe! / Çok yaşa!", pronunciation: "sa-LUD" },
        { target: "Invito yo", native: "Ben ismarliyorum / Benden", pronunciation: "in-VI-to YO" },
        { target: "¿Tomamos algo?", native: "Bir şeyler içelim mi?", pronunciation: "to-MA-mos AL-go" },
        { target: "Agua del tiempo", native: "Oda sıcaklığında su", pronunciation: "A-gua del TIEM-po" },
        { target: "Una cerveza, por favor", native: "Bir bira lütfen", pronunciation: "u-na cer-VE-sa por fa-VOR" },
        { target: "¿Tienen zumo de naranja?", native: "Portakal suyunuz var mı?", pronunciation: "TIE-nen SU-mo de na-RAN-ha" },
        { target: "Un café solo", native: "Sade kahve", pronunciation: "un ca-FE SO-lo" },
        { target: "Café descafeinado", native: "Kafeinsiz kahve", pronunciation: "ca-FE des-ca-fey-NA-do" },
        { target: "Otra ronda", native: "Bir tur daha", pronunciation: "OT-ra RON-da" },
        { target: "Un té con limón", native: "Limonlu çay", pronunciation: "un te con li-MON" },
        { target: "Agua mineral", native: "Maden suyu", pronunciation: "A-gua mi-ne-RAL" }
    ]
};

// ===== ÜNİTE 7: GÜNLER VE ZAMAN =====
const unit7Phrases: UnitPhrases = {
    unitId: 7, title: "Zaman Planlaması",
    phrases: [
        { target: "¿Qué día es hoy?", native: "Bugün günlerden ne?", pronunciation: "KE di-a es oy" },
        { target: "Hoy es lunes", native: "Bugün Pazartesi", pronunciation: "oy es LU-nes" },
        { target: "Hasta el lunes", native: "Pazartesiye kadar (görüşürüz)", pronunciation: "AS-ta el LU-nes" },
        { target: "El fin de semana", native: "Hafta sonu", pronunciation: "el fin de se-MA-na" },
        { target: "¿Cuándo es tu cumpleaños?", native: "Doğum günün ne zaman?", pronunciation: "KUAN-do es tu cum-ple-A-nyos" },
        { target: "El primero de enero", native: "Ocağın biri", pronunciation: "el pri-ME-ro de e-NE-ro" },
        { target: "Todos los días", native: "Her gün", pronunciation: "TO-dos los DI-as" },
        { target: "Ayer, hoy y mañana", native: "Dün, bugün ve yarın", pronunciation: "a-YER oy i ma-NYA-na" },
        { target: "La semana que viene", native: "Gelecek hafta", pronunciation: "la se-MA-na ke VIE-ne" },
        { target: "La semana pasada", native: "Geçen hafta", pronunciation: "la se-MA-na pa-SA-da" },
        { target: "El mes próximo", native: "Gelecek ay", pronunciation: "el mes PROK-si-mo" },
        { target: "Cada semana", native: "Her hafta", pronunciation: "KA-da se-MA-na" },
        { target: "¿Qué mes estamos?", native: "Hangi aydayız?", pronunciation: "KE mes es-TA-mos" },
        { target: "Estamos en diciembre", native: "Aralıktayız", pronunciation: "es-TA-mos en di-SIEM-bre" },
        { target: "Entre semana", native: "Hafta içi", pronunciation: "EN-tre se-MA-na" }
    ]
};

// ===== ÜNİTE 8: BÜYÜK SAYILAR =====
const unit8Phrases: UnitPhrases = {
    unitId: 8, title: "Alışveriş ve Fiyat",
    phrases: [
        { target: "¿Cuánto cuesta?", native: "Ne kadar? (Fiyatı)", pronunciation: "KUAN-to KUES-ta" },
        { target: "Es muy caro", native: "Çok pahalı", pronunciation: "es muy KA-ro" },
        { target: "Es barato", native: "Ucuz", pronunciation: "es ba-RA-to" },
        { target: "¿Hay descuento?", native: "İndirim var mı?", pronunciation: "ay des-CUEN-to" },
        { target: "Cien por cien", native: "Yüzde yüz", pronunciation: "cien por cien" },
        { target: "Cincuenta cincuenta", native: "Yarı yarıya", pronunciation: "cin-CUEN-ta cin-CUEN-ta" },
        { target: "Más o menos", native: "Aşağı yukarı", pronunciation: "mas o ME-nos" },
        { target: "Solo estoy mirando", native: "Sadece bakıyorum", pronunciation: "SO-lo es-TOY mi-RAN-do" },
        { target: "¿Cuánto es en total?", native: "Toplam ne kadar?", pronunciation: "KUAN-to es en to-TAL" },
        { target: "¿Aceptan tarjeta?", native: "Kart kabul ediyor musunuz?", pronunciation: "a-CEP-tan tar-HE-ta" },
        { target: "Quiero pagar en efectivo", native: "Nakit ödemek istiyorum", pronunciation: "KIE-ro pa-GAR en e-fek-TI-vo" },
        { target: "Es demasiado caro", native: "Çok fazla pahalı", pronunciation: "es de-ma-SIA-do KA-ro" },
        { target: "¿Tiene algo más barato?", native: "Daha ucuz bir şey var mı?", pronunciation: "TIE-ne AL-go mas ba-RA-to" },
        { target: "Me lo quedo", native: "Bunu alıyorum", pronunciation: "me lo KE-do" },
        { target: "El precio es justo", native: "Fiyat uygun", pronunciation: "el PRE-cio es HUS-to" }
    ]
};

// ===== ÜNİTE 9: EVİM GÜZEL EVİM =====
const unit9Phrases: UnitPhrases = {
    unitId: 9, title: "Ev Hali",
    phrases: [
        { target: "Bienvenido a mi casa", native: "Evime hoş geldin", pronunciation: "bien-ve-NI-do a mi KA-sa" },
        { target: "Estás en tu casa", native: "Kendi evinde gibi hisset", pronunciation: "es-TAS en tu KA-sa" },
        { target: "Voy a la cocina", native: "Mutfağa gidiyorum", pronunciation: "voy a la co-CI-na" },
        { target: "¿Dónde está el baño?", native: "Banyo nerede?", pronunciation: "DON-de es-TA el BA-nyo" },
        { target: "Abre la puerta", native: "Kapıyı aç", pronunciation: "A-bre la PUER-ta" },
        { target: "Cierra la ventana", native: "Pencereyi kapat", pronunciation: "CIE-rra la ven-TA-na" },
        { target: "Tocar el timbre", native: "Zili çalmak", pronunciation: "to-CAR el TIM-bre" },
        { target: "Hogar, dulce hogar", native: "Evim güzel evim", pronunciation: "o-GAR dul-ce o-GAR" },
        { target: "Subir las escaleras", native: "Merdivenleri çıkmak", pronunciation: "su-BIR las es-ka-LE-ras" },
        { target: "Bajar al sótano", native: "Bodruma inmek", pronunciation: "ba-HAR al SO-ta-no" },
        { target: "¿Tienes jardín?", native: "Bahçen var mı?", pronunciation: "TIE-nes har-DIN" },
        { target: "Vivo en un piso", native: "Dairede oturuyorum", pronunciation: "VI-vo en un PI-so" },
        { target: "El alquiler es alto", native: "Kira yüksek", pronunciation: "el al-ki-LER es AL-to" },
        { target: "Estoy buscando piso", native: "Ev arıyorum", pronunciation: "es-TOY bus-KAN-do PI-so" },
        { target: "Vive en el segundo piso", native: "İkinci katta oturuyor", pronunciation: "VI-ve en el se-GUN-do PI-so" }
    ]
};

// ===== ÜNİTE 10: EŞYALAR VE DÜZEN =====
const unit10Phrases: UnitPhrases = {
    unitId: 10, title: "Eşyalar",
    phrases: [
        { target: "Pon la mesa", native: "Masayı kur", pronunciation: "pon la ME-sa" },
        { target: "Siéntate en el sofá", native: "Koltuğa otur", pronunciation: "SIEN-ta-te en el so-FA" },
        { target: "La cama está hecha", native: "Yatak yapıldı (toplandı)", pronunciation: "la KA-ma es-TA E-cha" },
        { target: "¿Qué hay en la caja?", native: "Kutuda ne var?", pronunciation: "KE ay en la KA-ha" },
        { target: "Está debajo de la silla", native: "Sandalyenin altında", pronunciation: "es-TA de-BA-ho de la SI-ya" },
        { target: "Encima de la mesa", native: "Masanın üstünde", pronunciation: "en-CI-ma de la ME-sa" },
        { target: "Luz apagada", native: "Işık kapalı", pronunciation: "lus a-pa-GA-da" },
        { target: "Luz encendida", native: "Işık açık", pronunciation: "lus en-cen-DI-da" },
        { target: "Al lado del armario", native: "Dolabın yanında", pronunciation: "al LA-do del ar-MA-rio" },
        { target: "Detrás de la cortina", native: "Perdenin arkasında", pronunciation: "de-TRAS de la cor-TI-na" },
        { target: "Delante de la televisión", native: "Televizyonun önünde", pronunciation: "de-LAN-te de la te-le-vi-SION" },
        { target: "Entre las dos sillas", native: "İki sandalyenin arasında", pronunciation: "EN-tre las dos SI-yas" },
        { target: "Cerca de la ventana", native: "Pencerenin yakınında", pronunciation: "CER-ca de la ven-TA-na" },
        { target: "Lejos de la puerta", native: "Kapıdan uzakta", pronunciation: "LE-hos de la PUER-ta" },
        { target: "Ordenar el cuarto", native: "Odayı toplamak", pronunciation: "or-de-NAR el KUAR-to" }
    ]
};

// ===== ÜNİTE 11: SAĞLIK VE VÜCUT =====
const unit11Phrases: UnitPhrases = {
    unitId: 11, title: "Nasıl Hissediyorsun?",
    phrases: [
        { target: "Me duele la cabeza", native: "Başım ağrıyor", pronunciation: "me DUE-le la ca-BE-sa" },
        { target: "Me siento mal", native: "Kötü hissediyorum", pronunciation: "me SIEN-to mal" },
        { target: "Tengo fiebre", native: "Ateşim var", pronunciation: "TEN-go FIE-bre" },
        { target: "Necesito un médico", native: "Doktora ihtiyacım var", pronunciation: "ne-ce-SI-to un ME-di-ko" },
        { target: "Abre la boca", native: "Ağzını aç", pronunciation: "A-bre la BO-ka" },
        { target: "Lávate las manos", native: "Ellerini yıka", pronunciation: "LA-va-te las MA-nos" },
        { target: "Estoy enfermo", native: "Hastayım", pronunciation: "es-TOY en-FER-mo" },
        { target: "Que te mejores", native: "Geçmiş olsun", pronunciation: "ke te me-HO-res" },
        { target: "Tengo tos", native: "Öksürüğüm var", pronunciation: "TEN-go tos" },
        { target: "Me duele la garganta", native: "Boğazım ağrıyor", pronunciation: "me DUE-le la gar-GAN-ta" },
        { target: "Tengo gripe", native: "Grip oldum", pronunciation: "TEN-go GRI-pe" },
        { target: "¿Dónde está la farmacia?", native: "Eczane nerede?", pronunciation: "DON-de es-TA la far-MA-sia" },
        { target: "Necesito una receta", native: "Reçeteye ihtiyacım var", pronunciation: "ne-ce-SI-to u-na re-CE-ta" },
        { target: "Tomar medicinas", native: "İlaç almak", pronunciation: "to-MAR me-di-CI-nas" },
        { target: "Llamar a una ambulancia", native: "Ambulans çağırmak", pronunciation: "ya-MAR a u-na am-bu-LAN-sia" }
    ]
};

// ===== ÜNİTE 12: GİYİM KUŞAM =====
const unit12Phrases: UnitPhrases = {
    unitId: 12, title: "Alışverişde",
    phrases: [
        { target: "¿Me puedo probar esto?", native: "Bunu deneyebilir miyim?", pronunciation: "me PUE-do pro-BAR ES-to" },
        { target: "¿Tiene una talla más grande?", native: "Daha büyük bedeni var mı?", pronunciation: "TIE-ne u-na TA-ya mas GRAN-de" },
        { target: "Te queda bien", native: "Sana yakıştı (üstüne uydu)", pronunciation: "te KE-da bien" },
        { target: "Me lo llevo", native: "Bunu alıyorum", pronunciation: "me lo YE-vo" },
        { target: "Pagar con tarjeta", native: "Kartla ödemek", pronunciation: "pa-GAR con tar-HE-ta" },
        { target: "Pagar en efectivo", native: "Nakit ödemek", pronunciation: "pa-GAR en e-fec-TI-vo" },
        { target: "Está de moda", native: "Moda", pronunciation: "es-TA de MO-da" },
        { target: "Ponerse los zapatos", native: "Ayakkabılarını giymek", pronunciation: "po-NER-se los sa-PA-tos" },
        { target: "¿Tiene esto en otro color?", native: "Bunun başka rengi var mı?", pronunciation: "TIE-ne ES-to en OT-ro co-LOR" },
        { target: "Me queda pequeño", native: "Bana küçük geliyor", pronunciation: "me KE-da pe-KE-nyo" },
        { target: "¿Dónde están los probadores?", native: "Deneme kabinleri nerede?", pronunciation: "DON-de es-TAN los pro-ba-DO-res" },
        { target: "Quiero devolver esto", native: "Bunu iade etmek istiyorum", pronunciation: "KIE-ro de-vol-VER ES-to" },
        { target: "¿Tiene recibo?", native: "Fişiniz var mı?", pronunciation: "TIE-ne re-CI-bo" },
        { target: "Está en oferta", native: "İndirimde", pronunciation: "es-TA en o-FER-ta" },
        { target: "Ropa de verano", native: "Yaz kıyafetleri", pronunciation: "RO-pa de ve-RA-no" }
    ]
};

// ===== ÜNİTE 13: HAYVAN SEVGİSİ =====
const unit13Phrases: UnitPhrases = {
    unitId: 13, title: "Doğa ve Hayvanlar",
    phrases: [
        { target: "Tengo un perro", native: "Bir köpeğim var", pronunciation: "TEN-go un PE-rro" },
        { target: "Cuidado con el perro", native: "Köpeğe dikkat (Dikkat köpek var)", pronunciation: "cui-DA-do con el PE-rro" },
        { target: "Es muy lindo", native: "Çok tatlı/sevimli", pronunciation: "es muy LIN-do" },
        { target: "Me gustan los animales", native: "Hayvanları severim", pronunciation: "me GUS-tan los a-ni-MA-les" },
        { target: "El canto del pájaro", native: "Kuş ötüşü", pronunciation: "el CAN-to del PA-ha-ro" },
        { target: "Montar a caballo", native: "Ata binmek", pronunciation: "mon-TAR a ca-BA-yo" },
        { target: "Como pez en el agua", native: "Suda balık gibi (Rahat, doğal)", pronunciation: "CO-mo pes en el A-gua" },
        { target: "Lágrimas de cocodrilo", native: "Timsah gözyaşları", pronunciation: "LA-gri-mas de co-co-DRI-lo" },
        { target: "¿Tienes mascotas?", native: "Evcil hayvanın var mı?", pronunciation: "TIE-nes mas-KO-tas" },
        { target: "Mi gato se llama...", native: "Kedimin adı...", pronunciation: "mi GA-to se YA-ma" },
        { target: "Dar de comer al perro", native: "Köpeğe yemek vermek", pronunciation: "dar de co-MER al PE-rro" },
        { target: "Sacar a pasear al perro", native: "Köpeği gezdirmek", pronunciation: "sa-KAR a pa-se-AR al PE-rro" },
        { target: "Animales salvajes", native: "Vahşi hayvanlar", pronunciation: "a-ni-MA-les sal-VA-hes" },
        { target: "Animales domésticos", native: "Evcil hayvanlar", pronunciation: "a-ni-MA-les do-MES-ti-kos" },
        { target: "Es muy cariñoso", native: "Çok sevecen", pronunciation: "es muy ka-ri-NYO-so" }
    ]
};

// ===== ÜNİTE 14: İŞ HAYATI =====
const unit14Phrases: UnitPhrases = {
    unitId: 14, title: "Meslekler",
    phrases: [
        { target: "¿A qué te dedicas?", native: "Ne iş yapıyorsun?", pronunciation: "a KE te de-DI-cas" },
        { target: "Trabajo en una oficina", native: "Ofiste çalışıyorum", pronunciation: "tra-BA-ho en u-na o-fi-CI-na" },
        { target: "Soy estudiante", native: "Öğrenciyim", pronunciation: "soy es-tu-DIAN-te" },
        { target: "Estoy jubilado", native: "Emekliyim", pronunciation: "es-TOY hu-bi-LA-do" },
        { target: "Busco trabajo", native: "İş arıyorum", pronunciation: "BUS-co tra-BA-ho" },
        { target: "El jefe / La jefa", native: "Patron", pronunciation: "el HE-fe / la HE-fa" },
        { target: "Trabajo en equipo", native: "Takım çalışması", pronunciation: "tra-BA-ho en e-QUI-po" },
        { target: "Es mi vocación", native: "Bu benim mesleğim/çağrım", pronunciation: "es mi vo-ca-CION" },
        { target: "Tengo una entrevista", native: "Bir mülakatım var", pronunciation: "TEN-go u-na en-tre-VIS-ta" },
        { target: "Trabajo a tiempo completo", native: "Tam zamanlı çalışıyorum", pronunciation: "tra-BA-ho a TIEM-po com-PLE-to" },
        { target: "Trabajo a tiempo parcial", native: "Yarı zamanlı çalışıyorum", pronunciation: "tra-BA-ho a TIEM-po par-CIAL" },
        { target: "¿Cuál es tu profesión?", native: "Mesleğin ne?", pronunciation: "KUAL es tu pro-fe-SION" },
        { target: "Estoy en paro", native: "İşsizim", pronunciation: "es-TOY en PA-ro" },
        { target: "El sueldo es bueno", native: "Maaş iyi", pronunciation: "el SUEL-do es BUE-no" },
        { target: "Tengo vacaciones", native: "Tatilim var", pronunciation: "TEN-go va-ka-CIO-nes" }
    ]
};

// ===== ÜNİTE 15: ŞEHİRİ KEŞFET =====
const unit15Phrases: UnitPhrases = {
    unitId: 15, title: "Yol Tarifi",
    phrases: [
        { target: "Perdone, estoy perdido", native: "Pardon, kayboldum", pronunciation: "per-DO-ne es-TOY per-DI-do" },
        { target: "¿Dónde está la farmacia?", native: "Eczane nerede?", pronunciation: "DON-de es-TA la far-MA-cia" },
        { target: "Siga todo recto", native: "Dümdüz gidin", pronunciation: "SI-ga TO-do REC-to" },
        { target: "Gire a la derecha", native: "Sağa dönün", pronunciation: "GI-re a la de-RE-cha" },
        { target: "Gire a la izquierda", native: "Sola dönün", pronunciation: "GI-re a la is-QUIER-da" },
        { target: "Está cerca de aquí", native: "Buraya yakın", pronunciation: "es-TA CER-ca de a-QUI" },
        { target: "Al final de la calle", native: "Sokağın sonunda", pronunciation: "al fi-NAL de la KA-ye" },
        { target: "A la vuelta de la esquina", native: "Köşeyi dönünce", pronunciation: "a la VUEL-ta de la es-QUI-na" },
        { target: "¿Cómo llego a...?", native: "...ya nasıl giderim?", pronunciation: "KO-mo YE-go a" },
        { target: "Está a cinco minutos", native: "Beş dakika uzaklıkta", pronunciation: "es-TA a CIN-ko mi-NU-tos" },
        { target: "Cruzar la calle", native: "Karşıya geçmek", pronunciation: "kru-SAR la KA-ye" },
        { target: "La primera a la derecha", native: "İlk sokaktan sağa", pronunciation: "la pri-ME-ra a la de-RE-cha" },
        { target: "La segunda a la izquierda", native: "İkinci sokaktan sola", pronunciation: "la se-GUN-da a la is-QUIER-da" },
        { target: "Está enfrente de...", native: "...nın karşısında", pronunciation: "es-TA en-FREN-te de" },
        { target: "No puedo encontrarlo", native: "Bulamıyorum", pronunciation: "no PUE-do en-kon-TRAR-lo" }
    ]
};

// ===== ÜNİTE 16: YOLCULUK =====
const unit16Phrases: UnitPhrases = {
    unitId: 16, title: "Ulaşım",
    phrases: [
        { target: "Un billete de ida y vuelta", native: "Gidiş dönüş bileti", pronunciation: "un bi-YE-te de I-da i VUEL-ta" },
        { target: "¿A qué hora sale el tren?", native: "Tren saat kaçta kalkıyor?", pronunciation: "a KE O-ra SA-le el tren" },
        { target: "Perder el autobús", native: "Otobüsü kaçırmak", pronunciation: "per-DER el au-to-BUS" },
        { target: "Buen viaje", native: "İyi yolculuklar", pronunciation: "buen via-HE" },
        { target: "En el metro", native: "Metroda", pronunciation: "en el ME-tro" },
        { target: "Ir a pie", native: "Yürüyerek gitmek", pronunciation: "ir a pie" },
        { target: "Coger un taxi", native: "Taksiye binmek / çağırmak", pronunciation: "co-GER un TAC-si" },
        { target: "Abróchense los cinturones", native: "Kemerlerinizi bağlayın", pronunciation: "a-BRO-chen-se los cin-tu-RO-nes" },
        { target: "¿De qué andén sale?", native: "Hangi perondan kalkıyor?", pronunciation: "de KE an-DEN SA-le" },
        { target: "El vuelo está retrasado", native: "Uçuş gecikmeli", pronunciation: "el VUE-lo es-TA re-tra-SA-do" },
        { target: "Tengo que hacer transbordo", native: "Aktarma yapmam gerekiyor", pronunciation: "TEN-go ke a-CER trans-BOR-do" },
        { target: "¿Cuánto dura el viaje?", native: "Yolculuk ne kadar sürüyor?", pronunciation: "KUAN-to DU-ra el via-HE" },
        { target: "Parada de autobús", native: "Otobüs durağı", pronunciation: "pa-RA-da de au-to-BUS" },
        { target: "Estación de tren", native: "Tren istasyonu", pronunciation: "es-ta-CION de tren" },
        { target: "Llegamos tarde", native: "Geç kalıyoruz", pronunciation: "ye-GA-mos TAR-de" }
    ]
};

// ===== ÜNİTE 17: GÜNLÜK YAŞAM =====
const unit17Phrases: UnitPhrases = {
    unitId: 17, title: "Rutinler",
    phrases: [
        { target: "Me levanto temprano", native: "Erken kalkarım", pronunciation: "me le-VAN-to tem-PRA-no" },
        { target: "Me acuesto tarde", native: "Geç yatarım", pronunciation: "me a-CUES-to TAR-de" },
        { target: "Lavarse los dientes", native: "Dişleri fırçalamak", pronunciation: "la-VAR-se los DIEN-tes" },
        { target: "Poner el despertador", native: "Alarmı kurmak", pronunciation: "po-NER el des-per-ta-DOR" },
        { target: "Hacer la cama", native: "Yatağı toplamak", pronunciation: "a-CER la KA-ma" },
        { target: "Tomar una ducha", native: "Duş almak", pronunciation: "to-MAR u-na DU-cha" },
        { target: "Ir al trabajo", native: "İşe gitmek", pronunciation: "ir al tra-BA-ho" },
        { target: "Volver a casa", native: "Eve dönmek", pronunciation: "vol-VER a KA-sa" },
        { target: "Preparar el desayuno", native: "Kahvaltı hazırlamak", pronunciation: "pre-pa-RAR el de-sa-YU-no" },
        { target: "Vestirse rápido", native: "Hızlı giyinmek", pronunciation: "ves-TIR-se RA-pi-do" },
        { target: "Salir de casa", native: "Evden çıkmak", pronunciation: "sa-LIR de KA-sa" },
        { target: "¿A qué hora te levantas?", native: "Saat kaçta kalkıyorsun?", pronunciation: "a KE O-ra te le-VAN-tas" },
        { target: "Normalmente...", native: "Normalde...", pronunciation: "nor-mal-MEN-te" },
        { target: "Los fines de semana", native: "Hafta sonları", pronunciation: "los fi-nes de se-MA-na" },
        { target: "Cada mañana", native: "Her sabah", pronunciation: "KA-da ma-NYA-na" }
    ]
};

// ===== ÜNİTE 18: BULUŞMA ZAMANI =====
const unit18Phrases: UnitPhrases = {
    unitId: 18, title: "Saatler",
    phrases: [
        { target: "¿Qué hora tienes?", native: "Saatin var mı? (Saat kaç?)", pronunciation: "KE O-ra TIE-nes" },
        { target: "Llegar a tiempo", native: "Zamanında varmak", pronunciation: "ye-GAR a TIEM-po" },
        { target: "Llegar tarde", native: "Geç kalmak", pronunciation: "ye-GAR TAR-de" },
        { target: "En punto", native: "Tam (Saat ... tam)", pronunciation: "en PUN-to" },
        { target: "Es mediodía", native: "Öğlen (saat 12)", pronunciation: "es me-dio-DI-a" },
        { target: "Es medianoche", native: "Gece yarısı", pronunciation: "es me-dia-NO-che" },
        { target: "El tiempo vuela", native: "Zaman uçup gidiyor", pronunciation: "el TIEM-po VUE-la" },
        { target: "Tener prisa", native: "Acelesi olmak", pronunciation: "te-NER PRI-sa" },
        { target: "¿A qué hora quedamos?", native: "Saat kaçta buluşalım?", pronunciation: "a KE O-ra ke-DA-mos" },
        { target: "Son las tres y media", native: "Saat üç buçuk", pronunciation: "son las tres i ME-dia" },
        { target: "Son las cuatro menos cuarto", native: "Dörde çeyrek var", pronunciation: "son las KUA-tro ME-nos KUAR-to" },
        { target: "Por la mañana", native: "Sabahleyin", pronunciation: "por la ma-NYA-na" },
        { target: "Por la tarde", native: "Öğleden sonra", pronunciation: "por la TAR-de" },
        { target: "Por la noche", native: "Akşamleyin/Geceleyin", pronunciation: "por la NO-che" },
        { target: "¿Tienes un momento?", native: "Bir dakikan var mı?", pronunciation: "TIE-nes un mo-MEN-to" }
    ]
};

// ===== ÜNİTE 19: HAVADAN SUDAN =====
const unit19Phrases: UnitPhrases = {
    unitId: 19, title: "Hava Durumu",
    phrases: [
        { target: "Hace buen tiempo", native: "Hava güzel", pronunciation: "A-ce buen TIEM-po" },
        { target: "Hace mal tiempo", native: "Hava kötü/bozuk", pronunciation: "A-ce mal TIEM-po" },
        { target: "Está lloviendo a cántaros", native: "Bardaktan boşalırcasına yağıyor", pronunciation: "es-TA yo-VIEN-do a CAN-ta-ros" },
        { target: "Morirse de frío", native: "Soğuktan ölmek (donmak)", pronunciation: "mo-RIR-se de FRI-o" },
        { target: "Hace un sol de justicia", native: "Çok yakıcı bir güneş var", pronunciation: "A-ce un sol de hus-TI-cia" },
        { target: "Día nublado", native: "Bulutlu gün", pronunciation: "DI-a nu-BLA-do" },
        { target: "Pronóstico del tiempo", native: "Hava durumu tahmini", pronunciation: "pro-NOS-ti-co del TIEM-po" },
        { target: "Llevar paraguas", native: "Şemsiye taşımak", pronunciation: "ye-VAR pa-RA-guas" },
        { target: "¿Qué tiempo hace?", native: "Hava nasıl?", pronunciation: "KE TIEM-po A-ce" },
        { target: "Hace mucho calor", native: "Çok sıcak", pronunciation: "A-ce MU-cho ka-LOR" },
        { target: "Hace mucho frío", native: "Çok soğuk", pronunciation: "A-ce MU-cho FRI-o" },
        { target: "Está nevando", native: "Kar yağıyor", pronunciation: "es-TA ne-VAN-do" },
        { target: "Hay tormenta", native: "Fırtına var", pronunciation: "ay tor-MEN-ta" },
        { target: "Cielo despejado", native: "Açık gökyüzü", pronunciation: "CIE-lo des-pe-HA-do" },
        { target: "Ponerse a llover", native: "Yağmur başlamak", pronunciation: "po-NER-se a yo-VER" }
    ]
};

// ===== ÜNİTE 20: BOŞ ZAMAN =====
const unit20Phrases: UnitPhrases = {
    unitId: 20, title: "Hobiler",
    phrases: [
        { target: "¿Qué haces en tu tiempo libre?", native: "Boş zamanında ne yaparsın?", pronunciation: "KE A-ces en tu TIEM-po LI-bre" },
        { target: "Me gusta bailar", native: "Dans etmeyi severim", pronunciation: "me GUS-ta bai-LAR" },
        { target: "Soy aficionado al fútbol", native: "Futbol hayranıyım", pronunciation: "soy a-fi-cio-NA-do al FUT-bol" },
        { target: "Tocar la guitarra", native: "Gitar çalmak", pronunciation: "to-CAR la gui-TA-rra" },
        { target: "Ir de compras", native: "Alışverişe gitmek", pronunciation: "ir de COM-pras" },
        { target: "Ver una película", native: "Film izlemek", pronunciation: "ver u-na pe-LI-cu-la" },
        { target: "Salir con amigos", native: "Arkadaşlarla dışarı çıkmak", pronunciation: "sa-LIR con a-MI-gos" },
        { target: "No tengo tiempo", native: "Zamanım yok", pronunciation: "no TEN-go TIEM-po" },
        { target: "¿Cuáles son tus hobbies?", native: "Hobilerin neler?", pronunciation: "KUA-les son tus HO-bbies" },
        { target: "Me encanta la música", native: "Müziğe bayılıyorum", pronunciation: "me en-KAN-ta la MU-si-ka" },
        { target: "Jugar a videojuegos", native: "Video oyunu oynamak", pronunciation: "hu-GAR a vi-deo-HUE-gos" },
        { target: "Hacer deporte", native: "Spor yapmak", pronunciation: "a-CER de-POR-te" },
        { target: "Leer libros", native: "Kitap okumak", pronunciation: "le-ER LI-bros" },
        { target: "Quedar con alguien", native: "Biriyle buluşmak", pronunciation: "ke-DAR con AL-gien" },
        { target: "Pasarlo bien", native: "İyi vakit geçirmek", pronunciation: "pa-SAR-lo bien" }
    ]
};

// ===== YENİ A1 ÜNİTELERİ (21-25) =====
// ===== ÜNİTE 21: DUYGULAR =====
const unit21Phrases: UnitPhrases = {
    unitId: 21, title: "Duygu İfadeleri",
    phrases: [
        { target: "¿Cómo te sientes?", native: "Kendini nasıl hissediyorsun?", pronunciation: "KO-mo te SIEN-tes" },
        { target: "Estoy muy contento", native: "Çok memnunum", pronunciation: "es-TOY muy con-TEN-to" },
        { target: "No estoy de humor", native: "Havamda değilim", pronunciation: "no es-TOY de u-MOR" },
        { target: "Tengo miedo", native: "Korkuyorum", pronunciation: "TEN-go MIE-do" },
        { target: "Estoy harto", native: "Bıktım usandım", pronunciation: "es-TOY AR-to" },
        { target: "Me da igual", native: "Benim için farketmez", pronunciation: "me da i-GUAL" },
        { target: "¡Qué alegría!", native: "Ne mutluluk!", pronunciation: "KE a-le-GRI-a" },
        { target: "No te preocupes", native: "Endişelenme", pronunciation: "no te pre-o-KU-pes" },
        { target: "Estoy nervioso", native: "Gerginim", pronunciation: "es-TOY ner-VIO-so" },
        { target: "Estoy aburrido", native: "Sıkıldım", pronunciation: "es-TOY a-bu-RRI-do" },
        { target: "¡Qué sorpresa!", native: "Ne sürpriz!", pronunciation: "KE sor-PRE-sa" },
        { target: "Estoy emocionado", native: "Heyecanlıyım", pronunciation: "es-TOY e-mo-cio-NA-do" },
        { target: "Lo siento mucho", native: "Çok üzgünüm", pronunciation: "lo SIEN-to MU-cho" },
        { target: "Estoy enfadado", native: "Kızgınım", pronunciation: "es-TOY en-fa-DA-do" },
        { target: "Me siento bien", native: "İyi hissediyorum", pronunciation: "me SIEN-to bien" }
    ]
};

// ===== ÜNİTE 22: OKUL =====
const unit22Phrases: UnitPhrases = {
    unitId: 22, title: "Okul Kalıpları",
    phrases: [
        { target: "¿Puedo ir al baño?", native: "Tuvalete gidebilir miyim?", pronunciation: "PUE-do ir al BA-nyo" },
        { target: "No entiendo", native: "Anlamıyorum", pronunciation: "no en-TIEN-do" },
        { target: "¿Puede repetir?", native: "Tekrar edebilir misiniz?", pronunciation: "PUE-de re-pe-TIR" },
        { target: "Tengo una pregunta", native: "Bir sorum var", pronunciation: "TEN-go u-na pre-GUN-ta" },
        { target: "He terminado", native: "Bitirdim", pronunciation: "e ter-mi-NA-do" },
        { target: "Abran los libros", native: "Kitapları açın", pronunciation: "A-bran los LI-bros" },
        { target: "¿Cuál es la tarea?", native: "Ödev ne?", pronunciation: "KUAL es la ta-RE-a" },
        { target: "Estudiar para el examen", native: "Sınava çalışmak", pronunciation: "es-tu-DIAR pa-ra el ek-SA-men" },
        { target: "¿Cómo se dice... en español?", native: "...İspanyolca'da nasıl deniyor?", pronunciation: "KO-mo se DI-ce en es-pa-NYOL" },
        { target: "¿Qué significa esto?", native: "Bu ne anlama geliyor?", pronunciation: "KE sig-NI-fi-ka ES-to" },
        { target: "Levantar la mano", native: "El kaldırmak", pronunciation: "le-van-TAR la MA-no" },
        { target: "Hacer los deberes", native: "Ödev yapmak", pronunciation: "a-CER los de-BE-res" },
        { target: "Aprobar el examen", native: "Sınavı geçmek", pronunciation: "a-pro-BAR el ek-SA-men" },
        { target: "Suspender el examen", native: "Sınavda kalmak", pronunciation: "sus-pen-DER el ek-SA-men" },
        { target: "Prestar atención", native: "Dikkat etmek", pronunciation: "pres-TAR a-ten-CION" }
    ]
};

// ===== ÜNİTE 23: MEYVELER VE SEBZELER =====
const unit23Phrases: UnitPhrases = {
    unitId: 23, title: "Pazarda",
    phrases: [
        { target: "¿A cuánto está el kilo?", native: "Kilosu ne kadar?", pronunciation: "a KUAN-to es-TA el KI-lo" },
        { target: "Quiero medio kilo", native: "Yarım kilo istiyorum", pronunciation: "KIE-ro ME-dio KI-lo" },
        { target: "Está muy fresco", native: "Çok taze", pronunciation: "es-TA muy FRES-ko" },
        { target: "Está maduro", native: "Olgunlaşmış", pronunciation: "es-TA ma-DU-ro" },
        { target: "Ponme un poco más", native: "Biraz daha koy", pronunciation: "PON-me un PO-ko mas" },
        { target: "Me llevo estas", native: "Bunları alıyorum", pronunciation: "me YE-vo ES-tas" },
        { target: "¿Son de temporada?", native: "Mevsiminde mi?", pronunciation: "son de tem-po-RA-da" },
        { target: "Productos frescos", native: "Taze ürünler", pronunciation: "pro-DUK-tos FRES-kos" },
        { target: "Comer sano", native: "Sağlıklı beslenmek", pronunciation: "co-MER SA-no" },
        { target: "Cinco por cinco euros", native: "Beş tane beş euro", pronunciation: "CIN-ko por CIN-ko EU-ros" },
        { target: "¿Algo más?", native: "Başka bir şey?", pronunciation: "AL-go mas" },
        { target: "Nada más, gracias", native: "Başka bir şey yok, teşekkürler", pronunciation: "NA-da mas GRA-cias" },
        { target: "¿Tiene bolsa?", native: "Poşetiniz var mı?", pronunciation: "TIE-ne BOL-sa" },
        { target: "Frutas de temporada", native: "Mevsim meyveleri", pronunciation: "FRU-tas de tem-po-RA-da" },
        { target: "Verduras frescas", native: "Taze sebzeler", pronunciation: "ver-DU-ras FRES-kas" }
    ]
};

// ===== ÜNİTE 24: ÜLKELER =====
const unit24Phrases: UnitPhrases = {
    unitId: 24, title: "Nereli Olduğunu Söyle",
    phrases: [
        { target: "¿De dónde vienes?", native: "Nereden geliyorsun?", pronunciation: "de DON-de VIE-nes" },
        { target: "Vengo de Turquía", native: "Türkiye'den geliyorum", pronunciation: "VEN-go de tur-KI-a" },
        { target: "¿Hablas español?", native: "İspanyolca konuşuyor musun?", pronunciation: "AB-las es-pa-NYOL" },
        { target: "Hablo un poco", native: "Biraz konuşuyorum", pronunciation: "AB-lo un PO-ko" },
        { target: "Mi lengua materna es...", native: "Ana dilim ...", pronunciation: "mi LEN-gua ma-TER-na es" },
        { target: "Vivo en el extranjero", native: "Yurtdışında yaşıyorum", pronunciation: "VI-vo en el eks-tran-HE-ro" },
        { target: "Es mi primera vez", native: "İlk defa geliyorum", pronunciation: "es mi pri-ME-ra ves" },
        { target: "Me encanta tu país", native: "Ülkeni çok seviyorum", pronunciation: "me en-KAN-ta tu pa-IS" },
        { target: "¿Cuál es tu nacionalidad?", native: "Milliyetin ne?", pronunciation: "KUAL es tu na-cio-na-li-DAD" },
        { target: "Estoy aprendiendo español", native: "İspanyolca öğreniyorum", pronunciation: "es-TOY a-pren-DIEN-do es-pa-NYOL" },
        { target: "¿Qué idiomas hablas?", native: "Hangi dilleri konuşuyorsun?", pronunciation: "KE i-DIO-mas AB-las" },
        { target: "Viajo por el mundo", native: "Dünyayı geziyorum", pronunciation: "via-HO por el MUN-do" },
        { target: "Es un país bonito", native: "Güzel bir ülke", pronunciation: "es un pa-IS bo-NI-to" },
        { target: "La cultura es diferente", native: "Kültürü farklı", pronunciation: "la kul-TU-ra es di-fe-REN-te" },
        { target: "Quiero visitar...", native: "...ziyaret etmek istiyorum", pronunciation: "KIE-ro vi-si-TAR" }
    ]
};

// ===== ÜNİTE 25: FİİLLER =====
const unit25Phrases: UnitPhrases = {
    unitId: 25, title: "Günlük Eylemler",
    phrases: [
        { target: "¿Qué haces?", native: "Ne yapıyorsun?", pronunciation: "KE A-ces" },
        { target: "Estoy trabajando", native: "Çalışıyorum", pronunciation: "es-TOY tra-ba-HAN-do" },
        { target: "Necesito practicar", native: "Pratik yapmam gerekiyor", pronunciation: "ne-ce-SI-to prak-ti-KAR" },
        { target: "Quiero aprender más", native: "Daha fazla öğrenmek istiyorum", pronunciation: "KIE-ro a-pren-DER mas" },
        { target: "¿Me ayudas?", native: "Bana yardım eder misin?", pronunciation: "me a-YU-das" },
        { target: "Voy a estudiar", native: "Ders çalışacağım", pronunciation: "voy a es-tu-DIAR" },
        { target: "No puedo", native: "Yapamıyorum", pronunciation: "no PUE-do" },
        { target: "Poco a poco", native: "Yavaş yavaş", pronunciation: "PO-ko a PO-ko" },
        { target: "¿Qué estás haciendo?", native: "Ne yapıyorsun? (şu an)", pronunciation: "KE es-TAS a-CIEN-do" },
        { target: "Tengo que irme", native: "Gitmem lazım", pronunciation: "TEN-go ke IR-me" },
        { target: "Quiero descansar", native: "Dinlenmek istiyorum", pronunciation: "KIE-ro des-kan-SAR" },
        { target: "Puedo ayudarte", native: "Sana yardım edebilirim", pronunciation: "PUE-do a-yu-DAR-te" },
        { target: "Lo estoy intentando", native: "Deniyorum", pronunciation: "lo es-TOY in-ten-TAN-do" },
        { target: "Voy a hacerlo", native: "Yapacağım", pronunciation: "voy a a-CER-lo" },
        { target: "Prefiero...", native: "...tercih ederim", pronunciation: "pre-FIE-ro" }
    ]
};

// ===== ÜNİTE 26: İŞARET SIFATLARI =====
const unit26Phrases: UnitPhrases = {
    unitId: 26, title: "İşaret ve Gösterme",
    phrases: [
        { target: "Este es mi libro", native: "Bu benim kitabım", pronunciation: "ES-te es mi LI-bro" },
        { target: "¿Cuál es ese?", native: "Şu hangisi?", pronunciation: "KUAL es E-se" },
        { target: "Quiero este, no aquel", native: "Bunu istiyorum, onu değil", pronunciation: "KIE-ro ES-te no a-KEL" },
        { target: "¿Cuánto cuesta esto?", native: "Bu ne kadar?", pronunciation: "KUAN-to KUES-ta ES-to" },
        { target: "Mira esto", native: "Buna bak", pronunciation: "MI-ra ES-to" },
        { target: "¿Qué es eso?", native: "O ne?", pronunciation: "KE es E-so" },
        { target: "Este de aquí", native: "Buradaki bu", pronunciation: "ES-te de a-KI" },
        { target: "Ese de ahí", native: "Şuradaki şu", pronunciation: "E-se de a-I" },
        { target: "Aquel de allí", native: "Oradaki o", pronunciation: "a-KEL de a-YI" },
        { target: "No me gusta este", native: "Bunu beğenmiyorum", pronunciation: "no me GUS-ta ES-te" },
        { target: "¿Me pasa eso?", native: "Onu uzatır mısın?", pronunciation: "me PA-sa E-so" },
        { target: "Prefiero aquel", native: "O oradakini tercih ederim", pronunciation: "pre-FIE-ro a-KEL" },
        { target: "Estos son mejores", native: "Bunlar daha iyi", pronunciation: "ES-tos son me-HO-res" },
        { target: "Dame esa cosa", native: "Şu şeyi ver", pronunciation: "DA-me E-sa KO-sa" },
        { target: "Aquellos tiempos", native: "O zamanlar (eski zamanlar)", pronunciation: "a-KE-yos TIEM-pos" }
    ]
};

// ===== ÜNİTE 27: DEL KULLANIMI =====
const unit27Phrases: UnitPhrases = {
    unitId: 27, title: "Sahiplik ve Konum",
    phrases: [
        { target: "El libro del profesor", native: "Öğretmenin kitabı", pronunciation: "el LI-bro del pro-fe-SOR" },
        { target: "La puerta de la casa", native: "Evin kapısı", pronunciation: "la PUER-ta de la KA-sa" },
        { target: "Voy al banco", native: "Bankaya gidiyorum", pronunciation: "voy al BAN-ko" },
        { target: "Al lado del parque", native: "Parkın yanında", pronunciation: "al LA-do del PAR-ke" },
        { target: "Cerca del hospital", native: "Hastanenin yakınında", pronunciation: "CER-ka del os-pi-TAL" },
        { target: "Lejos del centro", native: "Merkezden uzakta", pronunciation: "LE-hos del CEN-tro" },
        { target: "Delante del museo", native: "Müzenin önünde", pronunciation: "de-LAN-te del mu-SE-o" },
        { target: "Detrás de la iglesia", native: "Kilisenin arkasında", pronunciation: "de-TRAS de la i-GLE-sia" },
        { target: "El final del día", native: "Günün sonu", pronunciation: "el fi-NAL del DI-a" },
        { target: "Al principio del mes", native: "Ayın başında", pronunciation: "al prin-CI-pio del mes" },
        { target: "En el centro de la ciudad", native: "Şehrin merkezinde", pronunciation: "en el CEN-tro de la ciu-DAD" },
        { target: "La parte de arriba", native: "Üst kısım", pronunciation: "la PAR-te de a-RRI-ba" },
        { target: "Dentro de la caja", native: "Kutunun içinde", pronunciation: "DEN-tro de la KA-ha" },
        { target: "Fuera del edificio", native: "Binanın dışında", pronunciation: "FUE-ra del e-di-FI-cio" },
        { target: "Enfrente del restaurante", native: "Restoranın karşısında", pronunciation: "en-FREN-te del res-tau-RAN-te" }
    ]
};

// ===== ÜNİTE 28: SIRA SAYILARI =====
const unit28Phrases: UnitPhrases = {
    unitId: 28, title: "Sıralama İfadeleri",
    phrases: [
        { target: "Es mi primera vez", native: "İlk defa", pronunciation: "es mi pri-ME-ra ves" },
        { target: "El primer día", native: "İlk gün", pronunciation: "el pri-MER DI-a" },
        { target: "Vivo en el tercer piso", native: "Üçüncü katta yaşıyorum", pronunciation: "VI-vo en el ter-CER PI-so" },
        { target: "La segunda a la derecha", native: "İkinciden sağa", pronunciation: "la se-GUN-da a la de-RE-cha" },
        { target: "Es la tercera vez", native: "Üçüncü kez", pronunciation: "es la ter-CE-ra ves" },
        { target: "En primer lugar", native: "İlk olarak", pronunciation: "en pri-MER lu-GAR" },
        { target: "La última oportunidad", native: "Son fırsat", pronunciation: "la UL-ti-ma o-por-tu-ni-DAD" },
        { target: "La próxima semana", native: "Gelecek hafta", pronunciation: "la PROK-si-ma se-MA-na" },
        { target: "El día anterior", native: "Önceki gün", pronunciation: "el DI-a an-te-RIOR" },
        { target: "El siguiente paso", native: "Sonraki adım", pronunciation: "el si-GUIEN-te PA-so" },
        { target: "Quedó en primer puesto", native: "Birinci oldu", pronunciation: "ke-DO en pri-MER PUES-to" },
        { target: "El décimo aniversario", native: "Onuncu yıldönümü", pronunciation: "el DE-ci-mo a-ni-ver-SA-rio" },
        { target: "Por primera vez", native: "İlk kez", pronunciation: "por pri-ME-ra ves" },
        { target: "En segundo lugar", native: "İkinci olarak", pronunciation: "en se-GUN-do lu-GAR" },
        { target: "Por última vez", native: "Son kez", pronunciation: "por UL-ti-ma ves" }
    ]
};

// ===== ÜNİTE 29: SORU KELİMELERİ =====
const unit29Phrases: UnitPhrases = {
    unitId: 29, title: "Sorular ve Cevaplar",
    phrases: [
        { target: "¿Qué es esto?", native: "Bu nedir?", pronunciation: "KE es ES-to" },
        { target: "¿Quién es él?", native: "O kim?", pronunciation: "kien es EL" },
        { target: "¿Dónde está el baño?", native: "Tuvalet nerede?", pronunciation: "DON-de es-TA el BA-nyo" },
        { target: "¿Cuándo llegas?", native: "Ne zaman geliyorsun?", pronunciation: "KUAN-do YE-gas" },
        { target: "¿Cómo te llamas?", native: "Adın ne?", pronunciation: "KO-mo te YA-mas" },
        { target: "¿Por qué no vienes?", native: "Neden gelmiyorsun?", pronunciation: "por KE no VIE-nes" },
        { target: "Porque no puedo", native: "Çünkü yapamıyorum", pronunciation: "por-KE no PUE-do" },
        { target: "¿Cuánto cuesta?", native: "Ne kadar?", pronunciation: "KUAN-to KUES-ta" },
        { target: "¿Cuántos años tienes?", native: "Kaç yaşındasın?", pronunciation: "KUAN-tos A-nyos TIE-nes" },
        { target: "¿Cuál prefieres?", native: "Hangisini tercih edersin?", pronunciation: "KUAL pre-FIE-res" },
        { target: "¿Adónde vas?", native: "Nereye gidiyorsun?", pronunciation: "a-DON-de vas" },
        { target: "¿De dónde eres?", native: "Nerelisin?", pronunciation: "de DON-de E-res" },
        { target: "¿Para qué es esto?", native: "Bu ne için?", pronunciation: "pa-ra KE es ES-to" },
        { target: "¿Por qué lo dices?", native: "Neden bunu söylüyorsun?", pronunciation: "por KE lo DI-ces" },
        { target: "¿Cómo se dice...?", native: "... nasıl denir?", pronunciation: "KO-mo se DI-ce" }
    ]
};

// ===== ÜNİTE 30: PODER FİİLİ =====
const unit30Phrases: UnitPhrases = {
    unitId: 30, title: "Yetenek ve İzin",
    phrases: [
        { target: "¿Puedo entrar?", native: "Girebilir miyim?", pronunciation: "PUE-do en-TRAR" },
        { target: "No puedo ir", native: "Gidemem", pronunciation: "no PUE-do ir" },
        { target: "¿Puedes ayudarme?", native: "Bana yardım edebilir misin?", pronunciation: "PUE-des a-yu-DAR-me" },
        { target: "Puedo hablar español", native: "İspanyolca konuşabiliyorum", pronunciation: "PUE-do ab-LAR es-pa-NYOL" },
        { target: "Podemos ir juntos", native: "Birlikte gidebiliriz", pronunciation: "po-DE-mos ir HUN-tos" },
        { target: "No pueden entrar", native: "Giremezler", pronunciation: "no PUE-den en-TRAR" },
        { target: "¿Puedo usar tu teléfono?", native: "Telefonunu kullanabilir miyim?", pronunciation: "PUE-do u-SAR tu te-LE-fo-no" },
        { target: "¿Se puede fumar aquí?", native: "Burada sigara içilebilir mi?", pronunciation: "se PUE-de fu-MAR a-KI" },
        { target: "Puede ser", native: "Olabilir", pronunciation: "PUE-de ser" },
        { target: "No puedo creerlo", native: "İnanamıyorum", pronunciation: "no PUE-do kre-ER-lo" },
        { target: "¿Puedes repetir?", native: "Tekrar edebilir misin?", pronunciation: "PUE-des re-pe-TIR" },
        { target: "Puedo intentarlo", native: "Deneyebilirim", pronunciation: "PUE-do in-ten-TAR-lo" },
        { target: "¿Podemos sentarnos?", native: "Oturabilir miyiz?", pronunciation: "po-DE-mos sen-TAR-nos" },
        { target: "No puedo esperar más", native: "Daha fazla bekleyemem", pronunciation: "no PUE-do es-pe-RAR mas" },
        { target: "¿Puedo probar?", native: "Deneyebilir miyim?", pronunciation: "PUE-do pro-BAR" }
    ]
};
