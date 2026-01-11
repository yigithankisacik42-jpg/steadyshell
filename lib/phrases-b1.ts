/**
 * LinguaFlow Kalıp Veritabanı - İspanyolca B1
 * 30 Ünite (ID: 61-90), her biri için 15 kalıp
 * Curriculum ile uyumlu
 */

export interface B1PhraseItem {
    target: string;
    native: string;
    pronunciation: string;
}

// ===== ÜNİTE 61: GELECEK ZAMAN =====
const unit61Phrases: B1PhraseItem[] = [
    { target: "Mañana trabajaré desde casa.", native: "Yarın evden çalışacağım.", pronunciation: "ma-NYA-na tra-ba-ha-RE" },
    { target: "El año que viene estudiaré en España.", native: "Gelecek yıl İspanya'da okuyacağım.", pronunciation: "el A-nyo ke VIE-ne" },
    { target: "¿Qué harás el próximo verano?", native: "Gelecek yaz ne yapacaksın?", pronunciation: "ke a-RAS el PROK-si-mo" },
    { target: "Pronto recibirás noticias.", native: "Yakında haber alacaksın.", pronunciation: "PRON-to re-si-bi-RAS" },
    { target: "Algún día seré famoso.", native: "Bir gün ünlü olacağım.", pronunciation: "al-GUN DI-a se-RE" },
    { target: "Este verano viajaremos a Italia.", native: "Bu yaz İtalya'ya seyahat edeceğiz.", pronunciation: "ES-te ve-RA-no" },
    { target: "Dentro de poco terminaré el proyecto.", native: "Kısa süre içinde projeyi bitireceğim.", pronunciation: "DEN-tro de PO-ko" },
    { target: "La semana que viene tendré un examen.", native: "Gelecek hafta sınavım olacak.", pronunciation: "la se-MA-na ke VIE-ne" },
    { target: "Mañana lloverá todo el día.", native: "Yarın bütün gün yağmur yağacak.", pronunciation: "ma-NYA-na yo-ve-RA" },
    { target: "¿Cuándo vendrás a visitarme?", native: "Beni ziyarete ne zaman geleceksin?", pronunciation: "KUAN-do ven-DRAS" },
    { target: "El mes próximo me mudaré.", native: "Gelecek ay taşınacağım.", pronunciation: "el mes PROK-si-mo" },
    { target: "Seguramente aprobarás el examen.", native: "Kesinlikle sınavı geçeceksin.", pronunciation: "se-gu-ra-MEN-te" },
    { target: "No te preocupes, todo saldrá bien.", native: "Endişelenme, her şey iyi olacak.", pronunciation: "TO-do sal-DRA bien" },
    { target: "El tren llegará a las cinco.", native: "Tren saat beşte gelecek.", pronunciation: "el tren ye-ga-RA" },
    { target: "¿Podrás ayudarme mañana?", native: "Yarın bana yardım edebilecek misin?", pronunciation: "pod-RAS a-yu-DAR-me" }
];

// ===== ÜNİTE 62: KOŞUL CÜMLELERİ 1 =====
const unit62Phrases: B1PhraseItem[] = [
    { target: "Si estudias, aprobarás.", native: "Çalışırsan geçersin.", pronunciation: "si es-TU-dias a-pro-ba-RAS" },
    { target: "Si llueve, no saldré.", native: "Yağmur yağarsa çıkmayacağım.", pronunciation: "si YUE-ve no sal-DRE" },
    { target: "Si tienes tiempo, ven a verme.", native: "Zamanın varsa beni görmeye gel.", pronunciation: "si TIE-nes TIEM-po" },
    { target: "Si me necesitas, llámame.", native: "Bana ihtiyacın olursa ara.", pronunciation: "si me ne-ce-SI-tas" },
    { target: "Si hace sol, iremos a la playa.", native: "Hava güneşli olursa plaja gideriz.", pronunciation: "si A-ce sol" },
    { target: "Si no te das prisa, perderás el tren.", native: "Acele etmezsen treni kaçırırsın.", pronunciation: "si no te das PRI-sa" },
    { target: "Si comes mucho, engordarás.", native: "Çok yersen kilo alırsın.", pronunciation: "si KO-mes MU-cho" },
    { target: "Si quieres, te ayudo.", native: "İstersen yardım ederim.", pronunciation: "si KIE-res te a-YU-do" },
    { target: "Si ves a Juan, dile hola.", native: "Juan'ı görürsen selam söyle.", pronunciation: "si ves a huan" },
    { target: "Si ahorras, podrás viajar.", native: "Biriktirirsen seyahat edebilirsin.", pronunciation: "si a-O-rras" },
    { target: "Si practicas, mejorarás.", native: "Pratik yaparsan gelişirsin.", pronunciation: "si PRAK-ti-kas" },
    { target: "Si llegas tarde, avisa.", native: "Geç kalırsan haber ver.", pronunciation: "si YE-gas TAR-de" },
    { target: "Si te duele, ve al médico.", native: "Ağrıyorsa doktora git.", pronunciation: "si te DUE-le" },
    { target: "Si terminas pronto, podemos salir.", native: "Erken bitirirsen çıkabiliriz.", pronunciation: "si ter-MI-nas PRON-to" },
    { target: "Si no entiendes, pregunta.", native: "Anlamazsan sor.", pronunciation: "si no en-TIEN-des" }
];

// ===== ÜNİTE 63: KOŞUL CÜMLELERİ 2 =====
const unit63Phrases: B1PhraseItem[] = [
    { target: "Si tuviera tiempo, iría contigo.", native: "Zamanım olsaydı seninle giderdim.", pronunciation: "si tu-VIE-ra TIEM-po" },
    { target: "Si fuera tú, no lo haría.", native: "Senin yerinde olsaydım yapmazdım.", pronunciation: "si FUE-ra tu" },
    { target: "Si supiera la respuesta, te la diría.", native: "Cevabı bilseydim söylerdim.", pronunciation: "si su-PIE-ra" },
    { target: "Si viviera en España, hablaría mejor.", native: "İspanya'da yaşasaydım daha iyi konuşurdum.", pronunciation: "si vi-VIE-ra" },
    { target: "Compraría esa casa si tuviera dinero.", native: "Param olsaydı o evi alırdım.", pronunciation: "kom-pra-RI-a E-sa" },
    { target: "Me gustaría conocerte mejor.", native: "Seni daha iyi tanımak isterdim.", pronunciation: "me gus-ta-RI-a" },
    { target: "¿Qué harías en mi situación?", native: "Benim durumumda ne yapardın?", pronunciation: "ke a-RI-as en mi" },
    { target: "Sería estupendo verte.", native: "Seni görmek harika olurdu.", pronunciation: "se-RI-a es-tu-PEN-do" },
    { target: "Podríamos ir al cine.", native: "Sinemaya gidebilirdik.", pronunciation: "pod-RI-a-mos ir" },
    { target: "Deberías estudiar más.", native: "Daha çok çalışmalısın.", pronunciation: "de-be-RI-as" },
    { target: "Si pudieras viajar, ¿a dónde irías?", native: "Seyahat edebilsen nereye giderdin?", pronunciation: "si pu-DIE-ras" },
    { target: "Yo que tú, tendría cuidado.", native: "Senin yerinde olsam dikkatli olurdum.", pronunciation: "yo ke tu" },
    { target: "Estaría feliz si vinieras.", native: "Gelsen mutlu olurdum.", pronunciation: "es-ta-RI-a fe-LIS" },
    { target: "Haría cualquier cosa por ti.", native: "Senin için her şeyi yapardım.", pronunciation: "a-RI-a kual-KIER" },
    { target: "Si no fuera tan caro, lo compraría.", native: "Bu kadar pahalı olmasa alırdım.", pronunciation: "si no FUE-ra tan" }
];

