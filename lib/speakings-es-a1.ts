// LinguaFlow Konuşma - İspanyolca A1 (1-30) - 10 alıştırma/ünite

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

// ÜNİTE 1-10
const unit1Speaking: UnitSpeaking = {
    unitId: 1, title: "Selamlaşma", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¡Hola! ¿Cómo estás?", translation: "Merhaba! Nasılsın?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Buenos días, mucho gusto.", translation: "Günaydın, memnun oldum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo te llamas?", translation: "Adın ne?", expectedKeywords: ["me llamo"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿De dónde eres?", translation: "Nerelisin?", expectedKeywords: ["soy de"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Encantado de conocerte.", translation: "Tanıştığıma memnun oldum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "¿Qué tal?", translation: "Nasıl gidiyor?" },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cómo está usted?", translation: "Nasılsınız?", expectedKeywords: ["estoy", "bien"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Buenas noches.", translation: "İyi geceler." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Hasta luego.", translation: "Görüşürüz." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¡Adiós!", translation: "Hoşça kal!" }
    ]
};

const unit2Speaking: UnitSpeaking = {
    unitId: 2, title: "Sayılar", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Uno, dos, tres, cuatro, cinco.", translation: "Bir, iki, üç, dört, beş." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Seis, siete, ocho, nueve, diez.", translation: "Altı, yedi, sekiz, dokuz, on." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuántos años tienes?", translation: "Kaç yaşındasın?", expectedKeywords: ["tengo", "años"] },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Veinte euros, por favor.", translation: "Yirmi euro, lütfen." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Once, doce, trece, catorce, quince.", translation: "Onbir, oniki, onüç, ondört, onbeş." },
        { id: 6, type: "respond", prompt: "Cevap ver:", text: "¿Cuánto cuesta?", translation: "Ne kadar?", expectedKeywords: ["cuesta", "euros"] },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Dieciséis, diecisiete, dieciocho.", translation: "Onaltı, onyedi, onsekiz." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Diecinueve, veinte.", translation: "Ondokuz, yirmi." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Mi número es el cinco.", translation: "Numaram beş." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Somos cuatro personas.", translation: "Dört kişiyiz." }
    ]
};

const unit3Speaking: UnitSpeaking = {
    unitId: 3, title: "Aile", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Mi padre se llama Carlos.", translation: "Babamın adı Carlos." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Tengo dos hermanos.", translation: "İki kardeşim var." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Tienes hermanos?", translation: "Kardeşin var mı?", expectedKeywords: ["tengo", "hermano"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo se llama tu madre?", translation: "Annenin adı ne?", expectedKeywords: ["se llama"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Mi madre es profesora.", translation: "Annem öğretmen." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Tengo una hermana.", translation: "Bir kız kardeşim var." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Mis abuelos viven en Madrid.", translation: "Büyükanne ve dedem Madrid'de yaşıyor." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Somos una familia grande.", translation: "Büyük bir aileyiz." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Estás casado?", translation: "Evli misin?", expectedKeywords: ["sí", "no", "casado"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Esta es mi familia.", translation: "İşte ailem." }
    ]
};

const unit4Speaking: UnitSpeaking = {
    unitId: 4, title: "Renkler", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El cielo es azul.", translation: "Gökyüzü mavi." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Las rosas son rojas.", translation: "Güller kırmızı." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿De qué color es el sol?", translation: "Güneş ne renk?", expectedKeywords: ["amarillo"] },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Me gusta el color verde.", translation: "Yeşil rengi seviyorum." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Mi coche es negro.", translation: "Arabam siyah." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "La nieve es blanca.", translation: "Kar beyaz." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es tu color favorito?", translation: "En sevdiğin renk hangisi?", expectedKeywords: ["favorito", "gusta"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Las naranjas son naranjas.", translation: "Portakallar turuncu." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "El mar es azul oscuro.", translation: "Deniz koyu mavi." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Prefiero los colores claros.", translation: "Açık renkleri tercih ederim." }
    ]
};

