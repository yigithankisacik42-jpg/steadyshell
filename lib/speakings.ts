/**
 * LinguaFlow Konuşma Veritabanı - İspanyolca
 * 
 * Her ünite için özel SPEAKING içeriği
 */

import { getA2SpeakingForUnit } from './speakings-a2';
import { getB1SpeakingForUnit } from './speakings-b1';
import { getB2SpeakingForUnit } from './speakings-b2';
import { getFrenchA1SpeakingForUnit } from './speakings-fr-a1';
import { getSpanishA1SpeakingForUnit } from './speakings-es-a1';

export interface SpeakingExercise {
    id: number;
    type: "repeat" | "respond";
    prompt: string;
    text: string;
    translation: string;
    expectedKeywords?: string[];
}

export interface UnitSpeaking {
    unitId: number;
    title: string;
    language: string;
    level: string;
    exercises: SpeakingExercise[];
}

// ===== ÜNİTE 1-6 =====
const unit1Speaking: UnitSpeaking = {
    unitId: 1, title: "Selamlaşma Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¡Hola! ¿Cómo estás?", translation: "Merhaba! Nasılsın?" },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Buenos días, mucho gusto.", translation: "Günaydın, memnun oldum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cómo te llamas?", translation: "Adın ne?", expectedKeywords: ["me llamo", "soy"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿De dónde eres?", translation: "Nerelisin?", expectedKeywords: ["soy de", "vengo de"] },
    ]
};

const unit2Speaking: UnitSpeaking = {
    unitId: 2, title: "Sayı Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu sayıları tekrar et:", text: "Uno, dos, tres, cuatro, cinco.", translation: "Bir, iki, üç, dört, beş." },
        { id: 2, type: "repeat", prompt: "Bu sayıları tekrar et:", text: "Diez, once, doce, trece, catorce, quince.", translation: "On, onbir, oniki, onüç, ondört, onbeş." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuántos años tienes?", translation: "Kaç yaşındasın?", expectedKeywords: ["tengo", "años"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Veinte euros, por favor.", translation: "Yirmi euro, lütfen." },
    ]
};

const unit3Speaking: UnitSpeaking = {
    unitId: 3, title: "Aile Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mi padre se llama Carlos.", translation: "Babamın adı Carlos." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Tengo dos hermanos.", translation: "İki kardeşim var." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Tienes hermanos?", translation: "Kardeşin var mı?", expectedKeywords: ["tengo", "hermano", "hermana", "no tengo"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cómo se llama tu madre?", translation: "Annenin adı ne?", expectedKeywords: ["se llama", "mi madre"] },
    ]
};

const unit4Speaking: UnitSpeaking = {
    unitId: 4, title: "Renk Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "El cielo es azul.", translation: "Gökyüzü mavidir." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Las rosas son rojas.", translation: "Güller kırmızıdır." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿De qué color es el sol?", translation: "Güneş ne renk?", expectedKeywords: ["amarillo"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me gusta el color verde.", translation: "Yeşil rengi seviyorum." },
    ]
};

const unit5Speaking: UnitSpeaking = {
    unitId: 5, title: "Yemek Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Quiero una manzana.", translation: "Bir elma istiyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me gusta el pescado.", translation: "Balığı seviyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué quieres comer?", translation: "Ne yemek istiyorsun?", expectedKeywords: ["quiero", "comer"] },
        { id: 4, type: "repeat", prompt: "Bu sipariş cümlesini tekrar et:", text: "Una ensalada, por favor.", translation: "Bir salata, lütfen." },
    ]
};

const unit6Speaking: UnitSpeaking = {
    unitId: 6, title: "İçecek Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Un café con leche, por favor.", translation: "Sütlü bir kahve, lütfen." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Quisiera un vaso de agua.", translation: "Bir bardak su isterdim." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué quieres beber?", translation: "Ne içmek istiyorsun?", expectedKeywords: ["quiero", "beber", "agua", "café", "té"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "La cerveza está fría.", translation: "Bira soğuk." },
    ]
};

// ===== ÜNİTE 7: GÜNLER VE AYLAR =====
const unit7Speaking: UnitSpeaking = {
    unitId: 7, title: "Gün ve Ay Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Günleri tekrar et:", text: "Lunes, martes, miércoles, jueves, viernes.", translation: "Pazartesi, Salı, Çarşamba, Perşembe, Cuma." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hoy es sábado.", translation: "Bugün cumartesi." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué día es hoy?", translation: "Bugün günlerden ne?", expectedKeywords: ["hoy es", "lunes", "martes", "miércoles"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿En qué mes estamos?", translation: "Hangi aydayız?", expectedKeywords: ["estamos en", "enero", "diciembre"] },
    ]
};

