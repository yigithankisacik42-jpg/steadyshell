/**
 * LinguaFlow Kelime Veritabanı - İspanyolca A2
 * 20 Ünite (ID: 21-40), her biri için 10 kelime
 */

import { UnitVocabulary, Vocabulary } from './vocabulary';

// ===== ÜNİTE 21: GEÇMİŞ ZAMAN 1 (DÜZENLİ FİİLLER) =====
const unit21Vocab: UnitVocabulary = {
    unitId: 21, title: "Geçmiş Zaman Kelimeleri 1",
    words: [
        { word: "Ayer", meaning: "Dün", pronunciation: "a-yer", example: "Ayer fui al cine.", exampleTranslation: "Dün sinemaya gittim." },
        { word: "Anteayer", meaning: "Evvelsi gün", pronunciation: "an-te-a-yer", example: "Anteayer llovió mucho.", exampleTranslation: "Evvelsi gün çok yağmur yağdı." },
        { word: "La semana pasada", meaning: "Geçen hafta", pronunciation: "la se-ma-na pa-sa-da", example: "La semana pasada trabajé mucho.", exampleTranslation: "Geçen hafta çok çalıştım." },
        { word: "El mes pasado", meaning: "Geçen ay", pronunciation: "el mes pa-sa-do", example: "El mes pasado viajé a Madrid.", exampleTranslation: "Geçen ay Madrid'e seyahat ettim." },
        { word: "El año pasado", meaning: "Geçen yıl", pronunciation: "el a-nyo pa-sa-do", example: "El año pasado estudié español.", exampleTranslation: "Geçen yıl İspanyolca öğrendim." },
        { word: "Hace dos días", meaning: "İki gün önce", pronunciation: "a-se dos di-as", example: "Hace dos días compré un libro.", exampleTranslation: "İki gün önce bir kitap aldım." },
        { word: "Esta mañana", meaning: "Bu sabah", pronunciation: "es-ta ma-nya-na", example: "Esta mañana desayuné temprano.", exampleTranslation: "Bu sabah erken kahvaltı ettim." },
        { word: "Anoche", meaning: "Dün gece", pronunciation: "a-no-che", example: "Anoche cené con amigos.", exampleTranslation: "Dün gece arkadaşlarla yemek yedim." },
        { word: "Entonces", meaning: "O zaman", pronunciation: "en-ton-ses", example: "Entonces era muy joven.", exampleTranslation: "O zaman çok gençtim." },
        { word: "Después", meaning: "Sonra", pronunciation: "des-pues", example: "Después fui a casa.", exampleTranslation: "Sonra eve gittim." },
        // YENİ +5 KELİME
        { word: "Primero", meaning: "Önce", pronunciation: "pri-me-ro", example: "Primero comí, después salí.", exampleTranslation: "Önce yedim, sonra çıktım." },
        { word: "Finalmente", meaning: "Sonunda", pronunciation: "fi-nal-men-te", example: "Finalmente llegué.", exampleTranslation: "Sonunda vardım." },
        { word: "De repente", meaning: "Aniden", pronunciation: "de re-pen-te", example: "De repente empezó a llover.", exampleTranslation: "Aniden yağmur yağmaya başladı." },
        { word: "En aquel momento", meaning: "O an", pronunciation: "en a-kel mo-men-to", example: "En aquel momento entendí todo.", exampleTranslation: "O an her şeyi anladım." },
        { word: "Hace una hora", meaning: "Bir saat önce", pronunciation: "a-se u-na o-ra", example: "Llegué hace una hora.", exampleTranslation: "Bir saat önce geldim." }
    ]
};

// ===== ÜNİTE 22: GEÇMİŞ ZAMAN 2 (DÜZENSİZ FİİLLER) =====
const unit22Vocab: UnitVocabulary = {
    unitId: 22, title: "Düzensiz Fiiller (Geçmiş)",
    words: [
        { word: "Ir (Fui)", meaning: "Gitmek (Gittim)", pronunciation: "ir / fui", example: "Fui al mercado.", exampleTranslation: "Markete gittim." },
        { word: "Ser (Fui)", meaning: "Olmak (Oldum)", pronunciation: "ser / fui", example: "Fue un día especial.", exampleTranslation: "Özel bir gündü." },
        { word: "Hacer (Hice)", meaning: "Yapmak (Yaptım)", pronunciation: "a-ser / i-se", example: "Hice la tarea.", exampleTranslation: "Ödevi yaptım." },
        { word: "Tener (Tuve)", meaning: "Sahip olmak (Sahiptim)", pronunciation: "te-ner / tu-ve", example: "Tuve suerte.", exampleTranslation: "Şansım vardı." },
        { word: "Estar (Estuve)", meaning: "Olmak/Bulunmak", pronunciation: "es-tar / es-tu-ve", example: "Estuve en Barcelona.", exampleTranslation: "Barcelona'daydım." },
        { word: "Poder (Pude)", meaning: "Yapabilmek", pronunciation: "po-der / pu-de", example: "Pude terminar.", exampleTranslation: "Bitirebildim." },
        { word: "Decir (Dije)", meaning: "Söylemek", pronunciation: "de-sir / di-he", example: "Dije la verdad.", exampleTranslation: "Gerçeği söyledim." },
        { word: "Venir (Vine)", meaning: "Gelmek", pronunciation: "ve-nir / vi-ne", example: "Vine temprano.", exampleTranslation: "Erken geldim." },
        { word: "Querer (Quise)", meaning: "İstemek", pronunciation: "ke-rer / ki-se", example: "Quise ayudar.", exampleTranslation: "Yardım etmek istedim." },
        { word: "Saber (Supe)", meaning: "Bilmek", pronunciation: "sa-ber / su-pe", example: "Supe la respuesta.", exampleTranslation: "Cevabı biliyordum." },
        // YENİ +5 KELİME
        { word: "Poner (Puse)", meaning: "Koymak (Koydum)", pronunciation: "po-ner / pu-se", example: "Puse la mesa.", exampleTranslation: "Masayı kurdum." },
        { word: "Traer (Traje)", meaning: "Getirmek (Getirdim)", pronunciation: "tra-er / tra-he", example: "Traje los libros.", exampleTranslation: "Kitapları getirdim." },
        { word: "Dar (Di)", meaning: "Vermek (Verdim)", pronunciation: "dar / di", example: "Di un regalo.", exampleTranslation: "Hediye verdim." },
        { word: "Ver (Vi)", meaning: "Görmek (Gördüm)", pronunciation: "ver / vi", example: "Vi una película.", exampleTranslation: "Film izledim." },
        { word: "Leer (Leí)", meaning: "Okumak (Okudum)", pronunciation: "le-er / le-i", example: "Leí un libro.", exampleTranslation: "Kitap okudum." }
    ]
};

// ===== ÜNİTE 23: RESTORANDA =====
const unit23Vocab: UnitVocabulary = {
    unitId: 23, title: "Restoran Kelimeleri",
    words: [
        { word: "Menú", meaning: "Menü", pronunciation: "me-nu", example: "¿Me trae el menú?", exampleTranslation: "Menüyü getirir misiniz?" },
        { word: "Camarero", meaning: "Garson", pronunciation: "ka-ma-re-ro", example: "El camarero es muy amable.", exampleTranslation: "Garson çok nazik." },
        { word: "La cuenta", meaning: "Hesap", pronunciation: "la kuen-ta", example: "La cuenta, por favor.", exampleTranslation: "Hesap lütfen." },
        { word: "Reserva", meaning: "Rezervasyon", pronunciation: "re-ser-va", example: "Tengo una reserva.", exampleTranslation: "Bir rezervasyonum var." },
        { word: "Propina", meaning: "Bahşiş", pronunciation: "pro-pi-na", example: "Dejé una propina.", exampleTranslation: "Bahşiş bıraktım." },
        { word: "Plato del día", meaning: "Günün yemeği", pronunciation: "pla-to del di-a", example: "¿Cuál es el plato del día?", exampleTranslation: "Günün yemeği ne?" },
        { word: "Postre", meaning: "Tatlı", pronunciation: "pos-tre", example: "Quiero un postre.", exampleTranslation: "Bir tatlı istiyorum." },
        { word: "Entrante", meaning: "Başlangıç", pronunciation: "en-tran-te", example: "De entrante, sopa.", exampleTranslation: "Başlangıç olarak çorba." },
        { word: "Plato principal", meaning: "Ana yemek", pronunciation: "pla-to prin-si-pal", example: "Mi plato principal es pescado.", exampleTranslation: "Ana yemeğim balık." },
        { word: "Bebida", meaning: "İçecek", pronunciation: "be-bi-da", example: "¿Qué bebida desea?", exampleTranslation: "Hangi içeceği istersiniz?" },
        // YENİ +5 KELİME
        { word: "Carta de vinos", meaning: "Şarap listesi", pronunciation: "kar-ta de vi-nos", example: "¿Me trae la carta de vinos?", exampleTranslation: "Şarap listesini getirir misiniz?" },
        { word: "Para llevar", meaning: "Paket", pronunciation: "pa-ra ye-var", example: "Quiero esto para llevar.", exampleTranslation: "Bunu paket istiyorum." },
        { word: "Especialidad", meaning: "Özellik/Spesyalite", pronunciation: "es-pe-sia-li-dad", example: "¿Cuál es la especialidad?", exampleTranslation: "Spesiyaliteniz ne?" },
        { word: "Cuchara", meaning: "Kaşık", pronunciation: "ku-ça-ra", example: "Necesito una cuchara.", exampleTranslation: "Kaşığa ihtiyacım var." },
        { word: "Tenedor", meaning: "Çatal", pronunciation: "te-ne-dor", example: "El tenedor está sucio.", exampleTranslation: "Çatal kirli." }
    ]
};

// ===== ÜNİTE 24: ALIŞVERİŞ =====
const unit24Vocab: UnitVocabulary = {
    unitId: 24, title: "Alışveriş Kelimeleri",
    words: [
        { word: "Precio", meaning: "Fiyat", pronunciation: "pre-sio", example: "¿Cuál es el precio?", exampleTranslation: "Fiyatı ne?" },
        { word: "Descuento", meaning: "İndirim", pronunciation: "des-kuen-to", example: "Hay un 20% de descuento.", exampleTranslation: "%20 indirim var." },
        { word: "Oferta", meaning: "Kampanya/Fırsat", pronunciation: "o-fer-ta", example: "Está en oferta.", exampleTranslation: "Kampanyada." },
        { word: "Talla", meaning: "Beden", pronunciation: "ta-ya", example: "¿Qué talla usa?", exampleTranslation: "Hangi beden giyersiniz?" },
        { word: "Probador", meaning: "Giyinme kabini", pronunciation: "pro-ba-dor", example: "El probador está allí.", exampleTranslation: "Giyinme kabini orada." },
        { word: "Caja", meaning: "Kasa", pronunciation: "ka-ha", example: "Pague en caja.", exampleTranslation: "Kasada ödeyin." },
        { word: "Efectivo", meaning: "Nakit", pronunciation: "e-fek-ti-vo", example: "Pago en efectivo.", exampleTranslation: "Nakit ödüyorum." },
        { word: "Tarjeta", meaning: "Kart", pronunciation: "tar-he-ta", example: "¿Aceptan tarjeta?", exampleTranslation: "Kart kabul ediyor musunuz?" },
        { word: "Recibo", meaning: "Fiş", pronunciation: "re-si-bo", example: "¿Me da el recibo?", exampleTranslation: "Fişi verir misiniz?" },
        { word: "Cambio", meaning: "Para üstü", pronunciation: "kam-bio", example: "Aquí está su cambio.", exampleTranslation: "Buyrun para üstü." },
        // YENİ +5 KELİME
        { word: "Barato", meaning: "Ucuz", pronunciation: "ba-ra-to", example: "Este es muy barato.", exampleTranslation: "Bu çok ucuz." },
        { word: "Caro", meaning: "Pahalı", pronunciation: "ka-ro", example: "Es demasiado caro.", exampleTranslation: "Çok pahalı." },
        { word: "Devolver", meaning: "İade etmek", pronunciation: "de-vol-ver", example: "Quiero devolver esto.", exampleTranslation: "Bunu iade etmek istiyorum." },
        { word: "Quedar bien", meaning: "Yakışmak", pronunciation: "ke-dar bien", example: "Te queda muy bien.", exampleTranslation: "Sana çok yakışıyor." },
        { word: "Centro comercial", meaning: "AVM", pronunciation: "sen-tro ko-mer-sial", example: "Vamos al centro comercial.", exampleTranslation: "AVM'ye gidelim." }
    ]
};