// ===== ÜNİTE 64: SUBJUNTİVO GİRİŞ =====
const unit64Phrases: B1PhraseItem[] = [
    { target: "Espero que te mejores pronto.", native: "Umarım yakında iyileşirsin.", pronunciation: "es-PE-ro ke te me-HO-res" },
    { target: "Quiero que seas feliz.", native: "Mutlu olmanı istiyorum.", pronunciation: "KIE-ro ke SE-as" },
    { target: "Dudo que venga a tiempo.", native: "Zamanında geleceğinden şüpheliyim.", pronunciation: "DU-do ke VEN-ga" },
    { target: "Ojalá no llueva mañana.", native: "İnşallah yarın yağmur yağmaz.", pronunciation: "o-ha-LA no YUE-va" },
    { target: "Te aconsejo que estudies más.", native: "Daha çok çalışmanı tavsiye ederim.", pronunciation: "te a-kon-SE-ho ke" },
    { target: "Es posible que llegue tarde.", native: "Geç kalmam mümkün.", pronunciation: "es po-SI-ble ke" },
    { target: "Es necesario que descanses.", native: "Dinlenmen gerekli.", pronunciation: "es ne-se-SA-rio ke" },
    { target: "Me alegro de que estés aquí.", native: "Burada olmana sevindim.", pronunciation: "me a-LE-gro de ke" },
    { target: "Siento que estés triste.", native: "Üzgün olmana üzüldüm.", pronunciation: "SIEN-to ke es-TES" },
    { target: "No creo que pueda venir.", native: "Gelebileceğini sanmıyorum.", pronunciation: "no KRE-o ke PUE-da" },
    { target: "Es importante que escuches.", native: "Dinlemen önemli.", pronunciation: "es im-por-TAN-te ke" },
    { target: "Cuando tengas tiempo, háblame.", native: "Zamanın olunca benimle konuş.", pronunciation: "KUAN-do TEN-gas" },
    { target: "Antes de que te vayas, firma.", native: "Gitmeden önce imzala.", pronunciation: "AN-tes de ke te VA-yas" },
    { target: "Para que lo sepas.", native: "Bilesin diye.", pronunciation: "PA-ra ke lo SE-pas" },
    { target: "A menos que tengas otra idea.", native: "Başka bir fikrin yoksa.", pronunciation: "a ME-nos ke TEN-gas" }
];

// ===== ÜNİTE 65: HABERLER VE MEDYA =====
const unit65Phrases: B1PhraseItem[] = [
    { target: "¿Has visto las noticias?", native: "Haberleri gördün mü?", pronunciation: "as VIS-to las no-TI-cias" },
    { target: "Leí el periódico esta mañana.", native: "Bu sabah gazeteyi okudum.", pronunciation: "le-I el pe-RI-o-di-ko" },
    { target: "Es una buena noticia.", native: "Bu iyi bir haber.", pronunciation: "es u-na BUE-na no-TI-cia" },
    { target: "Lo vi en las noticias.", native: "Haberlerde gördüm.", pronunciation: "lo vi en las no-TI-cias" },
    { target: "La prensa habla de ello.", native: "Basın bundan bahsediyor.", pronunciation: "la PREN-sa AB-la" },
    { target: "Es un rumor sin confirmar.", native: "Doğrulanmamış bir söylenti.", pronunciation: "es un ru-MOR sin" },
    { target: "La información es falsa.", native: "Bilgi yanlış.", pronunciation: "la in-for-ma-SION es" },
    { target: "Hubo una rueda de prensa.", native: "Basın toplantısı yapıldı.", pronunciation: "U-bo u-na RUE-da" },
    { target: "El periodista entrevistó al ministro.", native: "Gazeteci bakanla röportaj yaptı.", pronunciation: "el pe-rio-DIS-ta" },
    { target: "Es noticia de última hora.", native: "Son dakika haberi.", pronunciation: "es no-TI-cia de UL-ti-ma" },
    { target: "Los medios informan del suceso.", native: "Medya olayı haberleştiriyor.", pronunciation: "los ME-dios in-FOR-man" },
    { target: "Las fake news son peligrosas.", native: "Yalan haberler tehlikelidir.", pronunciation: "las fake news son" },
    { target: "La libertad de prensa es vital.", native: "Basın özgürlüğü hayatidir.", pronunciation: "la li-ber-TAD de PREN-sa" },
    { target: "Sigo las noticias por internet.", native: "Haberleri internetten takip ediyorum.", pronunciation: "SI-go las no-TI-cias" },
    { target: "El reportaje fue muy interesante.", native: "Haber çok ilginçti.", pronunciation: "el re-por-TA-he fue" }
];

// ===== ÜNİTE 66: ÇEVRE SORUNLARI =====
const unit66Phrases: B1PhraseItem[] = [
    { target: "El cambio climático es real.", native: "İklim değişikliği gerçek.", pronunciation: "el KAM-bio kli-MA-ti-ko" },
    { target: "La contaminación es un problema grave.", native: "Kirlilik ciddi bir sorun.", pronunciation: "la kon-ta-mi-na-SION" },
    { target: "La sequía afecta a muchos países.", native: "Kuraklık birçok ülkeyi etkiliyor.", pronunciation: "la se-KI-a a-FEK-ta" },
    { target: "Los glaciares se están derritiendo.", native: "Buzullar eriyor.", pronunciation: "los gla-CIA-res" },
    { target: "La deforestación avanza rápido.", native: "Ormansızlaşma hızla ilerliyor.", pronunciation: "la de-fo-res-ta-SION" },
    { target: "El efecto invernadero es peligroso.", native: "Sera etkisi tehlikeli.", pronunciation: "el e-FEK-to in-ver-na-DE-ro" },
    { target: "La capa de ozono se daña.", native: "Ozon tabakası zarar görüyor.", pronunciation: "la KA-pa de o-SO-no" },
    { target: "Los residuos tóxicos contaminan.", native: "Zehirli atıklar kirletiyor.", pronunciation: "los re-SI-duos TOK-si-kos" },
    { target: "Hay que reducir las emisiones.", native: "Emisyonları azaltmak lazım.", pronunciation: "ay ke re-du-SIR" },
    { target: "El plástico daña los océanos.", native: "Plastik okyanuslara zarar veriyor.", pronunciation: "el PLAS-ti-ko DA-nya" },
    { target: "Debemos proteger la naturaleza.", native: "Doğayı korumalıyız.", pronunciation: "de-BE-mos pro-te-HER" },
    { target: "La biodiversidad está en peligro.", native: "Biyoçeşitlilik tehlikede.", pronunciation: "la bio-di-ver-si-DAD" },
    { target: "El aire de la ciudad es malo.", native: "Şehrin havası kötü.", pronunciation: "el AI-re de la ciu-DAD" },
    { target: "Los incendios forestales aumentan.", native: "Orman yangınları artıyor.", pronunciation: "los in-CEN-dios" },
    { target: "Necesitamos energías limpias.", native: "Temiz enerjilere ihtiyacımız var.", pronunciation: "ne-ce-si-TA-mos" }
];

// ===== ÜNİTE 67: SÜRDÜRÜLEBİLİRLİK =====
const unit67Phrases: B1PhraseItem[] = [
    { target: "Reciclamos papel y plástico.", native: "Kağıt ve plastik geri dönüştürüyoruz.", pronunciation: "re-si-KLA-mos pa-PEL" },
    { target: "Usamos energía solar.", native: "Güneş enerjisi kullanıyoruz.", pronunciation: "u-SA-mos e-ner-HI-a" },
    { target: "El desarrollo sostenible es clave.", native: "Sürdürülebilir kalkınma çok önemli.", pronunciation: "el de-sa-RRO-yo" },
    { target: "Evitamos el plástico de un solo uso.", native: "Tek kullanımlık plastikten kaçınıyoruz.", pronunciation: "e-vi-TA-mos el PLAS-ti-ko" },
    { target: "Ahorramos agua y energía.", native: "Su ve enerji tasarrufu yapıyoruz.", pronunciation: "a-o-RRA-mos A-gua" },
    { target: "Productos biodegradables son mejores.", native: "Biyobozunur ürünler daha iyi.", pronunciation: "pro-DUK-tos bio-de-gra-DA-bles" },
    { target: "El turismo sostenible crece.", native: "Sürdürülebilir turizm büyüyor.", pronunciation: "el tu-RIS-mo" },
    { target: "Reutilizamos los envases.", native: "Kapları yeniden kullanıyoruz.", pronunciation: "re-u-ti-li-SA-mos" },
    { target: "El comercio justo ayuda.", native: "Adil ticaret yardımcı oluyor.", pronunciation: "el ko-MER-cio HUS-to" },
    { target: "Reducimos el desperdicio.", native: "İsrafı azaltıyoruz.", pronunciation: "re-du-SI-mos el des-per-DI-cio" },
    { target: "La economía circular funciona.", native: "Döngüsel ekonomi işe yarıyor.", pronunciation: "la e-ko-no-MI-a" },
    { target: "Plantamos árboles cada año.", native: "Her yıl ağaç dikiyoruz.", pronunciation: "plan-TA-mos AR-bo-les" },
    { target: "El futuro es verde.", native: "Gelecek yeşil.", pronunciation: "el fu-TU-ro es VER-de" },
    { target: "Consumo responsable y consciente.", native: "Sorumlu ve bilinçli tüketim.", pronunciation: "kon-SU-mo res-pon-SA-ble" },
    { target: "Cero emisiones es la meta.", native: "Sıfır emisyon hedef.", pronunciation: "CE-ro e-mi-SIO-nes" }
];

