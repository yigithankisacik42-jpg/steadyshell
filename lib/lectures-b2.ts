/**
 * SteadyShell İspanyolca B2 Ders Anlatımları
 * 
 * B2 Seviyesi: Ünite 61-80 (20 ünite)
 * İleri düzey konular ve detaylı açıklamalar
 */

export interface B2LectureSlide {
    title: string;
    content?: string;
    vocabulary?: { spanish: string; turkish: string }[];
    grammarTable?: string;
    examples?: { spanish: string; turkish: string }[];
}

export interface B2Lecture {
    unitId: number;
    title: string;
    description: string;
    slides: B2LectureSlide[];
}

// ===== ÜNİTE 61: Subjuntivo Perfecto =====
const unit61Lecture: B2Lecture = {
    unitId: 61,
    title: "Subjuntivo Perfecto",
    description: "Geçmişte tamamlanmış eylemleri şüphe/istek ile ifade etme",
    slides: [
        { title: "Giriş", content: "Subjuntivo Perfecto, geçmişte tamamlanmış bir eylemi şüphe, istek, duygu veya belirsizlik ile ifade ederken kullanılır. Türkçe'deki '...mış olsun' yapısına benzer." },
        { title: "Yapı", content: "**HABER (subjuntivo) + Participio**\n\nHaber fiilinin subjuntivo çekimi + geçmiş zaman ortacı (participio) kullanılır.", grammarTable: "| Kişi | Haber |\n|------|-------|\n| Yo | haya |\n| Tú | hayas |\n| Él/Ella | haya |\n| Nosotros | hayamos |\n| Vosotros | hayáis |\n| Ellos | hayan |" },
        { title: "Örnekler", content: "Subjuntivo gerektiren yapılarla kullanılır:", examples: [{ spanish: "Espero que haya llegado bien.", turkish: "İyi varmış olmasını umuyorum." }, { spanish: "Dudo que lo haya hecho.", turkish: "Yapmış olduğundan şüpheliyim." }, { spanish: "Es posible que haya olvidado.", turkish: "Unutmuş olması mümkün." }, { spanish: "Me alegra que hayas venido.", turkish: "Gelmiş olmana sevindim." }] },
        { title: "Düzensiz Participio'lar", content: "Bazı fiillerin düzensiz participio'ları vardır:", vocabulary: [{ spanish: "hacer → hecho", turkish: "yapmış" }, { spanish: "decir → dicho", turkish: "söylemiş" }, { spanish: "ver → visto", turkish: "görmüş" }, { spanish: "escribir → escrito", turkish: "yazmış" }, { spanish: "abrir → abierto", turkish: "açmış" }] }
    ]
};

// ===== ÜNİTE 62: Subjuntivo Imperfecto =====
const unit62Lecture: B2Lecture = {
    unitId: 62,
    title: "Subjuntivo Imperfecto",
    description: "Geçmiş veya varsayımsal durumlar için subjuntivo",
    slides: [
        { title: "Giriş", content: "Subjuntivo Imperfecto, geçmişteki durumları veya gerçekleşmemiş varsayımları ifade eder. Türkçe'deki '...seydim/seydin' yapısına benzer." },
        { title: "Yapı", content: "İki form vardır: **-ra** ve **-se**. Her ikisi de aynı anlama gelir ama -ra daha yaygındır.", grammarTable: "| Kişi | -ar (hablar) | -er (comer) |\n|------|--------------|-------------|\n| Yo | hablara | comiera |\n| Tú | hablaras | comieras |\n| Él | hablara | comiera |\n| Nosotros | habláramos | comiéramos |\n| Ellos | hablaran | comieran |" },
        { title: "Kullanım Alanları", content: "1. **Şart cümleleri:** Si pudiera, lo haría.\n2. **İstek:** Ojalá tuviera más tiempo.\n3. **Karşılaştırma:** Como si fuera verdad.\n4. **Kibarlık:** Quisiera una habitación.", examples: [{ spanish: "Si supiera la respuesta, te la diría.", turkish: "Cevabı bilseydim, sana söylerdim." }] },
        { title: "Düzensiz Fiiller", content: "3. tekil Pretérito'dan türer:", vocabulary: [{ spanish: "tener → tuviera", turkish: "olsaydı" }, { spanish: "poder → pudiera", turkish: "yapabilseydim" }, { spanish: "saber → supiera", turkish: "bilseydim" }, { spanish: "venir → viniera", turkish: "gelseydi" }, { spanish: "hacer → hiciera", turkish: "yapsaydı" }] }
    ]
};

