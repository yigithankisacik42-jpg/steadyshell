/**
 * SteadyShell Quiz Veritabanı - İspanyolca B1
 * 30 Ünite (ID: 61-90) - Curriculum ile TAM UYUMLU
 * Her ünite için 10 soru
 */

export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

// ===== ÜNİTE 61: GELECEK ZAMAN (FUTURO SIMPLE) =====
const unit61Questions: Question[] = [
    {
        id: 1,
        text: "Mañana yo ______ (hablar) con el jefe.",
        options: ["hablaría", "hablaré", "hablo", "hable"],
        correctAnswer: 1,
        explanation: "Gelecek planı: Hablar köküne -é eki gelir. (Hablaré)"
    },
    {
        id: 2,
        text: "¿Qué hora es? No sé, ______ las tres.",
        options: ["son", "serán", "fueron", "sean"],
        correctAnswer: 1,
        explanation: "Tahmin yürütmek için Gelecek Zaman kullanılır: Serán (Saat üç olmalı)."
    },
    {
        id: 3,
        text: "El año que viene nosotros ______ (viajar) a España.",
        options: ["viajamos", "viajareis", "viajaremos", "viajen"],
        correctAnswer: 2,
        explanation: "Nosotros için ek -emos olur: Viajaremos."
    },
    {
        id: 4,
        text: "Tú ______ (poder) hacerlo si quieres.",
        options: ["podrás", "poderás", "puedes", "puedas"],
        correctAnswer: 0,
        explanation: "Poder düzensizdir (Grup A): Podr- kökü kullanılır. (Podrás)"
    },
    {
        id: 5,
        text: "Ellos ______ (tener) mucho éxito.",
        options: ["tenerán", "tendrán", "tienen", "tengan"],
        correctAnswer: 1,
        explanation: "Tener düzensizdir (Grup B): Tendr- kökü kullanılır. (Tendrán)"
    },
    {
        id: 6,
        text: "¿Qué ______ (decir) la gente?",
        options: ["decirá", "dirá", "dice", "diga"],
        correctAnswer: 1,
        explanation: "Decir tamamen değişir (Grup C): Dir- kökü kullanılır. (Dirá)"
    },
    {
        id: 7,
        text: "Yo lo ______ (hacer) mañana sin falta.",
        options: ["haceré", "hago", "haré", "haga"],
        correctAnswer: 2,
        explanation: "Hacer tamamen değişir: Har- kökü kullanılır. (Haré)"
    },
    {
        id: 8,
        text: "Vosotros ______ (salir) temprano.",
        options: ["saldréis", "saliréis", "salís", "salgáis"],
        correctAnswer: 0,
        explanation: "Salir düzensizdir (Grup B): Saldr- köküne -éis eklenir. (Saldréis)"
    },
    {
        id: 9,
        text: "Ella no ______ (querer) venir con nosotros.",
        options: ["quererá", "querrá", "quiere", "quiera"],
        correctAnswer: 1,
        explanation: "Querer düzensizdir (Grup A): Querr- (çift r ile) kökü kullanılır. (Querrá)"
    },
    {
        id: 10,
        text: "¿Dónde estará Juan? ______ en casa.",
        options: ["Está", "Estará", "Esté", "Estuvo"],
        correctAnswer: 1,
        explanation: "Tahmin anlamında kullanılıyor: Estará (Evde olmalı/Evdedir)."
    }
];

// ===== ÜNİTE 62: KOŞUL CÜMLELERİ 1 (TİP 1) =====
const unit62Questions: Question[] = [
    {
        id: 1,
        text: "Si ______ (tener) tiempo, iré al cine.",
        options: ["tenga", "tengo", "tendré", "tuve"],
        correctAnswer: 1,
        explanation: "Si cümlelerinde ASLA gelecek zaman kullanılmaz. Presente (Geniş Zaman) kullanılır: Tengo."
    },
    {
        id: 2,
        text: "Si llueve, no ______ (salir) al parque.",
        options: ["salimos", "salgamos", "saldremos", "salimos"],
        correctAnswer: 2,
        explanation: "Sonuç cümlesi genellikle Futuro olur: Saldremos."
    },
    {
        id: 3,
        text: "Si estudias mucho, ______ (aprobar) el examen.",
        options: ["apruebas", "aprobarás", "aprobaste", "apruebes"],
        correctAnswer: 1,
        explanation: "Sonuç gelecekte olacağı için Futuro: Aprobarás."
    },
    {
        id: 4,
        text: "Si ______ (ver) a María, dile hola de mi parte.",
        options: ["veas", "verás", "ves", "viste"],
        correctAnswer: 2,
        explanation: "Si + Presente kuralı: Ves."
    },
    {
        id: 5,
        text: "Si tienes hambre, ______ (comer) algo.",
        options: ["comas", "comes", "come", "comerás"],
        correctAnswer: 2,
        explanation: "Sonuç kısmında Emir Kipi (Imperativo) kullanımı: Come (Ye)."
    },
    {
        id: 6,
        text: "Si mezclas rojo y amarillo, ______ (obtener) naranja.",
        options: ["obtienes", "obtenerás", "obtengas", "obtenías"],
        correctAnswer: 0,
        explanation: "Bilimsel/Genel gerçeklerde Presente + Presente kullanılır: Obtienes."
    },
    {
        id: 7,
        text: "______ (Cuando/Si) vienes, tráeme el libro.",
        options: ["Cuando", "Si", "Por", "Para"],
        correctAnswer: 1,
        explanation: "Presente Indicativo (vienes) kullanıldığı için 'Si' uygundur. Cuando olsaydı 'vengas' olurdu."
    },
    {
        id: 8,
        text: "Si no te ______ (gustar), no lo comas.",
        options: ["guste", "husta", "gusta", "gustará"],
        correctAnswer: 2,
        explanation: "Si + Presente kuralı: Gusta."
    },
    {
        id: 9,
        text: "Llámanos si ______ (necesitar) ayuda.",
        options: ["necesites", "necesitas", "necesitarás", "necesitaste"],
        correctAnswer: 1,
        explanation: "Si'den sonra Presente Indicativo gelir: Necesitas."
    },
    {
        id: 10,
        text: "Si ______ (hacer) sol mañana, iremos a la playa.",
        options: ["hará", "haga", "hace", "hizo"],
        correctAnswer: 2,
        explanation: "Si + Presente: Hace."
    }
];

// ===== ÜNİTE 63: KOŞUL CÜMLELERİ 2 (TİP 2) =====
const unit63Questions: Question[] = [
    {
        id: 1,
        text: "Si yo ______ (tener) dinero, compraría un coche.",
        options: ["tengo", "tuviere", "tuviera", "tendría"],
        correctAnswer: 2,
        explanation: "Tip 2 (Hayali): Si + Imperfecto Subjuntivo. Tener -> Tuviera."
    },
    {
        id: 2,
        text: "Si viviera en España, ______ (hablar) español muy bien.",
        options: ["hablaría", "hablara", "hablé", "hablo"],
        correctAnswer: 0,
        explanation: "Sonuç cümlesi Condicional Simple olur: Hablaría."
    },
    {
        id: 3,
        text: "Si yo ______ (ser) tú, no lo haría.",
        options: ["so", "fui", "sea", "fuera"],
        correctAnswer: 3,
        explanation: "Si yo fuera tú (Senin yerinde olsaydım) kalıbı. Ser -> Fuera."
    },
    {
        id: 4,
        text: "Si ______ (saber) la respuesta, te la diría.",
        options: ["supiera", "sepa", "sabía", "supe"],
        correctAnswer: 0,
        explanation: "Tip 2 Koşul: Saber -> Supiera (Düzensiz)."
    },
    {
        id: 5,
        text: "Viajaría por todo el mundo si ______ (poder).",
        options: ["puedo", "podría", "pudiera", "pueda"],
        correctAnswer: 2,
        explanation: "Si cümlesi sonda olsa bile kural değişmez: Si + Imp. Subjuntivo (Pudiera)."
    },
    {
        id: 6,
        text: "Si no ______ (llover), saldríamos a pasear.",
        options: ["lloviera", "llueve", "llovería", "llueva"],
        correctAnswer: 0,
        explanation: "Tip 2 Koşul: Llover -> Lloviera."
    },
    {
        id: 7,
        text: "¿Qué ______ (hacer) tú en mi lugar?",
        options: ["hicieras", "harías", "haces", "hagas"],
        correctAnswer: 1,
        explanation: "Tip 2 Sonuç sorusu: Condicional (Harías)."
    },
    {
        id: 8,
        text: "Si ______ (estar) aquí, nos ayudaría.",
        options: ["esté", "está", "estuviera", "estaría"],
        correctAnswer: 2,
        explanation: "Estar düzensizdir: Estuviera."
    },
    {
        id: 9,
        text: "Si nos ______ (tocar) la lotería, dejaríamos de trabajar.",
        options: ["tocara", "toque", "toca", "tocaría"],
        correctAnswer: 0,
        explanation: "Tip 2 Koşul: Tocar -> Tocara."
    },
    {
        id: 10,
        text: "Yo que tú, ______ (estudiar) más.",
        options: ["estudiara", "estudiaría", "estudie", "estudio"],
        correctAnswer: 1,
        explanation: "Tavsiye kalıbı (Yo que tú = Si yo fuera tú): Sonuç cümlesi Condicional (Estudiaría)."
    }
];