// ===== ÜNİTE 68: KÜLTÜR VE GELENEKLER =====
const unit68Phrases: B1PhraseItem[] = [
    { target: "La siesta es tradición española.", native: "Siesta İspanyol geleneği.", pronunciation: "la SIES-ta es tra-di-SION" },
    { target: "Comemos las doce uvas en Nochevieja.", native: "Yılbaşında 12 üzüm yiyoruz.", pronunciation: "ko-ME-mos las DO-ce" },
    { target: "La Semana Santa es impresionante.", native: "Kutsal Hafta etkileyici.", pronunciation: "la se-MA-na SAN-ta" },
    { target: "Ir de tapas es muy común.", native: "Tapas yemeye gitmek çok yaygın.", pronunciation: "ir de TA-pas es" },
    { target: "El flamenco es arte español.", native: "Flamenko İspanyol sanatı.", pronunciation: "el fla-MEN-ko es" },
    { target: "Los toros son polémicos.", native: "Boğa güreşleri tartışmalı.", pronunciation: "los TO-ros son po-LE-mi-kos" },
    { target: "Celebramos muchos festivales.", native: "Birçok festival kutluyoruz.", pronunciation: "ce-le-BRA-mos MU-chos" },
    { target: "La sobremesa dura horas.", native: "Yemek sonrası sohbet saatlerce sürer.", pronunciation: "la so-bre-ME-sa" },
    { target: "Saludamos con dos besos.", native: "İki öpücükle selamlaşıyoruz.", pronunciation: "sa-lu-DA-mos kon dos" },
    { target: "La gastronomía española es variada.", native: "İspanyol mutfağı çeşitli.", pronunciation: "la gas-tro-no-MI-a" },
    { target: "Las fiestas del pueblo son divertidas.", native: "Köy şenlikleri eğlenceli.", pronunciation: "las FIES-tas del PUE-blo" },
    { target: "El patrimonio cultural es rico.", native: "Kültürel miras zengin.", pronunciation: "el pa-tri-MO-nio" },
    { target: "Las corridas son tradición.", native: "Boğa güreşleri gelenektir.", pronunciation: "las ko-RRI-das" },
    { target: "La Tomatina es famosa mundialmente.", native: "Tomatina dünya çapında ünlü.", pronunciation: "la to-ma-TI-na" },
    { target: "San Fermín atrae turistas.", native: "San Fermín turistleri çekiyor.", pronunciation: "san fer-MIN a-TRA-e" }
];

// ===== ÜNİTE 69: EKONOMİ TEMELLERİ =====
const unit69Phrases: B1PhraseItem[] = [
    { target: "La inflación ha subido mucho.", native: "Enflasyon çok yükseldi.", pronunciation: "la in-fla-SION a su-BI-do" },
    { target: "El desempleo es un problema.", native: "İşsizlik bir sorun.", pronunciation: "el des-em-PLE-o es" },
    { target: "Oferta y demanda regulan precios.", native: "Arz ve talep fiyatları belirler.", pronunciation: "o-FER-ta i de-MAN-da" },
    { target: "El PIB creció este año.", native: "GSYİH bu yıl büyüdü.", pronunciation: "el pib kre-CIO" },
    { target: "Invertir en bolsa es arriesgado.", native: "Borsaya yatırım riskli.", pronunciation: "in-ver-TIR en BOL-sa" },
    { target: "Los impuestos financian servicios.", native: "Vergiler hizmetleri finanse eder.", pronunciation: "los im-PUES-tos" },
    { target: "La deuda pública aumenta.", native: "Kamu borcu artıyor.", pronunciation: "la DEU-da PU-bli-ka" },
    { target: "El banco central sube tipos.", native: "Merkez bankası faiz artırıyor.", pronunciation: "el BAN-ko cen-TRAL" },
    { target: "La moneda se devaluó.", native: "Para birimi değer kaybetti.", pronunciation: "la mo-NE-da se" },
    { target: "Hay crisis económica.", native: "Ekonomik kriz var.", pronunciation: "ay KRI-sis e-ko-NO-mi-ka" },
    { target: "El mercado de valores fluctúa.", native: "Borsa dalgalanıyor.", pronunciation: "el mer-KA-do de va-LO-res" },
    { target: "La exportación genera ingresos.", native: "İhracat gelir getiriyor.", pronunciation: "la eks-por-ta-SION" },
    { target: "El poder adquisitivo baja.", native: "Satın alma gücü düşüyor.", pronunciation: "el po-DER ad-ki-si-TI-vo" },
    { target: "Ahorro para el futuro.", native: "Gelecek için biriktiriyorum.", pronunciation: "a-O-rro PA-ra el" },
    { target: "El presupuesto es limitado.", native: "Bütçe sınırlı.", pronunciation: "el pre-su-PUES-to" }
];

// ===== ÜNİTE 70: BANKACILIK =====
const unit70Phrases: B1PhraseItem[] = [
    { target: "Quiero abrir una cuenta.", native: "Hesap açmak istiyorum.", pronunciation: "KIE-ro a-BRIR u-na" },
    { target: "Necesito hacer una transferencia.", native: "Havale yapmam gerekiyor.", pronunciation: "ne-ce-SI-to a-CER" },
    { target: "¿Cuál es el tipo de cambio?", native: "Döviz kuru nedir?", pronunciation: "KUAL es el TI-po" },
    { target: "Sacar dinero del cajero.", native: "Bankamatikten para çekmek.", pronunciation: "sa-KAR di-NE-ro" },
    { target: "Quiero ingresar dinero.", native: "Para yatırmak istiyorum.", pronunciation: "KIE-ro in-gre-SAR" },
    { target: "Solicito un préstamo personal.", native: "Kişisel kredi başvurusu yapıyorum.", pronunciation: "so-LI-ci-to un PRES-ta-mo" },
    { target: "Tarjeta de crédito o débito.", native: "Kredi veya banka kartı.", pronunciation: "tar-HE-ta de KRE-di-to" },
    { target: "Consulto el saldo online.", native: "Bakiyeyi online sorguluyorum.", pronunciation: "kon-SUL-to el SAL-do" },
    { target: "Pago las facturas mensuales.", native: "Aylık faturaları ödüyorum.", pronunciation: "PA-go las fak-TU-ras" },
    { target: "Las comisiones son altas.", native: "Komisyonlar yüksek.", pronunciation: "las ko-mi-SIO-nes" },
    { target: "Tengo cuenta de ahorros.", native: "Tasarruf hesabım var.", pronunciation: "TEN-go KUEN-ta de" },
    { target: "Bloquearon mi tarjeta.", native: "Kartımı bloke ettiler.", pronunciation: "blo-ke-A-ron mi" },
    { target: "Uso banca en línea.", native: "İnternet bankacılığı kullanıyorum.", pronunciation: "U-so BAN-ka en" },
    { target: "El interés es muy bajo.", native: "Faiz çok düşük.", pronunciation: "el in-te-RES es" },
    { target: "Domicilio los pagos automáticos.", native: "Otomatik ödemeler ayarlıyorum.", pronunciation: "do-mi-CI-lio los" }
];

// ===== ÜNİTE 71: TARTIŞMA BECERİLERİ =====
const unit71Phrases: B1PhraseItem[] = [
    { target: "Desde mi punto de vista...", native: "Benim bakış açımdan...", pronunciation: "DES-de mi PUN-to de VIS-ta" },
    { target: "Estoy totalmente de acuerdo.", native: "Tamamen aynı fikirdeyim.", pronunciation: "es-TOY to-tal-MEN-te" },
    { target: "No estoy de acuerdo contigo.", native: "Seninle aynı fikirde değilim.", pronunciation: "no es-TOY de a-KUER-do" },
    { target: "Creo que tienes razón.", native: "Haklı olduğunu düşünüyorum.", pronunciation: "KRE-o ke TIE-nes" },
    { target: "Entiendo tu postura, pero...", native: "Tutumunu anlıyorum ama...", pronunciation: "en-TIEN-do tu pos-TU-ra" },
    { target: "Permíteme explicar mi opinión.", native: "Görüşümü açıklamamıza izin ver.", pronunciation: "per-MI-te-me eks-pli-KAR" },
    { target: "Por un lado... por otro lado...", native: "Bir yandan... öte yandan...", pronunciation: "por un LA-do" },
    { target: "Es un tema controvertido.", native: "Tartışmalı bir konu.", pronunciation: "es un TE-ma" },
    { target: "¿Podrías darme un ejemplo?", native: "Bana bir örnek verir misin?", pronunciation: "pod-RI-as DAR-me" },
    { target: "En mi opinión personal...", native: "Kişisel görüşüme göre...", pronunciation: "en mi o-pi-NION" },
    { target: "Respeto tu opinión.", native: "Görüşüne saygı duyuyorum.", pronunciation: "res-PE-to tu o-pi-NION" },
    { target: "Déjame pensarlo un momento.", native: "Bir an düşünmeme izin ver.", pronunciation: "DE-ha-me pen-SAR-lo" },
    { target: "Hay pros y contras.", native: "Artıları ve eksileri var.", pronunciation: "ay pros i KON-tras" },
    { target: "En resumen, diría que...", native: "Özetle, derdim ki...", pronunciation: "en re-SU-men di-RI-a" },
    { target: "Es una cuestión de perspectiva.", native: "Bu bir bakış açısı meselesi.", pronunciation: "es u-na kues-TION" }
];

