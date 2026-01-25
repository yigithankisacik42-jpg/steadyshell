/**
 * SteadyShell Kelime Veritabanı - İspanyolca B1
 * 30 Ünite (ID: 61-90), her biri için 20 kelime
 * Curriculum ile uyumlu
 */

export interface B1VocabularyItem {
    word: string;
    meaning: string;
    pronunciation: string;
    example: string;
    exampleTranslation: string;
}

// ===== ÜNİTE 61: GELECEK ZAMAN =====
const unit61Vocabulary: B1VocabularyItem[] = [
    { word: "Mañana", meaning: "Yarın", pronunciation: "ma-NYA-na", example: "Mañana iré al médico.", exampleTranslation: "Yarın doktora gideceğim." },
    { word: "La semana que viene", meaning: "Gelecek hafta", pronunciation: "se-MA-na ke VIE-ne", example: "La semana que viene tendré vacaciones.", exampleTranslation: "Gelecek hafta tatilim olacak." },
    { word: "Pronto", meaning: "Yakında", pronunciation: "PRON-to", example: "Pronto terminaré el proyecto.", exampleTranslation: "Yakında projeyi bitireceğim." },
    { word: "Algún día", meaning: "Bir gün", pronunciation: "al-GUN DI-a", example: "Algún día visitaré Japón.", exampleTranslation: "Bir gün Japonya'yı ziyaret edeceğim." },
    { word: "Dentro de", meaning: "... içinde", pronunciation: "DEN-tro de", example: "Dentro de dos horas llegaré.", exampleTranslation: "İki saat içinde varacağım." },
    { word: "El futuro", meaning: "Gelecek", pronunciation: "fu-TU-ro", example: "El futuro es incierto.", exampleTranslation: "Gelecek belirsiz." },
    { word: "Planear", meaning: "Planlamak", pronunciation: "pla-ne-AR", example: "Planeo viajar en verano.", exampleTranslation: "Yazın seyahat etmeyi planlıyorum." },
    { word: "Esperar", meaning: "Ummak/Beklemek", pronunciation: "es-pe-RAR", example: "Espero que vengas.", exampleTranslation: "Gelmen diliyorum." },
    { word: "Predecir", meaning: "Tahmin etmek", pronunciation: "pre-de-SIR", example: "Es difícil predecir el tiempo.", exampleTranslation: "Havayı tahmin etmek zor." },
    { word: "Probablemente", meaning: "Muhtemelen", pronunciation: "pro-ba-ble-MEN-te", example: "Probablemente lloverá.", exampleTranslation: "Muhtemelen yağmur yağacak." },
    { word: "El año que viene", meaning: "Gelecek yıl", pronunciation: "a-NYO ke VIE-ne", example: "El año que viene me casaré.", exampleTranslation: "Gelecek yıl evleneceğim." },
    { word: "Pasado mañana", meaning: "Yarından sonra", pronunciation: "pa-SA-do ma-NYA-na", example: "Pasado mañana tengo examen.", exampleTranslation: "Yarından sonra sınavım var." },
    { word: "En el futuro", meaning: "Gelecekte", pronunciation: "en el fu-TU-ro", example: "En el futuro todo cambiará.", exampleTranslation: "Gelecekte her şey değişecek." },
    { word: "Próximamente", meaning: "Çok yakında", pronunciation: "PROK-si-ma-men-te", example: "Próximamente estrenarán la película.", exampleTranslation: "Çok yakında film vizyona girecek." },
    { word: "A largo plazo", meaning: "Uzun vadede", pronunciation: "a LAR-go PLA-so", example: "A largo plazo ahorraré dinero.", exampleTranslation: "Uzun vadede para biriktireceğim." },
    { word: "A corto plazo", meaning: "Kısa vadede", pronunciation: "a KOR-to PLA-so", example: "A corto plazo terminaré esto.", exampleTranslation: "Kısa vadede bunu bitireceğim." },
    { word: "Soñar con", meaning: "Hayal kurmak", pronunciation: "so-NYAR kon", example: "Sueño con viajar por el mundo.", exampleTranslation: "Dünyayı gezmekle ilgili hayal kuruyorum." },
    { word: "Pretender", meaning: "Niyetinde olmak", pronunciation: "pre-ten-DER", example: "Pretendo terminar hoy.", exampleTranslation: "Bugün bitirmeye niyetliyim." },
    { word: "Decidir", meaning: "Karar vermek", pronunciation: "de-si-DIR", example: "Decidiré mañana.", exampleTranslation: "Yarın karar vereceğim." },
    { word: "Más tarde", meaning: "Daha sonra", pronunciation: "mas TAR-de", example: "Te responderé más tarde.", exampleTranslation: "Sana daha sonra cevap vereceğim." }
];

// ===== ÜNİTE 62: KOŞUL CÜMLELERİ 1 =====
const unit62Vocabulary: B1VocabularyItem[] = [
    { word: "Si", meaning: "Eğer", pronunciation: "si", example: "Si llueve, me quedo en casa.", exampleTranslation: "Eğer yağmur yağarsa evde kalırım." },
    { word: "Entonces", meaning: "O zaman", pronunciation: "en-TON-ces", example: "Si llegas tarde, entonces no iremos.", exampleTranslation: "Geç kalırsan, o zaman gitmeyeceğiz." },
    { word: "En caso de", meaning: "Durumunda", pronunciation: "en KA-so de", example: "En caso de emergencia, llama.", exampleTranslation: "Acil durumda ara." },
    { word: "A menos que", meaning: "...olmadıkça", pronunciation: "a ME-nos ke", example: "Iré a menos que llueva.", exampleTranslation: "Yağmur yağmadıkça gideceğim." },
    { word: "Siempre que", meaning: "Her zaman ki", pronunciation: "SIEM-pre ke", example: "Siempre que pueda, te ayudaré.", exampleTranslation: "Yapabildiğim sürece sana yardım edeceğim." },
    { word: "Con tal de que", meaning: "...meğe", pronunciation: "kon tal de ke", example: "Iré con tal de que vengas.", exampleTranslation: "Sen gelirsen giderim." },
    { word: "De lo contrario", meaning: "Aksi takdirde", pronunciation: "de lo kon-TRA-rio", example: "Estudia, de lo contrario suspenderás.", exampleTranslation: "Çalış, yoksa kalırsın." },
    { word: "La condición", meaning: "Koşul", pronunciation: "kon-di-SION", example: "La condición es que llegues temprano.", exampleTranslation: "Koşul erken gelmen." },
    { word: "Depender de", meaning: "...e bağlı olmak", pronunciation: "de-pen-DER de", example: "Depende del tiempo.", exampleTranslation: "Havaya bağlı." },
    { word: "Posiblemente", meaning: "Muhtemelen", pronunciation: "po-si-ble-MEN-te", example: "Posiblemente venga.", exampleTranslation: "Muhtemelen gelir." },
    { word: "Sin duda", meaning: "Şüphesiz", pronunciation: "sin DU-da", example: "Sin duda, iremos.", exampleTranslation: "Şüphesiz gideceğiz." },
    { word: "Quizás", meaning: "Belki", pronunciation: "ki-SAS", example: "Quizás llueva.", exampleTranslation: "Belki yağmur yağar." },
    { word: "Tal vez", meaning: "Belki", pronunciation: "tal ves", example: "Tal vez venga mañana.", exampleTranslation: "Belki yarın gelir." },
    { word: "A condición de que", meaning: "Şartıyla", pronunciation: "a kon-di-SION de ke", example: "Acepto a condición de que me pagues.", exampleTranslation: "Bana ödeme yaparsan kabul ederim." },
    { word: "Suponer", meaning: "Varsaymak", pronunciation: "su-po-NER", example: "Supongo que vendrá.", exampleTranslation: "Geleceğini varsayıyorum." },
    { word: "Imaginarse", meaning: "Hayal etmek", pronunciation: "i-ma-hi-NAR-se", example: "Me imagino que es difícil.", exampleTranslation: "Zor olduğunu hayal ediyorum." },
    { word: "Ocurrir", meaning: "Meydana gelmek", pronunciation: "o-ku-RRIR", example: "Si ocurre algo, avísame.", exampleTranslation: "Bir şey olursa bana haber ver." },
    { word: "Suceder", meaning: "Olmak", pronunciation: "su-ce-DER", example: "Si sucede, te llamaré.", exampleTranslation: "Olursa seni arayacağım." },
    { word: "Cumplir", meaning: "Yerine getirmek", pronunciation: "kum-PLIR", example: "Si cumples, te premiaré.", exampleTranslation: "Yerine getirirsen ödüllendireceğim." },
    { word: "Prometer", meaning: "Söz vermek", pronunciation: "pro-me-TER", example: "Si prometes, confiaré.", exampleTranslation: "Söz verirsen güvenirim." }
];

// ===== ÜNİTE 63: KOŞUL CÜMLELERİ 2 =====
const unit63Vocabulary: B1VocabularyItem[] = [
    { word: "Si tuviera", meaning: "Olsaydı", pronunciation: "si tu-VIE-ra", example: "Si tuviera dinero, viajaría.", exampleTranslation: "Param olsaydı seyahat ederdim." },
    { word: "Si pudiera", meaning: "Yapabilseydim", pronunciation: "si pu-DIE-ra", example: "Si pudiera, te ayudaría.", exampleTranslation: "Yapabilsem sana yardım ederdim." },
    { word: "Si fuera", meaning: "Olsaydım", pronunciation: "si FUE-ra", example: "Si fuera rico, no trabajaría.", exampleTranslation: "Zengin olsaydım çalışmazdım." },
    { word: "Si supiera", meaning: "Bilseydim", pronunciation: "si su-PIE-ra", example: "Si supiera la respuesta, te la diría.", exampleTranslation: "Cevabı bilseydim sana söylerdim." },
    { word: "Habría", meaning: "Olurdu", pronunciation: "ab-RI-a", example: "Habría sido mejor.", exampleTranslation: "Daha iyi olurdu." },
    { word: "Podría", meaning: "Yapabilirdim", pronunciation: "po-DRI-a", example: "Podría ayudarte.", exampleTranslation: "Sana yardım edebilirdim." },
    { word: "Sería", meaning: "Olurdu", pronunciation: "se-RI-a", example: "Sería genial ir.", exampleTranslation: "Gitmek harika olurdu." },
    { word: "Tendría", meaning: "Sahip olurdum", pronunciation: "ten-DRI-a", example: "Tendría más tiempo.", exampleTranslation: "Daha fazla zamanım olurdu." },
    { word: "Haría", meaning: "Yapardım", pronunciation: "a-RI-a", example: "Haría cualquier cosa.", exampleTranslation: "Her şeyi yapardım." },
    { word: "Querría", meaning: "İsterdim", pronunciation: "ke-RRI-a", example: "Querría un café.", exampleTranslation: "Bir kahve isterdim." },
    { word: "Debería", meaning: "Yapmalıydım", pronunciation: "de-be-RI-a", example: "Debería estudiar más.", exampleTranslation: "Daha çok çalışmalıydım." },
    { word: "Iría", meaning: "Giderdim", pronunciation: "i-RI-a", example: "Iría contigo.", exampleTranslation: "Seninle giderdim." },
    { word: "Estaría", meaning: "Olurdum", pronunciation: "es-ta-RI-a", example: "Estaría feliz.", exampleTranslation: "Mutlu olurdum." },
    { word: "Vendría", meaning: "Gelirdim", pronunciation: "ven-DRI-a", example: "Vendría si pudiera.", exampleTranslation: "Yapabilsem gelirdim." },
    { word: "Diría", meaning: "Söylerdim", pronunciation: "di-RI-a", example: "No diría nada.", exampleTranslation: "Hiçbir şey söylemezdim." },
    { word: "Viviría", meaning: "Yaşardım", pronunciation: "vi-vi-RI-a", example: "Viviría en la playa.", exampleTranslation: "Sahilde yaşardım." },
    { word: "Compraría", meaning: "Alırdım", pronunciation: "kom-pra-RI-a", example: "Compraría esa casa.", exampleTranslation: "O evi alırdım." },
    { word: "Trabajaría", meaning: "Çalışırdım", pronunciation: "tra-ba-ha-RI-a", example: "Trabajaría menos.", exampleTranslation: "Daha az çalışırdım." },
    { word: "Estudiaría", meaning: "Çalışırdım", pronunciation: "es-tu-dia-RI-a", example: "Estudiaría música.", exampleTranslation: "Müzik çalışırdım." },
    { word: "Aprendería", meaning: "Öğrenirdim", pronunciation: "a-pren-de-RI-a", example: "Aprendería otro idioma.", exampleTranslation: "Başka bir dil öğrenirdim." }
];

// ===== ÜNİTE 64: SUBJUNTİVO GİRİŞ =====
const unit64Vocabulary: B1VocabularyItem[] = [
    { word: "Espero que", meaning: "Umarım ki", pronunciation: "es-PE-ro ke", example: "Espero que estés bien.", exampleTranslation: "Umarım iyisindir." },
    { word: "Quiero que", meaning: "İstiyorum ki", pronunciation: "KIE-ro ke", example: "Quiero que vengas.", exampleTranslation: "Gelmeni istiyorum." },
    { word: "Ojalá", meaning: "Keşke/Umarım", pronunciation: "o-ha-LA", example: "Ojalá llueva mañana.", exampleTranslation: "Keşke yarın yağmur yağsa." },
    { word: "Dudo que", meaning: "Şüpheliyim ki", pronunciation: "DU-do ke", example: "Dudo que venga.", exampleTranslation: "Geleceğinden şüpheliyim." },
    { word: "Es posible que", meaning: "Mümkün ki", pronunciation: "es po-SI-ble ke", example: "Es posible que llegue tarde.", exampleTranslation: "Geç kalmam mümkün." },
    { word: "Es necesario que", meaning: "Gerekli ki", pronunciation: "es ne-se-SA-rio ke", example: "Es necesario que estudies.", exampleTranslation: "Çalışman gerekli." },
    { word: "Cuando", meaning: "Zaman (Gelecek)", pronunciation: "KUAN-do", example: "Cuando llegues, llámame.", exampleTranslation: "Geldiğinde beni ara." },
    { word: "Antes de que", meaning: "...dan önce", pronunciation: "AN-tes de ke", example: "Antes de que salgas, come.", exampleTranslation: "Çıkmadan önce ye." },
    { word: "Para que", meaning: "...olması için", pronunciation: "PA-ra ke", example: "Te lo digo para que lo sepas.", exampleTranslation: "Bilmen için söylüyorum." },
    { word: "Sin que", meaning: "...olmadan", pronunciation: "sin ke", example: "Lo hizo sin que yo lo supiera.", exampleTranslation: "Ben bilmeden yaptı." },
    { word: "Hasta que", meaning: "...e kadar", pronunciation: "AS-ta ke", example: "Esperaré hasta que vengas.", exampleTranslation: "Gelene kadar bekleyeceğim." },
    { word: "Es probable que", meaning: "Muhtemelen", pronunciation: "es pro-BA-ble ke", example: "Es probable que llueva.", exampleTranslation: "Muhtemelen yağmur yağar." },
    { word: "No creo que", meaning: "Sanmıyorum ki", pronunciation: "no KRE-o ke", example: "No creo que tenga razón.", exampleTranslation: "Haklı olduğunu sanmıyorum." },
    { word: "Me alegra que", meaning: "Seviniyorum ki", pronunciation: "me a-LE-gra ke", example: "Me alegra que estés aquí.", exampleTranslation: "Burada olmana seviniyorum." },
    { word: "Me molesta que", meaning: "Rahatsız ediyor ki", pronunciation: "me mo-LES-ta ke", example: "Me molesta que llegues tarde.", exampleTranslation: "Geç kalman beni rahatsız ediyor." },
    { word: "Sugiero que", meaning: "Öneriyorum ki", pronunciation: "su-HIE-ro ke", example: "Sugiero que descanses.", exampleTranslation: "Dinlenmeni öneriyorum." },
    { word: "Recomiendo que", meaning: "Tavsiye ediyorum ki", pronunciation: "re-ko-MIEN-do ke", example: "Recomiendo que estudies más.", exampleTranslation: "Daha çok çalışmanı tavsiye ediyorum." },
    { word: "Pido que", meaning: "Rica ediyorum ki", pronunciation: "PI-do ke", example: "Te pido que me ayudes.", exampleTranslation: "Bana yardım etmeni rica ediyorum." },
    { word: "Temo que", meaning: "Korkarım ki", pronunciation: "TE-mo ke", example: "Temo que sea demasiado tarde.", exampleTranslation: "Korkarım çok geç." },
    { word: "Es importante que", meaning: "Önemli ki", pronunciation: "es im-por-TAN-te ke", example: "Es importante que escuches.", exampleTranslation: "Dinlemen önemli." }
];

