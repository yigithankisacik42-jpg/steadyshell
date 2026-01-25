/**
 * SteadyShell Konuşma Veritabanı - İspanyolca A2
 * Ünite 21-50 için konuşma içerikleri
 * Curriculum ile uyumlu
 */

import { UnitSpeaking, SpeakingExercise } from './speakings';

// ===== ÜNİTE 21: DUYGULAR VE HİSLER =====
const unit21Speaking: UnitSpeaking = {
    unitId: 21, title: "Duygular ve Hisler", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Hoy me siento muy feliz porque es mi cumpleaños.", translation: "Bugün çok mutluyum çünkü doğum günüm." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Estoy un poco triste porque mi amigo está enfermo.", translation: "Biraz üzgünüm çünkü arkadaşım hasta." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo te sientes hoy?", translation: "Bugün nasıl hissediyorsun?", expectedKeywords: ["siento", "estoy", "feliz", "triste", "cansado", "bien"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Por qué estás tan contento?", translation: "Neden bu kadar mutlusun?", expectedKeywords: ["porque", "feliz", "contento", "buenas noticias", "alegría"] },
    ]
};

// ===== ÜNİTE 22: OKUL VE SINIF =====
const unit22Speaking: UnitSpeaking = {
    unitId: 22, title: "Okul ve Sınıf", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Necesito un cuaderno y un bolígrafo para la clase.", translation: "Ders için defter ve tükenmez kalem lazım." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Mi asignatura favorita es matemáticas.", translation: "En sevdiğim ders matematik." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué asignaturas estudias?", translation: "Hangi dersleri okuyorsun?", expectedKeywords: ["estudio", "matemáticas", "historia", "inglés", "ciencias"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué necesitas para la clase?", translation: "Ders için neye ihtiyacın var?", expectedKeywords: ["necesito", "libro", "cuaderno", "bolígrafo", "lápiz"] },
    ]
};

// ===== ÜNİTE 23: TATİLLER VE BAYRAMLAR =====
const unit23Speaking: UnitSpeaking = {
    unitId: 23, title: "Tatiller ve Bayramlar", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "En Navidad siempre celebramos en familia.", translation: "Noel'de her zaman aile olarak kutlarız." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Mi cumpleaños es el quince de marzo.", translation: "Doğum günüm on beş Mart." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuándo es tu cumpleaños?", translation: "Doğum günün ne zaman?", expectedKeywords: ["cumpleaños", "es", "enero", "febrero", "día"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo celebras la Navidad?", translation: "Noel'i nasıl kutlarsın?", expectedKeywords: ["celebro", "familia", "cena", "regalos", "árbol"] },
    ]
};

// ===== ÜNİTE 24: ÜLKELER VE MİLLETLER =====
const unit24Speaking: UnitSpeaking = {
    unitId: 24, title: "Ülkeler ve Milletler", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Soy de Turquía y hablo turco y español.", translation: "Türkiye'denim ve Türkçe ile İspanyolca konuşuyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Me gustaría visitar España algún día.", translation: "Bir gün İspanya'yı ziyaret etmek isterim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿De dónde eres?", translation: "Nerelisin?", expectedKeywords: ["soy", "de", "Turquía", "país", "ciudad"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué idiomas hablas?", translation: "Hangi dilleri konuşuyorsun?", expectedKeywords: ["hablo", "turco", "español", "inglés", "idioma"] },
    ]
};

// ===== ÜNİTE 25: TEMEL FİİLLER =====
const unit25Speaking: UnitSpeaking = {
    unitId: 25, title: "Temel Fiiller", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Normalmente como a las dos y ceno a las nueve.", translation: "Normalde iki'de öğle yemeği, dokuzda akşam yemeği yerim." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Trabajo de lunes a viernes y descanso el fin de semana.", translation: "Pazartesi'den Cuma'ya çalışırım ve hafta sonu dinlenirim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿A qué hora comes?", translation: "Saat kaçta yemek yersin?", expectedKeywords: ["como", "a las", "mediodía", "una", "dos"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué haces los fines de semana?", translation: "Hafta sonları ne yaparsın?", expectedKeywords: ["descanso", "salgo", "veo", "duermo", "hago"] },
    ]
};

// ===== ÜNİTE 26: İŞARET SIFATLARI =====
const unit26Speaking: UnitSpeaking = {
    unitId: 26, title: "İşaret Sıfatları", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Este libro es mío y ese es tuyo.", translation: "Bu kitap benim, o senin." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Aquellas montañas son muy altas.", translation: "Şuradaki dağlar çok yüksek." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuál prefieres, este o ese?", translation: "Hangisini tercih edersin, bu mu o mu?", expectedKeywords: ["prefiero", "este", "ese", "aquel", "me gusta"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué es esto?", translation: "Bu nedir?", expectedKeywords: ["esto", "es", "un", "una", "libro", "cosa"] },
    ]
};

// ===== ÜNİTE 27: DEL KULLANIMI =====
const unit27Speaking: UnitSpeaking = {
    unitId: 27, title: "DEL Kullanımı", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El coche del profesor está en el garaje.", translation: "Öğretmenin arabası garajda." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Vengo del trabajo muy cansado.", translation: "İşten çok yorgun geliyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿De quién es este libro?", translation: "Bu kitap kimin?", expectedKeywords: ["es", "del", "de la", "profesor", "amigo", "mío"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿De dónde vienes?", translation: "Nereden geliyorsun?", expectedKeywords: ["vengo", "del", "de la", "trabajo", "casa", "escuela"] },
    ]
};

// ===== ÜNİTE 28: SIRA SAYILARI =====
const unit28Speaking: UnitSpeaking = {
    unitId: 28, title: "Sıra Sayıları", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Vivo en el tercer piso del edificio.", translation: "Binanın üçüncü katında oturuyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es la primera vez que visito España.", translation: "İspanya'yı ilk kez ziyaret ediyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿En qué piso vives?", translation: "Kaçıncı katta oturuyorsun?", expectedKeywords: ["vivo", "primero", "segundo", "tercero", "piso"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Es la primera vez que estudias español?", translation: "İspanyolca öğrenmek ilk seferin mi?", expectedKeywords: ["sí", "no", "primera", "segunda", "vez", "años"] },
    ]
};