// ===== ÜNİTE 64: SUBJUNCTIVE GİRİŞ =====
const unit64Questions: Question[] = [
    {
        id: 1,
        text: "Quiero que tú ______ (venir) a mi fiesta.",
        options: ["vienes", "vendrás", "vengas", "ven"],
        correctAnswer: 2,
        explanation: "İstek bildirdiği ve özneler farklı olduğu için Subjuntivo: Vengas."
    },
    {
        id: 2,
        text: "Es importante que ______ (estudiar) todos los días.",
        options: ["estudies", "estudias", "estudiarás", "estudia"],
        correctAnswer: 0,
        explanation: "Kişisiz ifade (Es importante que) + Subjuntivo: Estudies."
    },
    {
        id: 3,
        text: "No creo que Juan ______ (tener) razón.",
        options: ["tenga", "tiene", "tendrá", "tuvo"],
        correctAnswer: 0,
        explanation: "'No creo que' (Şüphe/İnançsızlık) Subjuntivo gerektirir: Tenga."
    },
    {
        id: 4,
        text: "Ojalá ______ (hacer) buen tiempo mañana.",
        options: ["hace", "haga", "hará", "hizo"],
        correctAnswer: 1,
        explanation: "Ojalá her zaman Subjuntivo ile kullanılır: Haga."
    },
    {
        id: 5,
        text: "Te recomiendo que ______ (leer) este libro.",
        options: ["lees", "leas", "leerás", "lee"],
        correctAnswer: 1,
        explanation: "Tavsiye fiili (Recomendar) Subjuntivo gerektirir: Leas."
    },
    {
        id: 6,
        text: "Me alegra que ______ (estar) aquí.",
        options: ["estás", "estés", "estarás", "estuviste"],
        correctAnswer: 1,
        explanation: "Duygu bildiren fiil (Alegrarse) Subjuntivo gerektirir: Estés."
    },
    {
        id: 7,
        text: "Busco una secretaria que ______ (hablar) inglés.",
        options: ["habla", "hable", "hablará", "hablaba"],
        correctAnswer: 1,
        explanation: "Belirsiz/Tanımsız birini aradığımız için Subjuntivo: Hable."
    },
    {
        id: 8,
        text: "Dudo que ellos ______ (saber) la verdad.",
        options: ["saben", "sepan", "sabrán", "supe"],
        correctAnswer: 1,
        explanation: "Şüphe fiili (Dudar) Subjuntivo gerektirir: Sepan."
    },
    {
        id: 9,
        text: "Es necesario que nosotros ______ (salir) ahora.",
        options: ["salgamos", "salimos", "saldremos", "salgáis"],
        correctAnswer: 0,
        explanation: "Es necesario que + Subjuntivo: Salgamos."
    },
    {
        id: 10,
        text: "Espero que te ______ (gustar) el regalo.",
        options: ["guste", "gusta", "gustará", "gustó"],
        correctAnswer: 0,
        explanation: "Umut/İstek fiili (Esperar) Subjuntivo gerektirir: Guste."
    }
];

// ===== ÜNİTE 65: HABERLER VE MEDYA =====
const unit65Questions: Question[] = [
    {
        id: 1,
        text: "El libro fue ______ (escribir) por Cervantes.",
        options: ["escribido", "escrito", "escribió", "escrita"],
        correctAnswer: 1,
        explanation: "Pasif yapıda düzensiz participio: Escrito."
    },
    {
        id: 2,
        text: "La noticia ______ (anunciar) ayer por el presidente.",
        options: ["fue anunciada", "es anunciada", "será anunciada", "ha anunciado"],
        correctAnswer: 0,
        explanation: "Geçmiş zaman pasif: Fue anunciada."
    },
    {
        id: 3,
        text: "Aquí ______ (hablar) español.",
        options: ["se habla", "se hablan", "hablan", "hablado"],
        correctAnswer: 0,
        explanation: "Pasiva Refleja (Se): İspanyolca konuşulur (Tekil)."
    },
    {
        id: 4,
        text: "Se ______ (vender) pisos en este edificio.",
        options: ["vende", "venden", "vendido", "vendiendo"],
        correctAnswer: 1,
        explanation: "Nesne çoğul (pisos) olduğu için fiil çoğul: Venden."
    },
    {
        id: 5,
        text: "Manşet: 'Gobierno ______ (bajar) los impuestos'.",
        options: ["baja", "ha bajado", "bajando", "baje"],
        correctAnswer: 0,
        explanation: "Manşet dilinde Presente kullanılır: Baja."
    },
    {
        id: 6,
        text: "Según ______ oficiales, el rey está bien.",
        options: ["fuentes", "manantiales", "orígenes", "inicios"],
        correctAnswer: 0,
        explanation: "Basın kalıbı: 'Fuentes oficiales' (Resmi kaynaklar)."
    },
    {
        id: 7,
        text: "El ladrón ______ (estar) en la ciudad (Söylenti).",
        options: ["estaría", "está", "estuvo", "esté"],
        correctAnswer: 0,
        explanation: "Basında söylenti/iddia için Condicional kullanılır: Estaría."
    },
    {
        id: 8,
        text: "América ______ (descubrir) en 1492.",
        options: ["fue descubierta", "descubrió", "era descubierta", "había descubierto"],
        correctAnswer: 0,
        explanation: "Tarihi olay Pasif: Fue descubierta."
    },
    {
        id: 9,
        text: "Se ______ (cancelar) el concierto por la lluvia.",
        options: ["canceló", "cancelaron", "cancela", "cancelando"],
        correctAnswer: 0,
        explanation: "Geçmiş zaman olayı: Se canceló."
    },
    {
        id: 10,
        text: "Las ventanas fueron ______ (todo) por el viento.",
        options: ["rotas", "rotos", "rompidas", "roto"],
        correctAnswer: 0,
        explanation: "Düzensiz participio (Roto) + Dişi çoğul uyumu: Rotas."
    }
];

// ===== ÜNİTE 66: ÇEVRE SORUNLARI =====
const unit66Questions: Question[] = [
    {
        id: 1,
        text: "______ (Tener) que cuidar el medio ambiente.",
        options: ["Tenemos", "Debemos", "Hay", "Es"],
        correctAnswer: 0,
        explanation: "Kişiye göre çekimlenmiş zorunluluk (Biz): Tenemos que."
    },
    {
        id: 2,
        text: "______ que reciclar el plástico (Genel Kural).",
        options: ["Tiene", "Hay", "Debe", "Es"],
        correctAnswer: 1,
        explanation: "Kişisiz/Genel zorunluluk: Hay que."
    },
    {
        id: 3,
        text: "Las fábricas ______ (deber) reducir la contaminación.",
        options: ["deben", "deben de", "tienen", "hay"],
        correctAnswer: 0,
        explanation: "Ahlaki/Prensip zorunluluğu: Deben (que almaz)."
    },
    {
        id: 4,
        text: "Es necesario que el gobierno ______ (actuar).",
        options: ["actúa", "actúe", "actuará", "actuó"],
        correctAnswer: 1,
        explanation: "Es necesario que + Subjuntivo: Actúe."
    },
    {
        id: 5,
        text: "No ______ (tirar) basura al suelo.",
        options: ["tires", "tiras", "tirar", "tirando"],
        correctAnswer: 0,
        explanation: "Olumsuz emir (Tú) Subjuntivo formundadır: No tires."
    },
    {
        id: 6,
        text: "Es urgente que todos ______ (colaborar).",
        options: ["colaboremos", "colaboramos", "colaboran", "colaborar"],
        correctAnswer: 0,
        explanation: "Es urgente que + Subjuntivo: Colaboremos."
    },
    {
        id: 7,
        text: "Para salvar el planeta, ______ que usar menos coche.",
        options: ["tenemos", "hay", "debemos", "somos"],
        correctAnswer: 0,
        explanation: "Özne 'Biz' olduğu için: Tenemos (que var)."
    },
    {
        id: 8,
        text: "El cambio climático es un problema que nos ______ (afectar) a todos.",
        options: ["afecta", "afecte", "afectará", "afectó"],
        correctAnswer: 0,
        explanation: "Gerçek bir durumu anlattığı için Indicativo: Afecta."
    },
    {
        id: 9,
        text: "Es importante ______ (ahorrar) agua.",
        options: ["ahorrar", "ahorres", "ahorras", "ahorrando"],
        correctAnswer: 0,
        explanation: "Es importante + Mastar (Genel ifade, 'que' yok): Ahorrar."
    },
    {
        id: 10,
        text: "Debemos ______ (proteger) los bosques.",
        options: ["proteger", "protegemos", "protejamos", "protegido"],
        correctAnswer: 0,
        explanation: "Deber + Mastar: Proteger."
    }
];

// ===== ÜNİTE 67: SÜRDÜRÜLEBİLİRLİK =====
const unit67Questions: Question[] = [
    {
        id: 1,
        text: "Te recomiendo que ______ (usar) transporte público.",
        options: ["uses", "usas", "usarás", "usa"],
        correctAnswer: 0,
        explanation: "Tavsiye (Recomendar) + Subjuntivo: Uses."
    },
    {
        id: 2,
        text: "Es aconsejable que ______ (comprar) productos locales.",
        options: ["compres", "compras", "comprar", "compra"],
        correctAnswer: 0,
        explanation: "Kişisiz Tavsiye + Subjuntivo: Compres."
    },
    {
        id: 3,
        text: "Te sugiero que no ______ (usar) bolsas de plástico.",
        options: ["usas", "uses", "usar", "usando"],
        correctAnswer: 1,
        explanation: "Olumsuz tavsiye + Subjuntivo: Uses."
    },
    {
        id: 4,
        text: "Es mejor que ______ (ducharse) en vez de bañarte.",
        options: ["te duches", "te duchas", "ducharte", "dúchate"],
        correctAnswer: 0,
        explanation: "Es mejor que + Subjuntivo: Te duches."
    },
    {
        id: 5,
        text: "Le aconsejo que ______ (apagar) las luces.",
        options: ["apague", "apaga", "apagar", "apagará"],
        correctAnswer: 0,
        explanation: "Resmi tavsiye (Le) + Subjuntivo: Apague (G-GU değişimi)."
    },
    {
        id: 6,
        text: "Propongo que ______ (hacer) una huerta urbana.",
        options: ["hagamos", "hacemos", "hicimos", "hacer"],
        correctAnswer: 0,
        explanation: "Teklif + Subjuntivo: Hagamos."
    },
    {
        id: 7,
        text: "Es mejor ______ (reutilizar) que tirar.",
        options: ["reutilizar", "reutilices", "reutilizas", "reutilizando"],
        correctAnswer: 0,
        explanation: "Es mejor + Mastar (Que yok): Reutilizar."
    },
    {
        id: 8,
        text: "Te aconsejo que ______ (ser) más ecológico.",
        options: ["seas", "eres", "serás", "sé"],
        correctAnswer: 0,
        explanation: "Tavsiye + Subjuntivo (Ser düzensiz): Seas."
    },
    {
        id: 9,
        text: "Sugiero que la empresa ______ (invertir) en energía solar.",
        options: ["invierta", "invierte", "invertirá", "invertía"],
        correctAnswer: 0,
        explanation: "Tavsiye + Subjuntivo (E-IE değişimi): Invierta."
    },
    {
        id: 10,
        text: "Es preferible que ______ (ir) andando.",
        options: ["vayas", "vas", "irás", "ve"],
        correctAnswer: 0,
        explanation: "Tavsiye + Subjuntivo (Ir düzensiz): Vayas."
    }
];