// ===== ÜNİTE 65: HABERLER VE MEDYA =====
const unit65Vocabulary: B1VocabularyItem[] = [
    { word: "La noticia", meaning: "Haber", pronunciation: "no-TI-sia", example: "Leí una noticia interesante.", exampleTranslation: "İlginç bir haber okudum." },
    { word: "El periódico", meaning: "Gazete", pronunciation: "pe-RI-o-di-ko", example: "Leo el periódico cada mañana.", exampleTranslation: "Her sabah gazete okurum." },
    { word: "La prensa", meaning: "Basın", pronunciation: "PREN-sa", example: "La prensa investiga el caso.", exampleTranslation: "Basın olayı araştırıyor." },
    { word: "El titular", meaning: "Başlık", pronunciation: "ti-tu-LAR", example: "El titular es impactante.", exampleTranslation: "Başlık çarpıcı." },
    { word: "Entrevistar", meaning: "Röportaj yapmak", pronunciation: "en-tre-vis-TAR", example: "Entrevistaron al presidente.", exampleTranslation: "Cumhurbaşkanıyla röportaj yaptılar." },
    { word: "Publicar", meaning: "Yayınlamak", pronunciation: "pu-bli-KAR", example: "Publicaron el artículo.", exampleTranslation: "Makaleyi yayınladılar." },
    { word: "La fuente", meaning: "Kaynak", pronunciation: "FUEN-te", example: "La fuente es confiable.", exampleTranslation: "Kaynak güvenilir." },
    { word: "Informar", meaning: "Bilgilendirmek", pronunciation: "in-for-MAR", example: "Te informaremos de los cambios.", exampleTranslation: "Değişiklikler hakkında seni bilgilendireceğiz." },
    { word: "El reportaje", meaning: "Röportaj/Haber", pronunciation: "re-por-TA-he", example: "Vi un reportaje sobre África.", exampleTranslation: "Afrika hakkında bir röportaj izledim." },
    { word: "En directo", meaning: "Canlı yayın", pronunciation: "en di-REK-to", example: "La transmisión es en directo.", exampleTranslation: "Yayın canlı." },
    { word: "El periodista", meaning: "Gazeteci", pronunciation: "pe-rio-DIS-ta", example: "El periodista investigó el caso.", exampleTranslation: "Gazeteci olayı araştırdı." },
    { word: "La revista", meaning: "Dergi", pronunciation: "re-VIS-ta", example: "Leo una revista de moda.", exampleTranslation: "Bir moda dergisi okuyorum." },
    { word: "El canal", meaning: "Kanal", pronunciation: "ka-NAL", example: "Este canal tiene buenas noticias.", exampleTranslation: "Bu kanal iyi haberler veriyor." },
    { word: "Las redes sociales", meaning: "Sosyal medya", pronunciation: "RE-des so-SIA-les", example: "Las redes sociales influyen mucho.", exampleTranslation: "Sosyal medya çok etkili." },
    { word: "Viral", meaning: "Viral", pronunciation: "bi-RAL", example: "El video se hizo viral.", exampleTranslation: "Video viral oldu." },
    { word: "La fake news", meaning: "Sahte haber", pronunciation: "feik nius", example: "Hay que evitar las fake news.", exampleTranslation: "Sahte haberlerden kaçınmalı." },
    { word: "El podcast", meaning: "Podcast", pronunciation: "POD-kast", example: "Escucho podcasts cada día.", exampleTranslation: "Her gün podcast dinliyorum." },
    { word: "El influencer", meaning: "Influencer", pronunciation: "in-flu-EN-ser", example: "Sigo a muchos influencers.", exampleTranslation: "Birçok influencer takip ediyorum." },
    { word: "El streaming", meaning: "Canlı yayın akışı", pronunciation: "STRI-ming", example: "Veo series en streaming.", exampleTranslation: "Dizileri streaming ile izliyorum." },
    { word: "La censura", meaning: "Sansür", pronunciation: "sen-SU-ra", example: "La censura limita la libertad.", exampleTranslation: "Sansür özgürlüğü kısıtlıyor." }
];

// ===== ÜNİTE 66: ÇEVRE SORUNLARI =====
const unit66Vocabulary: B1VocabularyItem[] = [
    { word: "El medio ambiente", meaning: "Çevre", pronunciation: "ME-dio am-BIEN-te", example: "Proteger el medio ambiente es importante.", exampleTranslation: "Çevreyi korumak önemli." },
    { word: "La contaminación", meaning: "Kirlilik", pronunciation: "kon-ta-mi-na-SION", example: "La contaminación del aire es grave.", exampleTranslation: "Hava kirliliği ciddi." },
    { word: "El cambio climático", meaning: "İklim değişikliği", pronunciation: "KAM-bio kli-MA-ti-ko", example: "El cambio climático afecta a todos.", exampleTranslation: "İklim değişikliği herkesi etkiliyor." },
    { word: "El calentamiento global", meaning: "Küresel ısınma", pronunciation: "ka-len-ta-MIEN-to", example: "El calentamiento global es real.", exampleTranslation: "Küresel ısınma gerçek." },
    { word: "La deforestación", meaning: "Ormansızlaşma", pronunciation: "de-fo-res-ta-SION", example: "La deforestación destruye hábitats.", exampleTranslation: "Ormansızlaşma yaşam alanlarını yok ediyor." },
    { word: "La sequía", meaning: "Kuraklık", pronunciation: "se-KI-a", example: "La sequía afecta a los cultivos.", exampleTranslation: "Kuraklık ekinleri etkiliyor." },
    { word: "La inundación", meaning: "Sel", pronunciation: "i-nun-da-SION", example: "Las inundaciones destruyeron casas.", exampleTranslation: "Seller evleri yıktı." },
    { word: "El efecto invernadero", meaning: "Sera etkisi", pronunciation: "e-FEK-to in-ver-na-DE-ro", example: "El efecto invernadero causa calentamiento.", exampleTranslation: "Sera etkisi ısınmaya neden olur." },
    { word: "Las emisiones", meaning: "Emisyonlar", pronunciation: "e-mi-SIO-nes", example: "Hay que reducir las emisiones.", exampleTranslation: "Emisyonları azaltmalıyız." },
    { word: "La extinción", meaning: "Nesli tükenme", pronunciation: "eks-tin-SION", example: "La extinción es irreversible.", exampleTranslation: "Nesli tükenme geri dönülemez." },
    { word: "El ecosistema", meaning: "Ekosistem", pronunciation: "e-ko-sis-TE-ma", example: "El ecosistema está en peligro.", exampleTranslation: "Ekosistem tehlike altında." },
    { word: "La biodiversidad", meaning: "Biyoçeşitlilik", pronunciation: "bio-di-ver-si-DAD", example: "La biodiversidad es esencial.", exampleTranslation: "Biyoçeşitlilik önemlidir." },
    { word: "Los residuos", meaning: "Atıklar", pronunciation: "re-SI-duos", example: "Hay que gestionar los residuos.", exampleTranslation: "Atıkları yönetmek gerekir." },
    { word: "La huella de carbono", meaning: "Karbon ayak izi", pronunciation: "UE-ya de kar-BO-no", example: "Reduce tu huella de carbono.", exampleTranslation: "Karbon ayak izini azalt." },
    { word: "El deshielo", meaning: "Buzul erimesi", pronunciation: "des-IE-lo", example: "El deshielo acelera el cambio climático.", exampleTranslation: "Buzul erimesi iklim değişikliğini hızlandırır." },
    { word: "Contaminar", meaning: "Kirletmek", pronunciation: "kon-ta-mi-NAR", example: "Las fábricas contaminan el río.", exampleTranslation: "Fabrikalar nehri kirletiyor." },
    { word: "Proteger", meaning: "Korumak", pronunciation: "pro-te-HER", example: "Debemos proteger la naturaleza.", exampleTranslation: "Doğayı korumalıyız." },
    { word: "El desastre natural", meaning: "Doğal afet", pronunciation: "de-SAS-tre na-tu-RAL", example: "Los desastres naturales aumentan.", exampleTranslation: "Doğal afetler artıyor." },
    { word: "Los glaciares", meaning: "Buzullar", pronunciation: "gla-CIA-res", example: "Los glaciares se están derritiendo.", exampleTranslation: "Buzullar eriyor." },
    { word: "El plástico", meaning: "Plastik", pronunciation: "PLAS-ti-ko", example: "El plástico daña los océanos.", exampleTranslation: "Plastik okyanuslara zarar veriyor." }
];

// ===== ÜNİTE 67: SÜRDÜRÜLEBİLİRLİK =====
const unit67Vocabulary: B1VocabularyItem[] = [
    { word: "Reciclar", meaning: "Geri dönüştürmek", pronunciation: "re-si-KLAR", example: "Debemos reciclar más.", exampleTranslation: "Daha çok geri dönüştürmeliyiz." },
    { word: "Renovable", meaning: "Yenilenebilir", pronunciation: "re-no-VA-ble", example: "La energía renovable es el futuro.", exampleTranslation: "Yenilenebilir enerji gelecek." },
    { word: "Sostenible", meaning: "Sürdürülebilir", pronunciation: "sos-te-NI-ble", example: "Buscamos un desarrollo sostenible.", exampleTranslation: "Sürdürülebilir kalkınma arıyoruz." },
    { word: "El panel solar", meaning: "Güneş paneli", pronunciation: "pa-NEL so-LAR", example: "Instalamos paneles solares.", exampleTranslation: "Güneş paneli kurduk." },
    { word: "Ahorrar", meaning: "Tasarruf etmek", pronunciation: "a-o-RRAR", example: "Ahorra agua y energía.", exampleTranslation: "Su ve enerji tasarrufu yap." },
    { word: "Reutilizar", meaning: "Yeniden kullanmak", pronunciation: "re-u-ti-li-SAR", example: "Reutilizo los envases.", exampleTranslation: "Kapları yeniden kullanıyorum." },
    { word: "Reducir", meaning: "Azaltmak", pronunciation: "re-du-SIR", example: "Reduce el consumo de plástico.", exampleTranslation: "Plastik tüketimini azalt." },
    { word: "Biodegradable", meaning: "Biyobozunur", pronunciation: "bio-de-gra-DA-ble", example: "Uso productos biodegradables.", exampleTranslation: "Biyobozunur ürünler kullanıyorum." },
    { word: "El comercio justo", meaning: "Adil ticaret", pronunciation: "ko-MER-cio HUS-to", example: "Apoyo el comercio justo.", exampleTranslation: "Adil ticareti destekliyorum." },
    { word: "El desperdicio", meaning: "İsraf", pronunciation: "des-per-DI-cio", example: "Evita el desperdicio de comida.", exampleTranslation: "Yemek israfından kaçın." },
    { word: "La economía circular", meaning: "Döngüsel ekonomi", pronunciation: "e-ko-no-MI-a", example: "La economía circular funciona.", exampleTranslation: "Döngüsel ekonomi işe yarıyor." },
    { word: "El consumo responsable", meaning: "Sorumlu tüketim", pronunciation: "kon-SU-mo", example: "Practico el consumo responsable.", exampleTranslation: "Sorumlu tüketim yapıyorum." },
    { word: "Plantar", meaning: "Dikmek", pronunciation: "plan-TAR", example: "Plantamos árboles cada año.", exampleTranslation: "Her yıl ağaç dikiyoruz." },
    { word: "El molino de viento", meaning: "Rüzgar türbini", pronunciation: "mo-LI-no de VIEN-to", example: "Los molinos generan electricidad.", exampleTranslation: "Rüzgar türbinleri elektrik üretiyor." },
    { word: "La huella ecológica", meaning: "Ekolojik ayak izi", pronunciation: "UE-ya e-ko-LO-hi-ka", example: "Reduce tu huella ecológica.", exampleTranslation: "Ekolojik ayak izini azalt." },
    { word: "Cero emisiones", meaning: "Sıfır emisyon", pronunciation: "CE-ro e-mi-SIO-nes", example: "Buscamos cero emisiones.", exampleTranslation: "Sıfır emisyon hedefliyoruz." },
    { word: "La energía limpia", meaning: "Temiz enerji", pronunciation: "e-ner-HI-a LIM-pia", example: "Usamos energía limpia.", exampleTranslation: "Temiz enerji kullanıyoruz." },
    { word: "Conservar", meaning: "Korumak", pronunciation: "kon-ser-VAR", example: "Hay que conservar la naturaleza.", exampleTranslation: "Doğayı korumak gerekir." },
    { word: "El turismo sostenible", meaning: "Sürdürülebilir turizm", pronunciation: "tu-RIS-mo", example: "El turismo sostenible crece.", exampleTranslation: "Sürdürülebilir turizm büyüyor." },
    { word: "El futuro verde", meaning: "Yeşil gelecek", pronunciation: "fu-TU-ro VER-de", example: "Queremos un futuro verde.", exampleTranslation: "Yeşil bir gelecek istiyoruz." }
];

