/**
 * LinguaFlow Okuma Veritabanı - İspanyolca A1
 * Daha uzun metinler ve 5 soru/ünite
 */

import { getA2ReadingForUnit } from './readings-a2';
import { getB1ReadingForUnit } from './readings-b1';
import { getB2ReadingForUnit } from './readings-b2';
import { getEnglishA2ReadingForUnit } from './readings-en-a2';
import { getReadingForUnit as getFrenchA1ReadingForUnit } from './readings-fr-a1';

export interface ReadingQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface UnitReading {
    unitId: number;
    title: string;
    language: string;
    level: string;
    story: { text: string; translation: string; };
    vocabulary: { word: string; meaning: string }[];
    questions: ReadingQuestion[];
}

// ===== ÜNİTE 1: SELAMLAŞMA =====
const unit1Reading: UnitReading = {
    unitId: 1, title: "María'nın İlk Günü", language: "İspanyolca", level: "A1",
    story: {
        text: "¡Hola! Me llamo María y soy de España. Tengo veinte años. Hoy es mi primer día en la universidad. Buenos días, profesora. ¿Cómo está usted? Muy bien, gracias. ¿Y tú? Yo estoy muy bien también. Mucho gusto, soy tu nuevo compañero de clase. Me llamo Carlos. Encantada, Carlos. Después de clase, María dice: Adiós, hasta mañana. ¡Buenas noches!",
        translation: "Merhaba! Benim adım María ve İspanyalıyım. Yirmi yaşındayım. Bugün üniversitede ilk günüm. Günaydın profesör. Nasılsınız? Çok iyiyim, teşekkürler. Ya sen? Ben de çok iyiyim. Memnun oldum, ben yeni sınıf arkadaşınım. Adım Carlos. Memnun oldum Carlos. Dersten sonra María diyor: Hoşça kal, yarın görüşürüz. İyi geceler!"
    },
    vocabulary: [
        { word: "Hola", meaning: "Merhaba" }, { word: "Buenos días", meaning: "Günaydın" },
        { word: "Gracias", meaning: "Teşekkürler" }, { word: "Mucho gusto", meaning: "Memnun oldum" },
        { word: "Adiós", meaning: "Hoşça kal" }
    ],
    questions: [
        { id: 1, question: "María kaç yaşında?", options: ["Dieciocho", "Veinte", "Veintidós"], correctAnswer: "Veinte" },
        { id: 2, question: "María nereli?", options: ["México", "España", "Argentina"], correctAnswer: "España" },
        { id: 3, question: "Bugün hangi gün?", options: ["El último día", "El primer día", "Vacaciones"], correctAnswer: "El primer día" },
        { id: 4, question: "Yeni arkadaşın adı ne?", options: ["Pedro", "Carlos", "Juan"], correctAnswer: "Carlos" },
        { id: 5, question: "María sonunda ne diyor?", options: ["Buenos días", "Buenas noches", "Hola"], correctAnswer: "Buenas noches" },
        { id: 6, question: "María nerede okuyor?", options: ["Instituto", "Universidad", "Escuela primaria"], correctAnswer: "Universidad" },
        { id: 7, question: "Profesöre nasılsınız diye kim soruyor?", options: ["Carlos", "María", "La profesora"], correctAnswer: "María" },
        { id: 8, question: "Carlos kim?", options: ["Profesor", "Nuevo compañero de clase", "Padre"], correctAnswer: "Nuevo compañero de clase" },
        { id: 9, question: "María'nın milliyeti ne?", options: ["Mexicana", "Española", "Argentina"], correctAnswer: "Española" },
        { id: 10, question: "María ne zaman vedalaşıyor?", options: ["Por la mañana", "Después de clase", "Antes de clase"], correctAnswer: "Después de clase" }
    ]
};

// ===== ÜNİTE 2: SAYILAR =====
const unit2Reading: UnitReading = {
    unitId: 2, title: "Büyük Alışveriş", language: "İspanyolca", level: "A1",
    story: {
        text: "Hoy voy al mercado con mi madre. Compramos muchas cosas. Queremos cinco manzanas rojas, tres naranjas, dos plátanos y diez huevos. El vendedor dice: Son quince euros en total. Mi madre pregunta: ¿Cuánto cuestan las uvas? Cuestan cuatro euros el kilo. Entonces queremos un kilo de uvas también. Ahora el total es diecinueve euros. Gracias, hasta luego.",
        translation: "Bugün annemle markete gidiyorum. Çok şey alıyoruz. Beş kırmızı elma, üç portakal, iki muz ve on yumurta istiyoruz. Satıcı diyor: Toplamda on beş euro. Annem soruyor: Üzümler ne kadar? Kilosu dört euro. O zaman bir kilo üzüm de istiyoruz. Şimdi toplam on dokuz euro. Teşekkürler, görüşürüz."
    },
    vocabulary: [
        { word: "Cinco", meaning: "5" }, { word: "Diez", meaning: "10" }, { word: "Quince", meaning: "15" },
        { word: "Cuatro", meaning: "4" }, { word: "Diecinueve", meaning: "19" }
    ],
    questions: [
        { id: 1, question: "Kaç elma alıyorlar?", options: ["Tres", "Cinco", "Diez"], correctAnswer: "Cinco" },
        { id: 2, question: "Kaç yumurta alıyorlar?", options: ["Cinco", "Diez", "Quince"], correctAnswer: "Diez" },
        { id: 3, question: "Üzümler kilosu kaç euro?", options: ["Tres", "Cuatro", "Cinco"], correctAnswer: "Cuatro" },
        { id: 4, question: "İlk toplam kaç euroydu?", options: ["Quince", "Diecinueve", "Veinte"], correctAnswer: "Quince" },
        { id: 5, question: "Son toplam kaç euro?", options: ["Quince", "Diecinueve", "Veinticinco"], correctAnswer: "Diecinueve" },
        { id: 6, question: "Kiminle gidiyor?", options: ["Con mi padre", "Con mi madre", "Con mi hermano"], correctAnswer: "Con mi madre" },
        { id: 7, question: "Kaç portakal alıyorlar?", options: ["Dos", "Tres", "Cinco"], correctAnswer: "Tres" },
        { id: 8, question: "Kaç muz alıyorlar?", options: ["Dos", "Tres", "Cinco"], correctAnswer: "Dos" },
        { id: 9, question: "Elmalar hangi renk?", options: ["Verdes", "Rojas", "Amarillas"], correctAnswer: "Rojas" },
        { id: 10, question: "Kaç kilo üzüm alıyorlar?", options: ["Medio kilo", "Un kilo", "Dos kilos"], correctAnswer: "Un kilo" }
    ]
};

// ===== ÜNİTE 3: AİLE =====
const unit3Reading: UnitReading = {
    unitId: 3, title: "Aile Fotoğrafı", language: "İspanyolca", level: "A1",
    story: {
        text: "Mira, esta es mi familia. Mi padre se llama Antonio y tiene cincuenta años. Es médico. Mi madre se llama Rosa y tiene cuarenta y ocho años. Es profesora. Tengo un hermano mayor, Pablo, que tiene veinticinco años y está casado. Su esposa se llama Lucía. También tengo una hermana menor, Elena, que tiene quince años. Mis abuelos viven con nosotros. Mi abuelo se llama José y mi abuela Carmen. Somos una familia muy unida.",
        translation: "Bak, bu benim ailem. Babamın adı Antonio ve elli yaşında. Doktor. Annemin adı Rosa ve kırk sekiz yaşında. Öğretmen. Bir ağabeyim var, Pablo, yirmi beş yaşında ve evli. Karısının adı Lucía. Ayrıca bir kız kardeşim var, Elena, on beş yaşında. Büyükanne ve büyükbabam bizimle yaşıyor. Dedemin adı José ve ninemin adı Carmen. Çok bağlı bir aileyiz."
    },
    vocabulary: [
        { word: "Padre", meaning: "Baba" }, { word: "Madre", meaning: "Anne" },
        { word: "Hermano", meaning: "Kardeş" }, { word: "Abuelo", meaning: "Dede" },
        { word: "Familia", meaning: "Aile" }
    ],
    questions: [
        { id: 1, question: "Baba ne iş yapıyor?", options: ["Profesor", "Médico", "Ingeniero"], correctAnswer: "Médico" },
        { id: 2, question: "Anne kaç yaşında?", options: ["Cuarenta y cinco", "Cuarenta y ocho", "Cincuenta"], correctAnswer: "Cuarenta y ocho" },
        { id: 3, question: "Pablo evli mi?", options: ["Sí", "No", "No se menciona"], correctAnswer: "Sí" },
        { id: 4, question: "Elena kaç yaşında?", options: ["Quince", "Dieciocho", "Veinticinco"], correctAnswer: "Quince" },
        { id: 5, question: "Büyükanne ve büyükbaba nerede yaşıyor?", options: ["En otra ciudad", "Con nosotros", "En el extranjero"], correctAnswer: "Con nosotros" },
        { id: 6, question: "Babanın adı ne?", options: ["José", "Antonio", "Pablo"], correctAnswer: "Antonio" },
        { id: 7, question: "Pablo kaç yaşında?", options: ["Veinte", "Veinticinco", "Treinta"], correctAnswer: "Veinticinco" },
        { id: 8, question: "Pablo'nun eşinin adı ne?", options: ["Rosa", "Carmen", "Lucía"], correctAnswer: "Lucía" },
        { id: 9, question: "Dedenin adı ne?", options: ["Antonio", "José", "Pablo"], correctAnswer: "José" },
        { id: 10, question: "Anne ne iş yapıyor?", options: ["Médica", "Profesora", "Ingeniera"], correctAnswer: "Profesora" }
    ]
};

// ===== ÜNİTE 4: RENKLER =====
const unit4Reading: UnitReading = {
    unitId: 4, title: "Güzel Bahçe", language: "İspanyolca", level: "A1",
    story: {
        text: "Tengo un jardín muy bonito detrás de mi casa. Hay muchas flores de diferentes colores. Las rosas son rojas y huelen muy bien. Los tulipanes son amarillos y naranjas. Las violetas son moradas y pequeñas. El césped es verde y muy suave. El cielo hoy está azul con nubes blancas. Mi perro Toby es marrón y negro. Le gusta correr por el jardín. Hay una cerca de madera gris alrededor del jardín.",
        translation: "Evimin arkasında çok güzel bir bahçem var. Farklı renklerde çok çiçek var. Güller kırmızı ve çok güzel kokuyorlar. Laleler sarı ve turuncu. Menekşeler mor ve küçük. Çimen yeşil ve çok yumuşak. Bugün gökyüzü mavi ve beyaz bulutlar var. Köpeğim Toby kahverengi ve siyah. Bahçede koşmayı seviyor. Bahçenin etrafında gri ahşap bir çit var."
    },
    vocabulary: [
        { word: "Rojo", meaning: "Kırmızı" }, { word: "Amarillo", meaning: "Sarı" },
        { word: "Verde", meaning: "Yeşil" }, { word: "Azul", meaning: "Mavi" },
        { word: "Blanco", meaning: "Beyaz" }
    ],
    questions: [
        { id: 1, question: "Güller hangi renk?", options: ["Amarillas", "Rojas", "Moradas"], correctAnswer: "Rojas" },
        { id: 2, question: "Laleler hangi renkler?", options: ["Rojas y blancas", "Amarillos y naranjas", "Azules y verdes"], correctAnswer: "Amarillos y naranjas" },
        { id: 3, question: "Köpeğin adı ne?", options: ["Max", "Toby", "Rex"], correctAnswer: "Toby" },
        { id: 4, question: "Köpek hangi renkler?", options: ["Blanco", "Marrón y negro", "Gris"], correctAnswer: "Marrón y negro" },
        { id: 5, question: "Çit hangi renk?", options: ["Blanca", "Marrón", "Gris"], correctAnswer: "Gris" },
        { id: 6, question: "Bahçe evin neresinde?", options: ["Delante", "Detrás", "Al lado"], correctAnswer: "Detrás" },
        { id: 7, question: "Menekşeler hangi renk?", options: ["Moradas", "Azules", "Rosas"], correctAnswer: "Moradas" },
        { id: 8, question: "Çimen nasıl?", options: ["Duro", "Suave", "Seco"], correctAnswer: "Suave" },
        { id: 9, question: "Bulutlar hangi renk?", options: ["Grises", "Blancas", "Azules"], correctAnswer: "Blancas" },
        { id: 10, question: "Köpek bahçede ne yapmayı seviyor?", options: ["Dormir", "Correr", "Comer"], correctAnswer: "Correr" }
    ]
};

