
// SteadyShell Kalıplar Veritabanı - Fransızca A2 (331-360)
// Her ünite için ~15 kalıp - Curriculum.ts ile senkronize

interface FrenchPhrase {
    text: string;
    meaning: string;
    pronunciation: string;
}

interface FrenchA2UnitPhrases {
    unitId: number;
    title: string;
    phrases: FrenchPhrase[];
}

// ===== ÜNİTE 331-340 =====
const unit331Phrases: FrenchA2UnitPhrases = {
    unitId: 331, title: "Geçmiş Tatiller", phrases: [
        { text: "J'ai passé de bonnes vacances.", meaning: "Güzel tatil geçirdim.", pronunciation: "je-pa-se-dö-bon-va-kans" },
        { text: "C'était magnifique!", meaning: "Harikaydı!", pronunciation: "se-te-ma-nyi-fik" },
        { text: "Nous avons visité beaucoup de sites.", meaning: "Çok yer gezdik.", pronunciation: "nu-za-von-vi-zi-te" },
        { text: "Le temps était parfait.", meaning: "Hava mükemmeldi.", pronunciation: "lö-tan-ze-te-par-fe" },
        { text: "Je me suis bien amusé(e).", meaning: "Çok eğlendim.", pronunciation: "jö-mö-süi-byan-a-mü-ze" },
        { text: "On a pris beaucoup de photos.", meaning: "Çok fotoğraf çektik.", pronunciation: "on-a-pri-bo-ku-dö-fo-to" },
        { text: "C'était inoubliable.", meaning: "Unutulmazdı.", pronunciation: "se-te-i-nu-bli-yabl" },
        { text: "J'ai découvert une belle région.", meaning: "Güzel bir bölge keşfettim.", pronunciation: "je-de-ku-ver-ün-bel-re-jyon" },
        // Yeni Eklenenler
        { text: "Je suis allé(e) au bord de la mer.", meaning: "Deniz kenarına gittim.", pronunciation: "jö-süi-za-le-o-bor-dö-la-mer" },
        { text: "Nous avons loué une voiture.", meaning: "Araba kiraladık.", pronunciation: "nu-za-von-lu-e-ün-vua-tür" },
        { text: "C'était une catastrophe.", meaning: "Bir felaketti.", pronunciation: "se-te-tün-ka-tas-trof" },
        { text: "J'ai raté mon avion.", meaning: "Uçağımı kaçırdım.", pronunciation: "je-ra-te-mon-a-vyon" },
        { text: "On a fait du camping sauvage.", meaning: "Vahşi kamp yaptık.", pronunciation: "on-a-fe-dü-kam-ping-so-vaj" },
        { text: "Je n'ai pas aimé la nourriture.", meaning: "Yemeği sevmedim.", pronunciation: "jö-ne-pa-ze-me-la-nu-ri-tür" },
        { text: "Nous sommes rentrés fatigués.", meaning: "Yorgun döndük.", pronunciation: "nu-som-ran-tre-fa-ti-ge" }
    ]
};

const unit332Phrases: FrenchA2UnitPhrases = {
    unitId: 332, title: "Gelecek Planları", phrases: [
        { text: "Je vais voyager cet été.", meaning: "Bu yaz seyahat edeceğim.", pronunciation: "jö-ve-vua-ya-je-set-e-te" },
        { text: "J'ai l'intention de partir.", meaning: "Gitme niyetindeyim.", pronunciation: "je-len-tan-syon-dö-par-tir" },
        { text: "Je prévois de visiter...", meaning: "...ziyaret etmeyi planlıyorum.", pronunciation: "jö-pre-vua-dö-vi-zi-te" },
        { text: "J'espère que ça va marcher.", meaning: "Umarım işe yarar.", pronunciation: "jes-per-kö-sa-va-mar-şe" },
        { text: "L'année prochaine, je vais...", meaning: "Gelecek yıl ... yapacağım.", pronunciation: "la-ne-pro-şen-jö-ve" },
        { text: "J'ai hâte d'y aller.", meaning: "Oraya gitmek için sabırsızlanıyorum.", pronunciation: "je-at-di-a-le" },
        { text: "Ce sera formidable!", meaning: "Harika olacak!", pronunciation: "sö-sö-ra-for-mi-dabl" },
        // Yeni Eklenenler
        { text: "Quels sont tes projets?", meaning: "Planların neler?", pronunciation: "kel-son-te-pro-je" },
        { text: "Je n'ai rien prévu.", meaning: "Hiçbir şey planlamadım.", pronunciation: "jö-ne-ryan-pre-vü" },
        { text: "On verra bien.", meaning: "Bakacağız / Göreceğiz.", pronunciation: "on-ve-ra-byan" },
        { text: "C'est décidé.", meaning: "Karar verildi.", pronunciation: "se-de-si-de" },
        { text: "Ça dépend du temps.", meaning: "Havaya bağlı.", pronunciation: "sa-de-pan-dü-tan" },
        { text: "Je compte déménager.", meaning: "Taşınmayı düşünüyorum.", pronunciation: "jö-kont-de-me-na-je" },
        { text: "Tu vas faire quoi ce week-end?", meaning: "Bu hafta sonu ne yapacaksın?", pronunciation: "tü-va-fer-kua-sö-wi-kend" },
        { text: "J'aimerais changer de travail.", meaning: "İş değiştirmek isterdim.", pronunciation: "je-mö-re-şan-je-dö-tra-vay" }
    ]
};

