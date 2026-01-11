/**
 * LinguaFlow Kalıplar Veritabanı - İspanyolca A2
 * 20 Ünite (ID: 21-40), her biri için 8 kalıp
 */

import { UnitPhrases, Phrase } from './phrases';

// ===== ÜNİTE 21: GEÇMİŞ ZAMAN KALIPLARI 1 =====
const unit21Phrases: UnitPhrases = {
    unitId: 21, title: "Geçmişten Bahsetme",
    phrases: [
        { target: "¿Qué hiciste ayer?", native: "Dün ne yaptın?", pronunciation: "ke i-SIS-te a-YER" },
        { target: "Fui al cine con amigos", native: "Arkadaşlarla sinemaya gittim", pronunciation: "fui al SI-ne kon a-MI-gos" },
        { target: "Pasé un buen fin de semana", native: "İyi bir hafta sonu geçirdim", pronunciation: "pa-SE un buen fin de se-MA-na" },
        { target: "Llegué tarde al trabajo", native: "İşe geç kaldım", pronunciation: "ye-GE TAR-de al tra-BA-ho" },
        { target: "Salí a cenar anoche", native: "Dün gece dışarıda yemek yedim", pronunciation: "sa-LI a se-NAR a-NO-che" },
        { target: "No pude dormir bien", native: "İyi uyuyamadım", pronunciation: "no PU-de dor-MIR bien" },
        { target: "Fue un día muy largo", native: "Çok uzun bir gündü", pronunciation: "fue un DI-a muy LAR-go" },
        { target: "Lo pasé genial", native: "Harika vakit geçirdim", pronunciation: "lo pa-SE he-NIAL" }
    ]
};

// ===== ÜNİTE 22: GEÇMİŞ ZAMAN KALIPLARI 2 =====
const unit22Phrases: UnitPhrases = {
    unitId: 22, title: "Düzensiz Geçmiş Kalıpları",
    phrases: [
        { target: "¿Dónde estuviste?", native: "Neredeydin?", pronunciation: "DON-de es-TU-vis-te" },
        { target: "Tuve un problema", native: "Bir sorunum oldu", pronunciation: "TU-ve un pro-BLE-ma" },
        { target: "No lo hice a propósito", native: "Bilerek yapmadım", pronunciation: "no lo I-se a pro-PO-si-to" },
        { target: "Vine lo más rápido posible", native: "Mümkün olduğunca hızlı geldim", pronunciation: "VI-ne lo mas RA-pi-do po-SI-ble" },
        { target: "Dije que sí", native: "Evet dedim", pronunciation: "DI-he ke si" },
        { target: "Pude terminar a tiempo", native: "Zamanında bitirebildim", pronunciation: "PU-de ter-mi-NAR a TIEM-po" },
        { target: "Supe la verdad después", native: "Gerçeği sonra öğrendim", pronunciation: "SU-pe la ver-DAD des-PUES" },
        { target: "Quise ayudarte", native: "Sana yardım etmek istedim", pronunciation: "KI-se a-yu-DAR-te" }
    ]
};

// ===== ÜNİTE 23: RESTORAN KALIPLARI =====
const unit23Phrases: UnitPhrases = {
    unitId: 23, title: "Restoranda İletişim",
    phrases: [
        { target: "Mesa para dos, por favor", native: "İki kişilik masa lütfen", pronunciation: "ME-sa PA-ra dos por fa-VOR" },
        { target: "¿Qué me recomienda?", native: "Ne önerirsiniz?", pronunciation: "ke me re-ko-MIEN-da" },
        { target: "Para mí, el pollo", native: "Bana tavuk lütfen", pronunciation: "PA-ra mi el PO-yo" },
        { target: "¿Cómo está preparado?", native: "Nasıl hazırlanıyor?", pronunciation: "KO-mo es-TA pre-pa-RA-do" },
        { target: "Está delicioso", native: "Çok lezzetli", pronunciation: "es-TA de-li-SIO-so" },
        { target: "La cuenta, por favor", native: "Hesap lütfen", pronunciation: "la KUEN-ta por fa-VOR" },
        { target: "¿Aceptan tarjeta?", native: "Kart kabul ediyor musunuz?", pronunciation: "a-SEP-tan tar-HE-ta" },
        { target: "Quédese con el cambio", native: "Üstü kalsın", pronunciation: "KE-de-se kon el KAM-bio" }
    ]
};

// ===== ÜNİTE 24: ALIŞVERİŞ KALIPLARI =====
const unit24Phrases: UnitPhrases = {
    unitId: 24, title: "Alışveriş Diyalogları",
    phrases: [
        { target: "¿Cuánto cuesta esto?", native: "Bu ne kadar?", pronunciation: "KUAN-to KUES-ta ES-to" },
        { target: "Es demasiado caro", native: "Çok pahalı", pronunciation: "es de-ma-SIA-do KA-ro" },
        { target: "¿Tiene descuento?", native: "İndiriminiz var mı?", pronunciation: "TIE-ne des-KUEN-to" },
        { target: "Me lo llevo", native: "Bunu alıyorum", pronunciation: "me lo YE-vo" },
        { target: "¿Puedo probármelo?", native: "Deneyebilir miyim?", pronunciation: "PUE-do pro-BAR-me-lo" },
        { target: "¿Tiene una talla más grande?", native: "Daha büyük beden var mı?", pronunciation: "TIE-ne U-na TA-ya mas GRAN-de" },
        { target: "Solo estoy mirando", native: "Sadece bakıyorum", pronunciation: "SO-lo es-TOY mi-RAN-do" },
        { target: "¿Dónde puedo pagar?", native: "Nerede ödeyebilirim?", pronunciation: "DON-de PUE-do pa-GAR" }
    ]
};

// ===== ÜNİTE 25: SEYAHAT KALIPLARI =====
const unit25Phrases: UnitPhrases = {
    unitId: 25, title: "Seyahat İfadeleri",
    phrases: [
        { target: "Quiero reservar un vuelo", native: "Uçuş rezervasyonu yapmak istiyorum", pronunciation: "KIE-ro re-ser-VAR un VUE-lo" },
        { target: "¿A qué hora sale el tren?", native: "Tren saat kaçta kalkıyor?", pronunciation: "a ke O-ra SA-le el tren" },
        { target: "Un billete de ida y vuelta", native: "Gidiş-dönüş bileti", pronunciation: "un bi-YE-te de I-da i VUEL-ta" },
        { target: "¿Dónde está la parada?", native: "Durak nerede?", pronunciation: "DON-de es-TA la pa-RA-da" },
        { target: "Me he perdido", native: "Kayboldum", pronunciation: "me e per-DI-do" },
        { target: "¿Puede indicarme el camino?", native: "Yolu gösterebilir misiniz?", pronunciation: "PUE-de in-di-KAR-me el ka-MI-no" },
        { target: "Estoy de vacaciones", native: "Tatildeyim", pronunciation: "es-TOY de va-ka-SIO-nes" },
        { target: "¡Buen viaje!", native: "İyi yolculuklar!", pronunciation: "buen VIA-he" }
    ]
};