// ===== ÜNİTE 63-80: Diğer dersler =====
const unit63Lecture: B2Lecture = {
    unitId: 63, title: "İleri Şart Cümleleri", description: "Karmaşık şart yapıları ve bağlaçlar",
    slides: [
        { title: "Şart Bağlaçları", content: "Subjuntivo gerektiren özel bağlaçlar:\n\n• **a condición de que** - şartıyla\n• **siempre que** - ...dığı sürece\n• **a menos que** - ...medikçe\n• **en caso de que** - ...durumunda\n• **con tal de que** - yeter ki" },
        { title: "Örnekler", examples: [{ spanish: "A condición de que llegues puntual.", turkish: "Zamanında gelmen şartıyla." }, { spanish: "A menos que llueva, iremos.", turkish: "Yağmur yağmadıkça gideceğiz." }] }
    ]
};

const unit64Lecture: B2Lecture = {
    unitId: 64, title: "Akademik Yazım", description: "Akademik ve resmi yazım teknikleri",
    slides: [
        { title: "Akademik Bağlaçlar", content: "Akademik metinlerde kullanılan geçiş ifadeleri:\n\n• **Según** - ...e göre\n• **Cabe destacar que** - Belirtmek gerekir ki\n• **En conclusión** - Sonuç olarak\n• **A diferencia de** - ...den farklı olarak" },
        { title: "Kaynak Gösterme", examples: [{ spanish: "Como señala García (2020)...", turkish: "García'nın (2020) belirttiği gibi..." }] }
    ]
};

const unit65Lecture: B2Lecture = {
    unitId: 65, title: "Ekonomi ve Finans", description: "Ekonomik terimler ve finansal ifadeler",
    slides: [
        { title: "Finansal Terimler", vocabulary: [{ spanish: "inversión", turkish: "yatırım" }, { spanish: "acción", turkish: "hisse" }, { spanish: "bolsa", turkish: "borsa" }, { spanish: "inflación", turkish: "enflasyon" }, { spanish: "presupuesto", turkish: "bütçe" }] },
        { title: "Finansal İfadeler", examples: [{ spanish: "La bolsa subió un 5%.", turkish: "Borsa %5 yükseldi." }, { spanish: "La inflación está por las nubes.", turkish: "Enflasyon çok yüksek." }] }
    ]
};

const unit66Lecture: B2Lecture = {
    unitId: 66, title: "Hukuk ve Adalet", description: "Hukuki terimler ve mahkeme dili",
    slides: [
        { title: "Hukuk Terimleri", vocabulary: [{ spanish: "juicio", turkish: "dava" }, { spanish: "fiscal", turkish: "savcı" }, { spanish: "testigo", turkish: "tanık" }, { spanish: "sentencia", turkish: "karar" }, { spanish: "apelación", turkish: "temyiz" }] },
        { title: "Mahkeme İfadeleri", examples: [{ spanish: "El acusado fue declarado culpable.", turkish: "Sanık suçlu bulundu." }] }
    ]
};

const unit67Lecture: B2Lecture = {
    unitId: 67, title: "Bilim ve Teknoloji İleri", description: "İleri teknoloji ve bilimsel kavramlar",
    slides: [
        { title: "Teknoloji Terimleri", vocabulary: [{ spanish: "inteligencia artificial", turkish: "yapay zeka" }, { spanish: "blockchain", turkish: "blokzinciri" }, { spanish: "ciberseguridad", turkish: "siber güvenlik" }, { spanish: "big data", turkish: "büyük veri" }] }
    ]
};