// ===== ÜNİTE 68: KÜLTÜR VE GELENEKLER =====
const unit68Questions: Question[] = [
    {
        id: 1,
        text: "En España ______ (cenar) muy tarde.",
        options: ["se cena", "se cenan", "cena", "cenando"],
        correctAnswer: 0,
        explanation: "Se Impersonal (Genel): Se cena (Tekil)."
    },
    {
        id: 2,
        text: "Se ______ (necesitar) camareros.",
        options: ["necesitan", "necesita", "necesito", "necesitando"],
        correctAnswer: 0,
        explanation: "Pasiva Refleja (Nesne çoğul): Se necesitan."
    },
    {
        id: 3,
        text: "Se ______ (decir) que es mala suerte.",
        options: ["dice", "dicen", "dijo", "dicho"],
        correctAnswer: 0,
        explanation: "Kalıp: Se dice que (Denilir ki) - Tekil."
    },
    {
        id: 4,
        text: "Aquí no se ______ (poder) fumar.",
        options: ["puede", "pueden", "podía", "pudo"],
        correctAnswer: 0,
        explanation: "Genel yasak: Se puede (Tekil)."
    },
    {
        id: 5,
        text: "Se ______ (buscar) a los culpables.",
        options: ["busca", "buscan", "buscó", "buscando"],
        correctAnswer: 0,
        explanation: "'A' edatı olduğu için Impersonal (Tekil): Se busca."
    },
    {
        id: 6,
        text: "En Navidad se ______ (comer) turrón.",
        options: ["come", "comen", "comí", "comiendo"],
        correctAnswer: 0,
        explanation: "Turrón tekil nesne: Se come."
    },
    {
        id: 7,
        text: "Se ______ (vivir) bien en este pueblo.",
        options: ["vive", "viven", "vivió", "viviendo"],
        correctAnswer: 0,
        explanation: "Zarf var (bien), nesne yok: Se vive (Tekil)."
    },
    {
        id: 8,
        text: "Se ______ (vender) libros antiguos.",
        options: ["venden", "vende", "vendió", "vendiendo"],
        correctAnswer: 0,
        explanation: "Nesne çoğul (libros): Se venden."
    },
    {
        id: 9,
        text: "En la fiesta se ______ (bailar) mucho.",
        options: ["bailó", "baila", "bailaron", "bailando"],
        correctAnswer: 1,
        explanation: "Genel eylem: Se baila (Tekil)."
    },
    {
        id: 10,
        text: "Se ______ (creer) que existen fantasmas.",
        options: ["cree", "creen", "creyó", "creyendo"],
        correctAnswer: 0,
        explanation: "Kalıp: Se cree que (İnanılır ki) - Tekil."
    }
];

// ===== ÜNİTE 69: EKONOMİ TEMELLERİ =====
const unit69Questions: Question[] = [
    {
        id: 1,
        text: "El euro es más fuerte ______ el dólar.",
        options: ["que", "de", "como", "tan"],
        correctAnswer: 0,
        explanation: "Karşılaştırma (İki şey): Más ... que."
    },
    {
        id: 2,
        text: "La inflación es más ______ 10%.",
        options: ["de", "que", "como", "a"],
        correctAnswer: 0,
        explanation: "Rakamlardan önce 'de' kullanılır: Más de."
    },
    {
        id: 3,
        text: "Esta situación es ______ (malo) que la anterior.",
        options: ["peor", "más malo", "menos bueno", "malísimo"],
        correctAnswer: 0,
        explanation: "Malo düzensizdir: Peor (Daha kötü)."
    },
    {
        id: 4,
        text: "China exporta tanto ______ importa.",
        options: ["como", "que", "de", "cuanto"],
        correctAnswer: 0,
        explanation: "Eşitlik karşılaştırması: Tanto ... como."
    },
    {
        id: 5,
        text: "Este producto es el ______ (bueno) del mercado.",
        options: ["mejor", "más bueno", "buenísimo", "optimo"],
        correctAnswer: 0,
        explanation: "Süperlatif (En iyi): El mejor."
    },
    {
        id: 6,
        text: "Tengo ______ (tanto) problemas como tú.",
        options: ["tantos", "tanto", "tanta", "tantas"],
        correctAnswer: 0,
        explanation: "Problemas, çoğul ve eril: Tantos."
    },
    {
        id: 7,
        text: "La crisis es ______ (tan) grave como pensábamos.",
        options: ["tan", "tanto", "tanta", "tantos"],
        correctAnswer: 0,
        explanation: "Grave bir sıfattır, sıfatlarla Tan kullanılır."
    },
    {
        id: 8,
        text: "El riesgo es cada vez ______ (pequeño).",
        options: ["menor", "más pequeño", "pequeñísimo", "bajos"],
        correctAnswer: 0,
        explanation: "Pequeño düzensizdir (soyut anlamda): Menor."
    },
    {
        id: 9,
        text: "Gana menos ______ mil euros al mes.",
        options: ["de", "que", "a", "en"],
        correctAnswer: 0,
        explanation: "Rakam var: Menos de."
    },
    {
        id: 10,
        text: "Es la empresa más grande ______ mundo.",
        options: ["del", "que", "en", "de"],
        correctAnswer: 0,
        explanation: "Süperlatif'te grup belirtirken 'de' (bazen 'en') kullanılır: del (de+el)."
    }
];

// ===== ÜNİTE 70: BANKACILIK =====
const unit70Questions: Question[] = [
    {
        id: 1,
        text: "Quiero ______ una cuenta bancaria.",
        options: ["abrir", "hacer", "romper", "escribir"],
        correctAnswer: 0,
        explanation: "Hesap açmak: Abrir una cuenta."
    },
    {
        id: 2,
        text: "Necesito hacer una ______ de dinero.",
        options: ["transferencia", "transportación", "traducción", "transición"],
        correctAnswer: 0,
        explanation: "Para transferi: Transferencia."
    },
    {
        id: 3,
        text: "¿Cuál es el tipo de ______?",
        options: ["interés", "interesante", "interno", "intención"],
        correctAnswer: 0,
        explanation: "Faiz oranı: Tipo de interés."
    },
    {
        id: 4,
        text: "Voy a pedir un ______ para comprar una casa.",
        options: ["préstamo", "prestar", "prestado", "precio"],
        correctAnswer: 0,
        explanation: "Kredi: Préstamo (veya Hipoteca)."
    },
    {
        id: 5,
        text: "Los bancos ______ (subir) los intereses el próximo año.",
        options: ["subirán", "suben", "suban", "han subido"],
        correctAnswer: 0,
        explanation: "Gelecek tahmini: Subirán (Futuro)."
    },
    {
        id: 6,
        text: "Mi tarjeta de ______ ha caducado.",
        options: ["crédito", "credo", "creer", "creación"],
        correctAnswer: 0,
        explanation: "Kredi kartı: Tarjeta de crédito."
    },
    {
        id: 7,
        text: "Quiero sacar dinero del ______ automático.",
        options: ["cajero", "caja", "cajón", "coche"],
        correctAnswer: 0,
        explanation: "ATM: Cajero automático."
    },
    {
        id: 8,
        text: "Tengo que pagar una ______ mensual.",
        options: ["comisión", "comité", "comida", "comisaría"],
        correctAnswer: 0,
        explanation: "Komisyon/Ücret: Comisión."
    },
    {
        id: 9,
        text: "Espero que me ______ (conceder) el préstamo.",
        options: ["concedan", "conceden", "concederán", "concedieron"],
        correctAnswer: 0,
        explanation: "Umut/İstek (Esperar) + Subjuntivo: Concedan."
    },
    {
        id: 10,
        text: "El banco está ______ (cerrar).",
        options: ["cerrado", "cierra", "cerrando", "cierre"],
        correctAnswer: 0,
        explanation: "Durum belirtiyor (Participio): Cerrado."
    }
];