// ===== ÜNİTE 5: YİYECEKLER =====
const unit5Reading: UnitReading = {
    unitId: 5, title: "Akşam Yemeği", language: "İspanyolca", level: "A1",
    story: {
        text: "Esta noche preparo una cena especial para mi familia. De primero hay sopa de tomate caliente. De segundo preparo pollo asado con patatas y ensalada verde. La ensalada tiene lechuga, tomate, pepino y cebolla. Para beber hay agua y zumo de naranja. De postre hay tarta de manzana que es mi favorita. Mi madre dice que la cena está deliciosa. Mi padre quiere más pollo. Después de cenar, tomamos café.",
        translation: "Bu gece ailem için özel bir akşam yemeği hazırlıyorum. Birinci olarak sıcak domates çorbası var. İkinci olarak kızarmış patates ve yeşil salata ile tavuk hazırlıyorum. Salatada marul, domates, salatalık ve soğan var. İçmek için su ve portakal suyu var. Tatlı olarak en sevdiğim elmalı turta var. Annem akşam yemeğinin lezzetli olduğunu söylüyor. Babam daha fazla tavuk istiyor. Akşam yemeğinden sonra kahve içiyoruz."
    },
    vocabulary: [
        { word: "Cena", meaning: "Akşam yemeği" }, { word: "Sopa", meaning: "Çorba" },
        { word: "Pollo", meaning: "Tavuk" }, { word: "Ensalada", meaning: "Salata" },
        { word: "Postre", meaning: "Tatlı" }
    ],
    questions: [
        { id: 1, question: "İlk yemek ne?", options: ["Ensalada", "Sopa", "Pollo"], correctAnswer: "Sopa" },
        { id: 2, question: "Ana yemek ne?", options: ["Pescado", "Pollo", "Carne"], correctAnswer: "Pollo" },
        { id: 3, question: "Tatlı ne?", options: ["Helado", "Tarta de manzana", "Pastel de chocolate"], correctAnswer: "Tarta de manzana" },
        { id: 4, question: "Kim daha fazla tavuk istiyor?", options: ["Mi madre", "Mi padre", "Mi hermano"], correctAnswer: "Mi padre" },
        { id: 5, question: "Yemekten sonra ne içiyorlar?", options: ["Té", "Café", "Leche"], correctAnswer: "Café" },
        { id: 6, question: "Çorba hangi lezzetle?", options: ["Pollo", "Tomate", "Verduras"], correctAnswer: "Tomate" },
        { id: 7, question: "Salatada hangi sebze yok?", options: ["Lechuga", "Zanahoria", "Pepino"], correctAnswer: "Zanahoria" },
        { id: 8, question: "Yemek kimin için hazırlanıyor?", options: ["Los amigos", "La familia", "Los vecinos"], correctAnswer: "La familia" },
        { id: 9, question: "Anne yemek hakkında ne diyor?", options: ["Salada", "Deliciosa", "Fría"], correctAnswer: "Deliciosa" },
        { id: 10, question: "İçecek olarak ne var?", options: ["Té y leche", "Agua y zumo de naranja", "Café y té"], correctAnswer: "Agua y zumo de naranja" }
    ]
};

// ===== ÜNİTE 6: İÇECEKLER =====
const unit6Reading: UnitReading = {
    unitId: 6, title: "Kafede Buluşma", language: "İspanyolca", level: "A1",
    story: {
        text: "Hoy me encuentro con mis amigos en una cafetería del centro. Yo pido un café con leche grande. Mi amigo Luis quiere un té verde con limón. María pide un chocolate caliente porque hace frío. Carlos quiere una cerveza pero el camarero dice que no tienen. Entonces pide un zumo de manzana. También pedimos agua con gas para la mesa. El camarero es muy amable. Pagamos quince euros en total. Pasamos una tarde muy agradable.",
        translation: "Bugün merkezde bir kafede arkadaşlarımla buluşuyorum. Ben büyük bir sütlü kahve istiyorum. Arkadaşım Luis limonlu yeşil çay istiyor. María sıcak çikolata istiyor çünkü hava soğuk. Carlos bira istiyor ama garson olmadığını söylüyor. O zaman elma suyu istiyor. Ayrıca masa için maden suyu istiyoruz. Garson çok nazik. Toplamda on beş euro ödüyoruz. Çok güzel bir öğleden sonra geçiriyoruz."
    },
    vocabulary: [
        { word: "Café", meaning: "Kahve" }, { word: "Té", meaning: "Çay" },
        { word: "Chocolate", meaning: "Çikolata" }, { word: "Cerveza", meaning: "Bira" },
        { word: "Zumo", meaning: "Meyve suyu" }
    ],
    questions: [
        { id: 1, question: "Kim sütlü kahve istiyor?", options: ["Luis", "María", "Yo"], correctAnswer: "Yo" },
        { id: 2, question: "María neden sıcak çikolata istiyor?", options: ["Le encanta", "Hace frío", "Es barato"], correctAnswer: "Hace frío" },
        { id: 3, question: "Carlos neden bira alamıyor?", options: ["Es caro", "No tienen", "Es menor"], correctAnswer: "No tienen" },
        { id: 4, question: "Toplam kaç euro ödüyorlar?", options: ["Diez", "Quince", "Veinte"], correctAnswer: "Quince" },
        { id: 5, question: "Garson nasıl?", options: ["Antipático", "Amable", "Lento"], correctAnswer: "Amable" },
        { id: 6, question: "Kafe nerede?", options: ["En el centro", "En casa", "En el parque"], correctAnswer: "En el centro" },
        { id: 7, question: "Luis hangi çayı istiyor?", options: ["Negro", "Verde", "Rojo"], correctAnswer: "Verde" },
        { id: 8, question: "Carlos sonunda ne sipariş ediyor?", options: ["Cerveza", "Zumo de manzana", "Café"], correctAnswer: "Zumo de manzana" },
        { id: 9, question: "Masa için ne sipariş ediyorlar?", options: ["Pan", "Agua con gas", "Postre"], correctAnswer: "Agua con gas" },
        { id: 10, question: "Öğleden sonrayı nasıl geçiriyorlar?", options: ["Aburrida", "Muy agradable", "Rápida"], correctAnswer: "Muy agradable" }
    ]
};



// Kısa versiyon - Ünite 7-20
const unit7Reading: UnitReading = {
    unitId: 7, title: "Haftalık Program", language: "İspanyolca", level: "A1",
    story: { text: "Mi semana es muy ocupada. Los lunes y martes trabajo en la oficina de nueve a seis. Los miércoles tengo clase de español por la tarde. Los jueves voy al gimnasio después del trabajo. Los viernes salgo con mis amigos. Los sábados hago las compras y limpio la casa. Los domingos visito a mi abuela y comemos juntos. Mi día favorito es el viernes porque puedo descansar.", translation: "Haftam çok yoğun. Pazartesi ve salı dokuzdan altıya ofiste çalışıyorum. Çarşamba öğleden sonra İspanyolca dersim var. Perşembe işten sonra spor salonuna gidiyorum. Cuma arkadaşlarımla çıkıyorum. Cumartesi alışveriş yapıyorum ve evi temizliyorum. Pazar babaannemi ziyaret ediyorum ve birlikte yemek yiyoruz. En sevdiğim gün cuma çünkü dinlenebiliyorum." },
    vocabulary: [{ word: "Lunes", meaning: "Pazartesi" }, { word: "Viernes", meaning: "Cuma" }, { word: "Domingo", meaning: "Pazar" }, { word: "Semana", meaning: "Hafta" }],
    questions: [
        { id: 1, question: "Hangi günler ofiste çalışıyor?", options: ["Lunes y martes", "Miércoles y jueves", "Viernes y sábado"], correctAnswer: "Lunes y martes" },
        { id: 2, question: "İspanyolca dersi hangi gün?", options: ["Martes", "Miércoles", "Jueves"], correctAnswer: "Miércoles" },
        { id: 3, question: "Pazar günü ne yapıyor?", options: ["Trabaja", "Visita a su abuela", "Hace deporte"], correctAnswer: "Visita a su abuela" },
        { id: 4, question: "En sevdiği gün hangisi?", options: ["Sábado", "Domingo", "Viernes"], correctAnswer: "Viernes" },
        { id: 5, question: "Cumartesi ne yapıyor?", options: ["Descansa", "Compras y limpieza", "Sale con amigos"], correctAnswer: "Compras y limpieza" },
        { id: 6, question: "Ofiste saat kaçtan kaça çalışıyor?", options: ["De ocho a cinco", "De nueve a seis", "De diez a siete"], correctAnswer: "De nueve a seis" },
        { id: 7, question: "Perşembe işten sonra nereye gidiyor?", options: ["A casa", "Al gimnasio", "A la cafetería"], correctAnswer: "Al gimnasio" },
        { id: 8, question: "Cuma günü kimlerle çıkıyor?", options: ["Con su familia", "Con sus amigos", "Solo"], correctAnswer: "Con sus amigos" },
        { id: 9, question: "Pazar günü babaannesiyle ne yapıyor?", options: ["Van de compras", "Comen juntos", "Hacen deporte"], correctAnswer: "Comen juntos" },
        { id: 10, question: "Neden cuma en sevdiği gün?", options: ["No trabaja", "Puede descansar", "Es fiesta"], correctAnswer: "Puede descansar" }
    ]
};

const unit8Reading: UnitReading = {
    unitId: 8, title: "Market Alışverişi", language: "İspanyolca", level: "A1",
    story: { text: "Voy al supermercado grande del centro. Necesito comprar muchas cosas. Primero compro veinticinco manzanas por diez euros. Después compro treinta y dos huevos por ocho euros. Las naranjas cuestan tres euros el kilo y compro dos kilos. También necesito leche que cuesta uno cincuenta. El pan integral cuesta dos euros. Al final mi factura es de veintiséis euros con cincuenta céntimos. Pago con un billete de treinta euros.", translation: "Merkezdeki büyük süpermarkete gidiyorum. Çok şey almam gerekiyor. Önce on euroya yirmi beş elma alıyorum. Sonra sekiz euroya otuz iki yumurta alıyorum. Portakallar kilosu üç euro ve iki kilo alıyorum. Ayrıca bir elli olan süt lazım. Tam buğday ekmeği iki euro. Sonunda faturam yirmi altı euro elli sent. Otuz euroluk banknotla ödüyorum." },
    vocabulary: [{ word: "Veinticinco", meaning: "25" }, { word: "Treinta y dos", meaning: "32" }, { word: "Veintiséis", meaning: "26" }],
    questions: [
        { id: 1, question: "Kaç elma alıyor?", options: ["Veinte", "Veinticinco", "Treinta"], correctAnswer: "Veinticinco" },
        { id: 2, question: "Yumurtalar kaç euro?", options: ["Seis", "Ocho", "Diez"], correctAnswer: "Ocho" },
        { id: 3, question: "Kaç kilo portakal alıyor?", options: ["Uno", "Dos", "Tres"], correctAnswer: "Dos" },
        { id: 4, question: "Toplam fatura kaç?", options: ["Veintiséis con cincuenta", "Treinta", "Veinticinco"], correctAnswer: "Veintiséis con cincuenta" },
        { id: 5, question: "Kaç euroluk banknotla ödüyor?", options: ["Veinticinco", "Treinta", "Cincuenta"], correctAnswer: "Treinta" },
        { id: 6, question: "Süpermarket nerede?", options: ["En casa", "En el centro", "En el parque"], correctAnswer: "En el centro" },
        { id: 7, question: "Elmalar kaç euro?", options: ["Ocho", "Diez", "Doce"], correctAnswer: "Diez" },
        { id: 8, question: "Portakal kilosu kaç euro?", options: ["Dos", "Tres", "Cuatro"], correctAnswer: "Tres" },
        { id: 9, question: "Süt kaç euro?", options: ["Uno cincuenta", "Dos", "Dos cincuenta"], correctAnswer: "Uno cincuenta" },
        { id: 10, question: "Ekmek kaç euro?", options: ["Uno", "Dos", "Tres"], correctAnswer: "Dos" }
    ]
};

