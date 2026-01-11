/**
 * LinguaFlow İspanyolca B2 Kelime Veritabanı
 * 
 * B2 Seviyesi: Ünite 61-80 (20 ünite × 10 kelime = 200 kelime)
 * İleri düzey akademik, profesyonel ve soyut kavramlar
 */

export interface B2VocabularyWord {
    id: number;
    spanish: string;
    turkish: string;
    pronunciation: string;
    example: string;
    exampleTranslation: string;
}

// ===== ÜNİTE 61: Subjuntivo Perfecto =====
const unit61Words: B2VocabularyWord[] = [
    { id: 1, spanish: "haya terminado", turkish: "bitirmiş olsun", pronunciation: "A-ya ter-mi-NA-do", example: "Espero que haya terminado el trabajo.", exampleTranslation: "İşi bitirmiş olmasını umuyorum." },
    { id: 2, spanish: "haya llegado", turkish: "gelmiş olsun", pronunciation: "A-ya ye-GA-do", example: "Dudo que haya llegado a tiempo.", exampleTranslation: "Zamanında gelmiş olduğundan şüpheliyim." },
    { id: 3, spanish: "haya dicho", turkish: "söylemiş olsun", pronunciation: "A-ya DI-ço", example: "No creo que haya dicho eso.", exampleTranslation: "Bunu söylemiş olduğuna inanmıyorum." },
    { id: 4, spanish: "haya hecho", turkish: "yapmış olsun", pronunciation: "A-ya E-ço", example: "Es posible que lo haya hecho.", exampleTranslation: "Yapmış olması mümkün." },
    { id: 5, spanish: "haya visto", turkish: "görmüş olsun", pronunciation: "A-ya VIS-to", example: "Ojalá haya visto mi mensaje.", exampleTranslation: "Keşke mesajımı görmüş olsun." },
    { id: 6, spanish: "hubiera sabido", turkish: "bilseydim", pronunciation: "u-BYE-ra sa-BI-do", example: "Si hubiera sabido, habría venido.", exampleTranslation: "Bilseydim, gelirdim." },
    { id: 7, spanish: "hubiera tenido", turkish: "olsaydı", pronunciation: "u-BYE-ra te-NI-do", example: "Si hubiera tenido tiempo, te ayudaría.", exampleTranslation: "Zamanım olsaydı, sana yardım ederdim." },
    { id: 8, spanish: "hubiera podido", turkish: "yapabilseydim", pronunciation: "u-BYE-ra po-DI-do", example: "Ojalá hubiera podido ir.", exampleTranslation: "Keşke gidebilseydim." },
    { id: 9, spanish: "perfectamente", turkish: "mükemmel şekilde", pronunciation: "per-fek-ta-MEN-te", example: "Lo ha hecho perfectamente.", exampleTranslation: "Mükemmel şekilde yaptı." },
    { id: 10, spanish: "anteriormente", turkish: "daha önce", pronunciation: "an-te-ryor-MEN-te", example: "Lo había visto anteriormente.", exampleTranslation: "Daha önce görmüştüm." },
];

// ===== ÜNİTE 62: Subjuntivo Imperfecto =====
const unit62Words: B2VocabularyWord[] = [
    { id: 1, spanish: "quisiera", turkish: "isterdim", pronunciation: "ki-SYE-ra", example: "Quisiera una habitación doble.", exampleTranslation: "Çift kişilik oda isterdim." },
    { id: 2, spanish: "pudiera", turkish: "yapabilsem", pronunciation: "pu-DYE-ra", example: "Si pudiera, viajaría más.", exampleTranslation: "Yapabilsem, daha çok seyahat ederdim." },
    { id: 3, spanish: "tuviera", turkish: "olsaydı", pronunciation: "tu-VYE-ra", example: "Si tuviera dinero, compraría una casa.", exampleTranslation: "Param olsaydı, ev alırdım." },
    { id: 4, spanish: "fuera", turkish: "olsaydı", pronunciation: "FWE-ra", example: "Si fuera posible, lo haría.", exampleTranslation: "Mümkün olsaydı, yapardım." },
    { id: 5, spanish: "supiera", turkish: "bilseydim", pronunciation: "su-PYE-ra", example: "Si supiera la respuesta, te la diría.", exampleTranslation: "Cevabı bilseydim, söylerdim." },
    { id: 6, spanish: "viniera", turkish: "gelseydi", pronunciation: "vi-NYE-ra", example: "Si viniera, sería genial.", exampleTranslation: "Gelseydi, harika olurdu." },
    { id: 7, spanish: "hiciera", turkish: "yapsaydı", pronunciation: "i-SYE-ra", example: "Si lo hiciera bien, aprobaría.", exampleTranslation: "İyi yapsaydı, geçerdi." },
    { id: 8, spanish: "dijera", turkish: "söyleseydi", pronunciation: "di-HE-ra", example: "Si me lo dijera, lo entendería.", exampleTranslation: "Bana söyleseydi, anlardım." },
    { id: 9, spanish: "como si", turkish: "sanki", pronunciation: "KO-mo si", example: "Habla como si supiera todo.", exampleTranslation: "Sanki her şeyi biliyormuş gibi konuşuyor." },
    { id: 10, spanish: "ojalá", turkish: "keşke", pronunciation: "o-ha-LA", example: "Ojalá pudiera volar.", exampleTranslation: "Keşke uçabilsem." },
];