// ===== ÜNİTE 8: SAYILAR 21-100 =====
const unit8Speaking: UnitSpeaking = {
    unitId: 8, title: "Büyük Sayı Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Onları tekrar et:", text: "Veinte, treinta, cuarenta, cincuenta.", translation: "Yirmi, otuz, kırk, elli." },
        { id: 2, type: "repeat", prompt: "Bu sayıyı tekrar et:", text: "Setenta y cinco.", translation: "Yetmiş beş." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuánto cuesta?", translation: "Ne kadar?", expectedKeywords: ["euros", "treinta", "cuarenta", "cincuenta"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Cien páginas.", translation: "Yüz sayfa." },
    ]
};

// ===== ÜNİTE 9: EV ODALARI =====
const unit9Speaking: UnitSpeaking = {
    unitId: 9, title: "Ev Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Estoy en la cocina.", translation: "Mutfaktayım." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mi casa tiene tres dormitorios.", translation: "Evimin üç yatak odası var." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Dónde estás?", translation: "Neredesin?", expectedKeywords: ["estoy en", "cocina", "salón", "dormitorio"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuántas habitaciones tiene tu casa?", translation: "Evinin kaç odası var?", expectedKeywords: ["tiene", "habitaciones", "dormitorios"] },
    ]
};

// ===== ÜNİTE 10: MOBİLYALAR =====
const unit10Speaking: UnitSpeaking = {
    unitId: 10, title: "Mobilya Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hay una mesa en la cocina.", translation: "Mutfakta bir masa var." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "El sofá está en el salón.", translation: "Koltuk oturma odasında." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Dónde está la televisión?", translation: "Televizyon nerede?", expectedKeywords: ["está en", "salón", "dormitorio"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Necesito una silla nueva.", translation: "Yeni bir sandalyeye ihtiyacım var." },
    ]
};

// ===== ÜNİTE 11: VÜCUT BÖLÜMLERİ =====
const unit11Speaking: UnitSpeaking = {
    unitId: 11, title: "Vücut Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me duele la cabeza.", translation: "Başım ağrıyor." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Tengo dolor de estómago.", translation: "Karnım ağrıyor." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué te duele?", translation: "Neren ağrıyor?", expectedKeywords: ["me duele", "cabeza", "estómago", "pierna"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Necesito ir al médico.", translation: "Doktora gitmem gerekiyor." },
    ]
};

// ===== ÜNİTE 12: GİYSİLER =====
const unit12Speaking: UnitSpeaking = {
    unitId: 12, title: "Giysi Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Llevo una camisa azul.", translation: "Mavi gömlek giyiyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¿Tiene esta camiseta en rojo?", translation: "Bu tişörtün kırmızısı var mı?" },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué llevas hoy?", translation: "Bugün ne giyiyorsun?", expectedKeywords: ["llevo", "camisa", "pantalón", "camiseta"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Quiero la talla mediana.", translation: "Orta beden istiyorum." },
    ]
};

// ===== ÜNİTE 13: HAYVANLAR =====
const unit13Speaking: UnitSpeaking = {
    unitId: 13, title: "Hayvan Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Tengo un perro y un gato.", translation: "Bir köpeğim ve bir kedim var." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mi animal favorito es el elefante.", translation: "En sevdiğim hayvan fil." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Tienes mascotas?", translation: "Evcil hayvanın var mı?", expectedKeywords: ["tengo", "perro", "gato", "no tengo"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuál es tu animal favorito?", translation: "En sevdiğin hayvan hangisi?", expectedKeywords: ["favorito", "es", "perro", "gato", "león"] },
    ]
};

// ===== ÜNİTE 14: MESLEKLER =====
const unit14Speaking: UnitSpeaking = {
    unitId: 14, title: "Meslek Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Soy estudiante.", translation: "Öğrenciyim." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Trabajo en un hospital.", translation: "Bir hastanede çalışıyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿A qué te dedicas?", translation: "Ne iş yapıyorsun?", expectedKeywords: ["soy", "trabajo", "estudiante", "médico", "profesor"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Dónde trabajas?", translation: "Nerede çalışıyorsun?", expectedKeywords: ["trabajo en", "oficina", "hospital", "escuela"] },
    ]
};