// ===== ÜNİTE 26: OTEL KALIPLARI =====
const unit26Phrases: UnitPhrases = {
    unitId: 26, title: "Otel Konuşmaları",
    phrases: [
        { target: "Tengo una reserva a nombre de...", native: "... adına rezervasyonum var", pronunciation: "TEN-go U-na re-SER-va a NOM-bre de" },
        { target: "Quiero una habitación doble", native: "Çift kişilik oda istiyorum", pronunciation: "KIE-ro U-na a-bi-ta-SION DO-ble" },
        { target: "¿El desayuno está incluido?", native: "Kahvaltı dahil mi?", pronunciation: "el de-sa-YU-no es-TA in-klu-I-do" },
        { target: "¿Hay wifi gratis?", native: "Ücretsiz wifi var mı?", pronunciation: "ai WI-fi GRA-tis" },
        { target: "¿A qué hora es el check-out?", native: "Check-out saat kaçta?", pronunciation: "a ke O-ra es el çek-AUT" },
        { target: "¿Puede llamar un taxi?", native: "Taksi çağırabilir misiniz?", pronunciation: "PUE-de ya-MAR un TAK-si" },
        { target: "Hay un problema con la habitación", native: "Odayla ilgili bir sorun var", pronunciation: "ai un pro-BLE-ma kon la a-bi-ta-SION" },
        { target: "Quiero extender mi estancia", native: "Kalışımı uzatmak istiyorum", pronunciation: "KIE-ro eks-ten-DER mi es-TAN-sia" }
    ]
};

// ===== ÜNİTE 27: HAVALİMANI KALIPLARI =====
const unit27Phrases: UnitPhrases = {
    unitId: 27, title: "Havalimanı İfadeleri",
    phrases: [
        { target: "¿Dónde está el mostrador de facturación?", native: "Check-in kontuarı nerede?", pronunciation: "DON-de es-TA el mos-tra-DOR de fak-tu-ra-SION" },
        { target: "Quiero un asiento de ventanilla", native: "Pencere kenarı istiyorum", pronunciation: "KIE-ro un a-SIEN-to de ven-ta-NI-ya" },
        { target: "Mi vuelo tiene retraso", native: "Uçuşum gecikmeli", pronunciation: "mi VUE-lo TIE-ne re-TRA-so" },
        { target: "¿Cuál es la puerta de embarque?", native: "Biniş kapısı hangisi?", pronunciation: "kual es la PUER-ta de em-BAR-ke" },
        { target: "He perdido mi equipaje", native: "Bagajımı kaybettim", pronunciation: "e per-DI-do mi e-ki-PA-he" },
        { target: "¿Dónde recojo el equipaje?", native: "Bagajı nereden alacağım?", pronunciation: "DON-de re-KO-ho el e-ki-PA-he" },
        { target: "Última llamada para el vuelo...", native: "... uçuşu için son çağrı", pronunciation: "UL-ti-ma ya-MA-da PA-ra el VUE-lo" },
        { target: "Tengo una escala en...", native: "...'da aktarmam var", pronunciation: "TEN-go U-na es-KA-la en" }
    ]
};

// ===== ÜNİTE 28: DOKTOR KALIPLARI =====
const unit28Phrases: UnitPhrases = {
    unitId: 28, title: "Sağlık Diyalogları",
    phrases: [
        { target: "Me encuentro mal", native: "Kendimi kötü hissediyorum", pronunciation: "me en-KUEN-tro mal" },
        { target: "Me duele aquí", native: "Burası ağrıyor", pronunciation: "me DUE-le a-KI" },
        { target: "Tengo fiebre desde ayer", native: "Dünden beri ateşim var", pronunciation: "TEN-go FIE-bre DES-de a-YER" },
        { target: "Soy alérgico a...", native: "...'e alerjim var", pronunciation: "soy a-LER-hi-ko a" },
        { target: "¿Necesito receta?", native: "Reçete gerekiyor mu?", pronunciation: "ne-se-SI-to re-SE-ta" },
        { target: "¿Cada cuánto debo tomarlo?", native: "Ne sıklıkla almalıyım?", pronunciation: "KA-da KUAN-to DE-bo to-MAR-lo" },
        { target: "Quiero pedir una cita", native: "Randevu almak istiyorum", pronunciation: "KIE-ro pe-DIR U-na SI-ta" },
        { target: "Es urgente", native: "Acil", pronunciation: "es ur-HEN-te" }
    ]
};

// ===== ÜNİTE 29: ECZANE KALIPLARI =====
const unit29Phrases: UnitPhrases = {
    unitId: 29, title: "Eczane Konuşmaları",
    phrases: [
        { target: "Necesito algo para el dolor de cabeza", native: "Baş ağrısı için bir şey istiyorum", pronunciation: "ne-se-SI-to AL-go PA-ra el do-LOR de ka-BE-sa" },
        { target: "¿Tiene algo sin receta?", native: "Reçetesiz bir şeyiniz var mı?", pronunciation: "TIE-ne AL-go sin re-SE-ta" },
        { target: "¿Cómo debo tomarlo?", native: "Nasıl almalıyım?", pronunciation: "KO-mo DE-bo to-MAR-lo" },
        { target: "¿Tiene efectos secundarios?", native: "Yan etkileri var mı?", pronunciation: "TIE-ne e-FEK-tos se-kun-DA-rios" },
        { target: "Estoy tomando otros medicamentos", native: "Başka ilaçlar kullanıyorum", pronunciation: "es-TOY to-MAN-do O-tros me-di-ka-MEN-tos" },
        { target: "¿Hay una farmacia de guardia?", native: "Nöbetçi eczane var mı?", pronunciation: "ai U-na far-MA-sia de GUAR-dia" },
        { target: "Necesito tiritas", native: "Yara bandı istiyorum", pronunciation: "ne-se-SI-to ti-RI-tas" },
        { target: "¿Cuánto cuesta este medicamento?", native: "Bu ilaç ne kadar?", pronunciation: "KUAN-to KUES-ta ES-te me-di-ka-MEN-to" }
    ]
};