// Ünite 9-20 benzer formatta...
const unit9Reading: UnitReading = { unitId: 9, title: "Yeni Evim", language: "İspanyolca", level: "A1", story: { text: "Acabo de mudarme a un piso nuevo. Tiene cuatro habitaciones. La cocina es moderna con muebles blancos. El salón es grande con un sofá gris y una televisión grande. Hay dos dormitorios: uno para mí y otro para invitados. El baño tiene una ducha y una bañera. También hay un pequeño balcón donde puedo poner plantas. Mi habitación favorita es la cocina porque me gusta cocinar.", translation: "Yeni bir daireye taşındım. Dört odası var. Mutfak beyaz mobilyalarla modern. Oturma odası büyük, gri bir koltuk ve büyük bir televizyon var. İki yatak odası var: biri benim için, diğeri misafirler için. Banyoda duş ve küvet var. Ayrıca bitki koyabileceğim küçük bir balkon var. En sevdiğim oda mutfak çünkü yemek yapmayı seviyorum." }, vocabulary: [{ word: "Cocina", meaning: "Mutfak" }, { word: "Salón", meaning: "Oturma odası" }, { word: "Dormitorio", meaning: "Yatak odası" }], questions: [{ id: 1, question: "Kaç oda var?", options: ["Tres", "Cuatro", "Cinco"], correctAnswer: "Cuatro" }, { id: 2, question: "Koltuk hangi renk?", options: ["Blanco", "Gris", "Azul"], correctAnswer: "Gris" }, { id: 3, question: "En sevdiği oda hangisi?", options: ["El salón", "La cocina", "El dormitorio"], correctAnswer: "La cocina" }, { id: 4, question: "Balkonda ne var?", options: ["Una mesa", "Plantas", "Una silla"], correctAnswer: "Plantas" }, { id: 5, question: "Banyoda ne var?", options: ["Solo ducha", "Ducha y bañera", "Solo bañera"], correctAnswer: "Ducha y bañera" }, { id: 6, question: "Mutfak mobilyaları hangi renk?", options: ["Grises", "Blancos", "Marrones"], correctAnswer: "Blancos" }, { id: 7, question: "Kaç yatak odası var?", options: ["Uno", "Dos", "Tres"], correctAnswer: "Dos" }, { id: 8, question: "İkinci yatak odası kimin için?", options: ["Los niños", "Los invitados", "Los padres"], correctAnswer: "Los invitados" }, { id: 9, question: "Salonda ne var?", options: ["Una mesa", "Sofá y televisión", "Una cama"], correctAnswer: "Sofá y televisión" }, { id: 10, question: "Neden mutfak en sevdiği oda?", options: ["Es grande", "Le gusta cocinar", "Tiene buenas vistas"], correctAnswer: "Le gusta cocinar" }] };

const unit10Reading: UnitReading = { unitId: 10, title: "Mobilya Mağazası", language: "İspanyolca", level: "A1", story: { text: "Voy a una tienda de muebles porque necesito amueblar mi nuevo apartamento. Primero miro las mesas: hay una mesa de madera muy bonita que cuesta ciento cincuenta euros. También necesito cuatro sillas que cuestan cuarenta euros cada una. Para el salón elijo un sofá gris por trescientos euros. La cama para el dormitorio cuesta doscientos euros. El total es ochocientos diez euros. Es caro pero son muebles de buena calidad.", translation: "Bir mobilya mağazasına gidiyorum çünkü yeni dairemi döşemem gerekiyor. Önce masalara bakıyorum: yüz elli euro olan çok güzel ahşap bir masa var. Ayrıca tanesi kırk euro olan dört sandalye lazım. Salon için üç yüz euroya gri bir koltuk seçiyorum. Yatak odası için yatak iki yüz euro. Toplam sekiz yüz on euro. Pahalı ama kaliteli mobilyalar." }, vocabulary: [{ word: "Mesa", meaning: "Masa" }, { word: "Silla", meaning: "Sandalye" }, { word: "Sofá", meaning: "Koltuk" }], questions: [{ id: 1, question: "Masa kaç euro?", options: ["Cien", "Ciento cincuenta", "Doscientos"], correctAnswer: "Ciento cincuenta" }, { id: 2, question: "Kaç sandalye alıyor?", options: ["Dos", "Cuatro", "Seis"], correctAnswer: "Cuatro" }, { id: 3, question: "Koltuk hangi renk?", options: ["Blanco", "Marrón", "Gris"], correctAnswer: "Gris" }, { id: 4, question: "Yatak kaç euro?", options: ["Ciento cincuenta", "Doscientos", "Trescientos"], correctAnswer: "Doscientos" }, { id: 5, question: "Toplam kaç euro?", options: ["Setecientos diez", "Ochocientos diez", "Novecientos diez"], correctAnswer: "Ochocientos diez" }, { id: 6, question: "Masa neden yapılmış?", options: ["De metal", "De madera", "De plástico"], correctAnswer: "De madera" }, { id: 7, question: "Bir sandalye kaç euro?", options: ["Treinta", "Cuarenta", "Cincuenta"], correctAnswer: "Cuarenta" }, { id: 8, question: "Koltuk kaç euro?", options: ["Doscientos", "Trescientos", "Cuatrocientos"], correctAnswer: "Trescientos" }, { id: 9, question: "Mobilyalar nasıl?", options: ["Baratos", "De buena calidad", "Viejos"], correctAnswer: "De buena calidad" }, { id: 10, question: "Neden mağazaya gidiyor?", options: ["De paseo", "Para amueblar el piso", "Para ver a un amigo"], correctAnswer: "Para amueblar el piso" }] };

const unit11Reading: UnitReading = { unitId: 11, title: "Doktor Ziyareti", language: "İspanyolca", level: "A1", story: { text: "No me siento bien hoy y voy al médico. Me duele mucho la cabeza y también tengo dolor de garganta. El médico me examina los ojos, los oídos y la boca. Dice que tengo un resfriado. Me receta medicinas para el dolor y jarabe para la garganta. También me dice que necesito descansar mucho y beber agua. Debo quedarme en casa tres días. Espero sentirme mejor pronto.", translation: "Bugün iyi hissetmiyorum ve doktora gidiyorum. Başım çok ağrıyor ve boğazım da ağrıyor. Doktor gözlerimi, kulaklarımı ve ağzımı muayene ediyor. Soğuk algınlığım olduğunu söylüyor. Ağrı için ilaç ve boğaz için şurup yazıyor. Ayrıca çok dinlenmem ve su içmem gerektiğini söylüyor. Üç gün evde kalmam gerekiyor. Umarım yakında daha iyi hissederim." }, vocabulary: [{ word: "Cabeza", meaning: "Baş" }, { word: "Garganta", meaning: "Boğaz" }, { word: "Ojos", meaning: "Gözler" }], questions: [{ id: 1, question: "Neresi ağrıyor?", options: ["El brazo", "La cabeza y la garganta", "Las piernas"], correctAnswer: "La cabeza y la garganta" }, { id: 2, question: "Hastalık ne?", options: ["Gripe", "Un resfriado", "Alergia"], correctAnswer: "Un resfriado" }, { id: 3, question: "Doktor ne yazıyor?", options: ["Solo medicinas", "Medicinas y jarabe", "Nada"], correctAnswer: "Medicinas y jarabe" }, { id: 4, question: "Kaç gün evde kalmalı?", options: ["Dos", "Tres", "Cinco"], correctAnswer: "Tres" }, { id: 5, question: "Ne içmeli?", options: ["Té", "Agua", "Zumo"], correctAnswer: "Agua" }, { id: 6, question: "Doktor nereleri muayene ediyor?", options: ["Los brazos", "Los ojos, oídos y boca", "Las piernas"], correctAnswer: "Los ojos, oídos y boca" }, { id: 7, question: "Şurup ne için?", options: ["Para el dolor de cabeza", "Para la garganta", "Para el estómago"], correctAnswer: "Para la garganta" }, { id: 8, question: "Bugün nasıl hissediyor?", options: ["Bien", "Mal", "Normal"], correctAnswer: "Mal" }, { id: 9, question: "Doktor başka ne tavsiye ediyor?", options: ["Hacer deporte", "Descansar", "Trabajar"], correctAnswer: "Descansar" }, { id: 10, question: "Ne zaman iyileşmeyi umuyor?", options: ["Ahora mismo", "Pronto", "El mes que viene"], correctAnswer: "Pronto" }] };

const unit12Reading: UnitReading = { unitId: 12, title: "Alışveriş Merkezi", language: "İspanyolca", level: "A1", story: { text: "Hoy voy de compras al centro comercial. Necesito ropa nueva para el trabajo. Primero entro en una tienda de ropa de hombre. Pruebo una camisa azul que me queda muy bien. Cuesta treinta y cinco euros. También compro un pantalón negro por cuarenta y cinco euros. En otra tienda compro unos zapatos marrones por sesenta euros. Para el frío compro una chaqueta gris. La dependienta es muy amable y me ayuda a elegir.", translation: "Bugün alışveriş merkezine alışverişe gidiyorum. İş için yeni kıyafetlere ihtiyacım var. Önce bir erkek giyim mağazasına giriyorum. Bana çok yakışan mavi bir gömlek deniyorum. Otuz beş euro. Ayrıca kırk beş euroya siyah bir pantolon alıyorum. Başka bir mağazada altmış euroya kahverengi ayakkabı alıyorum. Soğuk için gri bir ceket alıyorum. Tezgahtar çok nazik ve seçmeme yardım ediyor." }, vocabulary: [{ word: "Camisa", meaning: "Gömlek" }, { word: "Pantalón", meaning: "Pantolon" }, { word: "Zapatos", meaning: "Ayakkabı" }], questions: [{ id: 1, question: "Gömlek hangi renk?", options: ["Blanca", "Azul", "Negra"], correctAnswer: "Azul" }, { id: 2, question: "Gömlek kaç euro?", options: ["Treinta", "Treinta y cinco", "Cuarenta"], correctAnswer: "Treinta y cinco" }, { id: 3, question: "Ayakkabılar hangi renk?", options: ["Negros", "Marrones", "Grises"], correctAnswer: "Marrones" }, { id: 4, question: "Ayakkabılar kaç euro?", options: ["Cincuenta", "Sesenta", "Setenta"], correctAnswer: "Sesenta" }, { id: 5, question: "Tezgahtar nasıl?", options: ["Antipática", "Amable", "Callada"], correctAnswer: "Amable" }, { id: 6, question: "Pantolon hangi renk?", options: ["Azul", "Gris", "Negro"], correctAnswer: "Negro" }, { id: 7, question: "Pantolon kaç euro?", options: ["Treinta y cinco", "Cuarenta y cinco", "Cincuenta y cinco"], correctAnswer: "Cuarenta y cinco" }, { id: 8, question: "Ceket hangi renk?", options: ["Azul", "Negra", "Gris"], correctAnswer: "Gris" }, { id: 9, question: "Kıyafetler ne için?", options: ["Para vacaciones", "Para el trabajo", "Para una boda"], correctAnswer: "Para el trabajo" }, { id: 10, question: "Ceket ne için alınıyor?", options: ["Para el verano", "Para el frío", "Para la lluvia"], correctAnswer: "Para el frío" }] };

