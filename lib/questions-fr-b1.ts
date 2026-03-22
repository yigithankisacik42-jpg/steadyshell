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


 // Seeded random number generator for reliable questions per unit
function seededRandom(seed: number) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

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