// ===== ÜNİTE 25: SEYAHAT PLANLARI =====
const unit25Vocab: UnitVocabulary = {
    unitId: 25, title: "Seyahat Kelimeleri",
    words: [
        { word: "Billete", meaning: "Bilet", pronunciation: "bi-ye-te", example: "Compré un billete de avión.", exampleTranslation: "Uçak bileti aldım." },
        { word: "Ida y vuelta", meaning: "Gidiş-dönüş", pronunciation: "i-da i vuel-ta", example: "Un billete de ida y vuelta.", exampleTranslation: "Gidiş-dönüş bileti." },
        { word: "Solo ida", meaning: "Tek yön", pronunciation: "so-lo i-da", example: "Solo ida, por favor.", exampleTranslation: "Sadece gidiş lütfen." },
        { word: "Maleta", meaning: "Bavul", pronunciation: "ma-le-ta", example: "Mi maleta es negra.", exampleTranslation: "Bavulum siyah." },
        { word: "Equipaje", meaning: "Bagaj", pronunciation: "e-ki-pa-he", example: "¿Dónde está el equipaje?", exampleTranslation: "Bagaj nerede?" },
        { word: "Pasaporte", meaning: "Pasaport", pronunciation: "pa-sa-por-te", example: "Necesito mi pasaporte.", exampleTranslation: "Pasaportuma ihtiyacım var." },
        { word: "Destino", meaning: "Varış yeri", pronunciation: "des-ti-no", example: "Mi destino es Barcelona.", exampleTranslation: "Varış yerim Barcelona." },
        { word: "Viaje", meaning: "Seyahat", pronunciation: "via-he", example: "Buen viaje!", exampleTranslation: "İyi yolculuklar!" },
        { word: "Turista", meaning: "Turist", pronunciation: "tu-ris-ta", example: "Soy turista.", exampleTranslation: "Ben turistim." },
        { word: "Vacaciones", meaning: "Tatil", pronunciation: "va-ka-sio-nes", example: "Estoy de vacaciones.", exampleTranslation: "Tatildeyim." },
        // YENİ +5 KELİME
        { word: "Guía turístico", meaning: "Turist rehberi", pronunciation: "gi-a tu-ris-ti-ko", example: "El guía es muy bueno.", exampleTranslation: "Rehber çok iyi." },
        { word: "Excursión", meaning: "Tur/Gezi", pronunciation: "eks-kur-sion", example: "Hicimos una excursión.", exampleTranslation: "Tur yaptık." },
        { word: "Alojamiento", meaning: "Konaklama", pronunciation: "a-lo-ha-mien-to", example: "El alojamiento está incluido.", exampleTranslation: "Konaklama dahil." },
        { word: "Folleto", meaning: "Broşür", pronunciation: "fo-ye-to", example: "Dame un folleto.", exampleTranslation: "Bana broşür ver." },
        { word: "Itinerario", meaning: "Güzergah", pronunciation: "i-ti-ne-ra-rio", example: "¿Cuál es el itinerario?", exampleTranslation: "Güzergah ne?" }
    ]
};

// ===== ÜNİTE 26: OTEL REZERVASYONU =====
const unit26Vocab: UnitVocabulary = {
    unitId: 26, title: "Otel Kelimeleri",
    words: [
        { word: "Habitación", meaning: "Oda", pronunciation: "a-bi-ta-sion", example: "Quiero una habitación doble.", exampleTranslation: "Çift kişilik oda istiyorum." },
        { word: "Recepción", meaning: "Resepsiyon", pronunciation: "re-sep-sion", example: "Pregunte en recepción.", exampleTranslation: "Resepsiyonda sorun." },
        { word: "Llave", meaning: "Anahtar", pronunciation: "ya-ve", example: "La llave de la habitación.", exampleTranslation: "Oda anahtarı." },
        { word: "Desayuno incluido", meaning: "Kahvaltı dahil", pronunciation: "de-sa-yu-no in-klu-i-do", example: "¿El desayuno está incluido?", exampleTranslation: "Kahvaltı dahil mi?" },
        { word: "Check-in", meaning: "Giriş yapma", pronunciation: "çek-in", example: "El check-in es a las 14:00.", exampleTranslation: "Giriş saat 14:00'te." },
        { word: "Check-out", meaning: "Çıkış yapma", pronunciation: "çek-aut", example: "El check-out es a las 12:00.", exampleTranslation: "Çıkış saat 12:00'de." },
        { word: "Piscina", meaning: "Havuz", pronunciation: "pis-si-na", example: "El hotel tiene piscina.", exampleTranslation: "Otelin havuzu var." },
        { word: "Baño privado", meaning: "Özel banyo", pronunciation: "ba-nyo pri-va-do", example: "Habitación con baño privado.", exampleTranslation: "Özel banyolu oda." },
        { word: "Wifi gratis", meaning: "Ücretsiz wifi", pronunciation: "wi-fi gra-tis", example: "Hay wifi gratis.", exampleTranslation: "Ücretsiz wifi var." },
        { word: "Vista al mar", meaning: "Deniz manzarası", pronunciation: "vis-ta al mar", example: "Una habitación con vista al mar.", exampleTranslation: "Deniz manzaralı bir oda." },
        // YENİ +5 KELİME
        { word: "Servicio de habitación", meaning: "Oda servisi", pronunciation: "ser-vi-sio de a-bi-ta-sion", example: "Quería pedir servicio de habitación.", exampleTranslation: "Oda servisi istiyorum." },
        { word: "Media pensión", meaning: "Yarım pansiyon", pronunciation: "me-dia pen-sion", example: "Reservé media pensión.", exampleTranslation: "Yarım pansiyon rezerve ettim." },
        { word: "Pensión completa", meaning: "Tam pansiyon", pronunciation: "pen-sion kom-ple-ta", example: "Prefiero pensión completa.", exampleTranslation: "Tam pansiyon tercih ederim." },
        { word: "Terraza", meaning: "Teras", pronunciation: "te-rra-sa", example: "La habitación tiene terraza.", exampleTranslation: "Odanın terası var." },
        { word: "Caja fuerte", meaning: "Kasa", pronunciation: "ka-ha fuer-te", example: "Hay una caja fuerte en la habitación.", exampleTranslation: "Odada kasa var." }
    ]
};

// ===== ÜNİTE 27: HAVALİMANINDA =====
const unit27Vocab: UnitVocabulary = {
    unitId: 27, title: "Havalimanı Kelimeleri",
    words: [
        { word: "Vuelo", meaning: "Uçuş", pronunciation: "vue-lo", example: "Mi vuelo sale a las 10.", exampleTranslation: "Uçuşum 10'da kalkıyor." },
        { word: "Puerta de embarque", meaning: "Biniş kapısı", pronunciation: "puer-ta de em-bar-ke", example: "La puerta de embarque es la B12.", exampleTranslation: "Biniş kapısı B12." },
        { word: "Tarjeta de embarque", meaning: "Biniş kartı", pronunciation: "tar-he-ta de em-bar-ke", example: "Aquí está mi tarjeta de embarque.", exampleTranslation: "İşte biniş kartım." },
        { word: "Facturar", meaning: "Bagaj teslim etmek", pronunciation: "fak-tu-rar", example: "Necesito facturar mi maleta.", exampleTranslation: "Bavulumu teslim etmem gerekiyor." },
        { word: "Control de seguridad", meaning: "Güvenlik kontrolü", pronunciation: "kon-trol de se-gu-ri-dad", example: "Pase por el control de seguridad.", exampleTranslation: "Güvenlik kontrolünden geçin." },
        { word: "Retraso", meaning: "Gecikme", pronunciation: "re-tra-so", example: "El vuelo tiene retraso.", exampleTranslation: "Uçuş gecikmeli." },
        { word: "Escala", meaning: "Aktarma", pronunciation: "es-ka-la", example: "Tengo una escala en París.", exampleTranslation: "Paris'te aktarmam var." },
        { word: "Aterrizaje", meaning: "İniş", pronunciation: "a-te-rri-sa-he", example: "El aterrizaje fue suave.", exampleTranslation: "İniş yumuşaktı." },
        { word: "Despegue", meaning: "Kalkış", pronunciation: "des-pe-ge", example: "El despegue es en 30 minutos.", exampleTranslation: "Kalkış 30 dakika sonra." },
        { word: "Cinturón de seguridad", meaning: "Emniyet kemeri", pronunciation: "sin-tu-ron de se-gu-ri-dad", example: "Abróchense el cinturón.", exampleTranslation: "Kemerlerinizi bağlayın." },
        // YENİ +5 KELİME
        { word: "Equipaje de mano", meaning: "El bagajı", pronunciation: "e-ki-pa-he de ma-no", example: "Solo llevo equipaje de mano.", exampleTranslation: "Sadece el bagajı taşıyorum." },
        { word: "Recogida de equipaje", meaning: "Bagaj alma", pronunciation: "re-ko-hi-da de e-ki-pa-he", example: "¿Dónde está la recogida de equipaje?", exampleTranslation: "Bagaj alma nerede?" },
        { word: "Aduana", meaning: "Gümrük", pronunciation: "a-dua-na", example: "Pase por la aduana.", exampleTranslation: "Gümrükten geçin." },
        { word: "Cancelar", meaning: "Iptal etmek", pronunciation: "kan-se-lar", example: "Tengo que cancelar mi vuelo.", exampleTranslation: "Uçuşumu iptal etmem gerekiyor." },
        { word: "Asiento de ventanilla", meaning: "Pencere koltuğu", pronunciation: "a-sien-to de ven-ta-ni-ya", example: "Prefiero asiento de ventanilla.", exampleTranslation: "Pencere koltuğu tercih ederim." }
    ]
};

// ===== ÜNİTE 28: DOKTORDA =====
const unit28Vocab: UnitVocabulary = {
    unitId: 28, title: "Sağlık Kelimeleri",
    words: [
        { word: "Síntoma", meaning: "Semptom", pronunciation: "sin-to-ma", example: "¿Cuáles son sus síntomas?", exampleTranslation: "Belirtileriniz neler?" },
        { word: "Fiebre", meaning: "Ateş", pronunciation: "fie-bre", example: "Tengo fiebre alta.", exampleTranslation: "Yüksek ateşim var." },
        { word: "Dolor", meaning: "Ağrı", pronunciation: "do-lor", example: "Tengo dolor de cabeza.", exampleTranslation: "Baş ağrım var." },
        { word: "Tos", meaning: "Öksürük", pronunciation: "tos", example: "Tengo mucha tos.", exampleTranslation: "Çok öksürüyorum." },
        { word: "Resfriado", meaning: "Soğuk algınlığı", pronunciation: "res-fri-a-do", example: "Estoy resfriado.", exampleTranslation: "Üşütmüşüm." },
        { word: "Receta", meaning: "Reçete", pronunciation: "re-se-ta", example: "Aquí está la receta.", exampleTranslation: "İşte reçete." },
        { word: "Cita médica", meaning: "Doktor randevusu", pronunciation: "si-ta me-di-ka", example: "Tengo una cita médica.", exampleTranslation: "Doktor randevum var." },
        { word: "Urgencias", meaning: "Acil servis", pronunciation: "ur-hen-sias", example: "Vaya a urgencias.", exampleTranslation: "Acil servise gidin." },
        { word: "Alergia", meaning: "Alerji", pronunciation: "a-ler-hia", example: "Tengo alergia al polen.", exampleTranslation: "Polene alerjim var." },
        { word: "Pastilla", meaning: "Hap", pronunciation: "pas-ti-ya", example: "Tome una pastilla al día.", exampleTranslation: "Günde bir hap alın." },
        // YENİ +5 KELİME
        { word: "Mareo", meaning: "Baş dönmesi", pronunciation: "ma-re-o", example: "Tengo mareo.", exampleTranslation: "Başım dönüyor." },
        { word: "Náuseas", meaning: "Bulantı", pronunciation: "nau-se-as", example: "Siento náuseas.", exampleTranslation: "Bulantım var." },
        { word: "Radiografía", meaning: "Röntgen", pronunciation: "ra-dio-gra-fi-a", example: "Necesita una radiografía.", exampleTranslation: "Röntgen çektirmeniz gerekiyor." },
        { word: "Análisis de sangre", meaning: "Kan tahlili", pronunciation: "a-na-li-sis de san-gre", example: "Vamos a hacer un análisis de sangre.", exampleTranslation: "Kan tahlili yapacağız." },
        { word: "Vacuna", meaning: "Aşı", pronunciation: "va-ku-na", example: "Necesito la vacuna.", exampleTranslation: "Aşıya ihtiyacım var." }
    ]
};

