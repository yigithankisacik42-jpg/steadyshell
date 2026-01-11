/**
 * LinguaFlow Okuma Veritabanı - İspanyolca A2
 * Ünite 21-40 için okuma içerikleri
 */

import { UnitReading } from './readings';

// ===== ÜNİTE 21: GEÇMİŞ ZAMAN 1 =====
const unit21Reading: UnitReading = {
    unitId: 21, title: "Dünkü Gün", language: "İspanyolca", level: "A2",
    story: {
        text: "Ayer fue un día muy especial para mí. Me desperté temprano a las seis y media porque tenía muchas cosas que hacer. Primero desayuné con mi familia en la cocina. Mi madre preparó tostadas con mermelada y café con leche. Después fui al trabajo en autobús porque mi coche estaba en el taller desde la semana pasada. El viaje duró treinta minutos y llegué a las ocho en punto. Trabajé mucho durante todo el día y tuve tres reuniones importantes. A las dos almorcé con mis compañeros en un restaurante italiano cerca de la oficina. Pedimos pasta y ensalada. Por la tarde tuve una reunión muy importante con mi jefe sobre un nuevo proyecto. Salí del trabajo a las seis y fui directamente al gimnasio. Hice ejercicio durante una hora: corrí en la cinta y levanté pesas. Cuando llegué a casa a las ocho, mi esposa ya había preparado la cena: pollo con verduras. Cenamos juntos mientras hablábamos de nuestro día. Después vimos una película de comedia en la televisión. Me acosté a las once, muy cansado pero feliz por el día tan productivo.",
        translation: "Dün benim için çok özel bir gündü. Yapacak çok işim olduğu için altı buçukta erken uyandım. Önce mutfakta ailemle kahvaltı ettim. Annem reçelli tost ve sütlü kahve hazırladı. Sonra otobüsle işe gittim çünkü arabam geçen haftadan beri tamircideydi. Yolculuk otuz dakika sürdü ve tam sekizde vardım. Bütün gün çok çalıştım ve üç önemli toplantım vardı. İkide ofise yakın bir İtalyan restoranında meslektaşlarımla öğle yemeği yedim. Makarna ve salata sipariş ettik. Öğleden sonra patronumla yeni bir proje hakkında çok önemli bir toplantım vardı. Altıda işten çıktım ve doğrudan spor salonuna gittim. Bir saat egzersiz yaptım: koşu bandında koştum ve ağırlık kaldırdım. Sekizde eve geldiğimde, eşim çoktan akşam yemeğini hazırlamıştı: sebzeli tavuk. Günümüz hakkında konuşurken birlikte yemek yedik. Sonra televizyonda bir komedi filmi izledik. Çok verimli geçen gün için yorgun ama mutlu bir şekilde on birde yattım."
    },
    vocabulary: [
        { word: "Despertar", meaning: "Uyanmak" },
        { word: "Almorzar", meaning: "Öğle yemeği yemek" },
        { word: "Reunión", meaning: "Toplantı" },
        { word: "Taller", meaning: "Tamirhane" },
        { word: "Productivo", meaning: "Verimli" }
    ],
    questions: [
        { id: 1, question: "Saat kaçta uyandı?", options: ["A las seis", "A las seis y media", "A las siete"], correctAnswer: "A las seis y media" },
        { id: 2, question: "Neden otobüsle işe gitti?", options: ["El coche estaba en el taller", "No tiene coche", "Es más barato"], correctAnswer: "El coche estaba en el taller" },
        { id: 3, question: "Yolculuk kaç dakika sürdü?", options: ["Veinte", "Treinta", "Cuarenta"], correctAnswer: "Treinta" },
        { id: 4, question: "Kaç toplantısı vardı?", options: ["Dos", "Tres", "Cuatro"], correctAnswer: "Tres" },
        { id: 5, question: "Öğle yemeği nerede yedi?", options: ["En casa", "En la oficina", "En un restaurante italiano"], correctAnswer: "En un restaurante italiano" },
        { id: 6, question: "Öğle yemeğinde ne yediler?", options: ["Pizza", "Pasta y ensalada", "Hamburguesa"], correctAnswer: "Pasta y ensalada" },
        { id: 7, question: "Patronla hangi konu hakkında toplantı yaptı?", options: ["Vacaciones", "Un nuevo proyecto", "Salario"], correctAnswer: "Un nuevo proyecto" },
        { id: 8, question: "Spor salonunda kaç saat kaldı?", options: ["Media hora", "Una hora", "Dos horas"], correctAnswer: "Una hora" },
        { id: 9, question: "Akşam yemeğinde ne yediler?", options: ["Pasta", "Pollo con verduras", "Pescado"], correctAnswer: "Pollo con verduras" },
        { id: 10, question: "Saat kaçta yattı?", options: ["A las diez", "A las once", "A las doce"], correctAnswer: "A las once" }
    ]
};

// ===== ÜNİTE 22: GEÇMİŞ ZAMAN 2 =====
const unit22Reading: UnitReading = {
    unitId: 22, title: "Çocukluk Anıları", language: "İspanyolca", level: "A2",
    story: {
        text: "Cuando era niño, vivía en un pueblo pequeño cerca de la montaña. Era un lugar muy tranquilo con apenas quinientos habitantes. Todos los días iba a la escuela caminando con mis amigos porque no había autobuses. El camino duraba unos veinte minutos y pasábamos por un puente de piedra muy antiguo. Mi abuela siempre nos esperaba con galletas caseras cuando volvíamos de la escuela. Las hacía con chocolate y nueces, eran deliciosas. Los fines de semana jugábamos en el río y pescábamos peces pequeños que después soltábamos. Mi padre trabajaba en una fábrica de muebles y llegaba a casa muy cansado. Mi madre era ama de casa y cocinaba muy bien, especialmente los domingos. Teníamos un perro que se llamaba Toby, era marrón y muy juguetón. También teníamos un gato negro que dormía todo el día. En verano, toda la familia íbamos a la playa durante dos semanas. Eran las vacaciones más felices del año. Recuerdo que jugábamos en la arena y mi padre nos enseñaba a nadar. No teníamos mucho dinero, pero nunca nos faltaba amor ni felicidad.",
        translation: "Çocukken dağa yakın küçük bir kasabada yaşıyordum. Sadece beş yüz kişinin yaşadığı çok sakin bir yerdi. Her gün arkadaşlarımla yürüyerek okula gidiyordum çünkü otobüs yoktu. Yol yaklaşık yirmi dakika sürüyordu ve çok eski taş bir köprüden geçiyorduk. Okuldan döndüğümüzde büyükannem bizi her zaman ev yapımı kurabiyelerle bekliyordu. Çikolata ve cevizle yapıyordu, çok lezzetliydiler. Hafta sonları nehirde oynuyor ve sonra serbest bıraktığımız küçük balıklar tutuyorduk. Babam bir mobilya fabrikasında çalışıyordu ve eve çok yorgun geliyordu. Annem ev hanımıydı ve çok iyi yemek yapıyordu, özellikle pazarları. Toby adında bir köpeğimiz vardı, kahverengiydi ve çok oyuncuydu. Ayrıca bütün gün uyuyan siyah bir kedimiz vardı. Yazın tüm aile iki haftalığına plaja gidiyorduk. Yılın en mutlu tatilleriydi. Kumda oynadığımızı ve babamın bize yüzmeyi öğrettiğini hatırlıyorum. Çok paramız yoktu ama hiçbir zaman sevgi ve mutluluk eksik olmadı."
    },
    vocabulary: [
        { word: "Pueblo", meaning: "Kasaba" },
        { word: "Abuela", meaning: "Büyükanne" },
        { word: "Pescábamos", meaning: "Balık tutuyorduk" },
        { word: "Fábrica", meaning: "Fabrika" },
        { word: "Recuerdo", meaning: "Hatırlıyorum" }
    ],
    questions: [
        { id: 1, question: "Kasaba nereye yakındı?", options: ["Cerca del mar", "Cerca de la montaña", "Cerca de la ciudad"], correctAnswer: "Cerca de la montaña" },
        { id: 2, question: "Kasabada kaç kişi yaşıyordu?", options: ["Trescientos", "Quinientos", "Mil"], correctAnswer: "Quinientos" },
        { id: 3, question: "Okula nasıl gidiyordu?", options: ["En autobús", "Caminando", "En bicicleta"], correctAnswer: "Caminando" },
        { id: 4, question: "Büyükanne kurabiyeyi neyle yapıyordu?", options: ["Con frutas", "Con chocolate y nueces", "Con miel"], correctAnswer: "Con chocolate y nueces" },
        { id: 5, question: "Baba nerede çalışıyordu?", options: ["En una oficina", "En una fábrica de muebles", "En un hospital"], correctAnswer: "En una fábrica de muebles" },
        { id: 6, question: "Köpeğin adı neydi?", options: ["Max", "Toby", "Rex"], correctAnswer: "Toby" },
        { id: 7, question: "Köpek nasıldı?", options: ["Negro y tranquilo", "Marrón y juguetón", "Blanco y grande"], correctAnswer: "Marrón y juguetón" },
        { id: 8, question: "Yazın plajda kaç hafta kalıyorlardı?", options: ["Una semana", "Dos semanas", "Un mes"], correctAnswer: "Dos semanas" },
        { id: 9, question: "Baba plajda çocuklara ne öğretiyordu?", options: ["A pescar", "A nadar", "A cocinar"], correctAnswer: "A nadar" },
        { id: 10, question: "Ailenin durumu nasıldı?", options: ["Muy rico", "Pobre pero feliz", "Normal"], correctAnswer: "Pobre pero feliz" }
    ]
};

// ===== ÜNİTE 23: RESTORANDA =====
const unit23Reading: UnitReading = {
    unitId: 23, title: "Özel Akşam Yemeği", language: "İspanyolca", level: "A2",
    story: {
        text: "Anoche fuimos a un restaurante italiano muy elegante para celebrar nuestro quinto aniversario de boda. Hicimos la reserva hace una semana porque el restaurante siempre está lleno. Llegamos a las ocho en punto y el camarero nos llevó a una mesa junto a la ventana con vistas a la ciudad. El ambiente era muy romántico con velas en las mesas y música suave de fondo. Primero pedimos una botella de vino tinto de la Rioja y unas aceitunas para compartir. De primer plato, mi esposa pidió una ensalada César con pollo y yo pedí una sopa de tomate casera. Estaba caliente y deliciosa. De segundo plato, ella eligió pasta con mariscos: gambas, mejillones y calamares en una salsa de vino blanco. Yo pedí un filete de ternera con patatas y verduras a la plancha. El filete estaba en su punto perfecto. Para el postre, compartimos un tiramisú casero con café. El camarero fue muy profesional y amable durante toda la cena. Al final, la cuenta fue de noventa y cinco euros. Aunque era caro, valió la pena por la calidad de la comida y el servicio. Dejamos una propina de quince euros porque estábamos muy contentos.",
        translation: "Dün gece beşinci evlilik yıl dönümümüzü kutlamak için çok şık bir İtalyan restoranına gittik. Restoran her zaman dolu olduğu için bir hafta önce rezervasyon yaptık. Tam sekizde vardık ve garson bizi şehir manzaralı pencere kenarında bir masaya götürdü. Masalarda mumlar ve arka planda hafif müzikle ortam çok romantikti. Önce Rioja'dan bir şişe kırmızı şarap ve paylaşmak için zeytin sipariş ettik. İlk yemek olarak eşim tavuklu Sezar salatası, ben de ev yapımı domates çorbası istedim. Sıcak ve lezzetliydi. İkinci yemek olarak o deniz mahsullü makarna seçti: beyaz şarap soslu karides, midye ve kalamar. Ben de ızgara sebzelerle dana biftek aldım. Biftek tam kıvamındaydı. Tatlı için kahveyle birlikte ev yapımı tiramisu paylaştık. Garson yemek boyunca çok profesyonel ve nazikti. Sonunda hesap doksan beş euro tuttu. Pahalı olmasına rağmen yemeğin kalitesi ve servis için değdi. Çok memnun olduğumuz için on beş euro bahşiş bıraktık."
    },
    vocabulary: [
        { word: "Camarero", meaning: "Garson" },
        { word: "Primer plato", meaning: "İlk yemek" },
        { word: "Propina", meaning: "Bahşiş" },
        { word: "Reserva", meaning: "Rezervasyon" },
        { word: "Ambiente", meaning: "Ortam/Atmosfer" }
    ],
    questions: [
        { id: 1, question: "Ne kutluyorlardı?", options: ["Cumpleaños", "Aniversario de boda", "Ascenso"], correctAnswer: "Aniversario de boda" },
        { id: 2, question: "Kaç yıllık evliliklerini kutladılar?", options: ["Tres años", "Cinco años", "Diez años"], correctAnswer: "Cinco años" },
        { id: 3, question: "Rezervasyonu ne zaman yaptılar?", options: ["Ayer", "Hace una semana", "Hace un mes"], correctAnswer: "Hace una semana" },
        { id: 4, question: "Masada ne vardı?", options: ["Flores", "Velas", "Fotos"], correctAnswer: "Velas" },
        { id: 5, question: "İlk olarak ne sipariş ettiler?", options: ["Postre", "Vino tinto y aceitunas", "Pasta"], correctAnswer: "Vino tinto y aceitunas" },
        { id: 6, question: "Kadın ikinci yemekte ne yedi?", options: ["Filete", "Pasta con mariscos", "Ensalada"], correctAnswer: "Pasta con mariscos" },
        { id: 7, question: "Biftek nasıldı?", options: ["Muy hecho", "En su punto perfecto", "Poco hecho"], correctAnswer: "En su punto perfecto" },
        { id: 8, question: "Tatlıda ne yediler?", options: ["Helado", "Tiramisú", "Tarta"], correctAnswer: "Tiramisú" },
        { id: 9, question: "Hesap kaç euro tuttu?", options: ["Ochenta euros", "Noventa y cinco euros", "Cien euros"], correctAnswer: "Noventa y cinco euros" },
        { id: 10, question: "Kaç euro bahşiş bıraktılar?", options: ["Diez euros", "Quince euros", "Veinte euros"], correctAnswer: "Quince euros" }
    ]
};

// ===== ÜNİTE 24: ALIŞVERİŞ =====
const unit24Reading: UnitReading = {
    unitId: 24, title: "Alışveriş Merkezi", language: "İspanyolca", level: "A2",
    story: {
        text: "El sábado pasado fui de compras al centro comercial más grande de la ciudad con mi hermana menor. Era un día de rebajas y había mucha gente. Primero entramos en una tienda de ropa de marca porque necesitaba unos pantalones nuevos para el trabajo. Encontré unos pantalones negros de lana muy elegantes que costaban cincuenta euros, antes costaban ochenta. Los probé en el probador y me quedaban perfectos, ni largos ni cortos. Mi hermana también encontró cosas bonitas: compró una blusa azul de seda y un vestido rojo para una boda. Después fuimos a una zapatería donde compré unas zapatillas deportivas blancas de la marca Nike por setenta euros. También compré unos zapatos negros formales para la oficina. A la una y media almorzamos en la cafetería del centro comercial: pedimos hamburguesas con patatas fritas y refrescos de cola. Por la tarde, entramos en una librería grande y compré dos novelas de misterio de mi autor favorito. Antes de irnos, pasamos por una perfumería y mi hermana compró un perfume para nuestra madre. En total gastamos casi trescientos euros. Era mucho dinero pero las rebajas merecían la pena. Llegamos a casa a las seis muy cansadas pero muy contentas con nuestras compras.",
        translation: "Geçen cumartesi küçük kız kardeşimle şehrin en büyük alışveriş merkezine alışverişe gittim. İndirim günüydü ve çok kalabalıktı. Önce iş için yeni pantolon lazım olduğu için markalı bir giyim mağazasına girdik. Elli euro olan çok şık siyah yün pantolon buldum, önceden seksen euroydu. Kabinde denedim ve mükemmel oldu, ne uzun ne kısa. Kardeşim de güzel şeyler buldu: mavi ipek bir bluz ve bir düğün için kırmızı bir elbise aldı. Sonra bir ayakkabıcıya gittik ve yetmiş euroya Nike marka beyaz spor ayakkabı aldım. Ayrıca ofis için siyah klasik ayakkabı aldım. Bir buçukta alışveriş merkezinin kafeteryasında öğle yemeği yedik: patates kızartmalı hamburger ve kola sipariş ettik. Öğleden sonra büyük bir kitapçıya girdik ve en sevdiğim yazardan iki polisiye roman aldım. Gitmeden önce bir parfümcüden geçtik ve kardeşim annemiz için parfüm aldı. Toplamda yaklaşık üç yüz euro harcadık. Çok paraydı ama indirimler değerdi. Altıda eve çok yorgun ama alışverişlerimizden çok memnun olarak geldik."
    },
    vocabulary: [
        { word: "Probarse", meaning: "Denemek" },
        { word: "Vestido", meaning: "Elbise" },
        { word: "Zapatillas", meaning: "Spor ayakkabı" },
        { word: "Rebajas", meaning: "İndirimler" },
        { word: "Probador", meaning: "Giyinme kabini" }
    ],
    questions: [
        { id: 1, question: "Pantolon orijinal fiyatı kaç euro?", options: ["Cincuenta", "Setenta", "Ochenta"], correctAnswer: "Ochenta" },
        { id: 2, question: "İndirimden sonra pantolon kaç euro?", options: ["Cuarenta", "Cincuenta", "Sesenta"], correctAnswer: "Cincuenta" },
        { id: 3, question: "Kardeşi ne aldı?", options: ["Pantalones", "Blusa y vestido", "Zapatos"], correctAnswer: "Blusa y vestido" },
        { id: 4, question: "Elbise ne için alındı?", options: ["Para el trabajo", "Para una boda", "Para vacaciones"], correctAnswer: "Para una boda" },
        { id: 5, question: "Spor ayakkabı hangi marka?", options: ["Adidas", "Nike", "Puma"], correctAnswer: "Nike" },
        { id: 6, question: "Öğle yemeği saat kaçta?", options: ["A la una", "A la una y media", "A las dos"], correctAnswer: "A la una y media" },
        { id: 7, question: "Kitapçıdan kaç kitap aldı?", options: ["Una", "Dos", "Tres"], correctAnswer: "Dos" },
        { id: 8, question: "Parfümcüden ne aldılar?", options: ["Maquillaje", "Un perfume para su madre", "Crema"], correctAnswer: "Un perfume para su madre" },
        { id: 9, question: "Toplamda kaç euro harcadılar?", options: ["Doscientos", "Trescientos", "Cuatrocientos"], correctAnswer: "Trescientos" },
        { id: 10, question: "Eve saat kaçta geldiler?", options: ["A las cinco", "A las seis", "A las siete"], correctAnswer: "A las seis" }
    ]
};

// ===== ÜNİTE 25: SEYAHAT PLANLARI =====
const unit25Reading: UnitReading = {
    unitId: 25, title: "Barcelona Gezisi", language: "İspanyolca", level: "A2",
    story: {
        text: "El próximo mes voy a viajar a Barcelona con mi familia: mi esposa y nuestros dos hijos de diez y doce años. Ya hemos reservado los billetes de avión ida y vuelta por trescientos euros cada persona. También reservamos un hotel de tres estrellas cerca de la playa que cuesta noventa euros la noche. Vamos a estar cinco días completos. El primer día queremos visitar la Sagrada Familia, la famosa iglesia de Gaudí, y después pasear por las Ramblas para ver los artistas callejeros. El segundo día iremos al parque Güell por la mañana y veremos las obras de Gaudí con sus mosaicos de colores. Por la tarde visitaremos el Barrio Gótico con sus calles antiguas. El tercer día lo dedicaremos completamente a la playa de la Barceloneta porque mis hijos quieren nadar y jugar con la arena. El cuarto día visitaremos el Camp Nou, el estadio del Fútbol Club Barcelona, porque mi hijo es muy aficionado al fútbol. El último día haremos compras en el centro y compraremos recuerdos para los abuelos. Volveremos a casa por la noche en el último vuelo. Estamos muy emocionados porque es nuestro primer viaje a Barcelona todos juntos.",
        translation: "Gelecek ay ailemle Barcelona'ya seyahat edeceğim: eşim ve on ve on iki yaşındaki iki çocuğumuz. Kişi başı üç yüz euroya gidiş-dönüş uçak bileti rezerve ettik. Ayrıca plaja yakın üç yıldızlı bir otel de rezerve ettik, gece başına doksan euro. Tam beş gün kalacağız. İlk gün Gaudí'nin ünlü kilisesi Sagrada Familia'yı ziyaret etmek ve sonra sokak sanatçılarını görmek için Ramblas'ta gezinmek istiyoruz. İkinci gün sabah Güell parkına gideceğiz ve Gaudí'nin renkli mozaikli eserlerini göreceğiz. Öğleden sonra eski sokaklarıyla Gotik Mahalle'yi ziyaret edeceğiz. Üçüncü günü tamamen Barceloneta plajına ayıracağız çünkü çocuklarım yüzmek ve kumla oynamak istiyor. Dördüncü gün oğlum futbol fanatiği olduğu için Barcelona Futbol Kulübü'nün stadyumu Camp Nou'yu ziyaret edeceğiz. Son gün merkezde alışveriş yapacağız ve büyükanne ve büyükbabalar için hediyeler alacağız. Son uçuşla gece eve döneceğiz. Çok heyecanlıyız çünkü hep birlikte Barcelona'ya ilk seyahatimiz."
    },
    vocabulary: [
        { word: "Reservar", meaning: "Rezerve etmek" },
        { word: "Pasear", meaning: "Gezinmek" },
        { word: "Emocionados", meaning: "Heyecanlı" },
        { word: "Recuerdos", meaning: "Hatıralar/Hediyelik" },
        { word: "Aficionado", meaning: "Hayran/Fanati" }
    ],
    questions: [
        { id: 1, question: "Kaç kişi seyahat edecek?", options: ["Dos", "Tres", "Cuatro"], correctAnswer: "Cuatro" },
        { id: 2, question: "Uçak bileti kişi başı kaç euro?", options: ["Doscientos", "Trescientos", "Cuatrocientos"], correctAnswer: "Trescientos" },
        { id: 3, question: "Otel gece başına kaç euro?", options: ["Setenta", "Ochenta", "Noventa"], correctAnswer: "Noventa" },
        { id: 4, question: "Kaç gün kalacaklar?", options: ["Tres días", "Cinco días", "Una semana"], correctAnswer: "Cinco días" },
        { id: 5, question: "İlk gün hangi kiliseyi ziyaret edecekler?", options: ["La Catedral", "La Sagrada Familia", "Santa María"], correctAnswer: "La Sagrada Familia" },
        { id: 6, question: "Üçüncü gün ne yapacaklar?", options: ["Ir al estadio", "Ir a la playa", "Hacer compras"], correctAnswer: "Ir a la playa" },
        { id: 7, question: "Camp Nou ne?", options: ["Un museo", "Un parque", "Un estadio"], correctAnswer: "Un estadio" },
        { id: 8, question: "Neden Camp Nou'yu ziyaret edecekler?", options: ["Es famoso", "El hijo es aficionado al fútbol", "Está cerca"], correctAnswer: "El hijo es aficionado al fútbol" },
        { id: 9, question: "Son gün ne yapacaklar?", options: ["Ir a la playa", "Hacer compras", "Visitar museos"], correctAnswer: "Hacer compras" },
        { id: 10, question: "Bu onların Barcelona'ya kaçıncı seyahati?", options: ["Primera", "Segunda", "Tercera"], correctAnswer: "Primera" }
    ]
};

