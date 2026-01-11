/**
 * LinguaFlow İspanyolca B2 Kalıp Veritabanı
 * 
 * B2 Seviyesi: Ünite 61-80 (20 ünite × 8 kalıp = 160 kalıp)
 * İleri düzey akademik, profesyonel ve soyut ifadeler
 */

export interface B2Phrase {
    id: number;
    target: string;
    native: string;
    pronunciation: string;
}

// ===== ÜNİTE 61: Subjuntivo Perfecto =====
const unit61Phrases: B2Phrase[] = [
    { id: 1, target: "Espero que haya llegado bien.", native: "İyi varmış olmasını umuyorum.", pronunciation: "es-PE-ro ke A-ya ye-GA-do byen" },
    { id: 2, target: "Dudo que lo haya hecho.", native: "Yapmış olduğundan şüpheliyim.", pronunciation: "DU-do ke lo A-ya E-ço" },
    { id: 3, target: "Es posible que haya olvidado.", native: "Unutmuş olması mümkün.", pronunciation: "es po-SI-ble ke A-ya ol-vi-DA-do" },
    { id: 4, target: "No creo que haya visto.", native: "Görmüş olduğuna inanmıyorum.", pronunciation: "no KRE-o ke A-ya VIS-to" },
    { id: 5, target: "Ojalá haya llegado a tiempo.", native: "Keşke zamanında gelmiş olsun.", pronunciation: "o-ha-LA A-ya ye-GA-do a TYEM-po" },
    { id: 6, target: "Me alegra que hayas venido.", native: "Gelmiş olmana sevindim.", pronunciation: "me a-LE-gra ke A-yas ve-NI-do" },
    { id: 7, target: "Es una lástima que se haya ido.", native: "Gitmiş olması üzücü.", pronunciation: "es U-na LAS-ti-ma ke se A-ya I-do" },
    { id: 8, target: "Cuando hayas terminado, avísame.", native: "Bitirdiğinde haber ver.", pronunciation: "KWAN-do A-yas ter-mi-NA-do a-VI-sa-me" },
];

// ===== ÜNİTE 62: Subjuntivo Imperfecto =====
const unit62Phrases: B2Phrase[] = [
    { id: 1, target: "Si pudiera, lo haría.", native: "Yapabilseydim, yapardım.", pronunciation: "si pu-DYE-ra lo a-RI-a" },
    { id: 2, target: "Ojalá tuviera más tiempo.", native: "Keşke daha fazla zamanım olsa.", pronunciation: "o-ha-LA tu-VYE-ra mas TYEM-po" },
    { id: 3, target: "Como si fuera verdad.", native: "Sanki gerçekmiş gibi.", pronunciation: "KO-mo si FWE-ra ver-DAD" },
    { id: 4, target: "Quisiera hacer una reserva.", native: "Rezervasyon yapmak isterdim.", pronunciation: "ki-SYE-ra a-SER U-na re-SER-va" },
    { id: 5, target: "Si supiera la respuesta...", native: "Cevabı bilseydim...", pronunciation: "si su-PYE-ra la res-PWES-ta" },
    { id: 6, target: "Te ayudaría si pudiera.", native: "Yapabilseydim sana yardım ederdim.", pronunciation: "te a-yu-da-RI-a si pu-DYE-ra" },
    { id: 7, target: "Habla como si supiera todo.", native: "Her şeyi biliyormuş gibi konuşuyor.", pronunciation: "A-bla KO-mo si su-PYE-ra TO-do" },
    { id: 8, target: "Me gustaría que vinieras.", native: "Gelmeni isterdim.", pronunciation: "me gus-ta-RI-a ke vi-NYE-ras" },
];