// ===== ÜNİTE 72: SUNUM YAPMA =====
const unit72Phrases: B1PhraseItem[] = [
    { target: "Buenos días, hoy presentaré...", native: "Günaydın, bugün sunacağım...", pronunciation: "BUE-nos DI-as oy" },
    { target: "El tema de mi presentación es...", native: "Sunumumun konusu...", pronunciation: "el TE-ma de mi" },
    { target: "Primero, veremos los datos.", native: "İlk olarak verilere bakacağız.", pronunciation: "pri-ME-ro ve-RE-mos" },
    { target: "Como pueden ver en el gráfico...", native: "Grafikte görebileceğiniz gibi...", pronunciation: "KO-mo PUE-den ver" },
    { target: "Pasemos al siguiente punto.", native: "Bir sonraki noktaya geçelim.", pronunciation: "pa-SE-mos al si-GUIEN-te" },
    { target: "Quisiera destacar que...", native: "Şunu vurgulamak isterim...", pronunciation: "ki-SIE-ra des-ta-KAR" },
    { target: "Por ejemplo...", native: "Örneğin...", pronunciation: "por e-HEM-plo" },
    { target: "En resumen...", native: "Özetle...", pronunciation: "en re-SU-men" },
    { target: "Para concluir...", native: "Sonuç olarak...", pronunciation: "PA-ra kon-KLUIR" },
    { target: "¿Tienen alguna pregunta?", native: "Sorunuz var mı?", pronunciation: "TIE-nen al-GU-na" },
    { target: "Gracias por su atención.", native: "İlginiz için teşekkürler.", pronunciation: "GRA-sias por su" },
    { target: "Esto nos lleva a...", native: "Bu bizi ...'ya götürüyor.", pronunciation: "ES-to nos YE-va a" },
    { target: "Es un dato muy relevante.", native: "Çok önemli bir veri.", pronunciation: "es un DA-to" },
    { target: "Analizaremos las causas.", native: "Nedenleri analiz edeceğiz.", pronunciation: "a-na-li-sa-RE-mos" },
    { target: "Las conclusiones son claras.", native: "Sonuçlar açık.", pronunciation: "las kon-klu-SIO-nes" }
];

// ===== ÜNİTE 73: EDEBİYAT 1 =====
const unit73Phrases: B1PhraseItem[] = [
    { target: "Esta novela es un clásico.", native: "Bu roman bir klasik.", pronunciation: "ES-ta no-VE-la es" },
    { target: "El autor ganó el Premio Nobel.", native: "Yazar Nobel Ödülü kazandı.", pronunciation: "el au-TOR ga-NO" },
    { target: "La trama es muy interesante.", native: "Olay örgüsü çok ilginç.", pronunciation: "la TRA-ma es mui" },
    { target: "El protagonista es complejo.", native: "Başkahraman karmaşık.", pronunciation: "el pro-ta-go-NIS-ta" },
    { target: "Don Quijote es famoso mundialmente.", native: "Don Kişot dünyaca ünlü.", pronunciation: "don ki-HO-te es" },
    { target: "Me encanta leer poesía.", native: "Şiir okumaya bayılıyorum.", pronunciation: "me en-KAN-ta le-ER" },
    { target: "Es una obra maestra.", native: "Bir başyapıt.", pronunciation: "es u-na O-bra ma-ES-tra" },
    { target: "El final fue inesperado.", native: "Sonu beklenmedikti.", pronunciation: "el fi-NAL fue" },
    { target: "García Márquez es genial.", native: "García Márquez dahiydi.", pronunciation: "gar-CI-a MAR-kes" },
    { target: "Leo antes de dormir.", native: "Uyumadan önce okurum.", pronunciation: "LE-o AN-tes de" },
    { target: "La literatura española es rica.", native: "İspanyol edebiyatı zengin.", pronunciation: "la li-te-ra-TU-ra" },
    { target: "Es un cuento corto.", native: "Kısa bir hikaye.", pronunciation: "es un KUEN-to KOR-to" },
    { target: "La biblioteca tiene muchos libros.", native: "Kütüphanede çok kitap var.", pronunciation: "la bi-blio-TE-ka" },
    { target: "Es un género literario.", native: "Bir edebi tür.", pronunciation: "es un HE-ne-ro" },
    { target: "Describe los sentimientos muy bien.", native: "Duyguları çok iyi anlatıyor.", pronunciation: "des-KRI-be los" }
];

// ===== ÜNİTE 74: ŞİİR VE ŞARKI =====
const unit74Phrases: B1PhraseItem[] = [
    { target: "Esta canción es pegadiza.", native: "Bu şarkı akılda kalıcı.", pronunciation: "ES-ta kan-SION es" },
    { target: "La letra es muy profunda.", native: "Sözleri çok derin.", pronunciation: "la LE-tra es mui" },
    { target: "El poema rima muy bien.", native: "Şiir çok güzel kafiyeli.", pronunciation: "el po-E-ma RI-ma" },
    { target: "Me gusta el ritmo.", native: "Ritmi seviyorum.", pronunciation: "me GUS-ta el RIT-mo" },
    { target: "El cantante tiene buena voz.", native: "Şarkıcının sesi güzel.", pronunciation: "el kan-TAN-te" },
    { target: "Es una balada romántica.", native: "Romantik bir balad.", pronunciation: "es u-na ba-LA-da" },
    { target: "Aprendo español con canciones.", native: "Şarkılarla İspanyolca öğreniyorum.", pronunciation: "a-PREN-do es-pa-NYOL" },
    { target: "El estribillo se repite.", native: "Nakarat tekrarlanıyor.", pronunciation: "el es-tri-BI-yo" },
    { target: "Escribió un poema de amor.", native: "Bir aşk şiiri yazdı.", pronunciation: "es-kri-BIO un po-E-ma" },
    { target: "La melodía es triste.", native: "Melodi hüzünlü.", pronunciation: "la me-lo-DI-a es" },
    { target: "Toco la guitarra.", native: "Gitar çalıyorum.", pronunciation: "TO-ko la gi-TA-rra" },
    { target: "García Lorca escribió poesía.", native: "García Lorca şiir yazdı.", pronunciation: "gar-CI-a LOR-ka" },
    { target: "La música me relaja.", native: "Müzik beni rahatlatıyor.", pronunciation: "la MU-si-ka me" },
    { target: "Cantamos en el coro.", native: "Koroda şarkı söylüyoruz.", pronunciation: "kan-TA-mos en el" },
    { target: "Es verso libre.", native: "Serbest nazım.", pronunciation: "es VER-so LI-bre" }
];

// ===== ÜNİTE 75: TARİH VE POLİTİKA =====
const unit75Phrases: B1PhraseItem[] = [
    { target: "La historia nos enseña mucho.", native: "Tarih bize çok şey öğretir.", pronunciation: "la is-TO-ria nos" },
    { target: "Hubo una guerra civil.", native: "Bir iç savaş oldu.", pronunciation: "U-bo u-na GUE-rra" },
    { target: "El rey abdicó en 2014.", native: "Kral 2014'te tahttan çekildi.", pronunciation: "el rey ab-di-KO" },
    { target: "Firmaron un tratado de paz.", native: "Barış antlaşması imzaladılar.", pronunciation: "fir-MA-ron un tra-TA-do" },
    { target: "La constitución fue aprobada.", native: "Anayasa onaylandı.", pronunciation: "la kon-sti-tu-SION" },
    { target: "Descubrieron América en 1492.", native: "1492'de Amerika'yı keşfettiler.", pronunciation: "des-ku-BRIE-ron" },
    { target: "La revolución cambió todo.", native: "Devrim her şeyi değiştirdi.", pronunciation: "la re-vo-lu-SION" },
    { target: "El presidente fue elegido.", native: "Başkan seçildi.", pronunciation: "el pre-si-DEN-te" },
    { target: "Lucharon por la independencia.", native: "Bağımsızlık için savaştılar.", pronunciation: "lu-CHA-ron por" },
    { target: "Es un hecho histórico importante.", native: "Önemli bir tarihi olay.", pronunciation: "es un E-cho is-TO-ri-ko" },
    { target: "La democracia es fundamental.", native: "Demokrasi temeldir.", pronunciation: "la de-mo-KRA-sia" },
    { target: "El imperio romano cayó.", native: "Roma İmparatorluğu yıkıldı.", pronunciation: "el im-PE-rio ro-MA-no" },
    { target: "La transición española fue pacífica.", native: "İspanyol geçişi barışçıldı.", pronunciation: "la tran-si-SION" },
    { target: "Votamos en las elecciones.", native: "Seçimlerde oy veririz.", pronunciation: "vo-TA-mos en las" },
    { target: "El debate político fue intenso.", native: "Siyasi tartışma yoğundu.", pronunciation: "el de-BA-te" }
];