const unit333Phrases: FrenchA2UnitPhrases = {
    unitId: 333, title: "Sağlık ve Hastalık", phrases: [
        // Şikayet kalıpları
        { text: "Je ne me sens pas bien.", meaning: "Kendimi iyi hissetmiyorum.", pronunciation: "jö-nö-mö-san-pa-byan" },
        { text: "Je suis malade.", meaning: "Hastayım.", pronunciation: "jö-süi-ma-lad" },
        { text: "J'ai mal à la tête.", meaning: "Başım ağrıyor.", pronunciation: "je-mal-a-la-tet" },
        { text: "J'ai mal à la gorge.", meaning: "Boğazım ağrıyor.", pronunciation: "je-mal-a-la-gorj" },
        { text: "J'ai mal au ventre.", meaning: "Karnım ağrıyor.", pronunciation: "je-mal-o-vantr" },
        { text: "J'ai mal au dos.", meaning: "Sırtım ağrıyor.", pronunciation: "je-mal-o-do" },
        { text: "J'ai de la fièvre.", meaning: "Ateşim var.", pronunciation: "je-dö-la-fyevr" },
        { text: "Je tousse beaucoup.", meaning: "Çok öksürüyorum.", pronunciation: "jö-tus-bo-ku" },
        // Doktor soruları
        { text: "Depuis quand êtes-vous malade?", meaning: "Ne zamandır hastasınız?", pronunciation: "dö-püi-kan-et-vu-ma-lad" },
        { text: "Où avez-vous mal?", meaning: "Nerede ağrınız var?", pronunciation: "u-a-ve-vu-mal" },
        // Doktor tavsiyeleri (Il faut + Devoir)
        { text: "Il faut vous reposer.", meaning: "Dinlenmeniz lazım.", pronunciation: "il-fo-vu-rö-po-ze" },
        { text: "Il faut boire beaucoup d'eau.", meaning: "Çok su içmeniz lazım.", pronunciation: "il-fo-buar-bo-ku-do" },
        { text: "Vous devez prendre ce médicament.", meaning: "Bu ilacı almalısınız.", pronunciation: "vu-dö-ve-prandr-sö-me-di-ka-man" },
        { text: "Vous devez rester au lit.", meaning: "Yatakta kalmalısınız.", pronunciation: "vu-dö-ve-res-te-o-li" },
        { text: "Prenez ce médicament trois fois par jour.", meaning: "Bu ilacı günde üç kez alın.", pronunciation: "prö-ne-sö-me-di-ka-man-trua-fua-par-jur" },
        // Sonuç
        { text: "Vous allez guérir bientôt.", meaning: "Yakında iyileşeceksiniz.", pronunciation: "vu-za-le-ge-rir-byan-to" }
    ]
};


const unit334Phrases: FrenchA2UnitPhrases = {
    unitId: 334, title: "Bankada", phrases: [
        { text: "Je voudrais ouvrir un compte.", meaning: "Hesap açmak rica ediyorum.", pronunciation: "jö-vu-dre-uv-rir-ön-kont" },
        { text: "Pourriez-vous m'aider s'il vous plaît?", meaning: "Bana yardım edebilir miydiniz lütfen?", pronunciation: "pu-rye-vu-me-de-sil-vu-ple" },
        { text: "J'aimerais parler au directeur.", meaning: "Müdürle konuşmak isterdim.", pronunciation: "je-mö-re-par-le-o-di-rek-tör" },
        { text: "Je voudrais faire un virement.", meaning: "Havale yapmak istiyorum.", pronunciation: "jö-vu-dre-fer-ön-vir-man" },
        { text: "Pourriez-vous vérifier mon solde?", meaning: "Bakiyemi kontrol edebilir misiniz?", pronunciation: "pu-rye-vu-ve-ri-fye-mon-sold" },
        { text: "Est-ce que je peux retirer de l'argent?", meaning: "Para çekebilir miyim?", pronunciation: "es-kö-jö-pö-rö-ti-re-dö-lar-jan" },
        { text: "J'aimerais demander une carte de crédit.", meaning: "Kredi kartı istemek isterdim.", pronunciation: "je-mö-re-dö-man-de-ün-kart" },
        { text: "Où est le distributeur le plus proche?", meaning: "En yakın ATM nerede?", pronunciation: "u-e-lö-dis-tri-bü-tör-lö-plü-proş" },
        // Yeni Eklenenler
        { text: "J'ai perdu ma carte bancaire.", meaning: "Banka kartımı kaybettim.", pronunciation: "je-per-dü-ma-kart-ban-ker" },
        { text: "Le distributeur a avalé ma carte.", meaning: "ATM kartımı yuttu.", pronunciation: "lö-dis-tri-bü-tör-a-a-va-le-ma-kart" },
        { text: "J'ai oublié mon code secret.", meaning: "Şifremi unuttum.", pronunciation: "je-u-bli-ye-mon-kod-sö-kre" },
        { text: "Quel est le taux de change?", meaning: "Döviz kuru nedir?", pronunciation: "kel-e-lö-to-dö-şanj" },
        { text: "Il y a une erreur sur mon relevé.", meaning: "Hesap özetimde bir hata var.", pronunciation: "il-ya-ün-e-rör-sür-mon-rö-lö-ve" },
        { text: "Je veux clôturer mon compte.", meaning: "Hesabımı kapatmak istiyorum.", pronunciation: "jö-vö-klo-tü-re-mon-kont" },
        { text: "Avez-vous de la monnaie?", meaning: "Bozuk paranız var mı?", pronunciation: "a-ve-vu-dö-la-mo-ne" }
    ]
};