// ===== ÜNİTE 63: Şart Cümleleri İleri =====
const unit63Words: B2VocabularyWord[] = [
    { id: 1, spanish: "a condición de que", turkish: "şartıyla", pronunciation: "a kon-di-SYON de ke", example: "Iré a condición de que vengas.", exampleTranslation: "Sen de gelirsen gideceğim." },
    { id: 2, spanish: "siempre que", turkish: "...dığı sürece", pronunciation: "SYEM-pre ke", example: "Te ayudo siempre que me lo pidas.", exampleTranslation: "İstediğin sürece yardım ederim." },
    { id: 3, spanish: "a menos que", turkish: "...medikçe", pronunciation: "a ME-nos ke", example: "No iré a menos que me invites.", exampleTranslation: "Davet etmedikçe gitmeyeceğim." },
    { id: 4, spanish: "en caso de que", turkish: "...durumunda", pronunciation: "en KA-so de ke", example: "Llámame en caso de que necesites ayuda.", exampleTranslation: "Yardıma ihtiyacın olursa ara." },
    { id: 5, spanish: "con tal de que", turkish: "yeter ki", pronunciation: "kon tal de ke", example: "Acepto con tal de que me paguen.", exampleTranslation: "Bana ödeme yapılırsa kabul ederim." },
    { id: 6, spanish: "a no ser que", turkish: "...olmadığı sürece", pronunciation: "a no ser ke", example: "Vendré a no ser que llueva.", exampleTranslation: "Yağmur yağmadığı sürece geleceğim." },
    { id: 7, spanish: "suponiendo que", turkish: "varsayarsak", pronunciation: "su-po-NYEN-do ke", example: "Suponiendo que acepte, ¿qué haremos?", exampleTranslation: "Kabul ettiğini varsayarsak, ne yapacağız?" },
    { id: 8, spanish: "dado que", turkish: "...göz önüne alınırsa", pronunciation: "DA-do ke", example: "Dado que llueve, nos quedamos.", exampleTranslation: "Yağmur yağdığı göz önüne alınırsa, kalacağız." },
    { id: 9, spanish: "hipótesis", turkish: "varsayım", pronunciation: "i-PO-te-sis", example: "Es solo una hipótesis.", exampleTranslation: "Bu sadece bir varsayım." },
    { id: 10, spanish: "condicional", turkish: "şartlı", pronunciation: "kon-di-syo-NAL", example: "Es una oración condicional.", exampleTranslation: "Bu şartlı bir cümle." },
];

// ===== ÜNİTE 64: Akademik Yazım =====
const unit64Words: B2VocabularyWord[] = [
    { id: 1, spanish: "tesis", turkish: "tez", pronunciation: "TE-sis", example: "Estoy escribiendo mi tesis.", exampleTranslation: "Tezimi yazıyorum." },
    { id: 2, spanish: "hipótesis", turkish: "hipotez", pronunciation: "i-PO-te-sis", example: "La hipótesis fue confirmada.", exampleTranslation: "Hipotez doğrulandı." },
    { id: 3, spanish: "metodología", turkish: "metodoloji", pronunciation: "me-to-do-lo-HI-a", example: "La metodología es importante.", exampleTranslation: "Metodoloji önemlidir." },
    { id: 4, spanish: "bibliografía", turkish: "kaynakça", pronunciation: "bi-blyo-gra-FI-a", example: "Incluye una bibliografía completa.", exampleTranslation: "Tam bir kaynakça içeriyor." },
    { id: 5, spanish: "cita", turkish: "alıntı", pronunciation: "SI-ta", example: "Usa citas de expertos.", exampleTranslation: "Uzman alıntıları kullan." },
    { id: 6, spanish: "argumento", turkish: "argüman", pronunciation: "ar-gu-MEN-to", example: "Tu argumento es válido.", exampleTranslation: "Argümanın geçerli." },
    { id: 7, spanish: "conclusión", turkish: "sonuç", pronunciation: "kon-klu-SYON", example: "La conclusión es clara.", exampleTranslation: "Sonuç açık." },
    { id: 8, spanish: "análisis", turkish: "analiz", pronunciation: "a-NA-li-sis", example: "El análisis muestra los datos.", exampleTranslation: "Analiz verileri gösteriyor." },
    { id: 9, spanish: "investigación", turkish: "araştırma", pronunciation: "in-ves-ti-ga-SYON", example: "La investigación continúa.", exampleTranslation: "Araştırma devam ediyor." },
    { id: 10, spanish: "fuente", turkish: "kaynak", pronunciation: "FWEN-te", example: "¿Cuál es tu fuente?", exampleTranslation: "Kaynağın ne?" },
];

// ===== ÜNİTE 65: Ekonomi ve Finans =====
const unit65Words: B2VocabularyWord[] = [
    { id: 1, spanish: "inversión", turkish: "yatırım", pronunciation: "in-ver-SYON", example: "Es una buena inversión.", exampleTranslation: "İyi bir yatırım." },
    { id: 2, spanish: "acción", turkish: "hisse", pronunciation: "ak-SYON", example: "Compré acciones de la empresa.", exampleTranslation: "Şirketin hisselerini aldım." },
    { id: 3, spanish: "bolsa", turkish: "borsa", pronunciation: "BOL-sa", example: "La bolsa subió hoy.", exampleTranslation: "Borsa bugün yükseldi." },
    { id: 4, spanish: "inflación", turkish: "enflasyon", pronunciation: "in-fla-SYON", example: "La inflación es alta.", exampleTranslation: "Enflasyon yüksek." },
    { id: 5, spanish: "presupuesto", turkish: "bütçe", pronunciation: "pre-su-PWES-to", example: "El presupuesto es limitado.", exampleTranslation: "Bütçe sınırlı." },
    { id: 6, spanish: "impuesto", turkish: "vergi", pronunciation: "im-PWES-to", example: "Hay que pagar impuestos.", exampleTranslation: "Vergi ödemek gerekiyor." },
    { id: 7, spanish: "deuda", turkish: "borç", pronunciation: "DEW-da", example: "Tengo una deuda grande.", exampleTranslation: "Büyük bir borcum var." },
    { id: 8, spanish: "préstamo", turkish: "kredi", pronunciation: "PRES-ta-mo", example: "Pedí un préstamo al banco.", exampleTranslation: "Bankadan kredi aldım." },
    { id: 9, spanish: "ahorro", turkish: "tasarruf", pronunciation: "a-O-ro", example: "El ahorro es importante.", exampleTranslation: "Tasarruf önemlidir." },
    { id: 10, spanish: "rentabilidad", turkish: "karlılık", pronunciation: "ren-ta-bi-li-DAD", example: "La rentabilidad aumentó.", exampleTranslation: "Karlılık arttı." },
];