// ===== ÜNİTE 71: TARTIŞMA BECERİLERİ =====
const unit71Questions: Question[] = [
    {
        id: 1,
        text: "______ mi opinión, eso no es correcto.",
        options: ["En", "A", "Por", "De"],
        correctAnswer: 0,
        explanation: "Kalıp: En mi opinión (Bence)."
    },
    {
        id: 2,
        text: "No ______ de acuerdo contigo.",
        options: ["estoy", "soy", "tengo", "hago"],
        correctAnswer: 0,
        explanation: "Katılmak/Hemfikir olmak: Estar de acuerdo."
    },
    {
        id: 3,
        text: "Desde mi ______ de vista...",
        options: ["punto", "lugar", "sitio", "lado"],
        correctAnswer: 0,
        explanation: "Bakış açısı: Punto de vista."
    },
    {
        id: 4,
        text: "Tienes ______, pero es caro.",
        options: ["razón", "cabeza", "idea", "pensamiento"],
        correctAnswer: 0,
        explanation: "Haklısın: Tienes razón."
    },
    {
        id: 5,
        text: "Creo que ______ (ser) una buena idea.",
        options: ["es", "sea", "fuera", "sido"],
        correctAnswer: 0,
        explanation: "Creo que (Olumlu) + Indicativo: Es."
    },
    {
        id: 6,
        text: "No creo que ______ (ser) la solución.",
        options: ["sea", "es", "será", "sido"],
        correctAnswer: 0,
        explanation: "No creo que (Olumsuz/Şüphe) + Subjuntivo: Sea."
    },
    {
        id: 7,
        text: "Me ______ (parecer) que te equivocas.",
        options: ["parece", "parezca", "parecido", "pareciendo"],
        correctAnswer: 0,
        explanation: "Me parece que (Olumlu) + Indicativo: Parece."
    },
    {
        id: 8,
        text: "Lo que quiero ______ es que...",
        options: ["decir", "hablar", "contar", "gritar"],
        correctAnswer: 0,
        explanation: "Kalıp: Lo que quiero decir (Söylemek istediğim şey)."
    },
    {
        id: 9,
        text: "Estoy totalmente en ______.",
        options: ["contra", "opuesto", "negativo", "revés"],
        correctAnswer: 0,
        explanation: "Karşı olmak: Estar en contra."
    },
    {
        id: 10,
        text: "No pienso que ______ (venir).",
        options: ["venga", "viene", "vendrá", "venía"],
        correctAnswer: 0,
        explanation: "No pienso que (Olumsuz düşünce) + Subjuntivo: Venga."
    }
];

// ===== ÜNİTE 72: SUNUM YAPMA =====
const unit72Questions: Question[] = [
    {
        id: 1,
        text: "En primer ______, hablaré de la historia.",
        options: ["lugar", "sitio", "puesto", "vez"],
        correctAnswer: 0,
        explanation: "İlk olarak: En primer lugar."
    },
    {
        id: 2,
        text: "A ______, veremos los datos.",
        options: ["continuación", "seguir", "después", "siguiente"],
        correctAnswer: 0,
        explanation: "Devamında/Sonrasında: A continuación."
    },
    {
        id: 3,
        text: "Por ______, quiero agradecer a todos.",
        options: ["último", "final", "fin", "acabar"],
        correctAnswer: 0,
        explanation: "Son olarak: Por último."
    },
    {
        id: 4,
        text: "En ______, el proyecto fue un éxito.",
        options: ["conclusión", "fin", "terminar", "resumen"],
        correctAnswer: 0,
        explanation: "Sonuç olarak: En conclusión."
    },
    {
        id: 5,
        text: "Quisiera ______ (empezar) con una pregunta.",
        options: ["empezar", "empezando", "empiezo", "empecé"],
        correctAnswer: 0,
        explanation: "Quisiera + Mastar: Empezar."
    },
    {
        id: 6,
        text: "______ (resumir), tenemos tres opciones.",
        options: ["Para resumir", "Por resumir", "A resumir", "De resumir"],
        correctAnswer: 0,
        explanation: "Özetlemek gerekirse: Para resumir."
    },
    {
        id: 7,
        text: "Como he ______ (decir) antes...",
        options: ["dicho", "decido", "diciendo", "dije"],
        correctAnswer: 0,
        explanation: "Daha önce söylediğim gibi (Perfecto): Dicho."
    },
    {
        id: 8,
        text: "El gráfico ______ (mostrar) el aumento.",
        options: ["muestra", "muestre", "mostrando", "mostró"],
        correctAnswer: 0,
        explanation: "Grafik gösteriyor (Genel gerçek): Muestra."
    },
    {
        id: 9,
        text: "______ (volver) al tema principal.",
        options: ["Volviendo", "Vuelto", "Volver", "Vuelve"],
        correctAnswer: 0,
        explanation: "Konuya dönersek (Gerundio): Volviendo."
    },
    {
        id: 10,
        text: "Por una parte es bueno, por ______ es caro.",
        options: ["otra", "una", "dos", "parte"],
        correctAnswer: 0,
        explanation: "Kalıp: Por una parte... por otra (parte) - Bir yandan... diğer yandan."
    }
];

// ===== ÜNİTE 73: EDEBİYAT 1 =====
const unit73Questions: Question[] = [
    {
        id: 1,
        text: "Cuando era niño, ______ (leer) muchos cuentos.",
        options: ["leía", "leí", "leyera", "he leído"],
        correctAnswer: 0,
        explanation: "Geçmişte alışkanlık (Imperfecto): Leía."
    },
    {
        id: 2,
        text: "El autor ______ (escribir) esta novela en 1980.",
        options: ["escribió", "escribía", "ha escrito", "había escrito"],
        correctAnswer: 0,
        explanation: "Belirli bir geçmiş zaman (Indefinido): Escribió."
    },
    {
        id: 3,
        text: "Me dijo que ______ (estar) cansado.",
        options: ["estaba", "está", "estuvo", "estuviera"],
        correctAnswer: 0,
        explanation: "Dolaylı anlatım (Zaman kayması): Estaba (Imperfecto)."
    },
    {
        id: 4,
        text: "El protagonista ______ (ser) un hombre valiente.",
        options: ["era", "fue", "es", "sea"],
        correctAnswer: 0,
        explanation: "Betimleme (Imperfecto): Era."
    },
    {
        id: 5,
        text: "______ (Haber) una vez un rey...",
        options: ["Había", "Hubo", "Hay", "Haya"],
        correctAnswer: 0,
        explanation: "Hikaye başlangıcı (Bir varmış...): Había."
    },
    {
        id: 6,
        text: "Ya ______ (terminar) el libro cuando llegaste.",
        options: ["había terminado", "terminé", "terminaba", "he terminado"],
        correctAnswer: 0,
        explanation: "Geçmişin geçmişi (Pluscuamperfecto): Había terminado."
    },
    {
        id: 7,
        text: "El poeta ______ (nacer) en Chile.",
        options: ["nació", "nacía", "ha nacido", "nazca"],
        correctAnswer: 0,
        explanation: "Doğum biyografik ve kesin bir olaydır (Indefinido): Nació."
    },
    {
        id: 8,
        text: "Dijo que ______ (ir) a venir.",
        options: ["iba", "va", "fue", "vaya"],
        correctAnswer: 0,
        explanation: "Dolaylı anlatım (Ir -> Iba)."
    },
    {
        id: 9,
        text: "Este poema ______ (tratar) sobre el amor.",
        options: ["trata", "trate", "tratando", "trató"],
        correctAnswer: 0,
        explanation: "Konusu şudur (Genel): Trata."
    },
    {
        id: 10,
        text: "El narrador ______ (describir) el paisaje.",
        options: ["describe", "describa", "describiendo", "descrito"],
        correctAnswer: 0,
        explanation: "Şimdiki zaman anlatımı: Describe."
    }
];

// ===== ÜNİTE 74: ŞİİR VE ŞARKI =====
const unit74Questions: Question[] = [
    {
        id: 1,
        text: "Ojalá que ______ (llover) café.",
        options: ["llueva", "llueve", "lloverá", "llovió"],
        correctAnswer: 0,
        explanation: "Ojalá + Subjuntivo: Llueva."
    },
    {
        id: 2,
        text: "Quiero que me ______ (querer).",
        options: ["quieras", "quieres", "querrás", "quisiste"],
        correctAnswer: 0,
        explanation: "İstek + Subjuntivo: Quieras."
    },
    {
        id: 3,
        text: "¡Que ______ (tener) un buen día!",
        options: ["tengas", "tienes", "tendrás", "ten"],
        correctAnswer: 0,
        explanation: "Que... (Dilek) + Subjuntivo: Tengas."
    },
    {
        id: 4,
        text: "Busco un amor que me ______ (comprender).",
        options: ["comprenda", "comprende", "comprendió", "comprenderá"],
        correctAnswer: 0,
        explanation: "Belirsiz kişi + Subjuntivo: Comprenda."
    },
    {
        id: 5,
        text: "Siento que te ______ (perder).",
        options: ["pierdo", "pierda", "perdido", "perdí"],
        correctAnswer: 0,
        explanation: "Sentir que (Hissediş/Farkındalık) + Indicativo: Pierdo. (Duygu olsaydı Subj. olurdu)"
    },
    {
        id: 6,
        text: "Espero que ______ (volver) pronto.",
        options: ["vuelvas", "vuelves", "volverás", "vuelto"],
        correctAnswer: 0,
        explanation: "Umut + Subjuntivo: Vuelvas."
    },
    {
        id: 7,
        text: "Esta canción me ______ (poner) triste.",
        options: ["pone", "ponga", "pondrá", "puesto"],
        correctAnswer: 0,
        explanation: "Etki ediyor (Gerçek): Pone."
    },
    {
        id: 8,
        text: "La letra ______ (hablar) de libertad.",
        options: ["habla", "hable", "hablando", "habló"],
        correctAnswer: 0,
        explanation: "Gerçek durum: Habla."
    },
    {
        id: 9,
        text: "Deseo que ______ (ser) feliz.",
        options: ["seas", "eres", "serás", "sido"],
        correctAnswer: 0,
        explanation: "Dilek + Subjuntivo: Seas."
    },
    {
        id: 10,
        text: "Canta como si nadie te ______ (escuchar).",
        options: ["escuchara", "escucha", "escucharía", "escuchó"],
        correctAnswer: 0,
        explanation: "Como si (Sanki) her zaman Imperfecto Subjuntivo alır: Escuchara."
    }
];