const unit335Phrases: FrenchA2UnitPhrases = {
    unitId: 335, title: "Postanede", phrases: [
        { text: "Je voudrais envoyer ce colis.", meaning: "Bu koliyi göndermek istiyorum.", pronunciation: "jö-vu-dre-an-vua-ye-sö-ko-li" },
        { text: "J'ai beaucoup de lettres.", meaning: "Çok mektubum var.", pronunciation: "je-bo-ku-dö-letr" },
        { text: "Il y a trop de monde.", meaning: "Çok fazla insan var.", pronunciation: "il-ya-tro-dö-mond" },
        { text: "Je voudrais un carnet de timbres.", meaning: "Bir defter pul istiyorum.", pronunciation: "jö-vu-dre-ön-kar-ne-dö-tanbr" },
        { text: "C'est un paquet de livres.", meaning: "Bu bir kitap paketi.", pronunciation: "se-tön-pa-ke-dö-livr" },
        { text: "Il me faut un peu de temps.", meaning: "Bana biraz zaman lazım.", pronunciation: "il-mö-fo-ön-pö-dö-tan" },
        { text: "Combien de jours ça prend?", meaning: "Kaç gün sürer?", pronunciation: "kom-byan-dö-jur-sa-pran" },
        // Yeni Eklenenler
        { text: "C'est pour l'étranger.", meaning: "Bu yurtdışı için.", pronunciation: "se-pur-le-tran-je" },
        { text: "Est-ce que c'est urgent?", meaning: "Acil mi?", pronunciation: "es-kö-se-tür-jan" },
        { text: "Ça pèse combien?", meaning: "Ağırlığı ne kadar?", pronunciation: "sa-pez-kom-byan" },
        { text: "Je voudrais l'envoyer en recommandé.", meaning: "Taahhütlü göndermek istiyorum.", pronunciation: "jö-vu-dre-lan-vua-ye-an-rö-ko-man-de" },
        { text: "Quel est le code postal?", meaning: "Posta kodu nedir?", pronunciation: "kel-e-lö-kod-pos-tal" },
        { text: "Remplissez ce formulaire, s'il vous plaît.", meaning: "Lütfen bu formu doldurun.", pronunciation: "ran-pli-se-sö-for-mü-ler" },
        { text: "Je peux avoir un reçu?", meaning: "Makbuz alabilir miyim?", pronunciation: "jö-pö-za-vuar-ön-rö-sü" },
        { text: "Où est la boîte aux lettres?", meaning: "Posta kutusu nerede?", pronunciation: "u-e-la-buat-o-letr" }
    ]
};

