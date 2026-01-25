/**
 * SteadyShell Kelime Veritabanı - İspanyolca A1
 * Her ünite için ayrı kelime listesi
 */

export interface Vocabulary {
    word: string;
    meaning: string;
    pronunciation: string;
    example: string;
    exampleTranslation: string;
}

export interface UnitVocabulary {
    unitId: number;
    title: string;
    words: Vocabulary[];
}

// ===== ÜNİTE 1: SELAMLAŞMA =====
const unit1Vocab: UnitVocabulary = {
    unitId: 1, title: "Selamlaşma Kelimeleri",
    words: [
        { word: "Hola", meaning: "Merhaba", pronunciation: "o-la", example: "¡Hola, María!", exampleTranslation: "Merhaba María!" },
        { word: "Buenos días", meaning: "Günaydın", pronunciation: "bue-nos di-as", example: "Buenos días, señor.", exampleTranslation: "Günaydın efendim." },
        { word: "Buenas tardes", meaning: "Tünaydın", pronunciation: "bue-nas tar-des", example: "Buenas tardes a todos.", exampleTranslation: "Herkese tünaydın." },
        { word: "Buenas noches", meaning: "İyi geceler", pronunciation: "bue-nas no-çes", example: "Buenas noches, mamá.", exampleTranslation: "İyi geceler anne." },
        { word: "Adiós", meaning: "Hoşça kal", pronunciation: "a-dios", example: "Adiós, hasta mañana.", exampleTranslation: "Hoşça kal, yarın görüşürüz." },
        { word: "Hasta luego", meaning: "Görüşürüz", pronunciation: "as-ta lue-go", example: "Hasta luego, amigo.", exampleTranslation: "Görüşürüz arkadaş." },
        { word: "Gracias", meaning: "Teşekkürler", pronunciation: "gra-sias", example: "Muchas gracias.", exampleTranslation: "Çok teşekkürler." },
        { word: "Por favor", meaning: "Lütfen", pronunciation: "por fa-vor", example: "Un café, por favor.", exampleTranslation: "Bir kahve lütfen." },
        { word: "¿Cómo estás?", meaning: "Nasılsın?", pronunciation: "ko-mo es-tas", example: "Hola, ¿cómo estás?", exampleTranslation: "Merhaba, nasılsın?" },
        { word: "Muy bien", meaning: "Çok iyi", pronunciation: "muy bien", example: "Estoy muy bien.", exampleTranslation: "Çok iyiyim." },
        // Yeni kelimeler
        { word: "De nada", meaning: "Rica ederim", pronunciation: "de na-da", example: "Gracias. - De nada.", exampleTranslation: "Teşekkürler. - Rica ederim." },
        { word: "Perdón", meaning: "Pardon/Özür dilerim", pronunciation: "per-don", example: "Perdón, ¿dónde está el baño?", exampleTranslation: "Pardon, tuvalet nerede?" },
        { word: "Lo siento", meaning: "Üzgünüm", pronunciation: "lo sien-to", example: "Lo siento mucho.", exampleTranslation: "Çok üzgünüm." },
        { word: "¿Cómo te llamas?", meaning: "Adın ne?", pronunciation: "ko-mo te ya-mas", example: "Hola, ¿cómo te llamas?", exampleTranslation: "Merhaba, adın ne?" },
        { word: "Me llamo", meaning: "Benim adım", pronunciation: "me ya-mo", example: "Me llamo Carlos.", exampleTranslation: "Benim adım Carlos." },
        { word: "Mucho gusto", meaning: "Memnun oldum", pronunciation: "mu-ço gus-to", example: "Mucho gusto en conocerte.", exampleTranslation: "Tanıştığımıza memnun oldum." },
        { word: "Igualmente", meaning: "Ben de", pronunciation: "i-gual-men-te", example: "Mucho gusto. - Igualmente.", exampleTranslation: "Memnun oldum. - Ben de." },
        { word: "¿Qué tal?", meaning: "Nasıl gidiyor?", pronunciation: "ke tal", example: "¡Hola! ¿Qué tal?", exampleTranslation: "Merhaba! Nasıl gidiyor?" },
        { word: "Bien", meaning: "İyi", pronunciation: "bien", example: "Estoy bien.", exampleTranslation: "İyiyim." },
        { word: "Mal", meaning: "Kötü", pronunciation: "mal", example: "Estoy mal hoy.", exampleTranslation: "Bugün kötüyüm." },
        { word: "Regular", meaning: "Şöyle böyle", pronunciation: "re-gu-lar", example: "Estoy regular.", exampleTranslation: "Şöyle böyleyim." },
        { word: "Hasta mañana", meaning: "Yarın görüşürüz", pronunciation: "as-ta ma-nya-na", example: "Adiós, hasta mañana.", exampleTranslation: "Hoşça kal, yarın görüşürüz." },
        { word: "Hasta pronto", meaning: "Yakında görüşürüz", pronunciation: "as-ta pron-to", example: "Hasta pronto, amigo.", exampleTranslation: "Yakında görüşürüz, arkadaş." },
        { word: "Bienvenido/a", meaning: "Hoş geldin", pronunciation: "bien-ve-ni-do", example: "¡Bienvenido a España!", exampleTranslation: "İspanya'ya hoş geldin!" },
        { word: "¿De dónde eres?", meaning: "Nerelisin?", pronunciation: "de don-de e-res", example: "¿De dónde eres?", exampleTranslation: "Nerelisin?" },
        { word: "Soy de", meaning: "...liyim/...danım", pronunciation: "soy de", example: "Soy de Turquía.", exampleTranslation: "Türkiye'liyim." },
        { word: "Encantado/a", meaning: "Memnun oldum", pronunciation: "en-kan-ta-do", example: "Encantado de conocerte.", exampleTranslation: "Tanıştığımıza memnun oldum." },
        { word: "Señor", meaning: "Bay/Efendi", pronunciation: "se-nyor", example: "Buenos días, señor.", exampleTranslation: "Günaydın, bayım." },
        { word: "Señora", meaning: "Bayan/Hanım", pronunciation: "se-nyo-ra", example: "Buenas tardes, señora.", exampleTranslation: "İyi günler, hanımefendi." },
        { word: "Señorita", meaning: "Bayan (genç)", pronunciation: "se-nyo-ri-ta", example: "Hola, señorita.", exampleTranslation: "Merhaba, bayan." },
    ]
};

// ===== ÜNİTE 2: SAYILAR =====
const unit2Vocab: UnitVocabulary = {
    unitId: 2, title: "Sayılar 1-20",
    words: [
        { word: "Uno", meaning: "1", pronunciation: "u-no", example: "Tengo un libro.", exampleTranslation: "Bir kitabım var." },
        { word: "Dos", meaning: "2", pronunciation: "dos", example: "Dos cafés, por favor.", exampleTranslation: "İki kahve lütfen." },
        { word: "Tres", meaning: "3", pronunciation: "tres", example: "Tengo tres hermanos.", exampleTranslation: "Üç kardeşim var." },
        { word: "Cuatro", meaning: "4", pronunciation: "kua-tro", example: "El coche tiene cuatro ruedas.", exampleTranslation: "Arabanın dört tekerleği var." },
        { word: "Cinco", meaning: "5", pronunciation: "sin-ko", example: "Cinco euros.", exampleTranslation: "Beş euro." },
        { word: "Seis", meaning: "6", pronunciation: "seys", example: "Seis manzanas.", exampleTranslation: "Altı elma." },
        { word: "Siete", meaning: "7", pronunciation: "sie-te", example: "Siete días.", exampleTranslation: "Yedi gün." },
        { word: "Ocho", meaning: "8", pronunciation: "o-ço", example: "Ocho horas.", exampleTranslation: "Sekiz saat." },
        { word: "Nueve", meaning: "9", pronunciation: "nue-ve", example: "Nueve personas.", exampleTranslation: "Dokuz kişi." },
        { word: "Diez", meaning: "10", pronunciation: "dyes", example: "Diez minutos.", exampleTranslation: "On dakika." },
        { word: "Once", meaning: "11", pronunciation: "on-se", example: "Once estudiantes.", exampleTranslation: "On bir öğrenci." },
        { word: "Doce", meaning: "12", pronunciation: "do-se", example: "Doce meses.", exampleTranslation: "On iki ay." },
        { word: "Trece", meaning: "13", pronunciation: "tre-se", example: "Trece años.", exampleTranslation: "On üç yaşında." },
        { word: "Catorce", meaning: "14", pronunciation: "ka-tor-se", example: "Catorce libros.", exampleTranslation: "On dört kitap." },
        { word: "Quince", meaning: "15", pronunciation: "kin-se", example: "Tengo quince años.", exampleTranslation: "On beş yaşındayım." },
        { word: "Dieciséis", meaning: "16", pronunciation: "die-si-seys", example: "Dieciséis euros.", exampleTranslation: "On altı euro." },
        { word: "Diecisiete", meaning: "17", pronunciation: "die-si-sie-te", example: "Diecisiete kilómetros.", exampleTranslation: "On yedi kilometre." },
        { word: "Dieciocho", meaning: "18", pronunciation: "die-si-o-ço", example: "Tiene dieciocho años.", exampleTranslation: "On sekiz yaşında." },
        { word: "Diecinueve", meaning: "19", pronunciation: "die-si-nue-ve", example: "Diecinueve personas.", exampleTranslation: "On dokuz kişi." },
        { word: "Veinte", meaning: "20", pronunciation: "veyn-te", example: "Veinte personas.", exampleTranslation: "Yirmi kişi." },
        { word: "Cero", meaning: "0", pronunciation: "se-ro", example: "Cero grados.", exampleTranslation: "Sıfır derece." },
        { word: "¿Cuánto?", meaning: "Ne kadar?", pronunciation: "kuan-to", example: "¿Cuánto cuesta?", exampleTranslation: "Ne kadar?" },
        { word: "¿Cuántos?", meaning: "Kaç tane?", pronunciation: "kuan-tos", example: "¿Cuántos años tienes?", exampleTranslation: "Kaç yaşındasın?" },
        { word: "Número", meaning: "Sayı/Numara", pronunciation: "nu-me-ro", example: "Mi número es diez.", exampleTranslation: "Numaram on." },
        { word: "Primero", meaning: "Birinci", pronunciation: "pri-me-ro", example: "El primero de enero.", exampleTranslation: "Ocağın birinci günü." },
        { word: "Segundo", meaning: "İkinci", pronunciation: "se-gun-do", example: "El segundo piso.", exampleTranslation: "İkinci kat." },
        { word: "Tercero", meaning: "Üçüncü", pronunciation: "ter-se-ro", example: "En tercer lugar.", exampleTranslation: "Üçüncü sırada." },
        { word: "Último", meaning: "Son/Sonuncu", pronunciation: "ul-ti-mo", example: "El último día.", exampleTranslation: "Son gün." },
        { word: "Mitad", meaning: "Yarım/Yarısı", pronunciation: "mi-tad", example: "La mitad del pastel.", exampleTranslation: "Pastanın yarısı." },
        { word: "Doble", meaning: "İki kat/Çift", pronunciation: "dob-le", example: "El doble de grande.", exampleTranslation: "İki kat büyük." },
    ]
};

// ===== ÜNİTE 3: AİLE =====
const unit3Vocab: UnitVocabulary = {
    unitId: 3, title: "Aile Kelimeleri",
    words: [
        { word: "Familia", meaning: "Aile", pronunciation: "fa-mi-lia", example: "Mi familia es grande.", exampleTranslation: "Ailem büyük." },
        { word: "Padre", meaning: "Baba", pronunciation: "pad-re", example: "Mi padre trabaja.", exampleTranslation: "Babam çalışıyor." },
        { word: "Madre", meaning: "Anne", pronunciation: "mad-re", example: "Mi madre cocina.", exampleTranslation: "Annem yemek yapıyor." },
        { word: "Hermano", meaning: "Erkek kardeş", pronunciation: "er-ma-no", example: "Mi hermano mayor.", exampleTranslation: "Ağabeyim." },
        { word: "Hermana", meaning: "Kız kardeş", pronunciation: "er-ma-na", example: "Mi hermana menor.", exampleTranslation: "Küçük kız kardeşim." },
        { word: "Abuelo", meaning: "Dede", pronunciation: "a-bue-lo", example: "Mi abuelo tiene 80 años.", exampleTranslation: "Dedem 80 yaşında." },
        { word: "Abuela", meaning: "Nine", pronunciation: "a-bue-la", example: "Mi abuela cocina muy bien.", exampleTranslation: "Ninem çok iyi yemek yapar." },
        { word: "Tío", meaning: "Amca/Dayı", pronunciation: "ti-o", example: "Mi tío vive en Madrid.", exampleTranslation: "Amcam Madrid'de yaşıyor." },
        { word: "Tía", meaning: "Teyze/Hala", pronunciation: "ti-a", example: "Mi tía es profesora.", exampleTranslation: "Teyzem öğretmen." },
        { word: "Primo", meaning: "Kuzen (erkek)", pronunciation: "pri-mo", example: "Tengo muchos primos.", exampleTranslation: "Çok kuzenim var." },
        // Yeni kelimeler
        { word: "Prima", meaning: "Kuzen (kız)", pronunciation: "pri-ma", example: "Mi prima vive en Barcelona.", exampleTranslation: "Kuzenim Barcelona'da yaşıyor." },
        { word: "Hijo", meaning: "Oğul", pronunciation: "i-ho", example: "Tengo un hijo.", exampleTranslation: "Bir oğlum var." },
        { word: "Hija", meaning: "Kız evlat", pronunciation: "i-ha", example: "Mi hija tiene 10 años.", exampleTranslation: "Kızım 10 yaşında." },
        { word: "Nieto", meaning: "Torun (erkek)", pronunciation: "nie-to", example: "Mi nieto es muy listo.", exampleTranslation: "Torunum çok zeki." },
        { word: "Nieta", meaning: "Torun (kız)", pronunciation: "nie-ta", example: "Mi nieta baila muy bien.", exampleTranslation: "Torunum çok güzel dans ediyor." },
        { word: "Sobrino", meaning: "Yeğen (erkek)", pronunciation: "so-bri-no", example: "Mi sobrino estudia medicina.", exampleTranslation: "Yeğenim tıp okuyor." },
        { word: "Sobrina", meaning: "Yeğen (kız)", pronunciation: "so-bri-na", example: "Mi sobrina tiene 5 años.", exampleTranslation: "Yeğenimin yaşı 5." },
        { word: "Esposo", meaning: "Koca", pronunciation: "es-po-so", example: "Mi esposo trabaja mucho.", exampleTranslation: "Kocam çok çalışıyor." },
        { word: "Esposa", meaning: "Eş (kadın)", pronunciation: "es-po-sa", example: "Mi esposa es profesora.", exampleTranslation: "Eşim öğretmen." },
        { word: "Marido", meaning: "Koca", pronunciation: "ma-ri-do", example: "Su marido es médico.", exampleTranslation: "Kocası doktor." },
        { word: "Mujer", meaning: "Eş/Kadın", pronunciation: "mu-her", example: "Mi mujer cocina muy bien.", exampleTranslation: "Eşim çok iyi yemek yapar." },
        { word: "Novio", meaning: "Erkek arkadaş", pronunciation: "no-vio", example: "Mi novio es español.", exampleTranslation: "Erkek arkadaşım İspanyol." },
        { word: "Novia", meaning: "Kız arkadaş", pronunciation: "no-via", example: "Mi novia es muy simpática.", exampleTranslation: "Kız arkadaşım çok sempatik." },
        { word: "Suegro", meaning: "Kayınpeder", pronunciation: "sue-gro", example: "Mi suegro vive en el campo.", exampleTranslation: "Kayınpederim kırda yaşıyor." },
        { word: "Suegra", meaning: "Kayınvalide", pronunciation: "sue-gra", example: "Mi suegra cocina muy bien.", exampleTranslation: "Kayınvalidem çok iyi yemek yapar." },
        { word: "Cuñado", meaning: "Kayınbirader/Enişte", pronunciation: "ku-nya-do", example: "Mi cuñado es abogado.", exampleTranslation: "Eniştim avukat." },
        { word: "Cuñada", meaning: "Görümce/Baldız", pronunciation: "ku-nya-da", example: "Mi cuñada vive en Sevilla.", exampleTranslation: "Görümcem Sevilla'da yaşıyor." },
        { word: "Padrastro", meaning: "Üvey baba", pronunciation: "pa-dras-tro", example: "Mi padrastro es muy amable.", exampleTranslation: "Üvey babam çok nazik." },
        { word: "Madrastra", meaning: "Üvey anne", pronunciation: "ma-dras-tra", example: "Mi madrastra es simpática.", exampleTranslation: "Üvey annem sempatik." },
        { word: "Bebé", meaning: "Bebek", pronunciation: "be-be", example: "El bebé está durmiendo.", exampleTranslation: "Bebek uyuyor." },
    ]
};

// ===== ÜNİTE 4: RENKLER =====
const unit4Vocab: UnitVocabulary = {
    unitId: 4, title: "Renkler",
    words: [
        { word: "Rojo", meaning: "Kırmızı", pronunciation: "ro-ho", example: "La manzana es roja.", exampleTranslation: "Elma kırmızı." },
        { word: "Azul", meaning: "Mavi", pronunciation: "a-sul", example: "El cielo es azul.", exampleTranslation: "Gökyüzü mavi." },
        { word: "Verde", meaning: "Yeşil", pronunciation: "ver-de", example: "La hierba es verde.", exampleTranslation: "Çimen yeşil." },
        { word: "Amarillo", meaning: "Sarı", pronunciation: "a-ma-ri-yo", example: "El sol es amarillo.", exampleTranslation: "Güneş sarı." },
        { word: "Blanco", meaning: "Beyaz", pronunciation: "blan-ko", example: "La nieve es blanca.", exampleTranslation: "Kar beyaz." },
        { word: "Negro", meaning: "Siyah", pronunciation: "neg-ro", example: "Mi coche es negro.", exampleTranslation: "Arabam siyah." },
        { word: "Naranja", meaning: "Turuncu", pronunciation: "na-ran-ha", example: "Me gusta el naranja.", exampleTranslation: "Turuncuyu seviyorum." },
        { word: "Rosa", meaning: "Pembe", pronunciation: "ro-sa", example: "Flores rosas.", exampleTranslation: "Pembe çiçekler." },
        { word: "Marrón", meaning: "Kahverengi", pronunciation: "ma-rron", example: "Ojos marrones.", exampleTranslation: "Kahverengi gözler." },
        { word: "Gris", meaning: "Gri", pronunciation: "gris", example: "Nubes grises.", exampleTranslation: "Gri bulutlar." },
        // Yeni kelimeler
        { word: "Morado", meaning: "Mor", pronunciation: "mo-ra-do", example: "Una flor morada.", exampleTranslation: "Mor bir çiçek." },
        { word: "Violeta", meaning: "Menekşe rengi", pronunciation: "vio-le-ta", example: "El vestido es violeta.", exampleTranslation: "Elbise menekşe rengi." },
        { word: "Celeste", meaning: "Açık mavi", pronunciation: "se-les-te", example: "Cielo celeste.", exampleTranslation: "Açık mavi gökyüzü." },
        { word: "Turquesa", meaning: "Turkuaz", pronunciation: "tur-ke-sa", example: "Agua turquesa.", exampleTranslation: "Turkuaz su." },
        { word: "Beige", meaning: "Bej", pronunciation: "beyj", example: "Un sofá beige.", exampleTranslation: "Bej bir koltuk." },
        { word: "Dorado", meaning: "Altın rengi", pronunciation: "do-ra-do", example: "Un anillo dorado.", exampleTranslation: "Altın rengi bir yüzük." },
        { word: "Plateado", meaning: "Gümüş rengi", pronunciation: "pla-te-a-do", example: "Un coche plateado.", exampleTranslation: "Gümüş rengi bir araba." },
        { word: "Oscuro", meaning: "Koyu", pronunciation: "os-ku-ro", example: "Azul oscuro.", exampleTranslation: "Koyu mavi." },
        { word: "Claro", meaning: "Açık", pronunciation: "kla-ro", example: "Verde claro.", exampleTranslation: "Açık yeşil." },
        { word: "Brillante", meaning: "Parlak", pronunciation: "bri-yan-te", example: "Colores brillantes.", exampleTranslation: "Parlak renkler." },
        { word: "Mate", meaning: "Mat", pronunciation: "ma-te", example: "Pintura mate.", exampleTranslation: "Mat boya." },
        { word: "Color", meaning: "Renk", pronunciation: "ko-lor", example: "¿Qué color prefieres?", exampleTranslation: "Hangi rengi tercih edersin?" },
        { word: "Colorido", meaning: "Renkli", pronunciation: "ko-lo-ri-do", example: "Un jardín colorido.", exampleTranslation: "Renkli bir bahçe." },
        { word: "Clásico", meaning: "Klasik", pronunciation: "kla-si-ko", example: "Un color clásico.", exampleTranslation: "Klasik bir renk." },
        { word: "Favorito", meaning: "Favori", pronunciation: "fa-vo-ri-to", example: "Mi color favorito.", exampleTranslation: "Favori rengim." },
        { word: "Mezcla", meaning: "Karışım", pronunciation: "mes-kla", example: "Una mezcla de colores.", exampleTranslation: "Renk karışımı." },
        { word: "Arcoíris", meaning: "Gökkuşağı", pronunciation: "ar-ko-i-ris", example: "Los colores del arcoíris.", exampleTranslation: "Gökkuşağı renkleri." },
        { word: "Pintar", meaning: "Boyamak", pronunciation: "pin-tar", example: "Pintar de azul.", exampleTranslation: "Maviye boyamak." },
        { word: "Teñir", meaning: "Renk vermek", pronunciation: "te-nyir", example: "Teñir el pelo.", exampleTranslation: "Saç boyamak." },
        { word: "Combinar", meaning: "Uyumlu olmak", pronunciation: "kom-bi-nar", example: "Estos colores combinan.", exampleTranslation: "Bu renkler uyumlu." },
    ]
};