// ===== ÜNİTE 29: ECZANEDE =====
const unit29Vocab: UnitVocabulary = {
    unitId: 29, title: "Eczane Kelimeleri",
    words: [
        { word: "Farmacia", meaning: "Eczane", pronunciation: "far-ma-sia", example: "Busco una farmacia.", exampleTranslation: "Eczane arıyorum." },
        { word: "Medicamento", meaning: "İlaç", pronunciation: "me-di-ka-men-to", example: "Necesito este medicamento.", exampleTranslation: "Bu ilaca ihtiyacım var." },
        { word: "Jarabe", meaning: "Şurup", pronunciation: "ha-ra-be", example: "Un jarabe para la tos.", exampleTranslation: "Öksürük şurubu." },
        { word: "Pomada", meaning: "Merhem", pronunciation: "po-ma-da", example: "Una pomada para quemaduras.", exampleTranslation: "Yanık merhemi." },
        { word: "Venda", meaning: "Bandaj", pronunciation: "ven-da", example: "Necesito una venda.", exampleTranslation: "Bandaja ihtiyacım var." },
        { word: "Analgésico", meaning: "Ağrı kesici", pronunciation: "a-nal-he-si-ko", example: "¿Tiene algún analgésico?", exampleTranslation: "Ağrı kesiciniz var mı?" },
        { word: "Antibiótico", meaning: "Antibiyotik", pronunciation: "an-ti-bio-ti-ko", example: "Necesito un antibiótico.", exampleTranslation: "Antibiyotiğe ihtiyacım var." },
        { word: "Gotas", meaning: "Damla", pronunciation: "go-tas", example: "Gotas para los ojos.", exampleTranslation: "Göz damlası." },
        { word: "Termómetro", meaning: "Termometre", pronunciation: "ter-mo-me-tro", example: "¿Tiene un termómetro?", exampleTranslation: "Termometreniz var mı?" },
        { word: "Tiritas", meaning: "Yara bandı", pronunciation: "ti-ri-tas", example: "Necesito tiritas.", exampleTranslation: "Yara bandına ihtiyacım var." },
        // YENİ +5 KELİME
        { word: "Crema solar", meaning: "Güneş kremi", pronunciation: "kre-ma so-lar", example: "Necesito crema solar.", exampleTranslation: "Güneş kremine ihtiyacım var." },
        { word: "Vitaminas", meaning: "Vitaminler", pronunciation: "vi-ta-mi-nas", example: "Tomo vitaminas.", exampleTranslation: "Vitamin alıyorum." },
        { word: "Pastillas para dormir", meaning: "Uyku hapı", pronunciation: "pas-ti-yas pa-ra dor-mir", example: "¿Tiene pastillas para dormir?", exampleTranslation: "Uyku hapınız var mı?" },
        { word: "Alcohol", meaning: "Alkol (dezenfektan)", pronunciation: "al-ko-ol", example: "Necesito alcohol para desinfectar.", exampleTranslation: "Dezenfeksiyon için alkol lazım." },
        { word: "Algodón", meaning: "Pamuk", pronunciation: "al-go-don", example: "Necesito algodón.", exampleTranslation: "Pamuğa ihtiyacım var." }
    ]
};

// ===== ÜNİTE 30: MESLEKLER 2 =====
const unit30Vocab: UnitVocabulary = {
    unitId: 30, title: "İleri Meslekler",
    words: [
        { word: "Contador", meaning: "Muhasebeci", pronunciation: "kon-ta-dor", example: "Soy contador.", exampleTranslation: "Muhasebeciyim." },
        { word: "Diseñador", meaning: "Tasarımcı", pronunciation: "di-se-nya-dor", example: "Es diseñador gráfico.", exampleTranslation: "Grafik tasarımcı." },
        { word: "Periodista", meaning: "Gazeteci", pronunciation: "pe-rio-dis-ta", example: "Es periodista de TV.", exampleTranslation: "TV gazetecisi." },
        { word: "Programador", meaning: "Programcı", pronunciation: "pro-gra-ma-dor", example: "Soy programador web.", exampleTranslation: "Web programcısıyım." },
        { word: "Empresario", meaning: "İş adamı", pronunciation: "em-pre-sa-rio", example: "Es un empresario exitoso.", exampleTranslation: "Başarılı bir iş adamı." },
        { word: "Secretario", meaning: "Sekreter", pronunciation: "se-kre-ta-rio", example: "La secretaria está ocupada.", exampleTranslation: "Sekreter meşgul." },
        { word: "Piloto", meaning: "Pilot", pronunciation: "pi-lo-to", example: "Es piloto de avión.", exampleTranslation: "Uçak pilotu." },
        { word: "Chef", meaning: "Şef aşçı", pronunciation: "şef", example: "El chef prepara el plato.", exampleTranslation: "Şef yemeği hazırlıyor." },
        { word: "Vendedor", meaning: "Satıcı", pronunciation: "ven-de-dor", example: "Es vendedor de coches.", exampleTranslation: "Araba satıcısı." },
        { word: "Electricista", meaning: "Elektrikçi", pronunciation: "e-lek-tri-sis-ta", example: "Llamé al electricista.", exampleTranslation: "Elektrikçiyi aradım." },
        // YENİ +5 KELİME
        { word: "Fontanero", meaning: "Tesisatci", pronunciation: "fon-ta-ne-ro", example: "Necesito un fontanero.", exampleTranslation: "Tesisatcıya ihtiyacım var." },
        { word: "Arquitecto", meaning: "Mimar", pronunciation: "ar-ki-tek-to", example: "Mi hermano es arquitecto.", exampleTranslation: "Kardeşim mimar." },
        { word: "Psicólogo", meaning: "Psikolog", pronunciation: "psi-ko-lo-go", example: "Consulto a un psicólogo.", exampleTranslation: "Bir psikoloğa danışıyorum." },
        { word: "Científico", meaning: "Bilim insanı", pronunciation: "sien-ti-fi-ko", example: "Es un científico famoso.", exampleTranslation: "Ünlü bir bilim insanı." },
        { word: "Freelance", meaning: "Serbest çalışan", pronunciation: "fri-lans", example: "Trabajo como freelance.", exampleTranslation: "Serbest çalışıyorum." }
    ]
};

// ===== ÜNİTE 31: İŞ GÖRÜŞMESİ =====
const unit31Vocab: UnitVocabulary = {
    unitId: 31, title: "İş Görüşmesi Kelimeleri",
    words: [
        { word: "Currículum", meaning: "CV/Özgeçmiş", pronunciation: "ku-rri-ku-lum", example: "Envié mi currículum.", exampleTranslation: "CV'mi gönderdim." },
        { word: "Entrevista", meaning: "Mülakat", pronunciation: "en-tre-vis-ta", example: "Tengo una entrevista mañana.", exampleTranslation: "Yarın mülakatım var." },
        { word: "Experiencia", meaning: "Deneyim", pronunciation: "eks-pe-rien-sia", example: "Tengo experiencia en ventas.", exampleTranslation: "Satış deneyimim var." },
        { word: "Contrato", meaning: "Sözleşme", pronunciation: "kon-tra-to", example: "Firmé el contrato.", exampleTranslation: "Sözleşmeyi imzaladım." },
        { word: "Salario", meaning: "Maaş", pronunciation: "sa-la-rio", example: "¿Cuál es el salario?", exampleTranslation: "Maaş ne kadar?" },
        { word: "Candidato", meaning: "Aday", pronunciation: "kan-di-da-to", example: "Hay muchos candidatos.", exampleTranslation: "Çok aday var." },
        { word: "Puesto", meaning: "Pozisyon", pronunciation: "pues-to", example: "Solicito el puesto de gerente.", exampleTranslation: "Müdür pozisyonuna başvuruyorum." },
        { word: "Cualificación", meaning: "Nitelik", pronunciation: "kua-li-fi-ka-sion", example: "¿Qué cualificaciones tiene?", exampleTranslation: "Nitelikleriniz neler?" },
        { word: "Jefe", meaning: "Patron/Şef", pronunciation: "he-fe", example: "Mi jefe es muy amable.", exampleTranslation: "Patronum çok iyi." },
        { word: "Empresa", meaning: "Şirket", pronunciation: "em-pre-sa", example: "Es una gran empresa.", exampleTranslation: "Büyük bir şirket." },
        // YENİ +5 KELİME
        { word: "Horario", meaning: "Çalışma saatleri", pronunciation: "o-ra-rio", example: "¿Cuál es el horario?", exampleTranslation: "Çalışma saatleri ne?" },
        { word: "Vacante", meaning: "Açık pozisyon", pronunciation: "va-kan-te", example: "Hay una vacante.", exampleTranslation: "Açık pozisyon var." },
        { word: "Formación", meaning: "Eğitim", pronunciation: "for-ma-sion", example: "Mi formación es en informática.", exampleTranslation: "Eğitimim bilişim alanında." },
        { word: "Referencias", meaning: "Referanslar", pronunciation: "re-fe-ren-sias", example: "Tengo buenas referencias.", exampleTranslation: "İyi referanslarım var." },
        { word: "Disponibilidad", meaning: "Müsaitlik", pronunciation: "dis-po-ni-bi-li-dad", example: "Tengo disponibilidad inmediata.", exampleTranslation: "Hemen başlayabilirim." }
    ]
};

// ===== ÜNİTE 32: TELEFONDA =====
const unit32Vocab: UnitVocabulary = {
    unitId: 32, title: "Telefon Kelimeleri",
    words: [
        { word: "Llamada", meaning: "Arama", pronunciation: "ya-ma-da", example: "Recibí una llamada.", exampleTranslation: "Bir arama aldım." },
        { word: "Mensaje", meaning: "Mesaj", pronunciation: "men-sa-he", example: "Te envié un mensaje.", exampleTranslation: "Sana mesaj gönderdim." },
        { word: "Contestar", meaning: "Cevaplamak", pronunciation: "kon-tes-tar", example: "No contestó el teléfono.", exampleTranslation: "Telefona cevap vermedi." },
        { word: "Colgar", meaning: "Kapatmak (telefon)", pronunciation: "kol-gar", example: "No cuelgue, por favor.", exampleTranslation: "Lütfen kapatmayın." },
        { word: "Marcar", meaning: "Aramak (numara)", pronunciation: "mar-kar", example: "Marque este número.", exampleTranslation: "Bu numarayı arayın." },
        { word: "Ocupado", meaning: "Meşgul", pronunciation: "o-ku-pa-do", example: "La línea está ocupada.", exampleTranslation: "Hat meşgul." },
        { word: "Buzón de voz", meaning: "Sesli mesaj", pronunciation: "bu-son de vos", example: "Dejé un mensaje en el buzón.", exampleTranslation: "Sesli mesaj bıraktım." },
        { word: "Extensión", meaning: "Dahili numara", pronunciation: "eks-ten-sion", example: "La extensión es 123.", exampleTranslation: "Dahili 123." },
        { word: "Espere un momento", meaning: "Bir an bekleyin", pronunciation: "es-pe-re un mo-men-to", example: "Espere un momento, por favor.", exampleTranslation: "Bir dakika lütfen." },
        { word: "Diga/Dígame", meaning: "Buyurun/Efendim", pronunciation: "di-ga/di-ga-me", example: "¿Dígame?", exampleTranslation: "Efendim?" },
        // YENİ +5 KELİME
        { word: "Volver a llamar", meaning: "Tekrar aramak", pronunciation: "vol-ver a ya-mar", example: "Voy a volver a llamar.", exampleTranslation: "Tekrar aracağım." },
        { word: "Equivocado", meaning: "Yanlış numara", pronunciation: "e-ki-vo-ka-do", example: "Se ha equivocado.", exampleTranslation: "Yanlış numara." },
        { word: "Carga", meaning: "Şarj", pronunciation: "kar-ga", example: "No tengo carga.", exampleTranslation: "Şarjım yok." },
        { word: "Cobertura", meaning: "Çekim gücü", pronunciation: "ko-ber-tu-ra", example: "No hay cobertura.", exampleTranslation: "Çekim gücü yok." },
        { word: "De parte de", meaning: "Tarafından", pronunciation: "de par-te de", example: "¿De parte de quién?", exampleTranslation: "Kim aradi?" }
    ]
};

// ===== ÜNİTE 33: E-POSTA YAZMA =====
const unit33Vocab: UnitVocabulary = {
    unitId: 33, title: "E-posta Kelimeleri",
    words: [
        { word: "Correo electrónico", meaning: "E-posta", pronunciation: "ko-rre-o e-lek-tro-ni-ko", example: "Envié un correo electrónico.", exampleTranslation: "E-posta gönderdim." },
        { word: "Asunto", meaning: "Konu", pronunciation: "a-sun-to", example: "¿Cuál es el asunto?", exampleTranslation: "Konu ne?" },
        { word: "Adjunto", meaning: "Ek dosya", pronunciation: "ad-hun-to", example: "Le envío un archivo adjunto.", exampleTranslation: "Ek dosya gönderiyorum." },
        { word: "Destinatario", meaning: "Alıcı", pronunciation: "des-ti-na-ta-rio", example: "El destinatario es correcto.", exampleTranslation: "Alıcı doğru." },
        { word: "Remitente", meaning: "Gönderen", pronunciation: "re-mi-ten-te", example: "¿Quién es el remitente?", exampleTranslation: "Gönderen kim?" },
        { word: "Responder", meaning: "Cevaplamak", pronunciation: "res-pon-der", example: "Voy a responder mañana.", exampleTranslation: "Yarın cevap vereceğim." },
        { word: "Reenviar", meaning: "İletmek", pronunciation: "re-en-viar", example: "Voy a reenviar este correo.", exampleTranslation: "Bu emaili ileteceğim." },
        { word: "Bandeja de entrada", meaning: "Gelen kutusu", pronunciation: "ban-de-ha de en-tra-da", example: "Revisa tu bandeja de entrada.", exampleTranslation: "Gelen kutunu kontrol et." },
        { word: "Atentamente", meaning: "Saygılarımla", pronunciation: "a-ten-ta-men-te", example: "Firma: Atentamente, Juan.", exampleTranslation: "İmza: Saygılarımla, Juan." },
        { word: "Estimado/a", meaning: "Sayın", pronunciation: "es-ti-ma-do", example: "Estimado Sr. García.", exampleTranslation: "Sayın Bay García." },
        // YENİ +5 KELİME
        { word: "Firma", meaning: "İmza", pronunciation: "fir-ma", example: "Necesito su firma.", exampleTranslation: "İmzanıza ihtiyacım var." },
        { word: "Copia", meaning: "Kopya", pronunciation: "ko-pia", example: "Envíe una copia.", exampleTranslation: "Kopya gönderin." },
        { word: "Urgente", meaning: "Acil", pronunciation: "ur-hen-te", example: "Es urgente.", exampleTranslation: "Acil." },
        { word: "Borrador", meaning: "Taslak", pronunciation: "bo-rra-dor", example: "Guardé el borrador.", exampleTranslation: "Taslağı kaydettim." },
        { word: "Spam", meaning: "İstenmeyen posta", pronunciation: "spam", example: "Este correo es spam.", exampleTranslation: "Bu mail spam." }
    ]
};