// ===== ÜNİTE 75: TARİH VE POLİTİKA =====
const unit75Questions: Question[] = [
    {
        id: 1,
        text: "La guerra ______ (empezar) en 1936.",
        options: ["empezó", "empezaba", "ha empezado", "empieza"],
        correctAnswer: 0,
        explanation: "Belirli tarih, tamamlanmış olay (Indefinido): Empezó."
    },
    {
        id: 2,
        text: "Antes la gente ______ (vivir) en el campo.",
        options: ["vivía", "vivió", "ha vivido", "viva"],
        correctAnswer: 0,
        explanation: "Geçmişte genel durum/alışkanlık (Imperfecto): Vivía."
    },
    {
        id: 3,
        text: "El rey ______ (firmar) el tratado.",
        options: ["firmó", "firmaba", "firme", "firmando"],
        correctAnswer: 0,
        explanation: "Tekil olay (Indefinido): Firmó."
    },
    {
        id: 4,
        text: "España ______ (entrar) en la UE en 1986.",
        options: ["entró", "entraba", "ha entrado", "entrase"],
        correctAnswer: 0,
        explanation: "Belirli tarih (Indefinido): Entró."
    },
    {
        id: 5,
        text: "El presidente ______ (ser) elegido ayer.",
        options: ["fue", "era", "ha sido", "sea"],
        correctAnswer: 0,
        explanation: "Pasif + Belirli zaman (Indefinido): Fue."
    },
    {
        id: 6,
        text: "Mientras el ejército ______ (avanzar), la gente huía.",
        options: ["avanzaba", "avanzó", "avanza", "avance"],
        correctAnswer: 0,
        explanation: "Süreç (While/İken): Avanzaba."
    },
    {
        id: 7,
        text: "La constitución se ______ (aprobar) en 1978.",
        options: ["aprobó", "aprobaba", "aprueba", "aprobado"],
        correctAnswer: 0,
        explanation: "Tarihi olay (Indefinido): Aprobó."
    },
    {
        id: 8,
        text: "Hubo un ______ de estado.",
        options: ["golpe", "salto", "juego", "cambio"],
        correctAnswer: 0,
        explanation: "Darbe: Golpe de estado."
    },
    {
        id: 9,
        text: "El partido ______ (ganar) las elecciones.",
        options: ["ganó", "ganaba", "gane", "ganando"],
        correctAnswer: 0,
        explanation: "Tamamlanmış olay: Ganó."
    },
    {
        id: 10,
        text: "Los ciudadanos ______ (votar) por el cambio.",
        options: ["votaron", "votaban", "voten", "votado"],
        correctAnswer: 0,
        explanation: "Tamamlanmış olay (Çoğul): Votaron."
    }
];

// ===== ÜNİTE 76: HUKUK TEMELLERİ =====
const unit76Questions: Question[] = [
    {
        id: 1,
        text: "Es ______ (obligar) llevar el DNI.",
        options: ["obligatorio", "obligación", "obligado", "obligando"],
        correctAnswer: 0,
        explanation: "Zorunludur: Es obligatorio."
    },
    {
        id: 2,
        text: "Está ______ (prohibir) fumar aquí.",
        options: ["prohibido", "prohíbo", "prohibición", "prohibiendo"],
        correctAnswer: 0,
        explanation: "Yasaktır (Pasif/Sıfat): Está prohibido."
    },
    {
        id: 3,
        text: "El ______ (juzgar) dictó sentencia.",
        options: ["juez", "juicio", "juzgado", "jugador"],
        correctAnswer: 0,
        explanation: "Hakim: El juez."
    },
    {
        id: 4,
        text: "Necesito un ______ (abogar) para mi defensa.",
        options: ["abogado", "abogacía", "defensor", "juez"],
        correctAnswer: 0,
        explanation: "Avukat: Abogado."
    },
    {
        id: 5,
        text: "Tienes derecho a ______ (guardar) silencio.",
        options: ["guardar", "guarda", "guardando", "guardado"],
        correctAnswer: 0,
        explanation: "Hak + Mastar: Derecho a guardar."
    },
    {
        id: 6,
        text: "La ley ______ (ser) aprobada ayer.",
        options: ["fue", "es", "será", "sido"],
        correctAnswer: 0,
        explanation: "Pasif geçmiş zaman: Fue aprobada."
    },
    {
        id: 7,
        text: "Se ______ (respetar) la ley.",
        options: ["debe", "deben", "debió", "debido"],
        correctAnswer: 0,
        explanation: "Zorunluluk (Genel): Se debe respetar."
    },
    {
        id: 8,
        text: "El acusado es ______ (inocencia) hasta que se demuestre lo contrario.",
        options: ["inocente", "inocencia", "culpable", "libre"],
        correctAnswer: 0,
        explanation: "Masum: Inocente."
    },
    {
        id: 9,
        text: "Presentó una ______ (demandar).",
        options: ["demanda", "demandado", "pidió", "ruegob"],
        correctAnswer: 0,
        explanation: "Dava/Talep: Demanda."
    },
    {
        id: 10,
        text: "Todos somos iguales ante la ______ (leyes).",
        options: ["ley", "leyes", "legal", "legalidad"],
        correctAnswer: 0,
        explanation: "Kanun (Tekil): La ley."
    }
];

// ===== ÜNİTE 77: BİLİM VE TEKNOLOJİ =====
const unit77Questions: Question[] = [
    {
        id: 1,
        text: "La inteligencia ______ (arte) está de moda.",
        options: ["artificial", "artística", "artefacto", "artesano"],
        correctAnswer: 0,
        explanation: "Yapay zeka: Inteligencia artificial."
    },
    {
        id: 2,
        text: "Los científicos ______ (descubrir) una cura.",
        options: ["han descubierto", "descubrieron", "descubrían", "descubran"],
        correctAnswer: 0,
        explanation: "Yakın geçmiş/Etkisi süren (Perfecto): Han descubierto."
    },
    {
        id: 3,
        text: "Tienes que ______ (bajar) el archivo.",
        options: ["descargar", "bajar", "subir", "cargar"],
        correctAnswer: 0,
        explanation: "İndirmek (Teknoloji): Descargar."
    },
    {
        id: 4,
        text: "El ______ (inventar) de la radio fue Marconi.",
        options: ["inventor", "invento", "invención", "inventado"],
        correctAnswer: 0,
        explanation: "Mucit: El inventor."
    },
    {
        id: 5,
        text: "Se ha ______ (demostrar) que es seguro.",
        options: ["demostrado", "demuestra", "demostró", "demostrando"],
        correctAnswer: 0,
        explanation: "Kanıtlandı (Pasif/Perfecto): Se ha demostrado."
    },
    {
        id: 6,
        text: "Mi ordenador tiene un ______ (virus).",
        options: ["virus", "viral", "vire", "viro"],
        correctAnswer: 0,
        explanation: "Virüs: Virus."
    },
    {
        id: 7,
        text: "Necesito ______ (actualizar) el software.",
        options: ["actualizar", "actualizado", "actual", "actúo"],
        correctAnswer: 0,
        explanation: "Güncellemek: Actualizar."
    },
    {
        id: 8,
        text: "La ______ (tecnológico) avanza rápido.",
        options: ["tecnología", "técnica", "tecnológico", "técnico"],
        correctAnswer: 0,
        explanation: "Teknoloji: La tecnología."
    },
    {
        id: 9,
        text: "Es un gran ______ (avanzar) científico.",
        options: ["avance", "avanzado", "avanzando", "antes"],
        correctAnswer: 0,
        explanation: "İlerleme: Avance."
    },
    {
        id: 10,
        text: "Los robots ______ (hacer) nuestro trabajo en el futuro.",
        options: ["harán", "hacen", "hicieron", "hagan"],
        correctAnswer: 0,
        explanation: "Gelecek zaman: Harán."
    }
];

// ===== ÜNİTE 78: SAĞLIK VE BESLENME =====
const unit78Questions: Question[] = [
    {
        id: 1,
        text: "Te aconsejo que ______ (comer) más fruta.",
        options: ["comas", "comes", "comer", "comiste"],
        correctAnswer: 0,
        explanation: "Tavsiye + Subjuntivo: Comas."
    },
    {
        id: 2,
        text: "Es saludable ______ (hacer) deporte.",
        options: ["hacer", "hagas", "haces", "hecho"],
        correctAnswer: 0,
        explanation: "Es saludable + Mastar: Hacer."
    },
    {
        id: 3,
        text: "Debes evitar el ______ (estresado).",
        options: ["estrés", "estresado", "estresante", "estresar"],
        correctAnswer: 0,
        explanation: "Stres (İsim): El estrés."
    },
    {
        id: 4,
        text: "Esta comida contiene muchas ______ (vitaminas).",
        options: ["vitaminas", "vital", "vida", "vitamina"],
        correctAnswer: 0,
        explanation: "Vitaminler: Vitaminas."
    },
    {
        id: 5,
        text: "Le sugiero que ______ (dejar) de fumar.",
        options: ["deje", "deja", "dejar", "dejó"],
        correctAnswer: 0,
        explanation: "Resmi tavsiye (Le) + Subjuntivo: Deje."
    },
    {
        id: 6,
        text: "Es importante que ______ (beber) agua.",
        options: ["bebas", "bebes", "beber", "bebiste"],
        correctAnswer: 0,
        explanation: "Subjuntivo: Bebas."
    },
    {
        id: 7,
        text: "Una dieta ______ (equilibrar) es fundamental.",
        options: ["equilibrada", "equilibrio", "equilibrado", "igual"],
        correctAnswer: 0,
        explanation: "Dengeli (Sıfat/Dişi): Equilibrada."
    },
    {
        id: 8,
        text: "El aceite de oliva es ______ (bueno) para el corazón.",
        options: ["bueno", "bien", "mejor", "bondad"],
        correctAnswer: 0,
        explanation: "Dır/Dir anlamında: Es bueno."
    },
    {
        id: 9,
        text: "Tienes que ______ (cuidar) tu salud.",
        options: ["cuidar", "cuidas", "cuides", "cuidado"],
        correctAnswer: 0,
        explanation: "Tener que + Mastar: Cuidar."
    },
    {
        id: 10,
        text: "Me duele la ______ (cabeza).",
        options: ["cabeza", "mano", "pie", "nariz"],
        correctAnswer: 0,
        explanation: "Baş ağrısı: Doler la cabeza."
    }
];