// ===== ÜNİTE 15: ŞEHİRDE YERLER =====
const unit15Speaking: UnitSpeaking = {
    unitId: 15, title: "Şehir Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¿Dónde está el hospital?", translation: "Hastane nerede?" },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Está al lado del parque.", translation: "Parkın yanında." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Está cerca o lejos?", translation: "Yakın mı uzak mı?", expectedKeywords: ["cerca", "lejos"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "La farmacia está enfrente del banco.", translation: "Eczane bankanın karşısında." },
    ]
};

// ===== ÜNİTE 16: ULAŞIM ARAÇLARI =====
const unit16Speaking: UnitSpeaking = {
    unitId: 16, title: "Ulaşım Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Voy al trabajo en metro.", translation: "İşe metroyla gidiyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Prefiero viajar en tren.", translation: "Trenle seyahat etmeyi tercih ederim." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cómo vas al trabajo?", translation: "İşe nasıl gidiyorsun?", expectedKeywords: ["voy en", "coche", "metro", "autobús", "bicicleta"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Tienes coche?", translation: "Araban var mı?", expectedKeywords: ["sí", "no", "tengo", "no tengo"] },
    ]
};

// ===== ÜNİTE 17: GÜNLÜK RUTİNLER =====
const unit17Speaking: UnitSpeaking = {
    unitId: 17, title: "Rutin Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me levanto a las siete.", translation: "Yedide kalkıyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Desayuno café y tostadas.", translation: "Kahve ve tost kahvaltı yapıyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿A qué hora te levantas?", translation: "Saat kaçta kalkıyorsun?", expectedKeywords: ["me levanto", "a las", "siete", "ocho"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿A qué hora te acuestas?", translation: "Saat kaçta yatıyorsun?", expectedKeywords: ["me acuesto", "a las", "once", "diez"] },
    ]
};

// ===== ÜNİTE 18: SAAT KAÇ? =====
const unit18Speaking: UnitSpeaking = {
    unitId: 18, title: "Saat Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Son las tres y media.", translation: "Üç buçuk." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "La clase empieza a las nueve.", translation: "Ders dokuzda başlıyor." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué hora es?", translation: "Saat kaç?", expectedKeywords: ["son las", "es la", "media", "cuarto"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Tengo una cita a las cinco y cuarto.", translation: "Beşi çeyrek geçe randevum var." },
    ]
};

// ===== ÜNİTE 19: HAVA DURUMU =====
const unit19Speaking: UnitSpeaking = {
    unitId: 19, title: "Hava Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hoy hace mucho sol.", translation: "Bugün çok güneşli." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mañana va a llover.", translation: "Yarın yağmur yağacak." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué tiempo hace?", translation: "Hava nasıl?", expectedKeywords: ["hace", "sol", "frío", "calor", "llueve"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "En invierno hace mucho frío.", translation: "Kışın çok soğuk olur." },
    ]
};

// ===== ÜNİTE 20: HOBİLER =====
const unit20Speaking: UnitSpeaking = {
    unitId: 20, title: "Hobi Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me gusta mucho leer.", translation: "Okumayı çok seviyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Los fines de semana juego al fútbol.", translation: "Hafta sonları futbol oynuyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuáles son tus hobbies?", translation: "Hobilerin neler?", expectedKeywords: ["me gusta", "leer", "nadar", "cocinar", "bailar"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué te gusta hacer en tu tiempo libre?", translation: "Boş zamanında ne yapmayı seviyorsun?", expectedKeywords: ["me gusta", "leer", "ver", "jugar", "escuchar"] },
    ]
};

// ===== ÜNİTE 21: ESTAR + DUYGULAR =====
const unit21Speaking: UnitSpeaking = {
    unitId: 21, title: "Duygu Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hoy estoy muy feliz.", translation: "Bugün çok mutluyum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Estoy cansado porque trabajé mucho.", translation: "Yorgunum çünkü çok çalıştım." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cómo estás hoy?", translation: "Bugün nasılsın?", expectedKeywords: ["estoy", "feliz", "bien", "mal", "cansado", "nervioso"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Por qué estás triste?", translation: "Neden üzgünsün?", expectedKeywords: ["porque", "estoy triste"] },
    ]
};