// ===== ÜNİTE 34: DUYGULAR =====
const unit34Vocab: UnitVocabulary = {
    unitId: 34, title: "Duygu Kelimeleri",
    words: [
        { word: "Feliz", meaning: "Mutlu", pronunciation: "fe-lis", example: "Estoy muy feliz.", exampleTranslation: "Çok mutluyum." },
        { word: "Triste", meaning: "Üzgün", pronunciation: "tris-te", example: "Estoy triste hoy.", exampleTranslation: "Bugün üzgünüm." },
        { word: "Enfadado", meaning: "Kızgın", pronunciation: "en-fa-da-do", example: "Está enfadado conmigo.", exampleTranslation: "Bana kızgın." },
        { word: "Nervioso", meaning: "Gergin", pronunciation: "ner-vio-so", example: "Estoy nervioso por el examen.", exampleTranslation: "Sınav için gerginim." },
        { word: "Emocionado", meaning: "Heyecanlı", pronunciation: "e-mo-sio-na-do", example: "Estoy emocionado por el viaje.", exampleTranslation: "Seyahat için heyecanlıyım." },
        { word: "Cansado", meaning: "Yorgun", pronunciation: "kan-sa-do", example: "Estoy muy cansado.", exampleTranslation: "Çok yorgunum." },
        { word: "Aburrido", meaning: "Sıkılmış", pronunciation: "a-bu-rri-do", example: "Estoy aburrido.", exampleTranslation: "Sıkıldım." },
        { word: "Preocupado", meaning: "Endişeli", pronunciation: "pre-o-ku-pa-do", example: "Estoy preocupado por ti.", exampleTranslation: "Senin için endişeleniyorum." },
        { word: "Sorprendido", meaning: "Şaşırmış", pronunciation: "sor-pren-di-do", example: "Estoy sorprendido.", exampleTranslation: "Şaşırdım." },
        { word: "Orgulloso", meaning: "Gururlu", pronunciation: "or-gu-yo-so", example: "Estoy orgulloso de ti.", exampleTranslation: "Seninle gurur duyuyorum." },
        // YENİ +5 KELİME
        { word: "Aliviado", meaning: "Rahatlık hissetmek", pronunciation: "a-li-via-do", example: "Estoy aliviado.", exampleTranslation: "Rahatladım." },
        { word: "Frustrado", meaning: "Hayal kırıklığı", pronunciation: "frus-tra-do", example: "Me siento frustrado.", exampleTranslation: "Hayal kırıklığına uğradım." },
        { word: "Confundido", meaning: "Şaşkın", pronunciation: "kon-fun-di-do", example: "Estoy confundido.", exampleTranslation: "Şaşkınım." },
        { word: "Celoso", meaning: "Kıskanç", pronunciation: "se-lo-so", example: "Está celoso.", exampleTranslation: "Kıskanç." },
        { word: "Agradecido", meaning: "Minnettar", pronunciation: "a-gra-de-si-do", example: "Estoy muy agradecido.", exampleTranslation: "Çok minnettarım." }
    ]
};

// ===== ÜNİTE 35: KARAKTER ÖZELLİKLERİ =====
const unit35Vocab: UnitVocabulary = {
    unitId: 35, title: "Karakter Özellikleri",
    words: [
        { word: "Amable", meaning: "Nazik", pronunciation: "a-ma-ble", example: "Es muy amable.", exampleTranslation: "Çok nazik." },
        { word: "Simpático", meaning: "Sempatik", pronunciation: "sim-pa-ti-ko", example: "Es muy simpático.", exampleTranslation: "Çok sempatik." },
        { word: "Trabajador", meaning: "Çalışkan", pronunciation: "tra-ba-ha-dor", example: "Es muy trabajador.", exampleTranslation: "Çok çalışkan." },
        { word: "Perezoso", meaning: "Tembel", pronunciation: "pe-re-so-so", example: "Es un poco perezoso.", exampleTranslation: "Biraz tembel." },
        { word: "Generoso", meaning: "Cömert", pronunciation: "he-ne-ro-so", example: "Es muy generoso.", exampleTranslation: "Çok cömert." },
        { word: "Tacaño", meaning: "Cimri", pronunciation: "ta-ka-nyo", example: "Es muy tacaño.", exampleTranslation: "Çok cimri." },
        { word: "Honesto", meaning: "Dürüst", pronunciation: "o-nes-to", example: "Es muy honesto.", exampleTranslation: "Çok dürüst." },
        { word: "Mentiroso", meaning: "Yalancı", pronunciation: "men-ti-ro-so", example: "No seas mentiroso.", exampleTranslation: "Yalancı olma." },
        { word: "Paciente", meaning: "Sabırlı", pronunciation: "pa-sien-te", example: "Es muy paciente.", exampleTranslation: "Çok sabırlı." },
        { word: "Impaciente", meaning: "Sabırsız", pronunciation: "im-pa-sien-te", example: "Soy muy impaciente.", exampleTranslation: "Çok sabırsızım." },
        // YENİ +5 KELİME
        { word: "Inteligente", meaning: "Zeki", pronunciation: "in-te-li-hen-te", example: "Es muy inteligente.", exampleTranslation: "Çok zeki." },
        { word: "Divertido", meaning: "Eğlenceli", pronunciation: "di-ver-ti-do", example: "Es muy divertido.", exampleTranslation: "Çok eğlenceli." },
        { word: "Responsable", meaning: "Sorumluluk sahibi", pronunciation: "res-pon-sa-ble", example: "Es muy responsable.", exampleTranslation: "Çok sorumluluk sahibi." },
        { word: "Optimista", meaning: "İyimser", pronunciation: "op-ti-mis-ta", example: "Soy optimista.", exampleTranslation: "İyimserim." },
        { word: "Pesimista", meaning: "Kötümser", pronunciation: "pe-si-mis-ta", example: "No seas pesimista.", exampleTranslation: "Kötümser olma." }
    ]
};

// ===== ÜNİTE 36: SPOR VE FITNESS =====
const unit36Vocab: UnitVocabulary = {
    unitId: 36, title: "Spor Kelimeleri",
    words: [
        { word: "Gimnasio", meaning: "Spor salonu", pronunciation: "him-na-sio", example: "Voy al gimnasio.", exampleTranslation: "Spor salonuna gidiyorum." },
        { word: "Ejercicio", meaning: "Egzersiz", pronunciation: "e-her-si-sio", example: "Hago ejercicio cada día.", exampleTranslation: "Her gün egzersiz yapıyorum." },
        { word: "Entrenamiento", meaning: "Antrenman", pronunciation: "en-tre-na-mien-to", example: "El entrenamiento fue duro.", exampleTranslation: "Antrenman zordu." },
        { word: "Correr", meaning: "Koşmak", pronunciation: "ko-rrer", example: "Me gusta correr.", exampleTranslation: "Koşmayı seviyorum." },
        { word: "Nadar", meaning: "Yüzmek", pronunciation: "na-dar", example: "Nado en la piscina.", exampleTranslation: "Havuzda yüzüyorum." },
        { word: "Levantar pesas", meaning: "Ağırlık kaldırmak", pronunciation: "le-van-tar pe-sas", example: "Levanto pesas.", exampleTranslation: "Ağırlık kaldırıyorum." },
        { word: "Estirar", meaning: "Germek/Esnemek", pronunciation: "es-ti-rar", example: "Es importante estirar.", exampleTranslation: "Esnemek önemli." },
        { word: "Partido", meaning: "Maç", pronunciation: "par-ti-do", example: "Hay un partido hoy.", exampleTranslation: "Bugün maç var." },
        { word: "Equipo", meaning: "Takım", pronunciation: "e-ki-po", example: "Mi equipo ganó.", exampleTranslation: "Takımım kazandı." },
        { word: "Atleta", meaning: "Atlet/Sporcu", pronunciation: "at-le-ta", example: "Es un buen atleta.", exampleTranslation: "İyi bir sporcu." },
        // YENİ +5 KELİME
        { word: "Campeon", meaning: "Şampiyon", pronunciation: "kam-pe-on", example: "El equipo es campeon.", exampleTranslation: "Takım şampiyon." },
        { word: "Marcador", meaning: "Skor", pronunciation: "mar-ka-dor", example: "Cual es el marcador?", exampleTranslation: "Skor ne?" },
        { word: "Arbitro", meaning: "Hakem", pronunciation: "ar-bi-tro", example: "El arbitro decidio.", exampleTranslation: "Hakem karar verdi." },
        { word: "Lesionarse", meaning: "Sakatlanmak", pronunciation: "le-sio-nar-se", example: "Se lesiono la pierna.", exampleTranslation: "Bacağını sakatlandı." },
        { word: "Calentar", meaning: "Isınmak", pronunciation: "ka-len-tar", example: "Hay que calentar antes.", exampleTranslation: "Önce ısınmak gerekiyor." }
    ]
};

// ===== ÜNİTE 37: MÜZİK VE SANAT =====
const unit37Vocab: UnitVocabulary = {
    unitId: 37, title: "Müzik ve Sanat Kelimeleri",
    words: [
        { word: "Concierto", meaning: "Konser", pronunciation: "kon-sier-to", example: "Fui a un concierto.", exampleTranslation: "Konsere gittim." },
        { word: "Canción", meaning: "Şarkı", pronunciation: "kan-sion", example: "Es mi canción favorita.", exampleTranslation: "En sevdiğim şarkı." },
        { word: "Guitarra", meaning: "Gitar", pronunciation: "gi-ta-rra", example: "Toco la guitarra.", exampleTranslation: "Gitar çalıyorum." },
        { word: "Piano", meaning: "Piyano", pronunciation: "pia-no", example: "Aprendo piano.", exampleTranslation: "Piyano öğreniyorum." },
        { word: "Batería", meaning: "Davul", pronunciation: "ba-te-ri-a", example: "Toca la batería.", exampleTranslation: "Davul çalıyor." },
        { word: "Pintura", meaning: "Resim/Boyama", pronunciation: "pin-tu-ra", example: "Me gusta la pintura.", exampleTranslation: "Resmi severim." },
        { word: "Escultura", meaning: "Heykel", pronunciation: "es-kul-tu-ra", example: "Es una escultura de mármol.", exampleTranslation: "Mermer heykel." },
        { word: "Museo", meaning: "Müze", pronunciation: "mu-se-o", example: "Visité el museo.", exampleTranslation: "Müzeyi ziyaret ettim." },
        { word: "Exposición", meaning: "Sergi", pronunciation: "eks-po-si-sion", example: "Hay una exposición de arte.", exampleTranslation: "Sanat sergisi var." },
        { word: "Artista", meaning: "Sanatci", pronunciation: "ar-tis-ta", example: "Es un artista famoso.", exampleTranslation: "Unlu bir sanatci." },
        // YENI +5 KELIME
        { word: "Violín", meaning: "Keman", pronunciation: "vi-o-lin", example: "Toca el violín.", exampleTranslation: "Keman caliyor." },
        { word: "Flauta", meaning: "Flüt", pronunciation: "fla-u-ta", example: "Aprendo flauta.", exampleTranslation: "Flüt ogreniyorum." },
        { word: "Galería", meaning: "Galeri", pronunciation: "ga-le-ri-a", example: "Fui a una galería.", exampleTranslation: "Galeriye gittim." },
        { word: "Obra de arte", meaning: "Sanat eseri", pronunciation: "o-bra de ar-te", example: "Es una obra de arte.", exampleTranslation: "Sanat eseri." },
        { word: "Letra", meaning: "Sarkı sözü", pronunciation: "le-tra", example: "Me gusta la letra.", exampleTranslation: "Sarkı sözünü seviyorum." }
    ]
};