// ===== ÜNİTE 66: Hukuk ve Adalet =====
const unit66Words: B2VocabularyWord[] = [
    { id: 1, spanish: "juicio", turkish: "dava/yargılama", pronunciation: "HWI-syo", example: "El juicio comienza mañana.", exampleTranslation: "Dava yarın başlıyor." },
    { id: 2, spanish: "abogado defensor", turkish: "savunma avukatı", pronunciation: "a-bo-GA-do de-fen-SOR", example: "Mi abogado defensor es experto.", exampleTranslation: "Savunma avukatım uzman." },
    { id: 3, spanish: "fiscal", turkish: "savcı", pronunciation: "fis-KAL", example: "El fiscal presentó pruebas.", exampleTranslation: "Savcı delil sundu." },
    { id: 4, spanish: "testigo", turkish: "tanık", pronunciation: "tes-TI-go", example: "El testigo declaró la verdad.", exampleTranslation: "Tanık gerçeği ifade etti." },
    { id: 5, spanish: "sentencia", turkish: "karar/hüküm", pronunciation: "sen-TEN-sya", example: "La sentencia fue justa.", exampleTranslation: "Karar adil oldu." },
    { id: 6, spanish: "inocente", turkish: "masum", pronunciation: "i-no-SEN-te", example: "Es inocente del crimen.", exampleTranslation: "Suçtan masum." },
    { id: 7, spanish: "culpable", turkish: "suçlu", pronunciation: "kul-PA-ble", example: "Fue declarado culpable.", exampleTranslation: "Suçlu ilan edildi." },
    { id: 8, spanish: "apelación", turkish: "itiraz/temyiz", pronunciation: "a-pe-la-SYON", example: "Presentó una apelación.", exampleTranslation: "Temyize gitti." },
    { id: 9, spanish: "demanda", turkish: "dava", pronunciation: "de-MAN-da", example: "Presentó una demanda.", exampleTranslation: "Dava açtı." },
    { id: 10, spanish: "tribunal", turkish: "mahkeme", pronunciation: "tri-bu-NAL", example: "El tribunal decidirá.", exampleTranslation: "Mahkeme karar verecek." },
];

// ===== ÜNİTE 67: Bilim ve Teknoloji İleri =====
const unit67Words: B2VocabularyWord[] = [
    { id: 1, spanish: "inteligencia artificial", turkish: "yapay zeka", pronunciation: "in-te-li-HEN-sya ar-ti-fi-SYAL", example: "La inteligencia artificial avanza.", exampleTranslation: "Yapay zeka ilerliyor." },
    { id: 2, spanish: "realidad virtual", turkish: "sanal gerçeklik", pronunciation: "re-a-li-DAD vir-TWAL", example: "Probé la realidad virtual.", exampleTranslation: "Sanal gerçekliği denedim." },
    { id: 3, spanish: "ciberseguridad", turkish: "siber güvenlik", pronunciation: "si-ber-se-gu-ri-DAD", example: "La ciberseguridad es crucial.", exampleTranslation: "Siber güvenlik çok önemli." },
    { id: 4, spanish: "blockchain", turkish: "blokzinciri", pronunciation: "blok-ÇEYN", example: "Blockchain cambia las finanzas.", exampleTranslation: "Blokzinciri finansı değiştiriyor." },
    { id: 5, spanish: "big data", turkish: "büyük veri", pronunciation: "big DEY-ta", example: "Big data transforma empresas.", exampleTranslation: "Büyük veri şirketleri dönüştürüyor." },
    { id: 6, spanish: "automatización", turkish: "otomasyon", pronunciation: "aw-to-ma-ti-sa-SYON", example: "La automatización aumenta.", exampleTranslation: "Otomasyon artıyor." },
    { id: 7, spanish: "robótica", turkish: "robotik", pronunciation: "ro-BO-ti-ka", example: "La robótica avanza rápido.", exampleTranslation: "Robotik hızla ilerliyor." },
    { id: 8, spanish: "nanotecnología", turkish: "nanoteknoloji", pronunciation: "na-no-tek-no-lo-HI-a", example: "La nanotecnología es fascinante.", exampleTranslation: "Nanoteknoloji büyüleyici." },
    { id: 9, spanish: "biotecnología", turkish: "biyoteknoloji", pronunciation: "byo-tek-no-lo-HI-a", example: "La biotecnología salva vidas.", exampleTranslation: "Biyoteknoloji hayat kurtarıyor." },
    { id: 10, spanish: "energía renovable", turkish: "yenilenebilir enerji", pronunciation: "e-ner-HI-a re-no-VA-ble", example: "La energía renovable es el futuro.", exampleTranslation: "Yenilenebilir enerji gelecek." },
];

