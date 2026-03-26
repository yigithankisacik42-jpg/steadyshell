import { Question, QuestionType, QuestionOption } from './questions';
import { getFrB1VocabularyForUnit } from './vocabulary-fr-b1';
import { getFrB1PhrasesForUnit } from './phrases-fr-b1';
import { getFrB1SpeakingForUnit } from './speakings-fr-b1';
import { getFrB1ReadingForUnit } from './readings-fr-b1';
import { getFrB1GrammarForUnit } from './grammar-fr-b1';

// ===== UNIT 361 HARDCODED QUIZZES =====
const unit361Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Interview Phrases
    { id: 1, type: "SELECT", question: "'L'entreprise' ne demek?", options: [{ id: "a", text: "Şirket", correct: true }, { id: "b", text: "Okul", correct: false }, { id: "c", text: "Banka", correct: false }, { id: "d", text: "Hastane", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le poste' ne demek?", options: [{ id: "a", text: "Gönderi", correct: false }, { id: "b", text: "Pozisyon/Makam", correct: true }, { id: "c", text: "Postane", correct: false }, { id: "d", text: "Koltuk", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le salaire' ne demek?", options: [{ id: "a", text: "Ürün", correct: false }, { id: "b", text: "Ücret/Maaş", correct: true }, { id: "c", text: "Vergi", correct: false }, { id: "d", text: "Fatura", correct: false }] },
    { id: 4, type: "SELECT", question: "'Embaucher' ne demek?", options: [{ id: "a", text: "Kovmak", correct: false }, { id: "b", text: "Reddetmek", correct: false }, { id: "c", text: "İşe almak", correct: true }, { id: "d", text: "Dinlenmek", correct: false }] },
    { id: 5, type: "SELECT", question: "'L'expérience' ne demek?", options: [{ id: "a", text: "Ümit", correct: false }, { id: "b", text: "Heyecan", correct: false }, { id: "c", text: "Deneyim/Tecrübe", correct: true }, { id: "d", text: "Şüphe", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'entretien", options: [{ id: "a", text: "Toplantı", correct: false }, { id: "b", text: "İş görüşmesi / Mülakat", correct: true }, { id: "c", text: "Eğitim", correct: false }, { id: "d", text: "Sınav", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le candidat", options: [{ id: "a", text: "Yönetici", correct: false }, { id: "b", text: "Müşteri", correct: false }, { id: "c", text: "Aday", correct: true }, { id: "d", text: "Satıcı", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le bureau", options: [{ id: "a", text: "Ev", correct: false }, { id: "b", text: "Sokak", correct: false }, { id: "c", text: "Ofis/Büro", correct: true }, { id: "d", text: "Depo", correct: false }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais ___ ici.", options: [{ id: "a", text: "travailler", correct: true }, { id: "b", text: "travail", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon ___ est très bon.", options: [{ id: "a", text: "salaire", correct: true }, { id: "b", text: "embaucher", correct: false }] },
    { id: 11, type: "SELECT", question: "'Pouvez-vous vous présenter ?' ne demek?", options: [{ id: "a", text: "Kendinizi tanıtabilir misiniz?", correct: true }, { id: "b", text: "Beni tanıyor musunuz?", correct: false }, { id: "c", text: "Nerede okudunuz?", correct: false }, { id: "d", text: "Burada mı çalışıyorsunuz?", correct: false }] },
    { id: 12, type: "SELECT", question: "'Quelles sont vos qualités ?' ne demek?", options: [{ id: "a", text: "İşiniz nedir?", correct: false }, { id: "b", text: "Güçlü yönleriniz / vasıflarınız nelerdir?", correct: true }, { id: "c", text: "Hangi dilleri konuşuyorsunuz?", correct: false }, { id: "d", text: "Zayıf yönleriniz nelerdir?", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Beni kabul ettiğiniz için teşekkür ederim.", correctAnswer: "Je vous remercie de m'avoir reçu." },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Benim adım Julien.", correctAnswer: "Je m'appelle Julien." },
    { id: 15, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je suis très motivé.", options: [{ id: "a", text: "Çok yorgunum.", correct: false }, { id: "b", text: "Çok motiveyim (istekliyim).", correct: true }, { id: "c", text: "Çok üzgünüm.", correct: false }, { id: "d", text: "Çok heyecanlıyım.", correct: false }] },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Maaş beklentileriniz nelerdir?", correctAnswer: "Quelles sont vos attentes salariales ?" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai beaucoup d'___ dans ce domaine.", options: [{ id: "a", text: "expérience", correct: true }, { id: "b", text: "emploi", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bu pozisyon benim profiline uyuyor.", correctAnswer: "Ce poste correspond à mon profil." },
    { id: 19, type: "SELECT", question: "'Le stage' ne demek?", options: [{ id: "a", text: "Staj", correct: true }, { id: "b", text: "Maaş", correct: false }, { id: "c", text: "Toplantı", correct: false }, { id: "d", text: "Ödül", correct: false }] },
    { id: 20, type: "SELECT", question: "'La compétence' ne demek?", options: [{ id: "a", text: "Stres", correct: false }, { id: "b", text: "Zaman", correct: false }, { id: "c", text: "Yetenek/Beceri", correct: true }, { id: "d", text: "Evrak", correct: false }] }
];

const unit361Quiz2: Question[] = [
    // Quiz 2: Grammar (Conditionnel Présent) & Speaking
    { id: 21, type: "SELECT", question: "Conditionnel Présent genellikle hangi durumlarda KULLANILMAZ?", options: [{ id: "a", text: "Nazik ricalarda", correct: false }, { id: "b", text: "Kesin emirlerde", correct: true }, { id: "c", text: "Tavsiye verirken", correct: false }, { id: "d", text: "Dilek ve arzularda", correct: false }] },
    { id: 22, type: "SELECT", question: "'Je voudrais' ne anlama gelir?", options: [{ id: "a", text: "İsteyeceğim", correct: false }, { id: "b", text: "İstiyorum / İsterdim (Nazik)", correct: true }, { id: "c", text: "İstemiştim", correct: false }, { id: "d", text: "İstiyorum (Emir)", correct: false }] },
    { id: 23, type: "SELECT", question: "'J'aimerais' ne anlama gelir?", options: [{ id: "a", text: "Seveceğim", correct: false }, { id: "b", text: "Seviyorum", correct: false }, { id: "c", text: "Seviyordum", correct: false }, { id: "d", text: "Çok isterdim / Sevinirdim", correct: true }] },
    { id: 24, type: "SELECT", question: "'Pourriez-vous' ne anlama gelir?", options: [{ id: "a", text: "Yapar mısınız? / Edebilir misiniz?", correct: true }, { id: "b", text: "Yaptınız mı?", correct: false }, { id: "c", text: "Yapacak mısınız?", correct: false }, { id: "d", text: "Yapıyorsunuz", correct: false }] },
    { id: 25, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ un café, s'il vous plaît.", options: [{ id: "a", text: "voudrais", correct: true }, { id: "b", text: "veux", correct: false }] },
    { id: 26, type: "FILL_BLANK", question: "Doldur:", sentence: "___-vous m'aider ?", options: [{ id: "a", text: "Pourriez", correct: true }, { id: "b", text: "Pouvez", correct: false }] },
    { id: 27, type: "TRANSLATE", question: "Çevir:", hint: "Bu pozisyonu gerçekten isterdim.", correctAnswer: "J'aimerais vraiment ce poste." },
    { id: 28, type: "TRANSLATE", question: "Çevir:", hint: "Sizinle çalışmak isterdim.", correctAnswer: "Je voudrais travailler avec vous." },
    { id: 29, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Pourrais-je vous poser une question ?", options: [{ id: "a", text: "Size bir soru sorabilir miyim?", correct: true }, { id: "b", text: "Sorunuz var mı?", correct: false }, { id: "c", text: "Bana soru sorabilirsiniz.", correct: false }, { id: "d", text: "Soru sormak yasak.", correct: false }] },
    { id: 30, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ce serait génial.", options: [{ id: "a", text: "Bu iyi.", correct: false }, { id: "b", text: "Bu harika olurdu.", correct: true }, { id: "c", text: "Bu çok kötü.", correct: false }, { id: "d", text: "Bu harika.", correct: false }] },
    { id: 31, type: "SELECT", question: "Konuşma: 'J'ai cinq ans d'expérience.' ne demek?", options: [{ id: "a", text: "Beş yıllık tecrübem var.", correct: true }, { id: "b", text: "Beş yaşındayım.", correct: false }, { id: "c", text: "Beş yıl çalışacağım.", correct: false }, { id: "d", text: "Beş yıl önce çalıştım.", correct: false }] },
    { id: 32, type: "SELECT", question: "Konuşma: 'Je parle anglais et français.' ne demek?", options: [{ id: "a", text: "İngilizce ve Fransızca öğreniyorum.", correct: false }, { id: "b", text: "İngilizce ve Fransızca konuşurum.", correct: true }, { id: "c", text: "İngilizler ve Fransızlarla konuşurum.", correct: false }, { id: "d", text: "Sadece Fransızca konuşurum.", correct: false }] },
    { id: 33, type: "TRANSLATE", question: "Çevir:", hint: "İyi iletişim becerilerim var.", correctAnswer: "J'ai de bonnes compétences en communication." },
    { id: 34, type: "TRANSLATE", question: "Çevir:", hint: "Baskı altında çalışabilirim.", correctAnswer: "Je peux travailler sous pression." },
    { id: 35, type: "FILL_BLANK", question: "Doldur:", sentence: "___ sont vos défauts ?", options: [{ id: "a", text: "Quels", correct: true }, { id: "b", text: "Quelles", correct: false }] },
    { id: 36, type: "SELECT", question: "Conditionnel Présent oluştururken fiilin kökü hangi zamandan alınır?", options: [{ id: "a", text: "Futur Simple (Gelecek Zaman)", correct: true }, { id: "b", text: "Imparfait", correct: false }, { id: "c", text: "Passé Composé", correct: false }, { id: "d", text: "Présent", correct: false }] },
    { id: 37, type: "SELECT", question: "Conditionnel Présent ekleri hangi zamanın ekleriyle AYNI'dır?", options: [{ id: "a", text: "Futur Simple", correct: false }, { id: "b", text: "Imparfait (-ais, -ais, -ait...)", correct: true }, { id: "c", text: "Présent", correct: false }, { id: "d", text: "Subjonctif", correct: false }] },
    { id: 38, type: "TRANSLATE", question: "Çevir:", hint: "Gelmek isterdim.", correctAnswer: "Je voudrais venir." },
    { id: 39, type: "TRANSLATE", question: "Çevir:", hint: "Bu süper olur.", correctAnswer: "Ce serait super." },
    { id: 40, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je serais ravi de vous rejoindre.", options: [{ id: "a", text: "Size katılmaktan memnun oldum.", correct: false }, { id: "b", text: "Size katılmaktan memnuniyet duyardım.", correct: true }, { id: "c", text: "Size katılamam.", correct: false }, { id: "d", text: "Size katılacağım.", correct: false }] }
];

const unit361Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension ("L'entretien de Julien") & Phrases
    { id: 41, type: "SELECT", question: "Pourquoi Julien s'est-il réveillé tôt ?", options: [{ id: "a", text: "Pour faire du sport", correct: false }, { id: "b", text: "Pour regarder la télé", correct: false }, { id: "c", text: "Pour préparer ses affaires et repasser sa chemise", correct: true }, { id: "d", text: "Pour appeler son ami", correct: false }] },
    { id: 42, type: "SELECT", question: "Quel moyen de transport Julien a-t-il pris pour aller au centre-ville ?", options: [{ id: "a", text: "Le métro", correct: true }, { id: "b", text: "Le bus", correct: false }, { id: "c", text: "La voiture", correct: false }, { id: "d", text: "Le vélo", correct: false }] },
    { id: 43, type: "SELECT", question: "Comment se sentait Julien à l'accueil (resepsiyonda) ?", options: [{ id: "a", text: "Très heureux", correct: false }, { id: "b", text: "Un peu nerveux", correct: true }, { id: "c", text: "En colère", correct: false }, { id: "d", text: "Fatigué", correct: false }] },
    { id: 44, type: "SELECT", question: "Qui a fait entrer Julien dans son bureau ?", options: [{ id: "a", text: "Un autre candidat", correct: false }, { id: "b", text: "La directrice des ressources humaines", correct: true }, { id: "c", text: "Le secrétaire", correct: false }, { id: "d", text: "Le PDG", correct: false }] },
    { id: 45, type: "SELECT", question: "Combien de temps l'entretien a-t-il duré ?", options: [{ id: "a", text: "Trente minutes", correct: false }, { id: "b", text: "Une heure", correct: false }, { id: "c", text: "Quarante-cinq minutes", correct: true }, { id: "d", text: "Vingt minutes", correct: false }] },
    { id: 46, type: "SELECT", question: "Qu'est-ce que Julien a géré pendant son précédent stage ?", options: [{ id: "a", text: "Plusieurs campagnes publicitaires", correct: true }, { id: "b", text: "Une équipe de sport", correct: false }, { id: "c", text: "Un grand magasin", correct: false }, { id: "d", text: "Les finances de l'entreprise", correct: false }] },
    { id: 47, type: "SELECT", question: "Julien a souligné sa capacité à travailler comment ?", options: [{ id: "a", text: "La nuit", correct: false }, { id: "b", text: "Tout seul", correct: false }, { id: "c", text: "À distance", correct: false }, { id: "d", text: "En équipe", correct: true }] },
    { id: 48, type: "SELECT", question: "Que fait Julien à la fin de l'entretien ?", options: [{ id: "a", text: "Il s'en va sans rien dire", correct: false }, { id: "b", text: "Il demande un café", correct: false }, { id: "c", text: "Il pose une question pertinente sur l'entreprise", correct: true }, { id: "d", text: "Il demande son salaire", correct: false }] },
    { id: 49, type: "SELECT", question: "Comment Julien se sentait-il en sortant du bâtiment ?", options: [{ id: "a", text: "Soulagé et confiant", correct: true }, { id: "b", text: "Triste et déçu", correct: false }, { id: "c", text: "Stressé et nerveux", correct: false }, { id: "d", text: "En colère", correct: false }] },
    { id: 50, type: "SELECT", question: "Comment semblait la directrice après les réponses de Julien ?", options: [{ id: "a", text: "Fatiguée", correct: false }, { id: "b", text: "Satisfaite", correct: true }, { id: "c", text: "Déçue", correct: false }, { id: "d", text: "Surprise", correct: false }] },
    { id: 51, type: "TRANSLATE", question: "Çevir:", hint: "Ütülemek", correctAnswer: "Repasser" },
    { id: 52, type: "TRANSLATE", question: "Çevir:", hint: "Gergin", correctAnswer: "Nerveux" },
    { id: 53, type: "TRANSLATE", question: "Çevir:", hint: "Rahatlamış", correctAnswer: "Soulagé" },
    { id: 54, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'entretien d'embauche", options: [{ id: "a", text: "İş değerlendirmesi", correct: false }, { id: "b", text: "İş görüşmesi", correct: true }, { id: "c", text: "İş ilanı", correct: false }, { id: "d", text: "İş sözleşmesi", correct: false }] },
    { id: 55, type: "FILL_BLANK", question: "Doldur:", sentence: "Il a pris le ___ pour aller au centre-ville.", options: [{ id: "a", text: "métro", correct: true }, { id: "b", text: "bus", correct: false }] },
    { id: 56, type: "FILL_BLANK", question: "Doldur:", sentence: "L'entretien a ___ 45 minutes.", options: [{ id: "a", text: "duré", correct: true }, { id: "b", text: "commencé", correct: false }] },
    { id: 57, type: "TRANSLATE", question: "Çevir:", hint: "Vurgulamak, altını çizmek", correctAnswer: "Souligner" },
    { id: 58, type: "TRANSLATE", question: "Çevir:", hint: "Ben gerginim (eril).", correctAnswer: "Je suis nerveux." },
    { id: 59, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La directrice des ressources humaines", options: [{ id: "a", text: "Finans müdürü", correct: false }, { id: "b", text: "İnsan kaynakları müdürü", correct: true }, { id: "c", text: "Pazarlama müdürü", correct: false }, { id: "d", text: "Genel müdür", correct: false }] },
    { id: 60, type: "SELECT", question: "'Une campagne publicitaire' ne demek?", options: [{ id: "a", text: "Siyasi kampanya", correct: false }, { id: "b", text: "Pazarlama müdürü", correct: false }, { id: "c", text: "Reklam kampanyası", correct: true }, { id: "d", text: "Halkla ilişkiler", correct: false }] }
];

const unit361Quiz4: Question[] = [
    // Quiz 4: Mastery (Mixed Challenge)
    { id: 61, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ très motivé par ce poste.", options: [{ id: "a", text: "suis", correct: true }, { id: "b", text: "ai", correct: false }] },
    { id: 62, type: "TRANSLATE", question: "Conditionnel (Nazik): 'İstiyorum/İsterdim' nasıl denir?", hint: "İstemek fiilinin conditionnel présent çekimi.", correctAnswer: "Je voudrais" },
    { id: 63, type: "SELECT", question: "'Gérer' ne demek?", options: [{ id: "a", text: "Üretmek", correct: false }, { id: "b", text: "Yönetmek", correct: true }, { id: "c", text: "Satmak", correct: false }, { id: "d", text: "Dinlemek", correct: false }] },
    { id: 64, type: "SELECT", question: "'Le chômage' ne demek?", options: [{ id: "a", text: "İşsizlik", correct: true }, { id: "b", text: "İşi bırakmak", correct: false }, { id: "c", text: "Zam", correct: false }, { id: "d", text: "Maaş", correct: false }] },
    { id: 65, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je vous remercie de m'avoir reçu.", options: [{ id: "a", text: "Beni dinlediğiniz için teşekkürler.", correct: false }, { id: "b", text: "Beni kabul ettiğiniz için teşekkür ederim.", correct: true }, { id: "c", text: "Sizi arayacağım.", correct: false }, { id: "d", text: "Cevabınızı bekliyorum.", correct: false }] },
    { id: 66, type: "TRANSLATE", question: "Çevir:", hint: "Maaş beklentileriniz nelerdir?", correctAnswer: "Quelles sont vos attentes salariales ?" },
    { id: 67, type: "TRANSLATE", question: "Çevir:", hint: "Pazartesi başlayabilirim.", correctAnswer: "Je peux commencer lundi." },
    { id: 68, type: "FILL_BLANK", question: "Doldur:", sentence: "___-vous m'expliquer ce projet ?", options: [{ id: "a", text: "Pourriez", correct: true }, { id: "b", text: "Voulez", correct: false }] },
    { id: 69, type: "SELECT", question: "Aşağıdakilerden hangisi Conditionnel Présent çekimidir?", options: [{ id: "a", text: "Je mangerai", correct: false }, { id: "b", text: "Je mangeais", correct: false }, { id: "c", text: "Je mangerais", correct: true }, { id: "d", text: "Je mange", correct: false }] },
    { id: 70, type: "SELECT", question: "'Le stage' ne demek?", options: [{ id: "a", text: "Staj", correct: true }, { id: "b", text: "Burs", correct: false }, { id: "c", text: "İş gezisi", correct: false }, { id: "d", text: "Toplantı", correct: false }] },
    { id: 71, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quelles sont vos qualités ?", options: [{ id: "a", text: "Güçlü yönleriniz nelerdir?", correct: true }, { id: "b", text: "Nerede okudunuz?", correct: false }, { id: "c", text: "İşiniz nedir?", correct: false }, { id: "d", text: "Hobileriniz nelerdir?", correct: false }] },
    { id: 72, type: "TRANSLATE", question: "Çevir:", hint: "Ekiplerle iyi çalışırım.", correctAnswer: "Je travaille bien en équipe." },
    { id: 73, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai de l'___ dans ce domaine.", options: [{ id: "a", text: "expérience", correct: true }, { id: "b", text: "expertise", correct: false }] },
    { id: 74, type: "TRANSLATE", question: "Çevir:", hint: "Özgeçmişimi gönderdim.", correctAnswer: "J'ai envoyé mon CV." },
    { id: 75, type: "SELECT", question: "'Le curriculum vitae' nedir?", options: [{ id: "a", text: "Özgeçmiş (CV)", correct: true }, { id: "b", text: "Sözleşme", correct: false }, { id: "c", text: "Diploma", correct: false }, { id: "d", text: "Mektup", correct: false }] },
    { id: 76, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le contrat à durée indéterminée", options: [{ id: "a", text: "Belirli süreli sözleşme", correct: false }, { id: "b", text: "Belirsiz süreli (kadrolu) sözleşme", correct: true }, { id: "c", text: "Staj sözleşmesi", correct: false }, { id: "d", text: "Yarı zamanlı sözleşme", correct: false }] },
    { id: 77, type: "TRANSLATE", question: "Çevir:", hint: "Şirket büyüktür.", correctAnswer: "L'entreprise est grande." },
    { id: 78, type: "SELECT", question: "'La lettre de motivation' ne demek?", options: [{ id: "a", text: "Teşekkür mektubu", correct: false }, { id: "b", text: "Özgeçmiş", correct: false }, { id: "c", text: "Niyet / Motivasyon mektubu", correct: true }, { id: "d", text: "Uyarı mektubu", correct: false }] },
    { id: 79, type: "FILL_BLANK", question: "Doldur:", sentence: "Je me sens ___ (rahatlamış).", options: [{ id: "a", text: "soulagé", correct: true }, { id: "b", text: "nerveux", correct: false }] },
    { id: 80, type: "SELECT", question: "'Le rendez-vous' ne demek?", options: [{ id: "a", text: "Toplantı / Randevu", correct: true }, { id: "b", text: "Maaş", correct: false }, { id: "c", text: "Mülakat", correct: false }, { id: "d", text: "Tatil", correct: false }] }
];

// ===== UNIT 362 HARDCODED QUIZZES =====
const unit362Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Phrasess
    { id: 81, type: "SELECT", question: "'L'environnement' ne demek?", options: [{ id: "a", text: "Şehir", correct: false }, { id: "b", text: "Ev", correct: false }, { id: "c", text: "Çevre", correct: true }, { id: "d", text: "Orman", correct: false }] },
    { id: 82, type: "SELECT", question: "'La nature' ne demek?", options: [{ id: "a", text: "Deniz", correct: false }, { id: "b", text: "Doğa", correct: true }, { id: "c", text: "Dağ", correct: false }, { id: "d", text: "Hayvan", correct: false }] },
    { id: 83, type: "SELECT", question: "'Le climat' ne demek?", options: [{ id: "a", text: "İklim", correct: true }, { id: "b", text: "Yazılı", correct: false }, { id: "c", text: "Sıcaklık", correct: false }, { id: "d", text: "Tahmin", correct: false }] },
    { id: 84, type: "SELECT", question: "'La pollution' ne demek?", options: [{ id: "a", text: "Sağlık", correct: false }, { id: "b", text: "Güvenlik", correct: false }, { id: "c", text: "Hız", correct: false }, { id: "d", text: "Kirlilik", correct: true }] },
    { id: 85, type: "SELECT", question: "'Les déchets' ne demek?", options: [{ id: "a", text: "Atıklar/Çöpler", correct: true }, { id: "b", text: "Oyuncaklar", correct: false }, { id: "c", text: "Giysiler", correct: false }, { id: "d", text: "Yiyecekler", correct: false }] },
    { id: 86, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le recyclage", options: [{ id: "a", text: "Yenileme", correct: false }, { id: "b", text: "Geri dönüşüm", correct: true }, { id: "c", text: "Temizlik", correct: false }, { id: "d", text: "Satın alma", correct: false }] },
    { id: 87, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Renouvelable", options: [{ id: "a", text: "Değiştirilebilir", correct: false }, { id: "b", text: "Yenilenebilir", correct: true }, { id: "c", text: "Zararlı", correct: false }, { id: "d", text: "Pahalı", correct: false }] },
    { id: 88, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Protéger", options: [{ id: "a", text: "Sevmek", correct: false }, { id: "b", text: "Yıkmak", correct: false }, { id: "c", text: "Korumak", correct: true }, { id: "d", text: "Göstermek", correct: false }] },
    { id: 89, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut ___ l'environnement.", options: [{ id: "a", text: "protéger", correct: true }, { id: "b", text: "jeter", correct: false }] },
    { id: 90, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ change rapidement.", options: [{ id: "a", text: "climat", correct: true }, { id: "b", text: "nature", correct: false }] },
    { id: 91, type: "SELECT", question: "'Il faut protéger l'environnement.' ne demek?", options: [{ id: "a", text: "Çevreyi kirletmek yanlıştır.", correct: false }, { id: "b", text: "Çevreyi korumak gerekir.", correct: true }, { id: "c", text: "Doğayı seviyorum.", correct: false }, { id: "d", text: "Evimizi korumalıyız.", correct: false }] },
    { id: 92, type: "SELECT", question: "'Le réchauffement climatique est un grand problème.' ne demek?", options: [{ id: "a", text: "İklim çok güzel.", correct: false }, { id: "b", text: "Küresel ısınma büyük bir problemdir.", correct: true }, { id: "c", text: "Geri dönüşüm önemlidir.", correct: false }, { id: "d", text: "Hava kirliliği hastalıktır.", correct: false }] },
    { id: 93, type: "TRANSLATE", question: "Çevir:", hint: "Evde çöpleri ayırıyorum (geri dönüşüm için).", correctAnswer: "Je fais le tri sélectif à la maison." },
    { id: 94, type: "TRANSLATE", question: "Çevir:", hint: "Doğaya plastik atmayın.", correctAnswer: "Ne jetez pas de plastique dans la nature." },
    { id: 95, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'énergie solaire est une énergie renouvelable.", options: [{ id: "a", text: "Güneş enerjisi pahalıdır.", correct: false }, { id: "b", text: "Güneş enerjisi yenilenebilir bir enerjidir.", correct: true }, { id: "c", text: "Güneş enerjisi yeterli değildir.", correct: false }, { id: "d", text: "Güneş enerjisi kötüdür.", correct: false }] },
    { id: 96, type: "TRANSLATE", question: "Çevir:", hint: "Geri dönüşüm gezegeni kurtarır.", correctAnswer: "Le recyclage sauve la planète." },
    { id: 97, type: "FILL_BLANK", question: "Doldur:", sentence: "Triez vos ___ !", options: [{ id: "a", text: "déchets", correct: true }, { id: "b", text: "soleils", correct: false }] },
    { id: 98, type: "TRANSLATE", question: "Çevir:", hint: "Ekoloji bir önceliktir.", correctAnswer: "L'écologie est une priorité." },
    { id: 99, type: "SELECT", question: "'L'écologie' ne anlama gelir?", options: [{ id: "a", text: "Ekonomi", correct: false }, { id: "b", text: "Ekoloji", correct: true }, { id: "c", text: "Felsefe", correct: false }, { id: "d", text: "Matematik", correct: false }] },
    { id: 100, type: "SELECT", question: "'Le réchauffement climatique' ne demek?", options: [{ id: "a", text: "Hava kirliliği", correct: false }, { id: "b", text: "İklim değişikliği", correct: false }, { id: "c", text: "Küresel ısınma", correct: true }, { id: "d", text: "Güneş enerjisi", correct: false }] }
];

const unit362Quiz2: Question[] = [
    // Quiz 2: Grammar (Le Gérondif) & Speaking
    { id: 101, type: "SELECT", question: "Le Gérondif Türkçedeki hangi eke veya anlama karşılık gelir?", options: [{ id: "a", text: "-ecek, -acak", correct: false }, { id: "b", text: "geçmiş zaman", correct: false }, { id: "c", text: "-erek, -arak / yaparken", correct: true }, { id: "d", text: "-meli, -malı", correct: false }] },
    { id: 102, type: "SELECT", question: "Gérondif nasıl oluşturulur?", options: [{ id: "a", text: "Şimdiki zaman 'Nous' çekim köküne '-ant' eklenerek ve başına 'en' getirilerek.", correct: true }, { id: "b", text: "Fiilin yalın haline '-ant' eklenerek.", correct: false }, { id: "c", text: "Geçmiş zaman çekiminin başına 'en' getirilerek.", correct: false }, { id: "d", text: "Sadece fiilin başına 'en' koyularak.", correct: false }] },
    { id: 103, type: "SELECT", question: "'Faire' (Yapmak) fiilinin Gérondif hali nedir?", options: [{ id: "a", text: "En faisiant", correct: false }, { id: "b", text: "En faisant", correct: true }, { id: "c", text: "En font", correct: false }, { id: "d", text: "En faire", correct: false }] },
    { id: 104, type: "SELECT", question: "'Aller' (Gitmek) fiilinin Gérondif hali nedir?", options: [{ id: "a", text: "En allons", correct: false }, { id: "b", text: "En allant", correct: true }, { id: "c", text: "En allez", correct: false }, { id: "d", text: "En allé", correct: false }] },
    { id: 105, type: "FILL_BLANK", question: "Doldur:", sentence: "Il mange ___ regardant la télé.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 106, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai appris le français en ___ (écouter) de la musique.", options: [{ id: "a", text: "écoutant", correct: true }, { id: "b", text: "écoute", correct: false }] },
    { id: 107, type: "TRANSLATE", question: "Çevir:", hint: "Gülümseyerek konuştu.", correctAnswer: "Il a parlé en souriant." },
    { id: 108, type: "TRANSLATE", question: "Çevir:", hint: "Yürürken kitap okuyorum.", correctAnswer: "Je lis un livre en marchant." },
    { id: 109, type: "LISTENING", question: "Duyduğunu seç:", audioText: "En travaillant dur", options: [{ id: "a", text: "Çok çalışarak", correct: true }, { id: "b", text: "Hiç çalışmayarak", correct: false }, { id: "c", text: "Hızlıca", correct: false }, { id: "d", text: "Zamanla", correct: false }] },
    { id: 110, type: "LISTENING", question: "Duyduğunu seç:", audioText: "En allant au travail", options: [{ id: "a", text: "İşten çıkarken", correct: false }, { id: "b", text: "İşe giderken", correct: true }, { id: "c", text: "Eve dönerken", correct: false }, { id: "d", text: "İşteyken", correct: false }] },
    { id: 111, type: "SELECT", question: "Konuşma: 'J'utilise des produits écologiques.' ne demek?", options: [{ id: "a", text: "Pahalı ürünler kullanıyorum.", correct: false }, { id: "b", text: "Çevre dostu / Ekolojik ürünler kullanıyorum.", correct: true }, { id: "c", text: "Hiç ürün kullanmıyorum.", correct: false }, { id: "d", text: "Plastik kullanıyorum.", correct: false }] },
    { id: 112, type: "SELECT", question: "Konuşma: 'J'essaie de consommer moins de viande.' ne demek?", options: [{ id: "a", text: "Daha fazla et yemeye çalışıyorum.", correct: false }, { id: "b", text: "Sadece sebze yiyorum.", correct: false }, { id: "c", text: "Daha az et tüketmeye çalışıyorum.", correct: true }, { id: "d", text: "Et yemeyi bıraktım.", correct: false }] },
    { id: 113, type: "TRANSLATE", question: "Çevir:", hint: "Plastik poşetleri reddediyorum.", correctAnswer: "Je refuse les sacs en plastique." },
    { id: 114, type: "TRANSLATE", question: "Çevir:", hint: "Toplu taşıma kullanıyorum.", correctAnswer: "Je prends les transports en commun." },
    { id: 115, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ferme toujours le ___ quand je me brosse les dents.", options: [{ id: "a", text: "robinet", correct: true }, { id: "b", text: "sac", correct: false }] },
    { id: 116, type: "SELECT", question: "Soru: 'Le Gérondif her zaman bir yardımcı fiille mi kullanılır?'", options: [{ id: "a", text: "Evet, mutlaka 'aller' gerekir.", correct: false }, { id: "b", text: "Evet, 'être' gerekir.", correct: false }, { id: "c", text: "Hayır, cümlede yapışık olan iki fiilden biri tek başına bu eke girer (en + -ant).", correct: true }, { id: "d", text: "Ayrı bir zamandır.", correct: false }] },
    { id: 117, type: "SELECT", question: "'Boire' (İçmek) fiilinin Gérondif hali nedir?", options: [{ id: "a", text: "En buvant", correct: true }, { id: "b", text: "En boivant", correct: false }, { id: "c", text: "En boit", correct: false }, { id: "d", text: "En boire", correct: false }] },
    { id: 118, type: "TRANSLATE", question: "Çevir:", hint: "Müzik dinleyerek çalışıyorum.", correctAnswer: "Je travaille en écoutant de la musique." },
    { id: 119, type: "TRANSLATE", question: "Çevir:", hint: "Su içerek spor yapıyor.", correctAnswer: "Il fait du sport en buvant de l'eau." },
    { id: 120, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je recycle tout.", options: [{ id: "a", text: "Her şeyi atarım.", correct: false }, { id: "b", text: "Her şeyi geri dönüştürürüm.", correct: true }, { id: "c", text: "Hiçbir şeyi sevmem.", correct: false }, { id: "d", text: "Her şeyi satın alırım.", correct: false }] }
];

const unit362Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension ("Le Projet Vert du Quartier") & Phrases
    { id: 121, type: "SELECT", question: "Qu'ont organisé les habitants du quartier ?", options: [{ id: "a", text: "Un grand projet écologique", correct: true }, { id: "b", text: "Une fête de la musique", correct: false }, { id: "c", text: "Un match de football", correct: false }, { id: "d", text: "Un repas", correct: false }] },
    { id: 122, type: "SELECT", question: "Pourquoi Julie a-t-elle décidé d'agir ?", options: [{ id: "a", text: "Parce qu'elle s'ennuyait", correct: false }, { id: "b", text: "Pour gagner de l'argent", correct: false }, { id: "c", text: "En voyant tous les déchets dans le parc", correct: true }, { id: "d", text: "En voyant des arbres", correct: false }] },
    { id: 123, type: "SELECT", question: "Comment Julie a-t-elle invité ses voisins ?", options: [{ id: "a", text: "Par e-mail", correct: false }, { id: "b", text: "En créant un groupe sur les réseaux sociaux", correct: true }, { id: "c", text: "Par téléphone", correct: false }, { id: "d", text: "En frappant aux portes", correct: false }] },
    { id: 124, type: "SELECT", question: "Combien de personnes étaient présentes le samedi matin ?", options: [{ id: "a", text: "Dix personnes", correct: false }, { id: "b", text: "Plus de cinquante personnes", correct: true }, { id: "c", text: "Cent personnes", correct: false }, { id: "d", text: "Seulement Julie et ses amis", correct: false }] },
    { id: 125, type: "SELECT", question: "Que portaient-ils pour ramasser les déchets ?", options: [{ id: "a", text: "Des gants", correct: true }, { id: "b", text: "Des lunettes", correct: false }, { id: "c", text: "Des chapeaux", correct: false }, { id: "d", text: "Rien", correct: false }] },
    { id: 126, type: "SELECT", question: "Qu'ont fait les enfants ?", options: [{ id: "a", text: "Ils ont dormi", correct: false }, { id: "b", text: "Ils ont aidé en courant partout", correct: true }, { id: "c", text: "Ils ont pleuré", correct: false }, { id: "d", text: "Ils ont planté les arbres", correct: false }] },
    { id: 127, type: "SELECT", question: "Combien de nouveaux arbres ont été plantés ?", options: [{ id: "a", text: "Dix", correct: false }, { id: "b", text: "Quinze", correct: false }, { id: "c", text: "Cinquante", correct: false }, { id: "d", text: "Vingt", correct: true }] },
    { id: 128, type: "SELECT", question: "Que ressentait tout le monde en travaillant ensemble ?", options: [{ id: "a", text: "Mal", correct: false }, { id: "b", text: "Utile", correct: true }, { id: "c", text: "Fatigué", correct: false }, { id: "d", text: "Triste", correct: false }] },
    { id: 129, type: "SELECT", question: "Qui est venu les remercier à la fin de la journée ?", options: [{ id: "a", text: "Le président", correct: false }, { id: "b", text: "La police", correct: false }, { id: "c", text: "Le maire", correct: true }, { id: "d", text: "Le directeur", correct: false }] },
    { id: 130, type: "SELECT", question: "Qu'a promis le maire ?", options: [{ id: "a", text: "De donner de l'argent", correct: false }, { id: "b", text: "D'installer de nouvelles poubelles", correct: true }, { id: "c", text: "De détruire le parc", correct: false }, { id: "d", text: "D'organiser une course", correct: false }] },
    { id: 131, type: "TRANSLATE", question: "Çevir:", hint: "Ramasser", correctAnswer: "Toplamak" },
    { id: 132, type: "TRANSLATE", question: "Çevir:", hint: "Un gant", correctAnswer: "Eldiven" },
    { id: 133, type: "TRANSLATE", question: "Çevir:", hint: "L'aire de jeux", correctAnswer: "Oyun alanı" },
    { id: 134, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Encourager", options: [{ id: "a", text: "Yasaklamak", correct: false }, { id: "b", text: "Korkak", correct: false }, { id: "c", text: "Utanmak", correct: false }, { id: "d", text: "Teşvik etmek / Cesaretlendirmek", correct: true }] },
    { id: 135, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est venu les remercier.", options: [{ id: "a", text: "maire", correct: true }, { id: "b", text: "ami", correct: false }] },
    { id: 136, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce projet a transformé le ___ du quartier.", options: [{ id: "a", text: "visage", correct: true }, { id: "b", text: "visite", correct: false }] },
    { id: 137, type: "TRANSLATE", question: "Çevir:", hint: "Yerden çöpleri topluyoruz.", correctAnswer: "Nous ramassons les déchets." },
    { id: 138, type: "TRANSLATE", question: "Çevir:", hint: "Yeni ağaçlar diktiler.", correctAnswer: "Ils ont planté de nouveaux arbres." },
    { id: 139, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'initiative", options: [{ id: "a", text: "Girişim / Teşebbüs", correct: true }, { id: "b", text: "Sonuç", correct: false }, { id: "c", text: "Hedef", correct: false }, { id: "d", text: "Savaş", correct: false }] },
    { id: 140, type: "SELECT", question: "'Planter' ne demek?", options: [{ id: "a", text: "Sulagmak", correct: false }, { id: "b", text: "Ağaç kesmek", correct: false }, { id: "c", text: "Ağlamak", correct: false }, { id: "d", text: "Dikmek (Bitki, ağaç vb.)", correct: true }] }
];

const unit362Quiz4: Question[] = [
    // Quiz 4: Mastery (Mixed Challenge)
    { id: 141, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ solaire est renouvelable.", options: [{ id: "a", text: "énergie", correct: true }, { id: "b", text: "eau", correct: false }] },
    { id: 142, type: "TRANSLATE", question: "Çevir:", hint: "Geri dönüştürmeliyiz.", correctAnswer: "Nous devons recycler." },
    { id: 143, type: "SELECT", question: "'Sauver' ne demek?", options: [{ id: "a", text: "Bilmek", correct: false }, { id: "b", text: "Zarar vermek", correct: false }, { id: "c", text: "Atlamak", correct: false }, { id: "d", text: "Kurtarmak", correct: true }] },
    { id: 144, type: "SELECT", question: "'La poubelle' ne demek?", options: [{ id: "a", text: "Çöp kutusu", correct: true }, { id: "b", text: "Masa", correct: false }, { id: "c", text: "Ağaç", correct: false }, { id: "d", text: "Dolap", correct: false }] },
    { id: 145, type: "LISTENING", question: "Duyduğunu seç:", audioText: "En voyant les déchets", options: [{ id: "a", text: "Çöpleri görerek / görünce", correct: true }, { id: "b", text: "Çöpleri atmak", correct: false }, { id: "c", text: "Çöpleri toplamamak", correct: false }, { id: "d", text: "Çöpler pistir.", correct: false }] },
    { id: 146, type: "TRANSLATE", question: "Çevir:", hint: "İşe gitmek için bisiklete biniyorum.", correctAnswer: "Je prends le vélo pour aller au travail." },
    { id: 147, type: "TRANSLATE", question: "Çevir:", hint: "Gülümseyerek konuştu.", correctAnswer: "Il a parlé en souriant." },
    { id: 148, type: "FILL_BLANK", question: "Doldur:", sentence: "Ne ___ pas de plastique dans la nature.", options: [{ id: "a", text: "jetez", correct: true }, { id: "b", text: "jeter", correct: false }] },
    { id: 149, type: "SELECT", question: "Aşağıdakilerden hangisi bir Gérondif içerir?", options: [{ id: "a", text: "Je mangerai.", correct: false }, { id: "b", text: "Je suis venu pour lui parler.", correct: false }, { id: "c", text: "Je mange en lisant.", correct: true }, { id: "d", text: "Il parle français.", correct: false }] },
    { id: 150, type: "SELECT", question: "'Protéger' ne demek?", options: [{ id: "a", text: "Kirletmek", correct: false }, { id: "b", text: "Seçmek", correct: false }, { id: "c", text: "Korumak", correct: true }, { id: "d", text: "Kazanmak", correct: false }] },
    { id: 151, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je ferme le robinet.", options: [{ id: "a", text: "Kapıyı kapatıyorum.", correct: false }, { id: "b", text: "Musluğu kapatıyorum.", correct: true }, { id: "c", text: "Pencereyi açıyorum.", correct: false }, { id: "d", text: "Ateşi kapatıyorum.", correct: false }] },
    { id: 152, type: "TRANSLATE", question: "Çevir:", hint: "Suyu israf etmiyorum.", correctAnswer: "Je ne gaspille pas l'eau." },
    { id: 153, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un grand ___ écologique.", options: [{ id: "a", text: "projet", correct: true }, { id: "b", text: "protéger", correct: false }] },
    { id: 154, type: "TRANSLATE", question: "Çevir:", hint: "Birlikte etrafı temizlediler.", correctAnswer: "Ils ont nettoyé ensemble." },
    { id: 155, type: "SELECT", question: "'Utile' ne demek?", options: [{ id: "a", text: "Pahalı", correct: false }, { id: "b", text: "Zararlı", correct: false }, { id: "c", text: "Gereksiz", correct: false }, { id: "d", text: "Faydalı / Yararlı", correct: true }] },
    { id: 156, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le réchauffement climatique", options: [{ id: "a", text: "Küresel iklim", correct: false }, { id: "b", text: "Ilıman hava", correct: false }, { id: "c", text: "Hava kirliliği", correct: false }, { id: "d", text: "Küresel ısınma", correct: true }] },
    { id: 157, type: "TRANSLATE", question: "Çevir:", hint: "Birlikte çalışarak", correctAnswer: "En travaillant ensemble" },
    { id: 158, type: "SELECT", question: "'Transformer' ne demek?", options: [{ id: "a", text: "Taşımak", correct: false }, { id: "b", text: "Dönüştürmek", correct: true }, { id: "c", text: "İletmek", correct: false }, { id: "d", text: "Gitmek", correct: false }] },
    { id: 159, type: "FILL_BLANK", question: "Doldur:", sentence: "La pollution de l'___ est grave dans les villes.", options: [{ id: "a", text: "air", correct: true }, { id: "b", text: "eau", correct: false }] },
    { id: 160, type: "SELECT", question: "'Le maire' ne demek?", options: [{ id: "a", text: "Belediye başkanı", correct: true }, { id: "b", text: "Müdür", correct: false }, { id: "c", text: "Vali", correct: false }, { id: "d", text: "Öğretmen", correct: false }] }
];

// ===== UNIT 363 HARDCODED QUIZZES =====
const unit363Quiz1: Question[] = [
    // Quiz 1: Vocab & Phrases
    { id: 161, type: "SELECT", question: "'La technologie' ne demek?", options: [{ id: "a", text: "Telefon", correct: false }, { id: "b", text: "Teknoloji", correct: true }, { id: "c", text: "Mühendislik", correct: false }, { id: "d", text: "Yazılım", correct: false }] },
    { id: 162, type: "SELECT", question: "'L'ordinateur' ne demek?", options: [{ id: "a", text: "Bilgisayar", correct: true }, { id: "b", text: "Televizyon", correct: false }, { id: "c", text: "Hesap makinesi", correct: false }, { id: "d", text: "Radyo", correct: false }] },
    { id: 163, type: "SELECT", question: "'Le clavier' ne demek?", options: [{ id: "a", text: "Ekran", correct: false }, { id: "b", text: "Kablo", correct: false }, { id: "c", text: "Klavye", correct: true }, { id: "d", text: "Fare", correct: false }] },
    { id: 164, type: "SELECT", question: "'L'écran' ne demek?", options: [{ id: "a", text: "Klavye", correct: false }, { id: "b", text: "Kalem", correct: false }, { id: "c", text: "Fare", correct: false }, { id: "d", text: "Ekran", correct: true }] },
    { id: 165, type: "SELECT", question: "'Le logiciel' ne demek?", options: [{ id: "a", text: "Yazılım", correct: true }, { id: "b", text: "Donanım", correct: false }, { id: "c", text: "Mantık", correct: false }, { id: "d", text: "Oyun", correct: false }] },
    { id: 166, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le smartphone", options: [{ id: "a", text: "Akıllı telefon", correct: true }, { id: "b", text: "Akıllı saat", correct: false }, { id: "c", text: "Cep telefonu", correct: false }, { id: "d", text: "Bilgisayar", correct: false }] },
    { id: 167, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'application", options: [{ id: "a", text: "Anlaşma", correct: false }, { id: "b", text: "Uygulama", correct: true }, { id: "c", text: "Cihaz", correct: false }, { id: "d", text: "Aygıt", correct: false }] },
    { id: 168, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le mot de passe", options: [{ id: "a", text: "Parola / Şifre", correct: true }, { id: "b", text: "Pasaport", correct: false }, { id: "c", text: "Kelime", correct: false }, { id: "d", text: "Anahtar", correct: false }] },
    { id: 169, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai acheté un nouvel ___ portable.", options: [{ id: "a", text: "ordinateur", correct: true }, { id: "b", text: "clavier", correct: false }] },
    { id: 170, type: "FILL_BLANK", question: "Doldur:", sentence: "Quel est le mot de ___ du Wi-Fi ?", options: [{ id: "a", text: "passe", correct: true }, { id: "b", text: "passer", correct: false }] },
    { id: 171, type: "SELECT", question: "'Télécharger' ne demek?", options: [{ id: "a", text: "Yüklemek / İndirmek", correct: true }, { id: "b", text: "Silmek", correct: false }, { id: "c", text: "Kaydetmek", correct: false }, { id: "d", text: "Telefona bakmak", correct: false }] },
    { id: 172, type: "SELECT", question: "'Naviguer' ne demek?", options: [{ id: "a", text: "Gemiye binmek", correct: false }, { id: "b", text: "Gezinmek (İnternette vb.)", correct: true }, { id: "c", text: "Uçmak", correct: false }, { id: "d", text: "Konuşmak", correct: false }] },
    { id: 173, type: "TRANSLATE", question: "Çevir:", hint: "Yeni bir dizüstü bilgisayar aldım.", correctAnswer: "J'ai acheté un nouvel ordinateur portable." },
    { id: 174, type: "TRANSLATE", question: "Çevir:", hint: "Yazılım güncellemesi yapmak gerekiyor.", correctAnswer: "Il faut faire une mise à jour du logiciel." },
    { id: 175, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La connexion Internet est très lente.", options: [{ id: "a", text: "İnternet bağlantısı koptu.", correct: false }, { id: "b", text: "İnternet bağlantısı bugün çok yavaş.", correct: true }, { id: "c", text: "İnternet bağlantısı harika.", correct: false }, { id: "d", text: "İnternete bağlanamıyorum.", correct: false }] },
    { id: 176, type: "TRANSLATE", question: "Çevir:", hint: "Dosyalarını kaydetmeyi unutma.", correctAnswer: "N'oublie pas de sauvegarder tes fichiers." },
    { id: 177, type: "FILL_BLANK", question: "Doldur:", sentence: "N'oublie pas de ___ tes fichiers.", options: [{ id: "a", text: "sauvegarder", correct: true }, { id: "b", text: "supprimer", correct: false }] },
    { id: 178, type: "TRANSLATE", question: "Çevir:", hint: "Ekranım kırık, onu tamir ettirmem lazım.", correctAnswer: "Mon écran est cassé, je dois le réparer." },
    { id: 179, type: "SELECT", question: "'Sauvegarder' ne demek?", options: [{ id: "a", text: "Kurtarmak", correct: false }, { id: "b", text: "Kaydetmek", correct: true }, { id: "c", text: "Koruma sağlamak", correct: false }, { id: "d", text: "Paylaşmak", correct: false }] },
    { id: 180, type: "SELECT", question: "'Supprimer' ne demek?", options: [{ id: "a", text: "Şaşırtmak", correct: false }, { id: "b", text: "Engellemek", correct: false }, { id: "c", text: "Silmek", correct: true }, { id: "d", text: "Saklamak", correct: false }] }
];

const unit363Quiz2: Question[] = [
    // Quiz 2: Grammar (Pronoms Relatifs) & Speaking
    { id: 181, type: "SELECT", question: "İlgi adılı olan 'QUI' cümlede neyin yerini tutar?", options: [{ id: "a", text: "Özne (İşi yapan)", correct: true }, { id: "b", text: "Zaman", correct: false }, { id: "c", text: "Yer", correct: false }, { id: "d", text: "Nesne", correct: false }] },
    { id: 182, type: "SELECT", question: "İlgi adılı olan 'QUE' cümlede neyin yerini tutar?", options: [{ id: "a", text: "Özne", correct: false }, { id: "b", text: "Nesne (Etkilenen)", correct: true }, { id: "c", text: "Sıfat", correct: false }, { id: "d", text: "Yer", correct: false }] },
    { id: 183, type: "SELECT", question: "İlgi adılı olan 'OÙ' cümlede neyin yerini tutar?", options: [{ id: "a", text: "Özne", correct: false }, { id: "b", text: "Sadece Zaman", correct: false }, { id: "c", text: "Sadece Mekan", correct: false }, { id: "d", text: "Yer veya Zaman", correct: true }] },
    { id: 184, type: "FILL_BLANK", question: "Doldur:", sentence: "Voici l'étudiant ___ parle français.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 185, type: "FILL_BLANK", question: "Doldur:", sentence: "Le gâteau ___ tu as fait est délicieux.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 186, type: "FILL_BLANK", question: "Doldur:", sentence: "La ville ___ j'habite est grande.", options: [{ id: "a", text: "où", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 187, type: "TRANSLATE", question: "Çevir:", hint: "Burada çalışan kadın budur.", correctAnswer: "C'est la femme qui travaille ici." },
    { id: 188, type: "TRANSLATE", question: "Çevir:", hint: "Bu benim okuduğum kitaptır.", correctAnswer: "C'est le livre que je lis." },
    { id: 189, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le chien qui aboie est à mon voisin.", options: [{ id: "a", text: "Benim koşan köpeğim var.", correct: false }, { id: "b", text: "Havlayan köpek komşumundur.", correct: true }, { id: "c", text: "Komşumun köpeği büyüktür.", correct: false }, { id: "d", text: "Komşu köpek alıyor.", correct: false }] },
    { id: 190, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est l'ordinateur qu'il a acheté.", options: [{ id: "a", text: "Bu benim bilgisayarım.", correct: false }, { id: "b", text: "Bu onun satın aldığı bilgisayardır.", correct: true }, { id: "c", text: "Hangi bilgisayarı aldı?", correct: false }, { id: "d", text: "Bilgisayarı çok pahalı.", correct: false }] },
    { id: 191, type: "SELECT", question: "Konuşma: 'Tu utilises beaucoup ton téléphone ?' ne demek?", options: [{ id: "a", text: "Telefonun var mı?", correct: false }, { id: "b", text: "Telefonunu çok arar mısın?", correct: false }, { id: "c", text: "Telefonunu çok kullanıyor musun?", correct: true }, { id: "d", text: "Hangi telefonu kullanıyorsun?", correct: false }] },
    { id: 192, type: "SELECT", question: "Konuşma: 'Oui, je suis toujours connecté.' ne demek?", options: [{ id: "a", text: "Evet, her zaman bağlıyım.", correct: true }, { id: "b", text: "Evet, telefonu bağladım.", correct: false }, { id: "c", text: "Evet, telefonu kaybettim.", correct: false }, { id: "d", text: "Hayır, bağlantım koptu.", correct: false }] },
    { id: 193, type: "TRANSLATE", question: "Çevir:", hint: "E-postalarımı kontrol ediyorum.", correctAnswer: "Je vérifie mes e-mails." },
    { id: 194, type: "TRANSLATE", question: "Çevir:", hint: "Akıllı telefonuma bu yeni uygulamayı indirdim.", correctAnswer: "J'ai téléchargé cette nouvelle application sur mon smartphone." },
    { id: 195, type: "FILL_BLANK", question: "Doldur:", sentence: "L'intelligence ___ se développe rapidement.", options: [{ id: "a", text: "artificielle", correct: true }, { id: "b", text: "logiciel", correct: false }] },
    { id: 196, type: "SELECT", question: "'QUI' ve 'QUE' arasındaki en büyük fark nedir?", options: [{ id: "a", text: "QUI kelimelerden, QUE eylemlerden sonra gelir.", correct: false }, { id: "b", text: "'QUI' özneyi, 'QUE' nesneyi (genellikle kendisinden sonra başka bir özne gelir) niteler.", correct: true }, { id: "c", text: "Aralarında bir fark yoktur.", correct: false }, { id: "d", text: "QUI sadece insanları, QUE eşyaları belirtir.", correct: false }] },
    { id: 197, type: "SELECT", question: "'Je suis né l'année où...' ne anlama gelir?", options: [{ id: "a", text: "Orada doğdum...", correct: false }, { id: "b", text: "Doğduğum yıl...", correct: true }, { id: "c", text: "Şimdi doğdum...", correct: false }, { id: "d", text: "Hangi yıl doğdun?", correct: false }] },
    { id: 198, type: "TRANSLATE", question: "Çevir:", hint: "İşte benim çalıştığım ofis.", correctAnswer: "Voici le bureau où je travaille." },
    { id: 199, type: "TRANSLATE", question: "Çevir (Serbest):", hint: "Söylediğin şeyi anlamıyorum.", correctAnswer: "Je ne comprends pas ce que tu dis." },
    { id: 200, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est la maison où j'ai grandi.", options: [{ id: "a", text: "Bu benim kurduğum ev.", correct: false }, { id: "b", text: "Burası büyüdüğüm evdir.", correct: true }, { id: "c", text: "Evi çok severim.", correct: false }, { id: "d", text: "Şu evde büyüyeceğim.", correct: false }] }
];

const unit363Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension ("L'erreur de Marc") & Phrases
    { id: 201, type: "SELECT", question: "Dans quel département travaille Marc ?", options: [{ id: "a", text: "Le département informatique", correct: true }, { id: "b", text: "Le département des RH", correct: false }, { id: "c", text: "Le département marketing", correct: false }, { id: "d", text: "La comptabilité", correct: false }] },
    { id: 202, type: "SELECT", question: "Qu'a trouvé Marc dans ses e-mails ?", options: [{ id: "a", text: "Une lettre de sa mère", correct: false }, { id: "b", text: "Un message intéressant avec un lien", correct: true }, { id: "c", text: "Une photo", correct: false }, { id: "d", text: "Un virus", correct: false }] },
    { id: 203, type: "SELECT", question: "Qu'a fait Marc sans réfléchir ?", options: [{ id: "a", text: "Il a supprimé l'e-mail", correct: false }, { id: "b", text: "Il a éteint l'ordinateur", correct: false }, { id: "c", text: "Il a cliqué sur le lien inconnu", correct: true }, { id: "d", text: "Il a appelé la police", correct: false }] },
    { id: 204, type: "SELECT", question: "Que s'est-il passé immédiatement après ?", options: [{ id: "a", text: "L'ordinateur a explosé", correct: false }, { id: "b", text: "La musique a commencé", correct: false }, { id: "c", text: "Rien", correct: false }, { id: "d", text: "Son écran est devenu noir", correct: true }] },
    { id: 205, type: "SELECT", question: "Qu'est-ce que Marc venait de télécharger ?", options: [{ id: "a", text: "Un jeu vidéo", correct: false }, { id: "b", text: "Un virus dangereux", correct: true }, { id: "c", text: "Une mise à jour", correct: false }, { id: "d", text: "Un film", correct: false }] },
    { id: 206, type: "SELECT", question: "Qu'est-il arrivé aux fichiers de l'entreprise ?", options: [{ id: "a", text: "Ils ont été bloqués en quelques minutes", correct: true }, { id: "b", text: "Ils ont été imprimés", correct: false }, { id: "c", text: "Ils ont été traduits", correct: false }, { id: "d", text: "Ils ont été sauvegardés", correct: false }] },
    { id: 207, type: "SELECT", question: "Comment a réagi le directeur ?", options: [{ id: "a", text: "Il était heureux", correct: false }, { id: "b", text: "Il était furieux", correct: true }, { id: "c", text: "Il s'en fichait", correct: false }, { id: "d", text: "Il a démissionné", correct: false }] },
    { id: 208, type: "SELECT", question: "Qui Marc a-t-il appelé à l'aide ?", options: [{ id: "a", text: "Un spécialiste de la cybersécurité", correct: true }, { id: "b", text: "Son voisin", correct: false }, { id: "c", text: "La police", correct: false }, { id: "d", text: "Son professeur", correct: false }] },
    { id: 209, type: "SELECT", question: "Combien de temps l'expert a-t-il travaillé ?", options: [{ id: "a", text: "Quelques minutes", correct: false }, { id: "b", text: "Plusieurs heures", correct: true }, { id: "c", text: "Plusieurs jours", correct: false }, { id: "d", text: "Il n'a pas travaillé", correct: false }] },
    { id: 210, type: "SELECT", question: "Que vérifie toujours Marc aujourd'hui ?", options: [{ id: "a", text: "Le nom du fichier", correct: false }, { id: "b", text: "L'adresse de l'expéditeur avant d'ouvrir un e-mail", correct: true }, { id: "c", text: "Son salaire", correct: false }, { id: "d", text: "L'écran", correct: false }] },
    { id: 211, type: "TRANSLATE", question: "Çevir:", hint: "Inconnu", correctAnswer: "Bilinmeyen" },
    { id: 212, type: "TRANSLATE", question: "Çevir:", hint: "Bloqué", correctAnswer: "Bloke olmuş" },
    { id: 213, type: "TRANSLATE", question: "Çevir:", hint: "La cybersécurité", correctAnswer: "Siber güvenlik" },
    { id: 214, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Furieux", options: [{ id: "a", text: "Öfkeli", correct: true }, { id: "b", text: "Hızlı", correct: false }, { id: "c", text: "Soğuk", correct: false }, { id: "d", text: "Kibar", correct: false }] },
    { id: 215, type: "FILL_BLANK", question: "Doldur:", sentence: "Il a téléchargé un ___ (virus) dangereux.", options: [{ id: "a", text: "virus", correct: true }, { id: "b", text: "lien", correct: false }] },
    { id: 216, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ est devenu noir.", options: [{ id: "a", text: "écran", correct: true }, { id: "b", text: "souris", correct: false }] },
    { id: 217, type: "TRANSLATE", question: "Çevir:", hint: "Siber güvenlik uzmanı geldi.", correctAnswer: "Le spécialiste de la cybersécurité est venu." },
    { id: 218, type: "TRANSLATE", question: "Çevir:", hint: "Şirketin dosyaları bloke oldu.", correctAnswer: "Les fichiers de l'entreprise ont été bloqués." },
    { id: 219, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le pirate informatique", options: [{ id: "a", text: "Korsan gemisi", correct: false }, { id: "b", text: "Gözetmen", correct: false }, { id: "c", text: "Bilgisayar korsanı (Hacker)", correct: true }, { id: "d", text: "Şirket müdürü", correct: false }] },
    { id: 220, type: "SELECT", question: "'Pirater' ne demek?", options: [{ id: "a", text: "Kaybolmak", correct: false }, { id: "b", text: "Yazı yazmak", correct: false }, { id: "c", text: "Korsan", correct: false }, { id: "d", text: "Hacklemek", correct: true }] }
];

const unit363Quiz4: Question[] = [
    // Quiz 4: Mastery (Mixed Challenge)
    { id: 221, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai cliqué sur le mauvais ___ par erreur.", options: [{ id: "a", text: "lien", correct: true }, { id: "b", text: "souris", correct: false }] },
    { id: 222, type: "TRANSLATE", question: "Çevir:", hint: "Sosyal ağlar çok popüler.", correctAnswer: "Les réseaux sociaux sont très populaires." },
    { id: 223, type: "SELECT", question: "'Le fichier' ne demek?", options: [{ id: "a", text: "Ağ", correct: false }, { id: "b", text: "Dosya", correct: true }, { id: "c", text: "Kağıt", correct: false }, { id: "d", text: "Kalem", correct: false }] },
    { id: 224, type: "SELECT", question: "'Numérique' ne demek?", options: [{ id: "a", text: "Dijital", correct: true }, { id: "b", text: "Numara", correct: false }, { id: "c", text: "Sanal", correct: false }, { id: "d", text: "Makine", correct: false }] },
    { id: 225, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La mise à jour du logiciel", options: [{ id: "a", text: "Bilgisayarı yeniden başlatma", correct: false }, { id: "b", text: "Yazılım güncellemesi", correct: true }, { id: "c", text: "Uygulama indirme", correct: false }, { id: "d", text: "Yazılım hatası", correct: false }] },
    { id: 226, type: "TRANSLATE", question: "Çevir:", hint: "Bu uygulamayı aç.", correctAnswer: "Ouvre cette application." },
    { id: 227, type: "TRANSLATE", question: "Çevir:", hint: "Ağ güvenlidir.", correctAnswer: "Le réseau est sécurisé." },
    { id: 228, type: "FILL_BLANK", question: "Doldur:", sentence: "Voici l'homme ___ a réparé mon ordinateur.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 229, type: "SELECT", question: "Hangisi doğrudur? L'homme (qui/que) je regarde.", options: [{ id: "a", text: "qui", correct: false }, { id: "b", text: "que", correct: true }] },
    { id: 230, type: "SELECT", question: "'Virtuel' ne demek?", options: [{ id: "a", text: "Erdemli", correct: false }, { id: "b", text: "Mükemmel", correct: false }, { id: "c", text: "Sanal", correct: true }, { id: "d", text: "Dürüst", correct: false }] },
    { id: 231, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je joue en ligne.", options: [{ id: "a", text: "Oyun oynuyorum.", correct: false }, { id: "b", text: "Çevrimiçi (online) oynuyorum.", correct: true }, { id: "c", text: "Line'da oynuyorum.", correct: false }, { id: "d", text: "Çevrimdışı oynuyorum.", correct: false }] },
    { id: 232, type: "TRANSLATE", question: "Çevir:", hint: "Veriler şifrelenmiştir.", correctAnswer: "Les données sont cryptées." },
    { id: 233, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est le jour ___ nous nous sommes rencontrés.", options: [{ id: "a", text: "où", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 234, type: "TRANSLATE", question: "Çevir:", hint: "Belgeyi kazara sildim.", correctAnswer: "J'ai supprimé le document par accident." },
    { id: 235, type: "SELECT", question: "'La souris' bilgisayar terimi olarak ne demektir?", options: [{ id: "a", text: "Küçük Fare", correct: false }, { id: "b", text: "Fare (Mouse)", correct: true }, { id: "c", text: "Ekran", correct: false }, { id: "d", text: "Klavye", correct: false }] },
    { id: 236, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'intelligence artificielle", options: [{ id: "a", text: "Sanat", correct: false }, { id: "b", text: "Yapay zeka", correct: true }, { id: "c", text: "Gerçek akıl", correct: false }, { id: "d", text: "Yapay zeka uzmanı", correct: false }] },
    { id: 237, type: "TRANSLATE", question: "Çevir:", hint: "Bu formu nasıl yazdırabilirim?", correctAnswer: "Comment puis-je imprimer ce formulaire ?" },
    { id: 238, type: "SELECT", question: "'Imprimer' ne demek?", options: [{ id: "a", text: "Etkilemek", correct: false }, { id: "b", text: "İmzalamak", correct: false }, { id: "c", text: "Yazdırmak", correct: true }, { id: "d", text: "Sıkıştırmak", correct: false }] },
    { id: 239, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle a le dernier ___ (Akıllı telefon).", options: [{ id: "a", text: "smartphone", correct: true }, { id: "b", text: "intelligent", correct: false }] },
    { id: 240, type: "SELECT", question: "'Le dossier' ne demek?", options: [{ id: "a", text: "Klasör", correct: true }, { id: "b", text: "Masa", correct: false }, { id: "c", text: "Uyku", correct: false }, { id: "d", text: "Belge", correct: false }] }
];

// ===== UNIT 364 HARDCODED QUIZZES =====
const unit364Quiz1: Question[] = [
    // Quiz 1: Vocab & Phrases
    { id: 241, type: "SELECT", question: "'L'art' ne demek?", options: [{ id: "a", text: "Bilim", correct: false }, { id: "b", text: "Sanat", correct: true }, { id: "c", text: "Tarih", correct: false }, { id: "d", text: "Müzik", correct: false }] },
    { id: 242, type: "SELECT", question: "'La culture' ne demek?", options: [{ id: "a", text: "Kültür", correct: true }, { id: "b", text: "Spor", correct: false }, { id: "c", text: "Sanat", correct: false }, { id: "d", text: "Film", correct: false }] },
    { id: 243, type: "SELECT", question: "'Le musée' ne demek?", options: [{ id: "a", text: "Otobüs", correct: false }, { id: "b", text: "Okul", correct: false }, { id: "c", text: "Müze", correct: true }, { id: "d", text: "Kitaplık", correct: false }] },
    { id: 244, type: "SELECT", question: "'L'exposition' ne demek?", options: [{ id: "a", text: "Açıklama", correct: false }, { id: "b", text: "Tehlike", correct: false }, { id: "c", text: "Satış", correct: false }, { id: "d", text: "Sergi", correct: true }] },
    { id: 245, type: "SELECT", question: "'Le tableau' ne demek?", options: [{ id: "a", text: "Oda", correct: false }, { id: "b", text: "Tablo", correct: true }, { id: "c", text: "Kapı", correct: false }, { id: "d", text: "Boya", correct: false }] },
    { id: 246, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La sculpture", options: [{ id: "a", text: "Resim", correct: false }, { id: "b", text: "Heykel", correct: true }, { id: "c", text: "Sergi", correct: false }, { id: "d", text: "Kültür", correct: false }] },
    { id: 247, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'artiste", options: [{ id: "a", text: "Öğrenci", correct: false }, { id: "b", text: "Sanatçı", correct: true }, { id: "c", text: "Müzisyen", correct: false }, { id: "d", text: "Tiyatro", correct: false }] },
    { id: 248, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le peintre", options: [{ id: "a", text: "Yönetmen", correct: false }, { id: "b", text: "Boya", correct: false }, { id: "c", text: "Ressam", correct: true }, { id: "d", text: "Oyuncu", correct: false }] },
    { id: 249, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime découvrir de nouvelles ___.", options: [{ id: "a", text: "cultures", correct: true }, { id: "b", text: "cultur", correct: false }] },
    { id: 250, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous allons visiter le ___ du Louvre.", options: [{ id: "a", text: "musée", correct: true }, { id: "b", text: "exposition", correct: false }] },
    { id: 251, type: "SELECT", question: "'Ce musée est très célèbre.' ne demek?", options: [{ id: "a", text: "Bu müze çok yenidir.", correct: false }, { id: "b", text: "Bu müze çok ünlüdür.", correct: true }, { id: "c", text: "Bu sergi çok ünlüdür.", correct: false }, { id: "d", text: "Müze kapalıdır.", correct: false }] },
    { id: 252, type: "SELECT", question: "'Quel est ton peintre préféré ?' ne demek?", options: [{ id: "a", text: "En sevdiğin ressam kimdir?", correct: true }, { id: "b", text: "En sevdiğin tablo hangisi?", correct: false }, { id: "c", text: "Bu ressam ünlü mü?", correct: false }, { id: "d", text: "En sevdiğin renk nedir?", correct: false }] },
    { id: 253, type: "TRANSLATE", question: "Çevir:", hint: "Dün modern sanat sergisi gördüm.", correctAnswer: "J'ai vu une exposition d'art moderne hier." },
    { id: 254, type: "TRANSLATE", question: "Çevir:", hint: "Bu akşam tiyatroya gidiyoruz.", correctAnswer: "Nous allons au théâtre ce soir." },
    { id: 255, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La Joconde est un véritable chef-d'œuvre.", options: [{ id: "a", text: "Mona Lisa eski bir tablodur.", correct: false }, { id: "b", text: "Mona Lisa gerçek bir başyapıttır.", correct: true }, { id: "c", text: "Başyapıtlar gerçektir.", correct: false }, { id: "d", text: "Mona Lisa müzededir.", correct: false }] },
    { id: 256, type: "TRANSLATE", question: "Çevir:", hint: "Ressam", correctAnswer: "Le peintre" },
    { id: 257, type: "FILL_BLANK", question: "Doldur:", sentence: "La Joconde est un véritable chef-d'___.", options: [{ id: "a", text: "œuvre", correct: true }, { id: "b", text: "art", correct: false }] },
    { id: 258, type: "TRANSLATE", question: "Çevir:", hint: "Yönetmen bu film için bir ödül kazandı.", correctAnswer: "Le réalisateur a gagné un prix pour ce film." },
    { id: 259, type: "SELECT", question: "'Le chef-d'œuvre' ne demek?", options: [{ id: "a", text: "Okul müdürü", correct: false }, { id: "b", text: "Mühendis", correct: false }, { id: "c", text: "Başyapıt", correct: true }, { id: "d", text: "Yönetmen", correct: false }] },
    { id: 260, type: "SELECT", question: "'La pièce de théâtre' ne demek?", options: [{ id: "a", text: "Sahne", correct: false }, { id: "b", text: "Tiyatro oyunu", correct: true }, { id: "c", text: "Tiyatro bileti", correct: false }, { id: "d", text: "Tiyatro salonu", correct: false }] }
];

const unit364Quiz2: Question[] = [
    // Quiz 2: Grammar (Pronoms Démonstratifs) & Speaking
    { id: 261, type: "SELECT", question: "'Celui' hangi cinsiyet ve sayı için kullanılır?", options: [{ id: "a", text: "Eril Tekil", correct: true }, { id: "b", text: "Dişil Tekil", correct: false }, { id: "c", text: "Eril Çoğul", correct: false }, { id: "d", text: "Dişil Çoğul", correct: false }] },
    { id: 262, type: "SELECT", question: "'Celles' hangi cinsiyet ve sayı için kullanılır?", options: [{ id: "a", text: "Eril Tekil", correct: false }, { id: "b", text: "Dişil Tekil", correct: false }, { id: "c", text: "Eril Çoğul", correct: false }, { id: "d", text: "Dişil Çoğul", correct: true }] },
    { id: 263, type: "SELECT", question: "İşaret adıllarına eklenen '-ci' eki ne belirtir?", options: [{ id: "a", text: "Uzaklık (Şu/O)", correct: false }, { id: "b", text: "Geçmiş zaman", correct: false }, { id: "c", text: "Yakınlık (Bu/Bunlar)", correct: true }, { id: "d", text: "Çoğulluk", correct: false }] },
    { id: 264, type: "FILL_BLANK", question: "Doldur:", sentence: "Quel gâteau veux-tu ? ___-ci ou celui-là ?", options: [{ id: "a", text: "Celui", correct: true }, { id: "b", text: "Celle", correct: false }] },
    { id: 265, type: "FILL_BLANK", question: "Doldur:", sentence: "La voiture rouge ou ___-ci ?", options: [{ id: "a", text: "celle", correct: true }, { id: "b", text: "celui", correct: false }] },
    { id: 266, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est l'ordinateur de Paul ? Non, c'est ___ de Marie.", options: [{ id: "a", text: "celui", correct: true }, { id: "b", text: "celle", correct: false }] },
    { id: 267, type: "TRANSLATE", question: "Çevir:", hint: "Bunu mu yoksa şunu mu? (Eril tekil için)", correctAnswer: "Celui-ci ou celui-là ?" },
    { id: 268, type: "TRANSLATE", question: "Çevir:", hint: "Konuşan (o kişi), benim kardeşim.", correctAnswer: "Celui qui parle est mon frère." },
    { id: 269, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mon livre et celui de Pierre.", options: [{ id: "a", text: "Benim kitabım ve Pierre'in resmi.", correct: false }, { id: "b", text: "Benim kitabım ve Pierre'inki.", correct: true }, { id: "c", text: "Benim ve Pierre'in.", correct: false }, { id: "d", text: "Kitap Pierre'in.", correct: false }] },
    { id: 270, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je préfère les idées de Thomas à celles de Sophie.", options: [{ id: "a", text: "Thomas'ın fikirlerini Sophie'ninkilere tercih ederim.", correct: true }, { id: "b", text: "Sophie'nin fikirlerini Thomas'ınkilerden fazla severim.", correct: false }, { id: "c", text: "Fikirlerimi tercih ederim.", correct: false }, { id: "d", text: "İkisi de iyi.", correct: false }] },
    { id: 271, type: "SELECT", question: "Konuşma: 'Quel tableau préfères-tu ?' ne demek?", options: [{ id: "a", text: "Hangi resmi çiziyorsun?", correct: false }, { id: "b", text: "Hangi tabloyu tercih ediyorsun?", correct: true }, { id: "c", text: "En iyi ressam kim?", correct: false }, { id: "d", text: "Tablolar pahalı mı?", correct: false }] },
    { id: 272, type: "SELECT", question: "Konuşma: 'Moi, j'aime visiter les musées.' ne demek?", options: [{ id: "a", text: "Müzeleri sevmem.", correct: false }, { id: "b", text: "Bana müzeleri göster.", correct: false }, { id: "c", text: "Ben müzeleri ziyaret etmeyi severim.", correct: true }, { id: "d", text: "Sen müzeleri sever misin?", correct: false }] },
    { id: 273, type: "TRANSLATE", question: "Çevir:", hint: "Bu film muhteşemdi.", correctAnswer: "Ce film était magnifique." },
    { id: 274, type: "TRANSLATE", question: "Çevir:", hint: "Resim sergilerini severim.", correctAnswer: "J'aime les expositions de peinture." },
    { id: 275, type: "FILL_BLANK", question: "Doldur:", sentence: "Prends la chaise, ___ que tu préfères.", options: [{ id: "a", text: "celle", correct: true }, { id: "b", text: "celui", correct: false }] },
    { id: 276, type: "SELECT", question: "'Celles-là' ne anlama gelir?", options: [{ id: "a", text: "Şunlar (Dişil)", correct: true }, { id: "b", text: "Şunlar (Eril)", correct: false }, { id: "c", text: "Bunlar (Dişil)", correct: false }, { id: "d", text: "Bu", correct: false }] },
    { id: 277, type: "SELECT", question: "Aidiyet belirtirken kullanılan 'celui de...' kalıbındaki 'de' kelimesi ne anlam verir?", options: [{ id: "a", text: "İçinde", correct: false }, { id: "b", text: "Üzerinde", correct: false }, { id: "c", text: "Burada", correct: false }, { id: "d", text: "...'nin / ...-ninki", correct: true }] },
    { id: 278, type: "TRANSLATE", question: "Çevir:", hint: "Thomas'ın fikirleri", correctAnswer: "Les idées de Thomas" },
    { id: 279, type: "TRANSLATE", question: "Çevir:", hint: "Bu arabaları seviyorum, özellikle şunları (dişil çoğul).", correctAnswer: "J'aime ces voitures, surtout celles-là." },
    { id: 280, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'aime ces fleurs, surtout celles-là.", options: [{ id: "a", text: "Çiçekleri seviyorum.", correct: false }, { id: "b", text: "Bu çiçekleri seviyorum, özellikle şunları.", correct: true }, { id: "c", text: "Şu çiçekleri sevmiyorum.", correct: false }, { id: "d", text: "Çiçekler çok pahalı.", correct: false }] }
];

const unit364Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension ("La passion de Léa") & Phrases
    { id: 281, type: "SELECT", question: "Par quoi Léa est-elle passionnée ?", options: [{ id: "a", text: "Par l'art et la peinture impressionniste", correct: true }, { id: "b", text: "Par la musique classique", correct: false }, { id: "c", text: "Par le cinéma", correct: false }, { id: "d", text: "Par la littérature", correct: false }] },
    { id: 282, type: "SELECT", question: "Quel jour a-t-elle visité le musée ?", options: [{ id: "a", text: "Lundi", correct: false }, { id: "b", text: "Dimanche", correct: true }, { id: "c", text: "Samedi", correct: false }, { id: "d", text: "Jeudi", correct: false }] },
    { id: 283, type: "SELECT", question: "Quel musée Léa a-t-elle visité ?", options: [{ id: "a", text: "Le Louvre", correct: false }, { id: "b", text: "Le musée d'Orsay", correct: true }, { id: "c", text: "Le Centre Georges Pompidou", correct: false }, { id: "d", text: "Le musée Picasso", correct: false }] },
    { id: 284, type: "SELECT", question: "Comment était la file d'attente en arrivant ?", options: [{ id: "a", text: "Inexistante", correct: false }, { id: "b", text: "Très courte", correct: false }, { id: "c", text: "Très longue", correct: true }, { id: "d", text: "Rapide", correct: false }] },
    { id: 285, type: "SELECT", question: "De quel artiste Léa a-t-elle admiré la toile ?", options: [{ id: "a", text: "Vincent Van Gogh", correct: false }, { id: "b", text: "Claude Monet", correct: true }, { id: "c", text: "Pablo Picasso", correct: false }, { id: "d", text: "Salvador Dalí", correct: false }] },
    { id: 286, type: "SELECT", question: "Qui expliquait l'histoire de la création du tableau ?", options: [{ id: "a", text: "Léa", correct: false }, { id: "b", text: "Un autre visiteur", correct: false }, { id: "c", text: "Un guide du musée", correct: true }, { id: "d", text: "Le peintre", correct: false }] },
    { id: 287, type: "SELECT", question: "Que racontait le guide sur le peintre ?", options: [{ id: "a", text: "Il utilisait la lumière naturelle", correct: true }, { id: "b", text: "Il peignait dans le noir", correct: false }, { id: "c", text: "Il utilisait seulement du rouge", correct: false }, { id: "d", text: "Il était aveugle", correct: false }] },
    { id: 288, type: "SELECT", question: "Que faisait Léa pendant les explications ?", options: [{ id: "a", text: "Elle dormait", correct: false }, { id: "b", text: "Elle parlait au téléphone", correct: false }, { id: "c", text: "Elle écoutait avec attention et prenait des notes", correct: true }, { id: "d", text: "Elle dessinait", correct: false }] },
    { id: 289, type: "SELECT", question: "Où Léa s'est-elle arrêtée à la fin de la visite ?", options: [{ id: "a", text: "Au café", correct: false }, { id: "b", text: "À la boutique de souvenirs", correct: true }, { id: "c", text: "Aux toilettes", correct: false }, { id: "d", text: "Au parc", correct: false }] },
    { id: 290, type: "SELECT", question: "Qu'est-ce que Léa a acheté à la boutique ?", options: [{ id: "a", text: "Un carnet de notes", correct: false }, { id: "b", text: "Une carte postale et un livre", correct: true }, { id: "c", text: "Un t-shirt", correct: false }, { id: "d", text: "Une peinture", correct: false }] },
    { id: 291, type: "TRANSLATE", question: "Çevir:", hint: "Tutkulu", correctAnswer: "Passionné" },
    { id: 292, type: "TRANSLATE", question: "Çevir:", hint: "Bekleme sırası / Kuyruk", correctAnswer: "La file d'attente" },
    { id: 293, type: "TRANSLATE", question: "Çevir:", hint: "Hayran olmak", correctAnswer: "Admirer" },
    { id: 294, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La création", options: [{ id: "a", text: "Yaratılış / Eser", correct: true }, { id: "b", text: "Yarışma", correct: false }, { id: "c", text: "Aktivite", correct: false }, { id: "d", text: "Mükemmellik", correct: false }] },
    { id: 295, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle a pris des notes dans son petit ___.", options: [{ id: "a", text: "carnet", correct: true }, { id: "b", text: "livre", correct: false }] },
    { id: 296, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle est restée ___.", options: [{ id: "a", text: "patiente", correct: true }, { id: "b", text: "passiente", correct: false }] },
    { id: 297, type: "TRANSLATE", question: "Çevir:", hint: "Sanat tarihini okudum.", correctAnswer: "J'ai lu l'histoire de l'art." },
    { id: 298, type: "TRANSLATE", question: "Çevir:", hint: "Bir kartpostal aldım.", correctAnswer: "J'ai acheté une carte postale." },
    { id: 299, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La boutique de souvenirs", options: [{ id: "a", text: "Bilet gişesi", correct: false }, { id: "b", text: "Hediyelik eşya dükkanı", correct: true }, { id: "c", text: "Giyim mağazası", correct: false }, { id: "d", text: "Kitapçı", correct: false }] },
    { id: 300, type: "SELECT", question: "'Le carnet' ne demek?", options: [{ id: "a", text: "Defter", correct: true }, { id: "b", text: "Silgi", correct: false }, { id: "c", text: "Kalem", correct: false }, { id: "d", text: "Tuval", correct: false }] }
];

const unit364Quiz4: Question[] = [
    // Quiz 4: Mastery (Mixed Challenge)
    { id: 301, type: "FILL_BLANK", question: "Doldur:", sentence: "J'adore aller au ___ le soir.", options: [{ id: "a", text: "théâtre", correct: true }, { id: "b", text: "film", correct: false }] },
    { id: 302, type: "TRANSLATE", question: "Çevir:", hint: "Klasik müzik dinlemeye bayılırım.", correctAnswer: "J'adore écouter de la musique classique." },
    { id: 303, type: "SELECT", question: "'L'acteur' ne demek?", options: [{ id: "a", text: "Yönetmen", correct: false }, { id: "b", text: "Öğretmen", correct: false }, { id: "c", text: "Erkek oyuncu", correct: true }, { id: "d", text: "Kadın oyuncu", correct: false }] },
    { id: 304, type: "SELECT", question: "'La scène' ne demek?", options: [{ id: "a", text: "Sahne", correct: true }, { id: "b", text: "Perde", correct: false }, { id: "c", text: "Film", correct: false }, { id: "d", text: "Senaryo", correct: false }] },
    { id: 305, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le cinéma", options: [{ id: "a", text: "Spor", correct: false }, { id: "b", text: "Tiyatro", correct: false }, { id: "c", text: "Müze", correct: false }, { id: "d", text: "Sinema", correct: true }] },
    { id: 306, type: "TRANSLATE", question: "Çevir:", hint: "Filmin yönetmeni İspanyol.", correctAnswer: "Le réalisateur du film est espagnol." },
    { id: 307, type: "TRANSLATE", question: "Çevir:", hint: "Senaryo çok orijinal.", correctAnswer: "Le scénario est très original." },
    { id: 308, type: "FILL_BLANK", question: "Doldur:", sentence: "Il joue plusieurs ___ de musique.", options: [{ id: "a", text: "instruments", correct: true }, { id: "b", text: "tableaux", correct: false }] },
    { id: 309, type: "SELECT", question: "'La littérature' ne demek?", options: [{ id: "a", text: "Resim", correct: false }, { id: "b", text: "Biyoloji", correct: false }, { id: "c", text: "Siyaset", correct: false }, { id: "d", text: "Edebiyat", correct: true }] },
    { id: 310, type: "SELECT", question: "'Le roman' ne demek?", options: [{ id: "a", text: "Masal", correct: false }, { id: "b", text: "Şiir", correct: false }, { id: "c", text: "Roman", correct: true }, { id: "d", text: "Dergi", correct: false }] },
    { id: 311, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'écrivain présente son livre.", options: [{ id: "a", text: "Ressam resmini çiziyor.", correct: false }, { id: "b", text: "Yazar kitabını tanıtıyor.", correct: true }, { id: "c", text: "Yönetici raporu veriyor.", correct: false }, { id: "d", text: "Kitap çok güzel.", correct: false }] },
    { id: 312, type: "TRANSLATE", question: "Çevir:", hint: "Erkek oyuncular rollerini çok iyi oynadılar.", correctAnswer: "Les acteurs ont très bien joué leur rôle." },
    { id: 313, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ a beaucoup applaudi.", options: [{ id: "a", text: "public", correct: true }, { id: "b", text: "publics", correct: false }] },
    { id: 314, type: "TRANSLATE", question: "Çevir:", hint: "Bitiş sahnesi çok dokunaklıydı.", correctAnswer: "La scène de fin était très émouvante." },
    { id: 315, type: "SELECT", question: "'Le personnage' ne demek?", options: [{ id: "a", text: "Şehir", correct: false }, { id: "b", text: "Kıyafet", correct: false }, { id: "c", text: "Karakter", correct: true }, { id: "d", text: "Sahne", correct: false }] },
    { id: 316, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Applaudir", options: [{ id: "a", text: "Bağırmak", correct: false }, { id: "b", text: "Alkışlamak", correct: true }, { id: "c", text: "Dinlemek", correct: false }, { id: "d", text: "İzlemek", correct: false }] },
    { id: 317, type: "TRANSLATE", question: "Çevir:", hint: "Bu bir macera romanı.", correctAnswer: "C'est un roman d'aventure." },
    { id: 318, type: "SELECT", question: "'Le poème' ne demek?", options: [{ id: "a", text: "Destan", correct: false }, { id: "b", text: "Roman", correct: false }, { id: "c", text: "Şiir", correct: true }, { id: "d", text: "Masal", correct: false }] },
    { id: 319, type: "FILL_BLANK", question: "Doldur:", sentence: "La culture française est très riche et ___ (çeşitli).", options: [{ id: "a", text: "variée", correct: true }, { id: "b", text: "varié", correct: false }] },
    { id: 320, type: "SELECT", question: "'Exprimer' ne demek?", options: [{ id: "a", text: "Saklamak", correct: false }, { id: "b", text: "Satın almak", correct: false }, { id: "c", text: "Unutmak", correct: false }, { id: "d", text: "İfade etmek", correct: true }] }
];

// ===== UNIT 365 HARDCODED QUIZZES =====
const unit365Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Phrases
    { id: 401, type: "SELECT", question: "'L'innovation' ne demek?", options: [{ id: "a", text: "İcat", correct: false }, { id: "b", text: "İnovasyon / Yenilik", correct: true }, { id: "c", text: "Araştırma", correct: false }, { id: "d", text: "Robot", correct: false }] },
    { id: 402, type: "SELECT", question: "'La robotique' ne demek?", options: [{ id: "a", text: "Makine", correct: false }, { id: "b", text: "Bilgisayar", correct: false }, { id: "c", text: "Robotik", correct: true }, { id: "d", text: "Yazılım", correct: false }] },
    { id: 403, type: "SELECT", question: "'L'intelligence artificielle' ne demek?", options: [{ id: "a", text: "İnsan zekası", correct: false }, { id: "b", text: "Uzay bilimi", correct: false }, { id: "c", text: "Yapay zeka", correct: true }, { id: "d", text: "Dijital veri", correct: false }] },
    { id: 404, type: "SELECT", question: "'L'impact' ne demek?", options: [{ id: "a", text: "Darbe", correct: false }, { id: "b", text: "Sebep", correct: false }, { id: "c", text: "Sonuç", correct: false }, { id: "d", text: "Etki", correct: true }] },
    { id: 405, type: "SELECT", question: "'Le progrès' ne demek?", options: [{ id: "a", text: "Gerileme", correct: false }, { id: "b", text: "İlerleme / Gelişim", correct: true }, { id: "c", text: "Umut", correct: false }, { id: "d", text: "Sevinç", correct: false }] },
    { id: 406, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La société", options: [{ id: "a", text: "Toplum", correct: true }, { id: "b", text: "Şirket", correct: false }, { id: "c", text: "Okul", correct: false }, { id: "d", text: "Hükümet", correct: false }] },
    { id: 407, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Numérique", options: [{ id: "a", text: "Sayısal", correct: false }, { id: "b", text: "Analog", correct: false }, { id: "c", text: "Dijital", correct: true }, { id: "d", text: "Otomatik", correct: false }] },
    { id: 408, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La donnée", options: [{ id: "a", text: "Bilgi", correct: false }, { id: "b", text: "Veri", correct: true }, { id: "c", text: "Tarih", correct: false }, { id: "d", text: "İnternet", correct: false }] },
    { id: 409, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous vivons à l'ère ___.", options: [{ id: "a", text: "numérique", correct: true }, { id: "b", text: "numériques", correct: false }] },
    { id: 410, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut protéger nos ___ personnelles.", options: [{ id: "a", text: "données", correct: true }, { id: "b", text: "donnée", correct: false }] },
    { id: 411, type: "TRANSLATE", question: "Çevir:", hint: "Teknolojik yenilik hızla ilerliyor.", correctAnswer: "L'innovation technologique avance vite." },
    { id: 412, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Yapay zeka", correctAnswer: "L'intelligence artificielle" },
    { id: 413, type: "SELECT", question: "'L'algorithme' ne demek?", options: [{ id: "a", text: "Matematik", correct: false }, { id: "b", text: "Algoritma", correct: true }, { id: "c", text: "Yazılım", correct: false }, { id: "d", text: "Robot", correct: false }] },
    { id: 414, type: "SELECT", question: "'Automatisé' ne demek?", options: [{ id: "a", text: "Hızlı", correct: false }, { id: "b", text: "Manuel", correct: false }, { id: "c", text: "Otomatikleştirilmiş", correct: true }, { id: "d", text: "Gelişmiş", correct: false }] },
    { id: 415, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La vie privée", options: [{ id: "a", text: "İş hayatı", correct: false }, { id: "b", text: "Özel hayat", correct: true }, { id: "c", text: "Kamu", correct: false }, { id: "d", text: "Gizlilik", correct: false }] },
    { id: 416, type: "TRANSLATE", question: "Çevir:", hint: "Bu sistem tamamen otomatikleştirilmiştir.", correctAnswer: "Ce système est entièrement automatisé." },
    { id: 417, type: "SELECT", question: "Hangi cümle 'Robotik yeni işler yaratır' anlamına gelir?", options: [{ id: "a", text: "La robotique détruit des emplois.", correct: false }, { id: "b", text: "L'innovation crée des emplois.", correct: false }, { id: "c", text: "La robotique crée de nouveaux emplois.", correct: true }] },
    { id: 418, type: "FILL_BLANK", question: "Doldur:", sentence: "L'internet menace parfois la ___ privée.", options: [{ id: "a", text: "vie", correct: true }, { id: "b", text: "mort", correct: false }] },
    { id: 419, type: "TRANSLATE", question: "Çevir:", hint: "Bilimsel ilerleme önemlidir.", correctAnswer: "Le progrès scientifique est important." },
    { id: 420, type: "SELECT", question: "'La société' ne demek?", options: [{ id: "a", text: "Şirket", correct: false }, { id: "b", text: "Toplum", correct: true }, { id: "c", text: "Dernek", correct: false }, { id: "d", text: "Grup", correct: false }] }
];

const unit365Quiz2: Question[] = [
    // Quiz 2: Grammar (La Voix Passive) & Sentences
    { id: 421, type: "SELECT", question: "Aşağıdakilerden hangisi pasif (edilgen) bir cümledir?", options: [{ id: "a", text: "Il lit un livre.", correct: false }, { id: "b", text: "Le livre est lu par lui.", correct: true }, { id: "c", text: "Nous mangeons une pomme.", correct: false }, { id: "d", text: "Elle a acheté un robot.", correct: false }] },
    { id: 422, type: "FILL_BLANK", question: "Doldur (Pasif):", sentence: "La maison ___ construite par l'architecte.", options: [{ id: "a", text: "est", correct: true }, { id: "b", text: "a", correct: false }] },
    { id: 423, type: "FILL_BLANK", question: "Doldur (Pasif):", sentence: "Le repas a ___ préparé.", options: [{ id: "a", text: "été", correct: true }, { id: "b", text: "être", correct: false }] },
    { id: 424, type: "SELECT", question: "La Voix Passive'de asıl fiil hangi halde bulunur?", options: [{ id: "a", text: "Infinitif (Yalın)", correct: false }, { id: "b", text: "Participe Passé", correct: true }, { id: "c", text: "Présent", correct: false }, { id: "d", text: "Imparfait", correct: false }] },
    { id: 425, type: "SELECT", question: "Aşağıdaki cümlenin çevirisi nedir: 'Les problèmes sont résolus.'", options: [{ id: "a", text: "Problemler çözülüyor.", correct: false }, { id: "b", text: "Problemler çözüldü.", correct: true }, { id: "c", text: "Problemleri çözüyoruz.", correct: false }, { id: "d", text: "Problem çözülecek.", correct: false }] },
    { id: 426, type: "FILL_BLANK", question: "Doldur (Uyum Kuralı):", sentence: "La lettre est ___.", options: [{ id: "a", text: "écrit", correct: false }, { id: "b", text: "écrite", correct: true }] },
    { id: 427, type: "FILL_BLANK", question: "Doldur:", sentence: "Le projet a été terminé ___ les étudiants.", options: [{ id: "a", text: "par", correct: true }, { id: "b", text: "pour", correct: false }] },
    { id: 428, type: "TRANSLATE", question: "Çevir:", hint: "Bilgisayar teknisyen tarafından tamir edilir.", correctAnswer: "L'ordinateur est réparé par le technicien." },
    { id: 429, type: "SELECT", question: "'L'invention' ne demek?", options: [{ id: "a", text: "Yaratıcılık", correct: false }, { id: "b", text: "İcat / Buluş", correct: true }, { id: "c", text: "Gözlem", correct: false }, { id: "d", text: "Deney", correct: false }] },
    { id: 430, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La machine", options: [{ id: "a", text: "Araba", correct: false }, { id: "b", text: "Motor", correct: false }, { id: "c", text: "Makine", correct: true }, { id: "d", text: "Alet", correct: false }] },
    { id: 431, type: "SELECT", question: "'Développer' ne demek?", options: [{ id: "a", text: "Silmek", correct: false }, { id: "b", text: "Geliştirmek", correct: true }, { id: "c", text: "Kullanmak", correct: false }, { id: "d", text: "Bozmak", correct: false }] },
    { id: 432, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous devons ___ de nouveaux outils.", options: [{ id: "a", text: "développer", correct: true }, { id: "b", text: "développons", correct: false }] },
    { id: 433, type: "SELECT", question: "'Remplacer' ne demek?", options: [{ id: "a", text: "Yerine geçmek / Değiştirmek", correct: true }, { id: "b", text: "Tamir etmek", correct: false }, { id: "c", text: "Korumak", correct: false }, { id: "d", text: "Satın almak", correct: false }] },
    { id: 434, type: "TRANSLATE", question: "Çevir:", hint: "Makine işi hızla tamamlar.", correctAnswer: "La machine accomplit le travail rapidement." },
    { id: 435, type: "SELECT", question: "'Faciliter' ne demek?", options: [{ id: "a", text: "Zorlaştırmak", correct: false }, { id: "b", text: "Kolaylaştırmak", correct: true }, { id: "c", text: "Hızlandırmak", correct: false }, { id: "d", text: "Yavaşlatmak", correct: false }] },
    { id: 436, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le chercheur", options: [{ id: "a", text: "Öğrenci", correct: false }, { id: "b", text: "Araştırmacı", correct: true }, { id: "c", text: "Öğretmen", correct: false }, { id: "d", text: "Mühendis", correct: false }] },
    { id: 437, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Bu araçlar işimizi kolaylaştıracak.", correctAnswer: "Ces outils vont faciliter notre travail." },
    { id: 438, type: "FILL_BLANK", question: "Doldur:", sentence: "Les robots ne peuvent pas ___ les humains.", options: [{ id: "a", text: "remplacer", correct: true }, { id: "b", text: "remplacé", correct: false }] },
    { id: 439, type: "SELECT", question: "Pasif cümleyi seç:", options: [{ id: "a", text: "Le chien attrape la balle.", correct: false }, { id: "b", text: "La balle est attrapée par le chien.", correct: true }] },
    { id: 440, type: "TRANSLATE", question: "Çevir:", hint: "Ev mimar tarafından inşa edilir.", correctAnswer: "La maison est construite par l'architecte." }
];

const unit365Quiz3: Question[] = [
    // Quiz 3: Speaking/Phrases, translation
    { id: 441, type: "SELECT", question: "'L'appareil' ne demek?", options: [{ id: "a", text: "Eşya", correct: false }, { id: "b", text: "Kablo", correct: false }, { id: "c", text: "Cihaz", correct: true }, { id: "d", text: "Ekran", correct: false }] },
    { id: 442, type: "SELECT", question: "'La connexion' ne demek?", options: [{ id: "a", text: "Bağlantı", correct: true }, { id: "b", text: "Kopma", correct: false }, { id: "c", text: "Hız", correct: false }, { id: "d", text: "Ağ", correct: false }] },
    { id: 443, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ dépend du progrès technologique.", options: [{ id: "a", text: "avenir", correct: true }, { id: "b", text: "passé", correct: false }] },
    { id: 444, type: "TRANSLATE", question: "Çevir:", hint: "Teknoloji inanılmaz bir hızla gelişiyor.", correctAnswer: "La technologie évolue à une vitesse incroyable." },
    { id: 445, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'avenir", options: [{ id: "a", text: "Geçmiş", correct: false }, { id: "b", text: "Şimdi", correct: false }, { id: "c", text: "Gelecek", correct: true }, { id: "d", text: "Zaman", correct: false }] },
    { id: 446, type: "SELECT", question: "Hangisi 'Robotlar birçok görevi yerine getiriyor.' demektir?", options: [{ id: "a", text: "Les robots font des erreurs.", correct: false }, { id: "b", text: "Les robots accomplissent de nombreuses tâches.", correct: true }, { id: "c", text: "Les robots sont très intelligents.", correct: false }] },
    { id: 447, type: "TRANSLATE", question: "Çevir:", hint: "Yapay zeka günlük hayatta bize yardımcı oluyor.", correctAnswer: "L'intelligence artificielle nous aide dans la vie quotidienne." },
    { id: 448, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est essentiel de ___ nos données personnelles.", options: [{ id: "a", text: "protéger", correct: true }, { id: "b", text: "partager", correct: false }] },
    { id: 449, type: "SELECT", question: "Hangisi 'İnternet iletişim kurma şeklimizde devrim yarattı.' demektir?", options: [{ id: "a", text: "Internet est dangereux.", correct: false }, { id: "b", text: "Internet a révolutionné notre façon de communiquer.", correct: true }, { id: "c", text: "On ne communique plus sur Internet.", correct: false }] },
    { id: 450, type: "TRANSLATE", question: "Çevir:", hint: "Sosyal ağların toplum üzerinde büyük bir etkisi var.", correctAnswer: "Les réseaux sociaux ont un grand impact sur la société." },
    { id: 451, type: "FILL_BLANK", question: "Doldur:", sentence: "Beaucoup de ___ seront automatisés à l'avenir.", options: [{ id: "a", text: "métiers", correct: true }, { id: "b", text: "métier", correct: false }] },
    { id: 452, type: "FILL_BLANK", question: "Doldur:", sentence: "L'innovation technologique ___ de nouvelles opportunités.", options: [{ id: "a", text: "crée", correct: true }, { id: "b", text: "détruit", correct: false }] },
    { id: 453, type: "SELECT", question: "Hangisi 'Bilim ve robotik birlikte ilerliyor.' demektir?", options: [{ id: "a", text: "La science et la robotique progressent ensemble.", correct: true }, { id: "b", text: "La science refuse la robotique.", correct: false }, { id: "c", text: "La robotique est plus importante que la science.", correct: false }] },
    { id: 454, type: "TRANSLATE", question: "Çevir:", hint: "Teknolojinin toplumumuz üzerindeki etkisi muazzamdır.", correctAnswer: "L'impact de la technologie sur notre société est immense." },
    { id: 455, type: "SELECT", question: "'Crois-tu que les robots remplaceront les humains ?' çevirisi nedir?", options: [{ id: "a", text: "Robotlar insanları sever mi?", correct: false }, { id: "b", text: "Robotların insanların yerini alacağına inanıyor musun?", correct: true }, { id: "c", text: "İnsanlar robotları yenecek mi?", correct: false }] },
    { id: 456, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle nous aide à ___ des problèmes complexes.", options: [{ id: "a", text: "résoudre", correct: true }, { id: "b", text: "résolu", correct: false }] },
    { id: 457, type: "TRANSLATE", question: "Çevir:", hint: "Yapay zekanın tehlikeli olduğunu düşünüyor musunuz?", correctAnswer: "Pensez-vous que l'intelligence artificielle est dangereuse ?" },
    { id: 458, type: "FILL_BLANK", question: "Doldur:", sentence: "Cependant, il faut faire ___ à notre vie privée.", options: [{ id: "a", text: "attention", correct: true }, { id: "b", text: "peur", correct: false }] },
    { id: 459, type: "SELECT", question: "'J'utilise des applications sécurisées pour mes données.' ne demek?", options: [{ id: "a", text: "Verilerim için güvenli uygulamalar kullanıyorum.", correct: true }, { id: "b", text: "Uygulamalarımı sildim.", correct: false }, { id: "c", text: "Verilerim çalındı.", correct: false }] },
    { id: 460, type: "TRANSLATE", question: "Çevir:", hint: "Şirketim tamamen otomatikleştirilmiştir.", correctAnswer: "Mon entreprise est entièrement automatisée." }
];

const unit365Quiz4: Question[] = [
    // Quiz 4: Reading comprehension & mixed review
    { id: 461, type: "SELECT", question: "Où trouve-t-on les robots aujourd'hui (selon le texte) ?", options: [{ id: "a", text: "Seulement dans les usines", correct: false }, { id: "b", text: "Dans les usines, les maisons et les bureaux", correct: true }, { id: "c", text: "Uniquement sur Internet", correct: false }] },
    { id: 462, type: "TRANSLATE", question: "Çevir:", hint: "Dijital uçurum ciddi bir sorundur.", correctAnswer: "La fracture numérique est un problème grave." },
    { id: 463, type: "SELECT", question: "Comment l'IA nous aide-t-elle à la maison ?", options: [{ id: "a", text: "Elle répare les voitures", correct: false }, { id: "b", text: "Elle aide à faire le ménage et gérer les emplois du temps", correct: true }, { id: "c", text: "Elle cuisine tout", correct: false }] },
    { id: 464, type: "FILL_BLANK", question: "Doldur:", sentence: "Dans le domaine ___, des machines assistent les chirurgiens.", options: [{ id: "a", text: "médical", correct: true }, { id: "b", text: "agricole", correct: false }] },
    { id: 465, type: "SELECT", question: "De quoi certaines personnes s'inquiètent-elles ?", options: [{ id: "a", text: "Que les robots puissent remplacer les humains", correct: true }, { id: "b", text: "Que l'Internet soit trop cher", correct: false }, { id: "c", text: "Que les robots tombent en panne", correct: false }] },
    { id: 466, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'emploi du temps", options: [{ id: "a", text: "Zaman kaybı", correct: false }, { id: "b", text: "Program / Zaman çizelgesi", correct: true }, { id: "c", text: "Hava durumu", correct: false }, { id: "d", text: "İş fırsatı", correct: false }] },
    { id: 467, type: "TRANSLATE", question: "Çevir:", hint: "İnovasyon yeni işlere kapı açar.", correctAnswer: "L'innovation ouvre la porte à de nouveaux emplois." },
    { id: 468, type: "SELECT", question: "Que pensent les autres personnes de l'innovation technologique ?", options: [{ id: "a", text: "Qu'elle va détruire la société", correct: false }, { id: "b", text: "Qu'elle va faciliter la vie et créer des opportunités", correct: true }, { id: "c", text: "Qu'elle est trop chère", correct: false }] },
    { id: 469, type: "FILL_BLANK", question: "Doldur:", sentence: "L'important est de trouver un bon ___.", options: [{ id: "a", text: "équilibre", correct: true }, { id: "b", text: "déséquilibre", correct: false }] },
    { id: 470, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Gençleri bu konularda eğitmek önemlidir.", correctAnswer: "Il est important d'éduquer les jeunes sur ces sujets." },
    { id: 471, type: "SELECT", question: "Quel est l'élément à protéger sur Internet ?", options: [{ id: "a", text: "Le clavier", correct: false }, { id: "b", text: "La vie privée", correct: true }, { id: "c", text: "L'ordinateur", correct: false }] },
    { id: 472, type: "SELECT", question: "De quoi dépendra l'avenir ?", options: [{ id: "a", text: "De notre argent", correct: false }, { id: "b", text: "De la météo", correct: false }, { id: "c", text: "De la manière dont nous utiliserons les inventions", correct: true }] },
    { id: 473, type: "FILL_BLANK", question: "Doldur:", sentence: "En fin de compte, l'avenir ___ (bağlı olacak) de la manière...", options: [{ id: "a", text: "dépendra", correct: true }, { id: "b", text: "dépend", correct: false }] },
    { id: 474, type: "TRANSLATE", question: "Çevir:", hint: "Dijital ve gerçek hayat arasındaki dengeyi bulmak zordur.", correctAnswer: "Trouver l'équilibre entre la vie numérique et réelle est difficile." },
    { id: 475, type: "SELECT", question: "'L'usine' ne demek?", options: [{ id: "a", text: "Okul", correct: false }, { id: "b", text: "Hastane", correct: false }, { id: "c", text: "Fabrika", correct: true }, { id: "d", text: "Ev", correct: false }] },
    { id: 476, type: "LISTENING", question: "Duyduğunu seç:", audioText: "S'inquiéter", options: [{ id: "a", text: "Sevinmek", correct: false }, { id: "b", text: "Endişelenmek", correct: true }, { id: "c", text: "Korkutmak", correct: false }, { id: "d", text: "Unutmak", correct: false }] },
    { id: 477, type: "TRANSLATE", question: "Çevir:", hint: "Yemek hazırlandı. (Passé Composé - Pasif)", correctAnswer: "Le repas a été préparé." },
    { id: 478, type: "SELECT", question: "Pasif kuralına göre 'Les lettres sont ___.' boşluğuna ne gelir?", options: [{ id: "a", text: "lu", correct: false }, { id: "b", text: "lus", correct: false }, { id: "c", text: "lues", correct: true }] },
    { id: 479, type: "FILL_BLANK", question: "Doldur:", sentence: "Mettez vos ___ dans la poubelle.", options: [{ id: "a", text: "déchets", correct: true }, { id: "b", text: "plantes", correct: false }] },
    { id: 480, type: "SELECT", question: "'Accomplir' ne demek?", options: [{ id: "a", text: "Uyumak", correct: false }, { id: "b", text: "Yerine getirmek (Başarmak)", correct: true }, { id: "c", text: "Yaratmak", correct: false }, { id: "d", text: "Yazmak", correct: false }] }
];

// ===== UNIT 366 HARDCODED QUIZZES =====
const unit366Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Phrases
    { id: 481, type: "SELECT", question: "'Le réseau social' ne demek?", options: [{ id: "a", text: "Bilgisayar", correct: false }, { id: "b", text: "Sosyal medya/ağ", correct: true }, { id: "c", text: "İnternet", correct: false }, { id: "d", text: "Haber", correct: false }] },
    { id: 482, type: "SELECT", question: "'Le compte' ne demek?", options: [{ id: "a", text: "Hesap", correct: true }, { id: "b", text: "Şifre", correct: false }, { id: "c", text: "Profil", correct: false }, { id: "d", text: "Mesaj", correct: false }] },
    { id: 483, type: "SELECT", question: "'L'abonné' ne demek?", options: [{ id: "a", text: "Yaratıcı", correct: false }, { id: "b", text: "Abone / Takipçi", correct: true }, { id: "c", text: "Beğeni", correct: false }, { id: "d", text: "Yorum", correct: false }] },
    { id: 484, type: "SELECT", question: "'Partager' ne demek?", options: [{ id: "a", text: "Paylaşmak", correct: true }, { id: "b", text: "Gizlemek", correct: false }, { id: "c", text: "Silmek", correct: false }, { id: "d", text: "İzlemek", correct: false }] },
    { id: 485, type: "SELECT", question: "'Publier' ne demek?", options: [{ id: "a", text: "Okumak", correct: false }, { id: "b", text: "Yayınlamak", correct: true }, { id: "c", text: "Kaydetmek", correct: false }, { id: "d", text: "Kapatmak", correct: false }] },
    { id: 486, type: "LISTENING", question: "Duyduğunu seç:", audioText: "S'inscrire", options: [{ id: "a", text: "Çıkış yapmak", correct: false }, { id: "b", text: "Kaydolmak", correct: true }, { id: "c", text: "Yorum yapmak", correct: false }, { id: "d", text: "Mesaj atmak", correct: false }] },
    { id: 487, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Bloquer", options: [{ id: "a", text: "Engellemek", correct: true }, { id: "b", text: "Silmek", correct: false }, { id: "c", text: "Kabul etmek", correct: false }, { id: "d", text: "Beklemek", correct: false }] },
    { id: 488, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'influenceur", options: [{ id: "a", text: "Oyuncu", correct: false }, { id: "b", text: "Etkileyici / Fenomen", correct: true }, { id: "c", text: "Şarkıcı", correct: false }, { id: "d", text: "Yazar", correct: false }] },
    { id: 489, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai oublié mon mot de ___.", options: [{ id: "a", text: "passe", correct: true }, { id: "b", text: "passer", correct: false }] },
    { id: 490, type: "FILL_BLANK", question: "Doldur:", sentence: "Beaucoup de gens ont ___ ma vidéo.", options: [{ id: "a", text: "commenté", correct: true }, { id: "b", text: "commenter", correct: false }] },
    { id: 491, type: "TRANSLATE", question: "Çevir:", hint: "Bu sosyal ağı her gün kullanıyorum.", correctAnswer: "J'utilise ce réseau social tous les jours." },
    { id: 492, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Profil fotoğrafını değiştir.", correctAnswer: "Change ta photo de profil." },
    { id: 493, type: "SELECT", question: "'En ligne' ne demek?", options: [{ id: "a", text: "Çevrimdışı", correct: false }, { id: "b", text: "Çevrimiçi", correct: true }, { id: "c", text: "Ekranda", correct: false }, { id: "d", text: "Telefonda", correct: false }] },
    { id: 494, type: "SELECT", question: "'Télécharger' ne demek?", options: [{ id: "a", text: "Göndermek", correct: false }, { id: "b", text: "Silmek", correct: false }, { id: "c", text: "İndirmek / Yüklemek", correct: true }, { id: "d", text: "Aramak", correct: false }] },
    { id: 495, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une notification", options: [{ id: "a", text: "Bir mesaj", correct: false }, { id: "b", text: "Bir bildirim", correct: true }, { id: "c", text: "Bir çağrı", correct: false }, { id: "d", text: "Bir fotoğraf", correct: false }] },
    { id: 496, type: "TRANSLATE", question: "Çevir:", hint: "Aşağıdaki linke tıklayın.", correctAnswer: "Cliquez sur le lien en bas." },
    { id: 497, type: "SELECT", question: "Hangi cümle 'Instagram'da bir hesap açtım.' anlamına gelir?", options: [{ id: "a", text: "J'ai fermé mon compte Instagram.", correct: false }, { id: "b", text: "J'ai supprimé Instagram.", correct: false }, { id: "c", text: "J'ai créé un compte sur Instagram.", correct: true }] },
    { id: 498, type: "FILL_BLANK", question: "Doldur:", sentence: "Je joue à des jeux en ___.", options: [{ id: "a", text: "ligne", correct: true }, { id: "b", text: "lignes", correct: false }] },
    { id: 499, type: "TRANSLATE", question: "Çevir:", hint: "Bu uygulamayı indirebilirsin.", correctAnswer: "Tu peux télécharger cette application." },
    { id: 500, type: "SELECT", question: "'Taper' (klavyede) ne demek?", options: [{ id: "a", text: "Okumak", correct: false }, { id: "b", text: "Yazmak", correct: true }, { id: "c", text: "Çizmek", correct: false }, { id: "d", text: "Dinlemek", correct: false }] }
];

const unit366Quiz2: Question[] = [
    // Quiz 2: Grammar (Le Gérondif) & Sentences
    { id: 501, type: "SELECT", question: "Le Gérondif nasıl oluşturulur?", options: [{ id: "a", text: "Être + Participe passé", correct: false }, { id: "b", text: "En + Participe présent (-ant)", correct: true }, { id: "c", text: "De + Infinitif", correct: false }, { id: "d", text: "À + Nom", correct: false }] },
    { id: 502, type: "FILL_BLANK", question: "Doldur (Gérondif):", sentence: "Il mange ___ regardant la télé.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 503, type: "FILL_BLANK", question: "Doldur (Gérondif):", sentence: "Elle travaille en ___ (écouter) de la musique.", options: [{ id: "a", text: "écoutant", correct: true }, { id: "b", text: "écoutes", correct: false }] },
    { id: 504, type: "SELECT", question: "Aşağıdakilerden hangisi Gérondif'in kullanımıdır?", options: [{ id: "a", text: "Geçmişteki bir alışkanlığı belirtmek", correct: false }, { id: "b", text: "Eşzamanlı iki eylemi belirtmek", correct: true }, { id: "c", text: "Gelecek planlarını anlatmak", correct: false }, { id: "d", text: "Tavsiye vermek", correct: false }] },
    { id: 505, type: "SELECT", question: "'En faisant du sport' ne demek?", options: [{ id: "a", text: "Spor yapmadan", correct: false }, { id: "b", text: "Spor yaparak", correct: true }, { id: "c", text: "Spor yapacağım", correct: false }, { id: "d", text: "Spor yaptım", correct: false }] },
    { id: 506, type: "FILL_BLANK", question: "Doldur (İstisna):", sentence: "Il a gagné le match en ___ très rapide.", options: [{ id: "a", text: "étant", correct: true }, { id: "b", text: "ayant", correct: false }] },
    { id: 507, type: "FILL_BLANK", question: "Doldur (İstisna):", sentence: "J'ai accepté en ___ les risques.", options: [{ id: "a", text: "sachant", correct: true }, { id: "b", text: "savant", correct: false }] },
    { id: 508, type: "TRANSLATE", question: "Çevir:", hint: "Sınavı çok çalışarak başardım.", correctAnswer: "J'ai réussi à l'examen en étudiant beaucoup." },
    { id: 509, type: "SELECT", question: "'L'écran' ne demek?", options: [{ id: "a", text: "Kamera", correct: false }, { id: "b", text: "Ekran", correct: true }, { id: "c", text: "Hoparlör", correct: false }, { id: "d", text: "Mikrofon", correct: false }] },
    { id: 510, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le clavier", options: [{ id: "a", text: "Fare", correct: false }, { id: "b", text: "Kablo", correct: false }, { id: "c", text: "Klavye", correct: true }, { id: "d", text: "Ekran", correct: false }] },
    { id: 511, type: "SELECT", question: "'La messagerie' ne demek?", options: [{ id: "a", text: "Galeri", correct: false }, { id: "b", text: "Mesajlaşma uygulaması", correct: true }, { id: "c", text: "Rehber", correct: false }, { id: "d", text: "Takvim", correct: false }] },
    { id: 512, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ un message rapidement.", options: [{ id: "a", text: "tape", correct: true }, { id: "b", text: "taper", correct: false }] },
    { id: 513, type: "SELECT", question: "'Aimer' (sosyal medyada) ne demek?", options: [{ id: "a", text: "Beğenmek (Like atmak)", correct: true }, { id: "b", text: "Engellemek", correct: false }, { id: "c", text: "Şikayet etmek", correct: false }, { id: "d", text: "Silmek", correct: false }] },
    { id: 514, type: "TRANSLATE", question: "Çevir:", hint: "Sayfayı beğenmekten çekinmeyin.", correctAnswer: "N'hésitez pas à aimer la page." },
    { id: 515, type: "SELECT", question: "'Finir' fiilinin Gérondif hali nedir?", options: [{ id: "a", text: "En finir", correct: false }, { id: "b", text: "En finissant", correct: true }, { id: "c", text: "En fini", correct: false }, { id: "d", text: "En fin", correct: false }] },
    { id: 516, type: "LISTENING", question: "Duyduğunu seç:", audioText: "En conduisant", options: [{ id: "a", text: "Yürürken", correct: false }, { id: "b", text: "Araba sürerken", correct: true }, { id: "c", text: "Koşarken", correct: false }, { id: "d", text: "Uçarken", correct: false }] },
    { id: 517, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "O, araba sürerken telefonla konuştu.", correctAnswer: "Il a téléphoné en conduisant." },
    { id: 518, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu vas maigrir en ___ du sport.", options: [{ id: "a", text: "faisant", correct: true }, { id: "b", text: "fait", correct: false }] },
    { id: 519, type: "SELECT", question: "Hangisi Gérondif formundadır?", options: [{ id: "a", text: "Pour apprendre", correct: false }, { id: "b", text: "En apprenant", correct: true }] },
    { id: 520, type: "TRANSLATE", question: "Çevir:", hint: "Telefonumun ekranı kırık.", correctAnswer: "L'écran de mon téléphone est cassé." }
];

const unit366Quiz3: Question[] = [
    // Quiz 3: Speaking/Phrases, translation
    { id: 521, type: "SELECT", question: "Qu'est-ce que 'les réseaux sociaux occupent une grande place dans nos vies' signifie?", options: [{ id: "a", text: "Sosyal medya hayatımızda yer tutmaz.", correct: false }, { id: "b", text: "Sosyal medya hayatımızda büyük bir yer tutuyor.", correct: true }, { id: "c", text: "Sosyal medya hayatımızı zorlaştırır.", correct: false }] },
    { id: 522, type: "SELECT", question: "'Te déconnecter' ne demek?", options: [{ id: "a", text: "Çıkış yapmak", correct: true }, { id: "b", text: "Giriş yapmak", correct: false }, { id: "c", text: "Paylaşmak", correct: false }] },
    { id: 523, type: "FILL_BLANK", question: "Doldur:", sentence: "Je passe ___ de temps sur mon écran.", options: [{ id: "a", text: "trop", correct: true }, { id: "b", text: "très", correct: false }] },
    { id: 524, type: "TRANSLATE", question: "Çevir:", hint: "Kaba olduğu için bu kişiyi engelledi.", correctAnswer: "Il a bloqué cette personne car elle était impolie." },
    { id: 525, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Devenue virale", options: [{ id: "a", text: "Silindi", correct: false }, { id: "b", text: "Gizli kaldı", correct: false }, { id: "c", text: "Viral oldu", correct: true }, { id: "d", text: "Yavaşladı", correct: false }] },
    { id: 526, type: "SELECT", question: "Hangisi 'Yeni bir mesajlaşma uygulaması indirdim.' demektir?", options: [{ id: "a", text: "J'ai supprimé l'application.", correct: false }, { id: "b", text: "J'ai téléchargé une nouvelle application de messagerie.", correct: true }, { id: "c", text: "Je n'aime pas les messages.", correct: false }] },
    { id: 527, type: "TRANSLATE", question: "Çevir:", hint: "Annenden bir bildirim aldın.", correctAnswer: "Tu as reçu une notification de ta mère." },
    { id: 528, type: "FILL_BLANK", question: "Doldur:", sentence: "Clique sur le ___ pour voir l'article.", options: [{ id: "a", text: "lien", correct: true }, { id: "b", text: "clavier", correct: false }] },
    { id: 529, type: "SELECT", question: "Hangisi 'En sevdiğin sosyal ağ hangisi?' demektir?", options: [{ id: "a", text: "Quel est ton réseau social préféré ?", correct: true }, { id: "b", text: "Tu n'aimes pas les réseaux sociaux ?", correct: false }, { id: "c", text: "Combien de réseaux as-tu ?", correct: false }] },
    { id: 530, type: "TRANSLATE", question: "Çevir:", hint: "Bu içerik üreticisinin son videosunu gördün mü?", correctAnswer: "As-tu vu la dernière vidéo de ce créateur ?" },
    { id: 531, type: "FILL_BLANK", question: "Doldur:", sentence: "Non, je n'ai pas eu le temps de me ___ aujourd'hui.", options: [{ id: "a", text: "connecter", correct: true }, { id: "b", text: "déconnecter", correct: false }] },
    { id: 532, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle a ___ beaucoup d'abonnés cette semaine.", options: [{ id: "a", text: "gagné", correct: true }, { id: "b", text: "perdu", correct: false }] },
    { id: 533, type: "SELECT", question: "Hangisi 'Çok fazla bilgi paylaşmak tehlikelidir.' demektir?", options: [{ id: "a", text: "C'est dangereux de partager trop d'informations.", correct: true }, { id: "b", text: "Partager est toujours bien.", correct: false }, { id: "c", text: "Il ne faut rien partager.", correct: false }] },
    { id: 534, type: "TRANSLATE", question: "Çevir:", hint: "Bana linki mesajla gönderebilir misin?", correctAnswer: "Peux-tu m'envoyer le lien par message ?" },
    { id: 535, type: "SELECT", question: "'Kaydolmak için şifremi unuttum' için hangisi uygundur?", options: [{ id: "a", text: "J'ai perdu mon téléphone.", correct: false }, { id: "b", text: "J'ai oublié mon mot de passe pour m'inscrire.", correct: true }, { id: "c", text: "Je n'ai pas de mot de passe.", correct: false }] },
    { id: 536, type: "FILL_BLANK", question: "Doldur:", sentence: "N'oublie pas de laisser un ___.", options: [{ id: "a", text: "commentaire", correct: true }, { id: "b", text: "compte", correct: false }] },
    { id: 537, type: "TRANSLATE", question: "Çevir:", hint: "Birçok genç fenomen olmak istiyor.", correctAnswer: "Beaucoup de jeunes veulent devenir des influenceurs." },
    { id: 538, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est important de vérifier les informations avant de les ___.", options: [{ id: "a", text: "partager", correct: true }, { id: "b", text: "bloquer", correct: false }] },
    { id: 539, type: "SELECT", question: "'Je préfère Instagram pour partager mes photos.' ne demek?", options: [{ id: "a", text: "Fotoğraf çekmeyi sevmem.", correct: false }, { id: "b", text: "Fotoğraflarımı paylaşmak için Instagram'ı tercih ediyorum.", correct: true }, { id: "c", text: "Sadece Instagram kullanırım.", correct: false }] },
    { id: 540, type: "TRANSLATE", question: "Çevir:", hint: "Fenomenlerin gençler üzerinde büyük bir gücü var.", correctAnswer: "Les influenceurs ont un grand pouvoir sur les jeunes." }
];

const unit366Quiz4: Question[] = [
    // Quiz 4: Reading comprehension & mixed review
    { id: 541, type: "SELECT", question: "De quoi a-t-on besoin pour s'inscrire (selon le texte) ?", options: [{ id: "a", text: "D'une adresse e-mail et d'un mot de passe", correct: true }, { id: "b", text: "D'un téléphone neuf", correct: false }, { id: "c", text: "D'une carte bancaire", correct: false }] },
    { id: 542, type: "TRANSLATE", question: "Çevir:", hint: "Siber zorbalık ciddi bir sorundur.", correctAnswer: "Le cyberharcèlement est un problème grave." },
    { id: 543, type: "SELECT", question: "Que partagent souvent les influenceurs selon le texte ?", options: [{ id: "a", text: "Leurs mots de passe", correct: false }, { id: "b", text: "Des conseils de voyage ou de mode", correct: true }, { id: "c", text: "Rien du tout", correct: false }] },
    { id: 544, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut faire ___ aux fausses informations.", options: [{ id: "a", text: "attention", correct: true }, { id: "b", text: "peur", correct: false }] },
    { id: 545, type: "SELECT", question: "Que doit-on faire face à un utilisateur agressif ?", options: [{ id: "a", text: "Le bloquer", correct: true }, { id: "b", text: "Lui parler", correct: false }, { id: "c", text: "Pleurer", correct: false }] },
    { id: 546, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Fausses informations", options: [{ id: "a", text: "Gerçek haberler", correct: false }, { id: "b", text: "Yalan / Yanlış bilgiler", correct: true }, { id: "c", text: "Yeni bilgiler", correct: false }, { id: "d", text: "Gizli bilgiler", correct: false }] },
    { id: 547, type: "TRANSLATE", question: "Çevir:", hint: "Bu internette viral oldu.", correctAnswer: "C'est devenu viral en ligne." },
    { id: 548, type: "SELECT", question: "Quelle conclusion l'auteur tire-t-il ?", options: [{ id: "a", text: "Il faut supprimer tous les comptes", correct: false }, { id: "b", text: "Il faut de la prudence et un esprit critique", correct: true }, { id: "c", text: "Internet n'est pas utile", correct: false }] },
    { id: 549, type: "FILL_BLANK", question: "Doldur:", sentence: "Beaucoup d'___ passent plusieurs heures par jour sur leur écran.", options: [{ id: "a", text: "adolescents", correct: true }, { id: "b", text: "adolescent", correct: false }] },
    { id: 550, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Bazen agresif kullanıcıları engellemek gerekebilir.", correctAnswer: "Il est parfois nécessaire de bloquer certains utilisateurs agressifs." },
    { id: 551, type: "SELECT", question: "'Une publication' ne demek?", options: [{ id: "a", text: "Mesaj", correct: false }, { id: "b", text: "Gönderi / Yayın", correct: true }, { id: "c", text: "Kitap", correct: false }] },
    { id: 552, type: "SELECT", question: "Que signifie 'devenir viral' ?", options: [{ id: "a", text: "Se propager très rapidement sur Internet", correct: true }, { id: "b", text: "Prendre un virus", correct: false }, { id: "c", text: "Devenir lent", correct: false }] },
    { id: 553, type: "FILL_BLANK", question: "Doldur:", sentence: "Ces plateformes permettent de ___ en contact avec ses proches.", options: [{ id: "a", text: "rester", correct: true }, { id: "b", text: "reste", correct: false }] },
    { id: 554, type: "TRANSLATE", question: "Çevir:", hint: "Sosyal ağları kullanmak ihtiyat gerektirir.", correctAnswer: "Utiliser les réseaux sociaux nécessite de la prudence." },
    { id: 555, type: "SELECT", question: "'La prudence' ne demek?", options: [{ id: "a", text: "Hız", correct: false }, { id: "b", text: "Dikkat / İhtiyat", correct: true }, { id: "c", text: "Korku", correct: false }, { id: "d", text: "Güzellik", correct: false }] },
    { id: 556, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le cyberharcèlement", options: [{ id: "a", text: "Siber güvenlik", correct: false }, { id: "b", text: "Siber zorbalık", correct: true }, { id: "c", text: "İnternet bağlantısı", correct: false }, { id: "d", text: "Sosyal ağ", correct: false }] },
    { id: 557, type: "TRANSLATE", question: "Çevir:", hint: "O, müzik dinlerken çalışıyor. (Gérondif)", correctAnswer: "Elle travaille en écoutant de la musique." },
    { id: 558, type: "SELECT", question: "Gérondif'in 'Être' fiili için istisna hali nedir?", options: [{ id: "a", text: "en étant", correct: true }, { id: "b", text: "en est", correct: false }, { id: "c", text: "en soyant", correct: false }] },
    { id: 559, type: "FILL_BLANK", question: "Doldur (Gérondif):", sentence: "Il lit ___ mangeant une pomme.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 560, type: "SELECT", question: "Klavye anlamına gelen Fransızca kelime hangisidir?", options: [{ id: "a", text: "L'écran", correct: false }, { id: "b", text: "Le clavier", correct: true }, { id: "c", text: "La souris", correct: false }, { id: "d", text: "Le câble", correct: false }] }
];

// ===== UNIT 367 HARDCODED QUIZZES =====
const unit367Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Phrases
    { id: 561, type: "SELECT", question: "'L'environnement' ne demek?", options: [{ id: "a", text: "Şehir", correct: false }, { id: "b", text: "Çevre", correct: true }, { id: "c", text: "Doğa", correct: false }, { id: "d", text: "Hava", correct: false }] },
    { id: 562, type: "SELECT", question: "'La pollution' ne demek?", options: [{ id: "a", text: "Temizlik", correct: false }, { id: "b", text: "Sis", correct: false }, { id: "c", text: "Kirlilik", correct: true }, { id: "d", text: "Gürültü", correct: false }] },
    { id: 563, type: "SELECT", question: "'Protéger' ne demek?", options: [{ id: "a", text: "Korumak", correct: true }, { id: "b", text: "Yok etmek", correct: false }, { id: "c", text: "Kirletmek", correct: false }, { id: "d", text: "Değiştirmek", correct: false }] },
    { id: 564, type: "SELECT", question: "'Le réchauffement climatique' ne demek?", options: [{ id: "a", text: "Hava durumu", correct: false }, { id: "b", text: "İklim değişikliği", correct: false }, { id: "c", text: "Küresel ısınma", correct: true }, { id: "d", text: "Doğal afet", correct: false }] },
    { id: 565, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Recycler", options: [{ id: "a", text: "Çöpe atmak", correct: false }, { id: "b", text: "Geri dönüştürmek", correct: true }, { id: "c", text: "Temizlemek", correct: false }, { id: "d", text: "Satın almak", correct: false }] },
    { id: 566, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La planète", options: [{ id: "a", text: "Gezegen", correct: true }, { id: "b", text: "Dünya", correct: false }, { id: "c", text: "Yıldız", correct: false }, { id: "d", text: "Deniz", correct: false }] },
    { id: 567, type: "FILL_BLANK", question: "Doldur:", sentence: "Mettez les bouteilles dans la ___.", options: [{ id: "a", text: "poubelle", correct: true }, { id: "b", text: "poubelles", correct: false }] },
    { id: 568, type: "FILL_BLANK", question: "Doldur:", sentence: "Ne jetez pas vos ___ par terre.", options: [{ id: "a", text: "déchets", correct: true }, { id: "b", text: "déchet", correct: false }] },
    { id: 569, type: "TRANSLATE", question: "Çevir:", hint: "Çevreyi korumak gerekir.", correctAnswer: "Il faut protéger l'environnement." },
    { id: 570, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Gezegenimizi korumalıyız.", correctAnswer: "Nous devons protéger notre planète." },
    { id: 571, type: "SELECT", question: "'L'énergie' ne demek?", options: [{ id: "a", text: "Elektrik", correct: false }, { id: "b", text: "Enerji", correct: true }, { id: "c", text: "Işık", correct: false }, { id: "d", text: "Güneş", correct: false }] },
    { id: 572, type: "SELECT", question: "'Détruire' ne demek?", options: [{ id: "a", text: "İnşa etmek", correct: false }, { id: "b", text: "Yok etmek / Yıkmak", correct: true }, { id: "c", text: "Kurtarmak", correct: false }, { id: "d", text: "Koruma", correct: false }] },
    { id: 573, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La forêt", options: [{ id: "a", text: "Ağaç", correct: false }, { id: "b", text: "Orman", correct: true }, { id: "c", text: "Dağ", correct: false }, { id: "d", text: "Nehir", correct: false }] },
    { id: 574, type: "TRANSLATE", question: "Çevir:", hint: "Amazon ormanı çok geniştir.", correctAnswer: "La forêt amazonienne est très vaste." },
    { id: 575, type: "SELECT", question: "Hangi cümle 'Fabrikalar havayı kirletir.' anlamına gelir?", options: [{ id: "a", text: "Les voitures polluent la ville.", correct: false }, { id: "b", text: "Les usines nettoient l'air.", correct: false }, { id: "c", text: "Les usines polluent l'air.", correct: true }] },
    { id: 576, type: "FILL_BLANK", question: "Doldur:", sentence: "Beaucoup d'___ sont en voie de disparition.", options: [{ id: "a", text: "espèces", correct: true }, { id: "b", text: "espoir", correct: false }] },
    { id: 577, type: "TRANSLATE", question: "Çevir:", hint: "Değişim kendimizden başlar.", correctAnswer: "Le changement commence par nous-mêmes." },
    { id: 578, type: "SELECT", question: "'Écologique' ne demek?", options: [{ id: "a", text: "Ekonomik", correct: false }, { id: "b", text: "Ekolojik / Çevreci", correct: true }, { id: "c", text: "Hızlı", correct: false }, { id: "d", text: "Tehlikeli", correct: false }] },
    { id: 579, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y a trop de plastique dans l'___.", options: [{ id: "a", text: "océan", correct: true }, { id: "b", text: "arbre", correct: false }] },
    { id: 580, type: "SELECT", question: "'Sauver' ne demek?", options: [{ id: "a", text: "Yok etmek", correct: false }, { id: "b", text: "Kurtarmak", correct: true }, { id: "c", text: "Kaçmak", correct: false }, { id: "d", text: "Yardım etmek", correct: false }] }
];

const unit367Quiz2: Question[] = [
    // Quiz 2: Grammar (Le Subjonctif) & Sentences
    { id: 581, type: "SELECT", question: "'Il faut que' yapısından sonra fiil hangi kipte olmalıdır?", options: [{ id: "a", text: "L'Indicatif", correct: false }, { id: "b", text: "L'Impératif", correct: false }, { id: "c", text: "Le Subjonctif", correct: true }, { id: "d", text: "Le Conditionnel", correct: false }] },
    { id: 582, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Il faut que tu ___ (parler).", options: [{ id: "a", text: "parles", correct: true }, { id: "b", text: "parle", correct: false }] },
    { id: 583, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Il faut que nous ___ (finir) ce travail.", options: [{ id: "a", text: "finissions", correct: true }, { id: "b", text: "finissons", correct: false }] },
    { id: 584, type: "SELECT", question: "Subjonctif kipi düzenli fiillerde nasıl oluşturulur?", options: [{ id: "a", text: "'Je' çekiminden", correct: false }, { id: "b", text: "'Ils' çekimindeki -ent atılarak", correct: true }, { id: "c", text: "Mastara ek ekleyerek", correct: false }, { id: "d", text: "'Nous' çekiminden", correct: false }] },
    { id: 585, type: "SELECT", question: "'Être' fiilinin 'tu' şahsına göre Subjonctif çekimi hangisidir?", options: [{ id: "a", text: "soit", correct: false }, { id: "b", text: "es", correct: false }, { id: "c", text: "sois", correct: true }, { id: "d", text: "soyez", correct: false }] },
    { id: 586, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Il est important que vous ___ (choisir) bien.", options: [{ id: "a", text: "choisissiez", correct: true }, { id: "b", text: "choisissez", correct: false }] },
    { id: 587, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Il faut que j'___ (avoir) le temps.", options: [{ id: "a", text: "aie", correct: true }, { id: "b", text: "aies", correct: false }] },
    { id: 588, type: "TRANSLATE", question: "Çevir:", hint: "Dikkatli olman lazım.", correctAnswer: "Il faut que tu sois prudent." },
    { id: 589, type: "SELECT", question: "'La ressource' ne demek?", options: [{ id: "a", text: "Sorun", correct: false }, { id: "b", text: "Kaynak", correct: true }, { id: "c", text: "Sonuç", correct: false }, { id: "d", text: "Neden", correct: false }] },
    { id: 590, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'arbre", options: [{ id: "a", text: "Orman", correct: false }, { id: "b", text: "Yaprak", correct: false }, { id: "c", text: "Ağaç", correct: true }, { id: "d", text: "Gölge", correct: false }] },
    { id: 591, type: "SELECT", question: "Subjonctif genellikle hangi anlamı ifade eder?", options: [{ id: "a", text: "Geçmişte yaşanmış kesin bir olay", correct: false }, { id: "b", text: "Dilek, istek, zorunluluk veya belirsizlik", correct: true }, { id: "c", text: "Gelecek planı", correct: false }, { id: "d", text: "Süregelen bir eylem", correct: false }] },
    { id: 592, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Il faut qu'ils ___ (écouter) le professeur.", options: [{ id: "a", text: "écoutent", correct: true }, { id: "b", text: "écoute", correct: false }] },
    { id: 593, type: "SELECT", question: "'Avoir' fiilinin 'nous' şahsına göre Subjonctif çekimi hangisidir?", options: [{ id: "a", text: "ayons", correct: true }, { id: "b", text: "avons", correct: false }, { id: "c", text: "avions", correct: false }, { id: "d", text: "aient", correct: false }] },
    { id: 594, type: "TRANSLATE", question: "Çevir:", hint: "Herkesin çöplerini geri dönüştürmesi gerekiyor.", correctAnswer: "Il faut que tout le monde recycle ses déchets." },
    { id: 595, type: "SELECT", question: "Hangisi Subjonctif formundadır?", options: [{ id: "a", text: "Il faut qu'il mange", correct: true }, { id: "b", text: "Il doit manger", correct: false }, { id: "c", text: "Il va manger", correct: false }] },
    { id: 596, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il faut que nous protégions la nature.", options: [{ id: "a", text: "Doğayı seviyoruz.", correct: false }, { id: "b", text: "Doğayı korumamız gerekiyor.", correct: true }, { id: "c", text: "Doğa çok güzel.", correct: false }, { id: "d", text: "Doğayı temizledik.", correct: false }] },
    { id: 597, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Umudumuzun olması gereklidir.", correctAnswer: "Il est nécessaire que nous ayons de l'espoir." },
    { id: 598, type: "FILL_BLANK", question: "Doldur:", sentence: "La Terre est notre seule ___.", options: [{ id: "a", text: "planète", correct: true }, { id: "b", text: "plante", correct: false }] },
    { id: 599, type: "SELECT", question: "Hangisi doğrudur?", options: [{ id: "a", text: "Il faut que tu vas", correct: false }, { id: "b", text: "Il faut que tu ailles (Aller subjonctif)", correct: true }] },
    { id: 600, type: "TRANSLATE", question: "Çevir:", hint: "Senin konuşman lazım.", correctAnswer: "Il faut que tu parles." }
];

const unit367Quiz3: Question[] = [
    // Quiz 3: Speaking/Phrases, translation
    { id: 601, type: "SELECT", question: "Qu'est-ce que 'La pollution de l'air est un grand problème' signifie?", options: [{ id: "a", text: "Hava temizliği önemlidir.", correct: false }, { id: "b", text: "Hava kirliliği büyük bir sorundur.", correct: true }, { id: "c", text: "Büyük şehirlerde sorun yok.", correct: false }] },
    { id: 602, type: "SELECT", question: "'Réduire' ne demek?", options: [{ id: "a", text: "Azaltmak", correct: true }, { id: "b", text: "Çoğaltmak", correct: false }, { id: "c", text: "Değiştirmek", correct: false }] },
    { id: 603, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous devons réduire notre ___ de plastique.", options: [{ id: "a", text: "consommation", correct: true }, { id: "b", text: "production", correct: false }] },
    { id: 604, type: "TRANSLATE", question: "Çevir:", hint: "Küresel ısınmaya karşı harekete geçmek acildir.", correctAnswer: "Il est urgent d'agir contre le réchauffement climatique." },
    { id: 605, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Océans", options: [{ id: "a", text: "Denizler", correct: false }, { id: "b", text: "Nehirler", correct: false }, { id: "c", text: "Okyanuslar", correct: true }, { id: "d", text: "Göller", correct: false }] },
    { id: 606, type: "SELECT", question: "Hangisi 'Çıkarken ışığı kapatmayı unutmayın.' demektir?", options: [{ id: "a", text: "N'oubliez pas d'éteindre la lumière en sortant.", correct: true }, { id: "b", text: "Allumez la lumière en entrant.", correct: false }, { id: "c", text: "Ne sortez pas sans la lumière.", correct: false }] },
    { id: 607, type: "TRANSLATE", question: "Çevir:", hint: "Atıkların ayrıştırılması bu şehirde zorunludur.", correctAnswer: "Le tri des déchets est obligatoire dans cette ville." },
    { id: 608, type: "FILL_BLANK", question: "Doldur:", sentence: "Beaucoup d'espèces animales sont menacées d'___.", options: [{ id: "a", text: "extinction", correct: true }, { id: "b", text: "existence", correct: false }] },
    { id: 609, type: "SELECT", question: "Hangisi 'Evde çöplerinizi ayırıyor musunuz?' demektir?", options: [{ id: "a", text: "Triez-vous vos déchets à la maison ?", correct: true }, { id: "b", text: "Jetez-vous les déchets ?", correct: false }, { id: "c", text: "Où sont les poubelles ?", correct: false }] },
    { id: 610, type: "TRANSLATE", question: "Çevir:", hint: "Sahil temizleme projesine katılıyoruz.", correctAnswer: "Nous participons à un projet de nettoyage de la plage." },
    { id: 611, type: "FILL_BLANK", question: "Doldur:", sentence: "L'eau potable devient une ressource ___.", options: [{ id: "a", text: "rare", correct: true }, { id: "b", text: "commune", correct: false }] },
    { id: 612, type: "FILL_BLANK", question: "Doldur:", sentence: "Je pense qu'il est ___ de protéger notre planète.", options: [{ id: "a", text: "urgent", correct: true }, { id: "b", text: "inutile", correct: false }] },
    { id: 613, type: "SELECT", question: "Hangisi 'Plastik poşetler yasaklanmalı mı?' demektir?", options: [{ id: "a", text: "Faut-il payer les sacs en plastique ?", correct: false }, { id: "b", text: "Faut-il interdire les sacs en plastique ?", correct: true }, { id: "c", text: "Aimez-vous le plastique ?", correct: false }] },
    { id: 614, type: "TRANSLATE", question: "Çevir:", hint: "Suyu nasıl tasarruf edebiliriz?", correctAnswer: "Comment pouvons-nous économiser l'eau ?" },
    { id: 615, type: "SELECT", question: "'En prenant des douches plus courtes, par exemple.' çevirisi nedir?", options: [{ id: "a", text: "Örneğin daha az su içerek.", correct: false }, { id: "b", text: "Örneğin daha kısa duşlar alarak.", correct: true }, { id: "c", text: "Duş almamak en iyisi.", correct: false }] },
    { id: 616, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ menace beaucoup d'espèces.", options: [{ id: "a", text: "déforestation", correct: true }, { id: "b", text: "forêt", correct: false }] },
    { id: 617, type: "TRANSLATE", question: "Çevir:", hint: "Herkes çevre için çaba göstermelidir.", correctAnswer: "Tout le monde doit faire un effort pour l'environnement." },
    { id: 618, type: "FILL_BLANK", question: "Doldur:", sentence: "Absolument, ils polluent ___ les océans.", options: [{ id: "a", text: "énormément", correct: true }, { id: "b", text: "peu", correct: false }] },
    { id: 619, type: "SELECT", question: "'Chacun peut faire un petit geste pour sauver la nature.' ne demek?", options: [{ id: "a", text: "Doğa kendi kendini kurtarır.", correct: false }, { id: "b", text: "Doğayı kurtarmak için herkes küçük bir şey yapabilir.", correct: true }, { id: "c", text: "Sadece devletler doğayı kurtarabilir.", correct: false }] },
    { id: 620, type: "TRANSLATE", question: "Çevir:", hint: "Yenilenebilir enerjiler gezegenimizin geleceğidir.", correctAnswer: "Les énergies renouvelables sont l'avenir de notre planète." }
];

const unit367Quiz4: Question[] = [
    // Quiz 4: Reading comprehension & mixed review
    { id: 621, type: "SELECT", question: "De quoi parle principalement ce texte (Sauvons Notre Planète) ?", options: [{ id: "a", text: "Du réchauffement climatique et de la protection de la planète", correct: true }, { id: "b", text: "Du sport en plein air", correct: false }, { id: "c", text: "Des animaux domestiques", correct: false }] },
    { id: 622, type: "TRANSLATE", question: "Çevir:", hint: "Ormansızlaşma habitatları yok ediyor.", correctAnswer: "La déforestation détruit les habitats." },
    { id: 623, type: "SELECT", question: "Quelle est la conséquence de l'augmentation des températures ?", options: [{ id: "a", text: "L'hiver froid", correct: false }, { id: "b", text: "La fonte des glaces et la montée des océans", correct: true }, { id: "c", text: "La pluie jaune", correct: false }] },
    { id: 624, type: "FILL_BLANK", question: "Doldur:", sentence: "Le réchauffement climatique est une réalité ___.", options: [{ id: "a", text: "indéniable", correct: true }, { id: "b", text: "fausse", correct: false }] },
    { id: 625, type: "SELECT", question: "Quel type d'énergie l'auteur suggère-t-il d'utiliser ?", options: [{ id: "a", text: "Les énergies fossiles", correct: false }, { id: "b", text: "Les énergies renouvelables", correct: true }, { id: "c", text: "Le charbon", correct: false }] },
    { id: 626, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quotidiens", options: [{ id: "a", text: "Aylık", correct: false }, { id: "b", text: "Günlük", correct: true }, { id: "c", text: "Yıllık", correct: false }, { id: "d", text: "Haftalık", correct: false }] },
    { id: 627, type: "TRANSLATE", question: "Çevir:", hint: "Atık ayrıştırma günlük bir eylem haline gelmelidir.", correctAnswer: "Le tri des déchets doit devenir un acte quotidien." },
    { id: 628, type: "SELECT", question: "Quel objet courant est donné comme exemple à éviter ?", options: [{ id: "a", text: "Les bouteilles en verre", correct: false }, { id: "b", text: "Les sacs en plastique", correct: true }, { id: "c", text: "Le papier", correct: false }] },
    { id: 629, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut que nous ___ (réduire) notre consommation.", options: [{ id: "a", text: "réduisions", correct: true }, { id: "b", text: "réduisons", correct: false }] },
    { id: 630, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Herkes çevre için çaba göstermelidir.", correctAnswer: "Tout le monde doit faire un effort pour l'environnement." },
    { id: 631, type: "SELECT", question: "Pourquoi les gouvernements doivent-ils prendre des décisions fortes ?", options: [{ id: "a", text: "Pour limiter la pollution de l'air et de l'eau", correct: true }, { id: "b", text: "Pour l'économie", correct: false }, { id: "c", text: "Pour gagner des élections", correct: false }] },
    { id: 632, type: "SELECT", question: "Quel est l'objectif final de toutes ces actions ?", options: [{ id: "a", text: "Acheter de nouvelles voitures", correct: false }, { id: "b", text: "Laisser une Terre saine aux générations futures", correct: true }, { id: "c", text: "Partager des photos en ligne", correct: false }] },
    { id: 633, type: "FILL_BLANK", question: "Doldur:", sentence: "Chaque action compte pour laisser une Terre ___ (sağlıklı).", options: [{ id: "a", text: "saine", correct: true }, { id: "b", text: "malade", correct: false }] },
    { id: 634, type: "TRANSLATE", question: "Çevir:", hint: "Alışkanlıklarımızı değiştirmemiz acildir.", correctAnswer: "Il est urgent que nous changions nos habitudes." },
    { id: 635, type: "SELECT", question: "'Davantage' ne demek (metindeki kullanımıyla)?", options: [{ id: "a", text: "Dezavantaj", correct: false }, { id: "b", text: "Daha fazla", correct: true }, { id: "c", text: "Daha az", correct: false }, { id: "d", text: "Önceden", correct: false }] },
    { id: 636, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La fonte des glaces", options: [{ id: "a", text: "Buzulların erimesi", correct: true }, { id: "b", text: "Orman yangınları", correct: false }, { id: "c", text: "Kutup ayıları", correct: false }, { id: "d", text: "Soğuk hava", correct: false }] },
    { id: 637, type: "TRANSLATE", question: "Çevir:", hint: "Bu durum endişe verici.", correctAnswer: "Cette situation est alarmante." },
    { id: 638, type: "SELECT", question: "Subjonctif 'Il faut que vous ___ (être) prudent.' cümlesinde nasıl çekimlenir?", options: [{ id: "a", text: "êtes", correct: false }, { id: "b", text: "soyez", correct: true }, { id: "c", text: "serez", correct: false }] },
    { id: 639, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Il faut qu'ils ___ (finir) ce projet écologique.", options: [{ id: "a", text: "finissent", correct: true }, { id: "b", text: "finissons", correct: false }] },
    { id: 640, type: "SELECT", question: "Suyu nasıl tasarruf edebiliriz? ('En prenant des douches plus courtes')", options: [{ id: "a", text: "Daha kısa duş alarak", correct: true }, { id: "b", text: "Daha çok su içerek", correct: false }, { id: "c", text: "Denize girerek", correct: false }] }
];

// ===== UNIT 368 HARDCODED QUIZZES =====
const unit368Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Phrases
    { id: 641, type: "SELECT", question: "'La santé' ne demek?", options: [{ id: "a", text: "Hastalık", correct: false }, { id: "b", text: "Sağlık", correct: true }, { id: "c", text: "Doktor", correct: false }, { id: "d", text: "Hastane", correct: false }] },
    { id: 642, type: "SELECT", question: "'Le médecin' ne demek?", options: [{ id: "a", text: "İlaç", correct: false }, { id: "b", text: "Hastane", correct: false }, { id: "c", text: "Doktor", correct: true }, { id: "d", text: "Hemşire", correct: false }] },
    { id: 643, type: "SELECT", question: "'La douleur' ne demek?", options: [{ id: "a", text: "Ağrı / Acı", correct: true }, { id: "b", text: "Uyku", correct: false }, { id: "c", text: "Ateş", correct: false }, { id: "d", text: "Üzüntü", correct: false }] },
    { id: 644, type: "SELECT", question: "'Le médicament' ne demek?", options: [{ id: "a", text: "Reçete", correct: false }, { id: "b", text: "Doktor", correct: false }, { id: "c", text: "İlaç", correct: true }, { id: "d", text: "Tedavi", correct: false }] },
    { id: 645, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'ordonnance", options: [{ id: "a", text: "Hastane", correct: false }, { id: "b", text: "Reçete", correct: true }, { id: "c", text: "Eczane", correct: false }, { id: "d", text: "Ateş", correct: false }] },
    { id: 646, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Guérir", options: [{ id: "a", text: "İyileşmek", correct: true }, { id: "b", text: "Gülmek", correct: false }, { id: "c", text: "Korumak", correct: false }, { id: "d", text: "Koşmak", correct: false }] },
    { id: 647, type: "FILL_BLANK", question: "Doldur:", sentence: "L'enfant a beaucoup de ___ (ateş).", options: [{ id: "a", text: "fièvre", correct: true }, { id: "b", text: "toux", correct: false }] },
    { id: 648, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai attrapé un ___ (soğuk algınlığı).", options: [{ id: "a", text: "rhume", correct: true }, { id: "b", text: "sommeil", correct: false }] },
    { id: 649, type: "TRANSLATE", question: "Çevir:", hint: "Burnu kanamaya başlıyor.", correctAnswer: "Son nez commence à saigner." },
    { id: 650, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Bu hafif bir yara.", correctAnswer: "C'est une blessure légère." },
    { id: 651, type: "SELECT", question: "'Le sommeil' ne demek?", options: [{ id: "a", text: "Rüya", correct: false }, { id: "b", text: "Uyku", correct: true }, { id: "c", text: "Yorgunluk", correct: false }, { id: "d", text: "Güneş", correct: false }] },
    { id: 652, type: "SELECT", question: "'Fatigué(e)' ne demek?", options: [{ id: "a", text: "Mutlu", correct: false }, { id: "b", text: "Yorgun", correct: true }, { id: "c", text: "Hasta", correct: false }, { id: "d", text: "Aç", correct: false }] },
    { id: 653, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Respirer", options: [{ id: "a", text: "Dinlenmek", correct: false }, { id: "b", text: "Nefes almak", correct: true }, { id: "c", text: "Cevap vermek", correct: false }, { id: "d", text: "Koşmak", correct: false }] },
    { id: 654, type: "TRANSLATE", question: "Çevir:", hint: "Sağlıklı beslenmek esastır.", correctAnswer: "Manger sain est essentiel." },
    { id: 655, type: "SELECT", question: "Hangi cümle 'Düzenli olarak egzersiz yapmak gerekir.' anlamına gelir?", options: [{ id: "a", text: "Il faut bien dormir.", correct: false }, { id: "b", text: "Il faut manger sain.", correct: false }, { id: "c", text: "Il faut faire de l'exercice régulièrement.", correct: true }] },
    { id: 656, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle suit un ___ strict.", options: [{ id: "a", text: "régime", correct: true }, { id: "b", text: "sommeil", correct: false }] },
    { id: 657, type: "TRANSLATE", question: "Çevir:", hint: "Yoga genel zindeliği artırır.", correctAnswer: "Le yoga améliore le bien-être général." },
    { id: 658, type: "SELECT", question: "'Le bien-être' ne demek?", options: [{ id: "a", text: "Zenginlik", correct: false }, { id: "b", text: "Zindelik / Esenlik", correct: true }, { id: "c", text: "Sağlık sigortası", correct: false }, { id: "d", text: "Spor salonu", correct: false }] },
    { id: 659, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous devez voir un ___.", options: [{ id: "a", text: "médecin", correct: true }, { id: "b", text: "médicament", correct: false }] },
    { id: 660, type: "SELECT", question: "'La toux' ne demek?", options: [{ id: "a", text: "Ateş", correct: false }, { id: "b", text: "Öksürük", correct: true }, { id: "c", text: "Hapşırma", correct: false }, { id: "d", text: "Terleme", correct: false }] }
];

const unit368Quiz2: Question[] = [
    // Quiz 2: Grammar (Le Subjonctif Part 2) & Sentences
    { id: 661, type: "SELECT", question: "'Je veux que...' kalıbından sonra fiil hangi kipte olmalıdır?", options: [{ id: "a", text: "Le Futur", correct: false }, { id: "b", text: "L'Impératif", correct: false }, { id: "c", text: "Le Subjonctif", correct: true }, { id: "d", text: "L'Imparfait", correct: false }] },
    { id: 662, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Je veux que tu te ___ (reposer).", options: [{ id: "a", text: "reposes", correct: true }, { id: "b", text: "repose", correct: false }] },
    { id: 663, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Je suis content que tu ___ (aller) mieux.", options: [{ id: "a", text: "ailles", correct: true }, { id: "b", text: "vas", correct: false }] },
    { id: 664, type: "SELECT", question: "Hangi durumda Subjonctif YERİNE Mastar (İnfinitif) kullanılır?", options: [{ id: "a", text: "Zaman geçmişse", correct: false }, { id: "b", text: "'que' bağlacından önceki ve sonraki özne aynıysa", correct: true }, { id: "c", text: "Cümle olumsuzsa", correct: false }, { id: "d", text: "Fiil düzensizse", correct: false }] },
    { id: 665, type: "SELECT", question: "'Prendre' fiilinin 'vous' şahsına göre Subjonctif çekimi hangisidir?", options: [{ id: "a", text: "prenez", correct: false }, { id: "b", text: "prennes", correct: false }, { id: "c", text: "preniez", correct: true }, { id: "d", text: "prennent", correct: false }] },
    { id: 666, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "J'ai peur qu'il ___ (être) malade.", options: [{ id: "a", text: "soit", correct: true }, { id: "b", text: "est", correct: false }] },
    { id: 667, type: "FILL_BLANK", question: "Doldur (Mastar mı Subjonctif mi?):", sentence: "Je veux ___ (aller) à l'hôpital. (Özneler aynı)", options: [{ id: "a", text: "aille", correct: false }, { id: "b", text: "aller", correct: true }] },
    { id: 668, type: "TRANSLATE", question: "Çevir:", hint: "Senin hastaneye gitmeni istiyorum.", correctAnswer: "Je veux que tu ailles à l'hôpital." },
    { id: 669, type: "SELECT", question: "Hangi cümle doğrudur?", options: [{ id: "a", text: "Je suis triste que tu as mal.", correct: false }, { id: "b", text: "Je suis triste que tu aies mal.", correct: true }] },
    { id: 670, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je veux que tu te reposes.", options: [{ id: "a", text: "Dinlenmeni istiyorum.", correct: true }, { id: "b", text: "Dinlenmek istiyorum.", correct: false }, { id: "c", text: "Uyumak istiyorum.", correct: false }, { id: "d", text: "Hastaneye gitmeni istiyorum.", correct: false }] },
    { id: 671, type: "SELECT", question: "Aşağıdakilerden hangisi duygu bildirir ve Subjonctif gerektirir?", options: [{ id: "a", text: "Je pense que...", correct: false }, { id: "b", text: "Je suis content que...", correct: true }, { id: "c", text: "Je sais que...", correct: false }, { id: "d", text: "Il est sûr que...", correct: false }] },
    { id: 672, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Il est dommage qu'elle ne ___ (faire) pas de sport.", options: [{ id: "a", text: "fasse", correct: true }, { id: "b", text: "fait", correct: false }] },
    { id: 673, type: "SELECT", question: "'Avoir' fiilinin 'vous' şahsına göre Subjonctif çekimi nedir?", options: [{ id: "a", text: "ayez", correct: true }, { id: "b", text: "avez", correct: false }, { id: "c", text: "aviez", correct: false }, { id: "d", text: "aient", correct: false }] },
    { id: 674, type: "TRANSLATE", question: "Çevir:", hint: "Ağrınız olmasına üzülüyorum.", correctAnswer: "Je suis triste que vous ayez mal." },
    { id: 675, type: "SELECT", question: "Hangisi Subjonctif formundadır?", options: [{ id: "a", text: "qu'ils prennent", correct: true }, { id: "b", text: "ils prennent", correct: false }, { id: "c", text: "ils prenaient", correct: false }] },
    { id: 676, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le médecin exige que vous preniez ce médicament.", options: [{ id: "a", text: "Doktor bu ilacı almanızı talep ediyor.", correct: true }, { id: "b", text: "Doktor reçete yazdı.", correct: false }, { id: "c", text: "Doktor ilacı içti.", correct: false }, { id: "d", text: "İlaç almak zorundasınız.", correct: false }] },
    { id: 677, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Daha iyi olmana sevindim.", correctAnswer: "Je suis content que tu ailles mieux." },
    { id: 678, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai peur ___ soit malade.", options: [{ id: "a", text: "qu'il", correct: true }, { id: "b", text: "qu", correct: false }] },
    { id: 679, type: "SELECT", question: "'Je désire que...' ne demektir?", options: [{ id: "a", text: "Korkuyorum ki...", correct: false }, { id: "b", text: "Arzu ediyorum ki...", correct: true }, { id: "c", text: "Üzgünüm ki...", correct: false }] },
    { id: 680, type: "TRANSLATE", question: "Çevir:", hint: "Onun hasta olmasından korkuyorum.", correctAnswer: "J'ai peur qu'il soit malade." }
];

const unit368Quiz3: Question[] = [
    // Quiz 3: Speaking/Phrases, translation
    { id: 681, type: "SELECT", question: "Qu'est-ce que 'Je ne me sens pas très bien aujourd'hui' signifie?", options: [{ id: "a", text: "Bugün çok iyi hissediyorum.", correct: false }, { id: "b", text: "Bugün kendimi pek iyi hissetmiyorum.", correct: true }, { id: "c", text: "Bugün hava çok güzel.", correct: false }] },
    { id: 682, type: "SELECT", question: "'Consulter un médecin' ne demek?", options: [{ id: "a", text: "Doktor olmak", correct: false }, { id: "b", text: "Bir doktora danışmak / görünmek", correct: true }, { id: "c", text: "Hastane aramak", correct: false }] },
    { id: 683, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___ à la tête et je tousse beaucoup.", options: [{ id: "a", text: "mal", correct: true }, { id: "b", text: "douleur", correct: false }] },
    { id: 684, type: "TRANSLATE", question: "Çevir:", hint: "Spor, fiziksel ve zihinsel sağlık için mükemmeldir.", correctAnswer: "Le sport est excellent pour la santé physique et mentale." },
    { id: 685, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Rendez-vous", options: [{ id: "a", text: "Toplantı / Randevu", correct: true }, { id: "b", text: "Reçete", correct: false }, { id: "c", text: "Doktor", correct: false }, { id: "d", text: "İlaç", correct: false }] },
    { id: 686, type: "SELECT", question: "Hangisi 'Dinlenmeli ve sıcak kalmalısınız.' demektir?", options: [{ id: "a", text: "Vous devez vous reposer et rester au chaud.", correct: true }, { id: "b", text: "Vous allez avoir froid.", correct: false }, { id: "c", text: "Prenez vos médicaments vite.", correct: false }] },
    { id: 687, type: "TRANSLATE", question: "Çevir:", hint: "Bu sabah ilaçlarınızı aldınız mı?", correctAnswer: "Avez-vous pris vos médicaments ce matin ?" },
    { id: 688, type: "FILL_BLANK", question: "Doldur:", sentence: "Manger plus de légumes fait partie d'un ___ sain.", options: [{ id: "a", text: "régime", correct: true }, { id: "b", text: "repas", correct: false }] },
    { id: 689, type: "SELECT", question: "Hangisi 'Kendimi yorgun hissediyorum ve biraz ateşim var.' demektir?", options: [{ id: "a", text: "Je me sens fatigué et j'ai un peu de fièvre.", correct: true }, { id: "b", text: "J'ai mal à la tête et je dors.", correct: false }, { id: "c", text: "Je vais bien aujourd'hui.", correct: false }] },
    { id: 690, type: "TRANSLATE", question: "Çevir:", hint: "Evet, boğazım çok ağrıyor.", correctAnswer: "Oui, j'ai très mal à la gorge." },
    { id: 691, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais vous ___ (yazacağım) quelques médicaments.", options: [{ id: "a", text: "prescrire", correct: true }, { id: "b", text: "donner", correct: false }] },
    { id: 692, type: "FILL_BLANK", question: "Doldur:", sentence: "Pensez-vous que c'est ___, docteur ? (ciddi)", options: [{ id: "a", text: "grave", correct: true }, { id: "b", text: "grand", correct: false }] },
    { id: 693, type: "SELECT", question: "Hangisi 'Hayır, sadece basit bir soğuk algınlığı.' demektir?", options: [{ id: "a", text: "Non, c'est très grave.", correct: false }, { id: "b", text: "Non, c'est juste un simple rhume.", correct: true }, { id: "c", text: "C'est une maladie rare.", correct: false }] },
    { id: 694, type: "TRANSLATE", question: "Çevir:", hint: "Düzenli spor yapıyor musunuz?", correctAnswer: "Est-ce que vous faites du sport régulièrement ?" },
    { id: 695, type: "SELECT", question: "'J'essaie de courir deux fois par semaine.' çevirisi nedir?", options: [{ id: "a", text: "Haftada iki kez yüzüyorum.", correct: false }, { id: "b", text: "Haftada iki kez koşmaya çalışıyorum.", correct: true }, { id: "c", text: "Her gün koşuyorum.", correct: false }] },
    { id: 696, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est très bien pour maintenir votre ___ (zindelik).", options: [{ id: "a", text: "bien-être", correct: true }, { id: "b", text: "santé", correct: false }] },
    { id: 697, type: "TRANSLATE", question: "Çevir:", hint: "Bu hastalıktan iyileşmek ne kadar sürer?", correctAnswer: "Combien de temps faut-il pour guérir de cette maladie ?" },
    { id: 698, type: "FILL_BLANK", question: "Doldur:", sentence: "Pensez à boire beaucoup d'___ pendant la journée.", options: [{ id: "a", text: "eau", correct: true }, { id: "b", text: "jus", correct: false }] },
    { id: 699, type: "SELECT", question: "'Avez-vous mal quelque part ?' ne demek?", options: [{ id: "a", text: "Bir yeriniz ağrıyor mu?", correct: true }, { id: "b", text: "Nereye gidiyorsunuz?", correct: false }, { id: "c", text: "İlaç aldınız mı?", correct: false }] },
    { id: 700, type: "TRANSLATE", question: "Çevir:", hint: "Doktorla randevu almak istiyorum, lütfen.", correctAnswer: "Je voudrais prendre rendez-vous avec le docteur, s'il vous plaît." }
];

const unit368Quiz4: Question[] = [
    // Quiz 4: Reading comprehension & mixed review
    { id: 701, type: "SELECT", question: "Selon le texte, qu'est-ce que le bien-être ?", options: [{ id: "a", text: "Un équilibre entre la santé physique et mentale", correct: true }, { id: "b", text: "Avoir beaucoup d'argent", correct: false }, { id: "c", text: "Ne pas être malade", correct: false }] },
    { id: 702, type: "TRANSLATE", question: "Çevir:", hint: "Sağlıklı kalmak için hasta olmamak yeterli değildir.", correctAnswer: "Pour rester en bonne santé, il ne suffit pas de ne pas être malade." },
    { id: 703, type: "SELECT", question: "Quels sont les deux effets positifs de l'exercice régulier ?", options: [{ id: "a", text: "Il fatigue", correct: false }, { id: "b", text: "Il renforce le cœur et réduit le stress", correct: true }, { id: "c", text: "Il donne faim", correct: false }] },
    { id: 704, type: "FILL_BLANK", question: "Doldur:", sentence: "Une ___ saine est essentielle. (beslenme)", options: [{ id: "a", text: "alimentation", correct: true }, { id: "b", text: "boisson", correct: false }] },
    { id: 705, type: "SELECT", question: "Combien d'heures de sommeil les médecins recommandent-ils ?", options: [{ id: "a", text: "Six heures", correct: false }, { id: "b", text: "Au moins huit heures par nuit", correct: true }, { id: "c", text: "Dix heures", correct: false }] },
    { id: 706, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le cerveau", options: [{ id: "a", text: "Kalp", correct: false }, { id: "b", text: "Beyin", correct: true }, { id: "c", text: "Mide", correct: false }, { id: "d", text: "Kas", correct: false }] },
    { id: 707, type: "TRANSLATE", question: "Çevir:", hint: "Çok fazla meyve ve sebze yemek enerji verir.", correctAnswer: "Manger beaucoup de fruits et de légumes donne de l'énergie." },
    { id: 708, type: "SELECT", question: "Pourquoi le sommeil est-il si important ?", options: [{ id: "a", text: "Pour que le cerveau se repose et que les blessures guérissent", correct: true }, { id: "b", text: "Pour rêver", correct: false }, { id: "c", text: "Pour ne rien faire", correct: false }] },
    { id: 709, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Je veux que tu ___ (dormir) bien.", options: [{ id: "a", text: "dormes", correct: true }, { id: "b", text: "dors", correct: false }] },
    { id: 710, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Meditasyon yapmak sağlıklı bir zihni korumaya yardımcı olur.", correctAnswer: "Méditer aide à garder un esprit sain." },
    { id: 711, type: "SELECT", question: "Que conseille l'auteur de faire pour garder un esprit sain ?", options: [{ id: "a", text: "Prendre du temps pour soi, lire ou méditer", correct: true }, { id: "b", text: "Travailler plus", correct: false }, { id: "c", text: "Regarder un film", correct: false }] },
    { id: 712, type: "SELECT", question: "Quelle est la conclusion du texte ?", options: [{ id: "a", text: "Chacun doit trouver son propre rythme", correct: true }, { id: "b", text: "L'eau est importante", correct: false }, { id: "c", text: "Il faut courir", correct: false }] },
    { id: 713, type: "FILL_BLANK", question: "Doldur:", sentence: "Le sommeil aide pour que les blessures ___ plus vite. (iyileşsin)", options: [{ id: "a", text: "guérissent", correct: true }, { id: "b", text: "guéris", correct: false }] },
    { id: 714, type: "TRANSLATE", question: "Çevir:", hint: "Herkesin mutlu yaşamak için kendi ritmini bulması önemlidir.", correctAnswer: "Il est important que chacun trouve son propre rythme pour vivre heureux." },
    { id: 715, type: "SELECT", question: "'Un équilibre' ne demek (metindeki kullanımıyla)?", options: [{ id: "a", text: "Eşitlik", correct: false }, { id: "b", text: "Denge", correct: true }, { id: "c", text: "Agresiflik", correct: false }, { id: "d", text: "Hastalık", correct: false }] },
    { id: 716, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Renforcer", options: [{ id: "a", text: "Güçlendirmek", correct: true }, { id: "b", text: "Zayıflatmak", correct: false }, { id: "c", text: "Korumak", correct: false }, { id: "d", text: "Değiştirmek", correct: false }] },
    { id: 717, type: "TRANSLATE", question: "Çevir:", hint: "Düzenli egzersiz yapmak kalbi güçlendirir.", correctAnswer: "Faire de l'exercice régulièrement renforce le cœur." },
    { id: 718, type: "SELECT", question: "Subjonctif 'Je suis content que vous ___ (aller) bien.' cümlesinde nasıl çekimlenir?", options: [{ id: "a", text: "allez", correct: false }, { id: "b", text: "alliez", correct: true }, { id: "c", text: "vas", correct: false }] },
    { id: 719, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Il est important qu'il ___ (prendre) son médicament.", options: [{ id: "a", text: "prenne", correct: true }, { id: "b", text: "prend", correct: false }] },
    { id: 720, type: "SELECT", question: "'Le rythme' kelimesinin metindeki anlamı nedir?", options: [{ id: "a", text: "Müzik", correct: false }, { id: "b", text: "Ritim / Düzen", correct: true }, { id: "c", text: "Hız", correct: false }] }
];

// ===== UNIT 369 HARDCODED QUIZZES =====
const unit369Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Phrases
    { id: 721, type: "SELECT", question: "'L'école' ne demek?", options: [{ id: "a", text: "Hastane", correct: false }, { id: "b", text: "Okul", correct: true }, { id: "c", text: "Ev", correct: false }, { id: "d", text: "Öğrenci", correct: false }] },
    { id: 722, type: "SELECT", question: "'L'étudiant' ne demek?", options: [{ id: "a", text: "Profosör", correct: false }, { id: "b", text: "Eğitim", correct: false }, { id: "c", text: "Öğrenci (Üniversite)", correct: true }, { id: "d", text: "Burs", correct: false }] },
    { id: 723, type: "SELECT", question: "'La leçon' ne demek?", options: [{ id: "a", text: "Sınav", correct: false }, { id: "b", text: "Okul", correct: false }, { id: "c", text: "Ders (İşlenen konu)", correct: true }, { id: "d", text: "Diploma", correct: false }] },
    { id: 724, type: "SELECT", question: "'Échouer' ne demek?", options: [{ id: "a", text: "Başarısız olmak / Kalmak", correct: true }, { id: "b", text: "Başarmak", correct: false }, { id: "c", text: "Çalışmak", correct: false }, { id: "d", text: "Öğrenmek", correct: false }] },
    { id: 725, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'examen", options: [{ id: "a", text: "Not", correct: false }, { id: "b", text: "Sınav", correct: true }, { id: "c", text: "Burs", correct: false }, { id: "d", text: "Ödev", correct: false }] },
    { id: 726, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Réussir", options: [{ id: "a", text: "Başarmak", correct: true }, { id: "b", text: "Kalmak", correct: false }, { id: "c", text: "Yazmak", correct: false }, { id: "d", text: "Dinlemek", correct: false }] },
    { id: 727, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle étudie le ___ à l'université. (hukuk)", options: [{ id: "a", text: "droit", correct: true }, { id: "b", text: "devoir", correct: false }] },
    { id: 728, type: "FILL_BLANK", question: "Doldur:", sentence: "N'oublie pas de faire tes ___ (ödev).", options: [{ id: "a", text: "devoirs", correct: true }, { id: "b", text: "leçons", correct: false }] },
    { id: 729, type: "TRANSLATE", question: "Çevir:", hint: "Bu konu çok ilginç.", correctAnswer: "Ce sujet est très intéressant." },
    { id: 730, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Öğretmen dersi açıklıyor.", correctAnswer: "Le professeur explique la leçon." },
    { id: 731, type: "SELECT", question: "'Le diplôme' ne demek?", options: [{ id: "a", text: "Ödev", correct: false }, { id: "b", text: "Diploma", correct: true }, { id: "c", text: "Üniversite", correct: false }, { id: "d", text: "Sınav", correct: false }] },
    { id: 732, type: "SELECT", question: "'La bourse' ne demek?", options: [{ id: "a", text: "Ders", correct: false }, { id: "b", text: "Burs", correct: true }, { id: "c", text: "Öğrenci", correct: false }, { id: "d", text: "Özerklik", correct: false }] },
    { id: 733, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Apprendre", options: [{ id: "a", text: "Çalışmak", correct: false }, { id: "b", text: "Öğrenmek", correct: true }, { id: "c", text: "Öğretmek", correct: false }, { id: "d", text: "Sınav", correct: false }] },
    { id: 734, type: "TRANSLATE", question: "Çevir:", hint: "O matematik öğretiyor.", correctAnswer: "Elle enseigne les mathématiques." },
    { id: 735, type: "SELECT", question: "Hangi cümle 'Okullar eylülde açılıyor.' anlamına gelir?", options: [{ id: "a", text: "Les examens sont en septembre.", correct: false }, { id: "b", text: "Le professeur vient en septembre.", correct: false }, { id: "c", text: "La rentrée des classes a lieu en septembre.", correct: true }] },
    { id: 736, type: "FILL_BLANK", question: "Doldur:", sentence: "Il étudie à la ___. (kütüphane)", options: [{ id: "a", text: "bibliothèque", correct: true }, { id: "b", text: "rentrée", correct: false }] },
    { id: 737, type: "TRANSLATE", question: "Çevir:", hint: "Tarihten çok iyi bir not aldı.", correctAnswer: "Elle a eu une très bonne note en histoire." },
    { id: 738, type: "SELECT", question: "'Éduquer' ne demektir? (Kökten türet)", options: [{ id: "a", text: "Eğitmek", correct: true }, { id: "b", text: "Sınav yapmak", correct: false }, { id: "c", text: "Not vermek", correct: false } ] },
    { id: 739, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un excellent ___ (öğrenci/lise).", options: [{ id: "a", text: "élève", correct: true }, { id: "b", text: "professeur", correct: false }] },
    { id: 740, type: "SELECT", question: "'La rentrée' ne demek?", options: [{ id: "a", text: "Tatil", correct: false }, { id: "b", text: "Okula dönüş / Okulların açılması", correct: true }, { id: "c", text: "Geç kalma", correct: false }, { id: "d", text: "Sınav dönemi", correct: false }] }
];

const unit369Quiz2: Question[] = [
    // Quiz 2: Grammar (Le Subjonctif Part 3) & Sentences
    { id: 741, type: "SELECT", question: "Hangi bağlaçtan sonra daima Subjonctif kullanılır?", options: [{ id: "a", text: "Après que", correct: false }, { id: "b", text: "Parce que", correct: false }, { id: "c", text: "Bien que", correct: true }, { id: "d", text: "Pendant que", correct: false }] },
    { id: 742, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Je t'aide pour que tu ___ (réussir) ton examen.", options: [{ id: "a", text: "réussisses", correct: true }, { id: "b", text: "réussis", correct: false }] },
    { id: 743, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Bien qu'il ___ (être) fatigué, il étudie.", options: [{ id: "a", text: "soit", correct: true }, { id: "b", text: "est", correct: false }] },
    { id: 744, type: "SELECT", question: "'Pour que' ne demektir?", options: [{ id: "a", text: "-den sonra", correct: false }, { id: "b", text: "-sın diye / amacıyla", correct: true }, { id: "c", text: "Rağmen", correct: false }, { id: "d", text: "Çünkü", correct: false }] },
    { id: 745, type: "SELECT", question: "'Après que' bağlacından sonra hangi kip kullanılır?", options: [{ id: "a", text: "Subjonctif", correct: false }, { id: "b", text: "Indicatif (Normal Haber Kipi)", correct: true }, { id: "c", text: "Conditionnel", correct: false } ] },
    { id: 746, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Elle est venue à l'école bien qu'elle ___ (être) malade.", options: [{ id: "a", text: "soit", correct: true }, { id: "b", text: "est", correct: false }] },
    { id: 747, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Fais tes devoirs avant que le professeur n'___ (arriver).", options: [{ id: "a", text: "arrive", correct: true }, { id: "b", text: "arrives", correct: false }] },
    { id: 748, type: "TRANSLATE", question: "Çevir:", hint: "Herkes onu duysun diye (afin que) yüksek sesle konuşuyor.", correctAnswer: "Il parle fort afin que tout le monde l'entende." },
    { id: 749, type: "SELECT", question: "Hangi cümle doğrudur? (Özneler aynı: 'Je' ve 'Je')", options: [{ id: "a", text: "J'étudie pour que je réussisse.", correct: false }, { id: "b", text: "J'étudie pour réussir.", correct: true }] },
    { id: 750, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je pars avant qu'il soit trop tard.", options: [{ id: "a", text: "Çok geç olmadan önce çıkıyorum.", correct: true }, { id: "b", text: "Geç kaldıktan sonra çıkıyorum.", correct: false }, { id: "c", text: "Okuldan önce çıkıyorum.", correct: false }, { id: "d", text: "Sınavdan sonra gidiyorum.", correct: false }] },
    { id: 751, type: "SELECT", question: "Aşağıdakilerden hangisi 'Rağmen' anlamında Subjonctif gerektiren bir bağlaçtır?", options: [{ id: "a", text: "Parce que", correct: false }, { id: "b", text: "Quoique", correct: true }, { id: "c", text: "Dès que", correct: false }, { id: "d", text: "Tandis que", correct: false }] },
    { id: 752, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Je veux t'expliquer la grammaire afin que tu ___ (comprendre).", options: [{ id: "a", text: "comprennes", correct: true }, { id: "b", text: "comprend", correct: false }] },
    { id: 753, type: "SELECT", question: "Özneler aynıysa 'avant que' yerine ne kullanılır?", options: [{ id: "a", text: "avant + isim", correct: false }, { id: "b", text: "avant de + mastar", correct: true }, { id: "c", text: "après que", correct: false }] },
    { id: 754, type: "TRANSLATE", question: "Çevir:", hint: "Sen başarasın diye ders çalışıyorum.", correctAnswer: "J'étudie pour que tu réussisses." },
    { id: 755, type: "SELECT", question: "Hangisi Subjonctif formundadır?", options: [{ id: "a", text: "qu'il lise (lire)", correct: true }, { id: "b", text: "il lit (lire)", correct: false }, { id: "c", text: "il a lu (lire)", correct: false }] },
    { id: 756, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Bien qu'il soit intelligent, il ne travaille pas.", options: [{ id: "a", text: "Zeki olmasına rağmen çalışmıyor.", correct: true }, { id: "b", text: "Çalışmadığı için zeki değil.", correct: false }, { id: "c", text: "Çok çalışmasına rağmen zeki değil.", correct: false } ] },
    { id: 757, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Yorgun olmasına rağmen ders çalışıyor.", correctAnswer: "Bien qu'il soit fatigué, il étudie." },
    { id: 758, type: "FILL_BLANK", question: "Doldur:", sentence: "Il m'aide ___ (afin que) je finisse mes devoirs.", options: [{ id: "a", text: "afin que", correct: true }, { id: "b", text: "pour", correct: false }] },
    { id: 759, type: "SELECT", question: "'Afin que' ile aynı anlama gelen ve aynı kurallara tabi olan bağlaç hangisidir?", options: [{ id: "a", text: "Avant que", correct: false }, { id: "b", text: "Pour que", correct: true }, { id: "c", text: "Bien que", correct: false }] },
    { id: 760, type: "TRANSLATE", question: "Çevir:", hint: "Öğretmen gelmeden önce ödevlerini yap.", correctAnswer: "Fais tes devoirs avant que le professeur n'arrive." }
];

const unit369Quiz3: Question[] = [
    // Quiz 3: Speaking/Phrases, translation
    { id: 761, type: "SELECT", question: "Qu'est-ce que 'En quelle année êtes-vous à l'université ?' signifie?", options: [{ id: "a", text: "Hangi üniversiteye gidiyorsunuz?", correct: false }, { id: "b", text: "Üniversitede kaçıncı yılınızdasınız?", correct: true }, { id: "c", text: "Üniversite ne zaman bitiyor?", correct: false }] },
    { id: 762, type: "SELECT", question: "'Préparer un diplôme' ne demek?", options: [{ id: "a", text: "Sınava hazırlamak", correct: false }, { id: "b", text: "Diploma hazırlamak / Üzerine çalışmak", correct: true }, { id: "c", text: "Mezun olmak", correct: false }] },
    { id: 763, type: "FILL_BLANK", question: "Doldur:", sentence: "Quel est votre ___ préféré à l'école ? (konu/ders)", options: [{ id: "a", text: "sujet", correct: true }, { id: "b", text: "professeur", correct: false }] },
    { id: 764, type: "TRANSLATE", question: "Çevir:", hint: "Matematiği ve tarihi çok seviyorum.", correctAnswer: "J'aime beaucoup les mathématiques et l'histoire." },
    { id: 765, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une bourse", options: [{ id: "a", text: "Okul", correct: false }, { id: "b", text: "Burs", correct: true }, { id: "c", text: "Diploma", correct: false }, { id: "d", text: "Çanta", correct: false }] },
    { id: 766, type: "SELECT", question: "Hangisi 'Burs alıp yurtdışında okumak isterim.' demektir?", options: [{ id: "a", text: "Je voudrais obtenir une bourse et étudier à l'étranger.", correct: true }, { id: "b", text: "Je suis à l'université en France.", correct: false }, { id: "c", text: "Je veux travailler loin.", correct: false }] },
    { id: 767, type: "TRANSLATE", question: "Çevir:", hint: "Öğrenciler final sınavlarına hazırlanmalıdır.", correctAnswer: "Les étudiants doivent préparer leurs examens finaux." },
    { id: 768, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle a obtenu son diplôme avec ___ très bien. (derece)", options: [{ id: "a", text: "mention", correct: true }, { id: "b", text: "note", correct: false }] },
    { id: 769, type: "SELECT", question: "Hangisi 'Matematik öğretmeni bu yıl çok katı.' demektir?", options: [{ id: "a", text: "Le professeur de mathématiques est très strict cette année.", correct: true }, { id: "b", text: "Le professeur est souvent en retard.", correct: false }, { id: "c", text: "Les profs aiment les maths.", correct: false }] },
    { id: 770, type: "TRANSLATE", question: "Çevir:", hint: "Bugün kaç dersiniz var?", correctAnswer: "Combien de cours avez-vous aujourd'hui ?" },
    { id: 771, type: "FILL_BLANK", question: "Doldur:", sentence: "J'espère réussir cet examen car j'ai ___ (çok) étudié.", options: [{ id: "a", text: "beaucoup", correct: true }, { id: "b", text: "très", correct: false }] },
    { id: 772, type: "FILL_BLANK", question: "Doldur:", sentence: "Écoutez ___ (dikkatlice) s'il vous plaît.", options: [{ id: "a", text: "attentivement", correct: true }, { id: "b", text: "lentement", correct: false }] },
    { id: 773, type: "SELECT", question: "Hangisi 'Okulların açılması her zaman stresli bir andır.' demektir?", options: [{ id: "a", text: "L'école est toujours drôle.", correct: false }, { id: "b", text: "La rentrée scolaire est toujours un moment stressant.", correct: true }, { id: "c", text: "La fin des cours approche.", correct: false }] },
    { id: 774, type: "TRANSLATE", question: "Çevir:", hint: "Çıkmadan önce ödevlerini yapmayı unutma.", correctAnswer: "N'oublie pas de faire tes devoirs avant de sortir." },
    { id: 775, type: "SELECT", question: "'Que voulez-vous étudier plus tard ?' çevirisi nedir?", options: [{ id: "a", text: "Hangi üniversiteye gitmek istersin?", correct: false }, { id: "b", text: "İleride ne okumak istiyorsunuz?", correct: true }, { id: "c", text: "Neden ders çalışmıyorsun?", correct: false }] },
    { id: 776, type: "FILL_BLANK", question: "Doldur:", sentence: "Monsieur, pouvez-vous ___ (açıklamak) cette leçon encore une fois ?", options: [{ id: "a", text: "expliquer", correct: true }, { id: "b", text: "répéter", correct: false }] },
    { id: 777, type: "TRANSLATE", question: "Çevir:", hint: "Evet, çok iyi bir not aldım!", correctAnswer: "Oui, j'ai eu une très bonne note !" },
    { id: 778, type: "FILL_BLANK", question: "Doldur:", sentence: "L'éducation est ___ pour l'avenir des jeunes. (esastır)", options: [{ id: "a", text: "essentielle", correct: true }, { id: "b", text: "facile", correct: false }] },
    { id: 779, type: "SELECT", question: "'Je suis en dernière année' ne demek?", options: [{ id: "a", text: "Son yılımdayım", correct: true }, { id: "b", text: "Geçen yıl mezun oldum", correct: false }, { id: "c", text: "İlk senem", correct: false }] },
    { id: 780, type: "TRANSLATE", question: "Çevir:", hint: "Tabii ki, lütfen dikkatlice dinleyin.", correctAnswer: "Bien sûr, écoutez attentivement s'il vous plaît." }
];

const unit369Quiz4: Question[] = [
    // Quiz 4: Reading comprehension & mixed review
    { id: 781, type: "SELECT", question: "À quel âge l'école est-elle obligatoire en France ?", options: [{ id: "a", text: "De 3 à 16 ans", correct: true }, { id: "b", text: "De 6 à 18 ans", correct: false }, { id: "c", text: "De 7 à 15 ans", correct: false }] },
    { id: 782, type: "TRANSLATE", question: "Çevir:", hint: "Eğitim, tüm çocuklar için temel bir haktır.", correctAnswer: "L'éducation est un droit fondamental pour tous les enfants." },
    { id: 783, type: "SELECT", question: "Quel est le but de l'école primaire ?", options: [{ id: "a", text: "Passer le bac", correct: false }, { id: "b", text: "Apprendre à lire et à écrire", correct: true }, { id: "c", text: "Trouver un travail", correct: false }] },
    { id: 784, type: "FILL_BLANK", question: "Doldur:", sentence: "Les élèves étudient diverses ___ (dersler).", options: [{ id: "a", text: "matières", correct: true }, { id: "b", text: "écoles", correct: false }] },
    { id: 785, type: "SELECT", question: "Quel examen les étudiants passent-ils à la fin du lycée ?", options: [{ id: "a", text: "Le brevet", correct: false }, { id: "b", text: "Le baccalauréat", correct: true }, { id: "c", text: "Le permis", correct: false }] },
    { id: 786, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'apprentissage", options: [{ id: "a", text: "Öğrenci", correct: false }, { id: "b", text: "Öğrenim / Öğrenme", correct: true }, { id: "c", text: "Öğretmen", correct: false }, { id: "d", text: "Sınav", correct: false }] },
    { id: 787, type: "TRANSLATE", question: "Çevir:", hint: "Bu sınavı geçmek üniversiteye gitmek için esastır.", correctAnswer: "Réussir cet examen est essentiel pour aller à l'université." },
    { id: 788, type: "SELECT", question: "Selon le texte, quand l'éducation s'arrête-t-elle ?", options: [{ id: "a", text: "Elle ne s'arrête pas à l'école", correct: true }, { id: "b", text: "À 16 ans", correct: false }, { id: "c", text: "À 18 ans", correct: false }] },
    { id: 789, type: "FILL_BLANK", question: "Doldur:", sentence: "L'apprentissage tout au long de la ___ est valorisé. (hayat/yaşam)", options: [{ id: "a", text: "vie", correct: true }, { id: "b", text: "journée", correct: false }] },
    { id: 790, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Eğitim okulda bitmez.", correctAnswer: "L'éducation ne s'arrête pas à l'école." },
    { id: 791, type: "SELECT", question: "Quel est l'un des buts de l'apprentissage pour les adultes ?", options: [{ id: "a", text: "Améliorer leurs compétences professionnelles", correct: true }, { id: "b", text: "Jouer plus", correct: false }, { id: "c", text: "Dormir", correct: false }] },
    { id: 792, type: "SELECT", question: "'Les compétences' ne demek?", options: [{ id: "a", text: "Beceriler / Yetenekler", correct: true }, { id: "b", text: "Notlar", correct: false }, { id: "c", text: "Diplomalar", correct: false }] },
    { id: 793, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Je veux t'aider pour que tu ___ (avoir) de bonnes notes.", options: [{ id: "a", text: "aies", correct: true }, { id: "b", text: "as", correct: false }] },
    { id: 794, type: "TRANSLATE", question: "Çevir:", hint: "Yetişkinler ders almaya devam ederler.", correctAnswer: "Les adultes continuent à suivre des cours." },
    { id: 795, type: "SELECT", question: "'Obligatoire' ne demek?", options: [{ id: "a", text: "İsteğe bağlı", correct: false }, { id: "b", text: "Zorunlu", correct: true }, { id: "c", text: "Zor", correct: false }, { id: "d", text: "Uzun", correct: false }] },
    { id: 796, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une école maternelle", options: [{ id: "a", text: "Anaokulu", correct: true }, { id: "b", text: "İlkokul", correct: false }, { id: "c", text: "Lise", correct: false }, { id: "d", text: "Üniversite", correct: false }] },
    { id: 797, type: "TRANSLATE", question: "Çevir:", hint: "Yeni şeyler öğrenmenin zevki.", correctAnswer: "Le plaisir d'apprendre de nouvelles choses." },
    { id: 798, type: "SELECT", question: "Hangi bağlaçtan sonra 'Subjonctif' GELMEZ?", options: [{ id: "a", text: "Avant que", correct: false }, { id: "b", text: "Après que", correct: true }, { id: "c", text: "Bien que", correct: false }] },
    { id: 799, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Bien qu'il ___ (étudier) beaucoup, l'examen est difficile.", options: [{ id: "a", text: "étudie", correct: true }, { id: "b", text: "étudies", correct: false }] },
    { id: 800, type: "SELECT", question: "Üniversiteden önceki eğitim aşaması Fransa'da hangisidir?", options: [{ id: "a", text: "Le lycée", correct: true }, { id: "b", text: "L'école maternelle", correct: false }, { id: "c", text: "Le collège", correct: false }] }
];

// ===== UNIT 370 HARDCODED QUIZZES =====
const unit370Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Phrases
    { id: 801, type: "SELECT", question: "'L'environnement' ne demek?", options: [{ id: "a", text: "Doğa", correct: false }, { id: "b", text: "Çevre", correct: true }, { id: "c", text: "Ağaç", correct: false }, { id: "d", text: "Deniz", correct: false }] },
    { id: 802, type: "SELECT", question: "'La pollution' ne demek?", options: [{ id: "a", text: "Çözüm", correct: false }, { id: "b", text: "Kirlilik", correct: true }, { id: "c", text: "Geri dönüşüm", correct: false }, { id: "d", text: "Atıklar", correct: false }] },
    { id: 803, type: "SELECT", question: "'Les déchets' ne demek?", options: [{ id: "a", text: "Çöp / Atıklar", correct: true }, { id: "b", text: "Enerji", correct: false }, { id: "c", text: "Okyanus", correct: false }, { id: "d", text: "Orman", correct: false }] },
    { id: 804, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Protéger", options: [{ id: "a", text: "Yok etmek", correct: false }, { id: "b", text: "Korumak", correct: true }, { id: "c", text: "Kirletmek", correct: false }, { id: "d", text: "Geri dönüştürmek", correct: false }] },
    { id: 805, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Recycler", options: [{ id: "a", text: "Atmak", correct: false }, { id: "b", text: "Geri dönüştürmek", correct: true }, { id: "c", text: "Temizlemek", correct: false }, { id: "d", text: "Yakmak", correct: false }] },
    { id: 806, type: "TRANSLATE", question: "Çevir:", hint: "Bu ağaç yüz yaşından büyük.", correctAnswer: "Cet arbre a plus de cent ans." },
    { id: 807, type: "FILL_BLANK", question: "Doldur:", sentence: "Les animaux sauvages vivent dans la ___. (orman)", options: [{ id: "a", text: "forêt", correct: true }, { id: "b", text: "mer", correct: false }] },
    { id: 808, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Plastiği geri dönüştürmek önemlidir.", correctAnswer: "Il est important de recycler le plastique." },
    { id: 809, type: "SELECT", question: "'Détruire' ne demek?", options: [{ id: "a", text: "İnşa etmek", correct: false }, { id: "b", text: "Yok etmek", correct: true }, { id: "c", text: "Kurtarmak", correct: false }, { id: "d", text: "Tasarlamak", correct: false }] },
    { id: 810, type: "SELECT", question: "'Sauvage' ne demek?", options: [{ id: "a", text: "Evcil", correct: false }, { id: "b", text: "Vahşi / Yabani", correct: true }, { id: "c", text: "Küçük", correct: false }, { id: "d", text: "Sevimli", correct: false }] },
    { id: 811, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'énergie solaire", options: [{ id: "a", text: "Rüzgar enerjisi", correct: false }, { id: "b", text: "Güneş enerjisi", correct: true }, { id: "c", text: "Elektrik", correct: false }, { id: "d", text: "Geri dönüşüm", correct: false }] },
    { id: 812, type: "FILL_BLANK", question: "Doldur:", sentence: "La Terre est notre seule ___. (gezegen)", options: [{ id: "a", text: "planète", correct: true }, { id: "b", text: "nature", correct: false }] },
    { id: 813, type: "TRANSLATE", question: "Çevir:", hint: "Çöplerinizi yere atmayın.", correctAnswer: "Ne jetez pas vos déchets par terre." },
    { id: 814, type: "SELECT", question: "Hangi kelime 'Küresel Isınma' anlamında kullanılır?", options: [{ id: "a", text: "Le recyclage", correct: false }, { id: "b", text: "La pollution", correct: false }, { id: "c", text: "Le réchauffement", correct: true }] },
    { id: 815, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous devons ___ notre planète. (korumak)", options: [{ id: "a", text: "protéger", correct: true }, { id: "b", text: "détruire", correct: false }] },
    { id: 816, type: "SELECT", question: "'Conserver' ne demek?", options: [{ id: "a", text: "Korumak / Muhafaza etmek", correct: true }, { id: "b", text: "Atmak", correct: false }, { id: "c", text: "Harcanmak", correct: false }] },
    { id: 817, type: "TRANSLATE", question: "Çevir:", hint: "Hava kirliliği büyük bir problemdir.", correctAnswer: "La pollution de l'air est un grand problème." },
    { id: 818, type: "SELECT", question: "'La mer' ne demek?", options: [{ id: "a", text: "Göl", correct: false }, { id: "b", text: "Toprak", correct: false }, { id: "c", text: "Deniz", correct: true }, { id: "d", text: "Nehir", correct: false }] },
    { id: 819, type: "FILL_BLANK", question: "Doldur:", sentence: "Les usines ___ (kirletmek) la rivière.", options: [{ id: "a", text: "polluent", correct: true }, { id: "b", text: "protègent", correct: false }] },
    { id: 820, type: "SELECT", question: "Hangi cümle 'Doğada yürüyüş yapmayı severim.' anlamına gelir?", options: [{ id: "a", text: "J'aime me promener dans la nature.", correct: true }, { id: "b", text: "Je préfère rester à la maison.", correct: false }, { id: "c", text: "La nature est belle.", correct: false }] }
];

const unit370Quiz2: Question[] = [
    // Quiz 2: Grammar (Le Participe Présent et Le Gérondif) & Sentences
    { id: 821, type: "SELECT", question: "Le Gérondif (-erek, -arak) nasıl oluşturulur?", options: [{ id: "a", text: "Fiilin mastar haline 'en' eklenerek", correct: false }, { id: "b", text: "'nous' çekimindeki -ons atılıp '-ant' eklenerek ve önüne 'en' getirilerek", correct: true }, { id: "c", text: "Fiilin sonuna -é eklenerek", correct: false }] },
    { id: 822, type: "FILL_BLANK", question: "Doldur (Gérondif):", sentence: "Il mange ___ regardant la télévision. (izleyerek)", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 823, type: "FILL_BLANK", question: "Doldur (Gérondif):", sentence: "On protège la nature en ___ (recycler) le plastique.", options: [{ id: "a", text: "recyclant", correct: true }, { id: "b", text: "recycle", correct: false }] },
    { id: 824, type: "SELECT", question: "'Être' fiilinin Gérondif formu hangisidir?", options: [{ id: "a", text: "en étant", correct: true }, { id: "b", text: "en eant", correct: false }, { id: "c", text: "en aillant", correct: false }, { id: "d", text: "en estant", correct: false }] },
    { id: 825, type: "SELECT", question: "'Avoir' fiilinin Gérondif formu hangisidir?", options: [{ id: "a", text: "en avant", correct: false }, { id: "b", text: "en ayant", correct: true }, { id: "c", text: "en ayez", correct: false }] },
    { id: 826, type: "FILL_BLANK", question: "Doldur (Gérondif):", sentence: "En ___ (utiliser) le vélo, on réduit la pollution.", options: [{ id: "a", text: "utilisant", correct: true }, { id: "b", text: "utilisons", correct: false }] },
    { id: 827, type: "TRANSLATE", question: "Çevir:", hint: "Televizyon izleyerek yemek yiyor.", correctAnswer: "Il mange en regardant la télévision." },
    { id: 828, type: "LISTENING", question: "Duyduğunu seç:", audioText: "En sachant la vérité, elle a souri.", options: [{ id: "a", text: "Söylediklerini bilerek güldü.", correct: false }, { id: "b", text: "Gerçeği bilerek gülümsedi.", correct: true }, { id: "c", text: "Kitap okuyarak gülümsedi.", correct: false }] },
    { id: 829, type: "SELECT", question: "'Savoir' (bilmek) fiilinin Gérondif formu nedir?", options: [{ id: "a", text: "en savant", correct: false }, { id: "b", text: "en sachant", correct: true }, { id: "c", text: "en sait", correct: false }] },
    { id: 830, type: "FILL_BLANK", question: "Doldur (Gérondif):", sentence: "Elle travaille ___ écoutant de la musique. (dinlerken/dinleyerek)", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "avec", correct: false }] },
    { id: 831, type: "SELECT", question: "Aşağıdakilerden hangisi bir Gérondif örneğidir?", options: [{ id: "a", text: "il mange", correct: false }, { id: "b", text: "en marchant", correct: true }, { id: "c", text: "pour manger", correct: false }, { id: "d", text: "mangé", correct: false }] },
    { id: 832, type: "TRANSLATE", question: "Çevir:", hint: "Geri dönüşüm yaparak doğayı koruyoruz.", correctAnswer: "En recyclant, on protège la nature." },
    { id: 833, type: "FILL_BLANK", question: "Doldur (Gérondif):", sentence: "Il gagne de l'argent en ___ (vendre) des voitures.", options: [{ id: "a", text: "vendant", correct: true }, { id: "b", text: "vendons", correct: false }] },
    { id: 834, type: "SELECT", question: "Gérondif ne ifade eder?", options: [{ id: "a", text: "Geçmiş zamanı", correct: false }, { id: "b", text: "Sadece gelecekte olacakları", correct: false }, { id: "c", text: "Aynı anda gerçekleşen eylemleri veya yöntemi (-erek, -arak)", correct: true }] },
    { id: 835, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Hasta olduğu için (hasta olarak), evde kaldı.", correctAnswer: "En étant malade, il est resté à la maison." },
    { id: 836, type: "LISTENING", question: "Duyduğunu seç:", audioText: "On protège la nature en jetant les déchets à la poubelle.", options: [{ id: "a", text: "Çöpleri çöp kutusuna atarak doğayı koruruz.", correct: true }, { id: "b", text: "Plastiği geri dönüştürerek doğayı koruruz.", correct: false }, { id: "c", text: "Daha az su kullanarak doğayı koruruz.", correct: false }] },
    { id: 837, type: "FILL_BLANK", question: "Doldur (Gérondif):", sentence: "En ___ (finir) ses devoirs, il est sorti.", options: [{ id: "a", text: "finissant", correct: true }, { id: "b", text: "finisant", correct: false }] },
    { id: 838, type: "SELECT", question: "'En courant' ne demek?", options: [{ id: "a", text: "Yürüyerek", correct: false }, { id: "b", text: "Koşarak", correct: true }, { id: "c", text: "Uyurken", correct: false }] },
    { id: 839, type: "TRANSLATE", question: "Çevir:", hint: "Bisiklet kullanarak kirliliği azaltırız.", correctAnswer: "En utilisant le vélo, on réduit la pollution." },
    { id: 840, type: "SELECT", question: "'Parler' (Konuşmak) -> 'en parlant' (Konuşarak). Doğru mu?", options: [{ id: "a", text: "Doğru", correct: true }, { id: "b", text: "Yanlış", correct: false }] }
];

const unit370Quiz3: Question[] = [
    // Quiz 3: Speaking/Phrases, translation
    { id: 841, type: "SELECT", question: "Qu'est-ce que 'Le changement climatique est un problème mondial.' signifie?", options: [{ id: "a", text: "Hava kirliliği büyük bir sorundur.", correct: false }, { id: "b", text: "İklim değişikliği küresel bir sorundur.", correct: true }, { id: "c", text: "Ormanlar dünya sorunudur.", correct: false }] },
    { id: 842, type: "SELECT", question: "Hangisi 'Plastik tüketimimizi azaltmalıyız.' demektir?", options: [{ id: "a", text: "Nous devons réduire notre consommation de plastique.", correct: true }, { id: "b", text: "Nous devons acheter plus de plastique.", correct: false }, { id: "c", text: "Le plastique est mauvais.", correct: false }] },
    { id: 843, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est important de ___ (geri dönüştürmek) le papier et le verre.", options: [{ id: "a", text: "recycler", correct: true }, { id: "b", text: "planter", correct: false }] },
    { id: 844, type: "TRANSLATE", question: "Çevir:", hint: "Çöplerinizi doğaya atmayın.", correctAnswer: "Ne jetez pas vos déchets dans la nature." },
    { id: 845, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les énergies renouvelables protègent notre planète.", options: [{ id: "a", text: "Yenilenebilir enerjiler gezegenimizi korur.", correct: true }, { id: "b", text: "Güneş enerjisi çevreyi temizler.", correct: false }, { id: "c", text: "Dünyayı korumak zordur.", correct: false }] },
    { id: 846, type: "SELECT", question: "Hangisi 'Okyanus kirliliği deniz hayvanlarını tehdit ediyor.' demektir?", options: [{ id: "a", text: "Les océans sont très propres cette année.", correct: false }, { id: "b", text: "La pollution des océans menace les animaux marins.", correct: true }, { id: "c", text: "Les poissons aiment la mer.", correct: false }] },
    { id: 847, type: "TRANSLATE", question: "Çevir:", hint: "Hava kirliliğini azaltmak için toplu taşımayı kullanın.", correctAnswer: "Prenez les transports en commun pour réduire la pollution de l'air." },
    { id: 848, type: "FILL_BLANK", question: "Doldur:", sentence: "L'eau potable devient une ___ (kaynak) rare.", options: [{ id: "a", text: "ressource", correct: true }, { id: "b", text: "pollution", correct: false }] },
    { id: 849, type: "SELECT", question: "Hangisi 'Ormanların yok olması gerçek bir trajedidir.' demektir?", options: [{ id: "a", text: "Les arbres sont très vieux.", correct: false }, { id: "b", text: "La disparition des forêts est une véritable tragédie.", correct: true }, { id: "c", text: "Nous plantons des arbres.", correct: false }] },
    { id: 850, type: "TRANSLATE", question: "Çevir:", hint: "Herkes çevre için ufak bir adım atabilir.", correctAnswer: "Chacun peut faire un geste pour l'environnement." },
    { id: 851, type: "FILL_BLANK", question: "Doldur:", sentence: "Que faites-vous pour ___ l'environnement ? (korumak)", options: [{ id: "a", text: "protéger", correct: true }, { id: "b", text: "détruire", correct: false }] },
    { id: 852, type: "SELECT", question: "'Je trie mes déchets et je recycle le plastique.' çevirisi nedir?", options: [{ id: "a", text: "Çöplerimi atıyorum ve kağıt alıyorum.", correct: false }, { id: "b", text: "Çöplerimi ayırıyorum ve plastiği geri dönüştürüyorum.", correct: true }, { id: "c", text: "Plastik kullanmıyorum.", correct: false }] },
    { id: 853, type: "FILL_BLANK", question: "Doldur:", sentence: "Pensez-vous que le changement climatique est ___ ? (ciddi)", options: [{ id: "a", text: "grave", correct: true }, { id: "b", text: "important", correct: false }] },
    { id: 854, type: "TRANSLATE", question: "Çevir:", hint: "Sık sık arabaya biner misiniz?", correctAnswer: "Est-ce que vous prenez souvent la voiture ?" },
    { id: 855, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je préfère utiliser mon vélo ou marcher.", options: [{ id: "a", text: "Araba kullanmayı tercih ederim.", correct: false }, { id: "b", text: "Bisikletimi kullanmayı veya yürümeyi tercih ederim.", correct: true }, { id: "c", text: "Yürümeyi sevmiyorum.", correct: false }] },
    { id: 856, type: "SELECT", question: "Hangisi 'Vahşi hayvanlar doğal yaşam alanlarını kaybediyor.' demektir?", options: [{ id: "a", text: "Les animaux sauvages sont mignons.", correct: false }, { id: "b", text: "Les animaux sauvages perdent leur habitat naturel.", correct: true }, { id: "c", text: "La forêt est grande.", correct: false }] },
    { id: 857, type: "TRANSLATE", question: "Çevir:", hint: "Hepimiz su tüketimimizi azaltmalıyız.", correctAnswer: "Nous devrions tous réduire notre consommation d'eau." },
    { id: 858, type: "FILL_BLANK", question: "Doldur:", sentence: "Avez-vous déjà participé à un ___ (temizlik) de la plage ?", options: [{ id: "a", text: "nettoyage", correct: true }, { id: "b", text: "événement", correct: false }] },
    { id: 859, type: "SELECT", question: "'Oui, c'était une expérience très enrichissante.' ne demek?", options: [{ id: "a", text: "Evet, çok zenginleştirici bir deneyimdi.", correct: true }, { id: "b", text: "Evet, çok pahalı bir geziydi.", correct: false }, { id: "c", text: "Çok yorucu bir andı.", correct: false }] },
    { id: 860, type: "TRANSLATE", question: "Çevir:", hint: "Evet, çağımızın en büyük zorluğudur.", correctAnswer: "Oui, c'est le plus grand défi de notre époque." }
];

const unit370Quiz4: Question[] = [
    // Quiz 4: Reading comprehension & mixed review
    { id: 861, type: "SELECT", question: "Selon le texte, qu'est-ce qui est une urgence mondiale ?", options: [{ id: "a", text: "La protection de l'environnement", correct: true }, { id: "b", text: "Aller sur Mars", correct: false }, { id: "c", text: "Gagner de l'argent", correct: false }] },
    { id: 862, type: "TRANSLATE", question: "Çevir:", hint: "Kirlilik ve iklim değişikliği doğanın bir bölümünü yok ediyor.", correctAnswer: "La pollution et le changement climatique détruisent une partie de la nature." },
    { id: 863, type: "SELECT", question: "Que perdent de nombreux animaux sauvages selon le texte ?", options: [{ id: "a", text: "Leur nourriture", correct: false }, { id: "b", text: "Leur habitat", correct: true }, { id: "c", text: "Leurs amis", correct: false }] },
    { id: 864, type: "FILL_BLANK", question: "Doldur:", sentence: "En ___ (azaltarak) notre consommation, nous aidons. (Gérondif kullan)", options: [{ id: "a", text: "réduisant", correct: true }, { id: "b", text: "réduire", correct: false }] },
    { id: 865, type: "SELECT", question: "Comment peut-on aider à garder les océans propres ?", options: [{ id: "a", text: "En réduisant le plastique et en recyclant les déchets", correct: true }, { id: "b", text: "En pêchant des poissons", correct: false }, { id: "c", text: "En nageant souvent", correct: false }] },
    { id: 866, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Éteindre les lumières", options: [{ id: "a", text: "Suyu açmak", correct: false }, { id: "b", text: "Işıkları kapatmak", correct: true }, { id: "c", text: "Camı açmak", correct: false }, { id: "d", text: "Televizyonu kapatmak", correct: false }] },
    { id: 867, type: "TRANSLATE", question: "Çevir:", hint: "Toplu taşımayı kullanmak hava kirliliğini önemli ölçüde azaltır.", correctAnswer: "Utiliser les transports en commun réduit considérablement la pollution de l'air." },
    { id: 868, type: "SELECT", question: "Que doit-on faire pour économiser de l'énergie à la maison ?", options: [{ id: "a", text: "Regarder le soleil", correct: false }, { id: "b", text: "Éteindre les lumières en sortant d'une pièce", correct: true }, { id: "c", text: "Laisser la fenêtre ouverte", correct: false }] },
    { id: 869, type: "FILL_BLANK", question: "Doldur (Gérondif):", sentence: "En ___ (faire) ces petits gestes, nous pouvons préserver la Terre.", options: [{ id: "a", text: "faisant", correct: true }, { id: "b", text: "faisons", correct: false }] },
    { id: 870, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Bu eğilimi tersine çevirmek için.", correctAnswer: "Pour inverser cette tendance." },
    { id: 871, type: "SELECT", question: "À quoi servent ces 'petits gestes' à la fin du texte ?", options: [{ id: "a", text: "À préserver la Terre pour les générations futures", correct: true }, { id: "b", text: "À devenir riche", correct: false }, { id: "c", text: "À voyager", correct: false }] },
    { id: 872, type: "SELECT", question: "Quel mot du texte signifie 'Önemli ölçüde'?", options: [{ id: "a", text: "Considérablement", correct: true }, { id: "b", text: "Urgent", correct: false }, { id: "c", text: "Petit", correct: false }] },
    { id: 873, type: "FILL_BLANK", question: "Doldur:", sentence: "La protection de l'environnement est une ___ (acil durum) mondiale.", options: [{ id: "a", text: "urgence", correct: true }, { id: "b", text: "option", correct: false }] },
    { id: 874, type: "TRANSLATE", question: "Çevir:", hint: "Gelecek nesiller için dünyayı koruyabiliriz.", correctAnswer: "Nous pouvons préserver la Terre pour les générations futures." },
    { id: 875, type: "SELECT", question: "Hangi bağlaç Subjonctif GEREKTİRMEZ?", options: [{ id: "a", text: "Avant que", correct: false }, { id: "b", text: "Après que", correct: true }, { id: "c", text: "Bien que", correct: false }, { id: "d", text: "Pour que", correct: false }] },
    { id: 876, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une tendance", options: [{ id: "a", text: "Eğilim / Trend", correct: true }, { id: "b", text: "Olay", correct: false }, { id: "c", text: "Zorluk", correct: false }, { id: "d", text: "Sınav", correct: false }] },
    { id: 877, type: "TRANSLATE", question: "Çevir:", hint: "Herkes günlük olarak harekete geçebilir.", correctAnswer: "Nous pouvons tous agir au quotidien." },
    { id: 878, type: "SELECT", question: "Laquelle de ces actions N'EST PAS mentionnée pour protéger la planète dans le texte ?", options: [{ id: "a", text: "Faire du vélo", correct: false }, { id: "b", text: "Planter des arbres", correct: true }, { id: "c", text: "Recycler nos déchets", correct: false }] },
    { id: 879, type: "FILL_BLANK", question: "Doldur (Gérondif):", sentence: "Il a souri en ___ (savoir) la vérité.", options: [{ id: "a", text: "sachant", correct: true }, { id: "b", text: "savant", correct: false }] },
    { id: 880, type: "SELECT", question: "İklim değişikliği anlamına gelen Fransızca terim hangisidir?", options: [{ id: "a", text: "Le changement climatique", correct: true }, { id: "b", text: "La pollution de l'eau", correct: false }, { id: "c", text: "La protection de l'environnement", correct: false }] }
];

// ===== UNIT 371 HARDCODED QUIZZES =====
const unit371Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Phrases
    { id: 881, type: "SELECT", question: "'La ville' ne demek?", options: [{ id: "a", text: "Şehir", correct: true }, { id: "b", text: "Köy", correct: false }, { id: "c", text: "Sokak", correct: false }, { id: "d", text: "Ev", correct: false }] },
    { id: 882, type: "SELECT", question: "'La circulation' ne demek?", options: [{ id: "a", text: "Hava", correct: false }, { id: "b", text: "Trafik / Dolaşım", correct: true }, { id: "c", text: "Metro", correct: false }, { id: "d", text: "Yaya", correct: false }] },
    { id: 883, type: "SELECT", question: "'Le trottoir' ne demek?", options: [{ id: "a", text: "Yol", correct: false }, { id: "b", text: "Köprü", correct: false }, { id: "c", text: "Kaldırım", correct: true }, { id: "d", text: "Kavşak", correct: false }] },
    { id: 884, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Traverser", options: [{ id: "a", text: "Beklemek", correct: false }, { id: "b", text: "Karşıdan karşıya geçmek", correct: true }, { id: "c", text: "Dönmek", correct: false }, { id: "d", text: "İnmek", correct: false }] },
    { id: 885, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le carrefour", options: [{ id: "a", text: "Kavşak", correct: true }, { id: "b", text: "Bilet", correct: false }, { id: "c", text: "İstasyon", correct: false }, { id: "d", text: "Yolcu", correct: false }] },
    { id: 886, type: "TRANSLATE", question: "Çevir:", hint: "Büyük bir şehirde yaşıyorum.", correctAnswer: "J'habite dans une grande ville." },
    { id: 887, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y a un gros ___ (trafik sıkışıklığı) sur l'autoroute.", options: [{ id: "a", text: "embouteillage", correct: true }, { id: "b", text: "quartier", correct: false }] },
    { id: 888, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Yayalar kaldırımda yürümelidir.", correctAnswer: "Les piétons doivent marcher sur le trottoir." },
    { id: 889, type: "SELECT", question: "'Le quartier' ne demek?", options: [{ id: "a", text: "Şehir", correct: false }, { id: "b", text: "Semt / Mahalle", correct: true }, { id: "c", text: "Belediye", correct: false }, { id: "d", text: "Bina", correct: false }] },
    { id: 890, type: "SELECT", question: "'Le passager' ne demek?", options: [{ id: "a", text: "Şoför", correct: false }, { id: "b", text: "Yolcu", correct: true }, { id: "c", text: "Biletçi", correct: false }, { id: "d", text: "Yaya", correct: false }] },
    { id: 891, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Valider", options: [{ id: "a", text: "İptal etmek", correct: false }, { id: "b", text: "Onaylamak / Okutmak", correct: true }, { id: "c", text: "Satın almak", correct: false }, { id: "d", text: "İnmek", correct: false }] },
    { id: 892, type: "FILL_BLANK", question: "Doldur:", sentence: "Où est la ___ de métro ? (istasyon / durak)", options: [{ id: "a", text: "station", correct: true }, { id: "b", text: "mairie", correct: false }] },
    { id: 893, type: "TRANSLATE", question: "Çevir:", hint: "Yolculuk yaklaşık bir saat sürer.", correctAnswer: "Le trajet dure environ une heure." },
    { id: 894, type: "SELECT", question: "Hangi kelime 'Aktarma' anlamındadır?", options: [{ id: "a", text: "Terminal", correct: false }, { id: "b", text: "Correspondance", correct: true }, { id: "c", text: "Voyage", correct: false }] },
    { id: 895, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce ___ (bina) historique est magnifique.", options: [{ id: "a", text: "bâtiment", correct: true }, { id: "b", text: "trajet", correct: false }] },
    { id: 896, type: "SELECT", question: "'La mairie' ne demek?", options: [{ id: "a", text: "Postane", correct: false }, { id: "b", text: "Belediye binası", correct: true }, { id: "c", text: "Banka", correct: false }] },
    { id: 897, type: "TRANSLATE", question: "Çevir:", hint: "Her zaman toplu taşımayı kullanıyorum.", correctAnswer: "Je prends toujours les transports en commun." },
    { id: 898, type: "SELECT", question: "'Le centre-ville' ne demek?", options: [{ id: "a", text: "Banliyö", correct: false }, { id: "b", text: "Şehir merkezi", correct: true }, { id: "c", text: "Pazar", correct: false }] },
    { id: 899, type: "FILL_BLANK", question: "Doldur:", sentence: "Le métro est un train ___. (yeraltı)", options: [{ id: "a", text: "souterrain", correct: true }, { id: "b", text: "rapide", correct: false }] },
    { id: 900, type: "SELECT", question: "Hangi kelime 'Tek yön bilet' anlamına gelir? (ipucu metni)", options: [{ id: "a", text: "Un aller simple", correct: true }, { id: "b", text: "Un aller-retour", correct: false }, { id: "c", text: "Une carte de crédit", correct: false }] }
];

const unit371Quiz2: Question[] = [
    // Quiz 2: Grammar (Pronoms Relatifs Composés: lequel, auquel...) & sentences
    { id: 901, type: "SELECT", question: "Bir edattan (avec, pour, sur) sonra cansız veya nesneler için hangi ilgi zamiri ailesi kullanılır?", options: [{ id: "a", text: "qui / que", correct: false }, { id: "b", text: "lequel / laquelle / lesquels", correct: true }, { id: "c", text: "dont / où", correct: false }] },
    { id: 902, type: "FILL_BLANK", question: "Doldur:", sentence: "Le stylo avec ___ j'écris. (le stylo = eril tekil)", options: [{ id: "a", text: "lequel", correct: true }, { id: "b", text: "laquelle", correct: false }] },
    { id: 903, type: "FILL_BLANK", question: "Doldur:", sentence: "La chaise sur ___ je suis assis. (la chaise = dişil tekil)", options: [{ id: "a", text: "laquelle", correct: true }, { id: "b", text: "lesquelles", correct: false }] },
    { id: 904, type: "SELECT", question: "'à + lequel' birleşiminden hangi kelime oluşur?", options: [{ id: "a", text: "auquel", correct: true }, { id: "b", text: "à lequel", correct: false }, { id: "c", text: "auxquels", correct: false }] },
    { id: 905, type: "SELECT", question: "'de + lesquels' birleşiminden hangi kelime oluşur?", options: [{ id: "a", text: "de lesquels", correct: false }, { id: "b", text: "desquels", correct: true }, { id: "c", text: "duquel", correct: false }] },
    { id: 906, type: "FILL_BLANK", question: "Doldur:", sentence: "Le problème ___ je pense. (penser à un problème - le problème)", options: [{ id: "a", text: "auquel", correct: true }, { id: "b", text: "duquel", correct: false }] },
    { id: 907, type: "TRANSLATE", question: "Çevir:", hint: "Üzerinde oturduğum sandalye.", correctAnswer: "La chaise sur laquelle je suis assis." },
    { id: 908, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les sports auxquels il s'intéresse.", options: [{ id: "a", text: "Hoşlandığı oyunlar.", correct: false }, { id: "b", text: "İlgilendiği sporlar.", correct: true }, { id: "c", text: "Yaptığı sporlar.", correct: false }] },
    { id: 909, type: "SELECT", question: "'à + laquelle' (dişil tekil) birleşir mi?", options: [{ id: "a", text: "Birleşmez, 'à laquelle' olarak kalır", correct: true }, { id: "b", text: "Evet, 'auquelle' olur", correct: false }] },
    { id: 910, type: "FILL_BLANK", question: "Doldur:", sentence: "Le parc à côté ___ j'habite. (de + le parc)", options: [{ id: "a", text: "duquel", correct: true }, { id: "b", text: "desquels", correct: false }] },
    { id: 911, type: "SELECT", question: "Eğer bahsettiğimiz şey bir İNSAN ise, edattan sonra (avec, à, de) 'lequel' yerine genellikle hangisi tercih edilir?", options: [{ id: "a", text: "que", correct: false }, { id: "b", text: "qui", correct: true }, { id: "c", text: "dont", correct: false }] },
    { id: 912, type: "TRANSLATE", question: "Çevir:", hint: "Yanında yaşadığım bina.", correctAnswer: "Le bâtiment à côté duquel j'habite." },
    { id: 913, type: "FILL_BLANK", question: "Doldur:", sentence: "Les amis avec ___ je sors. (insan için)", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "lesquels", correct: false }] },
    { id: 914, type: "SELECT", question: "Hangi cümle doğrudur? (Hakkında konuştuğumuz projeler / les projets)", options: [{ id: "a", text: "Les projets de lesquels nous parlons.", correct: false }, { id: "b", text: "Les projets desquels nous parlons.", correct: true }] },
    { id: 915, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Kendisiyle yazdığım kalem.", correctAnswer: "Le stylo avec lequel j'écris." },
    { id: 916, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La fille à qui je parle.", options: [{ id: "a", text: "Bakıştığım kız.", correct: false }, { id: "b", text: "Konuştuğum kız.", correct: true }, { id: "c", text: "Gördüğüm kız.", correct: false }] },
    { id: 917, type: "FILL_BLANK", question: "Doldur:", sentence: "Les réunions ___ j'assiste. (assister à des réunions / dişil çoğul)", options: [{ id: "a", text: "auxquelles", correct: true }, { id: "b", text: "auxquels", correct: false }] },
    { id: 918, type: "SELECT", question: "Cümlede boşluğa ne gelmelidir? 'C'est l'ordinateur sur ... je travaille.' (ordinateur=eril)", options: [{ id: "a", text: "lequel", correct: true }, { id: "b", text: "laquelle", correct: false }, { id: "c", text: "lesquels", correct: false }] },
    { id: 919, type: "TRANSLATE", question: "Çevir:", hint: "Yakınında olduğumuz binalar.", correctAnswer: "Les bâtiments près desquels nous sommes." },
    { id: 920, type: "SELECT", question: "Hangi kelime 'avec' edatından sonra dişil çoğul nesneler için gelir?", options: [{ id: "a", text: "lesquelles", correct: true }, { id: "b", text: "laquelle", correct: false }, { id: "c", text: "desquelles", correct: false }] }
];

const unit371Quiz3: Question[] = [
    // Quiz 3: Speaking/Phrases, translation
    { id: 921, type: "SELECT", question: "Qu'est-ce que 'Pardon, pour aller à la gare s'il vous plaît ?' signifie?", options: [{ id: "a", text: "Müzeye nasıl giderim?", correct: false }, { id: "b", text: "Afedersiniz, istasyona nasıl gidebilirim lütfen?", correct: true }, { id: "c", text: "İstasyon nerede?", correct: false }] },
    { id: 922, type: "SELECT", question: "Hangisi 'Metro, şehirde otobüsten daha hızlıdır.' demektir?", options: [{ id: "a", text: "Le métro est plus rapide que le bus en ville.", correct: true }, { id: "b", text: "Le bus est plus lent que le tram.", correct: false }, { id: "c", text: "Je prends le métro en ville.", correct: false }] },
    { id: 923, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut descendre à la ___ station. (sonraki)", options: [{ id: "a", text: "prochaine", correct: true }, { id: "b", text: "dernière", correct: false }] },
    { id: 924, type: "TRANSLATE", question: "Çevir:", hint: "Trafik sıkışıklığı nedeniyle şehir merkezinden kaçının.", correctAnswer: "Évitez le centre-ville à cause des embouteillages." },
    { id: 925, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je vais prendre un taxi pour rentrer.", options: [{ id: "a", text: "Dönmek için taksiye bineceğim.", correct: true }, { id: "b", text: "Havaalanına gitmek için otobüse bineceğim.", correct: false }, { id: "c", text: "Taksi bulamıyorum.", correct: false }] },
    { id: 926, type: "SELECT", question: "Hangisi 'Binmeden önce biletinizi okutmayı unutmayın.' demektir?", options: [{ id: "a", text: "Achetez un ticket avant de monter.", correct: false }, { id: "b", text: "Pensez à valider votre ticket avant de monter.", correct: true }, { id: "c", text: "Ne jetez pas le ticket.", correct: false }] },
    { id: 927, type: "TRANSLATE", question: "Çevir:", hint: "Bu semt güzel binalarıyla tanınır.", correctAnswer: "Ce quartier est connu pour ses beaux bâtiments." },
    { id: 928, type: "FILL_BLANK", question: "Doldur:", sentence: "Traversez la ___ (sokak) et tournez à gauche.", options: [{ id: "a", text: "rue", correct: true }, { id: "b", text: "route", correct: false }] },
    { id: 929, type: "SELECT", question: "Hangisi 'Hat 4 bugün çalışmalar nedeniyle kapalı.' demektir?", options: [{ id: "a", text: "Le métro 4 est en panne.", correct: false }, { id: "b", text: "La ligne 4 est fermée pour travaux aujourd'hui.", correct: true }, { id: "c", text: "Il y a des travaux sur la route.", correct: false }] },
    { id: 930, type: "TRANSLATE", question: "Çevir:", hint: "Nereden metro bileti satın alabilirim?", correctAnswer: "Où puis-je acheter un ticket de métro ?" },
    { id: 931, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous pouvez prendre le bus numéro 12 ou le ___. (metro)", options: [{ id: "a", text: "métro", correct: true }, { id: "b", text: "taxi", correct: false }] },
    { id: 932, type: "SELECT", question: "'C'est loin d'ici ou je peux y aller à pied ?' çevirisi nedir?", options: [{ id: "a", text: "Oraya otobüsle gidebilir miyim?", correct: false }, { id: "b", text: "Buradan uzak mı yoksa yürüyerek gidebilir miyim?", correct: true }, { id: "c", text: "Yakınlarda metro var mı?", correct: false }] },
    { id: 933, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce n'est pas très loin, environ dix minutes à ___. (yürüyerek)", options: [{ id: "a", text: "pied", correct: true }, { id: "b", text: "marche", correct: false }] },
    { id: 934, type: "TRANSLATE", question: "Çevir:", hint: "Kayboldum, haritada bana gösterebilir misiniz?", correctAnswer: "Je suis perdu, pouvez-vous me montrer sur la carte ?" },
    { id: 935, type: "LISTENING", question: "Duyduğunu seç:", audioText: "À quelle heure passe le dernier train ce soir ?", options: [{ id: "a", text: "İlk tren ne zaman kalkıyor?", correct: false }, { id: "b", text: "Bu akşam son tren saat kaçta geçiyor?", correct: true }, { id: "c", text: "Gelecek tren saat kaçta?", correct: false }] },
    { id: 936, type: "SELECT", question: "Hangisi 'İstasyonda otomatik bir makine (biletmatik) var.' demektir?", options: [{ id: "a", text: "Il y a un guichet ouvert.", correct: false }, { id: "b", text: "Il y a un distributeur automatique à la station.", correct: true }, { id: "c", text: "La station a un café.", correct: false }] },
    { id: 937, type: "TRANSLATE", question: "Çevir:", hint: "Tabii ki, biz buradayız ve siz oraya gitmelisiniz.", correctAnswer: "Bien sûr, nous sommes ici et vous devez aller là-bas." },
    { id: 938, type: "FILL_BLANK", question: "Doldur:", sentence: "Le dernier train part à ___ (gece yarısı) précis.", options: [{ id: "a", text: "minuit", correct: true }, { id: "b", text: "soir", correct: false }] },
    { id: 939, type: "SELECT", question: "'Les piétons ont la priorité.' ne demek?", options: [{ id: "a", text: "Yolcuların önceliği vardır", correct: false }, { id: "b", text: "Yayaların önceliği vardır", correct: true }, { id: "c", text: "Arabaların geçiş hakkı var", correct: false }] },
    { id: 940, type: "TRANSLATE", question: "Çevir:", hint: "Afedersiniz, şehir merkezine nasıl gidebilirim?", correctAnswer: "Excusez-moi, comment puis-je aller au centre-ville ?" }
];

const unit371Quiz4: Question[] = [
    // Quiz 4: Reading comprehension & mixed review
    { id: 941, type: "SELECT", question: "Selon le texte, quel est l'un des défis de la vie dans une grande ville ?", options: [{ id: "a", text: "La nourriture", correct: false }, { id: "b", text: "La circulation", correct: true }, { id: "c", text: "Le temps", correct: false }] },
    { id: 942, type: "TRANSLATE", question: "Çevir:", hint: "Her gün, özellikle sabah ve akşam trafikte sıkışıklıklar olur.", correctAnswer: "Il y a des embouteillages tous les jours, surtout le matin et le soir." },
    { id: 943, type: "SELECT", question: "Quel est le moyen de transport le plus rapide en ville selon le texte ?", options: [{ id: "a", text: "Le métro", correct: true }, { id: "b", text: "Le vélo", correct: false }, { id: "c", text: "La voiture", correct: false }] },
    { id: 944, type: "FILL_BLANK", question: "Doldur:", sentence: "Le métro voyage sous la ___. (toprak/yeraltı)", options: [{ id: "a", text: "terre", correct: true }, { id: "b", text: "rue", correct: false }] },
    { id: 945, type: "SELECT", question: "Que faut-il faire avant de descendre sur le quai ?", options: [{ id: "a", text: "Boire un café", correct: false }, { id: "b", text: "Valider son ticket", correct: true }, { id: "c", text: "Manger", correct: false }] },
    { id: 946, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les transports en commun", options: [{ id: "a", text: "Trafiğe kapalı yol", correct: false }, { id: "b", text: "Toplu taşıma", correct: true }, { id: "c", text: "Kaldırım", correct: false }, { id: "d", text: "Metro peronu", correct: false }] },
    { id: 947, type: "TRANSLATE", question: "Çevir:", hint: "Ağ, birçok hattan ve istasyondan oluşur.", correctAnswer: "Le réseau est composé de plusieurs lignes et de nombreuses stations." },
    { id: 948, type: "SELECT", question: "Dans le centre-ville, on trouve aussi des bus et...", options: [{ id: "a", text: "des tramways", correct: true }, { id: "b", text: "des tracteurs", correct: false }, { id: "c", text: "des bateaux", correct: false }] },
    { id: 949, type: "FILL_BLANK", question: "Doldur:", sentence: "Certains quartiers sont réservés ___ (aux) piétons.", options: [{ id: "a", text: "aux", correct: true }, { id: "b", text: "des", correct: false }] },
    { id: 950, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Büyük bir şehirde yaşamanın birçok avantajı vardır.", correctAnswer: "Vivre dans une grande ville a beaucoup d'avantages." },
    { id: 951, type: "SELECT", question: "Qu'est-ce qu'on peut faire dans les quartiers réservés aux piétons ?", options: [{ id: "a", text: "Conduire un camion", correct: false }, { id: "b", text: "Se promener et faire du shopping", correct: true }, { id: "c", text: "Chasser", correct: false }] },
    { id: 952, type: "SELECT", question: "Hangi kelime (avec, sur, pour) dan sonra FRANSIZCA'da ERİL TEKİL bir nesneyi belirtirken kullanılır?", options: [{ id: "a", text: "Lequel", correct: true }, { id: "b", text: "Laquelle", correct: false }, { id: "c", text: "Lequels", correct: false }] },
    { id: 953, type: "FILL_BLANK", question: "Doldur:", sentence: "Le projet ___ je participe. (participer à / le projet)", options: [{ id: "a", text: "auquel", correct: true }, { id: "b", text: "duquel", correct: false }] },
    { id: 954, type: "TRANSLATE", question: "Çevir:", hint: "Bu yüzden birçok şehirli toplu taşıma kullanmayı tercih ediyor.", correctAnswer: "C'est pourquoi de nombreux citadins préfèrent utiliser les transports en commun." },
    { id: 955, type: "SELECT", question: "Lequel des mots suivants signifie 'Şehirde yaşayan kişi' ?", options: [{ id: "a", text: "Un villageois", correct: false }, { id: "b", text: "Un citadin", correct: true }, { id: "c", text: "Un maire", correct: false }] },
    { id: 956, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Un quai", options: [{ id: "a", text: "Peron / İskele", correct: true }, { id: "b", text: "İstasyon binası", correct: false }, { id: "c", text: "Bilet makinesi", correct: false }] },
    { id: 957, type: "TRANSLATE", question: "Çevir:", hint: "Bu, onları yürüyüş yapmak için mükemmel hale getirir.", correctAnswer: "Ce qui les rend parfaits pour se promener." },
    { id: 958, type: "SELECT", question: "Quel mot n'est PAS un moyen de transport ?", options: [{ id: "a", text: "Un trottoir", correct: true }, { id: "b", text: "Le métro", correct: false }, { id: "c", text: "Le bus", correct: false }] },
    { id: 959, type: "FILL_BLANK", question: "Doldur:", sentence: "La rue ___ tu dois traverser. (-ki onu = que vs lequel? Burada normal nesne zamiri gerekir, lequel DEĞİL. Bu şaşırtmacalı: 'que')", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "laquelle", correct: false }] },
    { id: 960, type: "SELECT", question: "Şehir merkezinde kahve içmekten bahseden orijinal Fransızca kelime öbeği hangisidir?", options: [{ id: "a", text: "Boire un thé noir", correct: false }, { id: "b", text: "Prendre un café en terrasse", correct: true }, { id: "c", text: "Acheter un croissant", correct: false }] }
];

// ===== UNIT 372 HARDCODED QUIZZES =====
const unit372Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Phrases
    { id: 961, type: "SELECT", question: "'L'entraînement' ne demek?", options: [{ id: "a", text: "Maç", correct: false }, { id: "b", text: "Antrenman", correct: true }, { id: "c", text: "Saha", correct: false }, { id: "d", text: "Hakem", correct: false }] },
    { id: 962, type: "SELECT", question: "'L'équipe' ne demek?", options: [{ id: "a", text: "Oyuncu", correct: false }, { id: "b", text: "Takım", correct: true }, { id: "c", text: "Gol", correct: false }, { id: "d", text: "Skor", correct: false }] },
    { id: 963, type: "SELECT", question: "'Gagner' ne demek?", options: [{ id: "a", text: "Kaybetmek", correct: false }, { id: "b", text: "Koşmak", correct: false }, { id: "c", text: "Kazanmak", correct: true }, { id: "d", text: "Oynamak", correct: false }] },
    { id: 964, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le terrain", options: [{ id: "a", text: "Saha / Kort", correct: true }, { id: "b", text: "Spor salonu", correct: false }, { id: "c", text: "Bilet", correct: false }, { id: "d", text: "Tribun", correct: false }] },
    { id: 965, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'arbitre", options: [{ id: "a", text: "Oyuncu", correct: false }, { id: "b", text: "Hakem", correct: true }, { id: "c", text: "Antrenör", correct: false }, { id: "d", text: "Rakip", correct: false }] },
    { id: 966, type: "TRANSLATE", question: "Çevir:", hint: "Takımımız turnuvayı kazandı.", correctAnswer: "Notre équipe a gagné le tournoi." },
    { id: 967, type: "FILL_BLANK", question: "Doldur:", sentence: "Le match ___ (başlamak) à vingt heures.", options: [{ id: "a", text: "commence", correct: true }, { id: "b", text: "finit", correct: false }] },
    { id: 968, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Haftada üç kez spor salonuna gidiyorum.", correctAnswer: "Je vais à la salle de sport trois fois par semaine." },
    { id: 969, type: "SELECT", question: "'Perdre' ne demek?", options: [{ id: "a", text: "Kazanmak", correct: false }, { id: "b", text: "Kaybetmek", correct: true }, { id: "c", text: "Oynamak", correct: false }, { id: "d", text: "Geçmek", correct: false }] },
    { id: 970, type: "SELECT", question: "'La blessure' ne demek?", options: [{ id: "a", text: "Gol", correct: false }, { id: "b", text: "Maç", correct: false }, { id: "c", text: "Yaralanma / Sakatlık", correct: true }, { id: "d", text: "Forma", correct: false }] },
    { id: 971, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Courir", options: [{ id: "a", text: "Yüzmek", correct: false }, { id: "b", text: "Koşmak", correct: true }, { id: "c", text: "Zıplamak", correct: false }, { id: "d", text: "Dönmek", correct: false }] },
    { id: 972, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est le meilleur ___ de l'année. (oyuncu)", options: [{ id: "a", text: "joueur", correct: true }, { id: "b", text: "arbitre", correct: false }] },
    { id: 973, type: "TRANSLATE", question: "Çevir:", hint: "Muhteşem bir gol attı.", correctAnswer: "Il a marqué un but magnifique." },
    { id: 974, type: "SELECT", question: "'Se sentır en forme' ne demek?", options: [{ id: "a", text: "Formda hissetmek", correct: true }, { id: "b", text: "Hasta olmak", correct: false }, { id: "c", text: "Yorgun olmak", correct: false }] },
    { id: 975, type: "FILL_BLANK", question: "Doldur:", sentence: "La balle a touché le ___. (ağ)", options: [{ id: "a", text: "filet", correct: true }, { id: "b", text: "but", correct: false }] },
    { id: 976, type: "SELECT", question: "'La compétition' ne demek?", options: [{ id: "a", text: "Antrenman", correct: false }, { id: "b", text: "Yarışma / Rekabet", correct: true }, { id: "c", text: "Seyirci", correct: false }] },
    { id: 977, type: "TRANSLATE", question: "Çevir:", hint: "Olimpiyatlar için her gün antrenman yapıyor.", correctAnswer: "Il s'entraîne tous les jours pour les Jeux Olympiques." },
    { id: 978, type: "SELECT", question: "'L'adversaire' ne demek?", options: [{ id: "a", text: "Takım arkadaşı", correct: false }, { id: "b", text: "Rakip", correct: true }, { id: "c", text: "Antrenör", correct: false }] },
    { id: 979, type: "FILL_BLANK", question: "Doldur:", sentence: "Les joueurs sont sur le ___. (saha)", options: [{ id: "a", text: "terrain", correct: true }, { id: "b", text: "gymnase", correct: false }] },
    { id: 980, type: "SELECT", question: "'Nager' ne demek?", options: [{ id: "a", text: "Koşmak", correct: false }, { id: "b", text: "Yüzmek", correct: true }, { id: "c", text: "Atlamak", correct: false }] }
];

const unit372Quiz2: Question[] = [
    // Quiz 2: Grammar (Jouer à vs Faire de + Adverbes -ment)
    { id: 981, type: "SELECT", question: "Takım sporları (futbol, tenis vb.) için hangi fiil kullanılır?", options: [{ id: "a", text: "Faire de", correct: false }, { id: "b", text: "Jouer à", correct: true }, { id: "c", text: "Prendre", correct: false }] },
    { id: 982, type: "FILL_BLANK", question: "Doldur:", sentence: "Je joue ___ football. (le football)", options: [{ id: "a", text: "au", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 983, type: "FILL_BLANK", question: "Doldur:", sentence: "Je fais ___ natation. (la natation)", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "à la", correct: false }] },
    { id: 984, type: "SELECT", question: "Bireysel sporlar (yüzme, bisiklet vb.) için hangi fiil kullanılır?", options: [{ id: "a", text: "Jouer à", correct: false }, { id: "b", text: "Faire de", correct: true }, { id: "c", text: "Pratiquer", correct: false }] },
    { id: 985, type: "FILL_BLANK", question: "Doldur:", sentence: "Il fait ___ vélo le matin. (le vélo)", options: [{ id: "a", text: "du", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 986, type: "SELECT", question: "'Lent' -> 'Lente' -> '___' (yavaşça)", options: [{ id: "a", text: "Lentment", correct: false }, { id: "b", text: "Lentement", correct: true }, { id: "c", text: "Lentament", correct: false }] },
    { id: 987, type: "TRANSLATE", question: "Çevir:", hint: "Futbol oynuyorum.", correctAnswer: "Je joue au football." },
    { id: 988, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il court rapidement.", options: [{ id: "a", text: "Yavaşça koşuyor.", correct: false }, { id: "b", text: "Hızlıca koşuyor.", correct: true }, { id: "c", text: "Dikkatli koşuyor.", correct: false }] },
    { id: 989, type: "SELECT", question: "'Vrai' sıfatından zarf nasıl türetilir? (Sesli harfle biten sıfat)", options: [{ id: "a", text: "Vraiment (Doğrudan -ment eklenir)", correct: true }, { id: "b", text: "Vraiement", correct: false }] },
    { id: 990, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle joue ___ échecs. (les échecs / satranç)", options: [{ id: "a", text: "aux", correct: true }, { id: "b", text: "des", correct: false }] },
    { id: 991, type: "SELECT", question: "'Fréquent' -> '___' (ıkça / sıklıkla)", options: [{ id: "a", text: "Fréquentement", correct: false }, { id: "b", text: "Fréquemment", correct: true }, { id: "c", text: "Fréquantment", correct: false }] },
    { id: 992, type: "TRANSLATE", question: "Çevir:", hint: "Yüzme (sporu) yapıyorum.", correctAnswer: "Je fais de la natation." },
    { id: 993, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ difficile. (gerçekten)", options: [{ id: "a", text: "vraiment", correct: true }, { id: "b", text: "vraiement", correct: false }] },
    { id: 994, type: "SELECT", question: "'Doux -> Douce -> ___' (yumuşakça/sessizce)", options: [{ id: "a", text: "Doucement", correct: true }, { id: "b", text: "Douxment", correct: false }] },
    { id: 995, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Biz tırmanış yapıyoruz.", correctAnswer: "Nous faisons de l'escalade." },
    { id: 996, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Elle parle doucement.", options: [{ id: "a", text: "Yavaşça konuşuyor.", correct: false }, { id: "b", text: "Sessizce (yumuşakça) konuşuyor.", correct: true }, { id: "c", text: "Hızlı konuşuyor.", correct: false }] },
    { id: 997, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous faisons ___ escalade. (l'escalade)", options: [{ id: "a", text: "de l'", correct: true }, { id: "b", text: "à l'", correct: false }] },
    { id: 998, type: "SELECT", question: "Hangisi doğrudur? 'Tenis oynuyorum.'", options: [{ id: "a", text: "Je fais du tennis.", correct: false }, { id: "b", text: "Je joue au tennis.", correct: true }] },
    { id: 999, type: "TRANSLATE", question: "Çevir:", hint: "Zekice cevap verdi.", correctAnswer: "Il a répondu intelligemment." },
    { id: 1000, type: "SELECT", question: "Hangi kural doğrudur? Sıfat -ant veya -ent ile bitiyorsa...", options: [{ id: "a", text: "-ment yerine -amment / -emment olur", correct: true }, { id: "b", text: "Normal kural uygulanır", correct: false }] }
];

const unit372Quiz3: Question[] = [
    // Quiz 3: Speaking/Phrases, translation
    { id: 1001, type: "SELECT", question: "'Je fais de la natation deux fois par semaine.' ne demek?", options: [{ id: "a", text: "Haftada iki kez tenis oynuyorum.", correct: false }, { id: "b", text: "Haftada iki kez yüzme yapıyorum.", correct: true }, { id: "c", text: "Her gün yüzüyorum.", correct: false }] },
    { id: 1002, type: "SELECT", question: "Hangisi 'Antrenmandan önce ısınmak gerekir.' demektir?", options: [{ id: "a", text: "Il faut s'échauffer avant l'entraînement.", correct: true }, { id: "b", text: "Il faut courir après l'entraînement.", correct: false }, { id: "c", text: "Il faut manger avant le match.", correct: false }] },
    { id: 1003, type: "FILL_BLANK", question: "Doldur:", sentence: "Le match s'est terminé par un match ___. (beraberlik)", options: [{ id: "a", text: "nul", correct: true }, { id: "b", text: "final", correct: false }] },
    { id: 1004, type: "TRANSLATE", question: "Çevir:", hint: "Beş yaşından beri tenis oynuyor.", correctAnswer: "Elle joue au tennis depuis l'âge de cinq ans." },
    { id: 1005, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le sport est essentiel pour rester en bonne santé.", options: [{ id: "a", text: "Spor, sağlıklı kalmak için gereklidir.", correct: true }, { id: "b", text: "Spor yapmak eğlencelidir.", correct: false }, { id: "c", text: "Spor sağlıksızdır.", correct: false }] },
    { id: 1006, type: "SELECT", question: "Hangisi 'Hakem oyuncuya kırmızı kart verdi.' demektir?", options: [{ id: "a", text: "L'arbitre a donné un carton rouge au joueur.", correct: true }, { id: "b", text: "Le joueur a donné un carton à l'arbitre.", correct: false }, { id: "c", text: "L'arbitre a siflé.", correct: false }] },
    { id: 1007, type: "TRANSLATE", question: "Çevir:", hint: "Yarışmanın finalini kaybettiler.", correctAnswer: "Ils ont perdu la finale de la compétition." },
    { id: 1008, type: "FILL_BLANK", question: "Doldur:", sentence: "Faire du sport permet de ___ le stress. (azaltmak)", options: [{ id: "a", text: "réduire", correct: true }, { id: "b", text: "augmenter", correct: false }] },
    { id: 1009, type: "SELECT", question: "'Quel sport pratiquez-vous régulièrement ?' ne demek?", options: [{ id: "a", text: "Hangi sporu izliyorsunuz?", correct: false }, { id: "b", text: "Düzenli olarak hangi sporu yapıyorsunuz?", correct: true }, { id: "c", text: "Spor sever misiniz?", correct: false }] },
    { id: 1010, type: "TRANSLATE", question: "Çevir:", hint: "Spor salonuna kaydolmak istiyorum.", correctAnswer: "Je voudrais m'inscrire à la salle de sport." },
    { id: 1011, type: "FILL_BLANK", question: "Doldur:", sentence: "Les cours collectifs sont inclus dans l'___. (abonelik)", options: [{ id: "a", text: "abonnement", correct: true }, { id: "b", text: "inscription", correct: false }] },
    { id: 1012, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ne forcez pas trop si vous ressentez une douleur.", options: [{ id: "a", text: "Ağrı hissederseniz fazla zorlamayın.", correct: true }, { id: "b", text: "Daha hızlı koşun.", correct: false }, { id: "c", text: "Egzersiz yapmayı bırakmayın.", correct: false }] },
    { id: 1013, type: "SELECT", question: "'Le sport collectif nous apprend l'esprit d'équipe.' ne demek?", options: [{ id: "a", text: "Takım sporu bize takım ruhunu öğretir.", correct: true }, { id: "b", text: "Bireysel spor daha iyidir.", correct: false }, { id: "c", text: "Takım sporları zordur.", correct: false }] },
    { id: 1014, type: "TRANSLATE", question: "Çevir:", hint: "Fiziksel aktivite sırasında su içmek gerekir.", correctAnswer: "Il faut s'hydrater pendant l'effort physique." },
    { id: 1015, type: "FILL_BLANK", question: "Doldur:", sentence: "Kelebek stili yüzmeyi biliyor musun? Est-ce que tu sais nager le ___ ?", options: [{ id: "a", text: "papillon", correct: true }, { id: "b", text: "dauphin", correct: false }] },
    { id: 1016, type: "SELECT", question: "Hangisi 'En sevdiğiniz futbol takımı hangisi?' demektir?", options: [{ id: "a", text: "Quel sport aimez-vous ?", correct: false }, { id: "b", text: "Quelle est votre équipe de football préférée ?", correct: true }, { id: "c", text: "Jouez-vous au football ?", correct: false }] },
    { id: 1017, type: "TRANSLATE", question: "Çevir:", hint: "Dün akşam maçı televizyonda izlediniz mi?", correctAnswer: "Avez-vous vu le match à la télévision hier soir ?" },
    { id: 1018, type: "FILL_BLANK", question: "Doldur:", sentence: "Oui, c'était un match ___. (inanılmaz)", options: [{ id: "a", text: "incroyable", correct: true }, { id: "b", text: "normal", correct: false }] },
    { id: 1019, type: "SELECT", question: "'Inscrivez-vous à la salle de sport.' ne demek?", options: [{ id: "a", text: "Spor salonuna kayıt olun.", correct: true }, { id: "b", text: "Spor salonundan çıkın.", correct: false }] },
    { id: 1020, type: "TRANSLATE", question: "Çevir:", hint: "Her sabah koşu yapıyorum.", correctAnswer: "Je fais de la course à pied tous les matins." }
];

const unit372Quiz4: Question[] = [
    // Quiz 4: Reading comprehension & mixed review
    { id: 1021, type: "SELECT", question: "Selon le texte, quelle place occupe le sport dans la vie des Français ?", options: [{ id: "a", text: "Aucune place", correct: false }, { id: "b", text: "Une place très importante", correct: true }, { id: "c", text: "Une petite place", correct: false }] },
    { id: 1022, type: "TRANSLATE", question: "Çevir:", hint: "Her hafta sonu milyonlarca seyirci maçları televizyonda izler.", correctAnswer: "Chaque week-end, des millions de spectateurs regardent les matchs à la télévision." },
    { id: 1023, type: "SELECT", question: "Quels sports collectifs sont cités dans le texte ?", options: [{ id: "a", text: "Le football, le basket-ball et le rugby", correct: true }, { id: "b", text: "Le tennis et le golf", correct: false }, { id: "c", text: "La natation et le cyclisme", correct: false }] },
    { id: 1024, type: "FILL_BLANK", question: "Doldur:", sentence: "Les enfants commencent à jouer ___ football dès l'âge de six ans.", options: [{ id: "a", text: "au", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 1025, type: "SELECT", question: "Que permet de faire le sport régulièrement ?", options: [{ id: "a", text: "Devenir célèbre", correct: false }, { id: "b", text: "Rester en forme et réduire le stress", correct: true }, { id: "c", text: "Gagner de l'argent", correct: false }] },
    { id: 1026, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Un spectateur", options: [{ id: "a", text: "Sporcu", correct: false }, { id: "b", text: "Seyirci", correct: true }, { id: "c", text: "Hakem", correct: false }, { id: "d", text: "Antrenör", correct: false }] },
    { id: 1027, type: "TRANSLATE", question: "Çevir:", hint: "Bireysel sporlar da çok başarılıdır.", correctAnswer: "Les sports individuels ont aussi beaucoup de succès." },
    { id: 1028, type: "SELECT", question: "Quels sports individuels sont mentionnés dans le texte ?", options: [{ id: "a", text: "Le yoga et le ski", correct: false }, { id: "b", text: "La course à pied, la natation et le cyclisme", correct: true }, { id: "c", text: "Le tennis et la boxe", correct: false }] },
    { id: 1029, type: "FILL_BLANK", question: "Doldur:", sentence: "Les sports individuels ___ de plus en plus de pratiquants. (attraire=çekmek 3. çoğul)", options: [{ id: "a", text: "attirent", correct: true }, { id: "b", text: "attire", correct: false }] },
    { id: 1030, type: "TRANSLATE", question: "Fransızcasını yaz:", hint: "Düzenli spor yapmak günlük hayatta daha iyi hissetmeyi sağlar.", correctAnswer: "Faire du sport régulièrement permet de se sentir mieux dans sa vie quotidienne." },
    { id: 1031, type: "SELECT", question: "Que signifie 'en plein air' ?", options: [{ id: "a", text: "Kapalı alanda", correct: false }, { id: "b", text: "Açık havada", correct: true }, { id: "c", text: "Su altında", correct: false }] },
    { id: 1032, type: "SELECT", question: "'Faire de' mi yoksa 'Jouer à' mı? -> ___ escalade.", options: [{ id: "a", text: "Faire de l' (bireysel aktivite)", correct: true }, { id: "b", text: "Jouer à l' (takım sporu)", correct: false }] },
    { id: 1033, type: "FILL_BLANK", question: "Doldur (Zarf):", sentence: "Il court ___. (hızlıca / rapide -> ?)", options: [{ id: "a", text: "rapidement", correct: true }, { id: "b", text: "rapide", correct: false }] },
    { id: 1034, type: "TRANSLATE", question: "Çevir:", hint: "Spor, Fransızların hayatında çok önemli bir yer tutar.", correctAnswer: "Le sport occupe une place très importante dans la vie des Français." },
    { id: 1035, type: "SELECT", question: "Quel mot du texte signifie 'Sporcu / Uygulayıcı' ?", options: [{ id: "a", text: "Spectateur", correct: false }, { id: "b", text: "Pratiquant", correct: true }, { id: "c", text: "Joueur", correct: false }] },
    { id: 1036, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Faire du sport régulièrement", options: [{ id: "a", text: "Düzenli spor yapmak", correct: true }, { id: "b", text: "Nadiren spor yapmak", correct: false }, { id: "c", text: "Sporu bırakmak", correct: false }] },
    { id: 1037, type: "TRANSLATE", question: "Çevir:", hint: "Çocuklar genellikle altı yaşında futbol oynamaya başlarlar.", correctAnswer: "Les enfants commencent souvent à jouer au football dès l'âge de six ans." },
    { id: 1038, type: "SELECT", question: "Où peut-on pratiquer le sport selon le texte ?", options: [{ id: "a", text: "Seulement au gymnase", correct: false }, { id: "b", text: "En salle, en plein air ou dans un club", correct: true }, { id: "c", text: "Seulement chez soi", correct: false }] },
    { id: 1039, type: "FILL_BLANK", question: "Doldur (Zarf):", sentence: "Il a répondu ___. (zekice / intelligent -> ?)", options: [{ id: "a", text: "intelligemment", correct: true }, { id: "b", text: "intelligentement", correct: false }] },
    { id: 1040, type: "SELECT", question: "Le texte mentionne que le sport réduit...", options: [{ id: "a", text: "Le stress", correct: true }, { id: "b", text: "Le sommeil", correct: false }, { id: "c", text: "L'appétit", correct: false }] }
];

// ===== UNIT 373 HARDCODED QUIZZES =====
const unit373Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Culture Phrases
    { id: 1041, type: "SELECT", question: "'Les coutumes' ne demek?", options: [{ id: "a", text: "Gelenekler / Adetler", correct: true }, { id: "b", text: "Şehirler", correct: false }, { id: "c", text: "Tatiller", correct: false }, { id: "d", text: "Haritalar", correct: false }] },
    { id: 1042, type: "SELECT", question: "'La politesse' ne demek?", options: [{ id: "a", text: "Nezaket", correct: true }, { id: "b", text: "Yasak", correct: false }, { id: "c", text: "Yemek", correct: false }, { id: "d", text: "Ulaşım", correct: false }] },
    { id: 1043, type: "SELECT", question: "'Le pourboire' ne demek?", options: [{ id: "a", text: "Bahşiş", correct: true }, { id: "b", text: "Bilet", correct: false }, { id: "c", text: "Oda", correct: false }, { id: "d", text: "Şikayet", correct: false }] },
    { id: 1044, type: "SELECT", question: "'L'artisanat' ne demek?", options: [{ id: "a", text: "El sanatları", correct: true }, { id: "b", text: "Elektrik", correct: false }, { id: "c", text: "Randevu", correct: false }, { id: "d", text: "Hesap", correct: false }] },
    { id: 1045, type: "SELECT", question: "'Le patrimoine' ne demek?", options: [{ id: "a", text: "Kültürel miras", correct: true }, { id: "b", text: "İş sözleşmesi", correct: false }, { id: "c", text: "Alışveriş", correct: false }, { id: "d", text: "Bina", correct: false }] },
    { id: 1046, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les coutumes", options: [{ id: "a", text: "Gelenekler", correct: true }, { id: "b", text: "Biletler", correct: false }, { id: "c", text: "Kıyafetler", correct: false }, { id: "d", text: "İzinler", correct: false }] },
    { id: 1047, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le marché local", options: [{ id: "a", text: "Yerel pazar", correct: true }, { id: "b", text: "Yerel okul", correct: false }, { id: "c", text: "Yerel banka", correct: false }, { id: "d", text: "Yerel otel", correct: false }] },
    { id: 1048, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'hospitalité", options: [{ id: "a", text: "Misafirperverlik", correct: true }, { id: "b", text: "Hastane", correct: false }, { id: "c", text: "Hız", correct: false }, { id: "d", text: "Hasta", correct: false }] },
    { id: 1049, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut respecter les ___ locales.", options: [{ id: "a", text: "coutumes", correct: true }, { id: "b", text: "coutures", correct: false }] },
    { id: 1050, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est déjà inclus.", options: [{ id: "a", text: "pourboire", correct: true }, { id: "b", text: "passeport", correct: false }] },
    { id: 1051, type: "SELECT", question: "'Il est important de respecter les coutumes locales.' ne demek?", options: [{ id: "a", text: "Yerel geleneklere saygı göstermek önemlidir.", correct: true }, { id: "b", text: "Yerel pazara gitmek önemlidir.", correct: false }, { id: "c", text: "Gelenekler gereksizdir.", correct: false }, { id: "d", text: "Sadece turistler önemlidir.", correct: false }] },
    { id: 1052, type: "SELECT", question: "'On devrait apprendre quelques mots de la langue.' ne demek?", options: [{ id: "a", text: "Dilden birkaç kelime öğrenmeliyiz.", correct: true }, { id: "b", text: "Dil öğrenmek istemiyoruz.", correct: false }, { id: "c", text: "Yalnızca İngilizce yeter.", correct: false }, { id: "d", text: "Dilin tamamını bilmek gerekir.", correct: false }] },
    { id: 1053, type: "TRANSLATE", question: "Çevir:", hint: "Yerel kültür", correctAnswer: "La culture locale" },
    { id: 1054, type: "TRANSLATE", question: "Çevir:", hint: "Sosyal kurallar", correctAnswer: "Les codes sociaux" },
    { id: 1055, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La tenue correcte est recommandée", options: [{ id: "a", text: "Uygun kıyafet önerilir.", correct: true }, { id: "b", text: "Kıyafet yasaktır.", correct: false }, { id: "c", text: "Kıyafet çok pahalıdır.", correct: false }, { id: "d", text: "Kıyafet gereksizdir.", correct: false }] },
    { id: 1056, type: "TRANSLATE", question: "Çevir:", hint: "Yerel pazar", correctAnswer: "Le marché local" },
    { id: 1057, type: "SELECT", question: "'S'adapter' ne demek?", options: [{ id: "a", text: "Uyum sağlamak", correct: true }, { id: "b", text: "Geri dönmek", correct: false }, { id: "c", text: "Beklemek", correct: false }, { id: "d", text: "Kaybetmek", correct: false }] },
    { id: 1058, type: "SELECT", question: "'Éviter' ne demek?", options: [{ id: "a", text: "Kaçınmak", correct: true }, { id: "b", text: "Onaylamak", correct: false }, { id: "c", text: "Ödemek", correct: false }, { id: "d", text: "Konuşmak", correct: false }] },
    { id: 1059, type: "FILL_BLANK", question: "Doldur:", sentence: "Je me ___ sur les règles.", options: [{ id: "a", text: "renseigne", correct: true }, { id: "b", text: "range", correct: false }] },
    { id: 1060, type: "SELECT", question: "'Les gestes' ne demek?", options: [{ id: "a", text: "Jestler / El-kol hareketleri", correct: true }, { id: "b", text: "Geziler", correct: false }, { id: "c", text: "Köprüler", correct: false }, { id: "d", text: "Şarkılar", correct: false }] }
];

const unit373Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1061, type: "SELECT", question: "Daha yumuşak bir tavsiye vermek için hangisi kullanılır?", options: [{ id: "a", text: "Il vaut mieux", correct: true }, { id: "b", text: "Il est interdit de", correct: false }, { id: "c", text: "Il y a", correct: false }, { id: "d", text: "Il était", correct: false }] },
    { id: 1062, type: "SELECT", question: "'Il est important de' ne anlama gelir?", options: [{ id: "a", text: "Yapmak önemlidir", correct: true }, { id: "b", text: "Yapmamak gerekir", correct: false }, { id: "c", text: "Yapmak yasaktır", correct: false }, { id: "d", text: "Yapmak zor değildir", correct: false }] },
    { id: 1063, type: "SELECT", question: "'Il vaut mieux ne pas + mastar' ne anlama gelir?", options: [{ id: "a", text: "Yapmamak daha iyi olur", correct: true }, { id: "b", text: "Yapmak gerekir", correct: false }, { id: "c", text: "Yapmak yasaktır", correct: false }, { id: "d", text: "Yapmak zorundasın", correct: false }] },
    { id: 1064, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est ___ de réserver à l'avance.", options: [{ id: "a", text: "conseillé", correct: true }, { id: "b", text: "conseille", correct: false }] },
    { id: 1065, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ mieux éviter les sujets sensibles.", options: [{ id: "a", text: "vaut", correct: true }, { id: "b", text: "va", correct: false }] },
    { id: 1066, type: "TRANSLATE", question: "Çevir:", hint: "Tapınaklarda sessiz konuşmak gerekir.", correctAnswer: "Il faut parler doucement dans les temples." },
    { id: 1067, type: "TRANSLATE", question: "Çevir:", hint: "Bahşiş vermemek daha iyi olur.", correctAnswer: "Il vaut mieux ne pas donner de pourboire." },
    { id: 1068, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il est interdit de prendre des photos.", options: [{ id: "a", text: "Fotoğraf çekmek yasaktır.", correct: true }, { id: "b", text: "Fotoğraf çekmek serbesttir.", correct: false }, { id: "c", text: "Fotoğraf çekmek gerekir.", correct: false }, { id: "d", text: "Fotoğraf çekmek pahalıdır.", correct: false }] },
    { id: 1069, type: "SELECT", question: "'On devrait' ne anlama gelir?", options: [{ id: "a", text: "Yapmalıyız / Önerilir", correct: true }, { id: "b", text: "Yapıyoruz", correct: false }, { id: "c", text: "Yapmayacağız", correct: false }, { id: "d", text: "Yapmıştık", correct: false }] },
    { id: 1070, type: "TRANSLATE", question: "Çevir:", hint: "Yerel kültüre saygı göstermek önemlidir.", correctAnswer: "Il est important de respecter la culture locale." },
    { id: 1071, type: "SELECT", question: "'Je me renseigne sur les coutumes avant de partir.' ne demek?", options: [{ id: "a", text: "Yola çıkmadan önce gelenekler hakkında bilgi alıyorum.", correct: true }, { id: "b", text: "Yola çıktıktan sonra alışveriş yapıyorum.", correct: false }, { id: "c", text: "Gelenekleri sevmiyorum.", correct: false }, { id: "d", text: "Evde kalıyorum.", correct: false }] },
    { id: 1072, type: "SELECT", question: "'Les habitants sont très accueillants.' ne demek?", options: [{ id: "a", text: "Yerel halk çok misafirperverdir.", correct: true }, { id: "b", text: "Yerel halk sinirlidir.", correct: false }, { id: "c", text: "Yerel halk yoktur.", correct: false }, { id: "d", text: "Yerel halk dışarı çıkmaz.", correct: false }] },
    { id: 1073, type: "TRANSLATE", question: "Çevir:", hint: "Dilden birkaç kelime öğrenmeliyiz.", correctAnswer: "On devrait apprendre quelques mots de la langue." },
    { id: 1074, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est interdit de ___ ici.", options: [{ id: "a", text: "prendre des photos", correct: true }, { id: "b", text: "respecter", correct: false }] },
    { id: 1075, type: "SELECT", question: "Yasak belirtmek için hangi yapı kullanılır?", options: [{ id: "a", text: "Il est interdit de", correct: true }, { id: "b", text: "Il faut", correct: false }, { id: "c", text: "Il vaut mieux", correct: false }, { id: "d", text: "Il y a", correct: false }] },
    { id: 1076, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je m'adapte aux règles", options: [{ id: "a", text: "Kurallara uyum sağlıyorum.", correct: true }, { id: "b", text: "Kuralları bilmiyorum.", correct: false }, { id: "c", text: "Kuralları değiştiriyorum.", correct: false }, { id: "d", text: "Kuralları unutuyorum.", correct: false }] },
    { id: 1077, type: "TRANSLATE", question: "Çevir:", hint: "Seyahat etmek, keşfetmek ve saygı göstermektir.", correctAnswer: "Voyager, c'est découvrir et respecter." },
    { id: 1078, type: "SELECT", question: "'Il est préférable de' ne anlama gelir?", options: [{ id: "a", text: "Daha iyidir / Tercih edilir", correct: true }, { id: "b", text: "Daha kötü olur", correct: false }, { id: "c", text: "Yasaktır", correct: false }, { id: "d", text: "Mümkün değildir", correct: false }] },
    { id: 1079, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut ___ ses chaussures en entrant.", options: [{ id: "a", text: "enlever", correct: true }, { id: "b", text: "envoier", correct: false }] },
    { id: 1080, type: "SELECT", question: "'Il vaut mieux' hangi anlamı verir?", options: [{ id: "a", text: "Daha iyi olur", correct: true }, { id: "b", text: "Asla olmaz", correct: false }, { id: "c", text: "Zorunludur", correct: false }, { id: "d", text: "Geçmişteydi", correct: false }] }
];

const unit373Quiz3: Question[] = [
    // Quiz 3: Reading comprehension & vocab
    { id: 1081, type: "SELECT", question: "Où voyage Camille ?", options: [{ id: "a", text: "En Italie", correct: false }, { id: "b", text: "Au Japon", correct: true }, { id: "c", text: "Au Canada", correct: false }, { id: "d", text: "En Espagne", correct: false }] },
    { id: 1082, type: "SELECT", question: "Que fait-elle avant de partir ?", options: [{ id: "a", text: "Elle se renseigne sur les coutumes locales", correct: true }, { id: "b", text: "Elle change de travail", correct: false }, { id: "c", text: "Elle achète une voiture", correct: false }, { id: "d", text: "Elle apprend à conduire", correct: false }] },
    { id: 1083, type: "SELECT", question: "Que faut-il faire en entrant chez quelqu'un ?", options: [{ id: "a", text: "Enlever ses chaussures", correct: true }, { id: "b", text: "Parler fort", correct: false }, { id: "c", text: "Prendre des photos", correct: false }, { id: "d", text: "Fumer", correct: false }] },
    { id: 1084, type: "SELECT", question: "Où doit-on parler doucement ?", options: [{ id: "a", text: "Dans les temples", correct: true }, { id: "b", text: "Dans les marchés", correct: false }, { id: "c", text: "Dans les trains", correct: false }, { id: "d", text: "Dans les hôtels", correct: false }] },
    { id: 1085, type: "SELECT", question: "Quel endroit visite-t-elle le premier jour ?", options: [{ id: "a", text: "Un marché local", correct: true }, { id: "b", text: "Un musée", correct: false }, { id: "c", text: "Une bibliothèque", correct: false }, { id: "d", text: "Un stade", correct: false }] },
    { id: 1086, type: "SELECT", question: "Que lui explique le guide touristique ?", options: [{ id: "a", text: "Les prix des hôtels", correct: false }, { id: "b", text: "Le sens de certains gestes et la politesse", correct: true }, { id: "c", text: "Les horaires des bus", correct: false }, { id: "d", text: "La météo", correct: false }] },
    { id: 1087, type: "SELECT", question: "À quoi assiste Camille le soir ?", options: [{ id: "a", text: "À une fête traditionnelle", correct: true }, { id: "b", text: "À un match", correct: false }, { id: "c", text: "À une conférence", correct: false }, { id: "d", text: "À un cours", correct: false }] },
    { id: 1088, type: "SELECT", question: "Que découvre-t-elle au sujet du pourboire ?", options: [{ id: "a", text: "Il n'est pas habituel", correct: true }, { id: "b", text: "Il est obligatoire", correct: false }, { id: "c", text: "Il est interdit partout", correct: false }, { id: "d", text: "Il est très élevé", correct: false }] },
    { id: 1089, type: "SELECT", question: "Que vaut-il mieux éviter ?", options: [{ id: "a", text: "Certains sujets sensibles", correct: true }, { id: "b", text: "Les marchés locaux", correct: false }, { id: "c", text: "Les guides", correct: false }, { id: "d", text: "Les temples", correct: false }] },
    { id: 1090, type: "SELECT", question: "Que comprend-elle à la fin du séjour ?", options: [{ id: "a", text: "Voyager coûte trop cher", correct: false }, { id: "b", text: "Voyager, c'est s'adapter et respecter", correct: true }, { id: "c", text: "Voyager est inutile", correct: false }, { id: "d", text: "Voyager, c'est rester seul", correct: false }] },
    { id: 1091, type: "TRANSLATE", question: "Çevir:", hint: "Gelenekler", correctAnswer: "Les coutumes" },
    { id: 1092, type: "TRANSLATE", question: "Çevir:", hint: "Bahşiş", correctAnswer: "Le pourboire" },
    { id: 1093, type: "TRANSLATE", question: "Çevir:", hint: "Kıyafet", correctAnswer: "La tenue" },
    { id: 1094, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Se renseigner", options: [{ id: "a", text: "Bilgi almak", correct: true }, { id: "b", text: "Gezmek", correct: false }, { id: "c", text: "Ödemek", correct: false }, { id: "d", text: "Uyumak", correct: false }] },
    { id: 1095, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle se sent plus proche de la ___.", options: [{ id: "a", text: "culture", correct: true }, { id: "b", text: "voiture", correct: false }] },
    { id: 1096, type: "TRANSLATE", question: "Çevir:", hint: "Bilgi almak", correctAnswer: "Se renseigner" },
    { id: 1097, type: "SELECT", question: "'Une fête traditionnelle' ne demek?", options: [{ id: "a", text: "Geleneksel festival", correct: true }, { id: "b", text: "Yerel market", correct: false }, { id: "c", text: "Hızlı yemek", correct: false }, { id: "d", text: "Kısa gezi", correct: false }] },
    { id: 1098, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le guide touristique", options: [{ id: "a", text: "Turistik rehber", correct: true }, { id: "b", text: "Taksi şoförü", correct: false }, { id: "c", text: "Otel resepsiyonu", correct: false }, { id: "d", text: "Pazar satıcısı", correct: false }] },
    { id: 1099, type: "FILL_BLANK", question: "Doldur:", sentence: "Il vaut mieux ___ certains sujets sensibles.", options: [{ id: "a", text: "éviter", correct: true }, { id: "b", text: "inviter", correct: false }] },
    { id: 1100, type: "SELECT", question: "'S'adapter' ne demek?", options: [{ id: "a", text: "Uyum sağlamak", correct: true }, { id: "b", text: "Ayrılmak", correct: false }, { id: "c", text: "Unutmak", correct: false }, { id: "d", text: "Yemek yapmak", correct: false }] }
];

const unit373Quiz4: Question[] = [
    // Quiz 4: Mixed challenge
    { id: 1101, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est important de ___ les règles.", options: [{ id: "a", text: "respecter", correct: true }, { id: "b", text: "refuser", correct: false }] },
    { id: 1102, type: "SELECT", question: "'Les habitudes' ne demek?", options: [{ id: "a", text: "Alışkanlıklar", correct: true }, { id: "b", text: "Tatlılar", correct: false }, { id: "c", text: "Biletler", correct: false }, { id: "d", text: "Haritalar", correct: false }] },
    { id: 1103, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La politesse", options: [{ id: "a", text: "Nezaket", correct: true }, { id: "b", text: "Polis", correct: false }, { id: "c", text: "Pencere", correct: false }, { id: "d", text: "Plan", correct: false }] },
    { id: 1104, type: "TRANSLATE", question: "Çevir:", hint: "Yerel pazarda alışveriş yapmayı seviyorum.", correctAnswer: "J'aime faire des achats au marché local." },
    { id: 1105, type: "SELECT", question: "'Il vaut mieux + mastar' ne anlama gelir?", options: [{ id: "a", text: "Daha iyi olur", correct: true }, { id: "b", text: "Tam olarak olur", correct: false }, { id: "c", text: "Yasaktır", correct: false }, { id: "d", text: "Zorunlu değildir", correct: false }] },
    { id: 1106, type: "FILL_BLANK", question: "Doldur:", sentence: "On ___ apprendre quelques mots.", options: [{ id: "a", text: "devrait", correct: true }, { id: "b", text: "devoir", correct: false }] },
    { id: 1107, type: "SELECT", question: "'Le patrimoine' ne demek?", options: [{ id: "a", text: "Kültürel miras", correct: true }, { id: "b", text: "Havaalanı", correct: false }, { id: "c", text: "Spor salonu", correct: false }, { id: "d", text: "Alışveriş", correct: false }] },
    { id: 1108, type: "TRANSLATE", question: "Çevir:", hint: "Fotoğraf çekmek yasaktır.", correctAnswer: "Il est interdit de prendre des photos." },
    { id: 1109, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Respectez les coutumes locales", options: [{ id: "a", text: "Yerel geleneklere saygı gösterin.", correct: true }, { id: "b", text: "Yerel gelenekleri unutun.", correct: false }, { id: "c", text: "Yerel pazara gidin.", correct: false }, { id: "d", text: "Yerel yemekleri pişirin.", correct: false }] },
    { id: 1110, type: "SELECT", question: "'Le touriste' ne demek?", options: [{ id: "a", text: "Turist", correct: true }, { id: "b", text: "Kaptan", correct: false }, { id: "c", text: "Şef", correct: false }, { id: "d", text: "Doktor", correct: false }] },
    { id: 1111, type: "TRANSLATE", question: "Çevir:", hint: "Yerel halk çok misafirperver.", correctAnswer: "Les habitants sont très accueillants." },
    { id: 1112, type: "FILL_BLANK", question: "Doldur:", sentence: "La tenue doit être ___ .", options: [{ id: "a", text: "correcte", correct: true }, { id: "b", text: "incorrecte", correct: false }] },
    { id: 1113, type: "SELECT", question: "Hangi cümle doğru tavsiyedir?", options: [{ id: "a", text: "Il vaut mieux éviter les sujets sensibles.", correct: true }, { id: "b", text: "Il est interdit de respecter.", correct: false }, { id: "c", text: "Il faut ne pas apprendre.", correct: false }, { id: "d", text: "Il vaut mieux jamais voyager.", correct: false }] },
    { id: 1114, type: "TRANSLATE", question: "Çevir:", hint: "Yola çıkmadan önce bilgi aldım.", correctAnswer: "Je me suis renseigné avant de partir." },
    { id: 1115, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je préfère voyager lentement", options: [{ id: "a", text: "Yavaş gezmeyi tercih ederim.", correct: true }, { id: "b", text: "Hızlı koşmayı severim.", correct: false }, { id: "c", text: "Hiç seyahat etmem.", correct: false }, { id: "d", text: "Seyahat etmeyi sevmem.", correct: false }] },
    { id: 1116, type: "SELECT", question: "'Observer' ne demek?", options: [{ id: "a", text: "Gözlemlemek", correct: true }, { id: "b", text: "Ödemek", correct: false }, { id: "c", text: "Kabul etmek", correct: false }, { id: "d", text: "Kapatmak", correct: false }] },
    { id: 1117, type: "FILL_BLANK", question: "Doldur:", sentence: "Le pourboire est ___ inclus.", options: [{ id: "a", text: "déjà", correct: true }, { id: "b", text: "jamais", correct: false }] },
    { id: 1118, type: "SELECT", question: "Hangi ifade yasak belirtir?", options: [{ id: "a", text: "Il est interdit de...", correct: true }, { id: "b", text: "Il est possible de...", correct: false }, { id: "c", text: "Il y a...", correct: false }, { id: "d", text: "Il était...", correct: false }] },
    { id: 1119, type: "TRANSLATE", question: "Çevir:", hint: "Yerel kültürü keşfetmek istiyorum.", correctAnswer: "Je veux découvrir la culture locale." },
    { id: 1120, type: "SELECT", question: "'Les codes sociaux' ne demek?", options: [{ id: "a", text: "Sosyal kurallar", correct: true }, { id: "b", text: "Sosyal medya", correct: false }, { id: "c", text: "Sosyal yardım", correct: false }, { id: "d", text: "Sosyal kulüp", correct: false }] }
];

// ===== UNIT 374 HARDCODED QUIZZES =====
const unit374Quiz1: Question[] = [
    // Quiz 1: Vocab & Basic Culture Phrases
    { id: 1121, type: "SELECT", question: "'La diversité' ne demek?", options: [{ id: "a", text: "Çeşitlilik", correct: true }, { id: "b", text: "Düzen", correct: false }, { id: "c", text: "Aile", correct: false }, { id: "d", text: "Bilet", correct: false }] },
    { id: 1122, type: "SELECT", question: "'La tolérance' ne demek?", options: [{ id: "a", text: "Hoşgörü", correct: true }, { id: "b", text: "Sabırsızlık", correct: false }, { id: "c", text: "Yorgunluk", correct: false }, { id: "d", text: "Uzaklık", correct: false }] },
    { id: 1123, type: "SELECT", question: "'Le stéréotype' ne demek?", options: [{ id: "a", text: "Kalıp yargı", correct: true }, { id: "b", text: "Yol tarifi", correct: false }, { id: "c", text: "İzin", correct: false }, { id: "d", text: "Şehir", correct: false }] },
    { id: 1124, type: "SELECT", question: "'Le choc culturel' ne demek?", options: [{ id: "a", text: "Kültür şoku", correct: true }, { id: "b", text: "Kültür dersi", correct: false }, { id: "c", text: "Kültür merkezi", correct: false }, { id: "d", text: "Kültür turu", correct: false }] },
    { id: 1125, type: "SELECT", question: "'La langue maternelle' ne demek?", options: [{ id: "a", text: "Ana dil", correct: true }, { id: "b", text: "Yabancı dil", correct: false }, { id: "c", text: "İş dili", correct: false }, { id: "d", text: "Sessiz dil", correct: false }] },
    { id: 1126, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La famille élargie", options: [{ id: "a", text: "Geniş aile", correct: true }, { id: "b", text: "Küçük aile", correct: false }, { id: "c", text: "Komşular", correct: false }, { id: "d", text: "Arkadaşlar", correct: false }] },
    { id: 1127, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le mode de vie", options: [{ id: "a", text: "Yaşam tarzı", correct: true }, { id: "b", text: "Yol tarifi", correct: false }, { id: "c", text: "Yemek tarifi", correct: false }, { id: "d", text: "Ulaşım", correct: false }] },
    { id: 1128, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les salutations", options: [{ id: "a", text: "Selamlaşmalar", correct: true }, { id: "b", text: "Davetler", correct: false }, { id: "c", text: "Seyahatler", correct: false }, { id: "d", text: "Kurallar", correct: false }] },
    { id: 1129, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut éviter les ___.", options: [{ id: "a", text: "stéréotypes", correct: true }, { id: "b", text: "stations", correct: false }] },
    { id: 1130, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ visuel est important.", options: [{ id: "a", text: "contact", correct: true }, { id: "b", text: "contrat", correct: false }] },
    { id: 1131, type: "SELECT", question: "'La ponctualité' ne demek?", options: [{ id: "a", text: "Dakiklik", correct: true }, { id: "b", text: "Yön", correct: false }, { id: "c", text: "Hız", correct: false }, { id: "d", text: "Sessizlik", correct: false }] },
    { id: 1132, type: "SELECT", question: "'La cuisine traditionnelle' ne demek?", options: [{ id: "a", text: "Geleneksel mutfak", correct: true }, { id: "b", text: "Hızlı yemek", correct: false }, { id: "c", text: "Okul kantini", correct: false }, { id: "d", text: "Günlük menü", correct: false }] },
    { id: 1133, type: "TRANSLATE", question: "Çevir:", hint: "Açık fikirlilik", correctAnswer: "L'ouverture d'esprit" },
    { id: 1134, type: "TRANSLATE", question: "Çevir:", hint: "Gelenekler", correctAnswer: "Les coutumes" },
    { id: 1135, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le respect des aînés", options: [{ id: "a", text: "Büyüklere saygı", correct: true }, { id: "b", text: "Gençlere saygı", correct: false }, { id: "c", text: "Öğrenciler", correct: false }, { id: "d", text: "Kurallar", correct: false }] },
    { id: 1136, type: "TRANSLATE", question: "Çevir:", hint: "Kültürel miras", correctAnswer: "Le patrimoine" },
    { id: 1137, type: "SELECT", question: "'Le dialecte' ne demek?", options: [{ id: "a", text: "Lehçe", correct: true }, { id: "b", text: "Tiyatro", correct: false }, { id: "c", text: "Davet", correct: false }, { id: "d", text: "Şef", correct: false }] },
    { id: 1138, type: "SELECT", question: "'Les valeurs' ne demek?", options: [{ id: "a", text: "Değerler", correct: true }, { id: "b", text: "Renkler", correct: false }, { id: "c", text: "Kıyafetler", correct: false }, { id: "d", text: "Binalar", correct: false }] },
    { id: 1139, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ locale est accueillante.", options: [{ id: "a", text: "communauté", correct: true }, { id: "b", text: "commande", correct: false }] },
    { id: 1140, type: "SELECT", question: "'S'adapter' ne demek?", options: [{ id: "a", text: "Uyum sağlamak", correct: true }, { id: "b", text: "Çıkmak", correct: false }, { id: "c", text: "Yemek yapmak", correct: false }, { id: "d", text: "Uyumak", correct: false }] }
];

const unit374Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1141, type: "SELECT", question: "Karşılaştırma yapmak için hangi yapı doğru?", options: [{ id: "a", text: "plus ... que", correct: true }, { id: "b", text: "plus ... de", correct: false }, { id: "c", text: "plus ... à", correct: false }, { id: "d", text: "plus ... pour", correct: false }] },
    { id: 1142, type: "SELECT", question: "'différent de' ne anlama gelir?", options: [{ id: "a", text: "...den farklı", correct: true }, { id: "b", text: "...e benzer", correct: false }, { id: "c", text: "... kadar", correct: false }, { id: "d", text: "... ile", correct: false }] },
    { id: 1143, type: "SELECT", question: "'tandis que' hangi anlamı verir?", options: [{ id: "a", text: "... iken", correct: true }, { id: "b", text: "çünkü", correct: false }, { id: "c", text: "sonra", correct: false }, { id: "d", text: "ancak", correct: false }] },
    { id: 1144, type: "SELECT", question: "'par contre' ne anlama gelir?", options: [{ id: "a", text: "buna karşılık", correct: true }, { id: "b", text: "aynı şekilde", correct: false }, { id: "c", text: "o zaman", correct: false }, { id: "d", text: "bu yüzden", correct: false }] },
    { id: 1145, type: "FILL_BLANK", question: "Doldur:", sentence: "En France, on dîne tôt, ___ en Espagne on dîne tard.", options: [{ id: "a", text: "tandis qu'", correct: true }, { id: "b", text: "parce qu'", correct: false }] },
    { id: 1146, type: "FILL_BLANK", question: "Doldur:", sentence: "Nos habitudes sont ___ des vôtres.", options: [{ id: "a", text: "différentes", correct: true }, { id: "b", text: "différents", correct: false }] },
    { id: 1147, type: "TRANSLATE", question: "Çevir:", hint: "Bana göre nezaket çok önemlidir.", correctAnswer: "À mon avis, la politesse est essentielle." },
    { id: 1148, type: "TRANSLATE", question: "Çevir:", hint: "Buna rağmen insanlarla tanışmayı seviyorum.", correctAnswer: "Pourtant, j'aime rencontrer des gens." },
    { id: 1149, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il me semble que les salutations sont différentes ici.", options: [{ id: "a", text: "Selamlaşmalar burada farklı gibi geliyor.", correct: true }, { id: "b", text: "Selamlaşmalar burada aynıdır.", correct: false }, { id: "c", text: "Selamlaşmalar hiç yoktur.", correct: false }, { id: "d", text: "Selamlaşmalar önemsizdir.", correct: false }] },
    { id: 1150, type: "SELECT", question: "'Je trouve que' ne anlama gelir?", options: [{ id: "a", text: "Bence", correct: true }, { id: "b", text: "Bilmiyorum", correct: false }, { id: "c", text: "Sanırım", correct: false }, { id: "d", text: "İnanmıyorum", correct: false }] },
    { id: 1151, type: "SELECT", question: "Konuşma: 'Dans mon pays, on dîne assez tôt.' ne demek?", options: [{ id: "a", text: "Benim ülkemde akşam yemeği oldukça erken yenir.", correct: true }, { id: "b", text: "Benim ülkemde kahvaltı geç yenir.", correct: false }, { id: "c", text: "Benim ülkemde hiç yemek yenmez.", correct: false }, { id: "d", text: "Benim ülkemde herkes dışarıda yer.", correct: false }] },
    { id: 1152, type: "SELECT", question: "Konuşma: 'J'évite les stéréotypes.' ne demek?", options: [{ id: "a", text: "Kalıp yargılardan kaçınırım.", correct: true }, { id: "b", text: "Kalıp yargıları severim.", correct: false }, { id: "c", text: "Kalıp yargıları paylaşırım.", correct: false }, { id: "d", text: "Kalıp yargıları unuturum.", correct: false }] },
    { id: 1153, type: "TRANSLATE", question: "Çevir:", hint: "Farklılıklara karşı açık fikirli olmalıyız.", correctAnswer: "Nous devons garder l'esprit ouvert face aux différences." },
    { id: 1154, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ que la ponctualité est importante.", options: [{ id: "a", text: "me semble", correct: true }, { id: "b", text: "me ressemble", correct: false }] },
    { id: 1155, type: "SELECT", question: "'pareil à' ne demek?", options: [{ id: "a", text: "...e benzer", correct: true }, { id: "b", text: "...den farklı", correct: false }, { id: "c", text: "... kadar", correct: false }, { id: "d", text: "... için", correct: false }] },
    { id: 1156, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le dialogue interculturel est essentiel", options: [{ id: "a", text: "Kültürler arası diyalog çok önemlidir.", correct: true }, { id: "b", text: "Kültürler arası diyalog gereksizdir.", correct: false }, { id: "c", text: "Kültürler arası diyalog zordur.", correct: false }, { id: "d", text: "Kültürler arası diyalog yasaktır.", correct: false }] },
    { id: 1157, type: "TRANSLATE", question: "Çevir:", hint: "Bu kültür bizimkine benzer.", correctAnswer: "Cette culture est pareille à la nôtre." },
    { id: 1158, type: "SELECT", question: "Karşıtlık için hangi bağlaç doğrudur?", options: [{ id: "a", text: "tandis que", correct: true }, { id: "b", text: "parce que", correct: false }, { id: "c", text: "pour", correct: false }, { id: "d", text: "si", correct: false }] },
    { id: 1159, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis timide, ___ j'aime rencontrer des gens.", options: [{ id: "a", text: "pourtant", correct: true }, { id: "b", text: "donc", correct: false }] },
    { id: 1160, type: "SELECT", question: "Hangi ifade görüş bildirir?", options: [{ id: "a", text: "À mon avis", correct: true }, { id: "b", text: "Il y a", correct: false }, { id: "c", text: "À côté de", correct: false }, { id: "d", text: "En face de", correct: false }] }
];

const unit374Quiz3: Question[] = [
    // Quiz 3: Reading comprehension
    { id: 1161, type: "SELECT", question: "Où Marie passe-t-elle un semestre ?", options: [{ id: "a", text: "En Turquie", correct: true }, { id: "b", text: "En France", correct: false }, { id: "c", text: "En Grèce", correct: false }, { id: "d", text: "Au Maroc", correct: false }] },
    { id: 1162, type: "SELECT", question: "Qui est présent au dîner ?", options: [{ id: "a", text: "La famille élargie", correct: true }, { id: "b", text: "Seulement les parents", correct: false }, { id: "c", text: "Les voisins", correct: false }, { id: "d", text: "Ses collègues", correct: false }] },
    { id: 1163, type: "SELECT", question: "Comment Marie trouve-t-elle l'habitude de partager les plats ?", options: [{ id: "a", text: "Chaleureuse", correct: true }, { id: "b", text: "Froide", correct: false }, { id: "c", text: "Bizarre", correct: false }, { id: "d", text: "Inutile", correct: false }] },
    { id: 1164, type: "SELECT", question: "Que doit-elle faire par politesse ?", options: [{ id: "a", text: "Accepter un peu de chaque plat", correct: true }, { id: "b", text: "Refuser les plats", correct: false }, { id: "c", text: "Partir tôt", correct: false }, { id: "d", text: "Rester silencieuse", correct: false }] },
    { id: 1165, type: "SELECT", question: "Que boivent-ils après le dîner ?", options: [{ id: "a", text: "Du thé", correct: true }, { id: "b", text: "Du lait", correct: false }, { id: "c", text: "Du soda", correct: false }, { id: "d", text: "Du jus", correct: false }] },
    { id: 1166, type: "SELECT", question: "Quels sujets sont mentionnés ?", options: [{ id: "a", text: "La vie quotidienne, les études, les traditions", correct: true }, { id: "b", text: "La météo seulement", correct: false }, { id: "c", text: "Le sport uniquement", correct: false }, { id: "d", text: "La politique uniquement", correct: false }] },
    { id: 1167, type: "SELECT", question: "Comment sont les dîners en France selon Marie ?", options: [{ id: "a", text: "Plus courts", correct: true }, { id: "b", text: "Plus longs", correct: false }, { id: "c", text: "Plus bruyants", correct: false }, { id: "d", text: "Plus tardifs", correct: false }] },
    { id: 1168, type: "SELECT", question: "Que comprend-elle sur les cultures ?", options: [{ id: "a", text: "Chaque culture a ses valeurs et ses codes", correct: true }, { id: "b", text: "Il n'y a qu'une seule manière de vivre", correct: false }, { id: "c", text: "Toutes les cultures sont identiques", correct: false }, { id: "d", text: "Les cultures n'ont pas de règles", correct: false }] },
    { id: 1169, type: "SELECT", question: "Quel mot du texte signifie 'samimi/sıcak' ?", options: [{ id: "a", text: "Chaleureuse", correct: true }, { id: "b", text: "Silencieuse", correct: false }, { id: "c", text: "Rapide", correct: false }, { id: "d", text: "Lointaine", correct: false }] },
    { id: 1170, type: "SELECT", question: "Comment se sent Marie à la fin ?", options: [{ id: "a", text: "Ouverte d'esprit", correct: true }, { id: "b", text: "Fermée", correct: false }, { id: "c", text: "En colère", correct: false }, { id: "d", text: "Indifférente", correct: false }] },
    { id: 1171, type: "TRANSLATE", question: "Çevir:", hint: "Geniş aile", correctAnswer: "La famille élargie" },
    { id: 1172, type: "TRANSLATE", question: "Çevir:", hint: "Teşekkür etmek", correctAnswer: "Remercier" },
    { id: 1173, type: "TRANSLATE", question: "Çevir:", hint: "Karşılaştırmak", correctAnswer: "Comparer" },
    { id: 1174, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ouvert d'esprit", options: [{ id: "a", text: "Açık fikirli", correct: true }, { id: "b", text: "Kapalı kapı", correct: false }, { id: "c", text: "Kısa yol", correct: false }, { id: "d", text: "Sessiz", correct: false }] },
    { id: 1175, type: "FILL_BLANK", question: "Doldur:", sentence: "La famille ___ est présente.", options: [{ id: "a", text: "élargie", correct: true }, { id: "b", text: "élargir", correct: false }] },
    { id: 1176, type: "SELECT", question: "'Chaleureux' ne demek?", options: [{ id: "a", text: "Sıcak / Samimi", correct: true }, { id: "b", text: "Soğuk", correct: false }, { id: "c", text: "Sessiz", correct: false }, { id: "d", text: "Yavaş", correct: false }] },
    { id: 1177, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je remercie plusieurs fois", options: [{ id: "a", text: "Birkaç kez teşekkür ederim", correct: true }, { id: "b", text: "Hiç teşekkür etmem", correct: false }, { id: "c", text: "Birkaç kez konuşurum", correct: false }, { id: "d", text: "Birkaç kez uyurum", correct: false }] },
    { id: 1178, type: "FILL_BLANK", question: "Doldur:", sentence: "Les repas sont souvent plus ___ en France.", options: [{ id: "a", text: "courts", correct: true }, { id: "b", text: "longs", correct: false }] },
    { id: 1179, type: "TRANSLATE", question: "Çevir:", hint: "Bu alışkanlık çok sıcaktı.", correctAnswer: "Cette habitude était très chaleureuse." },
    { id: 1180, type: "SELECT", question: "Quelle boisson est mentionnée après le dîner ?", options: [{ id: "a", text: "Le thé", correct: true }, { id: "b", text: "Le café", correct: false }, { id: "c", text: "Le lait", correct: false }, { id: "d", text: "Le jus", correct: false }] }
];

const unit374Quiz4: Question[] = [
    // Quiz 4: Mixed review
    { id: 1181, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ culturelle est une richesse.", options: [{ id: "a", text: "diversité", correct: true }, { id: "b", text: "division", correct: false }] },
    { id: 1182, type: "SELECT", question: "'La hiérarchie' ne demek?", options: [{ id: "a", text: "Hiyerarşi", correct: true }, { id: "b", text: "Havaalanı", correct: false }, { id: "c", text: "Hareket", correct: false }, { id: "d", text: "Hastane", correct: false }] },
    { id: 1183, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La ponctualité", options: [{ id: "a", text: "Dakiklik", correct: true }, { id: "b", text: "Plan", correct: false }, { id: "c", text: "Kültür", correct: false }, { id: "d", text: "Kıyafet", correct: false }] },
    { id: 1184, type: "TRANSLATE", question: "Çevir:", hint: "Bu kültür bizimkinden farklıdır.", correctAnswer: "Cette culture est différente de la nôtre." },
    { id: 1185, type: "SELECT", question: "'Le contact visuel' ne demek?", options: [{ id: "a", text: "Göz teması", correct: true }, { id: "b", text: "Gözlük", correct: false }, { id: "c", text: "Kapı", correct: false }, { id: "d", text: "El hareketi", correct: false }] },
    { id: 1186, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est important d'avoir l'___ ouvert.", options: [{ id: "a", text: "esprit", correct: true }, { id: "b", text: "escalier", correct: false }] },
    { id: 1187, type: "SELECT", question: "'Les vêtements traditionnels' ne demek?", options: [{ id: "a", text: "Geleneksel kıyafetler", correct: true }, { id: "b", text: "Günlük kıyafetler", correct: false }, { id: "c", text: "Spor kıyafetleri", correct: false }, { id: "d", text: "Kışlık kıyafetler", correct: false }] },
    { id: 1188, type: "TRANSLATE", question: "Çevir:", hint: "Karşılıklı saygı iletişimi kolaylaştırır.", correctAnswer: "Le respect mutuel facilite la communication." },
    { id: 1189, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les salutations varient selon la culture", options: [{ id: "a", text: "Selamlaşmalar kültüre göre değişir.", correct: true }, { id: "b", text: "Selamlaşmalar her yerde aynıdır.", correct: false }, { id: "c", text: "Selamlaşmalar gereksizdir.", correct: false }, { id: "d", text: "Selamlaşmalar yasaktır.", correct: false }] },
    { id: 1190, type: "SELECT", question: "'Les croyances' ne demek?", options: [{ id: "a", text: "İnançlar", correct: true }, { id: "b", text: "Kıyafetler", correct: false }, { id: "c", text: "Saatler", correct: false }, { id: "d", text: "Hediyeler", correct: false }] },
    { id: 1191, type: "TRANSLATE", question: "Çevir:", hint: "Göz teması her zaman doğrudan değildir.", correctAnswer: "Le contact visuel n'est pas toujours direct." },
    { id: 1192, type: "FILL_BLANK", question: "Doldur:", sentence: "Le respect des ___ est une règle sociale.", options: [{ id: "a", text: "aînés", correct: true }, { id: "b", text: "amis", correct: false }] },
    { id: 1193, type: "SELECT", question: "Hangisi karşıtlık bağlacıdır?", options: [{ id: "a", text: "en revanche", correct: true }, { id: "b", text: "parce que", correct: false }, { id: "c", text: "si", correct: false }, { id: "d", text: "pour", correct: false }] },
    { id: 1194, type: "TRANSLATE", question: "Çevir:", hint: "Bence bu gelenek çok güzel.", correctAnswer: "Je trouve que cette tradition est très belle." },
    { id: 1195, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le mode de vie est différent ici", options: [{ id: "a", text: "Yaşam tarzı burada farklıdır.", correct: true }, { id: "b", text: "Yaşam tarzı burada aynıdır.", correct: false }, { id: "c", text: "Yaşam tarzı burada yoktur.", correct: false }, { id: "d", text: "Yaşam tarzı burada yasaktır.", correct: false }] },
    { id: 1196, type: "SELECT", question: "'Partager' ne demek?", options: [{ id: "a", text: "Paylaşmak", correct: true }, { id: "b", text: "Kaybetmek", correct: false }, { id: "c", text: "Saklamak", correct: false }, { id: "d", text: "Bırakmak", correct: false }] },
    { id: 1197, type: "FILL_BLANK", question: "Doldur:", sentence: "On peut ___ deux cultures.", options: [{ id: "a", text: "comparer", correct: true }, { id: "b", text: "comprendre", correct: false }] },
    { id: 1198, type: "SELECT", question: "'Ouvert d'esprit' ne demek?", options: [{ id: "a", text: "Açık fikirli", correct: true }, { id: "b", text: "Kapalı kapı", correct: false }, { id: "c", text: "Açık renk", correct: false }, { id: "d", text: "Sakin", correct: false }] },
    { id: 1199, type: "TRANSLATE", question: "Çevir:", hint: "Kalıp yargılardan kaçınmak gerekir.", correctAnswer: "Il faut éviter les stéréotypes." },
    { id: 1200, type: "SELECT", question: "Hangi ifade görüş bildirir?", options: [{ id: "a", text: "À mon avis", correct: true }, { id: "b", text: "Il y a", correct: false }, { id: "c", text: "Avec", correct: false }, { id: "d", text: "Sous", correct: false }] }
];

// ===== UNIT 375 HARDCODED QUIZZES =====
const unit375Quiz1: Question[] = [
    // Quiz 1: Vocab & Basics
    { id: 1201, type: "SELECT", question: "'La peinture' ne demek?", options: [{ id: "a", text: "Resim (boyama)", correct: true }, { id: "b", text: "Şiir", correct: false }, { id: "c", text: "Müze", correct: false }, { id: "d", text: "Kitap", correct: false }] },
    { id: 1202, type: "SELECT", question: "'Le roman' ne demek?", options: [{ id: "a", text: "Roman", correct: true }, { id: "b", text: "Tiyatro", correct: false }, { id: "c", text: "Galeri", correct: false }, { id: "d", text: "Bölüm", correct: false }] },
    { id: 1203, type: "SELECT", question: "'Le tableau' ne demek?", options: [{ id: "a", text: "Tablo", correct: true }, { id: "b", text: "Sahne", correct: false }, { id: "c", text: "Olay örgüsü", correct: false }, { id: "d", text: "Kütüphane", correct: false }] },
    { id: 1204, type: "SELECT", question: "'La sculpture' ne demek?", options: [{ id: "a", text: "Heykel", correct: true }, { id: "b", text: "Resim", correct: false }, { id: "c", text: "Şiir", correct: false }, { id: "d", text: "Karakter", correct: false }] },
    { id: 1205, type: "SELECT", question: "'Le musée' ne demek?", options: [{ id: "a", text: "Müze", correct: true }, { id: "b", text: "Pazar", correct: false }, { id: "c", text: "Kafe", correct: false }, { id: "d", text: "Okul", correct: false }] },
    { id: 1206, type: "SELECT", question: "'Le chef-d'œuvre' ne demek?", options: [{ id: "a", text: "Başyapıt", correct: true }, { id: "b", text: "Başlık", correct: false }, { id: "c", text: "Yayıncı", correct: false }, { id: "d", text: "Eleştiri", correct: false }] },
    { id: 1207, type: "SELECT", question: "'La bibliothèque' ne demek?", options: [{ id: "a", text: "Kütüphane", correct: true }, { id: "b", text: "Kitapçı", correct: false }, { id: "c", text: "Sahne", correct: false }, { id: "d", text: "Roman", correct: false }] },
    { id: 1208, type: "SELECT", question: "'Le personnage' ne demek?", options: [{ id: "a", text: "Karakter", correct: true }, { id: "b", text: "Yazar", correct: false }, { id: "c", text: "Sahne", correct: false }, { id: "d", text: "Müze", correct: false }] },
    { id: 1209, type: "SELECT", question: "'L'inspiration' ne demek?", options: [{ id: "a", text: "İlham", correct: true }, { id: "b", text: "Sahne", correct: false }, { id: "c", text: "Yayıncı", correct: false }, { id: "d", text: "Stil", correct: false }] },
    { id: 1210, type: "SELECT", question: "'L'éditeur' ne demek?", options: [{ id: "a", text: "Yayıncı", correct: true }, { id: "b", text: "Oyuncu", correct: false }, { id: "c", text: "Okuyucu", correct: false }, { id: "d", text: "Şair", correct: false }] },
    { id: 1211, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La galerie", options: [{ id: "a", text: "Galeri", correct: true }, { id: "b", text: "Sergi", correct: false }, { id: "c", text: "Sahne", correct: false }, { id: "d", text: "Kütüphane", correct: false }] },
    { id: 1212, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le poème", options: [{ id: "a", text: "Şiir", correct: true }, { id: "b", text: "Roman", correct: false }, { id: "c", text: "Tablo", correct: false }, { id: "d", text: "Tiyatro", correct: false }] },
    { id: 1213, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le théâtre", options: [{ id: "a", text: "Tiyatro", correct: true }, { id: "b", text: "Müze", correct: false }, { id: "c", text: "Galeri", correct: false }, { id: "d", text: "Şiir", correct: false }] },
    { id: 1214, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'auteur", options: [{ id: "a", text: "Yazar (eser sahibi)", correct: true }, { id: "b", text: "Okur", correct: false }, { id: "c", text: "Oyuncu", correct: false }, { id: "d", text: "Editör", correct: false }] },
    { id: 1215, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'intrigue", options: [{ id: "a", text: "Olay örgüsü", correct: true }, { id: "b", text: "Başlık", correct: false }, { id: "c", text: "Bölüm", correct: false }, { id: "d", text: "Karakter", correct: false }] },
    { id: 1216, type: "FILL_BLANK", question: "Doldur:", sentence: "Je lis un ___ chaque soir.", options: [{ id: "a", text: "roman", correct: true }, { id: "b", text: "poème", correct: false }] },
    { id: 1217, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est complet ce soir.", options: [{ id: "a", text: "théâtre", correct: true }, { id: "b", text: "chapitre", correct: false }] },
    { id: 1218, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce ___ est exposé au musée.", options: [{ id: "a", text: "tableau", correct: true }, { id: "b", text: "chapitre", correct: false }] },
    { id: 1219, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ publie de nouveaux auteurs.", options: [{ id: "a", text: "éditeur", correct: true }, { id: "b", text: "poète", correct: false }] },
    { id: 1220, type: "FILL_BLANK", question: "Doldur:", sentence: "Il peint sur une grande ___.", options: [{ id: "a", text: "toile", correct: true }, { id: "b", text: "scène", correct: false }] }
];

const unit375Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1221, type: "SELECT", question: "Imparfait genellikle hangi amaçla kullanılır?", options: [{ id: "a", text: "Arka plan / alışkanlık anlatımı", correct: true }, { id: "b", text: "Tamamlanmış tek olay", correct: false }, { id: "c", text: "Gelecek planı", correct: false }, { id: "d", text: "Emir vermek", correct: false }] },
    { id: 1222, type: "SELECT", question: "Passé composé ne için kullanılır?", options: [{ id: "a", text: "Tamamlanmış olay", correct: true }, { id: "b", text: "Süreklilik", correct: false }, { id: "c", text: "Genel kural", correct: false }, { id: "d", text: "Koşul", correct: false }] },
    { id: 1223, type: "FILL_BLANK", question: "Doldur:", sentence: "Lucie ___ un roman quand son amie est arrivée.", options: [{ id: "a", text: "lisait", correct: true }, { id: "b", text: "a lu", correct: false }] },
    { id: 1224, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ l'exposition hier soir.", options: [{ id: "a", text: "avons visité", correct: true }, { id: "b", text: "visitions", correct: false }] },
    { id: 1225, type: "SELECT", question: "'dont' hangi yapının yerini alır?", options: [{ id: "a", text: "de + isim", correct: true }, { id: "b", text: "à + isim", correct: false }, { id: "c", text: "pour + isim", correct: false }, { id: "d", text: "avec + isim", correct: false }] },
    { id: 1226, type: "SELECT", question: "Hangi cümlede 'dont' doğru kullanılmıştır?", options: [{ id: "a", text: "C'est l'auteur dont je parle.", correct: true }, { id: "b", text: "C'est l'auteur que je parle.", correct: false }, { id: "c", text: "C'est l'auteur où je parle.", correct: false }, { id: "d", text: "C'est l'auteur qui je parle.", correct: false }] },
    { id: 1227, type: "SELECT", question: "'À mon avis' ne demek?", options: [{ id: "a", text: "Bana göre", correct: true }, { id: "b", text: "Belki", correct: false }, { id: "c", text: "Asla", correct: false }, { id: "d", text: "Ne zaman", correct: false }] },
    { id: 1228, type: "SELECT", question: "'Je trouve que' ifadesi ne bildirir?", options: [{ id: "a", text: "Görüş / fikir", correct: true }, { id: "b", text: "Emir", correct: false }, { id: "c", text: "Şart", correct: false }, { id: "d", text: "Zaman", correct: false }] },
    { id: 1229, type: "TRANSLATE", question: "Çevir:", hint: "Bana göre bu roman çok sürükleyici.", correctAnswer: "À mon avis, ce roman est très captivant." },
    { id: 1230, type: "TRANSLATE", question: "Çevir:", hint: "Oyunu biraz uzun buldum.", correctAnswer: "J'ai trouvé la pièce plutôt longue." },
    { id: 1231, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quel est ton genre de livre préféré ?", options: [{ id: "a", text: "En sevdiğin kitap türü nedir?", correct: true }, { id: "b", text: "Hangi müzeye gidiyorsun?", correct: false }, { id: "c", text: "Bu roman ne zaman çıkacak?", correct: false }, { id: "d", text: "Hangi filmi izliyorsun?", correct: false }] },
    { id: 1232, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'adore les romans historiques.", options: [{ id: "a", text: "Tarihi romanları çok severim.", correct: true }, { id: "b", text: "Tarihi filmleri sevmem.", correct: false }, { id: "c", text: "Roman okumayı sevmiyorum.", correct: false }, { id: "d", text: "Tarih dersim var.", correct: false }] },
    { id: 1233, type: "SELECT", question: "Konuşma: 'Tu préfères lire ou regarder une pièce de théâtre ?' ne demek?", options: [{ id: "a", text: "Okumayı mı yoksa bir tiyatro oyunu izlemeyi mi tercih edersin?", correct: true }, { id: "b", text: "Tiyatroya ne zaman gidiyoruz?", correct: false }, { id: "c", text: "Bu oyunu kim yazdı?", correct: false }, { id: "d", text: "Müzeyi mi yoksa galeriyi mi tercih edersin?", correct: false }] },
    { id: 1234, type: "SELECT", question: "Konuşma: 'Les voyages et la musique m'inspirent.' ne demek?", options: [{ id: "a", text: "Seyahatler ve müzik bana ilham verir.", correct: true }, { id: "b", text: "Müzik dinlemeyi bırakıyorum.", correct: false }, { id: "c", text: "Seyahat etmekten nefret ederim.", correct: false }, { id: "d", text: "Müzik beni üzmez.", correct: false }] },
    { id: 1235, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un roman ___ le style est unique.", options: [{ id: "a", text: "dont", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 1236, type: "FILL_BLANK", question: "Doldur:", sentence: "Hier, nous ___ au musée d'art.", options: [{ id: "a", text: "sommes allés", correct: true }, { id: "b", text: "allions", correct: false }] },
    { id: 1237, type: "TRANSLATE", question: "Çevir:", hint: "Bu tabloyu çok beğendim.", correctAnswer: "J'ai beaucoup aimé ce tableau." },
    { id: 1238, type: "TRANSLATE", question: "Çevir:", hint: "Bu şiir bana çocukluğumu hatırlatıyor.", correctAnswer: "Ce poème me rappelle mon enfance." },
    { id: 1239, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La critique a été positive.", options: [{ id: "a", text: "Eleştiri olumlu oldu.", correct: true }, { id: "b", text: "Eleştiri iptal edildi.", correct: false }, { id: "c", text: "Eleştiri çok uzun.", correct: false }, { id: "d", text: "Eleştiri yazılmadı.", correct: false }] },
    { id: 1240, type: "SELECT", question: "Hangi zarflar görüşü yumuşatır?", options: [{ id: "a", text: "plutôt, assez, vraiment", correct: true }, { id: "b", text: "hier, demain, aujourd'hui", correct: false }, { id: "c", text: "vite, lentement", correct: false }, { id: "d", text: "jamais, plus", correct: false }] }
];

const unit375Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension & Phrases
    { id: 1241, type: "SELECT", question: "Où Lucie se rend-elle ?", options: [{ id: "a", text: "Au festival du livre et des arts", correct: true }, { id: "b", text: "À la bibliothèque", correct: false }, { id: "c", text: "Au cinéma", correct: false }, { id: "d", text: "Au stade", correct: false }] },
    { id: 1242, type: "SELECT", question: "Avec qui Lucie va-t-elle au festival ?", options: [{ id: "a", text: "Avec sa mère", correct: false }, { id: "b", text: "Avec sa meilleure amie Nora", correct: true }, { id: "c", text: "Avec son professeur", correct: false }, { id: "d", text: "Avec ses collègues", correct: false }] },
    { id: 1243, type: "SELECT", question: "Que visitent-elles le matin ?", options: [{ id: "a", text: "Une exposition d'illustrations", correct: true }, { id: "b", text: "Un marché", correct: false }, { id: "c", text: "Une salle de concert", correct: false }, { id: "d", text: "Un cinéma", correct: false }] },
    { id: 1244, type: "SELECT", question: "Que fait l'illustrateur ?", options: [{ id: "a", text: "Il explique comment il crée ses personnages", correct: true }, { id: "b", text: "Il vend des billets", correct: false }, { id: "c", text: "Il répare des livres", correct: false }, { id: "d", text: "Il joue de la musique", correct: false }] },
    { id: 1245, type: "SELECT", question: "À quelle activité Lucie assiste-t-elle à midi ?", options: [{ id: "a", text: "Une rencontre avec une autrice", correct: true }, { id: "b", text: "Un match de football", correct: false }, { id: "c", text: "Un cours de danse", correct: false }, { id: "d", text: "Un atelier de cuisine", correct: false }] },
    { id: 1246, type: "SELECT", question: "Qu'achète-t-elle ?", options: [{ id: "a", text: "Un tableau", correct: false }, { id: "b", text: "Un nouveau roman", correct: true }, { id: "c", text: "Un ticket de bus", correct: false }, { id: "d", text: "Un magazine", correct: false }] },
    { id: 1247, type: "SELECT", question: "Que reçoit-elle après l'achat ?", options: [{ id: "a", text: "Une dédicace", correct: true }, { id: "b", text: "Un cadeau", correct: false }, { id: "c", text: "Un billet gratuit", correct: false }, { id: "d", text: "Une affiche", correct: false }] },
    { id: 1248, type: "SELECT", question: "Qui lit un extrait sur scène ?", options: [{ id: "a", text: "Un comédien", correct: true }, { id: "b", text: "Un serveur", correct: false }, { id: "c", text: "Un journaliste", correct: false }, { id: "d", text: "Un musicien", correct: false }] },
    { id: 1249, type: "SELECT", question: "Quel spectacle voient-elles le soir ?", options: [{ id: "a", text: "Une pièce de théâtre inspirée du roman", correct: true }, { id: "b", text: "Un concert de rock", correct: false }, { id: "c", text: "Un film d'action", correct: false }, { id: "d", text: "Un reportage", correct: false }] },
    { id: 1250, type: "SELECT", question: "Que fait Lucie ensuite ?", options: [{ id: "a", text: "Elle écrit une critique sur son blog", correct: true }, { id: "b", text: "Elle s'endort immédiatement", correct: false }, { id: "c", text: "Elle prend le train", correct: false }, { id: "d", text: "Elle quitte la ville", correct: false }] },
    { id: 1251, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le musée propose une visite guidée.", options: [{ id: "a", text: "Müze rehberli bir tur sunuyor.", correct: true }, { id: "b", text: "Müze bugün kapalı.", correct: false }, { id: "c", text: "Rehber gelmedi.", correct: false }, { id: "d", text: "Müze ücretsiz değil.", correct: false }] },
    { id: 1252, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le personnage principal change à la fin.", options: [{ id: "a", text: "Baş karakter sonunda değişir.", correct: true }, { id: "b", text: "Baş karakter hiç değişmez.", correct: false }, { id: "c", text: "Karakter sahnede değildir.", correct: false }, { id: "d", text: "Hikaye bitmiyor.", correct: false }] },
    { id: 1253, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le public a applaudi debout.", options: [{ id: "a", text: "İzleyici ayakta alkışladı.", correct: true }, { id: "b", text: "İzleyici hiç alkışlamadı.", correct: false }, { id: "c", text: "Sahne boş kaldı.", correct: false }, { id: "d", text: "Biletler satılmadı.", correct: false }] },
    { id: 1254, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Son style d'écriture est très simple.", options: [{ id: "a", text: "Yazı tarzı çok sade.", correct: true }, { id: "b", text: "Yazı tarzı çok karışık.", correct: false }, { id: "c", text: "Yazmayı sevmiyor.", correct: false }, { id: "d", text: "Kitabı uzun.", correct: false }] },
    { id: 1255, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cette peinture est inspirée de la nature.", options: [{ id: "a", text: "Bu resim doğadan ilham almıştır.", correct: true }, { id: "b", text: "Bu resim doğayı yok eder.", correct: false }, { id: "c", text: "Bu resim çok eski değil.", correct: false }, { id: "d", text: "Bu resim satılık değil.", correct: false }] },
    { id: 1256, type: "TRANSLATE", question: "Çevir:", hint: "Başyapıt", correctAnswer: "Le chef-d'œuvre" },
    { id: 1257, type: "TRANSLATE", question: "Çevir:", hint: "Kütüphane", correctAnswer: "La bibliothèque" },
    { id: 1258, type: "TRANSLATE", question: "Çevir:", hint: "Eleştiri", correctAnswer: "La critique" },
    { id: 1259, type: "TRANSLATE", question: "Çevir:", hint: "Sahne", correctAnswer: "La scène" },
    { id: 1260, type: "TRANSLATE", question: "Çevir:", hint: "Yaratıcılık", correctAnswer: "La créativité" }
];

const unit375Quiz4: Question[] = [
    // Quiz 4: Mixed Challenge
    { id: 1261, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ applaudit longtemps.", options: [{ id: "a", text: "public", correct: true }, { id: "b", text: "poète", correct: false }] },
    { id: 1262, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est prête pour la pièce.", options: [{ id: "a", text: "scène", correct: true }, { id: "b", text: "galerie", correct: false }] },
    { id: 1263, type: "FILL_BLANK", question: "Doldur:", sentence: "Je lis un ___ policier.", options: [{ id: "a", text: "roman", correct: true }, { id: "b", text: "poème", correct: false }] },
    { id: 1264, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ publie de nouveaux auteurs.", options: [{ id: "a", text: "éditeur", correct: true }, { id: "b", text: "auteur", correct: false }] },
    { id: 1265, type: "FILL_BLANK", question: "Doldur:", sentence: "Cette ___ est en marbre.", options: [{ id: "a", text: "sculpture", correct: true }, { id: "b", text: "peinture", correct: false }] },
    { id: 1266, type: "SELECT", question: "'L'intrigue' ne demek?", options: [{ id: "a", text: "Olay örgüsü", correct: true }, { id: "b", text: "Sergi", correct: false }, { id: "c", text: "Yazar", correct: false }, { id: "d", text: "Stil", correct: false }] },
    { id: 1267, type: "SELECT", question: "'Le chapitre' ne demek?", options: [{ id: "a", text: "Bölüm", correct: true }, { id: "b", text: "Kütüphane", correct: false }, { id: "c", text: "Tablo", correct: false }, { id: "d", text: "Karakter", correct: false }] },
    { id: 1268, type: "SELECT", question: "'La galerie' ne demek?", options: [{ id: "a", text: "Galeri", correct: true }, { id: "b", text: "Sahne", correct: false }, { id: "c", text: "Eleştiri", correct: false }, { id: "d", text: "Oyun", correct: false }] },
    { id: 1269, type: "SELECT", question: "'Le poète' ne demek?", options: [{ id: "a", text: "Şair", correct: true }, { id: "b", text: "Yayıncı", correct: false }, { id: "c", text: "Okur", correct: false }, { id: "d", text: "Oyuncu", correct: false }] },
    { id: 1270, type: "SELECT", question: "'Le style' ne demek?", options: [{ id: "a", text: "Stil / Üslup", correct: true }, { id: "b", text: "Sahne", correct: false }, { id: "c", text: "Kütüphane", correct: false }, { id: "d", text: "Roman", correct: false }] },
    { id: 1271, type: "TRANSLATE", question: "Çevir:", hint: "Müzede yeni bir sergi var.", correctAnswer: "Il y a une nouvelle exposition au musée." },
    { id: 1272, type: "TRANSLATE", question: "Çevir:", hint: "Yazar yeni kitabını imzalıyor.", correctAnswer: "L'écrivain signe son nouveau livre." },
    { id: 1273, type: "TRANSLATE", question: "Çevir:", hint: "Bu eser bir başyapıt.", correctAnswer: "Cette œuvre est un chef-d'œuvre." },
    { id: 1274, type: "TRANSLATE", question: "Çevir:", hint: "Okumayı tercih ederim.", correctAnswer: "Je préfère lire." },
    { id: 1275, type: "TRANSLATE", question: "Çevir:", hint: "Bu romanın karakterleri çok ilginç.", correctAnswer: "Les personnages de ce roman sont très intéressants." },
    { id: 1276, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le chef-d'œuvre", options: [{ id: "a", text: "Başyapıt", correct: true }, { id: "b", text: "Eleştiri", correct: false }, { id: "c", text: "Sergi", correct: false }, { id: "d", text: "Sahne", correct: false }] },
    { id: 1277, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La bibliothèque", options: [{ id: "a", text: "Kütüphane", correct: true }, { id: "b", text: "Yayıncı", correct: false }, { id: "c", text: "Şiir", correct: false }, { id: "d", text: "Sahne", correct: false }] },
    { id: 1278, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le théâtre", options: [{ id: "a", text: "Tiyatro", correct: true }, { id: "b", text: "Müze", correct: false }, { id: "c", text: "Galeri", correct: false }, { id: "d", text: "Roman", correct: false }] },
    { id: 1279, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le poème", options: [{ id: "a", text: "Şiir", correct: true }, { id: "b", text: "Tablo", correct: false }, { id: "c", text: "Kütüphane", correct: false }, { id: "d", text: "Müze", correct: false }] },
    { id: 1280, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'inspiration", options: [{ id: "a", text: "İlham", correct: true }, { id: "b", text: "Olay örgüsü", correct: false }, { id: "c", text: "Eleştiri", correct: false }, { id: "d", text: "Yayıncı", correct: false }] }
];

// ===== UNIT 376 HARDCODED QUIZZES =====
const unit376Quiz1: Question[] = [
    // Quiz 1: Vocab & Basics
    { id: 1281, type: "SELECT", question: "'L'histoire' ne demek?", options: [{ id: "a", text: "Tarih", correct: true }, { id: "b", text: "Hikaye", correct: false }, { id: "c", text: "Harita", correct: false }, { id: "d", text: "Sınav", correct: false }] },
    { id: 1282, type: "SELECT", question: "'La guerre' ne demek?", options: [{ id: "a", text: "Savaş", correct: true }, { id: "b", text: "Barış", correct: false }, { id: "c", text: "Zafer", correct: false }, { id: "d", text: "Kral", correct: false }] },
    { id: 1283, type: "SELECT", question: "'La paix' ne demek?", options: [{ id: "a", text: "Barış", correct: true }, { id: "b", text: "Savaş", correct: false }, { id: "c", text: "Arşiv", correct: false }, { id: "d", text: "Yüzyıl", correct: false }] },
    { id: 1284, type: "SELECT", question: "'La bataille' ne demek?", options: [{ id: "a", text: "Muharebe", correct: true }, { id: "b", text: "Anıt", correct: false }, { id: "c", text: "Kronoloji", correct: false }, { id: "d", text: "Kral", correct: false }] },
    { id: 1285, type: "SELECT", question: "'La victoire' ne demek?", options: [{ id: "a", text: "Zafer", correct: true }, { id: "b", text: "Yenilgi", correct: false }, { id: "c", text: "Antlaşma", correct: false }, { id: "d", text: "Sömürge", correct: false }] },
    { id: 1286, type: "SELECT", question: "'La défaite' ne demek?", options: [{ id: "a", text: "Yenilgi", correct: true }, { id: "b", text: "Zafer", correct: false }, { id: "c", text: "Kurtuluş", correct: false }, { id: "d", text: "İmparatorluk", correct: false }] },
    { id: 1287, type: "SELECT", question: "'La révolution' ne demek?", options: [{ id: "a", text: "Devrim", correct: true }, { id: "b", text: "Anma", correct: false }, { id: "c", text: "Arşiv", correct: false }, { id: "d", text: "Kral", correct: false }] },
    { id: 1288, type: "SELECT", question: "'L'indépendance' ne demek?", options: [{ id: "a", text: "Bağımsızlık", correct: true }, { id: "b", text: "Kronoloji", correct: false }, { id: "c", text: "Barış", correct: false }, { id: "d", text: "Savaş", correct: false }] },
    { id: 1289, type: "SELECT", question: "'Le traité' ne demek?", options: [{ id: "a", text: "Antlaşma", correct: true }, { id: "b", text: "Anıt", correct: false }, { id: "c", text: "Kral", correct: false }, { id: "d", text: "Arşiv", correct: false }] },
    { id: 1290, type: "SELECT", question: "'Le monument' ne demek?", options: [{ id: "a", text: "Anıt", correct: true }, { id: "b", text: "Saray", correct: false }, { id: "c", text: "Kütüphane", correct: false }, { id: "d", text: "Krallık", correct: false }] },
    { id: 1291, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le siècle", options: [{ id: "a", text: "Yüzyıl", correct: true }, { id: "b", text: "Tarih", correct: false }, { id: "c", text: "Kronoloji", correct: false }, { id: "d", text: "Arşiv", correct: false }] },
    { id: 1292, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La chronologie", options: [{ id: "a", text: "Kronoloji", correct: true }, { id: "b", text: "Anayasa", correct: false }, { id: "c", text: "Cumhuriyet", correct: false }, { id: "d", text: "Krallık", correct: false }] },
    { id: 1293, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le royaume", options: [{ id: "a", text: "Krallık", correct: true }, { id: "b", text: "İmparatorluk", correct: false }, { id: "c", text: "Cumhuriyet", correct: false }, { id: "d", text: "Anayasa", correct: false }] },
    { id: 1294, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La constitution", options: [{ id: "a", text: "Anayasa", correct: true }, { id: "b", text: "Cumhuriyet", correct: false }, { id: "c", text: "Antlaşma", correct: false }, { id: "d", text: "Arşiv", correct: false }] },
    { id: 1295, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le site historique", options: [{ id: "a", text: "Tarihi alan", correct: true }, { id: "b", text: "Savaş alanı", correct: false }, { id: "c", text: "Müze", correct: false }, { id: "d", text: "Saray", correct: false }] },
    { id: 1296, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ a duré plusieurs années.", options: [{ id: "a", text: "guerre", correct: true }, { id: "b", text: "paix", correct: false }] },
    { id: 1297, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ont célébré la ___.", options: [{ id: "a", text: "victoire", correct: true }, { id: "b", text: "défaite", correct: false }] },
    { id: 1298, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ protège les droits.", options: [{ id: "a", text: "constitution", correct: true }, { id: "b", text: "révolution", correct: false }] },
    { id: 1299, type: "FILL_BLANK", question: "Doldur:", sentence: "On commémore cette ___.", options: [{ id: "a", text: "date", correct: true }, { id: "b", text: "source", correct: false }] },
    { id: 1300, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ a mis fin au conflit.", options: [{ id: "a", text: "traité", correct: true }, { id: "b", text: "monument", correct: false }] }
];

const unit376Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1301, type: "SELECT", question: "Hangi kalıp yıl belirtir?", options: [{ id: "a", text: "en + yıl", correct: true }, { id: "b", text: "au + yıl", correct: false }, { id: "c", text: "le + yüzyıl", correct: false }, { id: "d", text: "dans + yıl", correct: false }] },
    { id: 1302, type: "SELECT", question: "'Au XIXe siècle' neyi belirtir?", options: [{ id: "a", text: "Yüzyıl", correct: true }, { id: "b", text: "Gün", correct: false }, { id: "c", text: "Ay", correct: false }, { id: "d", text: "Saat", correct: false }] },
    { id: 1303, type: "FILL_BLANK", question: "Doldur:", sentence: "La république a été fondée ___ 1923.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 1304, type: "FILL_BLANK", question: "Doldur:", sentence: "___ XXe siècle, la ville a changé.", options: [{ id: "a", text: "Au", correct: true }, { id: "b", text: "En", correct: false }] },
    { id: 1305, type: "SELECT", question: "'D'abord' ne demek?", options: [{ id: "a", text: "Önce", correct: true }, { id: "b", text: "Sonra", correct: false }, { id: "c", text: "Sonunda", correct: false }, { id: "d", text: "Bu yüzden", correct: false }] },
    { id: 1306, type: "SELECT", question: "'Finalement' ne demek?", options: [{ id: "a", text: "Sonunda", correct: true }, { id: "b", text: "Önce", correct: false }, { id: "c", text: "Hemen", correct: false }, { id: "d", text: "Asla", correct: false }] },
    { id: 1307, type: "SELECT", question: "'Parce que' ne demek?", options: [{ id: "a", text: "Çünkü", correct: true }, { id: "b", text: "Bu yüzden", correct: false }, { id: "c", text: "Buna rağmen", correct: false }, { id: "d", text: "Ne zaman", correct: false }] },
    { id: 1308, type: "SELECT", question: "'À cause de' ne demek?", options: [{ id: "a", text: "... yüzünden", correct: true }, { id: "b", text: "... sayesinde", correct: false }, { id: "c", text: "Önce", correct: false }, { id: "d", text: "Sonra", correct: false }] },
    { id: 1309, type: "TRANSLATE", question: "Çevir:", hint: "Bu yüzden barış geri geldi.", correctAnswer: "Donc, la paix est revenue." },
    { id: 1310, type: "TRANSLATE", question: "Çevir:", hint: "Önce antlaşmayı imzaladılar.", correctAnswer: "D'abord, ils ont signé le traité." },
    { id: 1311, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quel événement historique t'intéresse le plus ?", options: [{ id: "a", text: "Seni en çok hangi tarihi olay ilgilendiriyor?", correct: true }, { id: "b", text: "Tarihi olaylar neden önemlidir?", correct: false }, { id: "c", text: "Hangi müzeye gidiyorsun?", correct: false }, { id: "d", text: "Bu olay ne zaman oldu?", correct: false }] },
    { id: 1312, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La Révolution française me fascine.", options: [{ id: "a", text: "Fransız Devrimi beni büyülüyor.", correct: true }, { id: "b", text: "Fransızca öğreniyorum.", correct: false }, { id: "c", text: "Barış anlaşması imzalandı.", correct: false }, { id: "d", text: "Müzeyi seviyorum.", correct: false }] },
    { id: 1313, type: "SELECT", question: "Konuşma: 'Tu as déjà visité un musée d'histoire ?' ne demek?", options: [{ id: "a", text: "Hiç bir tarih müzesini ziyaret ettin mi?", correct: true }, { id: "b", text: "Müze ne zaman açılıyor?", correct: false }, { id: "c", text: "Hangi şehirdesin?", correct: false }, { id: "d", text: "Bu tablo eski mi?", correct: false }] },
    { id: 1314, type: "SELECT", question: "Konuşma: 'J'ai appris l'histoire de la ville.' ne demek?", options: [{ id: "a", text: "Şehrin tarihini öğrendim.", correct: true }, { id: "b", text: "Şehri çok seviyorum.", correct: false }, { id: "c", text: "Şehirde yaşıyorum.", correct: false }, { id: "d", text: "Şehir küçük.", correct: false }] },
    { id: 1315, type: "FILL_BLANK", question: "Doldur:", sentence: "La bataille est connue ___ elle a changé le cours de l'histoire.", options: [{ id: "a", text: "parce que", correct: true }, { id: "b", text: "donc", correct: false }] },
    { id: 1316, type: "FILL_BLANK", question: "Doldur:", sentence: "___, la ville a été libérée.", options: [{ id: "a", text: "Finalement", correct: true }, { id: "b", text: "D'abord", correct: false }] },
    { id: 1317, type: "TRANSLATE", question: "Çevir:", hint: "Geçmişi hatırlamak önemlidir.", correctAnswer: "Il est important de se souvenir du passé." },
    { id: 1318, type: "TRANSLATE", question: "Çevir:", hint: "Bu tarih her yıl anılır.", correctAnswer: "On commémore cette date chaque année." },
    { id: 1319, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le traité a mis fin au conflit.", options: [{ id: "a", text: "Antlaşma çatışmayı sona erdirdi.", correct: true }, { id: "b", text: "Savaş başladı.", correct: false }, { id: "c", text: "Barış imzalanmadı.", correct: false }, { id: "d", text: "Müzeyi ziyaret ettik.", correct: false }] },
    { id: 1320, type: "SELECT", question: "Hangi bağlaç kronoloji için kullanılır?", options: [{ id: "a", text: "d'abord", correct: true }, { id: "b", text: "parce que", correct: false }, { id: "c", text: "donc", correct: false }, { id: "d", text: "à cause de", correct: false }] }
];

const unit376Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension & Phrases
    { id: 1321, type: "SELECT", question: "Pourquoi la ville organise-t-elle une journée de commémoration ?", options: [{ id: "a", text: "Pour rappeler un événement historique important", correct: true }, { id: "b", text: "Pour lancer un festival", correct: false }, { id: "c", text: "Pour ouvrir un nouveau musée", correct: false }, { id: "d", text: "Pour célébrer un match", correct: false }] },
    { id: 1322, type: "SELECT", question: "Qui se rend au monument principal ?", options: [{ id: "a", text: "Les élèves du lycée", correct: true }, { id: "b", text: "Des touristes", correct: false }, { id: "c", text: "Les journalistes", correct: false }, { id: "d", text: "Les musiciens", correct: false }] },
    { id: 1323, type: "SELECT", question: "Avec qui vont-ils au monument ?", options: [{ id: "a", text: "Avec leurs professeurs d'histoire", correct: true }, { id: "b", text: "Avec leurs parents", correct: false }, { id: "c", text: "Avec des guides étrangers", correct: false }, { id: "d", text: "Avec leurs amis", correct: false }] },
    { id: 1324, type: "SELECT", question: "Que raconte le guide ?", options: [{ id: "a", text: "La bataille et la victoire", correct: true }, { id: "b", text: "Une recette", correct: false }, { id: "c", text: "Une histoire de voyage", correct: false }, { id: "d", text: "Un film", correct: false }] },
    { id: 1325, type: "SELECT", question: "Que montre le guide aux élèves ?", options: [{ id: "a", text: "Des archives et des photos anciennes", correct: true }, { id: "b", text: "Des cartes bancaires", correct: false }, { id: "c", text: "Des billets de train", correct: false }, { id: "d", text: "Des plans de ville", correct: false }] },
    { id: 1326, type: "SELECT", question: "Que font les élèves pendant la visite ?", options: [{ id: "a", text: "Ils écoutent et posent des questions", correct: true }, { id: "b", text: "Ils dorment", correct: false }, { id: "c", text: "Ils jouent", correct: false }, { id: "d", text: "Ils mangent", correct: false }] },
    { id: 1327, type: "SELECT", question: "Sur qui portent les questions des élèves ?", options: [{ id: "a", text: "Sur les témoins de l'époque", correct: true }, { id: "b", text: "Sur les films modernes", correct: false }, { id: "c", text: "Sur les bus", correct: false }, { id: "d", text: "Sur les magasins", correct: false }] },
    { id: 1328, type: "SELECT", question: "Que fait tout le monde à la fin ?", options: [{ id: "a", text: "Ils déposent des fleurs devant le monument", correct: true }, { id: "b", text: "Ils quittent la ville", correct: false }, { id: "c", text: "Ils visitent un marché", correct: false }, { id: "d", text: "Ils prennent le train", correct: false }] },
    { id: 1329, type: "SELECT", question: "Que comprennent les élèves ?", options: [{ id: "a", text: "Qu'il faut se souvenir du passé", correct: true }, { id: "b", text: "Que le passé n'est pas important", correct: false }, { id: "c", text: "Qu'il faut oublier l'histoire", correct: false }, { id: "d", text: "Que le musée est fermé", correct: false }] },
    { id: 1330, type: "SELECT", question: "Quel est le message final du texte ?", options: [{ id: "a", text: "Construire un avenir meilleur", correct: true }, { id: "b", text: "Aller à la mer", correct: false }, { id: "c", text: "Changer d'école", correct: false }, { id: "d", text: "Éviter les monuments", correct: false }] },
    { id: 1331, type: "LISTENING", question: "Duyduğunu seç:", audioText: "On commémore cette date chaque année.", options: [{ id: "a", text: "Bu tarih her yıl anılır.", correct: true }, { id: "b", text: "Bu tarih unutulur.", correct: false }, { id: "c", text: "Bu tarih değişir.", correct: false }, { id: "d", text: "Bu tarih yoktur.", correct: false }] },
    { id: 1332, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La paix a été signée après la guerre.", options: [{ id: "a", text: "Savaşın ardından barış imzalandı.", correct: true }, { id: "b", text: "Barış bozuldu.", correct: false }, { id: "c", text: "Savaş başladı.", correct: false }, { id: "d", text: "Zafer kazanıldı.", correct: false }] },
    { id: 1333, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le monument rend hommage aux victimes.", options: [{ id: "a", text: "Anıt, kurbanları anıyor.", correct: true }, { id: "b", text: "Anıt yıkıldı.", correct: false }, { id: "c", text: "Anıt satıldı.", correct: false }, { id: "d", text: "Anıt kapalı.", correct: false }] },
    { id: 1334, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les archives conservent des documents anciens.", options: [{ id: "a", text: "Arşivler eski belgeleri saklar.", correct: true }, { id: "b", text: "Arşivler yeni belgeleri siler.", correct: false }, { id: "c", text: "Arşivler kapalıdır.", correct: false }, { id: "d", text: "Arşivler boş.", correct: false }] },
    { id: 1335, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La chronologie aide à comprendre les événements.", options: [{ id: "a", text: "Kronoloji olayları anlamaya yardım eder.", correct: true }, { id: "b", text: "Kronoloji gereksizdir.", correct: false }, { id: "c", text: "Olayları unuturuz.", correct: false }, { id: "d", text: "Olaylar değişmez.", correct: false }] },
    { id: 1336, type: "TRANSLATE", question: "Çevir:", hint: "Barış", correctAnswer: "La paix" },
    { id: 1337, type: "TRANSLATE", question: "Çevir:", hint: "Zafer", correctAnswer: "La victoire" },
    { id: 1338, type: "TRANSLATE", question: "Çevir:", hint: "Kronoloji", correctAnswer: "La chronologie" },
    { id: 1339, type: "TRANSLATE", question: "Çevir:", hint: "Anıt", correctAnswer: "Le monument" },
    { id: 1340, type: "TRANSLATE", question: "Çevir:", hint: "Bağımsızlık", correctAnswer: "L'indépendance" }
];

const unit376Quiz4: Question[] = [
    // Quiz 4: Mixed Challenge
    { id: 1341, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ était puissant.", options: [{ id: "a", text: "royaume", correct: true }, { id: "b", text: "site", correct: false }] },
    { id: 1342, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ a prononcé un discours.", options: [{ id: "a", text: "président", correct: true }, { id: "b", text: "roi", correct: false }] },
    { id: 1343, type: "FILL_BLANK", question: "Doldur:", sentence: "Cette ___ est fiable.", options: [{ id: "a", text: "source", correct: true }, { id: "b", text: "victoire", correct: false }] },
    { id: 1344, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ont signé un ___.", options: [{ id: "a", text: "traité", correct: true }, { id: "b", text: "monument", correct: false }] },
    { id: 1345, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ a transformé la société.", options: [{ id: "a", text: "révolution", correct: true }, { id: "b", text: "commémoration", correct: false }] },
    { id: 1346, type: "SELECT", question: "'La commémoration' ne demek?", options: [{ id: "a", text: "Anma", correct: true }, { id: "b", text: "Savaş", correct: false }, { id: "c", text: "Kronoloji", correct: false }, { id: "d", text: "Anıt", correct: false }] },
    { id: 1347, type: "SELECT", question: "'Le témoignage' ne demek?", options: [{ id: "a", text: "Tanıklık", correct: true }, { id: "b", text: "Arşiv", correct: false }, { id: "c", text: "Kral", correct: false }, { id: "d", text: "Anlaşma", correct: false }] },
    { id: 1348, type: "SELECT", question: "'L'empire' ne demek?", options: [{ id: "a", text: "İmparatorluk", correct: true }, { id: "b", text: "Cumhuriyet", correct: false }, { id: "c", text: "Köy", correct: false }, { id: "d", text: "Saray", correct: false }] },
    { id: 1349, type: "SELECT", question: "'La colonisation' ne demek?", options: [{ id: "a", text: "Sömürgeleştirme", correct: true }, { id: "b", text: "Bağımsızlık", correct: false }, { id: "c", text: "Kurtuluş", correct: false }, { id: "d", text: "Zafer", correct: false }] },
    { id: 1350, type: "SELECT", question: "'Se souvenir' ne demek?", options: [{ id: "a", text: "Hatırlamak", correct: true }, { id: "b", text: "Unutmak", correct: false }, { id: "c", text: "Yazmak", correct: false }, { id: "d", text: "Gezmek", correct: false }] },
    { id: 1351, type: "TRANSLATE", question: "Çevir:", hint: "Bu tarihi alan çok ziyaretçi çeker.", correctAnswer: "Ce site historique attire beaucoup de visiteurs." },
    { id: 1352, type: "TRANSLATE", question: "Çevir:", hint: "Kral reformu açıkladı.", correctAnswer: "Le roi a annoncé la réforme." },
    { id: 1353, type: "TRANSLATE", question: "Çevir:", hint: "Antlaşma çatışmayı sona erdirdi.", correctAnswer: "Le traité a mis fin au conflit." },
    { id: 1354, type: "TRANSLATE", question: "Çevir:", hint: "Bu kaynak güvenilir.", correctAnswer: "Cette source est fiable." },
    { id: 1355, type: "TRANSLATE", question: "Çevir:", hint: "Şehrin kurtuluşu her yıl anılır.", correctAnswer: "La libération de la ville est commémorée chaque année." },
    { id: 1356, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La bataille", options: [{ id: "a", text: "Muharebe", correct: true }, { id: "b", text: "Zafer", correct: false }, { id: "c", text: "Barış", correct: false }, { id: "d", text: "Yenilgi", correct: false }] },
    { id: 1357, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La défaite", options: [{ id: "a", text: "Yenilgi", correct: true }, { id: "b", text: "Zafer", correct: false }, { id: "c", text: "Anma", correct: false }, { id: "d", text: "Savaş", correct: false }] },
    { id: 1358, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'indépendance", options: [{ id: "a", text: "Bağımsızlık", correct: true }, { id: "b", text: "Cumhuriyet", correct: false }, { id: "c", text: "Anayasa", correct: false }, { id: "d", text: "Krallık", correct: false }] },
    { id: 1359, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le monument", options: [{ id: "a", text: "Anıt", correct: true }, { id: "b", text: "Müze", correct: false }, { id: "c", text: "Arşiv", correct: false }, { id: "d", text: "Kronoloji", correct: false }] },
    { id: 1360, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La constitution", options: [{ id: "a", text: "Anayasa", correct: true }, { id: "b", text: "Cumhuriyet", correct: false }, { id: "c", text: "Antlaşma", correct: false }, { id: "d", text: "İmparatorluk", correct: false }] }
];

// ===== UNIT 377 HARDCODED QUIZZES =====
const unit377Quiz1: Question[] = [
    // Quiz 1: Vocab & Basics
    { id: 1361, type: "SELECT", question: "'La biographie' ne demek?", options: [{ id: "a", text: "Biyografi", correct: true }, { id: "b", text: "Bibliyografya", correct: false }, { id: "c", text: "Tarih", correct: false }, { id: "d", text: "Hikaye", correct: false }] },
    { id: 1362, type: "SELECT", question: "'Le personnage historique' ne demek?", options: [{ id: "a", text: "Tarihi şahsiyet", correct: true }, { id: "b", text: "Tarihi bölge", correct: false }, { id: "c", text: "Tarih dersi", correct: false }, { id: "d", text: "Kahraman", correct: false }] },
    { id: 1363, type: "SELECT", question: "'La célébrité' ne demek?", options: [{ id: "a", text: "Ünlülük", correct: true }, { id: "b", text: "Gençlik", correct: false }, { id: "c", text: "Ödül", correct: false }, { id: "d", text: "Eser", correct: false }] },
    { id: 1364, type: "SELECT", question: "'Le talent' ne demek?", options: [{ id: "a", text: "Yetenek", correct: true }, { id: "b", text: "Başarı", correct: false }, { id: "c", text: "Çaba", correct: false }, { id: "d", text: "Kaynak", correct: false }] },
    { id: 1365, type: "SELECT", question: "'La carrière' ne demek?", options: [{ id: "a", text: "Kariyer", correct: true }, { id: "b", text: "Kütüphane", correct: false }, { id: "c", text: "Hikaye", correct: false }, { id: "d", text: "Kronoloji", correct: false }] },
    { id: 1366, type: "SELECT", question: "'L'œuvre' ne demek?", options: [{ id: "a", text: "Eser", correct: true }, { id: "b", text: "Ödül", correct: false }, { id: "c", text: "Müze", correct: false }, { id: "d", text: "Arşiv", correct: false }] },
    { id: 1367, type: "SELECT", question: "'L'héritage' ne demek?", options: [{ id: "a", text: "Miras", correct: true }, { id: "b", text: "Kariyer", correct: false }, { id: "c", text: "Şöhret", correct: false }, { id: "d", text: "Portre", correct: false }] },
    { id: 1368, type: "SELECT", question: "'Le portrait' ne demek?", options: [{ id: "a", text: "Portre", correct: true }, { id: "b", text: "Rol", correct: false }, { id: "c", text: "Model", correct: false }, { id: "d", text: "Anı", correct: false }] },
    { id: 1369, type: "SELECT", question: "'L'influence' ne demek?", options: [{ id: "a", text: "Etki", correct: true }, { id: "b", text: "Savaş", correct: false }, { id: "c", text: "İmza", correct: false }, { id: "d", text: "Kronoloji", correct: false }] },
    { id: 1370, type: "SELECT", question: "'L'engagement' ne demek?", options: [{ id: "a", text: "Adanmışlık / Aktivizm", correct: true }, { id: "b", text: "Korku", correct: false }, { id: "c", text: "Nezaket", correct: false }, { id: "d", text: "Şaşkınlık", correct: false }] },
    { id: 1371, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le prix", options: [{ id: "a", text: "Ödül", correct: true }, { id: "b", text: "Miras", correct: false }, { id: "c", text: "Övgü", correct: false }, { id: "d", text: "Seçim", correct: false }] },
    { id: 1372, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le succès", options: [{ id: "a", text: "Başarı", correct: true }, { id: "b", text: "Sebep", correct: false }, { id: "c", text: "Savaş", correct: false }, { id: "d", text: "Kayıp", correct: false }] },
    { id: 1373, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le savant", options: [{ id: "a", text: "Bilim insanı", correct: true }, { id: "b", text: "Sporcu", correct: false }, { id: "c", text: "Yazar", correct: false }, { id: "d", text: "Müzisyen", correct: false }] },
    { id: 1374, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'inventeur", options: [{ id: "a", text: "Mucit", correct: true }, { id: "b", text: "Editör", correct: false }, { id: "c", text: "Model", correct: false }, { id: "d", text: "Sahne", correct: false }] },
    { id: 1375, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le sportif", options: [{ id: "a", text: "Sporcu", correct: true }, { id: "b", text: "Tiyatrocu", correct: false }, { id: "c", text: "Bilim insanı", correct: false }, { id: "d", text: "Ressam", correct: false }] },
    { id: 1376, type: "FILL_BLANK", question: "Doldur:", sentence: "Il a commencé sa ___ très jeune.", options: [{ id: "a", text: "carrière", correct: true }, { id: "b", text: "jeunesse", correct: false }] },
    { id: 1377, type: "FILL_BLANK", question: "Doldur:", sentence: "Son ___ est traduit en plusieurs langues.", options: [{ id: "a", text: "œuvre", correct: true }, { id: "b", text: "portrait", correct: false }] },
    { id: 1378, type: "FILL_BLANK", question: "Doldur:", sentence: "Sa ___ est internationale.", options: [{ id: "a", text: "renommée", correct: true }, { id: "b", text: "enfance", correct: false }] },
    { id: 1379, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ a composé une nouvelle pièce.", options: [{ id: "a", text: "musicien", correct: true }, { id: "b", text: "acteur", correct: false }] },
    { id: 1380, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ a créé une machine.", options: [{ id: "a", text: "inventeur", correct: true }, { id: "b", text: "héritage", correct: false }] }
];

const unit377Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1381, type: "SELECT", question: "Hangi fiil passé composé'de Être ile kullanılır?", options: [{ id: "a", text: "naître", correct: true }, { id: "b", text: "aimer", correct: false }, { id: "c", text: "finir", correct: false }, { id: "d", text: "prendre", correct: false }] },
    { id: 1382, type: "SELECT", question: "Cümleyi tamamla: Elle est ___ à Paris.", options: [{ id: "a", text: "née", correct: true }, { id: "b", text: "né", correct: false }, { id: "c", text: "naître", correct: false }, { id: "d", text: "nait", correct: false }] },
    { id: 1383, type: "FILL_BLANK", question: "Doldur:", sentence: "À l'âge de 20 ans, il ___ sa carrière.", options: [{ id: "a", text: "a commencé", correct: true }, { id: "b", text: "commence", correct: false }] },
    { id: 1384, type: "SELECT", question: "'depuis' ne demek?", options: [{ id: "a", text: "-den beri", correct: true }, { id: "b", text: "sonra", correct: false }, { id: "c", text: "önce", correct: false }, { id: "d", text: "her zaman", correct: false }] },
    { id: 1385, type: "SELECT", question: "'pendant' ne demek?", options: [{ id: "a", text: "boyunca", correct: true }, { id: "b", text: "hemen", correct: false }, { id: "c", text: "sonunda", correct: false }, { id: "d", text: "önce", correct: false }] },
    { id: 1386, type: "SELECT", question: "'dès' ne demek?", options: [{ id: "a", text: "-den itibaren", correct: true }, { id: "b", text: "-e göre", correct: false }, { id: "c", text: "sonra", correct: false }, { id: "d", text: "önce", correct: false }] },
    { id: 1387, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle a travaillé ___ dix ans.", options: [{ id: "a", text: "pendant", correct: true }, { id: "b", text: "depuis", correct: false }] },
    { id: 1388, type: "SELECT", question: "Hangi yapı görüş/aktarımı belirtir?", options: [{ id: "a", text: "Il dit que...", correct: true }, { id: "b", text: "Il y a...", correct: false }, { id: "c", text: "Il faut...", correct: false }, { id: "d", text: "Il est...", correct: false }] },
    { id: 1389, type: "SELECT", question: "'Selon lui' ne demek?", options: [{ id: "a", text: "Ona göre", correct: true }, { id: "b", text: "Ondan sonra", correct: false }, { id: "c", text: "Onunla", correct: false }, { id: "d", text: "Onu", correct: false }] },
    { id: 1390, type: "TRANSLATE", question: "Çevir:", hint: "Ona göre pes etmemek gerekir.", correctAnswer: "Selon lui, il faut persévérer." },
    { id: 1391, type: "TRANSLATE", question: "Çevir:", hint: "20 yaşında kariyerine başladı.", correctAnswer: "À l'âge de 20 ans, il a commencé sa carrière." },
    { id: 1392, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Qui est ton personnage historique préféré ?", options: [{ id: "a", text: "En sevdiğin tarihi şahsiyet kim?", correct: true }, { id: "b", text: "Tarihi olaylar neden önemli?", correct: false }, { id: "c", text: "Hangi müzeye gidiyorsun?", correct: false }, { id: "d", text: "Bu kişi nerede doğdu?", correct: false }] },
    { id: 1393, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Parce qu'elle a changé le monde.", options: [{ id: "a", text: "Çünkü dünyayı değiştirdi.", correct: true }, { id: "b", text: "Çünkü geçmişte yaşadı.", correct: false }, { id: "c", text: "Çünkü çok genç.", correct: false }, { id: "d", text: "Çünkü unutuldu.", correct: false }] },
    { id: 1394, type: "SELECT", question: "Passé composé: 'devenir' için doğru şekil hangisi?", options: [{ id: "a", text: "est devenu", correct: true }, { id: "b", text: "a devenu", correct: false }, { id: "c", text: "est devenir", correct: false }, { id: "d", text: "a devenir", correct: false }] },
    { id: 1395, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ___ célèbres après ce film.", options: [{ id: "a", text: "sont devenus", correct: true }, { id: "b", text: "ont devenu", correct: false }] },
    { id: 1396, type: "SELECT", question: "Hangi cümlede söz aktarımı vardır?", options: [{ id: "a", text: "Il dit que la créativité est essentielle.", correct: true }, { id: "b", text: "La créativité est essentielle.", correct: false }, { id: "c", text: "Créativité essentielle.", correct: false }, { id: "d", text: "Être créatif.", correct: false }] },
    { id: 1397, type: "SELECT", question: "'À l'âge de' neyi ifade eder?", options: [{ id: "a", text: "Yaş", correct: true }, { id: "b", text: "Yer", correct: false }, { id: "c", text: "Sebep", correct: false }, { id: "d", text: "Sonuç", correct: false }] },
    { id: 1398, type: "TRANSLATE", question: "Çevir:", hint: "Biyografisini okudun mu?", correctAnswer: "As-tu lu sa biographie ?" },
    { id: 1399, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il a reçu des prix internationaux.", options: [{ id: "a", text: "Uluslararası ödüller aldı.", correct: true }, { id: "b", text: "Uluslararası ödüller vermedi.", correct: false }, { id: "c", text: "Uluslararası bir arşiv var.", correct: false }, { id: "d", text: "Uluslararası bir anlaşma yaptı.", correct: false }] },
    { id: 1400, type: "SELECT", question: "Hangi kelime süre bildirir?", options: [{ id: "a", text: "pendant", correct: true }, { id: "b", text: "parce que", correct: false }, { id: "c", text: "donc", correct: false }, { id: "d", text: "selon", correct: false }] }
];

const unit377Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension & Phrases
    { id: 1401, type: "SELECT", question: "Pourquoi Selin prépare-t-elle un exposé ?", options: [{ id: "a", text: "Pour son cours d'histoire", correct: true }, { id: "b", text: "Pour un concours de sport", correct: false }, { id: "c", text: "Pour un voyage", correct: false }, { id: "d", text: "Pour un anniversaire", correct: false }] },
    { id: 1402, type: "SELECT", question: "Qui choisit-elle pour son exposé ?", options: [{ id: "a", text: "Une inventrice", correct: true }, { id: "b", text: "Un acteur", correct: false }, { id: "c", text: "Un musicien", correct: false }, { id: "d", text: "Un sportif", correct: false }] },
    { id: 1403, type: "SELECT", question: "Où Selin va-t-elle pour chercher des informations ?", options: [{ id: "a", text: "À la bibliothèque", correct: true }, { id: "b", text: "Au cinéma", correct: false }, { id: "c", text: "Au stade", correct: false }, { id: "d", text: "Au marché", correct: false }] },
    { id: 1404, type: "SELECT", question: "Que lit-elle ?", options: [{ id: "a", text: "Une biographie", correct: true }, { id: "b", text: "Un roman", correct: false }, { id: "c", text: "Un journal", correct: false }, { id: "d", text: "Un e-mail", correct: false }] },
    { id: 1405, type: "SELECT", question: "Que regarde-t-elle ?", options: [{ id: "a", text: "Des archives", correct: true }, { id: "b", text: "Des matchs", correct: false }, { id: "c", text: "Des chansons", correct: false }, { id: "d", text: "Des recettes", correct: false }] },
    { id: 1406, type: "SELECT", question: "Quels éléments note-t-elle ?", options: [{ id: "a", text: "L'enfance, la carrière et l'invention principale", correct: true }, { id: "b", text: "Les menus, les prix et les horaires", correct: false }, { id: "c", text: "Les films et les acteurs", correct: false }, { id: "d", text: "Les sports et les règles", correct: false }] },
    { id: 1407, type: "SELECT", question: "Que découvre Selin sur l'inventrice ?", options: [{ id: "a", text: "Elle a surmonté de grandes difficultés", correct: true }, { id: "b", text: "Elle a quitté l'école", correct: false }, { id: "c", text: "Elle n'a pas travaillé", correct: false }, { id: "d", text: "Elle a oublié son passé", correct: false }] },
    { id: 1408, type: "SELECT", question: "Qu'a-t-elle reçu ?", options: [{ id: "a", text: "Un prix international", correct: true }, { id: "b", text: "Un billet de bus", correct: false }, { id: "c", text: "Un diplôme de cuisine", correct: false }, { id: "d", text: "Un costume", correct: false }] },
    { id: 1409, type: "SELECT", question: "Que montre Selin pendant la présentation ?", options: [{ id: "a", text: "Un portrait et une chronologie", correct: true }, { id: "b", text: "Un match en direct", correct: false }, { id: "c", text: "Un film d'action", correct: false }, { id: "d", text: "Un repas", correct: false }] },
    { id: 1410, type: "SELECT", question: "Quel est le message final ?", options: [{ id: "a", text: "L'héritage peut inspirer les jeunes", correct: true }, { id: "b", text: "Il faut oublier le passé", correct: false }, { id: "c", text: "Les inventions sont inutiles", correct: false }, { id: "d", text: "La classe est fermée", correct: false }] },
    { id: 1411, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Sa biographie est très inspirante.", options: [{ id: "a", text: "Biyografisi çok ilham vericidir.", correct: true }, { id: "b", text: "Biyografisi çok kısadır.", correct: false }, { id: "c", text: "Biyografisi yoktur.", correct: false }, { id: "d", text: "Biyografi yazmayı sevmez.", correct: false }] },
    { id: 1412, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il a commencé sa carrière très jeune.", options: [{ id: "a", text: "Kariyerine çok genç başladı.", correct: true }, { id: "b", text: "Kariyerine geç başladı.", correct: false }, { id: "c", text: "Kariyerini bıraktı.", correct: false }, { id: "d", text: "Kariyeri yoktur.", correct: false }] },
    { id: 1413, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le sportif s'entraîne chaque matin.", options: [{ id: "a", text: "Sporcu her sabah antrenman yapar.", correct: true }, { id: "b", text: "Sporcu akşamları çalışır.", correct: false }, { id: "c", text: "Sporcu çalışmayı sevmez.", correct: false }, { id: "d", text: "Sporcu emeklidir.", correct: false }] },
    { id: 1414, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Son discours a changé les mentalités.", options: [{ id: "a", text: "Konuşması düşünce yapısını değiştirdi.", correct: true }, { id: "b", text: "Konuşması iptal edildi.", correct: false }, { id: "c", text: "Konuşması çok kısa.", correct: false }, { id: "d", text: "Konuşması hiç yok.", correct: false }] },
    { id: 1415, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Sa renommée est internationale.", options: [{ id: "a", text: "Şöhreti uluslararasıdır.", correct: true }, { id: "b", text: "Şöhreti yereldir.", correct: false }, { id: "c", text: "Şöhreti yoktur.", correct: false }, { id: "d", text: "Şöhreti azaldı.", correct: false }] },
    { id: 1416, type: "TRANSLATE", question: "Çevir:", hint: "Rol model", correctAnswer: "Le modèle" },
    { id: 1417, type: "TRANSLATE", question: "Çevir:", hint: "Miras", correctAnswer: "L'héritage" },
    { id: 1418, type: "TRANSLATE", question: "Çevir:", hint: "Ünlülük", correctAnswer: "La célébrité" },
    { id: 1419, type: "TRANSLATE", question: "Çevir:", hint: "Biyografi", correctAnswer: "La biographie" },
    { id: 1420, type: "TRANSLATE", question: "Çevir:", hint: "Yetenek", correctAnswer: "Le talent" }
];

const unit377Quiz4: Question[] = [
    // Quiz 4: Mixed Challenge
    { id: 1421, type: "FILL_BLANK", question: "Doldur:", sentence: "Il a laissé un ___ culturel.", options: [{ id: "a", text: "héritage", correct: true }, { id: "b", text: "portrait", correct: false }] },
    { id: 1422, type: "FILL_BLANK", question: "Doldur:", sentence: "Son ___ est remarquable.", options: [{ id: "a", text: "talent", correct: true }, { id: "b", text: "prix", correct: false }] },
    { id: 1423, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est internationale.", options: [{ id: "a", text: "renommée", correct: true }, { id: "b", text: "jeunesse", correct: false }] },
    { id: 1424, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ a touché le public.", options: [{ id: "a", text: "discours", correct: true }, { id: "b", text: "portrait", correct: false }] },
    { id: 1425, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle est ___ célèbre après ce prix.", options: [{ id: "a", text: "devenue", correct: true }, { id: "b", text: "devenir", correct: false }] },
    { id: 1426, type: "SELECT", question: "'La contribution' ne demek?", options: [{ id: "a", text: "Katkı", correct: true }, { id: "b", text: "Ödül", correct: false }, { id: "c", text: "Portre", correct: false }, { id: "d", text: "Sahne", correct: false }] },
    { id: 1427, type: "SELECT", question: "'Le parcours' ne demek?", options: [{ id: "a", text: "Hayat yolu / Kariyer yolu", correct: true }, { id: "b", text: "Kronoloji", correct: false }, { id: "c", text: "Yüzük", correct: false }, { id: "d", text: "Çizim", correct: false }] },
    { id: 1428, type: "SELECT", question: "'L'influence' ne demek?", options: [{ id: "a", text: "Etki", correct: true }, { id: "b", text: "Başarı", correct: false }, { id: "c", text: "Spor", correct: false }, { id: "d", text: "Yüzyıl", correct: false }] },
    { id: 1429, type: "SELECT", question: "'Le modèle' ne demek?", options: [{ id: "a", text: "Rol model / Örnek", correct: true }, { id: "b", text: "Müze", correct: false }, { id: "c", text: "Savaş", correct: false }, { id: "d", text: "Kaynak", correct: false }] },
    { id: 1430, type: "SELECT", question: "'L'œuvre' ne demek?", options: [{ id: "a", text: "Eser", correct: true }, { id: "b", text: "Tarih", correct: false }, { id: "c", text: "Kronoloji", correct: false }, { id: "d", text: "Ödül", correct: false }] },
    { id: 1431, type: "TRANSLATE", question: "Çevir:", hint: "Bu portre müzede sergileniyor.", correctAnswer: "Ce portrait est exposé au musée." },
    { id: 1432, type: "TRANSLATE", question: "Çevir:", hint: "Sporcu her gün antrenman yapar.", correctAnswer: "Le sportif s'entraîne tous les jours." },
    { id: 1433, type: "TRANSLATE", question: "Çevir:", hint: "Onun hikayesi dünyaya ilham verir.", correctAnswer: "Son histoire inspire le monde." },
    { id: 1434, type: "TRANSLATE", question: "Çevir:", hint: "Uluslararası bir ödül aldı.", correctAnswer: "Elle a reçu un prix international." },
    { id: 1435, type: "TRANSLATE", question: "Çevir:", hint: "Gençler için bir rol modeldir.", correctAnswer: "C'est un modèle pour les jeunes." },
    { id: 1436, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La biographie", options: [{ id: "a", text: "Biyografi", correct: true }, { id: "b", text: "Bibliyografya", correct: false }, { id: "c", text: "Tarih", correct: false }, { id: "d", text: "Ders", correct: false }] },
    { id: 1437, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La carrière", options: [{ id: "a", text: "Kariyer", correct: true }, { id: "b", text: "Kütüphane", correct: false }, { id: "c", text: "Sahne", correct: false }, { id: "d", text: "Spor", correct: false }] },
    { id: 1438, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le portrait", options: [{ id: "a", text: "Portre", correct: true }, { id: "b", text: "Ressam", correct: false }, { id: "c", text: "Dönem", correct: false }, { id: "d", text: "Sahnede", correct: false }] },
    { id: 1439, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'actrice", options: [{ id: "a", text: "Aktris", correct: true }, { id: "b", text: "Şair", correct: false }, { id: "c", text: "Mucit", correct: false }, { id: "d", text: "Öğretmen", correct: false }] },
    { id: 1440, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le musicien", options: [{ id: "a", text: "Müzisyen", correct: true }, { id: "b", text: "Sporcu", correct: false }, { id: "c", text: "Yazar", correct: false }, { id: "d", text: "Editör", correct: false }] }
];

// ===== UNIT 378 HARDCODED QUIZZES =====
const unit378Quiz1: Question[] = [
    // Quiz 1: Vocab & Basics
    { id: 1441, type: "SELECT", question: "'La découverte' ne demek?", options: [{ id: "a", text: "Keşif", correct: true }, { id: "b", text: "Kritik", correct: false }, { id: "c", text: "Deney", correct: false }, { id: "d", text: "Makale", correct: false }] },
    { id: 1442, type: "SELECT", question: "'Le chercheur' ne demek?", options: [{ id: "a", text: "Araştırmacı", correct: true }, { id: "b", text: "Müzisyen", correct: false }, { id: "c", text: "Sporcu", correct: false }, { id: "d", text: "Oyuncu", correct: false }] },
    { id: 1443, type: "SELECT", question: "'Le laboratoire' ne demek?", options: [{ id: "a", text: "Laboratuvar", correct: true }, { id: "b", text: "Kütüphane", correct: false }, { id: "c", text: "Sahne", correct: false }, { id: "d", text: "Arşiv", correct: false }] },
    { id: 1444, type: "SELECT", question: "'L'expérience' ne demek?", options: [{ id: "a", text: "Deney", correct: true }, { id: "b", text: "Teori", correct: false }, { id: "c", text: "Yöntem", correct: false }, { id: "d", text: "Kanıt", correct: false }] },
    { id: 1445, type: "SELECT", question: "'L'hypothèse' ne demek?", options: [{ id: "a", text: "Hipotez", correct: true }, { id: "b", text: "Analiz", correct: false }, { id: "c", text: "Sonuç", correct: false }, { id: "d", text: "Yayın", correct: false }] },
    { id: 1446, type: "SELECT", question: "'La preuve' ne demek?", options: [{ id: "a", text: "Kanıt", correct: true }, { id: "b", text: "İcat", correct: false }, { id: "c", text: "Gözlem", correct: false }, { id: "d", text: "Yenilik", correct: false }] },
    { id: 1447, type: "SELECT", question: "'Le résultat' ne demek?", options: [{ id: "a", text: "Sonuç", correct: true }, { id: "b", text: "Hata", correct: false }, { id: "c", text: "Giriş", correct: false }, { id: "d", text: "Süre", correct: false }] },
    { id: 1448, type: "SELECT", question: "'L'observation' ne demek?", options: [{ id: "a", text: "Gözlem", correct: true }, { id: "b", text: "Ölçüm", correct: false }, { id: "c", text: "Kayıt", correct: false }, { id: "d", text: "Kronoloji", correct: false }] },
    { id: 1449, type: "SELECT", question: "'L'invention' ne demek?", options: [{ id: "a", text: "İcat", correct: true }, { id: "b", text: "Keşif", correct: false }, { id: "c", text: "Rapor", correct: false }, { id: "d", text: "Ders", correct: false }] },
    { id: 1450, type: "SELECT", question: "'Le progrès' ne demek?", options: [{ id: "a", text: "İlerleme", correct: true }, { id: "b", text: "Geri dönüş", correct: false }, { id: "c", text: "Düşüş", correct: false }, { id: "d", text: "Durma", correct: false }] },
    { id: 1451, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le microscope", options: [{ id: "a", text: "Mikroskop", correct: true }, { id: "b", text: "Teleskop", correct: false }, { id: "c", text: "Laboratuvar", correct: false }, { id: "d", text: "Deney", correct: false }] },
    { id: 1452, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le télescope", options: [{ id: "a", text: "Teleskop", correct: true }, { id: "b", text: "Mikroskop", correct: false }, { id: "c", text: "Yöntem", correct: false }, { id: "d", text: "Kanıt", correct: false }] },
    { id: 1453, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le vaccin", options: [{ id: "a", text: "Aşı", correct: true }, { id: "b", text: "İlaç", correct: false }, { id: "c", text: "Hastalık", correct: false }, { id: "d", text: "Çare", correct: false }] },
    { id: 1454, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La méthode", options: [{ id: "a", text: "Yöntem", correct: true }, { id: "b", text: "Sonuç", correct: false }, { id: "c", text: "Teori", correct: false }, { id: "d", text: "Analiz", correct: false }] },
    { id: 1455, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'innovation", options: [{ id: "a", text: "Yenilik", correct: true }, { id: "b", text: "Sistem", correct: false }, { id: "c", text: "Düzen", correct: false }, { id: "d", text: "Kural", correct: false }] },
    { id: 1456, type: "FILL_BLANK", question: "Doldur:", sentence: "Les ___ sont prometteurs.", options: [{ id: "a", text: "résultats", correct: true }, { id: "b", text: "risques", correct: false }] },
    { id: 1457, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ a réussi.", options: [{ id: "a", text: "expérience", correct: true }, { id: "b", text: "observateur", correct: false }] },
    { id: 1458, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils travaillent au ___.", options: [{ id: "a", text: "laboratoire", correct: true }, { id: "b", text: "monument", correct: false }] },
    { id: 1459, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est essentielle.", options: [{ id: "a", text: "preuve", correct: true }, { id: "b", text: "fête", correct: false }] },
    { id: 1460, type: "FILL_BLANK", question: "Doldur:", sentence: "On ___ une nouvelle formule.", options: [{ id: "a", text: "teste", correct: true }, { id: "b", text: "lance", correct: false }] }
];

const unit378Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1461, type: "SELECT", question: "'Si... alors...' ne bildirir?", options: [{ id: "a", text: "Koşul / Sonuç", correct: true }, { id: "b", text: "Amaç", correct: false }, { id: "c", text: "Zaman", correct: false }, { id: "d", text: "Sebep", correct: false }] },
    { id: 1462, type: "SELECT", question: "'grâce à' ne demek?", options: [{ id: "a", text: "sayesinde", correct: true }, { id: "b", text: "yüzünden", correct: false }, { id: "c", text: "rağmen", correct: false }, { id: "d", text: "önce", correct: false }] },
    { id: 1463, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils répètent l'expérience ___ confirmer les résultats.", options: [{ id: "a", text: "afin de", correct: true }, { id: "b", text: "pendant", correct: false }] },
    { id: 1464, type: "FILL_BLANK", question: "Doldur:", sentence: "On observe les étoiles ___ comprendre l'univers.", options: [{ id: "a", text: "pour", correct: true }, { id: "b", text: "parce que", correct: false }] },
    { id: 1465, type: "SELECT", question: "Hangi cümlede edilgen yapı vardır?", options: [{ id: "a", text: "La formule est testée plusieurs fois.", correct: true }, { id: "b", text: "Ils testent la formule.", correct: false }, { id: "c", text: "Nous testons la formule.", correct: false }, { id: "d", text: "Testez la formule.", correct: false }] },
    { id: 1466, type: "SELECT", question: "'donc' ne demek?", options: [{ id: "a", text: "bu yüzden", correct: true }, { id: "b", text: "çünkü", correct: false }, { id: "c", text: "rağmen", correct: false }, { id: "d", text: "önce", correct: false }] },
    { id: 1467, type: "SELECT", question: "'à cause de' ne demek?", options: [{ id: "a", text: "yüzünden", correct: true }, { id: "b", text: "sayesinde", correct: false }, { id: "c", text: "için", correct: false }, { id: "d", text: "sonra", correct: false }] },
    { id: 1468, type: "SELECT", question: "'afin de' ne demek?", options: [{ id: "a", text: "amacıyla", correct: true }, { id: "b", text: "önce", correct: false }, { id: "c", text: "yüzünden", correct: false }, { id: "d", text: "sonra", correct: false }] },
    { id: 1469, type: "TRANSLATE", question: "Çevir:", hint: "Hipotez doğruysa, deney başarılı olur.", correctAnswer: "Si l'hypothèse est correcte, alors l'expérience réussira." },
    { id: 1470, type: "TRANSLATE", question: "Çevir:", hint: "Bu yöntem sayesinde sonuçlar güvenilirdir.", correctAnswer: "Grâce à cette méthode, les résultats sont fiables." },
    { id: 1471, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quelle découverte scientifique te fascine ?", options: [{ id: "a", text: "Hangi bilimsel keşif seni büyülüyor?", correct: true }, { id: "b", text: "Bilimsel dergi nerede?", correct: false }, { id: "c", text: "Bu keşif ne zaman oldu?", correct: false }, { id: "d", text: "Keşifler pahalı mı?", correct: false }] },
    { id: 1472, type: "LISTENING", question: "Duyduğunu seç:", audioText: "On la teste avec des expériences.", options: [{ id: "a", text: "Onu deneylerle test ederiz.", correct: true }, { id: "b", text: "Onu hemen unuturuz.", correct: false }, { id: "c", text: "Onu kimse bilmez.", correct: false }, { id: "d", text: "Onu araştırmayız.", correct: false }] },
    { id: 1473, type: "SELECT", question: "Konuşma: 'Le télescope permet d'observer les étoiles.' ne demek?", options: [{ id: "a", text: "Teleskop yıldızları gözlemlemeyi sağlar.", correct: true }, { id: "b", text: "Teleskop bozuldu.", correct: false }, { id: "c", text: "Yıldızlar kayboldu.", correct: false }, { id: "d", text: "Teleskop satıldı.", correct: false }] },
    { id: 1474, type: "SELECT", question: "Konuşma: 'Parce qu'elle confirme les résultats.' ne demek?", options: [{ id: "a", text: "Çünkü sonuçları doğrular.", correct: true }, { id: "b", text: "Çünkü sonuçlar yanlış.", correct: false }, { id: "c", text: "Çünkü sonuçları gizler.", correct: false }, { id: "d", text: "Çünkü sonuçları unuturlar.", correct: false }] },
    { id: 1475, type: "FILL_BLANK", question: "Doldur:", sentence: "L'expérience ___ réalisée au laboratoire.", options: [{ id: "a", text: "est", correct: true }, { id: "b", text: "a", correct: false }] },
    { id: 1476, type: "FILL_BLANK", question: "Doldur:", sentence: "Les données ___ analysées par l'équipe.", options: [{ id: "a", text: "sont", correct: true }, { id: "b", text: "ont", correct: false }] },
    { id: 1477, type: "TRANSLATE", question: "Çevir:", hint: "Formül birkaç kez test edilir.", correctAnswer: "La formule est testée plusieurs fois." },
    { id: 1478, type: "TRANSLATE", question: "Çevir:", hint: "Evreni anlamak için yıldızları gözlemleriz.", correctAnswer: "On observe les étoiles pour comprendre l'univers." },
    { id: 1479, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La méthode scientifique est rigoureuse.", options: [{ id: "a", text: "Bilimsel yöntem titizdir.", correct: true }, { id: "b", text: "Bilimsel yöntem basittir.", correct: false }, { id: "c", text: "Bilimsel yöntem yoktur.", correct: false }, { id: "d", text: "Bilimsel yöntem pahalıdır.", correct: false }] },
    { id: 1480, type: "SELECT", question: "Hangi yapı amaç bildirir?", options: [{ id: "a", text: "pour / afin de", correct: true }, { id: "b", text: "parce que", correct: false }, { id: "c", text: "donc", correct: false }, { id: "d", text: "à cause de", correct: false }] }
];

const unit378Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension & Phrases
    { id: 1481, type: "SELECT", question: "Où Nora fait-elle son stage ?", options: [{ id: "a", text: "Dans un laboratoire de biologie", correct: true }, { id: "b", text: "Dans un hôpital", correct: false }, { id: "c", text: "Dans une école", correct: false }, { id: "d", text: "Dans une usine", correct: false }] },
    { id: 1482, type: "SELECT", question: "Sur quoi travaille l'équipe ?", options: [{ id: "a", text: "Un nouveau médicament", correct: true }, { id: "b", text: "Un nouveau téléphone", correct: false }, { id: "c", text: "Un roman", correct: false }, { id: "d", text: "Une exposition", correct: false }] },
    { id: 1483, type: "SELECT", question: "Que font-ils chaque jour ?", options: [{ id: "a", text: "Ils testent des hypothèses", correct: true }, { id: "b", text: "Ils partent en voyage", correct: false }, { id: "c", text: "Ils font du sport", correct: false }, { id: "d", text: "Ils écrivent des poèmes", correct: false }] },
    { id: 1484, type: "SELECT", question: "Que remarque Nora un matin ?", options: [{ id: "a", text: "Une réaction inattendue", correct: true }, { id: "b", text: "Une panne d'électricité", correct: false }, { id: "c", text: "Une visite surprise", correct: false }, { id: "d", text: "Une fête", correct: false }] },
    { id: 1485, type: "SELECT", question: "Que découvre l'équipe après vérification ?", options: [{ id: "a", text: "Une formule prometteuse", correct: true }, { id: "b", text: "Une nouvelle théorie", correct: false }, { id: "c", text: "Un problème sans solution", correct: false }, { id: "d", text: "Un livre ancien", correct: false }] },
    { id: 1486, type: "SELECT", question: "Où publient-ils leurs conclusions ?", options: [{ id: "a", text: "Dans une revue scientifique", correct: true }, { id: "b", text: "Dans un journal sportif", correct: false }, { id: "c", text: "Sur un blog personnel", correct: false }, { id: "d", text: "À la télévision", correct: false }] },
    { id: 1487, type: "SELECT", question: "Que comprend Nora sur la recherche ?", options: [{ id: "a", text: "La rigueur et la patience sont essentielles", correct: true }, { id: "b", text: "La recherche est facile", correct: false }, { id: "c", text: "La recherche est inutile", correct: false }, { id: "d", text: "La recherche est rapide", correct: false }] },
    { id: 1488, type: "SELECT", question: "Quel effet la découverte a-t-elle sur Nora ?", options: [{ id: "a", text: "Elle veut devenir chercheuse", correct: true }, { id: "b", text: "Elle veut quitter la science", correct: false }, { id: "c", text: "Elle veut voyager", correct: false }, { id: "d", text: "Elle veut changer d'école", correct: false }] },
    { id: 1489, type: "SELECT", question: "Quel est le sujet principal du texte ?", options: [{ id: "a", text: "Une découverte scientifique", correct: true }, { id: "b", text: "Un festival", correct: false }, { id: "c", text: "Un match", correct: false }, { id: "d", text: "Une pièce de théâtre", correct: false }] },
    { id: 1490, type: "SELECT", question: "Que fait l'équipe avec les résultats ?", options: [{ id: "a", text: "Ils les notent soigneusement", correct: true }, { id: "b", text: "Ils les oublient", correct: false }, { id: "c", text: "Ils les vendent", correct: false }, { id: "d", text: "Ils les détruisent", correct: false }] },
    { id: 1491, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'expérience a donné des résultats positifs.", options: [{ id: "a", text: "Deney olumlu sonuçlar verdi.", correct: true }, { id: "b", text: "Deney başarısız oldu.", correct: false }, { id: "c", text: "Deney yapılmadı.", correct: false }, { id: "d", text: "Deney iptal edildi.", correct: false }] },
    { id: 1492, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le laboratoire est bien équipé.", options: [{ id: "a", text: "Laboratuvar iyi donanımlıdır.", correct: true }, { id: "b", text: "Laboratuvar kapalıdır.", correct: false }, { id: "c", text: "Laboratuvar küçüktür.", correct: false }, { id: "d", text: "Laboratuvar uzaktadır.", correct: false }] },
    { id: 1493, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le vaccin protège contre la maladie.", options: [{ id: "a", text: "Aşı hastalığa karşı korur.", correct: true }, { id: "b", text: "Aşı hastalığa neden olur.", correct: false }, { id: "c", text: "Aşı hastalığı artırır.", correct: false }, { id: "d", text: "Aşı hastalığı gizler.", correct: false }] },
    { id: 1494, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le microscope révèle des détails invisibles.", options: [{ id: "a", text: "Mikroskop görünmez ayrıntıları gösterir.", correct: true }, { id: "b", text: "Mikroskop çalışmıyor.", correct: false }, { id: "c", text: "Mikroskop pahalıdır.", correct: false }, { id: "d", text: "Mikroskop satıldı.", correct: false }] },
    { id: 1495, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le progrès scientifique est rapide.", options: [{ id: "a", text: "Bilimsel ilerleme hızlıdır.", correct: true }, { id: "b", text: "Bilimsel ilerleme yavaştır.", correct: false }, { id: "c", text: "Bilimsel ilerleme yoktur.", correct: false }, { id: "d", text: "Bilimsel ilerleme tehlikelidir.", correct: false }] },
    { id: 1496, type: "TRANSLATE", question: "Çevir:", hint: "Araştırma", correctAnswer: "La recherche" },
    { id: 1497, type: "TRANSLATE", question: "Çevir:", hint: "Kanıt", correctAnswer: "La preuve" },
    { id: 1498, type: "TRANSLATE", question: "Çevir:", hint: "İcat", correctAnswer: "L'invention" },
    { id: 1499, type: "TRANSLATE", question: "Çevir:", hint: "Mikroskop", correctAnswer: "Le microscope" },
    { id: 1500, type: "TRANSLATE", question: "Çevir:", hint: "Yöntem", correctAnswer: "La méthode" }
];

const unit378Quiz4: Question[] = [
    // Quiz 4: Mixed Challenge
    { id: 1501, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est claire.", options: [{ id: "a", text: "preuve", correct: true }, { id: "b", text: "panne", correct: false }] },
    { id: 1502, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ observe les étoiles.", options: [{ id: "a", text: "télescope", correct: true }, { id: "b", text: "microscope", correct: false }] },
    { id: 1503, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ scientifique est rigoureuse.", options: [{ id: "a", text: "méthode", correct: true }, { id: "b", text: "fête", correct: false }] },
    { id: 1504, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est précis.", options: [{ id: "a", text: "calcul", correct: true }, { id: "b", text: "calme", correct: false }] },
    { id: 1505, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ___ la température.", options: [{ id: "a", text: "mesurent", correct: true }, { id: "b", text: "mangent", correct: false }] },
    { id: 1506, type: "SELECT", question: "'L'innovation' ne demek?", options: [{ id: "a", text: "Yenilik", correct: true }, { id: "b", text: "Gözlem", correct: false }, { id: "c", text: "Kanıt", correct: false }, { id: "d", text: "Sonuç", correct: false }] },
    { id: 1507, type: "SELECT", question: "'La publication' ne demek?", options: [{ id: "a", text: "Yayın", correct: true }, { id: "b", text: "Yaygınlık", correct: false }, { id: "c", text: "Yarış", correct: false }, { id: "d", text: "Yön", correct: false }] },
    { id: 1508, type: "SELECT", question: "'Le médicament' ne demek?", options: [{ id: "a", text: "İlaç", correct: true }, { id: "b", text: "Aşı", correct: false }, { id: "c", text: "Hastalık", correct: false }, { id: "d", text: "Tedavi", correct: false }] },
    { id: 1509, type: "SELECT", question: "'La maladie' ne demek?", options: [{ id: "a", text: "Hastalık", correct: true }, { id: "b", text: "Sağlık", correct: false }, { id: "c", text: "Ağrı", correct: false }, { id: "d", text: "Alerji", correct: false }] },
    { id: 1510, type: "SELECT", question: "'Le remède' ne demek?", options: [{ id: "a", text: "Çare / İlaç", correct: true }, { id: "b", text: "Sorun", correct: false }, { id: "c", text: "Rapor", correct: false }, { id: "d", text: "Öneri", correct: false }] },
    { id: 1511, type: "TRANSLATE", question: "Çevir:", hint: "Bu keşif bilimi değiştirdi.", correctAnswer: "Cette découverte a changé la science." },
    { id: 1512, type: "TRANSLATE", question: "Çevir:", hint: "Araştırmacılar gece gündüz çalışıyor.", correctAnswer: "Les chercheurs travaillent jour et nuit." },
    { id: 1513, type: "TRANSLATE", question: "Çevir:", hint: "Mikroskop ayrıntıları gösterir.", correctAnswer: "Le microscope révèle des détails." },
    { id: 1514, type: "TRANSLATE", question: "Çevir:", hint: "Bu yenilik hayatı iyileştirir.", correctAnswer: "Cette innovation améliore la vie." },
    { id: 1515, type: "TRANSLATE", question: "Çevir:", hint: "Kanıt olmadan ikna edemeyiz.", correctAnswer: "Sans preuve, on ne peut pas convaincre." },
    { id: 1516, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La théorie", options: [{ id: "a", text: "Teori", correct: true }, { id: "b", text: "Tarih", correct: false }, { id: "c", text: "Teknoloji", correct: false }, { id: "d", text: "Tavsiye", correct: false }] },
    { id: 1517, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'analyse", options: [{ id: "a", text: "Analiz", correct: true }, { id: "b", text: "Anlam", correct: false }, { id: "c", text: "Anıt", correct: false }, { id: "d", text: "Anlaşma", correct: false }] },
    { id: 1518, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le calcul", options: [{ id: "a", text: "Hesaplama", correct: true }, { id: "b", text: "Hesap", correct: false }, { id: "c", text: "Hafıza", correct: false }, { id: "d", text: "Harita", correct: false }] },
    { id: 1519, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le progrès", options: [{ id: "a", text: "İlerleme", correct: true }, { id: "b", text: "İnceleme", correct: false }, { id: "c", text: "İndirim", correct: false }, { id: "d", text: "İnşa", correct: false }] },
    { id: 1520, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mesurer", options: [{ id: "a", text: "Ölçmek", correct: true }, { id: "b", text: "Denemek", correct: false }, { id: "c", text: "İcat etmek", correct: false }, { id: "d", text: "Düşünmek", correct: false }] }
];

// ===== UNIT 379 HARDCODED QUIZZES =====
const unit379Quiz1: Question[] = [
    // Quiz 1: Vocab & Basics
    { id: 1521, type: "SELECT", question: "'L'espace' ne demek?", options: [{ id: "a", text: "Uzay", correct: true }, { id: "b", text: "Hava", correct: false }, { id: "c", text: "Evren", correct: false }, { id: "d", text: "Gezegen", correct: false }] },
    { id: 1522, type: "SELECT", question: "'L'univers' ne demek?", options: [{ id: "a", text: "Evren", correct: true }, { id: "b", text: "Uzay mekiği", correct: false }, { id: "c", text: "Yörünge", correct: false }, { id: "d", text: "Uydu", correct: false }] },
    { id: 1523, type: "SELECT", question: "'La galaxie' ne demek?", options: [{ id: "a", text: "Galaksi", correct: true }, { id: "b", text: "Yıldız", correct: false }, { id: "c", text: "Gözlemevi", correct: false }, { id: "d", text: "Roket", correct: false }] },
    { id: 1524, type: "SELECT", question: "'La planète' ne demek?", options: [{ id: "a", text: "Gezegen", correct: true }, { id: "b", text: "Güneş", correct: false }, { id: "c", text: "Ay", correct: false }, { id: "d", text: "Yörünge", correct: false }] },
    { id: 1525, type: "SELECT", question: "'L'étoile' ne demek?", options: [{ id: "a", text: "Yıldız", correct: true }, { id: "b", text: "Görev", correct: false }, { id: "c", text: "Misyon", correct: false }, { id: "d", text: "Astronot", correct: false }] },
    { id: 1526, type: "SELECT", question: "'Le satellite' ne demek?", options: [{ id: "a", text: "Uydu", correct: true }, { id: "b", text: "Roket", correct: false }, { id: "c", text: "Mekik", correct: false }, { id: "d", text: "Teleskop", correct: false }] },
    { id: 1527, type: "SELECT", question: "'L'astronaute' ne demek?", options: [{ id: "a", text: "Astronot", correct: true }, { id: "b", text: "Mühendis", correct: false }, { id: "c", text: "Mürettebat", correct: false }, { id: "d", text: "Pilot", correct: false }] },
    { id: 1528, type: "SELECT", question: "'La fusée' ne demek?", options: [{ id: "a", text: "Roket", correct: true }, { id: "b", text: "Uzay istasyonu", correct: false }, { id: "c", text: "Uçak", correct: false }, { id: "d", text: "Uydu", correct: false }] },
    { id: 1529, type: "SELECT", question: "'L'orbite' ne demek?", options: [{ id: "a", text: "Yörünge", correct: true }, { id: "b", text: "Atmosfer", correct: false }, { id: "c", text: "Hız", correct: false }, { id: "d", text: "Yol", correct: false }] },
    { id: 1530, type: "SELECT", question: "'La gravité' ne demek?", options: [{ id: "a", text: "Yerçekimi", correct: true }, { id: "b", text: "Ağırlık", correct: false }, { id: "c", text: "Işık", correct: false }, { id: "d", text: "Karanlık", correct: false }] },
    { id: 1531, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La lune", options: [{ id: "a", text: "Ay", correct: true }, { id: "b", text: "Güneş", correct: false }, { id: "c", text: "Yıldız", correct: false }, { id: "d", text: "Uydu", correct: false }] },
    { id: 1532, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La station spatiale", options: [{ id: "a", text: "Uzay istasyonu", correct: true }, { id: "b", text: "Uzay mekiği", correct: false }, { id: "c", text: "Uzay giysisi", correct: false }, { id: "d", text: "Uzay roketi", correct: false }] },
    { id: 1533, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'équipage", options: [{ id: "a", text: "Mürettebat", correct: true }, { id: "b", text: "Kontrol", correct: false }, { id: "c", text: "Motor", correct: false }, { id: "d", text: "Kayıt", correct: false }] },
    { id: 1534, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le télescope", options: [{ id: "a", text: "Teleskop", correct: true }, { id: "b", text: "Mikroskop", correct: false }, { id: "c", text: "Roket", correct: false }, { id: "d", text: "Uydu", correct: false }] },
    { id: 1535, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'observatoire", options: [{ id: "a", text: "Gözlemevi", correct: true }, { id: "b", text: "Misyon", correct: false }, { id: "c", text: "Yörünge", correct: false }, { id: "d", text: "Atmosfer", correct: false }] },
    { id: 1536, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ décolle ce soir.", options: [{ id: "a", text: "fusée", correct: true }, { id: "b", text: "lune", correct: false }] },
    { id: 1537, type: "FILL_BLANK", question: "Doldur:", sentence: "Le satellite est en ___.", options: [{ id: "a", text: "orbite", correct: true }, { id: "b", text: "atmosphère", correct: false }] },
    { id: 1538, type: "FILL_BLANK", question: "Doldur:", sentence: "Les astronautes vivent en ___.", options: [{ id: "a", text: "apesanteur", correct: true }, { id: "b", text: "gravité", correct: false }] },
    { id: 1539, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ protège la Terre.", options: [{ id: "a", text: "atmosphère", correct: true }, { id: "b", text: "orbite", correct: false }] },
    { id: 1540, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ a été réussi.", options: [{ id: "a", text: "atterrissage", correct: true }, { id: "b", text: "lancement", correct: false }] }
];

const unit379Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1541, type: "SELECT", question: "'autour de' ne demek?", options: [{ id: "a", text: "etrafında", correct: true }, { id: "b", text: "uzağında", correct: false }, { id: "c", text: "altında", correct: false }, { id: "d", text: "içinde", correct: false }] },
    { id: 1542, type: "SELECT", question: "'près de' ne demek?", options: [{ id: "a", text: "yakınında", correct: true }, { id: "b", text: "üstünde", correct: false }, { id: "c", text: "arasında", correct: false }, { id: "d", text: "içinde", correct: false }] },
    { id: 1543, type: "FILL_BLANK", question: "Doldur:", sentence: "La station spatiale tourne ___ la Terre.", options: [{ id: "a", text: "autour de", correct: true }, { id: "b", text: "près de", correct: false }] },
    { id: 1544, type: "FILL_BLANK", question: "Doldur:", sentence: "La fusée part ___ Mars.", options: [{ id: "a", text: "vers", correct: true }, { id: "b", text: "entre", correct: false }] },
    { id: 1545, type: "SELECT", question: "'entre ... et ...' ne demek?", options: [{ id: "a", text: "... ile ... arasında", correct: true }, { id: "b", text: "... üstünde", correct: false }, { id: "c", text: "... dışında", correct: false }, { id: "d", text: "... içinde", correct: false }] },
    { id: 1546, type: "SELECT", question: "'au-dessus de' ne demek?", options: [{ id: "a", text: "üstünde", correct: true }, { id: "b", text: "altında", correct: false }, { id: "c", text: "yakınında", correct: false }, { id: "d", text: "uzak", correct: false }] },
    { id: 1547, type: "FILL_BLANK", question: "Doldur:", sentence: "Le satellite est ___ l'atmosphère.", options: [{ id: "a", text: "au-dessus de", correct: true }, { id: "b", text: "en dessous de", correct: false }] },
    { id: 1548, type: "FILL_BLANK", question: "Doldur:", sentence: "La mission ___ six mois.", options: [{ id: "a", text: "durera", correct: true }, { id: "b", text: "dure", correct: false }] },
    { id: 1549, type: "FILL_BLANK", question: "Doldur:", sentence: "Les astronautes ___ la planète.", options: [{ id: "a", text: "observeront", correct: true }, { id: "b", text: "observaient", correct: false }] },
    { id: 1550, type: "SELECT", question: "Hangisi Futur Simple'dır?", options: [{ id: "a", text: "partira", correct: true }, { id: "b", text: "partait", correct: false }, { id: "c", text: "parti", correct: false }, { id: "d", text: "partir", correct: false }] },
    { id: 1551, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tu voudrais devenir astronaute ?", options: [{ id: "a", text: "Astronot olmak ister misin?", correct: true }, { id: "b", text: "Astronot musun?", correct: false }, { id: "c", text: "Astronot olamazsın.", correct: false }, { id: "d", text: "Astronot nerede?", correct: false }] },
    { id: 1552, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Elle est en orbite autour de la Terre.", options: [{ id: "a", text: "Dünya'nın etrafında yörüngededir.", correct: true }, { id: "b", text: "Dünya'nın içinde.", correct: false }, { id: "c", text: "Dünya'nın dışında değil.", correct: false }, { id: "d", text: "Dünya'nın altında.", correct: false }] },
    { id: 1553, type: "SELECT", question: "Konuşma: 'Pourquoi le télescope est important ?' ne demek?", options: [{ id: "a", text: "Teleskop neden önemli?", correct: true }, { id: "b", text: "Teleskop nerede?", correct: false }, { id: "c", text: "Teleskop bozuk mu?", correct: false }, { id: "d", text: "Teleskop kimde?", correct: false }] },
    { id: 1554, type: "SELECT", question: "Konuşma: 'Parce qu'il permet d'observer l'univers.' ne demek?", options: [{ id: "a", text: "Çünkü evreni gözlemlemeyi sağlar.", correct: true }, { id: "b", text: "Çünkü evren tehlikelidir.", correct: false }, { id: "c", text: "Çünkü gözlem istemiyoruz.", correct: false }, { id: "d", text: "Çünkü teleskop kırık.", correct: false }] },
    { id: 1555, type: "TRANSLATE", question: "Çevir:", hint: "Görev altı ay sürecek.", correctAnswer: "La mission durera six mois." },
    { id: 1556, type: "TRANSLATE", question: "Çevir:", hint: "Astronotlar gezegeni gözlemleyecek.", correctAnswer: "Les astronautes observeront la planète." },
    { id: 1557, type: "SELECT", question: "'loin de' ne demek?", options: [{ id: "a", text: "uzağında", correct: true }, { id: "b", text: "yakınında", correct: false }, { id: "c", text: "etrafında", correct: false }, { id: "d", text: "içinde", correct: false }] },
    { id: 1558, type: "FILL_BLANK", question: "Doldur:", sentence: "La lune est ___ la Terre.", options: [{ id: "a", text: "près de", correct: true }, { id: "b", text: "loin de", correct: false }] },
    { id: 1559, type: "TRANSLATE", question: "Çevir:", hint: "Roket Mars'a doğru gider.", correctAnswer: "La fusée part vers Mars." },
    { id: 1560, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La gravité est plus faible sur la Lune.", options: [{ id: "a", text: "Yerçekimi Ay'da daha zayıftır.", correct: true }, { id: "b", text: "Yerçekimi Ay'da daha güçlüdür.", correct: false }, { id: "c", text: "Yerçekimi Ay'da yoktur.", correct: false }, { id: "d", text: "Yerçekimi Dünya'da yoktur.", correct: false }] }
];

const unit379Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension & Phrases
    { id: 1561, type: "SELECT", question: "Où la classe de Kerem visite-t-elle ?", options: [{ id: "a", text: "Un centre spatial", correct: true }, { id: "b", text: "Un musée", correct: false }, { id: "c", text: "Un stade", correct: false }, { id: "d", text: "Une bibliothèque", correct: false }] },
    { id: 1562, type: "SELECT", question: "Que regardent-ils ?", options: [{ id: "a", text: "Le lancement d'une fusée", correct: true }, { id: "b", text: "Un film", correct: false }, { id: "c", text: "Un match", correct: false }, { id: "d", text: "Un concert", correct: false }] },
    { id: 1563, type: "SELECT", question: "Que transporte la fusée ?", options: [{ id: "a", text: "Un satellite", correct: true }, { id: "b", text: "Un télescope", correct: false }, { id: "c", text: "Un avion", correct: false }, { id: "d", text: "Une navette", correct: false }] },
    { id: 1564, type: "SELECT", question: "Quel est l'objectif de la mission ?", options: [{ id: "a", text: "Observer la Terre et mesurer le climat", correct: true }, { id: "b", text: "Aller sur la Lune", correct: false }, { id: "c", text: "Prendre des touristes", correct: false }, { id: "d", text: "Construire une station", correct: false }] },
    { id: 1565, type: "SELECT", question: "Qui explique la mission ?", options: [{ id: "a", text: "Le guide", correct: true }, { id: "b", text: "Un sportif", correct: false }, { id: "c", text: "Un musicien", correct: false }, { id: "d", text: "Un acteur", correct: false }] },
    { id: 1566, type: "SELECT", question: "Où vont-ils après le décollage ?", options: [{ id: "a", text: "Dans la salle de contrôle", correct: true }, { id: "b", text: "Au restaurant", correct: false }, { id: "c", text: "À la gare", correct: false }, { id: "d", text: "À la plage", correct: false }] },
    { id: 1567, type: "SELECT", question: "Que se passe-t-il quelques minutes plus tard ?", options: [{ id: "a", text: "Le satellite atteint son orbite", correct: true }, { id: "b", text: "La fusée tombe", correct: false }, { id: "c", text: "La mission s'arrête", correct: false }, { id: "d", text: "La classe part", correct: false }] },
    { id: 1568, type: "SELECT", question: "Comment se sentent les élèves ?", options: [{ id: "a", text: "Impressionnés", correct: true }, { id: "b", text: "Fatigués", correct: false }, { id: "c", text: "En colère", correct: false }, { id: "d", text: "Tristes", correct: false }] },
    { id: 1569, type: "SELECT", question: "Que font les élèves ?", options: [{ id: "a", text: "Ils posent beaucoup de questions", correct: true }, { id: "b", text: "Ils dorment", correct: false }, { id: "c", text: "Ils chantent", correct: false }, { id: "d", text: "Ils quittent la salle", correct: false }] },
    { id: 1570, type: "SELECT", question: "Que comprennent-ils sur l'exploration spatiale ?", options: [{ id: "a", text: "Elle demande précision et travail d'équipe", correct: true }, { id: "b", text: "Elle est facile", correct: false }, { id: "c", text: "Elle est inutile", correct: false }, { id: "d", text: "Elle est dangereuse", correct: false }] },
    { id: 1571, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La fusée a décollé avec succès.", options: [{ id: "a", text: "Roket başarıyla kalkış yaptı.", correct: true }, { id: "b", text: "Roket kalkış yapmadı.", correct: false }, { id: "c", text: "Roket geri döndü.", correct: false }, { id: "d", text: "Roket kayboldu.", correct: false }] },
    { id: 1572, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les astronautes vivent en apesanteur.", options: [{ id: "a", text: "Astronotlar ağırlıksızlıkta yaşar.", correct: true }, { id: "b", text: "Astronotlar ağırdır.", correct: false }, { id: "c", text: "Astronotlar yeryüzündedir.", correct: false }, { id: "d", text: "Astronotlar korkar.", correct: false }] },
    { id: 1573, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le lancement a été reporté à cause du vent.", options: [{ id: "a", text: "Fırlatma rüzgar nedeniyle ertelendi.", correct: true }, { id: "b", text: "Fırlatma zamanında oldu.", correct: false }, { id: "c", text: "Fırlatma iptal edilmedi.", correct: false }, { id: "d", text: "Fırlatma gece yapıldı.", correct: false }] },
    { id: 1574, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'atterrissage s'est bien passé.", options: [{ id: "a", text: "İniş iyi geçti.", correct: true }, { id: "b", text: "İniş kötü geçti.", correct: false }, { id: "c", text: "İniş olmadı.", correct: false }, { id: "d", text: "İniş ertelendi.", correct: false }] },
    { id: 1575, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'astronomie aide à comprendre l'univers.", options: [{ id: "a", text: "Astronomi evreni anlamaya yardımcı olur.", correct: true }, { id: "b", text: "Astronomi evreni unutmaya yardım eder.", correct: false }, { id: "c", text: "Astronomi sadece oyun.", correct: false }, { id: "d", text: "Astronomi gereksizdir.", correct: false }] },
    { id: 1576, type: "TRANSLATE", question: "Çevir:", hint: "Uydu", correctAnswer: "Le satellite" },
    { id: 1577, type: "TRANSLATE", question: "Çevir:", hint: "Yörünge", correctAnswer: "L'orbite" },
    { id: 1578, type: "TRANSLATE", question: "Çevir:", hint: "Uzay istasyonu", correctAnswer: "La station spatiale" },
    { id: 1579, type: "TRANSLATE", question: "Çevir:", hint: "Astronot", correctAnswer: "L'astronaute" },
    { id: 1580, type: "TRANSLATE", question: "Çevir:", hint: "Takımyıldız", correctAnswer: "La constellation" }
];

const unit379Quiz4: Question[] = [
    // Quiz 4: Mixed Challenge
    { id: 1581, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ observe les planètes.", options: [{ id: "a", text: "télescope", correct: true }, { id: "b", text: "satellite", correct: false }] },
    { id: 1582, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ est prêt.", options: [{ id: "a", text: "équipage", correct: true }, { id: "b", text: "orbite", correct: false }] },
    { id: 1583, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est plus faible sur la Lune.", options: [{ id: "a", text: "gravité", correct: true }, { id: "b", text: "mission", correct: false }] },
    { id: 1584, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est prévu à 9h.", options: [{ id: "a", text: "décollage", correct: true }, { id: "b", text: "atterrissage", correct: false }] },
    { id: 1585, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ transporte l'équipage.", options: [{ id: "a", text: "navette", correct: true }, { id: "b", text: "planète", correct: false }] },
    { id: 1586, type: "SELECT", question: "'La constellation' ne demek?", options: [{ id: "a", text: "Takımyıldız", correct: true }, { id: "b", text: "Yörünge", correct: false }, { id: "c", text: "Atmosfer", correct: false }, { id: "d", text: "Uçuş", correct: false }] },
    { id: 1587, type: "SELECT", question: "'L'astronomie' ne demek?", options: [{ id: "a", text: "Astronomi", correct: true }, { id: "b", text: "Astroloji", correct: false }, { id: "c", text: "Geometri", correct: false }, { id: "d", text: "Kimya", correct: false }] },
    { id: 1588, type: "SELECT", question: "'L'apesanteur' ne demek?", options: [{ id: "a", text: "Ağırlıksızlık", correct: true }, { id: "b", text: "Yerçekimi", correct: false }, { id: "c", text: "Hız", correct: false }, { id: "d", text: "Basınç", correct: false }] },
    { id: 1589, type: "SELECT", question: "'Le cosmonaute' ne demek?", options: [{ id: "a", text: "Kozmonot", correct: true }, { id: "b", text: "Astronot", correct: false }, { id: "c", text: "Pilot", correct: false }, { id: "d", text: "Mühendis", correct: false }] },
    { id: 1590, type: "SELECT", question: "'La combinaison' ne demek?", options: [{ id: "a", text: "Uzay kıyafeti", correct: true }, { id: "b", text: "Mekik", correct: false }, { id: "c", text: "Roket", correct: false }, { id: "d", text: "Görev", correct: false }] },
    { id: 1591, type: "TRANSLATE", question: "Çevir:", hint: "Teleskop gezegenleri gözlemler.", correctAnswer: "Le télescope observe les planètes." },
    { id: 1592, type: "TRANSLATE", question: "Çevir:", hint: "Uydu görüntüler gönderir.", correctAnswer: "Le satellite envoie des images." },
    { id: 1593, type: "TRANSLATE", question: "Çevir:", hint: "Uzay istasyonu yörüngededir.", correctAnswer: "La station spatiale est en orbite." },
    { id: 1594, type: "TRANSLATE", question: "Çevir:", hint: "Kalkış 9'da planlandı.", correctAnswer: "Le décollage est prévu à 9h." },
    { id: 1595, type: "TRANSLATE", question: "Çevir:", hint: "İniş başarılı oldu.", correctAnswer: "L'atterrissage a été réussi." },
    { id: 1596, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La galaxie", options: [{ id: "a", text: "Galaksi", correct: true }, { id: "b", text: "Gezegen", correct: false }, { id: "c", text: "Yıldız", correct: false }, { id: "d", text: "Uzay", correct: false }] },
    { id: 1597, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La planète", options: [{ id: "a", text: "Gezegen", correct: true }, { id: "b", text: "Galaksi", correct: false }, { id: "c", text: "Atmosfer", correct: false }, { id: "d", text: "Yörünge", correct: false }] },
    { id: 1598, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le soleil", options: [{ id: "a", text: "Güneş", correct: true }, { id: "b", text: "Ay", correct: false }, { id: "c", text: "Yıldız", correct: false }, { id: "d", text: "Uydu", correct: false }] },
    { id: 1599, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La lune", options: [{ id: "a", text: "Ay", correct: true }, { id: "b", text: "Güneş", correct: false }, { id: "c", text: "Yıldız", correct: false }, { id: "d", text: "Gezegen", correct: false }] },
    { id: 1600, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'espace", options: [{ id: "a", text: "Uzay", correct: true }, { id: "b", text: "Evren", correct: false }, { id: "c", text: "Yörünge", correct: false }, { id: "d", text: "Uçuş", correct: false }] }
];

// ===== UNIT 380 HARDCODED QUIZZES =====
const unit380Quiz1: Question[] = [
    // Quiz 1: Vocab & Basics
    { id: 1601, type: "SELECT", question: "'La mode' ne demek?", options: [{ id: "a", text: "Moda", correct: true }, { id: "b", text: "Model", correct: false }, { id: "c", text: "Sezon", correct: false }, { id: "d", text: "Mağaza", correct: false }] },
    { id: 1602, type: "SELECT", question: "'La tendance' ne demek?", options: [{ id: "a", text: "Trend", correct: true }, { id: "b", text: "Renk", correct: false }, { id: "c", text: "Kumaş", correct: false }, { id: "d", text: "Desen", correct: false }] },
    { id: 1603, type: "SELECT", question: "'Le défilé' ne demek?", options: [{ id: "a", text: "Defile", correct: true }, { id: "b", text: "Fuar", correct: false }, { id: "c", text: "Düğün", correct: false }, { id: "d", text: "Spor", correct: false }] },
    { id: 1604, type: "SELECT", question: "'Le styliste' ne demek?", options: [{ id: "a", text: "Stilist", correct: true }, { id: "b", text: "Yazar", correct: false }, { id: "c", text: "Ressam", correct: false }, { id: "d", text: "Mühendis", correct: false }] },
    { id: 1605, type: "SELECT", question: "'La collection' ne demek?", options: [{ id: "a", text: "Koleksiyon", correct: true }, { id: "b", text: "İndirim", correct: false }, { id: "c", text: "Vitrin", correct: false }, { id: "d", text: "Beden", correct: false }] },
    { id: 1606, type: "SELECT", question: "'Le tissu' ne demek?", options: [{ id: "a", text: "Kumaş", correct: true }, { id: "b", text: "Takı", correct: false }, { id: "c", text: "Kemer", correct: false }, { id: "d", text: "Düğme", correct: false }] },
    { id: 1607, type: "SELECT", question: "'Le coton' ne demek?", options: [{ id: "a", text: "Pamuk", correct: true }, { id: "b", text: "Yün", correct: false }, { id: "c", text: "İpek", correct: false }, { id: "d", text: "Deri", correct: false }] },
    { id: 1608, type: "SELECT", question: "'La tenue' ne demek?", options: [{ id: "a", text: "Kıyafet / Kombin", correct: true }, { id: "b", text: "Boyunluk", correct: false }, { id: "c", text: "Şapka", correct: false }, { id: "d", text: "Çanta", correct: false }] },
    { id: 1609, type: "SELECT", question: "'Le motif' ne demek?", options: [{ id: "a", text: "Desen", correct: true }, { id: "b", text: "Renk", correct: false }, { id: "c", text: "Fiyat", correct: false }, { id: "d", text: "Beden", correct: false }] },
    { id: 1610, type: "SELECT", question: "'La taille' ne demek?", options: [{ id: "a", text: "Beden", correct: true }, { id: "b", text: "Fiyat", correct: false }, { id: "c", text: "Kumaş", correct: false }, { id: "d", text: "Stil", correct: false }] },
    { id: 1611, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La vitrine", options: [{ id: "a", text: "Vitrin", correct: true }, { id: "b", text: "Vitrinlik", correct: false }, { id: "c", text: "Beden", correct: false }, { id: "d", text: "Dolap", correct: false }] },
    { id: 1612, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les soldes", options: [{ id: "a", text: "İndirimler", correct: true }, { id: "b", text: "Koleksiyon", correct: false }, { id: "c", text: "Sezon", correct: false }, { id: "d", text: "Beden", correct: false }] },
    { id: 1613, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'accessoire", options: [{ id: "a", text: "Aksesuar", correct: true }, { id: "b", text: "Kıyafet", correct: false }, { id: "c", text: "Ayakkabı", correct: false }, { id: "d", text: "Renk", correct: false }] },
    { id: 1614, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La soie", options: [{ id: "a", text: "İpek", correct: true }, { id: "b", text: "Pamuk", correct: false }, { id: "c", text: "Yün", correct: false }, { id: "d", text: "Deri", correct: false }] },
    { id: 1615, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le cuir", options: [{ id: "a", text: "Deri", correct: true }, { id: "b", text: "İpek", correct: false }, { id: "c", text: "Yün", correct: false }, { id: "d", text: "Pamuk", correct: false }] },
    { id: 1616, type: "FILL_BLANK", question: "Doldur:", sentence: "Cette ___ me va bien.", options: [{ id: "a", text: "taille", correct: true }, { id: "b", text: "couleur", correct: false }] },
    { id: 1617, type: "FILL_BLANK", question: "Doldur:", sentence: "Je porte une ___ noire.", options: [{ id: "a", text: "robe", correct: true }, { id: "b", text: "collection", correct: false }] },
    { id: 1618, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y a une ___ de 30%.", options: [{ id: "a", text: "réduction", correct: true }, { id: "b", text: "saison", correct: false }] },
    { id: 1619, type: "FILL_BLANK", question: "Doldur:", sentence: "Les accessoires complètent la ___.", options: [{ id: "a", text: "tenue", correct: true }, { id: "b", text: "vitrine", correct: false }] },
    { id: 1620, type: "FILL_BLANK", question: "Doldur:", sentence: "Cette ___ est très élégante.", options: [{ id: "a", text: "tenue", correct: true }, { id: "b", text: "taille", correct: false }] }
];

const unit380Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1621, type: "SELECT", question: "Renk sıfatları genellikle nereye gelir?", options: [{ id: "a", text: "İsimden sonra", correct: true }, { id: "b", text: "Fiilden önce", correct: false }, { id: "c", text: "Cümlenin başında", correct: false }, { id: "d", text: "İsimden önce", correct: false }] },
    { id: 1622, type: "SELECT", question: "Hangi renk sıfatı değişmezdir?", options: [{ id: "a", text: "marron", correct: true }, { id: "b", text: "bleu", correct: false }, { id: "c", text: "noir", correct: false }, { id: "d", text: "rouge", correct: false }] },
    { id: 1623, type: "SELECT", question: "Karşılaştırma için doğru kalıp hangisi?", options: [{ id: "a", text: "plus ... que", correct: true }, { id: "b", text: "plus ... de", correct: false }, { id: "c", text: "plus ... à", correct: false }, { id: "d", text: "plus ... en", correct: false }] },
    { id: 1624, type: "FILL_BLANK", question: "Doldur:", sentence: "Cette veste est plus ___ que l'autre.", options: [{ id: "a", text: "élégante", correct: true }, { id: "b", text: "élégant", correct: false }] },
    { id: 1625, type: "SELECT", question: "Hangi fiil 'giyinmek' anlamındadır?", options: [{ id: "a", text: "s'habiller", correct: true }, { id: "b", text: "porter", correct: false }, { id: "c", text: "mettre", correct: false }, { id: "d", text: "assortir", correct: false }] },
    { id: 1626, type: "SELECT", question: "'porter' fiili ne anlama gelir?", options: [{ id: "a", text: "giymek/takmak", correct: true }, { id: "b", text: "denemek", correct: false }, { id: "c", text: "satın almak", correct: false }, { id: "d", text: "tasarlamak", correct: false }] },
    { id: 1627, type: "SELECT", question: "'mettre' fiili ne anlama gelir?", options: [{ id: "a", text: "giymek/takmak", correct: true }, { id: "b", text: "yürümek", correct: false }, { id: "c", text: "koşmak", correct: false }, { id: "d", text: "gülmek", correct: false }] },
    { id: 1628, type: "TRANSLATE", question: "Çevir:", hint: "Bu ceket diğerinden daha şık.", correctAnswer: "Cette veste est plus élégante que l'autre." },
    { id: 1629, type: "TRANSLATE", question: "Çevir:", hint: "En rahat kıyafet bu.", correctAnswer: "C'est le vêtement le plus confortable." },
    { id: 1630, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quel style préfères-tu ?", options: [{ id: "a", text: "Hangi tarzı tercih ediyorsun?", correct: true }, { id: "b", text: "Hangi mağaza açık?", correct: false }, { id: "c", text: "Hangi beden?", correct: false }, { id: "d", text: "Hangi renk?", correct: false }] },
    { id: 1631, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cette tenue te va très bien.", options: [{ id: "a", text: "Bu kombin sana çok yakışıyor.", correct: true }, { id: "b", text: "Bu kombin sana olmuyor.", correct: false }, { id: "c", text: "Kombin çok pahalı.", correct: false }, { id: "d", text: "Kombin yok.", correct: false }] },
    { id: 1632, type: "SELECT", question: "Konuşma: 'Le bleu te va mieux que le rouge.' ne demek?", options: [{ id: "a", text: "Mavi sana kırmızıdan daha çok yakışıyor.", correct: true }, { id: "b", text: "Mavi kırmızıdan daha pahalı.", correct: false }, { id: "c", text: "Mavi rengi sevmiyorum.", correct: false }, { id: "d", text: "Mavi yok.", correct: false }] },
    { id: 1633, type: "SELECT", question: "Konuşma: 'La cabine d'essayage est là-bas.' ne demek?", options: [{ id: "a", text: "Deneme kabini orada.", correct: true }, { id: "b", text: "Vitrin orada.", correct: false }, { id: "c", text: "Kasa orada.", correct: false }, { id: "d", text: "Çıkış orada.", correct: false }] },
    { id: 1634, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ une veste.", options: [{ id: "a", text: "mets", correct: true }, { id: "b", text: "met", correct: false }] },
    { id: 1635, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ une robe noire.", options: [{ id: "a", text: "porte", correct: true }, { id: "b", text: "portes", correct: false }] },
    { id: 1636, type: "TRANSLATE", question: "Çevir:", hint: "Akşam için giyiniyor.", correctAnswer: "Elle s'habille pour la soirée." },
    { id: 1637, type: "TRANSLATE", question: "Çevir:", hint: "Renkleri uyumlu yapmak gerekir.", correctAnswer: "Il faut assortir les couleurs." },
    { id: 1638, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les accessoires complètent ton look.", options: [{ id: "a", text: "Aksesuarlar görünümünü tamamlar.", correct: true }, { id: "b", text: "Aksesuarlar görünümü bozar.", correct: false }, { id: "c", text: "Aksesuar yok.", correct: false }, { id: "d", text: "Look pahalıdır.", correct: false }] },
    { id: 1639, type: "SELECT", question: "Hangi cümlede süperlatif vardır?", options: [{ id: "a", text: "C'est le vêtement le plus confortable.", correct: true }, { id: "b", text: "Cette veste est confortable.", correct: false }, { id: "c", text: "Cette veste est plus confortable.", correct: false }, { id: "d", text: "Cette veste est confortable que l'autre.", correct: false }] },
    { id: 1640, type: "SELECT", question: "Hangi cümlede renk uyumu vardır?", options: [{ id: "a", text: "une robe bleue", correct: true }, { id: "b", text: "une robe bleu", correct: false }, { id: "c", text: "une robe bleus", correct: false }, { id: "d", text: "une robe bleu e", correct: false }] }
];

const unit380Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension & Phrases
    { id: 1641, type: "SELECT", question: "Pourquoi Merve va-t-elle au centre-ville ?", options: [{ id: "a", text: "Pour acheter des vêtements", correct: true }, { id: "b", text: "Pour aller au cinéma", correct: false }, { id: "c", text: "Pour visiter un musée", correct: false }, { id: "d", text: "Pour rencontrer une amie", correct: false }] },
    { id: 1642, type: "SELECT", question: "Que cherche Merve ?", options: [{ id: "a", text: "Une tenue élégante", correct: true }, { id: "b", text: "Un livre", correct: false }, { id: "c", text: "Un téléphone", correct: false }, { id: "d", text: "Un billet", correct: false }] },
    { id: 1643, type: "SELECT", question: "Où entrent-elles ?", options: [{ id: "a", text: "Dans une boutique", correct: true }, { id: "b", text: "Dans une école", correct: false }, { id: "c", text: "Dans un café", correct: false }, { id: "d", text: "Dans une gare", correct: false }] },
    { id: 1644, type: "SELECT", question: "Que propose la boutique ?", options: [{ id: "a", text: "Des réductions", correct: true }, { id: "b", text: "Des cours", correct: false }, { id: "c", text: "Des repas", correct: false }, { id: "d", text: "Des billets", correct: false }] },
    { id: 1645, type: "SELECT", question: "Que fait Merve ?", options: [{ id: "a", text: "Elle essaie des robes", correct: true }, { id: "b", text: "Elle joue", correct: false }, { id: "c", text: "Elle cuisine", correct: false }, { id: "d", text: "Elle voyage", correct: false }] },
    { id: 1646, type: "SELECT", question: "Sur quoi hésite-t-elle ?", options: [{ id: "a", text: "La couleur", correct: true }, { id: "b", text: "Le prix du bus", correct: false }, { id: "c", text: "Le temps", correct: false }, { id: "d", text: "La taille de la ville", correct: false }] },
    { id: 1647, type: "SELECT", question: "Quel conseil donne le vendeur ?", options: [{ id: "a", text: "Une robe bleue", correct: true }, { id: "b", text: "Une robe noire trop grande", correct: false }, { id: "c", text: "Un pantalon", correct: false }, { id: "d", text: "Des chaussures de sport", correct: false }] },
    { id: 1648, type: "SELECT", question: "Que choisit la sœur de Merve ?", options: [{ id: "a", text: "Des accessoires", correct: true }, { id: "b", text: "Un livre", correct: false }, { id: "c", text: "Un ordinateur", correct: false }, { id: "d", text: "Un billet de train", correct: false }] },
    { id: 1649, type: "SELECT", question: "Comment se sent Merve à la fin ?", options: [{ id: "a", text: "Satisfaite", correct: true }, { id: "b", text: "En colère", correct: false }, { id: "c", text: "Triste", correct: false }, { id: "d", text: "Fatiguée", correct: false }] },
    { id: 1650, type: "SELECT", question: "Que comprend-elle ?", options: [{ id: "a", text: "Il faut assortir les couleurs et choisir la bonne taille", correct: true }, { id: "b", text: "Il faut toujours acheter en ligne", correct: false }, { id: "c", text: "Il faut éviter les boutiques", correct: false }, { id: "d", text: "Il faut changer de style chaque jour", correct: false }] },
    { id: 1651, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cette saison, les couleurs vives sont à la mode.", options: [{ id: "a", text: "Bu sezon canlı renkler moda.", correct: true }, { id: "b", text: "Bu sezon koyu renkler moda değil.", correct: false }, { id: "c", text: "Renkler pahalı.", correct: false }, { id: "d", text: "Renkler yok.", correct: false }] },
    { id: 1652, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le défilé présente la nouvelle collection.", options: [{ id: "a", text: "Defile yeni koleksiyonu sunuyor.", correct: true }, { id: "b", text: "Defile iptal edildi.", correct: false }, { id: "c", text: "Defile çok kısa.", correct: false }, { id: "d", text: "Defile yok.", correct: false }] },
    { id: 1653, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le motif à fleurs est tendance.", options: [{ id: "a", text: "Çiçekli desen trenddir.", correct: true }, { id: "b", text: "Çiçekli desen yasaktır.", correct: false }, { id: "c", text: "Çiçekli desen ucuzdur.", correct: false }, { id: "d", text: "Çiçekli desen yok.", correct: false }] },
    { id: 1654, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La vitrine attire beaucoup de clients.", options: [{ id: "a", text: "Vitrin birçok müşteri çeker.", correct: true }, { id: "b", text: "Vitrin kimseyi çekmez.", correct: false }, { id: "c", text: "Vitrin kapalıdır.", correct: false }, { id: "d", text: "Vitrin pahalıdır.", correct: false }] },
    { id: 1655, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les soldes commencent demain.", options: [{ id: "a", text: "İndirimler yarın başlıyor.", correct: true }, { id: "b", text: "İndirimler bitti.", correct: false }, { id: "c", text: "İndirimler çok pahalı.", correct: false }, { id: "d", text: "İndirimler yok.", correct: false }] },
    { id: 1656, type: "TRANSLATE", question: "Çevir:", hint: "Aksesuar", correctAnswer: "L'accessoire" },
    { id: 1657, type: "TRANSLATE", question: "Çevir:", hint: "Vitrin", correctAnswer: "La vitrine" },
    { id: 1658, type: "TRANSLATE", question: "Çevir:", hint: "İndirim", correctAnswer: "La réduction" },
    { id: 1659, type: "TRANSLATE", question: "Çevir:", hint: "Kumaş", correctAnswer: "Le tissu" },
    { id: 1660, type: "TRANSLATE", question: "Çevir:", hint: "Beden", correctAnswer: "La taille" }
];

const unit380Quiz4: Question[] = [
    // Quiz 4: Mixed Challenge
    { id: 1661, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ une veste.", options: [{ id: "a", text: "mets", correct: true }, { id: "b", text: "met", correct: false }] },
    { id: 1662, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ une robe noire.", options: [{ id: "a", text: "porte", correct: true }, { id: "b", text: "portent", correct: false }] },
    { id: 1663, type: "FILL_BLANK", question: "Doldur:", sentence: "Les chaussures ___ sont à la mode.", options: [{ id: "a", text: "noires", correct: true }, { id: "b", text: "noir", correct: false }] },
    { id: 1664, type: "FILL_BLANK", question: "Doldur:", sentence: "Cette robe est ___ élégante.", options: [{ id: "a", text: "très", correct: true }, { id: "b", text: "trois", correct: false }] },
    { id: 1665, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ attire les clients.", options: [{ id: "a", text: "vitrine", correct: true }, { id: "b", text: "taille", correct: false }] },
    { id: 1666, type: "SELECT", question: "'Les soldes' ne demek?", options: [{ id: "a", text: "İndirimler", correct: true }, { id: "b", text: "Sezon", correct: false }, { id: "c", text: "Koleksiyon", correct: false }, { id: "d", text: "Stil", correct: false }] },
    { id: 1667, type: "SELECT", question: "'La boutique' ne demek?", options: [{ id: "a", text: "Butik / Mağaza", correct: true }, { id: "b", text: "Gözlemevi", correct: false }, { id: "c", text: "Atölye", correct: false }, { id: "d", text: "Sahne", correct: false }] },
    { id: 1668, type: "SELECT", question: "'La saison' ne demek?", options: [{ id: "a", text: "Sezon", correct: true }, { id: "b", text: "Şehir", correct: false }, { id: "c", text: "Şiir", correct: false }, { id: "d", text: "Şehir merkezi", correct: false }] },
    { id: 1669, type: "SELECT", question: "'Le look' ne demek?", options: [{ id: "a", text: "Görünüm / Stil", correct: true }, { id: "b", text: "Renk", correct: false }, { id: "c", text: "Beden", correct: false }, { id: "d", text: "Desen", correct: false }] },
    { id: 1670, type: "SELECT", question: "'Assortir' ne demek?", options: [{ id: "a", text: "Uyumlu hale getirmek", correct: true }, { id: "b", text: "Dikmek", correct: false }, { id: "c", text: "Temizlemek", correct: false }, { id: "d", text: "Taşımak", correct: false }] },
    { id: 1671, type: "TRANSLATE", question: "Çevir:", hint: "Bu sezon mavi moda.", correctAnswer: "Cette saison, le bleu est à la mode." },
    { id: 1672, type: "TRANSLATE", question: "Çevir:", hint: "Defile yeni koleksiyonu sunuyor.", correctAnswer: "Le défilé présente la nouvelle collection." },
    { id: 1673, type: "TRANSLATE", question: "Çevir:", hint: "Butik on'da açılır.", correctAnswer: "La boutique ouvre à dix heures." },
    { id: 1674, type: "TRANSLATE", question: "Çevir:", hint: "Renkleri uyumlu yapmak gerekir.", correctAnswer: "Il faut assortir les couleurs." },
    { id: 1675, type: "TRANSLATE", question: "Çevir:", hint: "Bu elbise bana çok yakışıyor.", correctAnswer: "Cette robe me va très bien." },
    { id: 1676, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le tissu", options: [{ id: "a", text: "Kumaş", correct: true }, { id: "b", text: "Deri", correct: false }, { id: "c", text: "Pamuk", correct: false }, { id: "d", text: "Yün", correct: false }] },
    { id: 1677, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le coton", options: [{ id: "a", text: "Pamuk", correct: true }, { id: "b", text: "Yün", correct: false }, { id: "c", text: "İpek", correct: false }, { id: "d", text: "Deri", correct: false }] },
    { id: 1678, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La soie", options: [{ id: "a", text: "İpek", correct: true }, { id: "b", text: "Pamuk", correct: false }, { id: "c", text: "Yün", correct: false }, { id: "d", text: "Deri", correct: false }] },
    { id: 1679, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La laine", options: [{ id: "a", text: "Yün", correct: true }, { id: "b", text: "Pamuk", correct: false }, { id: "c", text: "İpek", correct: false }, { id: "d", text: "Deri", correct: false }] },
    { id: 1680, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le cuir", options: [{ id: "a", text: "Deri", correct: true }, { id: "b", text: "İpek", correct: false }, { id: "c", text: "Pamuk", correct: false }, { id: "d", text: "Yün", correct: false }] }
];

// ===== UNIT 381 HARDCODED QUIZZES =====
const unit381Quiz1: Question[] = [
    // Quiz 1: Vocab & Basics
    { id: 1681, type: "SELECT", question: "'La consommation' ne demek?", options: [{ id: "a", text: "Tüketim", correct: true }, { id: "b", text: "Üretim", correct: false }, { id: "c", text: "Tasarruf", correct: false }, { id: "d", text: "Bütçe", correct: false }] },
    { id: 1682, type: "SELECT", question: "'Le consommateur' ne demek?", options: [{ id: "a", text: "Tüketici", correct: true }, { id: "b", text: "Satıcı", correct: false }, { id: "c", text: "Kasiyer", correct: false }, { id: "d", text: "Kargo", correct: false }] },
    { id: 1683, type: "SELECT", question: "'L'achat' ne demek?", options: [{ id: "a", text: "Satın alma", correct: true }, { id: "b", text: "İade", correct: false }, { id: "c", text: "Fatura", correct: false }, { id: "d", text: "Sepet", correct: false }] },
    { id: 1684, type: "SELECT", question: "'Le budget' ne demek?", options: [{ id: "a", text: "Bütçe", correct: true }, { id: "b", text: "Fiyat", correct: false }, { id: "c", text: "Kalite", correct: false }, { id: "d", text: "İstek", correct: false }] },
    { id: 1685, type: "SELECT", question: "'La dépense' ne demek?", options: [{ id: "a", text: "Harcama", correct: true }, { id: "b", text: "Kazanç", correct: false }, { id: "c", text: "İndirim", correct: false }, { id: "d", text: "Fiş", correct: false }] },
    { id: 1686, type: "SELECT", question: "'Économiser' ne demek?", options: [{ id: "a", text: "Tasarruf etmek", correct: true }, { id: "b", text: "Harcamak", correct: false }, { id: "c", text: "Borç almak", correct: false }, { id: "d", text: "Satmak", correct: false }] },
    { id: 1687, type: "SELECT", question: "'La promotion' ne demek?", options: [{ id: "a", text: "Kampanya", correct: true }, { id: "b", text: "Kredi", correct: false }, { id: "c", text: "İade", correct: false }, { id: "d", text: "Bütçe", correct: false }] },
    { id: 1688, type: "SELECT", question: "'Le reçu' ne demek?", options: [{ id: "a", text: "Fiş", correct: true }, { id: "b", text: "Fatura", correct: false }, { id: "c", text: "Çek", correct: false }, { id: "d", text: "Sepet", correct: false }] },
    { id: 1689, type: "SELECT", question: "'Le magasin' ne demek?", options: [{ id: "a", text: "Mağaza", correct: true }, { id: "b", text: "Market", correct: false }, { id: "c", text: "Banka", correct: false }, { id: "d", text: "Kafe", correct: false }] },
    { id: 1690, type: "SELECT", question: "'Le panier' ne demek?", options: [{ id: "a", text: "Sepet", correct: true }, { id: "b", text: "Kasa", correct: false }, { id: "c", text: "Kart", correct: false }, { id: "d", text: "Kutu", correct: false }] },
    { id: 1691, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La facture", options: [{ id: "a", text: "Fatura", correct: true }, { id: "b", text: "Fiş", correct: false }, { id: "c", text: "İndirim", correct: false }, { id: "d", text: "İade", correct: false }] },
    { id: 1692, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La livraison", options: [{ id: "a", text: "Teslimat", correct: true }, { id: "b", text: "Kargo", correct: false }, { id: "c", text: "Ürün", correct: false }, { id: "d", text: "Ödeme", correct: false }] },
    { id: 1693, type: "LISTENING", question: "Duyduğunu seç:", audioText: "En espèces", options: [{ id: "a", text: "Nakit", correct: true }, { id: "b", text: "Kartla", correct: false }, { id: "c", text: "Online", correct: false }, { id: "d", text: "Çekle", correct: false }] },
    { id: 1694, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le colis", options: [{ id: "a", text: "Paket", correct: true }, { id: "b", text: "Fiş", correct: false }, { id: "c", text: "Sepet", correct: false }, { id: "d", text: "Ürün", correct: false }] },
    { id: 1695, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le retour", options: [{ id: "a", text: "İade", correct: true }, { id: "b", text: "Kargo", correct: false }, { id: "c", text: "Ödeme", correct: false }, { id: "d", text: "Kasiyer", correct: false }] },
    { id: 1696, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ mon budget.", options: [{ id: "a", text: "respecte", correct: true }, { id: "b", text: "respect", correct: false }] },
    { id: 1697, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est gratuite.", options: [{ id: "a", text: "livraison", correct: true }, { id: "b", text: "qualité", correct: false }] },
    { id: 1698, type: "FILL_BLANK", question: "Doldur:", sentence: "Il propose un ___.", options: [{ id: "a", text: "rabais", correct: true }, { id: "b", text: "besoin", correct: false }] },
    { id: 1699, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est possible sous 14 jours.", options: [{ id: "a", text: "retour", correct: true }, { id: "b", text: "colis", correct: false }] },
    { id: 1700, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est importante.", options: [{ id: "a", text: "qualité", correct: true }, { id: "b", text: "envie", correct: false }] }
];

const unit381Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1701, type: "SELECT", question: "'beaucoup de' ne demek?", options: [{ id: "a", text: "çok", correct: true }, { id: "b", text: "az", correct: false }, { id: "c", text: "hiç", correct: false }, { id: "d", text: "yeterince", correct: false }] },
    { id: 1702, type: "SELECT", question: "'un peu de' ne demek?", options: [{ id: "a", text: "biraz", correct: true }, { id: "b", text: "çok", correct: false }, { id: "c", text: "fazla", correct: false }, { id: "d", text: "yok", correct: false }] },
    { id: 1703, type: "SELECT", question: "'trop de' ne demek?", options: [{ id: "a", text: "fazla", correct: true }, { id: "b", text: "az", correct: false }, { id: "c", text: "yeterince", correct: false }, { id: "d", text: "biraz", correct: false }] },
    { id: 1704, type: "SELECT", question: "'pas assez de' ne demek?", options: [{ id: "a", text: "yeterince değil", correct: true }, { id: "b", text: "fazla", correct: false }, { id: "c", text: "çok", correct: false }, { id: "d", text: "biraz", correct: false }] },
    { id: 1705, type: "SELECT", question: "Amaç bildiren ifade hangisi?", options: [{ id: "a", text: "pour / afin de", correct: true }, { id: "b", text: "parce que", correct: false }, { id: "c", text: "donc", correct: false }, { id: "d", text: "mais", correct: false }] },
    { id: 1706, type: "SELECT", question: "Karşıtlık bildiren bağlaç hangisi?", options: [{ id: "a", text: "mais", correct: true }, { id: "b", text: "donc", correct: false }, { id: "c", text: "parce que", correct: false }, { id: "d", text: "afin de", correct: false }] },
    { id: 1707, type: "TRANSLATE", question: "Çevir:", hint: "Fiyatları karşılaştırıyorum çünkü tasarruf etmek istiyorum.", correctAnswer: "Je compare les prix parce que je veux économiser." },
    { id: 1708, type: "TRANSLATE", question: "Çevir:", hint: "Ürünü iade etmek için fişi saklar.", correctAnswer: "Elle garde le reçu afin de retourner le produit." },
    { id: 1709, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tu compares les prix avant d'acheter ?", options: [{ id: "a", text: "Satın almadan önce fiyatları karşılaştırıyor musun?", correct: true }, { id: "b", text: "Fiyatlar sabit mi?", correct: false }, { id: "c", text: "Satın almak istemiyorum.", correct: false }, { id: "d", text: "Fiyatlar düşük mü?", correct: false }] },
    { id: 1710, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'achat en ligne est très pratique.", options: [{ id: "a", text: "Online satın alma çok pratiktir.", correct: true }, { id: "b", text: "Online satın alma zordur.", correct: false }, { id: "c", text: "Online satın alma yoktur.", correct: false }, { id: "d", text: "Online satın alma pahalıdır.", correct: false }] },
    { id: 1711, type: "SELECT", question: "Konuşma: 'Quel est ton budget pour ce mois ?' ne demek?", options: [{ id: "a", text: "Bu ay için bütçen nedir?", correct: true }, { id: "b", text: "Bu ay nerede yaşıyorsun?", correct: false }, { id: "c", text: "Bu ay izin var mı?", correct: false }, { id: "d", text: "Bu ay ne yedin?", correct: false }] },
    { id: 1712, type: "SELECT", question: "Konuşma: 'Je dois économiser un peu.' ne demek?", options: [{ id: "a", text: "Biraz tasarruf etmeliyim.", correct: true }, { id: "b", text: "Biraz harcamalıyım.", correct: false }, { id: "c", text: "Azalış yok.", correct: false }, { id: "d", text: "İndirim yok.", correct: false }] },
    { id: 1713, type: "FILL_BLANK", question: "Doldur:", sentence: "Je dépense ___ d'argent.", options: [{ id: "a", text: "trop", correct: true }, { id: "b", text: "toute", correct: false }] },
    { id: 1714, type: "FILL_BLANK", question: "Doldur:", sentence: "Il reste ___ budget.", options: [{ id: "a", text: "un peu de", correct: true }, { id: "b", text: "trop de", correct: false }] },
    { id: 1715, type: "TRANSLATE", question: "Çevir:", hint: "Çok fazla para harcıyorum.", correctAnswer: "Je dépense trop d'argent." },
    { id: 1716, type: "TRANSLATE", question: "Çevir:", hint: "Biraz bütçe kaldı.", correctAnswer: "Il reste un peu de budget." },
    { id: 1717, type: "SELECT", question: "Hangi cümlede karşıtlık vardır?", options: [{ id: "a", text: "Le produit est cher, mais la qualité est bonne.", correct: true }, { id: "b", text: "Le produit est cher.", correct: false }, { id: "c", text: "Le produit est bon.", correct: false }, { id: "d", text: "Le produit est neuf.", correct: false }] },
    { id: 1718, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je préfère payer en espèces.", options: [{ id: "a", text: "Nakit ödemeyi tercih ederim.", correct: true }, { id: "b", text: "Kartla ödemeyi tercih ederim.", correct: false }, { id: "c", text: "Ödemek istemiyorum.", correct: false }, { id: "d", text: "Ödeme yok.", correct: false }] },
    { id: 1719, type: "SELECT", question: "'pourtant' ne demek?", options: [{ id: "a", text: "buna rağmen", correct: true }, { id: "b", text: "bu yüzden", correct: false }, { id: "c", text: "çünkü", correct: false }, { id: "d", text: "sonra", correct: false }] },
    { id: 1720, type: "SELECT", question: "Hangi ifade miktar belirtir?", options: [{ id: "a", text: "assez de", correct: true }, { id: "b", text: "donc", correct: false }, { id: "c", text: "mais", correct: false }, { id: "d", text: "car", correct: false }] }
];

const unit381Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension & Phrases
    { id: 1721, type: "SELECT", question: "Que veut acheter Lina ?", options: [{ id: "a", text: "Un nouveau téléphone", correct: true }, { id: "b", text: "Un ordinateur", correct: false }, { id: "c", text: "Un livre", correct: false }, { id: "d", text: "Une voiture", correct: false }] },
    { id: 1722, type: "SELECT", question: "Que fait-elle avant d'acheter ?", options: [{ id: "a", text: "Elle compare les prix", correct: true }, { id: "b", text: "Elle voyage", correct: false }, { id: "c", text: "Elle vend", correct: false }, { id: "d", text: "Elle cuisine", correct: false }] },
    { id: 1723, type: "SELECT", question: "Que cherche-t-elle en ligne ?", options: [{ id: "a", text: "Des promotions", correct: true }, { id: "b", text: "Des films", correct: false }, { id: "c", text: "Des billets", correct: false }, { id: "d", text: "Des recettes", correct: false }] },
    { id: 1724, type: "SELECT", question: "Que fait-elle chaque mois ?", options: [{ id: "a", text: "Elle met de côté de l'argent", correct: true }, { id: "b", text: "Elle dépense tout", correct: false }, { id: "c", text: "Elle change de ville", correct: false }, { id: "d", text: "Elle ne travaille pas", correct: false }] },
    { id: 1725, type: "SELECT", question: "Que trouve-t-elle un jour ?", options: [{ id: "a", text: "Une réduction intéressante", correct: true }, { id: "b", text: "Un nouvel emploi", correct: false }, { id: "c", text: "Un colis perdu", correct: false }, { id: "d", text: "Une vieille facture", correct: false }] },
    { id: 1726, type: "SELECT", question: "Que vérifie-t-elle avant d'acheter ?", options: [{ id: "a", text: "La qualité du produit", correct: true }, { id: "b", text: "La météo", correct: false }, { id: "c", text: "Le métro", correct: false }, { id: "d", text: "La route", correct: false }] },
    { id: 1727, type: "SELECT", question: "Que lit-elle ?", options: [{ id: "a", text: "Les avis des clients", correct: true }, { id: "b", text: "Un roman", correct: false }, { id: "c", text: "Un journal sportif", correct: false }, { id: "d", text: "Une affiche", correct: false }] },
    { id: 1728, type: "SELECT", question: "Pourquoi garde-t-elle le reçu ?", options: [{ id: "a", text: "Pour un éventuel retour", correct: true }, { id: "b", text: "Pour le vendre", correct: false }, { id: "c", text: "Pour le jeter", correct: false }, { id: "d", text: "Pour le donner", correct: false }] },
    { id: 1729, type: "SELECT", question: "Quel est le résultat ?", options: [{ id: "a", text: "Elle respecte son budget", correct: true }, { id: "b", text: "Elle dépasse son budget", correct: false }, { id: "c", text: "Elle oublie le reçu", correct: false }, { id: "d", text: "Elle annule l'achat", correct: false }] },
    { id: 1730, type: "SELECT", question: "Quel est le sujet principal du texte ?", options: [{ id: "a", text: "La gestion du budget", correct: true }, { id: "b", text: "La météo", correct: false }, { id: "c", text: "Le sport", correct: false }, { id: "d", text: "La cuisine", correct: false }] },
    { id: 1731, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je compare les prix avant d'acheter.", options: [{ id: "a", text: "Satın almadan önce fiyatları karşılaştırırım.", correct: true }, { id: "b", text: "Fiyatları karşılaştırmam.", correct: false }, { id: "c", text: "Fiyatları artırırım.", correct: false }, { id: "d", text: "Fiyatları unuturum.", correct: false }] },
    { id: 1732, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le reçu est nécessaire pour un retour.", options: [{ id: "a", text: "İade için fiş gereklidir.", correct: true }, { id: "b", text: "İade için fiş gerekmez.", correct: false }, { id: "c", text: "Fiş yok.", correct: false }, { id: "d", text: "İade yok.", correct: false }] },
    { id: 1733, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La qualité est plus importante que le prix.", options: [{ id: "a", text: "Kalite fiyattan daha önemlidir.", correct: true }, { id: "b", text: "Fiyat kaliteden daha önemlidir.", correct: false }, { id: "c", text: "Kalite ve fiyat aynı.", correct: false }, { id: "d", text: "Kalite önemli değildir.", correct: false }] },
    { id: 1734, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il y a beaucoup de choix au supermarché.", options: [{ id: "a", text: "Süpermarkette birçok seçenek var.", correct: true }, { id: "b", text: "Süpermarkette seçenek yok.", correct: false }, { id: "c", text: "Süpermarket kapalı.", correct: false }, { id: "d", text: "Süpermarket çok uzak.", correct: false }] },
    { id: 1735, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je paie par carte bancaire.", options: [{ id: "a", text: "Banka kartıyla öderim.", correct: true }, { id: "b", text: "Nakit öderim.", correct: false }, { id: "c", text: "Ödemem.", correct: false }, { id: "d", text: "Çekle öderim.", correct: false }] },
    { id: 1736, type: "TRANSLATE", question: "Çevir:", hint: "Tasarruf etmek", correctAnswer: "Économiser" },
    { id: 1737, type: "TRANSLATE", question: "Çevir:", hint: "Bütçe", correctAnswer: "Le budget" },
    { id: 1738, type: "TRANSLATE", question: "Çevir:", hint: "Kampanya", correctAnswer: "La promotion" },
    { id: 1739, type: "TRANSLATE", question: "Çevir:", hint: "Teslimat", correctAnswer: "La livraison" },
    { id: 1740, type: "TRANSLATE", question: "Çevir:", hint: "İade", correctAnswer: "Le retour" }
];

const unit381Quiz4: Question[] = [
    // Quiz 4: Mixed Challenge
    { id: 1741, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est trop élevé.", options: [{ id: "a", text: "prix", correct: true }, { id: "b", text: "choix", correct: false }] },
    { id: 1742, type: "FILL_BLANK", question: "Doldur:", sentence: "Je paie ___ carte bancaire.", options: [{ id: "a", text: "par", correct: true }, { id: "b", text: "pour", correct: false }] },
    { id: 1743, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ arrive demain.", options: [{ id: "a", text: "colis", correct: true }, { id: "b", text: "choix", correct: false }] },
    { id: 1744, type: "FILL_BLANK", question: "Doldur:", sentence: "Il propose une ___.", options: [{ id: "a", text: "réduction", correct: true }, { id: "b", text: "taille", correct: false }] },
    { id: 1745, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ client est disponible.", options: [{ id: "a", text: "service", correct: true }, { id: "b", text: "budget", correct: false }] },
    { id: 1746, type: "SELECT", question: "'Le besoin' ne demek?", options: [{ id: "a", text: "İhtiyaç", correct: true }, { id: "b", text: "İstek", correct: false }, { id: "c", text: "Ödül", correct: false }, { id: "d", text: "Yol", correct: false }] },
    { id: 1747, type: "SELECT", question: "'L'envie' ne demek?", options: [{ id: "a", text: "İstek", correct: true }, { id: "b", text: "İhtiyaç", correct: false }, { id: "c", text: "İndirim", correct: false }, { id: "d", text: "Fiş", correct: false }] },
    { id: 1748, type: "SELECT", question: "'La satisfaction' ne demek?", options: [{ id: "a", text: "Memnuniyet", correct: true }, { id: "b", text: "Sorun", correct: false }, { id: "c", text: "Kalite", correct: false }, { id: "d", text: "Seçim", correct: false }] },
    { id: 1749, type: "SELECT", question: "'Le gaspillage' ne demek?", options: [{ id: "a", text: "İsraf", correct: true }, { id: "b", text: "Kazanç", correct: false }, { id: "c", text: "Kâr", correct: false }, { id: "d", text: "Kredi", correct: false }] },
    { id: 1750, type: "SELECT", question: "'Le service client' ne demek?", options: [{ id: "a", text: "Müşteri hizmetleri", correct: true }, { id: "b", text: "Servis", correct: false }, { id: "c", text: "Yemek", correct: false }, { id: "d", text: "Kargo", correct: false }] },
    { id: 1751, type: "TRANSLATE", question: "Çevir:", hint: "Müşteri memnuniyeti önemlidir.", correctAnswer: "La satisfaction du client est importante." },
    { id: 1752, type: "TRANSLATE", question: "Çevir:", hint: "Paket yarın geliyor.", correctAnswer: "Le colis arrive demain." },
    { id: 1753, type: "TRANSLATE", question: "Çevir:", hint: "Nakit ödüyorum.", correctAnswer: "Je paie en espèces." },
    { id: 1754, type: "TRANSLATE", question: "Çevir:", hint: "Satıcı indirim teklif ediyor.", correctAnswer: "Le vendeur propose un rabais." },
    { id: 1755, type: "TRANSLATE", question: "Çevir:", hint: "Sadece ihtiyacım olanı alırım.", correctAnswer: "J'achète seulement ce dont j'ai besoin." },
    { id: 1756, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La consommation", options: [{ id: "a", text: "Tüketim", correct: true }, { id: "b", text: "Tasarruf", correct: false }, { id: "c", text: "Üretim", correct: false }, { id: "d", text: "Bütçe", correct: false }] },
    { id: 1757, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le budget", options: [{ id: "a", text: "Bütçe", correct: true }, { id: "b", text: "Banka", correct: false }, { id: "c", text: "Fiyat", correct: false }, { id: "d", text: "Fiş", correct: false }] },
    { id: 1758, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La réduction", options: [{ id: "a", text: "İndirim", correct: true }, { id: "b", text: "Kredi", correct: false }, { id: "c", text: "İade", correct: false }, { id: "d", text: "Sepet", correct: false }] },
    { id: 1759, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le reçu", options: [{ id: "a", text: "Fiş", correct: true }, { id: "b", text: "Fatura", correct: false }, { id: "c", text: "Çek", correct: false }, { id: "d", text: "Koli", correct: false }] },
    { id: 1760, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La livraison", options: [{ id: "a", text: "Teslimat", correct: true }, { id: "b", text: "Seçim", correct: false }, { id: "c", text: "İade", correct: false }, { id: "d", text: "Harcama", correct: false }] }
];


// ===== UNIT 382 HARDCODED QUIZZES =====
const unit382Quiz1: Question[] = [
    // Quiz 1: Vocab & Basics
    { id: 1761, type: "SELECT", question: "'La publicité' ne demek?", options: [{ id: "a", text: "Reklam", correct: true }, { id: "b", text: "Pazarlama", correct: false }, { id: "c", text: "Slogan", correct: false }, { id: "d", text: "Logo", correct: false }] },
    { id: 1762, type: "SELECT", question: "'La campagne publicitaire' ne demek?", options: [{ id: "a", text: "Reklam kampanyası", correct: true }, { id: "b", text: "Marka", correct: false }, { id: "c", text: "Rekabet", correct: false }, { id: "d", text: "Lansman", correct: false }] },
    { id: 1763, type: "SELECT", question: "'La marque' ne demek?", options: [{ id: "a", text: "Marka", correct: true }, { id: "b", text: "Bütçe", correct: false }, { id: "c", text: "Afiş", correct: false }, { id: "d", text: "Pazar", correct: false }] },
    { id: 1764, type: "SELECT", question: "'Le slogan' ne demek?", options: [{ id: "a", text: "Slogan", correct: true }, { id: "b", text: "Mesaj", correct: false }, { id: "c", text: "Ürün", correct: false }, { id: "d", text: "Hizmet", correct: false }] },
    { id: 1765, type: "SELECT", question: "'Le logo' ne demek?", options: [{ id: "a", text: "Logo", correct: true }, { id: "b", text: "Broşür", correct: false }, { id: "c", text: "Hedef kitle", correct: false }, { id: "d", text: "Marka imajı", correct: false }] },
    { id: 1766, type: "SELECT", question: "'Le produit' ne demek?", options: [{ id: "a", text: "Ürün", correct: true }, { id: "b", text: "Hizmet", correct: false }, { id: "c", text: "Teklif", correct: false }, { id: "d", text: "Pazar", correct: false }] },
    { id: 1767, type: "SELECT", question: "'Le service' ne demek?", options: [{ id: "a", text: "Hizmet", correct: true }, { id: "b", text: "Strateji", correct: false }, { id: "c", text: "Reklam filmi", correct: false }, { id: "d", text: "Slogan", correct: false }] },
    { id: 1768, type: "SELECT", question: "'Le message' ne demek?", options: [{ id: "a", text: "Mesaj", correct: true }, { id: "b", text: "Reklam", correct: false }, { id: "c", text: "İkna", correct: false }, { id: "d", text: "Lansman", correct: false }] },
    { id: 1769, type: "SELECT", question: "'La cible' ne demek?", options: [{ id: "a", text: "Hedef kitle", correct: true }, { id: "b", text: "İtibar", correct: false }, { id: "c", text: "Rekabet", correct: false }, { id: "d", text: "Marka", correct: false }] },
    { id: 1770, type: "SELECT", question: "'Le public cible' ne demek?", options: [{ id: "a", text: "Hedef kitle", correct: true }, { id: "b", text: "Pazar", correct: false }, { id: "c", text: "Strateji", correct: false }, { id: "d", text: "Bütçe", correct: false }] },
    { id: 1771, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le marché", options: [{ id: "a", text: "Pazar", correct: true }, { id: "b", text: "Reklam", correct: false }, { id: "c", text: "Slogan", correct: false }, { id: "d", text: "Logo", correct: false }] },
    { id: 1772, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La concurrence", options: [{ id: "a", text: "Rekabet", correct: true }, { id: "b", text: "Kampanya", correct: false }, { id: "c", text: "İtibar", correct: false }, { id: "d", text: "Hizmet", correct: false }] },
    { id: 1773, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le spot publicitaire", options: [{ id: "a", text: "Reklam filmi", correct: true }, { id: "b", text: "Broşür", correct: false }, { id: "c", text: "Afiş", correct: false }, { id: "d", text: "Lansman", correct: false }] },
    { id: 1774, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'affiche", options: [{ id: "a", text: "Afiş", correct: true }, { id: "b", text: "Slogan", correct: false }, { id: "c", text: "Mesaj", correct: false }, { id: "d", text: "Pazar", correct: false }] },
    { id: 1775, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le prospectus", options: [{ id: "a", text: "Broşür", correct: true }, { id: "b", text: "Reklam filmi", correct: false }, { id: "c", text: "Marka imajı", correct: false }, { id: "d", text: "Ürün", correct: false }] },
    { id: 1776, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est très connue.", options: [{ id: "a", text: "marque", correct: true }, { id: "b", text: "campagne", correct: false }] },
    { id: 1777, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est facile à retenir.", options: [{ id: "a", text: "slogan", correct: true }, { id: "b", text: "logo", correct: false }] },
    { id: 1778, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ passe à la télévision.", options: [{ id: "a", text: "spot publicitaire", correct: true }, { id: "b", text: "prospectus", correct: false }] },
    { id: 1779, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ attire l'attention.", options: [{ id: "a", text: "affiche", correct: true }, { id: "b", text: "cible", correct: false }] },
    { id: 1780, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ présente les offres.", options: [{ id: "a", text: "prospectus", correct: true }, { id: "b", text: "message", correct: false }] }
];

const unit382Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1781, type: "SELECT", question: "Reklamlarda 'Hemen deneyin!' ifadesi hangi kiptir?", options: [{ id: "a", text: "Impératif", correct: true }, { id: "b", text: "Futur Simple", correct: false }, { id: "c", text: "Passé Composé", correct: false }, { id: "d", text: "Conditionnel", correct: false }] },
    { id: 1782, type: "SELECT", question: "Yakın gelecek için doğru yapı hangisi?", options: [{ id: "a", text: "aller + mastar", correct: true }, { id: "b", text: "être + participe passé", correct: false }, { id: "c", text: "venir de + mastar", correct: false }, { id: "d", text: "ne ... pas", correct: false }] },
    { id: 1783, type: "SELECT", question: "Hangisi Futur Simple örneğidir?", options: [{ id: "a", text: "La marque lancera un nouveau produit.", correct: true }, { id: "b", text: "Nous allons lancer la campagne.", correct: false }, { id: "c", text: "La marque lance un produit.", correct: false }, { id: "d", text: "La marque a lancé un produit.", correct: false }] },
    { id: 1784, type: "SELECT", question: "Karşılaştırma için doğru kalıp hangisi?", options: [{ id: "a", text: "plus ... que", correct: true }, { id: "b", text: "plus ... de", correct: false }, { id: "c", text: "plus ... à", correct: false }, { id: "d", text: "plus ... en", correct: false }] },
    { id: 1785, type: "SELECT", question: "Süperlatif hangi yapıdır?", options: [{ id: "a", text: "le/la/les plus + sıfat", correct: true }, { id: "b", text: "plus ... que", correct: false }, { id: "c", text: "aussi ... que", correct: false }, { id: "d", text: "moins ... que", correct: false }] },
    { id: 1786, type: "SELECT", question: "Olumsuz emir kipi sırası hangisidir?", options: [{ id: "a", text: "Ne + fiil + pas", correct: true }, { id: "b", text: "Fiil + ne + pas", correct: false }, { id: "c", text: "Ne + pas + fiil", correct: false }, { id: "d", text: "Pas + fiil + ne", correct: false }] },
    { id: 1787, type: "FILL_BLANK", question: "Doldur:", sentence: "___ ce produit !", options: [{ id: "a", text: "Essayez", correct: true }, { id: "b", text: "Essayer", correct: false }] },
    { id: 1788, type: "FILL_BLANK", question: "Doldur:", sentence: "Ne ___ pas l'offre !", options: [{ id: "a", text: "ratez", correct: true }, { id: "b", text: "rate", correct: false }] },
    { id: 1789, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ lancer la campagne.", options: [{ id: "a", text: "allons", correct: true }, { id: "b", text: "allez", correct: false }] },
    { id: 1790, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce slogan est plus ___ que l'autre.", options: [{ id: "a", text: "accrocheur", correct: true }, { id: "b", text: "accrocheuse", correct: false }] },
    { id: 1791, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tu as vu cette publicité ?", options: [{ id: "a", text: "Bu reklamı gördün mü?", correct: true }, { id: "b", text: "Bu reklamı çektin mi?", correct: false }, { id: "c", text: "Bu reklamın fiyatı ne?", correct: false }, { id: "d", text: "Bu reklam yeni mi?", correct: false }] },
    { id: 1792, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je préfère en ligne, c'est plus ciblé.", options: [{ id: "a", text: "Ben online olanı tercih ederim, daha hedeflidir.", correct: true }, { id: "b", text: "Ben televizyonda tercih ederim.", correct: false }, { id: "c", text: "Ben hedef sevmem.", correct: false }, { id: "d", text: "Ben reklam sevmem.", correct: false }] },
    { id: 1793, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le logo te plaît ?", options: [{ id: "a", text: "Logo hoşuna gidiyor mu?", correct: true }, { id: "b", text: "Logo nerede?", correct: false }, { id: "c", text: "Logo çok büyük.", correct: false }, { id: "d", text: "Logo kayıp.", correct: false }] },
    { id: 1794, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ils ont un budget publicitaire élevé.", options: [{ id: "a", text: "Yüksek bir reklam bütçeleri var.", correct: true }, { id: "b", text: "Reklam bütçeleri yok.", correct: false }, { id: "c", text: "Bütçe düşük.", correct: false }, { id: "d", text: "Bütçe sabit.", correct: false }] },
    { id: 1795, type: "SELECT", question: "Konuşma: 'Quelle est la cible de cette campagne ?' ne demek?", options: [{ id: "a", text: "Bu kampanyanın hedef kitlesi nedir?", correct: true }, { id: "b", text: "Bu kampanya ne zaman?", correct: false }, { id: "c", text: "Bu kampanya nerede?", correct: false }, { id: "d", text: "Bu kampanya bitti mi?", correct: false }] },
    { id: 1796, type: "SELECT", question: "Konuşma: 'Oui, le slogan est vraiment accrocheur.' ne demek?", options: [{ id: "a", text: "Evet, slogan gerçekten akılda kalıcı.", correct: true }, { id: "b", text: "Evet, sloganı sevmiyorum.", correct: false }, { id: "c", text: "Evet, slogan uzun.", correct: false }, { id: "d", text: "Evet, slogan zor.", correct: false }] },
    { id: 1797, type: "SELECT", question: "Konuşma: 'On dirait une grande marque.' ne demek?", options: [{ id: "a", text: "Büyük bir markaya benziyor.", correct: true }, { id: "b", text: "Büyük bir reklam var.", correct: false }, { id: "c", text: "Bütçe çok büyük.", correct: false }, { id: "d", text: "Pazar çok büyük.", correct: false }] },
    { id: 1798, type: "SELECT", question: "Konuşma: 'Tu préfères la publicité en ligne ou à la télé ?' ne demek?", options: [{ id: "a", text: "Online reklamı mı yoksa TV reklamını mı tercih edersin?", correct: true }, { id: "b", text: "Online reklam var mı?", correct: false }, { id: "c", text: "Televizyon açık mı?", correct: false }, { id: "d", text: "Reklamın fiyatı ne?", correct: false }] },
    { id: 1799, type: "TRANSLATE", question: "Çevir:", hint: "Yarın kampanyayı başlatacağız.", correctAnswer: "Nous allons lancer la campagne demain." },
    { id: 1800, type: "TRANSLATE", question: "Çevir:", hint: "Bu marka rakiplerinden daha ünlü.", correctAnswer: "Cette marque est plus connue que ses concurrents." }
];

const unit382Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension & Phrases
    { id: 1801, type: "SELECT", question: "Que prépare l'entreprise ?", options: [{ id: "a", text: "Le lancement d'un nouveau produit", correct: true }, { id: "b", text: "Un voyage", correct: false }, { id: "c", text: "Un film", correct: false }, { id: "d", text: "Une fête", correct: false }] },
    { id: 1802, type: "SELECT", question: "Que crée l'équipe marketing ?", options: [{ id: "a", text: "Un slogan et un logo", correct: true }, { id: "b", text: "Un roman", correct: false }, { id: "c", text: "Un tableau", correct: false }, { id: "d", text: "Un match", correct: false }] },
    { id: 1803, type: "SELECT", question: "Quels canaux sont choisis ?", options: [{ id: "a", text: "Les réseaux sociaux et la télévision", correct: true }, { id: "b", text: "La radio seulement", correct: false }, { id: "c", text: "Le journal", correct: false }, { id: "d", text: "L'école", correct: false }] },
    { id: 1804, type: "SELECT", question: "Que font les influenceurs ?", options: [{ id: "a", text: "Ils publient des vidéos", correct: true }, { id: "b", text: "Ils vendent des billets", correct: false }, { id: "c", text: "Ils cuisinent", correct: false }, { id: "d", text: "Ils voyagent", correct: false }] },
    { id: 1805, type: "SELECT", question: "Que se passe-t-il avec les ventes ?", options: [{ id: "a", text: "Elles augmentent rapidement", correct: true }, { id: "b", text: "Elles diminuent", correct: false }, { id: "c", text: "Elles restent stables", correct: false }, { id: "d", text: "Elles s'arrêtent", correct: false }] },
    { id: 1806, type: "SELECT", question: "Que gagne la marque ?", options: [{ id: "a", text: "De la notoriété", correct: true }, { id: "b", text: "Des dettes", correct: false }, { id: "c", text: "Des problèmes", correct: false }, { id: "d", text: "Des amendes", correct: false }] },
    { id: 1807, type: "SELECT", question: "Que dit le directeur à la fin ?", options: [{ id: "a", text: "La stratégie a été efficace", correct: true }, { id: "b", text: "La stratégie a échoué", correct: false }, { id: "c", text: "La campagne est annulée", correct: false }, { id: "d", text: "Le produit est mauvais", correct: false }] },
    { id: 1808, type: "SELECT", question: "Que veut-il faire ensuite ?", options: [{ id: "a", text: "Analyser les résultats", correct: true }, { id: "b", text: "Arrêter la publicité", correct: false }, { id: "c", text: "Changer de logo", correct: false }, { id: "d", text: "Fermer l'entreprise", correct: false }] },
    { id: 1809, type: "SELECT", question: "Quel est le sujet principal du texte ?", options: [{ id: "a", text: "Une campagne publicitaire", correct: true }, { id: "b", text: "Un voyage", correct: false }, { id: "c", text: "Un événement sportif", correct: false }, { id: "d", text: "Un spectacle", correct: false }] },
    { id: 1810, type: "SELECT", question: "Pourquoi analyser les résultats ?", options: [{ id: "a", text: "Pour améliorer la prochaine campagne", correct: true }, { id: "b", text: "Pour vendre l'entreprise", correct: false }, { id: "c", text: "Pour annuler le produit", correct: false }, { id: "d", text: "Pour changer de ville", correct: false }] },
    { id: 1811, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cette publicité est très efficace.", options: [{ id: "a", text: "Bu reklam çok etkilidir.", correct: true }, { id: "b", text: "Bu reklam pahalıdır.", correct: false }, { id: "c", text: "Bu reklam eski.", correct: false }, { id: "d", text: "Bu reklam yok.", correct: false }] },
    { id: 1812, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le slogan est facile à retenir.", options: [{ id: "a", text: "Slogan akılda kalıcıdır.", correct: true }, { id: "b", text: "Slogan zor.", correct: false }, { id: "c", text: "Slogan gereksiz.", correct: false }, { id: "d", text: "Slogan kayboldu.", correct: false }] },
    { id: 1813, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La campagne cible les jeunes adultes.", options: [{ id: "a", text: "Kampanya genç yetişkinleri hedefliyor.", correct: true }, { id: "b", text: "Kampanya çocukları hedefliyor.", correct: false }, { id: "c", text: "Kampanya iptal.", correct: false }, { id: "d", text: "Kampanya bütçesiz.", correct: false }] },
    { id: 1814, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le spot passe à la télévision le soir.", options: [{ id: "a", text: "Reklam filmi akşam televizyonda yayınlanır.", correct: true }, { id: "b", text: "Reklam filmi sabah yayınlanır.", correct: false }, { id: "c", text: "Reklam filmi yasak.", correct: false }, { id: "d", text: "Reklam filmi yok.", correct: false }] },
    { id: 1815, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La marque veut améliorer son image.", options: [{ id: "a", text: "Marka imajını geliştirmek istiyor.", correct: true }, { id: "b", text: "Marka kampanyayı bitiriyor.", correct: false }, { id: "c", text: "Marka fiyatı düşürüyor.", correct: false }, { id: "d", text: "Marka ürünü iptal ediyor.", correct: false }] },
    { id: 1816, type: "TRANSLATE", question: "Çevir:", hint: "Reklam", correctAnswer: "La publicité" },
    { id: 1817, type: "TRANSLATE", question: "Çevir:", hint: "Slogan", correctAnswer: "Le slogan" },
    { id: 1818, type: "TRANSLATE", question: "Çevir:", hint: "Bilinirlik", correctAnswer: "La notoriété" },
    { id: 1819, type: "TRANSLATE", question: "Çevir:", hint: "Lansman", correctAnswer: "Le lancement" },
    { id: 1820, type: "TRANSLATE", question: "Çevir:", hint: "Sosyal medya", correctAnswer: "Les réseaux sociaux" }
];

const unit382Quiz4: Question[] = [
    // Quiz 4: Mixed Challenge
    { id: 1821, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est clair.", options: [{ id: "a", text: "message", correct: true }, { id: "b", text: "slogan", correct: false }] },
    { id: 1822, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est limitée cette année.", options: [{ id: "a", text: "promotion", correct: true }, { id: "b", text: "réputation", correct: false }] },
    { id: 1823, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ de la marque augmente.", options: [{ id: "a", text: "notoriété", correct: true }, { id: "b", text: "cible", correct: false }] },
    { id: 1824, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ du produit est prévu demain.", options: [{ id: "a", text: "lancement", correct: true }, { id: "b", text: "logo", correct: false }] },
    { id: 1825, type: "FILL_BLANK", question: "Doldur:", sentence: "La publicité ___ est interdite.", options: [{ id: "a", text: "mensongère", correct: true }, { id: "b", text: "télévisée", correct: false }] },
    { id: 1826, type: "SELECT", question: "'La persuasion' ne demek?", options: [{ id: "a", text: "İkna", correct: true }, { id: "b", text: "Pazarlama", correct: false }, { id: "c", text: "İndirim", correct: false }, { id: "d", text: "Bütçe", correct: false }] },
    { id: 1827, type: "SELECT", question: "'La notoriété' ne demek?", options: [{ id: "a", text: "Bilinirlik", correct: true }, { id: "b", text: "Rekabet", correct: false }, { id: "c", text: "Tüketim", correct: false }, { id: "d", text: "Kampanya", correct: false }] },
    { id: 1828, type: "SELECT", question: "'L'image de marque' ne demek?", options: [{ id: "a", text: "Marka imajı", correct: true }, { id: "b", text: "Afiş tasarımı", correct: false }, { id: "c", text: "Sosyal medya", correct: false }, { id: "d", text: "Reklam filmi", correct: false }] },
    { id: 1829, type: "SELECT", question: "'La réputation' ne demek?", options: [{ id: "a", text: "İtibar", correct: true }, { id: "b", text: "Teklif", correct: false }, { id: "c", text: "Mesaj", correct: false }, { id: "d", text: "Pazar", correct: false }] },
    { id: 1830, type: "SELECT", question: "'Le budget publicitaire' ne demek?", options: [{ id: "a", text: "Reklam bütçesi", correct: true }, { id: "b", text: "Bütçe raporu", correct: false }, { id: "c", text: "Pazarlama planı", correct: false }, { id: "d", text: "Satış hedefi", correct: false }] },
    { id: 1831, type: "TRANSLATE", question: "Çevir:", hint: "Online reklam geniş bir kitleye ulaşır.", correctAnswer: "La publicité en ligne touche un large public." },
    { id: 1832, type: "TRANSLATE", question: "Çevir:", hint: "Logo basit ve tanınabilir olmalı.", correctAnswer: "Le logo doit être simple et reconnaissable." },
    { id: 1833, type: "TRANSLATE", question: "Çevir:", hint: "Kampanya birçok müşteri çeker.", correctAnswer: "La promotion attire beaucoup de clients." },
    { id: 1834, type: "TRANSLATE", question: "Çevir:", hint: "Reklam kampanyası bir ay sürer.", correctAnswer: "La campagne publicitaire dure un mois." },
    { id: 1835, type: "TRANSLATE", question: "Çevir:", hint: "Broşür yenilikleri sunar.", correctAnswer: "Le prospectus présente les nouveautés." },
    { id: 1836, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le marketing", options: [{ id: "a", text: "Pazarlama", correct: true }, { id: "b", text: "Kampanya", correct: false }, { id: "c", text: "Rekabet", correct: false }, { id: "d", text: "Slogan", correct: false }] },
    { id: 1837, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La stratégie", options: [{ id: "a", text: "Strateji", correct: true }, { id: "b", text: "Bütçe", correct: false }, { id: "c", text: "Hedef kitle", correct: false }, { id: "d", text: "Kampanya", correct: false }] },
    { id: 1838, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'influenceur", options: [{ id: "a", text: "Influencer / Fenomen", correct: true }, { id: "b", text: "Müşteri", correct: false }, { id: "c", text: "Satıcı", correct: false }, { id: "d", text: "Tüketici", correct: false }] },
    { id: 1839, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La publicité télévisée", options: [{ id: "a", text: "TV reklamı", correct: true }, { id: "b", text: "Online reklam", correct: false }, { id: "c", text: "Aldatıcı reklam", correct: false }, { id: "d", text: "Radyo reklamı", correct: false }] },
    { id: 1840, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La concurrence", options: [{ id: "a", text: "Rekabet", correct: true }, { id: "b", text: "İtibar", correct: false }, { id: "c", text: "Teklif", correct: false }, { id: "d", text: "Marka", correct: false }] }
];

// ===== UNIT 383 HARDCODED QUIZZES =====
const unit383Quiz1: Question[] = [
    // Quiz 1: Vocab & Basics
    { id: 1841, type: "SELECT", question: "'La nouvelle' ne demek?", options: [{ id: "a", text: "Haber", correct: true }, { id: "b", text: "Manşet", correct: false }, { id: "c", text: "Gazete", correct: false }, { id: "d", text: "Söylenti", correct: false }] },
    { id: 1842, type: "SELECT", question: "'L'actualité' ne demek?", options: [{ id: "a", text: "Gündem", correct: true }, { id: "b", text: "Duyuru", correct: false }, { id: "c", text: "Manşet", correct: false }, { id: "d", text: "Basın", correct: false }] },
    { id: 1843, type: "SELECT", question: "'Le journal' ne demek?", options: [{ id: "a", text: "Gazete", correct: true }, { id: "b", text: "Kanal", correct: false }, { id: "c", text: "Röportaj", correct: false }, { id: "d", text: "Bülten", correct: false }] },
    { id: 1844, type: "SELECT", question: "'Le journaliste' ne demek?", options: [{ id: "a", text: "Gazeteci", correct: true }, { id: "b", text: "Okuyucu", correct: false }, { id: "c", text: "Sunucu", correct: false }, { id: "d", text: "Şoför", correct: false }] },
    { id: 1845, type: "SELECT", question: "'La rédaction' ne demek?", options: [{ id: "a", text: "Redaksiyon / yazı işleri", correct: true }, { id: "b", text: "Basın toplantısı", correct: false }, { id: "c", text: "Program", correct: false }, { id: "d", text: "Reklam", correct: false }] },
    { id: 1846, type: "SELECT", question: "'L'article' ne demek?", options: [{ id: "a", text: "Makale / haber yazısı", correct: true }, { id: "b", text: "Yorum", correct: false }, { id: "c", text: "Kaynak", correct: false }, { id: "d", text: "Söylenti", correct: false }] },
    { id: 1847, type: "SELECT", question: "'Le titre' ne demek?", options: [{ id: "a", text: "Başlık", correct: true }, { id: "b", text: "Haber", correct: false }, { id: "c", text: "Röportaj", correct: false }, { id: "d", text: "Gazete", correct: false }] },
    { id: 1848, type: "SELECT", question: "'La une' ne demek?", options: [{ id: "a", text: "Manşet", correct: true }, { id: "b", text: "Kaynak", correct: false }, { id: "c", text: "Program", correct: false }, { id: "d", text: "Kanal", correct: false }] },
    { id: 1849, type: "SELECT", question: "'Le reportage' ne demek?", options: [{ id: "a", text: "Haber / röportaj", correct: true }, { id: "b", text: "Basın bildirisi", correct: false }, { id: "c", text: "Sosyal medya", correct: false }, { id: "d", text: "Bütçe", correct: false }] },
    { id: 1850, type: "SELECT", question: "'L'interview' ne demek?", options: [{ id: "a", text: "Röportaj", correct: true }, { id: "b", text: "Başlık", correct: false }, { id: "c", text: "Yayın", correct: false }, { id: "d", text: "Söylenti", correct: false }] },
    { id: 1851, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le direct", options: [{ id: "a", text: "Canlı yayın", correct: true }, { id: "b", text: "Manşet", correct: false }, { id: "c", text: "Basın", correct: false }, { id: "d", text: "Kaynak", correct: false }] },
    { id: 1852, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La chaîne", options: [{ id: "a", text: "Kanal", correct: true }, { id: "b", text: "Program", correct: false }, { id: "c", text: "Gazete", correct: false }, { id: "d", text: "Okuyucu", correct: false }] },
    { id: 1853, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La radio", options: [{ id: "a", text: "Radyo", correct: true }, { id: "b", text: "Televizyon", correct: false }, { id: "c", text: "Gazete", correct: false }, { id: "d", text: "Afiş", correct: false }] },
    { id: 1854, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La presse", options: [{ id: "a", text: "Basın", correct: true }, { id: "b", text: "Program", correct: false }, { id: "c", text: "Hedef", correct: false }, { id: "d", text: "Kanal", correct: false }] },
    { id: 1855, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La source", options: [{ id: "a", text: "Kaynak", correct: true }, { id: "b", text: "Röportaj", correct: false }, { id: "c", text: "Başlık", correct: false }, { id: "d", text: "Söylenti", correct: false }] },
    { id: 1856, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est confirmée.", options: [{ id: "a", text: "nouvelle", correct: true }, { id: "b", text: "chaîne", correct: false }] },
    { id: 1857, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ attire l'attention.", options: [{ id: "a", text: "titre", correct: true }, { id: "b", text: "débat", correct: false }] },
    { id: 1858, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ diffuse les infos.", options: [{ id: "a", text: "chaîne", correct: true }, { id: "b", text: "rumeur", correct: false }] },
    { id: 1859, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est en direct.", options: [{ id: "a", text: "reportage", correct: true }, { id: "b", text: "communiqué", correct: false }] },
    { id: 1860, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est fiable.", options: [{ id: "a", text: "source", correct: true }, { id: "b", text: "télévision", correct: false }] }
];

const unit383Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1861, type: "SELECT", question: "Kaynak belirtmek için hangisi kullanılır?", options: [{ id: "a", text: "selon / d'après", correct: true }, { id: "b", text: "pendant", correct: false }, { id: "c", text: "malgré", correct: false }, { id: "d", text: "parce que", correct: false }] },
    { id: 1862, type: "SELECT", question: "Dolaylı anlatımda hangi bağlaç kullanılır?", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "où", correct: false }, { id: "c", text: "quand", correct: false }, { id: "d", text: "si", correct: false }] },
    { id: 1863, type: "SELECT", question: "Hangi cümle söylenti ifade eder?", options: [{ id: "a", text: "Il y aurait des retards.", correct: true }, { id: "b", text: "Il y a des retards.", correct: false }, { id: "c", text: "Il y avait des retards.", correct: false }, { id: "d", text: "Il aura des retards.", correct: false }] },
    { id: 1864, type: "SELECT", question: "'D'après' ne anlama gelir?", options: [{ id: "a", text: "...'e göre", correct: true }, { id: "b", text: "...'den önce", correct: false }, { id: "c", text: "...'den sonra", correct: false }, { id: "d", text: "...'e rağmen", correct: false }] },
    { id: 1865, type: "SELECT", question: "Duyuru yapmak için hangi ifade kullanılır?", options: [{ id: "a", text: "annoncer que", correct: true }, { id: "b", text: "oublier que", correct: false }, { id: "c", text: "arrêter que", correct: false }, { id: "d", text: "finir que", correct: false }] },
    { id: 1866, type: "SELECT", question: "Hangi cümle conditionnel journalistique örneğidir?", options: [{ id: "a", text: "Le service serait gratuit.", correct: true }, { id: "b", text: "Le service est gratuit.", correct: false }, { id: "c", text: "Le service était gratuit.", correct: false }, { id: "d", text: "Le service sera gratuit.", correct: false }] },
    { id: 1867, type: "FILL_BLANK", question: "Doldur:", sentence: "___ la police, l'incident est terminé.", options: [{ id: "a", text: "Selon", correct: true }, { id: "b", text: "Pendant", correct: false }] },
    { id: 1868, type: "FILL_BLANK", question: "Doldur:", sentence: "Le maire ___ que le projet commence demain.", options: [{ id: "a", text: "annonce", correct: true }, { id: "b", text: "annonces", correct: false }] },
    { id: 1869, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ des retards sur la ligne.", options: [{ id: "a", text: "y aurait", correct: true }, { id: "b", text: "y a", correct: false }] },
    { id: 1870, type: "FILL_BLANK", question: "Doldur:", sentence: "D'après le journal, la route ___ fermée.", options: [{ id: "a", text: "sera", correct: true }, { id: "b", text: "est", correct: false }] },
    { id: 1871, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tu as vu l'article sur la ville ?", options: [{ id: "a", text: "Şehirle ilgili makaleyi gördün mü?", correct: true }, { id: "b", text: "Şehirde geziye çıktın mı?", correct: false }, { id: "c", text: "Şehirde hava nasıl?", correct: false }, { id: "d", text: "Şehirde yaşar mısın?", correct: false }] },
    { id: 1872, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le titre est accrocheur, mais un peu exagéré.", options: [{ id: "a", text: "Başlık dikkat çekici ama biraz abartılı.", correct: true }, { id: "b", text: "Başlık hiç ilgi çekmiyor.", correct: false }, { id: "c", text: "Başlık çok kısa.", correct: false }, { id: "d", text: "Başlık yok.", correct: false }] },
    { id: 1873, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je vais regarder le direct.", options: [{ id: "a", text: "Canlı yayını izleyeceğim.", correct: true }, { id: "b", text: "Gazeteyi okuyacağım.", correct: false }, { id: "c", text: "Haber yazacağım.", correct: false }, { id: "d", text: "Röportaj yapacağım.", correct: false }] },
    { id: 1874, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La chaîne diffuse l'interview ce soir.", options: [{ id: "a", text: "Kanal bu akşam röportajı yayınlıyor.", correct: true }, { id: "b", text: "Kanal yayını durduruyor.", correct: false }, { id: "c", text: "Kanal yeni bir gazete çıkarıyor.", correct: false }, { id: "d", text: "Kanal sabah yayın yapıyor.", correct: false }] },
    { id: 1875, type: "TRANSLATE", question: "Çevir:", hint: "Bu haber kaynak tarafından doğrulandı.", correctAnswer: "Cette nouvelle est confirmée par la source." },
    { id: 1876, type: "TRANSLATE", question: "Çevir:", hint: "Basın toplantısı saat 10'da başlıyor.", correctAnswer: "La conférence de presse commence à dix heures." },
    { id: 1877, type: "TRANSLATE", question: "Çevir:", hint: "Söylenti doğrulanmadı.", correctAnswer: "La rumeur n'est pas confirmée." },
    { id: 1878, type: "SELECT", question: "Konuşma: 'Les médias parlent beaucoup de ce débat.' ne demek?", options: [{ id: "a", text: "Medyalar bu tartışmadan çok bahsediyor.", correct: true }, { id: "b", text: "Medyalar tartışmayı bitirdi.", correct: false }, { id: "c", text: "Medyalar tartışmıyor.", correct: false }, { id: "d", text: "Medyalar tartışmayı sevmiyor.", correct: false }] },
    { id: 1879, type: "SELECT", question: "Konuşma: 'En ligne, c'est plus rapide.' ne demek?", options: [{ id: "a", text: "Online, daha hızlı.", correct: true }, { id: "b", text: "Online, daha pahalı.", correct: false }, { id: "c", text: "Online, daha zor.", correct: false }, { id: "d", text: "Online, daha yavaş.", correct: false }] },
    { id: 1880, type: "SELECT", question: "Konuşma: 'C'est vrai, il faut vérifier les faits.' ne demek?", options: [{ id: "a", text: "Doğru, gerçekleri doğrulamak gerekir.", correct: true }, { id: "b", text: "Doğru, hiçbir şey yapmaya gerek yok.", correct: false }, { id: "c", text: "Doğru, sadece başlığı oku.", correct: false }, { id: "d", text: "Doğru, gerçekleri sakla.", correct: false }] }
];

const unit383Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension & Phrases
    { id: 1881, type: "SELECT", question: "Sur quoi l'article est-il préparé ?", options: [{ id: "a", text: "L'ouverture d'une nouvelle ligne de tramway", correct: true }, { id: "b", text: "Une fête sportive", correct: false }, { id: "c", text: "La météo", correct: false }, { id: "d", text: "Un concert", correct: false }] },
    { id: 1882, type: "SELECT", question: "Qui la rédaction envoie-t-elle ?", options: [{ id: "a", text: "Une journaliste", correct: true }, { id: "b", text: "Un photographe uniquement", correct: false }, { id: "c", text: "Un lecteur", correct: false }, { id: "d", text: "Un vendeur", correct: false }] },
    { id: 1883, type: "SELECT", question: "Où va la journaliste ?", options: [{ id: "a", text: "Sur place", correct: true }, { id: "b", text: "À l'étranger", correct: false }, { id: "c", text: "À l'école", correct: false }, { id: "d", text: "À l'hôpital", correct: false }] },
    { id: 1884, type: "SELECT", question: "Qui interviewe-t-elle ?", options: [{ id: "a", text: "Le maire et des habitants", correct: true }, { id: "b", text: "Des touristes", correct: false }, { id: "c", text: "Des élèves", correct: false }, { id: "d", text: "Des médecins", correct: false }] },
    { id: 1885, type: "SELECT", question: "Que fait-elle avec les chiffres ?", options: [{ id: "a", text: "Elle les vérifie auprès de la source officielle", correct: true }, { id: "b", text: "Elle les invente", correct: false }, { id: "c", text: "Elle les ignore", correct: false }, { id: "d", text: "Elle les cache", correct: false }] },
    { id: 1886, type: "SELECT", question: "Où circule la rumeur ?", options: [{ id: "a", text: "Sur les réseaux sociaux", correct: true }, { id: "b", text: "À la radio", correct: false }, { id: "c", text: "Dans la rue seulement", correct: false }, { id: "d", text: "Dans un musée", correct: false }] },
    { id: 1887, type: "SELECT", question: "Que dit la rumeur ?", options: [{ id: "a", text: "Les billets seront gratuits", correct: true }, { id: "b", text: "Le tramway est annulé", correct: false }, { id: "c", text: "La ligne est déjà fermée", correct: false }, { id: "d", text: "Les billets sont très chers", correct: false }] },
    { id: 1888, type: "SELECT", question: "La rumeur est-elle confirmée ?", options: [{ id: "a", text: "Non, elle n'est pas confirmée", correct: true }, { id: "b", text: "Oui, totalement", correct: false }, { id: "c", text: "Oui, par le maire", correct: false }, { id: "d", text: "On ne sait jamais", correct: false }] },
    { id: 1889, type: "SELECT", question: "Qu'est-ce qui attire beaucoup de lecteurs ?", options: [{ id: "a", text: "Le titre de la une", correct: true }, { id: "b", text: "La météo", correct: false }, { id: "c", text: "Les photos de vacances", correct: false }, { id: "d", text: "La publicité", correct: false }] },
    { id: 1890, type: "SELECT", question: "Où le journal publie-t-il l'article ?", options: [{ id: "a", text: "En ligne et en version papier", correct: true }, { id: "b", text: "Seulement à la radio", correct: false }, { id: "c", text: "Seulement en vidéo", correct: false }, { id: "d", text: "Uniquement à la télévision", correct: false }] },
    { id: 1891, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je lis les nouvelles tous les jours.", options: [{ id: "a", text: "Her gün haberleri okurum.", correct: true }, { id: "b", text: "Her gün röportaj yaparım.", correct: false }, { id: "c", text: "Her gün gazete almam.", correct: false }, { id: "d", text: "Her gün televizyon izlerim.", correct: false }] },
    { id: 1892, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'article a été publié ce matin.", options: [{ id: "a", text: "Makale bu sabah yayımlandı.", correct: true }, { id: "b", text: "Makale yarın yayımlanacak.", correct: false }, { id: "c", text: "Makale iptal edildi.", correct: false }, { id: "d", text: "Makale gizli.", correct: false }] },
    { id: 1893, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La rumeur n'est pas confirmée.", options: [{ id: "a", text: "Söylenti doğrulanmadı.", correct: true }, { id: "b", text: "Söylenti doğru.", correct: false }, { id: "c", text: "Söylenti unutuldu.", correct: false }, { id: "d", text: "Söylenti bitti.", correct: false }] },
    { id: 1894, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le débat est animé mais respectueux.", options: [{ id: "a", text: "Tartışma hararetli ama saygılı.", correct: true }, { id: "b", text: "Tartışma sakin ve sıkıcı.", correct: false }, { id: "c", text: "Tartışma iptal.", correct: false }, { id: "d", text: "Tartışma yok.", correct: false }] },
    { id: 1895, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les médias parlent de ce sujet.", options: [{ id: "a", text: "Medyalar bu konudan bahsediyor.", correct: true }, { id: "b", text: "Medyalar konuyu bilmiyor.", correct: false }, { id: "c", text: "Medyalar konuyu gizliyor.", correct: false }, { id: "d", text: "Medyalar konuyu kapattı.", correct: false }] },
    { id: 1896, type: "TRANSLATE", question: "Çevir:", hint: "Basın", correctAnswer: "La presse" },
    { id: 1897, type: "TRANSLATE", question: "Çevir:", hint: "Manşet", correctAnswer: "La une" },
    { id: 1898, type: "TRANSLATE", question: "Çevir:", hint: "Başlık", correctAnswer: "Le titre" },
    { id: 1899, type: "TRANSLATE", question: "Çevir:", hint: "Kaynak", correctAnswer: "La source" },
    { id: 1900, type: "TRANSLATE", question: "Çevir:", hint: "Gazeteci", correctAnswer: "Le journaliste" }
];

const unit383Quiz4: Question[] = [
    // Quiz 4: Mixed Challenge
    { id: 1901, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est fiable.", options: [{ id: "a", text: "source", correct: true }, { id: "b", text: "débat", correct: false }] },
    { id: 1902, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ attire l'attention.", options: [{ id: "a", text: "une", correct: true }, { id: "b", text: "radio", correct: false }] },
    { id: 1903, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ est en direct.", options: [{ id: "a", text: "interview", correct: true }, { id: "b", text: "actualité", correct: false }] },
    { id: 1904, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ publie l'article.", options: [{ id: "a", text: "journal", correct: true }, { id: "b", text: "débat", correct: false }] },
    { id: 1905, type: "FILL_BLANK", question: "Doldur:", sentence: "Les ___ parlent du sujet.", options: [{ id: "a", text: "médias", correct: true }, { id: "b", text: "lecteurs", correct: false }] },
    { id: 1906, type: "SELECT", question: "'La diffusion' ne demek?", options: [{ id: "a", text: "Yayın", correct: true }, { id: "b", text: "Başlık", correct: false }, { id: "c", text: "Kaynak", correct: false }, { id: "d", text: "Basın", correct: false }] },
    { id: 1907, type: "SELECT", question: "'L'abonnement' ne demek?", options: [{ id: "a", text: "Abonelik", correct: true }, { id: "b", text: "Röportaj", correct: false }, { id: "c", text: "Program", correct: false }, { id: "d", text: "Afiş", correct: false }] },
    { id: 1908, type: "SELECT", question: "'Le lecteur' ne demek?", options: [{ id: "a", text: "Okuyucu", correct: true }, { id: "b", text: "Gazeteci", correct: false }, { id: "c", text: "Sunucu", correct: false }, { id: "d", text: "Yazar", correct: false }] },
    { id: 1909, type: "SELECT", question: "'Le communiqué' ne demek?", options: [{ id: "a", text: "Basın bildirisi", correct: true }, { id: "b", text: "Basın toplantısı", correct: false }, { id: "c", text: "Yayın akışı", correct: false }, { id: "d", text: "Söylenti", correct: false }] },
    { id: 1910, type: "SELECT", question: "'La censure' ne demek?", options: [{ id: "a", text: "Sansür", correct: true }, { id: "b", text: "Röportaj", correct: false }, { id: "c", text: "Kanal", correct: false }, { id: "d", text: "Basın", correct: false }] },
    { id: 1911, type: "TRANSLATE", question: "Çevir:", hint: "Canlı yayını takip ediyoruz.", correctAnswer: "Nous suivons le direct." },
    { id: 1912, type: "TRANSLATE", question: "Çevir:", hint: "Başlık dikkat çekici.", correctAnswer: "Le titre est accrocheur." },
    { id: 1913, type: "TRANSLATE", question: "Çevir:", hint: "Sosyal medya bilgiyi yayıyor.", correctAnswer: "Les réseaux sociaux relaient l'information." },
    { id: 1914, type: "TRANSLATE", question: "Çevir:", hint: "Gazete online versiyonu da yayınlıyor.", correctAnswer: "Le journal publie aussi la version en ligne." },
    { id: 1915, type: "TRANSLATE", question: "Çevir:", hint: "Bu röportaj canlı.", correctAnswer: "L'interview est en direct." },
    { id: 1916, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La télévision", options: [{ id: "a", text: "Televizyon", correct: true }, { id: "b", text: "Radyo", correct: false }, { id: "c", text: "Gazete", correct: false }, { id: "d", text: "Program", correct: false }] },
    { id: 1917, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le reportage", options: [{ id: "a", text: "Haber / röportaj", correct: true }, { id: "b", text: "Basın bildirisi", correct: false }, { id: "c", text: "Manşet", correct: false }, { id: "d", text: "Tartışma", correct: false }] },
    { id: 1918, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La conférence de presse", options: [{ id: "a", text: "Basın toplantısı", correct: true }, { id: "b", text: "Basın", correct: false }, { id: "c", text: "Program", correct: false }, { id: "d", text: "Söylenti", correct: false }] },
    { id: 1919, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'opinion", options: [{ id: "a", text: "Görüş", correct: true }, { id: "b", text: "Manşet", correct: false }, { id: "c", text: "Başlık", correct: false }, { id: "d", text: "Haber", correct: false }] },
    { id: 1920, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La rumeur", options: [{ id: "a", text: "Söylenti", correct: true }, { id: "b", text: "Kaynak", correct: false }, { id: "c", text: "Gazete", correct: false }, { id: "d", text: "Program", correct: false }] }
];

// ===== UNIT 384 HARDCODED QUIZZES =====
const unit384Quiz1: Question[] = [
    // Quiz 1: Vocab & Basics
    { id: 1921, type: "SELECT", question: "'La politique' ne demek?", options: [{ id: "a", text: "Siyaset", correct: true }, { id: "b", text: "Basın", correct: false }, { id: "c", text: "Program", correct: false }, { id: "d", text: "Söylenti", correct: false }] },
    { id: 1922, type: "SELECT", question: "'Le gouvernement' ne demek?", options: [{ id: "a", text: "Hükümet", correct: true }, { id: "b", text: "Muhalefet", correct: false }, { id: "c", text: "Kanal", correct: false }, { id: "d", text: "Basın", correct: false }] },
    { id: 1923, type: "SELECT", question: "'La démocratie' ne demek?", options: [{ id: "a", text: "Demokrasi", correct: true }, { id: "b", text: "Monarşi", correct: false }, { id: "c", text: "Koalisyon", correct: false }, { id: "d", text: "Parlamento", correct: false }] },
    { id: 1924, type: "SELECT", question: "'La monarchie' ne demek?", options: [{ id: "a", text: "Monarşi", correct: true }, { id: "b", text: "Cumhuriyet", correct: false }, { id: "c", text: "Demokrasi", correct: false }, { id: "d", text: "Adalet", correct: false }] },
    { id: 1925, type: "SELECT", question: "'La république' ne demek?", options: [{ id: "a", text: "Cumhuriyet", correct: true }, { id: "b", text: "Monarşi", correct: false }, { id: "c", text: "Seçim", correct: false }, { id: "d", text: "Bütçe", correct: false }] },
    { id: 1926, type: "SELECT", question: "'Le parlement' ne demek?", options: [{ id: "a", text: "Parlamento", correct: true }, { id: "b", text: "Hükümet", correct: false }, { id: "c", text: "Kanal", correct: false }, { id: "d", text: "Kampanya", correct: false }] },
    { id: 1927, type: "SELECT", question: "'La constitution' ne demek?", options: [{ id: "a", text: "Anayasa", correct: true }, { id: "b", text: "Yasa", correct: false }, { id: "c", text: "Parti", correct: false }, { id: "d", text: "Koalisyon", correct: false }] },
    { id: 1928, type: "SELECT", question: "'La loi' ne demek?", options: [{ id: "a", text: "Yasa", correct: true }, { id: "b", text: "Program", correct: false }, { id: "c", text: "Seçim", correct: false }, { id: "d", text: "Basın", correct: false }] },
    { id: 1929, type: "SELECT", question: "'L'élection' ne demek?", options: [{ id: "a", text: "Seçim", correct: true }, { id: "b", text: "Oy", correct: false }, { id: "c", text: "Rapor", correct: false }, { id: "d", text: "Reform", correct: false }] },
    { id: 1930, type: "SELECT", question: "'Le vote' ne demek?", options: [{ id: "a", text: "Oy", correct: true }, { id: "b", text: "Kampanya", correct: false }, { id: "c", text: "Parti", correct: false }, { id: "d", text: "Söylenti", correct: false }] },
    { id: 1931, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'électeur", options: [{ id: "a", text: "Seçmen", correct: true }, { id: "b", text: "Aday", correct: false }, { id: "c", text: "Bakan", correct: false }, { id: "d", text: "Başkan", correct: false }] },
    { id: 1932, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le candidat", options: [{ id: "a", text: "Aday", correct: true }, { id: "b", text: "Seçim", correct: false }, { id: "c", text: "Yasa", correct: false }, { id: "d", text: "Oy", correct: false }] },
    { id: 1933, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'opposition", options: [{ id: "a", text: "Muhalefet", correct: true }, { id: "b", text: "Çoğunluk", correct: false }, { id: "c", text: "Koalisyon", correct: false }, { id: "d", text: "Hükümet", correct: false }] },
    { id: 1934, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La majorité", options: [{ id: "a", text: "Çoğunluk", correct: true }, { id: "b", text: "Azınlık", correct: false }, { id: "c", text: "Yasa", correct: false }, { id: "d", text: "Program", correct: false }] },
    { id: 1935, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La minorité", options: [{ id: "a", text: "Azınlık", correct: true }, { id: "b", text: "Çoğunluk", correct: false }, { id: "c", text: "Seçim", correct: false }, { id: "d", text: "Kanal", correct: false }] },
    { id: 1936, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ propose une réforme.", options: [{ id: "a", text: "gouvernement", correct: true }, { id: "b", text: "débat", correct: false }] },
    { id: 1937, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ protège les droits.", options: [{ id: "a", text: "constitution", correct: true }, { id: "b", text: "campagne", correct: false }] },
    { id: 1938, type: "FILL_BLANK", question: "Doldur:", sentence: "Les citoyens vont ___.", options: [{ id: "a", text: "voter", correct: true }, { id: "b", text: "votent", correct: false }] },
    { id: 1939, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ soutient le président.", options: [{ id: "a", text: "majorité", correct: true }, { id: "b", text: "minorité", correct: false }] },
    { id: 1940, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est organisé en juin.", options: [{ id: "a", text: "référendum", correct: true }, { id: "b", text: "reportage", correct: false }] }
];

const unit384Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 1941, type: "SELECT", question: "Zorunluluk bildiren ifade hangisi?", options: [{ id: "a", text: "il faut", correct: true }, { id: "b", text: "peut-être", correct: false }, { id: "c", text: "cependant", correct: false }, { id: "d", text: "aujourd'hui", correct: false }] },
    { id: 1942, type: "SELECT", question: "'devoir' fiili ne anlama gelir?", options: [{ id: "a", text: "zorunda olmak", correct: true }, { id: "b", text: "istirmek", correct: false }, { id: "c", text: "görmek", correct: false }, { id: "d", text: "seçmek", correct: false }] },
    { id: 1943, type: "SELECT", question: "'avoir le droit de' ne demek?", options: [{ id: "a", text: "izinli olmak", correct: true }, { id: "b", text: "yasak olmak", correct: false }, { id: "c", text: "zorunda olmak", correct: false }, { id: "d", text: "vazgeçmek", correct: false }] },
    { id: 1944, type: "SELECT", question: "Edilgen yapıya örnek hangisi?", options: [{ id: "a", text: "La loi est votée.", correct: true }, { id: "b", text: "La loi vote.", correct: false }, { id: "c", text: "La loi va voter.", correct: false }, { id: "d", text: "La loi votait.", correct: false }] },
    { id: 1945, type: "SELECT", question: "'qui' bağlacı neyi temsil eder?", options: [{ id: "a", text: "Özne", correct: true }, { id: "b", text: "Nesne", correct: false }, { id: "c", text: "Zaman", correct: false }, { id: "d", text: "Yer", correct: false }] },
    { id: 1946, type: "SELECT", question: "'que' bağlacı neyi temsil eder?", options: [{ id: "a", text: "Nesne", correct: true }, { id: "b", text: "Özne", correct: false }, { id: "c", text: "Zaman", correct: false }, { id: "d", text: "Neden", correct: false }] },
    { id: 1947, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ respecter la loi.", options: [{ id: "a", text: "faut", correct: true }, { id: "b", text: "fait", correct: false }] },
    { id: 1948, type: "FILL_BLANK", question: "Doldur:", sentence: "Les citoyens ___ voter.", options: [{ id: "a", text: "doivent", correct: true }, { id: "b", text: "dois", correct: false }] },
    { id: 1949, type: "FILL_BLANK", question: "Doldur:", sentence: "La loi est ___ par le parlement.", options: [{ id: "a", text: "votée", correct: true }, { id: "b", text: "voter", correct: false }] },
    { id: 1950, type: "FILL_BLANK", question: "Doldur:", sentence: "Le parti qui gagne ___ le gouvernement.", options: [{ id: "a", text: "forme", correct: true }, { id: "b", text: "former", correct: false }] },
    { id: 1951, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tu vas voter dimanche ?", options: [{ id: "a", text: "Pazar günü oy kullanacak mısın?", correct: true }, { id: "b", text: "Pazar günü çalışacak mısın?", correct: false }, { id: "c", text: "Pazar günü tatil mi?", correct: false }, { id: "d", text: "Pazar günü seçim yok mu?", correct: false }] },
    { id: 1952, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'opposition n'est pas d'accord.", options: [{ id: "a", text: "Muhalefet aynı fikirde değil.", correct: true }, { id: "b", text: "Muhalefet destekliyor.", correct: false }, { id: "c", text: "Muhalefet hiç yok.", correct: false }, { id: "d", text: "Muhalefet lideri konuşuyor.", correct: false }] },
    { id: 1953, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La campagne électorale devient intense.", options: [{ id: "a", text: "Seçim kampanyası yoğunlaşıyor.", correct: true }, { id: "b", text: "Seçim kampanyası bitiyor.", correct: false }, { id: "c", text: "Seçim kampanyası yok.", correct: false }, { id: "d", text: "Seçim kampanyası sakin.", correct: false }] },
    { id: 1954, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Oui, tout le monde parle de politique.", options: [{ id: "a", text: "Evet, herkes siyasetten bahsediyor.", correct: true }, { id: "b", text: "Evet, kimse siyaset konuşmuyor.", correct: false }, { id: "c", text: "Evet, herkes spordan bahsediyor.", correct: false }, { id: "d", text: "Evet, herkes susuyor.", correct: false }] },
    { id: 1955, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le président propose une nouvelle loi.", options: [{ id: "a", text: "Başkan yeni bir yasa öneriyor.", correct: true }, { id: "b", text: "Başkan yasayı iptal ediyor.", correct: false }, { id: "c", text: "Başkan konuşmayı bitirdi.", correct: false }, { id: "d", text: "Başkan istifa ediyor.", correct: false }] },
    { id: 1956, type: "TRANSLATE", question: "Çevir:", hint: "Yasa parlamento tarafından kabul edilir.", correctAnswer: "La loi est votée par le parlement." },
    { id: 1957, type: "TRANSLATE", question: "Çevir:", hint: "Vatandaşlar oy kullanmak zorunda.", correctAnswer: "Les citoyens doivent voter." },
    { id: 1958, type: "TRANSLATE", question: "Çevir:", hint: "Bu reform önemlidir.", correctAnswer: "Cette réforme est importante." },
    { id: 1959, type: "TRANSLATE", question: "Çevir:", hint: "Muhalefet projeyi eleştiriyor.", correctAnswer: "L'opposition critique le projet." },
    { id: 1960, type: "TRANSLATE", question: "Çevir:", hint: "Seçimler pazar günü yapılacak.", correctAnswer: "Les élections auront lieu dimanche." }
];

const unit384Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension & Phrases
    { id: 1961, type: "SELECT", question: "De quel type d'élections parle-t-on ?", options: [{ id: "a", text: "Les élections municipales", correct: true }, { id: "b", text: "Les élections nationales", correct: false }, { id: "c", text: "Les élections scolaires", correct: false }, { id: "d", text: "Les élections sportives", correct: false }] },
    { id: 1962, type: "SELECT", question: "Qui publie le reportage ?", options: [{ id: "a", text: "La rédaction du journal", correct: true }, { id: "b", text: "La radio", correct: false }, { id: "c", text: "Une école", correct: false }, { id: "d", text: "Un magasin", correct: false }] },
    { id: 1963, type: "SELECT", question: "Qui la journaliste interviewe-t-elle ?", options: [{ id: "a", text: "Deux candidats et des citoyens", correct: true }, { id: "b", text: "Des touristes", correct: false }, { id: "c", text: "Des policiers", correct: false }, { id: "d", text: "Des médecins", correct: false }] },
    { id: 1964, type: "SELECT", question: "Que promet le candidat A ?", options: [{ id: "a", text: "Une réforme des transports", correct: true }, { id: "b", text: "Une nouvelle école", correct: false }, { id: "c", text: "Un festival", correct: false }, { id: "d", text: "Un musée", correct: false }] },
    { id: 1965, type: "SELECT", question: "Sur quoi insiste le candidat B ?", options: [{ id: "a", text: "La sécurité", correct: true }, { id: "b", text: "Le sport", correct: false }, { id: "c", text: "La météo", correct: false }, { id: "d", text: "La publicité", correct: false }] },
    { id: 1966, type: "SELECT", question: "Que fait l'opposition ?", options: [{ id: "a", text: "Elle critique le budget proposé", correct: true }, { id: "b", text: "Elle soutient le candidat A", correct: false }, { id: "c", text: "Elle organise un concert", correct: false }, { id: "d", text: "Elle annule l'élection", correct: false }] },
    { id: 1967, type: "SELECT", question: "Qui annonce la date du vote ?", options: [{ id: "a", text: "La commission électorale", correct: true }, { id: "b", text: "Le maire", correct: false }, { id: "c", text: "La télévision", correct: false }, { id: "d", text: "Les citoyens", correct: false }] },
    { id: 1968, type: "SELECT", question: "Quand le vote aura-t-il lieu ?", options: [{ id: "a", text: "Dimanche", correct: true }, { id: "b", text: "Lundi", correct: false }, { id: "c", text: "Mardi", correct: false }, { id: "d", text: "Vendredi", correct: false }] },
    { id: 1969, type: "SELECT", question: "Que rappelle le journal ?", options: [{ id: "a", text: "L'importance de la participation", correct: true }, { id: "b", text: "Le prix des billets", correct: false }, { id: "c", text: "La fermeture des routes", correct: false }, { id: "d", text: "Le match de football", correct: false }] },
    { id: 1970, type: "SELECT", question: "Où l'article est-il aussi publié ?", options: [{ id: "a", text: "En ligne", correct: true }, { id: "b", text: "À la radio", correct: false }, { id: "c", text: "À la télévision", correct: false }, { id: "d", text: "Dans un musée", correct: false }] },
    { id: 1971, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le gouvernement annonce une réforme.", options: [{ id: "a", text: "Hükümet bir reform duyuruyor.", correct: true }, { id: "b", text: "Hükümet reformu iptal ediyor.", correct: false }, { id: "c", text: "Hükümet sessiz kalıyor.", correct: false }, { id: "d", text: "Hükümet seçimleri erteliyor.", correct: false }] },
    { id: 1972, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les élections auront lieu dimanche.", options: [{ id: "a", text: "Seçimler pazar günü yapılacak.", correct: true }, { id: "b", text: "Seçimler bugün yapılacak.", correct: false }, { id: "c", text: "Seçimler iptal.", correct: false }, { id: "d", text: "Seçimler gelecek yıl.", correct: false }] },
    { id: 1973, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La démocratie repose sur le vote.", options: [{ id: "a", text: "Demokrasi oya dayanır.", correct: true }, { id: "b", text: "Demokrasi tartışmaya dayanır.", correct: false }, { id: "c", text: "Demokrasi basına dayanır.", correct: false }, { id: "d", text: "Demokrasi kampanyaya dayanır.", correct: false }] },
    { id: 1974, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La justice doit être indépendante.", options: [{ id: "a", text: "Adalet bağımsız olmalı.", correct: true }, { id: "b", text: "Adalet pahalı olmalı.", correct: false }, { id: "c", text: "Adalet gecikmeli.", correct: false }, { id: "d", text: "Adalet yok.", correct: false }] },
    { id: 1975, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La campagne électorale commence aujourd'hui.", options: [{ id: "a", text: "Seçim kampanyası bugün başlıyor.", correct: true }, { id: "b", text: "Seçim kampanyası bitti.", correct: false }, { id: "c", text: "Seçim kampanyası yarın.", correct: false }, { id: "d", text: "Seçim kampanyası iptal.", correct: false }] },
    { id: 1976, type: "TRANSLATE", question: "Çevir:", hint: "Parlamento", correctAnswer: "Le parlement" },
    { id: 1977, type: "TRANSLATE", question: "Çevir:", hint: "Başkan", correctAnswer: "Le président" },
    { id: 1978, type: "TRANSLATE", question: "Çevir:", hint: "Koalisyon", correctAnswer: "La coalition" },
    { id: 1979, type: "TRANSLATE", question: "Çevir:", hint: "Referandum", correctAnswer: "Le référendum" },
    { id: 1980, type: "TRANSLATE", question: "Çevir:", hint: "Özgürlük", correctAnswer: "La liberté" }
];

const unit384Quiz4: Question[] = [
    // Quiz 4: Mixed Challenge
    { id: 1981, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ annonce une réforme.", options: [{ id: "a", text: "gouvernement", correct: true }, { id: "b", text: "débat", correct: false }] },
    { id: 1982, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est secret.", options: [{ id: "a", text: "vote", correct: true }, { id: "b", text: "titre", correct: false }] },
    { id: 1983, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ est un principe.", options: [{ id: "a", text: "égalité", correct: true }, { id: "b", text: "actualité", correct: false }] },
    { id: 1984, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ dirige le gouvernement.", options: [{ id: "a", text: "premier ministre", correct: true }, { id: "b", text: "lecteur", correct: false }] },
    { id: 1985, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ critique le budget.", options: [{ id: "a", text: "opposition", correct: true }, { id: "b", text: "élection", correct: false }] },
    { id: 1986, type: "SELECT", question: "'La coalition' ne demek?", options: [{ id: "a", text: "Koalisyon", correct: true }, { id: "b", text: "Anayasa", correct: false }, { id: "c", text: "Yasa", correct: false }, { id: "d", text: "Program", correct: false }] },
    { id: 1987, type: "SELECT", question: "'La campagne électorale' ne demek?", options: [{ id: "a", text: "Seçim kampanyası", correct: true }, { id: "b", text: "Seçim komisyonu", correct: false }, { id: "c", text: "Basın toplantısı", correct: false }, { id: "d", text: "Yayın akışı", correct: false }] },
    { id: 1988, type: "SELECT", question: "'La liberté' ne demek?", options: [{ id: "a", text: "Özgürlük", correct: true }, { id: "b", text: "Eşitlik", correct: false }, { id: "c", text: "Adalet", correct: false }, { id: "d", text: "Görüş", correct: false }] },
    { id: 1989, type: "SELECT", question: "'La justice' ne demek?", options: [{ id: "a", text: "Adalet", correct: true }, { id: "b", text: "Kampanya", correct: false }, { id: "c", text: "Kaynak", correct: false }, { id: "d", text: "Basın", correct: false }] },
    { id: 1990, type: "SELECT", question: "'Le pouvoir' ne demek?", options: [{ id: "a", text: "İktidar / Güç", correct: true }, { id: "b", text: "Haber", correct: false }, { id: "c", text: "Yorum", correct: false }, { id: "d", text: "Program", correct: false }] },
    { id: 1991, type: "TRANSLATE", question: "Çevir:", hint: "Hükümet reform duyuruyor.", correctAnswer: "Le gouvernement annonce une réforme." },
    { id: 1992, type: "TRANSLATE", question: "Çevir:", hint: "Seçmen bir aday seçer.", correctAnswer: "L'électeur choisit un candidat." },
    { id: 1993, type: "TRANSLATE", question: "Çevir:", hint: "Başkan yasayı imzalar.", correctAnswer: "Le président signe la loi." },
    { id: 1994, type: "TRANSLATE", question: "Çevir:", hint: "Seçim kampanyası bugün başlıyor.", correctAnswer: "La campagne électorale commence aujourd'hui." },
    { id: 1995, type: "TRANSLATE", question: "Çevir:", hint: "Vatandaş seçimlere katılır.", correctAnswer: "Le citoyen participe aux élections." },
    { id: 1996, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le parlement", options: [{ id: "a", text: "Parlamento", correct: true }, { id: "b", text: "Hükümet", correct: false }, { id: "c", text: "Bütçe", correct: false }, { id: "d", text: "Koalisyon", correct: false }] },
    { id: 1997, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La constitution", options: [{ id: "a", text: "Anayasa", correct: true }, { id: "b", text: "Yasa", correct: false }, { id: "c", text: "Seçim", correct: false }, { id: "d", text: "Program", correct: false }] },
    { id: 1998, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le référendum", options: [{ id: "a", text: "Referandum", correct: true }, { id: "b", text: "Reform", correct: false }, { id: "c", text: "Koalisyon", correct: false }, { id: "d", text: "Muhalefet", correct: false }] },
    { id: 1999, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La démocratie", options: [{ id: "a", text: "Demokrasi", correct: true }, { id: "b", text: "Monarşi", correct: false }, { id: "c", text: "Cumhuriyet", correct: false }, { id: "d", text: "Adalet", correct: false }] },
    { id: 2000, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le ministre", options: [{ id: "a", text: "Bakan", correct: true }, { id: "b", text: "Başkan", correct: false }, { id: "c", text: "Seçmen", correct: false }, { id: "d", text: "Aday", correct: false }] }
];

// ===== UNIT 385 HARDCODED QUIZZES =====
const unit385Quiz1: Question[] = [
    // Quiz 1: Vocab & Basics
    { id: 2001, type: "SELECT", question: "'La loi' ne demek?", options: [{ id: "a", text: "Yasa / Kanun", correct: true }, { id: "b", text: "Mahkeme", correct: false }, { id: "c", text: "Adalet", correct: false }, { id: "d", text: "Polis", correct: false }] },
    { id: 2002, type: "SELECT", question: "'Le tribunal' ne demek?", options: [{ id: "a", text: "Mahkeme", correct: true }, { id: "b", text: "Hapishane", correct: false }, { id: "c", text: "Hakim", correct: false }, { id: "d", text: "Sanık", correct: false }] },
    { id: 2003, type: "SELECT", question: "'L'avocat' ne demek?", options: [{ id: "a", text: "Avukat", correct: true }, { id: "b", text: "Hakim", correct: false }, { id: "c", text: "Polis", correct: false }, { id: "d", text: "Kurban", correct: false }] },
    { id: 2004, type: "SELECT", question: "'Le juge' ne demek?", options: [{ id: "a", text: "Hakim / Yargıç", correct: true }, { id: "b", text: "Avukat", correct: false }, { id: "c", text: "Suçlu", correct: false }, { id: "d", text: "Tanık", correct: false }] },
    { id: 2005, type: "SELECT", question: "'Le procès' ne demek?", options: [{ id: "a", text: "Dava / Duruşma", correct: true }, { id: "b", text: "Karar", correct: false }, { id: "c", text: "Ceza", correct: false }, { id: "d", text: "Delil", correct: false }] },
    { id: 2006, type: "SELECT", question: "'Le coupable' ne demek?", options: [{ id: "a", text: "Suçlu", correct: true }, { id: "b", text: "Masum", correct: false }, { id: "c", text: "Kurban", correct: false }, { id: "d", text: "Tanık", correct: false }] },
    { id: 2007, type: "SELECT", question: "'La victime' ne demek?", options: [{ id: "a", text: "Kurban / Mağdur", correct: true }, { id: "b", text: "Suçlu", correct: false }, { id: "c", text: "Polis", correct: false }, { id: "d", text: "Hakim", correct: false }] },
    { id: 2008, type: "SELECT", question: "'Le témoignage' ne demek?", options: [{ id: "a", text: "Tanıklık / İfade", correct: true }, { id: "b", text: "Kanıt", correct: false }, { id: "c", text: "Karar", correct: false }, { id: "d", text: "Suç", correct: false }] },
    { id: 2009, type: "SELECT", question: "'La preuve' ne demek?", options: [{ id: "a", text: "Kanıt / Delil", correct: true }, { id: "b", text: "Ceza", correct: false }, { id: "c", text: "Avukat", correct: false }, { id: "d", text: "Hapishane", correct: false }] },
    { id: 2010, type: "SELECT", question: "'La prison' ne demek?", options: [{ id: "a", text: "Hapishane", correct: true }, { id: "b", text: "Mahkeme", correct: false }, { id: "c", text: "Polis karakolu", correct: false }, { id: "d", text: "Adalet sarayı", correct: false }] },
    { id: 2011, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'innocent", options: [{ id: "a", text: "Masum", correct: true }, { id: "b", text: "Suçlu", correct: false }, { id: "c", text: "Tanık", correct: false }, { id: "d", text: "Kurban", correct: false }] },
    { id: 2012, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le crime", options: [{ id: "a", text: "Suç / Cinayet", correct: true }, { id: "b", text: "Ceza", correct: false }, { id: "c", text: "Karar", correct: false }, { id: "d", text: "Delil", correct: false }] },
    { id: 2013, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'amende", options: [{ id: "a", text: "Para cezası", correct: true }, { id: "b", text: "Hapis", correct: false }, { id: "c", text: "Dava", correct: false }, { id: "d", text: "Savunma", correct: false }] },
    { id: 2014, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le suspect", options: [{ id: "a", text: "Şüpheli", correct: true }, { id: "b", text: "Masum", correct: false }, { id: "c", text: "Hakim", correct: false }, { id: "d", text: "Avukat", correct: false }] },
    { id: 2015, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La justice", options: [{ id: "a", text: "Adalet", correct: true }, { id: "b", text: "Kanun", correct: false }, { id: "c", text: "Mahkeme", correct: false }, { id: "d", text: "Polis", correct: false }] },
    { id: 2016, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ protège les citoyens.", options: [{ id: "a", text: "loi", correct: true }, { id: "b", text: "prison", correct: false }] },
    { id: 2017, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ rend son verdict.", options: [{ id: "a", text: "juge", correct: true }, { id: "b", text: "suspect", correct: false }] },
    { id: 2018, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ défend le suspect.", options: [{ id: "a", text: "avocat", correct: true }, { id: "b", text: "victime", correct: false }] },
    { id: 2019, type: "FILL_BLANK", question: "Doldur:", sentence: "La police cherche une ___.", options: [{ id: "a", text: "preuve", correct: true }, { id: "b", text: "amende", correct: false }] },
    { id: 2020, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ commence demain.", options: [{ id: "a", text: "procès", correct: true }, { id: "b", text: "crime", correct: false }] }
];

const unit385Quiz2: Question[] = [
    // Quiz 2: Grammar & Speaking
    { id: 2021, type: "SELECT", question: "Adalet isteklerinde hangi kip kullanılır?", options: [{ id: "a", text: "Subjonctif", correct: true }, { id: "b", text: "Conditionnel", correct: false }, { id: "c", text: "Impératif", correct: false }, { id: "d", text: "Indicatif", correct: false }] },
    { id: 2022, type: "SELECT", question: "'Il est juste que...' ifadesinden sonra ne gelir?", options: [{ id: "a", text: "Subjonctif", correct: true }, { id: "b", text: "Futur", correct: false }, { id: "c", text: "Passé Composé", correct: false }, { id: "d", text: "Présent", correct: false }] },
    { id: 2023, type: "SELECT", question: "Edilgen yapı (Passif) formülü nedir?", options: [{ id: "a", text: "Être + Participe Passé", correct: true }, { id: "b", text: "Avoir + Participe Passé", correct: false }, { id: "c", text: "Aller + Infinitif", correct: false }, { id: "d", text: "Venir de + Infinitif", correct: false }] },
    { id: 2024, type: "SELECT", question: "İddialarda (kesinleşmemiş haberlerde) hangi kip kullanılır?", options: [{ id: "a", text: "Conditionnel", correct: true }, { id: "b", text: "Subjonctif", correct: false }, { id: "c", text: "Impératif", correct: false }, { id: "d", text: "Futur Simple", correct: false }] },
    { id: 2025, type: "SELECT", question: "'Onun suçlu olduğu iddia ediliyor' çevirisi nasıldır?", options: [{ id: "a", text: "Il serait coupable.", correct: true }, { id: "b", text: "Il est coupable.", correct: false }, { id: "c", text: "Il était coupable.", correct: false }, { id: "d", text: "Il sera coupable.", correct: false }] },
    { id: 2026, type: "SELECT", question: "Hangi cümle Subjonctif örneğidir?", options: [{ id: "a", text: "Il exige que le client soit libéré.", correct: true }, { id: "b", text: "Le client est libéré.", correct: false }, { id: "c", text: "Le client sera libéré.", correct: false }, { id: "d", text: "Le client a été libéré.", correct: false }] },
    { id: 2027, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est juste que le coupable ___ puni.", options: [{ id: "a", text: "soit", correct: true }, { id: "b", text: "est", correct: false }] },
    { id: 2028, type: "FILL_BLANK", question: "Doldur:", sentence: "L'accusé a ___ condamné à trois ans.", options: [{ id: "a", text: "été", correct: true }, { id: "b", text: "eu", correct: false }] },
    { id: 2029, type: "FILL_BLANK", question: "Doldur:", sentence: "Le suspect ___ quitté le pays.", options: [{ id: "a", text: "aurait", correct: true }, { id: "b", text: "a", correct: false }] },
    { id: 2030, type: "FILL_BLANK", question: "Doldur:", sentence: "La victime ___ indemnisée par l'État.", options: [{ id: "a", text: "sera", correct: true }, { id: "b", text: "est", correct: false }] },
    { id: 2031, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Vous avez le droit de garder le silence.", options: [{ id: "a", text: "Sessiz kalma hakkınız var.", correct: true }, { id: "b", text: "Konuşma hakkınız var.", correct: false }, { id: "c", text: "Adalet istiyoruz.", correct: false }, { id: "d", text: "Ben masumum.", correct: false }] },
    { id: 2032, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je suis innocent de ces accusations.", options: [{ id: "a", text: "Ben bu suçlamalardan masumum.", correct: true }, { id: "b", text: "Ben suçluyum.", correct: false }, { id: "c", text: "Avukat istiyorum.", correct: false }, { id: "d", text: "Delil yok.", correct: false }] },
    { id: 2033, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le procès commencera la semaine prochaine.", options: [{ id: "a", text: "Dava önümüzdeki hafta başlayacak.", correct: true }, { id: "b", text: "Dava bugün bitti.", correct: false }, { id: "c", text: "Mahkeme kapalı.", correct: false }, { id: "d", text: "Karar verildi.", correct: false }] },
    { id: 2034, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le juge a rendu un verdict de culpabilité.", options: [{ id: "a", text: "Hakim suçluluk kararı verdi.", correct: true }, { id: "b", text: "Hakim beraat kararı verdi.", correct: false }, { id: "c", text: "Avukat konuşuyor.", correct: false }, { id: "d", text: "Tanık gelmedi.", correct: false }] },
    { id: 2035, type: "SELECT", question: "Konuşma: 'L'accusé a été finalement acquitté.' ne demek?", options: [{ id: "a", text: "Sanık sonunda beraat etti.", correct: true }, { id: "b", text: "Sanık mahkum edildi.", correct: false }, { id: "c", text: "Sanık kaçtı.", correct: false }, { id: "d", text: "Sanık suçunu kabul etti.", correct: false }] },
    { id: 2036, type: "SELECT", question: "Konuşma: 'Il a engagé un avocat.' ne demek?", options: [{ id: "a", text: "Bir avukat tuttu.", correct: true }, { id: "b", text: "Bir ev kiraladı.", correct: false }, { id: "c", text: "Polisi aradı.", correct: false }, { id: "d", text: "Hakim oldu.", correct: false }] },
    { id: 2037, type: "TRANSLATE", question: "Çevir:", hint: "Suçlunun cezalandırılması adildir.", correctAnswer: "Il est juste que le coupable soit puni." },
    { id: 2038, type: "TRANSLATE", question: "Çevir:", hint: "Sanık üç yıl hapis cezasına çarptırıldı.", correctAnswer: "L'accusé a été condamné à trois ans de prison." },
    { id: 2039, type: "TRANSLATE", question: "Çevir:", hint: "Şüphelinin ülkeyi terk ettiği iddia ediliyor.", correctAnswer: "Le suspect aurait quitté le pays." },
    { id: 2040, type: "TRANSLATE", question: "Çevir:", hint: "Avukat müvekkilinin serbest bırakılmasını talep ediyor.", correctAnswer: "L'avocat exige que son client soit libéré." }
];

const unit385Quiz3: Question[] = [
    // Quiz 3: Reading Comprehension & Phrases
    { id: 2041, type: "SELECT", question: "Qui est le personnage principal ?", options: [{ id: "a", text: "L'inspecteur Moreau", correct: true }, { id: "b", text: "Le juge", correct: false }, { id: "c", text: "L'avocat", correct: false }, { id: "d", text: "Le suspect", correct: false }] },
    { id: 2042, type: "SELECT", question: "Que fait l'inspecteur ?", options: [{ id: "a", text: "Il examine les preuves", correct: true }, { id: "b", text: "Il dort", correct: false }, { id: "c", text: "Il regarde la télé", correct: false }, { id: "d", text: "Il voyage", correct: false }] },
    { id: 2043, type: "SELECT", question: "Comment est le suspect ?", options: [{ id: "a", text: "Silencieux et calme", correct: true }, { id: "b", text: "Nerveux", correct: false }, { id: "c", text: "En colère", correct: false }, { id: "d", text: "Bavard", correct: false }] },
    { id: 2044, type: "SELECT", question: "Que dit l'avocat de la défense ?", options: [{ id: "a", text: "Son client est innocent", correct: true }, { id: "b", text: "Son client est coupable", correct: false }, { id: "c", text: "Il n'y a pas de juge", correct: false }, { id: "d", text: "La police a raison", correct: false }] },
    { id: 2045, type: "SELECT", question: "Qu'est-ce qui est incontestable ?", options: [{ id: "a", text: "L'ADN retrouvé sur place", correct: true }, { id: "b", text: "Le témoignage", correct: false }, { id: "c", text: "L'alibi", correct: false }, { id: "d", text: "Le climat", correct: false }] },
    { id: 2046, type: "SELECT", question: "Comment la vérité se révélera-t-elle ?", options: [{ id: "a", text: "Sans l'aide du juge", correct: false }, { id: "b", text: "Au procès", correct: true }, { id: "c", text: "Dans le journal", correct: false }, { id: "d", text: "Rapidement", correct: false }] },
    { id: 2047, type: "SELECT", question: "À quoi l'inspecteur tient-il ?", options: [{ id: "a", text: "À son café", correct: false }, { id: "b", text: "À ce que la justice soit faite", correct: true }, { id: "c", text: "À sa voiture", correct: false }, { id: "d", text: "À sa réputation", correct: false }] },
    { id: 2048, type: "SELECT", question: "Le suspect parle-t-il beaucoup ?", options: [{ id: "a", text: "Non, il garde le silence", correct: true }, { id: "b", text: "Oui, tout le temps", correct: false }, { id: "c", text: "Seulement à l'avocat", correct: false }, { id: "d", text: "Oui, au journaliste", correct: false }] },
    { id: 2049, type: "SELECT", question: "Où se passe l'action ?", options: [{ id: "a", text: "Dans le bureau de l'inspecteur", correct: true }, { id: "b", text: "Au tribunal", correct: false }, { id: "c", text: "Dans la rue", correct: false }, { id: "d", text: "Dans un café", correct: false }] },
    { id: 2050, type: "SELECT", question: "Quel est l'objectif de l'enquête ?", options: [{ id: "a", text: "Trouver la vérité", correct: true }, { id: "b", text: "Arrêter l'avocat", correct: false }, { id: "c", text: "Fermer le dossier", correct: false }, { id: "d", text: "Prouver l'innocence", correct: false }] },
    { id: 2051, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La police a trouvé de nouvelles preuves.", options: [{ id: "a", text: "Polis yeni deliller buldu.", correct: true }, { id: "b", text: "Polis suçluyu arıyor.", correct: false }, { id: "c", text: "Polis karakolu kapalı.", correct: false }, { id: "d", text: "Polis delil bulamadı.", correct: false }] },
    { id: 2052, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Justice doit être rendue à la victime.", options: [{ id: "a", text: "Mağdur için adalet yerini bulmalıdır.", correct: true }, { id: "b", text: "Suçlu hapiste.", correct: false }, { id: "c", text: "Kurban intikam aldı.", correct: false }, { id: "d", text: "Mahkeme kararı verdi.", correct: false }] },
    { id: 2053, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le voleur a été condamné à payer une amende.", options: [{ id: "a", text: "Hırsız para cezası ödemeye mahkum edildi.", correct: true }, { id: "b", text: "Hırsız hapse girdi.", correct: false }, { id: "c", text: "Hırsız masum bulundu.", correct: false }, { id: "d", text: "Hırsız kaçtı.", correct: false }] },
    { id: 2054, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Nul n'est censé ignorer la loi.", options: [{ id: "a", text: "Kimse yasayı bilmemezlikten gelemez.", correct: true }, { id: "b", text: "Yasa herkes içindir.", correct: false }, { id: "c", text: "Yasa herkese eşittir.", correct: false }, { id: "d", text: "Yasaları bilmek zordur.", correct: false }] },
    { id: 2055, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le système judiciaire est complexe.", options: [{ id: "a", text: "Yargı sistemi karmaşıktır.", correct: true }, { id: "b", text: "Adalet yavaştır.", correct: false }, { id: "c", text: "Mahkemeler kalabalık.", correct: false }, { id: "d", text: "Yargı sistemi basittir.", correct: false }] },
    { id: 2056, type: "TRANSLATE", question: "Çevir:", hint: "Hakim / Yargıç", correctAnswer: "Le juge" },
    { id: 2057, type: "TRANSLATE", question: "Çevir:", hint: "Dava / Duruşma", correctAnswer: "Le procès" },
    { id: 2058, type: "TRANSLATE", question: "Çevir:", hint: "Suçlu", correctAnswer: "Le coupable" },
    { id: 2059, type: "TRANSLATE", question: "Çevir:", hint: "Kanıt / Delil", correctAnswer: "La preuve" },
    { id: 2060, type: "TRANSLATE", question: "Çevir:", hint: "Avukat", correctAnswer: "L'avocat" }
];

const unit385Quiz4: Question[] = [
    // Quiz 4: Mixed Challenge
    { id: 2061, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ commence la semaine prochaine.", options: [{ id: "a", text: "procès", correct: true }, { id: "b", text: "débat", correct: false }] },
    { id: 2062, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ au tribunal demain.", options: [{ id: "a", text: "témoignera", correct: true }, { id: "b", text: "témoigne", correct: false }] },
    { id: 2063, type: "FILL_BLANK", question: "Doldur:", sentence: "Le suspect a été ___ hier soir.", options: [{ id: "a", text: "arrêté", correct: true }, { id: "b", text: "libéré", correct: false }] },
    { id: 2064, type: "FILL_BLANK", question: "Doldur:", sentence: "L'accusé a été finalement ___.", options: [{ id: "a", text: "acquitté", correct: true }, { id: "b", text: "arrête", correct: false }] },
    { id: 2065, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est rendue.", options: [{ id: "a", text: "justice", correct: true }, { id: "b", text: "loi", correct: false }] },
    { id: 2066, type: "SELECT", question: "'L'acquittement' ne demek?", options: [{ id: "a", text: "Beraat", correct: true }, { id: "b", text: "Ceza", correct: false }, { id: "c", text: "Suçlama", correct: false }, { id: "d", text: "Tanıklık", correct: false }] },
    { id: 2067, type: "SELECT", question: "'Le droit' ne demek?", options: [{ id: "a", text: "Hak / Hukuk", correct: true }, { id: "b", text: "Sol", correct: false }, { id: "c", text: "Kanun", correct: false }, { id: "d", text: "Ceza", correct: false }] },
    { id: 2068, type: "SELECT", question: "'Le témoignage' ne demek?", options: [{ id: "a", text: "Tanıklık", correct: true }, { id: "b", text: "Yalan", correct: false }, { id: "c", text: "Suç", correct: false }, { id: "d", text: "Hakim", correct: false }] },
    { id: 2069, type: "SELECT", question: "'L'innocence' ne demek?", options: [{ id: "a", text: "Masumiyet", correct: true }, { id: "b", text: "Suçluluk", correct: false }, { id: "c", text: "Ceza", correct: false }, { id: "d", text: "Kanıt", correct: false }] },
    { id: 2070, type: "SELECT", question: "'Le verdict' ne demek?", options: [{ id: "a", text: "Karar", correct: true }, { id: "b", text: "Dava", correct: false }, { id: "c", text: "Suç", correct: false }, { id: "d", text: "Delil", correct: false }] },
    { id: 2071, type: "TRANSLATE", question: "Çevir:", hint: "Şüpheli dün akşam tutuklandı.", correctAnswer: "Le suspect a été arrêté hier soir." },
    { id: 2072, type: "TRANSLATE", question: "Çevir:", hint: "Polis yeni deliller buldu.", correctAnswer: "La police a trouvé de nouvelles preuves." },
    { id: 2073, type: "TRANSLATE", question: "Çevir:", hint: "Avukat savunma yapıyor.", correctAnswer: "L'avocat fait la défense." },
    { id: 2074, type: "TRANSLATE", question: "Çevir:", hint: "Hakim suçluluk kararı verdi.", correctAnswer: "Le juge a rendu un verdict de culpabilité." },
    { id: 2075, type: "TRANSLATE", question: "Çevir:", hint: "Herkesin adil bir yargılanma hakkı vardır.", correctAnswer: "Tout le monde a droit à un procès équitable." },
    { id: 2076, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le tribunal", options: [{ id: "a", text: "Mahkeme", correct: true }, { id: "b", text: "Hapishane", correct: false }, { id: "c", text: "Karakol", correct: false }, { id: "d", text: "Kanun", correct: false }] },
    { id: 2077, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'avocat", options: [{ id: "a", text: "Avukat", correct: true }, { id: "b", text: "Yargıç", correct: false }, { id: "c", text: "Savcı", correct: false }, { id: "d", text: "Tanık", correct: false }] },
    { id: 2078, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le juge", options: [{ id: "a", text: "Hakim", correct: true }, { id: "b", text: "Sanık", correct: false }, { id: "c", text: "Avukat", correct: false }, { id: "d", text: "Polis", correct: false }] },
    { id: 2079, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La loi", options: [{ id: "a", text: "Yasa", correct: true }, { id: "b", text: "Mahkeme", correct: false }, { id: "c", text: "Dava", correct: false }, { id: "d", text: "Hakim", correct: false }] },
    { id: 2080, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La victime", options: [{ id: "a", text: "Kurban", correct: true }, { id: "b", text: "Tanık", correct: false }, { id: "c", text: "Masum", correct: false }, { id: "d", text: "Suçlu", correct: false }] }
];


// Seeded random number generator for reliable questions per unit
function seededRandom(seed: number) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
const unit386Quiz1: Question[] = [
    { id: 2081, type: "SELECT", question: "'Les droits de l'homme' ne demek?", options: [{ id: "a", text: "İnsan hakları", correct: true }, { id: "b", text: "İnsan gücü", correct: false }, { id: "c", text: "İnsan kaynakları", correct: false }, { id: "d", text: "İnsan doğası", correct: false }] },
    { id: 2082, type: "SELECT", question: "'La discrimination' ne demek?", options: [{ id: "a", text: "Ayrımcılık", correct: true }, { id: "b", text: "Adalet", correct: false }, { id: "c", text: "Eşitlik", correct: false }, { id: "d", text: "Özgürlük", correct: false }] },
    { id: 2083, type: "SELECT", question: "'Le réfugié' ne demek?", options: [{ id: "a", text: "Vatandaş", correct: false }, { id: "b", text: "Mülteci", correct: true }, { id: "c", text: "Gösterici", correct: false }, { id: "d", text: "Polis", correct: false }] },
    { id: 2084, type: "SELECT", question: "'L'égalité' ne demek?", options: [{ id: "a", text: "Eşitlik", correct: true }, { id: "b", text: "Özgürlük", correct: false }, { id: "c", text: "Barış", correct: false }, { id: "d", text: "Adalet", correct: false }] },
    { id: 2085, type: "SELECT", question: "'La liberté' ne demek?", options: [{ id: "a", text: "Adalet", correct: false }, { id: "b", text: "Özgürlük", correct: true }, { id: "c", text: "Hak", correct: false }, { id: "d", text: "Barış", correct: false }] },
    { id: 2086, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'injustice", options: [{ id: "a", text: "Adalet", correct: false }, { id: "b", text: "Adaletsizlik", correct: true }, { id: "c", text: "Eşitlik", correct: false }, { id: "d", text: "Barış", correct: false }] },
    { id: 2087, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le racisme", options: [{ id: "a", text: "Irkçılık", correct: true }, { id: "b", text: "Ayrımcılık", correct: false }, { id: "c", text: "Faşizm", correct: false }, { id: "d", text: "Hoşgörü", correct: false }] },
    { id: 2088, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La paix", options: [{ id: "a", text: "Savaş", correct: false }, { id: "b", text: "Özgürlük", correct: false }, { id: "c", text: "Barış", correct: true }, { id: "d", text: "Adalet", correct: false }] },
    { id: 2089, type: "FILL_BLANK", question: "Doldur:", sentence: "Tous les êtres humains naissent libres et ___.", options: [{ id: "a", text: "égaux", correct: true }, { id: "b", text: "justes", correct: false }] },
    { id: 2090, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut lutter contre la ___.", options: [{ id: "a", text: "discrimination", correct: true }, { id: "b", text: "liberté", correct: false }] },
    { id: 2091, type: "SELECT", question: "'Manifester' ne demek?", options: [{ id: "a", text: "Gösteri yapmak", correct: true }, { id: "b", text: "Oy kullanmak", correct: false }, { id: "c", text: "Suçlamak", correct: false }, { id: "d", text: "Savunmak", correct: false }] },
    { id: 2092, type: "SELECT", question: "'La dignité' ne demek?", options: [{ id: "a", text: "Onur / Haysiyet", correct: true }, { id: "b", text: "Zenginlik", correct: false }, { id: "c", text: "Güç", correct: false }, { id: "d", text: "Saygı", correct: false }] },
    { id: 2093, type: "TRANSLATE", question: "Çevir:", hint: "Özgürlük değerli bir haktır.", correctAnswer: "La liberté est un droit précieux." },
    { id: 2094, type: "TRANSLATE", question: "Çevir:", hint: "İnsan haklarına saygı temeldir.", correctAnswer: "Le respect des droits de l'homme est fondamental." },
    { id: 2095, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est une grande injustice sociale.", options: [{ id: "a", text: "Bu büyük bir sosyal adaletsizliktir.", correct: true }, { id: "b", text: "Bu büyük bir barıştır.", correct: false }, { id: "c", text: "Bu büyük bir eşitliktir.", correct: false }, { id: "d", text: "Bu büyük bir haktır.", correct: false }] },
    { id: 2096, type: "TRANSLATE", question: "Çevir:", hint: "Her vatandaşın oy kullanma hakkı vardır.", correctAnswer: "Chaque citoyen a le droit de voter." },
    { id: 2097, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ n'a pas sa place dans notre société.", options: [{ id: "a", text: "racisme", correct: true }, { id: "b", text: "respect", correct: false }] },
    { id: 2098, type: "SELECT", question: "'Protéger' ne demek?", options: [{ id: "a", text: "Protesto etmek", correct: false }, { id: "b", text: "Korumak", correct: true }, { id: "c", text: "Yargılamak", correct: false }, { id: "d", text: "Göstermek", correct: false }] },
    { id: 2099, type: "SELECT", question: "'L'esclavage' ne demek?", options: [{ id: "a", text: "Kölelik", correct: true }, { id: "b", text: "Sığınma", correct: false }, { id: "c", text: "Baskı", correct: false }, { id: "d", text: "İşkence", correct: false }] },
    { id: 2100, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le droit de vote est un pilier de la démocratie.", options: [{ id: "a", text: "Oy hakkı demokrasinin bir direğidir.", correct: true }, { id: "b", text: "Oy kullanmak zorunludur.", correct: false }, { id: "c", text: "Herkes oy kullanmalıdır.", correct: false }, { id: "d", text: "Demokrasi bir haktır.", correct: false }] }
];
const unit386Quiz2: Question[] = [
    { id: 2101, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Il est nécessaire que nous ___ (respecter) les droits.", options: [{ id: "a", text: "respections", correct: true }, { id: "b", text: "respectons", correct: false }] },
    { id: 2102, type: "SELECT", question: "Hangi cümle edilgen yapıdadır?", options: [{ id: "a", text: "Le gouvernement protège les droits.", correct: false }, { id: "b", text: "Les réfugiés sont protégés par la loi.", correct: true }, { id: "c", text: "Ils demandent la paix.", correct: false }, { id: "d", text: "Nous luttons contre le racisme.", correct: false }] },
    { id: 2103, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Ils exigent que la loi ___ (changer).", options: [{ id: "a", text: "change", correct: true }, { id: "b", text: "changent", correct: false }] },
    { id: 2104, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ d'expression est essentielle.", options: [{ id: "a", text: "liberté", correct: true }, { id: "b", text: "égalité", correct: false }] },
    { id: 2105, type: "TRANSLATE", question: "Çevir:", hint: "Herkesin özgürce yaşama hakkı vardır.", correctAnswer: "Tout le monde a le droit de vivre en liberté." },
    { id: 2106, type: "TRANSLATE", question: "Çevir:", hint: "Ayrımcılığa karşı mücadele edilmeli.", correctAnswer: "Il faut lutter contre la discrimination." },
    { id: 2107, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'égalité est une valeur fondamentale.", options: [{ id: "a", text: "Eşitlik temel bir değerdir.", correct: true }, { id: "b", text: "Özgürlük temel bir değerdir.", correct: false }, { id: "c", text: "Barış temel bir değerdir.", correct: false }, { id: "d", text: "Adalet temel bir değerdir.", correct: false }] },
    { id: 2108, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Nous devons défendre les droits des enfants.", options: [{ id: "a", text: "Çocukların haklarını savunmalıyız.", correct: true }, { id: "b", text: "Çocuklar haklarını biliyor.", correct: false }, { id: "c", text: "Çocuklar oy kullanmalı.", correct: false }, { id: "d", text: "Çocuklar özgürdür.", correct: false }] },
    { id: 2109, type: "SELECT", question: "'La tolérance' ne demek?", options: [{ id: "a", text: "Hoşgörü", correct: true }, { id: "b", text: "Sabır", correct: false }, { id: "c", text: "Adalet", correct: false }, { id: "d", text: "Cesaret", correct: false }] },
    { id: 2110, type: "SELECT", question: "'Revendiquer' ne demek?", options: [{ id: "a", text: "Talep etmek / Hak iddia etmek", correct: true }, { id: "b", text: "Korumak", correct: false }, { id: "c", text: "Reddetmek", correct: false }, { id: "d", text: "Görmezden gelmek", correct: false }] },
    { id: 2111, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Il est essentiel que le gouvernement ___ (agir).", options: [{ id: "a", text: "agisse", correct: true }, { id: "b", text: "agit", correct: false }] },
    { id: 2112, type: "TRANSLATE", question: "Çevir:", hint: "İşkence hakların ciddi bir ihlalidir.", correctAnswer: "La torture est une violation grave des droits." },
    { id: 2113, type: "SELECT", question: "'Violer un droit' ne demek?", options: [{ id: "a", text: "Bir hakkı ihlal etmek", correct: true }, { id: "b", text: "Bir hakkı savunmak", correct: false }, { id: "c", text: "Bir hakkı korumak", correct: false }, { id: "d", text: "Bir hakkı kullanmak", correct: false }] },
    { id: 2114, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est contraire aux droits humains.", options: [{ id: "a", text: "torture", correct: true }, { id: "b", text: "tolérance", correct: false }] },
    { id: 2115, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il faut défendre les minorités.", options: [{ id: "a", text: "Azınlıkları savunmak gerekir.", correct: true }, { id: "b", text: "Azınlıklar tehlikelidir.", correct: false }, { id: "c", text: "Azınlıklar oy kullanmalı.", correct: false }, { id: "d", text: "Azınlıklar eşittir.", correct: false }] },
    { id: 2116, type: "TRANSLATE", question: "Çevir:", hint: "Baskı insan haklarına aykırıdır.", correctAnswer: "L'oppression est contraire aux droits humains." },
    { id: 2117, type: "SELECT", question: "'La pétition' ne demek?", options: [{ id: "a", text: "Dilekçe / İmza kampanyası", correct: true }, { id: "b", text: "Miting", correct: false }, { id: "c", text: "Seçim", correct: false }, { id: "d", text: "Gösteri", correct: false }] },
    { id: 2118, type: "SELECT", question: "'Le militant' ne demek?", options: [{ id: "a", text: "Aktivist / Militan", correct: true }, { id: "b", text: "Asker", correct: false }, { id: "c", text: "Politikacı", correct: false }, { id: "d", text: "Gazeteci", correct: false }] },
    { id: 2119, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ est interdit dans le monde entier.", options: [{ id: "a", text: "esclavage", correct: true }, { id: "b", text: "égalité", correct: false }] },
    { id: 2120, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La Convention européenne protège les droits.", options: [{ id: "a", text: "Avrupa Sözleşmesi hakları korur.", correct: true }, { id: "b", text: "Avrupa Birliği hakları ihlal ediyor.", correct: false }, { id: "c", text: "Avrupa'da haklar sınırlıdır.", correct: false }, { id: "d", text: "Avrupa hakları düzenler.", correct: false }] }
];
const unit386Quiz3: Question[] = [
    { id: 2121, type: "SELECT", question: "Vatandaşlar neden meydanda toplandı?", options: [{ id: "a", text: "Alışveriş yapmak için", correct: false }, { id: "b", text: "Barışçıl gösteri yapmak için", correct: true }, { id: "c", text: "Miting izlemek için", correct: false }, { id: "d", text: "Konser için", correct: false }] },
    { id: 2122, type: "SELECT", question: "Pankartlarda ne talep ediliyordu?", options: [{ id: "a", text: "Eşitlik ve ayrımcılığın sonu", correct: true }, { id: "b", text: "Daha fazla iş", correct: false }, { id: "c", text: "Düşük vergiler", correct: false }, { id: "d", text: "Daha fazla tatil", correct: false }] },
    { id: 2123, type: "SELECT", question: "Sözcü hangi konu üzerine konuştu?", options: [{ id: "a", text: "Ekonomi", correct: false }, { id: "b", text: "Çevre", correct: false }, { id: "c", text: "İnsan haklarının önemi", correct: true }, { id: "d", text: "Eğitim", correct: false }] },
    { id: 2124, type: "SELECT", question: "Demokrasi için neyin temel olduğunu söyledi?", options: [{ id: "a", text: "Oy hakkının", correct: false }, { id: "b", text: "İfade özgürlüğünün", correct: true }, { id: "c", text: "Zenginliğin", correct: false }, { id: "d", text: "Polisin", correct: false }] },
    { id: 2125, type: "SELECT", question: "Gösteri nasıl sona erdi?", options: [{ id: "a", text: "Şiddetle", correct: false }, { id: "b", text: "Kaosla", correct: false }, { id: "c", text: "Sakin bir şekilde", correct: true }, { id: "d", text: "Yağmur nedeniyle", correct: false }] },
    { id: 2126, type: "TRANSLATE", question: "Çevir:", hint: "Bütün insanlar özgür ve eşit doğarlar.", correctAnswer: "Tous les êtres humains naissent libres et égaux." },
    { id: 2127, type: "TRANSLATE", question: "Çevir:", hint: "Bu bir insan hakları ihlalidir.", correctAnswer: "C'est une violation des droits de l'homme." },
    { id: 2128, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Chaque citoyen a des droits et des devoirs.", options: [{ id: "a", text: "Her vatandaşın hakları ve görevleri vardır.", correct: true }, { id: "b", text: "Her vatandaş oy kullanmalıdır.", correct: false }, { id: "c", text: "Vatandaşlık bir haktır.", correct: false }, { id: "d", text: "Vatandaşlar eşittir.", correct: false }] },
    { id: 2129, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La manifestation était pacifique.", options: [{ id: "a", text: "Gösteri barışçıldı.", correct: true }, { id: "b", text: "Gösteri şiddetliydi.", correct: false }, { id: "c", text: "Gösteri iptal edildi.", correct: false }, { id: "d", text: "Gösteri kalabalıktı.", correct: false }] },
    { id: 2130, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous devons ___ contre le racisme.", options: [{ id: "a", text: "lutter", correct: true }, { id: "b", text: "parler", correct: false }] },
    { id: 2131, type: "SELECT", question: "Halk neyi imzaladı?", options: [{ id: "a", text: "Anlaşma", correct: false }, { id: "b", text: "Dilekçe (pétition)", correct: true }, { id: "c", text: "Sözleşme", correct: false }, { id: "d", text: "Mektup", correct: false }] },
    { id: 2132, type: "SELECT", question: "Gösteride kaç kişi toplandı?", options: [{ id: "a", text: "Birkaç yüz kişi", correct: false }, { id: "b", text: "Yüzlerce vatandaş", correct: true }, { id: "c", text: "Binlerce kişi", correct: false }, { id: "d", text: "Sadece birkaç kişi", correct: false }] },
    { id: 2133, type: "TRANSLATE", question: "Çevir:", hint: "Daha fazla sosyal adalet talep ediyorlar.", correctAnswer: "Ils demandent plus de justice sociale." },
    { id: 2134, type: "TRANSLATE", question: "Çevir:", hint: "Gösteri barışçıldı.", correctAnswer: "La manifestation était pacifique." },
    { id: 2135, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ont signé une ___ pour l'égalité.", options: [{ id: "a", text: "pétition", correct: true }, { id: "b", text: "manifestation", correct: false }] },
    { id: 2136, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est une violation des droits de l'homme.", options: [{ id: "a", text: "Bu bir insan hakları ihlalidir.", correct: true }, { id: "b", text: "Bu bir insanlık suçudur.", correct: false }, { id: "c", text: "Bu bir gösteri hakkıdır.", correct: false }, { id: "d", text: "Bu bir vatandaşlık hakkıdır.", correct: false }] },
    { id: 2137, type: "SELECT", question: "Sözcü ne talep etti?", options: [{ id: "a", text: "Daha fazla maaş", correct: false }, { id: "b", text: "Ayrımcılığın sona ermesi", correct: true }, { id: "c", text: "Daha fazla tatil", correct: false }, { id: "d", text: "Yeni bir yasa", correct: false }] },
    { id: 2138, type: "FILL_BLANK", question: "Doldur:", sentence: "Les droits de l'___ sont fondamentaux.", options: [{ id: "a", text: "homme", correct: true }, { id: "b", text: "animal", correct: false }] },
    { id: 2139, type: "TRANSLATE", question: "Çevir:", hint: "Eşitlik için bir dilekçe imzaladılar.", correctAnswer: "Ils ont signé une pétition pour l'égalité." },
    { id: 2140, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Nous manifestons pour nos droits.", options: [{ id: "a", text: "Haklarımız için gösteri yapıyoruz.", correct: true }, { id: "b", text: "Haklarımız korunuyor.", correct: false }, { id: "c", text: "Haklarımız sınırlıdır.", correct: false }, { id: "d", text: "Haklarımızı savunuyoruz.", correct: false }] }
];
const unit386Quiz4: Question[] = [
    { id: 2141, type: "SELECT", question: "'Défendre' ne demek?", options: [{ id: "a", text: "Savunmak", correct: true }, { id: "b", text: "Saldırmak", correct: false }, { id: "c", text: "Suçlamak", correct: false }, { id: "d", text: "Göstermek", correct: false }] },
    { id: 2142, type: "SELECT", question: "'La solidarité' ne demek?", options: [{ id: "a", text: "Dayanışma", correct: true }, { id: "b", text: "Yalnızlık", correct: false }, { id: "c", text: "Rekabet", correct: false }, { id: "d", text: "Güç", correct: false }] },
    { id: 2143, type: "SELECT", question: "'L'humanité' ne demek?", options: [{ id: "a", text: "İnsanlık", correct: true }, { id: "b", text: "İnsan hakları", correct: false }, { id: "c", text: "İnsancıllık", correct: false }, { id: "d", text: "İnsanlık dışı", correct: false }] },
    { id: 2144, type: "SELECT", question: "'La Convention' ne demek?", options: [{ id: "a", text: "Sözleşme / Konvansiyon", correct: true }, { id: "b", text: "Kongre", correct: false }, { id: "c", text: "Toplantı", correct: false }, { id: "d", text: "Gösteri", correct: false }] },
    { id: 2145, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ humaine est inviolable.", options: [{ id: "a", text: "dignité", correct: true }, { id: "b", text: "liberté", correct: false }] },
    { id: 2146, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous devons ___ les droits des enfants.", options: [{ id: "a", text: "défendre", correct: true }, { id: "b", text: "violer", correct: false }] },
    { id: 2147, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ doit s'unir contre l'injustice.", options: [{ id: "a", text: "humanité", correct: true }, { id: "b", text: "égalité", correct: false }] },
    { id: 2148, type: "TRANSLATE", question: "Çevir:", hint: "Haklarımız için gösteri yapıyoruz.", correctAnswer: "Nous manifestons pour nos droits." },
    { id: 2149, type: "TRANSLATE", question: "Çevir:", hint: "İfade özgürlüğü garanti altına alınmalıdır.", correctAnswer: "La liberté d'expression doit être garantie." },
    { id: 2150, type: "TRANSLATE", question: "Çevir:", hint: "Hoşgörü önemli bir değerdir.", correctAnswer: "La tolérance est une valeur importante." },
    { id: 2151, type: "TRANSLATE", question: "Çevir:", hint: "Karşılıklı saygı toplumun temelidir.", correctAnswer: "Le respect mutuel est la base de la société." },
    { id: 2152, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tous les êtres humains naissent libres et égaux.", options: [{ id: "a", text: "Bütün insanlar özgür ve eşit doğarlar.", correct: true }, { id: "b", text: "İnsan haklarına saygı duymalıyız.", correct: false }, { id: "c", text: "Özgürlük bir haktır.", correct: false }, { id: "d", text: "Irkçılığa karşı mücadele ediyoruz.", correct: false }] },
    { id: 2153, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La liberté d'expression doit être garantie.", options: [{ id: "a", text: "İfade özgürlüğü garanti altına alınmalıdır.", correct: true }, { id: "b", text: "Basın özgürlüğü tehdit altındadır.", correct: false }, { id: "c", text: "Herkes konuşmalıdır.", correct: false }, { id: "d", text: "İfade özgürlüğü yoktur.", correct: false }] },
    { id: 2154, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La solidarité est essentielle pour la paix.", options: [{ id: "a", text: "Dayanışma barış için elzemdir.", correct: true }, { id: "b", text: "Barış her yerdedir.", correct: false }, { id: "c", text: "Dayanışma gereksizdir.", correct: false }, { id: "d", text: "Barış ve adalet lazımdır.", correct: false }] },
    { id: 2155, type: "SELECT", question: "'İfade özgürlüğü garanti altına alınmalıdır' cümlesi?", options: [{ id: "a", text: "La liberté d'expression doit être garantie.", correct: true }, { id: "b", text: "Tout le monde doit parler.", correct: false }, { id: "c", text: "Il faut écouter les réfugiés.", correct: false }, { id: "d", text: "Nous luttons pour la liberté.", correct: false }] },
    { id: 2156, type: "SELECT", question: "'L'oppression' ne demek?", options: [{ id: "a", text: "Baskı / Zulüm", correct: true }, { id: "b", text: "Özgürlük", correct: false }, { id: "c", text: "Destek", correct: false }, { id: "d", text: "Barış", correct: false }] },
    { id: 2157, type: "FILL_BLANK", question: "Doldur:", sentence: "Les militants organisent des marches ___.", options: [{ id: "a", text: "pacifiques", correct: true }, { id: "b", text: "violentes", correct: false }] },
    { id: 2158, type: "TRANSLATE", question: "Çevir:", hint: "Daha iyi çalışma koşulları talep ediyorlar.", correctAnswer: "Ils revendiquent de meilleures conditions de travail." },
    { id: 2159, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'humanité doit s'unir contre l'injustice.", options: [{ id: "a", text: "İnsanlık adaletsizliğe karşı birleşmelidir.", correct: true }, { id: "b", text: "İnsanlar adaletli olmalıdır.", correct: false }, { id: "c", text: "Adaletsizlik artıyor.", correct: false }, { id: "d", text: "İnsanlık zor durumda.", correct: false }] },
    { id: 2160, type: "SELECT", question: "'La liberté d'expression' ne demek?", options: [{ id: "a", text: "İfade özgürlüğü", correct: true }, { id: "b", text: "Basın özgürlüğü", correct: false }, { id: "c", text: "Din özgürlüğü", correct: false }, { id: "d", text: "Hareket özgürlüğü", correct: false }] }
];

const unit387Quiz1: Question[] = [
    { id: 2161, type: "SELECT", question: "'Le bénévolat' ne demek?", options: [{ id: "a", text: "Gönüllülük", correct: true }, { id: "b", text: "Dayanışma", correct: false }, { id: "c", text: "Topluluk", correct: false }, { id: "d", text: "Destek", correct: false }] },
    { id: 2162, type: "SELECT", question: "'L'association caritative' ne demek?", options: [{ id: "a", text: "Hayır kurumu", correct: true }, { id: "b", text: "Şirket", correct: false }, { id: "c", text: "Okul", correct: false }, { id: "d", text: "Hastane", correct: false }] },
    { id: 2163, type: "SELECT", question: "'Faire un don' ne demek?", options: [{ id: "a", text: "Bağış yapmak", correct: true }, { id: "b", text: "Yardım etmek", correct: false }, { id: "c", text: "Katılmak", correct: false }, { id: "d", text: "Dağıtmak", correct: false }] },
    { id: 2164, type: "SELECT", question: "'Le soutien' ne demek?", options: [{ id: "a", text: "Destek", correct: true }, { id: "b", text: "Bağış", correct: false }, { id: "c", text: "Topluluk", correct: false }, { id: "d", text: "Dava", correct: false }] },
    { id: 2165, type: "SELECT", question: "'S'engager' ne demek?", options: [{ id: "a", text: "Gönüllü olmak", correct: true }, { id: "b", text: "Reddetmek", correct: false }, { id: "c", text: "Bağış yapmak", correct: false }, { id: "d", text: "Ayrılmak", correct: false }] },
    { id: 2166, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le bénévole", options: [{ id: "a", text: "Gönüllü", correct: true }, { id: "b", text: "Bağışçı", correct: false }, { id: "c", text: "Dernek", correct: false }, { id: "d", text: "Başkan", correct: false }] },
    { id: 2167, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La communauté", options: [{ id: "a", text: "Topluluk", correct: true }, { id: "b", text: "İletişim", correct: false }, { id: "c", text: "Komüne", correct: false }, { id: "d", text: "Dernek", correct: false }] },
    { id: 2168, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les bénévoles aident les personnes démunies.", options: [{ id: "a", text: "Gönüllüler yoksul insanlara yardım eder.", correct: true }, { id: "b", text: "Doktorlar hastalara yardım eder.", correct: false }, { id: "c", text: "Gönüllülük yaygındır.", correct: false }, { id: "d", text: "Dernek üye arıyor.", correct: false }] },
    { id: 2169, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est très répandu en France.", options: [{ id: "a", text: "bénévolat", correct: true }, { id: "b", text: "soutien", correct: false }] },
    { id: 2170, type: "FILL_BLANK", question: "Doldur:", sentence: "Beaucoup de gens ont fait un ___ pour la cause.", options: [{ id: "a", text: "don", correct: true }, { id: "b", text: "aide", correct: false }] },
    { id: 2171, type: "SELECT", question: "'Le volontaire' ne demek?", options: [{ id: "a", text: "Gönüllü (resmi)", correct: true }, { id: "b", text: "Asker", correct: false }, { id: "c", text: "İşçi", correct: false }, { id: "d", text: "Öğretmen", correct: false }] },
    { id: 2172, type: "SELECT", question: "'La collecte' ne demek?", options: [{ id: "a", text: "Bağış toplama", correct: true }, { id: "b", text: "Dağıtım", correct: false }, { id: "c", text: "Koleksiyon", correct: false }, { id: "d", text: "Kampanya", correct: false }] },
    { id: 2173, type: "TRANSLATE", question: "Çevir:", hint: "Zor durumdaki çocuklara yardım etmeyi sever.", correctAnswer: "Il aime aider les enfants en difficulté." },
    { id: 2174, type: "TRANSLATE", question: "Çevir:", hint: "Bu asil bir dava.", correctAnswer: "C'est une cause noble." },
    { id: 2175, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est important d'aider les autres.", options: [{ id: "a", text: "Başkalarına yardım etmek önemlidir.", correct: true }, { id: "b", text: "Gönüllü olmak isterdim.", correct: false }, { id: "c", text: "Dayanışma bizi güçlü kılar.", correct: false }, { id: "d", text: "Bağış yapmak önemlidir.", correct: false }] },
    { id: 2176, type: "TRANSLATE", question: "Çevir:", hint: "Bir dernekte gönüllüyüm.", correctAnswer: "Je suis bénévole dans une association." },
    { id: 2177, type: "FILL_BLANK", question: "Doldur:", sentence: "Les médecins travaillent ___ ce week-end.", options: [{ id: "a", text: "gratuitement", correct: true }, { id: "b", text: "rapidement", correct: false }] },
    { id: 2178, type: "SELECT", question: "'La générosité' ne demek?", options: [{ id: "a", text: "Cömertlik", correct: true }, { id: "b", text: "Güç", correct: false }, { id: "c", text: "Zenginlik", correct: false }, { id: "d", text: "Saygı", correct: false }] },
    { id: 2179, type: "SELECT", question: "'Consacrer' ne demek?", options: [{ id: "a", text: "Adamak / Ayırmak", correct: true }, { id: "b", text: "Satmak", correct: false }, { id: "c", text: "Almak", correct: false }, { id: "d", text: "Vermek", correct: false }] },
    { id: 2180, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Chaque don compte.", options: [{ id: "a", text: "Her bağış önemlidir.", correct: true }, { id: "b", text: "Her gönüllü önemlidir.", correct: false }, { id: "c", text: "Her dernek önemlidir.", correct: false }, { id: "d", text: "Her kişi önemlidir.", correct: false }] }
];
const unit387Quiz2: Question[] = [
    { id: 2181, type: "FILL_BLANK", question: "Doldur (Amaç):", sentence: "Nous faisons des dons ___ que la recherche avance.", options: [{ id: "a", text: "afin", correct: true }, { id: "b", text: "pour", correct: false }] },
    { id: 2182, type: "FILL_BLANK", question: "Doldur:", sentence: "___ peut faire la différence.", options: [{ id: "a", text: "Chacun", correct: true }, { id: "b", text: "Personne", correct: false }] },
    { id: 2183, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Je travaille pour que les enfants ___ un avenir.", options: [{ id: "a", text: "aient", correct: true }, { id: "b", text: "ont", correct: false }] },
    { id: 2184, type: "FILL_BLANK", question: "Doldur:", sentence: "___ ne doit être oublié.", options: [{ id: "a", text: "Personne", correct: true }, { id: "b", text: "Tout le monde", correct: false }] },
    { id: 2185, type: "TRANSLATE", question: "Çevir:", hint: "Yemek dağıtmaya söz verdi.", correctAnswer: "Elle s'est engagée à distribuer des repas." },
    { id: 2186, type: "TRANSLATE", question: "Çevir:", hint: "Boş zamanımı başkalarına adıyorum.", correctAnswer: "Je consacre mon temps libre aux autres." },
    { id: 2187, type: "TRANSLATE", question: "Çevir:", hint: "Bağış yapmaktan çekinmeyin.", correctAnswer: "N'hésitez pas à faire un don." },
    { id: 2188, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La solidarité nous rend plus forts.", options: [{ id: "a", text: "Dayanışma bizi daha güçlü kılar.", correct: true }, { id: "b", text: "Ekip çalışması esastır.", correct: false }, { id: "c", text: "Dernekte gönüllüyüm.", correct: false }, { id: "d", text: "Bağış yapmaktan çekinmeyin.", correct: false }] },
    { id: 2189, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le don du sang sauve des vies.", options: [{ id: "a", text: "Kan bağışı hayat kurtarır.", correct: true }, { id: "b", text: "Kan bankası açıldı.", correct: false }, { id: "c", text: "Bağış yapmak önemlidir.", correct: false }, { id: "d", text: "Hayat çok güzel.", correct: false }] },
    { id: 2190, type: "SELECT", question: "'L'entraide' ne demek?", options: [{ id: "a", text: "Karşılıklı yardımlaşma", correct: true }, { id: "b", text: "Giriş", correct: false }, { id: "c", text: "Antrenman", correct: false }, { id: "d", text: "Yardımseverlik", correct: false }] },
    { id: 2191, type: "SELECT", question: "'Le parrainage' ne demek?", options: [{ id: "a", text: "Hamlik / Sponsorluk", correct: true }, { id: "b", text: "Evlilik", correct: false }, { id: "c", text: "Aile", correct: false }, { id: "d", text: "Arkadaşlık", correct: false }] },
    { id: 2192, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ de fonds a été un succès.", options: [{ id: "a", text: "collecte", correct: true }, { id: "b", text: "distribution", correct: false }] },
    { id: 2193, type: "TRANSLATE", question: "Çevir:", hint: "Dernek yeni üyeler arıyor.", correctAnswer: "L'association cherche de nouveaux membres." },
    { id: 2194, type: "SELECT", question: "'La sensibilisation' ne demek?", options: [{ id: "a", text: "Farkındalık yaratma", correct: true }, { id: "b", text: "Hassasiyet", correct: false }, { id: "c", text: "Duyarlılık", correct: false }, { id: "d", text: "Duygusallık", correct: false }] },
    { id: 2195, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La banque alimentaire distribue de la nourriture.", options: [{ id: "a", text: "Gıda bankası yiyecek dağıtır.", correct: true }, { id: "b", text: "Banka para dağıtır.", correct: false }, { id: "c", text: "Market yiyecek satar.", correct: false }, { id: "d", text: "Restoran yemek yapar.", correct: false }] },
    { id: 2196, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ tout son temps libre au bénévolat.", options: [{ id: "a", text: "consacre", correct: true }, { id: "b", text: "donne", correct: false }] },
    { id: 2197, type: "TRANSLATE", question: "Çevir:", hint: "Gönüllülük çok enerji gerektirir.", correctAnswer: "Le bénévolat demande beaucoup d'énergie." },
    { id: 2198, type: "SELECT", question: "'Le bénéficiaire' ne demek?", options: [{ id: "a", text: "Yararlanıcı", correct: true }, { id: "b", text: "Gönüllü", correct: false }, { id: "c", text: "Bağışçı", correct: false }, { id: "d", text: "Başkan", correct: false }] },
    { id: 2199, type: "SELECT", question: "'L'action sociale' ne demek?", options: [{ id: "a", text: "Sosyal faaliyet", correct: true }, { id: "b", text: "Sosyal medya", correct: false }, { id: "c", text: "Sosyal hayat", correct: false }, { id: "d", text: "Sosyal güvenlik", correct: false }] },
    { id: 2200, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Merci pour votre générosité.", options: [{ id: "a", text: "Cömertliğiniz için teşekkürler.", correct: true }, { id: "b", text: "Yardımınız için teşekkürler.", correct: false }, { id: "c", text: "Zamanınız için teşekkürler.", correct: false }, { id: "d", text: "Sabrınız için teşekkürler.", correct: false }] }
];
const unit387Quiz3: Question[] = [
    { id: 2201, type: "SELECT", question: "Dernek ne organize etti?", options: [{ id: "a", text: "Büyük bir yemek dağıtımı", correct: true }, { id: "b", text: "Kıyafet toplama kampanyası", correct: false }, { id: "c", text: "Bağış gecesi", correct: false }, { id: "d", text: "Yürüyüş", correct: false }] },
    { id: 2202, type: "SELECT", question: "Kimler gönüllü olarak katıldı?", options: [{ id: "a", text: "Sadece yaşlılar", correct: false }, { id: "b", text: "Birçok genç", correct: true }, { id: "c", text: "Çocuklar", correct: false }, { id: "d", text: "Sadece başkan", correct: false }] },
    { id: 2203, type: "SELECT", question: "Yemekler nerede dağıtıldı?", options: [{ id: "a", text: "Okullarda", correct: false }, { id: "b", text: "Şehir merkezinde", correct: true }, { id: "c", text: "Hastanelerde", correct: false }, { id: "d", text: "Parklarda", correct: false }] },
    { id: 2204, type: "SELECT", question: "Para vermek kadar önemli olan nedir?", options: [{ id: "a", text: "Kıyafet vermek", correct: false }, { id: "b", text: "Zamanından bağış yapmak", correct: true }, { id: "c", text: "Yemek pişirmek", correct: false }, { id: "d", text: "Uyumak", correct: false }] },
    { id: 2205, type: "SELECT", question: "Etkinlik neyi kanıtladı?", options: [{ id: "a", text: "Herkes yardım edebilir", correct: true }, { id: "b", text: "Gönüllü bulmak zor", correct: false }, { id: "c", text: "Sadece zenginler yardım eder", correct: false }, { id: "d", text: "Yemek yapmak zor", correct: false }] },
    { id: 2206, type: "TRANSLATE", question: "Çevir:", hint: "Gönüllüler sıcak yemekler hazırladı.", correctAnswer: "Les bénévoles ont préparé des plats chauds." },
    { id: 2207, type: "TRANSLATE", question: "Çevir:", hint: "Bu girişim topluluğu birleştirdi.", correctAnswer: "Cette initiative a rassemblé toute la communauté." },
    { id: 2208, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ils ont distribué les repas dans le centre-ville.", options: [{ id: "a", text: "Yemekleri şehir merkezinde dağıttılar.", correct: true }, { id: "b", text: "Yemekleri pişirdiler.", correct: false }, { id: "c", text: "Şehir merkezine gittiler.", correct: false }, { id: "d", text: "Yemek yediler.", correct: false }] },
    { id: 2209, type: "FILL_BLANK", question: "Doldur:", sentence: "Les jeunes se sont ___ comme bénévoles.", options: [{ id: "a", text: "engagés", correct: true }, { id: "b", text: "amusés", correct: false }] },
    { id: 2210, type: "SELECT", question: "Başkan kime teşekkür etti?", options: [{ id: "a", text: "Herkese", correct: true }, { id: "b", text: "Sadece gençlere", correct: false }, { id: "c", text: "Belediye başkanına", correct: false }, { id: "d", text: "Kimseye", correct: false }] },
    { id: 2211, type: "SELECT", question: "Etkinlik hangi gün yapıldı?", options: [{ id: "a", text: "Hafta sonu", correct: true }, { id: "b", text: "Pazartesi", correct: false }, { id: "c", text: "Cuma", correct: false }, { id: "d", text: "Bayram", correct: false }] },
    { id: 2212, type: "TRANSLATE", question: "Çevir:", hint: "Herkes kendi çapında yardım edebilir.", correctAnswer: "Chacun peut aider à son échelle." },
    { id: 2213, type: "TRANSLATE", question: "Çevir:", hint: "Dayanışma bizi daha güçlü kılar.", correctAnswer: "La solidarité nous rend plus forts." },
    { id: 2214, type: "FILL_BLANK", question: "Doldur:", sentence: "La présidente a ___ tout le monde.", options: [{ id: "a", text: "remercié", correct: true }, { id: "b", text: "critiqué", correct: false }] },
    { id: 2215, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'association a organisé une grande distribution.", options: [{ id: "a", text: "Dernek büyük bir dağıtım organize etti.", correct: true }, { id: "b", text: "Dernek toplantı düzenledi.", correct: false }, { id: "c", text: "Restoran yemek dağıttı.", correct: false }, { id: "d", text: "Dernek kapandı.", correct: false }] },
    { id: 2216, type: "SELECT", question: "Ne tür yemekler hazırlandı?", options: [{ id: "a", text: "Sıcak yemekler", correct: true }, { id: "b", text: "Soğuk içecekler", correct: false }, { id: "c", text: "Tatlılar", correct: false }, { id: "d", text: "Sandviçler", correct: false }] },
    { id: 2217, type: "FILL_BLANK", question: "Doldur:", sentence: "Cette ___ a rassemblé toute la communauté.", options: [{ id: "a", text: "initiative", correct: true }, { id: "b", text: "loi", correct: false }] },
    { id: 2218, type: "TRANSLATE", question: "Çevir:", hint: "Herkese dayanışmaları için teşekkür etti.", correctAnswer: "Elle a remercié tout le monde pour leur solidarité." },
    { id: 2219, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Chacun peut aider à son échelle.", options: [{ id: "a", text: "Herkes kendi çapında yardım edebilir.", correct: true }, { id: "b", text: "Herkes eşittir.", correct: false }, { id: "c", text: "Herkes gönüllü olmalıdır.", correct: false }, { id: "d", text: "Herkes bağış yapmalıdır.", correct: false }] },
    { id: 2220, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Faire un don de son temps est important.", options: [{ id: "a", text: "Zamanından bağış yapmak önemlidir.", correct: true }, { id: "b", text: "Para vermek önemlidir.", correct: false }, { id: "c", text: "Zaman paradır.", correct: false }, { id: "d", text: "Bağış zorunludur.", correct: false }] }
];
const unit387Quiz4: Question[] = [
    { id: 2221, type: "SELECT", question: "'La solidarité' ne demek?", options: [{ id: "a", text: "Dayanışma", correct: true }, { id: "b", text: "Topluluk", correct: false }, { id: "c", text: "Destek", correct: false }, { id: "d", text: "Bağış", correct: false }] },
    { id: 2222, type: "SELECT", question: "'Le don du sang' ne demek?", options: [{ id: "a", text: "Kan bağışı", correct: true }, { id: "b", text: "Kan bankası", correct: false }, { id: "c", text: "Kan tahlili", correct: false }, { id: "d", text: "Kan grubu", correct: false }] },
    { id: 2223, type: "SELECT", question: "'La mission' ne demek?", options: [{ id: "a", text: "Görev / Misyon", correct: true }, { id: "b", text: "Gönderim", correct: false }, { id: "c", text: "Emisyon", correct: false }, { id: "d", text: "İzin", correct: false }] },
    { id: 2224, type: "SELECT", question: "'Soutenir' ne demek?", options: [{ id: "a", text: "Desteklemek", correct: true }, { id: "b", text: "Sürdürmek", correct: false }, { id: "c", text: "Acı çekmek", correct: false }, { id: "d", text: "Hatırlamak", correct: false }] },
    { id: 2225, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ alimentaire distribue de la nourriture.", options: [{ id: "a", text: "banque", correct: true }, { id: "b", text: "distribution", correct: false }] },
    { id: 2226, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous devons ___ les plus vulnérables.", options: [{ id: "a", text: "soutenir", correct: true }, { id: "b", text: "ignorer", correct: false }] },
    { id: 2227, type: "FILL_BLANK", question: "Doldur:", sentence: "Leur ___ est d'aider les plus fragiles.", options: [{ id: "a", text: "mission", correct: true }, { id: "b", text: "maison", correct: false }] },
    { id: 2228, type: "FILL_BLANK", question: "Doldur:", sentence: "La campagne de ___ commence demain.", options: [{ id: "a", text: "sensibilisation", correct: true }, { id: "b", text: "distribution", correct: false }] },
    { id: 2229, type: "TRANSLATE", question: "Çevir:", hint: "Her bağış önemlidir.", correctAnswer: "Chaque don compte, même le plus petit." },
    { id: 2230, type: "TRANSLATE", question: "Çevir:", hint: "Gıda bankası her gün yemek dağıtıyor.", correctAnswer: "La banque alimentaire distribue des repas tous les jours." },
    { id: 2231, type: "TRANSLATE", question: "Çevir:", hint: "Kan bağışı hayat kurtarır.", correctAnswer: "Le don du sang sauve des vies." },
    { id: 2232, type: "TRANSLATE", question: "Çevir:", hint: "En savunmasız kişileri desteklemeliyiz.", correctAnswer: "Nous devons soutenir les plus vulnérables." },
    { id: 2233, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La campagne de sensibilisation commence demain.", options: [{ id: "a", text: "Farkındalık kampanyası yarın başlıyor.", correct: true }, { id: "b", text: "Bağış kampanyası sona erdi.", correct: false }, { id: "c", text: "Seçim kampanyası başladı.", correct: false }, { id: "d", text: "Kampanya iptal edildi.", correct: false }] },
    { id: 2234, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'entraide est la base du vivre-ensemble.", options: [{ id: "a", text: "Yardımlaşma birlikte yaşamanın temelidir.", correct: true }, { id: "b", text: "Yardım her zaman gereklidir.", correct: false }, { id: "c", text: "Birlikte yaşamak zordur.", correct: false }, { id: "d", text: "Temel ihtiyaçlar karşılanmalıdır.", correct: false }] },
    { id: 2235, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le refuge accueille des animaux abandonnés.", options: [{ id: "a", text: "Barınak terk edilmiş hayvanları kabul ediyor.", correct: true }, { id: "b", text: "Hayvanat bahçesi açıldı.", correct: false }, { id: "c", text: "Hayvanlar serbest bırakıldı.", correct: false }, { id: "d", text: "Barınak kapatıldı.", correct: false }] },
    { id: 2236, type: "SELECT", question: "'C'est une cause noble' ne demek?", options: [{ id: "a", text: "Bu asil bir dava.", correct: true }, { id: "b", text: "Bu önemli bir bağış.", correct: false }, { id: "c", text: "Gönüllülük yaygındır.", correct: false }, { id: "d", text: "Yardım etmeyi sever.", correct: false }] },
    { id: 2237, type: "SELECT", question: "'Le refuge' ne demek?", options: [{ id: "a", text: "Sığınak / Barınak", correct: true }, { id: "b", text: "Mülteci", correct: false }, { id: "c", text: "Reddetmek", correct: false }, { id: "d", text: "Kaçmak", correct: false }] },
    { id: 2238, type: "FILL_BLANK", question: "Doldur:", sentence: "Les ___ reçoivent de l'aide chaque semaine.", options: [{ id: "a", text: "bénéficiaires", correct: true }, { id: "b", text: "bénévoles", correct: false }] },
    { id: 2239, type: "TRANSLATE", question: "Çevir:", hint: "Faaliyetimize katılmak ister misin?", correctAnswer: "Tu veux participer à notre prochaine action ?" },
    { id: 2240, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'action sociale est très importante.", options: [{ id: "a", text: "Sosyal faaliyet çok önemlidir.", correct: true }, { id: "b", text: "Sosyal medya çok önemlidir.", correct: false }, { id: "c", text: "Sosyal hayat çok güzeldir.", correct: false }, { id: "d", text: "Sosyal güvenlik önemlidir.", correct: false }] }
];

const unit388Quiz1: Question[] = [
    { id: 2241, type: "SELECT", question: "'Le migrant' ne demek?", options: [{ id: "a", text: "Göçmen", correct: true }, { id: "b", text: "Mülteci", correct: false }, { id: "c", text: "Vatandaş", correct: false }, { id: "d", text: "Gönüllü", correct: false }] },
    { id: 2242, type: "SELECT", question: "'L'asile' ne demek?", options: [{ id: "a", text: "Sığınma", correct: true }, { id: "b", text: "Göç", correct: false }, { id: "c", text: "Sürgün", correct: false }, { id: "d", text: "Sınır", correct: false }] },
    { id: 2243, type: "SELECT", question: "'L'intégration' ne demek?", options: [{ id: "a", text: "Entegrasyon / Uyum", correct: true }, { id: "b", text: "Ayrılık", correct: false }, { id: "c", text: "Göç", correct: false }, { id: "d", text: "Sınır", correct: false }] },
    { id: 2244, type: "SELECT", question: "'La frontière' ne demek?", options: [{ id: "a", text: "Sınır", correct: true }, { id: "b", text: "Köprü", correct: false }, { id: "c", text: "Yol", correct: false }, { id: "d", text: "Duvar", correct: false }] },
    { id: 2245, type: "SELECT", question: "'L'exil' ne demek?", options: [{ id: "a", text: "Sürgün", correct: true }, { id: "b", text: "Sığınma", correct: false }, { id: "c", text: "Göç", correct: false }, { id: "d", text: "Vatan", correct: false }] },
    { id: 2246, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le réfugié", options: [{ id: "a", text: "Mülteci", correct: true }, { id: "b", text: "Göçmen", correct: false }, { id: "c", text: "Vatandaş", correct: false }, { id: "d", text: "Turist", correct: false }] },
    { id: 2247, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La terre d'accueil", options: [{ id: "a", text: "Ev sahibi ülke", correct: true }, { id: "b", text: "Doğduğu ülke", correct: false }, { id: "c", text: "Komşu ülke", correct: false }, { id: "d", text: "Düşman ülke", correct: false }] },
    { id: 2248, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les migrants cherchent une vie meilleure.", options: [{ id: "a", text: "Göçmenler daha iyi bir hayat arıyor.", correct: true }, { id: "b", text: "Göçmenler iş bulamıyor.", correct: false }, { id: "c", text: "Göçmenler geri dönüyor.", correct: false }, { id: "d", text: "Göçmenler seyahat ediyor.", correct: false }] },
    { id: 2249, type: "FILL_BLANK", question: "Doldur:", sentence: "Les ___ fuient la guerre.", options: [{ id: "a", text: "réfugiés", correct: true }, { id: "b", text: "touristes", correct: false }] },
    { id: 2250, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ est un processus long.", options: [{ id: "a", text: "intégration", correct: true }, { id: "b", text: "immigration", correct: false }] },
    { id: 2251, type: "SELECT", question: "'Accueillir' ne demek?", options: [{ id: "a", text: "Karşılamak / Kabul etmek", correct: true }, { id: "b", text: "Reddetmek", correct: false }, { id: "c", text: "Göndermek", correct: false }, { id: "d", text: "Kaçmak", correct: false }] },
    { id: 2252, type: "SELECT", question: "'Le pays d'origine' ne demek?", options: [{ id: "a", text: "Menşe ülke", correct: true }, { id: "b", text: "Ev sahibi ülke", correct: false }, { id: "c", text: "Komşu ülke", correct: false }, { id: "d", text: "Büyük ülke", correct: false }] },
    { id: 2253, type: "TRANSLATE", question: "Çevir:", hint: "Göçmenler daha iyi bir hayat arıyor.", correctAnswer: "Les migrants cherchent une vie meilleure." },
    { id: 2254, type: "TRANSLATE", question: "Çevir:", hint: "Mülteciler savaştan kaçıyor.", correctAnswer: "Les réfugiés fuient la guerre." },
    { id: 2255, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'intégration est un processus long.", options: [{ id: "a", text: "Entegrasyon uzun bir süreçtir.", correct: true }, { id: "b", text: "Göç kolay bir süreçtir.", correct: false }, { id: "c", text: "Sığınma hakkı önemlidir.", correct: false }, { id: "d", text: "Sınırlar kapalıdır.", correct: false }] },
    { id: 2256, type: "TRANSLATE", question: "Çevir:", hint: "Yeni bir dil öğrenmek gerekiyor.", correctAnswer: "Il faut apprendre une nouvelle langue." },
    { id: 2257, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ont traversé la ___ à pied.", options: [{ id: "a", text: "frontière", correct: true }, { id: "b", text: "ville", correct: false }] },
    { id: 2258, type: "SELECT", question: "'La xénophobie' ne demek?", options: [{ id: "a", text: "Yabancı düşmanlığı", correct: true }, { id: "b", text: "Yabancı sevgisi", correct: false }, { id: "c", text: "Korku", correct: false }, { id: "d", text: "Merak", correct: false }] },
    { id: 2259, type: "SELECT", question: "'Fuir' ne demek?", options: [{ id: "a", text: "Kaçmak", correct: true }, { id: "b", text: "Gelmek", correct: false }, { id: "c", text: "Kalmak", correct: false }, { id: "d", text: "Dönmek", correct: false }] },
    { id: 2260, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ils ont demandé l'asile politique.", options: [{ id: "a", text: "Siyasi sığınma talep ettiler.", correct: true }, { id: "b", text: "Vize başvurusu yaptılar.", correct: false }, { id: "c", text: "Vatandaşlık aldılar.", correct: false }, { id: "d", text: "Pasaport istediler.", correct: false }] }
];
const unit388Quiz2: Question[] = [
    { id: 2261, type: "FILL_BLANK", question: "Doldur:", sentence: "Les réfugiés ont besoin d'un ___ sûr.", options: [{ id: "a", text: "refuge", correct: true }, { id: "b", text: "travail", correct: false }] },
    { id: 2262, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut ___ une nouvelle langue.", options: [{ id: "a", text: "apprendre", correct: true }, { id: "b", text: "oublier", correct: false }] },
    { id: 2263, type: "FILL_BLANK", question: "Doldur (Subjonctif):", sentence: "Il est important que nous les ___ (accueillir).", options: [{ id: "a", text: "accueillions", correct: true }, { id: "b", text: "accueillons", correct: false }] },
    { id: 2264, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est un crime contre l'humanité.", options: [{ id: "a", text: "xénophobie", correct: true }, { id: "b", text: "solidarité", correct: false }] },
    { id: 2265, type: "TRANSLATE", question: "Çevir:", hint: "Ülkelerini terk etmek zorunda kaldılar.", correctAnswer: "Ils ont été obligés de quitter leur pays." },
    { id: 2266, type: "TRANSLATE", question: "Çevir:", hint: "Sınırı yürüyerek geçtiler.", correctAnswer: "Ils ont traversé la frontière à pied." },
    { id: 2267, type: "TRANSLATE", question: "Çevir:", hint: "Sığınma hakkı evrensel bir haktır.", correctAnswer: "Le droit d'asile est un droit universel." },
    { id: 2268, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La diversité culturelle est une richesse.", options: [{ id: "a", text: "Kültürel çeşitlilik bir zenginliktir.", correct: true }, { id: "b", text: "Kültür farklılıkları sorun yaratır.", correct: false }, { id: "c", text: "Kültürel etkinlik düzenlendi.", correct: false }, { id: "d", text: "Kültür önemli değildir.", correct: false }] },
    { id: 2269, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ils ont été obligés de quitter leur pays.", options: [{ id: "a", text: "Ülkelerini terk etmek zorunda kaldılar.", correct: true }, { id: "b", text: "Ülkelerine döndüler.", correct: false }, { id: "c", text: "Ülkelerini seviyorlar.", correct: false }, { id: "d", text: "Ülkelerini ziyaret ettiler.", correct: false }] },
    { id: 2270, type: "SELECT", question: "'La diversité culturelle' ne demek?", options: [{ id: "a", text: "Kültürel çeşitlilik", correct: true }, { id: "b", text: "Kültürel farklılık", correct: false }, { id: "c", text: "Kültürel miras", correct: false }, { id: "d", text: "Kültürel baskı", correct: false }] },
    { id: 2271, type: "SELECT", question: "'Le permis de séjour' ne demek?", options: [{ id: "a", text: "Oturma izni", correct: true }, { id: "b", text: "Çalışma izni", correct: false }, { id: "c", text: "Ehliyet", correct: false }, { id: "d", text: "Pasaport", correct: false }] },
    { id: 2272, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ culturelle enrichit la société.", options: [{ id: "a", text: "diversité", correct: true }, { id: "b", text: "différence", correct: false }] },
    { id: 2273, type: "TRANSLATE", question: "Çevir:", hint: "Oturma izni almak zordur.", correctAnswer: "Obtenir un permis de séjour est difficile." },
    { id: 2274, type: "SELECT", question: "'L'immigration clandestine' ne demek?", options: [{ id: "a", text: "Yasadışı göç", correct: true }, { id: "b", text: "Yasal göç", correct: false }, { id: "c", text: "Geçici göç", correct: false }, { id: "d", text: "İç göç", correct: false }] },
    { id: 2275, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le droit d'asile est un droit universel.", options: [{ id: "a", text: "Sığınma hakkı evrensel bir haktır.", correct: true }, { id: "b", text: "Sığınma hakkı kısıtlıdır.", correct: false }, { id: "c", text: "Sığınma hakkı kaldırıldı.", correct: false }, { id: "d", text: "Sığınma kolaydır.", correct: false }] },
    { id: 2276, type: "FILL_BLANK", question: "Doldur:", sentence: "Obtenir un ___ de séjour est difficile.", options: [{ id: "a", text: "permis", correct: true }, { id: "b", text: "droit", correct: false }] },
    { id: 2277, type: "TRANSLATE", question: "Çevir:", hint: "Kültürel çeşitlilik toplumu zenginleştirir.", correctAnswer: "La diversité culturelle enrichit la société." },
    { id: 2278, type: "SELECT", question: "'Quitter' ne demek?", options: [{ id: "a", text: "Terk etmek / Ayrılmak", correct: true }, { id: "b", text: "Kalmak", correct: false }, { id: "c", text: "Gelmek", correct: false }, { id: "d", text: "Yaşamak", correct: false }] },
    { id: 2279, type: "SELECT", question: "'La nostalgie' ne demek?", options: [{ id: "a", text: "Hasret / Nostalji", correct: true }, { id: "b", text: "Mutluluk", correct: false }, { id: "c", text: "Hüzün", correct: false }, { id: "d", text: "Korku", correct: false }] },
    { id: 2280, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'immigration clandestine est dangereuse.", options: [{ id: "a", text: "Yasadışı göç tehlikelidir.", correct: true }, { id: "b", text: "Göç kolaydır.", correct: false }, { id: "c", text: "Göçmenlik yasaldır.", correct: false }, { id: "d", text: "Göç artıyor.", correct: false }] }
];
const unit388Quiz3: Question[] = [
    { id: 2281, type: "SELECT", question: "Mülteciler neden ülkelerini terk etti?", options: [{ id: "a", text: "Savaş ve baskı nedeniyle", correct: true }, { id: "b", text: "Tatil için", correct: false }, { id: "c", text: "İş için", correct: false }, { id: "d", text: "Eğitim için", correct: false }] },
    { id: 2282, type: "SELECT", question: "En büyük zorluk neydi?", options: [{ id: "a", text: "Yeni bir dil öğrenmek", correct: true }, { id: "b", text: "Yemek yapmak", correct: false }, { id: "c", text: "Araba kullanmak", correct: false }, { id: "d", text: "Alışveriş yapmak", correct: false }] },
    { id: 2283, type: "SELECT", question: "Yardım derneği ne sağladı?", options: [{ id: "a", text: "Dil kurları ve barınma", correct: true }, { id: "b", text: "Para ve araba", correct: false }, { id: "c", text: "Sadece yemek", correct: false }, { id: "d", text: "Hiçbir şey", correct: false }] },
    { id: 2284, type: "SELECT", question: "Göçmenler ne hissediyor?", options: [{ id: "a", text: "Ülkelerine hasret", correct: true }, { id: "b", text: "Hiçbir şey", correct: false }, { id: "c", text: "Öfke", correct: false }, { id: "d", text: "Sıkıntı", correct: false }] },
    { id: 2285, type: "SELECT", question: "Entegrasyon için en önemli şey ne?", options: [{ id: "a", text: "Dil ve toplumsal bağlar", correct: true }, { id: "b", text: "Para", correct: false }, { id: "c", text: "Araba", correct: false }, { id: "d", text: "Şans", correct: false }] },
    { id: 2286, type: "TRANSLATE", question: "Çevir:", hint: "Dernek dil kurları düzenledi.", correctAnswer: "L'association a organisé des cours de langue." },
    { id: 2287, type: "TRANSLATE", question: "Çevir:", hint: "Her kültür bir zenginliktir.", correctAnswer: "Chaque culture est une richesse." },
    { id: 2288, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ils ont trouvé un logement grâce à l'association.", options: [{ id: "a", text: "Dernek sayesinde barınma buldular.", correct: true }, { id: "b", text: "Kendi evlerini aldılar.", correct: false }, { id: "c", text: "Otelde kaldılar.", correct: false }, { id: "d", text: "Arkadaşlarıyla kaldılar.", correct: false }] },
    { id: 2289, type: "FILL_BLANK", question: "Doldur:", sentence: "L'association a organisé des ___ de langue.", options: [{ id: "a", text: "cours", correct: true }, { id: "b", text: "livres", correct: false }] },
    { id: 2290, type: "SELECT", question: "Mülteciler hangi yolla geldi?", options: [{ id: "a", text: "Deniz yoluyla", correct: true }, { id: "b", text: "Uçakla", correct: false }, { id: "c", text: "Trenle", correct: false }, { id: "d", text: "Otobüsle", correct: false }] },
    { id: 2291, type: "SELECT", question: "Çocuklar nereye kaydedildi?", options: [{ id: "a", text: "Okula", correct: true }, { id: "b", text: "Hastaneye", correct: false }, { id: "c", text: "Klübe", correct: false }, { id: "d", text: "Camiye", correct: false }] },
    { id: 2292, type: "TRANSLATE", question: "Çevir:", hint: "Çocuklar okula kaydedildi.", correctAnswer: "Les enfants ont été inscrits à l'école." },
    { id: 2293, type: "TRANSLATE", question: "Çevir:", hint: "Yeni bir hayata başlamak cesaret ister.", correctAnswer: "Commencer une nouvelle vie demande du courage." },
    { id: 2294, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ressentent de la ___ pour leur pays.", options: [{ id: "a", text: "nostalgie", correct: true }, { id: "b", text: "colère", correct: false }] },
    { id: 2295, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Commencer une nouvelle vie demande du courage.", options: [{ id: "a", text: "Yeni bir hayata başlamak cesaret ister.", correct: true }, { id: "b", text: "Yeni bir iş bulmak kolaydır.", correct: false }, { id: "c", text: "Yeni bir dil öğrenmek gerekir.", correct: false }, { id: "d", text: "Yeni bir ev almak zordur.", correct: false }] },
    { id: 2296, type: "SELECT", question: "Parçada topluluk nasıl tepki verdi?", options: [{ id: "a", text: "Sıcak karşıladı", correct: true }, { id: "b", text: "Reddetti", correct: false }, { id: "c", text: "İlgilenmedi", correct: false }, { id: "d", text: "Kızgınlıkla", correct: false }] },
    { id: 2297, type: "FILL_BLANK", question: "Doldur:", sentence: "Les enfants ont été ___ à l'école.", options: [{ id: "a", text: "inscrits", correct: true }, { id: "b", text: "envoyés", correct: false }] },
    { id: 2298, type: "TRANSLATE", question: "Çevir:", hint: "Topluluk onları sıcak karşıladı.", correctAnswer: "La communauté les a accueillis chaleureusement." },
    { id: 2299, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Chaque culture est une richesse.", options: [{ id: "a", text: "Her kültür bir zenginliktir.", correct: true }, { id: "b", text: "Her kültür farklıdır.", correct: false }, { id: "c", text: "Kültür önemli değildir.", correct: false }, { id: "d", text: "Kültürel farklılıklar sorun yaratır.", correct: false }] },
    { id: 2300, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'association a organisé des cours de langue.", options: [{ id: "a", text: "Dernek dil kurları düzenledi.", correct: true }, { id: "b", text: "Dernek yemek dağıttı.", correct: false }, { id: "c", text: "Dernek kapandı.", correct: false }, { id: "d", text: "Dernek toplantı yaptı.", correct: false }] }
];
const unit388Quiz4: Question[] = [
    { id: 2301, type: "SELECT", question: "'Le demandeur d'asile' ne demek?", options: [{ id: "a", text: "Sığınmacı", correct: true }, { id: "b", text: "Mülteci", correct: false }, { id: "c", text: "Göçmen", correct: false }, { id: "d", text: "Vatandaş", correct: false }] },
    { id: 2302, type: "SELECT", question: "'La patrie' ne demek?", options: [{ id: "a", text: "Vatan", correct: true }, { id: "b", text: "Parti", correct: false }, { id: "c", text: "Baba", correct: false }, { id: "d", text: "Sınır", correct: false }] },
    { id: 2303, type: "SELECT", question: "'Le camp de réfugiés' ne demek?", options: [{ id: "a", text: "Mülteci kampı", correct: true }, { id: "b", text: "Kamp alanı", correct: false }, { id: "c", text: "Tatil kampı", correct: false }, { id: "d", text: "Askeri kamp", correct: false }] },
    { id: 2304, type: "SELECT", question: "'S'adapter' ne demek?", options: [{ id: "a", text: "Uyum sağlamak", correct: true }, { id: "b", text: "Reddetmek", correct: false }, { id: "c", text: "Kaçmak", correct: false }, { id: "d", text: "Unutmak", correct: false }] },
    { id: 2305, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils vivent dans un ___ de réfugiés.", options: [{ id: "a", text: "camp", correct: true }, { id: "b", text: "ville", correct: false }] },
    { id: 2306, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut s'___ à une nouvelle culture.", options: [{ id: "a", text: "adapter", correct: true }, { id: "b", text: "habituer", correct: false }] },
    { id: 2307, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ leur manque beaucoup.", options: [{ id: "a", text: "patrie", correct: true }, { id: "b", text: "ville", correct: false }] },
    { id: 2308, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ d'asile attend une réponse.", options: [{ id: "a", text: "demandeur", correct: true }, { id: "b", text: "réfugié", correct: false }] },
    { id: 2309, type: "TRANSLATE", question: "Çevir:", hint: "Mülteci kampında yaşıyorlar.", correctAnswer: "Ils vivent dans un camp de réfugiés." },
    { id: 2310, type: "TRANSLATE", question: "Çevir:", hint: "Yeni bir kültüre uyum sağlamak gerekiyor.", correctAnswer: "Il faut s'adapter à une nouvelle culture." },
    { id: 2311, type: "TRANSLATE", question: "Çevir:", hint: "Vatanlarını çok özlüyorlar.", correctAnswer: "La patrie leur manque beaucoup." },
    { id: 2312, type: "TRANSLATE", question: "Çevir:", hint: "Sığınmacı bir cevap bekliyor.", correctAnswer: "Le demandeur d'asile attend une réponse." },
    { id: 2313, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il faut s'adapter à une nouvelle culture.", options: [{ id: "a", text: "Yeni bir kültüre uyum sağlamak gerekiyor.", correct: true }, { id: "b", text: "Yeni bir dil öğrenmek kolaydır.", correct: false }, { id: "c", text: "Kültür farklılıkları önemlidir.", correct: false }, { id: "d", text: "Yeni bir ülkeye taşındılar.", correct: false }] },
    { id: 2314, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La patrie leur manque beaucoup.", options: [{ id: "a", text: "Vatanlarını çok özlüyorlar.", correct: true }, { id: "b", text: "Vatanları çok güzel.", correct: false }, { id: "c", text: "Vatanlarına döndüler.", correct: false }, { id: "d", text: "Vatanları tehlikeli.", correct: false }] },
    { id: 2315, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ils vivent dans un camp de réfugiés.", options: [{ id: "a", text: "Mülteci kampında yaşıyorlar.", correct: true }, { id: "b", text: "Şehirde yaşıyorlar.", correct: false }, { id: "c", text: "Köyde yaşıyorlar.", correct: false }, { id: "d", text: "Kamptan ayrıldılar.", correct: false }] },
    { id: 2316, type: "SELECT", question: "'La persécution' ne demek?", options: [{ id: "a", text: "Zulüm / Baskı", correct: true }, { id: "b", text: "Takip", correct: false }, { id: "c", text: "Azim", correct: false }, { id: "d", text: "Sabır", correct: false }] },
    { id: 2317, type: "SELECT", question: "'L'accueil' ne demek?", options: [{ id: "a", text: "Karşılama / Kabul", correct: true }, { id: "b", text: "Veda", correct: false }, { id: "c", text: "Red", correct: false }, { id: "d", text: "Ayrılık", correct: false }] },
    { id: 2318, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils fuient la ___ politique.", options: [{ id: "a", text: "persécution", correct: true }, { id: "b", text: "situation", correct: false }] },
    { id: 2319, type: "TRANSLATE", question: "Çevir:", hint: "Onları sıcak bir şekilde karşılamalıyız.", correctAnswer: "Nous devons les accueillir chaleureusement." },
    { id: 2320, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'accueil des réfugiés est un devoir moral.", options: [{ id: "a", text: "Mültecileri kabul etmek ahlaki bir görevdir.", correct: true }, { id: "b", text: "Mülteciler geri gönderilmeli.", correct: false }, { id: "c", text: "Mülteciler tehlikelidir.", correct: false }, { id: "d", text: "Mülteciler çalışmalıdır.", correct: false }] }
];

const unit389Quiz1: Question[] = [
    { id: 2321, type: "SELECT", question: "Que signifie 'l'inflation' ?", options: [{ id: "a", text: "La baisse des prix", correct: false }, { id: "b", text: "La hausse généralisée des prix", correct: true }, { id: "c", text: "L'augmentation des salaires", correct: false }, { id: "d", text: "La création de monnaie", correct: false }] },
    { id: 2322, type: "SELECT", question: "Qu'est-ce que le PIB ?", options: [{ id: "a", text: "Le Poids Intérieur Brut", correct: false }, { id: "b", text: "Le Produit Intérieur Brut", correct: true }, { id: "c", text: "Le Profit Industriel Brut", correct: false }, { id: "d", text: "Le Placement Intérieur Brut", correct: false }] },
    { id: 2323, type: "SELECT", question: "Que signifie 'le chômage' ?", options: [{ id: "a", text: "Le manque de travail", correct: true }, { id: "b", text: "Le manque d'argent", correct: false }, { id: "c", text: "Le manque de vacances", correct: false }, { id: "d", text: "Le manque de sommeil", correct: false }] },
    { id: 2324, type: "SELECT", question: "Qu'est-ce qu'une 'entreprise' ?", options: [{ id: "a", text: "Un lieu de vacances", correct: false }, { id: "b", text: "Une organisation qui produit des biens ou services", correct: true }, { id: "c", text: "Un stade de sport", correct: false }, { id: "d", text: "Un type de taxe", correct: false }] },
    { id: 2325, type: "SELECT", question: "Que signifie 'investir' ?", options: [{ id: "a", text: "Dépenser de l'argent inutilement", correct: false }, { id: "b", text: "Placer de l'argent pour obtenir un profit futur", correct: true }, { id: "c", text: "Économiser tout son argent", correct: false }, { id: "d", text: "Donner de l'argent à une association", correct: false }] },
    { id: 2326, type: "SELECT", question: "Qu'est-ce que 'le marché' en économie ?", options: [{ id: "a", text: "Un lieu pour acheter des légumes", correct: false }, { id: "b", text: "Le lieu de rencontre entre l'offre et la demande", correct: true }, { id: "c", text: "Le siège d'une banque", correct: false }, { id: "d", text: "Un type de monnaie", correct: false }] },
    { id: 2327, type: "SELECT", question: "Que signifie 'le profit' ?", options: [{ id: "a", text: "La perte d'argent", correct: false }, { id: "b", text: "Le bénéfice réalisé par une entreprise", correct: true }, { id: "c", text: "Le montant des impôts", correct: false }, { id: "d", text: "Le salaire d'un employé", correct: false }] },
    { id: 2328, type: "SELECT", question: "Qu'est-ce qu'un 'impôt' ?", options: [{ id: "a", text: "Un cadeau de l'État", correct: false }, { id: "b", text: "Une contribution obligatoire aux charges publiques", correct: true }, { id: "c", text: "Un prêt de la banque", correct: false }, { id: "d", text: "Un type d'investissement", correct: false }] },
    { id: 2329, type: "SELECT", question: "Que signifie 'la dette' ?", options: [{ id: "a", text: "L'argent que l'on possède", correct: false }, { id: "b", text: "L'argent que l'on debe à quelqu'un", correct: false }, { id: "c", text: "L'argent que l'on gagne", correct: false }, { id: "d", text: "L'argent que l'on cache", correct: false }] },
    { id: 2330, type: "SELECT", question: "Qu'est-ce que 'la monnaie' ?", options: [{ id: "a", text: "Un type de papier", correct: false }, { id: "b", text: "L'unité de mesure de la valeur et instrument d'échange", correct: true }, { id: "c", text: "Un objet de collection", correct: false }, { id: "d", text: "Un synonyme de richesse", correct: false }] },
    { id: 2331, type: "SELECT", question: "Que signifie 'la croissance' ?", options: [{ id: "a", text: "La diminution de la richesse", correct: false }, { id: "b", text: "L'augmentation de la production de richesse", correct: true }, { id: "c", text: "Le vieillissement de la population", correct: false }, { id: "d", text: "La hausse du chômage", correct: false }] },
    { id: 2332, type: "SELECT", question: "Qu'est-ce qu'un 'salarié' ?", options: [{ id: "a", text: "Une personne qui travaille gratuitement", correct: false }, { id: "b", text: "Une personne qui reçoit un salaire en échange de son travail", correct: true }, { id: "c", text: "Un patron d'entreprise", correct: false }, { id: "d", text: "Un actionnaire en bourse", correct: false }] },
    { id: 2333, type: "SELECT", question: "Que signifie 'la consommation' ?", options: [{ id: "a", text: "La production de biens", correct: false }, { id: "b", text: "L'utilisation de biens et services pour satisfaire des besoins", correct: true }, { id: "c", text: "L'épargne d'argent", correct: false }, { id: "d", text: "L'exportation de produits", correct: false }] },
    { id: 2334, type: "SELECT", question: "Qu'est-ce que 'la bourse' ?", options: [{ id: "a", text: "Un sac à main", correct: false }, { id: "b", text: "Le marché financier où s'échangent les actions", correct: true }, { id: "c", text: "Une banque centrale", correct: false }, { id: "d", text: "Un type d'impôt", correct: false }] },
    { id: 2335, type: "SELECT", question: "Que signifie 'le pouvoir d'achat' ?", options: [{ id: "a", text: "La capacité d'acheter des actions", correct: false }, { id: "b", text: "La quantité de biens qu'un revenu permet d'acheter", correct: true }, { id: "c", text: "Le droit de voter", correct: false }, { id: "d", text: "La richesse d'un pays", correct: false }] },
    { id: 2336, type: "SELECT", question: "Qu'est-ce qu'une 'crise' ?", options: [{ id: "a", text: "Une période de prospérité", correct: false }, { id: "b", text: "Une période de difficultés économiques graves", correct: true }, { id: "c", text: "Une fête nationale", correct: false }, { id: "d", text: "Une nouvelle loi", correct: false }] },
    { id: 2337, type: "SELECT", question: "Que signifie 'épargner' ?", options: [{ id: "a", text: "Dépenser tout son argent", correct: false }, { id: "b", text: "Mettre de l'argent de côté", correct: true }, { id: "c", text: "Emprunter à la banque", correct: false }, { id: "d", text: "Investir en bourse", correct: false }] },
    { id: 2338, type: "SELECT", question: "Qu'est-ce qu'un 'syndicat' ?", options: [{ id: "a", text: "Une organisation de patrons", correct: false }, { id: "b", text: "Une organisation de défense des intérêts des travailleurs", correct: true }, { id: "c", text: "Une banque d'investissement", correct: false }, { id: "d", text: "Un service de l'État", correct: false }] },
    { id: 2339, type: "SELECT", question: "Que signifie 'la concurrence' ?", options: [{ id: "a", text: "L'entente entre les entreprises", correct: false }, { id: "b", text: "La rivalité entre plusieurs entreprises sur un marché", correct: true }, { id: "c", text: "Le monopole d'une seule entreprise", correct: false }, { id: "d", text: "La fermeture d'une entreprise", correct: false }] },
    { id: 2340, type: "SELECT", question: "Qu'est-ce qu'un 'budget' ?", options: [{ id: "a", text: "Une liste de courses", correct: false }, { id: "b", text: "L'ensemble des recettes et des dépenses prévues", correct: true }, { id: "c", text: "Un prêt bancaire", correct: false }, { id: "d", text: "Un type de compte en banque", correct: false }] }
];
const unit389Quiz2: Question[] = [
    { id: 2341, type: "SELECT", question: "Quelle est la conséquence directe d'une inflation élevée ?", options: [{ id: "a", text: "Les prix baissent", correct: false }, { id: "b", text: "Le pouvoir d'achat diminue", correct: true }, { id: "c", text: "Le chômage s'arrête", correct: false }, { id: "d", text: "La monnaie prend de la valeur", correct: false }] },
    { id: 2342, type: "SELECT", question: "Que se passe-t-il lors d'une période de récession ?", options: [{ id: "a", text: "Le PIB augmente", correct: false }, { id: "b", text: "Le PIB diminue pendant plusieurs trimestres", correct: true }, { id: "c", text: "Tout le monde trouve un travail", correct: false }, { id: "d", text: "Les banques ferment", correct: false }] },
    { id: 2343, type: "SELECT", question: "Comment appelle-t-on le fait de ne pas avoir de travail ?", options: [{ id: "a", text: "La grève", correct: false }, { id: "b", text: "Le chômage", correct: true }, { id: "c", text: "Le congé", correct: false }, { id: "d", text: "La retraite", correct: false }] },
    { id: 2344, type: "SELECT", question: "Quel indicateur mesure la richesse produit par un pays en un an ?", options: [{ id: "a", text: "L'inflation", correct: false }, { id: "b", text: "Le PIB", correct: true }, { id: "c", text: "La dette", correct: false }, { id: "d", text: "Le budget", correct: false }] },
    { id: 2345, type: "SELECT", question: "Que signifie 'faire faillite' ?", options: [{ id: "a", text: "Gagner beaucoup d'argent", correct: false }, { id: "b", text: "Ne plus pouvoir payer ses dettes et fermer", correct: true }, { id: "c", text: "Ouvrir une nouvelle succursale", correct: false }, { id: "d", text: "Changer de direction", correct: false }] },
    { id: 2346, type: "SELECT", question: "Quel est le rôle de la Banque Centrale ?", options: [{ id: "a", text: "Prêter de l'argent aux particuliers", correct: false }, { id: "b", text: "Gérer la monnaie et les taux d'intérêt", correct: true }, { id: "c", text: "Vendre des produits au marché", correct: false }, { id: "d", text: "Collecter les impôts", correct: false }] },
    { id: 2347, type: "SELECT", question: "Pourquoi les prix augmentent-ils souvent ?", options: [{ id: "a", text: "Parce que la demande dépasse l'offre", correct: true }, { id: "b", text: "Parce que tout le monde est riche", correct: false }, { id: "c", text: "Parce que la production est trop facile", correct: false }, { id: "d", text: "Parce que les gens n'achètent rien", correct: false }] },
    { id: 2348, type: "SELECT", question: "Qu'est-ce qu'une 'subvention' ?", options: [{ id: "a", text: "Une amende à payer", correct: false }, { id: "b", text: "Une aide financière de l'État", correct: true }, { id: "c", text: "Un type d'action en bourse", correct: false }, { id: "d", text: "Une taxe sur la consommation", correct: false }] },
    { id: 2349, type: "SELECT", question: "Que signifie 'la mondialisation' ?", options: [{ id: "a", text: "Le repli sur soi d'un pays", correct: false }, { id: "b", text: "L'interdépendance croissante des économies mondiales", correct: true }, { id: "c", text: "Le voyage dans l'espace", correct: false }, { id: "d", text: "La fin du commerce", correct: false }] },
    { id: 2350, type: "SELECT", question: "Quel secteur s'occupe de la finance et du commerce ?", options: [{ id: "a", text: "Le secteur primaire", correct: false }, { id: "b", text: "Le secteur secondaire", correct: false }, { id: "c", text: "Le secteur tertiaire", correct: true }, { id: "d", text: "Le secteur quaternaire", correct: false }] },
    { id: 2351, type: "SELECT", question: "Que signifie 'le taux d'intérêt' ?", options: [{ id: "a", text: "Le prix de l'argent emprunté", correct: true }, { id: "b", text: "Le montant des impôts", correct: false }, { id: "c", text: "Le salaire minimum", correct: false }, { id: "d", text: "La valeur du dollar", correct: false }] },
    { id: 2352, type: "SELECT", question: "Quel est le but d'un syndicat ?", options: [{ id: "a", text: "Maximiser les profits", correct: false }, { id: "b", text: "Défendre les droits des salariés", correct: true }, { id: "c", text: "Collecter les taxes", correct: false }, { id: "d", text: "Investir en bourse", correct: false }] },
    { id: 2353, type: "SELECT", question: "Que signifie 'la précarité' ?", options: [{ id: "a", text: "La richesse extrême", correct: false }, { id: "b", text: "Une situation d'instabilité financière", correct: true }, { id: "c", text: "Un CDI", correct: false }, { id: "d", text: "Une promotion au travail", correct: false }] },
    { id: 2354, type: "SELECT", question: "Qu'est-ce qu'un 'débit' sur un compte ?", options: [{ id: "a", text: "Une entrée d'argent", correct: false }, { id: "b", text: "Une sortie d'argent", correct: true }, { id: "c", text: "Un gain au loto", correct: false }, { id: "d", text: "Un nouveau prêt", correct: false }] },
    { id: 2355, type: "SELECT", question: "Que signifie 'l'austérité' ?", options: [{ id: "a", text: "Une politique de grandes dépenses", correct: false }, { id: "b", text: "Une politique de réduction stricte des dépenses publiques", correct: true }, { id: "c", text: "Une période de fête", correct: false }, { id: "d", text: "La fin de la monnaie", correct: false }] },
    { id: 2356, type: "SELECT", question: "Quelle est la différence entre brut et net pour un salaire ?", options: [{ id: "a", text: "Il n'y a pas de différence", correct: false }, { id: "b", text: "Le net est ce que l'on reçoit après les taxes", correct: true }, { id: "c", text: "Le brut est plus petit que le net", correct: false }, { id: "d", text: "Le brut inclut les vacances", correct: false }] },
    { id: 2357, type: "SELECT", question: "Que signifie 'délocaliser' une usine ?", options: [{ id: "a", text: "La fermer définitivement", correct: false }, { id: "b", text: "La déplacer dans un pays où les coûts sont plus bas", correct: true }, { id: "c", text: "L'agrandir sur place", correct: false }, { id: "d", text: "La vendre à l'État", correct: false }] },
    { id: 2358, type: "SELECT", question: "Qu'est-ce que le 'SMIC' en France ?", options: [{ id: "a", text: "Le syndicat des mines", correct: false }, { id: "b", text: "Le Salaire Minimum Interprofessionnel de Croissance", correct: true }, { id: "c", text: "Une taxe sur le café", correct: false }, { id: "d", text: "Un type d'investissement", correct: false }] },
    { id: 2359, type: "SELECT", question: "Que signifie 'le plein emploi' ?", options: [{ id: "a", text: "Une situation où tout le monde a un travail", correct: true }, { id: "b", text: "Une entreprise qui n'a plus de place", correct: false }, { id: "c", text: "Un réservoir d'essence plein", correct: false }, { id: "d", text: "Un emploi à 40 heures", correct: false }] },
    { id: 2360, type: "SELECT", question: "Qu'est-ce qu'une 'action' en bourse ?", options: [{ id: "a", text: "Un geste héroïque", correct: false }, { id: "b", text: "Une part du capital d'une entreprise", correct: true }, { id: "c", text: "Une dette envers la banque", correct: false }, { id: "d", text: "Un type de contrat de travail", correct: false }] }
];
const unit389Quiz3: Question[] = [
    { id: 2361, type: "SELECT", question: "Si j'achète un produit à l'étranger pour le vendre ici, c'est une...", options: [{ id: "a", text: "Exportation", correct: false }, { id: "b", text: "Importation", correct: true }, { id: "c", text: "Subvention", correct: false }, { id: "d", text: "Donation", correct: false }] },
    { id: 2362, type: "SELECT", question: "Si une entreprise vend ses produits aux USA, c'est une...", options: [{ id: "a", text: "Importation", correct: false }, { id: "b", text: "Exportation", correct: true }, { id: "c", text: "Perte", correct: false }, { id: "d", text: "Taxation", correct: false }] },
    { id: 2363, type: "SELECT", question: "Que signifie 'être à découvert' à la banque ?", options: [{ id: "a", text: "Avoir beaucoup d'argent", correct: false }, { id: "b", text: "Avoir un compte négatif", correct: true }, { id: "c", text: "Avoir perdu ses clefs", correct: false }, { id: "d", text: "Avoir un nouveau compte", correct: false }] },
    { id: 2364, type: "SELECT", question: "Qu'est-ce qu'un 'virement' ?", options: [{ id: "a", text: "Un licenciement", correct: false }, { id: "b", text: "Un transfert d'argent d'un compte à un autre", correct: true }, { id: "c", text: "Une augmentation de salaire", correct: false }, { id: "d", text: "Une taxe sur les vêtements", correct: false }] },
    { id: 2365, type: "SELECT", question: "Que signifie 'rentable' ?", options: [{ id: "a", text: "Qui coûte cher", correct: false }, { id: "b", text: "Qui produit un bénéfice", correct: true }, { id: "c", text: "Qui est inutile", correct: false }, { id: "d", text: "Qui est gratuit", correct: false }] },
    { id: 2366, type: "SELECT", question: "Qu'est-ce que 'la TVA' ?", options: [{ id: "a", text: "Une Taxe sur la Valeur Ajoutée", correct: true }, { id: "b", text: "Un type de voiture", correct: false }, { id: "c", text: "Une aide pour les vacances", correct: false }, { id: "d", text: "Un syndicat d'artistes", correct: false }] },
    { id: 2367, type: "SELECT", question: "Que signifie 'négocier' un prix ?", options: [{ id: "a", text: "Payer sans discuter", correct: false }, { id: "b", text: "Discuter pour obtenir un meilleur prix", correct: true }, { id: "c", text: "Demander un reçu", correct: false }, { id: "d", text: "Payer par carte", correct: false }] },
    { id: 2368, type: "SELECT", question: "Qu'est-ce qu'un 'crédit' ?", options: [{ id: "a", text: "Une dette que l'on rembourse", correct: true }, { id: "b", text: "Un cadeau de la banque", correct: false }, { id: "c", text: "Une amende policière", correct: false }, { id: "d", text: "Un type d'épargne", correct: false }] },
    { id: 2369, type: "SELECT", question: "Que signifie 'solvable' ?", options: [{ id: "a", text: "Qui peut payer ses dettes", correct: true }, { id: "b", text: "Qui est en prison", correct: false }, { id: "c", text: "Qui n'a pas de compte", correct: false }, { id: "d", text: "Qui travaille au soleil", correct: false }] },
    { id: 2370, type: "SELECT", question: "Qu'est-ce qu'un 'dividende' ?", options: [{ id: "a", text: "Une part du profit versée aux actionnaires", correct: true }, { id: "b", text: "Une taxe sur le pétrole", correct: false }, { id: "c", text: "Un nouveau règlement", correct: false }, { id: "d", text: "Un type de chèque", correct: false }] },
    { id: 2371, type: "SELECT", question: "Que signifie 'le pouvoir d'achat' ?", options: [{ id: "a", text: "La force physique", correct: false }, { id: "b", text: "La capacité financière d'acheter", correct: true }, { id: "c", text: "Le droit de vote", correct: false }, { id: "d", text: "La publicité", correct: false }] },
    { id: 2372, type: "SELECT", question: "Si les prix baissent de façon généralisée, on parle de...", options: [{ id: "a", text: "Déflation", correct: true }, { id: "b", text: "Inflation", correct: false }, { id: "c", text: "Croissance", correct: false }, { id: "d", text: "Expansion", correct: false }] },
    { id: 2373, type: "SELECT", question: "Qu'est-ce qu'une 'pénurie' ?", options: [{ id: "a", text: "Une abondance de produits", correct: false }, { id: "b", text: "Un manque de produits", correct: true }, { id: "c", text: "Une baisse des prix", correct: false }, { id: "d", text: "Une nouvelle monnaie", correct: false }] },
    { id: 2374, type: "SELECT", question: "Que signifie 'le capital' ?", options: [{ id: "a", text: "La ville principale", correct: false }, { id: "b", text: "Les ressources financières d'une entreprise", correct: true }, { id: "c", text: "Une lettre majuscule", correct: false }, { id: "d", text: "Un type de chapeau", correct: false }] },
    { id: 2375, type: "SELECT", question: "Qu'est-ce qu'un 'prélèvement' ?", options: [{ id: "a", text: "Un ajout d'argent", correct: false }, { id: "b", text: "Un retrait automatique d'argent", correct: true }, { id: "c", text: "Une prime de Noël", correct: false }, { id: "d", text: "Un type de contrat", correct: false }] },
    { id: 2376, type: "SELECT", question: "Que signifie 'le marché noir' ?", options: [{ id: "a", text: "Un marché pendant la nuit", correct: false }, { id: "b", text: "Le commerce illégal de marchandises", correct: true }, { id: "c", text: "Un marché de charbon", correct: false }, { id: "d", text: "Un type de bourse", correct: false }] },
    { id: 2377, type: "SELECT", question: "Qu'est-ce qu'un 'courtier' ?", options: [{ id: "a", text: "Un sportif qui court", correct: false }, { id: "b", text: "Un intermédiaire sur les marchés financiers", correct: true }, { id: "c", text: "Un avocat spécialisé", correct: false }, { id: "d", text: "Un juge", correct: false }] },
    { id: 2378, type: "SELECT", question: "Que signifie 'la parité' d'une monnaie ?", options: [{ id: "a", text: "Son poids", correct: false }, { id: "b", text: "Sa valeur par rapport à une autre monnaie", correct: true }, { id: "c", text: "Sa couleur", correct: false }, { id: "d", text: "Sa date de création", correct: false }] },
    { id: 2379, type: "SELECT", question: "Qu'est-ce que 'l'équilibre budgétaire' ?", options: [{ id: "a", text: "Dépenser plus que ce que l'on gagne", correct: false }, { id: "b", text: "Recettes égales aux dépenses", correct: true }, { id: "c", text: "Ne rien dépenser", correct: false }, { id: "d", text: "Ne rien gagner", correct: false }] },
    { id: 2380, type: "SELECT", question: "Que signifie 'subvenir' à ses besoins ?", options: [{ id: "a", text: "Avoir besoin d'aide", correct: false }, { id: "b", text: "Avoir assez d'argent pour vivre", correct: true }, { id: "c", text: "Vouloir devenir riche", correct: false }, { id: "d", text: "Travailler pour quelqu'un", correct: false }] }
];
const unit389Quiz4: Question[] = [
    { id: 2381, type: "SELECT", question: "La mondialisation favorise surtout...", options: [{ id: "a", text: "L'isolement des pays", correct: false }, { id: "b", text: "Les échanges internationaux", correct: true }, { id: "c", text: "La baisse de la technologie", correct: false }, { id: "d", text: "La fin du tourisme", correct: false }] },
    { id: 2382, type: "SELECT", question: "Quel est l'un des buts de la taxe carbone ?", options: [{ id: "a", text: "Augmenter la pollution", correct: false }, { id: "b", text: "Réduire les émissions de CO2", correct: true }, { id: "c", text: "Encourager l'achat de voitures", correct: false }, { id: "d", text: "Rendre le pétrole gratuit", correct: false }] },
    { id: 2383, type: "SELECT", question: "Que signifie 'le secteur public' ?", options: [{ id: "a", text: "Les entreprises privées", correct: false }, { id: "b", text: "Les services et organisations gérés par l'État", correct: true }, { id: "c", text: "Le commerce de rue", correct: false }, { id: "d", text: "Les bars et restaurants", correct: false }] },
    { id: 2384, type: "SELECT", question: "Qu'est-ce qu'une 'loi de finances' ?", options: [{ id: "a", text: "Une loi sur le sport", correct: false }, { id: "b", text: "Le texte qui prévoit le budget de l'État", correct: true }, { id: "c", text: "Une amende pour excès de vitesse", correct: false }, { id: "d", text: "Un contrat de travail", correct: false }] },
    { id: 2385, type: "SELECT", question: "Que signifie 'indexer' les salaires sur l'inflation ?", options: [{ id: "a", text: "Les diminuer", correct: false }, { id: "b", text: "Les faire augmenter en suivant les prix", correct: true }, { id: "c", text: "Les supprimer", correct: false }, { id: "d", text: "Les bloquer pendant dix ans", correct: false }] },
    { id: 2386, type: "SELECT", question: "L'augmentation du prix du pétrole entraîne souvent...", options: [{ id: "a", text: "Une baisse des prix des transports", correct: false }, { id: "b", text: "Une hausse des prix généralisée", correct: true }, { id: "c", text: "La fin de l'économie", correct: false }, { id: "d", text: "La richesse de tout le monde", correct: false }] },
    { id: 2387, type: "SELECT", question: "Que signifie 'l'autosuffisance' ?", options: [{ id: "a", text: "Dépendre des autres", correct: false }, { id: "b", text: "Produire soi-même ce dont on a besoin", correct: true }, { id: "c", text: "Acheter tout à l'étranger", correct: false }, { id: "d", text: "Vendre tout son stock", correct: false }] },
    { id: 2388, type: "SELECT", question: "Qu'est-ce que le 'libre-échange' ?", options: [{ id: "a", text: "Le commerce interdit", correct: false }, { id: "b", text: "La libre circulation des biens sans taxes douanières", correct: true }, { id: "c", text: "Un marché gratuit", correct: false }, { id: "d", text: "Un échange de cadeaux", correct: false }] },
    { id: 2389, type: "SELECT", question: "Que signifie 'le protectionnisme' ?", options: [{ id: "a", text: "Favoriser les importations", correct: false }, { id: "b", text: "Protéger l'économie nationale par des taxes sur l'import", correct: true }, { id: "c", text: "Protéger la nature", correct: false }, { id: "d", text: "Protéger les banques", correct: false }] },
    { id: 2390, type: "SELECT", question: "Quel est l'effet d'une monnaie forte sur les exportations ?", options: [{ id: "a", text: "Elles deviennent plus faciles", correct: false }, { id: "b", text: "Elles deviennent plus chères et donc plus difficiles", correct: true }, { id: "c", text: "Elles s'arrêtent", correct: false }, { id: "d", text: "Elles ne changent pas", correct: false }] },
    { id: 2391, type: "SELECT", question: "Que signifie 'le développement durable' ?", options: [{ id: "a", text: "Une croissance rapide et polluante", correct: false }, { id: "b", text: "Une croissance qui respecte l'environnement et le futur", correct: true }, { id: "c", text: "La fin de la technologie", correct: false }, { id: "d", text: "L'achat de vieux produits", correct: false }] },
    { id: 2392, type: "SELECT", question: "Qu'est-ce qu'un 'paradis fiscal' ?", options: [{ id: "a", text: "Un pays sans soleil", correct: false }, { id: "b", text: "Un pays avec des impôts très bas ou inexistants", correct: true }, { id: "c", text: "Un type de banque en ligne", correct: false }, { id: "d", text: "Une île de vacances gratuite", correct: false }] },
    { id: 2393, type: "SELECT", question: "Que signifie 'le pouvoir législatif' ?", options: [{ id: "a", text: "Celui qui gouverne", correct: false }, { id: "b", text: "Celui qui vote les lois", correct: true }, { id: "c", text: "Celui qui juge", correct: false }, { id: "d", text: "Celui qui collecte les taxes", correct: false }] },
    { id: 2394, type: "SELECT", question: "Une économie fleurissante est une économie qui...", options: [{ id: "a", text: "Est en crise", correct: false }, { id: "b", text: "Se développe bien", correct: true }, { id: "c", text: "Est en train de mourir", correct: false }, { id: "d", text: "Est fermée", correct: false }] },
    { id: 2395, type: "SELECT", question: "Que signifie 'stimuler' l'économie ?", options: [{ id: "a", text: "La ralentir", correct: false }, { id: "b", text: "Prendre des mesures pour encourager la croissance", correct: true }, { id: "c", text: "L'arrêter", correct: false }, { id: "d", text: "La taxer lourdement", correct: false }] },
    { id: 2396, type: "SELECT", question: "Qu'est-ce que 'l'exode rural' ?", options: [{ id: "a", text: "Le départ des citadins vers la campagne", correct: false }, { id: "b", text: "Le départ des campagnards vers la ville", correct: true }, { id: "c", text: "Le départ vers l'étranger", correct: false }, { id: "d", text: "La fin de l'agriculture", correct: false }] },
    { id: 2397, type: "SELECT", question: "Que signifie 'le capitalisme' ?", options: [{ id: "a", text: "Système basé sur la propriété privée et le marché", correct: true }, { id: "b", text: "Système où l'État possède tout", correct: false }, { id: "c", text: "Système sans monnaie", correct: false }, { id: "d", text: "Système de pure plantation", correct: false }] },
    { id: 2398, type: "SELECT", question: "Qu'est-ce qu'une 'prime' ?", options: [{ id: "a", text: "Une amende", correct: false }, { id: "b", text: "Une somme d'argent supplémentaire au salaire", correct: true }, { id: "c", text: "Un type de taxe", correct: false }, { id: "d", text: "Un nouveau prêt", correct: false }] },
    { id: 2399, type: "SELECT", question: "Que signifie 'faire grève' ?", options: [{ id: "a", text: "Travailler plus", correct: false }, { id: "b", text: "Cesser le travail pour revendiquer des droits", correct: true }, { id: "c", text: "Prendre des vacances", correct: false }, { id: "d", text: "Changer de métier", correct: false }] },
    { id: 2400, type: "SELECT", question: "Qu'est-ce que 'la redistribution' ?", options: [{ id: "a", text: "Donner tout son argent aux banques", correct: false }, { id: "b", text: "Répartir une partie des richesses via les aides sociales", correct: true }, { id: "c", text: "Tout vendre au marché", correct: false }, { id: "d", text: "Voter pour une nouvelle loi", correct: false }] }
];

const unit390Quiz1: Question[] = [
    { id: 2401, type: "SELECT", question: "'Le réchauffement climatique' ne demek?", options: [{ id: "a", text: "İklim ısınması", correct: true }, { id: "b", text: "İklim değişikliği", correct: false }, { id: "c", text: "Hava durumu", correct: false }, { id: "d", text: "Doğa koruma", correct: false }] },
    { id: 2402, type: "SELECT", question: "'La biodiversité' ne demek?", options: [{ id: "a", text: "Biyoçeşitlilik", correct: true }, { id: "b", text: "Biyolojik savaş", correct: false }, { id: "c", text: "Doğa hayatı", correct: false }, { id: "d", text: "Çevre kirliliği", correct: false }] },
    { id: 2403, type: "SELECT", question: "'L'énergie renouvelable' ne demek?", options: [{ id: "a", text: "Yenilenebilir enerji", correct: true }, { id: "b", text: "Nükleer enerji", correct: false }, { id: "c", text: "Elektrik enerjisi", correct: false }, { id: "d", text: "Güneş enerjisi", correct: false }] },
    { id: 2404, type: "SELECT", question: "'La pollution' ne demek?", options: [{ id: "a", text: "Kirlilik", correct: true }, { id: "b", text: "Temizlik", correct: false }, { id: "c", text: "Gürültü", correct: false }, { id: "d", text: "Kalabalık", correct: false }] },
    { id: 2405, type: "SELECT", question: "'Le média' ne demek?", options: [{ id: "a", text: "Medya", correct: true }, { id: "b", text: "Gazete", correct: false }, { id: "c", text: "Haber", correct: false }, { id: "d", text: "İletişim", correct: false }] },
    { id: 2406, type: "SELECT", question: "'La publicité' ne demek?", options: [{ id: "a", text: "Reklam", correct: true }, { id: "b", text: "Gazete", correct: false }, { id: "c", text: "Dergi", correct: false }, { id: "d", text: "Televizyon", correct: false }] },
    { id: 2407, type: "SELECT", question: "'Le réseau social' ne demek?", options: [{ id: "a", text: "Sosyal ağ", correct: true }, { id: "b", text: "Sosyal hayat", correct: false }, { id: "c", text: "Sosyal yardım", correct: false }, { id: "d", text: "Sosyal medya", correct: false }] },
    { id: 2408, type: "SELECT", question: "'La presse' ne demek?", options: [{ id: "a", text: "Basın", correct: true }, { id: "b", text: "Baskı", correct: false }, { id: "c", text: "Haber", correct: false }, { id: "d", text: "Dergi", correct: false }] },
    { id: 2409, type: "SELECT", question: "'La justice' ne demek?", options: [{ id: "a", text: "Adalet", correct: true }, { id: "b", text: "Yasa", correct: false }, { id: "c", text: "Mahkeme", correct: false }, { id: "d", text: "Hakim", correct: false }] },
    { id: 2410, type: "SELECT", question: "'La loi' ne demek?", options: [{ id: "a", text: "Yasa/Kanun", correct: true }, { id: "b", text: "Kural", correct: false }, { id: "c", text: "Dava", correct: false }, { id: "d", text: "Polis", correct: false }] },
    { id: 2411, type: "SELECT", question: "'Le procès' ne demek?", options: [{ id: "a", text: "Dava/Duruşma", correct: true }, { id: "b", text: "Süreç", correct: false }, { id: "c", text: "Karar", correct: false }, { id: "d", text: "Tanıklık", correct: false }] },
    { id: 2412, type: "SELECT", question: "'Le témoin' ne demek?", options: [{ id: "a", text: "Tanık", correct: true }, { id: "b", text: "Sanık", correct: false }, { id: "c", text: "Avukat", correct: false }, { id: "d", text: "Hakim", correct: false }] },
    { id: 2413, type: "SELECT", question: "'L'avocat' ne demek?", options: [{ id: "a", text: "Avukat", correct: true }, { id: "b", text: "Hakim", correct: false }, { id: "c", text: "Savcı", correct: false }, { id: "d", text: "Polis", correct: false }] },
    { id: 2414, type: "SELECT", question: "'L'égalité' ne demek?", options: [{ id: "a", text: "Eşitlik", correct: true }, { id: "b", text: "Özgürlük", correct: false }, { id: "c", text: "Adalet", correct: false }, { id: "d", text: "Barış", correct: false }] },
    { id: 2415, type: "SELECT", question: "'La liberté' ne demek?", options: [{ id: "a", text: "Özgürlük", correct: true }, { id: "b", text: "Eşitlik", correct: false }, { id: "c", text: "Kardeşlik", correct: false }, { id: "d", text: "Huzur", correct: false }] },
    { id: 2416, type: "SELECT", question: "'Le citoyen' ne demek?", options: [{ id: "a", text: "Vatandaş", correct: true }, { id: "b", text: "Yabancı", correct: false }, { id: "c", text: "Asker", correct: false }, { id: "d", text: "Politikacı", correct: false }] },
    { id: 2417, type: "SELECT", question: "'La solidarité' ne demek?", options: [{ id: "a", text: "Dayanışma", correct: true }, { id: "b", text: "Yalnızlık", correct: false }, { id: "c", text: "Yardım", correct: false }, { id: "d", text: "Destek", correct: false }] },
    { id: 2418, type: "SELECT", question: "'L'économie' ne demek?", options: [{ id: "a", text: "Ekonomi", correct: true }, { id: "b", text: "Ticaret", correct: false }, { id: "c", text: "Piyasa", correct: false }, { id: "d", text: "Para", correct: false }] },
    { id: 2419, type: "SELECT", question: "'La croissance' ne demek?", options: [{ id: "a", text: "Büyüme", correct: true }, { id: "b", text: "Gelişme", correct: false }, { id: "c", text: "Artış", correct: false }, { id: "d", text: "İlerleme", correct: false }] },
    { id: 2420, type: "SELECT", question: "'L'inflation' ne demek?", options: [{ id: "a", text: "Enflasyon", correct: true }, { id: "b", text: "Zam", correct: false }, { id: "c", text: "Fiyat", correct: false }, { id: "d", text: "Değer", correct: false }] }
];
const unit390Quiz2: Question[] = [
    { id: 2421, type: "SELECT", question: "Hangi cümle Subjonctif yapısındadır?", options: [{ id: "a", text: "Il faut que tu fasses tes devoirs.", correct: true }, { id: "b", text: "Tu fais tes devoirs.", correct: false }, { id: "c", text: "Tu as fait tes devoirs.", correct: false }, { id: "d", text: "Tu feras tes devoirs.", correct: false }] },
    { id: 2422, type: "SELECT", question: "'Je veux que vous ___ (venir).'", options: [{ id: "a", text: "veniez", correct: true }, { id: "b", text: "venez", correct: false }, { id: "c", text: "viennent", correct: false }, { id: "d", text: "viendrez", correct: false }] },
    { id: 2423, type: "SELECT", question: "'Il est possible qu'il ___ (pleuvoir).'", options: [{ id: "a", text: "pleuve", correct: true }, { id: "b", text: "pleut", correct: false }, { id: "c", text: "pleuvra", correct: false }, { id: "d", text: "plu", correct: false }] },
    { id: 2424, type: "SELECT", question: "Hangi cümle pasif (edilgen) yapıdadır?", options: [{ id: "a", text: "La loi est votée par le Parlement.", correct: true }, { id: "b", text: "Le Parlement vote la loi.", correct: false }, { id: "c", text: "Le Parlement a voté la loi.", correct: false }, { id: "d", text: "La loi changera.", correct: false }] },
    { id: 2425, type: "SELECT", question: "'Si j'étais riche, je ___ (voyager) beaucoup.'", options: [{ id: "a", text: "voyagerais", correct: true }, { id: "b", text: "voyage", correct: false }, { id: "c", text: "voyagerai", correct: false }, { id: "d", text: "voyageais", correct: false }] },
    { id: 2426, type: "SELECT", question: "'Bien que' bağlacından sonra ne gelir?", options: [{ id: "a", text: "Subjonctif", correct: true }, { id: "b", text: "Indicatif", correct: false }, { id: "c", text: "Conditionnel", correct: false }, { id: "d", text: "Infinitif", correct: false }] },
    { id: 2427, type: "SELECT", question: "'Quoique' ne demek?", options: [{ id: "a", text: "Her ne kadar", correct: true }, { id: "b", text: "Çünkü", correct: false }, { id: "c", text: "Bu yüzden", correct: false }, { id: "d", text: "Böylece", correct: false }] },
    { id: 2428, type: "SELECT", question: "'Afin que' bağlacından sonra ne gelir?", options: [{ id: "a", text: "Subjonctif", correct: true }, { id: "b", text: "Indicatif", correct: false }, { id: "c", text: "Conditionnel", correct: false }, { id: "d", text: "Participe Présent", correct: false }] },
    { id: 2429, type: "SELECT", question: "Hangi kelime bir amaç bildirir?", options: [{ id: "a", text: "Pour que", correct: true }, { id: "b", text: "Parce que", correct: false }, { id: "c", text: "Car", correct: false }, { id: "d", text: "Alors", correct: false }] },
    { id: 2430, type: "SELECT", question: "Hangi kelime bir karşıtlık bildirir?", options: [{ id: "a", text: "Malgré", correct: true }, { id: "b", text: "Parce que", correct: false }, { id: "c", text: "Donc", correct: false }, { id: "d", text: "Puisque", correct: false }] },
    { id: 2431, type: "SELECT", question: "'Je doute qu'elle ___ (réussir).'", options: [{ id: "a", text: "réussisse", correct: true }, { id: "b", text: "réussit", correct: false }, { id: "c", text: "réussira", correct: false }, { id: "d", text: "réussi", correct: false }] },
    { id: 2432, type: "SELECT", question: "'Il semble que vous ___ (avoir) raison.'", options: [{ id: "a", text: "ayez", correct: true }, { id: "b", text: "avez", correct: false }, { id: "c", text: "auriez", correct: false }, { id: "d", text: "aviez", correct: false }] },
    { id: 2433, type: "SELECT", question: "'Avant que' bağlacından sonra hangisi gelir?", options: [{ id: "a", text: "tu partas", correct: false }, { id: "b", text: "tu partes", correct: true }, { id: "c", text: "tu pars", correct: false }, { id: "d", text: "tu partira", correct: false }] },
    { id: 2434, type: "SELECT", question: "Hangi yapı bir varsayım bildirir?", options: [{ id: "a", text: "Conditionnel", correct: true }, { id: "b", text: "Futur Proche", correct: false }, { id: "c", text: "Passé Composé", correct: false }, { id: "d", text: "Présent", correct: false }] },
    { id: 2435, type: "SELECT", question: "'Si tu ___ (travailler), tu réussirais.'", options: [{ id: "a", text: "travaillais", correct: true }, { id: "b", text: "travailles", correct: false }, { id: "c", text: "travailleras", correct: false }, { id: "d", text: "travaillé", correct: false }] },
    { id: 2436, type: "SELECT", question: "'Il est important que nous ___ (être) là.'", options: [{ id: "a", text: "soyons", correct: true }, { id: "b", text: "sommes", correct: false }, { id: "c", text: "serons", correct: false }, { id: "d", text: "serions", correct: false }] },
    { id: 2437, type: "SELECT", question: "'Je ne pense pas qu'il ___ (savoir).'", options: [{ id: "a", text: "sache", correct: true }, { id: "b", text: "sait", correct: false }, { id: "c", text: "saura", correct: false }, { id: "d", text: "su", correct: false }] },
    { id: 2438, type: "SELECT", question: "'Dès que' bağlacından sonra genellikle ne gelir?", options: [{ id: "a", text: "Indicatif (Futur/Présent)", correct: true }, { id: "b", text: "Subjonctif", correct: false }, { id: "c", text: "Conditionnel", correct: false }, { id: "d", text: "Infinitif", correct: false }] },
    { id: 2439, type: "SELECT", question: "Hangi kelime bir sonuç bildirir?", options: [{ id: "a", text: "Par conséquent", correct: true }, { id: "b", text: "Puisque", correct: false }, { id: "c", text: "Bien que", correct: false }, { id: "d", text: "Si", correct: false }] },
    { id: 2440, type: "SELECT", question: "'En attendant que' ne demek?", options: [{ id: "a", text: "... olana kadar", correct: true }, { id: "b", text: "Çünkü", correct: false }, { id: "c", text: "Eğer", correct: false }, { id: "d", text: "Böylece", correct: false }] }
];
const unit390Quiz3: Question[] = [
    { id: 2441, type: "SELECT", question: "La protection de ___ est l'affaire de tous.", options: [{ id: "a", text: "la nature", correct: true }, { id: "b", text: "la voiture", correct: false }, { id: "c", text: "la télé", correct: false }, { id: "d", text: "la banque", correct: false }] },
    { id: 2442, type: "SELECT", question: "Une source d'information n'est pas toujours ___.", options: [{ id: "a", text: "fiable", correct: true }, { id: "b", text: "grande", correct: false }, { id: "c", text: "belle", correct: false }, { id: "d", text: "rapide", correct: false }] },
    { id: 2443, type: "SELECT", question: "La liberté d'___ est un droit fondamental.", options: [{ id: "a", text: "expression", correct: true }, { id: "b", text: "impression", correct: false }, { id: "c", text: "vitesse", correct: false }, { id: "d", text: "danse", correct: false }] },
    { id: 2444, type: "SELECT", question: "Les fake news sont des ___ nouvelles.", options: [{ id: "a", text: "fausses", correct: true }, { id: "b", text: "bonnes", correct: false }, { id: "c", text: "vieilles", correct: false }, { id: "d", text: "longues", correct: false }] },
    { id: 2445, type: "SELECT", question: "La solidarité est nécessaire en cas de ___.", options: [{ id: "a", text: "crise", correct: true }, { id: "b", text: "fête", correct: false }, { id: "c", text: "vacances", correct: false }, { id: "d", text: "succès", correct: false }] },
    { id: 2446, type: "SELECT", question: "Réduire son empreinte ___ aide la planète.", options: [{ id: "a", text: "carbone", correct: true }, { id: "b", text: "de chaussure", correct: false }, { id: "c", text: "digitale", correct: false }, { id: "d", text: "bleue", correct: false }] },
    { id: 2447, type: "SELECT", question: "La justice doit être ___ pour tous.", options: [{ id: "a", text: "la même", correct: true }, { id: "b", text: "différente", correct: false }, { id: "c", text: "chère", correct: false }, { id: "d", text: "lente", correct: false }] },
    { id: 2448, type: "SELECT", question: "Le chômage touche particulièrement les ___.", options: [{ id: "a", text: "jeunes", correct: true }, { id: "b", text: "arbres", correct: false }, { id: "c", text: "chats", correct: false }, { id: "d", text: "montagnes", correct: false }] },
    { id: 2449, type: "SELECT", question: "Nous devons ___ nos déchets.", options: [{ id: "a", text: "trier", correct: true }, { id: "b", text: "manger", correct: false }, { id: "c", text: "cacher", correct: false }, { id: "d", text: "perdre", correct: false }] },
    { id: 2450, type: "SELECT", question: "L'égalité des ___ est un objectif social.", options: [{ id: "a", text: "chances", correct: true }, { id: "b", text: "nuages", correct: false }, { id: "c", text: "kilomètres", correct: false }, { id: "d", text: "prix", correct: false }] },
    { id: 2451, type: "SELECT", question: "La presse influence l'opinion ___.", options: [{ id: "a", text: "publique", correct: true }, { id: "b", text: "privée", correct: false }, { id: "c", text: "secrète", correct: false }, { id: "d", text: "cachée", correct: false }] },
    { id: 2452, type: "SELECT", question: "Le citoyen dispose du droit de ___.", options: [{ id: "a", text: "vote", correct: true }, { id: "b", text: "voler", correct: false }, { id: "c", text: "dormir", correct: false }, { id: "d", text: "manger", correct: false }] },
    { id: 2453, type: "SELECT", question: "La biodiversité est la ___ des espèces.", options: [{ id: "a", text: "diversité", correct: true }, { id: "b", text: "rareté", correct: false }, { id: "c", text: "fin", correct: false }, { id: "d", text: "mort", correct: false }] },
    { id: 2454, type: "SELECT", question: "L'énergie ___ ne pollue pas.", options: [{ id: "a", text: "propre", correct: true }, { id: "b", text: "sale", correct: false }, { id: "c", text: "noire", correct: false }, { id: "d", text: "vieille", correct: false }] },
    { id: 2455, type: "SELECT", question: "Le témoin doit dire la ___ au tribunal.", options: [{ id: "a", text: "vérité", correct: true }, { id: "b", text: "blague", correct: false }, { id: "c", text: "chanson", correct: false }, { id: "d", text: "histoire", correct: false }] },
    { id: 2456, type: "SELECT", question: "L'inflation augmente le coût de la ___.", options: [{ id: "a", text: "vie", correct: true }, { id: "b", text: "mort", correct: false }, { id: "c", text: "mer", correct: false }, { id: "d", text: "terre", correct: false }] },
    { id: 2457, type: "SELECT", question: "Les syndicats défendent les ___.", options: [{ id: "a", text: "travailleurs", correct: true }, { id: "b", text: "patrons", correct: false }, { id: "c", text: "banques", correct: false }, { id: "d", text: "États", correct: false }] },
    { id: 2458, type: "SELECT", question: "La croissance verte respecte l'___.", options: [{ id: "a", text: "environnement", correct: true }, { id: "b", text: "argent", correct: false }, { id: "c", text: "vitesse", correct: false }, { id: "d", text: "passé", correct: false }] },
    { id: 2459, type: "SELECT", question: "Le budget est un plan de ___.", options: [{ id: "a", text: "dépenses", correct: true }, { id: "b", text: "vacances", correct: false }, { id: "c", text: "rêves", correct: false }, { id: "d", text: "chasse", correct: false }] },
    { id: 2460, type: "SELECT", question: "Il faut lutter contre la ___ rasciale.", options: [{ id: "a", text: "discrimination", correct: true }, { id: "b", text: "collaboration", correct: false }, { id: "c", text: "protection", correct: false }, { id: "d", text: "satisfaction", correct: false }] }
];
const unit390Quiz4: Question[] = [
    { id: 2461, type: "SELECT", question: "Exprimer son opinion: 'À mon ___...'", options: [{ id: "a", text: "avis", correct: true }, { id: "b", text: "yeux", correct: false }, { id: "c", text: "oreilles", correct: false }, { id: "d", text: "main", correct: false }] },
    { id: 2462, type: "SELECT", question: "Exprimer son opinion: 'Je ___ que...'", options: [{ id: "a", text: "pense", correct: true }, { id: "b", text: "mange", correct: false }, { id: "c", text: "regarde", correct: false }, { id: "d", text: "écoute", correct: false }] },
    { id: 2463, type: "SELECT", question: "Exprimer une certitude: 'Je suis ___ que...'", options: [{ id: "a", text: "sûr", correct: true }, { id: "b", text: "grand", correct: false }, { id: "c", text: "petit", correct: false }, { id: "d", text: "loin", correct: false }] },
    { id: 2464, type: "SELECT", question: "Exprimer un doute: 'Je ___ que...'", options: [{ id: "a", text: "doute", correct: true }, { id: "b", text: "vois", correct: false }, { id: "c", text: "marche", correct: false }, { id: "d", text: "bois", correct: false }] },
    { id: 2465, type: "SELECT", question: "Exprimer une condition: 'Si tu ___ demain...'", options: [{ id: "a", text: "viens", correct: true }, { id: "b", text: "viendras", correct: false }, { id: "c", text: "venais", correct: false }, { id: "d", text: "venez", correct: false }] },
    { id: 2466, type: "SELECT", question: "Exprimer un souhait: 'Je ___ que tout aille bien.'", options: [{ id: "a", text: "souhaite", correct: true }, { id: "b", text: "regarde", correct: false }, { id: "c", text: "termine", correct: false }, { id: "d", text: "cherche", correct: false }] },
    { id: 2467, type: "SELECT", question: "Exprimer une obligation: 'Il ___ travailler.'", options: [{ id: "a", text: "faut", correct: true }, { id: "b", text: "veut", correct: false }, { id: "c", text: "peut", correct: false }, { id: "d", text: "sait", correct: false }] },
    { id: 2468, type: "SELECT", question: "Exprimer une possibilité: 'Il se ___ qu'il vienne.'", options: [{ id: "a", text: "peut", correct: true }, { id: "b", text: "doit", correct: false }, { id: "c", text: "sait", correct: false }, { id: "d", text: "veut", correct: false }] },
    { id: 2469, type: "SELECT", question: "Exprimer son accord: 'Je suis ___.'", options: [{ id: "a", text: "d'accord", correct: true }, { id: "b", text: "de corps", correct: false }, { id: "c", text: "de bord", correct: false }, { id: "d", text: "de port", correct: false }] },
    { id: 2470, type: "SELECT", question: "Exprimer son désaccord: 'Je ne suis pas de ton ___.'", options: [{ id: "a", text: "avis", correct: true }, { id: "b", text: "habit", correct: false }, { id: "c", text: "abri", correct: false }, { id: "d", text: "ami", correct: false }] },
    { id: 2471, type: "SELECT", question: "Évaluer: 'C'est un progrès ___.'", options: [{ id: "a", text: "majeur", correct: true }, { id: "b", text: "vieux", correct: false }, { id: "c", text: "bleu", correct: false }, { id: "d", text: "dur", correct: false }] },
    { id: 2472, type: "SELECT", question: "Décrire un changement: 'La situation ___.'", options: [{ id: "a", text: "évolue", correct: true }, { id: "b", text: "dort", correct: false }, { id: "c", text: "mange", correct: false }, { id: "d", text: "chante", correct: false }] },
    { id: 2473, type: "SELECT", question: "Résumer: 'En ___...'", options: [{ id: "a", text: "résumé", correct: true }, { id: "b", text: "sommeil", correct: false }, { id: "c", text: "classe", correct: false }, { id: "d", text: "ville", correct: false }] },
    { id: 2474, type: "SELECT", question: "Conclure: 'Pour ___...'", options: [{ id: "a", text: "conclure", correct: true }, { id: "b", text: "manger", correct: false }, { id: "c", text: "boire", correct: false }, { id: "d", text: "partir", correct: false }] },
    { id: 2475, type: "SELECT", question: "Introduction: 'Tout d'___...'", options: [{ id: "a", text: "abord", correct: true }, { id: "b", text: "accord", correct: false }, { id: "c", text: "effort", correct: false }, { id: "d", text: "confort", correct: false }] },
    { id: 2476, type: "SELECT", question: "Ajout: 'De ___...'", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "moins", correct: false }, { id: "c", text: "mieux", correct: false }, { id: "d", text: "pire", correct: false }] },
    { id: 2477, type: "SELECT", question: "Transition: 'D'un autre ___...'", options: [{ id: "a", text: "côté", correct: true }, { id: "b", text: "mur", correct: false }, { id: "c", text: "dos", correct: false }, { id: "d", text: "lit", correct: false }] },
    { id: 2478, type: "SELECT", question: "Exemple: 'Par ___...'", options: [{ id: "a", text: "exemple", correct: true }, { id: "b", text: "hasard", correct: false }, { id: "c", text: "cœur", correct: false }, { id: "d", text: "ordre", correct: false }] },
    { id: 2479, type: "SELECT", question: "Cause: 'À ___ de...'", options: [{ id: "a", text: "cause", correct: true }, { id: "b", text: "chose", correct: false }, { id: "c", text: "pose", correct: false }, { id: "d", text: "dose", correct: false }] },
    { id: 2480, type: "SELECT", question: "Conséquence: 'C'est pour ___ que...'", options: [{ id: "a", text: "cela", correct: true }, { id: "b", text: "celui", correct: false }, { id: "c", text: "ceux", correct: false }, { id: "d", text: "celles", correct: false }] }
];

function shuffle<T>(array: T[], seed: number): T[] {
    let currentIndex = array.length, temporaryValue, randomIndex;
    let currentSeed = seed;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(seededRandom(currentSeed++) * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

export function getFrenchB1Quiz(unitId: number, quizIndex: number): Question[] {
    // Return hardcoded, perfectly tailored quizzes for UNIT 361
    if (unitId === 361) {
        if (quizIndex === 1) return unit361Quiz1;
        if (quizIndex === 2) return unit361Quiz2;
        if (quizIndex === 3) return unit361Quiz3;
        if (quizIndex === 4) return unit361Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 362
    if (unitId === 362) {
        if (quizIndex === 1) return unit362Quiz1;
        if (quizIndex === 2) return unit362Quiz2;
        if (quizIndex === 3) return unit362Quiz3;
        if (quizIndex === 4) return unit362Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 363
    if (unitId === 363) {
        if (quizIndex === 1) return unit363Quiz1;
        if (quizIndex === 2) return unit363Quiz2;
        if (quizIndex === 3) return unit363Quiz3;
        if (quizIndex === 4) return unit363Quiz4;
    }

    // Return hardcoded, perfectly tailored quizzes for UNIT 364
    if (unitId === 364) {
        if (quizIndex === 1) return unit364Quiz1;
        if (quizIndex === 2) return unit364Quiz2;
        if (quizIndex === 3) return unit364Quiz3;
        if (quizIndex === 4) return unit364Quiz4;
    }

    // Return hardcoded, perfectly tailored quizzes for UNIT 365
    if (unitId === 365) {
        if (quizIndex === 1) return unit365Quiz1;
        if (quizIndex === 2) return unit365Quiz2;
        if (quizIndex === 3) return unit365Quiz3;
        if (quizIndex === 4) return unit365Quiz4;
    }

    // Return hardcoded, perfectly tailored quizzes for UNIT 366
    if (unitId === 366) {
        if (quizIndex === 1) return unit366Quiz1;
        if (quizIndex === 2) return unit366Quiz2;
        if (quizIndex === 3) return unit366Quiz3;
        if (quizIndex === 4) return unit366Quiz4;
    }

    // Return hardcoded, perfectly tailored quizzes for UNIT 367
    if (unitId === 367) {
        if (quizIndex === 1) return unit367Quiz1;
        if (quizIndex === 2) return unit367Quiz2;
        if (quizIndex === 3) return unit367Quiz3;
        if (quizIndex === 4) return unit367Quiz4;
    }

    // Return hardcoded, perfectly tailored quizzes for UNIT 368
    if (unitId === 368) {
        if (quizIndex === 1) return unit368Quiz1;
        if (quizIndex === 2) return unit368Quiz2;
        if (quizIndex === 3) return unit368Quiz3;
        if (quizIndex === 4) return unit368Quiz4;
    }

    // Return hardcoded, perfectly tailored quizzes for UNIT 369
    if (unitId === 369) {
        if (quizIndex === 1) return unit369Quiz1;
        if (quizIndex === 2) return unit369Quiz2;
        if (quizIndex === 3) return unit369Quiz3;
        if (quizIndex === 4) return unit369Quiz4;
    }

    // Return hardcoded, perfectly tailored quizzes for UNIT 370
    if (unitId === 370) {
        if (quizIndex === 1) return unit370Quiz1;
        if (quizIndex === 2) return unit370Quiz2;
        if (quizIndex === 3) return unit370Quiz3;
        if (quizIndex === 4) return unit370Quiz4;
    }

    // Return hardcoded, perfectly tailored quizzes for UNIT 371
    if (unitId === 371) {
        if (quizIndex === 1) return unit371Quiz1;
        if (quizIndex === 2) return unit371Quiz2;
        if (quizIndex === 3) return unit371Quiz3;
        if (quizIndex === 4) return unit371Quiz4;
    }

    // Return hardcoded, perfectly tailored quizzes for UNIT 372
    if (unitId === 372) {
        if (quizIndex === 1) return unit372Quiz1;
        if (quizIndex === 2) return unit372Quiz2;
        if (quizIndex === 3) return unit372Quiz3;
        if (quizIndex === 4) return unit372Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 373
    if (unitId === 373) {
        if (quizIndex === 1) return unit373Quiz1;
        if (quizIndex === 2) return unit373Quiz2;
        if (quizIndex === 3) return unit373Quiz3;
        if (quizIndex === 4) return unit373Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 374
    if (unitId === 374) {
        if (quizIndex === 1) return unit374Quiz1;
        if (quizIndex === 2) return unit374Quiz2;
        if (quizIndex === 3) return unit374Quiz3;
        if (quizIndex === 4) return unit374Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 375
    if (unitId === 375) {
        if (quizIndex === 1) return unit375Quiz1;
        if (quizIndex === 2) return unit375Quiz2;
        if (quizIndex === 3) return unit375Quiz3;
        if (quizIndex === 4) return unit375Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 376
    if (unitId === 376) {
        if (quizIndex === 1) return unit376Quiz1;
        if (quizIndex === 2) return unit376Quiz2;
        if (quizIndex === 3) return unit376Quiz3;
        if (quizIndex === 4) return unit376Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 377
    if (unitId === 377) {
        if (quizIndex === 1) return unit377Quiz1;
        if (quizIndex === 2) return unit377Quiz2;
        if (quizIndex === 3) return unit377Quiz3;
        if (quizIndex === 4) return unit377Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 378
    if (unitId === 378) {
        if (quizIndex === 1) return unit378Quiz1;
        if (quizIndex === 2) return unit378Quiz2;
        if (quizIndex === 3) return unit378Quiz3;
        if (quizIndex === 4) return unit378Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 379
    if (unitId === 379) {
        if (quizIndex === 1) return unit379Quiz1;
        if (quizIndex === 2) return unit379Quiz2;
        if (quizIndex === 3) return unit379Quiz3;
        if (quizIndex === 4) return unit379Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 380
    if (unitId === 380) {
        if (quizIndex === 1) return unit380Quiz1;
        if (quizIndex === 2) return unit380Quiz2;
        if (quizIndex === 3) return unit380Quiz3;
        if (quizIndex === 4) return unit380Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 381
    if (unitId === 381) {
        if (quizIndex === 1) return unit381Quiz1;
        if (quizIndex === 2) return unit381Quiz2;
        if (quizIndex === 3) return unit381Quiz3;
        if (quizIndex === 4) return unit381Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 382
    if (unitId === 382) {
        if (quizIndex === 1) return unit382Quiz1;
        if (quizIndex === 2) return unit382Quiz2;
        if (quizIndex === 3) return unit382Quiz3;
        if (quizIndex === 4) return unit382Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 383
    if (unitId === 383) {
        if (quizIndex === 1) return unit383Quiz1;
        if (quizIndex === 2) return unit383Quiz2;
        if (quizIndex === 3) return unit383Quiz3;
        if (quizIndex === 4) return unit383Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 384
    if (unitId === 384) {
        if (quizIndex === 1) return unit384Quiz1;
        if (quizIndex === 2) return unit384Quiz2;
        if (quizIndex === 3) return unit384Quiz3;
        if (quizIndex === 4) return unit384Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 385
    if (unitId === 385) {
        if (quizIndex === 1) return unit385Quiz1;
        if (quizIndex === 2) return unit385Quiz2;
        if (quizIndex === 3) return unit385Quiz3;
        if (quizIndex === 4) return unit385Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 386
    if (unitId === 386) {
        if (quizIndex === 1) return unit386Quiz1;
        if (quizIndex === 2) return unit386Quiz2;
        if (quizIndex === 3) return unit386Quiz3;
        if (quizIndex === 4) return unit386Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 387
    if (unitId === 387) {
        if (quizIndex === 1) return unit387Quiz1;
        if (quizIndex === 2) return unit387Quiz2;
        if (quizIndex === 3) return unit387Quiz3;
        if (quizIndex === 4) return unit387Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 388
    if (unitId === 388) {
        if (quizIndex === 1) return unit388Quiz1;
        if (quizIndex === 2) return unit388Quiz2;
        if (quizIndex === 3) return unit388Quiz3;
        if (quizIndex === 4) return unit388Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 389
    if (unitId === 389) {
        if (quizIndex === 1) return unit389Quiz1;
        if (quizIndex === 2) return unit389Quiz2;
        if (quizIndex === 3) return unit389Quiz3;
        if (quizIndex === 4) return unit389Quiz4;
    }
    // Return hardcoded, perfectly tailored quizzes for UNIT 390
    if (unitId === 390) {
        if (quizIndex === 1) return unit390Quiz1;
        if (quizIndex === 2) return unit390Quiz2;
        if (quizIndex === 3) return unit390Quiz3;
        if (quizIndex === 4) return unit390Quiz4;
    }



    // Dynamic Generator for rest of the units
    const vocab = getFrB1VocabularyForUnit(unitId);
    const phrases = getFrB1PhrasesForUnit(unitId);
    const speaking = getFrB1SpeakingForUnit(unitId);
    const reading = getFrB1ReadingForUnit(unitId);

    const questions: Question[] = [];
    let qId = 1;
    const baseSeed = unitId * 100 + quizIndex;

    const generateOptions = (correctText: string, wrongSources: string[], seed: number): QuestionOption[] => {
        const wrongs = shuffle([...wrongSources].filter(w => w !== correctText), seed).slice(0, 3);
        const options = [
            { id: "correct", text: correctText, correct: true },
            { id: "w1", text: wrongs[0] || "Mauvais 1", correct: false },
            { id: "w2", text: wrongs[1] || "Mauvais 2", correct: false },
            { id: "w3", text: wrongs[2] || "Mauvais 3", correct: false }
        ];
        return shuffle(options, seed + 1).map((opt, i) => ({ ...opt, id: String.fromCharCode(97 + i) }));
    };

    const allVocabMeanings = vocab.map(v => v.meaning);
    const allVocabWords = vocab.map(v => v.word);
    const allPhraseMeanings = phrases.map(p => p.meaning);
    const allPhraseTexts = phrases.map(p => p.text);

    if (quizIndex === 1) {
        // Quiz 1: Vocab Select (10), Vocab Listening (5), Phrase Select (5)
        for (let i = 0; i < 10; i++) {
            const v = vocab[i % vocab.length];
            questions.push({
                id: qId++,
                type: "SELECT",
                question: `'${v.word}' ne demek?`,
                options: generateOptions(v.meaning, allVocabMeanings, baseSeed + qId),
            });
        }
        for (let i = 10; i < 15; i++) {
            const v = vocab[i % vocab.length];
            questions.push({
                id: qId++,
                type: "LISTENING",
                question: "Duyduğunu seç:",
                audioText: v.word,
                options: generateOptions(v.meaning, allVocabMeanings, baseSeed + qId),
            });
        }
        for (let i = 0; i < 5; i++) {
            const p = phrases[i % phrases.length];
            questions.push({
                id: qId++,
                type: "SELECT",
                question: `'${p.text}' ne demek?`,
                options: generateOptions(p.meaning, allPhraseMeanings, baseSeed + qId),
            });
        }
    } else if (quizIndex === 2) {
        // Quiz 2: Phrase Trans (5), Vocab Trans (5), Speaking Listen (5), Vocab Select (5)
        for (let i = 5; i < 10; i++) {
            const p = phrases[i % phrases.length];
            questions.push({
                id: qId++,
                type: "TRANSLATE",
                question: "Çevir:",
                hint: p.meaning,
                correctAnswer: p.text
            });
        }
        for (let i = 15; i < 20; i++) {
            const v = vocab[i % vocab.length];
            questions.push({
                id: qId++,
                type: "TRANSLATE",
                question: "Fransızcasını yaz:",
                hint: v.meaning,
                correctAnswer: v.word
            });
        }
        for (let i = 0; i < 5; i++) {
            const s = speaking[i % speaking.length];
            questions.push({
                id: qId++,
                type: "LISTENING",
                question: "Duyduğunu seç:",
                audioText: s.text,
                options: generateOptions(s.translation, speaking.map(sp => sp.translation), baseSeed + qId),
            });
        }
        for (let i = 20; i < 25; i++) {
            const v = vocab[i % vocab.length];
            questions.push({
                id: qId++,
                type: "SELECT",
                question: `'${v.word}' ne demek?`,
                options: generateOptions(v.meaning, allVocabMeanings, baseSeed + qId),
            });
        }
    } else if (quizIndex === 3) {
        // Quiz 3: Reading Questions (10), Phrase Listen (5), Speaking Trans (5)
        if (reading && reading.questions && reading.questions.length >= 10) {
            for (let i = 0; i < 10; i++) {
                const rq = reading.questions[i];
                questions.push({
                    id: qId++,
                    type: "SELECT",
                    question: rq.question,
                    options: generateOptions(rq.correctAnswer, rq.options, baseSeed + qId),
                });
            }
        } else {
            // Fallback if less than 10 reading questions
            for (let i = 0; i < 10; i++) {
                const v = vocab[(i + 10) % vocab.length];
                questions.push({
                    id: qId++,
                    type: "SELECT",
                    question: `'${v.word}' ne demek?`,
                    options: generateOptions(v.meaning, allVocabMeanings, baseSeed + qId),
                });
            }
        }
        for (let i = 5; i < 10; i++) {
            const p = phrases[i % phrases.length];
            questions.push({
                id: qId++,
                type: "LISTENING",
                question: "Duyduğunu seç:",
                audioText: p.text,
                options: generateOptions(p.meaning, allPhraseMeanings, baseSeed + qId),
            });
        }
        for (let i = 5; i < 10; i++) {
            const s = speaking[i % speaking.length];
            questions.push({
                id: qId++,
                type: "TRANSLATE",
                question: "Çevir:",
                hint: s.translation,
                correctAnswer: s.text
            });
        }
    } else {
        // Quiz 4: Fill Blank with Vocab Examples (10), Mixed Translate (10)
        let fillBlanksAdded = 0;
        for (let v of vocab) {
            if (v.example && fillBlanksAdded < 10) {
                // Replace word in example with ___ carefully
                const wordLower = v.word.toLowerCase();
                const exampleLower = v.example.toLowerCase();
                if (exampleLower.includes(wordLower)) {
                    const idx = exampleLower.indexOf(wordLower);
                    const originalWordCase = v.example.substring(idx, idx + v.word.length);
                    const blanked = v.example.replace(originalWordCase, "___");
                    questions.push({
                        id: qId++,
                        type: "FILL_BLANK",
                        question: "Doldur:",
                        sentence: blanked,
                        options: generateOptions(v.word, allVocabWords, baseSeed + qId),
                    });
                    fillBlanksAdded++;
                }
            }
        }
        
        while(fillBlanksAdded < 10) {
            const p = phrases[fillBlanksAdded % phrases.length];
            questions.push({
                id: qId++,
                type: "SELECT",
                question: `'${p.meaning}' nasıl söylenir?`,
                options: generateOptions(p.text, allPhraseTexts, baseSeed + qId),
            });
            fillBlanksAdded++;
        }

        for (let i = 10; i < 15; i++) {
            const p = phrases[i % phrases.length];
            questions.push({
                id: qId++,
                type: "TRANSLATE",
                question: "Çevir:",
                hint: p.meaning,
                correctAnswer: p.text
            });
        }
        for (let i = 25; i < 30; i++) {
            const v = vocab[i % vocab.length];
            questions.push({
                id: qId++,
                type: "TRANSLATE",
                question: "Fransızcasını yaz:",
                hint: v.meaning,
                correctAnswer: v.word
            });
        }
    }

    // Ensure we always return exactly 20 questions
    return questions.slice(0, 20);
}