const unit5Speaking: UnitSpeaking = {
    unitId: 5, title: "Yiyecekler", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Quiero una manzana.", translation: "Bir elma istiyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Me gusta el pescado.", translation: "Balığı severim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué quieres comer?", translation: "Ne yemek istiyorsun?", expectedKeywords: ["quiero", "comer"] },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Una ensalada, por favor.", translation: "Bir salata, lütfen." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Tengo hambre.", translation: "Açım." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "El desayuno está listo.", translation: "Kahvaltı hazır." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "¡Buen provecho!", translation: "Afiyet olsun!" },
        { id: 8, type: "respond", prompt: "Cevap ver:", text: "¿Te gusta la carne?", translation: "Et sever misin?", expectedKeywords: ["sí", "no", "gusta"] },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Soy vegetariano.", translation: "Vejetaryenim." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¡Está delicioso!", translation: "Çok lezzetli!" }
    ]
};

const unit6Speaking: UnitSpeaking = {
    unitId: 6, title: "İçecekler", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Un café con leche, por favor.", translation: "Sütlü kahve, lütfen." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Quisiera un vaso de agua.", translation: "Bir bardak su isterdim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué quieres beber?", translation: "Ne içmek istiyorsun?", expectedKeywords: ["quiero", "beber"] },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "La cerveza está fría.", translation: "Bira soğuk." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Tengo sed.", translation: "Susadım." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Un zumo de naranja.", translation: "Portakal suyu." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "¿Con azúcar o sin?", translation: "Şekerli mi şekersiz mi?" },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "La cuenta, por favor.", translation: "Hesap, lütfen." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "¡Salud!", translation: "Şerefe!" },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Yo invito.", translation: "Bu benden." }
    ]
};

const unit7Speaking: UnitSpeaking = {
    unitId: 7, title: "Günler", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Lunes, martes, miércoles.", translation: "Pazartesi, Salı, Çarşamba." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Hoy es sábado.", translation: "Bugün cumartesi." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué día es hoy?", translation: "Bugün günlerden ne?", expectedKeywords: ["hoy es"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿En qué mes estamos?", translation: "Hangi aydayız?", expectedKeywords: ["estamos en"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Mi cumpleaños es en marzo.", translation: "Doğum günüm Mart'ta." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Trabajo de lunes a viernes.", translation: "Pazartesiden cumaya çalışıyorum." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "El fin de semana descanso.", translation: "Hafta sonu dinlenirim." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Ayer fue domingo.", translation: "Dün pazardı." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Mañana será viernes.", translation: "Yarın cuma olacak." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¡Feliz cumpleaños!", translation: "Mutlu yıllar!" }
    ]
};

const unit8Speaking: UnitSpeaking = {
    unitId: 8, title: "Ülkeler", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Soy de Turquía.", translation: "Türkiye'denim." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Vivo en España.", translation: "İspanya'da yaşıyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿De dónde eres?", translation: "Nerelisin?", expectedKeywords: ["soy de"] },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Madrid es la capital.", translation: "Madrid başkenttir." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Hablo español e inglés.", translation: "İspanyolca ve İngilizce konuşuyorum." },
        { id: 6, type: "respond", prompt: "Cevap ver:", text: "¿Qué idiomas hablas?", translation: "Hangi dilleri konuşuyorsun?", expectedKeywords: ["hablo"] },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Es mi primer viaje.", translation: "Bu ilk seyahatim." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Me encanta este país.", translation: "Bu ülkeyi çok seviyorum." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "La cultura es diferente.", translation: "Kültür farklı." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "España es muy bonita.", translation: "İspanya çok güzel." }
    ]
};

const unit9Speaking: UnitSpeaking = {
    unitId: 9, title: "Meslekler", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Soy médico.", translation: "Doktorum." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿A qué te dedicas?", translation: "Ne iş yapıyorsun?", expectedKeywords: ["soy", "trabajo"] },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Trabajo como profesor.", translation: "Öğretmen olarak çalışıyorum." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Soy estudiante.", translation: "Öğrenciyim." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Busco trabajo.", translation: "İş arıyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Mi trabajo es interesante.", translation: "İşim ilginç." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Trabajo en una oficina.", translation: "Bir ofiste çalışıyorum." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Estoy de vacaciones.", translation: "Tatildeyim." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Mi jefe es amable.", translation: "Patronum iyi biri." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Hago horas extras.", translation: "Fazla mesai yapıyorum." }
    ]
};

