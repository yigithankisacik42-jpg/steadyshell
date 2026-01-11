/**
 * LinguaFlow Konuşma Veritabanı - İspanyolca B2
 * Ünite 61-80 için konuşma içerikleri
 */

import { UnitSpeaking, SpeakingExercise } from './speakings';

const unit61Speaking: UnitSpeaking = {
    unitId: 61, title: "İleri Subjuntivo", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Dudo que hayamos tomado la decisión correcta, aunque espero equivocarme.", translation: "Doğru kararı alıp almadığımızdan şüpheliyim, yanılmayı umuyorum ama." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es improbable que el gobierno haya considerado todas las consecuencias.", translation: "Hükümetin tüm sonuçları düşünmüş olması pek olası değil." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué esperas que haya pasado para el año 2030?", translation: "2030 yılına kadar ne olmuş olmasını umuyorsun?", expectedKeywords: ["espero", "haya", "cambiado", "mejorado", "tecnología", "clima", "sociedad"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Dudas que la humanidad haya aprendido de sus errores?", translation: "İnsanlığın hatalarından ders almış olduğundan şüphe ediyor musun?", expectedKeywords: ["dudo", "creo", "haya", "aprendido", "repetir", "historia", "ojalá"] },
    ]
};

const unit62Speaking: UnitSpeaking = {
    unitId: 62, title: "Koşullu Cümleler İleri", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Si hubiera sabido eso antes, habría actuado de manera diferente.", translation: "Bunu daha önce bilseydim, farklı davranırdım." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Si no hubieras llegado a tiempo, habríamos perdido el tren.", translation: "Zamanında varmasaydın, treni kaçırırdık." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "Si hubieras nacido en otro país, ¿cómo sería tu vida?", translation: "Başka bir ülkede doğmuş olsaydın hayatın nasıl olurdu?", expectedKeywords: ["hubiera", "sería", "diferente", "habría", "cultura", "idioma", "oportunidades"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué habría pasado si no hubieras aprendido español?", translation: "İspanyolca öğrenmemiş olsaydın ne olurdu?", expectedKeywords: ["habría", "perdido", "oportunidades", "conocido", "comunicar", "diferente"] },
    ]
};

const unit63Speaking: UnitSpeaking = {
    unitId: 63, title: "Edilgen Çatı Kullanımı", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La nueva ley fue aprobada por unanimidad en el parlamento.", translation: "Yeni yasa parlamentoda oybirliğiyle onaylandı." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Se estima que más de un millón de personas fueron afectadas por la crisis.", translation: "Bir milyondan fazla kişinin krizden etkilendiği tahmin ediliyor." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo fue construido el edificio más alto de tu ciudad?", translation: "Şehrindeki en yüksek bina nasıl inşa edildi?", expectedKeywords: ["fue", "construido", "años", "empresa", "terminado", "diseñado"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuándo fue fundada tu universidad?", translation: "Üniversiten ne zaman kuruldu?", expectedKeywords: ["fue", "fundada", "año", "siglo", "establecida", "creada"] },
    ]
};

const unit64Speaking: UnitSpeaking = {
    unitId: 64, title: "Dolaylı Anlatım İleri", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El ministro afirmó que se tomarían medidas urgentes para resolver la crisis.", translation: "Bakan krizi çözmek için acil önlemler alınacağını belirtti." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Los expertos advirtieron que las consecuencias podrían ser devastadoras.", translation: "Uzmanlar sonuçların yıkıcı olabileceği konusunda uyardı." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué dijeron los científicos sobre el cambio climático?", translation: "Bilim insanları iklim değişikliği hakkında ne dedi?", expectedKeywords: ["dijeron", "que", "urgente", "necesario", "consecuencias", "actuar"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo resumirías lo que dijo el presidente en su discurso?", translation: "Cumhurbaşkanının konuşmasında ne dediğini nasıl özetlersin?", expectedKeywords: ["dijo", "que", "prometió", "anunció", "explicó", "afirmó"] },
    ]
};