// ===== ÜNİTE 26: OTEL REZERVASYONU =====
const unit26Reading: UnitReading = {
    unitId: 26, title: "Otel Deneyimi", language: "İspanyolca", level: "A2",
    story: {
        text: "La semana pasada me alojé en un hotel de cuatro estrellas en el centro de Madrid por motivos de trabajo. Llegué al hotel a las tres de la tarde después de un largo viaje en tren desde Barcelona. Cuando entré en la recepción, el recepcionista fue muy amable y profesional. Me pidió el pasaporte y la confirmación de la reserva. Me dio la llave electrónica de mi habitación que estaba en el quinto piso. Era una habitación doble muy espaciosa con vistas espectaculares a la Gran Vía. Tenía una cama king size muy cómoda, un televisor de pantalla plana, un minibar con bebidas y snacks, un escritorio para trabajar, y un baño privado con bañera y ducha. El wifi era gratuito y muy rápido, perfecto para mis videollamadas de trabajo. Cada mañana bajaba al restaurante del hotel para el desayuno buffet incluido en el precio. Había de todo: pan recién horneado, cruasanes, frutas frescas, huevos revueltos, bacon, café, té y zumo de naranja natural. El último día de mi estancia pedí servicio de habitaciones a las siete de la mañana porque tenía una reunión temprana y estaba muy cansado para bajar. El día de salida hice el check-out a las doce en punto y dejé las maletas en consigna en la recepción hasta que vino el taxi al aeropuerto a las cuatro. Fue una estancia muy agradable y el personal fue excelente.",
        translation: "Geçen hafta iş nedeniyle Madrid merkezde dört yıldızlı bir otelde kaldım. Barcelona'dan uzun bir tren yolculuğundan sonra öğleden sonra üçte otele vardım. Resepsiyona girdiğimde, resepsiyonist çok nazik ve profesyoneldi. Pasaportumu ve rezervasyon onayımı istedi. Beşinci katta olan odamın elektronik anahtarını verdi. Gran Vía'ya muhteşem manzaralı çok geniş çift kişilik bir odaydı. Çok rahat bir king size yatak, düz ekran televizyon, içecek ve atıştırmalık dolu minibar, çalışmak için bir masa ve küvetli ve duşlu özel banyo vardı. Wifi ücretsiz ve çok hızlıydı, iş video görüşmelerim için mükemmeldi. Her sabah fiyata dahil kahvaltı büfesi için otel restoranına iniyordum. Her şey vardı: taze pişmiş ekmek, kruvasan, taze meyve, sahanda yumurta, pastırma, kahve, çay ve taze sıkılmış portakal suyu. Kalışımın son günü sabah yedide oda servisi istedim çünkü erken bir toplantım vardı ve aşağı inmek için çok yorgundum. Çıkış günü tam on ikide check-out yaptım ve dörtte havaalanına taksi gelene kadar valizleri resepsiyondaki emanete bıraktım. Çok keyifli bir konaklama oldu ve personel mükemmeldi."
    },
    vocabulary: [
        { word: "Alojarse", meaning: "Kalmak" },
        { word: "Recepcionista", meaning: "Resepsiyonist" },
        { word: "Check-out", meaning: "Çıkış" },
        { word: "Consigna", meaning: "Emanet" },
        { word: "Estancia", meaning: "Konaklama" }
    ],
    questions: [
        { id: 1, question: "Otel kaç yıldızlı?", options: ["Tres estrellas", "Cuatro estrellas", "Cinco estrellas"], correctAnswer: "Cuatro estrellas" },
        { id: 2, question: "Neden Madrid'e geldi?", options: ["Por vacaciones", "Por trabajo", "Para visitar familia"], correctAnswer: "Por trabajo" },
        { id: 3, question: "Oda kaçıncı kattaydı?", options: ["Tercero", "Cuarto", "Quinto"], correctAnswer: "Quinto" },
        { id: 4, question: "Oda neye bakıyordu?", options: ["Al parque", "A la Gran Vía", "Al mar"], correctAnswer: "A la Gran Vía" },
        { id: 5, question: "Wifi ücretli miydi?", options: ["Sí, caro", "Sí, barato", "No, era gratuito"], correctAnswer: "No, era gratuito" },
        { id: 6, question: "Kahvaltı fiyata dahil miydi?", options: ["Sí", "No", "Solo el café"], correctAnswer: "Sí" },
        { id: 7, question: "Son gün neden oda servisi istedi?", options: ["Estaba enfermo", "Tenía una reunión temprana", "El restaurante estaba cerrado"], correctAnswer: "Tenía una reunión temprana" },
        { id: 8, question: "Oda servisi saat kaçta sipariş edildi?", options: ["A las seis", "A las siete", "A las ocho"], correctAnswer: "A las siete" },
        { id: 9, question: "Check-out saat kaçtaydı?", options: ["A las once", "A las doce", "A la una"], correctAnswer: "A las doce" },
        { id: 10, question: "Havaalanına taksi saat kaçta geldi?", options: ["A las dos", "A las tres", "A las cuatro"], correctAnswer: "A las cuatro" }
    ]
};

// ===== ÜNİTE 27: HAVALİMANINDA =====
const unit27Reading: UnitReading = {
    unitId: 27, title: "Uçuş Macerası", language: "İspanyolca", level: "A2",
    story: {
        text: "El viernes pasado tuve que viajar a Londres por trabajo para asistir a una conferencia internacional. Llegué al aeropuerto de Madrid-Barajas tres horas antes del vuelo porque era un vuelo internacional. Primero fui al mostrador de facturación de la compañía British Airways y documenté mi maleta grande de veinte kilos. La empleada me preguntó si prefería un asiento de ventana o de pasillo y elegí ventana. Me dio la tarjeta de embarque con la puerta B22. Después pasé por el control de seguridad: tuve que quitar el cinturón, los zapatos y sacar el portátil de la mochila. Afortunadamente pasé sin problemas. Tenía tiempo así que fui a una cafetería y tomé un café con un cruasán. Mi puerta de embarque estaba en la Terminal 4 y tuve que caminar bastante. La sala de espera estaba muy llena de pasajeros. Anunciaron que el vuelo se retrasaba treinta minutos por mal tiempo en Londres. Finalmente embarcamos a las once y cuarto. Durante el vuelo de dos horas, la azafata nos sirvió bebidas gratis y un sándwich de jamón. También vi una película en la pantalla del asiento. Aterrizamos en el aeropuerto de Heathrow a las tres de la tarde hora local. En el control de pasaportes había mucha cola pero pasé en veinte minutos. Recogí mi equipaje en la cinta número cinco y tomé un taxi negro típico de Londres al hotel por cuarenta libras.",
        translation: "Geçen cuma uluslararası bir konferansa katılmak için iş gereği Londra'ya seyahat etmem gerekti. Uluslararası uçuş olduğu için uçuştan üç saat önce Madrid-Barajas havaalanına vardım. Önce British Airways'in check-in kontuarına gittim ve yirmi kiloluk büyük valizimi teslim ettim. Görevli pencere kenarı mı koridor kenarı mı tercih ettiğimi sordu ve pencereyi seçtim. Bana B22 kapılı biniş kartını verdi. Sonra güvenlik kontrolünden geçtim: kemeri, ayakkabıları çıkarmam ve dizüstü bilgisayarı sırt çantasından çıkarmam gerekti. Neyse ki sorunsuz geçtim. Vaktim olduğu için bir kafeye gittim ve kruvasanlı kahve içtim. Biniş kapım Terminal 4'teydi ve epey yürümem gerekti. Bekleme salonu yolcularla doluydu. Londra'da kötü hava nedeniyle uçuşun otuz dakika geciktiğini duyurdular. Sonunda on bir on beşte bindik. İki saatlik uçuş sırasında hostes bize ücretsiz içecek ve jambonlu sandviç servis etti. Ayrıca koltuğun ekranında bir film izledim. Yerel saatle öğleden sonra üçte Heathrow havaalanına indik. Pasaport kontrolünde çok kuyruk vardı ama yirmi dakikada geçtim. Bagajımı beş numaralı bantta aldım ve kırk sterline Londra'ya özgü siyah bir taksiyle otele gittim."
    },
    vocabulary: [
        { word: "Facturación", meaning: "Check-in" },
        { word: "Puerta de embarque", meaning: "Biniş kapısı" },
        { word: "Aterrizar", meaning: "İnmek" },
        { word: "Tarjeta de embarque", meaning: "Biniş kartı" },
        { word: "Cinta de equipaje", meaning: "Bagaj bandı" }
    ],
    questions: [
        { id: 1, question: "Neden Londra'ya seyahat ediyordu?", options: ["Por vacaciones", "Por trabajo", "Para visitar familia"], correctAnswer: "Por trabajo" },
        { id: 2, question: "Havaalanına kaç saat önce geldi?", options: ["Dos horas", "Tres horas", "Cuatro horas"], correctAnswer: "Tres horas" },
        { id: 3, question: "Hangi koltuk tercih etti?", options: ["Pasillo", "Ventana", "Centro"], correctAnswer: "Ventana" },
        { id: 4, question: "Biniş kapısı hangisiydi?", options: ["A22", "B22", "C22"], correctAnswer: "B22" },
        { id: 5, question: "Güvenlik kontrolünde ne çıkardı?", options: ["Solo el cinturón", "Cinturón, zapatos y portátil", "Solo los zapatos"], correctAnswer: "Cinturón, zapatos y portátil" },
        { id: 6, question: "Uçuş ne kadar gecikti?", options: ["Quince minutos", "Treinta minutos", "Una hora"], correctAnswer: "Treinta minutos" },
        { id: 7, question: "Uçuş kaç saat sürdü?", options: ["Una hora", "Dos horas", "Tres horas"], correctAnswer: "Dos horas" },
        { id: 8, question: "Uçuş sırasında ne yaptı?", options: ["Durmió", "Vio una película", "Trabajó"], correctAnswer: "Vio una película" },
        { id: 9, question: "Pasaport kontrolünde kaç dakika bekledi?", options: ["Diez minutos", "Veinte minutos", "Treinta minutos"], correctAnswer: "Veinte minutos" },
        { id: 10, question: "Taksi kaç sterline mal oldu?", options: ["Treinta libras", "Cuarenta libras", "Cincuenta libras"], correctAnswer: "Cuarenta libras" }
    ]
};

// ===== ÜNİTE 28: DOKTORDA =====
const unit28Reading: UnitReading = {
    unitId: 28, title: "Doktor Randevusu", language: "İspanyolca", level: "A2",
    story: {
        text: "Esta semana tuve que ir al médico de cabecera porque no me sentía nada bien desde hacía varios días. Tenía fiebre alta de casi treinta y nueve grados, un fuerte dolor de cabeza que no se me iba con nada, tos seca muy molesta y dolor en todo el cuerpo. Llamé al centro de salud por la mañana a las ocho para pedir cita y me dieron hora para las once. Cuando llegué a la consulta, primero tuve que esperar en la sala de espera durante veinte minutos porque había muchos pacientes esperando. Cuando me llamaron, entré en el consultorio y el médico me hizo varias preguntas sobre mis síntomas. Me examinó los ojos con una linterna pequeña, me miró los oídos con un otoscopio, y me pidió que abriera la boca para ver la garganta. Después me tomó la temperatura con un termómetro digital: tenía exactamente treinta y ocho grados y medio. También me auscultó los pulmones con el estetoscopio. El doctor me dijo que tenía una gripe bastante fuerte y que debía descansar mucho en casa. Me recetó varios medicamentos: antibióticos para la infección que debía tomar cada ocho horas durante una semana, jarabe para la tos seca tres veces al día después de las comidas, y pastillas para el dolor de cabeza cuando lo necesitara. También me recomendó beber mucho líquido, especialmente agua y caldos calientes, y no ir al trabajo durante al menos una semana para recuperarme completamente. Fui directamente a la farmacia del barrio a comprar los medicamentos con la receta y volví a casa en taxi porque me encontraba muy débil para caminar.",
        translation: "Bu hafta birkaç gündür hiç iyi hissetmediğim için aile hekimine gitmem gerekti. Neredeyse otuz dokuz derece yüksek ateşim, hiçbir şeyle geçmeyen şiddetli baş ağrım, çok rahatsız edici kuru öksürük ve tüm vücudumda ağrı vardı. Sabah sekizde sağlık merkezini arayarak randevu aldım ve on bir için saat verdiler. Muayenehaneye vardığımda, bekleyen çok hasta olduğu için önce bekleme salonunda yirmi dakika beklemem gerekti. Beni çağırdıklarında muayene odasına girdim ve doktor belirtilerimle ilgili çeşitli sorular sordu. Gözlerimi küçük bir fenerle muayene etti, kulaklarımı otoskopla baktı ve boğazı görmek için ağzımı açmamı istedi. Sonra dijital termometreyle ateşimi ölçtü: tam otuz sekiz buçuk dereceydi. Ayrıca stetoskopla akciğerlerimi dinledi. Doktor oldukça şiddetli bir gribim olduğunu ve evde çok dinlenmem gerektiğini söyledi. Çeşitli ilaçlar reçete etti: bir hafta boyunca sekiz saatte bir almam gereken enfeksiyon için antibiyotik, yemeklerden sonra günde üç kez kuru öksürük için şurup ve gerektiğinde baş ağrısı için haplar. Ayrıca çok sıvı, özellikle su ve sıcak et suyu içmemi ve tamamen iyileşmek için en az bir hafta işe gitmememi tavsiye etti. Reçeteyle birlikte ilaçları almak için doğrudan mahalle eczanesine gittim ve yürüyemeyecek kadar halsiz olduğum için taksiyle eve döndüm."
    },
    vocabulary: [
        { word: "Fiebre", meaning: "Ateş" },
        { word: "Recetar", meaning: "Reçete yazmak" },
        { word: "Medicamentos", meaning: "İlaçlar" },
        { word: "Síntomas", meaning: "Belirtiler" },
        { word: "Consulta", meaning: "Muayene" }
    ],
    questions: [
        { id: 1, question: "Kaç gündür hasta hissediyordu?", options: ["Un día", "Varios días", "Una semana"], correctAnswer: "Varios días" },
        { id: 2, question: "Başlangıçta ateşi kaç dereceydi?", options: ["Treinta y siete", "Treinta y ocho", "Casi treinta y nueve"], correctAnswer: "Casi treinta y nueve" },
        { id: 3, question: "Randevu saat kaçta?", options: ["A las nueve", "A las diez", "A las once"], correctAnswer: "A las once" },
        { id: 4, question: "Bekleme salonunda kaç dakika bekledi?", options: ["Diez minutos", "Veinte minutos", "Treinta minutos"], correctAnswer: "Veinte minutos" },
        { id: 5, question: "Doktor muayenede ateşi kaç derece ölçtü?", options: ["Treinta y ocho", "Treinta y ocho y medio", "Treinta y nueve"], correctAnswer: "Treinta y ocho y medio" },
        { id: 6, question: "Hastalık neydi?", options: ["Un resfriado", "Una gripe fuerte", "Bronquitis"], correctAnswer: "Una gripe fuerte" },
        { id: 7, question: "Antibiyotik kaç saatte bir alınmalı?", options: ["Cada seis horas", "Cada ocho horas", "Cada doce horas"], correctAnswer: "Cada ocho horas" },
        { id: 8, question: "Antibiyotik tedavisi kaç gün sürecek?", options: ["Cinco días", "Una semana", "Diez días"], correctAnswer: "Una semana" },
        { id: 9, question: "Doktor kaç gün işe gitmemesini tavsiye etti?", options: ["Tres días", "Cinco días", "Una semana"], correctAnswer: "Una semana" },
        { id: 10, question: "Eve nasıl döndü?", options: ["Caminando", "En autobús", "En taxi"], correctAnswer: "En taxi" }
    ]
};

// ===== ÜNİTE 29: ECZANEDE =====
const unit29Reading: UnitReading = {
    unitId: 29, title: "Eczane Ziyareti", language: "İspanyolca", level: "A2",
    story: {
        text: "Ayer por la tarde fui a la farmacia de guardia de mi barrio porque necesitaba varios medicamentos urgentes. Llevaba la receta que me había dado el médico por la mañana después de mi consulta. Cuando entré en la farmacia, había tres personas esperando delante de mí así que tuve que esperar unos diez minutos. Cuando llegó mi turno, le di la receta al farmacéutico, un señor mayor muy amable con bata blanca. Él miró la receta cuidadosamente y fue a buscar los medicamentos a la trastienda. Volvió con tres cajas: antibióticos, jarabe para la tos y analgésicos. Me explicó detalladamente cómo tomar cada uno: los antibióticos una pastilla cada ocho horas siempre con comida para evitar problemas de estómago durante siete días completos, el jarabe una cucharada tres veces al día antes de las comidas principales, y los analgésicos solo cuando tuviera dolor de cabeza o fiebre, máximo cada seis horas. También le pregunté si tenían algo natural para el insomnio porque últimamente me costaba mucho dormir. Me recomendó unas gotas de valeriana que son muy suaves y no causan adicción. Además, ya que estaba allí, compré otras cosas que necesitaba: una caja de tiritas de diferentes tamaños para el botiquín de casa, un frasco de alcohol para desinfectar heridas, y una crema con aloe vera para las quemaduras del sol porque iba a ir a la playa el fin de semana. El farmacéutico me dio una bolsa con todo y me dijo el total: cuarenta y siete euros con cincuenta céntimos. Pagué con mi tarjeta de débito y me dieron el ticket con un descuento del diez por ciento para la próxima compra.",
        translation: "Dün öğleden sonra acil birkaç ilaca ihtiyacım olduğu için mahallemdeki nöbetçi eczaneye gittim. Sabah muayenemden sonra doktorun verdiği reçeteyi taşıyordum. Eczaneye girdiğimde önümde üç kişi bekliyordu bu yüzden yaklaşık on dakika beklemem gerekti. Sıram gelince reçeteyi eczacıya verdim, beyaz önlüklü çok nazik yaşlı bir beyefendiydi. Reçeteye dikkatlice baktı ve ilaçları aramak için arka odaya gitti. Üç kutuyla döndü: antibiyotik, öksürük şurubu ve ağrı kesiciler. Her birini nasıl almam gerektiğini detaylı olarak açıkladı: antibiyotikleri mide sorunlarından kaçınmak için her zaman yemekle birlikte sekiz saatte bir tablet, tam yedi gün süreyle; şurubu ana yemeklerden önce günde üç kez bir kaşık; ağrı kesicileri sadece baş ağrısı veya ateşim olduğunda, en fazla altı saatte bir. Ayrıca son zamanlarda çok zor uyuduğum için uykusuzluk için doğal bir şey olup olmadığını sordum. Çok hafif olan ve bağımlılık yapmayan kediotu damlaları önerdi. Ayrıca oradayken ihtiyacım olan başka şeyler de aldım: evdeki ecza dolabı için farklı boyutlarda bir kutu yara bandı, yaraları dezenfekte etmek için bir şişe alkol ve hafta sonu plaja gideceğim için güneş yanıkları için aloe veralı bir krem. Eczacı her şeyi bir poşete koydu ve toplamı söyledi: kırk yedi euro elli sent. Banka kartımla ödedim ve bir sonraki alışveriş için yüzde on indirimli fiş verdiler."
    },
    vocabulary: [
        { word: "Farmacéutico", meaning: "Eczacı" },
        { word: "Analgésicos", meaning: "Ağrı kesiciler" },
        { word: "Insomnio", meaning: "Uykusuzluk" },
        { word: "Receta", meaning: "Reçete" },
        { word: "Botiquín", meaning: "Ecza dolabı" }
    ],
    questions: [
        { id: 1, question: "Eczaneye gitmeden önce nereye gitmişti?", options: ["Al hospital", "Al médico", "Al trabajo"], correctAnswer: "Al médico" },
        { id: 2, question: "Eczanede kaç dakika bekledi?", options: ["Cinco minutos", "Diez minutos", "Veinte minutos"], correctAnswer: "Diez minutos" },
        { id: 3, question: "Antibiyotik nasıl alınmalı?", options: ["Con el estómago vacío", "Con comida", "Antes de dormir"], correctAnswer: "Con comida" },
        { id: 4, question: "Antibiyotik tedavisi kaç gün sürecek?", options: ["Cinco días", "Siete días", "Diez días"], correctAnswer: "Siete días" },
        { id: 5, question: "Şurup ne zaman alınmalı?", options: ["Después de las comidas", "Antes de las comidas", "Por la noche"], correctAnswer: "Antes de las comidas" },
        { id: 6, question: "Uykusuzluk için ne önerildi?", options: ["Pastillas", "Gotas de valeriana", "Té"], correctAnswer: "Gotas de valeriana" },
        { id: 7, question: "Aloe veralı kremi ne için aldı?", options: ["Para la piel seca", "Para las quemaduras del sol", "Para las arrugas"], correctAnswer: "Para las quemaduras del sol" },
        { id: 8, question: "Toplam ne kadar ödedi?", options: ["Cuarenta y cinco euros", "Cuarenta y siete euros con cincuenta", "Cincuenta euros"], correctAnswer: "Cuarenta y siete euros con cincuenta" },
        { id: 9, question: "Nasıl ödedi?", options: ["En efectivo", "Con tarjeta de débito", "Con tarjeta de crédito"], correctAnswer: "Con tarjeta de débito" },
        { id: 10, question: "Bir sonraki alışveriş için kaç yüzde indirim var?", options: ["Cinco por ciento", "Diez por ciento", "Quince por ciento"], correctAnswer: "Diez por ciento" }
    ]
};