const unit336Phrases: FrenchA2UnitPhrases = {
    unitId: 336, title: "Otel Rezervasyonu", phrases: [
        // Standart
        { text: "J'ai une réservation au nom de...", meaning: "... adına rezervasyonum var.", pronunciation: "je-ün-re-zer-va-syon-o-nom-dö" },
        { text: "Je voudrais réserver une chambre.", meaning: "Bir oda ayırtmak istiyorum.", pronunciation: "jö-vu-dre-re-zer-ve-ün-shanbr" },
        { text: "Est-ce que le petit-déjeuner est inclus?", meaning: "Kahvaltı dahil mi?", pronunciation: "es-kö-lö-pö-ti-de-jö-ne-e-ten-klü" },
        { text: "À quelle heure est le check-out?", meaning: "Çıkış saati kaçta?", pronunciation: "a-kel-ör-e-lö-chek-aut" },
        { text: "Avez-vous une chambre avec vue?", meaning: "Manzaralı odanız var mı?", pronunciation: "a-ve-vu-ün-shanbr-a-vek-vü" },

        // Si Cümleleri (Koşullar)
        { text: "Si je réserve maintenant, c'est moins cher?", meaning: "Şimdi ayırtırsam daha mı ucuz?", pronunciation: "si-jö-re-zerv-men-te-nan-se-muen-sher" },
        { text: "S'il y a de la place, je reste deux nuits.", meaning: "Yer varsa iki gece kalırım.", pronunciation: "sil-ya-dö-la-plas-jö-rest-dö-nüi" },
        { text: "Si j'annule, je dois payer?", meaning: "İptal edersem ödemek zorunda mıyım?", pronunciation: "si-ja-nül-jö-dua-pe-ye" },
        { text: "Si vous avez une chambre calme, je la prends.", meaning: "Sessiz bir odanız varsa alırım.", pronunciation: "si-vu-za-ve-ün-shanbr-kalm-jö-la-pran" },
        { text: "Appelez-moi s'il y a un problème.", meaning: "Sorun olursa beni arayın.", pronunciation: "a-pö-le-mua-sil-ya-ön-prob-lem" },

        // Ekstra
        { text: "Je voudrais payer par carte.", meaning: "Kartla ödemek istiyorum.", pronunciation: "jö-vu-dre-pe-ye-par-kart" },
        { text: "Pouvez-vous me réveiller à 7h?", meaning: "Beni 7'de uyandırabilir misiniz?", pronunciation: "pu-ve-vu-mö-re-ve-ye-a-set-ör" },
        { text: "Il y a un parking gratuit?", meaning: "Ücretsiz otopark var mı?", pronunciation: "il-ya-ön-par-king-gra-tüi" },
        { text: "La télécommande ne marche pas.", meaning: "Kumanda çalışmıyor.", pronunciation: "la-te-le-ko-mand-nö-marsh-pa" },
        { text: "C'est complet ce soir.", meaning: "Bu akşam doluyuz.", pronunciation: "se-kom-ple-sö-suar" }
    ]
};

const unit337Phrases: FrenchA2UnitPhrases = {
    unitId: 337, title: "Tren İstasyonunda (Soru Sorma)", phrases: [
        // Temel İstekler (Je voudrais...)
        { text: "Je voudrais un billet pour Paris.", meaning: "Paris'e bir bilet rica ediyorum.", pronunciation: "jö-vu-dre-ön-bi-ye-pur-pa-ri" },
        { text: "Un aller-retour, s'il vous plaît.", meaning: "Gidiş-dönüş lütfen.", pronunciation: "ön-a-le-rö-tur-sil-vu-ple" },
        { text: "Je voudrais réserver une place.", meaning: "Yer ayırtmak istiyorum.", pronunciation: "jö-vu-dre-re-zer-ve-ün-plas" },

        // Inversion (Resmi Soru Sorma)
        { text: "Avez-vous des réductions?", meaning: "İndiriminiz var mı?", pronunciation: "a-ve-vu-de-re-dük-syon" },
        { text: "À quelle heure part le train?", meaning: "Tren saat kaçta kalkıyor?", pronunciation: "a-kel-ör-par-lö-tren" },
        { text: "De quel quai part le train?", meaning: "Tren hangi perondan kalkıyor?", pronunciation: "dö-kel-ke-par-lö-tren" },
        { text: "Est-ce direct?", meaning: "Direkt mi?", pronunciation: "es-di-rekt" },
        { text: "Faut-il composter le billet?", meaning: "Bileti damgalamak gerekiyor mu?", pronunciation: "fo-til-kom-pos-te-lö-bi-ye" },

        // Kibar Sorular (Puis-je...)
        { text: "Puis-je avoir un horaire?", meaning: "Tarife alabilir miyim?", pronunciation: "püi-jö-a-vuar-ön-o-rer" },
        { text: "Puis-je payer par carte?", meaning: "Kartla ödeyebilir miyim?", pronunciation: "püi-jö-pe-ye-par-kart" },

        // Sorunlar ve Bilgiler
        { text: "Le train a du retard.", meaning: "Tren gecikmeli.", pronunciation: "lö-tren-a-dü-rö-tar" },
        { text: "J'ai raté ma correspondance.", meaning: "Aktarmamı kaçırdım.", pronunciation: "je-ra-te-ma-ko-res-pon-dans" },
        { text: "C'est complet.", meaning: "Burası/Tren dolu.", pronunciation: "se-kom-ple" },
        { text: "Où est la salle d'attente?", meaning: "Bekleme salonu nerede?", pronunciation: "u-e-la-sal-da-tant" },
        { text: "Attention à la fermeture des portes.", meaning: "Kapıların kapanmasına dikkat edin.", pronunciation: "a-tan-syon-a-la-fer-mö-tür-de-port" }
    ]
};