// ===== ÜNİTE 63: Şart Cümleleri İleri =====
const unit63Phrases: B2Phrase[] = [
    { id: 1, target: "A condición de que llegues puntual.", native: "Zamanında gelmen şartıyla.", pronunciation: "a kon-di-SYON de ke YE-ges pun-TWAL" },
    { id: 2, target: "Siempre que me lo pidas.", native: "Benden istediğin sürece.", pronunciation: "SYEM-pre ke me lo PI-das" },
    { id: 3, target: "A menos que llueva, iremos.", native: "Yağmur yağmadıkça gideceğiz.", pronunciation: "a ME-nos ke YWE-va i-RE-mos" },
    { id: 4, target: "En caso de que necesites ayuda.", native: "Yardıma ihtiyacın olması durumunda.", pronunciation: "en KA-so de ke ne-se-SI-tes a-YU-da" },
    { id: 5, target: "Con tal de que funcione.", native: "Çalışması yeter ki.", pronunciation: "kon tal de ke fun-SYO-ne" },
    { id: 6, target: "A no ser que cambies de opinión.", native: "Fikrini değiştirmediğin sürece.", pronunciation: "a no ser ke KAM-byes de o-pi-NYON" },
    { id: 7, target: "Suponiendo que acepten.", native: "Kabul ettiklerini varsayarsak.", pronunciation: "su-po-NYEN-do ke a-SEP-ten" },
    { id: 8, target: "De haber sabido, habría venido.", native: "Bilseydim, gelirdim.", pronunciation: "de a-BER sa-BI-do a-BRI-a ve-NI-do" },
];

// ===== ÜNİTE 64: Akademik Yazım =====
const unit64Phrases: B2Phrase[] = [
    { id: 1, target: "Según los datos obtenidos...", native: "Elde edilen verilere göre...", pronunciation: "se-GUN los DA-tos ob-te-NI-dos" },
    { id: 2, target: "Cabe destacar que...", native: "Belirtmek gerekir ki...", pronunciation: "KA-be des-ta-KAR ke" },
    { id: 3, target: "En conclusión, podemos afirmar...", native: "Sonuç olarak, söyleyebiliriz ki...", pronunciation: "en kon-klu-SYON po-DE-mos a-fir-MAR" },
    { id: 4, target: "Los resultados muestran que...", native: "Sonuçlar gösteriyor ki...", pronunciation: "los re-sul-TA-dos MWES-tran ke" },
    { id: 5, target: "A diferencia de estudios anteriores...", native: "Önceki çalışmalardan farklı olarak...", pronunciation: "a di-fe-REN-sya de es-TU-dyos an-te-RYO-res" },
    { id: 6, target: "Como señala el autor...", native: "Yazarın belirttiği gibi...", pronunciation: "KO-mo se-NYA-la el aw-TOR" },
    { id: 7, target: "En este sentido...", native: "Bu anlamda...", pronunciation: "en ES-te sen-TI-do" },
    { id: 8, target: "Dicho de otro modo...", native: "Başka bir deyişle...", pronunciation: "DI-ço de O-tro MO-do" },
];

// ===== ÜNİTE 65: Ekonomi ve Finans =====
const unit65Phrases: B2Phrase[] = [
    { id: 1, target: "La bolsa ha subido un 5%.", native: "Borsa %5 yükseldi.", pronunciation: "la BOL-sa a su-BI-do un SIN-ko por SYEN-to" },
    { id: 2, target: "Es una inversión de alto riesgo.", native: "Yüksek riskli bir yatırım.", pronunciation: "es U-na in-ver-SYON de AL-to RYES-go" },
    { id: 3, target: "El presupuesto es ajustado.", native: "Bütçe sınırlı.", pronunciation: "el pre-su-PWES-to es a-hus-TA-do" },
    { id: 4, target: "Hay que pagar los impuestos.", native: "Vergileri ödemek gerekir.", pronunciation: "ay ke pa-GAR los im-PWES-tos" },
    { id: 5, target: "Pedí un préstamo hipotecario.", native: "Mortgage kredisi aldım.", pronunciation: "pe-DI un PRES-ta-mo i-po-te-KA-ryo" },
    { id: 6, target: "La inflación está por las nubes.", native: "Enflasyon çok yüksek.", pronunciation: "la in-fla-SYON es-TA por las NU-bes" },
    { id: 7, target: "La rentabilidad es positiva.", native: "Karlılık pozitif.", pronunciation: "la ren-ta-bi-li-DAD es po-si-TI-va" },
    { id: 8, target: "Tenemos que reducir gastos.", native: "Harcamaları azaltmamız gerekiyor.", pronunciation: "te-NE-mos ke re-du-SIR GAS-tos" },
];