const unit65Speaking: UnitSpeaking = {
    unitId: 65, title: "Akademik Tartışma", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Según los estudios más recientes, existe una correlación significativa entre ambos factores.", translation: "En son çalışmalara göre her iki faktör arasında önemli bir korelasyon var." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "La hipótesis inicial fue refutada por los datos empíricos.", translation: "İlk hipotez ampirik verilerle çürütüldü." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo argumentarías la importancia de tu investigación?", translation: "Araştırmanın önemini nasıl savunursun?", expectedKeywords: ["argumentaría", "porque", "importante", "contribuye", "conocimiento", "problema", "solución"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son las limitaciones de tu estudio?", translation: "Çalışmanın sınırlamaları neler?", expectedKeywords: ["limitaciones", "muestra", "tiempo", "recursos", "generalizar", "futuro"] },
    ]
};

const unit66Speaking: UnitSpeaking = {
    unitId: 66, title: "Münazara Teknikleri", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Aunque entiendo su argumento, considero que hay varias falacias en su razonamiento.", translation: "Argümanınızı anlasam da, akıl yürütmenizde birkaç mantık hatası olduğunu düşünüyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Los datos que presenta no respaldan necesariamente la conclusión que propone.", translation: "Sunduğunuz veriler önerdiğiniz sonucu mutlaka desteklemiyor." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo refutarías el argumento de que la tecnología nos aísla?", translation: "Teknolojinin bizi yalıttığı argümanını nasıl çürütürsün?", expectedKeywords: ["refutaría", "porque", "conecta", "depende", "uso", "equilibrio", "herramienta"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es la diferencia entre una opinión y un argumento fundamentado?", translation: "Bir görüş ile temelli bir argüman arasındaki fark ne?", expectedKeywords: ["diferencia", "opinión", "evidencia", "datos", "subjetivo", "objetivo", "fundamento"] },
    ]
};

// Kısa format: 67-80
const unit67Speaking: UnitSpeaking = {
    unitId: 67, title: "İş Müzakereleri", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Nuestra propuesta beneficiaría a ambas partes de manera equitativa.", translation: "Teklifimiz her iki tarafa da eşit şekilde fayda sağlar." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles serían sus condiciones para cerrar el acuerdo?", translation: "Anlaşmayı kapatmak için koşullarınız ne olurdu?", expectedKeywords: ["condiciones", "precio", "plazo", "garantía", "flexibilidad", "términos"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo responderías a una oferta que consideras insuficiente?", translation: "Yetersiz gördüğün bir teklife nasıl yanıt verirsin?", expectedKeywords: ["propongo", "alternativa", "revisar", "negociar", "punto medio", "contrapropuesta"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué estrategia usarías para llegar a un acuerdo?", translation: "Bir anlaşmaya varmak için hangi stratejiyi kullanırsın?", expectedKeywords: ["estrategia", "escuchar", "comprender", "ganar-ganar", "flexibilidad", "objetivos"] },
    ]
};

const unit68Speaking: UnitSpeaking = {
    unitId: 68, title: "Hukuk Terminolojisi", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El contrato estipula que ambas partes deben cumplir con sus obligaciones.", translation: "Sözleşme her iki tarafın da yükümlülüklerini yerine getirmesi gerektiğini belirtir." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Qué harías si la otra parte incumpliera el contrato?", translation: "Karşı taraf sözleşmeyi ihlal ederse ne yaparsın?", expectedKeywords: ["demandar", "abogado", "negociar", "tribunal", "indemnización", "resolver"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo explicarías la diferencia entre derecho civil y penal?", translation: "Medeni hukuk ve ceza hukuku arasındaki farkı nasıl açıklarsın?", expectedKeywords: ["civil", "penal", "privado", "delito", "daños", "castigo", "compensación"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuándo recomendarías consultar a un abogado?", translation: "Bir avukata danışmayı ne zaman önerirsin?", expectedKeywords: ["recomendaría", "contrato", "disputa", "importante", "derechos", "complicado"] },
    ]
};