// ===== ÜNİTE 76: HUKUK TEMELLERİ =====
const unit76Phrases: B1PhraseItem[] = [
    { target: "Todos tenemos derechos.", native: "Hepimizin hakları var.", pronunciation: "TO-dos te-NE-mos de-RE-chos" },
    { target: "La ley es para todos.", native: "Kanun herkes içindir.", pronunciation: "la ley es PA-ra" },
    { target: "Necesito un abogado.", native: "Avukata ihtiyacım var.", pronunciation: "ne-ce-SI-to un a-bo-GA-do" },
    { target: "El juez dictó sentencia.", native: "Hakim karar verdi.", pronunciation: "el hues dik-TO" },
    { target: "Tengo derecho a un abogado.", native: "Avukat hakkım var.", pronunciation: "TEN-go de-RE-cho" },
    { target: "Es inocente hasta que se demuestre.", native: "Aksi ispat edilene kadar masum.", pronunciation: "es i-no-CEN-te" },
    { target: "El contrato es legal.", native: "Sözleşme yasal.", pronunciation: "el kon-TRA-to es" },
    { target: "Firmé un documento oficial.", native: "Resmi belge imzaladım.", pronunciation: "fir-ME un do-ku-MEN-to" },
    { target: "Denuncié el robo.", native: "Hırsızlığı ihbar ettim.", pronunciation: "de-nun-CIE el RO-bo" },
    { target: "La libertad es fundamental.", native: "Özgürlük temeldir.", pronunciation: "la li-ber-TAD es" },
    { target: "El tribunal decidirá.", native: "Mahkeme karar verecek.", pronunciation: "el tri-bu-NAL" },
    { target: "Es una violación de derechos.", native: "Bu bir hak ihlali.", pronunciation: "es u-na vio-la-SION" },
    { target: "La justicia es ciega.", native: "Adalet kördür.", pronunciation: "la hus-TI-cia es" },
    { target: "Pagué una multa.", native: "Ceza ödedim.", pronunciation: "pa-GUE u-na MUL-ta" },
    { target: "El delito es grave.", native: "Suç ciddi.", pronunciation: "el de-LI-to es" }
];

// ===== ÜNİTE 77: BİLİM VE TEKNOLOJİ =====
const unit77Phrases: B1PhraseItem[] = [
    { target: "La inteligencia artificial avanza.", native: "Yapay zeka ilerliyor.", pronunciation: "la in-te-li-HEN-cia" },
    { target: "Los científicos descubrieron algo.", native: "Bilim insanları bir şey keşfettiler.", pronunciation: "los cien-TI-fi-kos" },
    { target: "La tecnología cambia nuestras vidas.", native: "Teknoloji hayatımızı değiştiriyor.", pronunciation: "la tek-no-lo-HI-a" },
    { target: "El experimento fue exitoso.", native: "Deney başarılı oldu.", pronunciation: "el eks-pe-ri-MEN-to" },
    { target: "Investigamos nuevos métodos.", native: "Yeni yöntemler araştırıyoruz.", pronunciation: "in-ves-ti-GA-mos" },
    { target: "El robot hace el trabajo.", native: "Robot işi yapıyor.", pronunciation: "el RO-bot A-ce" },
    { target: "La medicina ha avanzado mucho.", native: "Tıp çok ilerledi.", pronunciation: "la me-di-CI-na" },
    { target: "Usamos energía renovable.", native: "Yenilenebilir enerji kullanıyoruz.", pronunciation: "u-SA-mos e-ner-HI-a" },
    { target: "El laboratorio está equipado.", native: "Laboratuvar donanımlı.", pronunciation: "el la-bo-ra-TO-rio" },
    { target: "La hipótesis fue confirmada.", native: "Hipotez doğrulandı.", pronunciation: "la i-PO-te-sis" },
    { target: "El internet conecta el mundo.", native: "İnternet dünyayı birleştiriyor.", pronunciation: "el in-ter-NET ko-NEK-ta" },
    { target: "Los datos son importantes.", native: "Veriler önemli.", pronunciation: "los DA-tos son" },
    { target: "El algoritmo funciona bien.", native: "Algoritma iyi çalışıyor.", pronunciation: "el al-go-RIT-mo" },
    { target: "Hay un avance científico.", native: "Bilimsel bir ilerleme var.", pronunciation: "ay un a-VAN-ce" },
    { target: "La innovación es clave.", native: "Yenilik çok önemli.", pronunciation: "la i-no-va-SION" }
];

// ===== ÜNİTE 78: SAĞLIK VE BESLENME =====
const unit78Phrases: B1PhraseItem[] = [
    { target: "Una dieta equilibrada es importante.", native: "Dengeli beslenme önemli.", pronunciation: "u-na DIE-ta e-ki-li-BRA-da" },
    { target: "Hago ejercicio regularmente.", native: "Düzenli egzersiz yapıyorum.", pronunciation: "A-go e-her-CI-cio" },
    { target: "Evito las grasas saturadas.", native: "Doymuş yağlardan kaçınıyorum.", pronunciation: "e-VI-to las GRA-sas" },
    { target: "Duermo ocho horas diarias.", native: "Günde sekiz saat uyuyorum.", pronunciation: "DUER-mo O-cho" },
    { target: "Bebo suficiente agua.", native: "Yeterince su içiyorum.", pronunciation: "BE-bo su-fi-CIEN-te" },
    { target: "Como frutas y verduras.", native: "Meyve ve sebze yiyorum.", pronunciation: "KO-mo FRU-tas" },
    { target: "Reduzco el azúcar.", native: "Şekeri azaltıyorum.", pronunciation: "re-DU-sko el a-SU-kar" },
    { target: "Evito el estrés.", native: "Stresten kaçınıyorum.", pronunciation: "e-VI-to el es-TRES" },
    { target: "La salud mental es importante.", native: "Ruh sağlığı önemli.", pronunciation: "la sa-LUD men-TAL" },
    { target: "Hago chequeos médicos anuales.", native: "Yıllık sağlık kontrolü yaptırıyorum.", pronunciation: "A-go che-KE-os" },
    { target: "Evito el tabaco y el alcohol.", native: "Sigara ve alkolden kaçınıyorum.", pronunciation: "e-VI-to el ta-BA-ko" },
    { target: "Tomo vitaminas.", native: "Vitamin alıyorum.", pronunciation: "TO-mo vi-ta-MI-nas" },
    { target: "Cocino en casa.", native: "Evde yemek yapıyorum.", pronunciation: "ko-CI-no en KA-sa" },
    { target: "Camino cada día.", native: "Her gün yürüyorum.", pronunciation: "ka-MI-no KA-da" },
    { target: "La prevención es importante.", native: "Önleme önemli.", pronunciation: "la pre-ven-SION" }
];

// ===== ÜNİTE 79: PSİKOLOJİ TEMELLERİ =====
const unit79Phrases: B1PhraseItem[] = [
    { target: "La salud mental es fundamental.", native: "Ruh sağlığı temeldir.", pronunciation: "la sa-LUD men-TAL" },
    { target: "Buscar ayuda no es debilidad.", native: "Yardım aramak zayıflık değil.", pronunciation: "bus-KAR a-YU-da" },
    { target: "Me siento ansioso a veces.", native: "Bazen kaygılı hissediyorum.", pronunciation: "me SIEN-to an-SIO-so" },
    { target: "La terapia me ayuda mucho.", native: "Terapi bana çok yardımcı oluyor.", pronunciation: "la te-RA-pia me" },
    { target: "Practico la meditación.", native: "Meditasyon yapıyorum.", pronunciation: "PRAK-ti-ko la" },
    { target: "El estrés afecta la salud.", native: "Stres sağlığı etkiler.", pronunciation: "el es-TRES a-FEK-ta" },
    { target: "Hablo de mis sentimientos.", native: "Duygularım hakkında konuşuyorum.", pronunciation: "AB-lo de mis" },
    { target: "Respiro profundamente.", native: "Derin nefes alıyorum.", pronunciation: "res-PI-ro pro-fun-da-MEN-te" },
    { target: "El autocuidado es importante.", native: "Öz bakım önemli.", pronunciation: "el au-to-kui-DA-do" },
    { target: "Tomo descansos regulares.", native: "Düzenli molalar veriyorum.", pronunciation: "TO-mo des-KAN-sos" },
    { target: "Paso tiempo con seres queridos.", native: "Sevdiklerimle vakit geçiriyorum.", pronunciation: "PA-so TIEM-po" },
    { target: "Reconozco mis emociones.", native: "Duygularımı tanıyorum.", pronunciation: "re-ko-NOS-ko mis" },
    { target: "Tengo un buen equilibrio.", native: "İyi bir dengem var.", pronunciation: "TEN-go un buen" },
    { target: "Me cuido a mí mismo.", native: "Kendime bakıyorum.", pronunciation: "me KUI-do a mi" },
    { target: "Pido ayuda cuando la necesito.", native: "İhtiyacım olunca yardım istiyorum.", pronunciation: "PI-do a-YU-da" }
];