// ===== ÜNİTE 22: TENER QUE =====
const unit22Speaking: UnitSpeaking = {
    unitId: 22, title: "Zorunluluk Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Tengo que estudiar para el examen.", translation: "Sınav için çalışmam gerekiyor." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Tienes que levantarte temprano.", translation: "Erken kalkman gerekiyor." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué tienes que hacer hoy?", translation: "Bugün ne yapman gerekiyor?", expectedKeywords: ["tengo que", "estudiar", "trabajar", "ir"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Tienes que trabajar mañana?", translation: "Yarın çalışman gerekiyor mu?", expectedKeywords: ["sí", "no", "tengo que", "no tengo que"] },
    ]
};

// ===== ÜNİTE 23: QUERER VE GUSTAR =====
const unit23Speaking: UnitSpeaking = {
    unitId: 23, title: "İstek Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Quiero una pizza, por favor.", translation: "Bir pizza istiyorum, lütfen." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me gusta mucho la paella.", translation: "Paellayı çok seviyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué quieres comer?", translation: "Ne yemek istiyorsun?", expectedKeywords: ["quiero", "pizza", "ensalada", "carne", "pescado"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Te gusta el café?", translation: "Kahveyi sever misin?", expectedKeywords: ["sí", "no", "me gusta", "me encanta", "no me gusta"] },
    ]
};

// ===== ÜNİTE 24: SER + MİLLİYET =====
const unit24Speaking: UnitSpeaking = {
    unitId: 24, title: "Milliyet Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Soy de Turquía. Soy turco.", translation: "Türkiye'denim. Türküm." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mi amigo es español y vive en Madrid.", translation: "Arkadaşım İspanyol ve Madrid'de yaşıyor." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿De dónde eres?", translation: "Nerelisin?", expectedKeywords: ["soy de", "Turquía", "España", "México"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuál es tu nacionalidad?", translation: "Milliyetin ne?", expectedKeywords: ["soy", "turco", "española", "mexicano"] },
    ]
};

// ===== ÜNİTE 25: DÜZENLİ FİİLLER =====
const unit25Speaking: UnitSpeaking = {
    unitId: 25, title: "Fiil Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hablo español y estudio inglés.", translation: "İspanyolca konuşuyorum ve İngilizce çalışıyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Vivimos en una casa grande.", translation: "Büyük bir evde yaşıyoruz." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Dónde vives?", translation: "Nerede yaşıyorsun?", expectedKeywords: ["vivo en", "casa", "apartamento", "ciudad"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué idiomas hablas?", translation: "Hangi dilleri konuşuyorsun?", expectedKeywords: ["hablo", "español", "inglés", "turco"] },
    ]
};

// ===== ÜNİTE 26: İŞARET SIFATLARI =====
const unit26Speaking: UnitSpeaking = {
    unitId: 26, title: "İşaret Sıfatları Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Esta camisa es muy bonita.", translation: "Bu gömlek çok güzel." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Esos zapatos son caros.", translation: "Şu ayakkabılar pahalı." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuál prefieres, este o aquel?", translation: "Hangisini tercih edersin, bu mu o mu?", expectedKeywords: ["prefiero", "este", "aquel", "ese"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Quiero probar esa falda roja.", translation: "Şu kırmızı eteği denemek istiyorum." },
    ]
};

// ===== ÜNİTE 27: DEL KULLANIMI =====
const unit27Speaking: UnitSpeaking = {
    unitId: 27, title: "Sahiplik Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "El libro del profesor está aquí.", translation: "Öğretmenin kitabı burada." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "La puerta de la casa es roja.", translation: "Evin kapısı kırmızı." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Dónde está el centro de la ciudad?", translation: "Şehrin merkezi nerede?", expectedKeywords: ["está", "cerca", "lejos", "al lado de"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Estoy al lado del banco.", translation: "Bankanın yanındayım." },
    ]
};

// ===== ÜNİTE 28: SIRA SAYILARI =====
const unit28Speaking: UnitSpeaking = {
    unitId: 28, title: "Sıra Sayıları Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Vivo en el tercer piso.", translation: "Üçüncü katta yaşıyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es mi primera vez en España.", translation: "İspanya'da ilk kez bulunuyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿En qué piso vives?", translation: "Kaçıncı katta yaşıyorsun?", expectedKeywords: ["vivo en", "primer", "segundo", "tercer", "piso"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "La segunda calle a la derecha.", translation: "Sağdaki ikinci sokak." },
    ]
};

