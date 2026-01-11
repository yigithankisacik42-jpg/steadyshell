/**
 * LinguaFlow - Ünite 10: Mobilyalar (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit10Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Mesa' ne demek?", options: [{ id: "a", text: "Sandalye", correct: false }, { id: "b", text: "Masa", correct: true }, { id: "c", text: "Yatak", correct: false }, { id: "d", text: "Koltuk", correct: false }] },
    { id: 2, type: "SELECT", question: "'Silla' ne demek?", options: [{ id: "a", text: "Masa", correct: false }, { id: "b", text: "Sandalye", correct: true }, { id: "c", text: "Dolap", correct: false }, { id: "d", text: "Koltuk", correct: false }] },
    { id: 3, type: "SELECT", question: "'Cama' ne demek?", options: [{ id: "a", text: "Koltuk", correct: false }, { id: "b", text: "Yatak", correct: true }, { id: "c", text: "Masa", correct: false }, { id: "d", text: "Halı", correct: false }] },
    { id: 4, type: "SELECT", question: "'Sofá' ne demek?", options: [{ id: "a", text: "Sandalye", correct: false }, { id: "b", text: "Koltuk", correct: true }, { id: "c", text: "Yatak", correct: false }, { id: "d", text: "Dolap", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mesa", options: [{ id: "a", text: "Sandalye", correct: false }, { id: "b", text: "Masa", correct: true }, { id: "c", text: "Yatak", correct: false }, { id: "d", text: "Halı", correct: false }] },
    { id: 6, type: "SELECT", question: "'Armario' ne demek?", options: [{ id: "a", text: "Lamba", correct: false }, { id: "b", text: "Dolap", correct: true }, { id: "c", text: "Ayna", correct: false }, { id: "d", text: "Masa", correct: false }] },
    { id: 7, type: "SELECT", question: "'Lámpara' ne demek?", options: [{ id: "a", text: "Dolap", correct: false }, { id: "b", text: "Lamba", correct: true }, { id: "c", text: "Ayna", correct: false }, { id: "d", text: "Halı", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cama", options: [{ id: "a", text: "Masa", correct: false }, { id: "b", text: "Yatak", correct: true }, { id: "c", text: "Koltuk", correct: false }, { id: "d", text: "Sandalye", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Alfombra' ne demek?", options: [{ id: "a", text: "Perde", correct: false }, { id: "b", text: "Halı", correct: true }, { id: "c", text: "Lamba", correct: false }, { id: "d", text: "Ayna", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Masa", correctAnswer: "Mesa" },
    { id: 11, type: "SELECT", question: "'Espejo' ne demek?", options: [{ id: "a", text: "Halı", correct: false }, { id: "b", text: "Ayna", correct: true }, { id: "c", text: "Lamba", correct: false }, { id: "d", text: "Perde", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La mesa es de madera", options: [{ id: "a", text: "Masa metalden", correct: false }, { id: "b", text: "Masa ahşaptan", correct: true }, { id: "c", text: "Sandalye ahşaptan", correct: false }, { id: "d", text: "Masa camdan", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ está rota. (sandalye)", options: [{ id: "a", text: "mesa", correct: false }, { id: "b", text: "silla", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Yatak", correctAnswer: "Cama" },
    { id: 15, type: "SELECT", question: "'Cortina' ne demek?", options: [{ id: "a", text: "Halı", correct: false }, { id: "b", text: "Perde", correct: true }, { id: "c", text: "Ayna", correct: false }, { id: "d", text: "Lamba", correct: false }] },
    { id: 16, type: "SELECT", question: "'Estantería' ne demek?", options: [{ id: "a", text: "Dolap", correct: false }, { id: "b", text: "Raf/Kitaplık", correct: true }, { id: "c", text: "Masa", correct: false }, { id: "d", text: "Sandalye", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Hay un sofá en el salón", options: [{ id: "a", text: "Odada bir yatak var", correct: false }, { id: "b", text: "Salonda bir koltuk var", correct: true }, { id: "c", text: "Mutfakta bir masa var", correct: false }, { id: "d", text: "Salonda bir sandalye var", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Masa camdan yapılmış.", correctAnswer: "La mesa está hecha de cristal" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ es muy cómodo. (koltuk)", options: [{ id: "a", text: "silla", correct: false }, { id: "b", text: "sofá", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Yatakta bir yastık var.", correctAnswer: "Hay una almohada en la cama" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ es roja. (halı)", options: [{ id: "a", text: "cortina", correct: false }, { id: "b", text: "alfombra", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Dolapta giysilerim var.", correctAnswer: "En el armario tengo mi ropa" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El espejo está en el baño", options: [{ id: "a", text: "Ayna yatak odasında", correct: false }, { id: "b", text: "Ayna banyoda", correct: true }, { id: "c", text: "Ayna salonda", correct: false }, { id: "d", text: "Ayna koridorda", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Salonda büyük bir halı ve iki tane koltuk var", correctAnswer: "En el salón hay una alfombra grande y dos sofás" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Perdeler mavi, halı kırmızı ve duvarlar beyaz", correctAnswer: "Las cortinas son azules, la alfombra es roja y las paredes son blancas" },
];

export const unit10Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Escritorio' ne demek?", options: [{ id: "a", text: "Masa", correct: false }, { id: "b", text: "Çalışma masası", correct: true }, { id: "c", text: "Sandalye", correct: false }, { id: "d", text: "Raf", correct: false }] },
    { id: 2, type: "SELECT", question: "'Sillón' ne demek?", options: [{ id: "a", text: "Sandalye", correct: false }, { id: "b", text: "Koltuk/Berjer", correct: true }, { id: "c", text: "Masa", correct: false }, { id: "d", text: "Yatak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Cómoda' ne demek?", options: [{ id: "a", text: "Gardırop", correct: false }, { id: "b", text: "Şifonyer", correct: true }, { id: "c", text: "Dolap", correct: false }, { id: "d", text: "Raf", correct: false }] },
    { id: 4, type: "SELECT", question: "'Mesilla' ne demek?", options: [{ id: "a", text: "Büyük masa", correct: false }, { id: "b", text: "Komodin", correct: true }, { id: "c", text: "Sandalye", correct: false }, { id: "d", text: "Raf", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Escritorio", options: [{ id: "a", text: "Yemek masası", correct: false }, { id: "b", text: "Çalışma masası", correct: true }, { id: "c", text: "Sehpa", correct: false }, { id: "d", text: "Raf", correct: false }] },
    { id: 6, type: "SELECT", question: "'Colchón' ne demek?", options: [{ id: "a", text: "Yastık", correct: false }, { id: "b", text: "Yatak şiltesi", correct: true }, { id: "c", text: "Yorgan", correct: false }, { id: "d", text: "Çarşaf", correct: false }] },
    { id: 7, type: "SELECT", question: "'Almohada' ne demek?", options: [{ id: "a", text: "Yorgan", correct: false }, { id: "b", text: "Yastık", correct: true }, { id: "c", text: "Şilte", correct: false }, { id: "d", text: "Çarşaf", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Almohada", options: [{ id: "a", text: "Yorgan", correct: false }, { id: "b", text: "Yastık", correct: true }, { id: "c", text: "Şilte", correct: false }, { id: "d", text: "Çarşaf", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Manta' ne demek?", options: [{ id: "a", text: "Çarşaf", correct: false }, { id: "b", text: "Battaniye", correct: true }, { id: "c", text: "Yastık", correct: false }, { id: "d", text: "Şilte", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Çalışma masası", correctAnswer: "Escritorio" },
    { id: 11, type: "SELECT", question: "'Sábana' ne demek?", options: [{ id: "a", text: "Battaniye", correct: false }, { id: "b", text: "Çarşaf", correct: true }, { id: "c", text: "Yorgan", correct: false }, { id: "d", text: "Yastık", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El escritorio está en mi habitación", options: [{ id: "a", text: "Çalışma masası salonda", correct: false }, { id: "b", text: "Çalışma masası odamda", correct: true }, { id: "c", text: "Masa mutfakta", correct: false }, { id: "d", text: "Yatak odamda", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Necesito una _____ nueva. (yastık)", options: [{ id: "a", text: "manta", correct: false }, { id: "b", text: "almohada", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Yastık", correctAnswer: "Almohada" },
    { id: 15, type: "SELECT", question: "'Edredón' ne demek?", options: [{ id: "a", text: "Çarşaf", correct: false }, { id: "b", text: "Yorgan", correct: true }, { id: "c", text: "Battaniye", correct: false }, { id: "d", text: "Yastık kılıfı", correct: false }] },
    { id: 16, type: "SELECT", question: "'Taburete' ne demek?", options: [{ id: "a", text: "Sandalye", correct: false }, { id: "b", text: "Tabure", correct: true }, { id: "c", text: "Koltuk", correct: false }, { id: "d", text: "Bank", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La manta es muy caliente", options: [{ id: "a", text: "Çarşaf çok yumuşak", correct: false }, { id: "b", text: "Battaniye çok sıcak", correct: true }, { id: "c", text: "Yorgan çok hafif", correct: false }, { id: "d", text: "Yastık çok rahat", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Komodin yatağın yanında.", correctAnswer: "La mesilla está al lado de la cama" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ es muy cómodo. (şilte)", options: [{ id: "a", text: "almohada", correct: false }, { id: "b", text: "colchón", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çarşafları değiştirmem lazım.", correctAnswer: "Tengo que cambiar las sábanas" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Hace frío, necesito una _____. (battaniye)", options: [{ id: "a", text: "sábana", correct: false }, { id: "b", text: "manta", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Şifonyerde ceket ve pantolonlar var.", correctAnswer: "En la cómoda hay chaquetas y pantalones" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Compré un sillón nuevo", options: [{ id: "a", text: "Yeni bir sandalye aldım", correct: false }, { id: "b", text: "Yeni bir koltuk aldım", correct: true }, { id: "c", text: "Yeni bir masa aldım", correct: false }, { id: "d", text: "Yeni bir yatak aldım", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Yatakta iki yastık, bir yorgan ve temiz çarşaflar var", correctAnswer: "En la cama hay dos almohadas, un edredón y sábanas limpias" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Çalışma masamın üstünde bilgisayar, lamba ve kitaplar var", correctAnswer: "Encima de mi escritorio hay un ordenador, una lámpara y libros" },
];

export const unit10Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Nevera' ne demek?", options: [{ id: "a", text: "Fırın", correct: false }, { id: "b", text: "Buzdolabı", correct: true }, { id: "c", text: "Mikrodalga", correct: false }, { id: "d", text: "Bulaşık makinesi", correct: false }] },
    { id: 2, type: "SELECT", question: "'Horno' ne demek?", options: [{ id: "a", text: "Buzdolabı", correct: false }, { id: "b", text: "Fırın", correct: true }, { id: "c", text: "Ocak", correct: false }, { id: "d", text: "Mikrodalga", correct: false }] },
    { id: 3, type: "SELECT", question: "'Cocina' (mobilya olarak) ne demek?", options: [{ id: "a", text: "Fırın", correct: false }, { id: "b", text: "Ocak", correct: true }, { id: "c", text: "Buzdolabı", correct: false }, { id: "d", text: "Mikrodalga", correct: false }] },
    { id: 4, type: "SELECT", question: "'Microondas' ne demek?", options: [{ id: "a", text: "Fırın", correct: false }, { id: "b", text: "Mikrodalga", correct: true }, { id: "c", text: "Ocak", correct: false }, { id: "d", text: "Tost makinesi", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Nevera", options: [{ id: "a", text: "Fırın", correct: false }, { id: "b", text: "Buzdolabı", correct: true }, { id: "c", text: "Ocak", correct: false }, { id: "d", text: "Mikrodalga", correct: false }] },
    { id: 6, type: "SELECT", question: "'Lavadora' ne demek?", options: [{ id: "a", text: "Bulaşık makinesi", correct: false }, { id: "b", text: "Çamaşır makinesi", correct: true }, { id: "c", text: "Kurutma makinesi", correct: false }, { id: "d", text: "Buzdolabı", correct: false }] },
    { id: 7, type: "SELECT", question: "'Lavavajillas' ne demek?", options: [{ id: "a", text: "Çamaşır makinesi", correct: false }, { id: "b", text: "Bulaşık makinesi", correct: true }, { id: "c", text: "Kurutma makinesi", correct: false }, { id: "d", text: "Elektrik süpürgesi", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Lavadora", options: [{ id: "a", text: "Bulaşık makinesi", correct: false }, { id: "b", text: "Çamaşır makinesi", correct: true }, { id: "c", text: "Fırın", correct: false }, { id: "d", text: "Buzdolabı", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Aspiradora' ne demek?", options: [{ id: "a", text: "Çamaşır makinesi", correct: false }, { id: "b", text: "Elektrik süpürgesi", correct: true }, { id: "c", text: "Bulaşık makinesi", correct: false }, { id: "d", text: "Klima", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Buzdolabı", correctAnswer: "Nevera" },
    { id: 11, type: "SELECT", question: "'Aire acondicionado' ne demek?", options: [{ id: "a", text: "Vantilatör", correct: false }, { id: "b", text: "Klima", correct: true }, { id: "c", text: "Isıtıcı", correct: false }, { id: "d", text: "Temizleyici", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El horno está caliente", options: [{ id: "a", text: "Fırın soğuk", correct: false }, { id: "b", text: "Fırın sıcak", correct: true }, { id: "c", text: "Ocak sıcak", correct: false }, { id: "d", text: "Mikrodalga bozuk", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ está llena de ropa. (çamaşır makinesi)", options: [{ id: "a", text: "lavavajillas", correct: false }, { id: "b", text: "lavadora", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Fırın", correctAnswer: "Horno" },
    { id: 15, type: "SELECT", question: "'Tostadora' ne demek?", options: [{ id: "a", text: "Mikrodalga", correct: false }, { id: "b", text: "Ekmek kızartma makinesi", correct: true }, { id: "c", text: "Blender", correct: false }, { id: "d", text: "Kahve makinesi", correct: false }] },
    { id: 16, type: "SELECT", question: "'Cafetera' ne demek?", options: [{ id: "a", text: "Su ısıtıcısı", correct: false }, { id: "b", text: "Kahve makinesi", correct: true }, { id: "c", text: "Blender", correct: false }, { id: "d", text: "Ekmek kızartma makinesi", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Necesito poner la lavadora", options: [{ id: "a", text: "Bulaşık makinesini çalıştırmalıyım", correct: false }, { id: "b", text: "Çamaşır makinesini çalıştırmalıyım", correct: true }, { id: "c", text: "Fırını açmalıyım", correct: false }, { id: "d", text: "Elektrik süpürgesini kullanmalıyım", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Buzdolabında süt yok.", correctAnswer: "No hay leche en la nevera" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Caliento la comida en el _____. (mikrodalga)", options: [{ id: "a", text: "horno", correct: false }, { id: "b", text: "microondas", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çamaşır makinesi bozuk.", correctAnswer: "La lavadora está rota" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Uso la _____ para limpiar el suelo. (elektrik süpürgesi)", options: [{ id: "a", text: "lavadora", correct: false }, { id: "b", text: "aspiradora", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Fırında bir pasta pişiriyorum.", correctAnswer: "Estoy haciendo un pastel en el horno" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El aire acondicionado no funciona", options: [{ id: "a", text: "Klima çalışıyor", correct: false }, { id: "b", text: "Klima çalışmıyor", correct: true }, { id: "c", text: "Isıtıcı çalışmıyor", correct: false }, { id: "d", text: "Vantilatör çalışmıyor", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Mutfakta buzdolabı, fırın, ocak ve mikrodalga var", correctAnswer: "En la cocina hay una nevera, un horno, una cocina y un microondas" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Her sabah kahve makinesini kullanırım ve tost yaparım", correctAnswer: "Cada mañana uso la cafetera y hago tostadas" },
];

export const unit10Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Televisión' ne demek?", options: [{ id: "a", text: "Radyo", correct: false }, { id: "b", text: "Televizyon", correct: true }, { id: "c", text: "Bilgisayar", correct: false }, { id: "d", text: "Telefon", correct: false }] },
    { id: 2, type: "SELECT", question: "'Ordenador' ne demek?", options: [{ id: "a", text: "Televizyon", correct: false }, { id: "b", text: "Bilgisayar", correct: true }, { id: "c", text: "Tablet", correct: false }, { id: "d", text: "Radyo", correct: false }] },
    { id: 3, type: "SELECT", question: "'Radio' ne demek?", options: [{ id: "a", text: "Televizyon", correct: false }, { id: "b", text: "Radyo", correct: true }, { id: "c", text: "Hoparlör", correct: false }, { id: "d", text: "Telefon", correct: false }] },
    { id: 4, type: "SELECT", question: "'Enchufe' ne demek?", options: [{ id: "a", text: "Anahtar", correct: false }, { id: "b", text: "Priz", correct: true }, { id: "c", text: "Kablo", correct: false }, { id: "d", text: "Düğme", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Televisión", options: [{ id: "a", text: "Radyo", correct: false }, { id: "b", text: "Televizyon", correct: true }, { id: "c", text: "Bilgisayar", correct: false }, { id: "d", text: "Telefon", correct: false }] },
    { id: 6, type: "SELECT", question: "'Interruptor' ne demek?", options: [{ id: "a", text: "Priz", correct: false }, { id: "b", text: "Elektrik düğmesi", correct: true }, { id: "c", text: "Kablo", correct: false }, { id: "d", text: "Ampul", correct: false }] },
    { id: 7, type: "SELECT", question: "'Bombilla' ne demek?", options: [{ id: "a", text: "Lamba", correct: false }, { id: "b", text: "Ampul", correct: true }, { id: "c", text: "Priz", correct: false }, { id: "d", text: "Düğme", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ordenador", options: [{ id: "a", text: "Televizyon", correct: false }, { id: "b", text: "Bilgisayar", correct: true }, { id: "c", text: "Radyo", correct: false }, { id: "d", text: "Tablet", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Encender' ne demek?", options: [{ id: "a", text: "Kapatmak", correct: false }, { id: "b", text: "Açmak", correct: true }, { id: "c", text: "Kırmak", correct: false }, { id: "d", text: "Tamir etmek", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Televizyon", correctAnswer: "Televisión" },
    { id: 11, type: "SELECT", question: "'Apagar' ne demek?", options: [{ id: "a", text: "Açmak", correct: false }, { id: "b", text: "Kapatmak", correct: true }, { id: "c", text: "Tamir etmek", correct: false }, { id: "d", text: "Taşımak", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Enciende la televisión", options: [{ id: "a", text: "Televizyonu kapat", correct: false }, { id: "b", text: "Televizyonu aç", correct: true }, { id: "c", text: "Radyoyu aç", correct: false }, { id: "d", text: "Bilgisayarı kapat", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Hay que _____ la luz. (açmak)", options: [{ id: "a", text: "apagar", correct: false }, { id: "b", text: "encender", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Bilgisayar", correctAnswer: "Ordenador" },
    { id: 15, type: "SELECT", question: "'Mando a distancia' ne demek?", options: [{ id: "a", text: "Klavye", correct: false }, { id: "b", text: "Uzaktan kumanda", correct: true }, { id: "c", text: "Fare", correct: false }, { id: "d", text: "Ekran", correct: false }] },
    { id: 16, type: "SELECT", question: "'Altavoces' ne demek?", options: [{ id: "a", text: "Kulaklık", correct: false }, { id: "b", text: "Hoparlörler", correct: true }, { id: "c", text: "Mikrofon", correct: false }, { id: "d", text: "Kamera", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Apaga la luz antes de dormir", options: [{ id: "a", text: "Yatmadan önce ışığı aç", correct: false }, { id: "b", text: "Yatmadan önce ışığı kapat", correct: true }, { id: "c", text: "Sabah ışığı aç", correct: false }, { id: "d", text: "Akşam televizyonu kapat", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Uzaktan kumandayı bulamıyorum.", correctAnswer: "No encuentro el mando a distancia" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Hay que cambiar la _____. (ampul)", options: [{ id: "a", text: "lámpara", correct: false }, { id: "b", text: "bombilla", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Şarj cihazını prize tak.", correctAnswer: "Enchufa el cargador a la corriente" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ no funciona. (düğme)", options: [{ id: "a", text: "enchufe", correct: false }, { id: "b", text: "interruptor", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Televizyon çok büyük ve modern.", correctAnswer: "La televisión es muy grande y moderna" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El ordenador está en el escritorio", options: [{ id: "a", text: "Bilgisayar masada", correct: false }, { id: "b", text: "Bilgisayar çalışma masasında", correct: true }, { id: "c", text: "Bilgisayar yerde", correct: false }, { id: "d", text: "Televizyon masada", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Salonda bir televizyon, hoparlörler ve birçok priz var", correctAnswer: "En el salón hay una televisión, altavoces y muchos enchufes" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Lütfen ışığı kapat ve televizyonu aç, film izleyeceğiz", correctAnswer: "Por favor apaga la luz y enciende la televisión, vamos a ver una película" },
];