const unit338Phrases: FrenchA2UnitPhrases = {
    unitId: 338, title: "Havaalanında", phrases: [
        // Sorular ve Yer Sorma
        { text: "Où est l'enregistrement?", meaning: "Check-in nerede?", pronunciation: "u-e-lan-rö-jistr-man" },
        { text: "Où est la porte d'embarquement?", meaning: "Biniş kapısı nerede?", pronunciation: "u-e-la-port-dan-bark-man" },
        { text: "Combien de bagages puis-je prendre?", meaning: "Kaç bagaj alabilirim?", pronunciation: "kom-byan-dö-ba-gaj-püi-jö-prandr" },
        { text: "C'est un bagage à main.", meaning: "Bu el bagajı.", pronunciation: "se-tön-ba-gaj-a-men" },

        // Pasif Yapı ve Durumlar
        { text: "Le vol est annulé.", meaning: "Uçuş iptal edildi.", pronunciation: "lö-vol-e-a-nü-le" },
        { text: "Mon vol a été retardé.", meaning: "Uçuşum ertelendi.", pronunciation: "mon-vol-a-e-te-rö-tar-de" },
        { text: "Mes bagages ont été perdus.", meaning: "Bagajlarım kayboldu.", pronunciation: "me-ba-gaj-on-te-te-per-dü" },
        { text: "Le vol est complet.", meaning: "Uçuş dolu.", pronunciation: "lö-vol-e-kom-ple" },
        { text: "Est-ce que le vol est à l'heure?", meaning: "Uçuş zamanında mı?", pronunciation: "es-kö-lö-vol-e-a-lör" },

        // Güvenlik ve Gümrük
        { text: "Rien à déclarer.", meaning: "Bildirecek bir şey yok.", pronunciation: "ryan-a-de-kla-re" },
        { text: "Enlevez votre ceinture.", meaning: "Kemerinizi çıkarın.", pronunciation: "an-lö-ve-votr-sen-tür" },
        { text: "Ouvrez votre sac, s'il vous plaît.", meaning: "Çantanızı açın lütfen.", pronunciation: "uv-re-votr-sak" },
        { text: "Préparez votre passeport.", meaning: "Pasaportunuzu hazırlayın.", pronunciation: "pre-pa-re-votr-pas-por" },

        // Uçak İçi
        { text: "Attachez votre ceinture.", meaning: "Kemerinizi bağlayın.", pronunciation: "a-ta-şe-votr-sen-tür" },
        { text: "J'ai une escale à Paris.", meaning: "Paris'te aktarmam var.", pronunciation: "je-ün-es-kal-a-pa-ri" }
    ]
};

const unit339Phrases: FrenchA2UnitPhrases = {
    unitId: 339, title: "Restoranda Sipariş", phrases: [
        { text: "Le menu, s'il vous plaît.", meaning: "Menü lütfen.", pronunciation: "lö-mö-nü-sil-vu-ple" },
        { text: "Qu'est-ce que vous recommandez?", meaning: "Ne tavsiye edersiniz?", pronunciation: "kes-kö-vu-rö-ko-man-de" },
        { text: "Je voudrais le plat du jour.", meaning: "Günün yemeğini istiyorum.", pronunciation: "jö-vu-dre-lö-pla-dü-jur" },
        { text: "C'est délicieux!", meaning: "Çok lezzetli!", pronunciation: "se-de-li-syö" },
        { text: "L'addition, s'il vous plaît.", meaning: "Hesap lütfen.", pronunciation: "la-di-syon-sil-vu-ple" },
        { text: "Je peux payer par carte?", meaning: "Kartla ödeyebilir miyim?", pronunciation: "jö-pö-pe-ye-par-kart" }
    ]
};

const unit340Phrases: FrenchA2UnitPhrases = {
    unitId: 340, title: "Yemek Tarifi", phrases: [
        // Hazırlık ve Güvenlik (Emir Kipi)
        { text: "Lave-toi les mains!", meaning: "Ellerini yıka!", pronunciation: "lav-tua-le-men" },
        { text: "Mets ton tablier.", meaning: "Önlüğünü tak.", pronunciation: "me-ton-ta-bli-ye" },
        { text: "Fais attention au couteau!", meaning: "Bıçağa dikkat et!", pronunciation: "fe-za-tan-syon-o-ku-to" },
        { text: "Ne touche pas le four!", meaning: "Fırına dokunma!", pronunciation: "nö-tuş-pa-lö-fur" },

        // Tarif Adımları
        { text: "D'abord, épluchez les pommes de terre.", meaning: "Önce patatesleri soyun.", pronunciation: "da-bor-e-plü-şe-le-pom-dö-ter" },
        { text: "Ensuite, coupez les légumes.", meaning: "Sonra sebzeleri doğrayın.", pronunciation: "an-süit-ku-pe-le-le-güm" },
        { text: "Mélangez bien les ingrédients.", meaning: "Malzemeleri iyice karıştırın.", pronunciation: "me-lan-je-byan-le-zen-gre-dyan" },
        { text: "Ajoutez un peu de sel.", meaning: "Biraz tuz ekleyin.", pronunciation: "a-ju-te-ön-pö-dö-sel" },
        { text: "Laissez cuire 20 minutes.", meaning: "20 dakika pişmeye bırakın.", pronunciation: "le-se-küir-ven-mi-nüt" },

        // Yemek Zamanı
        { text: "C'est prêt!", meaning: "Hazır!", pronunciation: "se-pre" },
        { text: "À table!", meaning: "Sofraya! / Yemek hazır!", pronunciation: "a-tabl" },
        { text: "Bon appétit!", meaning: "Afiyet olsun!", pronunciation: "bo-na-pe-ti" },
        { text: "Passe-moi le pain, s'il te plaît.", meaning: "Bana ekmeği uzat lütfen.", pronunciation: "pas-mua-lö-pen-sil-tö-ple" },
        { text: "C'est vraiment délicieux.", meaning: "Gerçekten çok lezzetli.", pronunciation: "se-vre-man-de-li-syö" },
        { text: "Qui va faire la vaisselle?", meaning: "Bulaşığı kim yıkayacak?", pronunciation: "ki-va-fer-la-ve-sel" }
    ]
};

