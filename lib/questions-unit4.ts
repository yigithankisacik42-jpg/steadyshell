/**
 * LinguaFlow - Ünite 4: Renkler (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit4Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Rojo' hangi renk?", options: [{ id: "a", text: "Mavi", correct: false }, { id: "b", text: "Kırmızı", correct: true }, { id: "c", text: "Yeşil", correct: false }, { id: "d", text: "Sarı", correct: false }] },
    { id: 2, type: "SELECT", question: "'Azul' hangi renk?", options: [{ id: "a", text: "Kırmızı", correct: false }, { id: "b", text: "Mavi", correct: true }, { id: "c", text: "Beyaz", correct: false }, { id: "d", text: "Siyah", correct: false }] },
    { id: 3, type: "SELECT", question: "'Verde' hangi renk?", options: [{ id: "a", text: "Mor", correct: false }, { id: "b", text: "Yeşil", correct: true }, { id: "c", text: "Gri", correct: false }, { id: "d", text: "Pembe", correct: false }] },
    { id: 4, type: "SELECT", question: "'Amarillo' hangi renk?", options: [{ id: "a", text: "Turuncu", correct: false }, { id: "b", text: "Sarı", correct: true }, { id: "c", text: "Yeşil", correct: false }, { id: "d", text: "Kahverengi", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun rengi seç:", audioText: "Rojo", options: [{ id: "a", text: "Mavi", correct: false }, { id: "b", text: "Kırmızı", correct: true }, { id: "c", text: "Yeşil", correct: false }, { id: "d", text: "Sarı", correct: false }] },
    { id: 6, type: "SELECT", question: "'Negro' hangi renk?", options: [{ id: "a", text: "Beyaz", correct: false }, { id: "b", text: "Siyah", correct: true }, { id: "c", text: "Gri", correct: false }, { id: "d", text: "Kahverengi", correct: false }] },
    { id: 7, type: "SELECT", question: "'Blanco' hangi renk?", options: [{ id: "a", text: "Siyah", correct: false }, { id: "b", text: "Beyaz", correct: true }, { id: "c", text: "Gri", correct: false }, { id: "d", text: "Mavi", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun rengi seç:", audioText: "Azul", options: [{ id: "a", text: "Kırmızı", correct: false }, { id: "b", text: "Mavi", correct: true }, { id: "c", text: "Yeşil", correct: false }, { id: "d", text: "Mor", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Naranja' hangi renk?", options: [{ id: "a", text: "Sarı", correct: false }, { id: "b", text: "Turuncu", correct: true }, { id: "c", text: "Kırmızı", correct: false }, { id: "d", text: "Pembe", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Kırmızı", correctAnswer: "Rojo" },
    { id: 11, type: "SELECT", question: "'Rosa' hangi renk?", options: [{ id: "a", text: "Kırmızı", correct: false }, { id: "b", text: "Pembe", correct: true }, { id: "c", text: "Mor", correct: false }, { id: "d", text: "Turuncu", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun rengi seç:", audioText: "Amarillo", options: [{ id: "a", text: "Turuncu", correct: false }, { id: "b", text: "Sarı", correct: true }, { id: "c", text: "Yeşil", correct: false }, { id: "d", text: "Kahverengi", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El cielo es _____. (mavi)", options: [{ id: "a", text: "verde", correct: false }, { id: "b", text: "azul", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Mavi", correctAnswer: "Azul" },
    { id: 15, type: "SELECT", question: "'Gris' hangi renk?", options: [{ id: "a", text: "Siyah", correct: false }, { id: "b", text: "Gri", correct: true }, { id: "c", text: "Beyaz", correct: false }, { id: "d", text: "Kahverengi", correct: false }] },
    { id: 16, type: "SELECT", question: "'Marrón' hangi renk?", options: [{ id: "a", text: "Gri", correct: false }, { id: "b", text: "Kahverengi", correct: true }, { id: "c", text: "Siyah", correct: false }, { id: "d", text: "Mor", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun rengi seç:", audioText: "Blanco", options: [{ id: "a", text: "Siyah", correct: false }, { id: "b", text: "Beyaz", correct: true }, { id: "c", text: "Gri", correct: false }, { id: "d", text: "Mavi", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Elma kırmızıdır.", correctAnswer: "La manzana es roja" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El sol es _____. (sarı)", options: [{ id: "a", text: "rojo", correct: false }, { id: "b", text: "amarillo", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Kar beyazdır.", correctAnswer: "La nieve es blanca" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "La hierba es _____. (yeşil)", options: [{ id: "a", text: "azul", correct: false }, { id: "b", text: "verde", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Çimen yeşildir.", correctAnswer: "La hierba es verde" },
    { id: 23, type: "LISTENING", question: "Duyduğun cümleyi seç:", audioText: "El sol es amarillo", options: [{ id: "a", text: "Güneş kırmızıdır", correct: false }, { id: "b", text: "Güneş sarıdır", correct: true }, { id: "c", text: "Güneş turuncudur", correct: false }, { id: "d", text: "Güneş beyazdır", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Gökyüzü gündüz mavi, gece siyah", correctAnswer: "El cielo es azul de día, negro de noche" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "En sevdiğim renk yeşil", correctAnswer: "Mi color favorito es el verde" },
];

export const unit4Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Morado' hangi renk?", options: [{ id: "a", text: "Pembe", correct: false }, { id: "b", text: "Mor", correct: true }, { id: "c", text: "Mavi", correct: false }, { id: "d", text: "Kırmızı", correct: false }] },
    { id: 2, type: "SELECT", question: "'Claro' ne demek?", options: [{ id: "a", text: "Koyu", correct: false }, { id: "b", text: "Açık", correct: true }, { id: "c", text: "Parlak", correct: false }, { id: "d", text: "Mat", correct: false }] },
    { id: 3, type: "SELECT", question: "'Oscuro' ne demek?", options: [{ id: "a", text: "Açık", correct: false }, { id: "b", text: "Koyu", correct: true }, { id: "c", text: "Parlak", correct: false }, { id: "d", text: "Pastel", correct: false }] },
    { id: 4, type: "SELECT", question: "'Dorado' hangi renk?", options: [{ id: "a", text: "Gümüş", correct: false }, { id: "b", text: "Altın rengi", correct: true }, { id: "c", text: "Bronz", correct: false }, { id: "d", text: "Bakır", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun rengi seç:", audioText: "Marrón", options: [{ id: "a", text: "Kahverengi", correct: true }, { id: "b", text: "Siyah", correct: false }, { id: "c", text: "Gri", correct: false }, { id: "d", text: "Mor", correct: false }] },
    { id: 6, type: "SELECT", question: "'Plateado' hangi renk?", options: [{ id: "a", text: "Altın", correct: false }, { id: "b", text: "Gümüş rengi", correct: true }, { id: "c", text: "Bronz", correct: false }, { id: "d", text: "Bakır", correct: false }] },
    { id: 7, type: "SELECT", question: "'Brillante' ne demek?", options: [{ id: "a", text: "Mat", correct: false }, { id: "b", text: "Parlak", correct: true }, { id: "c", text: "Koyu", correct: false }, { id: "d", text: "Soluk", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun rengi seç:", audioText: "Gris", options: [{ id: "a", text: "Siyah", correct: false }, { id: "b", text: "Gri", correct: true }, { id: "c", text: "Beyaz", correct: false }, { id: "d", text: "Mavi", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Kahverengi", correctAnswer: "Marrón" },
    { id: 10, type: "SELECT", question: "'Azul claro' ne demek?", options: [{ id: "a", text: "Koyu mavi", correct: false }, { id: "b", text: "Açık mavi", correct: true }, { id: "c", text: "Lacivert", correct: false }, { id: "d", text: "Turkuaz", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğun rengi seç:", audioText: "Azul claro", options: [{ id: "a", text: "Koyu mavi", correct: false }, { id: "b", text: "Açık mavi", correct: true }, { id: "c", text: "Lacivert", correct: false }, { id: "d", text: "Turkuaz", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "El anillo es _____. (altın)", options: [{ id: "a", text: "plateado", correct: false }, { id: "b", text: "dorado", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Mor", correctAnswer: "Morado" },
    { id: 14, type: "SELECT", question: "'Verde oscuro' ne demek?", options: [{ id: "a", text: "Açık yeşil", correct: false }, { id: "b", text: "Koyu yeşil", correct: true }, { id: "c", text: "Sarımsı yeşil", correct: false }, { id: "d", text: "Turkuaz", correct: false }] },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Prefiero el azul _____. (koyu)", options: [{ id: "a", text: "claro", correct: false }, { id: "b", text: "oscuro", correct: true }] },
    { id: 16, type: "SELECT", question: "'Rosa claro' ne demek?", options: [{ id: "a", text: "Koyu pembe", correct: false }, { id: "b", text: "Açık pembe", correct: true }, { id: "c", text: "Fuşya", correct: false }, { id: "d", text: "Mor", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun rengi seç:", audioText: "Verde oscuro", options: [{ id: "a", text: "Açık yeşil", correct: false }, { id: "b", text: "Koyu yeşil", correct: true }, { id: "c", text: "Yeşilimsi", correct: false }, { id: "d", text: "Turkuaz", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Arabam siyah.", correctAnswer: "Mi coche es negro" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Mor çiçekler güzel.", correctAnswer: "Las flores moradas son bonitas" },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "El vestido es rosa _____. (açık)", options: [{ id: "a", text: "oscuro", correct: false }, { id: "b", text: "claro", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Koyu yeşil gömlek giyiyorum.", correctAnswer: "Llevo una camisa verde oscuro" },
    { id: 22, type: "LISTENING", question: "Duyduğun cümleyi seç:", audioText: "Mi coche es negro", options: [{ id: "a", text: "Arabam beyaz", correct: false }, { id: "b", text: "Arabam siyah", correct: true }, { id: "c", text: "Arabam gri", correct: false }, { id: "d", text: "Arabam mavi", correct: false }] },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "Altın yüzük çok pahalı", correctAnswer: "El anillo dorado es muy caro" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Gümüş bileklik güzel", correctAnswer: "La pulsera plateada es bonita" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Açık mavi gömlek ve koyu mavi pantolon giyiyorum", correctAnswer: "Llevo una camisa azul claro y pantalones azul oscuro" },
];

export const unit4Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Color' ne demek?", options: [{ id: "a", text: "Şekil", correct: false }, { id: "b", text: "Renk", correct: true }, { id: "c", text: "Boyut", correct: false }, { id: "d", text: "Desen", correct: false }] },
    { id: 2, type: "SELECT", question: "'Favorito' ne demek?", options: [{ id: "a", text: "En kötü", correct: false }, { id: "b", text: "Favori/En sevilen", correct: true }, { id: "c", text: "Normal", correct: false }, { id: "d", text: "Rastgele", correct: false }] },
    { id: 3, type: "SELECT", question: "'Colorido' ne demek?", options: [{ id: "a", text: "Renksiz", correct: false }, { id: "b", text: "Renkli", correct: true }, { id: "c", text: "Soluk", correct: false }, { id: "d", text: "Tek renkli", correct: false }] },
    { id: 4, type: "SELECT", question: "'Pintar' ne demek?", options: [{ id: "a", text: "Temizlemek", correct: false }, { id: "b", text: "Boyamak", correct: true }, { id: "c", text: "Kesmek", correct: false }, { id: "d", text: "Yapıştırmak", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun kelimeyi seç:", audioText: "Color", options: [{ id: "a", text: "Şekil", correct: false }, { id: "b", text: "Renk", correct: true }, { id: "c", text: "Boyut", correct: false }, { id: "d", text: "Desen", correct: false }] },
    { id: 6, type: "SELECT", question: "'Arcoíris' ne demek?", options: [{ id: "a", text: "Gökyüzü", correct: false }, { id: "b", text: "Gökkuşağı", correct: true }, { id: "c", text: "Bulut", correct: false }, { id: "d", text: "Yıldız", correct: false }] },
    { id: 7, type: "SELECT", question: "'Bandera' ne demek?", options: [{ id: "a", text: "Şapka", correct: false }, { id: "b", text: "Bayrak", correct: true }, { id: "c", text: "Çiçek", correct: false }, { id: "d", text: "Araba", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun cümleyi seç:", audioText: "Me gusta el color rojo", options: [{ id: "a", text: "Mavi rengi severim", correct: false }, { id: "b", text: "Kırmızı rengi severim", correct: true }, { id: "c", text: "Yeşil rengi severim", correct: false }, { id: "d", text: "Sarı rengi severim", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "Türk bayrağı hangi renkler?", options: [{ id: "a", text: "Azul y blanco", correct: false }, { id: "b", text: "Rojo y blanco", correct: true }, { id: "c", text: "Verde y rojo", correct: false }, { id: "d", text: "Negro y amarillo", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bu ne renk?", correctAnswer: "¿De qué color es?" },
    { id: 11, type: "SELECT", question: "İspanya bayrağı hangi renkler?", options: [{ id: "a", text: "Rojo y azul", correct: false }, { id: "b", text: "Rojo y amarillo", correct: true }, { id: "c", text: "Verde y blanco", correct: false }, { id: "d", text: "Negro y rojo", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun cümleyi seç:", audioText: "La bandera es roja y amarilla", options: [{ id: "a", text: "Bayrak mavi ve beyaz", correct: false }, { id: "b", text: "Bayrak kırmızı ve sarı", correct: true }, { id: "c", text: "Bayrak yeşil ve kırmızı", correct: false }, { id: "d", text: "Bayrak siyah ve beyaz", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "¿De qué _____ es tu coche?", options: [{ id: "a", text: "marca", correct: false }, { id: "b", text: "color", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "En sevdiğim renk mavi.", correctAnswer: "Mi color favorito es el azul" },
    { id: 15, type: "SELECT", question: "Gökkuşağında kaç renk var?", options: [{ id: "a", text: "Cinco", correct: false }, { id: "b", text: "Siete", correct: true }, { id: "c", text: "Nueve", correct: false }, { id: "d", text: "Tres", correct: false }] },
    { id: 16, type: "SELECT", question: "'Colores' ne demek?", options: [{ id: "a", text: "Şekiller", correct: false }, { id: "b", text: "Renkler", correct: true }, { id: "c", text: "Boyutlar", correct: false }, { id: "d", text: "Desenler", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun cümleyi seç:", audioText: "Pinta de azul la pared", options: [{ id: "a", text: "Duvarı kırmızıya boya", correct: false }, { id: "b", text: "Duvarı maviye boya", correct: true }, { id: "c", text: "Duvarı beyaza boya", correct: false }, { id: "d", text: "Duvarı yeşile boya", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Gökkuşağında yedi renk var.", correctAnswer: "El arcoíris tiene siete colores" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "La bandera tiene tres _____. (renk)", options: [{ id: "a", text: "formas", correct: false }, { id: "b", text: "colores", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Voy a _____ la habitación de blanco.", options: [{ id: "a", text: "limpiar", correct: false }, { id: "b", text: "pintar", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Odayı beyaza boyayacağım.", correctAnswer: "Voy a pintar la habitación de blanco" },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Senin favori rengin hangisi?", correctAnswer: "¿Cuál es tu color favorito?" },
    { id: 23, type: "LISTENING", question: "Duyduğun cümleyi seç:", audioText: "Mi color favorito es el verde", options: [{ id: "a", text: "Favori rengim mavi", correct: false }, { id: "b", text: "Favori rengim yeşil", correct: true }, { id: "c", text: "Favori rengim kırmızı", correct: false }, { id: "d", text: "Favori rengim sarı", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Türk bayrağı kırmızı ve beyazdır", correctAnswer: "La bandera turca es roja y blanca" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Bu resimde çok renk var", correctAnswer: "Hay muchos colores en este cuadro" },
];

export const unit4Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Ojos' ne demek?", options: [{ id: "a", text: "Kulaklar", correct: false }, { id: "b", text: "Gözler", correct: true }, { id: "c", text: "Eller", correct: false }, { id: "d", text: "Ayaklar", correct: false }] },
    { id: 2, type: "SELECT", question: "'Pelo' ne demek?", options: [{ id: "a", text: "Göz", correct: false }, { id: "b", text: "Saç", correct: true }, { id: "c", text: "Kulak", correct: false }, { id: "d", text: "Burun", correct: false }] },
    { id: 3, type: "SELECT", question: "'Rubio' ne demek?", options: [{ id: "a", text: "Siyah saçlı", correct: false }, { id: "b", text: "Sarışın", correct: true }, { id: "c", text: "Kızıl", correct: false }, { id: "d", text: "Kahverengi saçlı", correct: false }] },
    { id: 4, type: "SELECT", question: "'Moreno' ne demek?", options: [{ id: "a", text: "Sarışın", correct: false }, { id: "b", text: "Esmer", correct: true }, { id: "c", text: "Kızıl", correct: false }, { id: "d", text: "Gri saçlı", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun kelimeyi seç:", audioText: "Ojos", options: [{ id: "a", text: "Kulak", correct: false }, { id: "b", text: "Gözler", correct: true }, { id: "c", text: "Eller", correct: false }, { id: "d", text: "Saç", correct: false }] },
    { id: 6, type: "SELECT", question: "'Pelirrojo' ne demek?", options: [{ id: "a", text: "Sarışın", correct: false }, { id: "b", text: "Kızıl saçlı", correct: true }, { id: "c", text: "Esmer", correct: false }, { id: "d", text: "Siyah saçlı", correct: false }] },
    { id: 7, type: "SELECT", question: "'Canoso' ne demek?", options: [{ id: "a", text: "Kel", correct: false }, { id: "b", text: "Kır/Beyaz saçlı", correct: true }, { id: "c", text: "Sarışın", correct: false }, { id: "d", text: "Siyah saçlı", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun cümleyi seç:", audioText: "Tengo ojos marrones", options: [{ id: "a", text: "Mavi gözlerim var", correct: false }, { id: "b", text: "Kahverengi gözlerim var", correct: true }, { id: "c", text: "Yeşil gözlerim var", correct: false }, { id: "d", text: "Siyah gözlerim var", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Turquesa' hangi renk?", options: [{ id: "a", text: "Mor", correct: false }, { id: "b", text: "Turkuaz", correct: true }, { id: "c", text: "Lacivert", correct: false }, { id: "d", text: "Pembe", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Saçım siyah.", correctAnswer: "Mi pelo es negro" },
    { id: 11, type: "SELECT", question: "'Beige' hangi renk?", options: [{ id: "a", text: "Kahverengi", correct: false }, { id: "b", text: "Bej/Krem", correct: true }, { id: "c", text: "Gri", correct: false }, { id: "d", text: "Beyaz", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun cümleyi seç:", audioText: "Ella es pelirroja", options: [{ id: "a", text: "O sarışın", correct: false }, { id: "b", text: "O kızıl saçlı", correct: true }, { id: "c", text: "O siyah saçlı", correct: false }, { id: "d", text: "O kahverengi saçlı", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Mis ojos son de color _____. (yeşil)", options: [{ id: "a", text: "azul", correct: false }, { id: "b", text: "verde", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Kız kardeşim sarışın.", correctAnswer: "Mi hermana es rubia" },
    { id: 15, type: "SELECT", question: "'Ojos verdes' ne demek?", options: [{ id: "a", text: "Mavi gözler", correct: false }, { id: "b", text: "Yeşil gözler", correct: true }, { id: "c", text: "Kahverengi gözler", correct: false }, { id: "d", text: "Siyah gözler", correct: false }] },
    { id: 16, type: "SELECT", question: "'Pelo largo' ne demek?", options: [{ id: "a", text: "Kısa saç", correct: false }, { id: "b", text: "Uzun saç", correct: true }, { id: "c", text: "Dalgalı saç", correct: false }, { id: "d", text: "Düz saç", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun rengi seç:", audioText: "Turquesa", options: [{ id: "a", text: "Mor", correct: false }, { id: "b", text: "Turkuaz", correct: true }, { id: "c", text: "Lacivert", correct: false }, { id: "d", text: "Pembe", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Gözlerin ne renk?", correctAnswer: "¿De qué color son tus ojos?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi hermana es _____. (sarışın)", options: [{ id: "a", text: "morena", correct: false }, { id: "b", text: "rubia", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "El mar es de color _____. (turkuaz)", options: [{ id: "a", text: "verde", correct: false }, { id: "b", text: "turquesa", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Kırmızı araba çok güzel.", correctAnswer: "El coche rojo es muy bonito" },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Saç rengin nedir?", correctAnswer: "¿De qué color es tu pelo?" },
    { id: 23, type: "LISTENING", question: "Duyduğun cümleyi seç:", audioText: "Tengo pelo negro y ojos marrones", options: [{ id: "a", text: "Sarı saçım ve mavi gözlerim var", correct: false }, { id: "b", text: "Siyah saçım ve kahverengi gözlerim var", correct: true }, { id: "c", text: "Kızıl saçım ve yeşil gözlerim var", correct: false }, { id: "d", text: "Kahverengi saçım ve siyah gözlerim var", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Annem yeşil gözlü ve sarışın", correctAnswer: "Mi madre tiene ojos verdes y es rubia" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Babamın saçı kır ve gözleri kahverengi", correctAnswer: "Mi padre tiene pelo canoso y ojos marrones" },
];