// ===== ÜNİTE 38: SİNEMA VE DİZİ =====
const unit38Vocab: UnitVocabulary = {
    unitId: 38, title: "Sinema Kelimeleri",
    words: [
        { word: "Película", meaning: "Film", pronunciation: "pe-li-ku-la", example: "Vi una película.", exampleTranslation: "Film izledim." },
        { word: "Actor/Actriz", meaning: "Aktör/Aktris", pronunciation: "ak-tor/ak-tris", example: "El actor es famoso.", exampleTranslation: "Aktör ünlü." },
        { word: "Director", meaning: "Yönetmen", pronunciation: "di-rek-tor", example: "El director es español.", exampleTranslation: "Yönetmen İspanyol." },
        { word: "Comedia", meaning: "Komedi", pronunciation: "ko-me-dia", example: "Es una comedia divertida.", exampleTranslation: "Eğlenceli bir komedi." },
        { word: "Drama", meaning: "Drama", pronunciation: "dra-ma", example: "Es un drama intenso.", exampleTranslation: "Yoğun bir drama." },
        { word: "Terror", meaning: "Korku", pronunciation: "te-rror", example: "No me gustan las películas de terror.", exampleTranslation: "Korku filmi sevmem." },
        { word: "Documental", meaning: "Belgesel", pronunciation: "do-ku-men-tal", example: "Vi un documental interesante.", exampleTranslation: "İlginç bir belgesel izledim." },
        { word: "Serie", meaning: "Dizi", pronunciation: "se-rie", example: "Veo una serie nueva.", exampleTranslation: "Yeni bir dizi izliyorum." },
        { word: "Temporada", meaning: "Sezon", pronunciation: "tem-po-ra-da", example: "Es la segunda temporada.", exampleTranslation: "İkinci sezon." },
        { word: "Episodio", meaning: "Bölüm", pronunciation: "e-pi-so-dio", example: "Es el ultimo episodio.", exampleTranslation: "Son bölüm." },
        // YENI +5 KELIME
        { word: "Palomitas", meaning: "Patlamis mısır", pronunciation: "pa-lo-mi-tas", example: "Quiero palomitas.", exampleTranslation: "Patlamis mısır istiyorum." },
        { word: "Taquilla", meaning: "Gise", pronunciation: "ta-ki-ya", example: "Compré las entradas en la taquilla.", exampleTranslation: "Biletleri giseden aldım." },
        { word: "Estreno", meaning: "Prömiyər", pronunciation: "es-tre-no", example: "Hoy es el estreno.", exampleTranslation: "Bugün prömiyeri." },
        { word: "Subtítulos", meaning: "Altyazı", pronunciation: "sub-ti-tu-los", example: "La película tiene subtítulos.", exampleTranslation: "Filmin altyazısı var." },
        { word: "Doblada", meaning: "Dublajlı", pronunciation: "do-bla-da", example: "Prefiero películas dobladas.", exampleTranslation: "Dublajlı film tercih ederim." }
    ]
};

// ===== ÜNİTE 39: TEKNOLOJİ =====
const unit39Vocab: UnitVocabulary = {
    unitId: 39, title: "Teknoloji Kelimeleri",
    words: [
        { word: "Ordenador", meaning: "Bilgisayar", pronunciation: "or-de-na-dor", example: "Mi ordenador es nuevo.", exampleTranslation: "Bilgisayarım yeni." },
        { word: "Portátil", meaning: "Dizüstü", pronunciation: "por-ta-til", example: "Uso un portátil.", exampleTranslation: "Dizüstü kullanıyorum." },
        { word: "Teclado", meaning: "Klavye", pronunciation: "te-kla-do", example: "El teclado no funciona.", exampleTranslation: "Klavye çalışmıyor." },
        { word: "Ratón", meaning: "Mouse", pronunciation: "ra-ton", example: "Necesito un ratón nuevo.", exampleTranslation: "Yeni mouse'a ihtiyacım var." },
        { word: "Pantalla", meaning: "Ekran", pronunciation: "pan-ta-ya", example: "La pantalla es grande.", exampleTranslation: "Ekran büyük." },
        { word: "Contraseña", meaning: "Şifre", pronunciation: "kon-tra-se-nya", example: "Olvidé mi contraseña.", exampleTranslation: "Şifremi unuttum." },
        { word: "Descargar", meaning: "İndirmek", pronunciation: "des-kar-gar", example: "Voy a descargar la app.", exampleTranslation: "Uygulamayı indireceğim." },
        { word: "Subir", meaning: "Yüklemek", pronunciation: "su-bir", example: "Voy a subir las fotos.", exampleTranslation: "Fotoğrafları yükleyeceğim." },
        { word: "Actualizar", meaning: "Güncellemek", pronunciation: "ak-tua-li-sar", example: "Necesito actualizar el sistema.", exampleTranslation: "Sistemi güncellemem gerekiyor." },
        { word: "Reiniciar", meaning: "Yeniden baslatmak", pronunciation: "re-i-ni-siar", example: "Reinicia el ordenador.", exampleTranslation: "Bilgisayarı yeniden baslat." },
        // YENI +5 KELIME
        { word: "Almacenamiento", meaning: "Depolama", pronunciation: "al-ma-se-na-mien-to", example: "No tengo almacenamiento.", exampleTranslation: "Depolama alanım yok." },
        { word: "Nube", meaning: "Bulut", pronunciation: "nu-be", example: "Lo guardé en la nube.", exampleTranslation: "Buluta kaydettim." },
        { word: "USB", meaning: "USB bellek", pronunciation: "u-ese-be", example: "Lo copié al USB.", exampleTranslation: "USB'ye kopyaladım." },
        { word: "Cargador", meaning: "Sarj cihazı", pronunciation: "kar-ga-dor", example: "Necesito un cargador.", exampleTranslation: "Sarj cihazına ihtiyacım var." },
        { word: "Auriculares", meaning: "Kulaklık", pronunciation: "au-ri-ku-la-res", example: "Uso auriculares.", exampleTranslation: "Kulaklık kullanıyorum." }
    ]
};

// ===== ÜNİTE 40: SOSYAL MEDYA =====
const unit40Vocab: UnitVocabulary = {
    unitId: 40, title: "Sosyal Medya Kelimeleri",
    words: [
        { word: "Red social", meaning: "Sosyal ağ", pronunciation: "red so-sial", example: "Uso varias redes sociales.", exampleTranslation: "Birçok sosyal ağ kullanıyorum." },
        { word: "Perfil", meaning: "Profil", pronunciation: "per-fil", example: "Actualicé mi perfil.", exampleTranslation: "Profilimi güncelledim." },
        { word: "Seguidor", meaning: "Takipçi", pronunciation: "se-gi-dor", example: "Tengo muchos seguidores.", exampleTranslation: "Çok takipçim var." },
        { word: "Seguir", meaning: "Takip etmek", pronunciation: "se-gir", example: "Voy a seguirte.", exampleTranslation: "Seni takip edeceğim." },
        { word: "Publicar", meaning: "Yayınlamak/Paylaşmak", pronunciation: "pu-bli-kar", example: "Voy a publicar una foto.", exampleTranslation: "Fotoğraf paylaşacağım." },
        { word: "Me gusta", meaning: "Beğeni", pronunciation: "me gus-ta", example: "Tiene muchos me gusta.", exampleTranslation: "Çok beğenisi var." },
        { word: "Comentario", meaning: "Yorum", pronunciation: "ko-men-ta-rio", example: "Dejé un comentario.", exampleTranslation: "Yorum bıraktım." },
        { word: "Compartir", meaning: "Paylaşmak", pronunciation: "kom-par-tir", example: "Voy a compartir esto.", exampleTranslation: "Bunu paylaşacağım." },
        { word: "Etiquetar", meaning: "Etiketlemek", pronunciation: "e-ti-ke-tar", example: "Te voy a etiquetar.", exampleTranslation: "Seni etiketleyeceğim." },
        { word: "Hashtag", meaning: "Hashtag", pronunciation: "hash-tag", example: "Usa este hashtag.", exampleTranslation: "Bu hashtag'i kullan." },
        // YENİ +5 KELİME
        { word: "Viral", meaning: "Viral", pronunciation: "vi-ral", example: "El vídeo se hizo viral.", exampleTranslation: "Video viral oldu." },
        { word: "Historia", meaning: "Hikaye (Story)", pronunciation: "is-to-ria", example: "Subí una historia.", exampleTranslation: "Hikaye paylaştım." },
        { word: "En directo", meaning: "Canlı yayın", pronunciation: "en di-rek-to", example: "Estoy en directo.", exampleTranslation: "Canlı yayındayım." },
        { word: "Privacidad", meaning: "Gizlilik", pronunciation: "pri-va-si-dad", example: "Cuida tu privacidad.", exampleTranslation: "Gizliliğini koru." },
        { word: "Notificación", meaning: "Bildirim", pronunciation: "no-ti-fi-ka-sion", example: "Recibí una notificación.", exampleTranslation: "Bildirim aldım." }
    ]
};

// ===== YENİ A2 ÜNİTELERİ (46-50) =====

// ===== ÜNİTE 46: EV VE TAŞINMA =====
const unit46Vocab: UnitVocabulary = {
    unitId: 46, title: "Ev ve Taşınma Kelimeleri",
    words: [
        { word: "Alquiler", meaning: "Kira", pronunciation: "al-ki-ler", example: "El alquiler es 500 euros.", exampleTranslation: "Kira 500 euro." },
        { word: "Piso", meaning: "Daire", pronunciation: "pi-so", example: "Busco un piso.", exampleTranslation: "Daire arıyorum." },
        { word: "Propietario", meaning: "Ev sahibi", pronunciation: "pro-pie-ta-rio", example: "El propietario es amable.", exampleTranslation: "Ev sahibi nazik." },
        { word: "Inquilino", meaning: "Kiracı", pronunciation: "in-ki-li-no", example: "Soy inquilino.", exampleTranslation: "Kiracıyım." },
        { word: "Mudanza", meaning: "Taşınma", pronunciation: "mu-dan-sa", example: "La mudanza es mañana.", exampleTranslation: "Taşınma yarın." },
        { word: "Amueblado", meaning: "Eşyalı", pronunciation: "a-mue-bla-do", example: "El piso está amueblado.", exampleTranslation: "Daire eşyalı." },
        { word: "Fianza", meaning: "Depozito", pronunciation: "fian-sa", example: "La fianza es un mes.", exampleTranslation: "Depozito bir aylık." },
        { word: "Contrato de alquiler", meaning: "Kira sözleşmesi", pronunciation: "kon-tra-to de al-ki-ler", example: "Firmé el contrato.", exampleTranslation: "Sözleşmeyi imzaladım." },
        { word: "Gastos incluidos", meaning: "Faturalar dahil", pronunciation: "gas-tos in-klu-i-dos", example: "Gastos incluidos.", exampleTranslation: "Faturalar dahil." },
        { word: "Vecino", meaning: "Komşu", pronunciation: "ve-si-no", example: "Mi vecino es simpático.", exampleTranslation: "Komşum sempatik." },
        // YENİ +5 KELİME
        { word: "Reformar", meaning: "Tamirat yapmak", pronunciation: "re-for-mar", example: "Voy a reformar el baño.", exampleTranslation: "Banyoyu yenileyeceğim." },
        { word: "Ascensor", meaning: "Asansör", pronunciation: "as-sen-sor", example: "El ascensor no funciona.", exampleTranslation: "Asansör çalışmıyor." },
        { word: "Portero", meaning: "Kapıcı", pronunciation: "por-te-ro", example: "El portero es muy amable.", exampleTranslation: "Kapıcı çok nazik." },
        { word: "Urbanización", meaning: "Site", pronunciation: "ur-ba-ni-sa-sion", example: "Vivo en una urbanización.", exampleTranslation: "Bir sitede yaşıyorum." },
        { word: "Calefacción", meaning: "Kalorifer", pronunciation: "ka-le-fak-sion", example: "La calefacción está incluida.", exampleTranslation: "Kalorifer dahil." }
    ]
};

// ===== ÜNİTE 47: ÇEVRE VE DOĞA =====
const unit47Vocab: UnitVocabulary = {
    unitId: 47, title: "Çevre ve Doğa Kelimeleri",
    words: [
        { word: "Medio ambiente", meaning: "Çevre", pronunciation: "me-dio am-bien-te", example: "Protege el medio ambiente.", exampleTranslation: "Çevreyi koru." },
        { word: "Reciclar", meaning: "Geri dönüştürmek", pronunciation: "re-si-klar", example: "Hay que reciclar.", exampleTranslation: "Geri dönüştürmek gerekiyor." },
        { word: "Contaminación", meaning: "Kirlilik", pronunciation: "kon-ta-mi-na-sion", example: "La contaminación es un problema.", exampleTranslation: "Kirlilik bir sorun." },
        { word: "Bosque", meaning: "Orman", pronunciation: "bos-ke", example: "El bosque es grande.", exampleTranslation: "Orman büyük." },
        { word: "Montaña", meaning: "Dağ", pronunciation: "mon-ta-nya", example: "Subí la montaña.", exampleTranslation: "Dağa tırmandım." },
        { word: "Río", meaning: "Nehir", pronunciation: "ri-o", example: "El río es largo.", exampleTranslation: "Nehir uzun." },
        { word: "Playa", meaning: "Plaj", pronunciation: "pla-ya", example: "Fui a la playa.", exampleTranslation: "Plaja gittim." },
        { word: "Naturaleza", meaning: "Doğa", pronunciation: "na-tu-ra-le-sa", example: "Me gusta la naturaleza.", exampleTranslation: "Doğayı severim." },
        { word: "Energía solar", meaning: "Güneş enerjisi", pronunciation: "e-ner-hi-a so-lar", example: "Usamos energía solar.", exampleTranslation: "Güneş enerjisi kullanıyoruz." },
        { word: "Basura", meaning: "Çöp", pronunciation: "ba-su-ra", example: "Tira la basura.", exampleTranslation: "Çöpü at." },
        // YENİ +5 KELİME
        { word: "Contenedor", meaning: "Çöp konteyneri", pronunciation: "kon-te-ne-dor", example: "Pon la basura en el contenedor.", exampleTranslation: "Çöpü konteynere koy." },
        { word: "Sostenible", meaning: "Sürdürülebilir", pronunciation: "sos-te-ni-ble", example: "Compramos productos sostenibles.", exampleTranslation: "Sürdürülebilir ürünler alıyoruz." },
        { word: "Huella de carbono", meaning: "Karbon ayak izi", pronunciation: "ue-ya de kar-bo-no", example: "Quiero reducir mi huella de carbono.", exampleTranslation: "Karbon ayak izimi azaltmak istiyorum." },
        { word: "Cambio climático", meaning: "İklim değişikliği", pronunciation: "kam-bio kli-ma-ti-ko", example: "El cambio climático es grave.", exampleTranslation: "İklim değişikliği ciddi." },
        { word: "Fauna", meaning: "Fauna (Hayvan türleri)", pronunciation: "fau-na", example: "La fauna es muy variada.", exampleTranslation: "Fauna çok çeşitli." }
    ]
};