// ===== ÜNİTE 68: KÜLTÜR VE GELENEKLER =====
const unit68Vocabulary: B1VocabularyItem[] = [
    { word: "La tradición", meaning: "Gelenek", pronunciation: "tra-di-SION", example: "Es una tradición española.", exampleTranslation: "İspanyol geleneği." },
    { word: "La costumbre", meaning: "Adet/Görenek", pronunciation: "kos-TUM-bre", example: "Es costumbre cenar tarde.", exampleTranslation: "Geç yemek yemek adettir." },
    { word: "La siesta", meaning: "Siesta", pronunciation: "SIES-ta", example: "La siesta es tradición española.", exampleTranslation: "Siesta İspanyol geleneği." },
    { word: "El festival", meaning: "Festival", pronunciation: "fes-ti-VAL", example: "Celebramos muchos festivales.", exampleTranslation: "Birçok festival kutluyoruz." },
    { word: "El flamenco", meaning: "Flamenko", pronunciation: "fla-MEN-ko", example: "El flamenco es arte español.", exampleTranslation: "Flamenko İspanyol sanatı." },
    { word: "Las tapas", meaning: "Tapas", pronunciation: "TA-pas", example: "Ir de tapas es muy común.", exampleTranslation: "Tapas yemeye gitmek çok yaygın." },
    { word: "La sobremesa", meaning: "Yemek sonrası sohbet", pronunciation: "so-bre-ME-sa", example: "La sobremesa dura horas.", exampleTranslation: "Yemek sonrası sohbet saatlerce sürer." },
    { word: "La Semana Santa", meaning: "Kutsal Hafta", pronunciation: "se-MA-na SAN-ta", example: "La Semana Santa es impresionante.", exampleTranslation: "Kutsal Hafta etkileyici." },
    { word: "La corrida", meaning: "Boğa güreşi", pronunciation: "ko-RRI-da", example: "Las corridas son polémicas.", exampleTranslation: "Boğa güreşleri tartışmalı." },
    { word: "El patrimonio", meaning: "Miras", pronunciation: "pa-tri-MO-nio", example: "El patrimonio cultural es rico.", exampleTranslation: "Kültürel miras zengin." },
    { word: "La gastronomía", meaning: "Gastronomi", pronunciation: "gas-tro-no-MI-a", example: "La gastronomía española es variada.", exampleTranslation: "İspanyol mutfağı çeşitli." },
    { word: "Celebrar", meaning: "Kutlamak", pronunciation: "ce-le-BRAR", example: "Celebramos la Navidad.", exampleTranslation: "Noel'i kutluyoruz." },
    { word: "Los Reyes Magos", meaning: "Üç Kral", pronunciation: "RE-yes MA-gos", example: "Los Reyes Magos traen regalos.", exampleTranslation: "Üç Kral hediye getirir." },
    { word: "La Nochevieja", meaning: "Yılbaşı gecesi", pronunciation: "no-che-VIE-ha", example: "En Nochevieja comemos uvas.", exampleTranslation: "Yılbaşında üzüm yiyoruz." },
    { word: "El Carnaval", meaning: "Karnaval", pronunciation: "kar-na-VAL", example: "El Carnaval es muy divertido.", exampleTranslation: "Karnaval çok eğlenceli." },
    { word: "San Fermín", meaning: "San Fermín", pronunciation: "san fer-MIN", example: "San Fermín atrae turistas.", exampleTranslation: "San Fermín turistleri çekiyor." },
    { word: "La Tomatina", meaning: "Tomatina", pronunciation: "to-ma-TI-na", example: "La Tomatina es famosa mundialmente.", exampleTranslation: "Tomatina dünya çapında ünlü." },
    { word: "Heredar", meaning: "Miras almak", pronunciation: "e-re-DAR", example: "Heredamos estas tradiciones.", exampleTranslation: "Bu gelenekleri miras aldık." },
    { word: "Preservar", meaning: "Korumak", pronunciation: "pre-ser-VAR", example: "Hay que preservar las costumbres.", exampleTranslation: "Gelenekleri korumak gerekir." },
    { word: "La identidad", meaning: "Kimlik", pronunciation: "i-den-ti-DAD", example: "La identidad cultural es importante.", exampleTranslation: "Kültürel kimlik önemli." }
];

// ===== ÜNİTE 69: EKONOMİ TEMELLERİ =====
const unit69Vocabulary: B1VocabularyItem[] = [
    { word: "La inflación", meaning: "Enflasyon", pronunciation: "in-fla-SION", example: "La inflación ha subido mucho.", exampleTranslation: "Enflasyon çok yükseldi." },
    { word: "El desempleo", meaning: "İşsizlik", pronunciation: "des-em-PLE-o", example: "El desempleo es un problema.", exampleTranslation: "İşsizlik bir sorun." },
    { word: "El PIB", meaning: "GSYİH", pronunciation: "pe-i-be", example: "El PIB creció este año.", exampleTranslation: "GSYİH bu yıl büyüdü." },
    { word: "La oferta", meaning: "Arz", pronunciation: "o-FER-ta", example: "La oferta y la demanda.", exampleTranslation: "Arz ve talep." },
    { word: "La demanda", meaning: "Talep", pronunciation: "de-MAN-da", example: "La demanda es alta.", exampleTranslation: "Talep yüksek." },
    { word: "El impuesto", meaning: "Vergi", pronunciation: "im-PUES-to", example: "Los impuestos financian servicios.", exampleTranslation: "Vergiler hizmetleri finanse eder." },
    { word: "La deuda", meaning: "Borç", pronunciation: "DEU-da", example: "La deuda pública aumenta.", exampleTranslation: "Kamu borcu artıyor." },
    { word: "El banco central", meaning: "Merkez bankası", pronunciation: "BAN-ko cen-TRAL", example: "El banco central sube tipos.", exampleTranslation: "Merkez bankası faiz artırıyor." },
    { word: "El presupuesto", meaning: "Bütçe", pronunciation: "pre-su-PUES-to", example: "El presupuesto es limitado.", exampleTranslation: "Bütçe sınırlı." },
    { word: "Invertir", meaning: "Yatırım yapmak", pronunciation: "in-ver-TIR", example: "Invertir en bolsa es arriesgado.", exampleTranslation: "Borsaya yatırım riskli." },
    { word: "La exportación", meaning: "İhracat", pronunciation: "eks-por-ta-SION", example: "La exportación genera ingresos.", exampleTranslation: "İhracat gelir getiriyor." },
    { word: "La importación", meaning: "İthalat", pronunciation: "im-por-ta-SION", example: "La importación es costosa.", exampleTranslation: "İthalat pahalı." },
    { word: "El mercado", meaning: "Piyasa", pronunciation: "mer-KA-do", example: "El mercado de valores fluctúa.", exampleTranslation: "Borsa dalgalanıyor." },
    { word: "La crisis", meaning: "Kriz", pronunciation: "KRI-sis", example: "Hay crisis económica.", exampleTranslation: "Ekonomik kriz var." },
    { word: "El poder adquisitivo", meaning: "Satın alma gücü", pronunciation: "po-DER ad-ki-si-TI-vo", example: "El poder adquisitivo baja.", exampleTranslation: "Satın alma gücü düşüyor." },
    { word: "Ahorrar", meaning: "Biriktirmek", pronunciation: "a-o-RRAR", example: "Ahorro para el futuro.", exampleTranslation: "Gelecek için biriktiriyorum." },
    { word: "La recesión", meaning: "Durgunluk", pronunciation: "re-ce-SION", example: "Hay riesgo de recesión.", exampleTranslation: "Durgunluk riski var." },
    { word: "El crecimiento", meaning: "Büyüme", pronunciation: "kre-ci-MIEN-to", example: "El crecimiento económico es lento.", exampleTranslation: "Ekonomik büyüme yavaş." },
    { word: "El comercio", meaning: "Ticaret", pronunciation: "ko-MER-cio", example: "El comercio internacional crece.", exampleTranslation: "Uluslararası ticaret büyüyor." },
    { word: "La moneda", meaning: "Para birimi", pronunciation: "mo-NE-da", example: "La moneda se devaluó.", exampleTranslation: "Para birimi değer kaybetti." }
];

// ===== ÜNİTE 70: BANKACILIK =====
const unit70Vocabulary: B1VocabularyItem[] = [
    { word: "La cuenta", meaning: "Hesap", pronunciation: "KUEN-ta", example: "Quiero abrir una cuenta.", exampleTranslation: "Hesap açmak istiyorum." },
    { word: "La transferencia", meaning: "Havale", pronunciation: "trans-fe-REN-cia", example: "Necesito hacer una transferencia.", exampleTranslation: "Havale yapmam gerekiyor." },
    { word: "El tipo de cambio", meaning: "Döviz kuru", pronunciation: "TI-po de KAM-bio", example: "¿Cuál es el tipo de cambio?", exampleTranslation: "Döviz kuru nedir?" },
    { word: "El cajero", meaning: "Bankamatik", pronunciation: "ka-HE-ro", example: "Saqué dinero del cajero.", exampleTranslation: "Bankamatikten para çektim." },
    { word: "Ingresar", meaning: "Para yatırmak", pronunciation: "in-gre-SAR", example: "Quiero ingresar dinero.", exampleTranslation: "Para yatırmak istiyorum." },
    { word: "El préstamo", meaning: "Kredi", pronunciation: "PRES-ta-mo", example: "Solicité un préstamo personal.", exampleTranslation: "Kişisel kredi başvurusu yaptım." },
    { word: "La tarjeta de crédito", meaning: "Kredi kartı", pronunciation: "tar-HE-ta de KRE-di-to", example: "Pago con tarjeta de crédito.", exampleTranslation: "Kredi kartıyla ödüyorum." },
    { word: "La tarjeta de débito", meaning: "Banka kartı", pronunciation: "tar-HE-ta de DE-bi-to", example: "Uso tarjeta de débito.", exampleTranslation: "Banka kartı kullanıyorum." },
    { word: "El saldo", meaning: "Bakiye", pronunciation: "SAL-do", example: "Consulto el saldo online.", exampleTranslation: "Bakiyeyi online sorguluyorum." },
    { word: "La factura", meaning: "Fatura", pronunciation: "fak-TU-ra", example: "Pago las facturas mensuales.", exampleTranslation: "Aylık faturaları ödüyorum." },
    { word: "La comisión", meaning: "Komisyon", pronunciation: "ko-mi-SION", example: "Las comisiones son altas.", exampleTranslation: "Komisyonlar yüksek." },
    { word: "La cuenta de ahorros", meaning: "Tasarruf hesabı", pronunciation: "KUEN-ta de a-O-rros", example: "Tengo cuenta de ahorros.", exampleTranslation: "Tasarruf hesabım var." },
    { word: "Bloquear", meaning: "Bloke etmek", pronunciation: "blo-ke-AR", example: "Bloquearon mi tarjeta.", exampleTranslation: "Kartımı bloke ettiler." },
    { word: "La banca en línea", meaning: "İnternet bankacılığı", pronunciation: "BAN-ka en LI-ne-a", example: "Uso banca en línea.", exampleTranslation: "İnternet bankacılığı kullanıyorum." },
    { word: "El interés", meaning: "Faiz", pronunciation: "in-te-RES", example: "El interés es muy bajo.", exampleTranslation: "Faiz çok düşük." },
    { word: "La hipoteca", meaning: "Mortgage", pronunciation: "i-po-TE-ka", example: "Tengo una hipoteca.", exampleTranslation: "Mortgage'ım var." },
    { word: "El recibo", meaning: "Makbuz", pronunciation: "re-CI-bo", example: "Guarda el recibo.", exampleTranslation: "Makbuzu sakla." },
    { word: "El pago", meaning: "Ödeme", pronunciation: "PA-go", example: "El pago está pendiente.", exampleTranslation: "Ödeme beklemede." },
    { word: "Retirar", meaning: "Çekmek", pronunciation: "re-ti-RAR", example: "Quiero retirar dinero.", exampleTranslation: "Para çekmek istiyorum." },
    { word: "El extracto", meaning: "Hesap özeti", pronunciation: "eks-TRAK-to", example: "Revisé el extracto bancario.", exampleTranslation: "Hesap özetini inceledim." }
];

// ===== ÜNİTE 71: TARTIŞMA BECERİLERİ =====
const unit71Vocabulary: B1VocabularyItem[] = [
    { word: "La opinión", meaning: "Görüş", pronunciation: "o-pi-NION", example: "En mi opinión, es correcto.", exampleTranslation: "Bence doğru." },
    { word: "El punto de vista", meaning: "Bakış açısı", pronunciation: "PUN-to de VIS-ta", example: "Desde mi punto de vista...", exampleTranslation: "Benim bakış açımdan..." },
    { word: "Estar de acuerdo", meaning: "Aynı fikirde olmak", pronunciation: "es-TAR de a-KUER-do", example: "Estoy totalmente de acuerdo.", exampleTranslation: "Tamamen aynı fikirdeyim." },
    { word: "Discrepar", meaning: "Aynı fikirde olmamak", pronunciation: "dis-kre-PAR", example: "Discrepo de tu opinión.", exampleTranslation: "Görüşüne katılmıyorum." },
    { word: "El argumento", meaning: "Argüman", pronunciation: "ar-gu-MEN-to", example: "Tu argumento es válido.", exampleTranslation: "Argümanın geçerli." },
    { word: "Debatir", meaning: "Tartışmak", pronunciation: "de-ba-TIR", example: "Debatimos el tema.", exampleTranslation: "Konuyu tartıştık." },
    { word: "Defender", meaning: "Savunmak", pronunciation: "de-fen-DER", example: "Defiendo mi postura.", exampleTranslation: "Tutumumu savunuyorum." },
    { word: "Contradecir", meaning: "Çelişmek", pronunciation: "kon-tra-de-SIR", example: "No quiero contradecirte.", exampleTranslation: "Sana itiraz etmek istemiyorum." },
    { word: "Respetar", meaning: "Saygı duymak", pronunciation: "res-pe-TAR", example: "Respeto tu opinión.", exampleTranslation: "Görüşüne saygı duyuyorum." },
    { word: "Convencer", meaning: "İkna etmek", pronunciation: "kon-ven-SER", example: "No puedo convencerte.", exampleTranslation: "Seni ikna edemiyorum." },
    { word: "Por un lado", meaning: "Bir yandan", pronunciation: "por un LA-do", example: "Por un lado, es bueno...", exampleTranslation: "Bir yandan iyi..." },
    { word: "Por otro lado", meaning: "Öte yandan", pronunciation: "por O-tro LA-do", example: "Por otro lado, es caro.", exampleTranslation: "Öte yandan pahalı." },
    { word: "En resumen", meaning: "Özetle", pronunciation: "en re-SU-men", example: "En resumen, diría que...", exampleTranslation: "Özetle, derdim ki..." },
    { word: "La perspectiva", meaning: "Perspektif", pronunciation: "pers-pek-TI-va", example: "Es cuestión de perspectiva.", exampleTranslation: "Bu bir bakış açısı meselesi." },
    { word: "Considerar", meaning: "Düşünmek", pronunciation: "kon-si-de-RAR", example: "Considero que tienes razón.", exampleTranslation: "Haklı olduğunu düşünüyorum." },
    { word: "Creer", meaning: "İnanmak", pronunciation: "kre-ER", example: "Creo que es cierto.", exampleTranslation: "Doğru olduğuna inanıyorum." },
    { word: "La razón", meaning: "Sebep/Haklılık", pronunciation: "ra-SON", example: "Tienes razón.", exampleTranslation: "Haklısın." },
    { word: "Los pros y contras", meaning: "Artılar ve eksiler", pronunciation: "pros i KON-tras", example: "Hay pros y contras.", exampleTranslation: "Artıları ve eksileri var." },
    { word: "Matizar", meaning: "Nüanslandırmak", pronunciation: "ma-ti-SAR", example: "Quiero matizar mi opinión.", exampleTranslation: "Görüşümü nüanslandırmak istiyorum." },
    { word: "Concluir", meaning: "Sonuçlandırmak", pronunciation: "kon-klu-IR", example: "Para concluir, diré que...", exampleTranslation: "Sonuç olarak, diyeceğim ki..." }
];