// ===== ÜNİTE 30: İŞ HAYATI KALIPLARI =====
const unit30Phrases: UnitPhrases = {
    unitId: 30, title: "İş Dünyası İfadeleri",
    phrases: [
        { target: "Trabajo como...", native: "... olarak çalışıyorum", pronunciation: "tra-BA-ho KO-mo" },
        { target: "Trabajo en una empresa de...", native: "... şirketinde çalışıyorum", pronunciation: "tra-BA-ho en U-na em-PRE-sa de" },
        { target: "Soy autónomo", native: "Serbest çalışıyorum", pronunciation: "soy au-TO-no-mo" },
        { target: "Estoy en paro", native: "İşsizim", pronunciation: "es-TOY en PA-ro" },
        { target: "Busco trabajo", native: "İş arıyorum", pronunciation: "BUS-ko tra-BA-ho" },
        { target: "¿A qué te dedicas?", native: "Ne iş yapıyorsun?", pronunciation: "a ke te de-DI-kas" },
        { target: "Mi jornada es de 9 a 5", native: "Mesaim 9'dan 5'e", pronunciation: "mi hor-NA-da es de NUE-ve a SIN-ko" },
        { target: "Tengo mucha experiencia", native: "Çok deneyimim var", pronunciation: "TEN-go MU-cha eks-pe-RIEN-sia" }
    ]
};

// ===== ÜNİTE 31: MÜLAKAT KALIPLARI =====
const unit31Phrases: UnitPhrases = {
    unitId: 31, title: "İş Görüşmesi Diyalogları",
    phrases: [
        { target: "Vengo para la entrevista", native: "Mülakat için geldim", pronunciation: "VEN-go PA-ra la en-tre-VIS-ta" },
        { target: "Soy el candidato ideal", native: "İdeal adayım", pronunciation: "soy el kan-di-DA-to i-de-AL" },
        { target: "Tengo experiencia en...", native: "... konusunda deneyimim var", pronunciation: "TEN-go eks-pe-RIEN-sia en" },
        { target: "¿Cuál es el salario?", native: "Maaş ne kadar?", pronunciation: "kual es el sa-LA-rio" },
        { target: "¿Cuándo empezaría?", native: "Ne zaman başlarım?", pronunciation: "KUAN-do em-pe-sa-RI-a" },
        { target: "Estoy muy interesado en el puesto", native: "Pozisyonla çok ilgileniyorum", pronunciation: "es-TOY muy in-te-re-SA-do en el PUES-to" },
        { target: "Mis puntos fuertes son...", native: "Güçlü yönlerim...", pronunciation: "mis PUN-tos FUER-tes son" },
        { target: "Gracias por la oportunidad", native: "Bu fırsat için teşekkürler", pronunciation: "GRA-sias por la o-por-tu-ni-DAD" }
    ]
};

// ===== ÜNİTE 32: TELEFON KALIPLARI =====
const unit32Phrases: UnitPhrases = {
    unitId: 32, title: "Telefon Konuşmaları",
    phrases: [
        { target: "¿Dígame?", native: "Efendim? (Telefonu açarken)", pronunciation: "DI-ga-me" },
        { target: "¿Puedo hablar con...?", native: "... ile görüşebilir miyim?", pronunciation: "PUE-do a-BLAR kon" },
        { target: "¿De parte de quién?", native: "Kim arıyor?", pronunciation: "de PAR-te de kien" },
        { target: "Un momento, por favor", native: "Bir dakika lütfen", pronunciation: "un mo-MEN-to por fa-VOR" },
        { target: "No está disponible ahora", native: "Şu an müsait değil", pronunciation: "no es-TA dis-po-NI-ble a-O-ra" },
        { target: "¿Quiere dejar un mensaje?", native: "Mesaj bırakmak ister misiniz?", pronunciation: "KIE-re de-HAR un men-SA-he" },
        { target: "Le devolveré la llamada", native: "Sizi geri arayacağım", pronunciation: "le de-vol-ve-RE la ya-MA-da" },
        { target: "Se ha cortado la llamada", native: "Görüşme kesildi", pronunciation: "se a kor-TA-do la ya-MA-da" }
    ]
};

// ===== ÜNİTE 33: E-POSTA KALIPLARI =====
const unit33Phrases: UnitPhrases = {
    unitId: 33, title: "E-posta Yazışmaları",
    phrases: [
        { target: "Estimado/a Sr./Sra.", native: "Sayın Bay/Bayan", pronunciation: "es-ti-MA-do/a se-NYOR/se-NYO-ra" },
        { target: "Le escribo en relación con...", native: "... ile ilgili yazıyorum", pronunciation: "le es-KRI-bo en re-la-SION kon" },
        { target: "Adjunto el documento", native: "Belgeyi ekliyorum", pronunciation: "ad-HUN-to el do-ku-MEN-to" },
        { target: "Quedo a la espera de su respuesta", native: "Cevabınızı bekliyorum", pronunciation: "KE-do a la es-PE-ra de su res-PUES-ta" },
        { target: "Disculpe las molestias", native: "Rahatsızlık için özür dilerim", pronunciation: "dis-KUL-pe las mo-LES-tias" },
        { target: "Atentamente", native: "Saygılarımla", pronunciation: "a-ten-ta-MEN-te" },
        { target: "Un cordial saludo", native: "Sevgilerimle", pronunciation: "un kor-DIAL sa-LU-do" },
        { target: "Gracias por su atención", native: "İlginiz için teşekkürler", pronunciation: "GRA-sias por su a-ten-SION" }
    ]
};

// ===== ÜNİTE 34: DUYGU KALIPLARI =====
const unit34Phrases: UnitPhrases = {
    unitId: 34, title: "Duygu İfadeleri",
    phrases: [
        { target: "Estoy muy contento/a", native: "Çok mutluyum", pronunciation: "es-TOY muy kon-TEN-to" },
        { target: "Me siento triste", native: "Üzgün hissediyorum", pronunciation: "me SIEN-to TRIS-te" },
        { target: "Estoy un poco nervioso/a", native: "Biraz gerginim", pronunciation: "es-TOY un PO-ko ner-VIO-so" },
        { target: "Me da rabia", native: "Sinirlendiriyor", pronunciation: "me da RA-bia" },
        { target: "Tengo miedo de...", native: "...'dan korkuyorum", pronunciation: "TEN-go MIE-do de" },
        { target: "Estoy emocionado/a por...", native: "... için heyecanlıyım", pronunciation: "es-TOY e-mo-sio-NA-do por" },
        { target: "Me aburro mucho", native: "Çok sıkılıyorum", pronunciation: "me a-BU-rro MU-cho" },
        { target: "Estoy preocupado/a por ti", native: "Senin için endişeleniyorum", pronunciation: "es-TOY pre-o-ku-PA-do por ti" }
    ]
};