// ===== ÜNİTE 30: MESLEKLER 2 =====
const unit30Reading: UnitReading = {
    unitId: 30, title: "Farklı Meslekler", language: "İspanyolca", level: "A2",
    story: {
        text: "Vivo en un edificio de cinco plantas en el centro de la ciudad y mis vecinos tienen profesiones muy diferentes e interesantes. En el primer piso vive don Antonio, un abogado de sesenta años que trabaja en uno de los bufetes más importantes de la ciudad. Se especializa en derecho empresarial y tiene muchos clientes importantes. En el segundo piso hay una pareja joven: ella es enfermera en el hospital central y trabaja en turnos de doce horas, a veces de día y a veces de noche. Él es bombero y salva vidas todos los días. El tercer piso lo ocupa Miguel, un programador de treinta y dos años que trabaja desde casa para una empresa de tecnología americana. Gana muy bien y tiene un horario muy flexible. En el cuarto piso vive Lucía, una periodista que escribe para un periódico nacional muy famoso. Viaja mucho por todo el mundo para hacer reportajes y entrevistas. Yo vivo en el quinto piso, el último, y soy arquitecto. Diseño edificios modernos y casas ecológicas. Mi trabajo es muy creativo y me encanta porque puedo ver mis proyectos construidos en la realidad. Aunque todos tenemos horarios muy diferentes y estilos de vida distintos, nos llevamos muy bien como vecinos. Los viernes por la noche a veces organizamos cenas en la terraza del edificio y compartimos historias de nuestros trabajos. Es muy interesante escuchar las experiencias de cada uno.",
        translation: "Şehir merkezinde beş katlı bir binada yaşıyorum ve komşularım çok farklı ve ilginç mesleklere sahip. Birinci katta altmış yaşında bir avukat olan Don Antonio yaşıyor, şehrin en önemli hukuk bürolarından birinde çalışıyor. Şirketler hukuku konusunda uzmanlaşmış ve çok önemli müvekkilleri var. İkinci katta genç bir çift var: o merkez hastanede hemşire ve on iki saatlik vardiyalarda çalışıyor, bazen gündüz bazen gece. Kocası itfaiyeci ve her gün hayat kurtarıyor. Üçüncü katı otuz iki yaşında bir programcı olan Miguel kullanıyor, Amerikalı bir teknoloji şirketi için evden çalışıyor. Çok iyi kazanıyor ve çok esnek bir çalışma programı var. Dördüncü katta çok ünlü bir ulusal gazete için yazan gazeteci Lucía yaşıyor. Röportaj ve söyleşiler yapmak için dünyanın her yerine çok seyahat ediyor. Ben son kat olan beşinci katta yaşıyorum ve mimarım. Modern binalar ve ekolojik evler tasarlıyorum. İşim çok yaratıcı ve projelerimi gerçekte inşa edilmiş olarak görebildiğim için çok seviyorum. Hepimizin çok farklı çalışma saatleri ve yaşam tarzları olmasına rağmen komşu olarak çok iyi anlaşıyoruz. Cuma geceleri bazen binanın terasında akşam yemekleri düzenliyoruz ve işlerimizden hikayeler paylaşıyoruz. Her birinin deneyimlerini dinlemek çok ilginç."
    },
    vocabulary: [
        { word: "Abogado", meaning: "Avukat" },
        { word: "Enfermera", meaning: "Hemşire" },
        { word: "Periodista", meaning: "Gazeteci" },
        { word: "Bombero", meaning: "İtfaiyeci" },
        { word: "Arquitecto", meaning: "Mimar" }
    ],
    questions: [
        { id: 1, question: "Bina kaç katlı?", options: ["Tres plantas", "Cuatro plantas", "Cinco plantas"], correctAnswer: "Cinco plantas" },
        { id: 2, question: "Avukat kaç yaşında?", options: ["Cincuenta años", "Sesenta años", "Setenta años"], correctAnswer: "Sesenta años" },
        { id: 3, question: "Avukat hangi alanda uzman?", options: ["Derecho penal", "Derecho empresarial", "Derecho familiar"], correctAnswer: "Derecho empresarial" },
        { id: 4, question: "Hemşire kaç saatlik vardiyalarda çalışıyor?", options: ["Ocho horas", "Diez horas", "Doce horas"], correctAnswer: "Doce horas" },
        { id: 5, question: "Hemşirenin kocası ne iş yapıyor?", options: ["Médico", "Policía", "Bombero"], correctAnswer: "Bombero" },
        { id: 6, question: "Programcı kaç yaşında?", options: ["Veintiocho años", "Treinta y dos años", "Cuarenta años"], correctAnswer: "Treinta y dos años" },
        { id: 7, question: "Gazeteci neden çok seyahat ediyor?", options: ["Por vacaciones", "Para hacer reportajes", "Para visitar familia"], correctAnswer: "Para hacer reportajes" },
        { id: 8, question: "Hikayeyi anlatan kişi ne iş yapıyor?", options: ["Ingeniero", "Arquitecto", "Médico"], correctAnswer: "Arquitecto" },
        { id: 9, question: "Mimar ne tür evler tasarlıyor?", options: ["Casas tradicionales", "Casas ecológicas", "Casas pequeñas"], correctAnswer: "Casas ecológicas" },
        { id: 10, question: "Komşular ne zaman birlikte yemek yiyor?", options: ["Los sábados por la tarde", "Los viernes por la noche", "Los domingos al mediodía"], correctAnswer: "Los viernes por la noche" }
    ]
};

// Diğer üniteler için genişletilmiş versiyon (31-40)

// ===== ÜNİTE 31: İŞ GÖRÜŞMESİ =====
const unit31Reading: UnitReading = {
    unitId: 31, title: "İş Görüşmesi", language: "İspanyolca", level: "A2",
    story: {
        text: "La semana pasada tuve una entrevista de trabajo muy importante en una empresa de marketing digital. Me preparé durante varios días: investigué todo sobre la empresa en internet, leí sus informes anuales y practiqué posibles preguntas delante del espejo. El día de la entrevista me desperté muy temprano y elegí mi mejor traje azul marino. Llegué quince minutos antes a las oficinas que estaban en el centro de la ciudad y esperé nervioso en la recepción. La entrevistadora se llamaba Carmen y era la directora de recursos humanos. Me hizo muchas preguntas sobre mi experiencia profesional, mis estudios universitarios, mis puntos fuertes y débiles, y por qué quería trabajar en esa empresa específicamente. También me preguntó sobre mis objetivos profesionales para los próximos cinco años. Al final me preguntó cuánto salario esperaba y qué fecha de incorporación prefería. Respondí con confianza a todas las preguntas y creo que causé una buena impresión porque Carmen sonrió varias veces. La entrevista duró una hora y cuarto. Ayer por la tarde me llamaron para darme una noticia increíble: conseguí el trabajo y empiezo el próximo lunes. Estoy muy feliz y nervioso a la vez.",
        translation: "Geçen hafta dijital pazarlama şirketinde çok önemli bir iş görüşmem vardı. Birkaç gün boyunca hazırlandım: şirket hakkında internette her şeyi araştırdım, yıllık raporlarını okudum ve aynanın önünde olası soruları pratik ettim. Görüşme günü çok erken uyandım ve en iyi lacivert takım elbisemi seçtim. Şehir merkezindeki ofislere on beş dakika erken vardım ve resepsiyonda gergin olarak bekledim. Görüşmeci Carmen adında insan kaynakları müdürüydü. Profesyonel deneyimim, üniversite eğitimim, güçlü ve zayıf yönlerim ve neden o şirkette çalışmak istediğim hakkında çok soru sordu. Ayrıca önümüzdeki beş yıl için profesyonel hedeflerimi de sordu. Sonunda ne kadar maaş beklediğimi ve hangi işe başlama tarihini tercih ettiğimi sordu. Tüm sorulara güvenle cevap verdim ve Carmen birkaç kez gülümsediği için iyi bir izlenim bıraktığımı düşünüyorum. Görüşme bir saat on beş dakika sürdü. Dün öğleden sonra beni inanılmaz bir haber vermek için aradılar: işi aldım ve önümüzdeki pazartesi başlıyorum. Aynı anda hem çok mutlu hem de gerginim."
    },
    vocabulary: [
        { word: "Entrevista", meaning: "Görüşme" },
        { word: "Salario", meaning: "Maaş" },
        { word: "Impresión", meaning: "İzlenim" },
        { word: "Recursos humanos", meaning: "İnsan kaynakları" },
        { word: "Incorporación", meaning: "İşe başlama" }
    ],
    questions: [
        { id: 1, question: "Şirket ne sektöründe?", options: ["Finanzas", "Marketing digital", "Tecnología"], correctAnswer: "Marketing digital" },
        { id: 2, question: "Görüşmeye kaç dakika erken geldi?", options: ["Diez minutos", "Quince minutos", "Veinte minutos"], correctAnswer: "Quince minutos" },
        { id: 3, question: "Görüşmeci kim?", options: ["El director general", "La directora de recursos humanos", "Un empleado"], correctAnswer: "La directora de recursos humanos" },
        { id: 4, question: "Görüşmecinin adı ne?", options: ["María", "Carmen", "Laura"], correctAnswer: "Carmen" },
        { id: 5, question: "Gelecek kaç yıllık hedefler soruldu?", options: ["Tres años", "Cinco años", "Diez años"], correctAnswer: "Cinco años" },
        { id: 6, question: "Son soru ne hakkındaydı?", options: ["Experiencia", "Salario y fecha de incorporación", "Hobbies"], correctAnswer: "Salario y fecha de incorporación" },
        { id: 7, question: "Görüşme ne kadar sürdü?", options: ["Una hora", "Una hora y cuarto", "Una hora y media"], correctAnswer: "Una hora y cuarto" },
        { id: 8, question: "İşi aldı mı?", options: ["Sí", "No", "No se sabe"], correctAnswer: "Sí" },
        { id: 9, question: "Ne zaman işe başlayacak?", options: ["Mañana", "El próximo lunes", "El mes que viene"], correctAnswer: "El próximo lunes" },
        { id: 10, question: "Şimdi nasıl hissediyor?", options: ["Solo feliz", "Solo nervioso", "Feliz y nervioso"], correctAnswer: "Feliz y nervioso" }
    ]
};

// ===== ÜNİTE 32: TELEFON GÖRÜŞMESI =====
const unit32Reading: UnitReading = {
    unitId: 32, title: "Telefon Görüşmesi", language: "İspanyolca", level: "A2",
    story: {
        text: "Hoy por la mañana recibí una llamada muy importante de mi banco mientras estaba en el trabajo. El número que aparecía en la pantalla era el del servicio de atención al cliente. Contesté inmediatamente porque pensé que podía ser algo urgente. El empleado del banco se presentó muy educadamente y me dijo que había detectado un problema con mi tarjeta de crédito. Al principio me asusté mucho y pensé que alguien había robado mis datos. Sin embargo, el empleado me explicó con calma que solo necesitaban verificar unas compras recientes porque su sistema las había marcado como sospechosas. Me preguntó si había comprado ropa por internet la semana pasada por valor de ciento veinte euros, y le confirmé que sí, había comprado unos pantalones y camisas en una tienda online. También me preguntó sobre un pago de hotel en Barcelona para mis vacaciones de Navidad y también lo confirmé. Después de verificar todos los movimientos durante unos minutos, me dijo que todo estaba en orden y que activarían la tarjeta de nuevo en las próximas veinticuatro horas. Además, aprovechó para ofrecerme un seguro de viaje con un descuento del treinta por ciento por ser cliente premium. Le dije que lo pensaría con calma y que llamaría la próxima semana para darle una respuesta. Fue una llamada larga pero útil.",
        translation: "Bugün sabah işteydim ve bankamdan çok önemli bir arama aldım. Ekranda görünen numara müşteri hizmetlerinin numarasıydı. Acil bir şey olabileceğini düşündüm ve hemen cevapladım. Banka çalışanı çok kibar bir şekilde kendini tanıttı ve kredi kartımla ilgili bir sorun tespit ettiklerini söyledi. İlk başta çok korktum ve birisinin verilerimi çaldığını düşündüm. Ancak çalışan sakin bir şekilde, sistemlerinin şüpheli olarak işaretlediği bazı son alışverişleri doğrulamaları gerektiğini açıkladı. Geçen hafta yüz yirmi euro değerinde internetten kıyafet alıp almadığımı sordu ve evet, bir online mağazadan pantolon ve gömlekler aldığımı doğruladım. Ayrıca Noel tatilim için Barcelona'da bir otel ödemesi hakkında da sordu ve onu da onayladım. Birkaç dakika boyunca tüm hareketleri doğruladıktan sonra her şeyin yolunda olduğunu ve kartı önümüzdeki yirmi dört saat içinde tekrar aktive edeceklerini söyledi. Ayrıca premium müşteri olduğum için yüzde otuz indirimli seyahat sigortası teklif etmek için fırsatı değerlendirdi. Sakin sakin düşüneceğimi ve bir cevap vermek için gelecek hafta arayacağımı söyledim. Uzun ama faydalı bir görüşmeydi."
    },
    vocabulary: [
        { word: "Llamada", meaning: "Arama" },
        { word: "Verificar", meaning: "Doğrulamak" },
        { word: "Descuento", meaning: "İndirim" },
        { word: "Sospechoso", meaning: "Şüpheli" },
        { word: "Premium", meaning: "Premium" }
    ],
    questions: [
        { id: 1, question: "Arama nereden geldi?", options: ["Del trabajo", "Del banco", "De un amigo"], correctAnswer: "Del banco" },
        { id: 2, question: "Çalışan ne sorunu bildirdi?", options: ["Robo de dinero", "Compras sospechosas", "Tarjeta caducada"], correctAnswer: "Compras sospechosas" },
        { id: 3, question: "İnternetten ne satın alınmıştı?", options: ["Electrónica", "Ropa", "Comida"], correctAnswer: "Ropa" },
        { id: 4, question: "Online alışveriş kaç euro değerindeydi?", options: ["Cien euros", "Ciento veinte euros", "Ciento cincuenta euros"], correctAnswer: "Ciento veinte euros" },
        { id: 5, question: "Otel neredeydi?", options: ["Madrid", "Barcelona", "Valencia"], correctAnswer: "Barcelona" },
        { id: 6, question: "Tatil ne zaman?", options: ["En verano", "En Navidad", "En Semana Santa"], correctAnswer: "En Navidad" },
        { id: 7, question: "Kart ne zaman aktif olacak?", options: ["Inmediatamente", "En 24 horas", "En una semana"], correctAnswer: "En 24 horas" },
        { id: 8, question: "Sigorta indirimi kaç yüzde?", options: ["Veinte por ciento", "Treinta por ciento", "Cuarenta por ciento"], correctAnswer: "Treinta por ciento" },
        { id: 9, question: "Sigorta teklifi kabul edildi mi?", options: ["Sí", "No", "Lo pensará"], correctAnswer: "Lo pensará" },
        { id: 10, question: "Görüşme nasıldı?", options: ["Corta e inútil", "Larga pero útil", "Muy estresante"], correctAnswer: "Larga pero útil" }
    ]
};

// ===== ÜNİTE 33: E-POSTA YAZMA =====
const unit33Reading: UnitReading = {
    unitId: 33, title: "E-posta Yazma", language: "İspanyolca", level: "A2",
    story: {
        text: "Esta mañana llegué a la oficina más temprano de lo habitual porque tenía que escribir varios correos electrónicos importantes antes de las reuniones del día. El primero fue para mi jefe directo, informándole detalladamente sobre el progreso del proyecto en el que estamos trabajando desde hace tres meses. Le expliqué que habíamos completado el ochenta por ciento y que terminaríamos a tiempo. El segundo correo fue para un cliente importante de Alemania, confirmando nuestra reunión por videoconferencia del próximo jueves a las diez de la mañana. También le adjunté el documento con la propuesta de presupuesto que me había pedido. El tercero fue para el departamento de recursos humanos, solicitando formalmente mis quince días de vacaciones para agosto. Tuve que rellenar un formulario online además del correo. En todos los correos utilicé un tono muy formal y profesional, empezando con 'Estimado/a' y terminando con 'Atentamente'. Antes de enviarlos, los revisé todos cuidadosamente dos veces para evitar errores de ortografía o gramática. Le pedí a un compañero que también los revisara por si acaso. También adjunté algunos documentos importantes en formato PDF. Al final del día, había respondido más de veinticinco correos y enviado cinco nuevos. Fue un día muy productivo pero cansado.",
        translation: "Bu sabah gün içindeki toplantılardan önce birkaç önemli e-posta yazmam gerektiği için ofise normalden daha erken geldim. İlki doğrudan patronuma, üzerinde üç aydır çalıştığımız projenin ilerlemesini detaylı olarak bildirmek içindi. Yüzde seksenini tamamladığımızı ve zamanında bitireceğimizi açıkladım. İkinci e-posta Almanya'dan önemli bir müşteriye, önümüzdeki perşembe sabah saat onda video konferans toplantımızı onaylamak içindi. Ayrıca benden istediği bütçe teklifi belgesini de ekledim. Üçüncüsü insan kaynakları departmanına, ağustos için on beş günlük iznimi resmi olarak talep etmek içindi. E-postanın yanı sıra online bir form doldurmam gerekti. Tüm e-postalarda çok resmi ve profesyonel bir ton kullandım, 'Sayın' ile başlayıp 'Saygılarımla' ile bitirdim. Göndermeden önce yazım veya dilbilgisi hataları olmaması için hepsini dikkatlice iki kez kontrol ettim. Her ihtimale karşı bir meslektaşımdan da kontrol etmesini istedim. Ayrıca PDF formatında bazı önemli belgeler de ekledim. Günün sonunda yirmi beşten fazla e-postaya cevap vermiş ve beş yeni e-posta göndermiştim. Çok verimli ama yorucu bir gündü."
    },
    vocabulary: [
        { word: "Correo", meaning: "E-posta" },
        { word: "Adjuntar", meaning: "Eklemek" },
        { word: "Revisar", meaning: "Kontrol etmek" },
        { word: "Presupuesto", meaning: "Bütçe" },
        { word: "Ortografía", meaning: "Yazım" }
    ],
    questions: [
        { id: 1, question: "Neden erken geldi?", options: ["Para una reunión", "Para escribir correos", "Para un proyecto"], correctAnswer: "Para escribir correos" },
        { id: 2, question: "Proje yüzde kaç tamamlandı?", options: ["Setenta por ciento", "Ochenta por ciento", "Noventa por ciento"], correctAnswer: "Ochenta por ciento" },
        { id: 3, question: "Müşteri hangi ülkeden?", options: ["Francia", "Alemania", "Italia"], correctAnswer: "Alemania" },
        { id: 4, question: "Video toplantı ne zaman?", options: ["El miércoles", "El jueves", "El viernes"], correctAnswer: "El jueves" },
        { id: 5, question: "Kaç gün izin talep etti?", options: ["Diez días", "Quince días", "Veinte días"], correctAnswer: "Quince días" },
        { id: 6, question: "E-postaları nasıl başlattı?", options: ["Con 'Hola'", "Con 'Estimado/a'", "Con 'Buenos días'"], correctAnswer: "Con 'Estimado/a'" },
        { id: 7, question: "Göndermeden önce kaç kez kontrol etti?", options: ["Una vez", "Dos veces", "Tres veces"], correctAnswer: "Dos veces" },
        { id: 8, question: "Belgeleri hangi formatta ekledi?", options: ["Word", "PDF", "Excel"], correctAnswer: "PDF" },
        { id: 9, question: "Gün sonunda kaç e-postaya cevap verdi?", options: ["Más de veinte", "Más de veinticinco", "Más de treinta"], correctAnswer: "Más de veinticinco" },
        { id: 10, question: "Gün nasıl geçti?", options: ["Aburrido", "Productivo pero cansado", "Muy tranquilo"], correctAnswer: "Productivo pero cansado" }
    ]
};

// ===== ÜNİTE 34: FİKİR BEYAN ETME =====
const unit34Reading: UnitReading = {
    unitId: 34, title: "Fikir Beyan Etme", language: "İspanyolca", level: "A2",
    story: {
        text: "Ayer tuvimos una reunión muy interesante en el trabajo sobre un nuevo proyecto. Cada uno tenía que dar su opinión sobre la mejor manera de proceder. Mi compañero Carlos empezó diciendo que en su opinión el proyecto necesitaba más tiempo antes de lanzarlo al mercado. Yo no estaba de acuerdo con él porque creo que el tiempo es esencial en los negocios. Le dije 'no comparto tu punto de vista porque la competencia está avanzando muy rápido'. Luego María dio su opinión y dijo que estaba de acuerdo conmigo en parte pero que también entendía las preocupaciones de Carlos. El jefe nos pidió que todos diéramos nuestras razones con más detalle. Al final, después de discutir durante dos horas, llegamos a un compromiso: lanzaríamos una versión beta primero para probar el producto con clientes seleccionados. Me parece que fue una decisión inteligente porque así podemos corregir errores antes del lanzamiento oficial. Personalmente pienso que trabajar en equipo y escuchar diferentes opiniones es fundamental para tomar buenas decisiones. Al final de la reunión todos estábamos de acuerdo con el plan definitivo.",
        translation: "Dün işte yeni bir proje hakkında çok ilginç bir toplantımız vardı. Herkes devam etmenin en iyi yolu hakkında fikrini söylemek zorundaydı. Meslektaşım Carlos, görüşüne göre projenin piyasaya sürülmeden önce daha fazla zamana ihtiyacı olduğunu söyleyerek başladı. Ben onunla aynı fikirde değildim çünkü iş dünyasında zamanın çok önemli olduğuna inanıyorum. Ona 'bakış açını paylaşmıyorum çünkü rekabet çok hızlı ilerliyor' dedim. Sonra María fikrini söyledi ve kısmen benimle aynı fikirde olduğunu ama Carlos'un endişelerini de anladığını belirtti. Patron hepimizden nedenlerimizi daha detaylı açıklamamızı istedi. Sonunda, iki saat tartıştıktan sonra bir uzlaşmaya vardık: önce seçilmiş müşterilerle ürünü test etmek için bir beta versiyonu çıkaracağız. Bence bu akıllıca bir karardı çünkü resmi lansmandan önce hataları düzeltebiliriz. Şahsen ekip olarak çalışmanın ve farklı görüşleri dinlemenin iyi kararlar almak için temel olduğunu düşünüyorum. Toplantının sonunda hepimiz kesin plan konusunda hemfikirdik."
    },
    vocabulary: [
        { word: "Opinión", meaning: "Fikir" },
        { word: "Estar de acuerdo", meaning: "Hemfikir olmak" },
        { word: "Compromiso", meaning: "Uzlaşma" },
        { word: "Lanzamiento", meaning: "Lansman" },
        { word: "Punto de vista", meaning: "Bakış açısı" }
    ],
    questions: [
        { id: 1, question: "Toplantı ne hakkındaydı?", options: ["Un viaje", "Un nuevo proyecto", "Un problema"], correctAnswer: "Un nuevo proyecto" },
        { id: 2, question: "Carlos'un görüşü neydi?", options: ["Lanzar ya", "Necesitar más tiempo", "Cancelar el proyecto"], correctAnswer: "Necesitar más tiempo" },
        { id: 3, question: "Anlatıcı Carlos'la hemfikir miydi?", options: ["Sí, totalmente", "No", "No se sabe"], correctAnswer: "No" },
        { id: 4, question: "María kimin fikrini destekledi?", options: ["Solo Carlos", "Solo el narrador", "Las dos partes"], correctAnswer: "Las dos partes" },
        { id: 5, question: "Toplantı kaç saat sürdü?", options: ["Una hora", "Dos horas", "Tres horas"], correctAnswer: "Dos horas" },
        { id: 6, question: "Son karar ne oldu?", options: ["Cancelar", "Lanzar versión beta", "Esperar un año"], correctAnswer: "Lanzar versión beta" },
        { id: 7, question: "Beta versiyonu kimlere sunulacak?", options: ["A todos", "A clientes seleccionados", "A los empleados"], correctAnswer: "A clientes seleccionados" },
        { id: 8, question: "Anlatıcı bu kararı nasıl buldu?", options: ["Mala", "Inteligente", "Indiferente"], correctAnswer: "Inteligente" },
        { id: 9, question: "Anlatıcıya göre iyi kararlar için ne önemli?", options: ["Trabajar solo", "Trabajar en equipo", "Tomar decisiones rápidas"], correctAnswer: "Trabajar en equipo" },
        { id: 10, question: "Toplantı sonunda herkes nasıl hissetti?", options: ["Desacuerdo", "De acuerdo", "Confundidos"], correctAnswer: "De acuerdo" }
    ]
};