// ===== ÜNİTE 72: SUNUM YAPMA =====
const unit72Vocabulary: B1VocabularyItem[] = [
    { word: "La presentación", meaning: "Sunum", pronunciation: "pre-sen-ta-SION", example: "Preparé una presentación.", exampleTranslation: "Bir sunum hazırladım." },
    { word: "El tema", meaning: "Konu", pronunciation: "TE-ma", example: "El tema de hoy es...", exampleTranslation: "Bugünün konusu..." },
    { word: "El gráfico", meaning: "Grafik", pronunciation: "GRA-fi-ko", example: "Como pueden ver en el gráfico...", exampleTranslation: "Grafikte görebileceğiniz gibi..." },
    { word: "El dato", meaning: "Veri", pronunciation: "DA-to", example: "Los datos muestran que...", exampleTranslation: "Veriler gösteriyor ki..." },
    { word: "Destacar", meaning: "Vurgulamak", pronunciation: "des-ta-KAR", example: "Quisiera destacar que...", exampleTranslation: "Şunu vurgulamak isterim..." },
    { word: "Analizar", meaning: "Analiz etmek", pronunciation: "a-na-li-SAR", example: "Analizaremos las causas.", exampleTranslation: "Nedenleri analiz edeceğiz." },
    { word: "La diapositiva", meaning: "Slayt", pronunciation: "dia-po-si-TI-va", example: "Pasemos a la siguiente diapositiva.", exampleTranslation: "Bir sonraki slayta geçelim." },
    { word: "En primer lugar", meaning: "İlk olarak", pronunciation: "en pri-MER lu-GAR", example: "En primer lugar, hablaré de...", exampleTranslation: "İlk olarak, ...hakkında konuşacağım." },
    { word: "A continuación", meaning: "Şimdi", pronunciation: "a kon-ti-nu-a-SION", example: "A continuación, veremos...", exampleTranslation: "Şimdi, göreceğiz..." },
    { word: "Por ejemplo", meaning: "Örneğin", pronunciation: "por e-HEM-plo", example: "Por ejemplo...", exampleTranslation: "Örneğin..." },
    { word: "Resumir", meaning: "Özetlemek", pronunciation: "re-su-MIR", example: "Resumiendo lo anterior...", exampleTranslation: "Öncekini özetleyerek..." },
    { word: "La conclusión", meaning: "Sonuç", pronunciation: "kon-klu-SION", example: "Las conclusiones son claras.", exampleTranslation: "Sonuçlar açık." },
    { word: "La audiencia", meaning: "İzleyici", pronunciation: "au-DIEN-cia", example: "Gracias por su atención.", exampleTranslation: "İlginiz için teşekkürler." },
    { word: "Preguntar", meaning: "Sormak", pronunciation: "pre-gun-TAR", example: "¿Tienen alguna pregunta?", exampleTranslation: "Sorunuz var mı?" },
    { word: "Explicar", meaning: "Açıklamak", pronunciation: "eks-pli-KAR", example: "Explicaré el proceso.", exampleTranslation: "Süreci açıklayacağım." },
    { word: "Demostrar", meaning: "Göstermek", pronunciation: "de-mos-TRAR", example: "Esto demuestra que...", exampleTranslation: "Bu gösteriyor ki..." },
    { word: "Ilustrar", meaning: "Görselle açıklamak", pronunciation: "i-lus-TRAR", example: "Para ilustrar este punto...", exampleTranslation: "Bu noktayı açıklamak için..." },
    { word: "Comparar", meaning: "Karşılaştırmak", pronunciation: "kom-pa-RAR", example: "Comparemos los resultados.", exampleTranslation: "Sonuçları karşılaştıralım." },
    { word: "Finalmente", meaning: "Son olarak", pronunciation: "fi-nal-MEN-te", example: "Finalmente, concluyo.", exampleTranslation: "Son olarak, sonuca varıyorum." },
    { word: "La estructura", meaning: "Yapı", pronunciation: "es-truk-TU-ra", example: "La estructura es clara.", exampleTranslation: "Yapı açık." }
];

// ===== ÜNİTE 73: EDEBİYAT 1 =====
const unit73Vocabulary: B1VocabularyItem[] = [
    { word: "La novela", meaning: "Roman", pronunciation: "no-VE-la", example: "Esta novela es un clásico.", exampleTranslation: "Bu roman bir klasik." },
    { word: "El autor", meaning: "Yazar", pronunciation: "au-TOR", example: "El autor ganó el Premio Nobel.", exampleTranslation: "Yazar Nobel Ödülü kazandı." },
    { word: "La trama", meaning: "Olay örgüsü", pronunciation: "TRA-ma", example: "La trama es muy interesante.", exampleTranslation: "Olay örgüsü çok ilginç." },
    { word: "El protagonista", meaning: "Başkahraman", pronunciation: "pro-ta-go-NIS-ta", example: "El protagonista es complejo.", exampleTranslation: "Başkahraman karmaşık." },
    { word: "El personaje", meaning: "Karakter", pronunciation: "per-so-NA-he", example: "Me identifico con el personaje.", exampleTranslation: "Karakterle özdeşleşiyorum." },
    { word: "La obra maestra", meaning: "Başyapıt", pronunciation: "O-bra ma-ES-tra", example: "Es una obra maestra.", exampleTranslation: "Bir başyapıt." },
    { word: "El cuento", meaning: "Hikaye", pronunciation: "KUEN-to", example: "Es un cuento corto.", exampleTranslation: "Kısa bir hikaye." },
    { word: "La poesía", meaning: "Şiir", pronunciation: "po-e-SI-a", example: "Me encanta leer poesía.", exampleTranslation: "Şiir okumaya bayılıyorum." },
    { word: "El capítulo", meaning: "Bölüm", pronunciation: "ka-PI-tu-lo", example: "Leí el primer capítulo.", exampleTranslation: "İlk bölümü okudum." },
    { word: "El género", meaning: "Tür", pronunciation: "HE-ne-ro", example: "¿Qué género prefieres?", exampleTranslation: "Hangi türü tercih edersin?" },
    { word: "El narrador", meaning: "Anlatıcı", pronunciation: "na-rra-DOR", example: "El narrador es fiable.", exampleTranslation: "Anlatıcı güvenilir." },
    { word: "El desenlace", meaning: "Son", pronunciation: "de-sen-LA-se", example: "El final fue inesperado.", exampleTranslation: "Son beklenmedikti." },
    { word: "La biblioteca", meaning: "Kütüphane", pronunciation: "bi-blio-TE-ka", example: "La biblioteca tiene muchos libros.", exampleTranslation: "Kütüphanede çok kitap var." },
    { word: "Don Quijote", meaning: "Don Kişot", pronunciation: "don ki-HO-te", example: "Don Quijote es famoso mundialmente.", exampleTranslation: "Don Kişot dünyaca ünlü." },
    { word: "García Márquez", meaning: "García Márquez", pronunciation: "gar-CI-a MAR-kes", example: "García Márquez es genial.", exampleTranslation: "García Márquez dahiydi." },
    { word: "Leer", meaning: "Okumak", pronunciation: "le-ER", example: "Leo antes de dormir.", exampleTranslation: "Uyumadan önce okurum." },
    { word: "El escritor", meaning: "Yazar", pronunciation: "es-kri-TOR", example: "Es un escritor famoso.", exampleTranslation: "Ünlü bir yazar." },
    { word: "El lector", meaning: "Okur", pronunciation: "lek-TOR", example: "Soy un lector ávido.", exampleTranslation: "Hevesli bir okurum." },
    { word: "La ficción", meaning: "Kurgu", pronunciation: "fik-SION", example: "Prefiero la ficción.", exampleTranslation: "Kurguyu tercih ederim." },
    { word: "El clásico", meaning: "Klasik", pronunciation: "KLA-si-ko", example: "Es un clásico de la literatura.", exampleTranslation: "Edebiyat klasiği." }
];

// ===== ÜNİTE 74: ŞİİR VE ŞARKI =====
const unit74Vocabulary: B1VocabularyItem[] = [
    { word: "La canción", meaning: "Şarkı", pronunciation: "kan-SION", example: "Esta canción es pegadiza.", exampleTranslation: "Bu şarkı akılda kalıcı." },
    { word: "La letra", meaning: "Şarkı sözü", pronunciation: "LE-tra", example: "La letra es muy profunda.", exampleTranslation: "Sözleri çok derin." },
    { word: "El poema", meaning: "Şiir", pronunciation: "po-E-ma", example: "El poema rima muy bien.", exampleTranslation: "Şiir çok güzel kafiyeli." },
    { word: "El ritmo", meaning: "Ritim", pronunciation: "RIT-mo", example: "Me gusta el ritmo.", exampleTranslation: "Ritmi seviyorum." },
    { word: "La melodía", meaning: "Melodi", pronunciation: "me-lo-DI-a", example: "La melodía es triste.", exampleTranslation: "Melodi hüzünlü." },
    { word: "El cantante", meaning: "Şarkıcı", pronunciation: "kan-TAN-te", example: "El cantante tiene buena voz.", exampleTranslation: "Şarkıcının sesi güzel." },
    { word: "La balada", meaning: "Balad", pronunciation: "ba-LA-da", example: "Es una balada romántica.", exampleTranslation: "Romantik bir balad." },
    { word: "El verso", meaning: "Dize", pronunciation: "VER-so", example: "Es verso libre.", exampleTranslation: "Serbest nazım." },
    { word: "La rima", meaning: "Kafiye", pronunciation: "RI-ma", example: "Los versos riman.", exampleTranslation: "Dizeler kafiyeli." },
    { word: "El estribillo", meaning: "Nakarat", pronunciation: "es-tri-BI-yo", example: "El estribillo se repite.", exampleTranslation: "Nakarat tekrarlanıyor." },
    { word: "Cantar", meaning: "Şarkı söylemek", pronunciation: "kan-TAR", example: "Cantamos en el coro.", exampleTranslation: "Koroda şarkı söylüyoruz." },
    { word: "Tocar", meaning: "Çalmak", pronunciation: "to-KAR", example: "Toco la guitarra.", exampleTranslation: "Gitar çalıyorum." },
    { word: "La guitarra", meaning: "Gitar", pronunciation: "gi-TA-rra", example: "Aprendo a tocar guitarra.", exampleTranslation: "Gitar çalmayı öğreniyorum." },
    { word: "García Lorca", meaning: "García Lorca", pronunciation: "gar-CI-a LOR-ka", example: "García Lorca escribió poesía.", exampleTranslation: "García Lorca şiir yazdı." },
    { word: "El coro", meaning: "Koro", pronunciation: "KO-ro", example: "Canto en el coro.", exampleTranslation: "Koroda şarkı söylüyorum." },
    { word: "La música", meaning: "Müzik", pronunciation: "MU-si-ka", example: "La música me relaja.", exampleTranslation: "Müzik beni rahatlatıyor." },
    { word: "El álbum", meaning: "Albüm", pronunciation: "AL-bum", example: "Su nuevo álbum es genial.", exampleTranslation: "Yeni albümü harika." },
    { word: "La emoción", meaning: "Duygu", pronunciation: "e-mo-SION", example: "La canción transmite emoción.", exampleTranslation: "Şarkı duygu aktarıyor." },
    { word: "Componer", meaning: "Bestelemek", pronunciation: "kom-po-NER", example: "Compuso una canción.", exampleTranslation: "Bir şarkı besteledi." },
    { word: "El artista", meaning: "Sanatçı", pronunciation: "ar-TIS-ta", example: "Es un gran artista.", exampleTranslation: "Büyük bir sanatçı." }
];

// ===== ÜNİTE 75: TARİH VE POLİTİKA =====
const unit75Vocabulary: B1VocabularyItem[] = [
    { word: "La historia", meaning: "Tarih", pronunciation: "is-TO-ria", example: "La historia nos enseña mucho.", exampleTranslation: "Tarih bize çok şey öğretir." },
    { word: "La guerra", meaning: "Savaş", pronunciation: "GUE-rra", example: "Hubo una guerra civil.", exampleTranslation: "Bir iç savaş oldu." },
    { word: "La paz", meaning: "Barış", pronunciation: "pas", example: "Firmaron un tratado de paz.", exampleTranslation: "Barış antlaşması imzaladılar." },
    { word: "El rey", meaning: "Kral", pronunciation: "rey", example: "El rey abdicó en 2014.", exampleTranslation: "Kral 2014'te tahttan çekildi." },
    { word: "La constitución", meaning: "Anayasa", pronunciation: "kons-ti-tu-SION", example: "La constitución fue aprobada.", exampleTranslation: "Anayasa onaylandı." },
    { word: "La revolución", meaning: "Devrim", pronunciation: "re-vo-lu-SION", example: "La revolución cambió todo.", exampleTranslation: "Devrim her şeyi değiştirdi." },
    { word: "El presidente", meaning: "Başkan", pronunciation: "pre-si-DEN-te", example: "El presidente fue elegido.", exampleTranslation: "Başkan seçildi." },
    { word: "La independencia", meaning: "Bağımsızlık", pronunciation: "in-de-pen-DEN-cia", example: "Lucharon por la independencia.", exampleTranslation: "Bağımsızlık için savaştılar." },
    { word: "La democracia", meaning: "Demokrasi", pronunciation: "de-mo-KRA-sia", example: "La democracia es fundamental.", exampleTranslation: "Demokrasi temeldir." },
    { word: "El imperio", meaning: "İmparatorluk", pronunciation: "im-PE-rio", example: "El imperio romano cayó.", exampleTranslation: "Roma İmparatorluğu yıkıldı." },
    { word: "Votar", meaning: "Oy vermek", pronunciation: "vo-TAR", example: "Votamos en las elecciones.", exampleTranslation: "Seçimlerde oy veririz." },
    { word: "El partido", meaning: "Parti", pronunciation: "par-TI-do", example: "Es miembro del partido.", exampleTranslation: "Partinin üyesi." },
    { word: "La elección", meaning: "Seçim", pronunciation: "e-lek-SION", example: "Las elecciones son en mayo.", exampleTranslation: "Seçimler Mayıs'ta." },
    { word: "El siglo", meaning: "Yüzyıl", pronunciation: "SI-glo", example: "En el siglo XX hubo cambios.", exampleTranslation: "20. yüzyılda değişiklikler oldu." },
    { word: "Descubrir", meaning: "Keşfetmek", pronunciation: "des-ku-BRIR", example: "Descubrieron América en 1492.", exampleTranslation: "1492'de Amerika'yı keşfettiler." },
    { word: "La conquista", meaning: "Fetih", pronunciation: "kon-KIS-ta", example: "La conquista fue brutal.", exampleTranslation: "Fetih acımasızdı." },
    { word: "El tratado", meaning: "Antlaşma", pronunciation: "tra-TA-do", example: "Firmaron un tratado.", exampleTranslation: "Bir antlaşma imzaladılar." },
    { word: "La transición", meaning: "Geçiş", pronunciation: "tran-si-SION", example: "La transición española fue pacífica.", exampleTranslation: "İspanyol geçişi barışçıldı." },
    { word: "El dictador", meaning: "Diktatör", pronunciation: "dik-ta-DOR", example: "El dictador gobernó durante años.", exampleTranslation: "Diktatör yıllarca yönetti." },
    { word: "La libertad", meaning: "Özgürlük", pronunciation: "li-ber-TAD", example: "Lucharon por la libertad.", exampleTranslation: "Özgürlük için savaştılar." }
];