// ===== ÜNİTE 48: HABERLER =====
const unit48Vocab: UnitVocabulary = {
    unitId: 48, title: "Haber Kelimeleri",
    words: [
        { word: "Noticias", meaning: "Haberler", pronunciation: "no-ti-sias", example: "Leo las noticias.", exampleTranslation: "Haberleri okuyorum." },
        { word: "Periódico", meaning: "Gazete", pronunciation: "pe-rio-di-ko", example: "Compro el periódico.", exampleTranslation: "Gazete alıyorum." },
        { word: "Revista", meaning: "Dergi", pronunciation: "re-vis-ta", example: "Leo una revista.", exampleTranslation: "Dergi okuyorum." },
        { word: "Artículo", meaning: "Makale", pronunciation: "ar-ti-ku-lo", example: "Escribí un artículo.", exampleTranslation: "Makale yazdım." },
        { word: "Titular", meaning: "Başlık", pronunciation: "ti-tu-lar", example: "El titular es impactante.", exampleTranslation: "Başlık çarpıcı." },
        { word: "Reportaje", meaning: "Röportaj", pronunciation: "re-por-ta-he", example: "Vi un reportaje.", exampleTranslation: "Bir röportaj izledim." },
        { word: "Corresponsal", meaning: "Muhabir", pronunciation: "ko-rres-pon-sal", example: "El corresponsal está en el extranjero.", exampleTranslation: "Muhabir yurt dışında." },
        { word: "Suceso", meaning: "Olay", pronunciation: "su-se-so", example: "Fue un suceso importante.", exampleTranslation: "Önemli bir olaydı." },
        { word: "Actualidad", meaning: "Güncel", pronunciation: "ak-tua-li-dad", example: "Temas de actualidad.", exampleTranslation: "Güncel konular." },
        { word: "Opinión", meaning: "Görüş/Fikir", pronunciation: "o-pi-nion", example: "Mi opinión es diferente.", exampleTranslation: "Görüşüm farklı." },
        // YENİ +5 KELİME
        { word: "Última hora", meaning: "Son dakika", pronunciation: "ul-ti-ma o-ra", example: "Noticias de última hora.", exampleTranslation: "Son dakika haberleri." },
        { word: "Rueda de prensa", meaning: "Basın toplantısı", pronunciation: "rue-da de pren-sa", example: "Hubo una rueda de prensa.", exampleTranslation: "Basın toplantısı yapıldı." },
        { word: "Portada", meaning: "Kapak/Manşet", pronunciation: "por-ta-da", example: "Es noticia de portada.", exampleTranslation: "Manşet haberi." },
        { word: "Fuente", meaning: "Kaynak", pronunciation: "fuen-te", example: "La fuente es fiable.", exampleTranslation: "Kaynak güvenilir." },
        { word: "Locutor", meaning: "Spiker", pronunciation: "lo-ku-tor", example: "El locutor anunció la noticia.", exampleTranslation: "Spiker haberi duyurdu." }
    ]
};

// ===== ÜNİTE 49: KÜLTÜR VE GELENEKLER =====
const unit49Vocab: UnitVocabulary = {
    unitId: 49, title: "Kültür Kelimeleri",
    words: [
        { word: "Tradición", meaning: "Gelenek", pronunciation: "tra-di-sion", example: "Es una tradición española.", exampleTranslation: "İspanyol geleneği." },
        { word: "Fiesta", meaning: "Kutlama/Festival", pronunciation: "fies-ta", example: "La fiesta fue genial.", exampleTranslation: "Festival harika idi." },
        { word: "Costumbre", meaning: "Adet", pronunciation: "kos-tum-bre", example: "Es una costumbre local.", exampleTranslation: "Yerel bir adet." },
        { word: "Celebración", meaning: "Kutlama", pronunciation: "se-le-bra-sion", example: "La celebración duró todo el día.", exampleTranslation: "Kutlama tüm gün sürdü." },
        { word: "Navidad", meaning: "Noel", pronunciation: "na-vi-dad", example: "Celebramos la Navidad.", exampleTranslation: "Noel kutluyoruz." },
        { word: "Semana Santa", meaning: "Paskalya haftası", pronunciation: "se-ma-na san-ta", example: "En Semana Santa hay procesiones.", exampleTranslation: "Paskalya'da törenler var." },
        { word: "Baile", meaning: "Dans", pronunciation: "bai-le", example: "El baile flamenco es famoso.", exampleTranslation: "Flamenko dansı ünlü." },
        { word: "Gastronomía", meaning: "Mutfak kültürü", pronunciation: "gas-tro-no-mi-a", example: "La gastronomía española es variada.", exampleTranslation: "İspanyol mutfağı çeşitli." },
        { word: "Folklore", meaning: "Folklor", pronunciation: "fol-klo-re", example: "El folklore es importante.", exampleTranslation: "Folklor önemli." },
        { word: "Patrimonio", meaning: "Miras", pronunciation: "pa-tri-mo-nio", example: "Es patrimonio cultural.", exampleTranslation: "Kültürel miras." },
        // YENİ +5 KELİME
        { word: "Procesión", meaning: "Tören alayı", pronunciation: "pro-se-sion", example: "La procesión fue impresionante.", exampleTranslation: "Tören alayı etkileyiciydi." },
        { word: "Traje regional", meaning: "Yöresel giysi", pronunciation: "tra-he re-hio-nal", example: "Llevan trajes regionales.", exampleTranslation: "Yöresel giysiler giyiyorlar." },
        { word: "Feria", meaning: "Fuar/Panayır", pronunciation: "fe-ria", example: "Fui a la feria del pueblo.", exampleTranslation: "Köy panayırına gittim." },
        { word: "Carnaval", meaning: "Karnaval", pronunciation: "kar-na-val", example: "El carnaval es muy divertido.", exampleTranslation: "Karnaval çok eğlenceli." },
        { word: "Artesanía", meaning: "El sanatı", pronunciation: "ar-te-sa-ni-a", example: "Compré artesanía local.", exampleTranslation: "Yerel el sanatı aldım." }
    ]
};

// ===== ÜNİTE 50: A2 FİNAL TEKRAR =====
const unit50Vocab: UnitVocabulary = {
    unitId: 50, title: "A2 Final Tekrar Kelimeleri",
    words: [
        { word: "Recordar", meaning: "Hatırlamak", pronunciation: "re-kor-dar", example: "Recuerdo todo.", exampleTranslation: "Her şeyi hatırlıyorum." },
        { word: "Olvidar", meaning: "Unutmak", pronunciation: "ol-vi-dar", example: "No olvides estudiar.", exampleTranslation: "Çalışmayı unutma." },
        { word: "Practicar", meaning: "Pratik yapmak", pronunciation: "prak-ti-kar", example: "Necesito practicar más.", exampleTranslation: "Daha fazla pratik yapmam gerekiyor." },
        { word: "Mejorar", meaning: "Geliştirmek", pronunciation: "me-ho-rar", example: "Quiero mejorar mi español.", exampleTranslation: "İspanyolcamı geliştirmek istiyorum." },
        { word: "Avanzar", meaning: "İlerlemek", pronunciation: "a-van-sar", example: "Estoy avanzando mucho.", exampleTranslation: "Çok ilerliyorum." },
        { word: "Repasar", meaning: "Tekrar etmek", pronunciation: "re-pa-sar", example: "Vamos a repasar.", exampleTranslation: "Tekrar edelim." },
        { word: "Dominar", meaning: "Hakim olmak", pronunciation: "do-mi-nar", example: "Quiero dominar el idioma.", exampleTranslation: "Dile hakim olmak istiyorum." },
        { word: "Expresar", meaning: "İfade etmek", pronunciation: "eks-pre-sar", example: "Puedo expresarme bien.", exampleTranslation: "Kendimi iyi ifade edebiliyorum." },
        { word: "Comunicar", meaning: "İletişim kurmak", pronunciation: "ko-mu-ni-kar", example: "Es importante comunicar.", exampleTranslation: "İletişim kurmak önemli." },
        { word: "Lograr", meaning: "Başarmak", pronunciation: "lo-grar", example: "Logré mi objetivo.", exampleTranslation: "Hedefime ulaştım." },
        // YENİ +5 KELİME
        { word: "Vocabulario", meaning: "Kelime bilgisi", pronunciation: "vo-ka-bu-la-rio", example: "Estudio vocabulario.", exampleTranslation: "Kelime çalışıyorum." },
        { word: "Gramática", meaning: "Dilbilgisi", pronunciation: "gra-ma-ti-ka", example: "La gramática es difícil.", exampleTranslation: "Dilbilgisi zor." },
        { word: "Pronunciación", meaning: "Telaffuz", pronunciation: "pro-nun-sia-sion", example: "Mi pronunciación mejora.", exampleTranslation: "Telaffuzum gelişiyor." },
        { word: "Fluido", meaning: "Akıcı", pronunciation: "flu-i-do", example: "Hablo español fluido.", exampleTranslation: "Akıcı İspanyolca konuşuyorum." },
        { word: "Bilingüe", meaning: "İki dilli", pronunciation: "bi-lin-gue", example: "Soy bilingüe.", exampleTranslation: "İki dilliyim." }
    ]
};

// ===== ÜNİTE 51: İLGİ ZAMİRLERİ KELİMELERİ =====
const unit51Vocab: UnitVocabulary = {
    unitId: 51, title: "İlgi Zamirleri Kelimeleri",
    words: [
        { word: "Que", meaning: "Ki, -en/-an (ilgi zamiri)", pronunciation: "ke", example: "El libro que compré.", exampleTranslation: "Aldığım kitap." },
        { word: "Quien/Quienes", meaning: "Kim/Kimler (kişi için)", pronunciation: "kien/kie-nes", example: "La persona quien llamó.", exampleTranslation: "Arayan kişi." },
        { word: "Donde", meaning: "Nerede (yer için)", pronunciation: "don-de", example: "El lugar donde vivo.", exampleTranslation: "Yaşadığım yer." },
        { word: "Cuando", meaning: "Ne zaman (zaman için)", pronunciation: "kuan-do", example: "El día cuando llegaste.", exampleTranslation: "Geldiğin gün." },
        { word: "Como", meaning: "Nasıl (şekil için)", pronunciation: "ko-mo", example: "La manera como lo hizo.", exampleTranslation: "Yaptığı şekil." },
        { word: "Cuyo/Cuya", meaning: "Kimin (iyelik)", pronunciation: "ku-yo/ku-ya", example: "El hombre cuyo coche...", exampleTranslation: "Arabası olan adam..." },
        { word: "El cual", meaning: "Ki o (resmi)", pronunciation: "el kual", example: "El problema el cual mencioné.", exampleTranslation: "Bahsettiğim sorun." },
        { word: "Lo que", meaning: "Ne ki (şey için)", pronunciation: "lo ke", example: "Lo que quieres.", exampleTranslation: "İstediğin şey." },
        { word: "Referirse a", meaning: "Atıfta bulunmak", pronunciation: "re-fe-rir-se a", example: "Me refiero a esto.", exampleTranslation: "Buna atıfta bulunuyorum." },
        { word: "Antecedente", meaning: "Öncül (dilbilgisi)", pronunciation: "an-te-se-den-te", example: "El antecedente es 'libro'.", exampleTranslation: "Öncül 'kitap'tır." },
        { word: "Relativo", meaning: "İlgi (sıfat)", pronunciation: "re-la-ti-vo", example: "Pronombre relativo.", exampleTranslation: "İlgi zamiri." },
        { word: "Oración", meaning: "Cümle", pronunciation: "o-ra-sion", example: "Una oración compleja.", exampleTranslation: "Karmaşık bir cümle." },
        { word: "Subordinada", meaning: "Bağımlı (cümle)", pronunciation: "sub-or-di-na-da", example: "Oración subordinada.", exampleTranslation: "Bağımlı cümle." },
        { word: "Principal", meaning: "Ana (cümle)", pronunciation: "prin-si-pal", example: "Oración principal.", exampleTranslation: "Ana cümle." },
        { word: "Conectar", meaning: "Bağlamak", pronunciation: "ko-nek-tar", example: "Conecta dos oraciones.", exampleTranslation: "İki cümleyi bağlar." }
    ]
};