// ===== ÜNİTE 5: YİYECEKLER =====
const unit5Vocab: UnitVocabulary = {
    unitId: 5, title: "Yiyecekler",
    words: [
        { word: "Manzana", meaning: "Elma", pronunciation: "man-sa-na", example: "Una manzana roja.", exampleTranslation: "Kırmızı bir elma." },
        { word: "Pan", meaning: "Ekmek", pronunciation: "pan", example: "Pan fresco.", exampleTranslation: "Taze ekmek." },
        { word: "Carne", meaning: "Et", pronunciation: "kar-ne", example: "Carne de ternera.", exampleTranslation: "Dana eti." },
        { word: "Pescado", meaning: "Balık", pronunciation: "pes-ka-do", example: "Pescado frito.", exampleTranslation: "Kızarmış balık." },
        { word: "Pollo", meaning: "Tavuk", pronunciation: "po-yo", example: "Pollo asado.", exampleTranslation: "Kızarmış tavuk." },
        { word: "Arroz", meaning: "Pirinç", pronunciation: "a-rros", example: "Arroz blanco.", exampleTranslation: "Beyaz pirinç." },
        { word: "Huevo", meaning: "Yumurta", pronunciation: "ue-vo", example: "Huevos fritos.", exampleTranslation: "Kızarmış yumurta." },
        { word: "Ensalada", meaning: "Salata", pronunciation: "en-sa-la-da", example: "Ensalada verde.", exampleTranslation: "Yeşil salata." },
        { word: "Sopa", meaning: "Çorba", pronunciation: "so-pa", example: "Sopa caliente.", exampleTranslation: "Sıcak çorba." },
        { word: "Fruta", meaning: "Meyve", pronunciation: "fru-ta", example: "Me gusta la fruta.", exampleTranslation: "Meyveyi seviyorum." },
        // Yeni kelimeler
        { word: "Queso", meaning: "Peynir", pronunciation: "ke-so", example: "Queso manchego.", exampleTranslation: "Manchego peyniri." },
        { word: "Jamón", meaning: "Jambon", pronunciation: "ha-mon", example: "Jamón serrano.", exampleTranslation: "Serranojambon." },
        { word: "Pasta", meaning: "Makarna", pronunciation: "pas-ta", example: "Pasta italiana.", exampleTranslation: "İtalyan makarnası." },
        { word: "Pizza", meaning: "Pizza", pronunciation: "pi-sa", example: "Pizza margarita.", exampleTranslation: "Margarita pizza." },
        { word: "Hamburguesa", meaning: "Hamburger", pronunciation: "am-bur-ge-sa", example: "Hamburguesa con queso.", exampleTranslation: "Peynirli hamburger." },
        { word: "Bocadillo", meaning: "Sandviç", pronunciation: "bo-ka-di-yo", example: "Un bocadillo de jamón.", exampleTranslation: "Jambonlu sandviç." },
        { word: "Tortilla", meaning: "Omlet/Tortilla", pronunciation: "tor-ti-ya", example: "Tortilla española.", exampleTranslation: "İspanyol omleti." },
        { word: "Verdura", meaning: "Sebze", pronunciation: "ver-du-ra", example: "Verduras frescas.", exampleTranslation: "Taze sebzeler." },
        { word: "Patatas fritas", meaning: "Kızarmış patates", pronunciation: "pa-ta-tas fri-tas", example: "Patatas fritas crujientes.", exampleTranslation: "Çıtır kızarmış patates." },
        { word: "Galleta", meaning: "Bisküvi", pronunciation: "ga-ye-ta", example: "Galletas de chocolate.", exampleTranslation: "Çikolatalı bisküviler." },
        { word: "Tarta", meaning: "Pasta/Turta", pronunciation: "tar-ta", example: "Tarta de cumpleaños.", exampleTranslation: "Doğum günü pastası." },
        { word: "Helado", meaning: "Dondurma", pronunciation: "e-la-do", example: "Helado de vainilla.", exampleTranslation: "Vanilyalı dondurma." },
        { word: "Chocolate", meaning: "Çikolata", pronunciation: "ço-ko-la-te", example: "Chocolate negro.", exampleTranslation: "Bitter çikolata." },
        { word: "Aceite", meaning: "Yağ", pronunciation: "a-sey-te", example: "Aceite de oliva.", exampleTranslation: "Zeytinyağı." },
        { word: "Sal", meaning: "Tuz", pronunciation: "sal", example: "Pon sal a la comida.", exampleTranslation: "Yemeğe tuz koy." },
        { word: "Azúcar", meaning: "Şeker", pronunciation: "a-su-kar", example: "Azúcar blanca.", exampleTranslation: "Beyaz şeker." },
        { word: "Mantequilla", meaning: "Tereyağı", pronunciation: "man-te-ki-ya", example: "Pan con mantequilla.", exampleTranslation: "Tereyağlı ekmek." },
        { word: "Desayuno", meaning: "Kahvaltı", pronunciation: "de-sa-yu-no", example: "El desayuno es importante.", exampleTranslation: "Kahvaltı önemlidir." },
        { word: "Almuerzo", meaning: "Öğle yemeği", pronunciation: "al-muer-so", example: "Almuerzo a las dos.", exampleTranslation: "Öğle yemeğini ikide yiyorum." },
        { word: "Cena", meaning: "Akşam yemeği", pronunciation: "se-na", example: "La cena está lista.", exampleTranslation: "Akşam yemeği hazır." },
    ]
};

// ===== ÜNİTE 6: İÇECEKLER =====
const unit6Vocab: UnitVocabulary = {
    unitId: 6, title: "İçecekler",
    words: [
        { word: "Agua", meaning: "Su", pronunciation: "a-gua", example: "Agua fría.", exampleTranslation: "Soğuk su." },
        { word: "Café", meaning: "Kahve", pronunciation: "ka-fe", example: "Café con leche.", exampleTranslation: "Sütlü kahve." },
        { word: "Té", meaning: "Çay", pronunciation: "te", example: "Té verde.", exampleTranslation: "Yeşil çay." },
        { word: "Leche", meaning: "Süt", pronunciation: "le-çe", example: "Un vaso de leche.", exampleTranslation: "Bir bardak süt." },
        { word: "Zumo", meaning: "Meyve suyu", pronunciation: "su-mo", example: "Zumo de naranja.", exampleTranslation: "Portakal suyu." },
        { word: "Cerveza", meaning: "Bira", pronunciation: "ser-ve-sa", example: "Una cerveza fría.", exampleTranslation: "Soğuk bir bira." },
        { word: "Vino", meaning: "Şarap", pronunciation: "vi-no", example: "Vino tinto.", exampleTranslation: "Kırmızı şarap." },
        { word: "Refresco", meaning: "Meşrubat", pronunciation: "re-fres-ko", example: "Un refresco de cola.", exampleTranslation: "Bir kola." },
        { word: "Botella", meaning: "Şişe", pronunciation: "bo-te-ya", example: "Una botella de agua.", exampleTranslation: "Bir şişe su." },
        { word: "Vaso", meaning: "Bardak", pronunciation: "va-so", example: "Un vaso de vino.", exampleTranslation: "Bir bardak şarap." },
        // Yeni kelimeler
        { word: "Copa", meaning: "Kadeh", pronunciation: "ko-pa", example: "Una copa de champán.", exampleTranslation: "Bir kadeh şampanya." },
        { word: "Taza", meaning: "Fincan", pronunciation: "ta-sa", example: "Una taza de café.", exampleTranslation: "Bir fincan kahve." },
        { word: "Limonada", meaning: "Limonata", pronunciation: "li-mo-na-da", example: "Limonada fresca.", exampleTranslation: "Taze limonata." },
        { word: "Batido", meaning: "Milkshake", pronunciation: "ba-ti-do", example: "Batido de fresa.", exampleTranslation: "Çilekli milkshake." },
        { word: "Chocolate caliente", meaning: "Sıcak çikolata", pronunciation: "ço-ko-la-te ka-lien-te", example: "Me gusta el chocolate caliente.", exampleTranslation: "Sıcak çikolatayı seviyorum." },
        { word: "Café solo", meaning: "Sade kahve", pronunciation: "ka-fe so-lo", example: "Un café solo, por favor.", exampleTranslation: "Sade bir kahve lütfen." },
        { word: "Café cortado", meaning: "Sütlü espresso", pronunciation: "ka-fe kor-ta-do", example: "Prefiero café cortado.", exampleTranslation: "Sütlü espresso tercih ederim." },
        { word: "Té helado", meaning: "Buzlu çay", pronunciation: "te e-la-do", example: "Té helado en verano.", exampleTranslation: "Yazın buzlu çay." },
        { word: "Agua con gas", meaning: "Maden suyu", pronunciation: "a-gua kon gas", example: "Agua con gas, por favor.", exampleTranslation: "Maden suyu lütfen." },
        { word: "Agua sin gas", meaning: "Gazsız su", pronunciation: "a-gua sin gas", example: "Prefiero agua sin gas.", exampleTranslation: "Gazsız su tercih ederim." },
        { word: "Vino blanco", meaning: "Beyaz şarap", pronunciation: "vi-no blan-ko", example: "Una copa de vino blanco.", exampleTranslation: "Bir kadeh beyaz şarap." },
        { word: "Sangría", meaning: "Sangria", pronunciation: "san-gri-a", example: "La sangría es muy popular.", exampleTranslation: "Sangria çok popüler." },
        { word: "Sidra", meaning: "Elma şarabı", pronunciation: "sid-ra", example: "Sidra asturiana.", exampleTranslation: "Asturias elma şarabı." },
        { word: "Bebida", meaning: "İçecek", pronunciation: "be-bi-da", example: "¿Qué bebida quieres?", exampleTranslation: "Hangi içeceği istersin?" },
        { word: "Beber", meaning: "İçmek", pronunciation: "be-ber", example: "Bebo mucha agua.", exampleTranslation: "Çok su içerim." },
        { word: "Sed", meaning: "Susuzluk", pronunciation: "sed", example: "Tengo sed.", exampleTranslation: "Susadım." },
        { word: "Hielo", meaning: "Buz", pronunciation: "ie-lo", example: "Con hielo, por favor.", exampleTranslation: "Buzlu lütfen." },
        { word: "Caliente", meaning: "Sıcak", pronunciation: "ka-lien-te", example: "El café está caliente.", exampleTranslation: "Kahve sıcak." },
        { word: "Frío", meaning: "Soğuk", pronunciation: "fri-o", example: "La cerveza está fría.", exampleTranslation: "Bira soğuk." },
        { word: "Refrescante", meaning: "Serinletici", pronunciation: "re-fres-kan-te", example: "Una bebida refrescante.", exampleTranslation: "Serinletici bir içecek." },
    ]
};

// ===== ÜNİTE 7: GÜNLER VE AYLAR =====
const unit7Vocab: UnitVocabulary = {
    unitId: 7, title: "Günler ve Aylar",
    words: [
        { word: "Lunes", meaning: "Pazartesi", pronunciation: "lu-nes", example: "El lunes trabajo.", exampleTranslation: "Pazartesi çalışıyorum." },
        { word: "Martes", meaning: "Salı", pronunciation: "mar-tes", example: "Martes y jueves.", exampleTranslation: "Salı ve perşembe." },
        { word: "Miércoles", meaning: "Çarşamba", pronunciation: "mier-ko-les", example: "El miércoles tengo clase.", exampleTranslation: "Çarşamba dersim var." },
        { word: "Jueves", meaning: "Perşembe", pronunciation: "hue-ves", example: "El jueves voy al cine.", exampleTranslation: "Perşembe sinemaya gidiyorum." },
        { word: "Viernes", meaning: "Cuma", pronunciation: "vier-nes", example: "¡Por fin viernes!", exampleTranslation: "Sonunda cuma!" },
        { word: "Sábado", meaning: "Cumartesi", pronunciation: "sa-ba-do", example: "El sábado salgo.", exampleTranslation: "Cumartesi çıkıyorum." },
        { word: "Domingo", meaning: "Pazar", pronunciation: "do-min-go", example: "Domingo de descanso.", exampleTranslation: "Dinlenme pazarı." },
        { word: "Enero", meaning: "Ocak", pronunciation: "e-ne-ro", example: "Enero es frío.", exampleTranslation: "Ocak soğuk." },
        { word: "Febrero", meaning: "Şubat", pronunciation: "fe-bre-ro", example: "Febrero es corto.", exampleTranslation: "Şubat kısa." },
        { word: "Marzo", meaning: "Mart", pronunciation: "mar-so", example: "Marzo es primavera.", exampleTranslation: "Mart ilkbahardır." },
        { word: "Abril", meaning: "Nisan", pronunciation: "a-bril", example: "En abril, aguas mil.", exampleTranslation: "Nisan'da çok yağmur yağar." },
        { word: "Mayo", meaning: "Mayıs", pronunciation: "ma-yo", example: "Mayo es mi mes favorito.", exampleTranslation: "Mayıs en sevdiğim ay." },
        { word: "Junio", meaning: "Haziran", pronunciation: "hu-nio", example: "En junio empieza el verano.", exampleTranslation: "Haziran'da yaz başlar." },
        { word: "Julio", meaning: "Temmuz", pronunciation: "hu-lio", example: "Julio es caluroso.", exampleTranslation: "Temmuz sıcak." },
        { word: "Agosto", meaning: "Ağustos", pronunciation: "a-gos-to", example: "En agosto de vacaciones.", exampleTranslation: "Ağustos'ta tatildeyim." },
        { word: "Septiembre", meaning: "Eylül", pronunciation: "sep-tiem-bre", example: "En septiembre empieza el colegio.", exampleTranslation: "Eylül'de okul başlar." },
        { word: "Octubre", meaning: "Ekim", pronunciation: "ok-tu-bre", example: "Octubre es otoño.", exampleTranslation: "Ekim sonbahardır." },
        { word: "Noviembre", meaning: "Kasım", pronunciation: "no-viem-bre", example: "Noviembre es gris.", exampleTranslation: "Kasım gri." },
        { word: "Diciembre", meaning: "Aralık", pronunciation: "di-siem-bre", example: "En diciembre hay Navidad.", exampleTranslation: "Aralık'ta Noel var." },
        { word: "Semana", meaning: "Hafta", pronunciation: "se-ma-na", example: "Esta semana.", exampleTranslation: "Bu hafta." },
        { word: "Mes", meaning: "Ay", pronunciation: "mes", example: "El próximo mes.", exampleTranslation: "Gelecek ay." },
        { word: "Año", meaning: "Yıl", pronunciation: "a-nyo", example: "El año pasado.", exampleTranslation: "Geçen yıl." },
        { word: "Día", meaning: "Gün", pronunciation: "di-a", example: "Cada día.", exampleTranslation: "Her gün." },
        { word: "Fin de semana", meaning: "Hafta sonu", pronunciation: "fin de se-ma-na", example: "El fin de semana descanso.", exampleTranslation: "Hafta sonu dinleniyorum." },
        { word: "Hoy", meaning: "Bugün", pronunciation: "oy", example: "Hoy es lunes.", exampleTranslation: "Bugün pazartesi." },
        { word: "Mañana", meaning: "Yarın", pronunciation: "ma-nya-na", example: "Mañana tengo examen.", exampleTranslation: "Yarın sınavım var." },
        { word: "Ayer", meaning: "Dün", pronunciation: "a-yer", example: "Ayer fui al cine.", exampleTranslation: "Dün sinemaya gittim." },
        { word: "Pasado mañana", meaning: "Öbür gün", pronunciation: "pa-sa-do ma-nya-na", example: "Pasado mañana viajo.", exampleTranslation: "Öbür gün seyahat ediyorum." },
        { word: "Anteayer", meaning: "Evvelsi gün", pronunciation: "an-te-a-yer", example: "Anteayer llovió.", exampleTranslation: "Evvelsi gün yağmur yağdı." },
        { word: "Fecha", meaning: "Tarih", pronunciation: "fe-ça", example: "¿Qué fecha es hoy?", exampleTranslation: "Bugün hangi tarih?" },
    ]
};