// ===== ÜNİTE 76: HUKUK TEMELLERİ =====
const unit76Vocabulary: B1VocabularyItem[] = [
    { word: "La ley", meaning: "Yasa", pronunciation: "ley", example: "La ley es igual para todos.", exampleTranslation: "Yasa herkes için eşit." },
    { word: "El abogado", meaning: "Avukat", pronunciation: "a-bo-GA-do", example: "Necesito un abogado.", exampleTranslation: "Avukata ihtiyacım var." },
    { word: "El juez", meaning: "Hakim", pronunciation: "hues", example: "El juez dictó sentencia.", exampleTranslation: "Hakim karar verdi." },
    { word: "El juicio", meaning: "Duruşma", pronunciation: "HUI-cio", example: "El juicio empieza mañana.", exampleTranslation: "Duruşma yarın başlıyor." },
    { word: "La demanda", meaning: "Dava", pronunciation: "de-MAN-da", example: "Presenté una demanda.", exampleTranslation: "Dava açtım." },
    { word: "El delito", meaning: "Suç", pronunciation: "de-LI-to", example: "Cometió un delito.", exampleTranslation: "Suç işledi." },
    { word: "La sentencia", meaning: "Karar", pronunciation: "sen-TEN-cia", example: "La sentencia fue justa.", exampleTranslation: "Karar adildi." },
    { word: "El derecho", meaning: "Hukuk/Hak", pronunciation: "de-RE-cho", example: "Tengo derecho a callar.", exampleTranslation: "Susma hakkım var." },
    { word: "El tribunal", meaning: "Mahkeme", pronunciation: "tri-bu-NAL", example: "Fui al tribunal.", exampleTranslation: "Mahkemeye gittim." },
    { word: "La multa", meaning: "Ceza", pronunciation: "MUL-ta", example: "Me pusieron una multa.", exampleTranslation: "Bana ceza kestiler." },
    { word: "La cárcel", meaning: "Hapishane", pronunciation: "KAR-cel", example: "Fue enviado a la cárcel.", exampleTranslation: "Hapse gönderildi." },
    { word: "El testigo", meaning: "Tanık", pronunciation: "tes-TI-go", example: "El testigo declaró.", exampleTranslation: "Tanık ifade verdi." },
    { word: "La prueba", meaning: "Kanıt", pronunciation: "PRUE-ba", example: "No hay pruebas.", exampleTranslation: "Kanıt yok." },
    { word: "Acusar", meaning: "Suçlamak", pronunciation: "a-ku-SAR", example: "Lo acusaron de robo.", exampleTranslation: "Onu hırsızlıkla suçladılar." },
    { word: "Defender", meaning: "Savunmak", pronunciation: "de-fen-DER", example: "El abogado defiende al cliente.", exampleTranslation: "Avukat müvekkilini savunuyor." },
    { word: "El contrato", meaning: "Sözleşme", pronunciation: "kon-TRA-to", example: "Firmé el contrato.", exampleTranslation: "Sözleşmeyi imzaladım." },
    { word: "Legal", meaning: "Yasal", pronunciation: "le-GAL", example: "Es completamente legal.", exampleTranslation: "Tamamen yasal." },
    { word: "Ilegal", meaning: "Yasadışı", pronunciation: "i-le-GAL", example: "Es una actividad ilegal.", exampleTranslation: "Yasadışı bir faaliyet." },
    { word: "La víctima", meaning: "Mağdur", pronunciation: "VIK-ti-ma", example: "La víctima testificó.", exampleTranslation: "Mağdur tanıklık etti." },
    { word: "El culpable", meaning: "Suçlu", pronunciation: "kul-PA-ble", example: "El culpable fue arrestado.", exampleTranslation: "Suçlu tutuklandı." }
];

// ===== ÜNİTE 77: BİLİM VE TEKNOLOJİ =====
const unit77Vocabulary: B1VocabularyItem[] = [
    { word: "El avance", meaning: "İlerleme", pronunciation: "a-VAN-se", example: "Los avances son rápidos.", exampleTranslation: "İlerlemeler hızlı." },
    { word: "Desarrollar", meaning: "Geliştirmek", pronunciation: "de-sa-rro-LLAR", example: "Desarrollaron una app.", exampleTranslation: "Bir uygulama geliştirdiler." },
    { word: "La IA", meaning: "Yapay zeka", pronunciation: "i-a", example: "La IA cambia todo.", exampleTranslation: "Yapay zeka her şeyi değiştiriyor." },
    { word: "Innovar", meaning: "Yenilik yapmak", pronunciation: "in-no-VAR", example: "Las empresas innovan.", exampleTranslation: "Şirketler yenilik yapıyor." },
    { word: "El algoritmo", meaning: "Algoritma", pronunciation: "al-go-RIT-mo", example: "El algoritmo funciona bien.", exampleTranslation: "Algoritma iyi çalışıyor." },
    { word: "El experimento", meaning: "Deney", pronunciation: "eks-pe-ri-MEN-to", example: "El experimento fue exitoso.", exampleTranslation: "Deney başarılı oldu." },
    { word: "El software", meaning: "Yazılım", pronunciation: "SOF-tuer", example: "Instalé el software.", exampleTranslation: "Yazılımı kurdum." },
    { word: "El hardware", meaning: "Donanım", pronunciation: "HAR-duer", example: "Necesito nuevo hardware.", exampleTranslation: "Yeni donanıma ihtiyacım var." },
    { word: "El robot", meaning: "Robot", pronunciation: "RO-bot", example: "Los robots ayudan.", exampleTranslation: "Robotlar yardım ediyor." },
    { word: "El científico", meaning: "Bilim insanı", pronunciation: "sien-TI-fi-ko", example: "El científico descubrió algo.", exampleTranslation: "Bilim insanı bir şey keşfetti." },
    { word: "El laboratorio", meaning: "Laboratuvar", pronunciation: "la-bo-ra-TO-rio", example: "Trabajo en un lab.", exampleTranslation: "Laboratuvarda çalışıyorum." },
    { word: "Digital", meaning: "Dijital", pronunciation: "di-hi-TAL", example: "La era digital.", exampleTranslation: "Dijital çağ." },
    { word: "La nube", meaning: "Bulut", pronunciation: "NU-be", example: "Guardo en la nube.", exampleTranslation: "Bulutta saklıyorum." },
    { word: "Descargar", meaning: "İndirmek", pronunciation: "des-kar-GAR", example: "Descarga el archivo.", exampleTranslation: "Dosyayı indir." },
    { word: "El virus", meaning: "Virüs", pronunciation: "BI-rus", example: "Hay un virus.", exampleTranslation: "Virüs var." },
    { word: "La ciberseguridad", meaning: "Siber güvenlik", pronunciation: "si-ber-se-gu-ri-DAD", example: "Es importante.", exampleTranslation: "Önemli." },
    { word: "El invento", meaning: "İcat", pronunciation: "in-VEN-to", example: "Es un nuevo invento.", exampleTranslation: "Yeni bir icat." },
    { word: "La investigación", meaning: "Araştırma", pronunciation: "in-ves-ti-ga-SION", example: "La investigación avanza.", exampleTranslation: "Araştırma ilerliyor." },
    { word: "El ADN", meaning: "DNA", pronunciation: "a-de-ENE", example: "Analizaron el ADN.", exampleTranslation: "DNA analiz ettiler." },
    { word: "La vacuna", meaning: "Aşı", pronunciation: "va-KU-na", example: "La vacuna funciona.", exampleTranslation: "Aşı işe yarıyor." }
];

// ===== ÜNİTE 78: SAĞLIK VE BESLENME =====
const unit78Vocabulary: B1VocabularyItem[] = [
    { word: "La dieta", meaning: "Diyet", pronunciation: "DIE-ta", example: "Sigo una dieta sana.", exampleTranslation: "Sağlıklı diyet yapıyorum." },
    { word: "Saludable", meaning: "Sağlıklı", pronunciation: "sa-lu-DA-ble", example: "Comer frutas es saludable.", exampleTranslation: "Meyve yemek sağlıklı." },
    { word: "El nutriente", meaning: "Besin", pronunciation: "nu-tri-EN-te", example: "Tiene muchos nutrientes.", exampleTranslation: "Çok besin var." },
    { word: "La proteína", meaning: "Protein", pronunciation: "pro-te-I-na", example: "La carne tiene proteínas.", exampleTranslation: "Et protein içerir." },
    { word: "El carbohidrato", meaning: "Karbonhidrat", pronunciation: "kar-bo-i-DRA-to", example: "El pan tiene carbohidratos.", exampleTranslation: "Ekmek karbonhidrat içerir." },
    { word: "La vitamina", meaning: "Vitamin", pronunciation: "vi-ta-MI-na", example: "Tomo vitaminas.", exampleTranslation: "Vitamin alıyorum." },
    { word: "Adelgazar", meaning: "Zayıflamak", pronunciation: "a-del-ga-SAR", example: "Quiero adelgazar.", exampleTranslation: "Zayıflamak istiyorum." },
    { word: "El bienestar", meaning: "Sağlık/Refah", pronunciation: "bien-es-TAR", example: "Busco mi bienestar.", exampleTranslation: "Sağlığımı arıyorum." },
    { word: "La caloría", meaning: "Kalori", pronunciation: "ka-lo-RI-a", example: "Cuento calorías.", exampleTranslation: "Kalori sayıyorum." },
    { word: "El ejercicio", meaning: "Egzersiz", pronunciation: "e-her-SI-cio", example: "Hago ejercicio.", exampleTranslation: "Egzersiz yapıyorum." },
    { word: "El gimnasio", meaning: "Spor salonu", pronunciation: "him-NA-sio", example: "Voy al gimnasio.", exampleTranslation: "Spor salonuna gidiyorum." },
    { word: "Hidratarse", meaning: "Sıvı almak", pronunciation: "i-dra-TAR-se", example: "Hay que hidratarse.", exampleTranslation: "Sıvı almak lazım." },
    { word: "Orgánico", meaning: "Organik", pronunciation: "or-GA-ni-ko", example: "Prefiero orgánico.", exampleTranslation: "Organik tercih ederim." },
    { word: "El azúcar", meaning: "Şeker", pronunciation: "a-SU-kar", example: "Reduce el azúcar.", exampleTranslation: "Şekeri azalt." },
    { word: "Vegetariano", meaning: "Vejetaryen", pronunciation: "ve-he-ta-RIA-no", example: "Soy vegetariano.", exampleTranslation: "Vejetaryenim." },
    { word: "Vegano", meaning: "Vegan", pronunciation: "be-GA-no", example: "Mi hermana es vegana.", exampleTranslation: "Kız kardeşim vegan." },
    { word: "El colesterol", meaning: "Kolesterol", pronunciation: "ko-les-te-ROL", example: "Tengo colesterol alto.", exampleTranslation: "Kolesterolüm yüksek." },
    { word: "El metabolismo", meaning: "Metabolizma", pronunciation: "me-ta-bo-LIS-mo", example: "Tengo buen metabolismo.", exampleTranslation: "İyi metabolizmam var." },
    { word: "La fibra", meaning: "Lif", pronunciation: "FI-bra", example: "Come más fibra.", exampleTranslation: "Daha fazla lif ye." },
    { word: "El peso", meaning: "Kilo", pronunciation: "PE-so", example: "Controlo mi peso.", exampleTranslation: "Kilomu kontrol ediyorum." }
];

// ===== ÜNİTE 79: PSİKOLOJİ TEMELLERİ =====
const unit79Vocabulary: B1VocabularyItem[] = [
    { word: "La mente", meaning: "Zihin", pronunciation: "MEN-te", example: "La mente es poderosa.", exampleTranslation: "Zihin güçlü." },
    { word: "El estrés", meaning: "Stres", pronunciation: "es-TRES", example: "Tengo mucho estrés.", exampleTranslation: "Çok stresim var." },
    { word: "La ansiedad", meaning: "Kaygı", pronunciation: "an-sie-DAD", example: "Sufro de ansiedad.", exampleTranslation: "Kaygı çekiyorum." },
    { word: "La depresión", meaning: "Depresyon", pronunciation: "de-pre-SION", example: "Superó la depresión.", exampleTranslation: "Depresyonu atlattı." },
    { word: "El psicólogo", meaning: "Psikolog", pronunciation: "psi-KO-lo-go", example: "Visito al psicólogo.", exampleTranslation: "Psikoloğa gidiyorum." },
    { word: "La terapia", meaning: "Terapi", pronunciation: "te-RA-pia", example: "Hago terapia.", exampleTranslation: "Terapi yapıyorum." },
    { word: "La autoestima", meaning: "Özgüven", pronunciation: "au-to-es-TI-ma", example: "Tengo buena autoestima.", exampleTranslation: "İyi özgüvenim var." },
    { word: "La conducta", meaning: "Davranış", pronunciation: "kon-DUK-ta", example: "La conducta cambió.", exampleTranslation: "Davranış değişti." },
    { word: "El inconsciente", meaning: "Bilinçaltı", pronunciation: "in-kons-SIEN-te", example: "El inconsciente influye.", exampleTranslation: "Bilinçaltı etkiler." },
    { word: "La emoción", meaning: "Duygu", pronunciation: "e-mo-SION", example: "Las emociones son importantes.", exampleTranslation: "Duygular önemli." },
    { word: "Relajarse", meaning: "Rahatlamak", pronunciation: "re-la-HAR-se", example: "Necesito relajarme.", exampleTranslation: "Rahatlamam lazım." },
    { word: "Meditar", meaning: "Meditasyon yapmak", pronunciation: "me-di-TAR", example: "Medito cada mañana.", exampleTranslation: "Her sabah meditasyon yapıyorum." },
    { word: "La memoria", meaning: "Hafıza", pronunciation: "me-MO-ria", example: "Tengo buena memoria.", exampleTranslation: "İyi hafızam var." },
    { word: "El trauma", meaning: "Travma", pronunciation: "TRAU-ma", example: "Superó el trauma.", exampleTranslation: "Travmayı atlattı." },
    { word: "La motivación", meaning: "Motivasyon", pronunciation: "mo-ti-va-SION", example: "Necesito motivación.", exampleTranslation: "Motivasyona ihtiyacım var." },
    { word: "El hábito", meaning: "Alışkanlık", pronunciation: "A-bi-to", example: "Cambié mis hábitos.", exampleTranslation: "Alışkanlıklarımı değiştirdim." },
    { word: "La fobia", meaning: "Fobi", pronunciation: "FO-bia", example: "Tengo fobia a las arañas.", exampleTranslation: "Örümcek fobim var." },
    { word: "El bienestar mental", meaning: "Ruhsal sağlık", pronunciation: "bien-es-TAR men-TAL", example: "Cuido mi bienestar mental.", exampleTranslation: "Ruhsal sağlığıma dikkat ediyorum." },
    { word: "La resiliencia", meaning: "Dayanıklılık", pronunciation: "re-si-LIEN-cia", example: "La resiliencia es clave.", exampleTranslation: "Dayanıklılık önemli." },
    { word: "La concentración", meaning: "Konsantrasyon", pronunciation: "kon-cen-tra-SION", example: "Mejoro mi concentración.", exampleTranslation: "Konsantrasyonumu geliştiriyorum." }
];