// ===== ÜNİTE 80: POR VS PARA =====
const unit80Phrases: B1PhraseItem[] = [
    { target: "Gracias por tu ayuda.", native: "Yardımın için teşekkürler.", pronunciation: "GRA-sias por tu" },
    { target: "Esto es para ti.", native: "Bu senin için.", pronunciation: "ES-to es PA-ra ti" },
    { target: "Viajo por trabajo.", native: "İş için seyahat ediyorum.", pronunciation: "VIA-ho por tra-BA-ho" },
    { target: "Estudio para aprender.", native: "Öğrenmek için çalışıyorum.", pronunciation: "es-TU-dio PA-ra" },
    { target: "Por lo general, duermo bien.", native: "Genellikle iyi uyurum.", pronunciation: "por lo he-ne-RAL" },
    { target: "Para mí, es importante.", native: "Benim için önemli.", pronunciation: "PA-ra mi es" },
    { target: "Por eso no puedo ir.", native: "Bu yüzden gidemiyorum.", pronunciation: "por E-so no PUE-do" },
    { target: "¿Para qué sirve esto?", native: "Bu ne işe yarar?", pronunciation: "PA-ra ke SIR-ve" },
    { target: "Pasé por tu casa.", native: "Evinin önünden geçtim.", pronunciation: "pa-SE por tu" },
    { target: "Trabajo para una empresa.", native: "Bir şirkette çalışıyorum.", pronunciation: "tra-BA-ho PA-ra" },
    { target: "Por la mañana desayuno.", native: "Sabahları kahvaltı yapıyorum.", pronunciation: "por la ma-NYA-na" },
    { target: "Salgo para las cinco.", native: "Beş civarı çıkıyorum.", pronunciation: "SAL-go PA-ra las" },
    { target: "Por favor, espera.", native: "Lütfen bekle.", pronunciation: "por fa-VOR" },
    { target: "Estudié por tres horas.", native: "Üç saat çalıştım.", pronunciation: "es-tu-DIE por tres" },
    { target: "Para ser sincero, no sé.", native: "Dürüst olmak gerekirse bilmiyorum.", pronunciation: "PA-ra ser sin-CE-ro" }
];

// ===== ÜNİTE 81: SER VS ESTAR İLERİ =====
const unit81Phrases: B1PhraseItem[] = [
    { target: "María es lista.", native: "María zeki.", pronunciation: "ma-RI-a es LIS-ta" },
    { target: "María está lista.", native: "María hazır.", pronunciation: "ma-RI-a es-TA LIS-ta" },
    { target: "El café es rico.", native: "Kahve kaliteli.", pronunciation: "el ka-FE es RI-ko" },
    { target: "El café está rico.", native: "Kahve lezzetli.", pronunciation: "el ka-FE es-TA RI-ko" },
    { target: "Es aburrido como persona.", native: "Kişi olarak sıkıcı.", pronunciation: "es a-bu-RRI-do" },
    { target: "Estoy aburrido ahora.", native: "Şu an sıkılmış durumdayım.", pronunciation: "es-TOY a-bu-RRI-do" },
    { target: "Él es malo.", native: "O kötü biri.", pronunciation: "el es MA-lo" },
    { target: "Él está malo.", native: "O hasta.", pronunciation: "el es-TA MA-lo" },
    { target: "La manzana es verde.", native: "Elma yeşil (tür).", pronunciation: "la man-SA-na es" },
    { target: "La manzana está verde.", native: "Elma ham.", pronunciation: "la man-SA-na es-TA" },
    { target: "Es un chico guapo.", native: "Yakışıklı bir çocuk.", pronunciation: "es un CHI-ko" },
    { target: "Está muy guapo hoy.", native: "Bugün çok yakışıklı görünüyor.", pronunciation: "es-TA mui GUA-po" },
    { target: "Ser o estar, esa es la pregunta.", native: "Ser mi estar mı, soru bu.", pronunciation: "ser o es-TAR" },
    { target: "Estoy cansado pero soy fuerte.", native: "Yorgunum ama güçlüyüm.", pronunciation: "es-TOY kan-SA-do" },
    { target: "Es alto y está sentado.", native: "Uzun boylu ve oturuyor.", pronunciation: "es AL-to i es-TA" }
];

// ===== ÜNİTE 82: SPOR VE FİTNESS =====
const unit82Phrases: B1PhraseItem[] = [
    { target: "Voy al gimnasio tres veces.", native: "Haftada üç kez spor salonuna gidiyorum.", pronunciation: "voy al him-NA-sio" },
    { target: "Me gusta correr por la mañana.", native: "Sabahları koşmayı seviyorum.", pronunciation: "me GUS-ta ko-RRER" },
    { target: "Juego al fútbol los fines de semana.", native: "Hafta sonları futbol oynuyorum.", pronunciation: "HUE-go al FUT-bol" },
    { target: "Practico natación regularmente.", native: "Düzenli yüzme yapıyorum.", pronunciation: "PRAK-ti-ko na-ta-SION" },
    { target: "El equipo ganó el partido.", native: "Takım maçı kazandı.", pronunciation: "el e-KI-po ga-NO" },
    { target: "Hago ejercicios de fuerza.", native: "Kuvvet egzersizleri yapıyorum.", pronunciation: "A-go e-her-CI-cios" },
    { target: "Levanto pesas en el gimnasio.", native: "Spor salonunda ağırlık kaldırıyorum.", pronunciation: "le-VAN-to PE-sas" },
    { target: "El deporte es bueno para la salud.", native: "Spor sağlık için iyi.", pronunciation: "el de-POR-te es" },
    { target: "Hago yoga para relajarme.", native: "Rahatlamak için yoga yapıyorum.", pronunciation: "A-go YO-ga" },
    { target: "Monto en bicicleta.", native: "Bisiklete biniyorum.", pronunciation: "MON-to en bi-ci-KLE-ta" },
    { target: "El entrenador nos motiva.", native: "Antrenör bizi motive ediyor.", pronunciation: "el en-tre-na-DOR" },
    { target: "Estoy preparándome para una carrera.", native: "Bir yarışa hazırlanıyorum.", pronunciation: "es-TOY pre-pa-RAN-do-me" },
    { target: "Hago estiramientos después.", native: "Sonra esneme yapıyorum.", pronunciation: "A-go es-ti-ra-MIEN-tos" },
    { target: "La competición es mañana.", native: "Yarışma yarın.", pronunciation: "la kom-pe-ti-SION" },
    { target: "Gané la medalla de oro.", native: "Altın madalya kazandım.", pronunciation: "ga-NE la me-DA-ya" }
];

// ===== ÜNİTE 83: SEYAHAT DENEYİMLERİ =====
const unit83Phrases: B1PhraseItem[] = [
    { target: "El viaje fue increíble.", native: "Yolculuk inanılmazdı.", pronunciation: "el VIA-he fue" },
    { target: "Visité muchos lugares históricos.", native: "Birçok tarihi yer ziyaret ettim.", pronunciation: "vi-si-TE MU-chos" },
    { target: "Me perdí en la ciudad.", native: "Şehirde kayboludum.", pronunciation: "me per-DI en la" },
    { target: "Tengo muchos recuerdos bonitos.", native: "Birçok güzel hatıram var.", pronunciation: "TEN-go MU-chos" },
    { target: "Fue una aventura inolvidable.", native: "Unutulmaz bir maceraydı.", pronunciation: "fue u-na a-ven-TU-ra" },
    { target: "Recomiendo este destino.", native: "Bu destinasyonu öneriyorum.", pronunciation: "re-ko-MIEN-do ES-te" },
    { target: "Conocí gente muy interesante.", native: "Çok ilginç insanlarla tanıştım.", pronunciation: "ko-no-SI HEN-te" },
    { target: "Probé la comida local.", native: "Yerel yemekleri denedim.", pronunciation: "pro-BE la ko-MI-da" },
    { target: "Saqué muchas fotos.", native: "Çok fotoğraf çektim.", pronunciation: "sa-KE MU-chas FO-tos" },
    { target: "El hotel tenía buenas vistas.", native: "Otelin güzel manzarası vardı.", pronunciation: "el o-TEL te-NI-a" },
    { target: "Compré souvenirs para todos.", native: "Herkese hediyelik eşya aldım.", pronunciation: "kom-PRE su-ve-NIRS" },
    { target: "Hablé español con los locales.", native: "Yerlilerle İspanyolca konuştum.", pronunciation: "ab-LE es-pa-NYOL" },
    { target: "Alquilé un coche.", native: "Araba kiraladım.", pronunciation: "al-ki-LE un KO-che" },
    { target: "El vuelo se retrasó.", native: "Uçuş gecikti.", pronunciation: "el VUE-lo se re-tra-SO" },
    { target: "Volveré el año que viene.", native: "Gelecek yıl döneceğim.", pronunciation: "vol-ve-RE el A-nyo" }
];