// ===== ÜNİTE 29: SORU KELİMELERİ =====
const unit29Speaking: UnitSpeaking = {
    unitId: 29, title: "Soru Kelimeleri", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿Cuántos hermanos tienes?", translation: "Kaç kardeşin var?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "¿Por qué estudias español?", translation: "Neden İspanyolca öğreniyorsun?" },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuántos años tienes?", translation: "Kaç yaşındasın?", expectedKeywords: ["tengo", "años", "veinte", "treinta", "veinticinco"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Por qué quieres aprender español?", translation: "Neden İspanyolca öğrenmek istiyorsun?", expectedKeywords: ["porque", "quiero", "me gusta", "viajes", "trabajo"] },
    ]
};

// ===== ÜNİTE 30: PODER FİİLİ =====
const unit30Speaking: UnitSpeaking = {
    unitId: 30, title: "PODER Fiili", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿Puedo abrir la ventana? Hace mucho calor.", translation: "Pencereyi açabilir miyim? Çok sıcak." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "No puedo ir a tu fiesta porque tengo que trabajar.", translation: "Partine gidemiyorum çünkü çalışmam gerekiyor." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Puedes ayudarme?", translation: "Bana yardım edebilir misin?", expectedKeywords: ["sí", "puedo", "ayudar", "claro", "por supuesto"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué puedes hacer bien?", translation: "Neyi iyi yapabilirsin?", expectedKeywords: ["puedo", "cocinar", "cantar", "bailar", "hablar"] },
    ]
};

// ===== ÜNİTE 31: GEÇMİŞ ZAMAN 1 =====
const unit31Speaking: UnitSpeaking = {
    unitId: 31, title: "Geçmiş Zaman 1", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Ayer comí en un restaurante italiano.", translation: "Dün bir İtalyan restoranında yemek yedim." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "El fin de semana pasado viajé a Barcelona.", translation: "Geçen hafta sonu Barcelona'ya gittim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué hiciste ayer?", translation: "Dün ne yaptın?", expectedKeywords: ["hice", "fui", "comí", "vi", "estudié"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Dónde estuviste el fin de semana?", translation: "Hafta sonu neredeydin?", expectedKeywords: ["estuve", "fui", "casa", "playa", "amigos"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Anoche vi una película muy buena.", translation: "Dün gece çok iyi bir film izledim." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "La semana pasada trabajé mucho.", translation: "Geçen hafta çok çalıştım." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿A qué hora te levantaste ayer?", translation: "Dün saat kaçta kalktın?", expectedKeywords: ["me levanté", "a las", "temprano", "tarde"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Ayer estudié español durante tres horas.", translation: "Dün üç saat İspanyolca çalıştım." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Con quién hablaste ayer?", translation: "Dün kiminle konuştun?", expectedKeywords: ["hablé", "con", "amigo", "familia", "nadie"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "El mes pasado empecé un nuevo trabajo.", translation: "Geçen ay yeni bir işe başladım." }
    ]
};

// ===== ÜNİTE 32: GEÇMİŞ ZAMAN 2 =====
const unit32Speaking: UnitSpeaking = {
    unitId: 32, title: "Geçmiş Zaman 2", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Tuve un problema con mi coche ayer.", translation: "Dün arabamla ilgili bir sorun yaşadım." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Vine lo más rápido posible.", translation: "Mümkün olduğunca hızlı geldim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué dijiste?", translation: "Ne dedin?", expectedKeywords: ["dije", "que", "sí", "no", "nada"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Pudiste terminar el trabajo?", translation: "İşi bitirebildin mi?", expectedKeywords: ["sí", "no", "pude", "terminar", "tiempo"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "No quise ir a la fiesta.", translation: "Partiye gitmek istemedim." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Supe la verdad ayer.", translation: "Dün gerçeği öğrendim." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Dónde pusiste las llaves?", translation: "Anahtarları nereye koydun?", expectedKeywords: ["puse", "en", "mesa", "bolsillo", "aquí"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Hice todo lo que pude.", translation: "Elimden gelen her şeyi yaptım." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Trajiste el libro?", translation: "Kitabı getirdin mi?", expectedKeywords: ["sí", "no", "traje", "olvidé", "libro"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Estuve muy ocupado la semana pasada.", translation: "Geçen hafta çok meşguldüm." }
    ]
};

// ===== ÜNİTE 33: RESTORANDA =====
const unit33Speaking: UnitSpeaking = {
    unitId: 33, title: "Restoranda", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Mesa para dos, por favor.", translation: "İki kişilik masa lütfen." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "De primero quiero la sopa y de segundo el pescado.", translation: "İlk olarak çorba, ana yemek olarak balık istiyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué desea beber?", translation: "Ne içmek istersiniz?", expectedKeywords: ["quiero", "agua", "vino", "cerveza", "zumo"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "La cuenta, por favor.", translation: "Hesap lütfen.", expectedKeywords: ["son", "euros", "aquí", "tiene", "tarjeta"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "¿Tienen menú del día?", translation: "Günün menüsü var mı?" },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "¿Qué me recomienda?", translation: "Ne önerirsiniz?" },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cómo quiere la carne?", translation: "Eti nasıl istersiniz?", expectedKeywords: ["poco", "hecha", "muy", "término", "medio"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Está delicioso, gracias.", translation: "Çok lezzetli, teşekkürler." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Desean algo de postre?", translation: "Tatlı ister misiniz?", expectedKeywords: ["sí", "no", "helado", "tarta", "café"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¿Puedo pagar con tarjeta?", translation: "Kartla ödeyebilir miyim?" }
    ]
};

// ===== ÜNİTE 34: ALIŞVERİŞ =====
const unit34Speaking: UnitSpeaking = {
    unitId: 34, title: "Alışveriş", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿Cuánto cuesta esta camiseta?", translation: "Bu tişört kaç para?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "¿Puedo probarme estos pantalones?", translation: "Bu pantolonu deneyebilir miyim?" },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿En qué puedo ayudarle?", translation: "Size nasıl yardımcı olabilirim?", expectedKeywords: ["busco", "quiero", "necesito", "tiene", "camiseta"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo quiere pagar?", translation: "Nasıl ödeme yapmak istersiniz?", expectedKeywords: ["tarjeta", "efectivo", "pagar", "euros"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "¿Tiene esta falda en otra talla?", translation: "Bu eteğin başka bedeni var mı?" },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Me queda un poco pequeño.", translation: "Biraz küçük geliyor." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Hay descuento?", translation: "İndirim var mı?", expectedKeywords: ["sí", "no", "descuento", "rebajas", "porcentaje"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Me lo llevo.", translation: "Bunu alıyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Dónde están los probadores?", translation: "Giyinme kabinleri nerede?", expectedKeywords: ["ahí", "fondo", "derecha", "izquierda"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¿Aceptan devoluciones?", translation: "İade kabul ediyor musunuz?" }
    ]
};