// ===== ÜNİTE 52: DOLAYLI NESNE ZAMİRLERİ KELİMELERİ =====
const unit52Vocab: UnitVocabulary = {
    unitId: 52, title: "Dolaylı Nesne Zamirleri Kelimeleri",
    words: [
        { word: "Me", meaning: "Bana", pronunciation: "me", example: "Me lo dijo.", exampleTranslation: "Bana söyledi." },
        { word: "Te", meaning: "Sana", pronunciation: "te", example: "Te lo explico.", exampleTranslation: "Sana açıklıyorum." },
        { word: "Le", meaning: "Ona", pronunciation: "le", example: "Le escribí una carta.", exampleTranslation: "Ona mektup yazdım." },
        { word: "Nos", meaning: "Bize", pronunciation: "nos", example: "Nos lo enviaron.", exampleTranslation: "Bize gönderdiler." },
        { word: "Os", meaning: "Size (İspanya)", pronunciation: "os", example: "Os lo cuento.", exampleTranslation: "Size anlatıyorum." },
        { word: "Les", meaning: "Onlara", pronunciation: "les", example: "Les pregunté.", exampleTranslation: "Onlara sordum." },
        { word: "Regalar", meaning: "Hediye etmek", pronunciation: "re-ga-lar", example: "Le regalé flores.", exampleTranslation: "Ona çiçek hediye ettim." },
        { word: "Prestar", meaning: "Ödünç vermek", pronunciation: "pres-tar", example: "Me prestó su libro.", exampleTranslation: "Bana kitabını ödünç verdi." },
        { word: "Decir", meaning: "Söylemek", pronunciation: "de-sir", example: "Te lo dije ayer.", exampleTranslation: "Sana dün söyledim." },
        { word: "Enviar", meaning: "Göndermek", pronunciation: "en-vi-ar", example: "Les envié un correo.", exampleTranslation: "Onlara e-posta gönderdim." },
        { word: "Dar", meaning: "Vermek", pronunciation: "dar", example: "Me dio el dinero.", exampleTranslation: "Bana parayı verdi." },
        { word: "Mostrar", meaning: "Göstermek", pronunciation: "mos-trar", example: "Te muestro algo.", exampleTranslation: "Sana bir şey göstereyim." },
        { word: "Ofrecer", meaning: "Teklif etmek", pronunciation: "o-fre-ser", example: "Le ofrecí ayuda.", exampleTranslation: "Ona yardım teklif ettim." },
        { word: "Explicar", meaning: "Açıklamak", pronunciation: "eks-pli-kar", example: "Les explicaré todo.", exampleTranslation: "Onlara her şeyi açıklayacağım." },
        { word: "Pedir", meaning: "Rica etmek/İstemek", pronunciation: "pe-dir", example: "Me pidió un favor.", exampleTranslation: "Benden iyilik istedi." }
    ]
};

// ===== ÜNİTE 53: BELİRSİZ ZAMİRLER KELİMELERİ =====
const unit53Vocab: UnitVocabulary = {
    unitId: 53, title: "Belirsiz Zamirler Kelimeleri",
    words: [
        { word: "Algo", meaning: "Bir şey", pronunciation: "al-go", example: "¿Tienes algo?", exampleTranslation: "Bir şeyin var mı?" },
        { word: "Nada", meaning: "Hiçbir şey", pronunciation: "na-da", example: "No tengo nada.", exampleTranslation: "Hiçbir şeyim yok." },
        { word: "Alguien", meaning: "Biri", pronunciation: "al-gien", example: "¿Hay alguien?", exampleTranslation: "Biri var mı?" },
        { word: "Nadie", meaning: "Kimse", pronunciation: "na-die", example: "No hay nadie.", exampleTranslation: "Kimse yok." },
        { word: "Alguno/Alguna", meaning: "Bazı/Birkaç", pronunciation: "al-gu-no", example: "Alguno lo sabe.", exampleTranslation: "Bazıları biliyor." },
        { word: "Ninguno/Ninguna", meaning: "Hiçbiri", pronunciation: "nin-gu-no", example: "Ninguno vino.", exampleTranslation: "Hiçbiri gelmedi." },
        { word: "Todo/Toda", meaning: "Hepsi/Tümü", pronunciation: "to-do", example: "Todo está bien.", exampleTranslation: "Her şey iyi." },
        { word: "Cada", meaning: "Her bir", pronunciation: "ka-da", example: "Cada persona.", exampleTranslation: "Her kişi." },
        { word: "Cualquiera", meaning: "Herhangi biri", pronunciation: "kual-kie-ra", example: "Cualquiera puede.", exampleTranslation: "Herkes yapabilir." },
        { word: "Otro/Otra", meaning: "Başka/Diğer", pronunciation: "o-tro", example: "Otro día.", exampleTranslation: "Başka bir gün." },
        { word: "Mismo/Misma", meaning: "Aynı/Kendisi", pronunciation: "mis-mo", example: "El mismo problema.", exampleTranslation: "Aynı sorun." },
        { word: "Mucho/Mucha", meaning: "Çok", pronunciation: "mu-cho", example: "Mucho trabajo.", exampleTranslation: "Çok iş." },
        { word: "Poco/Poca", meaning: "Az", pronunciation: "po-ko", example: "Poco tiempo.", exampleTranslation: "Az zaman." },
        { word: "Bastante", meaning: "Yeterli/Epey", pronunciation: "bas-tan-te", example: "Bastante dinero.", exampleTranslation: "Yeterli para." },
        { word: "Demasiado", meaning: "Çok fazla", pronunciation: "de-ma-sia-do", example: "Demasiado ruido.", exampleTranslation: "Çok fazla gürültü." }
    ]
};

// ===== ÜNİTE 54: A2 NİTELİK SIFATLARI KELİMELERİ =====
const unit54Vocab: UnitVocabulary = {
    unitId: 54, title: "A2 Nitelik Sıfatları Kelimeleri",
    words: [
        { word: "Más... que", meaning: "...den daha", pronunciation: "mas ke", example: "Más alto que yo.", exampleTranslation: "Benden daha uzun." },
        { word: "Menos... que", meaning: "...den daha az", pronunciation: "me-nos ke", example: "Menos caro que esto.", exampleTranslation: "Bundan daha ucuz." },
        { word: "Tan... como", meaning: "...kadar", pronunciation: "tan ko-mo", example: "Tan bueno como.", exampleTranslation: "... kadar iyi." },
        { word: "El/La más", meaning: "En ...", pronunciation: "el/la mas", example: "El más grande.", exampleTranslation: "En büyük." },
        { word: "El/La menos", meaning: "En az ...", pronunciation: "el/la me-nos", example: "El menos importante.", exampleTranslation: "En az önemli." },
        { word: "Mejor", meaning: "Daha iyi/En iyi", pronunciation: "me-hor", example: "Es el mejor.", exampleTranslation: "En iyisi." },
        { word: "Peor", meaning: "Daha kötü/En kötü", pronunciation: "pe-or", example: "Es el peor.", exampleTranslation: "En kötüsü." },
        { word: "Mayor", meaning: "Daha büyük/Yaşlı", pronunciation: "ma-yor", example: "Mi hermano mayor.", exampleTranslation: "Ağabeyim." },
        { word: "Menor", meaning: "Daha küçük/Genç", pronunciation: "me-nor", example: "Mi hermana menor.", exampleTranslation: "Küçük kız kardeşim." },
        { word: "Superior", meaning: "Üstün/Üst", pronunciation: "su-pe-rior", example: "Calidad superior.", exampleTranslation: "Üstün kalite." },
        { word: "Inferior", meaning: "Alt/Aşağı", pronunciation: "in-fe-rior", example: "Nivel inferior.", exampleTranslation: "Alt seviye." },
        { word: "Igual", meaning: "Eşit/Aynı", pronunciation: "i-gual", example: "Somos iguales.", exampleTranslation: "Eşitiz." },
        { word: "Diferente", meaning: "Farklı", pronunciation: "di-fe-ren-te", example: "Es diferente.", exampleTranslation: "Farklı." },
        { word: "Parecido", meaning: "Benzer", pronunciation: "pa-re-si-do", example: "Es parecido.", exampleTranslation: "Benzer." },
        { word: "Contrario", meaning: "Zıt", pronunciation: "kon-tra-rio", example: "Es lo contrario.", exampleTranslation: "Tam tersi." }
    ]
};

// ===== ÜNİTE 55: A2 ZARF YAPILARI KELİMELERİ =====
const unit55Vocab: UnitVocabulary = {
    unitId: 55, title: "A2 Zarf Yapıları Kelimeleri",
    words: [
        { word: "Lentamente", meaning: "Yavaşça", pronunciation: "len-ta-men-te", example: "Habla lentamente.", exampleTranslation: "Yavaşça konuşuyor." },
        { word: "Rápidamente", meaning: "Hızlıca", pronunciation: "ra-pi-da-men-te", example: "Corrió rápidamente.", exampleTranslation: "Hızlıca koştu." },
        { word: "Fácilmente", meaning: "Kolayca", pronunciation: "fa-sil-men-te", example: "Lo hizo fácilmente.", exampleTranslation: "Kolayca yaptı." },
        { word: "Difícilmente", meaning: "Zor bela", pronunciation: "di-fi-sil-men-te", example: "Difícilmente lo entiendo.", exampleTranslation: "Zor anlıyorum." },
        { word: "Normalmente", meaning: "Normalde", pronunciation: "nor-mal-men-te", example: "Normalmente trabajo.", exampleTranslation: "Normalde çalışırım." },
        { word: "Generalmente", meaning: "Genellikle", pronunciation: "he-ne-ral-men-te", example: "Generalmente como aquí.", exampleTranslation: "Genellikle burada yerim." },
        { word: "Frecuentemente", meaning: "Sık sık", pronunciation: "fre-kuen-te-men-te", example: "Viajo frecuentemente.", exampleTranslation: "Sık sık seyahat ederim." },
        { word: "Perfectamente", meaning: "Mükemmel şekilde", pronunciation: "per-fek-ta-men-te", example: "Habla perfectamente.", exampleTranslation: "Mükemmel konuşuyor." },
        { word: "Finalmente", meaning: "Sonunda", pronunciation: "fi-nal-men-te", example: "Finalmente llegamos.", exampleTranslation: "Sonunda vardık." },
        { word: "Anteriormente", meaning: "Önceden", pronunciation: "an-te-rior-men-te", example: "Anteriormente viví allí.", exampleTranslation: "Önceden orada yaşadım." },
        { word: "Actualmente", meaning: "Şu anda", pronunciation: "ak-tual-men-te", example: "Actualmente trabajo aquí.", exampleTranslation: "Şu anda burada çalışıyorum." },
        { word: "Obviamente", meaning: "Açıkça", pronunciation: "ob-via-men-te", example: "Obviamente sí.", exampleTranslation: "Açıkça evet." },
        { word: "Probablemente", meaning: "Muhtemelen", pronunciation: "pro-ba-ble-men-te", example: "Probablemente venga.", exampleTranslation: "Muhtemelen gelir." },
        { word: "Desafortunadamente", meaning: "Maalesef", pronunciation: "des-a-for-tu-na-da-men-te", example: "Desafortunadamente no.", exampleTranslation: "Maalesef hayır." },
        { word: "Afortunadamente", meaning: "Neyse ki", pronunciation: "a-for-tu-na-da-men-te", example: "Afortunadamente sí.", exampleTranslation: "Neyse ki evet." }
    ]
};

// ===== ÜNİTE 56: A2 İLERİ KELİMELER 1 =====
const unit56Vocab: UnitVocabulary = {
    unitId: 56, title: "A2 İleri Kelimeler 1",
    words: [
        { word: "Desarrollar", meaning: "Geliştirmek", pronunciation: "de-sa-rro-yar", example: "Desarrollar habilidades.", exampleTranslation: "Beceriler geliştirmek." },
        { word: "Mejorar", meaning: "İyileştirmek", pronunciation: "me-ho-rar", example: "Quiero mejorar.", exampleTranslation: "İyileştirmek istiyorum." },
        { word: "Conseguir", meaning: "Başarmak/Elde etmek", pronunciation: "kon-se-gir", example: "Conseguí el trabajo.", exampleTranslation: "İşi aldım." },
        { word: "Alcanzar", meaning: "Ulaşmak", pronunciation: "al-kan-sar", example: "Alcanzar metas.", exampleTranslation: "Hedeflere ulaşmak." },
        { word: "Superar", meaning: "Aşmak/Üstesinden gelmek", pronunciation: "su-pe-rar", example: "Superar dificultades.", exampleTranslation: "Zorlukların üstesinden gelmek." },
        { word: "Resolver", meaning: "Çözmek", pronunciation: "re-sol-ver", example: "Resolver problemas.", exampleTranslation: "Sorunları çözmek." },
        { word: "Mantener", meaning: "Sürdürmek", pronunciation: "man-te-ner", example: "Mantener la calma.", exampleTranslation: "Sakin kalmak." },
        { word: "Establecer", meaning: "Kurmak/Belirlemek", pronunciation: "es-ta-ble-ser", example: "Establecer reglas.", exampleTranslation: "Kurallar belirlemek." },
        { word: "Proporcionar", meaning: "Sağlamak", pronunciation: "pro-por-sio-nar", example: "Proporcionar información.", exampleTranslation: "Bilgi sağlamak." },
        { word: "Reconocer", meaning: "Tanımak/Kabul etmek", pronunciation: "re-ko-no-ser", example: "Reconocer errores.", exampleTranslation: "Hataları kabul etmek." },
        { word: "Considerar", meaning: "Düşünmek/Değerlendirmek", pronunciation: "kon-si-de-rar", example: "Considerar opciones.", exampleTranslation: "Seçenekleri değerlendirmek." },
        { word: "Permitir", meaning: "İzin vermek", pronunciation: "per-mi-tir", example: "No está permitido.", exampleTranslation: "İzin verilmiyor." },
        { word: "Incluir", meaning: "Dahil etmek", pronunciation: "in-klu-ir", example: "Incluir a todos.", exampleTranslation: "Herkesi dahil etmek." },
        { word: "Ofrecer", meaning: "Sunmak/Teklif etmek", pronunciation: "o-fre-ser", example: "Ofrecer ayuda.", exampleTranslation: "Yardım sunmak." },
        { word: "Realizar", meaning: "Gerçekleştirmek", pronunciation: "re-a-li-sar", example: "Realizar un proyecto.", exampleTranslation: "Proje gerçekleştirmek." }
    ]
};