const unit69Speaking: UnitSpeaking = {
    unitId: 69, title: "Tıp Konuşmaları", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Los resultados del análisis indican que necesita un tratamiento especializado.", translation: "Analiz sonuçları özel bir tedaviye ihtiyacınız olduğunu gösteriyor." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Cómo explicarías tu historial médico a un nuevo doctor?", translation: "Yeni bir doktora tıbbi geçmişini nasıl açıklarsın?", expectedKeywords: ["tengo", "tuve", "alergia", "operación", "medicamentos", "enfermedad", "crónico"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué preguntas harías sobre un tratamiento nuevo?", translation: "Yeni bir tedavi hakkında hangi soruları sorarsın?", expectedKeywords: ["efectos", "secundarios", "duración", "éxito", "alternativas", "riesgos"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo describir ías síntomas complejos?", translation: "Kompleks belirtileri nasıl tanımlarsın?", expectedKeywords: ["siento", "empezó", "peor", "mejor", "frecuencia", "intensidad"] },
    ]
};

const unit70Speaking: UnitSpeaking = {
    unitId: 70, title: "Finans ve Yatırım", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Una cartera diversificada reduce el riesgo y optimiza los rendimientos a largo plazo.", translation: "Çeşitlendirilmiş bir portföy riski azaltır ve uzun vadede getirileri optimize eder." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Cómo explicarías la importancia de diversificar inversiones?", translation: "Yatırımları çeşitlendirmenin önemini nasıl açıklarsın?", expectedKeywords: ["diversificar", "riesgo", "diferentes", "activos", "pérdida", "equilibrio"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué factores consideras antes de invertir?", translation: "Yatırım yapmadan önce hangi faktörleri değerlendirirsin?", expectedKeywords: ["considero", "riesgo", "plazo", "rendimiento", "liquidez", "objetivo"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué opinas de las criptomonedas como inversión?", translation: "Yatırım olarak kripto paralar hakkında ne düşünüyorsun?", expectedKeywords: ["opino", "volátiles", "riesgo", "futuro", "tecnología", "especulación"] },
    ]
};

const unit71Speaking: UnitSpeaking = {
    unitId: 71, title: "Edebiyat Analizi", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El realismo mágico de García Márquez revolucionó la literatura latinoamericana.", translation: "García Márquez'in büyülü gerçekçiliği Latin Amerika edebiyatında devrim yarattı." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Cómo analizarías el tema principal de una novela?", translation: "Bir romanın ana temasını nasıl analiz edersin?", expectedKeywords: ["analizaría", "tema", "personajes", "conflicto", "mensaje", "contexto", "simbolismo"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué hace que un libro sea considerado un clásico?", translation: "Bir kitabı klasik yapan ne?", expectedKeywords: ["tiempo", "universal", "impacto", "relevante", "estilo", "humanidad"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo influye el contexto histórico en la literatura?", translation: "Tarihi bağlam edebiyatı nasıl etkiler?", expectedKeywords: ["influye", "refleja", "sociedad", "época", "valores", "problemas", "autor"] },
    ]
};

const unit72Speaking: UnitSpeaking = {
    unitId: 72, title: "Eleştiri Yapma", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Aunque la película tiene momentos brillantes, el guión presenta inconsistencias notables.", translation: "Film parlak anlar içerse de senaryo önemli tutarsızlıklar gösteriyor." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Cómo harías una crítica constructiva de un trabajo?", translation: "Bir çalışmanın yapıcı eleştirisini nasıl yaparsın?", expectedKeywords: ["primero", "positivo", "mejorar", "específico", "sugerencias", "equilibrio"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué elementos analizas al evaluar una obra de arte?", translation: "Bir sanat eserini değerlendirirken hangi unsurları analiz edersin?", expectedKeywords: ["analizo", "técnica", "mensaje", "emoción", "contexto", "originalidad"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo distingues entre gusto personal y calidad objetiva?", translation: "Kişisel beğeni ile objektif kalite arasında nasıl ayrım yaparsın?", expectedKeywords: ["distingo", "subjetivo", "objetivo", "criterios", "técnica", "gusto", "valorar"] },
    ]
};

const unit73Speaking: UnitSpeaking = {
    unitId: 73, title: "Medya Eleştirisi", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Es crucial verificar las fuentes antes de compartir información en redes sociales.", translation: "Sosyal medyada bilgi paylaşmadan önce kaynakları doğrulamak çok önemli." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Cómo identificas las noticias falsas?", translation: "Sahte haberleri nasıl tespit edersin?", expectedKeywords: ["verifico", "fuentes", "múltiples", "sensacionalista", "evidencia", "original"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Crees que los algoritmos de redes sociales son perjudiciales?", translation: "Sosyal medya algoritmalarının zararlı olduğunu düşünüyor musun?", expectedKeywords: ["creo", "burbuja", "polarización", "útiles", "depende", "información"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué responsabilidad tienen los medios en la democracia?", translation: "Medyanın demokraside ne sorumluluğu var?", expectedKeywords: ["responsabilidad", "informar", "objetividad", "verdad", "ciudadanos", "poder"] },
    ]
};