// ===== ÜNİTE 8: SAYILAR 21-100 =====
const unit8Vocab: UnitVocabulary = {
    unitId: 8, title: "Sayılar 21-100",
    words: [
        { word: "Veintiuno", meaning: "21", pronunciation: "veyn-ti-u-no", example: "Tengo veintiún años.", exampleTranslation: "21 yaşındayım." },
        { word: "Veintidós", meaning: "22", pronunciation: "veyn-ti-dos", example: "Veintidós estudiantes.", exampleTranslation: "22 öğrenci." },
        { word: "Veintitrés", meaning: "23", pronunciation: "veyn-ti-tres", example: "Veintitrés euros.", exampleTranslation: "23 euro." },
        { word: "Veinticuatro", meaning: "24", pronunciation: "veyn-ti-kua-tro", example: "Veinticuatro horas.", exampleTranslation: "24 saat." },
        { word: "Veinticinco", meaning: "25", pronunciation: "veyn-ti-sin-ko", example: "Veinticinco días.", exampleTranslation: "25 gün." },
        { word: "Treinta", meaning: "30", pronunciation: "treyn-ta", example: "Treinta minutos.", exampleTranslation: "Otuz dakika." },
        { word: "Treinta y uno", meaning: "31", pronunciation: "treyn-ta i u-no", example: "Treinta y un días.", exampleTranslation: "31 gün." },
        { word: "Cuarenta", meaning: "40", pronunciation: "kua-ren-ta", example: "Cuarenta años.", exampleTranslation: "Kırk yıl." },
        { word: "Cincuenta", meaning: "50", pronunciation: "sin-kuen-ta", example: "Cincuenta personas.", exampleTranslation: "Elli kişi." },
        { word: "Sesenta", meaning: "60", pronunciation: "se-sen-ta", example: "Sesenta segundos.", exampleTranslation: "Altmış saniye." },
        { word: "Setenta", meaning: "70", pronunciation: "se-ten-ta", example: "Setenta kilómetros.", exampleTranslation: "Yetmiş kilometre." },
        { word: "Ochenta", meaning: "80", pronunciation: "o-chen-ta", example: "Mi abuelo tiene ochenta.", exampleTranslation: "Dedem seksen yaşında." },
        { word: "Noventa", meaning: "90", pronunciation: "no-ven-ta", example: "Noventa por ciento.", exampleTranslation: "Yüzde doksan." },
        { word: "Cien", meaning: "100", pronunciation: "sien", example: "Cien euros.", exampleTranslation: "Yüz euro." },
        { word: "Ciento uno", meaning: "101", pronunciation: "sien-to u-no", example: "Ciento un dálmatas.", exampleTranslation: "101 dalmaçyalı." },
        { word: "Doscientos", meaning: "200", pronunciation: "dos-sien-tos", example: "Doscientos kilómetros.", exampleTranslation: "200 kilometre." },
        { word: "Trescientos", meaning: "300", pronunciation: "tres-sien-tos", example: "Trescientos euros.", exampleTranslation: "300 euro." },
        { word: "Quinientos", meaning: "500", pronunciation: "ki-nien-tos", example: "Quinientos gramos.", exampleTranslation: "500 gram." },
        { word: "Mil", meaning: "1000", pronunciation: "mil", example: "Mil personas.", exampleTranslation: "Bin kişi." },
        { word: "Millón", meaning: "Milyon", pronunciation: "mi-yon", example: "Un millón de euros.", exampleTranslation: "Bir milyon euro." },
        { word: "Por ciento", meaning: "Yüzde", pronunciation: "por sien-to", example: "Cincuenta por ciento.", exampleTranslation: "Yüzde elli." },
        { word: "Medio", meaning: "Yarım", pronunciation: "me-dio", example: "Medio kilo.", exampleTranslation: "Yarım kilo." },
        { word: "Par", meaning: "Çift", pronunciation: "par", example: "Un par de zapatos.", exampleTranslation: "Bir çift ayakkabı." },
        { word: "Docena", meaning: "Düzine", pronunciation: "do-se-na", example: "Una docena de huevos.", exampleTranslation: "Bir düzine yumurta." },
        { word: "Más", meaning: "Artı/Daha fazla", pronunciation: "mas", example: "Dos más dos.", exampleTranslation: "İki artı iki." },
        { word: "Menos", meaning: "Eksi/Daha az", pronunciation: "me-nos", example: "Diez menos cinco.", exampleTranslation: "On eksi beş." },
        { word: "Igual", meaning: "Eşit", pronunciation: "i-gual", example: "Dos más dos igual a cuatro.", exampleTranslation: "İki artı iki eşittir dört." },
        { word: "Tanto", meaning: "Bu kadar", pronunciation: "tan-to", example: "No es tanto.", exampleTranslation: "O kadar değil." },
        { word: "Poco", meaning: "Az", pronunciation: "po-ko", example: "Un poco de agua.", exampleTranslation: "Biraz su." },
        { word: "Mucho", meaning: "Çok", pronunciation: "mu-ço", example: "Mucho dinero.", exampleTranslation: "Çok para." },
    ]
};

// ===== ÜNİTE 9: EV ODALARI =====
const unit9Vocab: UnitVocabulary = {
    unitId: 9, title: "Ev Odaları",
    words: [
        { word: "Casa", meaning: "Ev", pronunciation: "ka-sa", example: "Mi casa es grande.", exampleTranslation: "Evim büyük." },
        { word: "Cocina", meaning: "Mutfak", pronunciation: "ko-si-na", example: "Cocino en la cocina.", exampleTranslation: "Mutfakta yemek yapıyorum." },
        { word: "Salón", meaning: "Oturma odası", pronunciation: "sa-lon", example: "Veo la tele en el salón.", exampleTranslation: "Salonda TV izliyorum." },
        { word: "Dormitorio", meaning: "Yatak odası", pronunciation: "dor-mi-to-rio", example: "Duermo en mi dormitorio.", exampleTranslation: "Yatak odamda uyuyorum." },
        { word: "Baño", meaning: "Banyo", pronunciation: "ba-nyo", example: "El baño es pequeño.", exampleTranslation: "Banyo küçük." },
        { word: "Comedor", meaning: "Yemek odası", pronunciation: "ko-me-dor", example: "Comemos en el comedor.", exampleTranslation: "Yemek odasında yiyoruz." },
        { word: "Jardín", meaning: "Bahçe", pronunciation: "har-din", example: "Tengo un jardín bonito.", exampleTranslation: "Güzel bir bahçem var." },
        { word: "Garaje", meaning: "Garaj", pronunciation: "ga-ra-he", example: "El coche está en el garaje.", exampleTranslation: "Araba garajda." },
        { word: "Habitación", meaning: "Oda", pronunciation: "a-bi-ta-sion", example: "Mi habitación es azul.", exampleTranslation: "Odam mavi." },
        { word: "Piso", meaning: "Daire/Kat", pronunciation: "pi-so", example: "Vivo en un piso.", exampleTranslation: "Bir dairede yaşıyorum." },
        { word: "Terraza", meaning: "Teras", pronunciation: "te-rra-sa", example: "Desayuno en la terraza.", exampleTranslation: "Terasta kahvaltı yapıyorum." },
        { word: "Balcón", meaning: "Balkon", pronunciation: "bal-kon", example: "Tengo un balcón pequeño.", exampleTranslation: "Küçük bir balkonum var." },
        { word: "Pasillo", meaning: "Koridor", pronunciation: "pa-si-yo", example: "El pasillo es largo.", exampleTranslation: "Koridor uzun." },
        { word: "Escalera", meaning: "Merdiven", pronunciation: "es-ka-le-ra", example: "Subo la escalera.", exampleTranslation: "Merdivenleri çıkıyorum." },
        { word: "Ascensor", meaning: "Asansör", pronunciation: "as-sen-sor", example: "Uso el ascensor.", exampleTranslation: "Asansör kullanıyorum." },
        { word: "Sótano", meaning: "Bodrum", pronunciation: "so-ta-no", example: "El sótano es oscuro.", exampleTranslation: "Bodrum karanlık." },
        { word: "Ático", meaning: "Çatı katı", pronunciation: "a-ti-ko", example: "Vivo en un ático.", exampleTranslation: "Çatı katında yaşıyorum." },
        { word: "Puerta", meaning: "Kapı", pronunciation: "puer-ta", example: "Abre la puerta.", exampleTranslation: "Kapıyı aç." },
        { word: "Ventana", meaning: "Pencere", pronunciation: "ven-ta-na", example: "Cierra la ventana.", exampleTranslation: "Pencereyi kapat." },
        { word: "Techo", meaning: "Tavan", pronunciation: "te-ço", example: "El techo es alto.", exampleTranslation: "Tavan yüksek." },
        { word: "Suelo", meaning: "Zemin", pronunciation: "sue-lo", example: "El suelo es de madera.", exampleTranslation: "Zemin ahşap." },
        { word: "Pared", meaning: "Duvar", pronunciation: "pa-red", example: "La pared es blanca.", exampleTranslation: "Duvar beyaz." },
        { word: "Entrada", meaning: "Giriş", pronunciation: "en-tra-da", example: "La entrada principal.", exampleTranslation: "Ana giriş." },
        { word: "Lavabo", meaning: "Lavabo", pronunciation: "la-va-bo", example: "Me lavo las manos en el lavabo.", exampleTranslation: "Lavaboda ellerimi yıkıyorum." },
        { word: "Ducha", meaning: "Duş", pronunciation: "du-ça", example: "Me ducho por la mañana.", exampleTranslation: "Sabahları duş alıyorum." },
        { word: "Bañera", meaning: "Küvet", pronunciation: "ba-nye-ra", example: "Prefiero la bañera.", exampleTranslation: "Küveti tercih ediyorum." },
        { word: "Despensa", meaning: "Kiler", pronunciation: "des-pen-sa", example: "La comida está en la despensa.", exampleTranslation: "Yiyecekler kilerde." },
        { word: "Chimenea", meaning: "Şömine", pronunciation: "çi-me-ne-a", example: "Enciendo la chimenea.", exampleTranslation: "Şömineyi yakıyorum." },
        { word: "Piscina", meaning: "Havuz", pronunciation: "pis-si-na", example: "Nado en la piscina.", exampleTranslation: "Havuzda yüzüyorum." },
        { word: "Vecino", meaning: "Komşu", pronunciation: "ve-si-no", example: "Mi vecino es simpático.", exampleTranslation: "Komşum sempatik." },
    ]
};

// ===== ÜNİTE 10: MOBİLYALAR =====
const unit10Vocab: UnitVocabulary = {
    unitId: 10, title: "Mobilyalar",
    words: [
        { word: "Mesa", meaning: "Masa", pronunciation: "me-sa", example: "La mesa es de madera.", exampleTranslation: "Masa ahşap." },
        { word: "Silla", meaning: "Sandalye", pronunciation: "si-ya", example: "Siéntate en la silla.", exampleTranslation: "Sandalyeye otur." },
        { word: "Sofá", meaning: "Koltuk", pronunciation: "so-fa", example: "El sofá es muy cómodo.", exampleTranslation: "Koltuk çok rahat." },
        { word: "Cama", meaning: "Yatak", pronunciation: "ka-ma", example: "Mi cama es grande.", exampleTranslation: "Yatağım büyük." },
        { word: "Armario", meaning: "Dolap", pronunciation: "ar-ma-rio", example: "La ropa está en el armario.", exampleTranslation: "Kıyafetler dolapta." },
        { word: "Lámpara", meaning: "Lamba", pronunciation: "lam-pa-ra", example: "Enciende la lámpara.", exampleTranslation: "Lambayı aç." },
        { word: "Televisión", meaning: "Televizyon", pronunciation: "te-le-vi-sion", example: "Veo la televisión.", exampleTranslation: "Televizyon izliyorum." },
        { word: "Estante", meaning: "Raf", pronunciation: "es-tan-te", example: "Libros en el estante.", exampleTranslation: "Rafta kitaplar." },
        { word: "Espejo", meaning: "Ayna", pronunciation: "es-pe-ho", example: "Me miro en el espejo.", exampleTranslation: "Aynaya bakıyorum." },
        { word: "Alfombra", meaning: "Halı", pronunciation: "al-fom-bra", example: "La alfombra es roja.", exampleTranslation: "Halı kırmızı." },
        { word: "Escritorio", meaning: "Çalışma masası", pronunciation: "es-kri-to-rio", example: "Trabajo en mi escritorio.", exampleTranslation: "Çalışma masamda çalışıyorum." },
        { word: "Sillón", meaning: "Koltuk (tekli)", pronunciation: "si-yon", example: "Leo en el sillón.", exampleTranslation: "Koltuğumda okuyorum." },
        { word: "Cómoda", meaning: "Şifonyer", pronunciation: "ko-mo-da", example: "La ropa interior está en la cómoda.", exampleTranslation: "İç çamaşırlar şifonyerde." },
        { word: "Mesita de noche", meaning: "Komodin", pronunciation: "me-si-ta de no-çe", example: "El libro está en la mesita de noche.", exampleTranslation: "Kitap komodinde." },
        { word: "Estantería", meaning: "Kitaplık", pronunciation: "es-tan-te-ri-a", example: "La estantería está llena.", exampleTranslation: "Kitaplık dolu." },
        { word: "Cortina", meaning: "Perde", pronunciation: "kor-ti-na", example: "Abre las cortinas.", exampleTranslation: "Perdeleri aç." },
        { word: "Almohada", meaning: "Yastık", pronunciation: "al-mo-a-da", example: "Necesito una almohada.", exampleTranslation: "Bir yastığa ihtiyacım var." },
        { word: "Manta", meaning: "Battaniye", pronunciation: "man-ta", example: "Tengo frío, necesito una manta.", exampleTranslation: "Üşüyorum, battaniyeye ihtiyacım var." },
        { word: "Sábana", meaning: "Çarşaf", pronunciation: "sa-ba-na", example: "Cambio las sábanas.", exampleTranslation: "Çarşafları değiştiriyorum." },
        { word: "Colchón", meaning: "Yatak (şilte)", pronunciation: "kol-çon", example: "El colchón es cómodo.", exampleTranslation: "Şilte rahat." },
        { word: "Cuadro", meaning: "Tablo", pronunciation: "kua-dro", example: "Un cuadro en la pared.", exampleTranslation: "Duvarda bir tablo." },
        { word: "Reloj", meaning: "Saat", pronunciation: "re-loh", example: "El reloj de pared.", exampleTranslation: "Duvar saati." },
        { word: "Florero", meaning: "Vazo", pronunciation: "flo-re-ro", example: "Flores en el florero.", exampleTranslation: "Vazoda çiçekler." },
        { word: "Nevera", meaning: "Buzdolabı", pronunciation: "ne-ve-ra", example: "La leche está en la nevera.", exampleTranslation: "Süt buzdolabında." },
        { word: "Horno", meaning: "Fırın", pronunciation: "or-no", example: "Cocino en el horno.", exampleTranslation: "Fırında pişiriyorum." },
        { word: "Microondas", meaning: "Mikrodalga", pronunciation: "mi-kro-on-das", example: "Caliento la comida en el microondas.", exampleTranslation: "Yemeği mikrodalgada ısıtıyorum." },
        { word: "Lavadora", meaning: "Çamaşır makinesi", pronunciation: "la-va-do-ra", example: "Pongo la lavadora.", exampleTranslation: "Çamaşır makinesini çalıştırıyorum." },
        { word: "Lavavajillas", meaning: "Bulaşık makinesi", pronunciation: "la-va-va-hi-yas", example: "El lavavajillas está lleno.", exampleTranslation: "Bulaşık makinesi dolu." },
        { word: "Fregadero", meaning: "Eviye", pronunciation: "fre-ga-de-ro", example: "Lavo los platos en el fregadero.", exampleTranslation: "Tabakları eviyede yıkıyorum." },
        { word: "Enchufe", meaning: "Priz", pronunciation: "en-çu-fe", example: "Necesito un enchufe.", exampleTranslation: "Prize ihtiyacım var." },
    ]
};

// ===== ÜNİTE 11: VÜCUT BÖLÜMLERİ =====
const unit11Vocab: UnitVocabulary = {
    unitId: 11, title: "Vücut Bölümleri",
    words: [
        { word: "Cabeza", meaning: "Baş", pronunciation: "ka-be-sa", example: "Me duele la cabeza.", exampleTranslation: "Başım ağrıyor." },
        { word: "Mano", meaning: "El", pronunciation: "ma-no", example: "Dame la mano.", exampleTranslation: "Elini ver." },
        { word: "Pie", meaning: "Ayak", pronunciation: "pie", example: "Mi pie derecho.", exampleTranslation: "Sağ ayağım." },
        { word: "Ojo", meaning: "Göz", pronunciation: "o-ho", example: "Ojos azules.", exampleTranslation: "Mavi gözler." },
        { word: "Boca", meaning: "Ağız", pronunciation: "bo-ka", example: "Abre la boca.", exampleTranslation: "Ağzını aç." },
        { word: "Nariz", meaning: "Burun", pronunciation: "na-ris", example: "Una nariz grande.", exampleTranslation: "Büyük bir burun." },
        { word: "Oreja", meaning: "Kulak", pronunciation: "o-re-ha", example: "Escucho con las orejas.", exampleTranslation: "Kulaklarımla duyuyorum." },
        { word: "Brazo", meaning: "Kol", pronunciation: "bra-so", example: "Me duele el brazo.", exampleTranslation: "Kolum ağrıyor." },
        { word: "Pierna", meaning: "Bacak", pronunciation: "pier-na", example: "Tengo las piernas largas.", exampleTranslation: "Uzun bacaklarım var." },
        { word: "Dedo", meaning: "Parmak", pronunciation: "de-do", example: "Diez dedos.", exampleTranslation: "On parmak." },
        { word: "Pelo", meaning: "Saç", pronunciation: "pe-lo", example: "Tengo el pelo largo.", exampleTranslation: "Uzun saçlarım var." },
        { word: "Cara", meaning: "Yüz", pronunciation: "ka-ra", example: "Tiene una cara bonita.", exampleTranslation: "Güzel bir yüzü var." },
        { word: "Cuello", meaning: "Boyun", pronunciation: "kue-yo", example: "Me duele el cuello.", exampleTranslation: "Boynum ağrıyor." },
        { word: "Hombro", meaning: "Omuz", pronunciation: "om-bro", example: "Tengo dolor de hombro.", exampleTranslation: "Omuz ağrım var." },
        { word: "Espalda", meaning: "Sırt", pronunciation: "es-pal-da", example: "Me duele la espalda.", exampleTranslation: "Sırtım ağrıyor." },
        { word: "Pecho", meaning: "Göğüs", pronunciation: "pe-ço", example: "Respira con el pecho.", exampleTranslation: "Göğsünle nefes al." },
        { word: "Estómago", meaning: "Mide", pronunciation: "es-to-ma-go", example: "Me duele el estómago.", exampleTranslation: "Midem ağrıyor." },
        { word: "Rodilla", meaning: "Diz", pronunciation: "ro-di-ya", example: "Me lastimé la rodilla.", exampleTranslation: "Dizimi yaraladım." },
        { word: "Tobillo", meaning: "Bilek (ayak)", pronunciation: "to-bi-yo", example: "Me torcí el tobillo.", exampleTranslation: "Bileğimi burktum." },
        { word: "Muñeca", meaning: "Bilek (el)", pronunciation: "mu-nye-ka", example: "Tengo una pulsera en la muñeca.", exampleTranslation: "Bileğimde bilezik var." },
        { word: "Codo", meaning: "Dirsek", pronunciation: "ko-do", example: "Me golpeé el codo.", exampleTranslation: "Dirseğime çarptım." },
        { word: "Corazón", meaning: "Kalp", pronunciation: "ko-ra-son", example: "Mi corazón late rápido.", exampleTranslation: "Kalbim hızlı atıyor." },
        { word: "Diente", meaning: "Diş", pronunciation: "dien-te", example: "Tengo un diente roto.", exampleTranslation: "Kırık bir dişim var." },
        { word: "Lengua", meaning: "Dil", pronunciation: "len-gua", example: "Me mordí la lengua.", exampleTranslation: "Dilimi ısırdım." },
        { word: "Labio", meaning: "Dudak", pronunciation: "la-bio", example: "Tengo los labios secos.", exampleTranslation: "Dudaklarım kuru." },
        { word: "Ceja", meaning: "Kaş", pronunciation: "se-ha", example: "Tiene las cejas gruesas.", exampleTranslation: "Kalın kaşları var." },
        { word: "Pestaña", meaning: "Kirpik", pronunciation: "pes-ta-nya", example: "Largas pestañas.", exampleTranslation: "Uzun kirpikler." },
        { word: "Barbilla", meaning: "Çene", pronunciation: "bar-bi-ya", example: "Una barbilla pequeña.", exampleTranslation: "Küçük bir çene." },
        { word: "Frente", meaning: "Alın", pronunciation: "fren-te", example: "Tiene la frente ancha.", exampleTranslation: "Geniş bir alnı var." },
        { word: "Piel", meaning: "Cilt/Deri", pronunciation: "piel", example: "Tengo la piel sensible.", exampleTranslation: "Hassas bir cildim var." },
    ]
};