// ===== ÜNİTE 35: SEYAHAT PLANLARI =====
const unit35Speaking: UnitSpeaking = {
    unitId: 35, title: "Seyahat Planları", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El próximo verano voy a visitar España.", translation: "Gelecek yaz İspanya'yı ziyaret edeceğim." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Quiero reservar un vuelo a Madrid.", translation: "Madrid'e uçuş rezervasyonu yapmak istiyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Adónde quieres viajar?", translation: "Nereye seyahat etmek istiyorsun?", expectedKeywords: ["quiero", "viajar", "visitar", "ir", "España"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuántos días vas a estar de vacaciones?", translation: "Tatilde kaç gün kalacaksın?", expectedKeywords: ["días", "semana", "voy", "estar", "quince"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Necesito un seguro de viaje.", translation: "Seyahat sigortasına ihtiyacım var." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Voy a hacer las maletas esta noche.", translation: "Bu gece bavulları hazırlayacağım." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Prefieres playa o montaña?", translation: "Plajı mı dağı mı tercih edersin?", expectedKeywords: ["prefiero", "playa", "montaña", "ambos"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "He reservado un hotel con desayuno incluido.", translation: "Kahvaltı dahil otel rezervasyonu yaptım." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Con quién vas a viajar?", translation: "Kiminle seyahat edeceksin?", expectedKeywords: ["solo", "familia", "amigos", "pareja", "voy"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¡No puedo esperar a las vacaciones!", translation: "Tatili dört gözle bekliyorum!" }
    ]
};

// ===== ÜNİTE 36: OTEL REZERVASYONU =====
const unit36Speaking: UnitSpeaking = {
    unitId: 36, title: "Otel Rezervasyonu", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Tengo una reserva a nombre de García.", translation: "García adına rezervasyonum var." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Quisiera una habitación doble con vistas al mar.", translation: "Deniz manzaralı çift kişilik oda isterdim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Para cuántas noches?", translation: "Kaç gece için?", expectedKeywords: ["noches", "tres", "cinco", "una semana"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Desea desayuno incluido?", translation: "Kahvaltı dahil ister misiniz?", expectedKeywords: ["sí", "no", "desayuno", "incluido"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "¿A qué hora es el check-out?", translation: "Check-out saat kaçta?" },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "¿Hay wifi gratis en la habitación?", translation: "Odada ücretsiz wifi var mı?" },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Necesita ayuda con el equipaje?", translation: "Bavulla ilgili yardıma ihtiyacınız var mı?", expectedKeywords: ["sí", "no", "gracias", "ayuda"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Quisiera una caja fuerte en la habitación.", translation: "Odada kasa istiyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Dónde está el ascensor?", translation: "Asansör nerede?", expectedKeywords: ["ahí", "derecha", "izquierda", "fondo"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "La habitación está muy limpia, gracias.", translation: "Oda çok temiz, teşekkürler." }
    ]
};

// ===== ÜNİTE 37: HAVALİMANINDA =====
const unit37Speaking: UnitSpeaking = {
    unitId: 37, title: "Havalimanında", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿A qué hora sale el vuelo a París?", translation: "Paris uçuşu saat kaçta kalkıyor?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Mi vuelo tiene retraso.", translation: "Uçuşum gecikti." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Lleva equipaje?", translation: "Bagajınız var mı?", expectedKeywords: ["sí", "no", "maleta", "equipaje", "mano"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Prefiere ventanilla o pasillo?", translation: "Pencere mi koridor mu tercih edersiniz?", expectedKeywords: ["ventanilla", "pasillo", "prefiero"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "¿Dónde está la puerta de embarque?", translation: "Biniş kapısı nerede?" },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Tengo que pasar por el control de seguridad.", translation: "Güvenlik kontrolünden geçmem gerekiyor." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Puedo llevar esto en el equipaje de mano?", translation: "Bunu el bagajında taşıyabilir miyim?", expectedKeywords: ["sí", "no", "puede", "permitido"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El vuelo ha sido cancelado.", translation: "Uçuş iptal edildi." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cuándo es el próximo vuelo?", translation: "Sonraki uçuş ne zaman?", expectedKeywords: ["próximo", "hora", "mañana", "tarde"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¡Buen viaje!", translation: "İyi yolculuklar!" }
    ]
};

// ===== ÜNİTE 38: DOKTORDA =====
const unit38Speaking: UnitSpeaking = {
    unitId: 38, title: "Doktorda", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Tengo dolor de cabeza y fiebre.", translation: "Baş ağrım ve ateşim var." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Me duele mucho la garganta.", translation: "Boğazım çok ağrıyor." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué síntomas tiene?", translation: "Belirtileriniz neler?", expectedKeywords: ["dolor", "fiebre", "tos", "mareo", "cansancio"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Es alérgico a algo?", translation: "Bir şeye alerjiniz var mı?", expectedKeywords: ["no", "sí", "alérgico", "penicilina", "ninguno"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Necesito una cita con el médico.", translation: "Doktordan randevu almam gerekiyor." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "He estado enfermo desde ayer.", translation: "Dünden beri hastayım." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Toma algún medicamento?", translation: "Herhangi bir ilaç alıyor musunuz?", expectedKeywords: ["sí", "no", "tomo", "medicamento", "pastilla"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Me siento mejor hoy.", translation: "Bugün daha iyi hissediyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cuándo empezó el dolor?", translation: "Ağrı ne zaman başladı?", expectedKeywords: ["ayer", "hace", "días", "semana", "empezó"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¿Puede darme un justificante médico?", translation: "Doktor raporu verebilir misiniz?" }
    ]
};

// ===== ÜNİTE 39: ECZANEDE =====
const unit39Speaking: UnitSpeaking = {
    unitId: 39, title: "Eczanede", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Necesito algo para el dolor de cabeza.", translation: "Baş ağrısı için bir şey lazım." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "¿Tiene esta medicina sin receta?", translation: "Bu ilacı reçetesiz satıyor musunuz?" },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Necesita algo más?", translation: "Başka bir şeye ihtiyacınız var mı?", expectedKeywords: ["no", "sí", "gracias", "tiritas"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo debo tomar estas pastillas?", translation: "Bu hapları nasıl almalıyım?", expectedKeywords: ["veces", "día", "comida", "agua"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "¿Tiene algo para la tos?", translation: "Öksürük için bir şeyiniz var mı?" },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Necesito unas tiritas.", translation: "Yara bandına ihtiyacım var." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Tiene algún efecto secundario?", translation: "Yan etkisi var mı?", expectedKeywords: ["sí", "no", "puede", "sueño", "mareo"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "¿Cuánto cuesta este jarabe?", translation: "Bu şurup ne kadar?" },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Es para adultos o niños?", translation: "Yetişkinler için mi çocuklar için mi?", expectedKeywords: ["adultos", "niños", "para", "años"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Gracias por su ayuda.", translation: "Yardımınız için teşekkürler." }
    ]
};

// ===== ÜNİTE 40: MESLEKLER 2 =====
const unit40Speaking: UnitSpeaking = {
    unitId: 40, title: "Meslekler 2", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Soy ingeniero y trabajo en una empresa de tecnología.", translation: "Mühendisim ve bir teknoloji şirketinde çalışıyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Mi trabajo consiste en diseñar aplicaciones.", translation: "İşim uygulama tasarlamak." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿A qué te dedicas?", translation: "Ne iş yapıyorsun?", expectedKeywords: ["soy", "trabajo", "dedico", "profesor", "médico"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Te gusta tu trabajo?", translation: "İşini seviyor musun?", expectedKeywords: ["sí", "no", "gusta", "encanta", "mucho"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Trabajo desde casa tres días a la semana.", translation: "Haftada üç gün evden çalışıyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Mi jefe es muy exigente pero justo.", translation: "Patronum çok talepkar ama adil." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cuántas horas trabajas al día?", translation: "Günde kaç saat çalışıyorsun?", expectedKeywords: ["horas", "ocho", "trabajo", "día"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Tengo reunión a las diez.", translation: "Saat onda toplantım var." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es tu horario de trabajo?", translation: "Çalışma saatlerin ne?", expectedKeywords: ["de", "a", "mañana", "tarde", "nueve"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Estoy buscando un ascenso.", translation: "Terfi arıyorum." }
    ]
};

// ===== ÜNİTE 41: İŞ GÖRÜŞMESİ =====
const unit41Speaking: UnitSpeaking = {
    unitId: 41, title: "İş Görüşmesi", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Tengo experiencia en marketing digital.", translation: "Dijital pazarlamada deneyimim var." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Mi mayor fortaleza es el trabajo en equipo.", translation: "En büyük gücüm takım çalışması." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Por qué quiere trabajar aquí?", translation: "Neden burada çalışmak istiyorsunuz?", expectedKeywords: ["porque", "interesa", "empresa", "oportunidad"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son sus expectativas salariales?", translation: "Maaş beklentileriniz neler?", expectedKeywords: ["euros", "mes", "salario", "negociable"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Puedo empezar inmediatamente.", translation: "Hemen başlayabilirim." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Tengo referencias de mi trabajo anterior.", translation: "Önceki işimden referanslarım var." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Dónde ve usted en cinco años?", translation: "Beş yıl sonra kendinizi nerede görüyorsunuz?", expectedKeywords: ["quiero", "espero", "me veo", "posición", "crecer"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Soy una persona muy organizada.", translation: "Çok düzenli biriyim." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es su mayor debilidad?", translation: "En büyük zayıflığınız nedir?", expectedKeywords: ["perfeccionista", "impaciente", "debilidad", "trabajo"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Gracias por la oportunidad.", translation: "Fırsat için teşekkürler." }
    ]
};