// ===== ÜNİTE 35: KARaTER ÖZELLİKLERİ =====
const unit35Reading: UnitReading = {
    unitId: 35, title: "Karakter Özellikleri", language: "İspanyolca", level: "A2",
    story: {
        text: "Mi mejor amigo de la infancia se llama Pablo y tiene una personalidad muy interesante que todos admiran. Es muy extrovertido y le encanta conocer gente nueva en cualquier situación: en el trabajo, en fiestas o incluso en el supermercado. Siempre está contando chistes divertidos y haciendo reír a todos los que están a su alrededor. También es muy generoso: siempre comparte todo lo que tiene sin esperar nada a cambio. El año pasado me prestó dinero cuando lo necesitaba y nunca me lo ha reclamado. Sin embargo, nadie es perfecto. Pablo a veces es un poco impaciente y se enfada fácilmente cuando las cosas no salen exactamente como él planea. También puede ser muy terco cuando cree que tiene razón. Su hermana pequeña, Laura, es todo lo contrario a él. Es introvertida, callada y tímida con los desconocidos. Prefiere quedarse en casa leyendo un buen libro a ir a una fiesta ruidosa. Pero tiene sus propias cualidades maravillosas: es muy inteligente, siempre saca las mejores notas, y da consejos muy sabios cuando se los pides. También es muy leal y puedes confiar en ella para guardar cualquier secreto. A veces me parece increíble que sean hermanos porque son tan diferentes. Pero creo que ambos son personas maravillosas, cada uno a su manera única.",
        translation: "Çocukluk en iyi arkadaşımın adı Pablo ve herkesin hayranlık duyduğu çok ilginç bir kişiliği var. Çok dışa dönük ve her durumda yeni insanlarla tanışmayı çok seviyor: işte, partilerde hatta markette bile. Her zaman komik fıkralar anlatıyor ve çevresindeki herkesi güldürüyor. Ayrıca çok cömert: karşılığında hiçbir şey beklemeden sahip olduğu her şeyi paylaşır. Geçen yıl ihtiyacım olduğunda bana para ödünç verdi ve hiç geri istemedi. Ancak hiç kimse mükemmel değil. Pablo bazen biraz sabırsız ve işler tam planladığı gibi gitmeyince kolayca sinirleniyor. Haklı olduğuna inandığında çok inatçı da olabiliyor. Küçük kız kardeşi Laura onun tam tersi. İçe dönük, sessiz ve yabancılara karşı çekingen. Gürültülü bir partiye gitmektense evde güzel bir kitap okumayı tercih ediyor. Ama onun da kendi harika özellikleri var: çok zeki, her zaman en iyi notları alıyor ve sorduğunda çok bilge tavsiyeler veriyor. Ayrıca çok sadık ve herhangi bir sırrı saklaması için ona güvenebilirsin. Bazen kardeş olduklarına inanamıyorum çünkü çok farklılar. Ama ikisinin de harika insanlar olduğunu düşünüyorum, her biri kendi benzersiz tarzında."
    },
    vocabulary: [
        { word: "Extrovertido", meaning: "Dışa dönük" },
        { word: "Generoso", meaning: "Cömert" },
        { word: "Introvertido", meaning: "İçe dönük" },
        { word: "Impaciente", meaning: "Sabırsız" },
        { word: "Leal", meaning: "Sadık" }
    ],
    questions: [
        { id: 1, question: "Pablo nasıl biri?", options: ["Introvertido", "Extrovertido", "Tímido"], correctAnswer: "Extrovertido" },
        { id: 2, question: "Pablo ne yapmayı seviyor?", options: ["Leer libros", "Conocer gente nueva", "Estar solo"], correctAnswer: "Conocer gente nueva" },
        { id: 3, question: "Pablo'nun olumlu özelliği ne?", options: ["Egoísta", "Generoso", "Callado"], correctAnswer: "Generoso" },
        { id: 4, question: "Pablo'nun olumsuz özelliği ne?", options: ["Celoso", "Impaciente", "Perezoso"], correctAnswer: "Impaciente" },
        { id: 5, question: "Laura nasıl biri?", options: ["Extrovertida", "Introvertida", "Graciosa"], correctAnswer: "Introvertida" },
        { id: 6, question: "Laura ne yapmayı tercih ediyor?", options: ["Ir a fiestas", "Leer un libro", "Viajar"], correctAnswer: "Leer un libro" },
        { id: 7, question: "Laura'nın güçlü yönü ne?", options: ["Muy inteligente", "Muy divertida", "Muy habladora"], correctAnswer: "Muy inteligente" },
        { id: 8, question: "Laura sırları nasıl saklar?", options: ["No sabe guardar secretos", "Muy bien", "Regular"], correctAnswer: "Muy bien" },
        { id: 9, question: "Anlatıcı onların kardeş olmasına şaşırıyor mu?", options: ["Sí, porque son muy diferentes", "No", "No se menciona"], correctAnswer: "Sí, porque son muy diferentes" },
        { id: 10, question: "Anlatıcı onlar hakkında ne düşünüyor?", options: ["Son aburridos", "Son personas maravillosas", "Son normales"], correctAnswer: "Son personas maravillosas" }
    ]
};

// ===== ÜNİTE 36: SPOR RUTİNİ =====
const unit36Reading: UnitReading = {
    unitId: 36, title: "Spor Rutini", language: "İspanyolca", level: "A2",
    story: {
        text: "Desde hace exactamente seis meses he cambiado completamente mi estilo de vida y ahora hago ejercicio todos los días de la semana. Los lunes y miércoles voy al gimnasio cerca de mi casa después del trabajo y trabajo con pesas durante una hora completa. Empiezo con un calentamiento de diez minutos en la cinta de correr, luego hago ejercicios para los brazos, pecho y espalda. Los martes y jueves practico natación en la piscina municipal que está a quince minutos andando de mi apartamento. Nado entre cuarenta y cincuenta largos, dependiendo de cómo me sienta ese día. Los viernes por la tarde juego al fútbol con un grupo de amigos en el parque del barrio. Somos diez personas fijas y jugamos partidos de cinco contra cinco durante hora y media. Los fines de semana dedico las mañanas a correr al aire libre. Normalmente hago un recorrido de unos cinco kilómetros por el paseo marítimo, disfrutando del paisaje y el aire fresco. Gracias a esta rutina de ejercicio constante, he conseguido perder diez kilos en estos seis meses y me siento mucho más fuerte, con más energía durante el día y duermo mucho mejor por las noches. Mi gran objetivo para el próximo año es prepararme y correr una maratón completa de cuarenta y dos kilómetros. Ya me he apuntado a una media maratón en abril como preparación.",
        translation: "Tam altı aydır yaşam tarzımı tamamen değiştirdim ve şimdi haftanın her günü egzersiz yapıyorum. Pazartesi ve çarşamba işten sonra evimin yakınındaki spor salonuna gidiyorum ve tam bir saat ağırlık çalışıyorum. Koşu bandında on dakikalık ısınmayla başlıyorum, sonra kol, göğüs ve sırt egzersizleri yapıyorum. Salı ve perşembe dairemden on beş dakika yürüme mesafesindeki belediye havuzunda yüzme yapıyorum. O günkü hissime göre kırk ile elli tur arası yüzüyorum. Cuma öğleden sonraları mahalle parkında bir grup arkadaşla futbol oynuyorum. On kişilik sabit bir grubuz ve bir buçuk saat boyunca beşe beş maçlar yapıyoruz. Hafta sonları sabahları açık havada koşmaya ayırıyorum. Normalde sahil yolunda manzaranın ve temiz havanın tadını çıkararak yaklaşık beş kilometrelik bir tur yapıyorum. Bu sürekli egzersiz rutini sayesinde bu altı ayda on kilo vermeyi başardım ve kendimi çok daha güçlü, gün boyu daha enerjik hissediyorum ve geceleri çok daha iyi uyuyorum. Gelecek yıl için büyük hedefim kırk iki kilometrelik tam bir maratona hazırlanıp koşmak. Hazırlık olarak nisan ayındaki bir yarı maratona şimdiden kaydoldum."
    },
    vocabulary: [
        { word: "Gimnasio", meaning: "Spor salonu" },
        { word: "Pesas", meaning: "Ağırlıklar" },
        { word: "Maratón", meaning: "Maraton" },
        { word: "Calentamiento", meaning: "Isınma" },
        { word: "Natación", meaning: "Yüzme" }
    ],
    questions: [
        { id: 1, question: "Ne zamandır egzersiz yapıyor?", options: ["Tres meses", "Seis meses", "Un año"], correctAnswer: "Seis meses" },
        { id: 2, question: "Pazartesi ve çarşamba ne yapıyor?", options: ["Nadar", "Ir al gimnasio", "Correr"], correctAnswer: "Ir al gimnasio" },
        { id: 3, question: "Isınma ne kadar sürüyor?", options: ["Cinco minutos", "Diez minutos", "Quince minutos"], correctAnswer: "Diez minutos" },
        { id: 4, question: "Salı günleri ne yapıyor?", options: ["Correr", "Natación", "Fútbol"], correctAnswer: "Natación" },
        { id: 5, question: "Futbol kaç dakika sürüyor?", options: ["Una hora", "Una hora y media", "Dos horas"], correctAnswer: "Una hora y media" },
        { id: 6, question: "Hafta sonu kaç km koşuyor?", options: ["Tres kilómetros", "Cinco kilómetros", "Diez kilómetros"], correctAnswer: "Cinco kilómetros" },
        { id: 7, question: "Kaç kilo verdi?", options: ["Cinco kilos", "Diez kilos", "Quince kilos"], correctAnswer: "Diez kilos" },
        { id: 8, question: "Tam maraton kaç kilometre?", options: ["Veintiuno", "Cuarenta y dos", "Cincuenta"], correctAnswer: "Cuarenta y dos" },
        { id: 9, question: "Yarı maraton ne zaman?", options: ["En marzo", "En abril", "En mayo"], correctAnswer: "En abril" },
        { id: 10, question: "Egzersiz uyku kalitesini nasıl etkiledi?", options: ["La empeoró", "No cambió", "Duerme mucho mejor"], correctAnswer: "Duerme mucho mejor" }
    ]
};

// ===== ÜNİTE 37: MÜZİK VE SANAT =====
const unit37Reading: UnitReading = {
    unitId: 37, title: "Müzik ve Sanat", language: "İspanyolca", level: "A2",
    story: {
        text: "El arte y la música siempre han sido muy importantes en mi vida desde que era muy pequeño. Cuando tenía solo siete años, mis padres me apuntaron a clases de piano y desde entonces no he dejado de tocar. Ahora, con veintiocho años, toco en un pequeño grupo de jazz los fines de semana en bares y cafeterías de la ciudad. Somos cuatro músicos: yo al piano, un baterista, un bajista y una cantante. Ensayamos todos los jueves por la noche en el garaje de mi casa. Además de la música, me encanta el arte visual. Visito museos y galerías de arte cada vez que puedo, al menos una vez al mes. El mes pasado fui a una exposición temporal de Picasso en el museo de arte moderno y fue absolutamente increíble. Me impresionaron especialmente sus obras del período azul. En mi apartamento tengo muchos cuadros y pósters de arte que he comprado en mercadillos de antigüedades y tiendas de segunda mano durante años. Mi estilo favorito es el impresionismo francés porque me gustan los colores vivos y las pinceladas sueltas de artistas como Monet y Renoir. Me transmiten paz y alegría. Algún día me gustaría aprender a pintar yo mismo. Ya me he apuntado a un curso de pintura al óleo que empieza el mes que viene.",
        translation: "Sanat ve müzik çok küçükken beri hayatımda her zaman çok önemli oldu. Sadece yedi yaşındayken ailem beni piyano derslerine yazdırdı ve o zamandan beri çalmayı bırakmadım. Şimdi yirmi sekiz yaşında, hafta sonları şehirdeki bar ve kafelerde küçük bir caz grubunda çalıyorum. Dört müzisyeniz: ben piyanoda, bir baterist, bir basçı ve bir şarkıcı. Her perşembe akşamı evimin garajında prova yapıyoruz. Müziğin yanı sıra görsel sanatları da çok seviyorum. Elimden geldiğince, ayda en az bir kez müze ve sanat galerilerini ziyaret ediyorum. Geçen ay modern sanat müzesinde geçici bir Picasso sergisine gittim ve kesinlikle inanılmazdı. Özellikle mavi dönem eserleri beni çok etkiledi. Dairemde yıllar boyunca antika bit pazarlarından ve ikinci el dükkanlarından aldığım birçok tablo ve sanat posteri var. En sevdiğim tarz Fransız empresyonizmi çünkü Monet ve Renoir gibi sanatçıların canlı renkleri ve serbest fırça darbelerini seviyorum. Bana huzur ve neşe veriyorlar. Bir gün kendim resim yapmayı öğrenmek istiyorum. Gelecek ay başlayan bir yağlı boya kursuna şimdiden kaydoldum."
    },
    vocabulary: [
        { word: "Exposición", meaning: "Sergi" },
        { word: "Cuadro", meaning: "Tablo" },
        { word: "Impresionismo", meaning: "Empresyonizm" },
        { word: "Ensayar", meaning: "Prova yapmak" },
        { word: "Pinceladas", meaning: "Fırça darbeleri" }
    ],
    questions: [
        { id: 1, question: "Kaç yaşında piyano çalmaya başladı?", options: ["Cinco años", "Siete años", "Diez años"], correctAnswer: "Siete años" },
        { id: 2, question: "Grupta kaç müzisyen var?", options: ["Tres", "Cuatro", "Cinco"], correctAnswer: "Cuatro" },
        { id: 3, question: "Ne zaman prova yapıyorlar?", options: ["Los martes", "Los jueves", "Los sábados"], correctAnswer: "Los jueves" },
        { id: 4, question: "Geçen ay kimin sergisine gitti?", options: ["Monet", "Picasso", "Van Gogh"], correctAnswer: "Picasso" },
        { id: 5, question: "Picasso'nun hangi dönemi etkiledi?", options: ["El período rosa", "El período azul", "El cubismo"], correctAnswer: "El período azul" },
        { id: 6, question: "Tabloları nereden aldı?", options: ["Galerías de arte", "Mercadillos y tiendas de segunda mano", "Internet"], correctAnswer: "Mercadillos y tiendas de segunda mano" },
        { id: 7, question: "En sevdiği sanat akımı ne?", options: ["Cubismo", "Impresionismo francés", "Renacimiento"], correctAnswer: "Impresionismo francés" },
        { id: 8, question: "Hangi empresyonist sanatçıları seviyor?", options: ["Picasso y Dalí", "Monet y Renoir", "Van Gogh y Gauguin"], correctAnswer: "Monet y Renoir" },
        { id: 9, question: "Ne öğrenmek istiyor?", options: ["Escultura", "Pintura", "Fotografía"], correctAnswer: "Pintura" },
        { id: 10, question: "Resim kursu ne zaman başlıyor?", options: ["Esta semana", "El mes que viene", "El año que viene"], correctAnswer: "El mes que viene" }
    ]
};

// ===== ÜNİTE 38: SİNEMA VE DİZİLER =====
const unit38Reading: UnitReading = {
    unitId: 38, title: "Sinema ve Diziler", language: "İspanyolca", level: "A2",
    story: {
        text: "Soy un gran aficionado al cine y las series de televisión desde que era adolescente. Voy al cine al menos dos veces al mes, normalmente los viernes por la noche después de una semana larga de trabajo. Siempre compro palomitas grandes y un refresco para disfrutar durante la película. Mi género favorito es la ciencia ficción porque me fascinan las historias sobre el futuro, los viajes espaciales y la tecnología avanzada. Sin embargo, también disfruto mucho las comedias románticas porque me hacen reír y me ponen de buen humor. En casa tengo suscripción a tres plataformas de streaming diferentes: Netflix, HBO Max y Amazon Prime. Ahora mismo estoy viendo una serie española muy popular que se llama 'La Casa de Papel' y trata sobre un grupo de atracadores que planean el robo perfecto. Tiene cinco temporadas y cada episodio dura aproximadamente una hora. Me fascina porque cada capítulo termina con un cliffhanger que te deja con ganas de ver el siguiente inmediatamente. El año pasado tuve la suerte de asistir a un festival de cine independiente en mi ciudad y fue una experiencia absolutamente increíble. Conocí personalmente a varios directores y actores españoles que presentaban sus películas. Incluso conseguí un autógrafo de mi actriz favorita. Mi sueño es visitar algún día Hollywood y ver dónde hacen las películas más famosas del mundo.",
        translation: "Gençliğimden beri sinema ve televizyon dizilerinin büyük bir hayranıyım. Ayda en az iki kez, genellikle uzun bir iş haftasından sonra cuma geceleri sinemaya gidiyorum. Film boyunca tadını çıkarmak için her zaman büyük patlamış mısır ve bir meşrubat alıyorum. En sevdiğim tür bilim kurgu çünkü gelecek, uzay yolculukları ve ileri teknoloji hakkındaki hikayeler beni büyülüyor. Ancak romantik komedilerden de çok keyif alıyorum çünkü beni güldürüyor ve iyi bir ruh haline sokuyor. Evde üç farklı yayın platformuna aboneliğim var: Netflix, HBO Max ve Amazon Prime. Şu anda 'La Casa de Papel' adında mükemmel soygunu planlayan bir grup soyguncu hakkında çok popüler bir İspanyol dizisi izliyorum. Beş sezonu var ve her bölüm yaklaşık bir saat sürüyor. Beni büyülüyor çünkü her bölüm hemen bir sonrakini izlemek istemenizi sağlayan bir cliffhanger ile bitiyor. Geçen yıl şehrimde bağımsız bir film festivaline katılma şansım oldu ve kesinlikle inanılmaz bir deneyimdi. Filmlerini sunan birçok İspanyol yönetmen ve oyuncuyla şahsen tanıştım. Hatta en sevdiğim aktristten imza bile aldım. Hayalim bir gün Hollywood'u ziyaret etmek ve dünyanın en ünlü filmlerinin yapıldığı yeri görmek."
    },
    vocabulary: [
        { word: "Género", meaning: "Tür" },
        { word: "Temporada", meaning: "Sezon" },
        { word: "Festival", meaning: "Festival" },
        { word: "Cliffhanger", meaning: "Merak uyandıran son" },
        { word: "Palomitas", meaning: "Patlamış mısır" }
    ],
    questions: [
        { id: 1, question: "Ayda kaç kez sinemaya gidiyor?", options: ["Una vez", "Dos veces", "Cuatro veces"], correctAnswer: "Dos veces" },
        { id: 2, question: "Sinemada ne alıyor?", options: ["Solo bebida", "Palomitas y refresco", "Nada"], correctAnswer: "Palomitas y refresco" },
        { id: 3, question: "En sevdiği tür ne?", options: ["Comedia", "Ciencia ficción", "Terror"], correctAnswer: "Ciencia ficción" },
        { id: 4, question: "Kaç platform aboneliği var?", options: ["Una", "Dos", "Tres"], correctAnswer: "Tres" },
        { id: 5, question: "İzlediği dizi ne hakkında?", options: ["Amor", "Un atraco", "Policías"], correctAnswer: "Un atraco" },
        { id: 6, question: "Dizi kaç sezon?", options: ["Tres", "Cuatro", "Cinco"], correctAnswer: "Cinco" },
        { id: 7, question: "Her bölüm ne kadar sürüyor?", options: ["Treinta minutos", "Una hora", "Dos horas"], correctAnswer: "Una hora" },
        { id: 8, question: "Festivalde kimleri tanıdı?", options: ["Fans", "Directores y actores", "Escritores"], correctAnswer: "Directores y actores" },
        { id: 9, question: "En sevdiği aktristen ne aldı?", options: ["Una foto", "Un autógrafo", "Un abrazo"], correctAnswer: "Un autógrafo" },
        { id: 10, question: "Hayali nereyi ziyaret etmek?", options: ["París", "Hollywood", "Tokio"], correctAnswer: "Hollywood" }
    ]
};