// ===== ÜNİTE 35: KARAKTER KALIPLARI =====
const unit35Phrases: UnitPhrases = {
    unitId: 35, title: "Kişilik Tanımlamaları",
    phrases: [
        { target: "Es una persona muy amable", native: "Çok nazik bir kişi", pronunciation: "es U-na per-SO-na muy a-MA-ble" },
        { target: "Tiene un carácter fuerte", native: "Güçlü bir karakteri var", pronunciation: "TIE-ne un ka-RAK-ter FUER-te" },
        { target: "Es muy trabajador/a", native: "Çok çalışkan", pronunciation: "es muy tra-ba-ha-DOR" },
        { target: "Siempre está de buen humor", native: "Her zaman keyfi yerinde", pronunciation: "SIEM-pre es-TA de buen u-MOR" },
        { target: "Es un poco tímido/a", native: "Biraz utangaç", pronunciation: "es un PO-ko TI-mi-do" },
        { target: "Tiene mucha paciencia", native: "Çok sabırlı", pronunciation: "TIE-ne MU-cha pa-SIEN-sia" },
        { target: "Es muy extrovertido/a", native: "Çok dışa dönük", pronunciation: "es muy eks-tro-ver-TI-do" },
        { target: "Es de fiar", native: "Güvenilir biri", pronunciation: "es de fiar" }
    ]
};

// ===== ÜNİTE 36: SPOR KALIPLARI =====
const unit36Phrases: UnitPhrases = {
    unitId: 36, title: "Spor Sohbetleri",
    phrases: [
        { target: "Voy al gimnasio tres veces por semana", native: "Haftada üç kez spor salonuna gidiyorum", pronunciation: "voy al him-NA-sio tres VE-ses por se-MA-na" },
        { target: "Me gusta hacer ejercicio", native: "Egzersiz yapmayı seviyorum", pronunciation: "me GUS-ta a-SER e-her-SI-sio" },
        { target: "Juego al fútbol los fines de semana", native: "Hafta sonları futbol oynuyorum", pronunciation: "HUE-go al FUT-bol los FI-nes de se-MA-na" },
        { target: "Corro todos los días", native: "Her gün koşuyorum", pronunciation: "KO-rro TO-dos los DI-as" },
        { target: "¿Quieres jugar un partido?", native: "Maç yapmak ister misin?", pronunciation: "KIE-res hu-GAR un par-TI-do" },
        { target: "Mi equipo favorito es...", native: "En sevdiğim takım...", pronunciation: "mi e-KI-po fa-vo-RI-to es" },
        { target: "¿Viste el partido de anoche?", native: "Dün geceki maçı izledin mi?", pronunciation: "VIS-te el par-TI-do de a-NO-che" },
        { target: "Ganamos/Perdimos el partido", native: "Maçı kazandık/kaybettik", pronunciation: "ga-NA-mos/per-DI-mos el par-TI-do" }
    ]
};

// ===== ÜNİTE 37: MÜZİK KALIPLARI =====
const unit37Phrases: UnitPhrases = {
    unitId: 37, title: "Müzik ve Sanat Sohbetleri",
    phrases: [
        { target: "¿Qué tipo de música te gusta?", native: "Ne tür müzik seversin?", pronunciation: "ke TI-po de MU-si-ka te GUS-ta" },
        { target: "Toco la guitarra desde niño", native: "Çocukluğumdan beri gitar çalıyorum", pronunciation: "TO-ko la gi-TA-rra DES-de NI-nyo" },
        { target: "Fui a un concierto increíble", native: "İnanılmaz bir konsere gittim", pronunciation: "fui a un kon-SIER-to in-kre-I-ble" },
        { target: "Esta canción es mi favorita", native: "Bu şarkı favorim", pronunciation: "ES-ta kan-SION es mi fa-vo-RI-ta" },
        { target: "Me encanta el arte moderno", native: "Modern sanatı çok seviyorum", pronunciation: "me en-KAN-ta el AR-te mo-DER-no" },
        { target: "¿Has visitado algún museo?", native: "Hiç müze ziyaret ettin mi?", pronunciation: "as vi-si-TA-do al-GUN mu-SE-o" },
        { target: "Prefiero la música en vivo", native: "Canlı müziği tercih ederim", pronunciation: "pre-FIE-ro la MU-si-ka en VI-vo" },
        { target: "Estoy aprendiendo a tocar...", native: "... çalmayı öğreniyorum", pronunciation: "es-TOY a-pren-DIEN-do a to-KAR" }
    ]
};

// ===== ÜNİTE 38: SİNEMA KALIPLARI =====
const unit38Phrases: UnitPhrases = {
    unitId: 38, title: "Sinema Sohbetleri",
    phrases: [
        { target: "¿Quieres ir al cine?", native: "Sinemaya gitmek ister misin?", pronunciation: "KIE-res ir al SI-ne" },
        { target: "¿Qué película quieres ver?", native: "Hangi filmi izlemek istersin?", pronunciation: "ke pe-LI-ku-la KIE-res ver" },
        { target: "Es una película de acción", native: "Aksiyon filmi", pronunciation: "es U-na pe-LI-ku-la de ak-SION" },
        { target: "El actor principal es muy bueno", native: "Başrol çok iyi", pronunciation: "el ak-TOR prin-si-PAL es muy BUE-no" },
        { target: "No me gustan las películas de terror", native: "Korku filmi sevmem", pronunciation: "no me GUS-tan las pe-LI-ku-las de te-RROR" },
        { target: "¿Qué series estás viendo?", native: "Hangi dizileri izliyorsun?", pronunciation: "ke SE-ries es-TAS vien-do" },
        { target: "La recomiendo mucho", native: "Çok öneririm", pronunciation: "la re-ko-MIEN-do MU-cho" },
        { target: "Tiene un final sorprendente", native: "Şaşırtıcı bir sonu var", pronunciation: "TIE-ne un fi-NAL sor-pren-DEN-te" }
    ]
};