// ===== ÜNİTE 57: A2 İLERİ KELİMELER 2 =====
const unit57Vocab: UnitVocabulary = {
    unitId: 57, title: "A2 İleri Kelimeler 2",
    words: [
        { word: "Experiencia", meaning: "Deneyim", pronunciation: "eks-pe-rien-sia", example: "Tengo experiencia.", exampleTranslation: "Deneyimim var." },
        { word: "Oportunidad", meaning: "Fırsat", pronunciation: "o-por-tu-ni-dad", example: "Es una oportunidad.", exampleTranslation: "Bu bir fırsat." },
        { word: "Responsabilidad", meaning: "Sorumluluk", pronunciation: "res-pon-sa-bi-li-dad", example: "Mi responsabilidad.", exampleTranslation: "Sorumluluğum." },
        { word: "Capacidad", meaning: "Kapasite/Yetenek", pronunciation: "ka-pa-si-dad", example: "Capacidad de trabajo.", exampleTranslation: "Çalışma kapasitesi." },
        { word: "Habilidad", meaning: "Beceri", pronunciation: "a-bi-li-dad", example: "Habilidades sociales.", exampleTranslation: "Sosyal beceriler." },
        { word: "Conocimiento", meaning: "Bilgi", pronunciation: "ko-no-si-mien-to", example: "Conocimientos básicos.", exampleTranslation: "Temel bilgiler." },
        { word: "Objetivo", meaning: "Hedef", pronunciation: "ob-he-ti-vo", example: "Mi objetivo es...", exampleTranslation: "Hedefim..." },
        { word: "Resultado", meaning: "Sonuç", pronunciation: "re-sul-ta-do", example: "Buenos resultados.", exampleTranslation: "İyi sonuçlar." },
        { word: "Situación", meaning: "Durum", pronunciation: "si-tua-sion", example: "La situación actual.", exampleTranslation: "Mevcut durum." },
        { word: "Condición", meaning: "Koşul", pronunciation: "kon-di-sion", example: "Bajo una condición.", exampleTranslation: "Bir koşulla." },
        { word: "Proceso", meaning: "Süreç", pronunciation: "pro-se-so", example: "El proceso es largo.", exampleTranslation: "Süreç uzun." },
        { word: "Método", meaning: "Yöntem", pronunciation: "me-to-do", example: "Un buen método.", exampleTranslation: "İyi bir yöntem." },
        { word: "Solución", meaning: "Çözüm", pronunciation: "so-lu-sion", example: "Encontrar solución.", exampleTranslation: "Çözüm bulmak." },
        { word: "Decisión", meaning: "Karar", pronunciation: "de-si-sion", example: "Tomar una decisión.", exampleTranslation: "Karar vermek." },
        { word: "Opinión", meaning: "Görüş", pronunciation: "o-pi-nion", example: "Mi opinión es...", exampleTranslation: "Görüşüm..." }
    ]
};

// ===== ÜNİTE 58: A2 İLERİ KELİMELER 3 =====
const unit58Vocab: UnitVocabulary = {
    unitId: 58, title: "A2 İleri Kelimeler 3",
    words: [
        { word: "Ambiente", meaning: "Ortam/Çevre", pronunciation: "am-bien-te", example: "Buen ambiente.", exampleTranslation: "İyi ortam." },
        { word: "Comunidad", meaning: "Topluluk", pronunciation: "ko-mu-ni-dad", example: "Nuestra comunidad.", exampleTranslation: "Topluluğumuz." },
        { word: "Sociedad", meaning: "Toplum", pronunciation: "so-sie-dad", example: "La sociedad moderna.", exampleTranslation: "Modern toplum." },
        { word: "Cultura", meaning: "Kültür", pronunciation: "kul-tu-ra", example: "Cultura española.", exampleTranslation: "İspanyol kültürü." },
        { word: "Tradición", meaning: "Gelenek", pronunciation: "tra-di-sion", example: "Una tradición.", exampleTranslation: "Bir gelenek." },
        { word: "Costumbre", meaning: "Adet", pronunciation: "kos-tum-bre", example: "Costumbres locales.", exampleTranslation: "Yerel adetler." },
        { word: "Historia", meaning: "Tarih/Hikaye", pronunciation: "is-to-ria", example: "La historia de España.", exampleTranslation: "İspanya tarihi." },
        { word: "Geografía", meaning: "Coğrafya", pronunciation: "he-o-gra-fi-a", example: "La geografía del país.", exampleTranslation: "Ülkenin coğrafyası." },
        { word: "Economía", meaning: "Ekonomi", pronunciation: "e-ko-no-mi-a", example: "La economía global.", exampleTranslation: "Küresel ekonomi." },
        { word: "Política", meaning: "Politika", pronunciation: "po-li-ti-ka", example: "La política actual.", exampleTranslation: "Güncel politika." },
        { word: "Educación", meaning: "Eğitim", pronunciation: "e-du-ka-sion", example: "La educación es importante.", exampleTranslation: "Eğitim önemli." },
        { word: "Salud", meaning: "Sağlık", pronunciation: "sa-lud", example: "La salud mental.", exampleTranslation: "Ruh sağlığı." },
        { word: "Seguridad", meaning: "Güvenlik", pronunciation: "se-gu-ri-dad", example: "La seguridad pública.", exampleTranslation: "Kamu güvenliği." },
        { word: "Libertad", meaning: "Özgürlük", pronunciation: "li-ber-tad", example: "Libertad de expresión.", exampleTranslation: "İfade özgürlüğü." },
        { word: "Igualdad", meaning: "Eşitlik", pronunciation: "i-gual-dad", example: "Igualdad de derechos.", exampleTranslation: "Hak eşitliği." }
    ]
};

// ===== ÜNİTE 59: A2 İLERİ KELİMELER 4 =====
const unit59Vocab: UnitVocabulary = {
    unitId: 59, title: "A2 İleri Kelimeler 4",
    words: [
        { word: "Internacional", meaning: "Uluslararası", pronunciation: "in-ter-na-sio-nal", example: "Relaciones internacionales.", exampleTranslation: "Uluslararası ilişkiler." },
        { word: "Nacional", meaning: "Ulusal", pronunciation: "na-sio-nal", example: "Fiesta nacional.", exampleTranslation: "Ulusal bayram." },
        { word: "Local", meaning: "Yerel", pronunciation: "lo-kal", example: "Gobierno local.", exampleTranslation: "Yerel yönetim." },
        { word: "Global", meaning: "Küresel", pronunciation: "glo-bal", example: "Economía global.", exampleTranslation: "Küresel ekonomi." },
        { word: "Personal", meaning: "Kişisel", pronunciation: "per-so-nal", example: "Vida personal.", exampleTranslation: "Kişisel hayat." },
        { word: "Profesional", meaning: "Profesyonel", pronunciation: "pro-fe-sio-nal", example: "Vida profesional.", exampleTranslation: "İş hayatı." },
        { word: "Social", meaning: "Sosyal", pronunciation: "so-sial", example: "Redes sociales.", exampleTranslation: "Sosyal ağlar." },
        { word: "Económico", meaning: "Ekonomik", pronunciation: "e-ko-no-mi-ko", example: "Problema económico.", exampleTranslation: "Ekonomik sorun." },
        { word: "Político", meaning: "Politik", pronunciation: "po-li-ti-ko", example: "Sistema político.", exampleTranslation: "Politik sistem." },
        { word: "Público", meaning: "Kamusal/Halk", pronunciation: "pu-bli-ko", example: "Transporte público.", exampleTranslation: "Toplu taşıma." },
        { word: "Privado", meaning: "Özel", pronunciation: "pri-va-do", example: "Sector privado.", exampleTranslation: "Özel sektör." },
        { word: "Oficial", meaning: "Resmi", pronunciation: "o-fi-sial", example: "Documento oficial.", exampleTranslation: "Resmi belge." },
        { word: "Legal", meaning: "Yasal", pronunciation: "le-gal", example: "Es legal.", exampleTranslation: "Yasal." },
        { word: "Ilegal", meaning: "Yasadışı", pronunciation: "i-le-gal", example: "Es ilegal.", exampleTranslation: "Yasadışı." },
        { word: "Disponible", meaning: "Mevcut/Müsait", pronunciation: "dis-po-ni-ble", example: "Está disponible.", exampleTranslation: "Mevcut." }
    ]
};

// ===== ÜNİTE 60: A2 FİNAL TEKRAR KELİMELERİ =====
const unit60Vocab: UnitVocabulary = {
    unitId: 60, title: "A2 Final Tekrar Kelimeleri",
    words: [
        { word: "Completar", meaning: "Tamamlamak", pronunciation: "kom-ple-tar", example: "Completé el nivel A2.", exampleTranslation: "A2 seviyesini tamamladım." },
        { word: "Dominar", meaning: "Hakim olmak", pronunciation: "do-mi-nar", example: "Dominar el idioma.", exampleTranslation: "Dile hakim olmak." },
        { word: "Progresar", meaning: "İlerlemek", pronunciation: "pro-gre-sar", example: "He progresado mucho.", exampleTranslation: "Çok ilerledim." },
        { word: "Continuar", meaning: "Devam etmek", pronunciation: "kon-ti-nuar", example: "Continuaré estudiando.", exampleTranslation: "Çalışmaya devam edeceğim." },
        { word: "Practicar", meaning: "Pratik yapmak", pronunciation: "prak-ti-kar", example: "Necesito practicar más.", exampleTranslation: "Daha fazla pratik yapmam lazım." },
        { word: "Revisar", meaning: "Gözden geçirmek", pronunciation: "re-vi-sar", example: "Revisar la gramática.", exampleTranslation: "Dilbilgisini gözden geçirmek." },
        { word: "Repasar", meaning: "Tekrar etmek", pronunciation: "re-pa-sar", example: "Vamos a repasar.", exampleTranslation: "Tekrar edelim." },
        { word: "Memorizar", meaning: "Ezberlemek", pronunciation: "me-mo-ri-sar", example: "Memorizar vocabulario.", exampleTranslation: "Kelime ezberlemek." },
        { word: "Entender", meaning: "Anlamak", pronunciation: "en-ten-der", example: "Entiendo casi todo.", exampleTranslation: "Neredeyse her şeyi anlıyorum." },
        { word: "Comunicarse", meaning: "İletişim kurmak", pronunciation: "ko-mu-ni-kar-se", example: "Puedo comunicarme.", exampleTranslation: "İletişim kurabiliyorum." },
        { word: "Expresarse", meaning: "Kendini ifade etmek", pronunciation: "eks-pre-sar-se", example: "Expresarme mejor.", exampleTranslation: "Kendimi daha iyi ifade etmek." },
        { word: "Avanzar", meaning: "İlerlemek", pronunciation: "a-van-sar", example: "Avanzar al siguiente nivel.", exampleTranslation: "Bir sonraki seviyeye ilerlemek." },
        { word: "Lograr", meaning: "Başarmak", pronunciation: "lo-grar", example: "¡Lo logré!", exampleTranslation: "Başardım!" },
        { word: "Certificado", meaning: "Sertifika", pronunciation: "ser-ti-fi-ka-do", example: "Mi certificado A2.", exampleTranslation: "A2 sertifikam." },
        { word: "Siguiente", meaning: "Sonraki", pronunciation: "si-gien-te", example: "El siguiente nivel es B1.", exampleTranslation: "Sonraki seviye B1." }
    ]
};

// Ünite ID'sine göre A2 vocabulary getir (ID: 31-60)
export function getA2VocabularyForUnit(unitId: number): UnitVocabulary {
    // Curriculum Unit ID (31-60) -> Vocab variable mapping
    const idMapping: { [key: number]: UnitVocabulary } = {
        31: unit21Vocab, 32: unit22Vocab, 33: unit23Vocab, 34: unit24Vocab, 35: unit25Vocab,
        36: unit26Vocab, 37: unit27Vocab, 38: unit28Vocab, 39: unit29Vocab, 40: unit30Vocab,
        41: unit31Vocab, 42: unit32Vocab, 43: unit33Vocab, 44: unit34Vocab, 45: unit35Vocab,
        46: unit36Vocab, 47: unit37Vocab, 48: unit38Vocab, 49: unit39Vocab, 50: unit40Vocab,
        51: unit46Vocab, 52: unit47Vocab, 53: unit48Vocab, 54: unit49Vocab, 55: unit50Vocab,
        56: unit51Vocab, 57: unit52Vocab, 58: unit53Vocab, 59: unit54Vocab, 60: unit55Vocab
    };

    const vocab = idMapping[unitId];
    if (vocab) {
        return { ...vocab, unitId };
    }
    return unit21Vocab;
}