// 13-20 arası units benzer formatta
const unit13Reading: UnitReading = { unitId: 13, title: "Hayvanat Bahçesi", language: "İspanyolca", level: "A1", story: { text: "Este fin de semana vamos al zoo con toda la familia. Es un zoo muy grande con muchos animales. Primero vemos los leones que son muy grandes y tienen una melena bonita. Después vamos a ver los elefantes que están comiendo. Los monos son muy divertidos y saltan de árbol en árbol. También hay jirafas muy altas y cebras con rayas blancas y negras. Mi animal favorito es el panda porque es muy tierno. Pasamos todo el día allí y lo pasamos muy bien.", translation: "Bu hafta sonu tüm aileyle hayvanat bahçesine gidiyoruz. Çok hayvanlı büyük bir hayvanat bahçesi. Önce çok büyük olan ve güzel yelesi olan aslanları görüyoruz. Sonra yemek yiyen filleri görmeye gidiyoruz. Maymunlar çok eğlenceli ve ağaçtan ağaca atlıyorlar. Ayrıca çok uzun zürafalar ve siyah beyaz çizgili zebralar var. En sevdiğim hayvan panda çünkü çok sevimli. Bütün günü orada geçiriyoruz ve çok eğleniyoruz." }, vocabulary: [{ word: "León", meaning: "Aslan" }, { word: "Elefante", meaning: "Fil" }, { word: "Mono", meaning: "Maymun" }], questions: [{ id: 1, question: "Kimlerle gidiyorlar?", options: ["Con los amigos", "Con la familia", "Solos"], correctAnswer: "Con la familia" }, { id: 2, question: "Filler ne yapıyor?", options: ["Duermen", "Están comiendo", "Nadan"], correctAnswer: "Están comiendo" }, { id: 3, question: "En sevdiği hayvan hangisi?", options: ["El león", "El panda", "La jirafa"], correctAnswer: "El panda" }, { id: 4, question: "Panda neden seviliyor?", options: ["Es grande", "Es tierno", "Es rápido"], correctAnswer: "Es tierno" }, { id: 5, question: "Ne kadar kalıyorlar?", options: ["Unas horas", "Todo el día", "Medio día"], correctAnswer: "Todo el día" }, { id: 6, question: "Hayvanat bahçesi nasıl?", options: ["Pequeño", "Muy grande", "Mediano"], correctAnswer: "Muy grande" }, { id: 7, question: "Aslanların neyi güzel?", options: ["Los ojos", "La melena", "Las patas"], correctAnswer: "La melena" }, { id: 8, question: "Maymunlar ne yapıyor?", options: ["Duermen", "Saltan", "Nadan"], correctAnswer: "Saltan" }, { id: 9, question: "Zebraların renkleri ne?", options: ["Blancas y negras", "Marrones", "Grises"], correctAnswer: "Blancas y negras" }, { id: 10, question: "Günü nasıl geçirdiler?", options: ["Aburrido", "Muy bien", "Normal"], correctAnswer: "Muy bien" }] };

const unit14Reading: UnitReading = { unitId: 14, title: "Aile Meslekleri", language: "İspanyolca", level: "A1", story: { text: "En mi familia todos tienen trabajos interesantes. Mi padre es médico y trabaja en el hospital central. Ayuda a muchas personas enfermas. Mi madre es profesora de inglés en un instituto. Le encanta enseñar a los jóvenes. Mi hermano mayor es ingeniero y diseña puentes. Mi hermana es abogada y defiende a sus clientes en los tribunales. Yo todavía soy estudiante pero quiero ser arquitecto. Me gusta diseñar edificios.", translation: "Ailemde herkesin ilginç işleri var. Babam doktor ve merkez hastanede çalışıyor. Çok hasta insana yardım ediyor. Annem bir lisede İngilizce öğretmeni. Gençlere öğretmeyi çok seviyor. Ağabeyim mühendis ve köprüler tasarlıyor. Ablam avukat ve mahkemede müvekkillerini savunuyor. Ben hala öğrenciyim ama mimar olmak istiyorum. Bina tasarlamayı seviyorum." }, vocabulary: [{ word: "Médico", meaning: "Doktor" }, { word: "Profesor", meaning: "Öğretmen" }, { word: "Ingeniero", meaning: "Mühendis" }], questions: [{ id: 1, question: "Baba nerede çalışıyor?", options: ["En la escuela", "En el hospital", "En el tribunal"], correctAnswer: "En el hospital" }, { id: 2, question: "Anne ne öğretiyor?", options: ["Matemáticas", "Español", "Inglés"], correctAnswer: "Inglés" }, { id: 3, question: "Ağabey ne tasarlıyor?", options: ["Edificios", "Puentes", "Coches"], correctAnswer: "Puentes" }, { id: 4, question: "Ablam ne iş yapıyor?", options: ["Profesora", "Médica", "Abogada"], correctAnswer: "Abogada" }, { id: 5, question: "Ben ne olmak istiyorum?", options: ["Ingeniero", "Arquitecto", "Médico"], correctAnswer: "Arquitecto" }, { id: 6, question: "Baba kime yardım ediyor?", options: ["A los estudiantes", "A las personas enfermas", "A los clientes"], correctAnswer: "A las personas enfermas" }, { id: 7, question: "Anne nerede çalışıyor?", options: ["En el hospital", "En el instituto", "En el tribunal"], correctAnswer: "En el instituto" }, { id: 8, question: "Anne ne yapmayı seviyor?", options: ["Diseñar", "Enseñar", "Defender"], correctAnswer: "Enseñar" }, { id: 9, question: "Ablam nerede çalışıyor?", options: ["En la escuela", "En el hospital", "En el tribunal"], correctAnswer: "En el tribunal" }, { id: 10, question: "Ben ne tasarlamak istiyorum?", options: ["Puentes", "Edificios", "Coches"], correctAnswer: "Edificios" }] };



const unit15Reading: UnitReading = { unitId: 15, title: "Şehir Gezisi", language: "İspanyolca", level: "A1", story: { text: "Hoy hago un recorrido por mi ciudad. Primero voy a la plaza central donde está el ayuntamiento. Es un edificio muy antiguo y bonito. Cerca hay una iglesia del siglo XV. Después camino hasta el parque grande donde hay un lago. Al lado del parque está el banco y enfrente la farmacia. El hospital está un poco lejos, cerca de la estación de tren. Me gusta mucho mi ciudad porque tiene de todo: tiendas, restaurantes y museos.", translation: "Bugün şehrimde bir tur yapıyorum. Önce belediye binasının olduğu merkez meydana gidiyorum. Çok eski ve güzel bir bina. Yakınında 15. yüzyıldan bir kilise var. Sonra gölün olduğu büyük parka kadar yürüyorum. Parkın yanında banka ve karşısında eczane var. Hastane biraz uzakta, tren istasyonunun yakınında. Şehrimi çok seviyorum çünkü her şey var: dükkanlar, restoranlar ve müzeler." }, vocabulary: [{ word: "Plaza", meaning: "Meydan" }, { word: "Parque", meaning: "Park" }, { word: "Hospital", meaning: "Hastane" }], questions: [{ id: 1, question: "Merkez meydanda ne var?", options: ["El parque", "El ayuntamiento", "El hospital"], correctAnswer: "El ayuntamiento" }, { id: 2, question: "Kilise kaç yüzyıldan?", options: ["Siglo XIII", "Siglo XV", "Siglo XVII"], correctAnswer: "Siglo XV" }, { id: 3, question: "Parkta ne var?", options: ["Una piscina", "Un lago", "Un río"], correctAnswer: "Un lago" }, { id: 4, question: "Banka nerede?", options: ["Al lado del parque", "Al lado del hospital", "En la plaza"], correctAnswer: "Al lado del parque" }, { id: 5, question: "Hastane neyin yakınında?", options: ["El parque", "La plaza", "La estación de tren"], correctAnswer: "La estación de tren" }, { id: 6, question: "Belediye binası nasıl?", options: ["Nuevo", "Antiguo y bonito", "Pequeño"], correctAnswer: "Antiguo y bonito" }, { id: 7, question: "Eczane nerede?", options: ["Enfrente del parque", "Al lado de la plaza", "Al lado del hospital"], correctAnswer: "Enfrente del parque" }, { id: 8, question: "Şehirde ne var?", options: ["Solo parques", "De todo", "Solo casas"], correctAnswer: "De todo" }, { id: 9, question: "Bugün ne yapıyor?", options: ["Va de compras", "Hace un recorrido", "Trabaja"], correctAnswer: "Hace un recorrido" }, { id: 10, question: "Şehri seviyor mu?", options: ["No", "Sí, mucho", "Un poco"], correctAnswer: "Sí, mucho" }] };

const unit16Reading: UnitReading = { unitId: 16, title: "Seyahat Planı", language: "İspanyolca", level: "A1", story: { text: "La próxima semana viajo a Madrid. Primero voy en autobús hasta la estación de tren. El viaje en autobús dura veinte minutos. Después tomo el tren de alta velocidad que tarda dos horas en llegar a Madrid. En Madrid uso el metro para moverme por la ciudad porque es rápido y barato. También alquilo una bicicleta para pasear por el parque del Retiro. El último día tomo un taxi al aeropuerto para volver a casa en avión.", translation: "Gelecek hafta Madrid'e seyahat ediyorum. Önce tren istasyonuna otobüsle gidiyorum. Otobüs yolculuğu yirmi dakika sürüyor. Sonra Madrid'e iki saatte varan yüksek hızlı treni alıyorum. Madrid'de şehirde dolaşmak için metro kullanıyorum çünkü hızlı ve ucuz. Ayrıca Retiro parkında gezmek için bisiklet kiralıyorum. Son gün eve uçakla dönmek için havaalanına taksi alıyorum." }, vocabulary: [{ word: "Autobús", meaning: "Otobüs" }, { word: "Tren", meaning: "Tren" }, { word: "Metro", meaning: "Metro" }], questions: [{ id: 1, question: "İstasyona nasıl gidiyor?", options: ["En metro", "En autobús", "En taxi"], correctAnswer: "En autobús" }, { id: 2, question: "Tren kaç saat sürüyor?", options: ["Una", "Dos", "Tres"], correctAnswer: "Dos" }, { id: 3, question: "Madrid'de neden metro kullanıyor?", options: ["Es la única opción", "Es rápido y barato", "Es cómodo"], correctAnswer: "Es rápido y barato" }, { id: 4, question: "Parkta ne ile geziyor?", options: ["A pie", "En bicicleta", "En coche"], correctAnswer: "En bicicleta" }, { id: 5, question: "Eve nasıl dönüyor?", options: ["En tren", "En autobús", "En avión"], correctAnswer: "En avión" }, { id: 6, question: "Otobüs yolculuğu kaç dakika?", options: ["Diez", "Veinte", "Treinta"], correctAnswer: "Veinte" }, { id: 7, question: "Hangi parkta geziyor?", options: ["Central Park", "El Retiro", "Güell"], correctAnswer: "El Retiro" }, { id: 8, question: "Havaalanına nasıl gidiyor?", options: ["En metro", "En autobús", "En taxi"], correctAnswer: "En taxi" }, { id: 9, question: "Ne zaman seyahat ediyor?", options: ["Esta semana", "La próxima semana", "La semana pasada"], correctAnswer: "La próxima semana" }, { id: 10, question: "Hangi tür tren alıyor?", options: ["Normal", "De alta velocidad", "Nocturno"], correctAnswer: "De alta velocidad" }] };