// ===== ÜNİTE 39: TEKNOLOJİ KALIPLARI =====
const unit39Phrases: UnitPhrases = {
    unitId: 39, title: "Teknoloji Sohbetleri",
    phrases: [
        { target: "Mi ordenador no funciona", native: "Bilgisayarım çalışmıyor", pronunciation: "mi or-de-na-DOR no fun-SIO-na" },
        { target: "¿Cuál es la contraseña del wifi?", native: "Wifi şifresi ne?", pronunciation: "kual es la kon-tra-SE-nya del WI-fi" },
        { target: "Necesito cargar mi móvil", native: "Telefonumu şarj etmem lazım", pronunciation: "ne-se-SI-to kar-GAR mi MO-vil" },
        { target: "¿Me puedes enviar el archivo?", native: "Dosyayı gönderebilir misin?", pronunciation: "me PUE-des en-vi-AR el ar-CHI-vo" },
        { target: "Voy a reiniciar el ordenador", native: "Bilgisayarı yeniden başlatacağım", pronunciation: "voy a re-i-ni-SIAR el or-de-na-DOR" },
        { target: "La batería está baja", native: "Batarya düşük", pronunciation: "la ba-te-RI-a es-TA BA-ha" },
        { target: "Descargué una aplicación nueva", native: "Yeni bir uygulama indirdim", pronunciation: "des-kar-GE U-na a-pli-ka-SION NUE-va" },
        { target: "¿Puedes actualizar el sistema?", native: "Sistemi güncelleyebilir misin?", pronunciation: "PUE-des ak-tua-li-SAR el sis-TE-ma" }
    ]
};

// ===== ÜNİTE 40: SOSYAL MEDYA KALIPLARI =====
const unit40Phrases: UnitPhrases = {
    unitId: 40, title: "Sosyal Medya İfadeleri",
    phrases: [
        { target: "Te voy a seguir en Instagram", native: "Seni Instagram'da takip edeceğim", pronunciation: "te voy a se-GIR en ins-ta-GRAM" },
        { target: "¿Cuántos seguidores tienes?", native: "Kaç takipçin var?", pronunciation: "KUAN-tos se-gi-DO-res TIE-nes" },
        { target: "Acabo de publicar una foto", native: "Az önce fotoğraf paylaştım", pronunciation: "a-KA-bo de pu-bli-KAR U-na FO-to" },
        { target: "Me gusta mucho este post", native: "Bu gönderiyi çok beğendim", pronunciation: "me GUS-ta MU-cho ES-te post" },
        { target: "Dejé un comentario", native: "Yorum bıraktım", pronunciation: "de-HE un ko-men-TA-rio" },
        { target: "¿Puedes compartir esto?", native: "Bunu paylaşabilir misin?", pronunciation: "PUE-des kom-par-TIR ES-to" },
        { target: "Te voy a etiquetar", native: "Seni etiketleyeceğim", pronunciation: "te voy a e-ti-ke-TAR" },
        { target: "Se volvió viral", native: "Viral oldu", pronunciation: "se vol-VIO vi-RAL" }
    ]
};

// ===== YENİ A2 ÜNİTELERİ (46-50) =====

// ===== ÜNİTE 46: EV VE TAŞINMA KALIPLARI =====
const unit46Phrases: UnitPhrases = {
    unitId: 46, title: "Ev Arama Kalıpları",
    phrases: [
        { target: "Busco un piso en alquiler", native: "Kiralık daire arıyorum", pronunciation: "BUS-ko un PI-so en al-ki-LER" },
        { target: "¿Cuánto es el alquiler mensual?", native: "Aylık kira ne kadar?", pronunciation: "KUAN-to es el al-ki-LER men-su-AL" },
        { target: "¿Está amueblado?", native: "Eşyalı mı?", pronunciation: "es-TA a-mue-BLA-do" },
        { target: "¿Los gastos están incluidos?", native: "Faturalar dahil mi?", pronunciation: "los GAS-tos es-TAN in-klu-I-dos" },
        { target: "Quiero ver el piso", native: "Daireyi görmek istiyorum", pronunciation: "KIE-ro ver el PI-so" },
        { target: "Voy a mudarme la semana que viene", native: "Gelecek hafta taşınacağım", pronunciation: "voy a mu-DAR-me la se-MA-na ke VIE-ne" },
        { target: "El vecino es muy ruidoso", native: "Komşu çok gürültücü", pronunciation: "el ve-SI-no es muy rui-DO-so" },
        { target: "Firmaré el contrato mañana", native: "Yarın sözleşmeyi imzalayacağım", pronunciation: "fir-ma-RE el kon-TRA-to ma-NYA-na" }
    ]
};

// ===== ÜNİTE 47: ÇEVRE VE DOĞA KALIPLARI =====
const unit47Phrases: UnitPhrases = {
    unitId: 47, title: "Çevre Koruma Kalıpları",
    phrases: [
        { target: "Hay que reciclar más", native: "Daha fazla geri dönüşüm yapmalıyız", pronunciation: "ai ke re-si-KLAR mas" },
        { target: "El cambio climático es un problema grave", native: "İklim değişikliği ciddi bir sorun", pronunciation: "el KAM-bio kli-MA-ti-ko es un pro-BLE-ma GRA-ve" },
        { target: "Debemos ahorrar agua", native: "Su tasarrufu yapmalıyız", pronunciation: "de-BE-mos a-o-RRAR A-gua" },
        { target: "Me gusta pasar tiempo en la naturaleza", native: "Doğada vakit geçirmeyi severim", pronunciation: "me GUS-ta pa-SAR TIEM-po en la na-tu-ra-LE-sa" },
        { target: "El aire está contaminado", native: "Hava kirli", pronunciation: "el AI-re es-TA kon-ta-mi-NA-do" },
        { target: "Usamos energía solar", native: "Güneş enerjisi kullanıyoruz", pronunciation: "u-SA-mos e-ner-HI-a so-LAR" },
        { target: "Hay que proteger los bosques", native: "Ormanları korumak gerekir", pronunciation: "ai ke pro-te-HER los BOS-kes" },
        { target: "No tirar basura al suelo", native: "Yere çöp atmayın", pronunciation: "no ti-RAR ba-SU-ra al SUE-lo" }
    ]
};

// ===== ÜNİTE 48: HABER KALIPLARI =====
const unit48Phrases: UnitPhrases = {
    unitId: 48, title: "Haber İfadeleri",
    phrases: [
        { target: "¿Has leído las noticias de hoy?", native: "Bugünün haberlerini okudun mu?", pronunciation: "as le-I-do las no-TI-sias de oy" },
        { target: "Según el periódico...", native: "Gazeteye göre...", pronunciation: "se-GUN el pe-RIO-di-ko" },
        { target: "Se ha anunciado que...", native: "... olduğu duyuruldu", pronunciation: "se a a-nun-SIA-do ke" },
        { target: "Es una noticia importante", native: "Önemli bir haber", pronunciation: "es U-na no-TI-sia im-por-TAN-te" },
        { target: "¿Qué opinas sobre esto?", native: "Bu konuda ne düşünüyorsun?", pronunciation: "ke o-PI-nas SO-bre ES-to" },
        { target: "En mi opinión...", native: "Bence...", pronunciation: "en mi o-pi-NION" },
        { target: "Estoy de acuerdo contigo", native: "Sana katılıyorum", pronunciation: "es-TOY de a-KUER-do kon-TI-go" },
        { target: "No estoy de acuerdo", native: "Katılmıyorum", pronunciation: "no es-TOY de a-KUER-do" }
    ]
};