const unit74Speaking: UnitSpeaking = {
    unitId: 74, title: "Sosyoloji Tartışması", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La desigualdad social sigue siendo uno de los mayores desafíos de nuestra época.", translation: "Sosyal eşitsizlik çağımızın en büyük zorluklarından biri olmaya devam ediyor." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles crees que son las causas de la desigualdad?", translation: "Eşitsizliğin nedenleri sence neler?", expectedKeywords: ["causas", "educación", "oportunidades", "sistema", "economía", "discriminación"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo afecta la globalización a las culturas locales?", translation: "Küreselleşme yerel kültürleri nasıl etkiliyor?", expectedKeywords: ["afecta", "homogeneización", "pérdida", "intercambio", "positivo", "negativo"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué papel juega la educación en el cambio social?", translation: "Eğitim toplumsal değişimde ne rol oynuyor?", expectedKeywords: ["papel", "fundamental", "movilidad", "conciencia", "valores", "crítico"] },
    ]
};

const unit75Speaking: UnitSpeaking = {
    unitId: 75, title: "Felsefe Tartışması", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Descartes afirmó 'pienso, luego existo' como fundamento del conocimiento.", translation: "Descartes 'düşünüyorum, öyleyse varım'ı bilginin temeli olarak ileri sürdü." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Cuál crees que es el sentido de la vida?", translation: "Hayatın anlamı sence ne?", expectedKeywords: ["creo", "sentido", "felicidad", "propósito", "relaciones", "contribuir", "personal"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Existe el libre albedrío o todo está determinado?", translation: "Özgür irade var mı yoksa her şey belirlenmiş mi?", expectedKeywords: ["creo", "libre", "determinado", "elecciones", "factores", "parcialmente", "ilusión"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué es más importante: la razón o las emociones?", translation: "Hangisi daha önemli: akıl mı duygular mı?", expectedKeywords: ["importante", "equilibrio", "razón", "emociones", "complementan", "depende", "humano"] },
    ]
};

const unit76Speaking: UnitSpeaking = {
    unitId: 76, title: "Bilimsel Tartışma", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El método científico requiere hipótesis verificables y experimentos replicables.", translation: "Bilimsel yöntem doğrulanabilir hipotezler ve tekrarlanabilir deneyler gerektirir." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Por qué es importante la revisión por pares en la ciencia?", translation: "Bilimde hakemli değerlendirme neden önemli?", expectedKeywords: ["importante", "verificar", "calidad", "errores", "objetividad", "confianza"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo explicarías la diferencia entre teoría y ley científica?", translation: "Teori ve bilimsel yasa arasındaki farkı nasıl açıklarsın?", expectedKeywords: ["teoría", "ley", "explica", "describe", "evidencia", "comprobado"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Debe la ciencia tener límites éticos?", translation: "Bilimin etik sınırları olmalı mı?", expectedKeywords: ["debe", "límites", "éticos", "responsabilidad", "consecuencias", "humanidad"] },
    ]
};

const unit77Speaking: UnitSpeaking = {
    unitId: 77, title: "Çevre Politikaları", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El Acuerdo de París establece compromisos para limitar el calentamiento global.", translation: "Paris Anlaşması küresel ısınmayı sınırlamak için taahhütler belirliyor." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Qué medidas tomarías para combatir el cambio climático?", translation: "İklim değişikliğiyle mücadele için hangi önlemleri alırdın?", expectedKeywords: ["medidas", "renovables", "reducir", "transporte", "consumo", "reciclar", "políticas"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Debería priorizar el crecimiento económico o el medio ambiente?", translation: "Ekonomik büyüme mi çevre mi öncelikli olmalı?", expectedKeywords: ["debería", "equilibrio", "sostenible", "economía", "futuro", "ambos", "compatible"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es la responsabilidad de las empresas en la crisis climática?", translation: "Şirketlerin iklim krizindeki sorumluluğu ne?", expectedKeywords: ["responsabilidad", "emisiones", "producción", "sostenible", "transparencia", "regulación"] },
    ]
};