const unit17Reading: UnitReading = { unitId: 17, title: "Günlük Rutin", language: "İspanyolca", level: "A1", story: { text: "Mi día típico empieza a las seis y media de la mañana. Me despierto con el despertador y me levanto enseguida. Primero me ducho con agua caliente durante diez minutos. Después me visto y desayuno café con tostadas. Salgo de casa a las ocho y voy al trabajo en metro. Trabajo de nueve a cinco con una hora para almorzar. Por la tarde hago deporte en el gimnasio. Ceno a las ocho y después leo un poco. Me acuesto a las once porque necesito dormir ocho horas.", translation: "Tipik günüm sabah altı buçukta başlıyor. Alarm ile uyanıyorum ve hemen kalkıyorum. Önce on dakika sıcak suyla duş alıyorum. Sonra giyiniyorum ve kahve ile tost kahvaltı yapıyorum. Evden sekizde çıkıyorum ve işe metro ile gidiyorum. Dokuzdan beşe bir saat öğle yemeği molasıyla çalışıyorum. Öğleden sonra spor salonunda spor yapıyorum. Sekizde akşam yemeği yiyorum ve sonra biraz okuyorum. On birde yatıyorum çünkü sekiz saat uyumam gerekiyor." }, vocabulary: [{ word: "Levantarse", meaning: "Kalkmak" }, { word: "Ducharse", meaning: "Duş almak" }, { word: "Acostarse", meaning: "Yatmak" }], questions: [{ id: 1, question: "Saat kaçta uyanıyor?", options: ["Las seis", "Las seis y media", "Las siete"], correctAnswer: "Las seis y media" }, { id: 2, question: "Duş kaç dakika?", options: ["Cinco", "Diez", "Quince"], correctAnswer: "Diez" }, { id: 3, question: "İşe nasıl gidiyor?", options: ["En autobús", "En coche", "En metro"], correctAnswer: "En metro" }, { id: 4, question: "Akşam yemeği saat kaçta?", options: ["A las siete", "A las ocho", "A las nueve"], correctAnswer: "A las ocho" }, { id: 5, question: "Kaç saat uyuyor?", options: ["Seis", "Siete", "Ocho"], correctAnswer: "Ocho" }, { id: 6, question: "Evden saat kaçta çıkıyor?", options: ["A las siete", "A las ocho", "A las nueve"], correctAnswer: "A las ocho" }, { id: 7, question: "Kahvaltıda ne yiyor?", options: ["Huevos", "Café con tostadas", "Fruta"], correctAnswer: "Café con tostadas" }, { id: 8, question: "Öğle molası kaç saat?", options: ["Media hora", "Una hora", "Dos horas"], correctAnswer: "Una hora" }, { id: 9, question: "Öğleden sonra ne yapıyor?", options: ["Duerme", "Hace deporte", "Ve la televisión"], correctAnswer: "Hace deporte" }, { id: 10, question: "Akşam yemeğinden sonra ne yapıyor?", options: ["Duerme", "Lee", "Ve la televisión"], correctAnswer: "Lee" }] };

const unit18Reading: UnitReading = { unitId: 18, title: "Yoğun Bir Gün", language: "İspanyolca", level: "A1", story: { text: "Hoy tengo un día muy ocupado con muchas citas. A las nueve en punto tengo una reunión de trabajo muy importante. A las once y media voy al dentista para una revisión. A la una menos cuarto almuerzo con un cliente. A las tres y cuarto tengo clase de inglés que dura una hora. A las seis y media recojo a mis hijos del colegio. A las ocho cenamos todos juntos. ¡Qué día tan largo!", translation: "Bugün çok randevulu yoğun bir günüm var. Tam dokuzda çok önemli bir iş toplantım var. On bir buçukta kontrol için dişçiye gidiyorum. Bire çeyrek kala bir müşteriyle öğle yemeği yiyorum. Üçü çeyrek geçe bir saat süren İngilizce dersim var. Altı buçukta çocuklarımı okuldan alıyorum. Sekizde hep birlikte akşam yemeği yiyoruz. Ne uzun bir gün!" }, vocabulary: [{ word: "En punto", meaning: "Tam" }, { word: "Y media", meaning: "Buçuk" }, { word: "Y cuarto", meaning: "Çeyrek geçe" }], questions: [{ id: 1, question: "Toplantı saat kaçta?", options: ["A las ocho", "A las nueve", "A las diez"], correctAnswer: "A las nueve" }, { id: 2, question: "Dişçi saat kaçta?", options: ["A las diez y media", "A las once", "A las once y media"], correctAnswer: "A las once y media" }, { id: 3, question: "Öğle yemeği saat kaçta?", options: ["A la una menos cuarto", "A la una", "A la una y media"], correctAnswer: "A la una menos cuarto" }, { id: 4, question: "İngilizce dersi kaç saat?", options: ["Media hora", "Una hora", "Dos horas"], correctAnswer: "Una hora" }, { id: 5, question: "Çocuklar saat kaçta alınıyor?", options: ["A las cinco y media", "A las seis", "A las seis y media"], correctAnswer: "A las seis y media" }, { id: 6, question: "Toplantı nasıl?", options: ["Normal", "Muy importante", "Corta"], correctAnswer: "Muy importante" }, { id: 7, question: "Dişçiye neden gidiyor?", options: ["Por dolor", "Para una revisión", "Para limpieza"], correctAnswer: "Para una revisión" }, { id: 8, question: "Öğle yemeği kiminle?", options: ["Con un amigo", "Con un cliente", "Con la familia"], correctAnswer: "Con un cliente" }, { id: 9, question: "İngilizce dersi saat kaçta?", options: ["A las dos y cuarto", "A las tres y cuarto", "A las cuatro y cuarto"], correctAnswer: "A las tres y cuarto" }, { id: 10, question: "Akşam yemeği kaçta?", options: ["A las siete", "A las ocho", "A las nueve"], correctAnswer: "A las ocho" }] };

const unit19Reading: UnitReading = { unitId: 19, title: "Hava Durumu", language: "İspanyolca", level: "A1", story: { text: "El tiempo esta semana es muy variable. Hoy lunes hace mucho sol y calor, la temperatura es de treinta grados. Mañana martes está nublado y probablemente llueve por la tarde. El miércoles hace viento y bajan las temperaturas a veinte grados. El jueves y viernes hace frío y hay posibilidad de nieve en las montañas. Para el fin de semana mejora el tiempo: hace sol pero no mucho calor. Es perfecto para ir de excursión.", translation: "Bu hafta hava çok değişken. Bugün pazartesi çok güneşli ve sıcak, sıcaklık otuz derece. Yarın salı bulutlu ve muhtemelen öğleden sonra yağmur yağacak. Çarşamba rüzgarlı ve sıcaklık yirmi dereceye düşüyor. Perşembe ve cuma soğuk ve dağlarda kar olasılığı var. Hafta sonu için hava düzeliyor: güneşli ama çok sıcak değil. Geziye gitmek için mükemmel." }, vocabulary: [{ word: "Sol", meaning: "Güneş" }, { word: "Lluvia", meaning: "Yağmur" }, { word: "Nieve", meaning: "Kar" }], questions: [{ id: 1, question: "Pazartesi sıcaklık kaç derece?", options: ["Veinte", "Veinticinco", "Treinta"], correctAnswer: "Treinta" }, { id: 2, question: "Salı ne olacak?", options: ["Sol", "Lluvia", "Nieve"], correctAnswer: "Lluvia" }, { id: 3, question: "Çarşamba sıcaklık kaç derece?", options: ["Quince", "Veinte", "Veinticinco"], correctAnswer: "Veinte" }, { id: 4, question: "Dağlarda ne olabilir?", options: ["Lluvia", "Nieve", "Tormenta"], correctAnswer: "Nieve" }, { id: 5, question: "Hafta sonu ne için iyi?", options: ["Quedarse en casa", "Ir de excursión", "Ir de compras"], correctAnswer: "Ir de excursión" }, { id: 6, question: "Hafta boyunca hava nasıl?", options: ["Igual", "Variable", "Frío"], correctAnswer: "Variable" }, { id: 7, question: "Çarşamba nasıl?", options: ["Soleado", "Ventoso", "Lluvioso"], correctAnswer: "Ventoso" }, { id: 8, question: "Perşembe ve cuma nasıl?", options: ["Caluroso", "Frío", "Templado"], correctAnswer: "Frío" }, { id: 9, question: "Hafta sonu güneşli ama?", options: ["Lluvioso", "No mucho calor", "Ventoso"], correctAnswer: "No mucho calor" }, { id: 10, question: "Salı yağmur ne zaman?", options: ["Por la mañana", "Por la tarde", "Por la noche"], correctAnswer: "Por la tarde" }] };