// ===== ÜNİTE 49: KÜLTÜR VE GELENEK KALIPLARI =====
const unit49Phrases: UnitPhrases = {
    unitId: 49, title: "Kültür Kalıpları",
    phrases: [
        { target: "Es una tradición muy antigua", native: "Çok eski bir gelenek", pronunciation: "es U-na tra-di-SION muy an-TI-gua" },
        { target: "En España se celebra...", native: "İspanya'da ... kutlanır", pronunciation: "en es-PA-nya se se-LE-bra" },
        { target: "¿Cómo celebráis la Navidad?", native: "Noel'i nasıl kutluyorsunuz?", pronunciation: "KO-mo se-le-BRAIS la na-vi-DAD" },
        { target: "La comida típica es...", native: "Tipik yemek ...", pronunciation: "la ko-MI-da TI-pi-ka es" },
        { target: "Me encanta el flamenco", native: "Flamenko'ya bayılıyorum", pronunciation: "me en-KAN-ta el fla-MEN-ko" },
        { target: "Es patrimonio cultural", native: "Kültürel miras", pronunciation: "es pa-tri-MO-nio kul-tu-RAL" },
        { target: "¿Cuál es tu fiesta favorita?", native: "En sevdiğin festival hangisi?", pronunciation: "kual es tu FIES-ta fa-vo-RI-ta" },
        { target: "Se suele hacer así", native: "Genellikle böyle yapılır", pronunciation: "se SUE-le a-SER a-SI" }
    ]
};

// ===== ÜNİTE 50: A2 FİNAL TEKRAR KALIPLARI =====
const unit50Phrases: UnitPhrases = {
    unitId: 50, title: "A2 Genel Tekrar Kalıpları",
    phrases: [
        { target: "He aprendido mucho", native: "Çok şey öğrendim", pronunciation: "e a-pren-DI-do MU-cho" },
        { target: "Puedo comunicarme en español", native: "İspanyolca iletişim kurabiliyorum", pronunciation: "PUE-do ko-mu-ni-KAR-me en es-pa-NYOL" },
        { target: "Entiendo casi todo", native: "Neredeyse her şeyi anlıyorum", pronunciation: "en-TIEN-do KA-si TO-do" },
        { target: "Necesito practicar más", native: "Daha fazla pratik yapmam gerekiyor", pronunciation: "ne-se-SI-to prak-ti-KAR mas" },
        { target: "Voy a seguir estudiando", native: "Çalışmaya devam edeceğim", pronunciation: "voy a se-GIR es-tu-DIAN-do" },
        { target: "Quiero mejorar mi pronunciación", native: "Telaffuzumu geliştirmek istiyorum", pronunciation: "KIE-ro me-ho-RAR mi pro-nun-sia-SION" },
        { target: "Poco a poco se aprende", native: "Yavaş yavaş öğrenilir", pronunciation: "PO-ko a PO-ko se a-PREN-de" },
        { target: "¡Lo conseguí!", native: "Başardım!", pronunciation: "lo kon-se-GI" }
    ]
};

// ===== ÜNİTE 51: EV VE TAŞINMA KALIPLARI =====
const unit51Phrases: UnitPhrases = {
    unitId: 51, title: "Ev ve Taşınma Kalıpları",
    phrases: [
        { target: "Busco un piso de dos habitaciones", native: "İki odalı bir daire arıyorum", pronunciation: "BUS-ko un PI-so de dos a-bi-ta-SIO-nes" },
        { target: "¿Cuánto es el alquiler mensual?", native: "Aylık kira ne kadar?", pronunciation: "KUAN-to es el al-ki-LER men-su-AL" },
        { target: "¿Está amueblado?", native: "Eşyalı mı?", pronunciation: "es-TA a-mue-BLA-do" },
        { target: "¿Los gastos están incluidos?", native: "Faturalar dahil mi?", pronunciation: "los GAS-tos es-TAN in-klu-I-dos" },
        { target: "Quiero ver el piso", native: "Daireyi görmek istiyorum", pronunciation: "KIE-ro ver el PI-so" },
        { target: "Voy a mudarme la semana que viene", native: "Gelecek hafta taşınacağım", pronunciation: "voy a mu-DAR-me la se-MA-na ke VIE-ne" },
        { target: "El vecino es muy ruidoso", native: "Komşu çok gürültücü", pronunciation: "el ve-SI-no es muy rui-DO-so" },
        { target: "Firmaré el contrato mañana", native: "Yarın sözleşmeyi imzalayacağım", pronunciation: "fir-ma-RE el kon-TRA-to ma-NYA-na" }
    ]
};

// ===== ÜNİTE 52: ÇEVRE VE DOĞA KALIPLARI =====
const unit52Phrases: UnitPhrases = {
    unitId: 52, title: "Çevre ve Doğa Kalıpları",
    phrases: [
        { target: "Hay que reciclar más", native: "Daha fazla geri dönüşüm yapmalıyız", pronunciation: "ai ke re-si-KLAR mas" },
        { target: "El cambio climático es un problema grave", native: "İklim değişikliği ciddi bir sorun", pronunciation: "el KAM-bio kli-MA-ti-ko es un pro-BLE-ma GRA-ve" },
        { target: "Debemos ahorrar agua", native: "Su tasarrufu yapmalıyız", pronunciation: "de-BE-mos a-o-RRAR A-gua" },
        { target: "Me gusta pasar tiempo en la naturaleza", native: "Doğada vakit geçirmeyi severim", pronunciation: "me GUS-ta pa-SAR TIEM-po en la na-tu-ra-LE-sa" },
        { target: "El aire está contaminado", native: "Hava kirli", pronunciation: "el AI-re es-TA kon-ta-mi-NA-do" },
        { target: "Usamos energía solar", native: "Güneş enerjisi kullanıyoruz", pronunciation: "u-SA-mos e-ner-HI-a so-LAR" },
        { target: "Hay que proteger los bosques", native: "Ormanları korumak gerekir", pronunciation: "ai ke pro-te-HER los BOS-kes" },
        { target: "No tirar basura al suelo", native: "Yere çöp atmayın", pronunciation: "no ti-RAR ba-SU-ra al SUE-lo" }
    ]
};