// ===== ÜNİTE 68: Siyaset ve Toplum =====
const unit68Words: B2VocabularyWord[] = [
    { id: 1, spanish: "democracia", turkish: "demokrasi", pronunciation: "de-mo-KRA-sya", example: "La democracia es valiosa.", exampleTranslation: "Demokrasi değerlidir." },
    { id: 2, spanish: "dictadura", turkish: "diktatörlük", pronunciation: "dik-ta-DU-ra", example: "La dictadura terminó.", exampleTranslation: "Diktatörlük sona erdi." },
    { id: 3, spanish: "derechos humanos", turkish: "insan hakları", pronunciation: "de-RE-ços u-MA-nos", example: "Los derechos humanos son fundamentales.", exampleTranslation: "İnsan hakları temeldir." },
    { id: 4, spanish: "libertad de expresión", turkish: "ifade özgürlüğü", pronunciation: "li-ber-TAD de eks-pre-SYON", example: "La libertad de expresión es un derecho.", exampleTranslation: "İfade özgürlüğü bir haktır." },
    { id: 5, spanish: "manifestación", turkish: "gösteri", pronunciation: "ma-ni-fes-ta-SYON", example: "Hubo una manifestación pacífica.", exampleTranslation: "Barışçıl bir gösteri oldu." },
    { id: 6, spanish: "activismo", turkish: "aktivizm", pronunciation: "ak-ti-VIS-mo", example: "El activismo genera cambio.", exampleTranslation: "Aktivizm değişim yaratır." },
    { id: 7, spanish: "partido político", turkish: "siyasi parti", pronunciation: "par-TI-do po-LI-ti-ko", example: "¿A qué partido político perteneces?", exampleTranslation: "Hangi siyasi partiye mensupsan?" },
    { id: 8, spanish: "referéndum", turkish: "referandum", pronunciation: "re-fe-REN-dum", example: "Habrá un referéndum.", exampleTranslation: "Bir referandum olacak." },
    { id: 9, spanish: "constitución", turkish: "anayasa", pronunciation: "kons-ti-tu-SYON", example: "La constitución protege los derechos.", exampleTranslation: "Anayasa hakları korur." },
    { id: 10, spanish: "igualdad", turkish: "eşitlik", pronunciation: "i-gwal-DAD", example: "Luchamos por la igualdad.", exampleTranslation: "Eşitlik için mücadele ediyoruz." },
];

// ===== ÜNİTE 69: Medya ve İletişim =====
const unit69Words: B2VocabularyWord[] = [
    { id: 1, spanish: "periodismo", turkish: "gazetecilik", pronunciation: "pe-ryo-DIS-mo", example: "El periodismo es importante.", exampleTranslation: "Gazetecilik önemlidir." },
    { id: 2, spanish: "corresponsal", turkish: "muhabir", pronunciation: "ko-res-pon-SAL", example: "Es corresponsal en el extranjero.", exampleTranslation: "Yurt dışı muhabiridir." },
    { id: 3, spanish: "editorial", turkish: "başyazı", pronunciation: "e-di-to-RYAL", example: "Leí el editorial del periódico.", exampleTranslation: "Gazetenin başyazısını okudum." },
    { id: 4, spanish: "reportaje", turkish: "röportaj/haber", pronunciation: "re-por-TA-he", example: "Vi un reportaje interesante.", exampleTranslation: "İlginç bir röportaj izledim." },
    { id: 5, spanish: "desinformación", turkish: "dezenformasyon", pronunciation: "des-in-for-ma-SYON", example: "Hay mucha desinformación.", exampleTranslation: "Çok fazla dezenformasyon var." },
    { id: 6, spanish: "propaganda", turkish: "propaganda", pronunciation: "pro-pa-GAN-da", example: "Es propaganda política.", exampleTranslation: "Bu siyasi propaganda." },
    { id: 7, spanish: "censura", turkish: "sansür", pronunciation: "sen-SU-ra", example: "La censura es inaceptable.", exampleTranslation: "Sansür kabul edilemez." },
    { id: 8, spanish: "viral", turkish: "viral", pronunciation: "vi-RAL", example: "El video se hizo viral.", exampleTranslation: "Video viral oldu." },
    { id: 9, spanish: "influencer", turkish: "fenomen", pronunciation: "in-flu-EN-ser", example: "Es un influencer famoso.", exampleTranslation: "Ünlü bir fenomen." },
    { id: 10, spanish: "podcast", turkish: "podcast", pronunciation: "POD-kast", example: "Escucho podcasts cada día.", exampleTranslation: "Her gün podcast dinliyorum." },
];

// ===== ÜNİTE 70: Psikoloji ve Davranış =====
const unit70Words: B2VocabularyWord[] = [
    { id: 1, spanish: "ansiedad", turkish: "kaygı", pronunciation: "an-sye-DAD", example: "La ansiedad es común.", exampleTranslation: "Kaygı yaygındır." },
    { id: 2, spanish: "depresión", turkish: "depresyon", pronunciation: "de-pre-SYON", example: "La depresión requiere tratamiento.", exampleTranslation: "Depresyon tedavi gerektirir." },
    { id: 3, spanish: "terapia", turkish: "terapi", pronunciation: "te-RA-pya", example: "La terapia ayuda mucho.", exampleTranslation: "Terapi çok yardımcı olur." },
    { id: 4, spanish: "subconsciente", turkish: "bilinçaltı", pronunciation: "sub-kons-SYEN-te", example: "El subconsciente influye.", exampleTranslation: "Bilinçaltı etkiler." },
    { id: 5, spanish: "trauma", turkish: "travma", pronunciation: "TRAW-ma", example: "El trauma puede superarse.", exampleTranslation: "Travma aşılabilir." },
    { id: 6, spanish: "autoestima", turkish: "özgüven", pronunciation: "aw-to-es-TI-ma", example: "La autoestima es importante.", exampleTranslation: "Özgüven önemlidir." },
    { id: 7, spanish: "inteligencia emocional", turkish: "duygusal zeka", pronunciation: "in-te-li-HEN-sya e-mo-syo-NAL", example: "La inteligencia emocional importa.", exampleTranslation: "Duygusal zeka önemlidir." },
    { id: 8, spanish: "comportamiento", turkish: "davranış", pronunciation: "kom-por-ta-MYEN-to", example: "El comportamiento cambia.", exampleTranslation: "Davranış değişir." },
    { id: 9, spanish: "mentalidad", turkish: "zihniyet", pronunciation: "men-ta-li-DAD", example: "Cambia tu mentalidad.", exampleTranslation: "Zihniyetini değiştir." },
    { id: 10, spanish: "resiliencia", turkish: "dayanıklılık", pronunciation: "re-si-LYEN-sya", example: "La resiliencia es clave.", exampleTranslation: "Dayanıklılık anahtardır." },
];