// ===== ÜNİTE 66: Hukuk ve Adalet =====
const unit66Phrases: B2Phrase[] = [
    { id: 1, target: "El acusado fue declarado inocente.", native: "Sanık masum ilan edildi.", pronunciation: "el a-ku-SA-do fwe de-kla-RA-do i-no-SEN-te" },
    { id: 2, target: "La sentencia fue apelada.", native: "Karara itiraz edildi.", pronunciation: "la sen-TEN-sya fwe a-pe-LA-da" },
    { id: 3, target: "El testigo prestó juramento.", native: "Tanık yemin etti.", pronunciation: "el tes-TI-go pres-TO hu-ra-MEN-to" },
    { id: 4, target: "Presentaron una demanda.", native: "Dava açtılar.", pronunciation: "pre-sen-TA-ron U-na de-MAN-da" },
    { id: 5, target: "El juicio se celebrará mañana.", native: "Dava yarın görülecek.", pronunciation: "el HWI-syo se se-le-bra-RA ma-NYA-na" },
    { id: 6, target: "Tiene derecho a un abogado.", native: "Avukat hakkınız var.", pronunciation: "TYE-ne de-RE-ço a un a-bo-GA-do" },
    { id: 7, target: "Fue condenado a cinco años.", native: "Beş yıl hapis cezasına çarptırıldı.", pronunciation: "fwe kon-de-NA-do a SIN-ko A-nyos" },
    { id: 8, target: "El tribunal dictó sentencia.", native: "Mahkeme kararını verdi.", pronunciation: "el tri-bu-NAL dik-TO sen-TEN-sya" },
];

// ===== ÜNİTE 67: Bilim ve Teknoloji =====
const unit67Phrases: B2Phrase[] = [
    { id: 1, target: "La inteligencia artificial revoluciona todo.", native: "Yapay zeka her şeyi devrimleştiriyor.", pronunciation: "la in-te-li-HEN-sya ar-ti-fi-SYAL re-vo-lu-SYO-na TO-do" },
    { id: 2, target: "El blockchain garantiza la seguridad.", native: "Blokzinciri güvenliği sağlıyor.", pronunciation: "el blok-ÇEYN ga-ran-TI-sa la se-gu-ri-DAD" },
    { id: 3, target: "Los datos son el nuevo petróleo.", native: "Veri yeni petrol.", pronunciation: "los DA-tos son el NWE-vo pe-TRO-le-o" },
    { id: 4, target: "La automatización crea y destruye empleos.", native: "Otomasyon iş yaratıyor ve yok ediyor.", pronunciation: "la aw-to-ma-ti-sa-SYON KRE-a i des-TRU-ye em-PLE-os" },
    { id: 5, target: "La realidad virtual transforma la educación.", native: "Sanal gerçeklik eğitimi dönüştürüyor.", pronunciation: "la re-a-li-DAD vir-TWAL trans-FOR-ma la e-du-ka-SYON" },
    { id: 6, target: "La ciberseguridad es una prioridad.", native: "Siber güvenlik bir öncelik.", pronunciation: "la si-ber-se-gu-ri-DAD es U-na pryo-ri-DAD" },
    { id: 7, target: "La robótica avanza a pasos agigantados.", native: "Robotik dev adımlarla ilerliyor.", pronunciation: "la ro-BO-ti-ka a-VAN-sa a PA-sos a-hi-gan-TA-dos" },
    { id: 8, target: "Las energías renovables son el futuro.", native: "Yenilenebilir enerjiler gelecek.", pronunciation: "las e-ner-HI-as re-no-VA-bles son el fu-TU-ro" },
];

// ===== ÜNİTE 68: Siyaset ve Toplum =====
const unit68Phrases: B2Phrase[] = [
    { id: 1, target: "La libertad de expresión es fundamental.", native: "İfade özgürlüğü temeldir.", pronunciation: "la li-ber-TAD de eks-pre-SYON es fun-da-men-TAL" },
    { id: 2, target: "Los derechos humanos son universales.", native: "İnsan hakları evrenseldir.", pronunciation: "los de-RE-ços u-MA-nos son u-ni-ver-SA-les" },
    { id: 3, target: "Hubo una manifestación pacífica.", native: "Barışçıl bir gösteri oldu.", pronunciation: "U-bo U-na ma-ni-fes-ta-SYON pa-SI-fi-ka" },
    { id: 4, target: "El activismo genera cambio social.", native: "Aktivizm toplumsal değişim yaratır.", pronunciation: "el ak-ti-VIS-mo HE-ne-ra KAM-byo so-SYAL" },
    { id: 5, target: "La constitución protege nuestros derechos.", native: "Anayasa haklarımızı korur.", pronunciation: "la kons-ti-tu-SYON pro-TE-he NWES-tros de-RE-ços" },
    { id: 6, target: "Luchamos por la igualdad.", native: "Eşitlik için mücadele ediyoruz.", pronunciation: "lu-ÇA-mos por la i-gwal-DAD" },
    { id: 7, target: "Habrá un referéndum el próximo mes.", native: "Gelecek ay referandum olacak.", pronunciation: "a-BRA un re-fe-REN-dum el PROK-si-mo mes" },
    { id: 8, target: "La democracia está en peligro.", native: "Demokrasi tehlike altında.", pronunciation: "la de-mo-KRA-sya es-TA en pe-LI-gro" },
];