// ===== ÜNİTE 12: GİYSİLER =====
const unit12Vocab: UnitVocabulary = {
    unitId: 12, title: "Giysiler",
    words: [
        { word: "Camisa", meaning: "Gömlek", pronunciation: "ka-mi-sa", example: "Camisa blanca.", exampleTranslation: "Beyaz gömlek." },
        { word: "Pantalón", meaning: "Pantolon", pronunciation: "pan-ta-lon", example: "Pantalón negro.", exampleTranslation: "Siyah pantolon." },
        { word: "Zapatos", meaning: "Ayakkabı", pronunciation: "sa-pa-tos", example: "Zapatos nuevos.", exampleTranslation: "Yeni ayakkabılar." },
        { word: "Vestido", meaning: "Elbise", pronunciation: "ves-ti-do", example: "Un vestido rojo.", exampleTranslation: "Kırmızı bir elbise." },
        { word: "Falda", meaning: "Etek", pronunciation: "fal-da", example: "Falda corta.", exampleTranslation: "Kısa etek." },
        { word: "Chaqueta", meaning: "Ceket", pronunciation: "ça-ke-ta", example: "Chaqueta de cuero.", exampleTranslation: "Deri ceket." },
        { word: "Camiseta", meaning: "Tişört", pronunciation: "ka-mi-se-ta", example: "Camiseta azul.", exampleTranslation: "Mavi tişört." },
        { word: "Abrigo", meaning: "Palto", pronunciation: "a-bri-go", example: "Abrigo de invierno.", exampleTranslation: "Kış paltosu." },
        { word: "Calcetines", meaning: "Çorap", pronunciation: "kal-se-ti-nes", example: "Calcetines blancos.", exampleTranslation: "Beyaz çoraplar." },
        { word: "Gorra", meaning: "Şapka (sporcu)", pronunciation: "go-rra", example: "Una gorra de béisbol.", exampleTranslation: "Beyzbol şapkası." },
        { word: "Sombrero", meaning: "Şapka", pronunciation: "som-bre-ro", example: "Un sombrero elegante.", exampleTranslation: "Zarif bir şapka." },
        { word: "Bufanda", meaning: "Atkı", pronunciation: "bu-fan-da", example: "Una bufanda de lana.", exampleTranslation: "Yün bir atkı." },
        { word: "Guantes", meaning: "Eldiven", pronunciation: "guan-tes", example: "Guantes de cuero.", exampleTranslation: "Deri eldiven." },
        { word: "Corbata", meaning: "Kravat", pronunciation: "kor-ba-ta", example: "Una corbata azul.", exampleTranslation: "Mavi bir kravat." },
        { word: "Cinturón", meaning: "Kemer", pronunciation: "sin-tu-ron", example: "Un cinturón negro.", exampleTranslation: "Siyah bir kemer." },
        { word: "Vaqueros", meaning: "Kot pantolon", pronunciation: "va-ke-ros", example: "Mis vaqueros favoritos.", exampleTranslation: "En sevdiğim kot pantolonlar." },
        { word: "Sudadera", meaning: "Sweatshirt", pronunciation: "su-da-de-ra", example: "Sudadera cómoda.", exampleTranslation: "Rahat sweatshirt." },
        { word: "Traje", meaning: "Takım elbise", pronunciation: "tra-he", example: "Un traje elegante.", exampleTranslation: "Zarif takım elbise." },
        { word: "Botas", meaning: "Bot", pronunciation: "bo-tas", example: "Botas de invierno.", exampleTranslation: "Kışlık botlar." },
        { word: "Zapatillas", meaning: "Spor ayakkabı", pronunciation: "sa-pa-ti-yas", example: "Zapatillas deportivas.", exampleTranslation: "Spor ayakkabılar." },
        { word: "Sandalias", meaning: "Sandalet", pronunciation: "san-da-lias", example: "Sandalias de verano.", exampleTranslation: "Yazlık sandaletler." },
        { word: "Pijama", meaning: "Pijama", pronunciation: "pi-ha-ma", example: "Mi pijama es azul.", exampleTranslation: "Pijamam mavi." },
        { word: "Ropa interior", meaning: "İç çamaşırı", pronunciation: "ro-pa in-te-rior", example: "Ropa interior de algodón.", exampleTranslation: "Pamuklu iç çamaşırı." },
        { word: "Bañador", meaning: "Mayo", pronunciation: "ba-nya-dor", example: "Mi bañador nuevo.", exampleTranslation: "Yeni mayom." },
        { word: "Chándal", meaning: "Eşofman", pronunciation: "çan-dal", example: "Chándal deportivo.", exampleTranslation: "Spor eşofman." },
        { word: "Bolsillo", meaning: "Cep", pronunciation: "bol-si-yo", example: "Las llaves están en el bolsillo.", exampleTranslation: "Anahtarlar cepte." },
        { word: "Talla", meaning: "Beden", pronunciation: "ta-ya", example: "¿Qué talla usas?", exampleTranslation: "Hangi bedeni giyiyorsun?" },
        { word: "Manga", meaning: "Kol (giysi)", pronunciation: "man-ga", example: "Camisa de manga corta.", exampleTranslation: "Kısa kollu gömlek." },
        { word: "Probador", meaning: "Giyinme kabini", pronunciation: "pro-ba-dor", example: "Voy al probador.", exampleTranslation: "Giyinme kabinine gidiyorum." },
        { word: "Moda", meaning: "Moda", pronunciation: "mo-da", example: "Está de moda.", exampleTranslation: "Modada." },
    ]
};

// ===== ÜNİTE 13: HAYVANLAR =====
const unit13Vocab: UnitVocabulary = {
    unitId: 13, title: "Hayvanlar",
    words: [
        { word: "Perro", meaning: "Köpek", pronunciation: "pe-rro", example: "Mi perro es grande.", exampleTranslation: "Köpeğim büyük." },
        { word: "Gato", meaning: "Kedi", pronunciation: "ga-to", example: "Tengo un gato negro.", exampleTranslation: "Siyah bir kedim var." },
        { word: "Pájaro", meaning: "Kuş", pronunciation: "pa-ha-ro", example: "Un pájaro canta.", exampleTranslation: "Bir kuş ötüyor." },
        { word: "Pez", meaning: "Balık", pronunciation: "pes", example: "Peces en el mar.", exampleTranslation: "Denizdeki balıklar." },
        { word: "Caballo", meaning: "At", pronunciation: "ka-ba-yo", example: "Un caballo blanco.", exampleTranslation: "Beyaz bir at." },
        { word: "Vaca", meaning: "İnek", pronunciation: "va-ka", example: "Las vacas dan leche.", exampleTranslation: "İnekler süt verir." },
        { word: "León", meaning: "Aslan", pronunciation: "le-on", example: "El león es fuerte.", exampleTranslation: "Aslan güçlüdür." },
        { word: "Elefante", meaning: "Fil", pronunciation: "e-le-fan-te", example: "Un elefante grande.", exampleTranslation: "Büyük bir fil." },
        { word: "Mono", meaning: "Maymun", pronunciation: "mo-no", example: "Los monos son divertidos.", exampleTranslation: "Maymunlar eğlencelidir." },
        { word: "Mariposa", meaning: "Kelebek", pronunciation: "ma-ri-po-sa", example: "Una mariposa bonita.", exampleTranslation: "Güzel bir kelebek." },
        { word: "Tigre", meaning: "Kaplan", pronunciation: "tig-re", example: "El tigre es peligroso.", exampleTranslation: "Kaplan tehlikelidir." },
        { word: "Oso", meaning: "Ayı", pronunciation: "o-so", example: "Un oso pardo.", exampleTranslation: "Kahverengi bir ayı." },
        { word: "Conejo", meaning: "Tavşan", pronunciation: "ko-ne-ho", example: "Un conejo blanco.", exampleTranslation: "Beyaz bir tavşan." },
        { word: "Ratón", meaning: "Fare", pronunciation: "ra-ton", example: "El ratón come queso.", exampleTranslation: "Fare peynir yer." },
        { word: "Serpiente", meaning: "Yılan", pronunciation: "ser-pien-te", example: "Una serpiente venenosa.", exampleTranslation: "Zehirli bir yılan." },
        { word: "Tortuga", meaning: "Kaplumbağa", pronunciation: "tor-tu-ga", example: "La tortuga es lenta.", exampleTranslation: "Kaplumbağa yavaş." },
        { word: "Cerdo", meaning: "Domuz", pronunciation: "ser-do", example: "El cerdo es gordo.", exampleTranslation: "Domuz şişman." },
        { word: "Oveja", meaning: "Koyun", pronunciation: "o-ve-ha", example: "Las ovejas dan lana.", exampleTranslation: "Koyunlar yün verir." },
        { word: "Gallina", meaning: "Tavuk", pronunciation: "ga-yi-na", example: "La gallina pone huevos.", exampleTranslation: "Tavuk yumurta yapar." },
        { word: "Pato", meaning: "Ördek", pronunciation: "pa-to", example: "El pato nada.", exampleTranslation: "Ördek yüzüyor." },
        { word: "Abeja", meaning: "Arı", pronunciation: "a-be-ha", example: "La abeja hace miel.", exampleTranslation: "Arı bal yapar." },
        { word: "Hormiga", meaning: "Karınca", pronunciation: "or-mi-ga", example: "Las hormigas trabajan mucho.", exampleTranslation: "Karıncalar çok çalışır." },
        { word: "Araña", meaning: "Örümcek", pronunciation: "a-ra-nya", example: "La araña hace una telaraña.", exampleTranslation: "Örümcek ağ yapar." },
        { word: "Mosca", meaning: "Sinek", pronunciation: "mos-ka", example: "La mosca es molesta.", exampleTranslation: "Sinek rahatsız edici." },
        { word: "Lobo", meaning: "Kurt", pronunciation: "lo-bo", example: "El lobo aúlla.", exampleTranslation: "Kurt ulur." },
        { word: "Zorro", meaning: "Tilki", pronunciation: "so-rro", example: "El zorro es astuto.", exampleTranslation: "Tilki kurnaz." },
        { word: "Delfín", meaning: "Yunus", pronunciation: "del-fin", example: "El delfín es inteligente.", exampleTranslation: "Yunus zeki." },
        { word: "Ballena", meaning: "Balina", pronunciation: "ba-ye-na", example: "La ballena es enorme.", exampleTranslation: "Balina çok büyük." },
        { word: "Tiburón", meaning: "Köpekbalığı", pronunciation: "ti-bu-ron", example: "El tiburón es peligroso.", exampleTranslation: "Köpekbalığı tehlikelidir." },
        { word: "Mascota", meaning: "Evcil hayvan", pronunciation: "mas-ko-ta", example: "Tengo una mascota.", exampleTranslation: "Bir evcil hayvanım var." },
    ]
};

// ===== ÜNİTE 14: MESLEKLER =====
const unit14Vocab: UnitVocabulary = {
    unitId: 14, title: "Meslekler",
    words: [
        { word: "Médico", meaning: "Doktor", pronunciation: "me-di-ko", example: "Soy médico.", exampleTranslation: "Doktorum." },
        { word: "Profesor", meaning: "Öğretmen", pronunciation: "pro-fe-sor", example: "Mi profesor de español.", exampleTranslation: "İspanyolca öğretmenim." },
        { word: "Ingeniero", meaning: "Mühendis", pronunciation: "in-he-nie-ro", example: "Es ingeniero.", exampleTranslation: "Mühendistir." },
        { word: "Abogado", meaning: "Avukat", pronunciation: "a-bo-ga-do", example: "Un buen abogado.", exampleTranslation: "İyi bir avukat." },
        { word: "Enfermero", meaning: "Hemşire", pronunciation: "en-fer-me-ro", example: "Enfermera muy amable.", exampleTranslation: "Çok nazik hemşire." },
        { word: "Policía", meaning: "Polis", pronunciation: "po-li-si-a", example: "El policía ayuda.", exampleTranslation: "Polis yardım ediyor." },
        { word: "Cocinero", meaning: "Aşçı", pronunciation: "ko-si-ne-ro", example: "Un buen cocinero.", exampleTranslation: "İyi bir aşçı." },
        { word: "Arquitecto", meaning: "Mimar", pronunciation: "ar-ki-tek-to", example: "Quiero ser arquitecto.", exampleTranslation: "Mimar olmak istiyorum." },
        { word: "Bombero", meaning: "İtfaiyeci", pronunciation: "bom-be-ro", example: "Los bomberos son valientes.", exampleTranslation: "İtfaiyeciler cesurdur." },
        { word: "Estudiante", meaning: "Öğrenci", pronunciation: "es-tu-dian-te", example: "Soy estudiante.", exampleTranslation: "Öğrenciyim." },
        { word: "Dentista", meaning: "Dişçi", pronunciation: "den-tis-ta", example: "Voy al dentista.", exampleTranslation: "Dişçiye gidiyorum." },
        { word: "Veterinario", meaning: "Veteriner", pronunciation: "ve-te-ri-na-rio", example: "Llevo mi gato al veterinario.", exampleTranslation: "Kedimi veterinere götürüyorum." },
        { word: "Periodista", meaning: "Gazeteci", pronunciation: "pe-rio-dis-ta", example: "Es periodista.", exampleTranslation: "Gazeteci." },
        { word: "Fotógrafo", meaning: "Fotoğrafçı", pronunciation: "fo-to-gra-fo", example: "Un fotógrafo profesional.", exampleTranslation: "Profesyonel fotoğrafçı." },
        { word: "Piloto", meaning: "Pilot", pronunciation: "pi-lo-to", example: "Quiero ser piloto.", exampleTranslation: "Pilot olmak istiyorum." },
        { word: "Electricista", meaning: "Elektrikçi", pronunciation: "e-lek-tri-sis-ta", example: "Llamo al electricista.", exampleTranslation: "Elektrikçiyi çağırıyorum." },
        { word: "Fontanero", meaning: "Tesisatçı", pronunciation: "fon-ta-ne-ro", example: "Necesito un fontanero.", exampleTranslation: "Tesisatçıya ihtiyacım var." },
        { word: "Mecánico", meaning: "Tamirci", pronunciation: "me-ka-ni-ko", example: "El mecánico arregla el coche.", exampleTranslation: "Tamirci arabayı tamir ediyor." },
        { word: "Camarero", meaning: "Garson", pronunciation: "ka-ma-re-ro", example: "El camarero trae la comida.", exampleTranslation: "Garson yemeği getiriyor." },
        { word: "Conductor", meaning: "Şoför", pronunciation: "kon-duk-tor", example: "El conductor del autobús.", exampleTranslation: "Otobüs şoförü." },
        { word: "Empresario", meaning: "İş adamı", pronunciation: "em-pre-sa-rio", example: "Es un empresario exitoso.", exampleTranslation: "Başarılı bir iş adamı." },
        { word: "Secretario", meaning: "Sekreter", pronunciation: "se-kre-ta-rio", example: "La secretaria organiza todo.", exampleTranslation: "Sekreter her şeyi organize ediyor." },
        { word: "Contador", meaning: "Muhasebeci", pronunciation: "kon-ta-dor", example: "Mi contador hace mis impuestos.", exampleTranslation: "Muhasebecim vergilerimi yapıyor." },
        { word: "Científico", meaning: "Bilim insanı", pronunciation: "sien-ti-fi-ko", example: "Los científicos investigan.", exampleTranslation: "Bilim insanları araştırma yapıyor." },
        { word: "Actor", meaning: "Aktör", pronunciation: "ak-tor", example: "Es actor de cine.", exampleTranslation: "Sinema aktörü." },
        { word: "Cantante", meaning: "Şarkıcı", pronunciation: "kan-tan-te", example: "Es cantante famoso.", exampleTranslation: "Ünlü bir şarkıcı." },
        { word: "Músico", meaning: "Müzisyen", pronunciation: "mu-si-ko", example: "Es músico profesional.", exampleTranslation: "Profesyonel müzisyen." },
        { word: "Escritor", meaning: "Yazar", pronunciation: "es-kri-tor", example: "Es escritor de novelas.", exampleTranslation: "Roman yazarı." },
        { word: "Trabajo", meaning: "İş", pronunciation: "tra-ba-ho", example: "Tengo mucho trabajo.", exampleTranslation: "Çok işim var." },
        { word: "Oficina", meaning: "Ofis", pronunciation: "o-fi-si-na", example: "Trabajo en una oficina.", exampleTranslation: "Bir ofiste çalışıyorum." },
    ]
};

// ===== ÜNİTE 15: ŞEHİRDE YERLER =====
const unit15Vocab: UnitVocabulary = {
    unitId: 15, title: "Şehirde Yerler",
    words: [
        { word: "Hospital", meaning: "Hastane", pronunciation: "os-pi-tal", example: "Voy al hospital.", exampleTranslation: "Hastaneye gidiyorum." },
        { word: "Banco", meaning: "Banka", pronunciation: "ban-ko", example: "Saco dinero del banco.", exampleTranslation: "Bankadan para çekiyorum." },
        { word: "Parque", meaning: "Park", pronunciation: "par-ke", example: "Paseo por el parque.", exampleTranslation: "Parkta yürüyorum." },
        { word: "Farmacia", meaning: "Eczane", pronunciation: "far-ma-sia", example: "Compro medicina en la farmacia.", exampleTranslation: "Eczaneden ilaç alıyorum." },
        { word: "Restaurante", meaning: "Restoran", pronunciation: "res-tau-ran-te", example: "Comemos en el restaurante.", exampleTranslation: "Restoranda yiyoruz." },
        { word: "Supermercado", meaning: "Süpermarket", pronunciation: "su-per-mer-ka-do", example: "Compro en el supermercado.", exampleTranslation: "Süpermarketten alışveriş yapıyorum." },
        { word: "Estación", meaning: "İstasyon", pronunciation: "es-ta-sion", example: "La estación de tren.", exampleTranslation: "Tren istasyonu." },
        { word: "Iglesia", meaning: "Kilise", pronunciation: "i-gle-sia", example: "Una iglesia antigua.", exampleTranslation: "Eski bir kilise." },
        { word: "Plaza", meaning: "Meydan", pronunciation: "pla-sa", example: "La plaza central.", exampleTranslation: "Merkez meydan." },
        { word: "Calle", meaning: "Sokak", pronunciation: "ka-ye", example: "Vivo en esta calle.", exampleTranslation: "Bu sokakta yaşıyorum." },
        { word: "Avenida", meaning: "Cadde", pronunciation: "a-ve-ni-da", example: "La avenida principal.", exampleTranslation: "Ana cadde." },
        { word: "Centro comercial", meaning: "AVM", pronunciation: "sen-tro ko-mer-sial", example: "Voy al centro comercial.", exampleTranslation: "AVM'ye gidiyorum." },
        { word: "Museo", meaning: "Müze", pronunciation: "mu-se-o", example: "Visito el museo.", exampleTranslation: "Müzeyi ziyaret ediyorum." },
        { word: "Biblioteca", meaning: "Kütüphane", pronunciation: "bi-blio-te-ka", example: "Estudio en la biblioteca.", exampleTranslation: "Kütüphanede çalışıyorum." },
        { word: "Gimnasio", meaning: "Spor salonu", pronunciation: "him-na-sio", example: "Voy al gimnasio.", exampleTranslation: "Spor salonuna gidiyorum." },
        { word: "Cine", meaning: "Sinema", pronunciation: "si-ne", example: "Vamos al cine.", exampleTranslation: "Sinemaya gidelim." },
        { word: "Teatro", meaning: "Tiyatro", pronunciation: "te-a-tro", example: "Veo una obra en el teatro.", exampleTranslation: "Tiyatroda oyun izliyorum." },
        { word: "Correos", meaning: "Postane", pronunciation: "ko-rre-os", example: "Envío una carta en correos.", exampleTranslation: "Postaneden mektup gönderiyorum." },
        { word: "Comisaría", meaning: "Polis merkezi", pronunciation: "ko-mi-sa-ri-a", example: "Voy a la comisaría.", exampleTranslation: "Polis merkezine gidiyorum." },
        { word: "Ayuntamiento", meaning: "Belediye", pronunciation: "a-yun-ta-mien-to", example: "El ayuntamiento de la ciudad.", exampleTranslation: "Şehir belediyesi." },
        { word: "Parada", meaning: "Durak", pronunciation: "pa-ra-da", example: "La parada del autobús.", exampleTranslation: "Otobüs durağı." },
        { word: "Mercado", meaning: "Pazar", pronunciation: "mer-ka-do", example: "Compro fruta en el mercado.", exampleTranslation: "Pazardan meyve alıyorum." },
        { word: "Panadería", meaning: "Fırın", pronunciation: "pa-na-de-ri-a", example: "Compro pan en la panadería.", exampleTranslation: "Fırından ekmek alıyorum." },
        { word: "Carnicería", meaning: "Kasap", pronunciation: "kar-ni-se-ri-a", example: "Compro carne en la carnicería.", exampleTranslation: "Kasaptan et alıyorum." },
        { word: "Peluquería", meaning: "Kuaför", pronunciation: "pe-lu-ke-ri-a", example: "Voy a la peluquería.", exampleTranslation: "Kuaföre gidiyorum." },
        { word: "Gasolinera", meaning: "Benzinlik", pronunciation: "ga-so-li-ne-ra", example: "Paro en la gasolinera.", exampleTranslation: "Benzinlikte duruyorum." },
        { word: "Esquina", meaning: "Köşe", pronunciation: "es-ki-na", example: "En la esquina.", exampleTranslation: "Köşede." },
        { word: "Semáforo", meaning: "Trafik ışığı", pronunciation: "se-ma-fo-ro", example: "Para en el semáforo.", exampleTranslation: "Trafik ışığında dur." },
        { word: "Puente", meaning: "Köprü", pronunciation: "puen-te", example: "Cruzamos el puente.", exampleTranslation: "Köprüyü geçiyoruz." },
        { word: "Fuente", meaning: "Çeşme", pronunciation: "fuen-te", example: "La fuente de la plaza.", exampleTranslation: "Meydandaki çeşme." },
    ]
};