// ===== ÜNİTE 71: Felsefe ve Düşünce =====
const unit71Words: B2VocabularyWord[] = [
    { id: 1, spanish: "existencialismo", turkish: "varoluşçuluk", pronunciation: "ek-sis-ten-sya-LIS-mo", example: "El existencialismo es profundo.", exampleTranslation: "Varoluşçuluk derindir." },
    { id: 2, spanish: "ética", turkish: "etik", pronunciation: "E-ti-ka", example: "La ética es fundamental.", exampleTranslation: "Etik temeldir." },
    { id: 3, spanish: "moral", turkish: "ahlak", pronunciation: "mo-RAL", example: "Es una cuestión moral.", exampleTranslation: "Bu ahlaki bir meseledir." },
    { id: 4, spanish: "racionalismo", turkish: "rasyonalizm", pronunciation: "ra-syo-na-LIS-mo", example: "El racionalismo domina.", exampleTranslation: "Rasyonalizm hakimdir." },
    { id: 5, spanish: "relativismo", turkish: "görecelilik", pronunciation: "re-la-ti-VIS-mo", example: "El relativismo es debatido.", exampleTranslation: "Görecelilik tartışılır." },
    { id: 6, spanish: "paradigma", turkish: "paradigma", pronunciation: "pa-ra-DIG-ma", example: "El paradigma cambió.", exampleTranslation: "Paradigma değişti." },
    { id: 7, spanish: "conciencia", turkish: "bilinç", pronunciation: "kon-SYEN-sya", example: "La conciencia es misteriosa.", exampleTranslation: "Bilinç gizemlidir." },
    { id: 8, spanish: "libre albedrío", turkish: "özgür irade", pronunciation: "LI-bre al-be-DRI-o", example: "¿Existe el libre albedrío?", exampleTranslation: "Özgür irade var mı?" },
    { id: 9, spanish: "metafísica", turkish: "metafizik", pronunciation: "me-ta-FI-si-ka", example: "La metafísica es compleja.", exampleTranslation: "Metafizik karmaşıktır." },
    { id: 10, spanish: "ontología", turkish: "ontoloji", pronunciation: "on-to-lo-HI-a", example: "La ontología estudia el ser.", exampleTranslation: "Ontoloji varlığı inceler." },
];

// ===== ÜNİTE 72: Çevre ve Sürdürülebilirlik =====
const unit72Words: B2VocabularyWord[] = [
    { id: 1, spanish: "huella de carbono", turkish: "karbon ayak izi", pronunciation: "WE-ya de kar-BO-no", example: "Hay que reducir la huella de carbono.", exampleTranslation: "Karbon ayak izini azaltmak gerekir." },
    { id: 2, spanish: "emisiones", turkish: "emisyonlar", pronunciation: "e-mi-SYO-nes", example: "Las emisiones dañan el planeta.", exampleTranslation: "Emisyonlar gezegene zarar verir." },
    { id: 3, spanish: "biodiversidad", turkish: "biyoçeşitlilik", pronunciation: "byo-di-ver-si-DAD", example: "La biodiversidad está amenazada.", exampleTranslation: "Biyoçeşitlilik tehdit altında." },
    { id: 4, spanish: "ecosistema", turkish: "ekosistem", pronunciation: "e-ko-sis-TE-ma", example: "El ecosistema está en peligro.", exampleTranslation: "Ekosistem tehlikede." },
    { id: 5, spanish: "sostenibilidad", turkish: "sürdürülebilirlik", pronunciation: "sos-te-ni-bi-li-DAD", example: "La sostenibilidad es esencial.", exampleTranslation: "Sürdürülebilirlik esastır." },
    { id: 6, spanish: "deforestación", turkish: "ormansızlaşma", pronunciation: "de-fo-res-ta-SYON", example: "La deforestación aumenta.", exampleTranslation: "Ormansızlaşma artıyor." },
    { id: 7, spanish: "extinción", turkish: "yok oluş", pronunciation: "eks-tin-SYON", example: "Hay especies en peligro de extinción.", exampleTranslation: "Yok olma tehlikesindeki türler var." },
    { id: 8, spanish: "calentamiento global", turkish: "küresel ısınma", pronunciation: "ka-len-ta-MYEN-to glo-BAL", example: "El calentamiento global avanza.", exampleTranslation: "Küresel ısınma ilerliyor." },
    { id: 9, spanish: "residuos", turkish: "atıklar", pronunciation: "re-SI-dwos", example: "Hay que gestionar los residuos.", exampleTranslation: "Atıkları yönetmek gerekir." },
    { id: 10, spanish: "contaminación", turkish: "kirlilik", pronunciation: "kon-ta-mi-na-SYON", example: "La contaminación mata.", exampleTranslation: "Kirlilik öldürür." },
];