const unit10Speaking: UnitSpeaking = {
    unitId: 10, title: "Ev", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¡Bienvenido a mi casa!", translation: "Evime hoş geldin!" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "¿Dónde está el baño?", translation: "Banyo nerede?" },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "La cocina es grande.", translation: "Mutfak büyük." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Mi habitación está arriba.", translation: "Odamı yukarıda." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Busco un apartamento.", translation: "Daire arıyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "El alquiler es caro.", translation: "Kira pahalı." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Abre la ventana.", translation: "Pencereyi aç." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Cierra la puerta.", translation: "Kapıyı kapat." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "El jardín es bonito.", translation: "Bahçe güzel." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Vivo en el primer piso.", translation: "Birinci katta yaşıyorum." }
    ]
};

// 11-20 devam
const unit11Speaking: UnitSpeaking = {
    unitId: 11, title: "Mobilya", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¡Ordena tu habitación!", translation: "Odanı topla!" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Siéntate en el sofá.", translation: "Kanepede otur." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Enciende la luz.", translation: "Işığı aç." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Apaga la televisión.", translation: "Televizyonu kapat." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "La cama es cómoda.", translation: "Yatak rahat." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Hay un armario.", translation: "Bir dolap var." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "La mesa es de madera.", translation: "Masa ahşap." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El espejo está roto.", translation: "Ayna kırık." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "El refrigerador está vacío.", translation: "Buzdolabı boş." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Ponlo en el cajón.", translation: "Çekmeceye koy." }
    ]
};

const unit12Speaking: UnitSpeaking = {
    unitId: 12, title: "Şehir", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿Dónde está la estación?", translation: "İstasyon nerede?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Siga todo recto.", translation: "Düz gidin." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Gire a la derecha.", translation: "Sağa dönün." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Gire a la izquierda.", translation: "Sola dönün." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Está cerca de aquí.", translation: "Buraya yakın." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "¿Está lejos?", translation: "Uzak mı?" },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Busco una farmacia.", translation: "Eczane arıyorum." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "¿Hay un banco cerca?", translation: "Yakında banka var mı?" },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Me he perdido.", translation: "Kayboldum." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¿Puede ayudarme?", translation: "Bana yardım edebilir misiniz?" }
    ]
};

const unit13Speaking: UnitSpeaking = {
    unitId: 13, title: "Ulaşım", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Un billete de ida y vuelta.", translation: "Gidiş-dönüş bileti." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "¿A qué hora sale el tren?", translation: "Tren saat kaçta kalkıyor?" },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Quisiera reservar un asiento.", translation: "Bir yer ayırtmak istiyorum." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "¿De qué andén sale?", translation: "Hangi perondan kalkıyor?" },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "¿Dónde está la parada?", translation: "Durak nerede?" },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Llego tarde.", translation: "Geç kaldım." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Hay mucho tráfico.", translation: "Çok trafik var." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "¡Buen viaje!", translation: "İyi yolculuklar!" },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Me bajo aquí.", translation: "Burada iniyorum." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¿Es directo?", translation: "Aktarmasız mı?" }
    ]
};

const unit14Speaking: UnitSpeaking = {
    unitId: 14, title: "Saat", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿Qué hora es?", translation: "Saat kaç?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Son las tres.", translation: "Saat üç." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Es mediodía.", translation: "Öğlen." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Es medianoche.", translation: "Gece yarısı." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Son las ocho y media.", translation: "Sekiz buçuk." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "¿A qué hora?", translation: "Saat kaçta?" },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Llegué temprano.", translation: "Erken geldim." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Llegué tarde.", translation: "Geç kaldım." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "¡Date prisa!", translation: "Acele et!" },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Es muy temprano.", translation: "Çok erken." }
    ]
};

const unit15Speaking: UnitSpeaking = {
    unitId: 15, title: "Hava", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿Qué tiempo hace?", translation: "Hava nasıl?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Hace buen tiempo.", translation: "Hava güzel." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Está lloviendo.", translation: "Yağmur yağıyor." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Está nevando.", translation: "Kar yağıyor." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Hace calor.", translation: "Hava sıcak." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Hace frío.", translation: "Hava soğuk." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Hace sol.", translation: "Güneşli." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Hay viento.", translation: "Rüzgarlı." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Lleva tu paraguas.", translation: "Şemsiyeni al." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Hace 25 grados.", translation: "25 derece." }
    ]
};