// ===== ÜNİTE 16: ULAŞIM =====
const unit16Vocab: UnitVocabulary = {
    unitId: 16, title: "Ulaşım",
    words: [
        { word: "Coche", meaning: "Araba", pronunciation: "ko-çe", example: "Mi coche es rojo.", exampleTranslation: "Arabam kırmızı." },
        { word: "Autobús", meaning: "Otobüs", pronunciation: "au-to-bus", example: "Tomo el autobús.", exampleTranslation: "Otobüse biniyorum." },
        { word: "Tren", meaning: "Tren", pronunciation: "tren", example: "El tren es rápido.", exampleTranslation: "Tren hızlı." },
        { word: "Avión", meaning: "Uçak", pronunciation: "a-vion", example: "Viajo en avión.", exampleTranslation: "Uçakla seyahat ediyorum." },
        { word: "Metro", meaning: "Metro", pronunciation: "me-tro", example: "El metro es barato.", exampleTranslation: "Metro ucuz." },
        { word: "Bicicleta", meaning: "Bisiklet", pronunciation: "bi-si-kle-ta", example: "Voy en bicicleta.", exampleTranslation: "Bisikletle gidiyorum." },
        { word: "Taxi", meaning: "Taksi", pronunciation: "tak-si", example: "Llamo un taxi.", exampleTranslation: "Taksi çağırıyorum." },
        { word: "Barco", meaning: "Gemi", pronunciation: "bar-ko", example: "Un barco grande.", exampleTranslation: "Büyük bir gemi." },
        { word: "Moto", meaning: "Motosiklet", pronunciation: "mo-to", example: "Tengo una moto.", exampleTranslation: "Bir motosikletim var." },
        { word: "Aeropuerto", meaning: "Havaalanı", pronunciation: "a-e-ro-puer-to", example: "Voy al aeropuerto.", exampleTranslation: "Havaalanına gidiyorum." },
        { word: "Camión", meaning: "Kamyon", pronunciation: "ka-mion", example: "Un camión de carga.", exampleTranslation: "Bir yük kamyonu." },
        { word: "Helicóptero", meaning: "Helikopter", pronunciation: "e-li-kop-te-ro", example: "Veo un helicóptero.", exampleTranslation: "Bir helikopter görüyorum." },
        { word: "Tranvía", meaning: "Tramvay", pronunciation: "tran-vi-a", example: "El tranvía pasa cada 10 minutos.", exampleTranslation: "Tramvay her 10 dakikada geçiyor." },
        { word: "Billete", meaning: "Bilet", pronunciation: "bi-ye-te", example: "Compro un billete.", exampleTranslation: "Bilet alıyorum." },
        { word: "Pasajero", meaning: "Yolcu", pronunciation: "pa-sa-he-ro", example: "Soy pasajero.", exampleTranslation: "Yolcuyum." },
        { word: "Conductor", meaning: "Sürücü", pronunciation: "kon-duk-tor", example: "El conductor del autobús.", exampleTranslation: "Otobüs şoförü." },
        { word: "Carretera", meaning: "Karayolu", pronunciation: "ka-rre-te-ra", example: "La carretera está cerrada.", exampleTranslation: "Karayolu kapalı." },
        { word: "Autopista", meaning: "Otoyol", pronunciation: "au-to-pis-ta", example: "Voy por la autopista.", exampleTranslation: "Otoyoldan gidiyorum." },
        { word: "Atasco", meaning: "Trafik sıkışıklığı", pronunciation: "a-tas-ko", example: "Hay un atasco.", exampleTranslation: "Trafik var." },
        { word: "Velocidad", meaning: "Hız", pronunciation: "ve-lo-si-dad", example: "El límite de velocidad.", exampleTranslation: "Hız sınırı." },
        { word: "Gasolina", meaning: "Benzin", pronunciation: "ga-so-li-na", example: "Necesito gasolina.", exampleTranslation: "Benzine ihtiyacım var." },
        { word: "Rueda", meaning: "Tekerlek", pronunciation: "rue-da", example: "Tengo una rueda pinchada.", exampleTranslation: "Patlak lastiğim var." },
        { word: "Cinturón de seguridad", meaning: "Emniyet kemeri", pronunciation: "sin-tu-ron de se-gu-ri-dad", example: "Ponte el cinturón.", exampleTranslation: "Kemeri tak." },
        { word: "Permiso de conducir", meaning: "Ehliyet", pronunciation: "per-mi-so de kon-du-sir", example: "Tengo permiso de conducir.", exampleTranslation: "Ehliyetim var." },
        { word: "Aparcar", meaning: "Park etmek", pronunciation: "a-par-kar", example: "No puedo aparcar aquí.", exampleTranslation: "Buraya park edemem." },
        { word: "Salida", meaning: "Çıkış", pronunciation: "sa-li-da", example: "La salida de emergencia.", exampleTranslation: "Acil çıkış." },
        { word: "Llegada", meaning: "Varış", pronunciation: "ye-ga-da", example: "La hora de llegada.", exampleTranslation: "Varış saati." },
        { word: "Retraso", meaning: "Gecikme", pronunciation: "re-tra-so", example: "El tren tiene retraso.", exampleTranslation: "Tren gecikmeli." },
        { word: "Andén", meaning: "Peron", pronunciation: "an-den", example: "El tren sale del andén 5.", exampleTranslation: "Tren 5. perondan kalkıyor." },
        { word: "Equipaje", meaning: "Bagaj", pronunciation: "e-ki-pa-he", example: "Llevo mucho equipaje.", exampleTranslation: "Çok bagaj taşıyorum." },
    ]
};

// ===== ÜNİTE 17: GÜNLÜK RUTİNLER =====
const unit17Vocab: UnitVocabulary = {
    unitId: 17, title: "Günlük Rutinler",
    words: [
        { word: "Levantarse", meaning: "Kalkmak", pronunciation: "le-van-tar-se", example: "Me levanto a las siete.", exampleTranslation: "Yedide kalkıyorum." },
        { word: "Ducharse", meaning: "Duş almak", pronunciation: "du-çar-se", example: "Me ducho por la mañana.", exampleTranslation: "Sabahları duş alıyorum." },
        { word: "Desayunar", meaning: "Kahvaltı etmek", pronunciation: "de-sa-yu-nar", example: "Desayuno a las ocho.", exampleTranslation: "Sekizde kahvaltı ediyorum." },
        { word: "Trabajar", meaning: "Çalışmak", pronunciation: "tra-ba-har", example: "Trabajo en una oficina.", exampleTranslation: "Bir ofiste çalışıyorum." },
        { word: "Almorzar", meaning: "Öğle yemeği yemek", pronunciation: "al-mor-sar", example: "Almuerzo a la una.", exampleTranslation: "Birde öğle yemeği yiyorum." },
        { word: "Cenar", meaning: "Akşam yemeği yemek", pronunciation: "se-nar", example: "Ceno a las ocho.", exampleTranslation: "Sekizde akşam yemeği yiyorum." },
        { word: "Acostarse", meaning: "Yatmak", pronunciation: "a-kos-tar-se", example: "Me acuesto tarde.", exampleTranslation: "Geç yatıyorum." },
        { word: "Dormir", meaning: "Uyumak", pronunciation: "dor-mir", example: "Duermo ocho horas.", exampleTranslation: "Sekiz saat uyuyorum." },
        { word: "Vestirse", meaning: "Giyinmek", pronunciation: "ves-tir-se", example: "Me visto rápido.", exampleTranslation: "Hızlı giyiniyorum." },
        { word: "Lavarse", meaning: "Yıkanmak", pronunciation: "la-var-se", example: "Me lavo las manos.", exampleTranslation: "Ellerimi yıkıyorum." },
        { word: "Despertarse", meaning: "Uyanmak", pronunciation: "des-per-tar-se", example: "Me despierto temprano.", exampleTranslation: "Erken uyanıyorum." },
        { word: "Peinarse", meaning: "Taranmak", pronunciation: "pey-nar-se", example: "Me peino el pelo.", exampleTranslation: "Saçımı tarıyorum." },
        { word: "Afeitarse", meaning: "Tıraş olmak", pronunciation: "a-fey-tar-se", example: "Me afeito cada mañana.", exampleTranslation: "Her sabah tıraş oluyorum." },
        { word: "Maquillarse", meaning: "Makyaj yapmak", pronunciation: "ma-ki-yar-se", example: "Me maquillo antes de salir.", exampleTranslation: "Çıkmadan önce makyaj yapıyorum." },
        { word: "Cepillarse los dientes", meaning: "Diş fırçalamak", pronunciation: "se-pi-yar-se los dien-tes", example: "Me cepillo los dientes.", exampleTranslation: "Dişlerimi fırçalıyorum." },
        { word: "Bañarse", meaning: "Banyo yapmak", pronunciation: "ba-nyar-se", example: "Me baño por la noche.", exampleTranslation: "Geceleri banyo yapıyorum." },
        { word: "Preparar", meaning: "Hazırlamak", pronunciation: "pre-pa-rar", example: "Preparo el desayuno.", exampleTranslation: "Kahvaltı hazırlıyorum." },
        { word: "Salir de casa", meaning: "Evden çıkmak", pronunciation: "sa-lir de ka-sa", example: "Salgo de casa a las 8.", exampleTranslation: "Saat 8'de evden çıkıyorum." },
        { word: "Llegar", meaning: "Varmak", pronunciation: "ye-gar", example: "Llego al trabajo.", exampleTranslation: "İşe varıyorum." },
        { word: "Volver", meaning: "Dönmek", pronunciation: "vol-ver", example: "Vuelvo a casa.", exampleTranslation: "Eve dönüyorum." },
        { word: "Descansar", meaning: "Dinlenmek", pronunciation: "des-kan-sar", example: "Descanso después de trabajar.", exampleTranslation: "Çalıştıktan sonra dinleniyorum." },
        { word: "Estudiar", meaning: "Ders çalışmak", pronunciation: "es-tu-diar", example: "Estudio por la tarde.", exampleTranslation: "Öğleden sonra ders çalışıyorum." },
        { word: "Ver la televisión", meaning: "Televizyon izlemek", pronunciation: "ver la te-le-vi-sion", example: "Veo la tele por la noche.", exampleTranslation: "Geceleri TV izliyorum." },
        { word: "Pasear", meaning: "Yürüyüş yapmak", pronunciation: "pa-se-ar", example: "Paseo por el parque.", exampleTranslation: "Parkta yürüyorum." },
        { word: "Hacer ejercicio", meaning: "Egzersiz yapmak", pronunciation: "a-ser e-her-si-sio", example: "Hago ejercicio cada día.", exampleTranslation: "Her gün egzersiz yapıyorum." },
        { word: "Limpiar", meaning: "Temizlemek", pronunciation: "lim-piar", example: "Limpio la casa.", exampleTranslation: "Evi temizliyorum." },
        { word: "Comprar", meaning: "Alışveriş yapmak", pronunciation: "kom-prar", example: "Compro comida.", exampleTranslation: "Yiyecek alıyorum." },
        { word: "Quedar con amigos", meaning: "Arkadaşlarla buluşmak", pronunciation: "ke-dar kon a-mi-gos", example: "Quedo con amigos.", exampleTranslation: "Arkadaşlarla buluşuyorum." },
        { word: "Relajarse", meaning: "Rahatlamak", pronunciation: "re-la-har-se", example: "Me relajo los fines de semana.", exampleTranslation: "Hafta sonları rahatlarım." },
        { word: "Rutina", meaning: "Rutin", pronunciation: "ru-ti-na", example: "Mi rutina diaria.", exampleTranslation: "Günlük rutinim." },
    ]
};

// ===== ÜNİTE 18: SAAT SÖYLEMEK =====
const unit18Vocab: UnitVocabulary = {
    unitId: 18, title: "Saat Söylemek",
    words: [
        { word: "Hora", meaning: "Saat", pronunciation: "o-ra", example: "¿Qué hora es?", exampleTranslation: "Saat kaç?" },
        { word: "Minuto", meaning: "Dakika", pronunciation: "mi-nu-to", example: "Diez minutos.", exampleTranslation: "On dakika." },
        { word: "Segundo", meaning: "Saniye", pronunciation: "se-gun-do", example: "Un segundo.", exampleTranslation: "Bir saniye." },
        { word: "En punto", meaning: "Tam", pronunciation: "en pun-to", example: "Son las tres en punto.", exampleTranslation: "Saat tam üç." },
        { word: "Y media", meaning: "Buçuk", pronunciation: "i me-dia", example: "Son las dos y media.", exampleTranslation: "Saat iki buçuk." },
        { word: "Y cuarto", meaning: "Çeyrek geçe", pronunciation: "i kuar-to", example: "Son las cuatro y cuarto.", exampleTranslation: "Dördü çeyrek geçiyor." },
        { word: "Menos cuarto", meaning: "Çeyrek kala", pronunciation: "me-nos kuar-to", example: "Son las cinco menos cuarto.", exampleTranslation: "Beşe çeyrek kala." },
        { word: "Mañana", meaning: "Sabah", pronunciation: "ma-nya-na", example: "A las nueve de la mañana.", exampleTranslation: "Sabah dokuzda." },
        { word: "Tarde", meaning: "Öğleden sonra", pronunciation: "tar-de", example: "A las tres de la tarde.", exampleTranslation: "Öğleden sonra üçte." },
        { word: "Noche", meaning: "Gece", pronunciation: "no-çe", example: "A las diez de la noche.", exampleTranslation: "Gece onda." },
        { word: "Mediodía", meaning: "Öğlen", pronunciation: "me-dio-di-a", example: "Es mediodía.", exampleTranslation: "Öğlen." },
        { word: "Medianoche", meaning: "Gece yarısı", pronunciation: "me-dia-no-çe", example: "Es medianoche.", exampleTranslation: "Gece yarısı." },
        { word: "Y cinco", meaning: "Beş geçe", pronunciation: "i sin-ko", example: "Son las tres y cinco.", exampleTranslation: "Üçü beş geçiyor." },
        { word: "Y diez", meaning: "On geçe", pronunciation: "i dies", example: "Son las tres y diez.", exampleTranslation: "Üçü on geçiyor." },
        { word: "Y veinte", meaning: "Yirmi geçe", pronunciation: "i veyn-te", example: "Son las tres y veinte.", exampleTranslation: "Üçü yirmi geçiyor." },
        { word: "Y veinticinco", meaning: "Yirmi beş geçe", pronunciation: "i veyn-ti-sin-ko", example: "Son las tres y veinticinco.", exampleTranslation: "Üçü yirmi beş geçiyor." },
        { word: "Menos veinte", meaning: "Yirmiye kala", pronunciation: "me-nos veyn-te", example: "Son las cuatro menos veinte.", exampleTranslation: "Dörde yirmi var." },
        { word: "Menos diez", meaning: "Ona kala", pronunciation: "me-nos dies", example: "Son las cuatro menos diez.", exampleTranslation: "Dörde on var." },
        { word: "Menos cinco", meaning: "Beşe kala", pronunciation: "me-nos sin-ko", example: "Son las cuatro menos cinco.", exampleTranslation: "Dörde beş var." },
        { word: "Temprano", meaning: "Erken", pronunciation: "tem-pra-no", example: "Es muy temprano.", exampleTranslation: "Çok erken." },
        { word: "Tarde", meaning: "Geç", pronunciation: "tar-de", example: "Llego tarde.", exampleTranslation: "Geç kalıyorum." },
        { word: "Puntual", meaning: "Dakik", pronunciation: "pun-tual", example: "Soy muy puntual.", exampleTranslation: "Çok dakikim." },
        { word: "Pronto", meaning: "Yakında/Çabuk", pronunciation: "pron-to", example: "Llega pronto.", exampleTranslation: "Çabuk gel." },
        { word: "Ahora", meaning: "Şimdi", pronunciation: "a-o-ra", example: "Lo hago ahora.", exampleTranslation: "Şimdi yapıyorum." },
        { word: "Antes", meaning: "Önce", pronunciation: "an-tes", example: "Antes del trabajo.", exampleTranslation: "İşten önce." },
        { word: "Después", meaning: "Sonra", pronunciation: "des-pues", example: "Después de comer.", exampleTranslation: "Yemekten sonra." },
        { word: "Durante", meaning: "Sırasında", pronunciation: "du-ran-te", example: "Durante la clase.", exampleTranslation: "Ders sırasında." },
        { word: "Reloj", meaning: "Saat (eşya)", pronunciation: "re-loh", example: "Mi reloj está roto.", exampleTranslation: "Saatim bozuk." },
        { word: "Alarma", meaning: "Alarm", pronunciation: "a-lar-ma", example: "Pongo la alarma.", exampleTranslation: "Alarmı kuruyorum." },
        { word: "Cita", meaning: "Randevu", pronunciation: "si-ta", example: "Tengo una cita a las 10.", exampleTranslation: "Saat 10'da randevum var." },
    ]
};

