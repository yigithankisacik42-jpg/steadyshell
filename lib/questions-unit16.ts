/**
 * LinguaFlow - Ünite 16: Ulaşım (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit16Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Coche' ne demek?", options: [{ id: "a", text: "Otobüs", correct: false }, { id: "b", text: "Araba", correct: true }, { id: "c", text: "Tren", correct: false }, { id: "d", text: "Uçak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Autobús' ne demek?", options: [{ id: "a", text: "Araba", correct: false }, { id: "b", text: "Otobüs", correct: true }, { id: "c", text: "Minibüs", correct: false }, { id: "d", text: "Kamyon", correct: false }] },
    { id: 3, type: "SELECT", question: "'Tren' ne demek?", options: [{ id: "a", text: "Metro", correct: false }, { id: "b", text: "Tren", correct: true }, { id: "c", text: "Tramvay", correct: false }, { id: "d", text: "Otobüs", correct: false }] },
    { id: 4, type: "SELECT", question: "'Avión' ne demek?", options: [{ id: "a", text: "Helikopter", correct: false }, { id: "b", text: "Uçak", correct: true }, { id: "c", text: "Gemi", correct: false }, { id: "d", text: "Balon", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Coche", options: [{ id: "a", text: "Otobüs", correct: false }, { id: "b", text: "Araba", correct: true }, { id: "c", text: "Tren", correct: false }, { id: "d", text: "Metro", correct: false }] },
    { id: 6, type: "SELECT", question: "'Bicicleta' ne demek?", options: [{ id: "a", text: "Motosiklet", correct: false }, { id: "b", text: "Bisiklet", correct: true }, { id: "c", text: "Scooter", correct: false }, { id: "d", text: "Kaykay", correct: false }] },
    { id: 7, type: "SELECT", question: "'Moto' ne demek?", options: [{ id: "a", text: "Bisiklet", correct: false }, { id: "b", text: "Motosiklet", correct: true }, { id: "c", text: "Araba", correct: false }, { id: "d", text: "Scooter", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Avión", options: [{ id: "a", text: "Helikopter", correct: false }, { id: "b", text: "Uçak", correct: true }, { id: "c", text: "Gemi", correct: false }, { id: "d", text: "Tren", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Metro' ne demek?", options: [{ id: "a", text: "Tren", correct: false }, { id: "b", text: "Metro", correct: true }, { id: "c", text: "Tramvay", correct: false }, { id: "d", text: "Otobüs", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Araba", correctAnswer: "Coche" },
    { id: 11, type: "SELECT", question: "'Barco' ne demek?", options: [{ id: "a", text: "Uçak", correct: false }, { id: "b", text: "Gemi", correct: true }, { id: "c", text: "Tekne", correct: false }, { id: "d", text: "Feribot", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Voy en coche", options: [{ id: "a", text: "Otobüsle gidiyorum", correct: false }, { id: "b", text: "Arabayla gidiyorum", correct: true }, { id: "c", text: "Trenle gidiyorum", correct: false }, { id: "d", text: "Metroyla gidiyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Voy al trabajo en _____. (otobüs)", options: [{ id: "a", text: "coche", correct: false }, { id: "b", text: "autobús", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Tren", correctAnswer: "Tren" },
    { id: 15, type: "SELECT", question: "'Tranvía' ne demek?", options: [{ id: "a", text: "Metro", correct: false }, { id: "b", text: "Tramvay", correct: true }, { id: "c", text: "Otobüs", correct: false }, { id: "d", text: "Tren", correct: false }] },
    { id: 16, type: "SELECT", question: "'Taxi' ne demek?", options: [{ id: "a", text: "Dolmuş", correct: false }, { id: "b", text: "Taksi", correct: true }, { id: "c", text: "Otobüs", correct: false }, { id: "d", text: "Minibüs", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El tren es muy rápido", options: [{ id: "a", text: "Otobüs çok yavaş", correct: false }, { id: "b", text: "Tren çok hızlı", correct: true }, { id: "c", text: "Metro çok kalabalık", correct: false }, { id: "d", text: "Araba çok pahalı", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Arabayla gidiyorum.", correctAnswer: "Voy en coche" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ es más rápido que el autobús. (metro)", options: [{ id: "a", text: "tranvía", correct: false }, { id: "b", text: "metro", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Uçakla seyahat etmek hızlı.", correctAnswer: "Viajar en avión es rápido" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Prefiero ir en _____ porque es más barato. (otobüs)", options: [{ id: "a", text: "taxi", correct: false }, { id: "b", text: "autobús", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Bisikletle okula gidiyorum.", correctAnswer: "Voy a la escuela en bicicleta" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El barco cruza el mar", options: [{ id: "a", text: "Uçak denizin üstünden geçiyor", correct: false }, { id: "b", text: "Gemi denizi geçiyor", correct: true }, { id: "c", text: "Tren köprüden geçiyor", correct: false }, { id: "d", text: "Araba tünelden geçiyor", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "İşe metroyla gidiyorum çünkü daha hızlı ve daha ucuz", correctAnswer: "Voy al trabajo en metro porque es más rápido y más barato" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Madrid'e uçakla gittim ve orada taksi ve metro kullandım", correctAnswer: "Fui a Madrid en avión y allí usé el taxi y el metro" },
];

export const unit16Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Conducir' ne demek?", options: [{ id: "a", text: "Binmek", correct: false }, { id: "b", text: "Sürmek", correct: true }, { id: "c", text: "İnmek", correct: false }, { id: "d", text: "Durmak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Parada' ne demek?", options: [{ id: "a", text: "İstasyon", correct: false }, { id: "b", text: "Durak", correct: true }, { id: "c", text: "Terminal", correct: false }, { id: "d", text: "Havalimanı", correct: false }] },
    { id: 3, type: "SELECT", question: "'Billete' ne demek?", options: [{ id: "a", text: "Para", correct: false }, { id: "b", text: "Bilet", correct: true }, { id: "c", text: "Kart", correct: false }, { id: "d", text: "Kupon", correct: false }] },
    { id: 4, type: "SELECT", question: "'Viaje' ne demek?", options: [{ id: "a", text: "Tatil", correct: false }, { id: "b", text: "Yolculuk/Seyahat", correct: true }, { id: "c", text: "Gezi", correct: false }, { id: "d", text: "Tur", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Conducir", options: [{ id: "a", text: "Binmek", correct: false }, { id: "b", text: "Sürmek", correct: true }, { id: "c", text: "Durmak", correct: false }, { id: "d", text: "Yürümek", correct: false }] },
    { id: 6, type: "SELECT", question: "'Pasajero' ne demek?", options: [{ id: "a", text: "Şoför", correct: false }, { id: "b", text: "Yolcu", correct: true }, { id: "c", text: "Rehber", correct: false }, { id: "d", text: "Pilot", correct: false }] },
    { id: 7, type: "SELECT", question: "'Conductor' ne demek?", options: [{ id: "a", text: "Yolcu", correct: false }, { id: "b", text: "Sürücü/Şoför", correct: true }, { id: "c", text: "Makinist", correct: false }, { id: "d", text: "Pilot", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Billete", options: [{ id: "a", text: "Para", correct: false }, { id: "b", text: "Bilet", correct: true }, { id: "c", text: "Kart", correct: false }, { id: "d", text: "Kupon", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Subir' ne demek?", options: [{ id: "a", text: "İnmek", correct: false }, { id: "b", text: "Binmek", correct: true }, { id: "c", text: "Durmak", correct: false }, { id: "d", text: "Kalkmak", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Sürmek", correctAnswer: "Conducir" },
    { id: 11, type: "SELECT", question: "'Bajar' ne demek?", options: [{ id: "a", text: "Binmek", correct: false }, { id: "b", text: "İnmek", correct: true }, { id: "c", text: "Kalkmak", correct: false }, { id: "d", text: "Durmak", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El pasajero sube al autobús", options: [{ id: "a", text: "Yolcu otobüsten iniyor", correct: false }, { id: "b", text: "Yolcu otobüse biniyor", correct: true }, { id: "c", text: "Şoför otobüsü durduruyor", correct: false }, { id: "d", text: "Yolcu bilet alıyor", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Compré un _____ de tren. (bilet)", options: [{ id: "a", text: "viaje", correct: false }, { id: "b", text: "billete", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Bilet", correctAnswer: "Billete" },
    { id: 15, type: "SELECT", question: "'Andén' ne demek?", options: [{ id: "a", text: "Ray", correct: false }, { id: "b", text: "Peron", correct: true }, { id: "c", text: "İstasyon", correct: false }, { id: "d", text: "Kapı", correct: false }] },
    { id: 16, type: "SELECT", question: "'Vía' ne demek?", options: [{ id: "a", text: "Peron", correct: false }, { id: "b", text: "Ray/Yol", correct: true }, { id: "c", text: "Kapı", correct: false }, { id: "d", text: "Çıkış", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Bajo en la próxima parada", options: [{ id: "a", text: "Bu durakta iniyorum", correct: false }, { id: "b", text: "Sonraki durakta iniyorum", correct: true }, { id: "c", text: "Son durakta iniyorum", correct: false }, { id: "d", text: "İlk durakta iniyorum", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bir bilet almam lazım.", correctAnswer: "Tengo que comprar un billete" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El tren sale del _____ tres. (peron)", options: [{ id: "a", text: "vía", correct: false }, { id: "b", text: "andén", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Yolculuk iki saat sürdü.", correctAnswer: "El viaje duró dos horas" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ conduce el autobús. (sürücü)", options: [{ id: "a", text: "pasajero", correct: false }, { id: "b", text: "conductor", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Sonraki durakta iniyorum.", correctAnswer: "Bajo en la próxima parada" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El viaje en tren dura tres horas", options: [{ id: "a", text: "Otobüsle yolculuk iki saat sürüyor", correct: false }, { id: "b", text: "Trenle yolculuk üç saat sürüyor", correct: true }, { id: "c", text: "Uçakla yolculuk üç saat sürüyor", correct: false }, { id: "d", text: "Arabayla yolculuk dört saat sürüyor", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "İstasyonda bilet aldım ve üç numaralı perona gittim", correctAnswer: "Compré un billete en la estación y fui al andén número tres" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Sürücü güvenli sürüyor ve yolcular rahat seyahat ediyor", correctAnswer: "El conductor conduce de forma segura y los pasajeros viajan cómodos" },
];

export const unit16Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Rápido' ne demek?", options: [{ id: "a", text: "Yavaş", correct: false }, { id: "b", text: "Hızlı", correct: true }, { id: "c", text: "Uzun", correct: false }, { id: "d", text: "Kısa", correct: false }] },
    { id: 2, type: "SELECT", question: "'Lento' ne demek?", options: [{ id: "a", text: "Hızlı", correct: false }, { id: "b", text: "Yavaş", correct: true }, { id: "c", text: "Uzak", correct: false }, { id: "d", text: "Yakın", correct: false }] },
    { id: 3, type: "SELECT", question: "'Llegar' ne demek?", options: [{ id: "a", text: "Gitmek", correct: false }, { id: "b", text: "Varmak", correct: true }, { id: "c", text: "Kalmak", correct: false }, { id: "d", text: "Dönmek", correct: false }] },
    { id: 4, type: "SELECT", question: "'Salir' ne demek?", options: [{ id: "a", text: "Girmek", correct: false }, { id: "b", text: "Çıkmak/Kalkmak", correct: true }, { id: "c", text: "Varmak", correct: false }, { id: "d", text: "Durmak", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Rápido", options: [{ id: "a", text: "Yavaş", correct: false }, { id: "b", text: "Hızlı", correct: true }, { id: "c", text: "Uzun", correct: false }, { id: "d", text: "Kısa", correct: false }] },
    { id: 6, type: "SELECT", question: "'Hora' ne demek?", options: [{ id: "a", text: "Dakika", correct: false }, { id: "b", text: "Saat", correct: true }, { id: "c", text: "Gün", correct: false }, { id: "d", text: "Hafta", correct: false }] },
    { id: 7, type: "SELECT", question: "'Puntual' ne demek?", options: [{ id: "a", text: "Geç", correct: false }, { id: "b", text: "Dakik/Zamanında", correct: true }, { id: "c", text: "Erken", correct: false }, { id: "d", text: "Yavaş", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Llegar", options: [{ id: "a", text: "Gitmek", correct: false }, { id: "b", text: "Varmak", correct: true }, { id: "c", text: "Kalmak", correct: false }, { id: "d", text: "Dönmek", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Retraso' ne demek?", options: [{ id: "a", text: "İptal", correct: false }, { id: "b", text: "Gecikme", correct: true }, { id: "c", text: "Değişiklik", correct: false }, { id: "d", text: "Aktarma", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Hızlı", correctAnswer: "Rápido" },
    { id: 11, type: "SELECT", question: "'Cancelar' ne demek?", options: [{ id: "a", text: "Geciktirmek", correct: false }, { id: "b", text: "İptal etmek", correct: true }, { id: "c", text: "Değiştirmek", correct: false }, { id: "d", text: "Ertelemek", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El tren llega a las tres", options: [{ id: "a", text: "Tren saat ikide kalkıyor", correct: false }, { id: "b", text: "Tren saat üçte varıyor", correct: true }, { id: "c", text: "Otobüs saat üçte varıyor", correct: false }, { id: "d", text: "Tren saat dörtte kalkıyor", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El vuelo tiene un _____. (gecikme)", options: [{ id: "a", text: "cancelación", correct: false }, { id: "b", text: "retraso", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Varmak", correctAnswer: "Llegar" },
    { id: 15, type: "SELECT", question: "'Durar' ne demek?", options: [{ id: "a", text: "Başlamak", correct: false }, { id: "b", text: "Sürmek", correct: true }, { id: "c", text: "Bitmek", correct: false }, { id: "d", text: "Beklemek", correct: false }] },
    { id: 16, type: "SELECT", question: "'Esperar' ne demek?", options: [{ id: "a", text: "Gitmek", correct: false }, { id: "b", text: "Beklemek", correct: true }, { id: "c", text: "Koşmak", correct: false }, { id: "d", text: "Yürümek", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El tren sale a las cinco", options: [{ id: "a", text: "Tren saat dörtte kalkıyor", correct: false }, { id: "b", text: "Tren saat beşte kalkıyor", correct: true }, { id: "c", text: "Tren saat altıda varıyor", correct: false }, { id: "d", text: "Tren saat beşte varıyor", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Tren saat üçte kalkıyor.", correctAnswer: "El tren sale a las tres" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El viaje _____ dos horas. (sürüyor)", options: [{ id: "a", text: "llega", correct: false }, { id: "b", text: "dura", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Uçak iptal edildi.", correctAnswer: "El vuelo fue cancelado" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo que _____ el autobús. (beklemek)", options: [{ id: "a", text: "subir", correct: false }, { id: "b", text: "esperar", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Tren her zaman dakik.", correctAnswer: "El tren siempre es puntual" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El avión tiene un retraso de una hora", options: [{ id: "a", text: "Uçağın iki saat gecikmesi var", correct: false }, { id: "b", text: "Uçağın bir saat gecikmesi var", correct: true }, { id: "c", text: "Tren yarım saat gecikti", correct: false }, { id: "d", text: "Otobüs bir saat erken geldi", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Tren saat yedide kalkıyor ve saat dokuuzda varıyor, yolculuk iki saat sürüyor", correctAnswer: "El tren sale a las siete y llega a las nueve, el viaje dura dos horas" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Uçuşumun bir saat gecikmesi var, havalimanında beklemem gerekiyor", correctAnswer: "Mi vuelo tiene un retraso de una hora, tengo que esperar en el aeropuerto" },
];

export const unit16Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Caminar' ne demek?", options: [{ id: "a", text: "Koşmak", correct: false }, { id: "b", text: "Yürümek", correct: true }, { id: "c", text: "Atlamak", correct: false }, { id: "d", text: "Durmak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Correr' ne demek?", options: [{ id: "a", text: "Yürümek", correct: false }, { id: "b", text: "Koşmak", correct: true }, { id: "c", text: "Zıplamak", correct: false }, { id: "d", text: "Oturmak", correct: false }] },
    { id: 3, type: "SELECT", question: "'A pie' ne demek?", options: [{ id: "a", text: "Arabayla", correct: false }, { id: "b", text: "Yürüyerek", correct: true }, { id: "c", text: "Bisikletle", correct: false }, { id: "d", text: "Otobüsle", correct: false }] },
    { id: 4, type: "SELECT", question: "'Cruzar' ne demek?", options: [{ id: "a", text: "Dönmek", correct: false }, { id: "b", text: "Karşıya geçmek", correct: true }, { id: "c", text: "Durmak", correct: false }, { id: "d", text: "Yürümek", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Caminar", options: [{ id: "a", text: "Koşmak", correct: false }, { id: "b", text: "Yürümek", correct: true }, { id: "c", text: "Durmak", correct: false }, { id: "d", text: "Atlamak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Girar' ne demek?", options: [{ id: "a", text: "Düz gitmek", correct: false }, { id: "b", text: "Dönmek", correct: true }, { id: "c", text: "Durmak", correct: false }, { id: "d", text: "Geri gitmek", correct: false }] },
    { id: 7, type: "SELECT", question: "'Seguir' ne demek?", options: [{ id: "a", text: "Durmak", correct: false }, { id: "b", text: "Devam etmek", correct: true }, { id: "c", text: "Dönmek", correct: false }, { id: "d", text: "Geri gitmek", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "A pie", options: [{ id: "a", text: "Arabayla", correct: false }, { id: "b", text: "Yürüyerek", correct: true }, { id: "c", text: "Trenle", correct: false }, { id: "d", text: "Bisikletle", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Semáforo' ne demek?", options: [{ id: "a", text: "Yol işareti", correct: false }, { id: "b", text: "Trafik lambası", correct: true }, { id: "c", text: "Yaya geçidi", correct: false }, { id: "d", text: "Köprü", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Yürümek", correctAnswer: "Caminar" },
    { id: 11, type: "SELECT", question: "'Paso de peatones' ne demek?", options: [{ id: "a", text: "Trafik lambası", correct: false }, { id: "b", text: "Yaya geçidi", correct: true }, { id: "c", text: "Kavşak", correct: false }, { id: "d", text: "Köprü", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Voy a pie al trabajo", options: [{ id: "a", text: "İşe arabayla gidiyorum", correct: false }, { id: "b", text: "İşe yürüyerek gidiyorum", correct: true }, { id: "c", text: "İşe bisikletle gidiyorum", correct: false }, { id: "d", text: "İşe koşarak gidiyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo que _____ la calle. (karşıya geçmek)", options: [{ id: "a", text: "girar", correct: false }, { id: "b", text: "cruzar", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Dönmek", correctAnswer: "Girar" },
    { id: 15, type: "SELECT", question: "'Recto' ne demek?", options: [{ id: "a", text: "Eğri", correct: false }, { id: "b", text: "Düz", correct: true }, { id: "c", text: "Sağ", correct: false }, { id: "d", text: "Sol", correct: false }] },
    { id: 16, type: "SELECT", question: "'Acera' ne demek?", options: [{ id: "a", text: "Yol", correct: false }, { id: "b", text: "Kaldırım", correct: true }, { id: "c", text: "Geçit", correct: false }, { id: "d", text: "Köprü", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cruza el semáforo y sigue recto", options: [{ id: "a", text: "Lambadan geç ve sola dön", correct: false }, { id: "b", text: "Lambadan geç ve düz devam et", correct: true }, { id: "c", text: "Sağa dön ve dur", correct: false }, { id: "d", text: "Geri dön ve bekle", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Okula yürüyerek gidiyorum.", correctAnswer: "Voy a la escuela a pie" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ recto hasta el semáforo. (devam et)", options: [{ id: "a", text: "Cruza", correct: false }, { id: "b", text: "Sigue", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sokakta koşmak tehlikeli.", correctAnswer: "Correr en la calle es peligroso" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ está en rojo, no cruces. (trafik lambası)", options: [{ id: "a", text: "coche", correct: false }, { id: "b", text: "semáforo", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Yaya geçidinden karşıya geç.", correctAnswer: "Cruza por el paso de peatones" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Camina por la acera, no por la calle", options: [{ id: "a", text: "Yolda yürü, kaldırımda değil", correct: false }, { id: "b", text: "Kaldırımda yürü, yolda değil", correct: true }, { id: "c", text: "Hızlı koş, yavaş yürüme", correct: false }, { id: "d", text: "Düz git, sağa dönme", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Düz git, trafik lambasından karşıya geç ve sağa dön, okul solda", correctAnswer: "Sigue recto, cruza el semáforo y gira a la derecha, la escuela está a la izquierda" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Kaldırımda yürü, yaya geçidinden karşıya geç ve trafik lambasına dikkat et", correctAnswer: "Camina por la acera, cruza por el paso de peatones y ten cuidado con el semáforo" },
];