const unit20Reading: UnitReading = { unitId: 20, title: "Hobiler", language: "İspanyolca", level: "A1", story: { text: "Tengo muchos hobbies y me gusta estar activo. Los lunes y miércoles voy a nadar en la piscina municipal. Nado durante una hora y después me siento muy relajado. Los fines de semana me encanta cocinar platos nuevos de diferentes países. También leo mucho: novelas, biografías y libros de viajes. A veces juego al fútbol con mis amigos en el parque. Los domingos toco la guitarra porque estoy aprendiendo. Mi hobby favorito es viajar y conocer nuevos lugares.", translation: "Çok hobim var ve aktif olmayı seviyorum. Pazartesi ve çarşamba belediye havuzunda yüzmeye gidiyorum. Bir saat yüzüyorum ve sonra çok rahat hissediyorum. Hafta sonları farklı ülkelerin yeni yemeklerini yapmayı çok seviyorum. Ayrıca çok okuyorum: romanlar, biyografiler ve seyahat kitapları. Bazen arkadaşlarımla parkta futbol oynuyorum. Pazarları gitar çalıyorum çünkü öğreniyorum. En sevdiği hobi seyahat etmek ve yeni yerler tanımak." }, vocabulary: [{ word: "Nadar", meaning: "Yüzmek" }, { word: "Cocinar", meaning: "Yemek yapmak" }, { word: "Leer", meaning: "Okumak" }], questions: [{ id: 1, question: "Hangi günler yüzmeye gidiyor?", options: ["Martes y jueves", "Lunes y miércoles", "Sábado y domingo"], correctAnswer: "Lunes y miércoles" }, { id: 2, question: "Kaç saat yüzüyor?", options: ["Media hora", "Una hora", "Dos horas"], correctAnswer: "Una hora" }, { id: 3, question: "Ne tür kitaplar okuyor?", options: ["Solo novelas", "Novelas, biografías, viajes", "Solo ciencia"], correctAnswer: "Novelas, biografías, viajes" }, { id: 4, question: "Hangi enstrümanı öğreniyor?", options: ["Piano", "Guitarra", "Violín"], correctAnswer: "Guitarra" }, { id: 5, question: "En sevdiği hobi ne?", options: ["Nadar", "Leer", "Viajar"], correctAnswer: "Viajar" }, { id: 6, question: "Yüzmeden sonra nasıl hissediyor?", options: ["Cansado", "Relajado", "Nervioso"], correctAnswer: "Relajado" }, { id: 7, question: "Hafta sonları ne yapıyor?", options: ["Nada", "Cocina", "Trabaja"], correctAnswer: "Cocina" }, { id: 8, question: "Kiminle futbol oynuyor?", options: ["Con su familia", "Con sus amigos", "Solo"], correctAnswer: "Con sus amigos" }, { id: 9, question: "Futbolu nerede oynuyor?", options: ["En el estadio", "En el parque", "En casa"], correctAnswer: "En el parque" }, { id: 10, question: "Gitar hangi gün çalıyor?", options: ["Lunes", "Sábado", "Domingo"], correctAnswer: "Domingo" }] };
const unit21Reading: UnitReading = {
    unitId: 21, title: "Duygusal Bir Gün", language: "İspanyolca", level: "A1",
    story: {
        text: "Hoy es un día especial. María está muy feliz porque es su cumpleaños. Su madre está emocionada y prepara una fiesta sorpresa. Su padre está un poco nervioso porque tiene que comprar el pastel. Los hermanos de María están contentos porque van a ver a sus primos. El abuelo está cansado porque trabajó mucho ayer, pero está alegre de estar con la familia. La abuela está orgullosa de su nieta. ¿Por qué están todos tan contentos? Porque María cumple veinte años y toda la familia está reunida.",
        translation: "Bugün özel bir gün. María çok mutlu çünkü doğum günü. Annesi heyecanlı ve sürpriz bir parti hazırlıyor. Babası biraz gergin çünkü pasta almak zorunda. María'nın kardeşleri memnun çünkü kuzenlerini görecekler. Dede yorgun çünkü dün çok çalıştı ama aileyle birlikte olduğu için neşeli. Nine torunuyla gurur duyuyor. Herkes neden bu kadar mutlu? Çünkü María yirmi yaşına giriyor ve tüm aile bir arada."
    },
    vocabulary: [{ word: "Feliz", meaning: "Mutlu" }, { word: "Nervioso", meaning: "Gergin" }, { word: "Cansado", meaning: "Yorgun" }, { word: "Emocionado", meaning: "Heyecanlı" }],
    questions: [
        { id: 1, question: "María nasıl hissediyor?", options: ["Triste", "Feliz", "Cansada"], correctAnswer: "Feliz" },
        { id: 2, question: "Neden mutlu?", options: ["Tiene vacaciones", "Es su cumpleaños", "Va de viaje"], correctAnswer: "Es su cumpleaños" },
        { id: 3, question: "Baba neden gergin?", options: ["Tiene que comprar el pastel", "Está enfermo", "Trabaja mucho"], correctAnswer: "Tiene que comprar el pastel" },
        { id: 4, question: "Dede neden yorgun?", options: ["No durmió", "Trabajó mucho ayer", "Está enfermo"], correctAnswer: "Trabajó mucho ayer" },
        { id: 5, question: "María kaç yaşına giriyor?", options: ["Dieciocho", "Veinte", "Veinticinco"], correctAnswer: "Veinte" },
        { id: 6, question: "Anne ne hazırlıyor?", options: ["Una comida", "Una fiesta sorpresa", "Un viaje"], correctAnswer: "Una fiesta sorpresa" },
        { id: 7, question: "Kardeşler neden memnun?", options: ["Van a ver a sus primos", "No hay escuela", "Tienen regalos"], correctAnswer: "Van a ver a sus primos" },
        { id: 8, question: "Nine nasıl hissediyor?", options: ["Cansada", "Orgullosa", "Nerviosa"], correctAnswer: "Orgullosa" },
        { id: 9, question: "Dede neden neşeli?", options: ["Tiene dinero", "Está con la familia", "Es su cumpleaños"], correctAnswer: "Está con la familia" },
        { id: 10, question: "Tüm aile ne yapıyor?", options: ["Trabaja", "Está reunida", "Viaja"], correctAnswer: "Está reunida" }
    ]
};

const unit22Reading: UnitReading = {
    unitId: 22, title: "Okul Görevleri", language: "İspanyolca", level: "A1",
    story: {
        text: "Pablo es estudiante y tiene que hacer muchas cosas hoy. Primero, tiene que levantarse temprano porque tiene clase a las ocho. Después del desayuno, tiene que estudiar para el examen de matemáticas. Su madre le dice: 'Tienes que ordenar tu habitación antes de salir.' Su padre añade: 'También tienes que pasear al perro.' Por la tarde, Pablo tiene que ir a la biblioteca para devolver unos libros. ¡Qué día tan ocupado! Pero sabe que tiene que hacer todo esto para ser responsable.",
        translation: "Pablo öğrenci ve bugün birçok şey yapmak zorunda. Önce, erken kalkmak zorunda çünkü sekizde dersi var. Kahvaltıdan sonra, matematik sınavı için çalışmak zorunda. Annesi diyor: 'Çıkmadan önce odanı toplamak zorundasın.' Babası ekliyor: 'Ayrıca köpeği gezdirmek zorundasın.' Öğleden sonra, Pablo bazı kitapları iade etmek için kütüphaneye gitmek zorunda. Ne yoğun bir gün! Ama sorumlu olmak için tüm bunları yapmak zorunda olduğunu biliyor."
    },
    vocabulary: [{ word: "Tiene que", meaning: "Zorunda" }, { word: "Levantarse", meaning: "Kalkmak" }, { word: "Ordenar", meaning: "Toplamak/Düzenlemek" }],
    questions: [
        { id: 1, question: "Pablo ne zaman kalkmak zorunda?", options: ["Tarde", "Temprano", "A mediodía"], correctAnswer: "Temprano" },
        { id: 2, question: "Dersi saat kaçta?", options: ["A las siete", "A las ocho", "A las nueve"], correctAnswer: "A las ocho" },
        { id: 3, question: "Hangi sınav için çalışmak zorunda?", options: ["Español", "Matemáticas", "Historia"], correctAnswer: "Matemáticas" },
        { id: 4, question: "Çıkmadan önce ne yapmalı?", options: ["Comer", "Ordenar su habitación", "Dormir"], correctAnswer: "Ordenar su habitación" },
        { id: 5, question: "Baba ne yapmasını söylüyor?", options: ["Estudiar más", "Pasear al perro", "Limpiar la cocina"], correctAnswer: "Pasear al perro" },
        { id: 6, question: "Öğleden sonra nereye gitmeli?", options: ["Al parque", "A la biblioteca", "Al cine"], correctAnswer: "A la biblioteca" },
        { id: 7, question: "Kütüphaneye neden gidiyor?", options: ["Para leer", "Para devolver libros", "Para estudiar"], correctAnswer: "Para devolver libros" },
        { id: 8, question: "Pablo kim?", options: ["Profesor", "Estudiante", "Médico"], correctAnswer: "Estudiante" },
        { id: 9, question: "Pablo neden bunları yapmalı?", options: ["Para ganar dinero", "Para ser responsable", "Para divertirse"], correctAnswer: "Para ser responsable" },
        { id: 10, question: "Günü nasıl?", options: ["Aburrido", "Tranquilo", "Ocupado"], correctAnswer: "Ocupado" }
    ]
};

const unit23Reading: UnitReading = {
    unitId: 23, title: "Restoranda", language: "İspanyolca", level: "A1",
    story: {
        text: "Ana y Carlos están en un restaurante. Ana mira el menú y dice: 'Quiero una ensalada y agua.' Carlos no sabe qué pedir. El camarero pregunta: '¿Qué quieren tomar?' Carlos dice: 'Quiero paella, por favor.' A Ana le gusta mucho el pescado pero hoy quiere algo ligero. A Carlos le encanta la comida española. El camarero trae la comida. Ana dice: 'Esta ensalada está deliciosa. Me gusta mucho.' Carlos responde: 'A mí me encanta esta paella. ¿Quieres probar?' Ana dice: 'Sí, quiero probar un poco.'",
        translation: "Ana ve Carlos bir restoranda. Ana menüye bakıyor ve diyor: 'Bir salata ve su istiyorum.' Carlos ne sipariş edeceğini bilmiyor. Garson soruyor: 'Ne almak istiyorsunuz?' Carlos diyor: 'Paella istiyorum lütfen.' Ana balığı çok seviyor ama bugün hafif bir şey istiyor. Carlos İspanyol mutfağına bayılıyor. Garson yemeği getiriyor. Ana diyor: 'Bu salata çok lezzetli. Çok sevdim.' Carlos cevaplıyor: 'Ben bu paellaya bayılıyorum. Denemek ister misin?' Ana diyor: 'Evet, biraz denemek istiyorum.'"
    },
    vocabulary: [{ word: "Quiero", meaning: "İstiyorum" }, { word: "Me gusta", meaning: "Hoşuma gidiyor" }, { word: "Me encanta", meaning: "Bayılıyorum" }],
    questions: [
        { id: 1, question: "Ana ne istiyor?", options: ["Paella", "Ensalada y agua", "Pescado"], correctAnswer: "Ensalada y agua" },
        { id: 2, question: "Carlos ne istiyor?", options: ["Ensalada", "Paella", "Pizza"], correctAnswer: "Paella" },
        { id: 3, question: "Ana normalde neyi sever?", options: ["Carne", "Pescado", "Pollo"], correctAnswer: "Pescado" },
        { id: 4, question: "Carlos neye bayılıyor?", options: ["Comida italiana", "Comida española", "Comida mexicana"], correctAnswer: "Comida española" },
        { id: 5, question: "Ana ensalata hakkında ne diyor?", options: ["Está fría", "Está deliciosa", "Está salada"], correctAnswer: "Está deliciosa" },
        { id: 6, question: "Carlos Ana'ya ne soruyor?", options: ["¿Quieres más?", "¿Quieres probar?", "¿Quieres ir?"], correctAnswer: "¿Quieres probar?" },
        { id: 7, question: "Ana bugün neden hafif bir şey istiyor?", options: ["Está enferma", "Quiere algo ligero", "No tiene hambre"], correctAnswer: "Quiere algo ligero" },
        { id: 8, question: "Kim menüye bakıyor?", options: ["Carlos", "Ana", "El camarero"], correctAnswer: "Ana" },
        { id: 9, question: "Ana paellayı denemek istiyor mu?", options: ["No", "Sí", "No sabe"], correctAnswer: "Sí" },
        { id: 10, question: "Neredeler?", options: ["En casa", "En un restaurante", "En el parque"], correctAnswer: "En un restaurante" }
    ]
};

const unit24Reading: UnitReading = {
    unitId: 24, title: "Uluslararası Sınıf", language: "İspanyolca", level: "A1",
    story: {
        text: "En mi clase de español hay estudiantes de muchos países. María es de España, es española. Pierre es de Francia, es francés. Hans es de Alemania, es alemán. Yuki es de Japón, es japonesa. Ahmed es de Turquía, es turco. Yo soy de México, soy mexicano. Nuestra profesora es de Argentina, es argentina. Todos somos diferentes pero tenemos algo en común: queremos aprender español. La clase es muy interesante porque aprendemos sobre diferentes culturas. Somos una familia internacional.",
        translation: "İspanyolca sınıfımda birçok ülkeden öğrenci var. María İspanya'dan, İspanyol. Pierre Fransa'dan, Fransız. Hans Almanya'dan, Alman. Yuki Japonya'dan, Japon. Ahmed Türkiye'den, Türk. Ben Meksika'danım, Meksikalıyım. Öğretmenimiz Arjantin'den, Arjantinli. Hepimiz farklıyız ama ortak bir şeyimiz var: İspanyolca öğrenmek istiyoruz. Sınıf çok ilginç çünkü farklı kültürler hakkında öğreniyoruz. Uluslararası bir aileyiz."
    },
    vocabulary: [{ word: "Español/a", meaning: "İspanyol" }, { word: "Francés", meaning: "Fransız" }, { word: "Turco/a", meaning: "Türk" }, { word: "Soy de", meaning: "...danım" }],
    questions: [
        { id: 1, question: "María nereli?", options: ["De Francia", "De España", "De México"], correctAnswer: "De España" },
        { id: 2, question: "Pierre hangi milletten?", options: ["Español", "Francés", "Alemán"], correctAnswer: "Francés" },
        { id: 3, question: "Ahmed nereli?", options: ["De Japón", "De Turquía", "De Argentina"], correctAnswer: "De Turquía" },
        { id: 4, question: "Öğretmen hangi milletten?", options: ["Mexicana", "Española", "Argentina"], correctAnswer: "Argentina" },
        { id: 5, question: "Anlatıcı nereli?", options: ["De España", "De México", "De Francia"], correctAnswer: "De México" },
        { id: 6, question: "Ortak amaçları ne?", options: ["Viajar", "Aprender español", "Trabajar"], correctAnswer: "Aprender español" },
        { id: 7, question: "Yuki hangi ülkeden?", options: ["China", "Japón", "Corea"], correctAnswer: "Japón" },
        { id: 8, question: "Sınıf neden ilginç?", options: ["Hay pocas personas", "Aprenden sobre culturas", "Es fácil"], correctAnswer: "Aprenden sobre culturas" },
        { id: 9, question: "Hans hangi ülkeden?", options: ["Francia", "Alemania", "España"], correctAnswer: "Alemania" },
        { id: 10, question: "Kendilerini nasıl tanımlıyorlar?", options: ["Compañeros", "Familia internacional", "Amigos"], correctAnswer: "Familia internacional" }
    ]
};