// ===== ÜNİTE 53: HABER KALIPLARI =====
const unit53Phrases: UnitPhrases = {
    unitId: 53, title: "Haber Kalıpları",
    phrases: [
        { target: "¿Has leído las noticias de hoy?", native: "Bugünün haberlerini okudun mu?", pronunciation: "as le-I-do las no-TI-sias de oy" },
        { target: "Según el periódico...", native: "Gazeteye göre...", pronunciation: "se-GUN el pe-RIO-di-ko" },
        { target: "Se ha anunciado que...", native: "... olduğu duyuruldu", pronunciation: "se a a-nun-SIA-do ke" },
        { target: "Es una noticia importante", native: "Önemli bir haber", pronunciation: "es U-na no-TI-sia im-por-TAN-te" },
        { target: "¿Qué opinas sobre esto?", native: "Bu konuda ne düşünüyorsun?", pronunciation: "ke o-PI-nas SO-bre ES-to" },
        { target: "En mi opinión...", native: "Bence...", pronunciation: "en mi o-pi-NION" },
        { target: "Estoy de acuerdo contigo", native: "Sana katılıyorum", pronunciation: "es-TOY de a-KUER-do kon-TI-go" },
        { target: "No estoy de acuerdo", native: "Katılmıyorum", pronunciation: "no es-TOY de a-KUER-do" }
    ]
};

// ===== ÜNİTE 54: KÜLTÜR VE GELENEK KALIPLARI =====
const unit54Phrases: UnitPhrases = {
    unitId: 54, title: "Kültür ve Gelenek Kalıpları",
    phrases: [
        { target: "Es una tradición muy antigua", native: "Çok eski bir gelenek", pronunciation: "es U-na tra-di-SION muy an-TI-gua" },
        { target: "En España se celebra...", native: "İspanya'da ... kutlanır", pronunciation: "en es-PA-nya se se-LE-bra" },
        { target: "¿Cómo celebráis la Navidad?", native: "Noel'i nasıl kutluyorsunuz?", pronunciation: "KO-mo se-le-BRAIS la na-vi-DAD" },
        { target: "La comida típica es...", native: "Tipik yemek ...", pronunciation: "la ko-MI-da TI-pi-ka es" },
        { target: "Me encanta el flamenco", native: "Flamenko'ya bayılıyorum", pronunciation: "me en-KAN-ta el fla-MEN-ko" },
        { target: "Es patrimonio cultural", native: "Kültürel miras", pronunciation: "es pa-tri-MO-nio kul-tu-RAL" },
        { target: "¿Cuál es tu fiesta favorita?", native: "En sevdiğin festival hangisi?", pronunciation: "kual es tu FIES-ta fa-vo-RI-ta" },
        { target: "Se suele hacer así", native: "Genellikle böyle yapılır", pronunciation: "se SUE-le a-SER a-SI" }
    ]
};

// ===== ÜNİTE 55: İLGİ ZAMİRLERİ KALIPLARI =====
const unit55Phrases: UnitPhrases = {
    unitId: 55, title: "İlgi Zamirleri Kalıpları",
    phrases: [
        { target: "El libro que compré es interesante", native: "Aldığım kitap ilginç", pronunciation: "el LI-bro ke kom-PRE es in-te-re-SAN-te" },
        { target: "La persona que llamó era mi madre", native: "Arayan kişi annemdi", pronunciation: "la per-SO-na ke ya-MO E-ra mi MA-dre" },
        { target: "El restaurante donde comimos era bueno", native: "Yemek yediğimiz restoran iyiydi", pronunciation: "el res-tau-RAN-te DON-de ko-MI-mos E-ra BUE-no" },
        { target: "La razón por la que vine", native: "Gelmemin sebebi", pronunciation: "la ra-SON por la ke VI-ne" },
        { target: "Todo lo que necesitas", native: "İhtiyacın olan her şey", pronunciation: "TO-do lo ke ne-se-SI-tas" },
        { target: "La ciudad donde nací", native: "Doğduğum şehir", pronunciation: "la siu-DAD DON-de na-SI" },
        { target: "El día en que nos conocimos", native: "Tanıştığımız gün", pronunciation: "el DI-a en ke nos ko-no-SI-mos" },
        { target: "Quien quiera puede venir", native: "İsteyen gelebilir", pronunciation: "kien KIE-ra PUE-de ve-NIR" }
    ]
};

// ===== ÜNİTE 56: DOLAYLI NESNE ZAMİRLERİ KALIPLARI =====
const unit56Phrases: UnitPhrases = {
    unitId: 56, title: "Dolaylı Nesne Zamirleri Kalıpları",
    phrases: [
        { target: "Te lo dije ayer", native: "Sana dün söyledim", pronunciation: "te lo DI-he a-YER" },
        { target: "Me lo puedes repetir", native: "Bana tekrar edebilir misin", pronunciation: "me lo PUE-des re-pe-TIR" },
        { target: "Se lo explicaré mañana", native: "Ona yarın açıklayacağım", pronunciation: "se lo eks-pli-ka-RE ma-NYA-na" },
        { target: "Nos lo enviaron por correo", native: "Bize postayla gönderdiler", pronunciation: "nos lo en-vi-A-ron por ko-RRE-o" },
        { target: "¿Te lo has comprado?", native: "Onu sana aldın mı?", pronunciation: "te lo as kom-PRA-do" },
        { target: "Se lo regalé a mi madre", native: "Anneme hediye ettim", pronunciation: "se lo re-ga-LE a mi MA-dre" },
        { target: "Me lo prestó un amigo", native: "Bir arkadaş bana ödünç verdi", pronunciation: "me lo pres-TO un a-MI-go" },
        { target: "Os lo contaré luego", native: "Size sonra anlatacağım", pronunciation: "os lo kon-ta-RE LUE-go" }
    ]
};

