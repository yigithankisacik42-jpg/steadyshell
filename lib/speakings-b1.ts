/**
 * SteadyShell Konuşma Veritabanı - İspanyolca B1
 * Ünite 61-90 için konuşma içerikleri
 * Curriculum ile uyumlu
 */

import { UnitSpeaking, SpeakingExercise } from './speakings';

// ===== B1 ÜNİTELERİ (61-70) =====

const unit61Speaking: UnitSpeaking = {
    unitId: 61, title: "Gelecek Zaman", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El próximo año estudiaré en España y viviré en Madrid.", translation: "Gelecek yıl İspanya'da okuyacağım ve Madrid'de yaşayacağım." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Mañana tendré una entrevista de trabajo muy importante.", translation: "Yarın çok önemli bir iş görüşmem olacak." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué harás el próximo verano?", translation: "Gelecek yaz ne yapacaksın?", expectedKeywords: ["iré", "viajaré", "trabajaré", "estudiaré", "verano"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo será tu vida dentro de cinco años?", translation: "Beş yıl sonra hayatın nasıl olacak?", expectedKeywords: ["seré", "tendré", "viviré", "trabajaré", "estaré"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "El fin de semana que viene visitaremos a mis padres.", translation: "Gelecek hafta sonu ailemi ziyaret edeceğiz." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Supongo que llegarán sobre las ocho de la noche.", translation: "Sanırım aksjam sekiz gibi varacaklar." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Dónde crees que estarás el año que viene?", translation: "Gelecek yıl nerede olacağını düşünüyorsun?", expectedKeywords: ["estaré", "creo", "espero", "año", "lugar"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "¿Me llamarás cuando llegues a casa?", translation: "Eve vardığında beni arar mısın?" },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué país visitarás primero cuando viajes?", translation: "Seyahat ettiğinde ilk hangi ülkeyi ziyaret edeceksin?", expectedKeywords: ["visitaré", "iré", "primero", "país"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "No sé cuándo terminaré este proyecto.", translation: "Bu projeyi ne zaman bitireceğimi bilmiyorum." }
    ]
};

const unit62Speaking: UnitSpeaking = {
    unitId: 62, title: "Koşul Cümleleri 1", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Si tengo tiempo, iré al gimnasio después del trabajo.", translation: "Zamanım olursa, işten sonra spor salonuna gideceğim." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Si hace buen tiempo mañana, iremos a la playa.", translation: "Yarın hava güzel olursa, plaja gideceğiz." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué harás si llueve mañana?", translation: "Yarın yağmur yağarsa ne yaparsın?", expectedKeywords: ["si", "llueve", "quedaré", "casa", "leeré", "veré"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "Si tienes dinero, ¿qué comprarás?", translation: "Paran olursa, ne alırsın?", expectedKeywords: ["compraré", "si", "tengo", "dinero", "nuevo"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Si no estudias, no aprobarás el examen.", translation: "Çalışmazsan sınavı geçemezsin." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Si vienes temprano, podremos cenar juntos.", translation: "Erken gelirsen birlikte yemek yiyebiliriz." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué harás si consigues el trabajo?", translation: "İşi alırsan ne yapacaksın?", expectedKeywords: ["si", "consigo", "celebraré", "estaré", "feliz"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Si quieres, te ayudo con la mudanza.", translation: "İstersen taşınmada sana yardım ederim." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "Si puedes elegir, ¿dónde vivirás?", translation: "Seçebilirsen nerede yaşarsın?", expectedKeywords: ["si", "viviré", "elegiría", "ciudad", "playa"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Si termino pronto, te llamaré.", translation: "Erken bitirirsem seni ararım." }
    ]
};