// ===== ÜNİTE 79: PSİKOLOJİ TEMELLERİ =====
const unit79Questions: Question[] = [
    {
        id: 1,
        text: "Me ______ (sentir) estresado últimamente.",
        options: ["siento", "sienta", "sentí", "sentido"],
        correctAnswer: 0,
        explanation: "Hissediyorum (Indicativo): Me siento."
    },
    {
        id: 2,
        text: "Me alegra que ______ (estar) feliz.",
        options: ["estés", "estás", "estar", "estuviste"],
        correctAnswer: 0,
        explanation: "Duygu (Alegrarse) + Subjuntivo: Estés."
    },
    {
        id: 3,
        text: "Sufre de ______ (ansioso).",
        options: ["ansiedad", "ansioso", "ansia", "miedo"],
        correctAnswer: 0,
        explanation: "Anksiyete (İsim): Ansiedad."
    },
    {
        id: 4,
        text: "Es normal que ______ (tener) miedo.",
        options: ["tengas", "tienes", "tener", "tenías"],
        correctAnswer: 0,
        explanation: "Değerlendirme + Subjuntivo: Tengas."
    },
    {
        id: 5,
        text: "Necesito ______ (relajar).",
        options: ["relajarme", "relajo", "relajar", "relajado"],
        correctAnswer: 0,
        explanation: "Gevşemek (Refleksif): Relajarme."
    },
    {
        id: 6,
        text: "La ______ (deprimido) es una enfermedad seria.",
        options: ["depresión", "deprimido", "tristeza", "baja"],
        correctAnswer: 0,
        explanation: "Depresyon: La depresión."
    },
    {
        id: 7,
        text: "Me preocupa que no ______ (comer) bien.",
        options: ["comas", "comes", "comer", "comiste"],
        correctAnswer: 0,
        explanation: "Endişe (Preocupar) + Subjuntivo: Comas."
    },
    {
        id: 8,
        text: "Debes tener confianza en ______ (ti).",
        options: ["ti mismo", "tu", "yo", "mí"],
        correctAnswer: 0,
        explanation: "Kendine güven: En ti mismo."
    },
    {
        id: 9,
        text: "La terapia ______ (psicología) ayuda mucho.",
        options: ["psicológica", "psicología", "mental", "loca"],
        correctAnswer: 0,
        explanation: "Psikolojik (Sıfat): Psicológica."
    },
    {
        id: 10,
        text: "Hay que ______ (expresar) las emociones.",
        options: ["expresar", "expresas", "exprimir", "sacar"],
        correctAnswer: 0,
        explanation: "Hay que + Mastar: Expresar."
    }
];

// ===== ÜNİTE 80: POR VS PARA =====
const unit80Questions: Question[] = [
    {
        id: 1,
        text: "Este regalo es ______ ti.",
        options: ["para", "por", "de", "a"],
        correctAnswer: 0,
        explanation: "Alıcı/Hedef: Para."
    },
    {
        id: 2,
        text: "Gracias ______ tu ayuda.",
        options: ["por", "para", "de", "con"],
        correctAnswer: 0,
        explanation: "Sebep/Neden (Teşekkür): Por."
    },
    {
        id: 3,
        text: "Estudio ______ aprender español.",
        options: ["para", "por", "de", "a"],
        correctAnswer: 0,
        explanation: "Amaç: Para."
    },
    {
        id: 4,
        text: "Lo necesito ______ mañana.",
        options: ["para", "por", "en", "hasta"],
        correctAnswer: 0,
        explanation: "Son tarih (Deadline): Para."
    },
    {
        id: 5,
        text: "Viajamos ______ avión.",
        options: ["por", "para", "en", "con"],
        correctAnswer: 0,
        explanation: "Araç/Vasıta: Por (veya En, ama şıklarda Por var)."
    },
    {
        id: 6,
        text: "Te cambio mi boli ______ tu lápiz.",
        options: ["por", "para", "con", "a"],
        correctAnswer: 0,
        explanation: "Değişim/Takas: Por."
    },
    {
        id: 7,
        text: "Voy ______ el parque (içinden/yanından).",
        options: ["por", "para", "a", "de"],
        correctAnswer: 0,
        explanation: "Yol/Güzergah: Por."
    },
    {
        id: 8,
        text: "Trabajo ______ Microsoft.",
        options: ["para", "por", "en", "con"],
        correctAnswer: 0,
        explanation: "İşveren: Para."
    },
    {
        id: 9,
        text: "Hablo ______ teléfono.",
        options: ["por", "para", "en", "con"],
        correctAnswer: 0,
        explanation: "İletişim aracı: Por."
    },
    {
        id: 10,
        text: "He pagado 20 euros ______ la cena.",
        options: ["por", "para", "de", "a"],
        correctAnswer: 0,
        explanation: "Fiyat/Karşılık: Por."
    }
];

// ===== ÜNİTE 81: SER VS ESTAR İLERİ =====
const unit81Questions: Question[] = [
    {
        id: 1,
        text: "Juan es muy ______ (listo) - ZEKİ.",
        options: ["listo", "lista", "listos", "listado"],
        correctAnswer: 0,
        explanation: "Ser listo = Zeki olmak."
    },
    {
        id: 2,
        text: "Todavía no estoy ______ (listo) - HAZIR.",
        options: ["listo", "lista", "listos", "listado"],
        correctAnswer: 0,
        explanation: "Estar listo = Hazır olmak."
    },
    {
        id: 3,
        text: "La sopa está ______ (rico).",
        options: ["rica", "rico", "riqueza", "riquísima"],
        correctAnswer: 0,
        explanation: "Estar rico = Lezzetli olmak (Sopa dişi olduğu için Rica)."
    },
    {
        id: 4,
        text: "Bill Gates es ______ (rico).",
        options: ["rico", "rica", "estar rico", "riqueza"],
        correctAnswer: 0,
        explanation: "Ser rico = Zengin olmak."
    },
    {
        id: 5,
        text: "Esta película es muy ______ (aburrido).",
        options: ["aburrida", "aburrido", "mala", "larga"],
        correctAnswer: 0,
        explanation: "Ser aburrido = Sıkıcı olmak (Película dişi: Aburrida)."
    },
    {
        id: 6,
        text: "Estoy ______ (aburrido) en casa.",
        options: ["aburrido", "aburrida", "aburridos", "abur"],
        correctAnswer: 0,
        explanation: "Estar aburrido = Sıkılmış olmak."
    },
    {
        id: 7,
        text: "La manzana está ______ (verde) - HAM.",
        options: ["verde", "madura", "roja", "azul"],
        correctAnswer: 0,
        explanation: "Estar verde = Ham/Olgunlaşmamış olmak."
    },
    {
        id: 8,
        text: "El coche es ______ (verde) - RENK.",
        options: ["verde", "verdes", "verdoso", "azulado"],
        correctAnswer: 0,
        explanation: "Ser verde = Yeşil olmak (Renk)."
    },
    {
        id: 9,
        text: "Mi hermano es ______ (atento) - NAZİK.",
        options: ["atento", "atenta", "atención", "amable"],
        correctAnswer: 0,
        explanation: "Ser atento = Nazik/Düşünceli olmak."
    },
    {
        id: 10,
        text: "El camarero está ______ (atento) - İLGİLİ.",
        options: ["atento", "atenta", "servicial", "rápido"],
        correctAnswer: 0,
        explanation: "Estar atento = İlgili olmak/Dikkat etmek."
    }
];

// ===== ÜNİTE 82: SPOR VE FITNESS =====
const unit82Questions: Question[] = [
    {
        id: 1,
        text: "Voy al ______ (entrenar) todos los días.",
        options: ["gimnasio", "entrenamiento", "deporte", "parque"],
        correctAnswer: 0,
        explanation: "Spor salonu: Gimnasio."
    },
    {
        id: 2,
        text: "Me gusta ______ (jugar) al fútbol.",
        options: ["jugar", "hacer", "practicar", "ver"],
        correctAnswer: 0,
        explanation: "Toplu oyunlar için Jugar kullanılır."
    },
    {
        id: 3,
        text: "Hago ______ (nadar) en la piscina.",
        options: ["natación", "nadar", "nado", "agua"],
        correctAnswer: 0,
        explanation: "Yüzme sporu: Natación."
    },
    {
        id: 4,
        text: "Mi ______ (equipar) favorito es el Real Madrid.",
        options: ["equipo", "grupo", "club", "jugador"],
        correctAnswer: 0,
        explanation: "Takım: Equipo."
    },
    {
        id: 5,
        text: "Hacer deporte es bueno para la ______ (sano).",
        options: ["salud", "sano", "sanidad", "cuerpo"],
        correctAnswer: 0,
        explanation: "Sağlık: Salud."
    },
    {
        id: 6,
        text: "El ______ (entrenar) dura una hora.",
        options: ["entrenamiento", "entrenador", "entreno", "ejercicio"],
        correctAnswer: 0,
        explanation: "Antrenman: Entrenamiento."
    },
    {
        id: 7,
        text: "Hay que ______ (calentar) antes de correr.",
        options: ["calentar", "enfriar", "estirar", "parar"],
        correctAnswer: 0,
        explanation: "Isınmak: Calentar."
    },
    {
        id: 8,
        text: "Ganaron el ______ (competir).",
        options: ["campeonato", "partido", "juego", "premio"],
        correctAnswer: 0,
        explanation: "Şampiyona: Campeonato."
    },
    {
        id: 9,
        text: "Es un ______ (jugar) muy bueno.",
        options: ["jugador", "juego", "jugada", "juguete"],
        correctAnswer: 0,
        explanation: "Oyuncu: Jugador."
    },
    {
        id: 10,
        text: "El árbitro pitó el ______ (fin) del partido.",
        options: ["final", "fin", "acaba", "termina"],
        correctAnswer: 0,
        explanation: "Bitiş/Final: Final."
    }
];