const unit25Reading: UnitReading = {
    unitId: 25, title: "Günlük Aktiviteler", language: "İspanyolca", level: "A1",
    story: {
        text: "Cada día yo hablo español con mis amigos. Mi hermana estudia en la universidad y aprende mucho. Mi padre trabaja en una oficina y escribe emails todo el día. Mi madre cocina comida deliciosa y limpia la casa. Por las tardes, yo leo libros y mi hermana escucha música. Nosotros cenamos juntos a las ocho. Después, mis padres ven la televisión y nosotros escribimos en nuestros diarios. Los fines de semana, toda la familia camina por el parque y visitamos a los abuelos.",
        translation: "Her gün arkadaşlarımla İspanyolca konuşurum. Kız kardeşim üniversitede okuyor ve çok öğreniyor. Babam bir ofiste çalışıyor ve bütün gün e-posta yazıyor. Annem lezzetli yemek yapıyor ve evi temizliyor. Öğleden sonra, ben kitap okuyorum ve kardeşim müzik dinliyor. Sekizde birlikte akşam yemeği yiyoruz. Sonra, anne babam televizyon izliyor ve biz günlüklerimize yazıyoruz. Hafta sonları, bütün aile parkta yürüyor ve büyükanne büyükbabayı ziyaret ediyoruz."
    },
    vocabulary: [{ word: "Hablar", meaning: "Konuşmak" }, { word: "Estudiar", meaning: "Çalışmak/Okumak" }, { word: "Escribir", meaning: "Yazmak" }, { word: "Leer", meaning: "Okumak" }],
    questions: [
        { id: 1, question: "Anlatıcı arkadaşlarıyla ne konuşuyor?", options: ["Inglés", "Francés", "Español"], correctAnswer: "Español" },
        { id: 2, question: "Kız kardeş nerede okuyor?", options: ["En el instituto", "En la universidad", "En la escuela"], correctAnswer: "En la universidad" },
        { id: 3, question: "Baba ne yazıyor?", options: ["Libros", "Cartas", "Emails"], correctAnswer: "Emails" },
        { id: 4, question: "Anne ne yapıyor?", options: ["Trabaja", "Cocina y limpia", "Estudia"], correctAnswer: "Cocina y limpia" },
        { id: 5, question: "Akşam yemeği saat kaçta?", options: ["A las siete", "A las ocho", "A las nueve"], correctAnswer: "A las ocho" },
        { id: 6, question: "Öğleden sonra anlatıcı ne yapıyor?", options: ["Ve la televisión", "Lee libros", "Escucha música"], correctAnswer: "Lee libros" },
        { id: 7, question: "Kardeş öğleden sonra ne yapıyor?", options: ["Lee", "Escucha música", "Estudia"], correctAnswer: "Escucha música" },
        { id: 8, question: "Anne baba akşam ne yapıyor?", options: ["Trabajan", "Ven la televisión", "Duermen"], correctAnswer: "Ven la televisión" },
        { id: 9, question: "Hafta sonları ne yapıyorlar?", options: ["Trabajan", "Caminan por el parque", "Estudian"], correctAnswer: "Caminan por el parque" },
        { id: 10, question: "Kimi ziyaret ediyorlar?", options: ["A los amigos", "A los abuelos", "A los vecinos"], correctAnswer: "A los abuelos" }
    ]
};

const unit26Reading: UnitReading = {
    unitId: 26, title: "Alışverişte", language: "İspanyolca", level: "A1",
    story: {
        text: "Estoy en una tienda de ropa con mi amiga. Le digo: 'Mira, esta camisa es muy bonita.' Ella responde: 'Sí, pero ese vestido azul es más bonito.' Yo pregunto: '¿Y qué piensas de estos pantalones?' Ella dice: 'Estos pantalones son caros. Prefiero esos de allí.' La dependienta pregunta: '¿Puedo ayudarles?' Yo digo: 'Sí, quiero probar esta camisa y ese vestido.' Al final compramos muchas cosas: esta camisa blanca, esos zapatos negros y aquella falda roja del escaparate.",
        translation: "Arkadaşımla bir giyim mağazasındayım. Ona diyorum: 'Bak, bu gömlek çok güzel.' O cevaplıyor: 'Evet, ama şu mavi elbise daha güzel.' Ben soruyorum: 'Peki bu pantolonlar hakkında ne düşünüyorsun?' O diyor: 'Bu pantolonlar pahalı. Şuradakileri tercih ederim.' Tezgahtar soruyor: 'Yardımcı olabilir miyim?' Ben diyorum: 'Evet, bu gömleği ve şu elbiseyi denemek istiyorum.' Sonunda çok şey aldık: bu beyaz gömlek, şu siyah ayakkabılar ve vitrindeki o kırmızı etek."
    },
    vocabulary: [{ word: "Este/Esta", meaning: "Bu" }, { word: "Ese/Esa", meaning: "Şu" }, { word: "Estos/Estas", meaning: "Bunlar" }, { word: "Aquel/Aquella", meaning: "O (uzak)" }],
    questions: [
        { id: 1, question: "'Esta camisa' ne demek?", options: ["Esa camisa", "Bu gömlek", "O gömlek"], correctAnswer: "Bu gömlek" },
        { id: 2, question: "Arkadaş hangi elbiseyi beğeniyor?", options: ["Esta camisa", "Ese vestido azul", "Aquella falda"], correctAnswer: "Ese vestido azul" },
        { id: 3, question: "Pantolonlar nasıl?", options: ["Baratos", "Caros", "Feos"], correctAnswer: "Caros" },
        { id: 4, question: "Anlatıcı ne denemek istiyor?", options: ["Estos pantalones", "Esta camisa y ese vestido", "Esos zapatos"], correctAnswer: "Esta camisa y ese vestido" },
        { id: 5, question: "Vitrindeki etek hangi renk?", options: ["Azul", "Blanca", "Roja"], correctAnswer: "Roja" },
        { id: 6, question: "'Esos zapatos' ne demek?", options: ["Bu ayakkabılar", "Şu ayakkabılar", "O ayakkabılar"], correctAnswer: "Şu ayakkabılar" },
        { id: 7, question: "Satın alınan gömlek hangi renk?", options: ["Azul", "Blanca", "Negra"], correctAnswer: "Blanca" },
        { id: 8, question: "Satın alınan ayakkabılar hangi renk?", options: ["Blancos", "Marrones", "Negros"], correctAnswer: "Negros" },
        { id: 9, question: "Kiminle alışveriş yapıyor?", options: ["Con su madre", "Con su amiga", "Sola"], correctAnswer: "Con su amiga" },
        { id: 10, question: "Tezgahtar ne soruyor?", options: ["¿Cuánto cuesta?", "¿Puedo ayudarles?", "¿Qué talla?"], correctAnswer: "¿Puedo ayudarles?" }
    ]
};

const unit27Reading: UnitReading = {
    unitId: 27, title: "Müze Ziyareti", language: "İspanyolca", level: "A1",
    story: {
        text: "Hoy visitamos el museo del arte moderno. La entrada del museo es muy grande. Vemos las obras del famoso pintor Picasso. Las pinturas del siglo XX son muy interesantes. El guía nos explica la historia del cuadro más famoso. Después vamos a la cafetería del museo para descansar. Tomamos café y hablamos de las obras del día. Me gusta la arquitectura del edificio. Las ventanas del segundo piso tienen vistas increíbles del parque. Al final, compramos postales del museo en la tienda del primer piso.",
        translation: "Bugün modern sanat müzesini ziyaret ediyoruz. Müzenin girişi çok büyük. Ünlü ressam Picasso'nun eserlerini görüyoruz. 20. yüzyılın resimleri çok ilginç. Rehber bize en ünlü tablonun tarihini anlatıyor. Sonra dinlenmek için müzenin kafeteryasına gidiyoruz. Kahve içiyoruz ve günün eserlerini konuşuyoruz. Binanın mimarisini seviyorum. İkinci katın pencereleri parkın inanılmaz manzaralarına sahip. Sonunda, birinci katın mağazasından müzenin kartpostallarını alıyoruz."
    },
    vocabulary: [{ word: "Del", meaning: "...nın/...nin" }, { word: "Del museo", meaning: "Müzenin" }, { word: "Del pintor", meaning: "Ressamın" }],
    questions: [
        { id: 1, question: "'Del museo' ne demek?", options: ["Müzeye", "Müzenin", "Müzede"], correctAnswer: "Müzenin" },
        { id: 2, question: "Kimin eserleri var?", options: ["Dalí", "Picasso", "Goya"], correctAnswer: "Picasso" },
        { id: 3, question: "Resimler hangi yüzyıldan?", options: ["Siglo XIX", "Siglo XX", "Siglo XXI"], correctAnswer: "Siglo XX" },
        { id: 4, question: "Kafeteryaya neden gidiyorlar?", options: ["Para comer", "Para descansar", "Para comprar"], correctAnswer: "Para descansar" },
        { id: 5, question: "Pencereler hangi katta?", options: ["Primer piso", "Segundo piso", "Tercer piso"], correctAnswer: "Segundo piso" },
        { id: 6, question: "Pencerelerden ne görünüyor?", options: ["La ciudad", "El parque", "El mar"], correctAnswer: "El parque" },
        { id: 7, question: "Mağaza hangi katta?", options: ["Primer piso", "Segundo piso", "Sótano"], correctAnswer: "Primer piso" },
        { id: 8, question: "Mağazadan ne alıyorlar?", options: ["Libros", "Postales", "Cuadros"], correctAnswer: "Postales" },
        { id: 9, question: "Anlatıcı neyi seviyor?", options: ["Las pinturas", "La arquitectura del edificio", "El café"], correctAnswer: "La arquitectura del edificio" },
        { id: 10, question: "Müze ne tür?", options: ["Historia", "Arte moderno", "Ciencias"], correctAnswer: "Arte moderno" }
    ]
};