// ===== ÜNİTE 341-350 =====
const unit341Phrases: FrenchA2UnitPhrases = {
    unitId: 341, title: "Alışveriş Diyaloğu", phrases: [
        { text: "C'est combien?", meaning: "Ne kadar?", pronunciation: "se-kom-byan" },
        { text: "C'est trop cher.", meaning: "Çok pahalı.", pronunciation: "se-tro-şer" },
        { text: "Vous avez moins cher?", meaning: "Daha ucuz var mı?", pronunciation: "vu-za-ve-muen-şer" },
        { text: "Je peux avoir une réduction?", meaning: "İndirim yapabilir misiniz?", pronunciation: "jö-pö-a-vuar-ün-re-dük-syon" },
        { text: "C'est en solde.", meaning: "İndirimde.", pronunciation: "se-tan-sold" }
    ]
};

const unit342Phrases: FrenchA2UnitPhrases = {
    unitId: 342, title: "Kıyafet Alışverişi", phrases: [
        { text: "Je peux essayer?", meaning: "Deneyebilir miyim?", pronunciation: "jö-pö-e-se-ye" },
        { text: "Quelle taille faites-vous?", meaning: "Bedeniniz ne?", pronunciation: "kel-tay-fet-vu" },
        { text: "C'est trop serré.", meaning: "Çok dar.", pronunciation: "se-tro-se-re" },
        { text: "Vous l'avez en bleu?", meaning: "Mavisi var mı?", pronunciation: "vu-la-ve-an-blö" },
        { text: "Ça vous va très bien!", meaning: "Size çok yakışıyor!", pronunciation: "sa-vu-va-tre-byan" }
    ]
};

const unit343Phrases: FrenchA2UnitPhrases = {
    unitId: 343, title: "Ev İşleri", phrases: [
        { text: "Je viens de faire le ménage.", meaning: "Az önce temizlik yaptım.", pronunciation: "jö-vyen-dö-fer-lö-me-naj" },
        { text: "C'est ton tour de faire la vaisselle.", meaning: "Bulaşık yıkama sırası sende.", pronunciation: "se-ton-tur-dö-fer-la-ve-sel" },
        { text: "Range ta chambre!", meaning: "Odanı topla!", pronunciation: "ranj-ta-şanbr" },
        { text: "J'ai passé l'aspirateur.", meaning: "Süpürge çektim.", pronunciation: "je-pa-se-las-pi-ra-tör" }
    ]
};

const unit344Phrases: FrenchA2UnitPhrases = {
    unitId: 344, title: "Günlük Haberler", phrases: [
        { text: "Tu as vu les infos?", meaning: "Haberleri gördün mü?", pronunciation: "tü-a-vü-le-zen-fo" },
        { text: "Qu'est-ce qui s'est passé?", meaning: "Ne oldu?", pronunciation: "kes-ki-se-pa-se" },
        { text: "C'est incroyable!", meaning: "İnanılmaz!", pronunciation: "se-ten-krua-yabl" },
        { text: "J'ai lu dans le journal.", meaning: "Gazetede okudum.", pronunciation: "je-lü-dan-lö-jur-nal" }
    ]
};

const unit345Phrases: FrenchA2UnitPhrases = {
    unitId: 345, title: "TV Programları", phrases: [
        { text: "Qu'est-ce qu'il y a à la télé?", meaning: "TV'de ne var?", pronunciation: "kes-kil-ya-a-la-te-le" },
        { text: "Change de chaîne.", meaning: "Kanal değiştir.", pronunciation: "şanj-dö-şen" },
        { text: "J'adore cette série.", meaning: "Bu diziye bayılıyorum.", pronunciation: "ja-dor-set-se-ri" },
        { text: "C'est à quelle heure?", meaning: "Saat kaçta?", pronunciation: "se-ta-kel-ör" }
    ]
};

const unit346Phrases: FrenchA2UnitPhrases = {
    unitId: 346, title: "Sinema ve Filmler", phrases: [
        { text: "On va au cinéma?", meaning: "Sinemaya gidelim mi?", pronunciation: "on-va-o-si-ne-ma" },
        { text: "C'est quel genre de film?", meaning: "Ne tür bir film?", pronunciation: "se-kel-janr-dö-film" },
        { text: "Le film commence à quelle heure?", meaning: "Film saat kaçta başlıyor?", pronunciation: "lö-film-ko-mans-a-kel-ör" },
        { text: "C'était un bon film.", meaning: "Güzel bir filmdi.", pronunciation: "se-te-tön-bon-film" }
    ]
};