// 16-20
const unit16Speaking: UnitSpeaking = {
    unitId: 16, title: "Aktiviteler", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Me despierto a las 7.", translation: "7'de uyanıyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Desayuno por la mañana.", translation: "Sabah kahvaltı yapıyorum." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Voy al trabajo.", translation: "İşe gidiyorum." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Almuerzo a mediodía.", translation: "Öğlen yemek yiyorum." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Vuelvo a casa.", translation: "Eve dönüyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Hago la compra.", translation: "Alışveriş yapıyorum." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Cocino la cena.", translation: "Akşam yemeği yapıyorum." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Veo la televisión.", translation: "Televizyon izliyorum." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Me acuesto a las 11.", translation: "11'de yatıyorum." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Duermo bien.", translation: "İyi uyuyorum." }
    ]
};

const unit17Speaking: UnitSpeaking = {
    unitId: 17, title: "Hobiler", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿Qué te gusta hacer?", translation: "Ne yapmayı seversin?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Me gusta leer.", translation: "Okumayı severim." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Hago deporte.", translation: "Spor yapıyorum." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Me gusta viajar.", translation: "Seyahat etmeyi severim." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Toco la guitarra.", translation: "Gitar çalıyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Me encanta la música.", translation: "Müziği çok severim." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Nado todos los días.", translation: "Her gün yüzüyorum." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Juego videojuegos.", translation: "Video oyunu oynuyorum." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "¡Es muy divertido!", translation: "Çok eğlenceli!" },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Me divierto mucho.", translation: "Çok eğleniyorum." }
    ]
};

const unit18Speaking: UnitSpeaking = {
    unitId: 18, title: "Duygular", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Estoy feliz.", translation: "Mutluyum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Estoy triste.", translation: "Üzgünüm." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Estoy cansado.", translation: "Yorgunum." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Estoy enfadado.", translation: "Kızgınım." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Tengo miedo.", translation: "Korkuyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Estoy sorprendido.", translation: "Şaşırdım." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Estoy emocionado.", translation: "Heyecanlıyım." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Estoy aburrido.", translation: "Sıkıldım." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Estoy estresado.", translation: "Stresliyim." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Me siento bien.", translation: "İyi hissediyorum." }
    ]
};

const unit19Speaking: UnitSpeaking = {
    unitId: 19, title: "Vücut", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Me duele la cabeza.", translation: "Başım ağrıyor." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Me duele el estómago.", translation: "Karnım ağrıyor." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Me duele la espalda.", translation: "Sırtım ağrıyor." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Abre la boca.", translation: "Ağzını aç." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Levanta la mano.", translation: "Elini kaldır." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Cierra los ojos.", translation: "Gözlerini kapat." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Soy fuerte.", translation: "Güçlüyüm." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Tengo el pelo castaño.", translation: "Saçlarım kahverengi." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Tiene los ojos azules.", translation: "Mavi gözleri var." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Es alto.", translation: "O uzun boylu." }
    ]
};

const unit20Speaking: UnitSpeaking = {
    unitId: 20, title: "Giysiler", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿Qué llevas puesto?", translation: "Ne giyiyorsun?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Llevo un pantalón negro.", translation: "Siyah pantolon giyiyorum." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Este vestido es bonito.", translation: "Bu elbise güzel." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Me gusta esta camisa.", translation: "Bu gömleği seviyorum." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Ponte el abrigo.", translation: "Montunu giy." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Quítate los zapatos.", translation: "Ayakkabılarını çıkar." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "¿Tiene la talla M?", translation: "M bedeniniz var mı?" },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "¿Puedo probármelo?", translation: "Deneyebilir miyim?" },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Es demasiado grande.", translation: "Çok büyük." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Es demasiado pequeño.", translation: "Çok küçük." }
    ]
};

// 21-30
const unit21Speaking: UnitSpeaking = {
    unitId: 21, title: "Hayvanlar", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Tengo un perro.", translation: "Köpeğim var." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "El gato duerme.", translation: "Kedi uyuyor." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "El pájaro canta.", translation: "Kuş şarkı söylüyor." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Me gustan los animales.", translation: "Hayvanları severim." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "El perro ladra.", translation: "Köpek havlıyor." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "El gato maúlla.", translation: "Kedi miyavlıyor." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Es un animal doméstico.", translation: "Bu evcil hayvan." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El león es salvaje.", translation: "Aslan vahşi." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Monto a caballo.", translation: "Ata biniyorum." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "El elefante es grande.", translation: "Fil büyük." }
    ]
};