// ===== ÜNİTE 80: POR VS PARA =====
const unit80Vocabulary: B1VocabularyItem[] = [
    { word: "Por", meaning: "Yüzünden/İçin", pronunciation: "por", example: "Gracias por tu ayuda.", exampleTranslation: "Yardımın için teşekkürler." },
    { word: "Para", meaning: "İçin (Amaç)", pronunciation: "PA-ra", example: "Estudio para aprender.", exampleTranslation: "Öğrenmek için çalışıyorum." },
    { word: "Por eso", meaning: "Bu yüzden", pronunciation: "por E-so", example: "Por eso estoy aquí.", exampleTranslation: "Bu yüzden buradayım." },
    { word: "Para que", meaning: "...olması için", pronunciation: "PA-ra ke", example: "Lo hago para que sepas.", exampleTranslation: "Bilmen için yapıyorum." },
    { word: "Por lo tanto", meaning: "Dolayısıyla", pronunciation: "por lo TAN-to", example: "Por lo tanto, no iré.", exampleTranslation: "Dolayısıyla gitmeyeceğim." },
    { word: "Por fin", meaning: "Sonunda", pronunciation: "por fin", example: "Por fin llegamos.", exampleTranslation: "Sonunda vardık." },
    { word: "Para siempre", meaning: "Sonsuza dek", pronunciation: "PA-ra SIEM-pre", example: "Te quiero para siempre.", exampleTranslation: "Seni sonsuza dek seviyorum." },
    { word: "Por ejemplo", meaning: "Örneğin", pronunciation: "por e-HEM-plo", example: "Por ejemplo, esto.", exampleTranslation: "Örneğin, bu." },
    { word: "Por favor", meaning: "Lütfen", pronunciation: "por fa-VOR", example: "Por favor, ayúdame.", exampleTranslation: "Lütfen yardım et." },
    { word: "Para mí", meaning: "Benim için", pronunciation: "PA-ra mi", example: "Es importante para mí.", exampleTranslation: "Benim için önemli." },
    { word: "Por la mañana", meaning: "Sabahları", pronunciation: "por la ma-NYA-na", example: "Estudio por la mañana.", exampleTranslation: "Sabahları çalışırım." },
    { word: "Para el lunes", meaning: "Pazartesiye kadar", pronunciation: "PA-ra el LU-nes", example: "Lo necesito para el lunes.", exampleTranslation: "Pazartesiye kadar lazım." },
    { word: "Por ahora", meaning: "Şimdilik", pronunciation: "por a-O-ra", example: "Por ahora, esperemos.", exampleTranslation: "Şimdilik bekleyelim." },
    { word: "Para empezar", meaning: "Başlangıç için", pronunciation: "PA-ra em-pe-SAR", example: "Para empezar, necesitamos...", exampleTranslation: "Başlangıç için ihtiyacımız var..." },
    { word: "Por suerte", meaning: "Şans eseri", pronunciation: "por SUER-te", example: "Por suerte llegué.", exampleTranslation: "Şans eseri yetiştim." },
    { word: "Para siempre", meaning: "Hep için", pronunciation: "PA-ra SIEM-pre", example: "Es para siempre.", exampleTranslation: "Hep için." },
    { word: "Por cierto", meaning: "Bu arada", pronunciation: "por SIER-to", example: "Por cierto, ¿qué hora es?", exampleTranslation: "Bu arada, saat kaç?" },
    { word: "Para ti", meaning: "Senin için", pronunciation: "PA-ra ti", example: "Esto es para ti.", exampleTranslation: "Bu senin için." },
    { word: "Por casualidad", meaning: "Rastgele", pronunciation: "por ka-sua-li-DAD", example: "Por casualidad, lo vi.", exampleTranslation: "Rastgele gördüm." },
    { word: "Para terminar", meaning: "Bitirmek için", pronunciation: "PA-ra ter-mi-NAR", example: "Para terminar, diré...", exampleTranslation: "Bitirmek için diyeceğim..." }
];

// ===== ÜNİTE 81: SER VS ESTAR İLERİ =====
const unit81Vocabulary: B1VocabularyItem[] = [
    { word: "Ser listo", meaning: "Zeki olmak", pronunciation: "ser LIS-to", example: "Juan es muy listo.", exampleTranslation: "Juan çok zeki." },
    { word: "Estar listo", meaning: "Hazır olmak", pronunciation: "es-TAR LIS-to", example: "¿Estás listo?", exampleTranslation: "Hazır mısın?" },
    { word: "Ser aburrido", meaning: "Sıkıcı olmak", pronunciation: "ser a-bu-RRI-do", example: "La película es aburrida.", exampleTranslation: "Film sıkıcı." },
    { word: "Estar aburrido", meaning: "Sıkılmış olmak", pronunciation: "es-TAR a-bu-RRI-do", example: "Estoy aburrido.", exampleTranslation: "Sıkıldım." },
    { word: "Ser malo", meaning: "Kötü olmak", pronunciation: "ser MA-lo", example: "El villano es malo.", exampleTranslation: "Kötü adam kötü." },
    { word: "Estar malo", meaning: "Hasta olmak", pronunciation: "es-TAR MA-lo", example: "Estoy malo.", exampleTranslation: "Hastayım." },
    { word: "Ser rico", meaning: "Zengin olmak", pronunciation: "ser RI-ko", example: "Él es rico.", exampleTranslation: "O zengin." },
    { word: "Estar rico", meaning: "Lezzetli olmak", pronunciation: "es-TAR RI-ko", example: "El plato está rico.", exampleTranslation: "Yemek lezzetli." },
    { word: "Ser verde", meaning: "Yeşil olmak", pronunciation: "ser VER-de", example: "La hierba es verde.", exampleTranslation: "Çimen yeşil." },
    { word: "Estar verde", meaning: "Ham olmak", pronunciation: "es-TAR VER-de", example: "El plátano está verde.", exampleTranslation: "Muz ham." },
    { word: "Ser vivo", meaning: "Zeki/Kurnaz olmak", pronunciation: "ser VI-vo", example: "Es muy vivo.", exampleTranslation: "Çok kurnaz." },
    { word: "Estar vivo", meaning: "Hayatta olmak", pronunciation: "es-TAR VI-vo", example: "Está vivo.", exampleTranslation: "Hayatta." },
    { word: "Ser seguro", meaning: "Güvenli olmak", pronunciation: "ser se-GU-ro", example: "Es un lugar seguro.", exampleTranslation: "Güvenli bir yer." },
    { word: "Estar seguro", meaning: "Emin olmak", pronunciation: "es-TAR se-GU-ro", example: "Estoy seguro.", exampleTranslation: "Eminim." },
    { word: "Ser abierto", meaning: "Açık fikirli olmak", pronunciation: "ser a-BIER-to", example: "Es muy abierto.", exampleTranslation: "Çok açık fikirli." },
    { word: "Estar abierto", meaning: "Açık olmak", pronunciation: "es-TAR a-BIER-to", example: "La tienda está abierta.", exampleTranslation: "Dükkan açık." },
    { word: "Ser atento", meaning: "Nazik olmak", pronunciation: "ser a-TEN-to", example: "Es muy atento.", exampleTranslation: "Çok nazik." },
    { word: "Estar atento", meaning: "Dikkatli olmak", pronunciation: "es-TAR a-TEN-to", example: "Está atento.", exampleTranslation: "Dikkatli." },
    { word: "Ser despierto", meaning: "Uyanık/Zeki olmak", pronunciation: "ser des-PIER-to", example: "Es muy despierto.", exampleTranslation: "Çok uyanık." },
    { word: "Estar despierto", meaning: "Uyanık olmak", pronunciation: "es-TAR des-PIER-to", example: "Está despierto.", exampleTranslation: "Uyanık." }
];

// ===== ÜNİTE 82: SPOR VE FİTNESS =====
const unit82Vocabulary: B1VocabularyItem[] = [
    { word: "El entrenamiento", meaning: "Antrenman", pronunciation: "en-tre-na-MIEN-to", example: "El entrenamiento fue duro.", exampleTranslation: "Antrenman zordu." },
    { word: "Hacer ejercicio", meaning: "Egzersiz yapmak", pronunciation: "a-SER e-her-SI-sio", example: "Hago ejercicio cada día.", exampleTranslation: "Her gün egzersiz yapıyorum." },
    { word: "El músculo", meaning: "Kas", pronunciation: "MUS-ku-lo", example: "Me duelen los músculos.", exampleTranslation: "Kaslarım ağrıyor." },
    { word: "Correr", meaning: "Koşmak", pronunciation: "ko-RRER", example: "Corro cada mañana.", exampleTranslation: "Her sabah koşuyorum." },
    { word: "Nadar", meaning: "Yüzmek", pronunciation: "na-DAR", example: "Me gusta nadar.", exampleTranslation: "Yüzmeyi seviyorum." },
    { word: "Levantar pesas", meaning: "Ağırlık kaldırmak", pronunciation: "le-van-TAR PE-sas", example: "Levanto pesas.", exampleTranslation: "Ağırlık kaldırıyorum." },
    { word: "El partido", meaning: "Maç", pronunciation: "par-TI-do", example: "Vi el partido.", exampleTranslation: "Maçı izledim." },
    { word: "El equipo", meaning: "Takım", pronunciation: "e-KI-po", example: "Mi equipo ganó.", exampleTranslation: "Takımım kazandı." },
    { word: "El campeón", meaning: "Şampiyon", pronunciation: "kam-pe-ON", example: "Es el campeón.", exampleTranslation: "Şampiyon." },
    { word: "La competición", meaning: "Yarışma", pronunciation: "kom-pe-ti-SION", example: "Gané la competición.", exampleTranslation: "Yarışmayı kazandım." },
    { word: "El fútbol", meaning: "Futbol", pronunciation: "FUT-bol", example: "Juego al fútbol.", exampleTranslation: "Futbol oynuyorum." },
    { word: "El baloncesto", meaning: "Basketbol", pronunciation: "ba-lon-CES-to", example: "Me gusta el baloncesto.", exampleTranslation: "Basketbolu seviyorum." },
    { word: "El tenis", meaning: "Tenis", pronunciation: "TE-nis", example: "Juego al tenis.", exampleTranslation: "Tenis oynuyorum." },
    { word: "El yoga", meaning: "Yoga", pronunciation: "YO-ga", example: "Practico yoga.", exampleTranslation: "Yoga yapıyorum." },
    { word: "La carrera", meaning: "Yarış", pronunciation: "ka-RRE-ra", example: "Corrí una carrera.", exampleTranslation: "Bir yarış koştum." },
    { word: "El récord", meaning: "Rekor", pronunciation: "RE-kor", example: "Batió el récord.", exampleTranslation: "Rekoru kırdı." },
    { word: "El entrenador", meaning: "Antrenör", pronunciation: "en-tre-na-DOR", example: "Mi entrenador es bueno.", exampleTranslation: "Antrenörüm iyi." },
    { word: "El calentamiento", meaning: "Isınma", pronunciation: "ka-len-ta-MIEN-to", example: "Hago calentamiento.", exampleTranslation: "Isınma yapıyorum." },
    { word: "El deportista", meaning: "Sporcu", pronunciation: "de-por-TIS-ta", example: "Es un gran deportista.", exampleTranslation: "Büyük bir sporcu." },
    { word: "La medalla", meaning: "Madalya", pronunciation: "me-DA-ya", example: "Ganó la medalla.", exampleTranslation: "Madalya kazandı." }
];