// ===== ÜNİTE 39: TEKNOLOJİ =====
const unit39Reading: UnitReading = {
    unitId: 39, title: "Teknoloji", language: "İspanyolca", level: "A2",
    story: {
        text: "La tecnología ha cambiado completamente mi vida diaria en los últimos años de maneras que nunca habría imaginado. Uso mi teléfono inteligente para casi todo lo que hago: leo las noticias por la mañana mientras desayuno, envío mensajes a mis amigos y familia, hago fotos y videos de mis viajes, y escucho música durante mi camino al trabajo. En el trabajo uso el ordenador aproximadamente ocho horas al día para escribir informes, enviar correos electrónicos y hacer presentaciones en PowerPoint. También tengo una tableta que uso principalmente por las noches para leer libros electrónicos en la cama, me resulta muy cómoda porque puedo ajustar el brillo de la pantalla. Tengo un reloj inteligente que me ayuda a mantenerme activo: cuenta todos mis pasos durante el día, controla la calidad de mi sueño por las noches, y me recuerda que tengo que levantarme y moverme si llevo sentado demasiado tiempo. El mes pasado compré un asistente de voz para mi casa, uno de esos altavoces inteligentes que puedes encontrar en cualquier tienda de electrónica. Ahora puedo controlar las luces y la música de casa simplemente diciendo comandos de voz, sin necesidad de tocar ningún botón. También lo uso para poner alarmas, escuchar el pronóstico del tiempo y hacer listas de la compra. Algunas personas mayores de mi familia, especialmente mis abuelos, dicen que dependo demasiado de la tecnología y que debería desconectar más. Tienen algo de razón, pero sinceramente creo que la tecnología me hace la vida mucho más fácil y productiva.",
        translation: "Teknoloji son yıllarda günlük hayatımı hiç hayal etmeyeceğim şekillerde tamamen değiştirdi. Akıllı telefonumu yaptığım hemen hemen her şey için kullanıyorum: sabah kahvaltı ederken haberler okuyorum, arkadaşlarıma ve aileme mesajlar gönderiyorum, seyahatlerimin fotoğraflarını ve videolarını çekiyorum, ve işe giderken müzik dinliyorum. İşte rapor yazmak, e-posta göndermek ve PowerPoint sunumları yapmak için günde yaklaşık sekiz saat bilgisayar kullanıyorum. Ayrıca geceleri yatakta e-kitap okumak için kullandığım bir tabletim var, ekran parlaklığını ayarlayabildiğim için çok kullanışlı buluyorum. Aktif kalmama yardımcı olan bir akıllı saatim var: gün boyunca tüm adımlarımı sayıyor, geceleri uyku kalitemi izliyor ve çok uzun süre oturuyorsam kalkıp hareket etmemi hatırlatıyor. Geçen ay evim için bir sesli asistan aldım, herhangi bir elektronik mağazasında bulabileceğiniz akıllı hoparlörlerden biri. Şimdi hiçbir düğmeye dokunmadan sadece sesli komutlar söyleyerek evdeki ışıkları ve müziği kontrol edebiliyorum. Ayrıca alarm kurmak, hava durumu tahminini dinlemek ve alışveriş listesi yapmak için de kullanıyorum. Ailemdeki bazı yaşlı insanlar, özellikle büyükanne ve büyükbabalarım, teknolojiye çok bağımlı olduğumu ve daha fazla bağlantıyı kesmem gerektiğini söylüyor. Bir nebze haklılar ama dürüstçe teknolojinin hayatımı çok daha kolay ve verimli hale getirdiğine inanıyorum."
    },
    vocabulary: [
        { word: "Teléfono inteligente", meaning: "Akıllı telefon" },
        { word: "Tableta", meaning: "Tablet" },
        { word: "Asistente de voz", meaning: "Sesli asistan" },
        { word: "Ordenador", meaning: "Bilgisayar" },
        { word: "Pronóstico", meaning: "Tahmin" }
    ],
    questions: [
        { id: 1, question: "Telefonu ne için kullanıyor?", options: ["Solo llamar", "Solo mensajes", "Para casi todo"], correctAnswer: "Para casi todo" },
        { id: 2, question: "İşte günde kaç saat bilgisayar kullanıyor?", options: ["Cuatro horas", "Seis horas", "Ocho horas"], correctAnswer: "Ocho horas" },
        { id: 3, question: "Tableti ne için kullanıyor?", options: ["Para juegos", "Para leer e-books", "Para películas"], correctAnswer: "Para leer e-books" },
        { id: 4, question: "Tableti nerede kullanıyor?", options: ["En el trabajo", "En la cama", "En el transporte"], correctAnswer: "En la cama" },
        { id: 5, question: "Akıllı saat ne yapıyor?", options: ["Solo la hora", "Cuenta pasos y controla sueño", "GPS"], correctAnswer: "Cuenta pasos y controla sueño" },
        { id: 6, question: "Sesli asistanı ne zaman aldı?", options: ["Hace una semana", "El mes pasado", "Hace un año"], correctAnswer: "El mes pasado" },
        { id: 7, question: "Sesli asistan ne kontrol ediyor?", options: ["Puertas", "Luces y música", "Calefacción"], correctAnswer: "Luces y música" },
        { id: 8, question: "Sesli asistan başka ne işe yarıyor?", options: ["Videollamadas", "Alarmas y listas de compra", "Juegos"], correctAnswer: "Alarmas y listas de compra" },
        { id: 9, question: "Kim teknolojiye bağımlı olduğunu söylüyor?", options: ["Sus amigos", "Sus abuelos", "Sus compañeros"], correctAnswer: "Sus abuelos" },
        { id: 10, question: "Teknoloji hakkında ne düşünüyor?", options: ["Es mala", "Hace la vida más fácil", "Es innecesaria"], correctAnswer: "Hace la vida más fácil" }
    ]
};

// ===== ÜNİTE 40: SOSYAL MEDYA =====
const unit40Reading: UnitReading = {
    unitId: 40, title: "Sosyal Medya", language: "İspanyolca", level: "A2",
    story: {
        text: "Las redes sociales ocupan una parte muy importante de mi día a día, como ocurre con la mayoría de las personas de mi generación. Por la mañana, lo primero que hago antes incluso de levantarme de la cama es revisar todas mis notificaciones en el teléfono: mensajes nuevos, comentarios en mis fotos y likes en mis publicaciones. Uso varias plataformas diferentes para propósitos distintos. Instagram es mi red social favorita y la uso para compartir fotos de mis viajes, de mi comida en restaurantes bonitos, y de mis momentos especiales con amigos. También me gusta ver las historias de las personas que sigo, especialmente de influencers de viajes y cocina. LinkedIn lo uso exclusivamente para mi vida profesional: mantengo contactos con compañeros de trabajo anteriores, busco ofertas de trabajo interesantes, y comparto artículos sobre mi industria. Twitter me sirve principalmente para estar al día con las noticias de actualidad y seguir debates sobre temas que me interesan, como tecnología y deportes. También tengo TikTok en mi teléfono pero lo uso solo de forma pasiva para ver videos graciosos y tutoriales, nunca he publicado nada en esa plataforma porque me da vergüenza. Intento limitar mi uso de redes sociales a una hora al día como máximo, pero sinceramente a veces paso mucho más tiempo del que debería, especialmente los fines de semana. Mis padres y abuelos no entienden por qué paso tanto tiempo mirando el teléfono y creen que es una pérdida de tiempo. Sin embargo, para mi generación las redes sociales son algo completamente normal y una forma importante de mantenernos conectados con amigos y familia.",
        translation: "Sosyal medya jenerasyonumdaki çoğu insanda olduğu gibi günlük hayatımda çok önemli bir yer kaplıyor. Sabahları yataktan kalkmadan önce bile ilk yaptığım şey telefondaki tüm bildirimlerimi kontrol etmek: yeni mesajlar, fotoğraflarımdaki yorumlar ve paylaşımlarımdaki beğeniler. Farklı amaçlar için birkaç farklı platform kullanıyorum. Instagram en sevdiğim sosyal medya ve seyahatlerimin, güzel restoranlardaki yemeklerimin ve arkadaşlarımla özel anlarımın fotoğraflarını paylaşmak için kullanıyorum. Takip ettiğim kişilerin, özellikle seyahat ve yemek fenomenlerinin hikayelerini izlemeyi de seviyorum. LinkedIn'i yalnızca profesyonel hayatım için kullanıyorum: eski iş arkadaşlarımla iletişimde kalıyorum, ilginç iş ilanları arıyorum ve sektörümle ilgili makaleler paylaşıyorum. Twitter esas olarak güncel haberlerden haberdar olmam ve beni ilgilendiren teknoloji ve spor gibi konulardaki tartışmaları takip etmem için işe yarıyor. Telefonumda TikTok da var ama sadece pasif olarak komik videolar ve öğreticiler izlemek için kullanıyorum, o platformda hiçbir şey paylaşmadım çünkü utanıyorum. Sosyal medya kullanımımı günde en fazla bir saatle sınırlamaya çalışıyorum ama dürüst olmak gerekirse bazen özellikle hafta sonları olması gerekenden çok daha fazla zaman geçiriyorum. Ailem ve büyükanne-büyükbabalarım neden telefona bakarak bu kadar zaman geçirdiğimi anlamıyorlar ve bunun zaman kaybı olduğunu düşünüyorlar. Ancak benim nesil için sosyal medya tamamen normal bir şey ve arkadaşlarımız ve ailemizle bağlantıda kalmamızın önemli bir yolu."
    },
    vocabulary: [
        { word: "Redes sociales", meaning: "Sosyal medya" },
        { word: "Notificaciones", meaning: "Bildirimler" },
        { word: "Publicar", meaning: "Paylaşmak" },
        { word: "Influencer", meaning: "Fenomen" },
        { word: "Generación", meaning: "Nesil" }
    ],
    questions: [
        { id: 1, question: "Sabah ilk ne yapıyor?", options: ["Desayunar", "Ducharse", "Revisar notificaciones"], correctAnswer: "Revisar notificaciones" },
        { id: 2, question: "En sevdiği platform hangisi?", options: ["Twitter", "Instagram", "TikTok"], correctAnswer: "Instagram" },
        { id: 3, question: "Instagram'da ne paylaşıyor?", options: ["Noticias", "Fotos de viajes y comida", "Trabajo"], correctAnswer: "Fotos de viajes y comida" },
        { id: 4, question: "Hangi fenomenleri takip ediyor?", options: ["De política", "De viajes y cocina", "De música"], correctAnswer: "De viajes y cocina" },
        { id: 5, question: "LinkedIn'i ne için kullanıyor?", options: ["Entretenimiento", "Vida profesional", "Compras"], correctAnswer: "Vida profesional" },
        { id: 6, question: "TikTok'ta ne yapıyor?", options: ["Publica videos", "Solo mira videos", "Hace directos"], correctAnswer: "Solo mira videos" },
        { id: 7, question: "Neden TikTok'ta paylaşım yapmıyor?", options: ["No tiene tiempo", "Le da vergüenza", "No le gusta"], correctAnswer: "Le da vergüenza" },
        { id: 8, question: "Günde kaç saat kullanmayı hedefliyor?", options: ["Treinta minutos", "Una hora", "Dos horas"], correctAnswer: "Una hora" },
        { id: 9, question: "Ailesi sosyal medya hakkında ne düşünüyor?", options: ["Es muy bueno", "Es una pérdida de tiempo", "Es normal"], correctAnswer: "Es una pérdida de tiempo" },
        { id: 10, question: "Anlatıcıya göre sosyal medya nesli için ne ifade ediyor?", options: ["Algo raro", "Algo normal e importante", "Algo malo"], correctAnswer: "Algo normal e importante" }
    ]
};

// ===== ÜNİTE 41: OFİS YAŞAMI =====
const unit41Reading: UnitReading = {
    unitId: 41, title: "Ofis Yaşamı", language: "İspanyolca", level: "A2",
    story: {
        text: "Trabajo en una oficina moderna en el centro de la ciudad desde hace tres años. Mi día laboral empieza a las nueve de la mañana cuando llego y enciendo mi ordenador. Lo primero que hago es revisar mis correos electrónicos y responder a los más urgentes. Después tengo una reunión de equipo todos los lunes a las diez para planificar la semana. Mi jefa es muy organizada y siempre tiene una agenda clara. Trabajo en un espacio abierto con otros veinte compañeros. Algunos días hay mucho ruido y es difícil concentrarse, pero tenemos salas de reuniones pequeñas donde podemos trabajar en silencio. A las dos hacemos una pausa para el almuerzo de una hora. La mayoría de mis compañeros traen comida de casa, pero yo prefiero ir a la cafetería del edificio. Por las tardes suelo tener reuniones con clientes por videoconferencia. Termino mi jornada a las seis. Me gusta mi trabajo porque aprendo cosas nuevas cada día y mis compañeros son muy simpáticos.",
        translation: "Üç yıldır şehir merkezinde modern bir ofiste çalışıyorum. İş günüm sabah dokuzda gelip bilgisayarımı açtığımda başlıyor. İlk yaptığım şey e-postalarımı kontrol etmek ve en acil olanlara cevap vermek. Sonra her pazartesi saat onda haftayı planlamak için ekip toplantımız var. Patronum çok organize ve her zaman net bir gündemi var. Yirmi başka meslektaşımla açık bir alanda çalışıyorum. Bazı günler çok gürültü var ve konsantre olmak zor, ama sessizce çalışabileceğimiz küçük toplantı odalarımız var. İkide bir saatlik öğle yemeği molası veriyoruz. Meslektaşlarımın çoğu evden yemek getiriyor ama ben binanın kafeteryasına gitmeyi tercih ediyorum. Öğleden sonraları genellikle video konferans üzerinden müşterilerle toplantılarım oluyor. İş günümü altıda bitiriyorum. İşimi seviyorum çünkü her gün yeni şeyler öğreniyorum ve meslektaşlarım çok cana yakın."
    },
    vocabulary: [
        { word: "Jornada laboral", meaning: "İş günü" },
        { word: "Espacio abierto", meaning: "Açık alan" },
        { word: "Concentrarse", meaning: "Konsantre olmak" },
        { word: "Videoconferencia", meaning: "Video konferans" },
        { word: "Agenda", meaning: "Gündem" }
    ],
    questions: [
        { id: 1, question: "Kaç yıldır bu ofiste çalışıyor?", options: ["Un año", "Dos años", "Tres años"], correctAnswer: "Tres años" },
        { id: 2, question: "İş günü saat kaçta başlıyor?", options: ["A las ocho", "A las nueve", "A las diez"], correctAnswer: "A las nueve" },
        { id: 3, question: "Ekip toplantısı ne zaman?", options: ["Los viernes", "Los lunes", "Todos los días"], correctAnswer: "Los lunes" },
        { id: 4, question: "Kaç meslektaşla çalışıyor?", options: ["Diez", "Veinte", "Treinta"], correctAnswer: "Veinte" },
        { id: 5, question: "Gürültülü olunca nerede çalışıyor?", options: ["En casa", "En salas de reuniones", "En la cafetería"], correctAnswer: "En salas de reuniones" },
        { id: 6, question: "Öğle yemeği molası kaç saat?", options: ["Media hora", "Una hora", "Dos horas"], correctAnswer: "Una hora" },
        { id: 7, question: "Öğle yemeğini nerede yiyor?", options: ["En casa", "En la cafetería del edificio", "En un restaurante"], correctAnswer: "En la cafetería del edificio" },
        { id: 8, question: "Öğleden sonra ne yapıyor?", options: ["Trabaja solo", "Reuniones con clientes", "Descansa"], correctAnswer: "Reuniones con clientes" },
        { id: 9, question: "İş günü saat kaçta bitiyor?", options: ["A las cinco", "A las seis", "A las siete"], correctAnswer: "A las seis" },
        { id: 10, question: "İşini neden seviyor?", options: ["El salario", "Aprende cosas nuevas", "El horario"], correctAnswer: "Aprende cosas nuevas" }
    ]
};

// ===== ÜNİTE 42: ÇEVRE VE DOĞA =====
const unit42Reading: UnitReading = {
    unitId: 42, title: "Çevre ve Doğa", language: "İspanyolca", level: "A2",
    story: {
        text: "El medio ambiente es muy importante para mí y trato de cuidar el planeta en mi vida diaria. En casa siempre separamos la basura: tenemos cuatro contenedores diferentes para papel, plástico, vidrio y residuos orgánicos. Nunca tiramos aceite por el fregadero porque contamina el agua. En vez de usar bolsas de plástico, llevamos bolsas de tela reutilizables cuando vamos al supermercado. También ahorramos agua cerrando el grifo mientras nos lavamos los dientes. Para ir al trabajo uso la bicicleta o el transporte público en lugar del coche porque produce menos contaminación. Los fines de semana me gusta hacer excursiones a la montaña con mi familia. Hay un parque natural precioso a una hora de mi ciudad donde podemos ver muchos animales y plantas. El mes pasado plantamos diez árboles en un proyecto de reforestación. Creo que todos debemos hacer pequeñas acciones para proteger nuestro planeta para las futuras generaciones.",
        translation: "Çevre benim için çok önemli ve günlük hayatımda gezegeni korumaya çalışıyorum. Evde her zaman çöpleri ayırıyoruz: kağıt, plastik, cam ve organik atıklar için dört farklı konteynerimiz var. Asla lavaboya yağ dökmüyoruz çünkü suyu kirletiyor. Plastik poşet kullanmak yerine markete giderken yeniden kullanılabilir bez çantalar götürüyoruz. Ayrıca dişlerimizi fırçalarken musluğu kapatarak su tasarrufu yapıyoruz. İşe gitmek için araba yerine bisiklet veya toplu taşıma kullanıyorum çünkü daha az kirlilik üretiyor. Hafta sonları ailemle dağa gezi yapmayı seviyorum. Şehrimden bir saat uzaklıkta birçok hayvan ve bitki görebildiğimiz güzel bir doğal park var. Geçen ay bir ağaçlandırma projesinde on ağaç diktik. Herkesin gezegenimizi gelecek nesiller için korumak için küçük eylemler yapması gerektiğine inanıyorum."
    },
    vocabulary: [
        { word: "Medio ambiente", meaning: "Çevre" },
        { word: "Reciclar", meaning: "Geri dönüştürmek" },
        { word: "Contaminación", meaning: "Kirlilik" },
        { word: "Reutilizable", meaning: "Yeniden kullanılabilir" },
        { word: "Reforestación", meaning: "Ağaçlandırma" }
    ],
    questions: [
        { id: 1, question: "Evde kaç farklı konteyner var?", options: ["Dos", "Tres", "Cuatro"], correctAnswer: "Cuatro" },
        { id: 2, question: "Neden lavaboya yağ dökülmüyor?", options: ["Es sucio", "Contamina el agua", "Huele mal"], correctAnswer: "Contamina el agua" },
        { id: 3, question: "Markete ne götürüyorlar?", options: ["Bolsas de plástico", "Bolsas de tela", "Cajas"], correctAnswer: "Bolsas de tela" },
        { id: 4, question: "Su tasarrufu için ne yapıyorlar?", options: ["Duchas cortas", "Cerrar el grifo", "No lavar"], correctAnswer: "Cerrar el grifo" },
        { id: 5, question: "İşe nasıl gidiyor?", options: ["En coche", "En bicicleta o transporte público", "Caminando"], correctAnswer: "En bicicleta o transporte público" },
        { id: 6, question: "Doğal park ne kadar uzakta?", options: ["Media hora", "Una hora", "Dos horas"], correctAnswer: "Una hora" },
        { id: 7, question: "Geçen ay ne yaptılar?", options: ["Limpiaron un río", "Plantaron árboles", "Recogieron basura"], correctAnswer: "Plantaron árboles" },
        { id: 8, question: "Kaç ağaç diktiler?", options: ["Cinco", "Diez", "Veinte"], correctAnswer: "Diez" },
        { id: 9, question: "Hafta sonları nereye gidiyorlar?", options: ["A la playa", "A la montaña", "Al parque de la ciudad"], correctAnswer: "A la montaña" },
        { id: 10, question: "Gezegeni kim için korumak istiyor?", options: ["Para sí mismo", "Para las futuras generaciones", "Para los animales"], correctAnswer: "Para las futuras generaciones" }
    ]
};

// ===== ÜNİTE 43: SAĞLIKLI YAŞAM =====
const unit43Reading: UnitReading = {
    unitId: 43, title: "Sağlıklı Yaşam", language: "İspanyolca", level: "A2",
    story: {
        text: "Hace un año decidí cambiar mi estilo de vida para estar más sano. Antes comía mucha comida rápida y no hacía nada de ejercicio. Ahora sigo una dieta equilibrada con muchas frutas, verduras, proteínas y cereales integrales. Desayuno siempre antes de salir de casa: normalmente tomo yogur con fruta y avena. Evito los refrescos azucarados y bebo al menos dos litros de agua al día. También reduje el consumo de sal y azúcar. Para el ejercicio, voy al gimnasio tres veces por semana y los fines de semana salgo a correr por el parque. Intento dormir ocho horas cada noche porque el descanso es fundamental para la salud. Desde que cambié mis hábitos, he perdido cinco kilos, tengo más energía durante el día y me enfermo menos. Mi médico está muy contento con mis análisis de sangre. Lo más difícil fue dejar los dulces, pero ahora prefiero comer fruta cuando tengo antojo de algo dulce. Recomiendo a todos que cuiden su salud porque es lo más importante que tenemos.",
        translation: "Bir yıl önce daha sağlıklı olmak için yaşam tarzımı değiştirmeye karar verdim. Önceden çok fast food yiyor ve hiç egzersiz yapmıyordum. Şimdi çok meyve, sebze, protein ve tam tahıllarla dengeli bir diyet uyguluyorum. Evden çıkmadan önce her zaman kahvaltı yapıyorum: normalde yulaf ve meyve ile yoğurt yiyorum. Şekerli meşrubatlardan kaçınıyorum ve günde en az iki litre su içiyorum. Ayrıca tuz ve şeker tüketimimi azalttım. Egzersiz için haftada üç kez spor salonuna gidiyorum ve hafta sonları parkta koşuya çıkıyorum. Dinlenme sağlık için temel olduğu için her gece sekiz saat uyumaya çalışıyorum. Alışkanlıklarımı değiştirdiğimden beri beş kilo verdim, gün boyu daha enerjik hissediyorum ve daha az hastalanıyorum. Doktorum kan tahlillerimden çok memnun. En zor şey tatlıları bırakmaktı ama şimdi tatlı bir şey canım istediğinde meyve yemeyi tercih ediyorum. Herkese sağlığına özen göstermesini öneriyorum çünkü sahip olduğumuz en önemli şey."
    },
    vocabulary: [
        { word: "Dieta equilibrada", meaning: "Dengeli diyet" },
        { word: "Cereales integrales", meaning: "Tam tahıllar" },
        { word: "Hábitos", meaning: "Alışkanlıklar" },
        { word: "Análisis de sangre", meaning: "Kan tahlili" },
        { word: "Antojo", meaning: "Canı çekme" }
    ],
    questions: [
        { id: 1, question: "Yaşam tarzını ne zaman değiştirdi?", options: ["Hace seis meses", "Hace un año", "Hace dos años"], correctAnswer: "Hace un año" },
        { id: 2, question: "Önceden ne yiyordu?", options: ["Comida sana", "Comida rápida", "Solo frutas"], correctAnswer: "Comida rápida" },
        { id: 3, question: "Kahvaltıda ne yiyor?", options: ["Tostadas", "Yogur con fruta y avena", "Huevos"], correctAnswer: "Yogur con fruta y avena" },
        { id: 4, question: "Günde kaç litre su içiyor?", options: ["Un litro", "Dos litros", "Tres litros"], correctAnswer: "Dos litros" },
        { id: 5, question: "Haftada kaç kez spor salonuna gidiyor?", options: ["Dos veces", "Tres veces", "Cuatro veces"], correctAnswer: "Tres veces" },
        { id: 6, question: "Her gece kaç saat uyumaya çalışıyor?", options: ["Seis horas", "Siete horas", "Ocho horas"], correctAnswer: "Ocho horas" },
        { id: 7, question: "Kaç kilo verdi?", options: ["Tres kilos", "Cinco kilos", "Diez kilos"], correctAnswer: "Cinco kilos" },
        { id: 8, question: "En zor şey neydi?", options: ["El ejercicio", "Dejar los dulces", "Beber agua"], correctAnswer: "Dejar los dulces" },
        { id: 9, question: "Tatlı istediğinde ne yiyor?", options: ["Chocolate", "Fruta", "Galletas"], correctAnswer: "Fruta" },
        { id: 10, question: "Doktor ne hakkında memnun?", options: ["Su peso", "Sus análisis de sangre", "Su dieta"], correctAnswer: "Sus análisis de sangre" }
    ]
};

