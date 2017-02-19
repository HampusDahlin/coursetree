var data = $.csv.toObjects(`"courseCode","courseName","courseHolderCode","courseHolderName","studyPeriod"
"BOM060","Miljöriskanalys för ingenjörer","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP3"
"CIP011","Design av teknikbaserade innovationer och marknader","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP4"
"CIP017","Teknikbaserat entreprenörskap","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP2"
"CIP058","Immaterialrättsliga strategier","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP2"
"CIP061","Patent och innovationshantering","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP3"
"CIU176","Prototyping in interaction design","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP2"
"CIU180","Tangible interaction","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"CIU186","Information visualization","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP2"
"CIU187","Information visualization","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"CIU196","Mobile computing - Design och implementation","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"CIU207","Lärande och ledarskap i praktiken 1","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP4"
"CIU212","Lärande och ledarskap i praktiken 2","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP4"
"CIU215","Naturvetenskapligt och tekniskt lärande 1","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP4"
"CIU220","Utbildningens uppgifter och ramar","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP1"
"CIU225","Leda individ och grupp","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP3"
"CIU235","Project in interaction design","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"CIU241","Design av teknologi för barn","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP3"
"CIU255","Naturvetenskapligt och tekniskt lärande 2","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP4"
"CIU260","Utvecklingsprojekt i praktiken","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP4"
"CIU265","Interaction design project 1","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP2"
"CIUX02","Masterexamensarbete vid Tillämpad informationsteknologi","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"CIUX06","Masterexamensarbete vid Lärande och ledarskap","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP4"
"CTE031","Teknikhistoria","MTS","-","LP4"
"DAT015","Maskinorienterad programmering","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"DAT016","Programmering av inbyggda system","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"DAT026","Matematisk modellering och problemlösning","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"DAT060","Matematisk logik för datavetenskap","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP2"
"DAT076","Web-applikationer","TIDAL","DATATEKNIK, HÖGSKOLEINGENJÖR","LP4"
"DAT085","Datavetenskapligt projekt","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"DAT105","Datorarkitektur","MPEES","INBYGGDA ELEKTRONIKSYSTEM, MASTERPROGRAM","LP4"
"DAT140","Typer för bevis och program","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP1"
"DAT147","Teknisk rapportskrivning inom Datorer, Nätverk och System","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP1"
"DAT151","Programspråk","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"DAT156","Aesthetics of interaction","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP1"
"DAT157","Design av användarupplevelser","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP3"
"DAT166","Software product line engineering","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP4"
"DAT205","Advanced computer graphics","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"DAT215","Design och konstruktion av grafiska gränssnitt","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"DAT216","Design och konstruktion av grafiska gränssnitt","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"DAT220","Advanced software architecture","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP4"
"DAT230","Requirements engineering","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP2"
"DAT231","Requirements engineering","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP2"
"DAT235","Forskningsinriktad kurs inom data- och informationsteknik","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"DAT240","Model-driven engineering","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP4"
"DAT245","Empirical software engineering","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP2"
"DAT246","Empirisk programvaruteknik","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP4"
"DAT255","Software engineering project","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"DAT260","Model-based testing","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP4"
"DAT261","Model-based testing","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP4"
"DAT265","Software evolution project","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP3"
"DAT280","Parallell funktionell programmering","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"DAT295","Autonoma och samverkande fordonssystem","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP4"
"DAT300","IKT-stöd för ökad anpassningsförmåga och säkerhet i smarta elnät","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP4"
"DAT305","Industriellt projekt i mjukvaruutveckling","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP4"
"DAT315","Datavetaren i samhället","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"DAT320","Mjukvarukvalitet","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP2"
"DAT321","Mjukvarukvalitet","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP1"
"DAT325","Matematikens domänspecifika språk","TKDAT","DATATEKNIK, CIVILINGENJÖR","LP3"
"DATX05","Masterexamensarbete vid Data- och informationsteknik","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"DATX60","Masterexamensarbete vid Data- och informationsteknik","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"EDA092","Operativsystem","TKDAT","DATATEKNIK, CIVILINGENJÖR","LP4"
"EDA122","Feltoleranta datorsystem","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP2"
"EDA222","Realtidssystem","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP4"
"EDA234","Digital konstruktion, projektkurs","TKELT","ELEKTROTEKNIK, CIVILINGENJÖR","LP4"
"EDA263","Datasäkerhet","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP4"
"EDA283","Parallella datorsystem","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP2"
"EDA322","Digital konstruktion","TKDAT","DATATEKNIK, CIVILINGENJÖR","LP4"
"EDA344","Datakommunikation","TKDAT","DATATEKNIK, CIVILINGENJÖR","LP4"
"EDA387","Datornätverk","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP2"
"EDA397","Agile development processes","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP4"
"EDA421","Parallella och distribuerade realtidssystem","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP4"
"EDA433","Grundläggande datorteknik","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP3"
"EDA491","Nätverkssäkerhet","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP4"
"ENM015","Teknikevolution och miljö","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP4"
"ENM021","Tillämpad industriell ekologi","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP4"
"ENM035","Bedömning av hållbarhet","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP3"
"ENM090","Miljökonsekvensbeskrivning","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP1"
"ENM130","Hantering av intressenter för hållbar utveckling","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP3"
"ENM140","Spelteori och rationalitet","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP4"
"ENM145","Ledarskap för hållbarhetsomställningar - förberedande kurs för Challenge Lab","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP4"
"EOE054","Mätteknik","TKELT","ELEKTROTEKNIK, CIVILINGENJÖR","LP4"
"FFR105","Stokastiska optimeringsmetoder","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP2"
"FFR110","Beräkningsbiologi 1","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP4"
"FFR115","Beräkningsbiologi 2","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP4"
"FFR120","Simulering av komplexa system","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP3"
"FFR125","Autonoma agenter","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP4"
"FFR135","Artificiella neurala nätverk","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP4"
"FFR141","Seminarier inom komplexa system","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP4"
"FFR160","Hållbar utveckling","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP4"
"FFR166","Mekanismerna bakom miljöförändringar","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP2"
"FFY621","Fysik för ingenjörer","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP2"
"IDY040","Technological change and economic transformation","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP2"
"IEK415","Industriell ekonomi","TKELT","ELEKTROTEKNIK, CIVILINGENJÖR","LP4"
"IPR010","Managing development projects","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP4"
"ISM030","Service contract management","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP4"
"ITS022","Teknik för ett hållbart globalt samhälle","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP1"
"ITS023","Teknik för ett hållbart globalt samhälle","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP1"
"ITS065","Genus och teknik","MTS","-","LP2"
"ITS070","Nya medier: Teknik, mobilitet och samhällsförändring","MTS","-","LP2"
"KBB032","Biokemi och molekylärbiologi","MPBIO","BIOTEKNIK, MASTERPROGRAM","LP2"
"KTK111","Kemi för ingenjörer","TKIEK","INDUSTRIELL EKONOMI, CIVILINGENJÖR","LP3"
"LSP310","Kommunikation och ingenjörskompetens","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"LSP530","Skönlitteratur på engelska för ingenjörer","SPRAK","-","LP2"
"MVE045","Matematisk analys","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP2"
"MVE050","Matematisk statistik och diskret matematik","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"MVE051","Matematisk statistik och diskret matematik","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"MVE065","Specialkurs teknisk matematik","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE085","Flervariabelanalys","TKVOV","VÄG- OCH VATTENBYGGNAD, CIVILINGENJÖR","LP3"
"MVE095","Optioner och matematik","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE140","Sannolikhetsteorins grunder","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE150","Algebra","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE155","Statistisk slutledning","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE160","Mathematical modelling","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE161","Ordinära differentialekvationer och matematisk modellering","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE162","Ordinära differentialekvationer och matematisk modellering","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE165","Linjär och heltalsoptimering med tillämpningar","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE170","Grundläggande stokastiska processer","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE186","Datorintensiva statistiska metoder","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE190","Linjära statistiska modeller","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP2"
"MVE220","Finansiell risk","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP3"
"MVE255","Matematisk analys i flera variabler","TKMAS","MASKINTEKNIK, CIVILINGENJÖR","LP4"
"MVE326","Principer för statistisk slutledning","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP3"
"MVE330","Stokastiska processer","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"MVE365","Problemlösning och lärande","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP4"
"MVE370","Matematik och samhälle","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP4"
"MVE375","Matematik, undervisning och bedömning","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP1"
"MVE380","Analysera lärande","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP4"
"MVE385","Projektkurs i matematisk och statistisk modellering","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP3"
"MVE390","Lärande och ledarskap i praktiken - breddning","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP4"
"MVE405","Individual project in mathematics and mathematical statistics","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP2"
"MVE440","Statistisk slutledning för stora datamängder","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"PPU225","Förstå brukare och bruk","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"SSY180","Medicin för tekniker","MPBME","MEDICINSK TEKNIK, MASTERPROGRAM","LP4"
"SSY200","Elektromagnetiska beräkningar","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"TDA183","Beräkningsmodeller","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"TDA206","Diskret optimering","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"TDA231","Algoritmer för maskininlärning och slutledning","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"TDA251","Algoritmer, fortsättningskurs","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP2"
"TDA283","Kompilatorkonstruktion","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"TDA289","Människa - dator interaktion","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP3"
"TDA293","Software engineering med formella metoder","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP2"
"TDA297","Distribuerade system, fortsättningskurs","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP3"
"TDA335","Programming project, major","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP3"
"TDA342","Avancerad funktionell programmering","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP3"
"TDA351","Kryptografi","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"TDA352","Kryptografi","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"TDA357","Databaser","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"TDA361","Computer graphics","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"TDA367","Objektorienterat programmeringsprojekt","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"TDA383","Parallell programmering","TKDAT","DATATEKNIK, CIVILINGENJÖR","LP3"
"TDA416","Datastrukturer och algoritmer","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"TDA452","Funktionell programmering","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"TDA486","Human-centred design","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP1"
"TDA492","Graphical interfaces","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"TDA493","Graphical interfaces","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"TDA497","Interaction design methodology","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"TDA507","Beräkningsmetoder inom bioinformatik","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP2"
"TDA516","Kommunikation engelska och ingenjörskompetens","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"TDA517","Kommunikation engelska och ingenjörskompetens","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"TDA545","Objektorienterad programvaruutveckling","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP2"
"TDA550","Objektorienterad programvaruutveckling, fortsättningskurs","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"TDA566","Testning, felsökning och verifiering","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"TDA567","Testning, felsökning och verifiering","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"TDA572","Spelmotorarkitektur","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"TDA580","Gameplay design","MPIDE","INTERAKTIONSDESIGN, MASTERPROGRAM","LP4"
"TDA593","Modelldriven mjukvaruutveckling","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP2"
"TDA596","Distribuerade system","MPCSN","DATORER, NÄTVERK OCH SYSTEM, MASTERPROGRAM","LP4"
"TDA602","Språkbaserad datasäkerhet","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"TEK010","Creating new business","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP4"
"TEK015","R&D strategy and organization","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP2"
"TEK016","Strategic management of innovation and technology","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP4"
"TEK017","Strategi","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP4"
"TEK030","Organisatoriskt beteende","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP4"
"TEK050","Affärsplanering för tillväxtföretag: Venture Cup","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP4"
"TEK130","Vetenskapshistoria","MTS","-","LP4"
"TEK190","Research design and methods","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP4"
"TEK211","Hantering av varumärkesidentiteter","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP4"
"TEK216","Idéutvärdering","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP3"
"TEK225","Teknik och samhälle","MTS","-","LP4"
"TEK236","Socialt entreprenörskap","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP4"
"TEK250","Industrial management","MPQOM","KVALITETS- OCH VERKSAMHETSUTVECKLING, MASTERPROGRAM","LP4"
"TEK261","Business marketing and purchasing","MPSCM","SUPPLY CHAIN MANAGEMENT, MASTERPROGRAM","LP4"
"TEK280","Strategy creation and change","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP1"
"TEK296","Ledning och hantering av immateriella tillgångar","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP2"
"TEK300","Avancerad immaterialrättsteori","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP2"
"TEK306","Ledning av öppen innovation och nätverksbaserade marknader","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP4"
"TEK315","Strategic management and economics of intellectual property","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP2"
"TEK320","ICT economics and policy","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP2"
"TEK365","Project management","MPSOF","SOFTWARE ENGINEERING AND TECHNOLOGY - UTVECKLING OCH IMPLEMENTERING AV MJUKVARA, MASTERPROGRAM","LP3"
"TEK405","Organisatoriskt beteende - orientering","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP3"
"TEK451","Lärande och ledande i dysfunktionella organisationer","MPLOL","LÄRANDE OCH LEDARSKAP, MSC PROGR","LP2"
"TEK455","Kunskapsbaserat affärsskapande och ledning","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP4"
"TEK495","Design och innovation","MPMEI","INNOVATIONSLEDNING, MASTERPROGRAM","LP1"
"TEK510","Organisering för innovation","MPBDP","ENTREPRENÖRSKAP OCH AFFÄRSDESIGN, MASTERPROGRAM","LP4"
"TIF106","Icke-jämviktsprocesser i fysik, kemi och biologi","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP4"
"TIF150","Informationsteori för komplexa system","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP3"
"TIF155","Dynamiska system","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP3"
"TIF160","Humanoida robotar","MPCAS","KOMPLEXA ADAPTIVA SYSTEM, MASTERPROGRAM","LP3"
"TIN092","Algorithms","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"TIN093","Algoritmer","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"TIN172","Artificiell intelligens","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"TIN173","Artificiell intelligens","MPALG","DATAVETENSKAP - ALGORITMER, PROGRAMSPRÅK OCH LOGIK, MASTERPROGRAM","LP4"
"TMA026","Partiella differentialekvationer fortsättningskurs","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"TMA265","Numerisk linjär algebra","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP1"
"TMA285","Finansiella derivat och partiella differentialekvationer","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"TMA362","Fourieranalys","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP2"
"TMA372","Partiella differentialekvationer, grundkurs","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"TMA401","Funktionalanalys","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP2"
"TMA881","Högprestandaberäkning","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"TMA947","Olinjär optimering","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"TMS016","Statistisk bildbehandling","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"TMS041","Multivariat statistisk analys","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP1"
"TMS087","Finansiella tidsserier","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"TMS150","Statistisk databehandling","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP4"
"TMS165","Stokastisk analys","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP2"
"TMV027","Ändliga automater och formella språk","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"TMV100","Integrationsteori","MPENM","MATEMATIK OCH BERÄKNINGSVETENSKAP, MASTERPROGRAM","LP2"
"TMV200","Diskret matematik","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"TMV206","Linjär algebra","TKITE","INFORMATIONSTEKNIK, CIVILINGENJÖR","LP4"
"UNA016","Miljöpolitiska styrmedel","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP4"
"VMI010","Miljösystemanalys","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP4"
"VMI035","Miljömanagement","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP4"
"VTA135","Audioteknik och akustik","MPSOV","LJUD OCH VIBRATIONER, MASTERPROGRAM","LP2"
"VTM081","Livscykelanalys","MPTSE","INDUSTRIELL EKOLOGI, MASTERPROGRAM","LP4"`
	);