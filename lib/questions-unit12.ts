/**
 * LinguaFlow - Ünite 12: Giysiler (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit12Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Camisa' ne demek?", options: [{ id: "a", text: "Pantolon", correct: false }, { id: "b", text: "Gömlek", correct: true }, { id: "c", text: "Etek", correct: false }, { id: "d", text: "Ceket", correct: false }] },
    { id: 2, type: "SELECT", question: "'Pantalón' ne demek?", options: [{ id: "a", text: "Gömlek", correct: false }, { id: "b", text: "Pantolon", correct: true }, { id: "c", text: "Etek", correct: false }, { id: "d", text: "Şort", correct: false }] },
    { id: 3, type: "SELECT", question: "'Zapatos' ne demek?", options: [{ id: "a", text: "Çorap", correct: false }, { id: "b", text: "Ayakkabı", correct: true }, { id: "c", text: "Terlik", correct: false }, { id: "d", text: "Bot", correct: false }] },
    { id: 4, type: "SELECT", question: "'Vestido' ne demek?", options: [{ id: "a", text: "Etek", correct: false }, { id: "b", text: "Elbise", correct: true }, { id: "c", text: "Bluz", correct: false }, { id: "d", text: "Gömlek", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Camisa", options: [{ id: "a", text: "Pantolon", correct: false }, { id: "b", text: "Gömlek", correct: true }, { id: "c", text: "Ceket", correct: false }, { id: "d", text: "Etek", correct: false }] },
    { id: 6, type: "SELECT", question: "'Falda' ne demek?", options: [{ id: "a", text: "Elbise", correct: false }, { id: "b", text: "Etek", correct: true }, { id: "c", text: "Pantolon", correct: false }, { id: "d", text: "Şort", correct: false }] },
    { id: 7, type: "SELECT", question: "'Chaqueta' ne demek?", options: [{ id: "a", text: "Gömlek", correct: false }, { id: "b", text: "Ceket", correct: true }, { id: "c", text: "Kazak", correct: false }, { id: "d", text: "Mont", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Zapatos", options: [{ id: "a", text: "Çorap", correct: false }, { id: "b", text: "Ayakkabı", correct: true }, { id: "c", text: "Bot", correct: false }, { id: "d", text: "Terlik", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Sombrero' ne demek?", options: [{ id: "a", text: "Atkı", correct: false }, { id: "b", text: "Şapka", correct: true }, { id: "c", text: "Eldiven", correct: false }, { id: "d", text: "Bere", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Gömlek", correctAnswer: "Camisa" },
    { id: 11, type: "SELECT", question: "'Bufanda' ne demek?", options: [{ id: "a", text: "Şapka", correct: false }, { id: "b", text: "Atkı", correct: true }, { id: "c", text: "Eldiven", correct: false }, { id: "d", text: "Bere", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Llevo una camisa azul", options: [{ id: "a", text: "Mavi pantolon giyiyorum", correct: false }, { id: "b", text: "Mavi gömlek giyiyorum", correct: true }, { id: "c", text: "Mavi ceket giyiyorum", correct: false }, { id: "d", text: "Mavi elbise giyiyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Llevo una _____ roja. (etek)", options: [{ id: "a", text: "vestido", correct: false }, { id: "b", text: "falda", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Pantolon", correctAnswer: "Pantalón" },
    { id: 15, type: "SELECT", question: "'Corbata' ne demek?", options: [{ id: "a", text: "Atkı", correct: false }, { id: "b", text: "Kravat", correct: true }, { id: "c", text: "Kemer", correct: false }, { id: "d", text: "Papyon", correct: false }] },
    { id: 16, type: "SELECT", question: "'Cinturón' ne demek?", options: [{ id: "a", text: "Kravat", correct: false }, { id: "b", text: "Kemer", correct: true }, { id: "c", text: "Çorap", correct: false }, { id: "d", text: "Atkı", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mis zapatos son negros", options: [{ id: "a", text: "Ayakkabılarım beyaz", correct: false }, { id: "b", text: "Ayakkabılarım siyah", correct: true }, { id: "c", text: "Çoraplarım siyah", correct: false }, { id: "d", text: "Botlarım siyah", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Mavi bir gömlek giyiyorum.", correctAnswer: "Llevo una camisa azul" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Necesito un _____ nuevo. (şapka)", options: [{ id: "a", text: "bufanda", correct: false }, { id: "b", text: "sombrero", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bu elbise çok güzel.", correctAnswer: "Este vestido es muy bonito" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Hace frío, ponte la _____. (ceket)", options: [{ id: "a", text: "camisa", correct: false }, { id: "b", text: "chaqueta", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Ayakkabıları nereden satın aldın?", correctAnswer: "¿Dónde compraste los zapatos?" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me pongo el abrigo porque hace frío", options: [{ id: "a", text: "Sıcak olduğu için ceket giyiyorum", correct: false }, { id: "b", text: "Soğuk olduğu için mont giyiyorum", correct: true }, { id: "c", text: "Yağmur yağıyor mont giyiyorum", correct: false }, { id: "d", text: "Soğuk olduğu için kazak giyiyorum", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Beyaz gömlek, siyah pantolon ve kırmızı kravat giyiyorum", correctAnswer: "Llevo una camisa blanca, un pantalón negro y una corbata roja" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Düğün için yeni bir elbise ve ayakkabı almalıyım", correctAnswer: "Tengo que comprar un vestido nuevo y zapatos para la boda" },
];

export const unit12Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Camiseta' ne demek?", options: [{ id: "a", text: "Gömlek", correct: false }, { id: "b", text: "Tişört", correct: true }, { id: "c", text: "Bluz", correct: false }, { id: "d", text: "Kazak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Jersey' ne demek?", options: [{ id: "a", text: "Tişört", correct: false }, { id: "b", text: "Kazak", correct: true }, { id: "c", text: "Gömlek", correct: false }, { id: "d", text: "Ceket", correct: false }] },
    { id: 3, type: "SELECT", question: "'Abrigo' ne demek?", options: [{ id: "a", text: "Ceket", correct: false }, { id: "b", text: "Mont/Palto", correct: true }, { id: "c", text: "Kazak", correct: false }, { id: "d", text: "Yelek", correct: false }] },
    { id: 4, type: "SELECT", question: "'Calcetines' ne demek?", options: [{ id: "a", text: "Ayakkabı", correct: false }, { id: "b", text: "Çorap", correct: true }, { id: "c", text: "Terlik", correct: false }, { id: "d", text: "Bot", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Camiseta", options: [{ id: "a", text: "Gömlek", correct: false }, { id: "b", text: "Tişört", correct: true }, { id: "c", text: "Kazak", correct: false }, { id: "d", text: "Bluz", correct: false }] },
    { id: 6, type: "SELECT", question: "'Sudadera' ne demek?", options: [{ id: "a", text: "Kazak", correct: false }, { id: "b", text: "Sweatshirt", correct: true }, { id: "c", text: "Ceket", correct: false }, { id: "d", text: "Tişört", correct: false }] },
    { id: 7, type: "SELECT", question: "'Pantalones cortos' ne demek?", options: [{ id: "a", text: "Uzun pantolon", correct: false }, { id: "b", text: "Şort", correct: true }, { id: "c", text: "Etek", correct: false }, { id: "d", text: "Kapri", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Abrigo", options: [{ id: "a", text: "Ceket", correct: false }, { id: "b", text: "Mont/Palto", correct: true }, { id: "c", text: "Kazak", correct: false }, { id: "d", text: "Yelek", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Botas' ne demek?", options: [{ id: "a", text: "Ayakkabı", correct: false }, { id: "b", text: "Bot", correct: true }, { id: "c", text: "Terlik", correct: false }, { id: "d", text: "Çorap", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Tişört", correctAnswer: "Camiseta" },
    { id: 11, type: "SELECT", question: "'Zapatillas' ne demek?", options: [{ id: "a", text: "Bot", correct: false }, { id: "b", text: "Spor ayakkabı/Terlik", correct: true }, { id: "c", text: "Topuklu", correct: false }, { id: "d", text: "Sandalet", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me pongo el jersey porque hace frío", options: [{ id: "a", text: "Sıcak olduğu için tişört giyiyorum", correct: false }, { id: "b", text: "Soğuk olduğu için kazak giyiyorum", correct: true }, { id: "c", text: "Yağmur yağıyor mont giyiyorum", correct: false }, { id: "d", text: "Güneşli olduğu için şort giyiyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Llevo _____ blancos. (çorap)", options: [{ id: "a", text: "zapatos", correct: false }, { id: "b", text: "calcetines", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Kazak", correctAnswer: "Jersey" },
    { id: 15, type: "SELECT", question: "'Chanclas' ne demek?", options: [{ id: "a", text: "Bot", correct: false }, { id: "b", text: "Parmak arası terlik", correct: true }, { id: "c", text: "Spor ayakkabı", correct: false }, { id: "d", text: "Sandalet", correct: false }] },
    { id: 16, type: "SELECT", question: "'Sandalias' ne demek?", options: [{ id: "a", text: "Terlik", correct: false }, { id: "b", text: "Sandalet", correct: true }, { id: "c", text: "Bot", correct: false }, { id: "d", text: "Topuklu", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "En verano llevo pantalones cortos", options: [{ id: "a", text: "Kışın uzun pantolon giyerim", correct: false }, { id: "b", text: "Yazın şort giyerim", correct: true }, { id: "c", text: "Yazın etek giyerim", correct: false }, { id: "d", text: "Kışın şort giyerim", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Kışın mont ve bot giyerim.", correctAnswer: "En invierno llevo abrigo y botas" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Necesito unas _____ nuevas. (spor ayakkabı)", options: [{ id: "a", text: "botas", correct: false }, { id: "b", text: "zapatillas", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bu tişört çok rahat.", correctAnswer: "Esta camiseta es muy cómoda" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Hace calor, me pongo _____. (şort)", options: [{ id: "a", text: "pantalón", correct: false }, { id: "b", text: "pantalones cortos", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Plajda sandalet ve şort giyerim.", correctAnswer: "En la playa llevo sandalias y pantalones cortos" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me compré unas botas de cuero", options: [{ id: "a", text: "Kumaş bot aldım", correct: false }, { id: "b", text: "Deri bot aldım", correct: true }, { id: "c", text: "Plastik terlik aldım", correct: false }, { id: "d", text: "Spor ayakkabı aldım", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Yazın tişört, şort ve sandalet giyerim", correctAnswer: "En verano llevo camiseta, pantalones cortos y sandalias" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Spor yaparken sweatshirt, eşofman altı ve spor ayakkabı giyerim", correctAnswer: "Cuando hago deporte llevo sudadera, pantalón de chándal y zapatillas" },
];

export const unit12Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Ropa interior' ne demek?", options: [{ id: "a", text: "Dış giyim", correct: false }, { id: "b", text: "İç çamaşırı", correct: true }, { id: "c", text: "Pijama", correct: false }, { id: "d", text: "Ev giysileri", correct: false }] },
    { id: 2, type: "SELECT", question: "'Pijama' ne demek?", options: [{ id: "a", text: "İç çamaşırı", correct: false }, { id: "b", text: "Pijama", correct: true }, { id: "c", text: "Gecelik", correct: false }, { id: "d", text: "Bornoz", correct: false }] },
    { id: 3, type: "SELECT", question: "'Traje' ne demek?", options: [{ id: "a", text: "Elbise", correct: false }, { id: "b", text: "Takım elbise", correct: true }, { id: "c", text: "Kostüm", correct: false }, { id: "d", text: "Frak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Guantes' ne demek?", options: [{ id: "a", text: "Çorap", correct: false }, { id: "b", text: "Eldiven", correct: true }, { id: "c", text: "Atkı", correct: false }, { id: "d", text: "Bere", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Traje", options: [{ id: "a", text: "Elbise", correct: false }, { id: "b", text: "Takım elbise", correct: true }, { id: "c", text: "Ceket", correct: false }, { id: "d", text: "Gömlek", correct: false }] },
    { id: 6, type: "SELECT", question: "'Gorro' ne demek?", options: [{ id: "a", text: "Şapka", correct: false }, { id: "b", text: "Bere", correct: true }, { id: "c", text: "Atkı", correct: false }, { id: "d", text: "Eldiven", correct: false }] },
    { id: 7, type: "SELECT", question: "'Bañador' ne demek?", options: [{ id: "a", text: "Bikini", correct: false }, { id: "b", text: "Mayo", correct: true }, { id: "c", text: "Şort", correct: false }, { id: "d", text: "Havlu", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Guantes", options: [{ id: "a", text: "Çorap", correct: false }, { id: "b", text: "Eldiven", correct: true }, { id: "c", text: "Atkı", correct: false }, { id: "d", text: "Bere", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Bikini' ne demek?", options: [{ id: "a", text: "Mayo", correct: false }, { id: "b", text: "Bikini", correct: true }, { id: "c", text: "Şort", correct: false }, { id: "d", text: "Etek", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Takım elbise", correctAnswer: "Traje" },
    { id: 11, type: "SELECT", question: "'Uniforme' ne demek?", options: [{ id: "a", text: "Elbise", correct: false }, { id: "b", text: "Üniforma", correct: true }, { id: "c", text: "İş kıyafeti", correct: false }, { id: "d", text: "Forma", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "En la piscina llevo bañador", options: [{ id: "a", text: "Plajda bikini giyerim", correct: false }, { id: "b", text: "Havuzda mayo giyerim", correct: true }, { id: "c", text: "Denizde şort giyerim", correct: false }, { id: "d", text: "Evde pijama giyerim", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Para dormir me pongo el _____. (pijama)", options: [{ id: "a", text: "traje", correct: false }, { id: "b", text: "pijama", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Eldiven", correctAnswer: "Guantes" },
    { id: 15, type: "SELECT", question: "'Chaleco' ne demek?", options: [{ id: "a", text: "Ceket", correct: false }, { id: "b", text: "Yelek", correct: true }, { id: "c", text: "Kazak", correct: false }, { id: "d", text: "Mont", correct: false }] },
    { id: 16, type: "SELECT", question: "'Albornoz' ne demek?", options: [{ id: "a", text: "Pijama", correct: false }, { id: "b", text: "Bornoz", correct: true }, { id: "c", text: "Havlu", correct: false }, { id: "d", text: "Gecelik", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Para la entrevista llevo traje y corbata", options: [{ id: "a", text: "Toplantıya gömlek giyerim", correct: false }, { id: "b", text: "Mülakata takım elbise ve kravat giyerim", correct: true }, { id: "c", text: "İşe ceket giyerim", correct: false }, { id: "d", text: "Düğüne elbise giyerim", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Kışın eldiven ve bere giyerim.", correctAnswer: "En invierno llevo guantes y gorro" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Para nadar necesito un _____. (mayo)", options: [{ id: "a", text: "bikini", correct: false }, { id: "b", text: "bañador", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "İş için üniforma giyiyorum.", correctAnswer: "Para trabajar llevo uniforme" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Me cambio la ropa y me pongo el _____. (pijama)", options: [{ id: "a", text: "traje", correct: false }, { id: "b", text: "pijama", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Düşte sonra bornozumu giyerim.", correctAnswer: "Después de ducharme me pongo el albornoz" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me puse el traje para la boda", options: [{ id: "a", text: "Parti için elbise giydim", correct: false }, { id: "b", text: "Düğün için takım elbise giydim", correct: true }, { id: "c", text: "Toplantı için ceket giydim", correct: false }, { id: "d", text: "Mülakat için gömlek giydim", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Resmi bir toplantıya takım elbise, kravat ve deri ayakkabı giyerim", correctAnswer: "Para una reunión formal llevo traje, corbata y zapatos de cuero" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Plaja mayo, şort, sandalet ve güneş gözlüğü getirdim", correctAnswer: "Traje a la playa bañador, pantalones cortos, sandalias y gafas de sol" },
];

export const unit12Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Ponerse' ne demek?", options: [{ id: "a", text: "Çıkarmak", correct: false }, { id: "b", text: "Giymek", correct: true }, { id: "c", text: "Yıkamak", correct: false }, { id: "d", text: "Katlamak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Quitarse' ne demek?", options: [{ id: "a", text: "Giymek", correct: false }, { id: "b", text: "Çıkarmak", correct: true }, { id: "c", text: "Denemek", correct: false }, { id: "d", text: "Satın almak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Llevar' (giyim için) ne demek?", options: [{ id: "a", text: "Almak", correct: false }, { id: "b", text: "Giymek/Üstünde olmak", correct: true }, { id: "c", text: "Çıkarmak", correct: false }, { id: "d", text: "Yıkamak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Probarse' ne demek?", options: [{ id: "a", text: "Denemek (giysi)", correct: true }, { id: "b", text: "Satın almak", correct: false }, { id: "c", text: "İade etmek", correct: false }, { id: "d", text: "Aramak", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ponerse", options: [{ id: "a", text: "Çıkarmak", correct: false }, { id: "b", text: "Giymek", correct: true }, { id: "c", text: "Yıkamak", correct: false }, { id: "d", text: "Denemek", correct: false }] },
    { id: 6, type: "SELECT", question: "'Talla' ne demek?", options: [{ id: "a", text: "Renk", correct: false }, { id: "b", text: "Beden", correct: true }, { id: "c", text: "Model", correct: false }, { id: "d", text: "Fiyat", correct: false }] },
    { id: 7, type: "SELECT", question: "'Grande' (beden için) ne demek?", options: [{ id: "a", text: "Küçük", correct: false }, { id: "b", text: "Büyük", correct: true }, { id: "c", text: "Orta", correct: false }, { id: "d", text: "Dar", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quitarse", options: [{ id: "a", text: "Giymek", correct: false }, { id: "b", text: "Çıkarmak", correct: true }, { id: "c", text: "Denemek", correct: false }, { id: "d", text: "Satın almak", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Pequeño' (beden için) ne demek?", options: [{ id: "a", text: "Büyük", correct: false }, { id: "b", text: "Küçük", correct: true }, { id: "c", text: "Orta", correct: false }, { id: "d", text: "Bol", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Giymek", correctAnswer: "Ponerse" },
    { id: 11, type: "SELECT", question: "'Mediano' ne demek?", options: [{ id: "a", text: "Büyük", correct: false }, { id: "b", text: "Orta", correct: true }, { id: "c", text: "Küçük", correct: false }, { id: "d", text: "Çok büyük", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Puedo probarme este vestido?", options: [{ id: "a", text: "Bu elbiseyi satın alabilir miyim?", correct: false }, { id: "b", text: "Bu elbiseyi deneyebilir miyim?", correct: true }, { id: "c", text: "Bu elbise kaç para?", correct: false }, { id: "d", text: "Bu elbisenin bedeni ne?", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "¿Qué _____ usas? (beden)", options: [{ id: "a", text: "color", correct: false }, { id: "b", text: "talla", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Beden", correctAnswer: "Talla" },
    { id: 15, type: "SELECT", question: "'Apretado' ne demek?", options: [{ id: "a", text: "Bol", correct: false }, { id: "b", text: "Dar/Sıkı", correct: true }, { id: "c", text: "Geniş", correct: false }, { id: "d", text: "Kısa", correct: false }] },
    { id: 16, type: "SELECT", question: "'Suelto' ne demek?", options: [{ id: "a", text: "Dar", correct: false }, { id: "b", text: "Bol/Gevşek", correct: true }, { id: "c", text: "Uzun", correct: false }, { id: "d", text: "Kısa", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Este pantalón me queda grande", options: [{ id: "a", text: "Bu pantolon bana küçük geliyor", correct: false }, { id: "b", text: "Bu pantolon bana büyük geliyor", correct: true }, { id: "c", text: "Bu pantolon bana tam geliyor", correct: false }, { id: "d", text: "Bu pantolon bana dar geliyor", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bu elbise bana çok küçük geliyor.", correctAnswer: "Este vestido me queda muy pequeño" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Quiero _____ estos zapatos. (denemek)", options: [{ id: "a", text: "llevar", correct: false }, { id: "b", text: "probarme", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bedenin ne?", correctAnswer: "¿Cuál es tu talla?" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Esta camisa me queda _____. (dar)", options: [{ id: "a", text: "suelta", correct: false }, { id: "b", text: "apretada", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Ceketi çıkar, sıcak.", correctAnswer: "Quítate la chaqueta, hace calor" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Tiene esta camisa en una talla más grande?", options: [{ id: "a", text: "Bu gömlek daha küçük bedende var mı?", correct: false }, { id: "b", text: "Bu gömlek daha büyük bedende var mı?", correct: true }, { id: "c", text: "Bu gömlekten başka renk var mı?", correct: false }, { id: "d", text: "Bu gömlek indirimde mi?", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Bu pantolon bana tam geliyor, alıyorum", correctAnswer: "Este pantalón me queda perfecto, me lo llevo" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Giyinme odasında bu elbiseyi denedim ama bana küçük geldi, daha büyük beden istiyorum", correctAnswer: "Me probé este vestido en el probador pero me queda pequeño, quiero una talla más grande" },
];