// ===== ÜNİTE 69: Medya ve İletişim =====
const unit69Phrases: B2Phrase[] = [
    { id: 1, target: "La noticia se hizo viral.", native: "Haber viral oldu.", pronunciation: "la no-TI-sya se I-so vi-RAL" },
    { id: 2, target: "Hay mucha desinformación en redes.", native: "Sosyal medyada çok dezenformasyon var.", pronunciation: "ay MU-ça des-in-for-ma-SYON en RE-des" },
    { id: 3, target: "El periodismo de investigación es vital.", native: "Araştırmacı gazetecilik hayati.", pronunciation: "el pe-ryo-DIS-mo de in-ves-ti-ga-SYON es vi-TAL" },
    { id: 4, target: "La censura es inaceptable.", native: "Sansür kabul edilemez.", pronunciation: "la sen-SU-ra es i-na-sep-TA-ble" },
    { id: 5, target: "Los influencers tienen mucho poder.", native: "Fenomenlerin çok gücü var.", pronunciation: "los in-flu-EN-sers TYE-nen MU-ço po-DER" },
    { id: 6, target: "Escucho podcasts todos los días.", native: "Her gün podcast dinliyorum.", pronunciation: "es-KU-ço pod-KASTS TO-dos los DI-as" },
    { id: 7, target: "El editorial criticaba al gobierno.", native: "Başyazı hükümeti eleştiriyordu.", pronunciation: "el e-di-to-RYAL kri-ti-KA-ba al go-BYER-no" },
    { id: 8, target: "Es pura propaganda política.", native: "Saf siyasi propaganda.", pronunciation: "es PU-ra pro-pa-GAN-da po-LI-ti-ka" },
];

// ===== ÜNİTE 70: Psikoloji ve Davranış =====
const unit70Phrases: B2Phrase[] = [
    { id: 1, target: "La ansiedad es cada vez más común.", native: "Kaygı giderek daha yaygın.", pronunciation: "la an-sye-DAD es KA-da ves mas ko-MUN" },
    { id: 2, target: "La terapia puede ayudar mucho.", native: "Terapi çok yardımcı olabilir.", pronunciation: "la te-RA-pya PWE-de a-yu-DAR MU-ço" },
    { id: 3, target: "La autoestima es fundamental.", native: "Özgüven çok önemli.", pronunciation: "la aw-to-es-TI-ma es fun-da-men-TAL" },
    { id: 4, target: "La inteligencia emocional importa.", native: "Duygusal zeka önemlidir.", pronunciation: "la in-te-li-HEN-sya e-mo-syo-NAL im-POR-ta" },
    { id: 5, target: "El trauma puede superarse.", native: "Travma aşılabilir.", pronunciation: "el TRAW-ma PWE-de su-pe-RAR-se" },
    { id: 6, target: "La resiliencia es clave para el éxito.", native: "Dayanıklılık başarı için anahtar.", pronunciation: "la re-si-LYEN-sya es KLA-ve PA-ra el EK-si-to" },
    { id: 7, target: "Cambia tu mentalidad, cambia tu vida.", native: "Zihniyetini değiştir, hayatını değiştir.", pronunciation: "KAM-bya tu men-ta-li-DAD KAM-bya tu VI-da" },
    { id: 8, target: "El subconsciente influye en nuestras decisiones.", native: "Bilinçaltı kararlarımızı etkiler.", pronunciation: "el sub-kons-SYEN-te in-FLU-ye en NWES-tras de-si-SYO-nes" },
];