// ===== ÜNİTE 42: TELEFONDA =====
const unit42Speaking: UnitSpeaking = {
    unitId: 42, title: "Telefonda", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿Podría hablar con el señor López?", translation: "Bay López ile konuşabilir miyim?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Le llamo para confirmar la cita.", translation: "Randevuyu onaylamak için arıyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿De parte de quién?", translation: "Kim arıyor?", expectedKeywords: ["soy", "llamo", "nombre", "parte"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "No está disponible ahora.", translation: "Şu anda müsait değil.", expectedKeywords: ["mensaje", "llamar", "más tarde", "volver"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "¿Puede dejarle un recado?", translation: "Mesaj bırakabilir misiniz?" },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Le devolveré la llamada.", translation: "Sizi geri ararım." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es su número de teléfono?", translation: "Telefon numaranız nedir?", expectedKeywords: ["número", "es", "teléfono"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Un momento, por favor.", translation: "Bir dakika, lütfen." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Puede repetir, por favor?", translation: "Tekrar edebilir misiniz, lütfen?", expectedKeywords: ["sí", "claro", "repito"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Gracias por llamar.", translation: "Aradığınız için teşekkürler." }
    ]
};

// ===== ÜNİTE 43: E-POSTA YAZMA =====
const unit43Speaking: UnitSpeaking = {
    unitId: 43, title: "E-posta Yazma", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Le escribo para solicitar información.", translation: "Bilgi istemek için yazıyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Adjunto mi currículum para su consideración.", translation: "Değerlendirmeniz için özgeçmişimi ekliyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo empezarías un correo formal?", translation: "Resmi bir e-postaya nasıl başlarsın?", expectedKeywords: ["estimado", "señor", "señora", "le escribo"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo terminarías un correo?", translation: "E-postayı nasıl bitirirsin?", expectedKeywords: ["atentamente", "saludos", "cordiales", "gracias"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Quedo a la espera de su respuesta.", translation: "Cevabınızı bekliyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Gracias de antemano por su ayuda.", translation: "Yardımınız için şimdiden teşekkürler." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué pones en el asunto del correo?", translation: "E-postanın konusuna ne yazıyorsun?", expectedKeywords: ["asunto", "tema", "solicitud", "información"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Le envío la información solicitada.", translation: "Talep edilen bilgiyi gönderiyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cómo responderías a un correo?", translation: "Bir e-postaya nasıl cevap verirsin?", expectedKeywords: ["gracias", "recibido", "respondo", "informo"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Disculpe la tardanza en responder.", translation: "Geç cevap verdiğim için özür dilerim." }
    ]
};