const unit68Lecture: B2Lecture = {
    unitId: 68, title: "Siyaset ve Toplum", description: "Siyasi kavramlar ve toplumsal meseleler",
    slides: [
        { title: "Siyasi Terimler", vocabulary: [{ spanish: "democracia", turkish: "demokrasi" }, { spanish: "derechos humanos", turkish: "insan hakları" }, { spanish: "libertad de expresión", turkish: "ifade özgürlüğü" }, { spanish: "manifestación", turkish: "gösteri" }] }
    ]
};

const unit69Lecture: B2Lecture = {
    unitId: 69, title: "Medya ve İletişim", description: "Gazetecilik ve dijital medya",
    slides: [
        { title: "Medya Terimleri", vocabulary: [{ spanish: "periodismo", turkish: "gazetecilik" }, { spanish: "desinformación", turkish: "dezenformasyon" }, { spanish: "censura", turkish: "sansür" }, { spanish: "viral", turkish: "viral" }] }
    ]
};

const unit70Lecture: B2Lecture = {
    unitId: 70, title: "Psikoloji ve Davranış", description: "Psikolojik kavramlar ve duygusal zeka",
    slides: [
        { title: "Psikoloji Terimleri", vocabulary: [{ spanish: "ansiedad", turkish: "kaygı" }, { spanish: "depresión", turkish: "depresyon" }, { spanish: "autoestima", turkish: "özgüven" }, { spanish: "resiliencia", turkish: "dayanıklılık" }] }
    ]
};

const unit71Lecture: B2Lecture = {
    unitId: 71, title: "Felsefe ve Düşünce", description: "Temel felsefi kavramlar",
    slides: [
        { title: "Felsefe Terimleri", vocabulary: [{ spanish: "ética", turkish: "etik" }, { spanish: "moral", turkish: "ahlak" }, { spanish: "conciencia", turkish: "bilinç" }, { spanish: "libre albedrío", turkish: "özgür irade" }] }
    ]
};

const unit72Lecture: B2Lecture = {
    unitId: 72, title: "Çevre ve Sürdürülebilirlik", description: "Çevre sorunları ve çözümler",
    slides: [
        { title: "Çevre Terimleri", vocabulary: [{ spanish: "huella de carbono", turkish: "karbon ayak izi" }, { spanish: "biodiversidad", turkish: "biyoçeşitlilik" }, { spanish: "calentamiento global", turkish: "küresel ısınma" }, { spanish: "sostenibilidad", turkish: "sürdürülebilirlik" }] }
    ]
};

const unit73Lecture: B2Lecture = {
    unitId: 73, title: "Kültür ve Sanat İleri", description: "Sanat akımları ve kültürel miras",
    slides: [
        { title: "Sanat Terimleri", vocabulary: [{ spanish: "patrimonio", turkish: "miras" }, { spanish: "vanguardia", turkish: "avangard" }, { spanish: "surrealismo", turkish: "sürrealizm" }, { spanish: "renacimiento", turkish: "Rönesans" }] }
    ]
};

const unit74Lecture: B2Lecture = {
    unitId: 74, title: "İş Dünyası İleri", description: "Girişimcilik ve profesyonel iş dili",
    slides: [
        { title: "İş Terimleri", vocabulary: [{ spanish: "emprendimiento", turkish: "girişimcilik" }, { spanish: "startup", turkish: "startup" }, { spanish: "inversores", turkish: "yatırımcılar" }, { spanish: "liderazgo", turkish: "liderlik" }] }
    ]
};

const unit75Lecture: B2Lecture = {
    unitId: 75, title: "Tarih ve Uygarlıklar", description: "Tarihsel olaylar ve uygarlıklar",
    slides: [
        { title: "Tarih Terimleri", vocabulary: [{ spanish: "civilización", turkish: "uygarlık" }, { spanish: "imperio", turkish: "imparatorluk" }, { spanish: "revolución", turkish: "devrim" }, { spanish: "colonización", turkish: "sömürgecilik" }] }
    ]
};