// ===== ÜNİTE 83: SEYAHAT DENEYİMLERİ =====
const unit83Questions: Question[] = [
    {
        id: 1,
        text: "He ______ (viajar) a muchos países.",
        options: ["viajado", "viaje", "viajo", "viajé"],
        correctAnswer: 0,
        explanation: "Pretérito Perfecto (He + Participio): Viajado."
    },
    {
        id: 2,
        text: "Tengo que renovar el ______ (pasar).",
        options: ["pasaporte", "paso", "pase", "viaje"],
        correctAnswer: 0,
        explanation: "Pasaport: Pasaporte."
    },
    {
        id: 3,
        text: "Hicimos una ______ (reservar) en el hotel.",
        options: ["reserva", "reservación", "cita", "petición"],
        correctAnswer: 0,
        explanation: "Rezervasyon: Reserva."
    },
    {
        id: 4,
        text: "El vuelo tiene ______ (tardar).",
        options: ["restraso", "tarde", "demora", "lento"],
        correctAnswer: 0,
        explanation: "Rötar/Gecikme: Retraso."
    },
    {
        id: 5,
        text: "Me gusta conocer nuevas ______ (cultura).",
        options: ["culturas", "países", "gente", "comidas"],
        correctAnswer: 0,
        explanation: "Kültürler (Çoğul): Culturas."
    },
    {
        id: 6,
        text: "¿Has estado ______ (vez) en Asia?",
        options: ["alguna vez", "una vez", "siempre", "nunca"],
        correctAnswer: 0,
        explanation: "Hiç (sorularda): Alguna vez."
    },
    {
        id: 7,
        text: "El año pasado ______ (ir) a México.",
        options: ["fui", "he ido", "iba", "vaya"],
        correctAnswer: 0,
        explanation: "Geçen yıl (Belirli zaman): Fui."
    },
    {
        id: 8,
        text: "Es una experiencia ______ (olvidar).",
        options: ["inolvidable", "olvidable", "buena", "mala"],
        correctAnswer: 0,
        explanation: "Unutulmaz: Inolvidable."
    },
    {
        id: 9,
        text: "Hicimos muchas ______ (fotografía).",
        options: ["fotos", "imágenes", "cuadros", "dibujos"],
        correctAnswer: 0,
        explanation: "Fotoğraflar: Fotos (Fotografías)."
    },
    {
        id: 10,
        text: "Compré un ______ (billete) de avión.",
        options: ["billete", "boleto", "ticket", "entrada"],
        correctAnswer: 0,
        explanation: "Bilet: Billete."
    }
];

// ===== ÜNİTE 84: MÜZİK VE SANAT =====
const unit84Questions: Question[] = [
    {
        id: 1,
        text: "Picasso fue un gran ______ (pintar).",
        options: ["pintor", "pintura", "artista", "cuadro"],
        correctAnswer: 0,
        explanation: "Ressam: Pintor."
    },
    {
        id: 2,
        text: "Esta ______ (obrar) es una maravilla.",
        options: ["obra", "trabajo", "cosa", "arte"],
        correctAnswer: 0,
        explanation: "Eser: Obra."
    },
    {
        id: 3,
        text: "Me encanta la música ______ (clase).",
        options: ["clásica", "antigua", "viejas", "moderna"],
        correctAnswer: 0,
        explanation: "Klasik müzik: Música clásica."
    },
    {
        id: 4,
        text: "Toco la ______ (guitarrista).",
        options: ["guitarra", "guitarrista", "música", "cuerda"],
        correctAnswer: 0,
        explanation: "Gitar: Guitarra."
    },
    {
        id: 5,
        text: "Fuimos a un ______ (concierto) de rock.",
        options: ["concierto", "recital", "show", "baile"],
        correctAnswer: 0,
        explanation: "Konser: Concierto."
    },
    {
        id: 6,
        text: "El flamenco es patrimonio de la ______ (humano).",
        options: ["humanidad", "humana", "mundo", "gente"],
        correctAnswer: 0,
        explanation: "İnsanlık: Humanidad."
    },
    {
        id: 7,
        text: "Visita al ______ (musa) del Prado.",
        options: ["museo", "mueso", "galería", "exposición"],
        correctAnswer: 0,
        explanation: "Müze: Museo."
    },
    {
        id: 8,
        text: "Ese cantante tiene mucho ______ (talento).",
        options: ["talento", "voz", "dinero", "fama"],
        correctAnswer: 0,
        explanation: "Yetenek: Talento."
    },
    {
        id: 9,
        text: "Me gusta bailar ______ (salsa).",
        options: ["salsa", "tango", "vals", "rock"],
        correctAnswer: 0,
        explanation: "Salsa: Salsa."
    },
    {
        id: 10,
        text: "Es una ______ (escultor) de mármol.",
        options: ["escultura", "estatua", "figura", "piedra"],
        correctAnswer: 0,
        explanation: "Heykel: Escultura."
    }
];

// ===== ÜNİTE 85: İLİŞKİLER VE SOSYAL HAYAT =====
const unit85Questions: Question[] = [
    {
        id: 1,
        text: "Me llevo bien ______ mis padres.",
        options: ["con", "de", "a", "por"],
        correctAnswer: 0,
        explanation: "Biriyle iyi geçinmek: Llevarse bien con."
    },
    {
        id: 2,
        text: "Es mi mejor ______ (amigo).",
        options: ["amigo", "conocido", "compañero", "pareja"],
        correctAnswer: 0,
        explanation: "Arkadaş: Amigo."
    },
    {
        id: 3,
        text: "Confío ______ ti.",
        options: ["en", "de", "con", "a"],
        correctAnswer: 0,
        explanation: "Güvenmek: Confiar en."
    },
    {
        id: 4,
        text: "Me ______ (enamorar) de ella.",
        options: ["he enamorado", "enamoré", "enamoro", "amo"],
        correctAnswer: 0,
        explanation: "Aşık oldum: Me he enamorado."
    },
    {
        id: 5,
        text: "Tengo una ______ (citar) esta noche.",
        options: ["cita", "reunión", "encuentro", "salida"],
        correctAnswer: 0,
        explanation: "Randevu (romantik): Cita."
    },
    {
        id: 6,
        text: "Es importante pedir ______ (perdonar).",
        options: ["perdón", "disculpa", "permiso", "ayuda"],
        correctAnswer: 0,
        explanation: "Özür dilemek: Pedir perdón."
    },
    {
        id: 7,
        text: "Me cae ______ (bueno) tu hermano.",
        options: ["bien", "bueno", "malo", "mal"],
        correctAnswer: 0,
        explanation: "Sevmek/Hoşlanmak (arkadaşça): Caer bien."
    },
    {
        id: 8,
        text: "Discutieron ______ política.",
        options: ["sobre", "de", "por", "en"],
        correctAnswer: 0,
        explanation: "Hakkında tartışmak: Discutir sobre/de."
    },
    {
        id: 9,
        text: "Nos ______ (conocer) en la universidad.",
        options: ["conocimos", "vimos", "encontramos", "hablamos"],
        correctAnswer: 0,
        explanation: "Tanıştık: Conocimos."
    },
    {
        id: 10,
        text: "La ______ (soltero) está de moda.",
        options: ["soltería", "soltero", "soledad", "libre"],
        correctAnswer: 0,
        explanation: "Bekarlık: La soltería."
    }
];

// ===== ÜNİTE 86: İŞ VE KARİYER =====
const unit86Questions: Question[] = [
    {
        id: 1,
        text: "Busco ______ (trabajar).",
        options: ["trabajo", "empleo", "curro", "puesto"],
        correctAnswer: 0,
        explanation: "İş: Trabajo."
    },
    {
        id: 2,
        text: "Envié mi ______ (currículo) a la empresa.",
        options: ["currículum", "hoja de vida", "carta", "papel"],
        correctAnswer: 0,
        explanation: "Özgeçmiş: Currículum."
    },
    {
        id: 3,
        text: "Tengo una ______ (entrevistar) mañana.",
        options: ["entrevista", "reunión", "cita", "charla"],
        correctAnswer: 0,
        explanation: "Mülakat: Entrevista."
    },
    {
        id: 4,
        text: "Me han ______ (contrato).",
        options: ["contratado", "despedido", "fichado", "cogido"],
        correctAnswer: 0,
        explanation: "İşe aldılar: Contratado."
    },
    {
        id: 5,
        text: "Quiero un aumento de ______ (sueldo).",
        options: ["sueldo", "salario", "dinero", "paga"],
        correctAnswer: 0,
        explanation: "Maaş: Sueldo."
    },
    {
        id: 6,
        text: "Trabajo a tiempo ______ (parte).",
        options: ["parcial", "completo", "medio", "entero"],
        correctAnswer: 0,
        explanation: "Yarı zamanlı: Tiempo parcial."
    },
    {
        id: 7,
        text: "El ______ (jefe) es muy exigente.",
        options: ["jefe", "patrón", "dueño", "encargado"],
        correctAnswer: 0,
        explanation: "Patron: Jefe."
    },
    {
        id: 8,
        text: "Estoy en el ______ (parar).",
        options: ["paro", "desempleo", "calle", "casa"],
        correctAnswer: 0,
        explanation: "İşsizlik ödeneği/İşsizlik: Paro."
    },
    {
        id: 9,
        text: "Tengo ______ (experto) en ventas.",
        options: ["experiencia", "práctica", "conocimiento", "título"],
        correctAnswer: 0,
        explanation: "Deneyim: Experiencia."
    },
    {
        id: 10,
        text: "Me voy a ______ (jubilar) el año que viene.",
        options: ["jubilar", "retirar", "ir", "descansar"],
        correctAnswer: 0,
        explanation: "Emekli olmak: Jubilar."
    }
];