// ===== ÜNİTE 84: MÜZİK VE SANAT =====
const unit84Phrases: B1PhraseItem[] = [
    { target: "Fui a un concierto increíble.", native: "İnanılmaz bir konsere gittim.", pronunciation: "fui a un kon-SIER-to" },
    { target: "Me encanta esta canción.", native: "Bu şarkıya bayılıyorum.", pronunciation: "me en-KAN-ta ES-ta" },
    { target: "Visité el museo de arte.", native: "Sanat müzesini ziyaret ettim.", pronunciation: "vi-si-TE el mu-SE-o" },
    { target: "El cuadro es hermoso.", native: "Tablo çok güzel.", pronunciation: "el KUA-dro es er-MO-so" },
    { target: "Picasso es mi pintor favorito.", native: "Picasso favori ressamım.", pronunciation: "pi-KA-so es mi" },
    { target: "Toco la guitarra desde niño.", native: "Çocukluğumdan beri gitar çalıyorum.", pronunciation: "TO-ko la gi-TA-rra" },
    { target: "El flamenco es arte puro.", native: "Flamenko saf sanattır.", pronunciation: "el fla-MEN-ko es" },
    { target: "Me gusta la música clásica.", native: "Klasik müzik seviyorum.", pronunciation: "me GUS-ta la MU-si-ka" },
    { target: "Fui a ver una obra de teatro.", native: "Tiyatro oyunu izlemeye gittim.", pronunciation: "fui a ver u-na" },
    { target: "La escultura es impresionante.", native: "Heykel etkileyici.", pronunciation: "la es-kul-TU-ra" },
    { target: "El artista callejero era bueno.", native: "Sokak sanatçısı iyiydi.", pronunciation: "el ar-TIS-ta ka-ye-HE-ro" },
    { target: "El ritmo es muy pegadizo.", native: "Ritim çok akılda kalıcı.", pronunciation: "el RIT-mo es mui" },
    { target: "Aprendo a pintar.", native: "Resim yapmayı öğreniyorum.", pronunciation: "a-PREN-do a pin-TAR" },
    { target: "El ballet fue elegante.", native: "Bale zarif ti.", pronunciation: "el ba-LET fue" },
    { target: "Escucho jazz a menudo.", native: "Sık sık caz dinlerim.", pronunciation: "es-KU-cho yas" }
];

// ===== ÜNİTE 85: İLİŞKİLER VE SOSYAL HAYAT =====
const unit85Phrases: B1PhraseItem[] = [
    { target: "Nos conocimos hace años.", native: "Yıllar önce tanıştık.", pronunciation: "nos ko-no-SI-mos" },
    { target: "Confío plenamente en ti.", native: "Sana tamamen güveniyorum.", pronunciation: "kon-FI-o ple-na-MEN-te" },
    { target: "Te apoyo siempre.", native: "Seni her zaman desteklerim.", pronunciation: "te a-PO-yo SIEM-pre" },
    { target: "Lo siento mucho por lo que pasó.", native: "Olan için çok üzgünüm.", pronunciation: "lo SIEN-to MU-cho" },
    { target: "Te perdono de corazón.", native: "Seni kalpten affediyorum.", pronunciation: "te per-DO-no de" },
    { target: "La amistad es muy valiosa.", native: "Dostluk çok değerli.", pronunciation: "la a-mis-TAD es" },
    { target: "Nos reconciliamos finalmente.", native: "Sonunda barıştık.", pronunciation: "nos re-kon-si-LIA-mos" },
    { target: "El respeto mutuo es clave.", native: "Karşılıklı saygı çok önemli.", pronunciation: "el res-PE-to MU-tuo" },
    { target: "Mantenemos el contacto.", native: "İletişimi sürdürüyoruz.", pronunciation: "man-te-NE-mos el" },
    { target: "Pasamos tiempo de calidad.", native: "Kaliteli vakit geçiriyoruz.", pronunciation: "pa-SA-mos TIEM-po" },
    { target: "Me gusta socializar.", native: "Sosyalleşmeyi seviyorum.", pronunciation: "me GUS-ta so-cia-li-SAR" },
    { target: "Hicimos las paces.", native: "Barıştık.", pronunciation: "i-CI-mos las PA-ces" },
    { target: "Tenemos mucho en común.", native: "Çok ortak yönümüz var.", pronunciation: "te-NE-mos MU-cho" },
    { target: "Compartimos buenos momentos.", native: "Güzel anlar paylaşıyoruz.", pronunciation: "kom-par-TI-mos" },
    { target: "Las relaciones necesitan trabajo.", native: "İlişkiler emek gerektirir.", pronunciation: "las re-la-CIO-nes" }
];

// ===== ÜNİTE 86: İŞ VE KARİYER =====
const unit86Phrases: B1PhraseItem[] = [
    { target: "Busco empleo activamente.", native: "Aktif olarak iş arıyorum.", pronunciation: "BUS-ko em-PLE-o" },
    { target: "Tengo una entrevista mañana.", native: "Yarın mülakatım var.", pronunciation: "TEN-go u-na en-tre-VIS-ta" },
    { target: "Envié mi currículum a varias empresas.", native: "Birkaç şirkete özgeçmişimi gönderdim.", pronunciation: "en-VI-e mi ku-RRI-ku-lum" },
    { target: "Me ascendieron el mes pasado.", native: "Geçen ay terfi ettim.", pronunciation: "me as-sen-DIE-ron" },
    { target: "Trabajo en equipo todos los días.", native: "Her gün takım halinde çalışıyorum.", pronunciation: "tra-BA-ho en e-KI-po" },
    { target: "Tenemos una reunión importante.", native: "Önemli bir toplantımız var.", pronunciation: "te-NE-mos u-na" },
    { target: "El proyecto avanza bien.", native: "Proje iyi ilerliyor.", pronunciation: "el pro-YEK-to a-VAN-sa" },
    { target: "Mi jefe es muy exigente.", native: "Patronum çok talepkar.", pronunciation: "mi HE-fe es mui" },
    { target: "Negocié un mejor salario.", native: "Daha iyi maaş için pazarlık ettim.", pronunciation: "ne-go-CIE un me-HOR" },
    { target: "Desarrollo nuevas habilidades.", native: "Yeni beceriler geliştiriyorum.", pronunciation: "de-sa-RRO-yo NUE-vas" },
    { target: "Trabajo desde casa a veces.", native: "Bazen evden çalışıyorum.", pronunciation: "tra-BA-ho DES-de" },
    { target: "Cumplí con el plazo.", native: "Süreye uydum.", pronunciation: "kum-PLI kon el PLA-so" },
    { target: "Hago networking regularmente.", native: "Düzenli networking yapıyorum.", pronunciation: "A-go net-wor-king" },
    { target: "Asistí a un curso de formación.", native: "Eğitim kursuna katıldım.", pronunciation: "a-sis-TI a un" },
    { target: "Tengo objetivos profesionales claros.", native: "Net profesyonel hedeflerim var.", pronunciation: "TEN-go ob-he-TI-vos" }
];

// ===== ÜNİTE 87: EDEBİYAT 2 =====
const unit87Phrases: B1PhraseItem[] = [
    { target: "Leí una novela muy interesante.", native: "Çok ilginç bir roman okudum.", pronunciation: "le-I u-na no-VE-la" },
    { target: "El personaje principal es complejo.", native: "Ana karakter karmaşık.", pronunciation: "el per-so-NA-he" },
    { target: "La trama tiene muchos giros.", native: "Olay örgüsünde çok dönüş var.", pronunciation: "la TRA-ma TIE-ne" },
    { target: "García Márquez es mi favorito.", native: "García Márquez favorim.", pronunciation: "gar-CI-a MAR-kes" },
    { target: "Cien años de soledad es increíble.", native: "Yüzyıllık Yalnızlık inanılmaz.", pronunciation: "cien A-nyos de" },
    { target: "Isabel Allende escribe muy bien.", native: "Isabel Allende çok iyi yazıyor.", pronunciation: "i-sa-BEL a-YEN-de" },
    { target: "El final fue muy emotivo.", native: "Son çok duygusaldı.", pronunciation: "el fi-NAL fue mui" },
    { target: "Me identifico con el personaje.", native: "Karakterle özdeşleşiyorum.", pronunciation: "me i-den-ti-FI-ko" },
    { target: "Leo un libro al mes.", native: "Ayda bir kitap okurum.", pronunciation: "LE-o un LI-bro" },
    { target: "Prefiero la ficción a la no ficción.", native: "Kurguyu kurgu dışına tercih ederim.", pronunciation: "pre-FIE-ro la fik-SION" },
    { target: "El estilo del autor es único.", native: "Yazarın tarzı benzersiz.", pronunciation: "el es-TI-lo del" },
    { target: "Es una biografía fascinante.", native: "Büyüleyici bir biyografi.", pronunciation: "es u-na bio-gra-FI-a" },
    { target: "La poesía me emociona.", native: "Şiir beni duygulandırıyor.", pronunciation: "la po-e-SI-a me" },
    { target: "Recomiendo esta lectura.", native: "Bu okumayı öneriyorum.", pronunciation: "re-ko-MIEN-do ES-ta" },
    { target: "Tengo una gran colección de libros.", native: "Büyük bir kitap koleksiyonum var.", pronunciation: "TEN-go u-na gran" }
];