// ===== ÜNİTE 44: FİKİR BEYAN ETME =====
const unit44Speaking: UnitSpeaking = {
    unitId: 44, title: "Fikir Beyan Etme", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Creo que es una buena idea.", translation: "Bence iyi bir fikir." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "En mi opinión, deberíamos ir al cine.", translation: "Bana göre sinemaya gitmeliyiz." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué opinas sobre esto?", translation: "Bu konuda ne düşünüyorsun?", expectedKeywords: ["creo", "pienso", "opino", "me parece"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Estás de acuerdo conmigo?", translation: "Benimle aynı fikirde misin?", expectedKeywords: ["sí", "no", "de acuerdo", "creo", "pienso"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "No estoy de acuerdo contigo.", translation: "Seninle aynı fikirde değilim." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Me parece que tienes razón.", translation: "Bence haklısın." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué piensas del cambio climático?", translation: "İklim değişikliği hakkında ne düşünüyorsun?", expectedKeywords: ["creo", "pienso", "importante", "problema", "grave"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Desde mi punto de vista, es correcto.", translation: "Benim bakış açımdan doğru." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es tu opinión?", translation: "Senin fikrin ne?", expectedKeywords: ["opinión", "creo", "pienso", "me parece"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Respeto tu opinión, pero no la comparto.", translation: "Fikrini saygıyla karşılıyorum ama katılmıyorum." }
    ]
};

// ===== ÜNİTE 45: KARAKTER ÖZELLİKLERİ =====
const unit45Speaking: UnitSpeaking = {
    unitId: 45, title: "Karakter Özellikleri", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Mi amigo es muy simpático y amable.", translation: "Arkadaşım çok sempatik ve nazik." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Soy una persona organizada pero impaciente.", translation: "Düzenli ama sabırsız biriyim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo eres?", translation: "Nasıl birisin?", expectedKeywords: ["soy", "persona", "amable", "tímido", "extrovertido"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es tu mayor defecto?", translation: "En büyük kusurun ne?", expectedKeywords: ["defecto", "soy", "impaciente", "perfeccionista", "nervioso"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Es una persona muy trabajadora.", translation: "O çok çalışkan biri." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Mi hermano es un poco tímido.", translation: "Kardeşim biraz utangaç." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Eres una persona optimista o pesimista?", translation: "Optimist misin, pesimist mi?", expectedKeywords: ["soy", "optimista", "pesimista", "depende"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Intento ser honesto siempre.", translation: "Her zaman dürüst olmaya çalışıyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cómo describirías a tu mejor amigo?", translation: "En iyi arkadaşını nasıl tanımlarsın?", expectedKeywords: ["es", "simpático", "amable", "divertido", "leal"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Soy muy paciente con los niños.", translation: "Çocuklara karşı çok sabırlıyım." }
    ]
};