// ===== ÜNİTE 29: SORU KELİMELERİ =====
const unit29Speaking: UnitSpeaking = {
    unitId: 29, title: "Soru Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¿Cuándo es tu cumpleaños?", translation: "Doğum günün ne zaman?" },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¿Por qué estudias español?", translation: "Neden İspanyolca öğreniyorsun?" },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Dónde vives?", translation: "Nerede yaşıyorsun?", expectedKeywords: ["vivo en", "ciudad", "país"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuántos años tienes?", translation: "Kaç yaşındasın?", expectedKeywords: ["tengo", "años"] },
    ]
};

// ===== ÜNİTE 30: PODER FİİLİ =====
const unit30Speaking: UnitSpeaking = {
    unitId: 30, title: "Yetenek Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Puedo hablar español.", translation: "İspanyolca konuşabiliyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¿Puedes ayudarme, por favor?", translation: "Bana yardım edebilir misin, lütfen?" },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Puedes nadar?", translation: "Yüzebilir misin?", expectedKeywords: ["sí", "no", "puedo", "no puedo"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué idiomas puedes hablar?", translation: "Hangi dilleri konuşabilirsin?", expectedKeywords: ["puedo hablar", "español", "inglés", "turco"] },
    ]
};

// Ünite ID'sine göre speaking getir
import { getEnglishA1SpeakingForUnit } from './speakings-en-a1';
import { getEnglishA2SpeakingForUnit } from './speakings-en-a2';

export function getSpeakingForUnit(unitId: number): UnitSpeaking {
    // === İNGİLİZCE ÜNİTELER (ID 101-220) ===
    // İngilizce A1 (101-130)
    if (unitId >= 101 && unitId <= 130) {
        const enSpeaking = getEnglishA1SpeakingForUnit(unitId);
        return {
            unitId: enSpeaking.unitId,
            title: enSpeaking.title,
            language: "en",
            level: "A1",
            exercises: enSpeaking.dialogues.map((d, i) => ({
                id: i + 1,
                type: "repeat" as const,
                prompt: "Bu cümleyi tekrar et:",
                text: d.text,
                translation: d.translation
            }))
        };
    }

    // İngilizce A2 (131-160)
    if (unitId >= 131 && unitId <= 160) {
        const enSpeaking = getEnglishA2SpeakingForUnit(unitId);
        return {
            unitId: enSpeaking.unitId,
            title: enSpeaking.title,
            language: "en",
            level: "A2",
            exercises: enSpeaking.dialogues.map((d, i) => ({
                id: i + 1,
                type: "repeat" as const,
                prompt: "Bu cümleyi tekrar et:",
                text: d.text,
                translation: d.translation
            }))
        };
    }

    // Fransızca A1 (301-330)
    if (unitId >= 301 && unitId <= 330) {
        const frSpeaking = getFrenchA1SpeakingForUnit(unitId);
        if (frSpeaking) {
            return {
                unitId: frSpeaking.unitId,
                title: frSpeaking.title,
                language: "fr",
                level: "A1",
                exercises: frSpeaking.exercises.map((e, i) => ({
                    id: i + 1,
                    type: "repeat" as const, // Şimdilik hepsi repeat, ilerde özelleştirilebilir
                    prompt: "Bu cümleyi tekrar et:",
                    text: e.text,
                    translation: e.translation
                }))
            };
        }
    }

    // === İSPANYOLCA ÜNİTELER (ID 1-100) ===
    // A1 (1-30) - Yeni genişletilmiş dosyadan
    if (unitId >= 1 && unitId <= 30) {
        const a1Speaking = getSpanishA1SpeakingForUnit(unitId);
        return a1Speaking || unit1Speaking;
    }

    // A2 (31-60) - curriculum.ts ile senkron
    if (unitId >= 31 && unitId <= 60) {
        const a2Speaking = getA2SpeakingForUnit(unitId);
        return a2Speaking || unit1Speaking;
    }

    // B1 (61-90) - curriculum.ts ile senkron
    if (unitId >= 61 && unitId <= 90) {
        const b1Speaking = getB1SpeakingForUnit(unitId);
        return b1Speaking || unit1Speaking;
    }

    // B2 (91-110) - curriculum.ts ile senkron
    if (unitId >= 91 && unitId <= 110) {
        const b2Speaking = getB2SpeakingForUnit(unitId);
        return b2Speaking || unit1Speaking;
    }

    return unit1Speaking;
}