// ===== ÜNİTE 87: EDEBİYAT 2 =====
const unit87Questions: Question[] = [
    {
        id: 1,
        text: "Dijo que ______ (venir) mañana.",
        options: ["vendría", "viene", "va a venir", "vino"],
        correctAnswer: 0,
        explanation: "Dolaylı anlatım (Gelecek -> Condicional): Vendría."
    },
    {
        id: 2,
        text: "Cien años de ______ (solo).",
        options: ["soledad", "solo", "solitario", "único"],
        correctAnswer: 0,
        explanation: "Yalnızlık: Soledad."
    },
    {
        id: 3,
        text: "El autor ganó el ______ (premiar) Nobel.",
        options: ["premio", "regalo", "dinero", "título"],
        correctAnswer: 0,
        explanation: "Ödül: Premio."
    },
    {
        id: 4,
        text: "Es una ______ (novela) histórica.",
        options: ["novela", "cuento", "poema", "libro"],
        correctAnswer: 0,
        explanation: "Roman: Novela."
    },
    {
        id: 5,
        text: "Me gusta la ______ (poeta).",
        options: ["poesía", "verso", "rima", "poema"],
        correctAnswer: 0,
        explanation: "Şiir (Tür): Poesía."
    },
    {
        id: 6,
        text: "El narrador cuenta la ______ (historiar).",
        options: ["historia", "cuento", "leyenda", "fábula"],
        correctAnswer: 0,
        explanation: "Hikaye: Historia."
    },
    {
        id: 7,
        text: "Es un cuento de ______ (real).",
        options: ["realismo mágico", "realidad", "verdad", "ficción"],
        correctAnswer: 0,
        explanation: "Büyülü gerçekçilik: Realismo mágico."
    },
    {
        id: 8,
        text: "García Márquez es ______ (Colombia).",
        options: ["colombiano", "español", "mexicano", "argentino"],
        correctAnswer: 0,
        explanation: "Kolombiyalı: Colombiano."
    },
    {
        id: 9,
        text: "Neruda escribía ______ (verso).",
        options: ["versos", "rimas", "frases", "letras"],
        correctAnswer: 0,
        explanation: "Dizeler: Versos."
    },
    {
        id: 10,
        text: "Leí todos sus ______ (libro).",
        options: ["libros", "obras", "escritos", "novelas"],
        correctAnswer: 0,
        explanation: "Kitaplar: Libros."
    }
];

// ===== ÜNİTE 88: İSPANYOL COĞRAFYASI =====
const unit88Questions: Question[] = [
    {
        id: 1,
        text: "El norte es muy ______ (ver).",
        options: ["verde", "seco", "árido", "caluroso"],
        correctAnswer: 0,
        explanation: "Kuzey İspanya yeşildir: Verde."
    },
    {
        id: 2,
        text: "En el sur hace mucho ______ (caliente).",
        options: ["calor", "frío", "viento", "lluvia"],
        correctAnswer: 0,
        explanation: "Sıcak: Calor."
    },
    {
        id: 3,
        text: "Las Islas Canarias tienen ______ (volcán).",
        options: ["volcanes", "montañas", "ríos", "lagos"],
        correctAnswer: 0,
        explanation: "Yanardağlar: Volcanes."
    },
    {
        id: 4,
        text: "Los Pirineos son ______ (montar).",
        options: ["montañas", "colinas", "valles", "picos"],
        correctAnswer: 0,
        explanation: "Dağlar: Montañas."
    },
    {
        id: 5,
        text: "El clima es ______ (mediterráneo).",
        options: ["mediterráneo", "atlántico", "continental", "tropical"],
        correctAnswer: 0,
        explanation: "Akdeniz iklimi: Mediterráneo."
    },
    {
        id: 6,
        text: "La ______ (costar) es preciosa.",
        options: ["costa", "playa", "mar", "orilla"],
        correctAnswer: 0,
        explanation: "Kıyı: Costa."
    },
    {
        id: 7,
        text: "Es una región ______ (secar).",
        options: ["seca", "húmeda", "mojada", "fría"],
        correctAnswer: 0,
        explanation: "Kurak: Seca."
    },
    {
        id: 8,
        text: "Hay muchos ______ (río).",
        options: ["ríos", "lagos", "mares", "charcos"],
        correctAnswer: 0,
        explanation: "Nehirler: Ríos."
    },
    {
        id: 9,
        text: "La ______ (capital) es Madrid.",
        options: ["capital", "ciudad", "pueblo", "aldea"],
        correctAnswer: 0,
        explanation: "Başkent: Capital."
    },
    {
        id: 10,
        text: "España está en ______ (Europa).",
        options: ["Europa", "Asia", "África", "América"],
        correctAnswer: 0,
        explanation: "Avrupa: Europa."
    }
];

// ===== ÜNİTE 89: LATİN AMERİKA KÜLTÜRÜ =====
const unit89Questions: Question[] = [
    {
        id: 1,
        text: "En Argentina usan ______ (vos).",
        options: ["voseo", "tuteo", "usted", "ellos"],
        correctAnswer: 0,
        explanation: "Vos kullanımı: Voseo."
    },
    {
        id: 2,
        text: "En México dicen ______ (coche).",
        options: ["carro", "auto", "coche", "buga"],
        correctAnswer: 0,
        explanation: "Araba (Meksika): Carro."
    },
    {
        id: 3,
        text: "El tango es de ______ (Argentina).",
        options: ["Argentina", "Brasil", "Chile", "Perú"],
        correctAnswer: 0,
        explanation: "Tango Arjantin'indir."
    },
    {
        id: 4,
        text: "Machu Picchu está en ______ (Perú).",
        options: ["Perú", "México", "Bolivia", "Ecuador"],
        correctAnswer: 0,
        explanation: "Machu Picchu Peru'dadır."
    },
    {
        id: 5,
        text: "Comen mucha ______ (picante) en México.",
        options: ["comida picante", "dulce", "salado", "amargo"],
        correctAnswer: 0,
        explanation: "Acı yemek: Comida picante."
    },
    {
        id: 6,
        text: "¡Qué ______ (chido)! (Meksika)",
        options: ["chido", "guay", "bacano", "chévere"],
        correctAnswer: 0,
        explanation: "Harika (Meksika): Chido."
    },
    {
        id: 7,
        text: "Vos ______ (tener) razón.",
        options: ["tenés", "tienes", "tiene", "tenéis"],
        correctAnswer: 0,
        explanation: "Vos tenés (Arjantin çekimi)."
    },
    {
        id: 8,
        text: "La salsa es de ______ (Caribe).",
        options: ["Caribe", "Sur", "Norte", "Este"],
        correctAnswer: 0,
        explanation: "Salsa Karayipler kökenlidir."
    },
    {
        id: 9,
        text: "Hablan ______ (español) diferente.",
        options: ["español", "inglés", "francés", "alemán"],
        correctAnswer: 0,
        explanation: "İspanyolca: Español."
    },
    {
        id: 10,
        text: "Es un continente muy ______ (diverso).",
        options: ["diverso", "igual", "pequeño", "aburrido"],
        correctAnswer: 0,
        explanation: "Çeşitli: Diverso."
    }
];

// ===== ÜNİTE 90: B1 KAPSAMLI FİNAL =====
const unit90Questions: Question[] = [
    {
        id: 1,
        text: "Si tuviera tiempo, ______ (viajar) más.",
        options: ["viajaría", "viajara", "viajé", "viajo"],
        correctAnswer: 0,
        explanation: "Tip 2 Koşul Sonuç: Viajaría."
    },
    {
        id: 2,
        text: "Espero que ______ (venir) pronto.",
        options: ["vengas", "vienes", "vendrás", "ven"],
        correctAnswer: 0,
        explanation: "Umut + Subjuntivo: Vengas."
    },
    {
        id: 3,
        text: "El libro fue ______ (escribir) en 1900.",
        options: ["escrito", "escribido", "escribió", "escribe"],
        correctAnswer: 0,
        explanation: "Pasif Participio: Escrito."
    },
    {
        id: 4,
        text: "Estudio ______ (para) aprobar.",
        options: ["para", "por", "a", "de"],
        correctAnswer: 0,
        explanation: "Amaç: Para."
    },
    {
        id: 5,
        text: "No creo que ______ (ser) verdad.",
        options: ["sea", "es", "fue", "sido"],
        correctAnswer: 0,
        explanation: "Şüphe + Subjuntivo: Sea."
    },
    {
        id: 6,
        text: "Se ______ (vivir) bien aquí.",
        options: ["vive", "viven", "viviendo", "vivido"],
        correctAnswer: 0,
        explanation: "Impersonal (Tekil): Vive."
    },
    {
        id: 7,
        text: "Mañana ______ (llamar) al médico.",
        options: ["llamaré", "llamo", "llamé", "llame"],
        correctAnswer: 0,
        explanation: "Gelecek planı: Llamaré."
    },
    {
        id: 8,
        text: "Si llueve, no ______ (salir).",
        options: ["saldré", "salgo", "salga", "salí"],
        correctAnswer: 0,
        explanation: "Tip 1 Koşul Sonuç: Saldré."
    },
    {
        id: 9,
        text: "Me alegra que te ______ (gustar).",
        options: ["guste", "gusta", "gustó", "gustaría"],
        correctAnswer: 0,
        explanation: "Duygu + Subjuntivo: Guste."
    },
    {
        id: 10,
        text: "He ______ (aprender) mucho.",
        options: ["aprendido", "aprendo", "aprendí", "aprenderé"],
        correctAnswer: 0,
        explanation: "Perfecto: Aprendido."
    }
];

// ===== B1 Soru Mapping (ID: 61-90) =====
const questions: { [key: number]: Question[] } = {
    61: unit61Questions,
    62: unit62Questions,
    63: unit63Questions,
    64: unit64Questions,
    65: unit65Questions,
    66: unit66Questions,
    67: unit67Questions,
    68: unit68Questions,
    69: unit69Questions,
    70: unit70Questions,
    71: unit71Questions,
    72: unit72Questions,
    73: unit73Questions,
    74: unit74Questions,
    75: unit75Questions,
    76: unit76Questions,
    77: unit77Questions,
    78: unit78Questions,
    79: unit79Questions,
    80: unit80Questions,
    81: unit81Questions,
    82: unit82Questions,
    83: unit83Questions,
    84: unit84Questions,
    85: unit85Questions,
    86: unit86Questions,
    87: unit87Questions,
    88: unit88Questions,
    89: unit89Questions,
    90: unit90Questions
};

export function getB1QuestionsForUnit(unitId: number): Question[] {
    return questions[unitId] || [];
}