// ===== ÜNİTE 44: FESTİVALLER VE KUTLAMALAR =====
const unit44Reading: UnitReading = {
    unitId: 44, title: "Festivaller ve Kutlamalar", language: "İspanyolca", level: "A2",
    story: {
        text: "España es un país con muchas fiestas y tradiciones fascinantes. Mi fiesta favorita es la Tomatina de Buñol, que se celebra el último miércoles de agosto. Miles de personas se juntan en las calles para lanzarse tomates maduros durante una hora. Es muy divertido pero terminas completamente rojo. En marzo celebramos las Fallas en Valencia, donde construyen enormes figuras de cartón que queman la última noche del festival. El ruido de los fuegos artificiales es impresionante. En abril está la Feria de Sevilla, donde la gente baila sevillanas, bebe rebujito y pasea en carruajes por la feria. Las mujeres llevan vestidos de flamenca preciosos. En julio vamos a los Sanfermines en Pamplona para ver el encierro. Es muy emocionante pero también peligroso porque la gente corre delante de los toros. La Navidad en España dura mucho: desde el veinticuatro de diciembre hasta el seis de enero, cuando vienen los Reyes Magos. Los niños reciben sus regalos el día de Reyes, no en Navidad. Me encanta vivir en España porque siempre hay algo que celebrar.",
        translation: "İspanya pek çok büyüleyici festival ve geleneğe sahip bir ülke. En sevdiğim festival ağustosun son çarşambasında kutlanan Buñol Tomatina'sı. Bir saat boyunca birbirimize olgun domates atmak için sokaklarda binlerce kişi bir araya geliyoruz. Çok eğlenceli ama tamamen kırmızı bitiyor. Mart ayında Valencia'da kartondan devasa figürler yapıp festivalin son gecesi yaktıkları Fallas'ı kutluyoruz. Havai fişeklerin sesi etkileyici. Nisanda insanların sevillanas dansı yaptığı, rebujito içtiği ve atlı arabalarla fuarda gezdiği Sevilla Fuarı var. Kadınlar çok güzel flamenko elbiseleri giyiyor. Temmuz'da boğa koşusunu görmek için Pamplona'daki Sanfermines'e gidiyoruz. Çok heyecan verici ama aynı zamanda tehlikeli çünkü insanlar boğaların önünde koşuyor. İspanya'da Noel çok uzun sürüyor: yirmi dört Aralık'tan Üç Kral'ın geldiği altı Ocak'a kadar. Çocuklar hediyelerini Noel'de değil, Kral Günü'nde alıyor. İspanya'da yaşamayı çok seviyorum çünkü her zaman kutlanacak bir şey var."
    },
    vocabulary: [
        { word: "Fiesta", meaning: "Festival/Bayram" },
        { word: "Tradiciones", meaning: "Gelenekler" },
        { word: "Fuegos artificiales", meaning: "Havai fişek" },
        { word: "Encierro", meaning: "Boğa koşusu" },
        { word: "Reyes Magos", meaning: "Üç Kral" }
    ],
    questions: [
        { id: 1, question: "Tomatina ne zaman kutlanıyor?", options: ["En julio", "En agosto", "En septiembre"], correctAnswer: "En agosto" },
        { id: 2, question: "Tomatina'da ne atılıyor?", options: ["Naranjas", "Tomates", "Huevos"], correctAnswer: "Tomates" },
        { id: 3, question: "Las Fallas nerede kutlanıyor?", options: ["En Sevilla", "En Valencia", "En Madrid"], correctAnswer: "En Valencia" },
        { id: 4, question: "Feria de Sevilla'da ne içiliyor?", options: ["Cerveza", "Rebujito", "Vino"], correctAnswer: "Rebujito" },
        { id: 5, question: "Sanfermines hangi şehirde?", options: ["Barcelona", "Pamplona", "Bilbao"], correctAnswer: "Pamplona" },
        { id: 6, question: "Sanfermines'te insanlar neyin önünde koşuyor?", options: ["Caballos", "Toros", "Perros"], correctAnswer: "Toros" },
        { id: 7, question: "Reyes Magos ne zaman geliyor?", options: ["El 25 de diciembre", "El 1 de enero", "El 6 de enero"], correctAnswer: "El 6 de enero" },
        { id: 8, question: "İspanya'da çocuklar hediyelerini ne zaman alıyor?", options: ["En Navidad", "El día de Reyes", "En Año Nuevo"], correctAnswer: "El día de Reyes" },
        { id: 9, question: "Flamenko elbiseleri hangi fuarda giyiliyor?", options: ["En Valencia", "En Sevilla", "En Pamplona"], correctAnswer: "En Sevilla" },
        { id: 10, question: "Las Fallas'ta figürlerle ne yapılıyor?", options: ["Se venden", "Se queman", "Se guardan"], correctAnswer: "Se queman" }
    ]
};

// ===== ÜNİTE 45: TATİL PLANLARI =====
const unit45Reading: UnitReading = {
    unitId: 45, title: "Tatil Planları", language: "İspanyolca", level: "A2",
    story: {
        text: "Este verano vamos a hacer un viaje muy especial por la costa de España con toda mi familia. Ya hemos reservado todo con tres meses de antelación para conseguir buenos precios. El primer día vamos a llegar a Barcelona en avión desde Estambul, un vuelo de unas tres horas. Nos vamos a alojar dos noches en un hotel céntrico para visitar la Sagrada Familia y el parque Güell. Después vamos a alquilar un coche y conducir hacia el sur por la costa mediterránea. Tenemos pensado parar en Valencia para ver la Ciudad de las Artes y comer una auténtica paella. La siguiente parada será en Alicante, donde queremos pasar un día en la playa porque es famosa por su arena fina. Finalmente llegaremos a nuestro destino principal: Málaga, en la Costa del Sol. Allí hemos alquilado un apartamento con piscina durante una semana. Queremos descansar, bañarnos en el mar y probar el pescaíto frito típico de la zona. También vamos a hacer una excursión de un día a Granada para ver la Alhambra. El último día devolveremos el coche en el aeropuerto de Málaga y volveremos a casa. Estamos muy emocionados porque llevamos todo el año ahorrando para este viaje.",
        translation: "Bu yaz tüm ailemle İspanya kıyısında çok özel bir yolculuk yapacağız. İyi fiyatlar yakalamak için her şeyi üç ay önceden rezerve ettik. İlk gün İstanbul'dan Barcelona'ya uçakla varacağız, yaklaşık üç saatlik bir uçuş. Sagrada Familia ve Güell parkını ziyaret etmek için merkezi bir otelde iki gece kalacağız. Sonra bir araba kiralayıp Akdeniz kıyısı boyunca güneye doğru süreceğiz. Sanat Şehri'ni görmek ve otantik bir paella yemek için Valencia'da durmayı planlıyoruz. Sonraki durak Alicante olacak, orada ince kumuyla ünlü olduğu için bir gün plajda geçirmek istiyoruz. Sonunda ana destinasyonumuz Costa del Sol'daki Málaga'ya varacağız. Orada bir haftalığına havuzlu bir daire kiraladık. Dinlenmek, denizde yüzmek ve bölgenin tipik kızarmış balığını denemek istiyoruz. Ayrıca Alhambra'yı görmek için Granada'ya bir günlük gezi yapacağız. Son gün arabayı Málaga havaalanında teslim edip eve döneceğiz. Bu yolculuk için bütün yıl birikim yaptığımız için çok heyecanlıyız."
    },
    vocabulary: [
        { word: "Reservar", meaning: "Rezerve etmek" },
        { word: "Alquilar", meaning: "Kiralamak" },
        { word: "Destino", meaning: "Destinasyon" },
        { word: "Excursión", meaning: "Gezi" },
        { word: "Ahorrar", meaning: "Birikim yapmak" }
    ],
    questions: [
        { id: 1, question: "Ne kadar önceden rezervasyon yaptılar?", options: ["Un mes", "Dos meses", "Tres meses"], correctAnswer: "Tres meses" },
        { id: 2, question: "Barcelona'da kaç gece kalacaklar?", options: ["Una noche", "Dos noches", "Tres noches"], correctAnswer: "Dos noches" },
        { id: 3, question: "Valencia'da ne yiyecekler?", options: ["Tapas", "Paella", "Tortilla"], correctAnswer: "Paella" },
        { id: 4, question: "Alicante neyle ünlü?", options: ["Su arena fina", "Sus monumentos", "Su gastronomía"], correctAnswer: "Su arena fina" },
        { id: 5, question: "Ana destinasyon neresi?", options: ["Barcelona", "Valencia", "Málaga"], correctAnswer: "Málaga" },
        { id: 6, question: "Málaga'da ne tür bir konaklama var?", options: ["Hotel", "Apartamento con piscina", "Hostal"], correctAnswer: "Apartamento con piscina" },
        { id: 7, question: "Málaga'da kaç gün kalacaklar?", options: ["Tres días", "Cinco días", "Una semana"], correctAnswer: "Una semana" },
        { id: 8, question: "Granada'da ne görecekler?", options: ["La Sagrada Familia", "La Alhambra", "El Parque Güell"], correctAnswer: "La Alhambra" },
        { id: 9, question: "Uçuş İstanbul'dan ne kadar sürüyor?", options: ["Dos horas", "Tres horas", "Cuatro horas"], correctAnswer: "Tres horas" },
        { id: 10, question: "Bu yolculuk için ne yaptılar?", options: ["Pidieron un préstamo", "Ahorraron todo el año", "Ganaron un concurso"], correctAnswer: "Ahorraron todo el año" }
    ]
};

// ===== ÜNİTE 46: YEMEK TARİFLERİ =====
const unit46Reading: UnitReading = {
    unitId: 46, title: "Yemek Tarifleri", language: "İspanyolca", level: "A2",
    story: {
        text: "Ayer preparé una tortilla de patatas por primera vez siguiendo la receta de mi abuela. Es un plato típico español muy fácil de hacer. Los ingredientes son muy simples: necesitas medio kilo de patatas, seis huevos, una cebolla mediana, aceite de oliva y sal. Primero pelé las patatas y las corté en rodajas finas. Después pelé la cebolla y la corté en trozos pequeños. Calenté mucho aceite en una sartén grande y freí las patatas con la cebolla a fuego lento durante veinte minutos hasta que estaban blandas pero no doradas. Mientras tanto, batí los huevos en un bol grande con un poco de sal. Escurrí las patatas del aceite y las mezclé con los huevos batidos. Dejé reposar la mezcla cinco minutos. Después calenté un poco de aceite en una sartén más pequeña y eché la mezcla. Cociné la tortilla a fuego medio durante cinco minutos. El momento más difícil llegó: dar la vuelta a la tortilla. Puse un plato encima de la sartén y le di la vuelta rápidamente. Volví a poner la tortilla en la sartén para cocinar el otro lado durante tres minutos más. El resultado fue delicioso y mi familia me felicitó. Ahora quiero aprender a hacer paella.",
        translation: "Dün büyükannemin tarifini takip ederek ilk kez patatesli tortilla yaptım. Yapması çok kolay tipik bir İspanyol yemeği. Malzemeler çok basit: yarım kilo patates, altı yumurta, orta boy bir soğan, zeytinyağı ve tuz lazım. Önce patatesleri soydum ve ince dilimler halinde kestim. Sonra soğanı soydum ve küçük parçalar halinde kestim. Büyük bir tavada bol miktarda yağ ısıttım ve patatesleri soğanla birlikte kısık ateşte yirmi dakika yumuşayana ama kızarmayıncaya kadar kızarttım. Bu arada büyük bir kasede yumurtaları biraz tuzla çırptım. Patatesleri yağdan süzdüm ve çırpılmış yumurtalarla karıştırdım. Karışımı beş dakika dinlendirdim. Sonra daha küçük bir tavada biraz yağ ısıttım ve karışımı döktüm. Tortillayı orta ateşte beş dakika pişirdim. En zor an geldi: tortillayı çevirmek. Tavanın üzerine bir tabak koydum ve hızlıca çevirdim. Diğer tarafı üç dakika daha pişirmek için tortillayı tekrar tavaya koydum. Sonuç lezzetliydi ve ailem beni tebrik etti. Şimdi paella yapmayı öğrenmek istiyorum."
    },
    vocabulary: [
        { word: "Receta", meaning: "Tarif" },
        { word: "Ingredientes", meaning: "Malzemeler" },
        { word: "Pelar", meaning: "Soymak" },
        { word: "Batir", meaning: "Çırpmak" },
        { word: "Sartén", meaning: "Tava" }
    ],
    questions: [
        { id: 1, question: "Tarifi kimden aldı?", options: ["De su madre", "De su abuela", "De internet"], correctAnswer: "De su abuela" },
        { id: 2, question: "Kaç yumurta lazım?", options: ["Cuatro", "Cinco", "Seis"], correctAnswer: "Seis" },
        { id: 3, question: "Patatesler nasıl kesildi?", options: ["En cubos", "En rodajas finas", "En trozos grandes"], correctAnswer: "En rodajas finas" },
        { id: 4, question: "Patatesler kaç dakika kızartıldı?", options: ["Diez minutos", "Veinte minutos", "Treinta minutos"], correctAnswer: "Veinte minutos" },
        { id: 5, question: "Yumurtalar nerede çırpıldı?", options: ["En la sartén", "En un bol grande", "En un vaso"], correctAnswer: "En un bol grande" },
        { id: 6, question: "Karışım kaç dakika dinlendirildi?", options: ["Tres minutos", "Cinco minutos", "Diez minutos"], correctAnswer: "Cinco minutos" },
        { id: 7, question: "En zor kısım neydi?", options: ["Pelar las patatas", "Dar la vuelta a la tortilla", "Batir los huevos"], correctAnswer: "Dar la vuelta a la tortilla" },
        { id: 8, question: "Tortillayı çevirmek için ne kullandı?", options: ["Una espátula", "Un plato", "Otra sartén"], correctAnswer: "Un plato" },
        { id: 9, question: "İkinci taraf kaç dakika pişirildi?", options: ["Dos minutos", "Tres minutos", "Cinco minutos"], correctAnswer: "Tres minutos" },
        { id: 10, question: "Şimdi ne yapmayı öğrenmek istiyor?", options: ["Gazpacho", "Paella", "Croquetas"], correctAnswer: "Paella" }
    ]
};

// ===== ÜNİTE 47: AİLE İLİŞKİLERİ =====
const unit47Reading: UnitReading = {
    unitId: 47, title: "Aile İlişkileri", language: "İspanyolca", level: "A2",
    story: {
        text: "Mi familia es bastante grande y muy unida. Mis padres se llaman Antonio y Carmen, y llevan casados treinta y cinco años. Se conocieron en la universidad cuando eran muy jóvenes y se enamoraron a primera vista. Tengo dos hermanos: mi hermano mayor Pablo tiene cuarenta años y mi hermana pequeña Lucía tiene treinta y dos. Pablo está divorciado y tiene dos hijos gemelos que ahora tienen ocho años. Me encanta ser tío porque puedo jugar con ellos y luego devolverlos a su padre. Lucía está soltera y vive con su novio en otra ciudad. Mis abuelos ya no están con nosotros pero tengo muy buenos recuerdos de ellos. Mi abuela cocinaba los mejores dulces del mundo. Los domingos almorzamos todos juntos en casa de mis padres. Es una tradición familiar muy importante que mantenemos desde hace muchos años. Mi madre prepara siempre paella y pasamos toda la tarde charlando y jugando a las cartas. A veces discutimos porque tenemos opiniones diferentes sobre política o fútbol, pero siempre hacemos las paces antes de irnos. La familia es lo más importante en mi vida.",
        translation: "Ailem oldukça kalabalık ve çok yakın. Ailem Antonio ve Carmen, otuz beş yıldır evliler. Çok gençken üniversitede tanıştılar ve ilk görüşte aşık oldular. İki kardeşim var: ağabeyim Pablo kırk yaşında ve küçük kız kardeşim Lucía otuz iki yaşında. Pablo boşanmış ve şu an sekiz yaşında olan ikiz çocukları var. Amca olmayı seviyorum çünkü onlarla oynayıp sonra babalarına geri verebiliyorum. Lucía bekar ve başka bir şehirde erkek arkadaşıyla yaşıyor. Büyükanne ve büyükbabalarım artık aramızda değil ama onları çok güzel hatırlıyorum. Büyükannem dünyanın en iyi tatlılarını yapardı. Pazar günleri hep birlikte ailemizin evinde öğle yemeği yiyoruz. Bu, yıllardır sürdürdüğümüz çok önemli bir aile geleneği. Annem her zaman paella hazırlar ve bütün öğleden sonrayı sohbet edip kağıt oynayarak geçiririz. Bazen politik veya futbol konusunda farklı fikirlerimiz olduğu için tartışırız ama gitmeden önce her zaman barışırız. Hayatımda en önemli şey aile."
    },
    vocabulary: [
        { word: "Unida", meaning: "Yakın/Birlik" },
        { word: "Gemelos", meaning: "İkizler" },
        { word: "Divorciado", meaning: "Boşanmış" },
        { word: "Tradición", meaning: "Gelenek" },
        { word: "Hacer las paces", meaning: "Barışmak" }
    ],
    questions: [
        { id: 1, question: "Anne ve baba kaç yıldır evli?", options: ["Veinticinco años", "Treinta años", "Treinta y cinco años"], correctAnswer: "Treinta y cinco años" },
        { id: 2, question: "Nereden tanıştılar?", options: ["En el trabajo", "En la universidad", "En una fiesta"], correctAnswer: "En la universidad" },
        { id: 3, question: "Pablo'nun kaç çocuğu var?", options: ["Uno", "Dos gemelos", "Tres"], correctAnswer: "Dos gemelos" },
        { id: 4, question: "Pablo'nun medeni hali ne?", options: ["Casado", "Divorciado", "Soltero"], correctAnswer: "Divorciado" },
        { id: 5, question: "Lucía kiminle yaşıyor?", options: ["Con sus padres", "Con su novio", "Sola"], correctAnswer: "Con su novio" },
        { id: 6, question: "Büyükanne ne yapardı?", options: ["Cantaba", "Cocinaba dulces", "Contaba historias"], correctAnswer: "Cocinaba dulces" },
        { id: 7, question: "Aile toplantısı hangi gün?", options: ["Los sábados", "Los domingos", "Los viernes"], correctAnswer: "Los domingos" },
        { id: 8, question: "Anne ne yemek hazırlıyor?", options: ["Tortilla", "Paella", "Gazpacho"], correctAnswer: "Paella" },
        { id: 9, question: "Yemekten sonra ne yapıyorlar?", options: ["Ver la tele", "Charlar y jugar a las cartas", "Dormir"], correctAnswer: "Charlar y jugar a las cartas" },
        { id: 10, question: "Bazen neden tartışıyorlar?", options: ["Por dinero", "Por política o fútbol", "Por la comida"], correctAnswer: "Por política o fútbol" }
    ]
};

// ===== ÜNİTE 48: PARA VE BANKA =====
const unit48Reading: UnitReading = {
    unitId: 48, title: "Para ve Banka", language: "İspanyolca", level: "A2",
    story: {
        text: "La semana pasada tuve que ir al banco para hacer varias gestiones. Primero necesitaba abrir una cuenta de ahorro nueva porque quiero empezar a guardar dinero para comprar un coche. El empleado del banco me explicó los diferentes tipos de cuentas que ofrecen y sus intereses. Elegí una cuenta que no tiene comisiones y me da un uno por ciento de interés anual. También solicité una tarjeta de crédito porque la mía había caducado el mes anterior. Me dijeron que llegaría a mi casa en diez días hábiles. Además, pedí un extracto bancario de los últimos tres meses porque lo necesitaba para presentar mi declaración de impuestos. El extracto mostraba todos mis movimientos: mis nóminas mensuales, los pagos de alquiler, las transferencias que hice y los recibos domiciliados de luz, agua e internet. También configuré la aplicación móvil del banco en mi teléfono. Ahora puedo consultar mi saldo, hacer transferencias y pagar facturas sin tener que ir a la sucursal. Es muy cómodo porque el banco cierra a las dos de la tarde y yo trabajo hasta las seis. Antes de irme, saqué dinero del cajero automático porque necesitaba efectivo para pagar al fontanero que venía esa tarde.",
        translation: "Geçen hafta çeşitli işlemler yapmak için bankaya gitmem gerekti. Önce bir araba almak için para biriktirmeye başlamak istediğim için yeni bir tasarruf hesabı açmam gerekiyordu. Banka çalışanı sundukları farklı hesap türlerini ve faiz oranlarını açıkladı. Komisyonsuz ve yıllık yüzde bir faiz veren bir hesap seçtim. Ayrıca benimki geçen ay dolduğu için kredi kartı başvurusu yaptım. Kartın on iş günü içinde evime geleceğini söylediler. Ayrıca vergi beyannamemi sunmak için ihtiyaç duyduğum son üç ayın banka hesap özetini istedim. Özet tüm hareketlerimi gösteriyordu: aylık maaşlarım, kira ödemelerim, yaptığım havaleler ve elektrik, su ve internet otomatik ödemeleri. Ayrıca telefonumda bankanın mobil uygulamasını kurdum. Şimdi şubeye gitmeden bakiyemi kontrol edebilir, havale yapabilir ve fatura ödeyebiliyorum. Çok rahat çünkü banka saat ikide kapanıyor ve ben altıya kadar çalışıyorum. Gitmeden önce, o öğleden sonra gelecek tesisatçıya ödeme yapmak için nakit paraya ihtiyacım olduğu için ATM'den para çektim."
    },
    vocabulary: [
        { word: "Cuenta de ahorro", meaning: "Tasarruf hesabı" },
        { word: "Comisiones", meaning: "Komisyonlar" },
        { word: "Extracto bancario", meaning: "Banka hesap özeti" },
        { word: "Cajero automático", meaning: "ATM" },
        { word: "Efectivo", meaning: "Nakit" }
    ],
    questions: [
        { id: 1, question: "Neden tasarruf hesabı açtı?", options: ["Para viajar", "Para comprar un coche", "Para jubilarse"], correctAnswer: "Para comprar un coche" },
        { id: 2, question: "Hesabın faiz oranı kaç?", options: ["Medio por ciento", "Uno por ciento", "Dos por ciento"], correctAnswer: "Uno por ciento" },
        { id: 3, question: "Neden yeni kredi kartı istedi?", options: ["La perdió", "Había caducado", "Quería más límite"], correctAnswer: "Había caducado" },
        { id: 4, question: "Kart kaç günde gelecek?", options: ["Cinco días", "Diez días hábiles", "Un mes"], correctAnswer: "Diez días hábiles" },
        { id: 5, question: "Banka hesap özeti ne için lazım?", options: ["Para el trabajo", "Para los impuestos", "Para un préstamo"], correctAnswer: "Para los impuestos" },
        { id: 6, question: "Mobil uygulama ile ne yapabilir?", options: ["Solo consultar saldo", "Transferencias y pagar facturas", "Pedir préstamos"], correctAnswer: "Transferencias y pagar facturas" },
        { id: 7, question: "Banka saat kaçta kapanıyor?", options: ["A la una", "A las dos", "A las tres"], correctAnswer: "A las dos" },
        { id: 8, question: "ATM'den neden para çekti?", options: ["Para comprar comida", "Para pagar al fontanero", "Para el alquiler"], correctAnswer: "Para pagar al fontanero" },
        { id: 9, question: "Saat kaça kadar çalışıyor?", options: ["Hasta las cinco", "Hasta las seis", "Hasta las siete"], correctAnswer: "Hasta las seis" },
        { id: 10, question: "Hangi faturalar otomatik ödeme?", options: ["Teléfono", "Luz, agua e internet", "Solo la luz"], correctAnswer: "Luz, agua e internet" }
    ]
};