// ===== ÜNİTE 19: HAVA DURUMU =====
const unit19Vocab: UnitVocabulary = {
    unitId: 19, title: "Hava Durumu",
    words: [
        { word: "Sol", meaning: "Güneş", pronunciation: "sol", example: "Hace sol.", exampleTranslation: "Güneş var." },
        { word: "Lluvia", meaning: "Yağmur", pronunciation: "yu-via", example: "Cae la lluvia.", exampleTranslation: "Yağmur yağıyor." },
        { word: "Nieve", meaning: "Kar", pronunciation: "nie-ve", example: "Cae nieve.", exampleTranslation: "Kar yağıyor." },
        { word: "Viento", meaning: "Rüzgar", pronunciation: "vien-to", example: "Hace viento.", exampleTranslation: "Rüzgar var." },
        { word: "Nube", meaning: "Bulut", pronunciation: "nu-be", example: "Hay nubes.", exampleTranslation: "Bulutlar var." },
        { word: "Calor", meaning: "Sıcak", pronunciation: "ka-lor", example: "Hace mucho calor.", exampleTranslation: "Çok sıcak." },
        { word: "Frío", meaning: "Soğuk", pronunciation: "fri-o", example: "Hace frío.", exampleTranslation: "Soğuk." },
        { word: "Temperatura", meaning: "Sıcaklık", pronunciation: "tem-pe-ra-tu-ra", example: "La temperatura es alta.", exampleTranslation: "Sıcaklık yüksek." },
        { word: "Tormenta", meaning: "Fırtına", pronunciation: "tor-men-ta", example: "Hay una tormenta.", exampleTranslation: "Fırtına var." },
        { word: "Niebla", meaning: "Sis", pronunciation: "nie-bla", example: "Hay niebla.", exampleTranslation: "Sis var." },
        { word: "Llover", meaning: "Yağmur yağmak", pronunciation: "yo-ver", example: "Está lloviendo.", exampleTranslation: "Yağmur yağıyor." },
        { word: "Nevar", meaning: "Kar yağmak", pronunciation: "ne-var", example: "Está nevando.", exampleTranslation: "Kar yağıyor." },
        { word: "Nublado", meaning: "Bulutlu", pronunciation: "nu-bla-do", example: "Está nublado.", exampleTranslation: "Bulutlu." },
        { word: "Soleado", meaning: "Güneşli", pronunciation: "so-le-a-do", example: "Está soleado.", exampleTranslation: "Güneşli." },
        { word: "Despejado", meaning: "Açık (hava)", pronunciation: "des-pe-ha-do", example: "El cielo está despejado.", exampleTranslation: "Gökyüzü açık." },
        { word: "Húmedo", meaning: "Nemli", pronunciation: "u-me-do", example: "Está muy húmedo.", exampleTranslation: "Çok nemli." },
        { word: "Seco", meaning: "Kuru", pronunciation: "se-ko", example: "El clima es seco.", exampleTranslation: "İklim kuru." },
        { word: "Helada", meaning: "Don", pronunciation: "e-la-da", example: "Hay helada esta mañana.", exampleTranslation: "Bu sabah don var." },
        { word: "Granizo", meaning: "Dolu", pronunciation: "gra-ni-so", example: "Cae granizo.", exampleTranslation: "Dolu yağıyor." },
        { word: "Relámpago", meaning: "Şimşek", pronunciation: "re-lam-pa-go", example: "Veo un relámpago.", exampleTranslation: "Bir şimşek görüyorum." },
        { word: "Trueno", meaning: "Gök gürültüsü", pronunciation: "true-no", example: "Escucho el trueno.", exampleTranslation: "Gök gürültüsü duyuyorum." },
        { word: "Arcoíris", meaning: "Gökkuşağı", pronunciation: "ar-ko-i-ris", example: "Hay un arcoíris.", exampleTranslation: "Gökkuşağı var." },
        { word: "Pronóstico", meaning: "Hava tahmini", pronunciation: "pro-nos-ti-ko", example: "El pronóstico del tiempo.", exampleTranslation: "Hava tahmini." },
        { word: "Grado", meaning: "Derece", pronunciation: "gra-do", example: "Hace 30 grados.", exampleTranslation: "30 derece." },
        { word: "Bajo cero", meaning: "Sıfırın altında", pronunciation: "ba-ho se-ro", example: "Hace cinco bajo cero.", exampleTranslation: "Sıfırın altında beş derece." },
        { word: "Paraguas", meaning: "Şemsiye", pronunciation: "pa-ra-guas", example: "Llevo un paraguas.", exampleTranslation: "Şemsiye götürüyorum." },
        { word: "Impermeable", meaning: "Yağmurluk", pronunciation: "im-per-me-a-ble", example: "Necesito un impermeable.", exampleTranslation: "Yağmurluk ihtiyacım var." },
        { word: "Estación del año", meaning: "Mevsim", pronunciation: "es-ta-sion del a-nyo", example: "Mi estación favorita.", exampleTranslation: "En sevdiğim mevsim." },
        { word: "Primavera", meaning: "İlkbahar", pronunciation: "pri-ma-ve-ra", example: "La primavera es bonita.", exampleTranslation: "İlkbahar güzel." },
        { word: "Verano", meaning: "Yaz", pronunciation: "ve-ra-no", example: "En verano hace calor.", exampleTranslation: "Yazın sıcak olur." },
    ]
};

// ===== ÜNİTE 20: HOBİLER =====
const unit20Vocab: UnitVocabulary = {
    unitId: 20, title: "Hobiler",
    words: [
        { word: "Leer", meaning: "Okumak", pronunciation: "le-er", example: "Me gusta leer.", exampleTranslation: "Okumayı seviyorum." },
        { word: "Nadar", meaning: "Yüzmek", pronunciation: "na-dar", example: "Nado en la piscina.", exampleTranslation: "Havuzda yüzüyorum." },
        { word: "Bailar", meaning: "Dans etmek", pronunciation: "bai-lar", example: "Me gusta bailar.", exampleTranslation: "Dans etmeyi seviyorum." },
        { word: "Cocinar", meaning: "Yemek yapmak", pronunciation: "ko-si-nar", example: "Cocino platos nuevos.", exampleTranslation: "Yeni yemekler yapıyorum." },
        { word: "Jugar", meaning: "Oynamak", pronunciation: "hu-gar", example: "Juego al fútbol.", exampleTranslation: "Futbol oynuyorum." },
        { word: "Cantar", meaning: "Şarkı söylemek", pronunciation: "kan-tar", example: "Canto en la ducha.", exampleTranslation: "Duşta şarkı söylüyorum." },
        { word: "Correr", meaning: "Koşmak", pronunciation: "ko-rrer", example: "Corro por las mañanas.", exampleTranslation: "Sabahları koşuyorum." },
        { word: "Viajar", meaning: "Seyahat etmek", pronunciation: "via-har", example: "Me encanta viajar.", exampleTranslation: "Seyahat etmeye bayılıyorum." },
        { word: "Pintar", meaning: "Resim yapmak", pronunciation: "pin-tar", example: "Pinto cuadros.", exampleTranslation: "Tablolar yapıyorum." },
        { word: "Tocar", meaning: "Çalmak (enstrüman)", pronunciation: "to-kar", example: "Toco la guitarra.", exampleTranslation: "Gitar çalıyorum." },
        { word: "Escribir", meaning: "Yazmak", pronunciation: "es-kri-bir", example: "Escribo poesía.", exampleTranslation: "Şiir yazıyorum." },
        { word: "Dibujar", meaning: "Çizmek", pronunciation: "di-bu-har", example: "Dibujo retratos.", exampleTranslation: "Portreler çiziyorum." },
        { word: "Fotografía", meaning: "Fotoğrafçılık", pronunciation: "fo-to-gra-fi-a", example: "Me gusta la fotografía.", exampleTranslation: "Fotoğrafçılığı seviyorum." },
        { word: "Jardinería", meaning: "Bahçecilik", pronunciation: "har-di-ne-ri-a", example: "Hago jardinería.", exampleTranslation: "Bahçecilik yapıyorum." },
        { word: "Senderismo", meaning: "Yürüyüş (dağ)", pronunciation: "sen-de-ris-mo", example: "Practico senderismo.", exampleTranslation: "Dağ yürüyüşü yapıyorum." },
        { word: "Ciclismo", meaning: "Bisiklet sporu", pronunciation: "si-klis-mo", example: "Hago ciclismo.", exampleTranslation: "Bisiklet sürüyorum." },
        { word: "Yoga", meaning: "Yoga", pronunciation: "yo-ga", example: "Practico yoga.", exampleTranslation: "Yoga yapıyorum." },
        { word: "Meditación", meaning: "Meditasyon", pronunciation: "me-di-ta-sion", example: "Hago meditación.", exampleTranslation: "Meditasyon yapıyorum." },
        { word: "Videojuegos", meaning: "Video oyunları", pronunciation: "vi-de-o-hue-gos", example: "Juego a videojuegos.", exampleTranslation: "Video oyunları oynuyorum." },
        { word: "Coleccionar", meaning: "Koleksiyon yapmak", pronunciation: "ko-lek-sio-nar", example: "Colecciono sellos.", exampleTranslation: "Pul koleksiyonu yapıyorum." },
        { word: "Tejer", meaning: "Örmek", pronunciation: "te-her", example: "Tejo bufandas.", exampleTranslation: "Atkı örüyorum." },
        { word: "Coser", meaning: "Dikmek", pronunciation: "ko-ser", example: "Coso mi ropa.", exampleTranslation: "Kendi kıyafetlerimi dikiyorum." },
        { word: "Pescar", meaning: "Balık tutmak", pronunciation: "pes-kar", example: "Me gusta pescar.", exampleTranslation: "Balık tutmayı seviyorum." },
        { word: "Acampar", meaning: "Kamp yapmak", pronunciation: "a-kam-par", example: "Acampamos en la montaña.", exampleTranslation: "Dağda kamp yapıyoruz." },
        { word: "Patinar", meaning: "Paten yapmak", pronunciation: "pa-ti-nar", example: "Patino sobre hielo.", exampleTranslation: "Buz pateni yapıyorum." },
        { word: "Esquiar", meaning: "Kayak yapmak", pronunciation: "es-kiar", example: "Esquío en invierno.", exampleTranslation: "Kışın kayak yapıyorum." },
        { word: "Montar a caballo", meaning: "At binmek", pronunciation: "mon-tar a ka-ba-yo", example: "Monto a caballo.", exampleTranslation: "Ata biniyorum." },
        { word: "Escalar", meaning: "Tırmanmak", pronunciation: "es-ka-lar", example: "Escalo montañas.", exampleTranslation: "Dağlara tırmanıyorum." },
        { word: "Afición", meaning: "Hobi", pronunciation: "a-fi-sion", example: "Mi afición es leer.", exampleTranslation: "Hobim okumak." },
        { word: "Tiempo libre", meaning: "Boş zaman", pronunciation: "tiem-po li-bre", example: "En mi tiempo libre.", exampleTranslation: "Boş zamanımda." },
    ]
};

// ===== YENİ A1 ÜNİTELERİ (21-25) =====

// ===== ÜNİTE 21: DUYGULAR VE HİSLER =====
const unit21Vocab: UnitVocabulary = {
    unitId: 21, title: "Duygular ve Hisler",
    words: [
        { word: "Feliz", meaning: "Mutlu", pronunciation: "fe-lis", example: "Estoy muy feliz hoy.", exampleTranslation: "Bugün çok mutluyum." },
        { word: "Triste", meaning: "Üzgün", pronunciation: "tris-te", example: "Está triste porque llueve.", exampleTranslation: "Yağmur yağdığı için üzgün." },
        { word: "Cansado/a", meaning: "Yorgun", pronunciation: "kan-sa-do", example: "Estoy cansado después del trabajo.", exampleTranslation: "İşten sonra yorgunum." },
        { word: "Nervioso/a", meaning: "Gergin", pronunciation: "ner-vio-so", example: "Estoy nervioso antes del examen.", exampleTranslation: "Sınavdan önce gerginim." },
        { word: "Enfadado/a", meaning: "Kızgın", pronunciation: "en-fa-da-do", example: "Mi padre está enfadado.", exampleTranslation: "Babam kızgın." },
        { word: "Preocupado/a", meaning: "Endişeli", pronunciation: "pre-o-ku-pa-do", example: "Estoy preocupado por ti.", exampleTranslation: "Senin için endişeliyim." },
        { word: "Contento/a", meaning: "Memnun", pronunciation: "kon-ten-to", example: "Estamos contentos con el resultado.", exampleTranslation: "Sonuçtan memnunuz." },
        { word: "Aburrido/a", meaning: "Sıkılmış", pronunciation: "a-bu-rri-do", example: "Los niños están aburridos.", exampleTranslation: "Çocuklar sıkılmış." },
        { word: "Tranquilo/a", meaning: "Sakin", pronunciation: "tran-ki-lo", example: "Estoy tranquilo ahora.", exampleTranslation: "Şimdi sakinim." },
        { word: "Emocionado/a", meaning: "Heyecanlı", pronunciation: "e-mo-sio-na-do", example: "Estoy emocionado por el viaje.", exampleTranslation: "Seyahat için heyecanlıyım." },
        { word: "Asustado/a", meaning: "Korkmış", pronunciation: "a-sus-ta-do", example: "Estoy asustado.", exampleTranslation: "Korkmuşum." },
        { word: "Sorprendido/a", meaning: "Şaşırmış", pronunciation: "sor-pren-di-do", example: "Estoy sorprendido.", exampleTranslation: "Şaşırdım." },
        { word: "Alegre", meaning: "Neşeli", pronunciation: "a-le-gre", example: "Estoy muy alegre.", exampleTranslation: "Çok neşeliyim." },
        { word: "Confundido/a", meaning: "Kafası karışık", pronunciation: "kon-fun-di-do", example: "Estoy confundido.", exampleTranslation: "Kafam karıştı." },
        { word: "Orgulloso/a", meaning: "Gururlu", pronunciation: "or-gu-yo-so", example: "Estoy orgulloso de ti.", exampleTranslation: "Seninle gurur duyuyorum." },
        { word: "Avergonzado/a", meaning: "Utanmış", pronunciation: "a-ver-gon-sa-do", example: "Estoy avergonzado.", exampleTranslation: "Utandım." },
        { word: "Celoso/a", meaning: "Kıskanç", pronunciation: "se-lo-so", example: "Está celoso.", exampleTranslation: "Kıskanç." },
        { word: "Solo/a", meaning: "Yalnız", pronunciation: "so-lo", example: "Me siento solo.", exampleTranslation: "Kendimi yalnız hissediyorum." },
        { word: "Agotado/a", meaning: "Bitkin", pronunciation: "a-go-ta-do", example: "Estoy agotado.", exampleTranslation: "Bitkinim." },
        { word: "Relajado/a", meaning: "Rahatlamış", pronunciation: "re-la-ha-do", example: "Me siento relajado.", exampleTranslation: "Rahatlamış hissediyorum." },
        { word: "Frustrado/a", meaning: "Hayal kırıklığına uğramış", pronunciation: "frus-tra-do", example: "Estoy frustrado.", exampleTranslation: "Hayal kırıklığına uğradım." },
        { word: "Ilusionado/a", meaning: "Umutlu/Hevesli", pronunciation: "i-lu-sio-na-do", example: "Estoy ilusionado.", exampleTranslation: "Hevesliyim." },
        { word: "Decepcionado/a", meaning: "Hayal kırıklığına uğramış", pronunciation: "de-sep-sio-na-do", example: "Estoy decepcionado.", exampleTranslation: "Hayal kırıklığına uğradım." },
        { word: "Animado/a", meaning: "Neşeli/Canlı", pronunciation: "a-ni-ma-do", example: "Hoy estoy muy animado.", exampleTranslation: "Bugün çok canlıyım." },
        { word: "Deprimido/a", meaning: "Depresyonda", pronunciation: "de-pri-mi-do", example: "Se siente deprimido.", exampleTranslation: "Depresyonda hissediyor." },
        { word: "Sentirse", meaning: "Hissetmek", pronunciation: "sen-tir-se", example: "¿Cómo te sientes?", exampleTranslation: "Nasıl hissediyorsun?" },
        { word: "Llorar", meaning: "Ağlamak", pronunciation: "yo-rar", example: "El bebé llora.", exampleTranslation: "Bebek ağlıyor." },
        { word: "Reír", meaning: "Gülmek", pronunciation: "re-ir", example: "Me gusta reír.", exampleTranslation: "Gülmeyi seviyorum." },
        { word: "Sonreír", meaning: "Gülümsemek", pronunciation: "son-re-ir", example: "Ella sonríe.", exampleTranslation: "O gülümsüyor." },
        { word: "Emoción", meaning: "Duygu", pronunciation: "e-mo-sion", example: "Expresa tus emociones.", exampleTranslation: "Duygularını ifade et." },
    ]
};

// ===== ÜNİTE 22: OKUL VE SINIF =====
const unit22Vocab: UnitVocabulary = {
    unitId: 22, title: "Okul ve Sınıf",
    words: [
        { word: "Libro", meaning: "Kitap", pronunciation: "li-bro", example: "Abre el libro.", exampleTranslation: "Kitabı aç." },
        { word: "Cuaderno", meaning: "Defter", pronunciation: "kua-der-no", example: "Escribe en el cuaderno.", exampleTranslation: "Deftere yaz." },
        { word: "Lápiz", meaning: "Kurşun kalem", pronunciation: "la-pis", example: "Necesito un lápiz.", exampleTranslation: "Bir kaleme ihtiyacım var." },
        { word: "Bolígrafo", meaning: "Tükenmez kalem", pronunciation: "bo-li-gra-fo", example: "¿Tienes un bolígrafo?", exampleTranslation: "Tükenmez kalemin var mı?" },
        { word: "Mochila", meaning: "Sırt çantası", pronunciation: "mo-chi-la", example: "Mi mochila es azul.", exampleTranslation: "Sırt çantam mavi." },
        { word: "Profesor/a", meaning: "Öğretmen", pronunciation: "pro-fe-sor", example: "La profesora es muy buena.", exampleTranslation: "Öğretmen çok iyi." },
        { word: "Estudiante", meaning: "Öğrenci", pronunciation: "es-tu-dian-te", example: "Soy estudiante.", exampleTranslation: "Öğrenciyim." },
        { word: "Examen", meaning: "Sınav", pronunciation: "ek-sa-men", example: "Tengo un examen mañana.", exampleTranslation: "Yarın sınavım var." },
        { word: "Clase", meaning: "Ders/Sınıf", pronunciation: "kla-se", example: "La clase empieza a las nueve.", exampleTranslation: "Ders dokuzda başlıyor." },
        { word: "Deberes", meaning: "Ödev", pronunciation: "de-be-res", example: "Hago los deberes.", exampleTranslation: "Ödev yapıyorum." },
        { word: "Escuela", meaning: "Okul", pronunciation: "es-kue-la", example: "Voy a la escuela.", exampleTranslation: "Okula gidiyorum." },
        { word: "Universidad", meaning: "Üniversite", pronunciation: "u-ni-ver-si-dad", example: "Estudio en la universidad.", exampleTranslation: "Üniversitede okuyorum." },
        { word: "Pizarra", meaning: "Yazı tahtası", pronunciation: "pi-sa-rra", example: "Escribe en la pizarra.", exampleTranslation: "Tahtaya yaz." },
        { word: "Tiza", meaning: "Tebeşir", pronunciation: "ti-sa", example: "Necesito una tiza.", exampleTranslation: "Tebeşire ihtiyacım var." },
        { word: "Borrador", meaning: "Silgi", pronunciation: "bo-rra-dor", example: "Dame el borrador.", exampleTranslation: "Silgiyi ver." },
        { word: "Mesa", meaning: "Sıra/Masa", pronunciation: "me-sa", example: "Siéntate en tu mesa.", exampleTranslation: "Sırana otur." },
        { word: "Silla", meaning: "Sandalye", pronunciation: "si-ya", example: "Trae una silla.", exampleTranslation: "Bir sandalye getir." },
        { word: "Aula", meaning: "Sınıf (oda)", pronunciation: "au-la", example: "El aula es grande.", exampleTranslation: "Sınıf büyük." },
        { word: "Recreo", meaning: "Teneffüs", pronunciation: "re-kre-o", example: "Es hora del recreo.", exampleTranslation: "Teneffüs zamanı." },
        { word: "Nota", meaning: "Not", pronunciation: "no-ta", example: "Tengo buenas notas.", exampleTranslation: "İyi notlarım var." },
        { word: "Aprobar", meaning: "Geçmek", pronunciation: "a-pro-bar", example: "Espero aprobar el examen.", exampleTranslation: "Sınavı geçmeyi umuyorum." },
        { word: "Suspender", meaning: "Kalmak", pronunciation: "sus-pen-der", example: "No quiero suspender.", exampleTranslation: "Kalmak istemiyorum." },
        { word: "Asignatura", meaning: "Ders (konu)", pronunciation: "a-sig-na-tu-ra", example: "Mi asignatura favorita.", exampleTranslation: "En sevdiğim ders." },
        { word: "Matemáticas", meaning: "Matematik", pronunciation: "ma-te-ma-ti-kas", example: "Estudio matemáticas.", exampleTranslation: "Matematik çalışıyorum." },
        { word: "Historia", meaning: "Tarih", pronunciation: "is-to-ria", example: "La historia es interesante.", exampleTranslation: "Tarih ilginç." },
        { word: "Ciencias", meaning: "Fen bilimleri", pronunciation: "sien-sias", example: "Me gustan las ciencias.", exampleTranslation: "Fen bilimlerini seviyorum." },
        { word: "Diccionario", meaning: "Sözlük", pronunciation: "dik-sio-na-rio", example: "Uso el diccionario.", exampleTranslation: "Sözlük kullanıyorum." },
        { word: "Regla", meaning: "Cetvel", pronunciation: "re-gla", example: "¿Tienes una regla?", exampleTranslation: "Cetvel var mı?" },
        { word: "Tijeras", meaning: "Makas", pronunciation: "ti-he-ras", example: "Necesito tijeras.", exampleTranslation: "Makasa ihtiyacım var." },
        { word: "Pegamento", meaning: "Yapıştırıcı", pronunciation: "pe-ga-men-to", example: "Dame el pegamento.", exampleTranslation: "Yapıştırıcıyı ver." },
    ]
};