const unit76Lecture: B2Lecture = {
    unitId: 76, title: "Tıp ve Sağlık İleri", description: "Tıbbi terimler ve sağlık sistemi",
    slides: [
        { title: "Tıp Terimleri", vocabulary: [{ spanish: "diagnóstico", turkish: "teşhis" }, { spanish: "tratamiento", turkish: "tedavi" }, { spanish: "cirugía", turkish: "ameliyat" }, { spanish: "pandemia", turkish: "pandemi" }] }
    ]
};

const unit77Lecture: B2Lecture = {
    unitId: 77, title: "Edebiyat ve Yazarlık", description: "Edebi analiz ve yazım teknikleri",
    slides: [
        { title: "Edebiyat Terimleri", vocabulary: [{ spanish: "narrativa", turkish: "anlatı" }, { spanish: "metáfora", turkish: "metafor" }, { spanish: "protagonista", turkish: "başkahraman" }, { spanish: "trama", turkish: "olay örgüsü" }] }
    ]
};

const unit78Lecture: B2Lecture = {
    unitId: 78, title: "Uluslararası İlişkiler", description: "Diplomasi ve küresel politika",
    slides: [
        { title: "Diplomasi Terimleri", vocabulary: [{ spanish: "diplomacia", turkish: "diplomasi" }, { spanish: "tratado", turkish: "antlaşma" }, { spanish: "sanción", turkish: "yaptırım" }, { spanish: "refugiado", turkish: "mülteci" }] }
    ]
};

const unit79Lecture: B2Lecture = {
    unitId: 79, title: "İleri Tartışma ve Argümantasyon", description: "Tartışma ve ikna teknikleri",
    slides: [
        { title: "Tartışma Kalıpları", vocabulary: [{ spanish: "argumentar", turkish: "savunmak" }, { spanish: "refutar", turkish: "çürütmek" }, { spanish: "conceder", turkish: "kabul etmek" }, { spanish: "persuadir", turkish: "ikna etmek" }] },
        { title: "Örnekler", examples: [{ spanish: "Permítame argumentar mi posición.", turkish: "Pozisyonumu savunmama izin verin." }] }
    ]
};

const unit80Lecture: B2Lecture = {
    unitId: 80, title: "B2 Seviyesi Özet", description: "B2 seviyesi genel tekrar",
    slides: [
        { title: "Tebrikler!", content: "**B2 seviyesini tamamladın!**\n\nArtık:\n• Subjuntivo'nun tüm formlarını kullanabilirsin\n• Akademik ve profesyonel dilde iletişim kurabilirsin\n• Karmaşık konularda tartışabilirsin\n• Nüanslı ve soyut kavramları anlayabilirsin" },
        { title: "Sonraki Adım", content: "**C1 seviyesine hazırsın!**\n\nC1'de daha da ileri düzey yapılar ve ana dili gibi akıcılık hedeflenecek." }
    ]
};

// Ünite ID'sine göre ders getir (ID: 81-100) - Güncellenmiş aralık
export function getB2LectureForUnit(unitId: number): B2Lecture {
    // Unit ID'leri 81-100 arasında, içeride unit61-80 lecture'larını kullan
    const idMapping: { [key: number]: B2Lecture } = {
        // B2 Temel Üniteler (81-90)
        81: unit61Lecture, 82: unit62Lecture, 83: unit63Lecture, 84: unit64Lecture, 85: unit65Lecture,
        86: unit66Lecture, 87: unit67Lecture, 88: unit68Lecture, 89: unit69Lecture, 90: unit70Lecture,
        // B2 İleri Üniteler (91-100)
        91: unit71Lecture, 92: unit72Lecture, 93: unit73Lecture, 94: unit74Lecture, 95: unit75Lecture,
        96: unit76Lecture, 97: unit77Lecture, 98: unit78Lecture, 99: unit79Lecture, 100: unit80Lecture
    };
    return idMapping[unitId] || unit61Lecture;
}