const unit347Phrases: FrenchA2UnitPhrases = {
    unitId: 347, title: "Müzik Zevkleri", phrases: [
        { text: "Quel genre de musique aimes-tu?", meaning: "Ne tür müzik seversin?", pronunciation: "kel-janr-dö-mü-zik-em-tü" },
        { text: "J'écoute du jazz depuis toujours.", meaning: "Her zaman caz dinlerim.", pronunciation: "je-kut-dü-jaz-dö-püi-tu-jur" },
        { text: "Tu as écouté leur nouvel album?", meaning: "Yeni albümlerini dinledin mi?", pronunciation: "tü-a-e-ku-te-lör-nu-vel-al-bom" }
    ]
};

const unit348Phrases: FrenchA2UnitPhrases = {
    unitId: 348, title: "Spor Aktiviteleri", phrases: [
        { text: "Tu fais du sport?", meaning: "Spor yapıyor musun?", pronunciation: "tü-fe-dü-spor" },
        { text: "Je joue au football le week-end.", meaning: "Hafta sonu futbol oynarım.", pronunciation: "jö-ju-o-fut-bol-lö-wik-end" },
        { text: "On a gagné le match!", meaning: "Maçı kazandık!", pronunciation: "on-a-ga-nye-lö-maç" },
        { text: "J'ai un entraînement.", meaning: "Antrenmanım var.", pronunciation: "je-ön-an-tren-man" }
    ]
};

const unit349Phrases: FrenchA2UnitPhrases = {
    unitId: 349, title: "Doğa Gezisi", phrases: [
        { text: "On fait une randonnée?", meaning: "Yürüyüşe çıkalım mı?", pronunciation: "on-fe-ün-ran-do-ne" },
        { text: "La vue est magnifique!", meaning: "Manzara harika!", pronunciation: "la-vü-e-ma-nyi-fik" },
        { text: "On monte la tente ici.", meaning: "Çadırı buraya kuralım.", pronunciation: "on-mont-la-tant-i-si" },
        { text: "Attention au sentier!", meaning: "Patikaya dikkat!", pronunciation: "a-tan-syon-o-san-tye" }
    ]
};

const unit350Phrases: FrenchA2UnitPhrases = {
    unitId: 350, title: "Arkadaş Buluşması", phrases: [
        { text: "Ça te dit de sortir?", meaning: "Çıkmak ister misin?", pronunciation: "sa-tö-di-dö-sor-tir" },
        { text: "On se retrouve où?", meaning: "Nerede buluşalım?", pronunciation: "on-sö-rö-truv-u" },
        { text: "Je suis libre ce soir.", meaning: "Bu akşam müsaitim.", pronunciation: "jö-süi-libr-sö-suar" },
        { text: "Avec plaisir!", meaning: "Memnuniyetle!", pronunciation: "a-vek-ple-zir" }
    ]
};

// ===== ÜNİTE 351-360 =====
const unit351Phrases: FrenchA2UnitPhrases = {
    unitId: 351, title: "Telefon Görüşmesi", phrases: [
        { text: "Allô, c'est Marie à l'appareil.", meaning: "Alo, ben Marie.", pronunciation: "a-lo-se-ma-ri-a-la-pa-rey" },
        { text: "Pourrais-je parler à...?", meaning: "... ile görüşebilir miyim?", pronunciation: "pu-re-jö-par-le-a" },
        { text: "Ne quittez pas.", meaning: "Kapatmayın.", pronunciation: "nö-ki-te-pa" },
        { text: "Je vous rappelle.", meaning: "Sizi geri ararım.", pronunciation: "jö-vu-ra-pel" }
    ]
};

const unit352Phrases: FrenchA2UnitPhrases = {
    unitId: 352, title: "Davet Etme", phrases: [
        { text: "Je t'invite à dîner.", meaning: "Seni yemeğe davet ediyorum.", pronunciation: "jö-ten-vit-a-di-ne" },
        { text: "Tu es libre samedi?", meaning: "Cumartesi müsait misin?", pronunciation: "tü-e-libr-sam-di" },
        { text: "Merci pour l'invitation!", meaning: "Davet için teşekkürler!", pronunciation: "mer-si-pur-len-vi-ta-syon" }
    ]
};

const unit353Phrases: FrenchA2UnitPhrases = {
    unitId: 353, title: "Özür Dileme", phrases: [
        { text: "Je suis vraiment désolé(e).", meaning: "Gerçekten özür dilerim.", pronunciation: "jö-süi-vre-man-de-zo-le" },
        { text: "J'ai un empêchement.", meaning: "Bir engelim var.", pronunciation: "je-ön-an-peş-man" },
        { text: "Ce n'est pas grave.", meaning: "Önemli değil.", pronunciation: "sö-ne-pa-grav" }
    ]
};