// ===== ÜNİTE 49: HABER VE MEDYA =====
const unit49Reading: UnitReading = {
    unitId: 49, title: "Haber ve Medya", language: "İspanyolca", level: "A2",
    story: {
        text: "Me gusta estar informado sobre lo que pasa en el mundo, así que consumo noticias de diferentes fuentes todos los días. Por la mañana, mientras desayuno, leo los titulares en la aplicación de un periódico digital en mi teléfono. Es gratis pero tiene mucha publicidad. Prefiero las noticias escritas porque puedo leer a mi ritmo y saltarme las que no me interesan. Durante el día escucho la radio en el coche cuando voy al trabajo. Mi emisora favorita tiene un programa de noticias muy bueno a las ocho de la mañana que incluye política nacional, economía y deportes. Por la noche, a veces veo el telediario de las nueve en la televisión mientras ceno. Me gusta este informativo porque los presentadores explican las noticias de forma clara y sencilla. Los fines de semana leo revistas de actualidad que tratan temas en mayor profundidad. También sigo a algunos periodistas en redes sociales porque publican opiniones interesantes. Sin embargo, tengo cuidado con las noticias falsas que circulan por internet. Siempre compruebo la información en varias fuentes antes de creerla. Creo que es importante estar bien informado para ser un buen ciudadano y poder votar con conocimiento.",
        translation: "Dünyada neler olduğu hakkında bilgili olmayı seviyorum, bu yüzden her gün farklı kaynaklardan haber tüketiyorum. Sabahları kahvaltı yaparken telefomdaki dijital bir gazetenin uygulamasında başlıkları okuyorum. Ücretsiz ama çok reklam var. Yazılı haberleri tercih ediyorum çünkü kendi hızımda okuyabilir ve ilgilenmediğim haberleri atlayabilirim. Gün içinde işe giderken arabada radyo dinliyorum. En sevdiğim radyo istasyonunun sabah sekizde ulusal politika, ekonomi ve spor içeren çok iyi bir haber programı var. Geceleri, bazen akşam yemeği yerken dokuz haberlerini televizyonda izliyorum. Bu haber bültenini seviyorum çünkü sunucular haberleri net ve basit bir şekilde açıklıyor. Hafta sonları konuları daha derinlemesine işleyen güncel dergileri okuyorum. Ayrıca ilginç görüşler paylaştıkları için sosyal medyada bazı gazetecileri takip ediyorum. Ancak internette dolaşan sahte haberlere karşı dikkatli oluyorum. İnanmadan önce bilgiyi her zaman birkaç kaynaktan kontrol ediyorum. İyi bir vatandaş olmak ve bilinçli oy kullanabilmek için iyi bilgilenmiş olmanın önemli olduğuna inanıyorum."
    },
    vocabulary: [
        { word: "Noticias", meaning: "Haberler" },
        { word: "Titulares", meaning: "Başlıklar" },
        { word: "Telediario", meaning: "TV haberleri" },
        { word: "Noticias falsas", meaning: "Sahte haberler" },
        { word: "Fuentes", meaning: "Kaynaklar" }
    ],
    questions: [
        { id: 1, question: "Sabah haberleri nasıl okuyor?", options: ["En el periódico de papel", "En una aplicación del teléfono", "En la televisión"], correctAnswer: "En una aplicación del teléfono" },
        { id: 2, question: "Neden yazılı haberleri tercih ediyor?", options: ["Son más rápidas", "Puede leer a su ritmo", "Son más fiables"], correctAnswer: "Puede leer a su ritmo" },
        { id: 3, question: "Arabada ne dinliyor?", options: ["Música", "Podcasts", "La radio"], correctAnswer: "La radio" },
        { id: 4, question: "Radyo haber programı saat kaçta?", options: ["A las siete", "A las ocho", "A las nueve"], correctAnswer: "A las ocho" },
        { id: 5, question: "TV haberleri saat kaçta?", options: ["A las ocho", "A las nueve", "A las diez"], correctAnswer: "A las nueve" },
        { id: 6, question: "TV sunucuları haberleri nasıl açıklıyor?", options: ["De forma complicada", "De forma clara y sencilla", "Muy rápido"], correctAnswer: "De forma clara y sencilla" },
        { id: 7, question: "Hafta sonu ne okuyor?", options: ["Libros", "Revistas de actualidad", "Cómics"], correctAnswer: "Revistas de actualidad" },
        { id: 8, question: "Sosyal medyada kimleri takip ediyor?", options: ["Famosos", "Periodistas", "Amigos"], correctAnswer: "Periodistas" },
        { id: 9, question: "İnternet haberleri konusunda ne yapıyor?", options: ["Las cree todas", "Comprueba en varias fuentes", "Las ignora"], correctAnswer: "Comprueba en varias fuentes" },
        { id: 10, question: "Neden bilgilenmiş olmak önemli?", options: ["Para el trabajo", "Para votar con conocimiento", "Para hablar con amigos"], correctAnswer: "Para votar con conocimiento" }
    ]
};

// ===== ÜNİTE 50: A2 GENEL TEKRAR =====
const unit50Reading: UnitReading = {
    unitId: 50, title: "A2 Genel Tekrar - Hayatım", language: "İspanyolca", level: "A2",
    story: {
        text: "Me llamo Alejandro y tengo treinta y cuatro años. Nací en Barcelona pero ahora vivo en Madrid desde hace cinco años porque conseguí un buen trabajo aquí. Trabajo como ingeniero informático en una empresa de tecnología bastante famosa. Estoy casado con María desde hace tres años y tenemos una hija pequeña que se llama Sofía. Ella tiene dos años y es lo mejor que nos ha pasado en la vida. Vivimos en un apartamento de tres habitaciones en el centro de la ciudad. Es pequeño pero muy acogedor. Todos los días me levanto a las siete, desayuno con mi familia y voy al trabajo en metro. Trabajo hasta las seis de la tarde y luego vuelvo a casa para cenar juntos. Los fines de semana intentamos salir y hacer actividades en familia. A veces vamos al parque, otras veces al museo o al cine. El mes pasado fuimos de vacaciones a la playa durante una semana y fue maravilloso. El próximo año queremos visitar Japón porque es un país que siempre hemos querido conocer. Aunque echo de menos Barcelona y a mi familia que sigue viviendo allí, estoy muy feliz con la vida que he construido en Madrid. El futuro parece muy prometedor.",
        translation: "Adım Alejandro ve otuz dört yaşındayım. Barcelona'da doğdum ama burada iyi bir iş bulduğum için beş yıldır Madrid'de yaşıyorum. Oldukça ünlü bir teknoloji şirketinde bilgisayar mühendisi olarak çalışıyorum. Üç yıldır María ile evliyim ve Sofía adında küçük bir kızımız var. İki yaşında ve hayatımızda başımıza gelen en iyi şey. Şehir merkezinde üç odalı bir dairede yaşıyoruz. Küçük ama çok sıcak bir ev. Her gün yedide kalkıyorum, ailemle kahvaltı yapıyorum ve metroyla işe gidiyorum. Akşam altıya kadar çalışıyorum ve sonra birlikte yemek yemek için eve dönüyorum. Hafta sonları çıkıp aile aktiviteleri yapmaya çalışıyoruz. Bazen parka, bazen müzeye veya sinemaya gidiyoruz. Geçen ay bir haftalığına plaja tatile gittik ve harikaydı. Gelecek yıl Japonya'yı ziyaret etmek istiyoruz çünkü her zaman tanımak istediğimiz bir ülke. Barcelona'yı ve hala orada yaşayan ailemi özlesem de Madrid'de kurduğum hayattan çok mutluyum. Gelecek çok umut verici görünüyor."
    },
    vocabulary: [
        { word: "Ingeniero", meaning: "Mühendis" },
        { word: "Acogedor", meaning: "Sıcak/Samimi" },
        { word: "Echar de menos", meaning: "Özlemek" },
        { word: "Prometedor", meaning: "Umut verici" },
        { word: "Construir", meaning: "Kurmak/İnşa etmek" }
    ],
    questions: [
        { id: 1, question: "Alejandro kaç yaşında?", options: ["Treinta y dos", "Treinta y cuatro", "Treinta y seis"], correctAnswer: "Treinta y cuatro" },
        { id: 2, question: "Nerede doğdu?", options: ["Madrid", "Barcelona", "Valencia"], correctAnswer: "Barcelona" },
        { id: 3, question: "Kaç yıldır Madrid'de yaşıyor?", options: ["Tres años", "Cinco años", "Diez años"], correctAnswer: "Cinco años" },
        { id: 4, question: "Mesleği ne?", options: ["Médico", "Ingeniero informático", "Profesor"], correctAnswer: "Ingeniero informático" },
        { id: 5, question: "Kızı kaç yaşında?", options: ["Un año", "Dos años", "Tres años"], correctAnswer: "Dos años" },
        { id: 6, question: "İşe nasıl gidiyor?", options: ["En coche", "En metro", "Caminando"], correctAnswer: "En metro" },
        { id: 7, question: "Geçen ay nereye tatile gittiler?", options: ["A la montaña", "A la playa", "A otra ciudad"], correctAnswer: "A la playa" },
        { id: 8, question: "Gelecek yıl nereyi ziyaret etmek istiyorlar?", options: ["Francia", "Italia", "Japón"], correctAnswer: "Japón" },
        { id: 9, question: "Barcelona'daki ailesiyle ilgili ne hissediyor?", options: ["Los echa de menos", "Está enfadado", "No le importa"], correctAnswer: "Los echa de menos" },
        { id: 10, question: "Genel olarak nasıl hissediyor?", options: ["Triste", "Muy feliz", "Preocupado"], correctAnswer: "Muy feliz" }
    ]
};

// ===== ÜNİTE 51: EV VE TAŞINMA =====
const unit51Reading: UnitReading = {
    unitId: 51, title: "Yeni Ev Arayışı", language: "İspanyolca", level: "A2",
    story: {
        text: "Mi esposa y yo llevamos tres meses buscando un nuevo piso. Nuestro apartamento actual es demasiado pequeño porque vamos a tener un bebé. Hemos visto más de veinte pisos pero ninguno era perfecto. Ayer finalmente encontramos uno que nos gustó mucho. Tiene tres habitaciones, dos baños, una cocina grande y un salón luminoso. Está en el cuarto piso de un edificio moderno con ascensor. El alquiler es de novecientos euros al mes, los gastos de agua y gas están incluidos pero la electricidad no. El propietario nos pidió un depósito de dos meses. El barrio es muy tranquilo y hay un parque enfrente. El metro está a cinco minutos caminando. Firmamos el contrato ayer y nos mudamos el próximo sábado.",
        translation: "Eşim ve ben üç aydır yeni bir daire arıyoruz. Şu anki dairemiz bebek beklemekten dolayı çok küçük. Yirmiden fazla daire gördük ama hiçbiri mükemmel değildi. Dün sonunda çok beğendiğimiz birini bulduk. Üç yatak odası, iki banyo, büyük bir mutfak ve aydınlık bir salon var. Asansörlü modern bir binanın dördüncü katında. Kira ayda dokuz yüz euro, su ve gaz dahil ama elektrik değil. Ev sahibi iki aylık depozito istedi. Mahalle çok sakin ve karşısında park var. Metro yürüyerek beş dakika uzaklıkta. Dün sözleşmeyi imzaladık ve önümüzdeki cumartesi taşınıyoruz."
    },
    vocabulary: [
        { word: "Alquiler", meaning: "Kira" },
        { word: "Depósito", meaning: "Depozito" },
        { word: "Propietario", meaning: "Ev sahibi" },
        { word: "Mudarse", meaning: "Taşınmak" },
        { word: "Contrato", meaning: "Sözleşme" }
    ],
    questions: [
        { id: 1, question: "Kaç aydır daire arıyorlar?", options: ["Dos meses", "Tres meses", "Cuatro meses"], correctAnswer: "Tres meses" },
        { id: 2, question: "Neden yeni daire arıyorlar?", options: ["Por trabajo", "Van a tener un bebé", "Por precio"], correctAnswer: "Van a tener un bebé" },
        { id: 3, question: "Dairede kaç yatak odası var?", options: ["Dos", "Tres", "Cuatro"], correctAnswer: "Tres" },
        { id: 4, question: "Kira kaç euro?", options: ["Ochocientos", "Novecientos", "Mil"], correctAnswer: "Novecientos" },
        { id: 5, question: "Elektrik dahil mi?", options: ["Sí", "No", "A veces"], correctAnswer: "No" },
        { id: 6, question: "Depozito kaç aylık?", options: ["Un mes", "Dos meses", "Tres meses"], correctAnswer: "Dos meses" },
        { id: 7, question: "Daire kaçıncı katta?", options: ["Tercero", "Cuarto", "Quinto"], correctAnswer: "Cuarto" },
        { id: 8, question: "Metro ne kadar uzakta?", options: ["Dos minutos", "Cinco minutos", "Diez minutos"], correctAnswer: "Cinco minutos" },
        { id: 9, question: "Sözleşmeyi ne zaman imzaladılar?", options: ["Hoy", "Ayer", "La semana pasada"], correctAnswer: "Ayer" },
        { id: 10, question: "Ne zaman taşınacaklar?", options: ["Mañana", "El próximo sábado", "El próximo mes"], correctAnswer: "El próximo sábado" }
    ]
};

// ===== ÜNİTE 52: ÇEVRE VE DOĞA =====
const unit52Reading: UnitReading = {
    unitId: 52, title: "Çevre Koruma", language: "İspanyolca", level: "A2",
    story: {
        text: "El cambio climático es uno de los problemas más graves de nuestro tiempo. Cada día intentamos hacer pequeñas cosas para proteger el medio ambiente. En casa siempre reciclamos el plástico, el papel y el vidrio en contenedores diferentes. También ahorramos agua cerrando el grifo mientras nos lavamos los dientes. Usamos bolsas de tela en vez de bolsas de plástico cuando vamos al supermercado. Mi padre va al trabajo en bicicleta en lugar de usar el coche. Hemos puesto paneles solares en el tejado para usar energía renovable. En verano cultivamos tomates y lechugas en nuestro pequeño jardín. Es importante educar a los niños sobre la importancia de cuidar la naturaleza. Si todos hacemos un pequeño esfuerzo, podemos dejar un planeta mejor para las futuras generaciones.",
        translation: "İklim değişikliği zamanımızın en ciddi sorunlarından biri. Her gün çevreyi korumak için küçük şeyler yapmaya çalışıyoruz. Evde plastik, kağıt ve camı farklı konteynerlerde geri dönüştürüyoruz. Dişlerimizi fırçalarken musluğu kapatarak su tasarrufu yapıyoruz. Süpermarkete gittiğimizde plastik poşet yerine bez çanta kullanıyoruz. Babam araba yerine bisikletle işe gidiyor. Yenilenebilir enerji kullanmak için çatıya güneş panelleri koyduk. Yazın küçük bahçemizde domates ve marul yetiştiriyoruz. Çocuklara doğayı korumanın önemini öğretmek önemli. Hepimiz küçük bir çaba gösterirsek, gelecek nesillere daha iyi bir gezegen bırakabiliriz."
    },
    vocabulary: [
        { word: "Reciclar", meaning: "Geri dönüştürmek" },
        { word: "Medio ambiente", meaning: "Çevre" },
        { word: "Energía renovable", meaning: "Yenilenebilir enerji" },
        { word: "Cambio climático", meaning: "İklim değişikliği" },
        { word: "Ahorrar", meaning: "Tasarruf etmek" }
    ],
    questions: [
        { id: 1, question: "Hangi materyalleri geri dönüştürüyorlar?", options: ["Solo papel", "Plástico, papel y vidrio", "Solo plástico"], correctAnswer: "Plástico, papel y vidrio" },
        { id: 2, question: "Su tasarrufu için ne yapıyorlar?", options: ["Duchas cortas", "Cerrar el grifo", "No lavar"], correctAnswer: "Cerrar el grifo" },
        { id: 3, question: "Süpermarkette ne kullanıyorlar?", options: ["Bolsas de plástico", "Bolsas de tela", "Cajas"], correctAnswer: "Bolsas de tela" },
        { id: 4, question: "Baba işe nasıl gidiyor?", options: ["En coche", "En bicicleta", "En autobús"], correctAnswer: "En bicicleta" },
        { id: 5, question: "Çatıya ne koydular?", options: ["Antena", "Paneles solares", "Plantas"], correctAnswer: "Paneles solares" },
        { id: 6, question: "Bahçede ne yetiştiriyorlar?", options: ["Flores", "Tomates y lechugas", "Árboles"], correctAnswer: "Tomates y lechugas" },
        { id: 7, question: "Bahçede hangi mevsim üretim yapıyorlar?", options: ["Primavera", "Verano", "Otoño"], correctAnswer: "Verano" },
        { id: 8, question: "Çocuklara ne öğretmek önemli?", options: ["Cocinar", "Cuidar la naturaleza", "Conducir"], correctAnswer: "Cuidar la naturaleza" },
        { id: 9, question: "Küçük çabalarla ne başarılabilir?", options: ["Ganar dinero", "Planeta mejor", "Más trabajo"], correctAnswer: "Planeta mejor" },
        { id: 10, question: "İklim değişikliği nasıl tanımlanıyor?", options: ["Problema pequeño", "Problema grave", "No es problema"], correctAnswer: "Problema grave" }
    ]
};

// ===== ÜNİTE 53-60 için kısa okumalar =====
const unit53Reading: UnitReading = {
    unitId: 53, title: "Günlük Haberler", language: "İspanyolca", level: "A2",
    story: { text: "Todas las mañanas leo las noticias en internet mientras desayuno. Me gusta estar informado sobre lo que pasa en el mundo. Hoy leí que el gobierno va a construir un nuevo hospital en mi ciudad. También hay noticias sobre el tiempo: mañana va a llover. En la sección de deportes, el equipo de fútbol local ganó tres a cero. Mi padre prefiere ver las noticias en la televisión por la noche. Dice que es más cómodo que leer. Mi madre lee el periódico tradicional los domingos. Cada uno tiene sus preferencias.", translation: "Her sabah kahvaltı yaparken internetten haberleri okurum. Dünyada neler olduğu hakkında bilgili olmayı severim. Bugün hükümetin şehrimde yeni bir hastane yapacağını okudum. Hava durumu haberleri de var: yarın yağmur yağacak. Spor bölümünde yerel futbol takımı üç sıfır kazandı. Babam akşam televizyonda haber izlemeyi tercih ediyor. Okumaktan daha rahat olduğunu söylüyor. Annem pazar günleri geleneksel gazete okuyor. Herkesin tercihleri farklı." },
    vocabulary: [{ word: "Noticias", meaning: "Haberler" }, { word: "Gobierno", meaning: "Hükümet" }, { word: "Periódico", meaning: "Gazete" }, { word: "Informado", meaning: "Bilgili" }, { word: "Sección", meaning: "Bölüm" }],
    questions: [
        { id: 1, question: "Haberleri ne zaman okuyor?", options: ["Por la noche", "Por la mañana", "Por la tarde"], correctAnswer: "Por la mañana" },
        { id: 2, question: "Hükümet ne yapacak?", options: ["Un parque", "Un hospital", "Una escuela"], correctAnswer: "Un hospital" },
        { id: 3, question: "Yarın hava nasıl olacak?", options: ["Sol", "Lluvia", "Nieve"], correctAnswer: "Lluvia" },
        { id: 4, question: "Futbol maçı kaç kaç bitti?", options: ["2-0", "3-0", "1-0"], correctAnswer: "3-0" },
        { id: 5, question: "Baba haberleri nasıl izliyor?", options: ["Internet", "Televisión", "Radio"], correctAnswer: "Televisión" },
        { id: 6, question: "Anne ne zaman gazete okuyor?", options: ["Lunes", "Domingos", "Diario"], correctAnswer: "Domingos" },
        { id: 7, question: "Haberleri nerede okuyor?", options: ["Internet", "Periódico", "Radio"], correctAnswer: "Internet" },
        { id: 8, question: "Neden haber okumayı seviyor?", options: ["Es divertido", "Para estar informado", "Es gratis"], correctAnswer: "Para estar informado" },
        { id: 9, question: "Baba okumak hakkında ne diyor?", options: ["Más fácil", "Más cómodo ver TV", "Mejor"], correctAnswer: "Más cómodo ver TV" },
        { id: 10, question: "Anne hangi tür gazete okuyor?", options: ["Digital", "Tradicional", "Deportivo"], correctAnswer: "Tradicional" }
    ]
};