// ===== ÜNİTE 88: İSPANYOL COĞRAFYASI =====
const unit88Phrases: B1PhraseItem[] = [
    { target: "España tiene 17 comunidades autónomas.", native: "İspanya'nın 17 özerk bölgesi var.", pronunciation: "es-PA-nya TIE-ne" },
    { target: "Madrid está en el centro.", native: "Madrid merkezde.", pronunciation: "ma-DRID es-TA en" },
    { target: "El norte es verde y montañoso.", native: "Kuzey yeşil ve dağlık.", pronunciation: "el NOR-te es VER-de" },
    { target: "El sur tiene clima mediterráneo.", native: "Güney Akdeniz iklimine sahip.", pronunciation: "el sur TIE-ne KLI-ma" },
    { target: "Las Canarias están en el Atlántico.", native: "Kanarya Adaları Atlantik'te.", pronunciation: "las ka-NA-rias es-TAN" },
    { target: "Barcelona está en Cataluña.", native: "Barcelona Katalonya'da.", pronunciation: "bar-ce-LO-na es-TA" },
    { target: "Andalucía es muy calurosa.", native: "Endülüs çok sıcak.", pronunciation: "an-da-lu-CI-a es" },
    { target: "Los Pirineos separan España y Francia.", native: "Pireneler İspanya ve Fransa'yı ayırır.", pronunciation: "los pi-ri-NE-os" },
    { target: "El río Ebro es muy largo.", native: "Ebro Nehri çok uzun.", pronunciation: "el RI-o E-bro" },
    { target: "Galicia tiene costa atlántica.", native: "Galiçya Atlantik kıyısına sahip.", pronunciation: "ga-LI-cia TIE-ne" },
    { target: "Valencia es famosa por las naranjas.", native: "Valencia portakallarıyla ünlü.", pronunciation: "va-LEN-cia es" },
    { target: "Sevilla está en el sur.", native: "Sevilla güneyde.", pronunciation: "se-VI-ya es-TA" },
    { target: "Las Baleares incluyen Mallorca.", native: "Balear Adaları Mallorca'yı içerir.", pronunciation: "las ba-le-A-res" },
    { target: "El País Vasco tiene idioma propio.", native: "Bask Bölgesi'nin kendine özgü dili var.", pronunciation: "el pa-IS VAS-ko" },
    { target: "Granada tiene la Alhambra.", native: "Gırnata'da Elhamra var.", pronunciation: "gra-NA-da TIE-ne" }
];

// ===== ÜNİTE 89: LATİN AMERİKA KÜLTÜRÜ =====
const unit89Phrases: B1PhraseItem[] = [
    { target: "En Argentina usan el voseo.", native: "Arjantin'de vos kullanırlar.", pronunciation: "en ar-hen-TI-na U-san" },
    { target: "El tango nació en Buenos Aires.", native: "Tango Buenos Aires'te doğdu.", pronunciation: "el TAN-go na-CIO" },
    { target: "La salsa es de origen cubano.", native: "Salsa Küba kökenli.", pronunciation: "la SAL-sa es de" },
    { target: "México tiene una cultura rica.", native: "Meksika zengin bir kültüre sahip.", pronunciation: "ME-hi-ko TIE-ne" },
    { target: "Probé el mate en Argentina.", native: "Arjantin'de mate içtim.", pronunciation: "pro-BE el MA-te" },
    { target: "Los incas construyeron Machu Picchu.", native: "İnkalar Machu Picchu'yu inşa etti.", pronunciation: "los IN-kas kon-stru-YE-ron" },
    { target: "El carnaval de Río es famoso.", native: "Rio Karnavalı ünlü.", pronunciation: "el kar-na-VAL de RI-o" },
    { target: "Colombia tiene café excelente.", native: "Kolombiya'nın mükemmel kahvesi var.", pronunciation: "ko-LOM-bia TIE-ne" },
    { target: "Perú tiene comida deliciosa.", native: "Peru'nun lezzetli yemekleri var.", pronunciation: "pe-RU TIE-ne" },
    { target: "Chile es muy largo y estrecho.", native: "Şili çok uzun ve dar.", pronunciation: "CHI-le es mui" },
    { target: "El español de México es diferente.", native: "Meksika İspanyolcası farklı.", pronunciation: "el es-pa-NYOL de" },
    { target: "La música latina es muy variada.", native: "Latin müziği çok çeşitli.", pronunciation: "la MU-si-ka la-TI-na" },
    { target: "El día de muertos es importante.", native: "Ölüler Günü önemli.", pronunciation: "el DI-a de MUER-tos" },
    { target: "Dicen carro en lugar de coche.", native: "Coche yerine carro derler.", pronunciation: "DI-cen KA-rro" },
    { target: "Usamos celular, no móvil.", native: "Móvil değil celular kullanırız.", pronunciation: "u-SA-mos ce-lu-LAR" }
];

// ===== ÜNİTE 90: B1 FİNAL =====
const unit90Phrases: B1PhraseItem[] = [
    { target: "¡Felicidades! Has completado B1.", native: "Tebrikler! B1'i tamamladın.", pronunciation: "fe-li-ci-DA-des as" },
    { target: "Hablo español con más fluidez.", native: "İspanyolcayı daha akıcı konuşuyorum.", pronunciation: "AB-lo es-pa-NYOL" },
    { target: "He aprendido muchísimo.", native: "Çok fazla şey öğrendim.", pronunciation: "e a-pren-DI-do" },
    { target: "Mi español ha mejorado mucho.", native: "İspanyolcam çok gelişti.", pronunciation: "mi es-pa-NYOL a" },
    { target: "¡Sigue adelante hacia B2!", native: "B2'ye doğru devam et!", pronunciation: "SI-ge a-de-LAN-te" },
    { target: "El esfuerzo ha valido la pena.", native: "Çaba değdi.", pronunciation: "el es-FUER-so a" },
    { target: "Estoy muy orgulloso de mí.", native: "Kendimle çok gurur duyuyorum.", pronunciation: "es-TOY mui or-gu-YO-so" },
    { target: "Seguiré practicando cada día.", native: "Her gün pratik yapmaya devam edeceğim.", pronunciation: "se-gi-RE prak-ti-KAN-do" },
    { target: "Puedo mantener conversaciones.", native: "Konuşmalar sürdürebiliyorum.", pronunciation: "PUE-do man-te-NER" },
    { target: "Entiendo mejor el español hablado.", native: "Konuşulan İspanyolcayı daha iyi anlıyorum.", pronunciation: "en-TIEN-do me-HOR" },
    { target: "Leo textos más complejos.", native: "Daha karmaşık metinler okuyorum.", pronunciation: "LE-o TEKS-tos" },
    { target: "Escribo con más confianza.", native: "Daha güvenli yazıyorum.", pronunciation: "es-KRI-bo kon mas" },
    { target: "El B2 será mi próximo objetivo.", native: "B2 bir sonraki hedefim olacak.", pronunciation: "el be-dos se-RA" },
    { target: "Gracias por aprender conmigo.", native: "Benimle öğrendiğin için teşekkürler.", pronunciation: "GRA-sias por a-pren-DER" },
    { target: "¡Mucha suerte en tu camino!", native: "Yolunda bol şans!", pronunciation: "MU-cha SUER-te" }
];

// B1 kalıp getirme fonksiyonu (ID: 61-90) - Curriculum ile uyumlu
export function getB1PhrasesForUnit(unitId: number): B1PhraseItem[] {
    const idMapping: { [key: number]: B1PhraseItem[] } = {
        61: unit61Phrases, 62: unit62Phrases, 63: unit63Phrases, 64: unit64Phrases, 65: unit65Phrases,
        66: unit66Phrases, 67: unit67Phrases, 68: unit68Phrases, 69: unit69Phrases, 70: unit70Phrases,
        71: unit71Phrases, 72: unit72Phrases, 73: unit73Phrases, 74: unit74Phrases, 75: unit75Phrases,
        76: unit76Phrases, 77: unit77Phrases, 78: unit78Phrases, 79: unit79Phrases, 80: unit80Phrases,
        81: unit81Phrases, 82: unit82Phrases, 83: unit83Phrases, 84: unit84Phrases, 85: unit85Phrases,
        86: unit86Phrases, 87: unit87Phrases, 88: unit88Phrases, 89: unit89Phrases, 90: unit90Phrases,
    };
    return idMapping[unitId] || unit61Phrases;
}