const unit28Reading: UnitReading = {
    unitId: 28, title: "Yarışma Sonuçları", language: "İspanyolca", level: "A1",
    story: {
        text: "Hoy es el día de los resultados del concurso escolar. El director anuncia: 'En primer lugar está María con noventa y ocho puntos. En segundo lugar está Carlos con noventa y cinco puntos. En tercer lugar está Ana con noventa y dos puntos.' María está muy feliz porque es la primera vez que gana. Carlos dice: 'La segunda posición también es muy buena.' Ana responde: 'Sí, el tercer puesto es un gran logro.' Es la tercera vez que nuestra escuela organiza este concurso. El quinto y último premio es un libro para Pedro.",
        translation: "Bugün okul yarışmasının sonuçlar günü. Müdür açıklıyor: 'Birinci sırada doksan sekiz puanla María var. İkinci sırada doksan beş puanla Carlos var. Üçüncü sırada doksan iki puanla Ana var.' María çok mutlu çünkü ilk kez kazanıyor. Carlos diyor: 'İkinci sıra da çok iyi.' Ana cevaplıyor: 'Evet, üçüncülük büyük bir başarı.' Okulumuzun bu yarışmayı düzenlediği üçüncü kez. Beşinci ve son ödül Pedro'ya bir kitap."
    },
    vocabulary: [{ word: "Primero", meaning: "Birinci" }, { word: "Segundo", meaning: "İkinci" }, { word: "Tercero", meaning: "Üçüncü" }, { word: "Quinto", meaning: "Beşinci" }],
    questions: [
        { id: 1, question: "Birinci kim?", options: ["Carlos", "María", "Ana"], correctAnswer: "María" },
        { id: 2, question: "María kaç puan aldı?", options: ["Noventa y dos", "Noventa y cinco", "Noventa y ocho"], correctAnswer: "Noventa y ocho" },
        { id: 3, question: "Üçüncü kim?", options: ["María", "Carlos", "Ana"], correctAnswer: "Ana" },
        { id: 4, question: "Bu kaçıncı yarışma?", options: ["La segunda", "La tercera", "La cuarta"], correctAnswer: "La tercera" },
        { id: 5, question: "Beşinci ödül ne?", options: ["Dinero", "Un libro", "Un trofeo"], correctAnswer: "Un libro" },
        { id: 6, question: "Carlos kaç puan aldı?", options: ["Noventa y dos", "Noventa y cinco", "Noventa y ocho"], correctAnswer: "Noventa y cinco" },
        { id: 7, question: "María neden mutlu?", options: ["Es su cumpleaños", "Es la primera vez que gana", "Le gusta el premio"], correctAnswer: "Es la primera vez que gana" },
        { id: 8, question: "Beşinci ödülü kim aldı?", options: ["María", "Ana", "Pedro"], correctAnswer: "Pedro" },
        { id: 9, question: "Ana kaç puan aldı?", options: ["Noventa y dos", "Noventa y cinco", "Noventa y ocho"], correctAnswer: "Noventa y dos" },
        { id: 10, question: "Sonuçları kim açıklıyor?", options: ["El profesor", "El director", "Los estudiantes"], correctAnswer: "El director" }
    ]
};

const unit29Reading: UnitReading = {
    unitId: 29, title: "Kayıp Çanta", language: "İspanyolca", level: "A1",
    story: {
        text: "Un policía encuentra a una niña que llora. Le pregunta: '¿Qué te pasa?' La niña responde: 'He perdido mi mochila.' El policía pregunta: '¿Cómo es tu mochila?' 'Es roja con estrellas azules.' '¿Dónde la perdiste?' 'En el parque, cerca de la fuente.' '¿Cuándo fue eso?' 'Hace una hora.' '¿Quién estaba contigo?' 'Mi hermano mayor.' '¿Por qué no le preguntas a él?' 'Porque él no sabe dónde está.' '¿Cuál es tu nombre?' 'Me llamo Sofía.' El policía ayuda a encontrar la mochila debajo de un banco.",
        translation: "Bir polis ağlayan bir kız çocuğu buluyor. Ona soruyor: 'Sana ne oldu?' Kız cevaplıyor: 'Sırt çantamı kaybettim.' Polis soruyor: 'Çantan nasıl?' 'Mavi yıldızlı kırmızı.' 'Nerede kaybettin?' 'Parkta, çeşmenin yakınında.' 'Ne zaman oldu?' 'Bir saat önce.' 'Yanında kim vardı?' 'Ağabeyim.' 'Neden ona sormuyorsun?' 'Çünkü o da nerede olduğunu bilmiyor.' 'Adın ne?' 'Adım Sofía.' Polis çantayı bir bankın altında bulmaya yardım ediyor."
    },
    vocabulary: [{ word: "¿Qué?", meaning: "Ne?" }, { word: "¿Dónde?", meaning: "Nerede?" }, { word: "¿Cuándo?", meaning: "Ne zaman?" }, { word: "¿Quién?", meaning: "Kim?" }, { word: "¿Por qué?", meaning: "Neden?" }],
    questions: [
        { id: 1, question: "Kız neden ağlıyor?", options: ["Está enferma", "Perdió su mochila", "Tiene hambre"], correctAnswer: "Perdió su mochila" },
        { id: 2, question: "Çanta hangi renk?", options: ["Azul", "Verde", "Roja"], correctAnswer: "Roja" },
        { id: 3, question: "Çantayı nerede kaybetti?", options: ["En la escuela", "En el parque", "En casa"], correctAnswer: "En el parque" },
        { id: 4, question: "Ne zaman kaybetti?", options: ["Ayer", "Hace una hora", "Esta mañana"], correctAnswer: "Hace una hora" },
        { id: 5, question: "Yanında kim vardı?", options: ["Su madre", "Su hermano mayor", "Su amiga"], correctAnswer: "Su hermano mayor" },
        { id: 6, question: "Kızın adı ne?", options: ["María", "Ana", "Sofía"], correctAnswer: "Sofía" },
        { id: 7, question: "Çanta nerede bulunuyor?", options: ["Debajo de un banco", "En la fuente", "En un árbol"], correctAnswer: "Debajo de un banco" },
        { id: 8, question: "Çantada ne var?", options: ["Estrellas azules", "Flores rojas", "Puntos verdes"], correctAnswer: "Estrellas azules" },
        { id: 9, question: "Ağabey çantanın yerini biliyor mu?", options: ["Sí", "No", "No se menciona"], correctAnswer: "No" },
        { id: 10, question: "Kim çantayı buluyor?", options: ["El hermano", "El policía", "La niña"], correctAnswer: "El policía" }
    ]
};

const unit30Reading: UnitReading = {
    unitId: 30, title: "Yaz Planları", language: "İspanyolca", level: "A1",
    story: {
        text: "Este verano tengo muchos planes. Puedo ir a la playa con mi familia porque mi padre tiene vacaciones. También puedo visitar a mis abuelos en el campo; ellos pueden enseñarme a montar a caballo. Mi hermana no puede venir porque tiene que trabajar. '¿Puedes ayudarme con las maletas?' le pregunto a mi madre. 'Claro, puedo ayudarte mañana', responde ella. Mis primos pueden venir también si sus padres les dan permiso. Mi amigo Pedro no puede nadar pero puede jugar al fútbol en la playa. ¡Podemos pasar un verano increíble!",
        translation: "Bu yaz çok planım var. Aileyle plaja gidebilirim çünkü babamın tatili var. Ayrıca köydeki büyükanne büyükbabamı ziyaret edebilirim; onlar bana at binmeyi öğretebilirler. Kız kardeşim gelemez çünkü çalışmak zorunda. 'Bavullarla bana yardım edebilir misin?' diye anneme soruyorum. 'Tabii, yarın sana yardım edebilirim' diyor o. Kuzenlerim de gelebilir eğer anne babaları izin verirse. Arkadaşım Pedro yüzemez ama plajda futbol oynayabilir. İnanılmaz bir yaz geçirebiliriz!"
    },
    vocabulary: [{ word: "Puedo", meaning: "Yapabilirim" }, { word: "Puedes", meaning: "Yapabilirsin" }, { word: "Puede", meaning: "Yapabilir" }, { word: "Podemos", meaning: "Yapabiliriz" }, { word: "Pueden", meaning: "Yapabilirler" }],
    questions: [
        { id: 1, question: "Neden plaja gidebilir?", options: ["Tiene dinero", "Su padre tiene vacaciones", "Es fin de semana"], correctAnswer: "Su padre tiene vacaciones" },
        { id: 2, question: "Kız kardeş neden gelemez?", options: ["Está enferma", "Tiene que trabajar", "No quiere"], correctAnswer: "Tiene que trabajar" },
        { id: 3, question: "Büyükanne büyükbaba ne öğretebilir?", options: ["Nadar", "Montar a caballo", "Cocinar"], correctAnswer: "Montar a caballo" },
        { id: 4, question: "Anne ne zaman yardım edebilir?", options: ["Hoy", "Mañana", "La semana que viene"], correctAnswer: "Mañana" },
        { id: 5, question: "Pedro ne yapamaz?", options: ["Jugar al fútbol", "Nadar", "Correr"], correctAnswer: "Nadar" },
        { id: 6, question: "Kuzenler ne zaman gelebilir?", options: ["Siempre", "Si tienen permiso", "Nunca"], correctAnswer: "Si tienen permiso" },
        { id: 7, question: "Büyükanne büyükbaba nerede yaşıyor?", options: ["En la ciudad", "En el campo", "En la playa"], correctAnswer: "En el campo" },
        { id: 8, question: "Pedro plajda ne yapabilir?", options: ["Nadar", "Jugar al fútbol", "Montar a caballo"], correctAnswer: "Jugar al fútbol" },
        { id: 9, question: "Anne neyle yardım edecek?", options: ["Con la comida", "Con las maletas", "Con el coche"], correctAnswer: "Con las maletas" },
        { id: 10, question: "Yaz nasıl olabilir?", options: ["Aburrido", "Increíble", "Tranquilo"], correctAnswer: "Increíble" }
    ]
};



// Ünite ID'sine göre reading getir
export function getReadingForUnit(unitId: number): UnitReading {
    // A1 (1-30)
    const a1Readings: { [key: number]: UnitReading } = {
        1: unit1Reading, 2: unit2Reading, 3: unit3Reading, 4: unit4Reading, 5: unit5Reading,
        6: unit6Reading, 7: unit7Reading, 8: unit8Reading, 9: unit9Reading, 10: unit10Reading,
        11: unit11Reading, 12: unit12Reading, 13: unit13Reading, 14: unit14Reading, 15: unit15Reading,
        16: unit16Reading, 17: unit17Reading, 18: unit18Reading, 19: unit19Reading, 20: unit20Reading,
        21: unit21Reading, 22: unit22Reading, 23: unit23Reading, 24: unit24Reading, 25: unit25Reading,
        26: unit26Reading, 27: unit27Reading, 28: unit28Reading, 29: unit29Reading, 30: unit30Reading
    };

    // A1 seviyesi (1-30)
    if (unitId >= 1 && unitId <= 30) {
        return a1Readings[unitId] || unit1Reading;
    }

    // A2 seviyesi (31-60)
    if (unitId >= 31 && unitId <= 60) {
        const a2Reading = getA2ReadingForUnit(unitId);
        return a2Reading || unit1Reading;
    }

    // B1 seviyesi (61-90)
    if (unitId >= 61 && unitId <= 90) {
        const b1Reading = getB1ReadingForUnit(unitId);
        return b1Reading || unit1Reading;
    }

    // B2 seviyesi (91-110)
    if (unitId >= 91 && unitId <= 110) {
        const b2Reading = getB2ReadingForUnit(unitId);
        return b2Reading || unit1Reading;
    }

    // English A2 seviyesi (131-160)
    if (unitId >= 131 && unitId <= 160) {
        const enA2Reading = getEnglishA2ReadingForUnit(unitId);
        return enA2Reading || unit1Reading;
    }

    // French A1 seviyesi (301-330)
    if (unitId >= 301 && unitId <= 330) {
        const frA1Reading = getFrenchA1ReadingForUnit(unitId);
        return frA1Reading || unit1Reading;
    }

    return unit1Reading;
}