// ===== ÜNİTE 23: MEYVELER VE SEBZELER =====
const unit23Vocab: UnitVocabulary = {
    unitId: 23, title: "Meyveler ve Sebzeler",
    words: [
        { word: "Manzana", meaning: "Elma", pronunciation: "man-sa-na", example: "Una manzana roja.", exampleTranslation: "Kırmızı bir elma." },
        { word: "Naranja", meaning: "Portakal", pronunciation: "na-ran-ha", example: "Zumo de naranja.", exampleTranslation: "Portakal suyu." },
        { word: "Plátano", meaning: "Muz", pronunciation: "pla-ta-no", example: "Los plátanos son amarillos.", exampleTranslation: "Muzlar sarıdır." },
        { word: "Fresa", meaning: "Çilek", pronunciation: "fre-sa", example: "Me encantan las fresas.", exampleTranslation: "Çileklere bayılırım." },
        { word: "Tomate", meaning: "Domates", pronunciation: "to-ma-te", example: "El tomate es rojo.", exampleTranslation: "Domates kırmızıdır." },
        { word: "Lechuga", meaning: "Marul", pronunciation: "le-chu-ga", example: "Lechuga fresca.", exampleTranslation: "Taze marul." },
        { word: "Cebolla", meaning: "Soğan", pronunciation: "se-bo-ya", example: "Corto una cebolla.", exampleTranslation: "Bir soğan kesiyorum." },
        { word: "Zanahoria", meaning: "Havuç", pronunciation: "sa-na-o-ria", example: "Las zanahorias son naranjas.", exampleTranslation: "Havuçlar turuncudur." },
        { word: "Patata", meaning: "Patates", pronunciation: "pa-ta-ta", example: "Patatas fritas.", exampleTranslation: "Kızarmış patates." },
        { word: "Uva", meaning: "Üzüm", pronunciation: "u-va", example: "Un racimo de uvas.", exampleTranslation: "Bir salkım üzüm." },
        { word: "Limón", meaning: "Limon", pronunciation: "li-mon", example: "El limón es ácido.", exampleTranslation: "Limon ekşidir." },
        { word: "Pera", meaning: "Armut", pronunciation: "pe-ra", example: "Una pera madura.", exampleTranslation: "Olgun bir armut." },
        { word: "Melocotón", meaning: "Şeftali", pronunciation: "me-lo-ko-ton", example: "El melocotón es dulce.", exampleTranslation: "Şeftali tatlıdır." },
        { word: "Sandía", meaning: "Karpuz", pronunciation: "san-di-a", example: "La sandía es grande.", exampleTranslation: "Karpuz büyük." },
        { word: "Melón", meaning: "Kavun", pronunciation: "me-lon", example: "El melón es refrescante.", exampleTranslation: "Kavun serinletici." },
        { word: "Cereza", meaning: "Kiraz", pronunciation: "se-re-sa", example: "Las cerezas son rojas.", exampleTranslation: "Kirazlar kırmızı." },
        { word: "Piña", meaning: "Ananas", pronunciation: "pi-nya", example: "La piña es tropical.", exampleTranslation: "Ananas tropik." },
        { word: "Mango", meaning: "Mango", pronunciation: "man-go", example: "El mango es dulce.", exampleTranslation: "Mango tatlı." },
        { word: "Pepino", meaning: "Salatalık", pronunciation: "pe-pi-no", example: "Ensalada con pepino.", exampleTranslation: "Salatalıklı salata." },
        { word: "Pimiento", meaning: "Biber", pronunciation: "pi-mien-to", example: "Pimiento rojo.", exampleTranslation: "Kırmızı biber." },
        { word: "Ajo", meaning: "Sarımsak", pronunciation: "a-ho", example: "Un diente de ajo.", exampleTranslation: "Bir diş sarımsak." },
        { word: "Espinaca", meaning: "Ispanak", pronunciation: "es-pi-na-ka", example: "Las espinacas son verdes.", exampleTranslation: "Ispanaklar yeşil." },
        { word: "Brócoli", meaning: "Brokoli", pronunciation: "bro-ko-li", example: "El brócoli es sano.", exampleTranslation: "Brokoli sağlıklı." },
        { word: "Calabacín", meaning: "Kabak", pronunciation: "ka-la-ba-sin", example: "Sopa de calabacín.", exampleTranslation: "Kabak çorbası." },
        { word: "Berenjena", meaning: "Patlıcan", pronunciation: "be-ren-he-na", example: "Me gusta la berenjena.", exampleTranslation: "Patlıcan severim." },
        { word: "Judías verdes", meaning: "Yeşil fasulye", pronunciation: "hu-di-as ver-des", example: "Judías verdes con patatas.", exampleTranslation: "Patatesli yeşil fasulye." },
        { word: "Guisante", meaning: "Bezelye", pronunciation: "gi-san-te", example: "Arroz con guisantes.", exampleTranslation: "Bezelyeli pilav." },
        { word: "Coliflor", meaning: "Karnabahar", pronunciation: "ko-li-flor", example: "Coliflor gratinada.", exampleTranslation: "Fırınlanmış karnabahar." },
        { word: "Fruta", meaning: "Meyve", pronunciation: "fru-ta", example: "Me gusta la fruta.", exampleTranslation: "Meyve severim." },
        { word: "Verdura", meaning: "Sebze", pronunciation: "ver-du-ra", example: "Come más verdura.", exampleTranslation: "Daha fazla sebze ye." },
    ]
};

// ===== ÜNİTE 24: ÜLKELER VE MİLLETLER =====
const unit24Vocab: UnitVocabulary = {
    unitId: 24, title: "Ülkeler ve Milletler",
    words: [
        { word: "España", meaning: "İspanya", pronunciation: "es-pa-nya", example: "Vivo en España.", exampleTranslation: "İspanya'da yaşıyorum." },
        { word: "Español/a", meaning: "İspanyol", pronunciation: "es-pa-nyol", example: "Soy español.", exampleTranslation: "İspanyolum." },
        { word: "Turquía", meaning: "Türkiye", pronunciation: "tur-ki-a", example: "Soy de Turquía.", exampleTranslation: "Türkiye'liyim." },
        { word: "Turco/a", meaning: "Türk", pronunciation: "tur-ko", example: "Mi amigo es turco.", exampleTranslation: "Arkadaşım Türk." },
        { word: "Francia", meaning: "Fransa", pronunciation: "fran-sia", example: "París está en Francia.", exampleTranslation: "Paris Fransa'da." },
        { word: "Francés/a", meaning: "Fransız", pronunciation: "fran-ses", example: "El vino francés.", exampleTranslation: "Fransız şarabı." },
        { word: "Alemania", meaning: "Almanya", pronunciation: "a-le-ma-nia", example: "Alemania es grande.", exampleTranslation: "Almanya büyük." },
        { word: "Alemán/a", meaning: "Alman", pronunciation: "a-le-man", example: "Estudio alemán.", exampleTranslation: "Almanca çalışıyorum." },
        { word: "Inglaterra", meaning: "İngiltere", pronunciation: "in-gla-te-rra", example: "Londres está en Inglaterra.", exampleTranslation: "Londra İngiltere'de." },
        { word: "Inglés/a", meaning: "İngiliz", pronunciation: "in-gles", example: "Hablo inglés.", exampleTranslation: "İngilizce konuşurum." },
        { word: "Italia", meaning: "İtalya", pronunciation: "i-ta-lia", example: "Viajo a Italia.", exampleTranslation: "İtalya'ya seyahat ediyorum." },
        { word: "Italiano/a", meaning: "İtalyan", pronunciation: "i-ta-lia-no", example: "La comida italiana.", exampleTranslation: "İtalyan mutfağı." },
        { word: "Portugal", meaning: "Portekiz", pronunciation: "por-tu-gal", example: "Portugal es vecino de España.", exampleTranslation: "Portekiz İspanya'nın komşusu." },
        { word: "Estados Unidos", meaning: "Amerika Birleşik Devletleri", pronunciation: "es-ta-dos u-ni-dos", example: "Quiero visitar Estados Unidos.", exampleTranslation: "ABD'yi ziyaret etmek istiyorum." },
        { word: "Americano/a", meaning: "Amerikalı", pronunciation: "a-me-ri-ka-no", example: "Es americano.", exampleTranslation: "O Amerikalı." },
        { word: "México", meaning: "Meksika", pronunciation: "me-hi-ko", example: "La comida mexicana.", exampleTranslation: "Meksika mutfağı." },
        { word: "Argentina", meaning: "Arjantin", pronunciation: "ar-hen-ti-na", example: "El fútbol argentino.", exampleTranslation: "Arjantin futbolu." },
        { word: "Brasil", meaning: "Brezilya", pronunciation: "bra-sil", example: "Brasil es grande.", exampleTranslation: "Brezilya büyük." },
        { word: "China", meaning: "Çin", pronunciation: "çi-na", example: "China es muy poblada.", exampleTranslation: "Çin çok kalabalık." },
        { word: "Japonés/a", meaning: "Japon", pronunciation: "ha-po-nes", example: "La cultura japonesa.", exampleTranslation: "Japon kültürü." },
        { word: "Idioma", meaning: "Dil", pronunciation: "i-dio-ma", example: "¿Qué idiomas hablas?", exampleTranslation: "Hangi dilleri konuşursun?" },
        { word: "País", meaning: "Ülke", pronunciation: "pa-is", example: "Mi país es bonito.", exampleTranslation: "Ülkem güzel." },
        { word: "Nacionalidad", meaning: "Milliyet", pronunciation: "na-sio-na-li-dad", example: "¿Cuál es tu nacionalidad?", exampleTranslation: "Milliyetin ne?" },
        { word: "Extranjero/a", meaning: "Yabancı", pronunciation: "eks-tran-he-ro", example: "Soy extranjero.", exampleTranslation: "Yabancıyım." },
        { word: "Capital", meaning: "Başkent", pronunciation: "ka-pi-tal", example: "Madrid es la capital de España.", exampleTranslation: "Madrid İspanya'nın başkenti." },
        { word: "Continente", meaning: "Kıta", pronunciation: "kon-ti-nen-te", example: "Europa es un continente.", exampleTranslation: "Avrupa bir kıta." },
        { word: "Europa", meaning: "Avrupa", pronunciation: "eu-ro-pa", example: "Viajo por Europa.", exampleTranslation: "Avrupa'da seyahat ediyorum." },
        { word: "Asia", meaning: "Asya", pronunciation: "a-sia", example: "Japón está en Asia.", exampleTranslation: "Japonya Asya'da." },
        { word: "África", meaning: "Afrika", pronunciation: "a-fri-ka", example: "Marruecos está en África.", exampleTranslation: "Fas Afrika'da." },
        { word: "América", meaning: "Amerika", pronunciation: "a-me-ri-ka", example: "Norte y Sudamérica.", exampleTranslation: "Kuzey ve Güney Amerika." },
    ]
};

// ===== ÜNİTE 25: TEMEL FİİLLER =====
const unit25Vocab: UnitVocabulary = {
    unitId: 25, title: "Temel Fiiller",
    words: [
        { word: "Hablar", meaning: "Konuşmak", pronunciation: "ab-lar", example: "Hablo español.", exampleTranslation: "İspanyolca konuşurum." },
        { word: "Comer", meaning: "Yemek", pronunciation: "ko-mer", example: "Como a las dos.", exampleTranslation: "Saat ikide yerim." },
        { word: "Vivir", meaning: "Yaşamak", pronunciation: "vi-vir", example: "Vivo en Madrid.", exampleTranslation: "Madrid'de yaşıyorum." },
        { word: "Trabajar", meaning: "Çalışmak", pronunciation: "tra-ba-har", example: "Trabajo en una oficina.", exampleTranslation: "Bir ofiste çalışıyorum." },
        { word: "Estudiar", meaning: "Ders çalışmak", pronunciation: "es-tu-diar", example: "Estudio español.", exampleTranslation: "İspanyolca çalışıyorum." },
        { word: "Escribir", meaning: "Yazmak", pronunciation: "es-kri-bir", example: "Escribo un email.", exampleTranslation: "Bir e-posta yazıyorum." },
        { word: "Beber", meaning: "İçmek", pronunciation: "be-ber", example: "Bebo agua.", exampleTranslation: "Su içiyorum." },
        { word: "Aprender", meaning: "Öğrenmek", pronunciation: "a-pren-der", example: "Aprendo mucho.", exampleTranslation: "Çok öğreniyorum." },
        { word: "Entender", meaning: "Anlamak", pronunciation: "en-ten-der", example: "¿Entiendes?", exampleTranslation: "Anlıyor musun?" },
        { word: "Necesitar", meaning: "İhtiyaç duymak", pronunciation: "ne-se-si-tar", example: "Necesito ayuda.", exampleTranslation: "Yardıma ihtiyacım var." },
        { word: "Ser", meaning: "Olmak (kalıcı)", pronunciation: "ser", example: "Soy estudiante.", exampleTranslation: "Öğrenciyim." },
        { word: "Estar", meaning: "Olmak (geçici)", pronunciation: "es-tar", example: "Estoy en casa.", exampleTranslation: "Evdeyim." },
        { word: "Tener", meaning: "Sahip olmak", pronunciation: "te-ner", example: "Tengo un perro.", exampleTranslation: "Bir köpeğim var." },
        { word: "Ir", meaning: "Gitmek", pronunciation: "ir", example: "Voy al cine.", exampleTranslation: "Sinemaya gidiyorum." },
        { word: "Venir", meaning: "Gelmek", pronunciation: "ve-nir", example: "¿Vienes conmigo?", exampleTranslation: "Benimle gelir misin?" },
        { word: "Hacer", meaning: "Yapmak", pronunciation: "a-ser", example: "¿Qué haces?", exampleTranslation: "Ne yapıyorsun?" },
        { word: "Poder", meaning: "Yapabilmek", pronunciation: "po-der", example: "Puedo ayudar.", exampleTranslation: "Yardım edebilirim." },
        { word: "Querer", meaning: "İstemek", pronunciation: "ke-rer", example: "Quiero café.", exampleTranslation: "Kahve istiyorum." },
        { word: "Saber", meaning: "Bilmek", pronunciation: "sa-ber", example: "No sé.", exampleTranslation: "Bilmiyorum." },
        { word: "Decir", meaning: "Söylemek", pronunciation: "de-sir", example: "¿Qué dices?", exampleTranslation: "Ne diyorsun?" },
        { word: "Ver", meaning: "Görmek", pronunciation: "ver", example: "Veo una película.", exampleTranslation: "Film izliyorum." },
        { word: "Dar", meaning: "Vermek", pronunciation: "dar", example: "Dame el libro.", exampleTranslation: "Kitabı ver." },
        { word: "Pensar", meaning: "Düşünmek", pronunciation: "pen-sar", example: "Pienso en ti.", exampleTranslation: "Seni düşünüyorum." },
        { word: "Creer", meaning: "Sanmak/İnanmak", pronunciation: "kre-er", example: "Creo que sí.", exampleTranslation: "Evet sanırım." },
        { word: "Llamar", meaning: "Aramak", pronunciation: "ya-mar", example: "Te llamo luego.", exampleTranslation: "Seni sonra ararım." },
        { word: "Esperar", meaning: "Beklemek/Ummak", pronunciation: "es-pe-rar", example: "Espera un momento.", exampleTranslation: "Bir dakika bekle." },
        { word: "Encontrar", meaning: "Bulmak", pronunciation: "en-kon-trar", example: "No encuentro mis llaves.", exampleTranslation: "Anahtarlarımı bulamıyorum." },
        { word: "Llevar", meaning: "Taşımak/Götürmek", pronunciation: "ye-var", example: "Llevo el paraguas.", exampleTranslation: "Şemsiyeyi taşıyorum." },
        { word: "Dejar", meaning: "Bırakmak", pronunciation: "de-har", example: "Deja el libro aquí.", exampleTranslation: "Kitabı buraya bırak." },
        { word: "Gustar", meaning: "Hoşlanmak", pronunciation: "gus-tar", example: "Me gusta el café.", exampleTranslation: "Kahveyi severim." },
    ]
};

// ===== ÜNİTE 26: İŞARET SIFATLARI =====
const unit26Vocab: UnitVocabulary = {
    unitId: 26, title: "İşaret Sıfatları ve Zamirler",
    words: [
        { word: "Este", meaning: "Bu (eril)", pronunciation: "es-te", example: "Este libro es interesante.", exampleTranslation: "Bu kitap ilginç." },
        { word: "Esta", meaning: "Bu (dişil)", pronunciation: "es-ta", example: "Esta casa es grande.", exampleTranslation: "Bu ev büyük." },
        { word: "Estos", meaning: "Bunlar (eril)", pronunciation: "es-tos", example: "Estos zapatos son caros.", exampleTranslation: "Bu ayakkabılar pahalı." },
        { word: "Estas", meaning: "Bunlar (dişil)", pronunciation: "es-tas", example: "Estas flores son bonitas.", exampleTranslation: "Bu çiçekler güzel." },
        { word: "Ese", meaning: "Şu (eril)", pronunciation: "e-se", example: "Ese coche es nuevo.", exampleTranslation: "Şu araba yeni." },
        { word: "Esa", meaning: "Şu (dişil)", pronunciation: "e-sa", example: "Esa tienda está cerrada.", exampleTranslation: "Şu mağaza kapalı." },
        { word: "Esos", meaning: "Şunlar (eril)", pronunciation: "e-sos", example: "Esos niños juegan.", exampleTranslation: "Şu çocuklar oynuyor." },
        { word: "Esas", meaning: "Şunlar (dişil)", pronunciation: "e-sas", example: "Esas mesas son viejas.", exampleTranslation: "Şu masalar eski." },
        { word: "Aquel", meaning: "O (uzak, eril)", pronunciation: "a-kel", example: "Aquel edificio es alto.", exampleTranslation: "O bina yüksek." },
        { word: "Aquella", meaning: "O (uzak, dişil)", pronunciation: "a-ke-ya", example: "Aquella montaña es bonita.", exampleTranslation: "O dağ güzel." },
        { word: "Aquellos", meaning: "Onlar (uzak, eril)", pronunciation: "a-ke-yos", example: "Aquellos árboles son grandes.", exampleTranslation: "O ağaçlar büyük." },
        { word: "Aquellas", meaning: "Onlar (uzak, dişil)", pronunciation: "a-ke-yas", example: "Aquellas casas son antiguas.", exampleTranslation: "O evler eski." },
        { word: "Aquí", meaning: "Burada", pronunciation: "a-ki", example: "Estoy aquí.", exampleTranslation: "Buradayım." },
        { word: "Ahí", meaning: "Şurada", pronunciation: "a-i", example: "El gato está ahí.", exampleTranslation: "Kedi şurada." },
        { word: "Allí", meaning: "Orada", pronunciation: "a-yi", example: "Mi hermano vive allí.", exampleTranslation: "Kardeşim orada yaşıyor." },
        { word: "Cerca", meaning: "Yakın", pronunciation: "ser-ka", example: "El banco está cerca.", exampleTranslation: "Banka yakın." },
        { word: "Lejos", meaning: "Uzak", pronunciation: "le-hos", example: "La playa está lejos.", exampleTranslation: "Plaj uzak." },
        { word: "Mismo", meaning: "Aynı", pronunciation: "mis-mo", example: "El mismo día.", exampleTranslation: "Aynı gün." },
        { word: "Otro", meaning: "Diğer/Başka", pronunciation: "ot-ro", example: "Otro libro, por favor.", exampleTranslation: "Başka bir kitap lütfen." },
        { word: "Cuál", meaning: "Hangisi", pronunciation: "kual", example: "¿Cuál quieres?", exampleTranslation: "Hangisini istiyorsun?" },
    ]
};