const unit22Speaking: UnitSpeaking = {
    unitId: 22, title: "Meyveler", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Quiero manzanas.", translation: "Elma istiyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Las naranjas están frescas.", translation: "Portakallar taze." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Me gustan las fresas.", translation: "Çilekleri severim." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Las verduras son sanas.", translation: "Sebzeler sağlıklı." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Un kilo de tomates.", translation: "Bir kilo domates." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Las zanahorias están frescas.", translation: "Havuçlar taze." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "¿Está maduro?", translation: "Olgun mu?" },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Está muy verde.", translation: "Çok yeşil." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "No me gusta la cebolla.", translation: "Soğan sevmem." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¿Es ecológico?", translation: "Organik mi?" }
    ]
};

const unit23Speaking: UnitSpeaking = {
    unitId: 23, title: "Alışveriş", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿Cuánto cuesta?", translation: "Kaç para?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es muy caro.", translation: "Çok pahalı." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "¿Tiene descuento?", translation: "İndiriminiz var mı?" },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "¿Puedo pagar con tarjeta?", translation: "Kartla ödeyebilir miyim?" },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Una bolsa, por favor.", translation: "Bir poşet, lütfen." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Quédese con el cambio.", translation: "Üstü kalsın." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Solo estoy mirando.", translation: "Sadece bakıyorum." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Voy a pensarlo.", translation: "Düşüneceğim." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Me llevo este.", translation: "Bunu alıyorum." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¿Dónde está la caja?", translation: "Kasa nerede?" }
    ]
};

const unit24Speaking: UnitSpeaking = {
    unitId: 24, title: "Sağlık", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Estoy enfermo.", translation: "Hastayım." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Tengo fiebre.", translation: "Ateşim var." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Me duele la garganta.", translation: "Boğazım ağrıyor." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Estoy tosiendo.", translation: "Öksürüyorum." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Tengo un resfriado.", translation: "Nezle oldum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Necesito ver a un médico.", translation: "Doktor görmem lazım." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Tome esta medicina.", translation: "Bu ilacı alın." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Descanse bien.", translation: "İyi dinlenin." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Me siento mejor.", translation: "Daha iyi hissediyorum." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¡Que te mejores!", translation: "Geçmiş olsun!" }
    ]
};

const unit25Speaking: UnitSpeaking = {
    unitId: 25, title: "Okul", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Voy al colegio.", translation: "Okula gidiyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Mañana tengo examen.", translation: "Yarın sınavım var." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Estudio español.", translation: "İspanyolca çalışıyorum." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "El profesor es simpático.", translation: "Öğretmen sempatik." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Hice mis deberes.", translation: "Ödevimi yaptım." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "La clase empieza a las 9.", translation: "Ders 9'da başlıyor." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "¡Aprobé el examen!", translation: "Sınavı geçtim!" },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Tengo que estudiar más.", translation: "Daha çok çalışmam lazım." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Abre tu libro.", translation: "Kitabını aç." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Escribe en tu cuaderno.", translation: "Defterine yaz." }
    ]
};

const unit26Speaking: UnitSpeaking = {
    unitId: 26, title: "Spor", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Juego al fútbol.", translation: "Futbol oynuyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Me gusta el tenis.", translation: "Tenisi severim." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Nado los fines de semana.", translation: "Hafta sonları yüzüyorum." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "¡Ganamos!", translation: "Kazandık!" },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Perdimos.", translation: "Kaybettik." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "¡Vamos a jugar!", translation: "Hadi oynayalım!" },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Entreno todos los días.", translation: "Her gün antrenman yapıyorum." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "¡Buen partido!", translation: "İyi maç!" },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Estoy cansado después.", translation: "Sonrasında yorgunum." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "El equipo es fuerte.", translation: "Takım güçlü." }
    ]
};