// ===== ÜNİTE 46: GELECEK PLANLARI =====
const unit46Speaking: UnitSpeaking = {
    unitId: 46, title: "Gelecek Planları", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Voy a estudiar medicina el próximo año.", translation: "Gelecek yıl tıp okuyacağım." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Este verano vamos a viajar a Italia.", translation: "Bu yaz İtalya'ya seyahat edeceğiz." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué vas a hacer mañana?", translation: "Yarın ne yapacaksın?", expectedKeywords: ["voy a", "trabajar", "estudiar", "salir", "descansar"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son tus planes para el futuro?", translation: "Gelecek için planların neler?", expectedKeywords: ["voy a", "quiero", "planes", "estudiar", "trabajar"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "El año que viene voy a casarme.", translation: "Gelecek yıl evleneceğim." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Pienso comprar una casa nueva.", translation: "Yeni bir ev almayı düşünüyorum." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Dónde te ves en diez años?", translation: "On yıl sonra kendini nerede görüyorsun?", expectedKeywords: ["me veo", "quiero", "espero", "sueño"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Vamos a tener un bebé.", translation: "Bebeğimiz olacak." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué quieres lograr este año?", translation: "Bu yıl ne başarmak istiyorsun?", expectedKeywords: ["quiero", "espero", "lograr", "meta", "objetivo"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Mi objetivo es aprender tres idiomas.", translation: "Hedefim üç dil öğrenmek." }
    ]
};

// ===== ÜNİTE 47: EMİR KİPİ =====
const unit47Speaking: UnitSpeaking = {
    unitId: 47, title: "Emir Kipi (Tú)", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¡Ven aquí, por favor!", translation: "Buraya gel lütfen!" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "¡Haz los deberes antes de salir!", translation: "Çıkmadan önce ödevlerini yap!" },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo le dirías a un amigo que venga?", translation: "Bir arkadaşına gelmesini nasıl söylersin?", expectedKeywords: ["ven", "venir", "aquí", "por favor"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué le dices a alguien que debe estudiar?", translation: "Çalışması gereken birine ne dersin?", expectedKeywords: ["estudia", "haz", "deberes", "trabaja"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "¡Cierra la puerta!", translation: "Kapıyı kapat!" },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "¡Come tu verdura!", translation: "Sebzeni ye!" },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cómo le pides a alguien que se calle?", translation: "Birine susmasını nasıl söylersin?", expectedKeywords: ["cállate", "silencio", "por favor"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "¡Escucha bien!", translation: "İyi dinle!" },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué dices cuando alguien debe esperar?", translation: "Birinin beklemesi gerektiğinde ne dersin?", expectedKeywords: ["espera", "momento", "un", "segundo"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¡No te preocupes!", translation: "Endişelenme!" }
    ]
};

// ===== ÜNİTE 48: SİNEMA VE DİZİ =====
const unit48Speaking: UnitSpeaking = {
    unitId: 48, title: "Sinema ve Dizi", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Vi una película de acción muy buena.", translation: "Çok iyi bir aksiyon filmi izledim." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Estoy viendo una serie española.", translation: "Bir İspanyol dizisi izliyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es tu película favorita?", translation: "En sevdiğin film hangisi?", expectedKeywords: ["favorita", "gusta", "película", "porque"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué género prefieres?", translation: "Hangi türü tercih edersin?", expectedKeywords: ["prefiero", "comedia", "acción", "terror", "drama"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "La película tuvo un final sorprendente.", translation: "Filmin şaşırtıcı bir sonu vardı." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "El actor principal es muy famoso.", translation: "Başrol oyuncusu çok ünlü." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué series estás viendo ahora?", translation: "Şu anda hangi dizileri izliyorsun?", expectedKeywords: ["estoy", "viendo", "serie", "Netflix", "favorita"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Me encanta el cine español.", translation: "İspanyol sinemasını çok seviyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Prefieres ver películas en casa o en el cine?", translation: "Evde mi sinemada mı izlemeyi tercih edersin?", expectedKeywords: ["prefiero", "casa", "cine", "porque"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "No me gustan las películas de terror.", translation: "Korku filmlerini sevmem." }
    ]
};

// ===== ÜNİTE 49: TEKNOLOJİ =====
const unit49Speaking: UnitSpeaking = {
    unitId: 49, title: "Teknoloji", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Uso mi teléfono para redes sociales.", translation: "Telefonumu sosyal medya için kullanıyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Trabajo desde casa con un portátil.", translation: "Dizüstü bilgisayarla evden çalışıyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuántas horas usas el móvil?", translation: "Günde kaç saat telefon kullanırsın?", expectedKeywords: ["horas", "mucho", "poco", "demasiado"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué aplicaciones usas?", translation: "Hangi uygulamaları kullanırsın?", expectedKeywords: ["uso", "WhatsApp", "Instagram", "YouTube"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Mi ordenador es muy lento.", translation: "Bilgisayarım çok yavaş." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Necesito cargar la batería.", translation: "Bataryayı şarj etmem lazım." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Tienes wifi en casa?", translation: "Evde wifi var mı?", expectedKeywords: ["sí", "no", "wifi", "internet", "rápido"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "He descargado una nueva aplicación.", translation: "Yeni bir uygulama indirdim." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Prefieres Apple o Android?", translation: "Apple mı Android mi tercih edersin?", expectedKeywords: ["prefiero", "Apple", "Android", "porque"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "La tecnología ha cambiado mucho.", translation: "Teknoloji çok değişti." }
    ]
};

// ===== ÜNİTE 50: SOSYAL MEDYA =====
const unit50Speaking: UnitSpeaking = {
    unitId: 50, title: "Sosyal Medya", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Publico fotos en Instagram casi todos los días.", translation: "Neredeyse her gün Instagram'da fotoğraf paylaşıyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Intento limitar el tiempo en las redes.", translation: "Sosyal medyada geçirdiğim zamanı sınırlamaya çalışıyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué redes sociales usas?", translation: "Hangi sosyal medyaları kullanırsın?", expectedKeywords: ["uso", "Instagram", "Twitter", "TikTok", "Facebook"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Crees que son buenas o malas?", translation: "İyi mi kötü mü olduğunu düşünüyorsun?", expectedKeywords: ["creo", "buenas", "malas", "depende", "útiles"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Tengo muchos seguidores en mi cuenta.", translation: "Hesabımda çok takipçim var." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Me gusta ver vídeos en YouTube.", translation: "YouTube'da video izlemeyi seviyorum." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cuántos seguidores tienes?", translation: "Kaç takipçin var?", expectedKeywords: ["tengo", "seguidores", "muchos", "pocos", "mil"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "He eliminado mi cuenta de Facebook.", translation: "Facebook hesabımı sildim." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué contenido publicas?", translation: "Ne tür içerik paylaşıyorsun?", expectedKeywords: ["fotos", "vídeos", "historias", "noticias"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Las redes sociales pueden ser adictivas.", translation: "Sosyal medya bağımlılık yapabilir." }
    ]
};

// A2 speakings listesi// ===== ÜNİTE 51: EV VE TAŞINMA =====
const unit51Speaking: UnitSpeaking = {
    unitId: 51, title: "Ev ve Taşınma", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Estoy buscando un piso de dos habitaciones.", translation: "İki odalı bir daire arıyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "El alquiler incluye los gastos de agua y electricidad.", translation: "Kira su ve elektrik masraflarını içeriyor." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuánto es el alquiler mensual?", translation: "Aylık kira ne kadar?", expectedKeywords: ["euros", "mes", "alquiler", "cuesta"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Está amueblado el piso?", translation: "Daire eşyalı mı?", expectedKeywords: ["sí", "no", "amueblado", "muebles", "vacío"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "El piso tiene mucha luz natural.", translation: "Daire çok doğal ışık alıyor." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Me mudé el mes pasado.", translation: "Geçen ay taşındım." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿En qué piso vives?", translation: "Kaçıncı katta oturuyorsun?", expectedKeywords: ["vivo", "piso", "primero", "tercero", "bajo"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Necesito hacer una fianza.", translation: "Depozito yatırmam gerekiyor." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Tienes balcón?", translation: "Balkonun var mı?", expectedKeywords: ["sí", "no", "balcón", "terraza", "pequeño"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "El barrio es muy tranquilo.", translation: "Mahalle çok sakin." }
    ]
};

// ===== ÜNİTE 52: ÇEVRE VE DOĞA =====
const unit52Speaking: UnitSpeaking = {
    unitId: 52, title: "Çevre ve Doğa", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Es importante reciclar el plástico y el papel.", translation: "Plastik ve kağıdı geri dönüştürmek önemli." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "El cambio climático afecta a todo el planeta.", translation: "İklim değişikliği tüm gezegeni etkiliyor." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué haces para proteger el medio ambiente?", translation: "Çevreyi korumak için ne yapıyorsun?", expectedKeywords: ["reciclo", "ahorro", "agua", "transporte", "público"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Crees que el cambio climático es un problema grave?", translation: "İklim değişikliğinin ciddi bir sorun olduğunu düşünüyor musun?", expectedKeywords: ["sí", "creo", "problema", "grave", "debemos"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Separo la basura en casa.", translation: "Evde çöp ayıklıyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Uso transporte público para no contaminar.", translation: "Kirletmemek için toplu taşıma kullanıyorum." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Reciclas en casa?", translation: "Evde geri dönüşüm yapıyor musun?", expectedKeywords: ["sí", "no", "reciclo", "papel", "plástico", "vidrio"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Debemos cuidar los bosques.", translation: "Ormanları korumalıyız." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué problemas ambientales hay en tu ciudad?", translation: "Şehrinde hangi çevre sorunları var?", expectedKeywords: ["contaminación", "tráfico", "basura", "aire", "ruido"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Los animales están en peligro de extinción.", translation: "Hayvanlar nesli tükenme tehlikesinde." }
    ]
};

// ===== ÜNİTE 53: HABERLER =====
const unit53Speaking: UnitSpeaking = {
    unitId: 53, title: "Haberler", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Leo las noticias en internet todas las mañanas.", translation: "Her sabah internetten haberleri okurum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Según el periódico, mañana va a llover.", translation: "Gazeteye göre yarın yağmur yağacak." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo te informas de las noticias?", translation: "Haberlerden nasıl haberdar olursun?", expectedKeywords: ["leo", "veo", "internet", "televisión", "periódico"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué opinas de las noticias de hoy?", translation: "Bugünkü haberler hakkında ne düşünüyorsun?", expectedKeywords: ["creo", "opino", "interesante", "importante", "triste"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Vi las noticias anoche.", translation: "Dün gece haberleri izledim." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Es una noticia muy importante.", translation: "Bu çok önemli bir haber." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué noticias te interesan más?", translation: "Hangi haberler seni daha çok ilgilendiriyor?", expectedKeywords: ["política", "deportes", "economía", "cultura", "ciencia"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Las noticias de hoy son muy negativas.", translation: "Bugünkü haberler çok olumsuz." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Confías en los medios de comunicación?", translation: "Medyaya güveniyor musun?", expectedKeywords: ["sí", "no", "confío", "depende", "algunos"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Prefiero leer noticias en línea.", translation: "Çevrimiçi haber okumayı tercih ederim." }
    ]
};

// ===== ÜNİTE 54: KÜLTÜR VE GELENEKLER =====
const unit54Speaking: UnitSpeaking = {
    unitId: 54, title: "Kültür ve Gelenekler", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "En España, la siesta es una tradición muy antigua.", translation: "İspanya'da öğle uykusu çok eski bir gelenektir." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Me encanta aprender sobre las costumbres de otros países.", translation: "Diğer ülkelerin adetlerini öğrenmeyi çok seviyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es una tradición típica de tu país?", translation: "Ülkenin tipik bir geleneği nedir?", expectedKeywords: ["tradición", "costumbre", "celebramos", "hacemos", "típico"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué te parece la cultura española?", translation: "İspanyol kültürü hakkında ne düşünüyorsun?", expectedKeywords: ["me parece", "interesante", "me gusta", "diferente", "rica"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "En mi país celebramos la Navidad en familia.", translation: "Ülkemde Noel'i aile olarak kutlarız." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "La música es parte importante de nuestra cultura.", translation: "Müzik kültürümüzün önemli bir parçasıdır." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué comida típica tiene tu país?", translation: "Ülkende hangi tipik yemekler var?", expectedKeywords: ["típica", "comida", "plato", "tradicional"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Las fiestas populares son muy divertidas.", translation: "Halk festivalleri çok eğlenceli." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Has visitado algún país extranjero?", translation: "Yabancı bir ülke ziyaret ettin mi?", expectedKeywords: ["sí", "no", "visité", "viajé", "país"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Cada cultura tiene algo especial.", translation: "Her kültürün özel bir şeyi var." }
    ]
};

// ===== ÜNİTE 55: İLGİ ZAMİRLERİ =====
const unit55Speaking: UnitSpeaking = {
    unitId: 55, title: "İlgi Zamirleri", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El libro que estoy leyendo es muy interesante.", translation: "Okuduğum kitap çok ilginç." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "La ciudad donde nací es pequeña.", translation: "Doğduğum şehir küçük." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Quién es la persona que más admiras?", translation: "En çok hayranlık duyduğun kişi kim?", expectedKeywords: ["que", "admiro", "persona", "porque", "es"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo se llama el lugar donde trabajas?", translation: "Çalıştığın yerin adı ne?", expectedKeywords: ["donde", "trabajo", "se llama", "empresa", "oficina"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "La película que vimos fue muy buena.", translation: "İzlediğimiz film çok iyiydi." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "El profesor que me enseñó español era excelente.", translation: "Bana İspanyolca öğreten öğretmen mükemmeldi." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es el plato que más te gusta?", translation: "En çok sevdiğin yemek hangisi?", expectedKeywords: ["que", "gusta", "plato", "comida", "favorito"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El amigo con quien viajé vive en Madrid.", translation: "Birlikte seyahat ettiğim arkadaşım Madrid'de yaşıyor." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es el país que más te gustaría visitar?", translation: "En çok ziyaret etmek istediğin ülke hangisi?", expectedKeywords: ["que", "gustaría", "visitar", "país"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "El coche que compré es rojo.", translation: "Aldığım araba kırmızı." }
    ]
};

// ===== ÜNİTE 56: DOLAYLI NESNE ZAMİRLERİ =====
const unit56Speaking: UnitSpeaking = {
    unitId: 56, title: "Dolaylı Nesne Zamirleri", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Te voy a dar un regalo.", translation: "Sana bir hediye vereceğim." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Le expliqué el problema al profesor.", translation: "Sorunu öğretmene açıkladım." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué le regalaste a tu madre?", translation: "Annene ne hediye ettin?", expectedKeywords: ["le", "regalé", "di", "compré", "regalo"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Me puedes prestar tu libro?", translation: "Kitabını bana ödünç verebilir misin?", expectedKeywords: ["te", "presto", "sí", "claro", "puedo"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Le escribí un mensaje a mi amigo.", translation: "Arkadaşıma bir mesaj yazdım." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Nos van a traer la comida.", translation: "Bize yemek getirecekler." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué le dijiste?", translation: "Ona ne söyledin?", expectedKeywords: ["le", "dije", "que", "verdad", "expliqué"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Os he enviado un correo.", translation: "Size bir e-posta gönderdim." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Me puedes ayudar?", translation: "Bana yardım edebilir misin?", expectedKeywords: ["te", "ayudo", "sí", "claro", "puedo"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Les compré regalos a mis padres.", translation: "Anne babama hediyeler aldım." }
    ]
};

// ===== ÜNİTE 57: BELİRSİZ ZAMİRLER =====
const unit57Speaking: UnitSpeaking = {
    unitId: 57, title: "Belirsiz Zamirler", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Alguien llamó a la puerta.", translation: "Biri kapıyı çaldı." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "No hay nada en la nevera.", translation: "Buzdolabında hiçbir şey yok." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Conoces a alguien aquí?", translation: "Burada birini tanıyor musun?", expectedKeywords: ["sí", "no", "conozco", "alguien", "nadie"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Tienes algo que hacer hoy?", translation: "Bugün yapacak bir şeyin var mı?", expectedKeywords: ["sí", "no", "tengo", "algo", "nada", "hacer"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Nadie sabe la respuesta.", translation: "Kimse cevabı bilmiyor." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "He visto a alguien en el jardín.", translation: "Bahçede birini gördüm." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Hay algo en la mesa?", translation: "Masada bir şey var mı?", expectedKeywords: ["sí", "no", "hay", "algo", "nada"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "No veo a nadie.", translation: "Kimseyi görmüyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Quieres algo de beber?", translation: "İçecek bir şey ister misin?", expectedKeywords: ["sí", "no", "quiero", "algo", "nada", "gracias"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Algo está pasando aquí.", translation: "Burada bir şeyler oluyor." }
    ]
};

// ===== ÜNİTE 58: A2 NİTELİK SIFATLARI =====
const unit58Speaking: UnitSpeaking = {
    unitId: 58, title: "A2 Nitelik Sıfatları", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Esta película es más interesante que la otra.", translation: "Bu film diğerinden daha ilginç." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es la persona más amable que conozco.", translation: "Tanıdığım en nazik kişi." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es la comida más rica que has probado?", translation: "Tattığın en lezzetli yemek hangisi?", expectedKeywords: ["más", "rica", "deliciosa", "probado", "comida"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Eres más alto que tu hermano?", translation: "Kardeşinden daha uzun musun?", expectedKeywords: ["sí", "no", "más", "alto", "bajo", "igual"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Mi coche es más rápido que el tuyo.", translation: "Arabam seninkinden daha hızlı." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Este es el mejor restaurante de la ciudad.", translation: "Bu şehrin en iyi restorantı." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es el lugar más bonito que has visitado?", translation: "Ziyaret ettiğin en güzel yer hangisi?", expectedKeywords: ["más", "bonito", "lugar", "visité"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Español es menos difícil que chino.", translation: "İspanyolca Çince'den daha kolay." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué es más importante, el dinero o la salud?", translation: "Para mı sağlık mı daha önemli?", expectedKeywords: ["más", "importante", "salud", "dinero"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Es el peor día de mi vida.", translation: "Hayatımın en kötü günü." }
    ]
};