// ===== ÜNİTE 83: SEYAHAT DENEYİMLERİ =====
const unit83Vocabulary: B1VocabularyItem[] = [
    { word: "El viaje", meaning: "Yolculuk", pronunciation: "VIA-he", example: "El viaje fue genial.", exampleTranslation: "Yolculuk harikaydı." },
    { word: "La aventura", meaning: "Macera", pronunciation: "a-ven-TU-ra", example: "Fue una aventura.", exampleTranslation: "Bir maceraydı." },
    { word: "El destino", meaning: "Varış noktası", pronunciation: "des-TI-no", example: "Mi destino es París.", exampleTranslation: "Varış noktam Paris." },
    { word: "El itinerario", meaning: "Güzergah", pronunciation: "i-ti-ne-RA-rio", example: "Preparé el itinerario.", exampleTranslation: "Güzergahı hazırladım." },
    { word: "La excursión", meaning: "Gezi", pronunciation: "eks-kur-SION", example: "Hicimos una excursión.", exampleTranslation: "Bir gezi yaptık." },
    { word: "El turista", meaning: "Turist", pronunciation: "tu-RIS-ta", example: "Hay muchos turistas.", exampleTranslation: "Çok turist var." },
    { word: "La guía", meaning: "Rehber", pronunciation: "GI-a", example: "La guía fue muy buena.", exampleTranslation: "Rehber çok iyiydi." },
    { word: "El recuerdo", meaning: "Hatıra", pronunciation: "re-KUER-do", example: "Compré recuerdos.", exampleTranslation: "Hediyelik eşya aldım." },
    { word: "La maleta", meaning: "Bavul", pronunciation: "ma-LE-ta", example: "Hice la maleta.", exampleTranslation: "Bavulumu hazırladım." },
    { word: "El pasaporte", meaning: "Pasaport", pronunciation: "pa-sa-POR-te", example: "Tengo el pasaporte.", exampleTranslation: "Pasaportum var." },
    { word: "El vuelo", meaning: "Uçuş", pronunciation: "VUE-lo", example: "Mi vuelo sale a las 8.", exampleTranslation: "Uçuşum 8'de." },
    { word: "El alojamiento", meaning: "Konaklama", pronunciation: "a-lo-ha-MIEN-to", example: "El alojamiento es céntrico.", exampleTranslation: "Konaklama merkezde." },
    { word: "La reserva", meaning: "Rezervasyon", pronunciation: "re-SER-va", example: "Hice una reserva.", exampleTranslation: "Rezervasyon yaptım." },
    { word: "El mapa", meaning: "Harita", pronunciation: "MA-pa", example: "Usé el mapa.", exampleTranslation: "Haritayı kullandım." },
    { word: "El monumento", meaning: "Anıt", pronunciation: "mo-nu-MEN-to", example: "Visitamos monumentos.", exampleTranslation: "Anıtları ziyaret ettik." },
    { word: "Explorar", meaning: "Keşfetmek", pronunciation: "eks-plo-RAR", example: "Exploramos la ciudad.", exampleTranslation: "Şehri keşfettik." },
    { word: "La cultura local", meaning: "Yerel kültür", pronunciation: "kul-TU-ra lo-KAL", example: "Me interesa la cultura local.", exampleTranslation: "Yerel kültürle ilgileniyorum." },
    { word: "El equipaje", meaning: "Bagaj", pronunciation: "e-ki-PA-he", example: "Perdí mi equipaje.", exampleTranslation: "Bagajımı kaybettim." },
    { word: "La tarjeta de embarque", meaning: "Biniş kartı", pronunciation: "tar-HE-ta de em-BAR-ke", example: "Tengo la tarjeta.", exampleTranslation: "Biniş kartım var." },
    { word: "El jet lag", meaning: "Uçuş yorgunluğu", pronunciation: "yet lag", example: "Tengo jet lag.", exampleTranslation: "Uçuş yorgunluğum var." }
];

// ===== ÜNİTE 84: MÜZİK VE SANAT =====
const unit84Vocabulary: B1VocabularyItem[] = [
    { word: "El concierto", meaning: "Konser", pronunciation: "kon-SIER-to", example: "Fui a un concierto.", exampleTranslation: "Konsere gittim." },
    { word: "El artista", meaning: "Sanatçı", pronunciation: "ar-TIS-ta", example: "Es un gran artista.", exampleTranslation: "Büyük bir sanatçı." },
    { word: "La exposición", meaning: "Sergi", pronunciation: "eks-po-si-SION", example: "Visité la exposición.", exampleTranslation: "Sergiyi ziyaret ettim." },
    { word: "El cuadro", meaning: "Tablo", pronunciation: "KUA-dro", example: "Este cuadro es hermoso.", exampleTranslation: "Bu tablo güzel." },
    { word: "La escultura", meaning: "Heykel", pronunciation: "es-kul-TU-ra", example: "Vi una escultura.", exampleTranslation: "Bir heykel gördüm." },
    { word: "El músico", meaning: "Müzisyen", pronunciation: "MU-si-ko", example: "Es un buen músico.", exampleTranslation: "İyi bir müzisyen." },
    { word: "El museo", meaning: "Müze", pronunciation: "mu-SE-o", example: "Visitamos el museo.", exampleTranslation: "Müzeyi ziyaret ettik." },
    { word: "La galería", meaning: "Galeri", pronunciation: "ga-le-RI-a", example: "Fuimos a la galería.", exampleTranslation: "Galeriye gittik." },
    { word: "El teatro", meaning: "Tiyatro", pronunciation: "te-A-tro", example: "Vimos teatro.", exampleTranslation: "Tiyatro izledik." },
    { word: "La ópera", meaning: "Opera", pronunciation: "O-pe-ra", example: "Me encanta la ópera.", exampleTranslation: "Operayı seviyorum." },
    { word: "El ballet", meaning: "Bale", pronunciation: "ba-LET", example: "El ballet fue increíble.", exampleTranslation: "Bale inanılmazdı." },
    { word: "Pintar", meaning: "Resim yapmak", pronunciation: "pin-TAR", example: "Me gusta pintar.", exampleTranslation: "Resim yapmayı severim." },
    { word: "Dibujar", meaning: "Çizmek", pronunciation: "di-bu-HAR", example: "Dibujo cada día.", exampleTranslation: "Her gün çiziyorum." },
    { word: "El instrumento", meaning: "Enstrüman", pronunciation: "ins-tru-MEN-to", example: "Toco un instrumento.", exampleTranslation: "Bir enstrüman çalıyorum." },
    { word: "El piano", meaning: "Piyano", pronunciation: "PIA-no", example: "Toco el piano.", exampleTranslation: "Piyano çalıyorum." },
    { word: "El violín", meaning: "Keman", pronunciation: "vio-LIN", example: "Aprendo violín.", exampleTranslation: "Keman öğreniyorum." },
    { word: "La fotografía", meaning: "Fotoğrafçılık", pronunciation: "fo-to-gra-FI-a", example: "Me gusta la fotografía.", exampleTranslation: "Fotoğrafçılığı seviyorum." },
    { word: "El estilo", meaning: "Tarz", pronunciation: "es-TI-lo", example: "Tiene un estilo único.", exampleTranslation: "Benzersiz bir tarzı var." },
    { word: "La creatividad", meaning: "Yaratıcılık", pronunciation: "kre-a-ti-vi-DAD", example: "Valoro la creatividad.", exampleTranslation: "Yaratıcılığa değer veriyorum." },
    { word: "Inspirar", meaning: "İlham vermek", pronunciation: "ins-pi-RAR", example: "El arte me inspira.", exampleTranslation: "Sanat bana ilham veriyor." }
];

// ===== ÜNİTE 85: İLİŞKİLER VE SOSYAL HAYAT =====
const unit85Vocabulary: B1VocabularyItem[] = [
    { word: "La amistad", meaning: "Dostluk", pronunciation: "a-mis-TAD", example: "Valoro nuestra amistad.", exampleTranslation: "Dostluğumuza değer veriyorum." },
    { word: "Enamorarse", meaning: "Aşık olmak", pronunciation: "e-na-mo-RAR-se", example: "Me enamoré de ella.", exampleTranslation: "Ona aşık oldum." },
    { word: "La pareja", meaning: "Çift/Partner", pronunciation: "pa-RE-ha", example: "Mi pareja es amable.", exampleTranslation: "Partnerim nazik." },
    { word: "Casarse", meaning: "Evlenmek", pronunciation: "ka-SAR-se", example: "Se casaron.", exampleTranslation: "Evlendiler." },
    { word: "Separarse", meaning: "Ayrılmak", pronunciation: "se-pa-RAR-se", example: "Se separaron.", exampleTranslation: "Ayrıldılar." },
    { word: "Reconciliarse", meaning: "Barışmak", pronunciation: "re-kon-si-LIAR-se", example: "Se reconciliaron.", exampleTranslation: "Barıştılar." },
    { word: "La confianza", meaning: "Güven", pronunciation: "kon-fi-AN-sa", example: "Hay mucha confianza.", exampleTranslation: "Çok güven var." },
    { word: "El respeto", meaning: "Saygı", pronunciation: "res-PE-to", example: "El respeto es importante.", exampleTranslation: "Saygı önemli." },
    { word: "Apoyar", meaning: "Desteklemek", pronunciation: "a-po-YAR", example: "Te apoyo siempre.", exampleTranslation: "Seni her zaman desteklerim." },
    { word: "Perdonar", meaning: "Affetmek", pronunciation: "per-do-NAR", example: "Te perdono.", exampleTranslation: "Seni affediyorum." },
    { word: "La boda", meaning: "Düğün", pronunciation: "BO-da", example: "La boda fue hermosa.", exampleTranslation: "Düğün güzeldi." },
    { word: "El novio/La novia", meaning: "Sevgili", pronunciation: "NO-vio/NO-via", example: "Es mi novia.", exampleTranslation: "O benim sevgilim." },
    { word: "Salir con", meaning: "Birisiyle çıkmak", pronunciation: "sa-LIR kon", example: "Salgo con alguien.", exampleTranslation: "Birisiyle çıkıyorum." },
    { word: "Confiar", meaning: "Güvenmek", pronunciation: "kon-fi-AR", example: "Confío en ti.", exampleTranslation: "Sana güveniyorum." },
    { word: "Discutir", meaning: "Tartışmak", pronunciation: "dis-ku-TIR", example: "Discutimos.", exampleTranslation: "Tartıştık." },
    { word: "Conocerse", meaning: "Tanışmak", pronunciation: "ko-no-SER-se", example: "Nos conocimos.", exampleTranslation: "Tanıştık." },
    { word: "El compromiso", meaning: "Taahhüt", pronunciation: "kom-pro-MI-so", example: "Tenemos compromiso.", exampleTranslation: "Taahhüdümüz var." },
    { word: "Sincero", meaning: "Samimi", pronunciation: "sin-SE-ro", example: "Sé sincero.", exampleTranslation: "Samimi ol." },
    { word: "Comprender", meaning: "Anlamak", pronunciation: "kom-pren-DER", example: "Te comprendo.", exampleTranslation: "Seni anlıyorum." },
    { word: "Comunicarse", meaning: "İletişim kurmak", pronunciation: "ko-mu-ni-KAR-se", example: "Nos comunicamos bien.", exampleTranslation: "İyi iletişim kuruyoruz." }
];

// ===== ÜNİTE 86: İŞ VE KARİYER =====
const unit86Vocabulary: B1VocabularyItem[] = [
    { word: "El empleo", meaning: "İş", pronunciation: "em-PLE-o", example: "Busco empleo.", exampleTranslation: "İş arıyorum." },
    { word: "La entrevista", meaning: "Mülakat", pronunciation: "en-tre-VIS-ta", example: "Tengo una entrevista.", exampleTranslation: "Mülakatım var." },
    { word: "El currículum", meaning: "Özgeçmiş", pronunciation: "ku-RRI-ku-lum", example: "Envié mi currículum.", exampleTranslation: "Özgeçmişimi gönderdim." },
    { word: "El sueldo", meaning: "Maaş", pronunciation: "SUEL-do", example: "El sueldo es bueno.", exampleTranslation: "Maaş iyi." },
    { word: "El jefe", meaning: "Patron", pronunciation: "HE-fe", example: "Mi jefe es amable.", exampleTranslation: "Patronum nazik." },
    { word: "El colega", meaning: "İş arkadaşı", pronunciation: "ko-LE-ga", example: "Mi colega me ayudó.", exampleTranslation: "İş arkadaşım yardım etti." },
    { word: "La reunión", meaning: "Toplantı", pronunciation: "re-u-NION", example: "Tenemos una reunión.", exampleTranslation: "Toplantımız var." },
    { word: "El proyecto", meaning: "Proje", pronunciation: "pro-YEK-to", example: "Trabajo en un proyecto.", exampleTranslation: "Bir proje üzerinde çalışıyorum." },
    { word: "Ascender", meaning: "Terfi etmek", pronunciation: "as-sen-DER", example: "Ascendí.", exampleTranslation: "Terfi ettim." },
    { word: "Dimitir", meaning: "İstifa etmek", pronunciation: "di-mi-TIR", example: "Dimitió.", exampleTranslation: "İstifa etti." },
    { word: "El contrato", meaning: "Sözleşme", pronunciation: "kon-TRA-to", example: "Firmé el contrato.", exampleTranslation: "Sözleşmeyi imzaladım." },
    { word: "La empresa", meaning: "Şirket", pronunciation: "em-PRE-sa", example: "Trabajo en una empresa.", exampleTranslation: "Bir şirkette çalışıyorum." },
    { word: "El horario", meaning: "Çalışma saatleri", pronunciation: "o-RA-rio", example: "Mi horario es flexible.", exampleTranslation: "Çalışma saatlerim esnek." },
    { word: "El departamento", meaning: "Departman", pronunciation: "de-par-ta-MEN-to", example: "Trabajo en marketing.", exampleTranslation: "Pazarlamada çalışıyorum." },
    { word: "El cliente", meaning: "Müşteri", pronunciation: "kli-EN-te", example: "El cliente está contento.", exampleTranslation: "Müşteri memnun." },
    { word: "Negociar", meaning: "Pazarlık etmek", pronunciation: "ne-go-SIAR", example: "Negociamos el precio.", exampleTranslation: "Fiyatı pazarlık ettik." },
    { word: "La experiencia", meaning: "Deneyim", pronunciation: "eks-pe-RIEN-cia", example: "Tengo experiencia.", exampleTranslation: "Deneyimim var." },
    { word: "El objetivo", meaning: "Hedef", pronunciation: "ob-he-TI-vo", example: "Cumplí el objetivo.", exampleTranslation: "Hedefe ulaştım." },
    { word: "El puesto", meaning: "Pozisyon", pronunciation: "PUES-to", example: "Conseguí el puesto.", exampleTranslation: "Pozisyonu aldım." },
    { word: "El beneficio", meaning: "Fayda", pronunciation: "be-ne-FI-cio", example: "Hay muchos beneficios.", exampleTranslation: "Çok fayda var." }
];