// ===== ÜNİTE 71: Felsefe ve Düşünce =====
const unit71Phrases: B2Phrase[] = [
    { id: 1, target: "¿Existe el libre albedrío?", native: "Özgür irade var mı?", pronunciation: "ek-SIS-te el LI-bre al-be-DRI-o" },
    { id: 2, target: "La ética es fundamental en la vida.", native: "Etik hayatta temeldir.", pronunciation: "la E-ti-ka es fun-da-men-TAL en la VI-da" },
    { id: 3, target: "Todo es relativo.", native: "Her şey görecelidir.", pronunciation: "TO-do es re-la-TI-vo" },
    { id: 4, target: "El paradigma ha cambiado.", native: "Paradigma değişti.", pronunciation: "el pa-ra-DIG-ma a kam-BYA-do" },
    { id: 5, target: "La conciencia es un misterio.", native: "Bilinç bir gizemdir.", pronunciation: "la kon-SYEN-sya es un mis-TE-ryo" },
    { id: 6, target: "Pienso, luego existo.", native: "Düşünüyorum, öyleyse varım.", pronunciation: "PYEN-so LWE-go ek-SIS-to" },
    { id: 7, target: "Es una cuestión moral.", native: "Bu ahlaki bir meseledir.", pronunciation: "es U-na kwes-TYON mo-RAL" },
    { id: 8, target: "La metafísica es abstracta.", native: "Metafizik soyuttur.", pronunciation: "la me-ta-FI-si-ka es abs-TRAK-ta" },
];

// ===== ÜNİTE 72: Çevre ve Sürdürülebilirlik =====
const unit72Phrases: B2Phrase[] = [
    { id: 1, target: "Hay que reducir la huella de carbono.", native: "Karbon ayak izini azaltmak gerekir.", pronunciation: "ay ke re-du-SIR la WE-ya de kar-BO-no" },
    { id: 2, target: "La biodiversidad está amenazada.", native: "Biyoçeşitlilik tehdit altında.", pronunciation: "la byo-di-ver-si-DAD es-TA a-me-na-SA-da" },
    { id: 3, target: "El calentamiento global es real.", native: "Küresel ısınma gerçek.", pronunciation: "el ka-len-ta-MYEN-to glo-BAL es re-AL" },
    { id: 4, target: "Debemos proteger los ecosistemas.", native: "Ekosistemleri korumalıyız.", pronunciation: "de-BE-mos pro-te-HER los e-ko-sis-TE-mas" },
    { id: 5, target: "La deforestación es un problema grave.", native: "Ormansızlaşma ciddi bir sorun.", pronunciation: "la de-fo-res-ta-SYON es un pro-BLE-ma GRA-ve" },
    { id: 6, target: "Hay especies en peligro de extinción.", native: "Yok olma tehlikesindeki türler var.", pronunciation: "ay es-PE-syes en pe-LI-gro de eks-tin-SYON" },
    { id: 7, target: "La sostenibilidad es esencial.", native: "Sürdürülebilirlik esastır.", pronunciation: "la sos-te-ni-bi-li-DAD es e-sen-SYAL" },
    { id: 8, target: "Tenemos que reciclar más.", native: "Daha çok geri dönüştürmeliyiz.", pronunciation: "te-NE-mos ke re-si-KLAR mas" },
];

// ===== ÜNİTE 73: Kültür ve Sanat İleri =====
const unit73Phrases: B2Phrase[] = [
    { id: 1, target: "Es patrimonio de la humanidad.", native: "İnsanlığın mirasıdır.", pronunciation: "es pa-tri-MO-nyo de la u-ma-ni-DAD" },
    { id: 2, target: "El arte vanguardista rompe reglas.", native: "Avangard sanat kuralları yıkar.", pronunciation: "el AR-te van-gwar-DIS-ta ROM-pe RE-glas" },
    { id: 3, target: "El surrealismo desafía la lógica.", native: "Sürrealizm mantığa meydan okur.", pronunciation: "el su-re-a-LIS-mo de-sa-FI-a la LO-hi-ka" },
    { id: 4, target: "Es una obra maestra.", native: "Bu bir başyapıttır.", pronunciation: "es U-na O-bra ma-ES-tra" },
    { id: 5, target: "La estética modernista es única.", native: "Modernist estetik benzersizdir.", pronunciation: "la es-TE-ti-ka mo-der-NIS-ta es U-ni-ka" },
    { id: 6, target: "Fui a una exposición impresionante.", native: "Etkileyici bir sergiye gittim.", pronunciation: "fwi a U-na eks-po-si-SYON im-pre-syo-NAN-te" },
    { id: 7, target: "El performance fue provocador.", native: "Performans kışkırtıcıydı.", pronunciation: "el per-FOR-mans fwe pro-vo-ka-DOR" },
    { id: 8, target: "El Renacimiento cambió el mundo.", native: "Rönesans dünyayı değiştirdi.", pronunciation: "el re-na-si-MYEN-to kam-BYO el MUN-do" },
];

