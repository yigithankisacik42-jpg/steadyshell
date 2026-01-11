/**
 * LinguaFlow - Ünite 13: Hayvanlar (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit13Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Perro' ne demek?", options: [{ id: "a", text: "Kedi", correct: false }, { id: "b", text: "Köpek", correct: true }, { id: "c", text: "Kuş", correct: false }, { id: "d", text: "Balık", correct: false }] },
    { id: 2, type: "SELECT", question: "'Gato' ne demek?", options: [{ id: "a", text: "Köpek", correct: false }, { id: "b", text: "Kedi", correct: true }, { id: "c", text: "Tavşan", correct: false }, { id: "d", text: "Hamster", correct: false }] },
    { id: 3, type: "SELECT", question: "'Pájaro' ne demek?", options: [{ id: "a", text: "Balık", correct: false }, { id: "b", text: "Kuş", correct: true }, { id: "c", text: "Kelebek", correct: false }, { id: "d", text: "Böcek", correct: false }] },
    { id: 4, type: "SELECT", question: "'Pez' ne demek?", options: [{ id: "a", text: "Kuş", correct: false }, { id: "b", text: "Balık", correct: true }, { id: "c", text: "Kurbağa", correct: false }, { id: "d", text: "Kaplumbağa", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Perro", options: [{ id: "a", text: "Kedi", correct: false }, { id: "b", text: "Köpek", correct: true }, { id: "c", text: "Kuş", correct: false }, { id: "d", text: "At", correct: false }] },
    { id: 6, type: "SELECT", question: "'Caballo' ne demek?", options: [{ id: "a", text: "İnek", correct: false }, { id: "b", text: "At", correct: true }, { id: "c", text: "Eşek", correct: false }, { id: "d", text: "Koyun", correct: false }] },
    { id: 7, type: "SELECT", question: "'Vaca' ne demek?", options: [{ id: "a", text: "At", correct: false }, { id: "b", text: "İnek", correct: true }, { id: "c", text: "Öküz", correct: false }, { id: "d", text: "Keçi", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Gato", options: [{ id: "a", text: "Köpek", correct: false }, { id: "b", text: "Kedi", correct: true }, { id: "c", text: "Fare", correct: false }, { id: "d", text: "Tavşan", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Cerdo' ne demek?", options: [{ id: "a", text: "Koyun", correct: false }, { id: "b", text: "Domuz", correct: true }, { id: "c", text: "İnek", correct: false }, { id: "d", text: "Keçi", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Köpek", correctAnswer: "Perro" },
    { id: 11, type: "SELECT", question: "'Oveja' ne demek?", options: [{ id: "a", text: "Keçi", correct: false }, { id: "b", text: "Koyun", correct: true }, { id: "c", text: "Domuz", correct: false }, { id: "d", text: "Tavuk", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo un perro", options: [{ id: "a", text: "Bir kedim var", correct: false }, { id: "b", text: "Bir köpeğim var", correct: true }, { id: "c", text: "Bir kuşum var", correct: false }, { id: "d", text: "Bir balığım var", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo un _____ negro. (kedi)", options: [{ id: "a", text: "perro", correct: false }, { id: "b", text: "gato", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Kedi", correctAnswer: "Gato" },
    { id: 15, type: "SELECT", question: "'Gallina' ne demek?", options: [{ id: "a", text: "Horoz", correct: false }, { id: "b", text: "Tavuk", correct: true }, { id: "c", text: "Ördek", correct: false }, { id: "d", text: "Kaz", correct: false }] },
    { id: 16, type: "SELECT", question: "'Conejo' ne demek?", options: [{ id: "a", text: "Sincap", correct: false }, { id: "b", text: "Tavşan", correct: true }, { id: "c", text: "Fare", correct: false }, { id: "d", text: "Hamster", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El caballo es grande", options: [{ id: "a", text: "İnek büyük", correct: false }, { id: "b", text: "At büyük", correct: true }, { id: "c", text: "Köpek büyük", correct: false }, { id: "d", text: "Koyun büyük", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bir köpeğim var.", correctAnswer: "Tengo un perro" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ da leche. (inek)", options: [{ id: "a", text: "caballo", correct: false }, { id: "b", text: "vaca", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Kediler fare yakalar.", correctAnswer: "Los gatos cazan ratones" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ produce huevos. (tavuk)", options: [{ id: "a", text: "vaca", correct: false }, { id: "b", text: "gallina", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Köpekler havlar.", correctAnswer: "Los perros ladran" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi gato se llama Misi", options: [{ id: "a", text: "Köpeğimin adı Misi", correct: false }, { id: "b", text: "Kedimin adı Misi", correct: true }, { id: "c", text: "Kuşumun adı Misi", correct: false }, { id: "d", text: "Tavşanımın adı Misi", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Çiftlikte inekler, koyunlar ve tavuklar var", correctAnswer: "En la granja hay vacas, ovejas y gallinas" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Kedim tembel, köpeğim enerjik", correctAnswer: "Mi gato es perezoso, mi perro es enérgico" },
];

export const unit13Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'León' ne demek?", options: [{ id: "a", text: "Kaplan", correct: false }, { id: "b", text: "Aslan", correct: true }, { id: "c", text: "Leopar", correct: false }, { id: "d", text: "Ayı", correct: false }] },
    { id: 2, type: "SELECT", question: "'Tigre' ne demek?", options: [{ id: "a", text: "Aslan", correct: false }, { id: "b", text: "Kaplan", correct: true }, { id: "c", text: "Panter", correct: false }, { id: "d", text: "Çita", correct: false }] },
    { id: 3, type: "SELECT", question: "'Elefante' ne demek?", options: [{ id: "a", text: "Gergedan", correct: false }, { id: "b", text: "Fil", correct: true }, { id: "c", text: "Su aygırı", correct: false }, { id: "d", text: "Zürafa", correct: false }] },
    { id: 4, type: "SELECT", question: "'Mono' ne demek?", options: [{ id: "a", text: "Goril", correct: false }, { id: "b", text: "Maymun", correct: true }, { id: "c", text: "Orangutan", correct: false }, { id: "d", text: "Şempanze", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "León", options: [{ id: "a", text: "Kaplan", correct: false }, { id: "b", text: "Aslan", correct: true }, { id: "c", text: "Ayı", correct: false }, { id: "d", text: "Kurt", correct: false }] },
    { id: 6, type: "SELECT", question: "'Oso' ne demek?", options: [{ id: "a", text: "Kurt", correct: false }, { id: "b", text: "Ayı", correct: true }, { id: "c", text: "Tilki", correct: false }, { id: "d", text: "Aslan", correct: false }] },
    { id: 7, type: "SELECT", question: "'Serpiente' ne demek?", options: [{ id: "a", text: "Kertenkele", correct: false }, { id: "b", text: "Yılan", correct: true }, { id: "c", text: "Timsah", correct: false }, { id: "d", text: "Kaplumbağa", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Elefante", options: [{ id: "a", text: "Zürafa", correct: false }, { id: "b", text: "Fil", correct: true }, { id: "c", text: "Gergedan", correct: false }, { id: "d", text: "Su aygırı", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Jirafa' ne demek?", options: [{ id: "a", text: "Fil", correct: false }, { id: "b", text: "Zürafa", correct: true }, { id: "c", text: "Zebra", correct: false }, { id: "d", text: "Deve", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Aslan", correctAnswer: "León" },
    { id: 11, type: "SELECT", question: "'Cocodrilo' ne demek?", options: [{ id: "a", text: "Yılan", correct: false }, { id: "b", text: "Timsah", correct: true }, { id: "c", text: "Kertenkele", correct: false }, { id: "d", text: "Kaplumbağa", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El león es el rey de la selva", options: [{ id: "a", text: "Kaplan ormanın kralı", correct: false }, { id: "b", text: "Aslan ormanın kralı", correct: true }, { id: "c", text: "Fil ormanın kralı", correct: false }, { id: "d", text: "Ayı ormanın kralı", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ tiene rayas. (kaplan)", options: [{ id: "a", text: "león", correct: false }, { id: "b", text: "tigre", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Fil", correctAnswer: "Elefante" },
    { id: 15, type: "SELECT", question: "'Lobo' ne demek?", options: [{ id: "a", text: "Tilki", correct: false }, { id: "b", text: "Kurt", correct: true }, { id: "c", text: "Ayı", correct: false }, { id: "d", text: "Çakal", correct: false }] },
    { id: 16, type: "SELECT", question: "'Zorro' ne demek?", options: [{ id: "a", text: "Kurt", correct: false }, { id: "b", text: "Tilki", correct: true }, { id: "c", text: "Tavşan", correct: false }, { id: "d", text: "Sincap", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La serpiente es peligrosa", options: [{ id: "a", text: "Kertenkele tehlikeli", correct: false }, { id: "b", text: "Yılan tehlikeli", correct: true }, { id: "c", text: "Timsah tehlikeli", correct: false }, { id: "d", text: "Örümcek tehlikeli", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Aslan tehlikeli bir hayvan.", correctAnswer: "El león es un animal peligroso" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ tiene un cuello muy largo. (zürafa)", options: [{ id: "a", text: "elefante", correct: false }, { id: "b", text: "jirafa", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Maymunlar ağaçlara tırmanır.", correctAnswer: "Los monos trepan a los árboles" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ vive en el bosque. (ayı)", options: [{ id: "a", text: "león", correct: false }, { id: "b", text: "oso", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Filler çok büyük ve akıllı.", correctAnswer: "Los elefantes son muy grandes e inteligentes" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El cocodrilo vive en el río", options: [{ id: "a", text: "Yılan nehirde yaşar", correct: false }, { id: "b", text: "Timsah nehirde yaşar", correct: true }, { id: "c", text: "Balık nehirde yaşar", correct: false }, { id: "d", text: "Kurbağa nehirde yaşar", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Hayvanat bahçesinde aslanlar, kaplanlar ve filler gördüm", correctAnswer: "En el zoológico vi leones, tigres y elefantes" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Kurt sürü halinde avlanır, tilki ise yalnız avlanır", correctAnswer: "El lobo caza en manada, mientras que el zorro caza solo" },
];

export const unit13Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Delfín' ne demek?", options: [{ id: "a", text: "Balina", correct: false }, { id: "b", text: "Yunus", correct: true }, { id: "c", text: "Köpekbalığı", correct: false }, { id: "d", text: "Fok", correct: false }] },
    { id: 2, type: "SELECT", question: "'Ballena' ne demek?", options: [{ id: "a", text: "Yunus", correct: false }, { id: "b", text: "Balina", correct: true }, { id: "c", text: "Ahtapot", correct: false }, { id: "d", text: "Deniz yıldızı", correct: false }] },
    { id: 3, type: "SELECT", question: "'Tiburón' ne demek?", options: [{ id: "a", text: "Balina", correct: false }, { id: "b", text: "Köpekbalığı", correct: true }, { id: "c", text: "Yunus", correct: false }, { id: "d", text: "Fok", correct: false }] },
    { id: 4, type: "SELECT", question: "'Tortuga' ne demek?", options: [{ id: "a", text: "Kurbağa", correct: false }, { id: "b", text: "Kaplumbağa", correct: true }, { id: "c", text: "Yengeç", correct: false }, { id: "d", text: "Istakoz", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Delfín", options: [{ id: "a", text: "Balina", correct: false }, { id: "b", text: "Yunus", correct: true }, { id: "c", text: "Köpekbalığı", correct: false }, { id: "d", text: "Fok", correct: false }] },
    { id: 6, type: "SELECT", question: "'Cangrejo' ne demek?", options: [{ id: "a", text: "Istakoz", correct: false }, { id: "b", text: "Yengeç", correct: true }, { id: "c", text: "Karides", correct: false }, { id: "d", text: "Midye", correct: false }] },
    { id: 7, type: "SELECT", question: "'Pulpo' ne demek?", options: [{ id: "a", text: "Kalamar", correct: false }, { id: "b", text: "Ahtapot", correct: true }, { id: "c", text: "Denizanası", correct: false }, { id: "d", text: "Denizyıldızı", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tiburón", options: [{ id: "a", text: "Yunus", correct: false }, { id: "b", text: "Köpekbalığı", correct: true }, { id: "c", text: "Balina", correct: false }, { id: "d", text: "Fok", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Rana' ne demek?", options: [{ id: "a", text: "Kaplumbağa", correct: false }, { id: "b", text: "Kurbağa", correct: true }, { id: "c", text: "Kertenkele", correct: false }, { id: "d", text: "Yılan", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Yunus", correctAnswer: "Delfín" },
    { id: 11, type: "SELECT", question: "'Medusa' ne demek?", options: [{ id: "a", text: "Denizyıldızı", correct: false }, { id: "b", text: "Denizanası", correct: true }, { id: "c", text: "Ahtapot", correct: false }, { id: "d", text: "Kalamar", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El delfín es muy inteligente", options: [{ id: "a", text: "Balina çok zeki", correct: false }, { id: "b", text: "Yunus çok zeki", correct: true }, { id: "c", text: "Köpekbalığı çok zeki", correct: false }, { id: "d", text: "Fok çok zeki", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ tiene ocho brazos. (ahtapot)", options: [{ id: "a", text: "cangrejo", correct: false }, { id: "b", text: "pulpo", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Köpekbalığı", correctAnswer: "Tiburón" },
    { id: 15, type: "SELECT", question: "'Foca' ne demek?", options: [{ id: "a", text: "Mors", correct: false }, { id: "b", text: "Fok", correct: true }, { id: "c", text: "Penguen", correct: false }, { id: "d", text: "Yunus", correct: false }] },
    { id: 16, type: "SELECT", question: "'Pingüino' ne demek?", options: [{ id: "a", text: "Fok", correct: false }, { id: "b", text: "Penguen", correct: true }, { id: "c", text: "Albatros", correct: false }, { id: "d", text: "Martı", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La tortuga camina muy lento", options: [{ id: "a", text: "Kaplumbağa çok hızlı yürür", correct: false }, { id: "b", text: "Kaplumbağa çok yavaş yürür", correct: true }, { id: "c", text: "Kurbağa çok yavaş zıplar", correct: false }, { id: "d", text: "Yengeç çok yavaş yürür", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Yunuslar çok zeki hayvanlar.", correctAnswer: "Los delfines son animales muy inteligentes" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ es el animal más grande del mundo. (balina)", options: [{ id: "a", text: "tiburón", correct: false }, { id: "b", text: "ballena", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Köpekbalıkları tehlikeli olabilir.", correctAnswer: "Los tiburones pueden ser peligrosos" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ vive en el agua y en la tierra. (kurbağa)", options: [{ id: "a", text: "tortuga", correct: false }, { id: "b", text: "rana", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Penguen soğuk yerlerde yaşar.", correctAnswer: "El pingüino vive en lugares fríos" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Vi un tiburón en el acuario", options: [{ id: "a", text: "Denizde yunus gördüm", correct: false }, { id: "b", text: "Akvaryumda köpekbalığı gördüm", correct: true }, { id: "c", text: "Denizde balina gördüm", correct: false }, { id: "d", text: "Akvaryumda kaplumbağa gördüm", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Okyanusta balinalar, yunuslar ve köpekbalıkları yaşar", correctAnswer: "En el océano viven ballenas, delfines y tiburones" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Ahtapotun sekiz kolu var ve çok akıllı bir hayvan", correctAnswer: "El pulpo tiene ocho brazos y es un animal muy inteligente" },
];

export const unit13Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Mariposa' ne demek?", options: [{ id: "a", text: "Arı", correct: false }, { id: "b", text: "Kelebek", correct: true }, { id: "c", text: "Böcek", correct: false }, { id: "d", text: "Uğurböceği", correct: false }] },
    { id: 2, type: "SELECT", question: "'Abeja' ne demek?", options: [{ id: "a", text: "Kelebek", correct: false }, { id: "b", text: "Arı", correct: true }, { id: "c", text: "Eşekarısı", correct: false }, { id: "d", text: "Sinek", correct: false }] },
    { id: 3, type: "SELECT", question: "'Hormiga' ne demek?", options: [{ id: "a", text: "Arı", correct: false }, { id: "b", text: "Karınca", correct: true }, { id: "c", text: "Örümcek", correct: false }, { id: "d", text: "Sinek", correct: false }] },
    { id: 4, type: "SELECT", question: "'Araña' ne demek?", options: [{ id: "a", text: "Karınca", correct: false }, { id: "b", text: "Örümcek", correct: true }, { id: "c", text: "Sinek", correct: false }, { id: "d", text: "Çekirge", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mariposa", options: [{ id: "a", text: "Arı", correct: false }, { id: "b", text: "Kelebek", correct: true }, { id: "c", text: "Uğurböceği", correct: false }, { id: "d", text: "Böcek", correct: false }] },
    { id: 6, type: "SELECT", question: "'Mosca' ne demek?", options: [{ id: "a", text: "Sivrisinek", correct: false }, { id: "b", text: "Sinek", correct: true }, { id: "c", text: "Arı", correct: false }, { id: "d", text: "Kelebek", correct: false }] },
    { id: 7, type: "SELECT", question: "'Mosquito' ne demek?", options: [{ id: "a", text: "Sinek", correct: false }, { id: "b", text: "Sivrisinek", correct: true }, { id: "c", text: "Arı", correct: false }, { id: "d", text: "Eşekarısı", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Abeja", options: [{ id: "a", text: "Kelebek", correct: false }, { id: "b", text: "Arı", correct: true }, { id: "c", text: "Karınca", correct: false }, { id: "d", text: "Örümcek", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Animal' ne demek?", options: [{ id: "a", text: "Bitki", correct: false }, { id: "b", text: "Hayvan", correct: true }, { id: "c", text: "İnsan", correct: false }, { id: "d", text: "Canlı", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Kelebek", correctAnswer: "Mariposa" },
    { id: 11, type: "SELECT", question: "'Mascota' ne demek?", options: [{ id: "a", text: "Vahşi hayvan", correct: false }, { id: "b", text: "Evcil hayvan", correct: true }, { id: "c", text: "Çiftlik hayvanı", correct: false }, { id: "d", text: "Deniz hayvanı", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La mariposa es muy bonita", options: [{ id: "a", text: "Arı çok çalışkan", correct: false }, { id: "b", text: "Kelebek çok güzel", correct: true }, { id: "c", text: "Uğurböceği çok tatlı", correct: false }, { id: "d", text: "Karınca çok güçlü", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ hace miel. (arı)", options: [{ id: "a", text: "mariposa", correct: false }, { id: "b", text: "abeja", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Karınca", correctAnswer: "Hormiga" },
    { id: 15, type: "SELECT", question: "'Salvaje' ne demek?", options: [{ id: "a", text: "Evcil", correct: false }, { id: "b", text: "Vahşi", correct: true }, { id: "c", text: "Sakin", correct: false }, { id: "d", text: "Tatlı", correct: false }] },
    { id: 16, type: "SELECT", question: "'Doméstico' ne demek?", options: [{ id: "a", text: "Vahşi", correct: false }, { id: "b", text: "Evcil", correct: true }, { id: "c", text: "Tehlikeli", correct: false }, { id: "d", text: "Büyük", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Las abejas producen miel", options: [{ id: "a", text: "Kelebekler çiçeklere konar", correct: false }, { id: "b", text: "Arılar bal yapar", correct: true }, { id: "c", text: "Karıncalar çalışır", correct: false }, { id: "d", text: "Örümcekler ağ örer", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Arılar bal yapar.", correctAnswer: "Las abejas producen miel" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Las _____ trabajan mucho. (karınca)", options: [{ id: "a", text: "abejas", correct: false }, { id: "b", text: "hormigas", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Örümceklerden korkuyorum.", correctAnswer: "Tengo miedo a las arañas" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ tiene alas muy bonitas. (kelebek)", options: [{ id: "a", text: "abeja", correct: false }, { id: "b", text: "mariposa", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "En sevdiğim hayvan köpek.", correctAnswer: "Mi animal favorito es el perro" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La araña teje una telaraña", options: [{ id: "a", text: "Karınca yuva yapar", correct: false }, { id: "b", text: "Örümcek ağ örer", correct: true }, { id: "c", text: "Arı bal yapar", correct: false }, { id: "d", text: "Kelebek uçar", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Köpekler ve kediler evcil hayvanlardır, aslan ve kaplan ise vahşi hayvanlardır", correctAnswer: "Los perros y los gatos son animales domésticos, mientras que el león y el tigre son animales salvajes" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Bahçede kelebekler, arılar ve uğurböcekleri var", correctAnswer: "En el jardín hay mariposas, abejas y mariquitas" },
];