// ===== ÜNİTE 27: DEL KULLANIMI =====
const unit27Vocab: UnitVocabulary = {
    unitId: 27, title: "Sahiplik ve Yer İfadeleri",
    words: [
        { word: "Del", meaning: "...nın/...nin", pronunciation: "del", example: "El libro del profesor.", exampleTranslation: "Öğretmenin kitabı." },
        { word: "De la", meaning: "...nın/...nin (dişil)", pronunciation: "de la", example: "La puerta de la casa.", exampleTranslation: "Evin kapısı." },
        { word: "De los", meaning: "...ların/...lerin", pronunciation: "de los", example: "Los juguetes de los niños.", exampleTranslation: "Çocukların oyuncakları." },
        { word: "De las", meaning: "...ların/...lerin (dişil)", pronunciation: "de las", example: "Las fotos de las vacaciones.", exampleTranslation: "Tatilin fotoğrafları." },
        { word: "Al", meaning: "...ya/...ye", pronunciation: "al", example: "Voy al parque.", exampleTranslation: "Parka gidiyorum." },
        { word: "Centro", meaning: "Merkez", pronunciation: "sen-tro", example: "El centro de la ciudad.", exampleTranslation: "Şehrin merkezi." },
        { word: "Final", meaning: "Son", pronunciation: "fi-nal", example: "El final del día.", exampleTranslation: "Günün sonu." },
        { word: "Principio", meaning: "Başlangıç", pronunciation: "prin-si-pio", example: "Al principio del año.", exampleTranslation: "Yılın başında." },
        { word: "Lado", meaning: "Yan/Taraf", pronunciation: "la-do", example: "Al lado del banco.", exampleTranslation: "Bankanın yanında." },
        { word: "Frente", meaning: "Ön/Karşı", pronunciation: "fren-te", example: "Enfrente del museo.", exampleTranslation: "Müzenin karşısında." },
        { word: "Detrás", meaning: "Arka", pronunciation: "de-tras", example: "Detrás del edificio.", exampleTranslation: "Binanın arkasında." },
        { word: "Dentro", meaning: "İçinde", pronunciation: "den-tro", example: "Dentro de la caja.", exampleTranslation: "Kutunun içinde." },
        { word: "Fuera", meaning: "Dışında", pronunciation: "fue-ra", example: "Fuera de la casa.", exampleTranslation: "Evin dışında." },
        { word: "Encima", meaning: "Üstünde", pronunciation: "en-si-ma", example: "Encima de la mesa.", exampleTranslation: "Masanın üstünde." },
        { word: "Debajo", meaning: "Altında", pronunciation: "de-ba-ho", example: "Debajo de la cama.", exampleTranslation: "Yatağın altında." },
        { word: "Entre", meaning: "Arasında", pronunciation: "en-tre", example: "Entre los dos edificios.", exampleTranslation: "İki binanın arasında." },
        { word: "Alrededor", meaning: "Etrafında", pronunciation: "al-re-de-dor", example: "Alrededor del parque.", exampleTranslation: "Parkın etrafında." },
        { word: "Esquina", meaning: "Köşe", pronunciation: "es-ki-na", example: "En la esquina de la calle.", exampleTranslation: "Sokağın köşesinde." },
        { word: "Parte", meaning: "Kısım/Bölüm", pronunciation: "par-te", example: "La mejor parte del día.", exampleTranslation: "Günün en iyi kısmı." },
        { word: "Todo", meaning: "Tüm/Hepsi", pronunciation: "to-do", example: "Todo el mundo.", exampleTranslation: "Tüm dünya/Herkes." },
    ]
};

// ===== ÜNİTE 28: SIRA SAYILARI =====
const unit28Vocab: UnitVocabulary = {
    unitId: 28, title: "Sıra Sayıları",
    words: [
        { word: "Primero/Primera", meaning: "Birinci", pronunciation: "pri-me-ro", example: "El primer día de clase.", exampleTranslation: "Okulun ilk günü." },
        { word: "Segundo/Segunda", meaning: "İkinci", pronunciation: "se-gun-do", example: "La segunda vez.", exampleTranslation: "İkinci kez." },
        { word: "Tercero/Tercera", meaning: "Üçüncü", pronunciation: "ter-se-ro", example: "El tercer piso.", exampleTranslation: "Üçüncü kat." },
        { word: "Cuarto/Cuarta", meaning: "Dördüncü", pronunciation: "kuar-to", example: "La cuarta fila.", exampleTranslation: "Dördüncü sıra." },
        { word: "Quinto/Quinta", meaning: "Beşinci", pronunciation: "kin-to", example: "El quinto mes.", exampleTranslation: "Beşinci ay." },
        { word: "Sexto/Sexta", meaning: "Altıncı", pronunciation: "seks-to", example: "La sexta hora.", exampleTranslation: "Altıncı saat." },
        { word: "Séptimo/Séptima", meaning: "Yedinci", pronunciation: "sep-ti-mo", example: "El séptimo día.", exampleTranslation: "Yedinci gün." },
        { word: "Octavo/Octava", meaning: "Sekizinci", pronunciation: "ok-ta-vo", example: "La octava semana.", exampleTranslation: "Sekizinci hafta." },
        { word: "Noveno/Novena", meaning: "Dokuzuncu", pronunciation: "no-ve-no", example: "El noveno capítulo.", exampleTranslation: "Dokuzuncu bölüm." },
        { word: "Décimo/Décima", meaning: "Onuncu", pronunciation: "de-si-mo", example: "El décimo aniversario.", exampleTranslation: "Onuncu yıldönümü." },
        { word: "Último/Última", meaning: "Son/Sonuncu", pronunciation: "ul-ti-mo", example: "La última oportunidad.", exampleTranslation: "Son fırsat." },
        { word: "Próximo/Próxima", meaning: "Sonraki", pronunciation: "prok-si-mo", example: "La próxima semana.", exampleTranslation: "Gelecek hafta." },
        { word: "Anterior", meaning: "Önceki", pronunciation: "an-te-rior", example: "El día anterior.", exampleTranslation: "Önceki gün." },
        { word: "Siguiente", meaning: "Sonraki", pronunciation: "si-gien-te", example: "El siguiente paso.", exampleTranslation: "Sonraki adım." },
        { word: "Fila", meaning: "Sıra", pronunciation: "fi-la", example: "En la primera fila.", exampleTranslation: "Birinci sırada." },
        { word: "Puesto", meaning: "Sıra/Yer", pronunciation: "pues-to", example: "El primer puesto.", exampleTranslation: "Birinci sıra." },
        { word: "Lugar", meaning: "Yer", pronunciation: "lu-gar", example: "En primer lugar.", exampleTranslation: "İlk olarak." },
        { word: "Vez", meaning: "Kez/Defa", pronunciation: "ves", example: "Por primera vez.", exampleTranslation: "İlk kez." },
        { word: "Orden", meaning: "Sıra/Düzen", pronunciation: "or-den", example: "En orden.", exampleTranslation: "Sırayla." },
        { word: "Turno", meaning: "Sıra", pronunciation: "tur-no", example: "Es mi turno.", exampleTranslation: "Benim sıram." },
    ]
};

// ===== ÜNİTE 29: SORU KELİMELERİ =====
const unit29Vocab: UnitVocabulary = {
    unitId: 29, title: "Soru Kelimeleri ve İfadeleri",
    words: [
        { word: "¿Qué?", meaning: "Ne?", pronunciation: "ke", example: "¿Qué quieres?", exampleTranslation: "Ne istiyorsun?" },
        { word: "¿Quién?", meaning: "Kim?", pronunciation: "kien", example: "¿Quién es él?", exampleTranslation: "O kim?" },
        { word: "¿Quiénes?", meaning: "Kimler?", pronunciation: "kie-nes", example: "¿Quiénes vienen?", exampleTranslation: "Kimler geliyor?" },
        { word: "¿Cuándo?", meaning: "Ne zaman?", pronunciation: "kuan-do", example: "¿Cuándo llegas?", exampleTranslation: "Ne zaman geliyorsun?" },
        { word: "¿Dónde?", meaning: "Nerede?", pronunciation: "don-de", example: "¿Dónde vives?", exampleTranslation: "Nerede yaşıyorsun?" },
        { word: "¿Adónde?", meaning: "Nereye?", pronunciation: "a-don-de", example: "¿Adónde vas?", exampleTranslation: "Nereye gidiyorsun?" },
        { word: "¿De dónde?", meaning: "Nereden?", pronunciation: "de don-de", example: "¿De dónde eres?", exampleTranslation: "Nerelisin?" },
        { word: "¿Cómo?", meaning: "Nasıl?", pronunciation: "ko-mo", example: "¿Cómo estás?", exampleTranslation: "Nasılsın?" },
        { word: "¿Por qué?", meaning: "Neden?", pronunciation: "por ke", example: "¿Por qué lloras?", exampleTranslation: "Neden ağlıyorsun?" },
        { word: "Porque", meaning: "Çünkü", pronunciation: "por-ke", example: "Porque tengo hambre.", exampleTranslation: "Çünkü açım." },
        { word: "¿Cuánto?", meaning: "Ne kadar?", pronunciation: "kuan-to", example: "¿Cuánto cuesta?", exampleTranslation: "Ne kadar?" },
        { word: "¿Cuántos/as?", meaning: "Kaç tane?", pronunciation: "kuan-tos", example: "¿Cuántos años tienes?", exampleTranslation: "Kaç yaşındasın?" },
        { word: "¿Cuál?", meaning: "Hangisi?", pronunciation: "kual", example: "¿Cuál prefieres?", exampleTranslation: "Hangisini tercih edersin?" },
        { word: "¿Cuáles?", meaning: "Hangileri?", pronunciation: "kua-les", example: "¿Cuáles quieres?", exampleTranslation: "Hangilerini istiyorsun?" },
        { word: "¿Para qué?", meaning: "Ne için?", pronunciation: "pa-ra ke", example: "¿Para qué es esto?", exampleTranslation: "Bu ne için?" },
        { word: "Sí", meaning: "Evet", pronunciation: "si", example: "Sí, quiero.", exampleTranslation: "Evet, istiyorum." },
        { word: "No", meaning: "Hayır", pronunciation: "no", example: "No, gracias.", exampleTranslation: "Hayır, teşekkürler." },
        { word: "Quizás", meaning: "Belki", pronunciation: "ki-sas", example: "Quizás mañana.", exampleTranslation: "Belki yarın." },
        { word: "Claro", meaning: "Tabii", pronunciation: "kla-ro", example: "¡Claro que sí!", exampleTranslation: "Tabii ki evet!" },
        { word: "Respuesta", meaning: "Cevap", pronunciation: "res-pues-ta", example: "No tengo respuesta.", exampleTranslation: "Cevabım yok." },
    ]
};

// ===== ÜNİTE 30: PODER FİİLİ VE YETENEK =====
const unit30Vocab: UnitVocabulary = {
    unitId: 30, title: "Poder Fiili ve Yetenek İfadeleri",
    words: [
        { word: "Poder", meaning: "Yapabilmek", pronunciation: "po-der", example: "Puedo hablar español.", exampleTranslation: "İspanyolca konuşabiliyorum." },
        { word: "Puedo", meaning: "Yapabilirim", pronunciation: "pue-do", example: "Puedo ayudarte.", exampleTranslation: "Sana yardım edebilirim." },
        { word: "Puedes", meaning: "Yapabilirsin", pronunciation: "pue-des", example: "¿Puedes venir?", exampleTranslation: "Gelebilir misin?" },
        { word: "Puede", meaning: "Yapabilir", pronunciation: "pue-de", example: "Él puede nadar.", exampleTranslation: "O yüzebilir." },
        { word: "Podemos", meaning: "Yapabiliriz", pronunciation: "po-de-mos", example: "Podemos ir juntos.", exampleTranslation: "Birlikte gidebiliriz." },
        { word: "Pueden", meaning: "Yapabilirler", pronunciation: "pue-den", example: "Ellos pueden jugar.", exampleTranslation: "Onlar oynayabilir." },
        { word: "Capaz", meaning: "Yetenekli/Muktedir", pronunciation: "ka-pas", example: "Soy capaz de hacerlo.", exampleTranslation: "Onu yapabilecek kapasitedeyim." },
        { word: "Imposible", meaning: "İmkansız", pronunciation: "im-po-si-ble", example: "Es imposible.", exampleTranslation: "İmkansız." },
        { word: "Posible", meaning: "Mümkün", pronunciation: "po-si-ble", example: "Es posible.", exampleTranslation: "Mümkün." },
        { word: "Fácil", meaning: "Kolay", pronunciation: "fa-sil", example: "Es muy fácil.", exampleTranslation: "Çok kolay." },
        { word: "Difícil", meaning: "Zor", pronunciation: "di-fi-sil", example: "Es difícil.", exampleTranslation: "Zor." },
        { word: "Permiso", meaning: "İzin", pronunciation: "per-mi-so", example: "¿Me das permiso?", exampleTranslation: "Bana izin verir misin?" },
        { word: "Permitir", meaning: "İzin vermek", pronunciation: "per-mi-tir", example: "No está permitido.", exampleTranslation: "İzin verilmiyor." },
        { word: "Prohibido", meaning: "Yasak", pronunciation: "pro-i-bi-do", example: "Está prohibido fumar.", exampleTranslation: "Sigara içmek yasak." },
        { word: "Intentar", meaning: "Denemek", pronunciation: "in-ten-tar", example: "Voy a intentar.", exampleTranslation: "Deneyeceğim." },
        { word: "Lograr", meaning: "Başarmak", pronunciation: "lo-grar", example: "Puedo lograrlo.", exampleTranslation: "Başarabilirim." },
        { word: "Conseguir", meaning: "Elde etmek", pronunciation: "kon-se-gir", example: "¿Puedes conseguirlo?", exampleTranslation: "Onu elde edebilir misin?" },
        { word: "Ayudar", meaning: "Yardım etmek", pronunciation: "a-yu-dar", example: "¿Puedo ayudar?", exampleTranslation: "Yardım edebilir miyim?" },
        { word: "Nadar", meaning: "Yüzmek", pronunciation: "na-dar", example: "No puedo nadar.", exampleTranslation: "Yüzemiyorum." },
        { word: "Conducir", meaning: "Araba kullanmak", pronunciation: "kon-du-sir", example: "¿Puedes conducir?", exampleTranslation: "Araba kullanabilir misin?" },
    ]
};

// Ünite ID'sine göre vocabulary getir
import { getA2VocabularyForUnit } from './vocabulary-a2';
import { getB1VocabularyForUnit } from './vocabulary-b1';
import { getB2VocabularyForUnit } from './vocabulary-b2';
import { getEnglishA1VocabularyForUnit } from './vocabulary-en-a1';
import { getEnglishA2VocabularyForUnit } from './vocabulary-en-a2';
import { getFrenchA1VocabularyForUnit } from './vocabulary-fr-a1';
import { getFrenchA2VocabularyForUnit } from './vocabulary-fr-a2';

export function getVocabularyForUnit(unitId: number): UnitVocabulary {
    // === İNGİLİZCE ÜNİTELER (ID 101-220) ===
    // İngilizce A1 (101-130)
    if (unitId >= 101 && unitId <= 130) {
        const enVocab = getEnglishA1VocabularyForUnit(unitId);
        return {
            unitId: enVocab.unitId,
            title: enVocab.title,
            words: enVocab.words.map(v => ({
                word: v.word,
                meaning: v.meaning,
                pronunciation: v.pronunciation,
                example: v.example,
                exampleTranslation: v.exampleTranslation
            }))
        };
    }

    // İngilizce A2 (131-160)
    if (unitId >= 131 && unitId <= 160) {
        const enVocab = getEnglishA2VocabularyForUnit(unitId);
        return {
            unitId: enVocab.unitId,
            title: enVocab.title,
            words: enVocab.words.map(v => ({
                word: v.word,
                meaning: v.meaning,
                pronunciation: v.pronunciation,
                example: v.example,
                exampleTranslation: v.exampleTranslation
            }))
        };
    }

    // Fransızca A1 (301-330)
    if (unitId >= 301 && unitId <= 330) {
        const frVocab = getFrenchA1VocabularyForUnit(unitId);
        if (frVocab) return frVocab;
        // Fallback or empty if null
    }

    // Fransızca A2 (331-360)
    if (unitId >= 331 && unitId <= 360) {
        const frA2Vocab = getFrenchA2VocabularyForUnit(unitId);
        if (frA2Vocab) return frA2Vocab;
    }

    // === İSPANYOLCA ÜNİTELER (ID 1-100) ===
    // B2 üniteleri (91-110) - curriculum.ts ile senkron
    if (unitId >= 91 && unitId <= 110) {
        const b2Vocab = getB2VocabularyForUnit(unitId);
        return {
            unitId: unitId,
            title: `Ünite ${unitId}`,
            words: b2Vocab.map(v => ({
                word: v.spanish,
                meaning: v.turkish,
                pronunciation: v.pronunciation,
                example: v.example,
                exampleTranslation: v.exampleTranslation
            }))
        };
    }

    // B1 üniteleri (61-90) - curriculum.ts ile senkron
    if (unitId >= 61 && unitId <= 90) {
        const b1Vocab = getB1VocabularyForUnit(unitId);
        return {
            unitId: b1Vocab[0] ? unitId : unitId,
            title: `Ünite ${unitId}`,
            words: b1Vocab.map(v => ({
                word: v.word,
                meaning: v.meaning,
                pronunciation: v.pronunciation,
                example: v.example,
                exampleTranslation: v.exampleTranslation
            }))
        };
    }

    // A2 üniteleri (31-60) - curriculum.ts ile senkron
    if (unitId >= 31 && unitId <= 60) {
        return getA2VocabularyForUnit(unitId);
    }

    // A1 üniteleri (1-30)
    const vocabs: { [key: number]: UnitVocabulary } = {
        1: unit1Vocab, 2: unit2Vocab, 3: unit3Vocab, 4: unit4Vocab, 5: unit5Vocab,
        6: unit6Vocab, 7: unit7Vocab, 8: unit8Vocab, 9: unit9Vocab, 10: unit10Vocab,
        11: unit11Vocab, 12: unit12Vocab, 13: unit13Vocab, 14: unit14Vocab, 15: unit15Vocab,
        16: unit16Vocab, 17: unit17Vocab, 18: unit18Vocab, 19: unit19Vocab, 20: unit20Vocab,
        21: unit21Vocab, 22: unit22Vocab, 23: unit23Vocab, 24: unit24Vocab, 25: unit25Vocab,
        26: unit26Vocab, 27: unit27Vocab, 28: unit28Vocab, 29: unit29Vocab, 30: unit30Vocab
    };
    return vocabs[unitId] || unit1Vocab;
}