// ===== ÜNİTE 74: İş Dünyası İleri =====
const unit74Phrases: B2Phrase[] = [
    { id: 1, target: "Estamos buscando inversores.", native: "Yatırımcı arıyoruz.", pronunciation: "es-TA-mos bus-KAN-do in-ver-SO-res" },
    { id: 2, target: "El plan de negocios es sólido.", native: "İş planı sağlam.", pronunciation: "el plan de ne-GO-syos es SO-li-do" },
    { id: 3, target: "El flujo de caja es positivo.", native: "Nakit akışı pozitif.", pronunciation: "el FLU-ho de KA-ha es po-si-TI-vo" },
    { id: 4, target: "La startup creció un 200%.", native: "Startup %200 büyüdü.", pronunciation: "la star-TAP kre-SYO un dos-SYEN-tos por SYEN-to" },
    { id: 5, target: "El liderazgo es clave.", native: "Liderlik anahtardır.", pronunciation: "el li-de-RAS-go es KLA-ve" },
    { id: 6, target: "El networking abre puertas.", native: "Ağ kurma kapılar açar.", pronunciation: "el NET-wor-king A-bre PWER-tas" },
    { id: 7, target: "Hice un pitch a los inversores.", native: "Yatırımcılara sunum yaptım.", pronunciation: "I-se un piç a los in-ver-SO-res" },
    { id: 8, target: "Tu marca personal importa.", native: "Kişisel markan önemli.", pronunciation: "tu MAR-ka per-so-NAL im-POR-ta" },
];

// ===== ÜNİTE 75: Tarih ve Uygarlıklar =====
const unit75Phrases: B2Phrase[] = [
    { id: 1, target: "El imperio romano cayó en el 476.", native: "Roma İmparatorluğu 476'da çöktü.", pronunciation: "el im-PE-ryo ro-MA-no ka-YO en el kwa-tro-SYEN-tos se-TEN-ta y SEYS" },
    { id: 2, target: "La revolución francesa cambió Europa.", native: "Fransız Devrimi Avrupa'yı değiştirdi.", pronunciation: "la re-vo-lu-SYON fran-SE-sa kam-BYO ew-RO-pa" },
    { id: 3, target: "La conquista tuvo consecuencias devastadoras.", native: "Fethin yıkıcı sonuçları oldu.", pronunciation: "la kon-KIS-ta TU-vo kon-se-KWEN-syas de-vas-ta-DO-ras" },
    { id: 4, target: "La colonización marcó la historia.", native: "Sömürgecilik tarihi belirledi.", pronunciation: "la ko-lo-ni-sa-SYON mar-KO la is-TO-rya" },
    { id: 5, target: "La independencia llegó en el siglo XIX.", native: "Bağımsızlık 19. yüzyılda geldi.", pronunciation: "la in-de-pen-DEN-sya ye-GO en el SI-glo dye-si-NWE-ve" },
    { id: 6, target: "La arqueología revela secretos.", native: "Arkeoloji sırları ortaya çıkarır.", pronunciation: "la ar-ke-o-lo-HI-a re-VE-la se-KRE-tos" },
    { id: 7, target: "Fue una época de grandes cambios.", native: "Büyük değişimler dönemiydi.", pronunciation: "fwe U-na E-po-ka de GRAN-des KAM-byos" },
    { id: 8, target: "La monarquía terminó con la república.", native: "Monarşi cumhuriyetle sona erdi.", pronunciation: "la mo-nar-KI-a ter-mi-NO kon la re-PU-bli-ka" },
];