const unit78Speaking: UnitSpeaking = {
    unitId: 78, title: "Uluslararası İlişkiler", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La diplomacia multilateral es esencial para resolver los conflictos internacionales.", translation: "Çok taraflı diplomasi uluslararası çatışmaları çözmek için esastır." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Cuál crees que es el papel de la ONU en el mundo actual?", translation: "BM'nin günümüz dünyasında rolü sence ne?", expectedKeywords: ["papel", "paz", "cooperación", "limitado", "importante", "conflictos", "derechos"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿La globalización une o divide a los países?", translation: "Küreselleşme ülkeleri birleştiriyor mu ayırıyor mu?", expectedKeywords: ["une", "divide", "ambos", "económico", "cultural", "desigualdad", "conecta"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo debería la comunidad internacional responder a las crisis humanitarias?", translation: "Uluslararası topluluk insani krizlere nasıl yanıt vermeli?", expectedKeywords: ["debería", "ayuda", "intervención", "derechos", "soberanía", "coordinación"] },
    ]
};

const unit79Speaking: UnitSpeaking = {
    unitId: 79, title: "Kültürlerarası İletişim", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La inteligencia cultural implica adaptar nuestra comunicación a diferentes contextos.", translation: "Kültürel zeka iletişimimizi farklı bağlamlara uyarlamayı içerir." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Qué malentendidos culturales has experimentado?", translation: "Hangi kültürel yanlış anlamaları deneyimledin?", expectedKeywords: ["malentendido", "diferente", "costumbre", "gestos", "tiempo", "comunicación"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo te adaptas a una nueva cultura?", translation: "Yeni bir kültüre nasıl uyum sağlarsın?", expectedKeywords: ["adapto", "observo", "aprendo", "respeto", "preguntar", "abierto", "paciencia"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Es posible entender completamente otra cultura?", translation: "Başka bir kültürü tamamen anlamak mümkün mü?", expectedKeywords: ["posible", "difícil", "tiempo", "inmersión", "perspectiva", "parcialmente", "esfuerzo"] },
    ]
};

const unit80Speaking: UnitSpeaking = {
    unitId: 80, title: "B2 Ustalık", language: "İspanyolca", level: "B2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Alcanzar el nivel B2 representa un hito importante en mi aprendizaje del español.", translation: "B2 seviyesine ulaşmak İspanyolca öğrenimimde önemli bir kilometre taşını temsil ediyor." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Qué ha sido lo más difícil de aprender español para ti?", translation: "İspanyolca öğrenmede senin için en zor olan ne oldu?", expectedKeywords: ["difícil", "subjuntivo", "verbos", "pronunciación", "fluidez", "vocabulario"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo planeas mantener y mejorar tu español?", translation: "İspanyolcanı nasıl korumayı ve geliştirmeyi planlıyorsun?", expectedKeywords: ["planeo", "practicar", "leer", "hablar", "películas", "viajar", "nativos"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué consejos darías a alguien que empieza a aprender español?", translation: "İspanyolca öğrenmeye başlayan birine ne tavsiye verirsin?", expectedKeywords: ["consejo", "practicar", "miedo", "errores", "cultura", "paciencia", "consistencia"] },
    ]
};

// B2 speakings listesi
const b2Speakings: { [key: number]: UnitSpeaking } = {
    61: unit61Speaking, 62: unit62Speaking, 63: unit63Speaking, 64: unit64Speaking, 65: unit65Speaking,
    66: unit66Speaking, 67: unit67Speaking, 68: unit68Speaking, 69: unit69Speaking, 70: unit70Speaking,
    71: unit71Speaking, 72: unit72Speaking, 73: unit73Speaking, 74: unit74Speaking, 75: unit75Speaking,
    76: unit76Speaking, 77: unit77Speaking, 78: unit78Speaking, 79: unit79Speaking, 80: unit80Speaking
};

export function getB2SpeakingForUnit(unitId: number): UnitSpeaking | undefined {
    return b2Speakings[unitId];
}