const unit27Speaking: UnitSpeaking = {
    unitId: 27, title: "Tatil", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¡Me voy de vacaciones!", translation: "Tatile gidiyorum!" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Reservé un hotel.", translation: "Otel ayırttım." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Voy a la playa.", translation: "Plaja gidiyorum." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "El mar es bonito.", translation: "Deniz güzel." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Hago turismo.", translation: "Turizm yapıyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Visito los monumentos.", translation: "Anıtları ziyaret ediyorum." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Tomé el avión.", translation: "Uçağa bindim." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "¡Buenas vacaciones!", translation: "İyi tatiller!" },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "Estoy de vacaciones.", translation: "Tatildeyim." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Vuelvo mañana.", translation: "Yarın dönüyorum." }
    ]
};

const unit28Speaking: UnitSpeaking = {
    unitId: 28, title: "İletişim", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Mi teléfono suena.", translation: "Telefonum çalıyor." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Te llamo esta noche.", translation: "Bu akşam seni ararım." },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "¿Me enviaste un mensaje?", translation: "Bana mesaj mı attın?" },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "No tengo cobertura.", translation: "Çekim yok." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Escríbeme un email.", translation: "Bana email yaz." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Estoy en Internet.", translation: "İnternetteyim." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "Descargo una aplicación.", translation: "Uygulama indiriyorum." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "¿Estás conectado?", translation: "Bağlı mısın?" },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "¿Cuál es tu número?", translation: "Numaran ne?" },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Respondo enseguida.", translation: "Hemen cevap veriyorum." }
    ]
};

const unit29Speaking: UnitSpeaking = {
    unitId: 29, title: "Restoran", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Una mesa para dos.", translation: "İki kişilik masa." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "¿Puedo ver el menú?", translation: "Menüyü görebilir miyim?" },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "¿Qué me recomienda?", translation: "Ne önerirsiniz?" },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Quiero pedir.", translation: "Sipariş vermek istiyorum." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "De primero, una sopa.", translation: "Başlangıç olarak çorba." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "De segundo, carne.", translation: "Ana yemek olarak et." },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "De postre, helado.", translation: "Tatlı olarak dondurma." },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Está muy rico.", translation: "Çok lezzetli." },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "La cuenta, por favor.", translation: "Hesap, lütfen." },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¿Incluye la propina?", translation: "Bahşiş dahil mi?" }
    ]
};

const unit30Speaking: UnitSpeaking = {
    unitId: 30, title: "Kapanış", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¡Felicidades!", translation: "Tebrikler!" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "¡Has trabajado bien!", translation: "İyi çalıştın!" },
        { id: 3, type: "repeat", prompt: "Tekrar et:", text: "Entiendo español.", translation: "İspanyolca anlıyorum." },
        { id: 4, type: "repeat", prompt: "Tekrar et:", text: "Hablo un poco de español.", translation: "Biraz İspanyolca konuşuyorum." },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "¡He aprendido mucho!", translation: "Çok şey öğrendim!" },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "¡Gracias por todo!", translation: "Her şey için teşekkürler!" },
        { id: 7, type: "repeat", prompt: "Tekrar et:", text: "¡Sigue así!", translation: "Böyle devam et!" },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "¡Buena suerte!", translation: "Bol şans!" },
        { id: 9, type: "repeat", prompt: "Tekrar et:", text: "¡Hasta pronto!", translation: "Yakında görüşürüz!" },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¡Adiós y mucho éxito!", translation: "Hoşça kal ve başarılar!" }
    ]
};

// Export
export const spanishA1Speakings: { [key: number]: UnitSpeaking } = {
    1: unit1Speaking, 2: unit2Speaking, 3: unit3Speaking, 4: unit4Speaking, 5: unit5Speaking,
    6: unit6Speaking, 7: unit7Speaking, 8: unit8Speaking, 9: unit9Speaking, 10: unit10Speaking,
    11: unit11Speaking, 12: unit12Speaking, 13: unit13Speaking, 14: unit14Speaking, 15: unit15Speaking,
    16: unit16Speaking, 17: unit17Speaking, 18: unit18Speaking, 19: unit19Speaking, 20: unit20Speaking,
    21: unit21Speaking, 22: unit22Speaking, 23: unit23Speaking, 24: unit24Speaking, 25: unit25Speaking,
    26: unit26Speaking, 27: unit27Speaking, 28: unit28Speaking, 29: unit29Speaking, 30: unit30Speaking
};

export function getSpanishA1SpeakingForUnit(unitId: number): UnitSpeaking | null {
    return spanishA1Speakings[unitId] || null;
}