// ===== ÜNİTE 76: Tıp ve Sağlık İleri =====
const unit76Phrases: B2Phrase[] = [
    { id: 1, target: "El diagnóstico fue certero.", native: "Teşhis doğruydu.", pronunciation: "el dyag-NOS-ti-ko fwe ser-TE-ro" },
    { id: 2, target: "El pronóstico es favorable.", native: "Öngörü olumlu.", pronunciation: "el pro-NOS-ti-ko es fa-vo-RA-ble" },
    { id: 3, target: "El tratamiento está funcionando.", native: "Tedavi işe yarıyor.", pronunciation: "el tra-ta-MYEN-to es-TA fun-syo-NAN-do" },
    { id: 4, target: "La cirugía fue un éxito.", native: "Ameliyat başarılı oldu.", pronunciation: "la si-ru-HI-a fwe un EK-si-to" },
    { id: 5, target: "La rehabilitación llevará tiempo.", native: "Rehabilitasyon zaman alacak.", pronunciation: "la re-a-bi-li-ta-SYON ye-va-RA TYEM-po" },
    { id: 6, target: "La pandemia cambió nuestras vidas.", native: "Pandemi hayatlarımızı değiştirdi.", pronunciation: "la pan-DE-mya kam-BYO NWES-tras VI-das" },
    { id: 7, target: "La vacunación es importante.", native: "Aşılama önemlidir.", pronunciation: "la va-ku-na-SYON es im-por-TAN-te" },
    { id: 8, target: "Desarrollar inmunidad lleva tiempo.", native: "Bağışıklık geliştirmek zaman alır.", pronunciation: "de-sa-ro-YAR in-mu-ni-DAD YE-va TYEM-po" },
];

// ===== ÜNİTE 77: Edebiyat ve Yazarlık =====
const unit77Phrases: B2Phrase[] = [
    { id: 1, target: "La narrativa es cautivadora.", native: "Anlatı büyüleyici.", pronunciation: "la na-ra-TI-va es kaw-ti-va-DO-ra" },
    { id: 2, target: "Usa metáforas poderosas.", native: "Güçlü metaforlar kullanıyor.", pronunciation: "U-sa me-TA-fo-ras po-de-RO-sas" },
    { id: 3, target: "El protagonista evoluciona.", native: "Başkahraman gelişiyor.", pronunciation: "el pro-ta-go-NIS-ta e-vo-lu-SYO-na" },
    { id: 4, target: "La trama es compleja.", native: "Olay örgüsü karmaşık.", pronunciation: "la TRA-ma es kom-PLE-ha" },
    { id: 5, target: "Es mi género literario favorito.", native: "En sevdiğim edebi tür.", pronunciation: "es mi HE-ne-ro li-te-RA-ryo fa-vo-RI-to" },
    { id: 6, target: "La novela ganó el premio.", native: "Roman ödülü kazandı.", pronunciation: "la no-VE-la ga-NO el PRE-myo" },
    { id: 7, target: "Su poesía es profunda.", native: "Şiiri derin.", pronunciation: "su po-e-SI-a es pro-FUN-da" },
    { id: 8, target: "El ensayo analiza la sociedad.", native: "Deneme toplumu analiz ediyor.", pronunciation: "el en-SA-yo a-na-LI-sa la so-sye-DAD" },
];

// ===== ÜNİTE 78: Uluslararası İlişkiler =====
const unit78Phrases: B2Phrase[] = [
    { id: 1, target: "La diplomacia es esencial.", native: "Diplomasi esastır.", pronunciation: "la di-plo-MA-sya es e-sen-SYAL" },
    { id: 2, target: "Firmaron un tratado de paz.", native: "Barış antlaşması imzaladılar.", pronunciation: "fir-MA-ron un tra-TA-do de pas" },
    { id: 3, target: "Impusieron sanciones económicas.", native: "Ekonomik yaptırımlar uyguladılar.", pronunciation: "im-pu-SYE-ron san-SYO-nes e-ko-NO-mi-kas" },
    { id: 4, target: "Formaron una alianza estratégica.", native: "Stratejik ittifak kurdular.", pronunciation: "for-MA-ron U-na a-LYAN-sa es-tra-TE-hi-ka" },
    { id: 5, target: "El conflicto escaló rápidamente.", native: "Çatışma hızla tırmandı.", pronunciation: "el kon-FLIK-to es-ka-LO RA-pi-da-MEN-te" },
    { id: 6, target: "Las negociaciones avanzan.", native: "Müzakereler ilerliyor.", pronunciation: "las ne-go-sya-SYO-nes a-VAN-san" },
    { id: 7, target: "Hay un embargo comercial.", native: "Ticari ambargo var.", pronunciation: "ay un em-BAR-go ko-mer-SYAL" },
    { id: 8, target: "Pidió asilo político.", native: "Siyasi sığınma istedi.", pronunciation: "pi-DYO a-SI-lo po-LI-ti-ko" },
];