const unit54Reading: UnitReading = {
    unitId: 54, title: "İspanyol Kültürü", language: "İspanyolca", level: "A2",
    story: { text: "España tiene una cultura muy rica y diversa. Una de las tradiciones más famosas es la siesta, que es una pequeña siesta después del almuerzo. También son famosos los toros, aunque hoy en día es un tema controvertido. La gastronomía española es deliciosa: paella, tortilla, jamón ibérico y tapas. Las fiestas populares como San Fermín y La Tomatina atraen a turistas de todo el mundo. El flamenco es un baile y música tradicional del sur de España. Los españoles suelen cenar tarde, normalmente a las nueve o diez de la noche. La familia es muy importante en la cultura española.", translation: "İspanya çok zengin ve çeşitli bir kültüre sahip. En ünlü geleneklerden biri öğle yemeğinden sonra yapılan kısa uyku olan siestadır. Boğa güreşleri de ünlüdür ama günümüzde tartışmalı bir konu. İspanyol mutfağı lezzetli: paella, tortilla, jamón ibérico ve tapas. San Fermín ve La Tomatina gibi halk festivalleri tüm dünyadan turist çekiyor. Flamenko İspanya'nın güneyinden gelen geleneksel dans ve müzik. İspanyollar genellikle geç yemek yer, normalde akşam dokuz veya on. Aile İspanyol kültüründe çok önemli." },
    vocabulary: [{ word: "Siesta", meaning: "Öğle uykusu" }, { word: "Gastronomía", meaning: "Mutfak kültürü" }, { word: "Tradición", meaning: "Gelenek" }, { word: "Flamenco", meaning: "Flamenko" }, { word: "Fiesta", meaning: "Festival/Parti" }],
    questions: [
        { id: 1, question: "Siesta ne zaman yapılır?", options: ["Por la mañana", "Después del almuerzo", "Por la noche"], correctAnswer: "Después del almuerzo" },
        { id: 2, question: "Flamenko nereden geliyor?", options: ["Norte", "Sur", "Este"], correctAnswer: "Sur" },
        { id: 3, question: "İspanyollar genellikle saat kaçta yemek yer?", options: ["A las seis", "A las nueve o diez", "A las siete"], correctAnswer: "A las nueve o diez" },
        { id: 4, question: "Hangi yemek İspanyol mutfağından?", options: ["Pizza", "Paella", "Sushi"], correctAnswer: "Paella" },
        { id: 5, question: "La Tomatina ne?", options: ["Comida", "Fiesta popular", "Baile"], correctAnswer: "Fiesta popular" },
        { id: 6, question: "Boğa güreşi bugün nasıl görülüyor?", options: ["Popular", "Controvertido", "Normal"], correctAnswer: "Controvertido" },
        { id: 7, question: "Festivaller kimi çekiyor?", options: ["Solo españoles", "Turistas del mundo", "Niños"], correctAnswer: "Turistas del mundo" },
        { id: 8, question: "İspanyol kültüründe ne önemli?", options: ["Trabajo", "Familia", "Dinero"], correctAnswer: "Familia" },
        { id: 9, question: "Tapas ne?", options: ["Baile", "Música", "Comida"], correctAnswer: "Comida" },
        { id: 10, question: "İspanya kültürü nasıl tanımlanıyor?", options: ["Simple", "Rica y diversa", "Aburrida"], correctAnswer: "Rica y diversa" }
    ]
};

const unit55Reading: UnitReading = {
    unitId: 55, title: "İlgi Zamirleri Pratiği", language: "İspanyolca", level: "A2",
    story: { text: "El libro que compré ayer es muy interesante. Trata sobre un detective que resuelve crímenes en Madrid. El autor, cuyo nombre es Carlos Ruiz, es muy famoso. La ciudad donde vive el detective se describe con mucho detalle. Las personas a quienes entrevista son sospechosas. El restaurante donde come el detective sirve tapas deliciosas. La razón por la que leo este libro es porque me gustan las novelas de misterio. Todo lo que he leído hasta ahora es emocionante. El final, del cual no puedo hablar, es sorprendente.", translation: "Dün aldığım kitap çok ilginç. Madrid'de suçları çözen bir dedektif hakkında. Adı Carlos Ruiz olan yazar çok ünlü. Dedektifin yaşadığı şehir çok detaylı anlatılıyor. Görüştüğü kişiler şüpheli. Dedektifin yemek yediği restoran lezzetli tapas servis ediyor. Bu kitabı okumamın nedeni polisiye romanları sevmem. Şimdiye kadar okuduğum her şey heyecan verici. Hakkında konuşamayacağım son şaşırtıcı." },
    vocabulary: [{ word: "Que", meaning: "Ki/-en/-an" }, { word: "Cuyo", meaning: "Kimin" }, { word: "Donde", meaning: "Nerede" }, { word: "Quien", meaning: "Kim" }, { word: "Lo que", meaning: "Ne ki" }],
    questions: [
        { id: 1, question: "Kitabı ne zaman aldı?", options: ["Hoy", "Ayer", "La semana pasada"], correctAnswer: "Ayer" },
        { id: 2, question: "Kitap ne hakkında?", options: ["Amor", "Detective", "Viajes"], correctAnswer: "Detective" },
        { id: 3, question: "Dedektif nerede yaşıyor?", options: ["Barcelona", "Madrid", "Sevilla"], correctAnswer: "Madrid" },
        { id: 4, question: "Yazarın adı ne?", options: ["Juan García", "Carlos Ruiz", "Pedro López"], correctAnswer: "Carlos Ruiz" },
        { id: 5, question: "Restoranda ne servis ediliyor?", options: ["Pizza", "Tapas", "Hamburguesa"], correctAnswer: "Tapas" },
        { id: 6, question: "Neden bu kitabı okuyor?", options: ["Es corto", "Le gustan los misterios", "Es barato"], correctAnswer: "Le gustan los misterios" },
        { id: 7, question: "Şimdiye kadar kitap nasıl?", options: ["Aburrido", "Emocionante", "Difícil"], correctAnswer: "Emocionante" },
        { id: 8, question: "Son nasıl?", options: ["Triste", "Sorprendente", "Normal"], correctAnswer: "Sorprendente" },
        { id: 9, question: "Görüşülen kişiler nasıl?", options: ["Inocentes", "Sospechosas", "Amables"], correctAnswer: "Sospechosas" },
        { id: 10, question: "Yazar nasıl tanımlanıyor?", options: ["Nuevo", "Famoso", "Desconocido"], correctAnswer: "Famoso" }
    ]
};

const unit56Reading: UnitReading = {
    unitId: 56, title: "Hediyeler", language: "İspanyolca", level: "A2",
    story: { text: "Mañana es el cumpleaños de mi madre y le voy a dar un regalo especial. Mi padre me prestó dinero para comprarlo. Le compré un collar de plata muy bonito. Mi hermana le va a regalar flores y mi hermano le preparó una tarta de chocolate. Nos lo contó ayer en secreto. Te lo cuento porque eres mi mejor amigo. Se lo vamos a dar por la mañana antes del desayuno. Espero que le guste mucho. También le escribí una carta diciéndole cuánto la quiero.", translation: "Yarın annemin doğum günü ve ona özel bir hediye vereceğim. Babam satın almam için bana para ödünç verdi. Ona çok güzel gümüş bir kolye aldım. Kız kardeşim ona çiçek hediye edecek ve erkek kardeşim çikolatalı pasta hazırladı. Dün bize gizlice anlattı. Sana anlatıyorum çünkü en iyi arkadaşımsın. Kahvaltıdan önce sabah vereceğiz. Umarım çok beğenir. Ayrıca ona ne kadar sevdiğimi söyleyen bir mektup yazdım." },
    vocabulary: [{ word: "Regalar", meaning: "Hediye etmek" }, { word: "Prestar", meaning: "Ödünç vermek" }, { word: "Collar", meaning: "Kolye" }, { word: "Tarta", meaning: "Pasta" }, { word: "Secreto", meaning: "Sır" }],
    questions: [
        { id: 1, question: "Yarın kimin doğum günü?", options: ["Padre", "Madre", "Hermana"], correctAnswer: "Madre" },
        { id: 2, question: "Baba ne yaptı?", options: ["Compró regalo", "Prestó dinero", "Hizo tarta"], correctAnswer: "Prestó dinero" },
        { id: 3, question: "Anne için ne alındı?", options: ["Anillo", "Collar de plata", "Pulsera"], correctAnswer: "Collar de plata" },
        { id: 4, question: "Kız kardeş ne hediye edecek?", options: ["Flores", "Libro", "Perfume"], correctAnswer: "Flores" },
        { id: 5, question: "Erkek kardeş ne hazırladı?", options: ["Cena", "Tarta de chocolate", "Desayuno"], correctAnswer: "Tarta de chocolate" },
        { id: 6, question: "Hediye ne zaman verilecek?", options: ["Por la noche", "Por la mañana", "Por la tarde"], correctAnswer: "Por la mañana" },
        { id: 7, question: "Ayrıca ne yazdı?", options: ["Email", "Mensaje", "Carta"], correctAnswer: "Carta" },
        { id: 8, question: "Planı kime anlattı?", options: ["A la madre", "Al mejor amigo", "A nadie"], correctAnswer: "Al mejor amigo" },
        { id: 9, question: "Planlar nasıl paylaşıldı?", options: ["En público", "En secreto", "En voz alta"], correctAnswer: "En secreto" },
        { id: 10, question: "Mektupta ne yazdı?", options: ["Gracias", "Cuánto la quiere", "Perdón"], correctAnswer: "Cuánto la quiere" }
    ]
};

const unit57Reading: UnitReading = {
    unitId: 57, title: "Kayıp Eşyalar", language: "İspanyolca", level: "A2",
    story: { text: "Ayer perdí algo muy importante: mi cartera. No recuerdo dónde la dejé. Busqué por todos lados pero no encontré nada. Pregunté a todos en la oficina pero nadie la había visto. Alguien me sugirió ir a objetos perdidos. Fui pero no había ninguna cartera allí. Cualquiera podría haberla encontrado. Necesito algo de dinero urgentemente. Todo el mundo me ofreció ayuda. Al final, mi compañero de trabajo la encontró debajo de mi escritorio. No sé cómo no la vi.", translation: "Dün çok önemli bir şey kaybettim: cüzdanımı. Nereye bıraktığımı hatırlamıyorum. Her yeri aradım ama hiçbir şey bulamadım. Ofisteki herkese sordum ama kimse görmemişti. Biri kayıp eşyalara gitmemi önerdi. Gittim ama orada hiç cüzdan yoktu. Herhangi biri bulmuş olabilir. Acil paraya ihtiyacım var. Herkes yardım teklif etti. Sonunda iş arkadaşım masamın altında buldu. Nasıl görmedim bilmiyorum." },
    vocabulary: [{ word: "Algo", meaning: "Bir şey" }, { word: "Nada", meaning: "Hiçbir şey" }, { word: "Alguien", meaning: "Biri" }, { word: "Nadie", meaning: "Kimse" }, { word: "Cualquiera", meaning: "Herhangi biri" }],
    questions: [
        { id: 1, question: "Ne kaybetti?", options: ["Teléfono", "Cartera", "Llaves"], correctAnswer: "Cartera" },
        { id: 2, question: "Ofiste kim görmüştü?", options: ["Todos", "Nadie", "Algunos"], correctAnswer: "Nadie" },
        { id: 3, question: "Nereye gitmesi önerildi?", options: ["A casa", "A objetos perdidos", "A la policía"], correctAnswer: "A objetos perdidos" },
        { id: 4, question: "Kayıp eşyalarda cüzdan var mıydı?", options: ["Sí", "No", "Tal vez"], correctAnswer: "No" },
        { id: 5, question: "Acil neye ihtiyacı vardı?", options: ["Tiempo", "Dinero", "Comida"], correctAnswer: "Dinero" },
        { id: 6, question: "Kim yardım teklif etti?", options: ["Nadie", "Todo el mundo", "Solo uno"], correctAnswer: "Todo el mundo" },
        { id: 7, question: "Cüzdanı kim buldu?", options: ["Él mismo", "Compañero de trabajo", "Jefe"], correctAnswer: "Compañero de trabajo" },
        { id: 8, question: "Cüzdan neredeydi?", options: ["En el baño", "Debajo del escritorio", "En la calle"], correctAnswer: "Debajo del escritorio" },
        { id: 9, question: "Ne kadar yer aradı?", options: ["Un poco", "Por todos lados", "Solo oficina"], correctAnswer: "Por todos lados" },
        { id: 10, question: "Nereye bıraktığını hatırlıyor mu?", options: ["Sí", "No", "Un poco"], correctAnswer: "No" }
    ]
};

const unit58Reading: UnitReading = {
    unitId: 58, title: "Karşılaştırmalar", language: "İspanyolca", level: "A2",
    story: { text: "Mi hermano mayor es más alto que yo pero yo soy más rápido. Él es el más inteligente de la familia pero yo soy tan trabajador como él. Mi hermana menor es la más simpática de todos. Nuestro perro es menos activo que el gato, lo cual es extraño. La casa de mis padres es más grande que mi apartamento pero mi apartamento está mejor ubicado. El coche de mi padre es tan caro como el de mi madre. Mi trabajo es menos estresante que el suyo pero también es menos interesante. En general, somos una familia muy diferente pero nos llevamos bien.", translation: "Ağabeyim benden daha uzun ama ben daha hızlıyım. O ailenin en zekisi ama ben onun kadar çalışkanım. Küçük kız kardeşim hepimizin en sevimli. Köpeğimiz kediden daha az aktif, ki bu garip. Anne babamın evi dairemden daha büyük ama dairem daha iyi konumda. Babamın arabası annemin arabası kadar pahalı. İşim onununkinden daha az stresli ama daha az ilginç de. Genel olarak çok farklı bir aileyiz ama iyi geçiniyoruz." },
    vocabulary: [{ word: "Más...que", meaning: "...den daha" }, { word: "Menos...que", meaning: "...den daha az" }, { word: "Tan...como", meaning: "...kadar" }, { word: "El más", meaning: "En ..." }, { word: "Mejor", meaning: "Daha iyi" }],
    questions: [
        { id: 1, question: "Kim daha uzun?", options: ["Él", "Su hermano mayor", "Su hermana"], correctAnswer: "Su hermano mayor" },
        { id: 2, question: "Kim daha hızlı?", options: ["Él", "Su hermano", "Su hermana"], correctAnswer: "Él" },
        { id: 3, question: "Ailenin en zekisi kim?", options: ["Él", "Su hermano mayor", "Su hermana"], correctAnswer: "Su hermano mayor" },
        { id: 4, question: "En sevimli kim?", options: ["Hermano", "Él", "Hermana menor"], correctAnswer: "Hermana menor" },
        { id: 5, question: "Hangi hayvan daha aktif?", options: ["Perro", "Gato", "Igual"], correctAnswer: "Gato" },
        { id: 6, question: "Anne babanın evi nasıl?", options: ["Más pequeña", "Más grande", "Igual"], correctAnswer: "Más grande" },
        { id: 7, question: "Arabalar fiyat açısından nasıl?", options: ["Padre más caro", "Madre más cara", "Igual de caros"], correctAnswer: "Igual de caros" },
        { id: 8, question: "İşi nasıl?", options: ["Más estresante", "Menos estresante", "Igual"], correctAnswer: "Menos estresante" },
        { id: 9, question: "Aile birbirleriyle nasıl geçiniyor?", options: ["Mal", "Bien", "Regular"], correctAnswer: "Bien" },
        { id: 10, question: "Aile nasıl tanımlanıyor?", options: ["Igual", "Muy diferente", "Aburrida"], correctAnswer: "Muy diferente" }
    ]
};

const unit59Reading: UnitReading = {
    unitId: 59, title: "Günlük Rutinler", language: "İspanyolca", level: "A2",
    story: { text: "Normalmente me levanto temprano, a las seis aproximadamente. Inmediatamente voy al baño y me ducho rápidamente. Generalmente desayuno tranquilamente mientras leo las noticias. Después voy al trabajo lentamente en autobús. Trabajo eficientemente durante ocho horas. Frecuentemente almuerzo con compañeros. Por la tarde, ocasionalmente voy al gimnasio. Finalmente llego a casa cansado. Ceno ligeramente y probablemente veo televisión. Raramente me acuesto tarde. Obviamente los fines de semana son diferentes: me levanto tarde y hago las cosas más relajadamente.", translation: "Normalde erken, yaklaşık altıda kalkarım. Hemen banyoya gider ve hızlıca duş alırım. Genellikle haberleri okurken sakin bir şekilde kahvaltı yaparım. Sonra yavaşça otobüsle işe giderim. Sekiz saat verimli çalışırım. Sık sık iş arkadaşlarıyla öğle yemeği yerim. Öğleden sonra bazen spor salonuna giderim. Sonunda eve yorgun gelirim. Hafif yemek yerim ve muhtemelen televizyon izlerim. Nadiren geç yatarım. Açıkça hafta sonları farklı: geç kalkarım ve işleri daha rahat yaparım." },
    vocabulary: [{ word: "Normalmente", meaning: "Normalde" }, { word: "Rápidamente", meaning: "Hızlıca" }, { word: "Frecuentemente", meaning: "Sık sık" }, { word: "Finalmente", meaning: "Sonunda" }, { word: "Probablemente", meaning: "Muhtemelen" }],
    questions: [
        { id: 1, question: "Saat kaçta kalkıyor?", options: ["A las cinco", "A las seis", "A las siete"], correctAnswer: "A las seis" },
        { id: 2, question: "Nasıl duş alıyor?", options: ["Lentamente", "Rápidamente", "Tranquilamente"], correctAnswer: "Rápidamente" },
        { id: 3, question: "Kahvaltıda ne yapıyor?", options: ["Ve televisión", "Lee noticias", "Escucha música"], correctAnswer: "Lee noticias" },
        { id: 4, question: "İşe nasıl gidiyor?", options: ["Rápido", "Lento", "Normal"], correctAnswer: "Lento" },
        { id: 5, question: "Kaç saat çalışıyor?", options: ["Seis", "Ocho", "Diez"], correctAnswer: "Ocho" },
        { id: 6, question: "Kiminle öğle yemeği yiyor?", options: ["Solo", "Con compañeros", "Con familia"], correctAnswer: "Con compañeros" },
        { id: 7, question: "Öğleden sonra ne yapıyor bazen?", options: ["Cine", "Gimnasio", "Compras"], correctAnswer: "Gimnasio" },
        { id: 8, question: "Eve nasıl geliyor?", options: ["Feliz", "Cansado", "Enojado"], correctAnswer: "Cansado" },
        { id: 9, question: "Geç yatıyor mu?", options: ["Siempre", "Frecuentemente", "Raramente"], correctAnswer: "Raramente" },
        { id: 10, question: "Hafta sonları nasıl?", options: ["Igual", "Más relajado", "Más ocupado"], correctAnswer: "Más relajado" }
    ]
};

const unit60Reading: UnitReading = {
    unitId: 60, title: "A2 Seviye Özeti", language: "İspanyolca", level: "A2",
    story: { text: "He completado el nivel A2 de español y estoy muy orgulloso. En este nivel he aprendido muchas cosas importantes. Ahora puedo hablar sobre el pasado usando diferentes tiempos verbales. Sé pedir comida en un restaurante y hacer reservas en un hotel. Puedo ir de compras y preguntar precios. También he aprendido a expresar mis opiniones y a describir personas. Conozco vocabulario sobre tecnología, medios de comunicación y medio ambiente. Los pronombres relativos e indefinidos ya no son un misterio para mí. Puedo hacer comparaciones entre personas y cosas. Los adverbios me ayudan a expresarme mejor. Mi próximo objetivo es empezar el nivel B1 y seguir mejorando mi español.", translation: "İspanyolca A2 seviyesini tamamladım ve çok gururluyum. Bu seviyede birçok önemli şey öğrendim. Artık farklı fiil zamanlarını kullanarak geçmişten konuşabiliyorum. Restoranda yemek sipariş etmeyi ve otelde rezervasyon yapmayı biliyorum. Alışveriş yapabilir ve fiyat sorabilirim. Ayrıca fikirlerimi ifade etmeyi ve insanları tanımlamayı öğrendim. Teknoloji, medya ve çevre hakkında kelime biliyorum. İlgi ve belirsiz zamirler artık benim için sır değil. İnsanlar ve nesneler arasında karşılaştırma yapabiliyorum. Zarflar kendimi daha iyi ifade etmeme yardımcı oluyor. Bir sonraki hedefim B1 seviyesine başlamak ve İspanyolcamı geliştirmeye devam etmek." },
    vocabulary: [{ word: "Completar", meaning: "Tamamlamak" }, { word: "Orgulloso", meaning: "Gururlu" }, { word: "Objetivo", meaning: "Hedef" }, { word: "Mejorar", meaning: "Geliştirmek" }, { word: "Expresar", meaning: "İfade etmek" }],
    questions: [
        { id: 1, question: "Hangi seviye tamamlandı?", options: ["A1", "A2", "B1"], correctAnswer: "A2" },
        { id: 2, question: "Geçmişten konuşabiliyor mu?", options: ["No", "Sí", "Un poco"], correctAnswer: "Sí" },
        { id: 3, question: "Restoranda ne yapabiliyor?", options: ["Cocinar", "Pedir comida", "Limpiar"], correctAnswer: "Pedir comida" },
        { id: 4, question: "Alışverişte ne sorabiliyor?", options: ["Horarios", "Precios", "Nombres"], correctAnswer: "Precios" },
        { id: 5, question: "Fikirlerini ifade edebiliyor mu?", options: ["No", "Sí", "A veces"], correctAnswer: "Sí" },
        { id: 6, question: "Hangi konularda kelime biliyor?", options: ["Solo comida", "Tecnología y más", "Solo familia"], correctAnswer: "Tecnología y más" },
        { id: 7, question: "Karşılaştırma yapabiliyor mu?", options: ["No", "Sí", "Poco"], correctAnswer: "Sí" },
        { id: 8, question: "Zarflar ne işe yarıyor?", options: ["Nada", "Expresarse mejor", "Confundir"], correctAnswer: "Expresarse mejor" },
        { id: 9, question: "Bir sonraki hedef ne?", options: ["A1", "B1", "B2"], correctAnswer: "B1" },
        { id: 10, question: "Nasıl hissediyor?", options: ["Triste", "Orgulloso", "Cansado"], correctAnswer: "Orgulloso" }
    ]
};

// A2 readings listesi - Curriculum ID 31-60 mapping
// Curriculum ID 31 (Geçmiş Zaman 1) -> unit21Reading (Dünkü Gün)
// Curriculum ID 41 (İş Görüşmesi) -> unit31Reading (İş Görüşmesi)
// Curriculum ID 51 (Ev ve Taşınma) -> unit51Reading (Yeni Ev Arayışı)
const a2Readings: { [key: number]: UnitReading } = {
    // Curriculum ID 31-40 -> unit21-30 içerikleri
    31: unit21Reading, 32: unit22Reading, 33: unit23Reading, 34: unit24Reading, 35: unit25Reading,
    36: unit26Reading, 37: unit27Reading, 38: unit28Reading, 39: unit29Reading, 40: unit30Reading,
    // Curriculum ID 41-50 -> unit31-40 içerikleri
    41: unit31Reading, 42: unit32Reading, 43: unit33Reading, 44: unit34Reading, 45: unit35Reading,
    46: unit36Reading, 47: unit37Reading, 48: unit38Reading, 49: unit39Reading, 50: unit40Reading,
    // Curriculum ID 51-60 -> unit41-50 + yeni unit51-60 içerikleri
    51: unit51Reading, 52: unit52Reading, 53: unit53Reading, 54: unit54Reading, 55: unit55Reading,
    56: unit56Reading, 57: unit57Reading, 58: unit58Reading, 59: unit59Reading, 60: unit60Reading
};

export function getA2ReadingForUnit(unitId: number): UnitReading | undefined {
    return a2Readings[unitId];
}