// ===== ÜNİTE 73: Kültür ve Sanat İleri =====
const unit73Words: B2VocabularyWord[] = [
    { id: 1, spanish: "patrimonio", turkish: "miras", pronunciation: "pa-tri-MO-nyo", example: "Es patrimonio de la humanidad.", exampleTranslation: "İnsanlığın mirasıdır." },
    { id: 2, spanish: "vanguardia", turkish: "avangard", pronunciation: "van-GWAR-dya", example: "Es arte de vanguardia.", exampleTranslation: "Avangard sanattır." },
    { id: 3, spanish: "surrealismo", turkish: "sürrealizm", pronunciation: "su-re-a-LIS-mo", example: "El surrealismo fue revolucionario.", exampleTranslation: "Sürrealizm devrimciydi." },
    { id: 4, spanish: "renacimiento", turkish: "Rönesans", pronunciation: "re-na-si-MYEN-to", example: "El renacimiento cambió el arte.", exampleTranslation: "Rönesans sanatı değiştirdi." },
    { id: 5, spanish: "barroco", turkish: "Barok", pronunciation: "ba-RO-ko", example: "El estilo barroco es elaborado.", exampleTranslation: "Barok tarzı işlemeli." },
    { id: 6, spanish: "contemporáneo", turkish: "çağdaş", pronunciation: "kon-tem-po-RA-ne-o", example: "Es arte contemporáneo.", exampleTranslation: "Çağdaş sanattır." },
    { id: 7, spanish: "abstracción", turkish: "soyutlama", pronunciation: "abs-trak-SYON", example: "La abstracción es interesante.", exampleTranslation: "Soyutlama ilginçtir." },
    { id: 8, spanish: "instalación", turkish: "yerleştirme", pronunciation: "ins-ta-la-SYON", example: "Es una instalación artística.", exampleTranslation: "Bu bir sanat yerleştirmesi." },
    { id: 9, spanish: "performance", turkish: "performans", pronunciation: "per-FOR-mans", example: "Hicieron un performance.", exampleTranslation: "Bir performans yaptılar." },
    { id: 10, spanish: "estética", turkish: "estetik", pronunciation: "es-TE-ti-ka", example: "La estética importa.", exampleTranslation: "Estetik önemlidir." },
];

// ===== ÜNİTE 74: İş Dünyası İleri =====
const unit74Words: B2VocabularyWord[] = [
    { id: 1, spanish: "emprendimiento", turkish: "girişimcilik", pronunciation: "em-pren-di-MYEN-to", example: "El emprendimiento está de moda.", exampleTranslation: "Girişimcilik popüler." },
    { id: 2, spanish: "startup", turkish: "startup", pronunciation: "star-TAP", example: "Mi startup creció rápido.", exampleTranslation: "Startupım hızla büyüdü." },
    { id: 3, spanish: "inversores", turkish: "yatırımcılar", pronunciation: "in-ver-SO-res", example: "Buscamos inversores.", exampleTranslation: "Yatırımcı arıyoruz." },
    { id: 4, spanish: "plan de negocios", turkish: "iş planı", pronunciation: "plan de ne-GO-syos", example: "El plan de negocios está listo.", exampleTranslation: "İş planı hazır." },
    { id: 5, spanish: "flujo de caja", turkish: "nakit akışı", pronunciation: "FLU-ho de KA-ha", example: "El flujo de caja es positivo.", exampleTranslation: "Nakit akışı pozitif." },
    { id: 6, spanish: "facturación", turkish: "ciro", pronunciation: "fak-tu-ra-SYON", example: "La facturación aumentó.", exampleTranslation: "Ciro arttı." },
    { id: 7, spanish: "liderazgo", turkish: "liderlik", pronunciation: "li-de-RAS-go", example: "El liderazgo es clave.", exampleTranslation: "Liderlik anahtardır." },
    { id: 8, spanish: "networking", turkish: "ağ kurma", pronunciation: "NET-wor-king", example: "El networking abre puertas.", exampleTranslation: "Ağ kurma kapılar açar." },
    { id: 9, spanish: "marca personal", turkish: "kişisel marka", pronunciation: "MAR-ka per-so-NAL", example: "Tu marca personal importa.", exampleTranslation: "Kişisel markan önemlidir." },
    { id: 10, spanish: "pitch", turkish: "sunum", pronunciation: "piç", example: "Hice un pitch a los inversores.", exampleTranslation: "Yatırımcılara sunum yaptım." },
];

// ===== ÜNİTE 75: Tarih ve Uygarlıklar =====
const unit75Words: B2VocabularyWord[] = [
    { id: 1, spanish: "civilización", turkish: "uygarlık", pronunciation: "si-vi-li-sa-SYON", example: "La civilización maya fue avanzada.", exampleTranslation: "Maya uygarlığı gelişmişti." },
    { id: 2, spanish: "imperio", turkish: "imparatorluk", pronunciation: "im-PE-ryo", example: "El imperio romano cayó.", exampleTranslation: "Roma imparatorluğu çöktü." },
    { id: 3, spanish: "conquista", turkish: "fetih", pronunciation: "kon-KIS-ta", example: "La conquista cambió América.", exampleTranslation: "Fetih Amerika'yı değiştirdi." },
    { id: 4, spanish: "revolución", turkish: "devrim", pronunciation: "re-vo-lu-SYON", example: "La revolución francesa fue importante.", exampleTranslation: "Fransız devrimi önemliydi." },
    { id: 5, spanish: "epoca", turkish: "dönem", pronunciation: "E-po-ka", example: "Fue una época difícil.", exampleTranslation: "Zor bir dönemdi." },
    { id: 6, spanish: "colonización", turkish: "sömürgecilik", pronunciation: "ko-lo-ni-sa-SYON", example: "La colonización tuvo consecuencias.", exampleTranslation: "Sömürgeciliğin sonuçları oldu." },
    { id: 7, spanish: "independencia", turkish: "bağımsızlık", pronunciation: "in-de-pen-DEN-sya", example: "La independencia llegó.", exampleTranslation: "Bağımsızlık geldi." },
    { id: 8, spanish: "monarquía", turkish: "monarşi", pronunciation: "mo-nar-KI-a", example: "La monarquía terminó.", exampleTranslation: "Monarşi sona erdi." },
    { id: 9, spanish: "república", turkish: "cumhuriyet", pronunciation: "re-PU-bli-ka", example: "Es una república.", exampleTranslation: "Bir cumhuriyet." },
    { id: 10, spanish: "arqueología", turkish: "arkeoloji", pronunciation: "ar-ke-o-lo-HI-a", example: "La arqueología revela el pasado.", exampleTranslation: "Arkeoloji geçmişi ortaya çıkarır." },
];