const unit63Speaking: UnitSpeaking = {
    unitId: 63, title: "Koşul Cümleleri 2", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Si tuviera más dinero, viajaría por todo el mundo.", translation: "Daha fazla param olsaydı, dünyayı gezerdim." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Si pudiera cambiar algo de mi vida, estudiaría medicina.", translation: "Hayatımda bir şeyi değiştirebilseydim, tıp okurdum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué harías si ganaras la lotería?", translation: "Piyango kazansaydın ne yapardın?", expectedKeywords: ["compraría", "viajaría", "ayudaría", "donaría", "dejaría"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "Si pudieras vivir en cualquier país, ¿cuál elegirías?", translation: "Herhangi bir ülkede yaşayabilseydin hangisini seçerdin?", expectedKeywords: ["elegiría", "viviría", "porque", "clima", "cultura"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Si fuera invisible, viajaría gratis.", translation: "Görünmez olsaydım, ücretsiz seyahat ederdim." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Si supiera la respuesta, te la diría.", translation: "Cevabı bilseydim sana söylerdim." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué harías si tuvieras más tiempo libre?", translation: "Daha fazla boş zamanın olsa ne yapardın?", expectedKeywords: ["haría", "viajaría", "leería", "aprendería"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Si estuviera en tu lugar, aceptaría el trabajo.", translation: "Senin yerinde olsam işi kabul ederdim." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "Si pudieras tener cualquier superpoder, ¿cuál sería?", translation: "Herhangi bir süper gücün olabilse ne olurdu?", expectedKeywords: ["sería", "volar", "invisible", "tiempo", "fuerza"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Si no trabajara aquí, montaría mi propio negocio.", translation: "Burada çalışmasaydım kendi işimi kurardım." }
    ]
};

const unit64Speaking: UnitSpeaking = {
    unitId: 64, title: "Subjunctive Giriş", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Espero que tengas un buen día y que todo te salga bien.", translation: "Güzel bir gün geçirmeni ve her şeyin yolunda gitmesini umuyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es importante que estudies español todos los días.", translation: "Her gün İspanyolca çalışman önemli." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué esperas que pase este año?", translation: "Bu yıl ne olmasını umuyorsun?", expectedKeywords: ["espero", "que", "encuentre", "consiga", "viaje", "mejore"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué te gustaría que cambiara en el mundo?", translation: "Dünyada neyin değişmesini isterdin?", expectedKeywords: ["gustaría", "que", "hubiera", "paz", "igualdad"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Quiero que vengas a mi fiesta de cumpleaños.", translation: "Doğum günü partima gelmeni istiyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Es necesario que llegues puntual a la reunión.", translation: "Toplantıya zamanında gelmen gerekli." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué quieres que hagamos este fin de semana?", translation: "Bu hafta sonu ne yapmamızı istiyorsun?", expectedKeywords: ["quiero", "que", "vayamos", "hagamos", "salgamos"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Dudo que él sepa la verdad.", translation: "Onun gerçeği bildiğinden şüphe ediyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Es posible que llueva mañana?", translation: "Yarın yağmur yağması mümkün mü?", expectedKeywords: ["posible", "que", "llueva", "sí", "no", "pronóstico"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "No creo que sea una buena idea.", translation: "Bunun iyi bir fikir olduğunu düşünmüyorum." }
    ]
};

const unit65Speaking: UnitSpeaking = {
    unitId: 65, title: "Haberler ve Medya", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Según las últimas noticias, la economía está mejorando.", translation: "Son haberlere göre ekonomi iyileşiyor." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es importante contrastar las noticias de diferentes fuentes.", translation: "Haberleri farklı kaynaklardan karşılaştırmak önemli." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo te informas de las noticias?", translation: "Haberlerden nasıl haberdar oluyorsun?", expectedKeywords: ["leo", "veo", "escucho", "periódico", "televisión", "internet"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Crees que los medios son objetivos?", translation: "Medyanın objektif olduğunu düşünüyor musun?", expectedKeywords: ["creo", "depende", "algunos", "sesgo", "opinión"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Los periodistas deben verificar la información antes de publicarla.", translation: "Gazeteciler yayınlamadan önce bilgiyi doğrulamalı." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Las redes sociales se han convertido en una fuente de noticias.", translation: "Sosyal medya haber kaynağı haline geldi." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué tipo de noticias te interesan más?", translation: "Ne tür haberler seni daha çok ilgilendiriyor?", expectedKeywords: ["política", "deportes", "cultura", "tecnología", "economía"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Hay que tener cuidado con las noticias falsas.", translation: "Sahte haberlere dikkat etmek gerekiyor." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cómo distingues las noticias verdaderas de las falsas?", translation: "Gerçek haberleri sahtelerinden nasıl ayırt edersin?", expectedKeywords: ["verifico", "fuentes", "contrasto", "investigo"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "La libertad de prensa es fundamental en democracia.", translation: "Basın özgürlüğü demokraside temeldir." }
    ]
};

const unit66Speaking: UnitSpeaking = {
    unitId: 66, title: "Çevre Sorunları", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El cambio climático es uno de los mayores problemas de nuestra época.", translation: "İklim değişikliği çağımızın en büyük sorunlarından biri." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "La contaminación del aire afecta a millones de personas.", translation: "Hava kirliliği milyonlarca insanı etkiliyor." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuál crees que es el mayor problema ambiental?", translation: "En büyük çevre sorunu ne sence?", expectedKeywords: ["creo", "cambio", "climático", "contaminación", "plástico"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué podemos hacer para reducir la contaminación?", translation: "Kirliliği azaltmak için ne yapabiliriz?", expectedKeywords: ["reciclar", "usar", "transporte", "ahorrar", "energía"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Los océanos están llenos de plástico.", translation: "Okyanuslar plastikle dolu." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "La deforestación está destruyendo los pulmones del planeta.", translation: "Orman tahrıbatı gezegenin ciğerlerini yok ediyor." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué energías renovables conoces?", translation: "Hangi yenilenebilir enerjileri biliyorsun?", expectedKeywords: ["solar", "eólica", "hidráulica", "renovable"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El nivel del mar está subiendo por el calentamiento global.", translation: "Küresel ısınma nedeniyle deniz seviyesi yükseli yor." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Crees que los gobiernos hacen suficiente?", translation: "Hükümetlerin yeterli yaptığını düşünüyor musun?", expectedKeywords: ["creo", "suficiente", "más", "políticas", "leyes"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Todos debemos actuar para proteger el medio ambiente.", translation: "Çevreyi korumak için hepimiz harekete geçmeliyiz." }
    ]
};

const unit67Speaking: UnitSpeaking = {
    unitId: 67, title: "Sürdürülebilirlik", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Es importante reciclar el plástico, el papel y el vidrio.", translation: "Plastik, kağıt ve camı geri dönüştürmek önemli." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Debemos usar energías renovables para proteger el planeta.", translation: "Gezegeni korumak için yenilenebilir enerji kullanmalıyız." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué haces para ayudar al medio ambiente?", translation: "Çevreye yardım etmek için ne yapıyorsun?", expectedKeywords: ["reciclo", "uso", "ahorro", "evito", "plástico"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Por qué es importante la sostenibilidad?", translation: "Sürdürülebilirlik neden önemli?", expectedKeywords: ["importante", "futuro", "recursos", "planeta", "generaciones"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Compro productos locales para reducir la huella de carbono.", translation: "Karbon ayak izini azaltmak için yerel ürünler alıyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Es mejor usar bolsas reutilizables que de plástico.", translation: "Plastik yerine yeniden kullanılabilir çantalar kullanmak daha iyi." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Usas transporte público o coche privado?", translation: "Toplu taşıma mı özel araba mı kullanıyorsun?", expectedKeywords: ["uso", "transporte", "público", "coche", "bicicleta"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Los paneles solares son cada vez más populares.", translation: "Güneş panelleri giderek daha popüler hale geliyor." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué cambiarías en tu estilo de vida?", translation: "Yaşam tarzında neyi değiştirirdin?", expectedKeywords: ["cambiaría", "menos", "más", "consumir", "sostenible"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "El consumo responsable es clave para la sostenibilidad.", translation: "Sorumlu tüketim sürdürülebilirlik için anahtar." }
    ]
};

const unit68Speaking: UnitSpeaking = {
    unitId: 68, title: "Kültür ve Gelenekler", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "En España es tradición comer las doce uvas en Nochevieja.", translation: "İspanya'da yılbaşı gecesi on iki üzüm yemek gelenektir." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Cada región de España tiene sus propias fiestas y costumbres.", translation: "İspanya'nın her bölgesinin kendine özgü festivalleri ve gelenekleri var." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es la tradición más importante de tu país?", translation: "Ülkenin en önemli geleneği ne?", expectedKeywords: ["tradición", "celebramos", "familia", "comida", "fiesta"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué diferencias culturales has notado con España?", translation: "İspanya ile hangi kültürel farklılıklar fark ettin?", expectedKeywords: ["diferencia", "España", "comida", "horario", "siesta"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "La Semana Santa es muy importante en el sur de España.", translation: "Paskalya Haftası İspanya'nın güneyinde çok önemli." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Los Sanfermines de Pamplona atraen a miles de turistas.", translation: "Pamplona'nın Boğa Koşusu binlerce turisti çekiyor." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué comida típica representa a tu país?", translation: "Ülkeni hangi tipik yemek temsil ediyor?", expectedKeywords: ["comida", "típica", "plato", "tradicional"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El flamenco es Patrimonio de la Humanidad.", translation: "Flamenko Dünya Mirası'dır." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Has asistido a alguna fiesta tradicional?", translation: "Geleneksel bir festivale katıldın mı?", expectedKeywords: ["sí", "no", "asistí", "fiesta", "tradición"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Es fascinante aprender sobre otras culturas.", translation: "Diğer kültürler hakkında öğrenmek büyüleyici." }
    ]
};