const unit354Phrases: FrenchA2UnitPhrases = {
    unitId: 354, title: "Yol Tarifi", phrases: [
        { text: "Excusez-moi, je cherche...", meaning: "Affedersiniz, ... arıyorum.", pronunciation: "eks-kü-ze-mua-jö-şerş" },
        { text: "Tournez à gauche puis à droite.", meaning: "Sola sonra sağa dönün.", pronunciation: "tur-ne-a-goş-püi-a-druat" },
        { text: "C'est tout droit.", meaning: "Düz.", pronunciation: "se-tu-drua" },
        { text: "C'est à 5 minutes à pied.", meaning: "Yürüyerek 5 dakika.", pronunciation: "se-ta-senk-mi-nüt-a-pye" }
    ]
};

const unit355Phrases: FrenchA2UnitPhrases = {
    unitId: 355, title: "Şehir Tanıtımı", phrases: [
        { text: "C'est une ville historique.", meaning: "Tarihi bir şehir.", pronunciation: "se-tün-vil-is-to-rik" },
        { text: "Il y a beaucoup de monuments.", meaning: "Çok anıt var.", pronunciation: "il-ya-bo-ku-dö-mo-nü-man" },
        { text: "La gastronomie est excellente.", meaning: "Mutfağı mükemmel.", pronunciation: "la-gas-tro-no-mi-e-tek-se-lant" }
    ]
};

const unit356Phrases: FrenchA2UnitPhrases = {
    unitId: 356, title: "Kültürel Farklar", phrases: [
        { text: "En France, on fait la bise.", meaning: "Fransa'da yanaktan öpüşülür.", pronunciation: "an-frans-on-fe-la-biz" },
        { text: "C'est une coutume locale.", meaning: "Yerel bir gelenek.", pronunciation: "se-tün-ku-tüm-lo-kal" },
        { text: "Chez nous, c'est différent.", meaning: "Bizde farklı.", pronunciation: "şe-nu-se-di-fe-ran" }
    ]
};

const unit357Phrases: FrenchA2UnitPhrases = {
    unitId: 357, title: "Eğitim Hayatı", phrases: [
        { text: "J'étudie à l'université.", meaning: "Üniversitede okuyorum.", pronunciation: "je-tü-di-a-lü-ni-ver-si-te" },
        { text: "J'ai passé mes examens.", meaning: "Sınavlarıma girdim.", pronunciation: "je-pa-se-me-zeg-za-men" },
        { text: "J'ai réussi!", meaning: "Geçtim!", pronunciation: "je-re-ü-si" }
    ]
};

const unit358Phrases: FrenchA2UnitPhrases = {
    unitId: 358, title: "İş Hayatı", phrases: [
        { text: "Je cherche un emploi.", meaning: "İş arıyorum.", pronunciation: "jö-şerş-ön-an-plua" },
        { text: "J'ai un entretien demain.", meaning: "Yarın mülakatım var.", pronunciation: "je-ön-an-trö-tyen-dö-men" },
        { text: "Je travaille à temps partiel.", meaning: "Yarı zamanlı çalışıyorum.", pronunciation: "jö-tra-vay-a-tan-par-syel" }
    ]
};

const unit359Phrases: FrenchA2UnitPhrases = {
    unitId: 359, title: "Teknoloji Kullanımı", phrases: [
        { text: "Je vais télécharger l'application.", meaning: "Uygulamayı indireceğim.", pronunciation: "jö-ve-te-le-şar-je-lap-li-ka-syon" },
        { text: "Quel est le mot de passe?", meaning: "Şifre ne?", pronunciation: "kel-e-lö-mo-dö-pas" },
        { text: "Je me connecte au wifi.", meaning: "Wi-Fi'a bağlanıyorum.", pronunciation: "jö-mö-ko-nekt-o-wi-fi" }
    ]
};

const unit360Phrases: FrenchA2UnitPhrases = {
    unitId: 360, title: "A2 Genel Tekrar", phrases: [
        { text: "Félicitations, vous avez terminé!", meaning: "Tebrikler, bitirdiniz!", pronunciation: "fe-li-si-ta-syon-vu-za-ve-ter-mi-ne" },
        { text: "Continuez à pratiquer!", meaning: "Pratik yapmaya devam edin!", pronunciation: "kon-ti-nü-e-a-pra-ti-ke" },
        { text: "Bonne continuation!", meaning: "Başarılar!", pronunciation: "bon-kon-ti-nü-a-syon" }
    ]
};

// Export
export const frenchA2Phrases: FrenchA2UnitPhrases[] = [
    unit331Phrases, unit332Phrases, unit333Phrases, unit334Phrases, unit335Phrases,
    unit336Phrases, unit337Phrases, unit338Phrases, unit339Phrases, unit340Phrases,
    unit341Phrases, unit342Phrases, unit343Phrases, unit344Phrases, unit345Phrases,
    unit346Phrases, unit347Phrases, unit348Phrases, unit349Phrases, unit350Phrases,
    unit351Phrases, unit352Phrases, unit353Phrases, unit354Phrases, unit355Phrases,
    unit356Phrases, unit357Phrases, unit358Phrases, unit359Phrases, unit360Phrases
];

export function getFrenchA2PhrasesForUnit(unitId: number): FrenchA2UnitPhrases | undefined {
    return frenchA2Phrases.find(p => p.unitId === unitId);
}