// ===== ÜNİTE 57: BELİRSİZ ZAMİRLER KALIPLARI =====
const unit57Phrases: UnitPhrases = {
    unitId: 57, title: "Belirsiz Zamirler Kalıpları",
    phrases: [
        { target: "¿Hay alguien en casa?", native: "Evde biri var mı?", pronunciation: "ai AL-gien en KA-sa" },
        { target: "No hay nadie aquí", native: "Burada kimse yok", pronunciation: "no ai NA-die a-KI" },
        { target: "¿Tienes algo que hacer?", native: "Yapacak bir şeyin var mı?", pronunciation: "TIE-nes AL-go ke a-SER" },
        { target: "No quiero nada", native: "Hiçbir şey istemiyorum", pronunciation: "no KIE-ro NA-da" },
        { target: "Alguno de ellos vendrá", native: "Onlardan biri gelecek", pronunciation: "al-GU-no de E-yos ven-DRA" },
        { target: "Ninguno sabe la respuesta", native: "Hiçbiri cevabı bilmiyor", pronunciation: "nin-GU-no SA-be la res-PUES-ta" },
        { target: "Cualquiera puede hacerlo", native: "Herkes yapabilir", pronunciation: "kual-KIE-ra PUE-de a-SER-lo" },
        { target: "Todo el mundo lo sabe", native: "Herkes bunu biliyor", pronunciation: "TO-do el MUN-do lo SA-be" }
    ]
};

// ===== ÜNİTE 58: A2 NİTELİK SIFATLARI KALIPLARI =====
const unit58Phrases: UnitPhrases = {
    unitId: 58, title: "A2 Nitelik Sıfatları Kalıpları",
    phrases: [
        { target: "Es más alto que yo", native: "Benden daha uzun", pronunciation: "es mas AL-to ke yo" },
        { target: "Es la más inteligente de la clase", native: "Sınıfın en zekisi", pronunciation: "es la mas in-te-li-HEN-te de la KLA-se" },
        { target: "Tan interesante como el otro", native: "Diğeri kadar ilginç", pronunciation: "tan in-te-re-SAN-te KO-mo el O-tro" },
        { target: "Menos caro de lo que pensaba", native: "Düşündüğümden daha ucuz", pronunciation: "ME-nos KA-ro de lo ke pen-SA-ba" },
        { target: "El mejor restaurante de la ciudad", native: "Şehrin en iyi restoranı", pronunciation: "el me-HOR res-tau-RAN-te de la siu-DAD" },
        { target: "El peor día de mi vida", native: "Hayatımın en kötü günü", pronunciation: "el pe-OR DI-a de mi VI-da" },
        { target: "Mayor que su hermano", native: "Kardeşinden büyük", pronunciation: "ma-YOR ke su er-MA-no" },
        { target: "Menor de edad", native: "Reşit olmayan", pronunciation: "me-NOR de e-DAD" }
    ]
};

// ===== ÜNİTE 59: A2 ZARF YAPILARI KALIPLARI =====
const unit59Phrases: UnitPhrases = {
    unitId: 59, title: "A2 Zarf Yapıları Kalıpları",
    phrases: [
        { target: "Habla español perfectamente", native: "Mükemmel İspanyolca konuşuyor", pronunciation: "A-bla es-pa-NYOL per-fek-ta-MEN-te" },
        { target: "Normalmente me levanto temprano", native: "Normalde erken kalkarım", pronunciation: "nor-mal-MEN-te me le-VAN-to tem-PRA-no" },
        { target: "Desafortunadamente no puedo ir", native: "Maalesef gidemiyorum", pronunciation: "des-a-for-tu-na-da-MEN-te no PUE-do ir" },
        { target: "Obviamente tienes razón", native: "Açıkça haklısın", pronunciation: "OB-via-men-te TIE-nes ra-SON" },
        { target: "Generalmente como a las dos", native: "Genellikle ikide yerim", pronunciation: "he-ne-ral-MEN-te KO-mo a las dos" },
        { target: "Lentamente pero seguro", native: "Yavaş ama emin", pronunciation: "len-ta-MEN-te PE-ro se-GU-ro" },
        { target: "Fácilmente puedo ayudarte", native: "Kolayca sana yardım edebilirim", pronunciation: "FA-sil-men-te PUE-do a-yu-DAR-te" },
        { target: "Finalmente llegamos", native: "Sonunda vardık", pronunciation: "fi-nal-MEN-te ye-GA-mos" }
    ]
};

// ===== ÜNİTE 60: A2 FİNAL TEKRAR KALIPLARI =====
const unit60Phrases: UnitPhrases = {
    unitId: 60, title: "A2 Final Tekrar Kalıpları",
    phrases: [
        { target: "He completado el nivel A2", native: "A2 seviyesini tamamladım", pronunciation: "e kom-ple-TA-do el ni-VEL a-dos" },
        { target: "Ahora puedo comunicarme mejor", native: "Artık daha iyi iletişim kurabiliyorum", pronunciation: "a-O-ra PUE-do ko-mu-ni-KAR-me me-HOR" },
        { target: "Mi español ha mejorado mucho", native: "İspanyolcam çok gelişti", pronunciation: "mi es-pa-NYOL a me-ho-RA-do MU-cho" },
        { target: "Estoy listo para el nivel B1", native: "B1 seviyesine hazırım", pronunciation: "es-TOY LIS-to PA-ra el ni-VEL be-U-no" },
        { target: "Ha sido un gran viaje", native: "Harika bir yolculuk oldu", pronunciation: "a SI-do un gran VIA-he" },
        { target: "Seguiré practicando", native: "Pratik yapmaya devam edeceğim", pronunciation: "se-gi-RE prak-ti-KAN-do" },
        { target: "Gracias por todo", native: "Her şey için teşekkürler", pronunciation: "GRA-sias por TO-do" },
        { target: "¡Hasta el próximo nivel!", native: "Bir sonraki seviyede görüşürüz!", pronunciation: "AS-ta el PROK-si-mo ni-VEL" }
    ]
};

// Ünite ID'sine göre A2 phrases getir (ID: 31-60)
export function getA2PhrasesForUnit(unitId: number): UnitPhrases {
    const idMapping: { [key: number]: UnitPhrases } = {
        // Curriculum ID 31-60 -> A2 Phrases
        31: unit21Phrases, 32: unit22Phrases, 33: unit23Phrases, 34: unit24Phrases, 35: unit25Phrases,
        36: unit26Phrases, 37: unit27Phrases, 38: unit28Phrases, 39: unit29Phrases, 40: unit30Phrases,
        41: unit31Phrases, 42: unit32Phrases, 43: unit33Phrases, 44: unit34Phrases, 45: unit35Phrases,
        46: unit36Phrases, 47: unit37Phrases, 48: unit38Phrases, 49: unit39Phrases, 50: unit40Phrases,
        51: unit51Phrases, 52: unit52Phrases, 53: unit53Phrases, 54: unit54Phrases, 55: unit55Phrases,
        56: unit56Phrases, 57: unit57Phrases, 58: unit58Phrases, 59: unit59Phrases, 60: unit60Phrases
    };

    const phrases = idMapping[unitId];
    if (phrases) {
        return { ...phrases, unitId };
    }
    return unit21Phrases;
}