// ===== ÜNİTE 76: Tıp ve Sağlık İleri =====
const unit76Words: B2VocabularyWord[] = [
    { id: 1, spanish: "diagnóstico", turkish: "teşhis", pronunciation: "dyag-NOS-ti-ko", example: "El diagnóstico fue certero.", exampleTranslation: "Teşhis doğruydu." },
    { id: 2, spanish: "pronóstico", turkish: "öngörü", pronunciation: "pro-NOS-ti-ko", example: "El pronóstico es bueno.", exampleTranslation: "Öngörü iyi." },
    { id: 3, spanish: "tratamiento", turkish: "tedavi", pronunciation: "tra-ta-MYEN-to", example: "El tratamiento funciona.", exampleTranslation: "Tedavi işe yarıyor." },
    { id: 4, spanish: "intervención", turkish: "müdahale", pronunciation: "in-ter-ven-SYON", example: "Necesita una intervención.", exampleTranslation: "Müdahaleye ihtiyacı var." },
    { id: 5, spanish: "cirugía", turkish: "ameliyat", pronunciation: "si-ru-HI-a", example: "La cirugía fue exitosa.", exampleTranslation: "Ameliyat başarılı oldu." },
    { id: 6, spanish: "rehabilitación", turkish: "rehabilitasyon", pronunciation: "re-a-bi-li-ta-SYON", example: "La rehabilitación es larga.", exampleTranslation: "Rehabilitasyon uzun." },
    { id: 7, spanish: "epidemia", turkish: "salgın", pronunciation: "e-pi-DE-mya", example: "Hubo una epidemia.", exampleTranslation: "Bir salgın oldu." },
    { id: 8, spanish: "pandemia", turkish: "pandemi", pronunciation: "pan-DE-mya", example: "La pandemia cambió todo.", exampleTranslation: "Pandemi her şeyi değiştirdi." },
    { id: 9, spanish: "vacunación", turkish: "aşılama", pronunciation: "va-ku-na-SYON", example: "La vacunación avanza.", exampleTranslation: "Aşılama ilerliyor." },
    { id: 10, spanish: "inmunidad", turkish: "bağışıklık", pronunciation: "in-mu-ni-DAD", example: "La inmunidad es importante.", exampleTranslation: "Bağışıklık önemlidir." },
];

// ===== ÜNİTE 77: Edebiyat ve Yazarlık =====
const unit77Words: B2VocabularyWord[] = [
    { id: 1, spanish: "narrativa", turkish: "anlatı", pronunciation: "na-ra-TI-va", example: "La narrativa es interesante.", exampleTranslation: "Anlatı ilginç." },
    { id: 2, spanish: "metáfora", turkish: "metafor", pronunciation: "me-TA-fo-ra", example: "Usa una metáfora bella.", exampleTranslation: "Güzel bir metafor kullanıyor." },
    { id: 3, spanish: "símil", turkish: "benzetme", pronunciation: "SI-mil", example: "Es un símil común.", exampleTranslation: "Yaygın bir benzetme." },
    { id: 4, spanish: "protagonista", turkish: "başkahraman", pronunciation: "pro-ta-go-NIS-ta", example: "El protagonista muere.", exampleTranslation: "Başkahraman ölür." },
    { id: 5, spanish: "antagonista", turkish: "hasım", pronunciation: "an-ta-go-NIS-ta", example: "El antagonista es cruel.", exampleTranslation: "Hasım zalim." },
    { id: 6, spanish: "trama", turkish: "olay örgüsü", pronunciation: "TRA-ma", example: "La trama es compleja.", exampleTranslation: "Olay örgüsü karmaşık." },
    { id: 7, spanish: "género literario", turkish: "edebi tür", pronunciation: "HE-ne-ro li-te-RA-ryo", example: "¿Cuál es tu género literario favorito?", exampleTranslation: "En sevdiğin edebi tür hangisi?" },
    { id: 8, spanish: "novela", turkish: "roman", pronunciation: "no-VE-la", example: "Escribió una novela.", exampleTranslation: "Bir roman yazdı." },
    { id: 9, spanish: "ensayo", turkish: "deneme", pronunciation: "en-SA-yo", example: "Publicó un ensayo.", exampleTranslation: "Bir deneme yayınladı." },
    { id: 10, spanish: "poesía", turkish: "şiir", pronunciation: "po-e-SI-a", example: "La poesía es bella.", exampleTranslation: "Şiir güzeldir." },
];

// ===== ÜNİTE 78: Uluslararası İlişkiler =====
const unit78Words: B2VocabularyWord[] = [
    { id: 1, spanish: "diplomacia", turkish: "diplomasi", pronunciation: "di-plo-MA-sya", example: "La diplomacia resuelve conflictos.", exampleTranslation: "Diplomasi çatışmaları çözer." },
    { id: 2, spanish: "tratado", turkish: "antlaşma", pronunciation: "tra-TA-do", example: "Firmaron un tratado.", exampleTranslation: "Bir antlaşma imzaladılar." },
    { id: 3, spanish: "sanción", turkish: "yaptırım", pronunciation: "san-SYON", example: "Impusieron sanciones.", exampleTranslation: "Yaptırımlar uyguladılar." },
    { id: 4, spanish: "alianza", turkish: "ittifak", pronunciation: "a-LYAN-sa", example: "Formaron una alianza.", exampleTranslation: "Bir ittifak kurdular." },
    { id: 5, spanish: "conflicto", turkish: "çatışma", pronunciation: "kon-FLIK-to", example: "El conflicto escaló.", exampleTranslation: "Çatışma tırmandı." },
    { id: 6, spanish: "negociación", turkish: "müzakere", pronunciation: "ne-go-sya-SYON", example: "La negociación avanza.", exampleTranslation: "Müzakere ilerliyor." },
    { id: 7, spanish: "embargo", turkish: "ambargo", pronunciation: "em-BAR-go", example: "Hay un embargo comercial.", exampleTranslation: "Ticari ambargo var." },
    { id: 8, spanish: "asilo", turkish: "sığınma", pronunciation: "a-SI-lo", example: "Pidió asilo político.", exampleTranslation: "Siyasi sığınma istedi." },
    { id: 9, spanish: "refugiado", turkish: "mülteci", pronunciation: "re-fu-HYA-do", example: "Hay millones de refugiados.", exampleTranslation: "Milyonlarca mülteci var." },
    { id: 10, spanish: "soberanía", turkish: "egemenlik", pronunciation: "so-be-ra-NI-a", example: "La soberanía es importante.", exampleTranslation: "Egemenlik önemlidir." },
];