// ===== ÜNİTE 79: İleri Tartışma =====
const unit79Phrases: B2Phrase[] = [
    { id: 1, target: "Permítame argumentar mi posición.", native: "Pozisyonumu savunmama izin verin.", pronunciation: "per-MI-ta-me ar-gu-men-TAR mi po-si-SYON" },
    { id: 2, target: "Refuto completamente ese argumento.", native: "O argümanı tamamen çürütüyorum.", pronunciation: "re-FU-to kom-ple-ta-MEN-te E-se ar-gu-MEN-to" },
    { id: 3, target: "Concedo ese punto.", native: "O noktayı kabul ediyorum.", pronunciation: "kon-SE-do E-se PUN-to" },
    { id: 4, target: "Hay que matizar esa afirmación.", native: "O ifadeyi nüanslamak gerekir.", pronunciation: "ay ke ma-ti-SAR E-sa a-fir-ma-SYON" },
    { id: 5, target: "Intento persuadirte con datos.", native: "Seni verilerle ikna etmeye çalışıyorum.", pronunciation: "in-TEN-to per-swa-DIR-te kon DA-tos" },
    { id: 6, target: "Necesitamos llegar a un consenso.", native: "Bir uzlaşıya varmamız gerekiyor.", pronunciation: "ne-se-si-TA-mos ye-GAR a un kon-SEN-so" },
    { id: 7, target: "Mi postura es clara.", native: "Tutumum açık.", pronunciation: "mi pos-TU-ra es KLA-ra" },
    { id: 8, target: "Hay que fundamentar la opinión.", native: "Görüşü temellendirmek gerekir.", pronunciation: "ay ke fun-da-men-TAR la o-pi-NYON" },
];

// ===== ÜNİTE 80: B2 Özet =====
const unit80Phrases: B2Phrase[] = [
    { id: 1, target: "¡Felicidades! Has completado B2.", native: "Tebrikler! B2'yi tamamladın.", pronunciation: "fe-li-si-DA-des as kom-ple-TA-do be-dos" },
    { id: 2, target: "Tu nivel es avanzado.", native: "Seviyen ileri.", pronunciation: "tu ni-VEL es a-van-SA-do" },
    { id: 3, target: "Dominas el español con fluidez.", native: "İspanyolcaya akıcı hakimsin.", pronunciation: "do-MI-nas el es-pa-NYOL kon flu-i-DES" },
    { id: 4, target: "Entiendes matices complejos.", native: "Karmaşık nüansları anlıyorsun.", pronunciation: "en-TYEN-des ma-TI-ses kom-PLE-hos" },
    { id: 5, target: "Puedes debatir temas complejos.", native: "Karmaşık konuları tartışabilirsin.", pronunciation: "PWE-des de-ba-TIR TE-mas kom-PLE-hos" },
    { id: 6, target: "Tu competencia lingüística es alta.", native: "Dil yetkinliğin yüksek.", pronunciation: "tu kom-pe-TEN-sya lin-GWİS-ti-ka es AL-ta" },
    { id: 7, target: "¡A por el nivel C1!", native: "C1 seviyesine!", pronunciation: "a por el ni-VEL se-U-no" },
    { id: 8, target: "Tu viaje lingüístico continúa.", native: "Dil yolculuğun devam ediyor.", pronunciation: "tu VYA-he lin-GWİS-ti-ko kon-ti-NU-a" },
];

// Ünite ID'sine göre kalıp getir
export function getB2PhrasesForUnit(unitId: number): B2Phrase[] {
    const phrases: { [key: number]: B2Phrase[] } = {
        61: unit61Phrases, 62: unit62Phrases, 63: unit63Phrases, 64: unit64Phrases, 65: unit65Phrases,
        66: unit66Phrases, 67: unit67Phrases, 68: unit68Phrases, 69: unit69Phrases, 70: unit70Phrases,
        71: unit71Phrases, 72: unit72Phrases, 73: unit73Phrases, 74: unit74Phrases, 75: unit75Phrases,
        76: unit76Phrases, 77: unit77Phrases, 78: unit78Phrases, 79: unit79Phrases, 80: unit80Phrases
    };
    return phrases[unitId] || unit61Phrases;
}