const unit69Speaking: UnitSpeaking = {
    unitId: 69, title: "Ekonomi Temelleri", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La inflación ha subido y los precios están más altos.", translation: "Enflasyon yükseldi ve fiyatlar daha yüksek." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es importante ahorrar para el futuro y evitar deudas.", translation: "Gelecek için tasarruf etmek ve borçlardan kaçınmak önemli." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo gestionas tu dinero?", translation: "Paranı nasıl yönetiyorsun?", expectedKeywords: ["ahorro", "gasto", "presupuesto", "control", "banco"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué opinas de la situación económica actual?", translation: "Mevcut ekonomik durum hakkında ne düşünüyorsun?", expectedKeywords: ["opino", "creo", "difícil", "mejorando", "precios"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "El desempleo ha bajado en los últimos meses.", translation: "İşsizlik son aylarda düştü." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Los impuestos financian los servicios públicos.", translation: "Vergiler kamu hizmetlerini finanse ediyor." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Tienes algún plan de inversión?", translation: "Herhangi bir yatırım planın var mı?", expectedKeywords: ["inversión", "ahorro", "plan", "futuro", "no"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El euro es la moneda oficial de España.", translation: "Euro İspanya'nın resmi para birimi." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Prefieres pagar en efectivo o con tarjeta?", translation: "Nakit mi kartla mı ödemeyi tercih edersin?", expectedKeywords: ["prefiero", "efectivo", "tarjeta", "cómodo"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "La economía mundial está muy conectada.", translation: "Dünya ekonomisi çok bağlantılı." }
    ]
};

const unit70Speaking: UnitSpeaking = {
    unitId: 70, title: "Bankacılık", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Me gustaría abrir una cuenta de ahorro con interés.", translation: "Faizli bir tasarruf hesabı açmak istiyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Necesito hacer una transferencia internacional.", translation: "Uluslararası bir transfer yapmam gerekiyor." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué tipo de cuenta le interesa?", translation: "Ne tür hesapla ilgileniyorsunuz?", expectedKeywords: ["cuenta", "ahorro", "corriente", "interés", "tarjeta"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son los requisitos para un préstamo?", translation: "Kredi için gereksinimler neler?", expectedKeywords: ["requisitos", "ingresos", "nómina", "documentos"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "La banca online es muy cómoda.", translation: "Çevrimiçi bankacılık çok kullanışlı." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "He olvidado mi número PIN.", translation: "PIN numaramı unuttum." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Usas banca online o prefieres ir a la oficina?", translation: "Çevrimiçi bankacılık mı kullanıyorsun yoksa şubeye gitmeyi mi tercih edersin?", expectedKeywords: ["uso", "prefiero", "online", "oficina", "cómodo"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Quisiera solicitar una tarjeta de crédito.", translation: "Kredi kartı başvurusu yapmak istiyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cuánto es la comisión por transferencia?", translation: "Transfer komisyonu ne kadar?", expectedKeywords: ["comisión", "euros", "gratis", "porcentaje"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "El cajero automático está fuera de servicio.", translation: "ATM hizmet dışı." }
    ]
};

// ===== B1 ÜNİTELERİ (71-80) =====

const unit71Speaking: UnitSpeaking = {
    unitId: 71, title: "Tartışma Becerileri", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Desde mi punto de vista, la educación debería ser gratuita.", translation: "Benim bakış açımdan eğitim ücretsiz olmalı." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Entiendo tu posición, pero no estoy completamente de acuerdo.", translation: "Pozisyonunu anlıyorum ama tamamen aynı fikirde değilim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo expresarías tu opinión sobre un tema?", translation: "Bir konu hakkında görüşünü nasıl ifade edersin?", expectedKeywords: ["opino", "creo", "pienso", "punto", "vista"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo expresarías tu desacuerdo educadamente?", translation: "Kibar bir şekilde katılmadığını nasıl ifade edersin?", expectedKeywords: ["respeto", "opinión", "pero", "creo", "diferente"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Por un lado entiendo, pero por otro lado no estoy seguro.", translation: "Bir yandan anlıyorum, ama diğer yandan emin değilim." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Estoy parcialmente de acuerdo contigo.", translation: "Seninle kısmen aynı fikirdeyim." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cómo defenderías tu postura?", translation: "Tutumunu nasıl savunursun?", expectedKeywords: ["porque", "creo", "datos", "ejemplo", "razón"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Tienes razón en ese punto específico.", translation: "O spesifik noktada haklısın." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué harías si no estás de acuerdo con tu jefe?", translation: "Patronunla aynı fikirde değilsen ne yaparsın?", expectedKeywords: ["hablaría", "explicaría", "respetuosamente", "opinión"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Prefiero no opinar sobre ese tema polémico.", translation: "O tartışmalı konu hakkında yorum yapmamayı tercih ediyorum." }
    ]
};

const unit72Speaking: UnitSpeaking = {
    unitId: 72, title: "Sunum Yapma", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Buenos días a todos, hoy voy a presentar los resultados.", translation: "Herkese günaydın, bugün sonuçları sunacağım." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Como pueden ver en este gráfico, las ventas han aumentado.", translation: "Bu grafikte görebileceğiniz gibi satışlar arttı." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo empezarías una presentación profesional?", translation: "Profesyonel bir sunumu nasıl başlatırsın?", expectedKeywords: ["buenos", "días", "presentar", "hablar", "tema"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué harías si te hacen una pregunta difícil?", translation: "Zor bir soru sorulursa ne yaparsın?", expectedKeywords: ["investigar", "responder", "después", "considerar"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "En resumen, los datos muestran una mejora significativa.", translation: "Özetle, veriler önemli bir iyileşme gösteriyor." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Antes de continuar, ¿hay alguna pregunta?", translation: "Devam etmeden önce, herhangi bir soru var mı?" },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cómo cerrarías una presentación?", translation: "Bir sunumu nasıl kapatırsın?", expectedKeywords: ["gracias", "resumen", "conclusión", "preguntas"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Pasemos ahora al siguiente punto.", translation: "Şimdi bir sonraki noktaya geçelim." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué elementos visuales usarías?", translation: "Hangi görsel öğeler kullanırsın?", expectedKeywords: ["gráficos", "imágenes", "diapositivas", "tablas"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Gracias por su atención. Estoy a su disposición.", translation: "İlginiz için teşekkürler. Hizmetinizdeyim." }
    ]
};

const unit73Speaking: UnitSpeaking = {
    unitId: 73, title: "Edebiyat 1", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Don Quijote es considerada la primera novela moderna.", translation: "Don Quijote ilk modern roman olarak kabul ediliyor." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Me encanta leer novelas de Gabriel García Márquez.", translation: "Gabriel García Márquez'in romanlarını okumayı çok seviyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es tu libro favorito y por qué?", translation: "En sevdiğin kitap hangisi ve neden?", expectedKeywords: ["favorito", "libro", "porque", "historia", "personajes"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Por qué crees que la lectura es importante?", translation: "Okumanın neden önemli olduğunu düşünüyorsun?", expectedKeywords: ["importante", "aprender", "vocabulario", "imaginación"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Cien años de soledad es una obra maestra.", translation: "Yüzyıllık Yalnızlık bir başyapıt." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Prefiero las novelas de misterio a las románticas.", translation: "Gizem romanlarını romantik olanlara tercih ederim." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué autor español conoces?", translation: "Hangi İspanyol yazarı tanıyorsun?", expectedKeywords: ["Cervantes", "García", "Lorca", "autor", "escritor"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El realismo mágico es un género latinoamericano.", translation: "Büyülü gerçekçilik Latin Amerika'ya ait bir türdür." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cuántos libros lees al año?", translation: "Yılda kaç kitap okursun?", expectedKeywords: ["leo", "libros", "año", "mes", "tiempo"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Estoy leyendo una novela histórica muy interesante.", translation: "Çok ilginç bir tarihi roman okuyorum." }
    ]
};

const unit74Speaking: UnitSpeaking = {
    unitId: 74, title: "Şiir ve Şarkı", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Las letras de las canciones son poesía con música.", translation: "Şarkı sözleri müzikli şiirlerdir." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Federico García Lorca es uno de los poetas más famosos.", translation: "Federico García Lorca en ünlü şairlerden biri." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Tienes una canción que te emocione especialmente?", translation: "Seni özellikle duygusal yapan bir şarkı var mı?", expectedKeywords: ["canción", "recuerda", "emoción", "letra", "especial"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Por qué crees que la música conecta con las emociones?", translation: "Müziğin duygularla neden bağ kurduğunu düşünüyorsun?", expectedKeywords: ["creo", "memoria", "sentimientos", "ritmo", "letras"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "El flamenco combina cante, baile y guitarra.", translation: "Flamenko şarkı, dans ve gitarı birleştirir." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Pablo Neruda ganó el Premio Nobel de Literatura.", translation: "Pablo Neruda Nobel Edebiyat Ödülü'nü kazandı." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué tipo de música escuchas más?", translation: "En çok ne tür müzik dinlersin?", expectedKeywords: ["escucho", "pop", "rock", "latino", "clásica"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "La poesía expresa sentimientos profundos.", translation: "Şiir derin duyguları ifade eder." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Has escrito alguna vez un poema?", translation: "Hiç şiir yazdın mı?", expectedKeywords: ["sí", "no", "escribí", "poema", "nunca"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Las canciones de amor son universales.", translation: "Aşk şarkıları evrenseldir." }
    ]
};

const unit75Speaking: UnitSpeaking = {
    unitId: 75, title: "Tarih ve Politika", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La transición española fue un período de cambio pacífico.", translation: "İspanyol geçişi barışçıl bir değişim dönemiydi." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es importante conocer la historia para entender el presente.", translation: "Günümüzü anlamak için tarihi bilmek önemli." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Te interesa la política?", translation: "Politikayla ilgileniyor musun?", expectedKeywords: ["sí", "no", "interesa", "poco", "mucho", "importante"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué evento histórico te parece más importante?", translation: "Hangi tarihi olay sana en önemli görünüyor?", expectedKeywords: ["parece", "guerra", "revolución", "democracia", "cambió"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "La democracia es fundamental para la libertad.", translation: "Demokrasi özgürlük için temeldir." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "España es miembro de la Unión Europea desde 1986.", translation: "İspanya 1986'dan beri Avrupa Birliği üyesi." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Votas en las elecciones?", translation: "Seçimlerde oy kullanıyor musun?", expectedKeywords: ["sí", "voto", "siempre", "importante", "derecho"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "La Guerra Civil española duró tres años.", translation: "İspanya İç Savaşı üç yıl sürdü." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué opinas de la monarquía?", translation: "Monarşi hakkında ne düşünüyorsun?", expectedKeywords: ["opino", "creo", "tradición", "república", "depende"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Los derechos humanos deben ser universales.", translation: "İnsan hakları evrensel olmalı." }
    ]
};

const unit76Speaking: UnitSpeaking = {
    unitId: 76, title: "Hukuk Temelleri", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Todos los ciudadanos tienen derecho a la educación.", translation: "Tüm vatandaşların eğitim hakkı var." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Si alguien viola tus derechos, puedes acudir a los tribunales.", translation: "Biri haklarını ihlal ederse, mahkemelere başvurabilirsin." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Conoces tus derechos fundamentales?", translation: "Temel haklarını biliyor musun?", expectedKeywords: ["sí", "derechos", "educación", "salud", "libertad"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué harías si violaran tus derechos?", translation: "Hakların ihlal edilse ne yaparsın?", expectedKeywords: ["denunciar", "abogado", "tribunal", "policía"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Un abogado puede ayudarte con problemas legales.", translation: "Avukat hukuki sorunlarda sana yardımcı olabilir." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Es obligatorio tener un seguro de coche.", translation: "Araba sigortası yaptırmak zorunlu." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Has tenido algún problema legal?", translation: "Hiç hukuki sorunun oldu mu?", expectedKeywords: ["sí", "no", "nunca", "problema", "legal"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "La Constitución garantiza los derechos básicos.", translation: "Anayasa temel hakları garanti eder." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Crees que las leyes son justas?", translation: "Yasaların adil olduğunu düşünüyor musun?", expectedKeywords: ["creo", "justas", "depende", "algunas", "mejorarse"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "La presunción de inocencia es un derecho fundamental.", translation: "Masumiyet karinesi temel bir haktır." }
    ]
};

const unit77Speaking: UnitSpeaking = {
    unitId: 77, title: "Bilim ve Teknoloji", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La inteligencia artificial está transformando la economía.", translation: "Yapay zeka ekonomiyi dönüştürüyor." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Los avances en medicina salvan millones de vidas.", translation: "Tıptaki ilerlemeler milyonlarca hayat kurtarıyor." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué opinas de la inteligencia artificial?", translation: "Yapay zeka hakkında ne düşünüyorsun?", expectedKeywords: ["opino", "útil", "peligroso", "futuro", "trabajo"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué avance tecnológico te ha impresionado más?", translation: "Hangi teknolojik gelişme seni en çok etkiledi?", expectedKeywords: ["impresionado", "internet", "móvil", "medicina"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Los coches eléctricos son el futuro del transporte.", translation: "Elektrikli arabalar ulaşımın geleceği." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "La robótica está cambiando la industria.", translation: "Robotik endüstriyi değiştiriyor." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Crees que la tecnología nos hace más felices?", translation: "Teknolojinin bizi daha mutlu yaptığını düşünüyor musun?", expectedKeywords: ["creo", "depende", "felices", "conectados", "pero"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Internet ha revolucionado la comunicación.", translation: "İnternet iletişimde devrim yarattı." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Usas mucho la tecnología en tu vida diaria?", translation: "Günlük hayatında çok teknoloji kullanıyor musun?", expectedKeywords: ["sí", "uso", "móvil", "ordenador", "diariamente"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Los científicos buscan una vacuna contra el cáncer.", translation: "Bilim insanları kansere karşı aşı arıyor." }
    ]
};

const unit78Speaking: UnitSpeaking = {
    unitId: 78, title: "Sağlık ve Beslenme", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Una dieta equilibrada es fundamental para la salud.", translation: "Dengeli beslenme sağlık için temeldir." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es importante hacer ejercicio regularmente.", translation: "Düzenli egzersiz yapmak önemlidir." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué haces para mantener una vida saludable?", translation: "Sağlıklı yaşam için ne yapıyorsun?", expectedKeywords: ["ejercicio", "como", "duermo", "evito", "frutas"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuántas horas duermes normalmente?", translation: "Normalde kaç saat uyursun?", expectedKeywords: ["duermo", "horas", "suficiente", "descanso"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Deberías beber al menos dos litros de agua al día.", translation: "Günde en az iki litre su içmelisin." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "La comida rápida tiene muchas calorías.", translation: "Fast food çok kalorili." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Desayunas todos los días?", translation: "Her gün kahvaltı yapıyor musun?", expectedKeywords: ["sí", "no", "desayuno", "siempre", "a veces"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El azúcar en exceso es perjudicial para la salud.", translation: "Aşırı şeker sağlığa zararlı." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Prefieres comida casera o de restaurante?", translation: "Ev yemeği mi restoran yemeği mi tercih edersin?", expectedKeywords: ["prefiero", "casera", "restaurante", "más", "sana"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Intento evitar los alimentos procesados.", translation: "İşlenmiş gıdalardan kaçınmaya çalışıyorum." }
    ]
};

const unit79Speaking: UnitSpeaking = {
    unitId: 79, title: "Psikoloji Temelleri", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La salud mental es tan importante como la salud física.", translation: "Ruh sağlığı fiziksel sağlık kadar önemli." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Buscar ayuda profesional no es signo de debilidad.", translation: "Profesyonel yardım aramak zayıflık işareti değil." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo manejas el estrés?", translation: "Stresi nasıl yönetirsin?", expectedKeywords: ["manejo", "ejercicio", "respirar", "descanso", "música"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué consejo darías a alguien con ansiedad?", translation: "Anksiyetesi olan birine ne tavsiye verirsin?", expectedKeywords: ["consejo", "profesional", "ayuda", "respirar", "hablar"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "La meditación ayuda a reducir la ansiedad.", translation: "Meditasyon anksiyeteyi azaltmaya yardımcı olur." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Es normal sentirse triste a veces.", translation: "Bazen üzüntü hissetmek normaldir." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué te hace feliz?", translation: "Seni ne mutlu eder?", expectedKeywords: ["familia", "amigos", "música", "viajar", "feliz"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Hablar de tus problemas puede aliviarte.", translation: "Sorunların hakkında konuşmak seni rahatlatabilir." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Crees que la sociedad habla suficiente sobre salud mental?", translation: "Toplumun ruh sağlığı hakkında yeterince konuştuğunu düşünüyor musun?", expectedKeywords: ["creo", "suficiente", "más", "tabú", "importante"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "El sueño es esencial para el bienestar emocional.", translation: "Uyku duygusal iyilik için gereklidir." }
    ]
};

const unit80Speaking: UnitSpeaking = {
    unitId: 80, title: "Por vs Para", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Gracias por tu ayuda, este regalo es para ti.", translation: "Yardımın için teşekkürler, bu hediye senin için." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Trabajo para una empresa internacional por internet.", translation: "İnternet üzerinden uluslararası bir şirket için çalışıyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Por qué estudias español?", translation: "Neden İspanyolca öğreniyorsun?", expectedKeywords: ["porque", "trabajo", "viajes", "cultura", "gusto"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Para qué usas internet normalmente?", translation: "İnterneti normalde ne için kullanırsın?", expectedKeywords: ["para", "trabajar", "estudiar", "comunicar", "redes"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Este tren va para Madrid, no pasa por Sevilla.", translation: "Bu tren Madrid'e gidiyor, Sevilla'ıdan geçmiyor." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Estudio español por las mañanas para mejorar mi nivel.", translation: "Seviyemi yükseltmek için sabahları İspanyolca çalışıyorum." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Por cuánto tiempo estudiarás?", translation: "Ne kadar süre çalışacaksın?", expectedKeywords: ["por", "horas", "meses", "años", "tiempo"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Me cambiaron el vuelo por mal tiempo.", translation: "Kötü hava yüzünden uçuşumu değiştirdiler." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Para cuándo necesitas el informe?", translation: "Raporu ne zaman için gerekiyor?", expectedKeywords: ["para", "mañana", "lunes", "fecha", "urgente"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Pagué cien euros por este libro para mi colección.", translation: "Koleksiyonum için bu kitaba yüz euro ödedim." }
    ]
};

// ===== B1 ÜNİTELERİ (81-90) =====

const unit81Speaking: UnitSpeaking = {
    unitId: 81, title: "Ser vs Estar İleri", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Mi hermano es muy listo, pero hoy no está listo.", translation: "Kardeşim çok zeki, ama bugün hazır değil." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Esta paella es muy rica, pero está fría.", translation: "Bu paella çok lezzetli, ama soğuk." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Eres organizado o estás desorganizado hoy?", translation: "Düzenli biri misin yoksa bugün dağınık mısın?", expectedKeywords: ["soy", "estoy", "normalmente", "hoy", "organizado"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es la diferencia entre 'ser aburrido' y 'estar aburrido'?", translation: "'Sıkıcı olmak' ile 'sıkılmak' arasındaki fark ne?", expectedKeywords: ["ser", "característica", "estar", "estado", "temporal"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Normalmente soy tranquilo, pero hoy estoy muy nervioso.", translation: "Normalde sakinim, ama bugün çok ger ginim." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "La fruta está verde, pero es muy dulce.", translation: "Meyve yeşil, ama çok tatlı." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cómo eres y cómo estás hoy?", translation: "Nasıl birisin ve bugün nasılsın?", expectedKeywords: ["soy", "estoy", "alegre", "cansado", "amable"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El café está frío pero es delicioso.", translation: "Kahve soğuk ama lezzetli." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Por qué usamos 'estar' con ubicación?", translation: "Konum için neden 'estar' kullanıyoruz?", expectedKeywords: ["ubicación", "lugar", "temporal", "posición"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Madrid está en España y es la capital.", translation: "Madrid İspanya'da ve başkent." }
    ]
};

const unit82Speaking: UnitSpeaking = {
    unitId: 82, title: "Spor ve Fitness", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Hago ejercicio tres veces por semana en el gimnasio.", translation: "Haftada üç kez spor salonunda egzersiz yapıyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "El fútbol es el deporte más popular en España.", translation: "Futbol İspanya'da en popüler spordur." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué deportes practicas?", translation: "Hangi sporları yaparsın?", expectedKeywords: ["practico", "fútbol", "natación", "correr", "gimnasio"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Por qué es importante hacer ejercicio?", translation: "Egzersiz yapmak neden önemli?", expectedKeywords: ["salud", "importante", "energía", "sentirse", "mejor"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Prefiero correr al aire libre que en el gimnasio.", translation: "Spor salonundan ziyade açık havada koşmayı tercih ederim." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "El tenis requiere mucha coordinación.", translation: "Tenis çok fazla koordinasyon gerektirir." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Sigues algún equipo de fútbol?", translation: "Herhangi bir futbol takımını takip ediyor musun?", expectedKeywords: ["sí", "no", "equipo", "sigo", "fútbol"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Estoy entrenando para un maratón.", translation: "Maraton için antrenman yapıyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es tu deporte favorito y por qué?", translation: "En sevdiğin spor hangisi ve neden?", expectedKeywords: ["favorito", "deporte", "porque", "gusta", "divertido"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Los Juegos Olímpicos unen a todo el mundo.", translation: "Olimpiyat Oyunları tüm dünyayı birleştiriyor." }
    ]
};

const unit83Speaking: UnitSpeaking = {
    unitId: 83, title: "Seyahat Deneyimleri", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El año pasado viajé a México y fue una experiencia increíble.", translation: "Geçen yıl Meksika'ya gittim ve inanılmaz bir deneyimdi." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Lo mejor del viaje fue conocer la cultura local.", translation: "Seyahatin en güzel yanı yerel kültürü tanımaktı." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuál ha sido tu mejor viaje?", translation: "En iyi seyahatin ne oldu?", expectedKeywords: ["viaje", "fui", "visité", "increíble", "mejor"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué país te gustaría visitar y por qué?", translation: "Hangi ülkeyi ziyaret etmek istersin ve neden?", expectedKeywords: ["gustaría", "visitar", "porque", "cultura", "comida"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Perdimos el vuelo y tuvimos que esperar ocho horas.", translation: "Uçuşu kaçırdık ve sekiz saat beklemek zorunda kaldık." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "La comida local era deliciosa y muy barata.", translation: "Yerel yemek lezzetli ve çok ucuzdu." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Prefieres viajar solo o en grupo?", translation: "Yalnız mı grupla mı seyahat etmeyi tercih edersin?", expectedKeywords: ["prefiero", "solo", "grupo", "porque", "libertad"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Reservé un hotel con vistas al mar.", translation: "Deniz manzaralı bir otel rezervasyonu yaptım." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué es lo más importante para ti en un viaje?", translation: "Bir seyahatte senin için en önemli şey ne?", expectedKeywords: ["importante", "cultura", "comida", "gente", "experiencia"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Viajar te abre la mente a nuevas culturas.", translation: "Seyahat zihninizi yeni kültürlere açıyor." }
    ]
};

const unit84Speaking: UnitSpeaking = {
    unitId: 84, title: "Müzik ve Sanat", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El flamenco es un arte que combina música, canto y baile.", translation: "Flamenko müzik, şarkı ve dansı birleştiren bir sanattır." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Picasso y Dalí son los pintores españoles más famosos.", translation: "Picasso ve Dalí en ünlü İspanyol ressamlardır." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué tipo de música te gusta?", translation: "Ne tür müzik seversin?", expectedKeywords: ["gusta", "pop", "rock", "clásica", "latino"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es tu artista favorito?", translation: "En sevdiğin sanatçı kim?", expectedKeywords: ["favorito", "artista", "cantante", "pintor", "porque"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "El Museo del Prado tiene obras de Velázquez y Goya.", translation: "Prado Müzesi'nde Velázquez ve Goya eserleri var." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Me encanta ir a conciertos en directo.", translation: "Canlı konserlere gitmeyi çok seviyorum." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Tocas algún instrumento musical?", translation: "Herhangi bir müzik aleti çalar mısın?", expectedKeywords: ["toco", "guitarra", "piano", "no", "instrumento"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El cine español ha ganado varios premios Oscar.", translation: "İspanyol sineması birkaç Oscar ödülü kazandı." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Por qué crees que el arte es importante?", translation: "Sanatın neden önemli olduğunu düşünüyorsun?", expectedKeywords: ["importante", "expresión", "cultura", "emociones", "creatividad"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Las obras de Gaudí son Patrimonio de la Humanidad.", translation: "Gaudí'nin eserleri Dünya Mirası'dır." }
    ]
};

const unit85Speaking: UnitSpeaking = {
    unitId: 85, title: "İlişkiler ve Sosyal Hayat", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La confianza y el respeto son fundamentales en una amistad.", translation: "Güven ve saygı bir dostlukta temeldir." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es importante comunicarse abiertamente cuando hay problemas.", translation: "Sorunlar olduğunda açıkça iletişim kurmak önemlidir." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué cualidades valoras en un amigo?", translation: "Bir arkadaşta hangi özelliklere değer verirsin?", expectedKeywords: ["valoro", "honesto", "leal", "divertido", "confianza"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo resuelves los conflictos con tus amigos?", translation: "Arkadaşlarınla çatışmaları nasıl çözersin?", expectedKeywords: ["hablo", "escucho", "perdono", "comunicación"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Los amigos de verdad están en los momentos difíciles.", translation: "Gerçek arkadaşlar zor zamanlarda yanındadır." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Prefiero tener pocos amigos pero de confianza.", translation: "Az ama güvenilir arkadaşım olmasını tercih ederim." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cómo conociste a tu mejor amigo?", translation: "En iyi arkadaşını nasıl tanıdın?", expectedKeywords: ["conocí", "colegio", "trabajo", "universidad", "infancia"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Hace tiempo que no veo a mis amigos de la universidad.", translation: "Uzun zamandır üniversite arkadaşlarımı görmüyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cómo es tu relación con tus vecinos?", translation: "Komşularınla ilişkin nasıl?", expectedKeywords: ["buena", "hablo", "saludo", "relación", "vecinos"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "La familia es lo más importante en mi vida.", translation: "Aile hayatımda en önemli şey." }
    ]
};

const unit86Speaking: UnitSpeaking = {
    unitId: 86, title: "İş ve Kariyer", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Trabajo como ingeniero en una empresa de tecnología.", translation: "Bir teknoloji şirketinde mühendis olarak çalışıyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Mi objetivo es ascender a un puesto de manager.", translation: "Hedefim yönetici pozisyonuna yükselmek." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son tus objetivos profesionales?", translation: "Profesyonel hedeflerin neler?", expectedKeywords: ["objetivos", "quiero", "mejorar", "ascender", "aprender"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué habilidades son importantes en tu trabajo?", translation: "İşinde hangi beceriler önemli?", expectedKeywords: ["habilidades", "comunicación", "trabajo", "equipo", "técnicas"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Tengo cinco años de experiencia en este sector.", translation: "Bu sektörde beş yıllık deneyimim var." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Estoy buscando un cambio de trabajo.", translation: "İş değişikliği arıyorum." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué es lo que más te gusta de tu trabajo?", translation: "İşinde en çok ne hoşuna gidiyor?", expectedKeywords: ["gusta", "equipo", "tareas", "ambiente", "aprender"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Me gustaría emprender mi propio negocio.", translation: "Kendi işimi kurmak istiyorum." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Cómo es el ambiente en tu oficina?", translation: "Ofisindeki ortam nasıl?", expectedKeywords: ["ambiente", "bueno", "compañeros", "agradable", "estresante"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "El teletrabajo tiene ventajas y desventajas.", translation: "Uzaktan çalışmanın avantajları ve dezavantajları var." }
    ]
};

const unit87Speaking: UnitSpeaking = {
    unitId: 87, title: "Edebiyat 2", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "García Márquez escribió Cien años de soledad.", translation: "García Márquez Yüzyıllık Yalnızlık'ı yazdı." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Isabel Allende es una de las escritoras más leídas.", translation: "Isabel Allende en çok okunan yazarlardan biri." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Prefieres libros físicos o digitales?", translation: "Fiziksel mi dijital kitapları mı tercih edersin?", expectedKeywords: ["prefiero", "físicos", "digitales", "sensación", "práctico"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué género literario te gusta más?", translation: "Hangi edebi tür daha çok hoşuna gider?", expectedKeywords: ["gusta", "novela", "poesía", "ciencia", "ficción"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "La Casa de los Espíritus fue su primera novela.", translation: "Ruhlar Evi onun ilk romanıydı." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Me gustan las novelas con finales sorprendentes.", translation: "Şaşırtıcı sonlu romanları seviyorum." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Has leído algún libro en español?", translation: "Hiç İspanyolca kitap okudun mu?", expectedKeywords: ["sí", "no", "leí", "libro", "difícil"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Los cuentos cortos son perfectos para aprender.", translation: "Kısa öyküler öğrenmek için mükemmel." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué libro recomendarías?", translation: "Hangi kitabı önerirsin?", expectedKeywords: ["recomendaría", "libro", "porque", "interesante", "fácil"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Cervantes es considerado el padre de la literatura española.", translation: "Cervantes İspanyol edebiyatının babası kabul edilir." }
    ]
};

const unit88Speaking: UnitSpeaking = {
    unitId: 88, title: "İspanyol Coğrafyası", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "España tiene 17 comunidades autónomas con diferentes culturas.", translation: "İspanya'nın farklı kültürlere sahip 17 özerk bölgesi var." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "El norte de España es verde y el sur tiene clima mediterráneo.", translation: "İspanya'nın kuzeyi yeşil, güneyi Akdeniz iklimine sahip." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué ciudades españolas te gustaría visitar?", translation: "Hangi İspanyol şehirlerini ziyaret etmek istersin?", expectedKeywords: ["gustaría", "visitar", "Madrid", "Barcelona", "Sevilla"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Conoces las Islas Canarias o Baleares?", translation: "Kanarya veya Balear Adaları'nı biliyor musun?", expectedKeywords: ["sí", "no", "islas", "Canarias", "playa", "turismo"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Barcelona es la capital de Cataluña.", translation: "Barcelona Katalonya'nın başkenti." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Andalucía es famosa por el flamenco y los patios.", translation: "Endalüs flamenko ve avlularıyla ünlü." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es la región más turística de España?", translation: "İspanya'nın en turistik bölgesi hangisi?", expectedKeywords: ["Canarias", "Baleares", "Costa", "Barcelona", "Andalucía"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "El Camino de Santiago atrae a miles de peregrinos.", translation: "Santiago Yolu binlerce haciyi çekiyor." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Qué sabes sobre el País Vasco?", translation: "Bask Bölgesi hakkında ne biliyorsun?", expectedKeywords: ["País Vasco", "Bilbao", "euskera", "gastronomía"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "Granada tiene la famosa Alhambra.", translation: "Granada'ın ünlü Elhamra'sı var." }
    ]
};

const unit89Speaking: UnitSpeaking = {
    unitId: 89, title: "Latin Amerika Kültürü", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "En Argentina dicen 'vos' en lugar de 'tú'.", translation: "Arjantin'de 'tú' yerine 'vos' diyorlar." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "El tango nació en Buenos Aires a finales del siglo XIX.", translation: "Tango 19. yüzyılın sonunda Buenos Aires'te doğdu." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué países latinoamericanos te interesan más?", translation: "Hangi Latin Amerika ülkeleri seni ilgilendiriyor?", expectedKeywords: ["interesa", "México", "Argentina", "Colombia", "Perú"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Conoces alguna diferencia entre el español de España y el de México?", translation: "İspanya ve Meksika İspanyolcası arasında fark biliyor musun?", expectedKeywords: ["diferencia", "carro", "coche", "celular", "ordenador"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "La música latina está muy de moda en todo el mundo.", translation: "Latin müziği tüm dünyada çok moda." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Machu Picchu es una de las maravillas del mundo.", translation: "Machu Picchu dünyanın harikalarından biri." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué comida latinoamericana has probado?", translation: "Hangi Latin Amerika yemeğini denedin?", expectedKeywords: ["tacos", "burritos", "empanadas", "ceviche", "no"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "México tiene una historia muy rica.", translation: "Meksika'nın çok zengin bir tarihi var." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Conoces a algún artista latinoamericano?", translation: "Herhangi bir Latin Amerikalı sanatçı tanıyor musun?", expectedKeywords: ["sí", "Shakira", "Bad Bunny", "artista", "cantante"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "El Día de los Muertos es una tradición mexicana.", translation: "Ölüler Günü Meksika geleneğidir." }
    ]
};

const unit90Speaking: UnitSpeaking = {
    unitId: 90, title: "B1 Final", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¡Felicidades! Has completado el nivel B1 con éxito.", translation: "Tebrikler! B1 seviyesini başarıyla tamamladın." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Ahora eres un hablante independiente de español.", translation: "Artık bağımsız bir İspanyolca konuşucususun." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué has aprendido en el nivel B1?", translation: "B1 seviyesinde ne öğrendin?", expectedKeywords: ["aprendido", "gramática", "vocabulario", "hablar", "entender"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son tus objetivos para el nivel B2?", translation: "B2 seviyesi için hedeflerin ne?", expectedKeywords: ["objetivos", "mejorar", "fluidez", "vocabulario", "nativo"] },
        { id: 5, type: "repeat", prompt: "Tekrar et:", text: "Puedo mantener una conversación sobre temas variados.", translation: "Çeşitli konularda sohbet sürdürebiliyorum." },
        { id: 6, type: "repeat", prompt: "Tekrar et:", text: "Entiendo películas y series en español.", translation: "İspanyolca film ve dizileri anlıyorum." },
        { id: 7, type: "respond", prompt: "Cevap ver:", text: "¿Qué fue lo más difícil del nivel B1?", translation: "B1 seviyesinde en zor olan ne oldu?", expectedKeywords: ["difícil", "subjuntivo", "gramática", "verbos", "hablar"] },
        { id: 8, type: "repeat", prompt: "Tekrar et:", text: "Voy a seguir practicando todos los días.", translation: "Her gün pratik yapmaya devam edeceğim." },
        { id: 9, type: "respond", prompt: "Cevap ver:", text: "¿Recomendarías este curso a otros estudiantes?", translation: "Bu kursu diğer öğrencilere önerir misin?", expectedKeywords: ["sí", "recomiendo", "curso", "bueno", "útil"] },
        { id: 10, type: "repeat", prompt: "Tekrar et:", text: "¡Nos vemos en el nivel B2! ¡Mucha suerte!", translation: "B2 seviyesinde görüşürüz! İyi şanslar!" }
    ]
};

// B1 speakings listesi (ID: 61-90) - Curriculum ile uyumlu
const b1Speakings: { [key: number]: UnitSpeaking } = {
    61: unit61Speaking,
    62: unit62Speaking,
    63: unit63Speaking,
    64: unit64Speaking,
    65: unit65Speaking,
    66: unit66Speaking,
    67: unit67Speaking,
    68: unit68Speaking,
    69: unit69Speaking,
    70: unit70Speaking,
    71: unit71Speaking,
    72: unit72Speaking,
    73: unit73Speaking,
    74: unit74Speaking,
    75: unit75Speaking,
    76: unit76Speaking,
    77: unit77Speaking,
    78: unit78Speaking,
    79: unit79Speaking,
    80: unit80Speaking,
    81: unit81Speaking,
    82: unit82Speaking,
    83: unit83Speaking,
    84: unit84Speaking,
    85: unit85Speaking,
    86: unit86Speaking,
    87: unit87Speaking,
    88: unit88Speaking,
    89: unit89Speaking,
    90: unit90Speaking,
};

export function getB1SpeakingForUnit(unitId: number): UnitSpeaking | undefined {
    return b1Speakings[unitId];
}