// ===== ÜNİTE 79: İleri Konuşma ve Tartışma =====
const unit79Words: B2VocabularyWord[] = [
    { id: 1, spanish: "debatir", turkish: "tartışmak", pronunciation: "de-ba-TIR", example: "Vamos a debatir el tema.", exampleTranslation: "Konuyu tartışacağız." },
    { id: 2, spanish: "argumentar", turkish: "savunmak", pronunciation: "ar-gu-men-TAR", example: "Hay que argumentar bien.", exampleTranslation: "İyi savunmak gerekir." },
    { id: 3, spanish: "refutar", turkish: "çürütmek", pronunciation: "re-fu-TAR", example: "Refutó el argumento.", exampleTranslation: "Argümanı çürüttü." },
    { id: 4, spanish: "conceder", turkish: "kabul etmek", pronunciation: "kon-se-DER", example: "Concedo ese punto.", exampleTranslation: "O noktayı kabul ediyorum." },
    { id: 5, spanish: "matizar", turkish: "nüanslamak", pronunciation: "ma-ti-SAR", example: "Hay que matizar la afirmación.", exampleTranslation: "İfadeyi nüanslamak gerekir." },
    { id: 6, spanish: "persuadir", turkish: "ikna etmek", pronunciation: "per-swa-DIR", example: "Logró persuadirme.", exampleTranslation: "Beni ikna etmeyi başardı." },
    { id: 7, spanish: "rebatir", turkish: "karşı çıkmak", pronunciation: "re-ba-TIR", example: "Rebatió mis puntos.", exampleTranslation: "Benim noktalara karşı çıktı." },
    { id: 8, spanish: "fundamentar", turkish: "temellendirmek", pronunciation: "fun-da-men-TAR", example: "Hay que fundamentar la opinión.", exampleTranslation: "Görüşü temellendirmek gerekir." },
    { id: 9, spanish: "consenso", turkish: "uzlaşı", pronunciation: "kon-SEN-so", example: "Llegaron a un consenso.", exampleTranslation: "Uzlaşıya vardılar." },
    { id: 10, spanish: "postura", turkish: "tutum", pronunciation: "pos-TU-ra", example: "¿Cuál es tu postura?", exampleTranslation: "Senin tutumun ne?" },
];

// ===== ÜNİTE 80: B2 Genel Tekrar =====
const unit80Words: B2VocabularyWord[] = [
    { id: 1, spanish: "dominio", turkish: "ustalık", pronunciation: "do-MI-nyo", example: "Tienes dominio del idioma.", exampleTranslation: "Dilde ustalığın var." },
    { id: 2, spanish: "fluidez", turkish: "akıcılık", pronunciation: "flu-i-DES", example: "Hablas con fluidez.", exampleTranslation: "Akıcı konuşuyorsun." },
    { id: 3, spanish: "matiz", turkish: "nüans", pronunciation: "ma-TIS", example: "Entiendes los matices.", exampleTranslation: "Nüansları anlıyorsun." },
    { id: 4, spanish: "registro", turkish: "kayıt/üslup", pronunciation: "re-HIS-tro", example: "Cambias de registro.", exampleTranslation: "Üslup değiştiriyorsun." },
    { id: 5, spanish: "modismo", turkish: "deyim", pronunciation: "mo-DIS-mo", example: "Usas modismos correctamente.", exampleTranslation: "Deyimleri doğru kullanıyorsun." },
    { id: 6, spanish: "jerga", turkish: "argo", pronunciation: "HER-ga", example: "Conoces la jerga.", exampleTranslation: "Argoyu biliyorsun." },
    { id: 7, spanish: "expresión idiomática", turkish: "deyimsel ifade", pronunciation: "eks-pre-SYON i-dyo-MA-ti-ka", example: "Esa es una expresión idiomática.", exampleTranslation: "Bu deyimsel bir ifade." },
    { id: 8, spanish: "nivel avanzado", turkish: "ileri seviye", pronunciation: "ni-VEL a-van-SA-do", example: "Estás en nivel avanzado.", exampleTranslation: "İleri seviyedesin." },
    { id: 9, spanish: "competencia", turkish: "yetkinlik", pronunciation: "kom-pe-TEN-sya", example: "Tu competencia es alta.", exampleTranslation: "Yetkinliğin yüksek." },
    { id: 10, spanish: "¡Felicidades!", turkish: "Tebrikler!", pronunciation: "fe-li-si-DA-des", example: "¡Felicidades! Has completado B2.", exampleTranslation: "Tebrikler! B2'yi tamamladın." },
];

// Ünite ID'sine göre kelime getir
export function getB2VocabularyForUnit(unitId: number): B2VocabularyWord[] {
    const vocabularies: { [key: number]: B2VocabularyWord[] } = {
        61: unit61Words, 62: unit62Words, 63: unit63Words, 64: unit64Words, 65: unit65Words,
        66: unit66Words, 67: unit67Words, 68: unit68Words, 69: unit69Words, 70: unit70Words,
        71: unit71Words, 72: unit72Words, 73: unit73Words, 74: unit74Words, 75: unit75Words,
        76: unit76Words, 77: unit77Words, 78: unit78Words, 79: unit79Words, 80: unit80Words
    };
    return vocabularies[unitId] || unit61Words;
}