// ===== ÜNİTE 59: A2 ZARF YAPILARI =====
const unit59Speaking: UnitSpeaking = {
    unitId: 59, title: "A2 Zarf Yapıları", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Normalmente me levanto temprano.", translation: "Normalde erken kalkarım." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Él habla español perfectamente.", translation: "O mükemmel İspanyolca konuşuyor." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Con qué frecuencia haces ejercicio?", translation: "Ne sıklıkla egzersiz yaparsın?", expectedKeywords: ["siempre", "normalmente", "veces", "nunca", "semana"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo aprendes español?", translation: "İspanyolcayı nasıl öğreniyorsun?", expectedKeywords: ["lentamente", "rápidamente", "fácilmente", "estudiando"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Vivo tranquilamente en el campo.", translation: "Kırda sakin bir şekilde yaşıyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Lamentablemente no puedo ir.", translation: "Ne yazık ki gidemem." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cómo conduces tu coche?", translation: "Arabanı nasıl kullanırsın?", expectedKeywords: ["cuidadosamente", "rápidamente", "bien", "lento"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Seguramente va a llover.", translation: "Kesinlikle yağmur yağacak." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Estás verdaderamente feliz?", translation: "Gerçekten mutlu musun?", expectedKeywords: ["sí", "verdaderamente", "realmente", "muy"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Posiblemente llegue tarde.", translation: "Muhtemelen geç kalacağım." }
    ]
};

// ===== ÜNİTE 60: A2 FİNAL TEKRAR =====
const unit60Speaking: UnitSpeaking = {
    unitId: 60, title: "A2 Final Tekrar", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "He aprendido mucho español en este curso.", translation: "Bu kursta çok İspanyolca öğrendim." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Ahora puedo comunicarme en español básico.", translation: "Artık temel İspanyolca ile iletişim kurabiliyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué has aprendido en el nivel A2?", translation: "A2 seviyesinde ne öğrendin?", expectedKeywords: ["aprendido", "verbos", "vocabulario", "gramática", "hablar"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son tus objetivos para el próximo nivel?", translation: "Bir sonraki seviye için hedeflerin neler?", expectedKeywords: ["quiero", "mejorar", "aprender", "hablar", "mejor"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Me siento más seguro hablando.", translation: "Konuşurken daha güvende hissediyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Voy a continuar estudiando español.", translation: "İspanyolca çalışmaya devam edeceğim." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué fue lo más difícil del curso?", translation: "Kursta en zor şey neydi?", expectedKeywords: ["verbos", "gramática", "hablar", "escuchar"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Gracias por enseñarme.", translation: "Bana öğrettiğiniz için teşekkürler." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Recomendarías este curso?", translation: "Bu kursu önerir misin?", expectedKeywords: ["sí", "recomiendo", "curso", "bueno"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Espero verte en el nivel B1.", translation: "B1 seviyesinde görüşmek üzere." }
    ]
};

// A2 speakings listesi
const a2Speakings: { [key: number]: UnitSpeaking } = {
    21: unit21Speaking, 22: unit22Speaking, 23: unit23Speaking, 24: unit24Speaking, 25: unit25Speaking,
    26: unit26Speaking, 27: unit27Speaking, 28: unit28Speaking, 29: unit29Speaking, 30: unit30Speaking,
    31: unit31Speaking, 32: unit32Speaking, 33: unit33Speaking, 34: unit34Speaking, 35: unit35Speaking,
    36: unit36Speaking, 37: unit37Speaking, 38: unit38Speaking, 39: unit39Speaking, 40: unit40Speaking,
    41: unit41Speaking, 42: unit42Speaking, 43: unit43Speaking, 44: unit44Speaking, 45: unit45Speaking,
    46: unit46Speaking, 47: unit47Speaking, 48: unit48Speaking, 49: unit49Speaking, 50: unit50Speaking,
    51: unit51Speaking, 52: unit52Speaking, 53: unit53Speaking, 54: unit54Speaking, 55: unit55Speaking,
    56: unit56Speaking, 57: unit57Speaking, 58: unit58Speaking, 59: unit59Speaking, 60: unit60Speaking
};

export function getA2SpeakingForUnit(unitId: number): UnitSpeaking | undefined {
    return a2Speakings[unitId];
}