// ===== ÜNİTE 87: EDEBİYAT 2 =====
const unit87Vocabulary: B1VocabularyItem[] = [
    { word: "El ensayo", meaning: "Deneme", pronunciation: "en-SA-yo", example: "Leí un ensayo.", exampleTranslation: "Bir deneme okudum." },
    { word: "La biografía", meaning: "Biyografi", pronunciation: "bio-gra-FI-a", example: "Es una biografía.", exampleTranslation: "Bir biyografi." },
    { word: "La metáfora", meaning: "Metafor", pronunciation: "me-TA-fo-ra", example: "Usó una metáfora.", exampleTranslation: "Bir metafor kullandı." },
    { word: "El simbolismo", meaning: "Sembolizm", pronunciation: "sim-bo-LIS-mo", example: "Hay mucho simbolismo.", exampleTranslation: "Çok sembolizm var." },
    { word: "El realismo", meaning: "Gerçekçilik", pronunciation: "re-a-LIS-mo", example: "Es una novela realista.", exampleTranslation: "Gerçekçi bir roman." },
    { word: "El romanticismo", meaning: "Romantizm", pronunciation: "ro-man-ti-SIS-mo", example: "El romanticismo fue importante.", exampleTranslation: "Romantizm önemliydi." },
    { word: "Cervantes", meaning: "Cervantes", pronunciation: "ser-VAN-tes", example: "Cervantes escribió Don Quijote.", exampleTranslation: "Cervantes Don Kişot'u yazdı." },
    { word: "El Siglo de Oro", meaning: "Altın Çağ", pronunciation: "SI-glo de O-ro", example: "El Siglo de Oro español.", exampleTranslation: "İspanyol Altın Çağı." },
    { word: "La narrativa", meaning: "Anlatı", pronunciation: "na-rra-TI-va", example: "La narrativa es interesante.", exampleTranslation: "Anlatı ilginç." },
    { word: "El surrealismo", meaning: "Sürrealizm", pronunciation: "su-rre-a-LIS-mo", example: "El surrealismo es abstracto.", exampleTranslation: "Sürrealizm soyut." },
    { word: "La prosa", meaning: "Nesir", pronunciation: "PRO-sa", example: "Escribe en prosa.", exampleTranslation: "Nesir yazıyor." },
    { word: "El verso", meaning: "Şiir/Dize", pronunciation: "VER-so", example: "Escribe en verso.", exampleTranslation: "Şiir yazıyor." },
    { word: "El contexto", meaning: "Bağlam", pronunciation: "kon-TEKS-to", example: "Entendí el contexto.", exampleTranslation: "Bağlamı anladım." },
    { word: "Interpretar", meaning: "Yorumlamak", pronunciation: "in-ter-pre-TAR", example: "Cómo interpretar el texto.", exampleTranslation: "Metni nasıl yorumlamak." },
    { word: "Analizar", meaning: "Analiz etmek", pronunciation: "a-na-li-SAR", example: "Analizamos el libro.", exampleTranslation: "Kitabı analiz ettik." },
    { word: "El tema central", meaning: "Ana tema", pronunciation: "TE-ma cen-TRAL", example: "El tema central es el amor.", exampleTranslation: "Ana tema aşk." },
    { word: "La crítica", meaning: "Eleştiri", pronunciation: "KRI-ti-ka", example: "Leí la crítica.", exampleTranslation: "Eleştiriyi okudum." },
    { word: "La editorial", meaning: "Yayınevi", pronunciation: "e-di-to-RIAL", example: "La editorial es importante.", exampleTranslation: "Yayınevi önemli." },
    { word: "Publicar", meaning: "Yayınlamak", pronunciation: "pu-bli-KAR", example: "Publicó su libro.", exampleTranslation: "Kitabını yayınladı." },
    { word: "El best seller", meaning: "Çok satan", pronunciation: "best SE-ler", example: "Es un best seller.", exampleTranslation: "Çok satan bir kitap." }
];

// ===== ÜNİTE 88: İSPANYOL COĞRAFYASI =====
const unit88Vocabulary: B1VocabularyItem[] = [
    { word: "La comunidad autónoma", meaning: "Özerk bölge", pronunciation: "ko-mu-ni-DAD", example: "España tiene 17 comunidades.", exampleTranslation: "İspanya'nın 17 özerk bölgesi var." },
    { word: "La península", meaning: "Yarımada", pronunciation: "pe-NIN-su-la", example: "La Península Ibérica.", exampleTranslation: "İber Yarımadası." },
    { word: "El archipiélago", meaning: "Takımadalar", pronunciation: "ar-chi-PIE-la-go", example: "Las Canarias son un archipiélago.", exampleTranslation: "Kanarya Adaları takımadadır." },
    { word: "La costa", meaning: "Kıyı", pronunciation: "KOS-ta", example: "La Costa Brava es famosa.", exampleTranslation: "Costa Brava ünlü." },
    { word: "La sierra", meaning: "Dağ sırası", pronunciation: "SIE-rra", example: "Sierra Nevada.", exampleTranslation: "Sierra Nevada." },
    { word: "El clima mediterráneo", meaning: "Akdeniz iklimi", pronunciation: "KLI-ma", example: "Tiene clima mediterráneo.", exampleTranslation: "Akdeniz iklimi var." },
    { word: "La frontera", meaning: "Sınır", pronunciation: "fron-TE-ra", example: "La frontera con Francia.", exampleTranslation: "Fransa sınırı." },
    { word: "El estrecho", meaning: "Boğaz", pronunciation: "es-TRE-cho", example: "El Estrecho de Gibraltar.", exampleTranslation: "Cebelitarık Boğazı." },
    { word: "Madrid", meaning: "Madrid", pronunciation: "ma-DRID", example: "Madrid es la capital.", exampleTranslation: "Madrid başkenttir." },
    { word: "Barcelona", meaning: "Barselona", pronunciation: "bar-ce-LO-na", example: "Barcelona tiene playa.", exampleTranslation: "Barselona'nın plajı var." },
    { word: "Andalucía", meaning: "Endülüs", pronunciation: "an-da-lu-SI-a", example: "Andalucía es cálida.", exampleTranslation: "Endülüs sıcak." },
    { word: "Cataluña", meaning: "Katalonya", pronunciation: "ka-ta-LU-nya", example: "Cataluña tiene idioma propio.", exampleTranslation: "Katalonya'nın kendi dili var." },
    { word: "El País Vasco", meaning: "Bask Bölgesi", pronunciation: "pa-IS VAS-ko", example: "El País Vasco tiene cultura única.", exampleTranslation: "Bask Bölgesi'nin özgün kültürü var." },
    { word: "Galicia", meaning: "Galiçya", pronunciation: "ga-LI-cia", example: "Galicia es verde.", exampleTranslation: "Galiçya yeşil." },
    { word: "Valencia", meaning: "Valencia", pronunciation: "va-LEN-cia", example: "Valencia tiene naranjas.", exampleTranslation: "Valencia'da portakal var." },
    { word: "Sevilla", meaning: "Sevilla", pronunciation: "se-VI-ya", example: "Sevilla tiene flamenco.", exampleTranslation: "Sevilla'da flamenko var." },
    { word: "Las Islas Baleares", meaning: "Balear Adaları", pronunciation: "IS-las ba-le-A-res", example: "Las Baleares son turísticas.", exampleTranslation: "Balear Adaları turistik." },
    { word: "Las Islas Canarias", meaning: "Kanarya Adaları", pronunciation: "IS-las ka-NA-rias", example: "Las Canarias tienen volcanes.", exampleTranslation: "Kanarya Adaları'nda yanardağ var." },
    { word: "El río Ebro", meaning: "Ebro Nehri", pronunciation: "RI-o E-bro", example: "El Ebro es largo.", exampleTranslation: "Ebro uzun." },
    { word: "Los Pirineos", meaning: "Pireneler", pronunciation: "pi-ri-NE-os", example: "Los Pirineos son montañas.", exampleTranslation: "Pireneler dağdır." }
];

// ===== ÜNİTE 89: LATİN AMERİKA KÜLTÜRÜ =====
const unit89Vocabulary: B1VocabularyItem[] = [
    { word: "Latinoamérica", meaning: "Latin Amerika", pronunciation: "la-ti-no-a-ME-ri-ka", example: "Viajé por Latinoamérica.", exampleTranslation: "Latin Amerika'yı gezdim." },
    { word: "El voseo", meaning: "Vos kullanımı", pronunciation: "vo-SE-o", example: "En Argentina usan voseo.", exampleTranslation: "Arjantin'de vos kullanırlar." },
    { word: "El tango", meaning: "Tango", pronunciation: "TAN-go", example: "El tango es de Argentina.", exampleTranslation: "Tango Arjantin'den." },
    { word: "La salsa", meaning: "Salsa", pronunciation: "SAL-sa", example: "La salsa es de Cuba.", exampleTranslation: "Salsa Küba'dan." },
    { word: "El mariachi", meaning: "Mariachi", pronunciation: "ma-ria-CHI", example: "Música de mariachi.", exampleTranslation: "Mariachi müziği." },
    { word: "El mate", meaning: "Mate çayı", pronunciation: "MA-te", example: "Toman mate.", exampleTranslation: "Mate içerler." },
    { word: "Maya", meaning: "Maya", pronunciation: "MA-ya", example: "La cultura maya.", exampleTranslation: "Maya kültürü." },
    { word: "Azteca", meaning: "Aztek", pronunciation: "as-TE-ka", example: "El imperio azteca.", exampleTranslation: "Aztek imparatorluğu." },
    { word: "Inca", meaning: "İnka", pronunciation: "IN-ka", example: "Los incas.", exampleTranslation: "İnkalar." },
    { word: "El carnaval", meaning: "Karnaval", pronunciation: "kar-na-VAL", example: "El carnaval de Río.", exampleTranslation: "Rio Karnavalı." },
    { word: "México", meaning: "Meksika", pronunciation: "ME-hi-ko", example: "México es grande.", exampleTranslation: "Meksika büyük." },
    { word: "Argentina", meaning: "Arjantin", pronunciation: "ar-hen-TI-na", example: "Argentina tiene pampas.", exampleTranslation: "Arjantin'de pampalar var." },
    { word: "Colombia", meaning: "Kolombiya", pronunciation: "ko-LOM-bia", example: "Colombia tiene café.", exampleTranslation: "Kolombiya'da kahve var." },
    { word: "Perú", meaning: "Peru", pronunciation: "pe-RU", example: "Perú tiene Machu Picchu.", exampleTranslation: "Peru'da Machu Picchu var." },
    { word: "Chile", meaning: "Şili", pronunciation: "CHI-le", example: "Chile es largo.", exampleTranslation: "Şili uzun." },
    { word: "Cuba", meaning: "Küba", pronunciation: "KU-ba", example: "Cuba tiene música.", exampleTranslation: "Küba'da müzik var." },
    { word: "El gaucho", meaning: "Gaucho", pronunciation: "GAU-cho", example: "Los gauchos.", exampleTranslation: "Gaucholar." },
    { word: "El taco", meaning: "Taco", pronunciation: "TA-ko", example: "Los tacos son de México.", exampleTranslation: "Tacolar Meksika'dan." },
    { word: "La cumbia", meaning: "Cumbia", pronunciation: "KUM-bia", example: "La cumbia es popular.", exampleTranslation: "Cumbia popüler." },
    { word: "El reggaetón", meaning: "Reggaeton", pronunciation: "re-gue-TON", example: "El reggaetón es muy popular.", exampleTranslation: "Reggaeton çok popüler." }
];

// ===== ÜNİTE 90: B1 FİNAL =====
const unit90Vocabulary: B1VocabularyItem[] = [
    { word: "Consolidar", meaning: "Pekiştirmek", pronunciation: "kon-so-li-DAR", example: "Consolidé mis conocimientos.", exampleTranslation: "Bilgilerimi pekiştirdim." },
    { word: "Perfeccionar", meaning: "Mükemmelleştirmek", pronunciation: "per-fek-sio-NAR", example: "Quiero perfeccionar mi español.", exampleTranslation: "İspanyolcamı geliştirmek istiyorum." },
    { word: "La fluidez", meaning: "Akıcılık", pronunciation: "flu-i-DES", example: "Hablo con más fluidez.", exampleTranslation: "Daha akıcı konuşuyorum." },
    { word: "El reto", meaning: "Zorluk", pronunciation: "RE-to", example: "Cada día es un reto.", exampleTranslation: "Her gün bir zorluk." },
    { word: "El logro", meaning: "Başarı", pronunciation: "LO-gro", example: "Es un gran logro.", exampleTranslation: "Büyük bir başarı." },
    { word: "El diploma", meaning: "Diploma", pronunciation: "di-PLO-ma", example: "Obtendré mi diploma B1.", exampleTranslation: "B1 diplomamı alacağım." },
    { word: "El certificado", meaning: "Sertifika", pronunciation: "ser-ti-fi-KA-do", example: "Tengo un certificado.", exampleTranslation: "Sertifikam var." },
    { word: "¡Enhorabuena!", meaning: "Tebrikler!", pronunciation: "en-o-ra-BUE-na", example: "¡Enhorabuena! Terminaste B1.", exampleTranslation: "Tebrikler! B1'i bitirdin." },
    { word: "Perseverar", meaning: "Sebat etmek", pronunciation: "per-se-ve-RAR", example: "Hay que perseverar.", exampleTranslation: "Sebat etmek gerekir." },
    { word: "¡Sigue adelante!", meaning: "Devam et!", pronunciation: "SI-ge a-de-LAN-te", example: "¡Sigue adelante hacia B2!", exampleTranslation: "B2'ye doğru devam et!" },
    { word: "La meta", meaning: "Hedef", pronunciation: "ME-ta", example: "Mi meta es B2.", exampleTranslation: "Hedefim B2." },
    { word: "El progreso", meaning: "İlerleme", pronunciation: "pro-GRE-so", example: "Hice mucho progreso.", exampleTranslation: "Çok ilerleme kaydettim." },
    { word: "La perseverancia", meaning: "Sebat", pronunciation: "per-se-ve-RAN-cia", example: "La perseverancia da frutos.", exampleTranslation: "Sebat meyvelerini verir." },
    { word: "El nivel intermedio", meaning: "Orta seviye", pronunciation: "ni-VEL", example: "Estoy en nivel intermedio.", exampleTranslation: "Orta seviyedeyim." },
    { word: "Superar", meaning: "Aşmak", pronunciation: "su-pe-RAR", example: "Superé mis miedos.", exampleTranslation: "Korkularımı aştım." },
    { word: "Mejorar", meaning: "Geliştirmek", pronunciation: "me-ho-RAR", example: "Quiero mejorar más.", exampleTranslation: "Daha fazla geliştirmek istiyorum." },
    { word: "Practicar", meaning: "Pratik yapmak", pronunciation: "prak-ti-KAR", example: "Practico cada día.", exampleTranslation: "Her gün pratik yapıyorum." },
    { word: "Dominar", meaning: "Hakim olmak", pronunciation: "do-mi-NAR", example: "Quiero dominar el español.", exampleTranslation: "İspanyolcaya hakim olmak istiyorum." },
    { word: "El éxito", meaning: "Başarı", pronunciation: "EK-si-to", example: "El éxito llega con esfuerzo.", exampleTranslation: "Başarı çabayla gelir." },
    { word: "¡Felicidades!", meaning: "Tebrikler!", pronunciation: "fe-li-si-DA-des", example: "¡Felicidades! Lo lograste.", exampleTranslation: "Tebrikler! Başardın." }
];

// B1 kelime getirme fonksiyonu (ID: 61-90)
export function getB1VocabularyForUnit(unitId: number): B1VocabularyItem[] {
    const idMapping: { [key: number]: B1VocabularyItem[] } = {
        61: unit61Vocabulary, 62: unit62Vocabulary, 63: unit63Vocabulary, 64: unit64Vocabulary, 65: unit65Vocabulary,
        66: unit66Vocabulary, 67: unit67Vocabulary, 68: unit68Vocabulary, 69: unit69Vocabulary, 70: unit70Vocabulary,
        71: unit71Vocabulary, 72: unit72Vocabulary, 73: unit73Vocabulary, 74: unit74Vocabulary, 75: unit75Vocabulary,
        76: unit76Vocabulary, 77: unit77Vocabulary, 78: unit78Vocabulary, 79: unit79Vocabulary, 80: unit80Vocabulary,
        81: unit81Vocabulary, 82: unit82Vocabulary, 83: unit83Vocabulary, 84: unit84Vocabulary, 85: unit85Vocabulary,
        86: unit86Vocabulary, 87: unit87Vocabulary, 88: unit88Vocabulary, 89: unit89Vocabulary, 90: unit90Vocabulary
    };
    return idMapping[unitId] || unit61Vocabulary;
}
