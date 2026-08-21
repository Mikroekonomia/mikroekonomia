const macroBookChapters = [
  { part: 'I', partTitle: 'Pomiar gospodarki', number: 1, title: 'Produkt krajowy brutto i dochód narodowy', sections: ['Obieg okrężny dochodu', 'Składniki PKB', 'PKB nominalny i realny', 'Ograniczenia PKB'] },
  { part: 'I', partTitle: 'Pomiar gospodarki', number: 2, title: 'Poziom cen i koszty życia', sections: ['Indeks cen konsumpcyjnych', 'Deflator PKB', 'Inflacja i siła nabywcza', 'Indeksacja'] },
  { part: 'II', partTitle: 'Gospodarka w długim okresie', number: 3, title: 'Produkcja, produktywność i wzrost', sections: ['Funkcja produkcji', 'Kapitał i technologia', 'Wzrost produktywności', 'Polityka wzrostu'] },
  { part: 'II', partTitle: 'Gospodarka w długim okresie', number: 4, title: 'Oszczędności, inwestycje i system finansowy', sections: ['Rynki finansowe', 'Fundusze pożyczkowe', 'Oszczędności narodowe', 'Ryzyko i wycena aktywów'] },
  { part: 'II', partTitle: 'Gospodarka w długim okresie', number: 5, title: 'Rynek pracy i bezrobocie', sections: ['Pomiar rynku pracy', 'Bezrobocie frykcyjne', 'Bezrobocie strukturalne', 'Płace i instytucje rynku pracy'] },
  { part: 'III', partTitle: 'Pieniądz i ceny', number: 6, title: 'Pieniądz, banki i bank centralny', sections: ['Funkcje pieniądza', 'Podaż pieniądza', 'Kreacja pieniądza', 'Narzędzia banku centralnego'] },
  { part: 'III', partTitle: 'Pieniądz i ceny', number: 7, title: 'Inflacja i stopy procentowe', sections: ['Ilościowa teoria pieniądza', 'Podatek inflacyjny', 'Efekt Fishera', 'Koszty inflacji'] },
  { part: 'IV', partTitle: 'Gospodarka otwarta', number: 8, title: 'Rachunki gospodarki otwartej', sections: ['Eksport netto', 'Przepływy kapitałowe', 'Tożsamości rachunkowe', 'Bilans płatniczy'] },
  { part: 'IV', partTitle: 'Gospodarka otwarta', number: 9, title: 'Kurs walutowy i gospodarka otwarta', sections: ['Kurs nominalny i realny', 'Parytet siły nabywczej', 'Rynek walutowy', 'Polityka kursowa'] },
  { part: 'V', partTitle: 'Wahania krótkookresowe', number: 10, title: 'Cykl koniunkturalny i model AD–AS', sections: ['Popyt zagregowany', 'Podaż zagregowana', 'Wstrząsy gospodarcze', 'Powrót do równowagi'] },
  { part: 'V', partTitle: 'Wahania krótkookresowe', number: 11, title: 'Polityka fiskalna', sections: ['Wydatki i podatki', 'Mnożnik', 'Automatyczne stabilizatory', 'Dług publiczny'] },
  { part: 'V', partTitle: 'Wahania krótkookresowe', number: 12, title: 'Polityka pieniężna', sections: ['Kanały transmisji', 'Stopy procentowe', 'Reguły i wiarygodność', 'Niestandardowe narzędzia'] },
  { part: 'V', partTitle: 'Wahania krótkookresowe', number: 13, title: 'Inflacja, bezrobocie i stabilizacja', sections: ['Krzywa Phillipsa', 'Oczekiwania', 'Dezinflacja', 'Dylematy polityki stabilizacyjnej'] }
];

const macroBookConcepts = [
  { chapter: 1, term: 'Produkt krajowy brutto (PKB)', definition: 'Rynkowa wartość dóbr i usług finalnych wytworzonych na terytorium kraju w określonym czasie.' },
  { chapter: 1, term: 'Wartość dodana', definition: 'Przyrost wartości powstający w przedsiębiorstwie, równy wartości produkcji pomniejszonej o zużycie dóbr pośrednich.' },
  { chapter: 1, term: 'Dobro finalne', definition: 'Dobro nabywane przez ostatecznego użytkownika, a nie przeznaczone do dalszego przetwarzania w badanym okresie.' },
  { chapter: 1, term: 'PKB nominalny', definition: 'Wartość bieżącej produkcji obliczona przy użyciu cen obowiązujących w tym samym okresie.' },
  { chapter: 1, term: 'PKB realny', definition: 'Wartość produkcji wyceniona w cenach stałych, dzięki czemu zmiana mierzy przede wszystkim zmianę ilości.' },
  { chapter: 1, term: 'Produkt narodowy brutto', definition: 'Dochód osiągany przez rezydentów kraju, niezależnie od miejsca wykorzystania należących do nich czynników produkcji.' },
  { chapter: 1, term: 'Recesja', definition: 'Znaczące i rozlane na wiele obszarów osłabienie aktywności gospodarczej utrzymujące się przez pewien czas.' },
  { chapter: 1, term: 'PKB per capita', definition: 'PKB przypadający na jednego mieszkańca; przybliża przeciętną skalę produkcji lub dochodu, lecz nie pokazuje jego podziału.' },

  { chapter: 2, term: 'Indeks cen konsumpcyjnych (CPI)', definition: 'Miara kosztu reprezentatywnego koszyka dóbr i usług kupowanych przez gospodarstwa domowe względem okresu bazowego.' },
  { chapter: 2, term: 'Deflator PKB', definition: 'Indeks cen wszystkich dóbr i usług finalnych uwzględnionych w krajowym PKB.' },
  { chapter: 2, term: 'Stopa inflacji', definition: 'Procentowe tempo wzrostu wybranego indeksu ogólnego poziomu cen między okresami.' },
  { chapter: 2, term: 'Deflacja', definition: 'Trwały spadek ogólnego poziomu cen, czyli ujemna stopa inflacji.' },
  { chapter: 2, term: 'Dezinflacja', definition: 'Spowolnienie tempa wzrostu cen; ceny nadal rosną, ale wolniej niż wcześniej.' },
  { chapter: 2, term: 'Inflacja bazowa', definition: 'Miara inflacji ograniczająca wpływ najbardziej zmiennych składników, aby lepiej uchwycić trwalszą presję cenową.' },
  { chapter: 2, term: 'Indeksacja', definition: 'Automatyczne dostosowanie płatności lub wartości umowy do zmiany ustalonego indeksu cen.' },
  { chapter: 2, term: 'Siła nabywcza pieniądza', definition: 'Ilość dóbr i usług możliwa do kupienia za jednostkę pieniądza; maleje, gdy poziom cen rośnie.' },

  { chapter: 3, term: 'Produktywność pracy', definition: 'Wielkość produkcji przypadająca na jednostkę nakładu pracy, na przykład godzinę lub zatrudnionego.' },
  { chapter: 3, term: 'Kapitał rzeczowy', definition: 'Wytworzone zasoby używane do dalszej produkcji, takie jak maszyny, budynki i infrastruktura.' },
  { chapter: 3, term: 'Kapitał ludzki', definition: 'Wiedza, umiejętności, doświadczenie i zdrowie zwiększające zdolność ludzi do wytwarzania wartości.' },
  { chapter: 3, term: 'Postęp technologiczny', definition: 'Ulepszenie sposobu łączenia zasobów, które pozwala uzyskać większą produkcję z tych samych nakładów.' },
  { chapter: 3, term: 'Malejące przychody z kapitału', definition: 'Zjawisko, w którym kolejna jednostka kapitału daje coraz mniejszy przyrost produkcji przy pozostałych nakładach stałych.' },
  { chapter: 3, term: 'Efekt doganiania', definition: 'Możliwość szybszego wzrostu gospodarek uboższych dzięki przyjmowaniu istniejących technologii i zwiększaniu niskiego zasobu kapitału.' },
  { chapter: 3, term: 'Wzrost ekstensywny', definition: 'Zwiększanie produkcji przez użycie większej ilości pracy, kapitału lub zasobów naturalnych.' },
  { chapter: 3, term: 'Wzrost intensywny', definition: 'Zwiększanie produkcji przede wszystkim dzięki wyższej produktywności i lepszej technologii.' },

  { chapter: 4, term: 'Oszczędności narodowe', definition: 'Część dochodu narodowego niewykorzystana na konsumpcję prywatną ani zakupy państwa.' },
  { chapter: 4, term: 'Oszczędności prywatne', definition: 'Dochód gospodarstw domowych pozostający po zapłacie podatków i sfinansowaniu konsumpcji.' },
  { chapter: 4, term: 'Oszczędności publiczne', definition: 'Różnica między dochodami państwa a jego bieżącymi zakupami i transferami w przyjętym ujęciu rachunkowym.' },
  { chapter: 4, term: 'Inwestycje', definition: 'Wydatki zwiększające zasób kapitału rzeczowego, zapasy lub zasób mieszkaniowy gospodarki.' },
  { chapter: 4, term: 'Rynek funduszy pożyczkowych', definition: 'Model rynku, na którym oszczędności tworzą podaż środków, a inwestorzy zgłaszają na nie popyt.' },
  { chapter: 4, term: 'Dywersyfikacja', definition: 'Ograniczanie ryzyka przez rozłożenie środków między aktywa, których wyniki nie zmieniają się identycznie.' },
  { chapter: 4, term: 'Wartość bieżąca', definition: 'Dzisiejsza wartość przyszłej płatności obliczona przez zdyskontowanie jej odpowiednią stopą procentową.' },
  { chapter: 4, term: 'Efekt wypierania', definition: 'Spadek prywatnych inwestycji wywołany wzrostem popytu państwa na finansowanie i presją na stopy procentowe.' },

  { chapter: 5, term: 'Stopa bezrobocia', definition: 'Udział osób bez pracy, aktywnie jej poszukujących i gotowych ją podjąć w zasobie siły roboczej.' },
  { chapter: 5, term: 'Współczynnik aktywności zawodowej', definition: 'Udział siły roboczej, czyli pracujących i bezrobotnych, w ludności w wieku objętym pomiarem.' },
  { chapter: 5, term: 'Bezrobocie frykcyjne', definition: 'Krótkotrwałe bezrobocie związane z poszukiwaniem pracy i dopasowywaniem pracowników do ofert.' },
  { chapter: 5, term: 'Bezrobocie strukturalne', definition: 'Bezrobocie wynikające z trwałego niedopasowania kwalifikacji, lokalizacji lub instytucji do popytu na pracę.' },
  { chapter: 5, term: 'Bezrobocie cykliczne', definition: 'Część bezrobocia pojawiająca się, gdy popyt na pracę spada wskutek osłabienia koniunktury.' },
  { chapter: 5, term: 'Naturalna stopa bezrobocia', definition: 'Długookresowa stopa bezrobocia zgodna z równowagą rynku pracy i normalnymi przepływami pracowników.' },
  { chapter: 5, term: 'Płaca efektywnościowa', definition: 'Płaca ustalana powyżej poziomu równowagi w celu zwiększenia produktywności, lojalności lub jakości zatrudnionych.' },
  { chapter: 5, term: 'Bierni zawodowo', definition: 'Osoby, które nie pracują i nie są zaliczane do bezrobotnych, ponieważ nie szukają aktywnie zatrudnienia lub nie są gotowe go podjąć.' },

  { chapter: 6, term: 'Pieniądz', definition: 'Powszechnie akceptowany środek wymiany pełniący także funkcję jednostki rozrachunkowej i przechowywania wartości.' },
  { chapter: 6, term: 'Płynność', definition: 'Łatwość i szybkość zamiany aktywa na środek płatniczy bez istotnej utraty wartości.' },
  { chapter: 6, term: 'Baza monetarna', definition: 'Gotówka w obiegu oraz rezerwy banków utrzymywane w banku centralnym.' },
  { chapter: 6, term: 'Rezerwa obowiązkowa', definition: 'Minimalna część określonych zobowiązań banku, którą musi on utrzymywać w formie rezerw.' },
  { chapter: 6, term: 'Mnożnik kreacji pieniądza', definition: 'Relacja szerszej miary pieniądza do bazy monetarnej, zależna od zachowań banków i posiadaczy gotówki.' },
  { chapter: 6, term: 'Operacje otwartego rynku', definition: 'Zakupy lub sprzedaż aktywów przez bank centralny wykorzystywane do wpływania na płynność i warunki pieniężne.' },
  { chapter: 6, term: 'Stopa rezerw', definition: 'Część depozytów utrzymywana przez bank jako rezerwy zamiast przeznaczania jej na kredyty lub inne aktywa.' },
  { chapter: 6, term: 'Bank centralny', definition: 'Instytucja odpowiedzialna za politykę pieniężną, emisję pieniądza banku centralnego i stabilność systemu płatniczego.' },

  { chapter: 7, term: 'Ilościowa teoria pieniądza', definition: 'Ujęcie łączące długookresowy poziom cen z ilością pieniądza, szybkością jego obiegu i realną produkcją.' },
  { chapter: 7, term: 'Neutralność pieniądza', definition: 'Długookresowa własność modelu, w którym zmiana podaży pieniądza wpływa na wielkości nominalne, lecz nie na realną produkcję.' },
  { chapter: 7, term: 'Podatek inflacyjny', definition: 'Utrata realnej wartości zasobów pieniężnych wynikająca z finansowania wydatków emisją pieniądza i wzrostem cen.' },
  { chapter: 7, term: 'Stopa procentowa nominalna', definition: 'Stopa podana w umowie finansowej bez usunięcia wpływu zmiany poziomu cen.' },
  { chapter: 7, term: 'Stopa procentowa realna', definition: 'Przyrost siły nabywczej kapitału; w przybliżeniu stopa nominalna pomniejszona o inflację.' },
  { chapter: 7, term: 'Efekt Fishera', definition: 'Długookresowa tendencja nominalnej stopy procentowej do zmiany wraz z oczekiwaną inflacją przy danej stopie realnej.' },
  { chapter: 7, term: 'Koszt zdartych zelówek', definition: 'Koszty częstszego zarządzania gotówką i płatnościami, gdy inflacja zwiększa koszt trzymania pieniądza.' },
  { chapter: 7, term: 'Koszt zmiany jadłospisów', definition: 'Koszty częstego aktualizowania cen, systemów, ofert i informacji cenowej w warunkach inflacji.' },

  { chapter: 8, term: 'Eksport netto', definition: 'Wartość eksportu dóbr i usług pomniejszona o wartość importu.' },
  { chapter: 8, term: 'Bilans handlowy', definition: 'Zestawienie wartości eksportu i importu dóbr oraz usług; jego saldo jest eksportem netto.' },
  { chapter: 8, term: 'Odpływ kapitału netto', definition: 'Zakupy aktywów zagranicznych przez rezydentów pomniejszone o zakupy aktywów krajowych przez nierezydentów.' },
  { chapter: 8, term: 'Bilans płatniczy', definition: 'Usystematyzowany zapis transakcji rezydentów kraju z zagranicą w określonym okresie.' },
  { chapter: 8, term: 'Rachunek bieżący', definition: 'Część bilansu płatniczego obejmująca handel, dochody pierwotne i transfery bieżące.' },
  { chapter: 8, term: 'Rachunek finansowy', definition: 'Część bilansu płatniczego rejestrująca transakcje dotyczące aktywów i zobowiązań finansowych.' },
  { chapter: 8, term: 'Bezpośrednie inwestycje zagraniczne', definition: 'Inwestycje zagraniczne dające inwestorowi trwały wpływ na przedsiębiorstwo i zwykle udział w zarządzaniu.' },
  { chapter: 8, term: 'Tożsamość oszczędności i inwestycji', definition: 'Zależność rachunkowa pokazująca, że oszczędności finansują inwestycje krajowe oraz nabycie aktywów zagranicznych.' },

  { chapter: 9, term: 'Nominalny kurs walutowy', definition: 'Cena jednej waluty wyrażona w jednostkach innej waluty.' },
  { chapter: 9, term: 'Realny kurs walutowy', definition: 'Relacja cen dóbr krajowych i zagranicznych po uwzględnieniu nominalnego kursu walutowego.' },
  { chapter: 9, term: 'Aprecjacja waluty', definition: 'Wzrost wartości waluty względem innej waluty w przyjętej konwencji notowania.' },
  { chapter: 9, term: 'Deprecjacja waluty', definition: 'Spadek wartości waluty względem innej waluty w systemie kursu płynnego.' },
  { chapter: 9, term: 'Parytet siły nabywczej', definition: 'Hipoteza, zgodnie z którą kurs walutowy w długim okresie odzwierciedla relację poziomów cen między krajami.' },
  { chapter: 9, term: 'Kurs płynny', definition: 'System, w którym kurs walutowy jest kształtowany głównie przez popyt i podaż na rynku.' },
  { chapter: 9, term: 'Kurs stały', definition: 'System, w którym władze utrzymują kurs blisko ustalonego poziomu przez interwencje i odpowiednią politykę.' },
  { chapter: 9, term: 'Interwencja walutowa', definition: 'Kupno lub sprzedaż walut przez bank centralny w celu wpływania na kurs lub płynność rynku.' },

  { chapter: 10, term: 'Cykl koniunkturalny', definition: 'Nieregularne wahania aktywności gospodarczej wokół długookresowego trendu.' },
  { chapter: 10, term: 'Popyt zagregowany', definition: 'Łączna planowana wielkość wydatków na krajowe dobra i usługi przy różnych poziomach cen.' },
  { chapter: 10, term: 'Krótkookresowa podaż zagregowana', definition: 'Wielkość produkcji oferowana przy różnych poziomach cen, gdy część cen i płac dostosowuje się z opóźnieniem.' },
  { chapter: 10, term: 'Długookresowa podaż zagregowana', definition: 'Poziom produkcji wynikający z zasobów, technologii i instytucji, niezależny w modelu od ogólnego poziomu cen.' },
  { chapter: 10, term: 'Produkcja potencjalna', definition: 'Poziom produkcji możliwy do utrzymania przy normalnym wykorzystaniu zasobów i stabilnej presji inflacyjnej.' },
  { chapter: 10, term: 'Luka popytowa', definition: 'Różnica między faktyczną produkcją a produkcją potencjalną, zwykle wyrażana procentowo.' },
  { chapter: 10, term: 'Wstrząs popytowy', definition: 'Nieoczekiwana zmiana jednego ze składników popytu zagregowanego lub warunków finansowania.' },
  { chapter: 10, term: 'Wstrząs podażowy', definition: 'Nagła zmiana kosztów lub zdolności produkcyjnych przesuwająca krótkookresową podaż zagregowaną.' },

  { chapter: 11, term: 'Polityka fiskalna', definition: 'Decyzje państwa dotyczące wydatków, podatków i salda budżetu wpływające na gospodarkę.' },
  { chapter: 11, term: 'Mnożnik wydatków', definition: 'Stosunek łącznej zmiany produkcji do początkowej autonomicznej zmiany wydatków.' },
  { chapter: 11, term: 'Automatyczne stabilizatory', definition: 'Elementy budżetu zmieniające dochody i wydatki bez nowej decyzji władz, łagodząc wahania popytu.' },
  { chapter: 11, term: 'Deficyt budżetowy', definition: 'Nadwyżka wydatków sektora publicznego nad jego dochodami w danym okresie.' },
  { chapter: 11, term: 'Dług publiczny', definition: 'Skumulowane zobowiązania sektora publicznego wynikające z wcześniejszego finansowania niedoborów.' },
  { chapter: 11, term: 'Deficyt cykliczny', definition: 'Część deficytu wynikająca z odchylenia aktywności gospodarczej od jej normalnego poziomu.' },
  { chapter: 11, term: 'Deficyt strukturalny', definition: 'Szacowane saldo budżetu po usunięciu wpływu bieżących wahań cyklicznych.' },
  { chapter: 11, term: 'Ekwiwalencja ricardiańska', definition: 'Hipoteza, że gospodarstwa mogą oszczędzać obniżkę podatków finansowaną długiem, przewidując przyszłe podatki.' },

  { chapter: 12, term: 'Polityka pieniężna', definition: 'Działania banku centralnego kształtujące warunki finansowe, podaż pieniądza i popyt w gospodarce.' },
  { chapter: 12, term: 'Stopa referencyjna', definition: 'Kluczowa stopa banku centralnego wyznaczająca krótkookresowe warunki finansowania w gospodarce.' },
  { chapter: 12, term: 'Mechanizm transmisji monetarnej', definition: 'Łańcuch zależności, przez który decyzje banku centralnego wpływają na rynki, wydatki, produkcję i ceny.' },
  { chapter: 12, term: 'Cel inflacyjny', definition: 'Publicznie określony poziom lub przedział inflacji, do którego bank centralny dąży w średnim okresie.' },
  { chapter: 12, term: 'Luzowanie ilościowe', definition: 'Zakupy aktywów na dużą skalę służące obniżaniu dłuższych stóp i poprawie warunków finansowych.' },
  { chapter: 12, term: 'Pułapka płynności', definition: 'Sytuacja, w której bardzo niskie stopy osłabiają skuteczność dalszego zwiększania płynności tradycyjnymi metodami.' },
  { chapter: 12, term: 'Niezależność banku centralnego', definition: 'Zakres swobody banku centralnego w doborze działań bez bieżących nacisków politycznych.' },
  { chapter: 12, term: 'Wskazówki wyprzedzające', definition: 'Komunikacja banku centralnego o prawdopodobnym kierunku przyszłej polityki, mająca wpływać na oczekiwania.' },

  { chapter: 13, term: 'Krzywa Phillipsa', definition: 'Model krótkookresowej zależności między presją inflacyjną a odchyleniem bezrobocia od poziomu równowagi.' },
  { chapter: 13, term: 'Oczekiwania inflacyjne', definition: 'Przewidywania gospodarstw i firm dotyczące przyszłego tempa wzrostu cen.' },
  { chapter: 13, term: 'Adaptacyjne oczekiwania', definition: 'Prognozy tworzone głównie na podstawie wcześniejszych obserwacji i stopniowo korygowane po błędach.' },
  { chapter: 13, term: 'Racjonalne oczekiwania', definition: 'Prognozy wykorzystujące dostępne informacje oraz rozumienie mechanizmów gospodarczych bez systematycznego błędu.' },
  { chapter: 13, term: 'Wskaźnik poświęcenia', definition: 'Szacowany skumulowany ubytek produkcji potrzebny do trwałego obniżenia inflacji o jeden punkt procentowy.' },
  { chapter: 13, term: 'Histereza bezrobocia', definition: 'Możliwość, że długotrwałe osłabienie popytu podnosi późniejszą stopę bezrobocia równowagi.' },
  { chapter: 13, term: 'Wiarygodność polityki', definition: 'Przekonanie uczestników rynku, że władze zrealizują zapowiedziane cele i nie zmienią ich oportunistycznie.' },
  { chapter: 13, term: 'Stagflacja', definition: 'Współwystępowanie wysokiej inflacji ze słabą aktywnością gospodarczą i podwyższonym bezrobociem.' }
];

const macroFullBookOutline = macroBookChapters.map(chapter => ({
  number: chapter.number,
  pages: 'opracowanie własne',
  topics: chapter.sections
}));

const macroChapterGuides = [
  { number: 1, overview: 'PKB porządkuje pomiar produkcji i dochodu. Trzeba odróżniać miejsce produkcji od własności czynników, wartości nominalne od realnych oraz pamiętać, że PKB nie jest pełną miarą dobrobytu.', qa: [
    ['Dlaczego dochód jest równy wydatkom?', 'Każda transakcja tworzy jednocześnie wydatek nabywcy i dochód sprzedawcy, więc w skali gospodarki oba ujęcia opisują tę samą produkcję.'],
    ['Dlaczego nie sumuje się dóbr pośrednich?', 'Ich wartość jest już zawarta w cenie dobra finalnego; ponowne dodanie prowadziłoby do podwójnego liczenia.'],
    ['Po co liczy się PKB realny?', 'Aby oddzielić zmianę ilości wytworzonej produkcji od samego wzrostu cen.'],
    ['Czego PKB nie mierzy dobrze?', 'Między innymi podziału dochodu, czasu wolnego, jakości środowiska, pracy nieodpłatnej i części gospodarki nieformalnej.']
  ] },
  { number: 2, overview: 'Indeksy cen zamieniają tysiące zmian cen w jedną miarę. CPI śledzi koszyk konsumenta, a deflator obejmuje bieżącą produkcję krajową; różnią się więc zakresem i wagami.', qa: [
    ['Czym CPI różni się od deflatora PKB?', 'CPI opiera się na koszyku konsumpcyjnym i może obejmować import, a deflator dotyczy wszystkich dóbr finalnych wyprodukowanych w kraju.'],
    ['Czy spadek inflacji oznacza spadek cen?', 'Nie. Dezinflacja oznacza wolniejszy wzrost cen; dopiero deflacja jest spadkiem ogólnego poziomu cen.'],
    ['Dlaczego indeks cen jest przybliżeniem?', 'Nie w pełni uwzględnia zmianę jakości, nowe dobra, substytucję zakupów i różne koszyki poszczególnych gospodarstw.'],
    ['Jak przeliczyć wartość nominalną na realną?', 'Należy podzielić ją przez odpowiedni indeks cen i pomnożyć przez wartość bazową indeksu, zwykle 100.']
  ] },
  { number: 3, overview: 'Długookresowy poziom życia zależy przede wszystkim od produktywności. Kapitał pomaga, lecz ma malejący produkt krańcowy, dlatego trwały wzrost na osobę wymaga także wiedzy, instytucji i postępu technologicznego.', qa: [
    ['Co podnosi produktywność?', 'Większy i lepszy kapitał rzeczowy, kapitał ludzki, technologia, infrastruktura oraz instytucje sprzyjające efektywnej alokacji.'],
    ['Dlaczego sama akumulacja kapitału nie wystarcza?', 'Przy innych czynnikach stałych kolejne jednostki kapitału zwykle dają coraz mniejszy przyrost produkcji.'],
    ['Na czym polega efekt doganiania?', 'Kraj z małym zasobem kapitału może szybko rosnąć, inwestując i przejmując rozwiązania już sprawdzone w krajach bogatszych.'],
    ['Jak handel może wspierać wzrost?', 'Ułatwia specjalizację, dostęp do większych rynków, technologii i dóbr kapitałowych, choć korzyści zależą od instytucji i struktury gospodarki.']
  ] },
  { number: 4, overview: 'System finansowy kieruje oszczędności do inwestycji. Realna stopa procentowa równoważy podaż i popyt na fundusze, a decyzje finansowe wymagają oceny czasu, ryzyka i dywersyfikacji.', qa: [
    ['Skąd biorą się środki na inwestycje?', 'Z oszczędności krajowych oraz, w gospodarce otwartej, z finansowania zagranicznego.'],
    ['Co robi wzrost deficytu budżetowego?', 'Zmniejsza oszczędności publiczne i narodowe, co może podnosić realne stopy i ograniczać inwestycje prywatne.'],
    ['Dlaczego przyszłe pieniądze są warte mniej?', 'Dzisiejsze środki można zainwestować i otrzymać odsetki, dlatego przyszłą płatność dyskontuje się stopą odpowiadającą czasowi i ryzyku.'],
    ['Co daje dywersyfikacja?', 'Zmniejsza ryzyko specyficzne dla pojedynczych aktywów, lecz nie usuwa ryzyka obejmującego cały rynek.']
  ] },
  { number: 5, overview: 'Statystyka rynku pracy rozróżnia pracujących, bezrobotnych i biernych. Bezrobocie może wynikać z poszukiwania pracy, niedopasowań i wahań popytu, dlatego jedna liczba nie wyjaśnia całego problemu.', qa: [
    ['Kto jest bezrobotny w statystyce?', 'Osoba bez pracy, która aktywnie jej szuka i jest gotowa ją podjąć zgodnie z przyjętą metodologią.'],
    ['Dlaczego stopa bezrobocia może spaść bez poprawy?', 'Część osób może zrezygnować z poszukiwania i przejść do bierności zawodowej, zmniejszając licznik i zasób siły roboczej.'],
    ['Czym bezrobocie frykcyjne różni się od strukturalnego?', 'Frykcyjne dotyczy czasu potrzebnego na dopasowanie, a strukturalne trwałego niedopasowania cech pracowników i miejsc pracy.'],
    ['Jak płaca powyżej równowagi może tworzyć bezrobocie?', 'Zwiększa liczbę osób chcących pracować, a jednocześnie ogranicza popyt firm na pracę.']
  ] },
  { number: 6, overview: 'Pieniądz ułatwia wymianę, wycenę i przechowywanie wartości. Banki tworzą depozyty, ale skala kreacji zależy od rezerw, gotówki, popytu na kredyt i regulacji, więc prosty mnożnik jest tylko modelem.', qa: [
    ['Jakie funkcje pełni pieniądz?', 'Jest środkiem wymiany, jednostką rozrachunkową i sposobem przenoszenia siły nabywczej w czasie.'],
    ['Czy banki tworzą pieniądz bez ograniczeń?', 'Nie. Ograniczają je rezerwy, kapitał, płynność, ryzyko, regulacje, koszt finansowania i popyt wiarygodnych kredytobiorców.'],
    ['Jak zakup aktywów przez bank centralny wpływa na system?', 'Zwiększa rezerwy i płynność, zwykle obniżając krótkookresowe stopy oraz ułatwiając finansowanie.'],
    ['Dlaczego baza monetarna różni się od podaży pieniądza?', 'Baza obejmuje gotówkę i rezerwy, a szersze miary zawierają także depozyty tworzone w systemie bankowym.']
  ] },
  { number: 7, overview: 'W długim okresie szybki wzrost pieniądza względem realnej produkcji sprzyja inflacji. Dla decyzji liczy się stopa realna, a nieoczekiwana inflacja redystrybuuje siłę nabywczą między stronami umów.', qa: [
    ['Co mówi równanie ilościowe?', 'Wartość wydatków pieniężnych M×V jest rachunkowo równa nominalnej wartości produkcji P×Y.'],
    ['Jak odróżnić stopę realną od nominalnej?', 'Realna stopa mierzy zmianę siły nabywczej i w przybliżeniu równa się nominalnej stopie pomniejszonej o inflację.'],
    ['Kto traci na nieoczekiwanej inflacji?', 'W typowej umowie o stałej nominalnej płatności traci wierzyciel, a zyskuje dłużnik; zależy to od konstrukcji umowy.'],
    ['Dlaczego wysoka inflacja zakłóca decyzje?', 'Zmienia ceny względne w nierównym tempie, zwiększa niepewność, koszty aktualizacji cen i trudność porównywania wartości.']
  ] },
  { number: 8, overview: 'Rachunki gospodarki otwartej łączą handel z przepływami finansowymi. Nadwyżka eksportu netto odpowiada w uproszczonym ujęciu nabyciu aktywów zagranicznych netto, a oszczędności dzielą się na inwestycje krajowe i przepływ kapitału.', qa: [
    ['Co oznacza dodatni eksport netto?', 'Kraj sprzedaje zagranicy więcej dóbr i usług, niż od niej kupuje.'],
    ['Dlaczego eksport netto łączy się z przepływem kapitału?', 'Zapłata za nadwyżkę dóbr prowadzi do netto nabycia zagranicznych aktywów lub spłaty zobowiązań.'],
    ['Czy deficyt handlowy zawsze jest zły?', 'Nie można ocenić go bez kontekstu; może finansować produktywne inwestycje albo odzwierciedlać niskie oszczędności i narastające ryzyko.'],
    ['Jak gospodarka otwarta wykorzystuje oszczędności?', 'Finansuje nimi inwestycje krajowe oraz netto zakupy aktywów zagranicznych.']
  ] },
  { number: 9, overview: 'Kurs nominalny opisuje wymianę walut, a realny konkurencyjność dóbr po uwzględnieniu cen. Parytet siły nabywczej jest punktem odniesienia długiego okresu, lecz krótkookresowo kurs zależy także od stóp, ryzyka i oczekiwań.', qa: [
    ['Dlaczego ważna jest konwencja notowania kursu?', 'Ta sama zmiana może zostać nazwana wzrostem albo spadkiem kursu zależnie od tego, którą walutę umieszczono w liczniku.'],
    ['Co oznacza realna aprecjacja?', 'Dobra krajowe stają się relatywnie droższe względem zagranicznych, co zwykle osłabia eksport netto przy innych czynnikach stałych.'],
    ['Dlaczego PPP nie działa dokładnie w krótkim okresie?', 'Występują koszty transportu, bariery handlowe, dobra niehandlowe, różnice jakości i wolne dostosowania cen.'],
    ['Jak utrzymuje się kurs stały?', 'Władze kupują lub sprzedają walutę i dostosowują politykę, aby zrównoważyć popyt oraz podaż przy wybranym kursie.']
  ] },
  { number: 10, overview: 'Model AD–AS wyjaśnia krótkookresowe wahania produkcji i cen. Wstrząs popytowy przesuwa wydatki, a podażowy zmienia koszty lub zdolności produkcyjne; konsekwencje zależą od oczekiwań i szybkości dostosowania płac oraz cen.', qa: [
    ['Dlaczego krzywa AD jest malejąca?', 'Niższy poziom cen zwiększa realne zasoby pieniądza i może obniżać stopy, wspierając wydatki oraz eksport netto.'],
    ['Dlaczego krótkookresowa AS może rosnąć?', 'Część cen i płac jest lepka, więc wzrost cen sprzedaży przy wolniejszych kosztach zachęca firmy do większej produkcji.'],
    ['Co robi negatywny wstrząs podażowy?', 'Podnosi ceny i obniża produkcję, tworząc trudny konflikt między stabilizacją inflacji a aktywności.'],
    ['Co dzieje się w długim okresie?', 'Ceny i płace dostosowują się, a produkcja wraca w stronę poziomu potencjalnego wyznaczanego przez realne zasoby i technologię.']
  ] },
  { number: 11, overview: 'Polityka fiskalna wpływa na popyt przez zakupy, podatki i transfery. Mnożnik może wzmacniać impuls, ale jego wielkość ograniczają oszczędności, import, reakcja stóp i zdolności produkcyjne.', qa: [
    ['Dlaczego wzrost wydatków może zwiększyć PKB bardziej niż o kwotę początkową?', 'Dochód jednych staje się wydatkiem innych, uruchamiając kolejne rundy popytu, z których część wycieka do oszczędności, podatków i importu.'],
    ['Dlaczego mnożnik nie jest stały?', 'Zależy od skłonności do konsumpcji, importu, podatków, reakcji banku centralnego, zadłużenia i stopnia wykorzystania mocy.'],
    ['Jak działają automatyczne stabilizatory?', 'W recesji podatki spadają, a część świadczeń rośnie bez nowej ustawy, podtrzymując dochody i popyt.'],
    ['Kiedy pojawia się wypieranie?', 'Gdy finansowanie deficytu podnosi stopy lub absorbuje zasoby, ograniczając część inwestycji i wydatków prywatnych.']
  ] },
  { number: 12, overview: 'Bank centralny oddziałuje na gospodarkę przez stopy, ceny aktywów, kredyt, kurs i oczekiwania. Skutki pojawiają się z opóźnieniem, dlatego polityka opiera się na prognozach i wiarygodnej komunikacji.', qa: [
    ['Jak podwyżka stopy wpływa na inflację?', 'Zwykle zaostrza warunki finansowania, ogranicza część popytu i z opóźnieniem zmniejsza presję cenową.'],
    ['Dlaczego transmisja jest opóźniona?', 'Umowy, decyzje inwestycyjne, refinansowanie kredytów, oczekiwania i dostosowanie cen zmieniają się stopniowo.'],
    ['Po co bankowi centralnemu wiarygodność?', 'Zakotwiczone oczekiwania pomagają stabilizować ceny przy mniejszym koszcie w postaci wahań produkcji i zatrudnienia.'],
    ['Kiedy stosuje się zakupy aktywów?', 'Gdy tradycyjne krótkoterminowe stopy są bardzo niskie lub transmisja jest zaburzona, a bank chce wpłynąć na dłuższe warunki finansowe.']
  ] },
  { number: 13, overview: 'Krótkookresowa zależność inflacji i bezrobocia zależy od oczekiwań oraz wstrząsów. Trwałe zaskakiwanie inflacją nie utrzymuje produkcji ponad potencjałem, a dezinflacja może przejściowo kosztować utratę aktywności.', qa: [
    ['Dlaczego krzywa Phillipsa przesuwa się?', 'Zmieniają ją oczekiwania inflacyjne, naturalna stopa bezrobocia i wstrząsy podażowe.'],
    ['Czy można trwale obniżyć bezrobocie wyższą inflacją?', 'W standardowym ujęciu nie; oczekiwania dostosowują się, a bezrobocie wraca do poziomu równowagi przy wyższej inflacji.'],
    ['Co zmniejsza koszt dezinflacji?', 'Wiarygodny plan, zakotwiczone oczekiwania, stopniowanie działań i sprzyjające warunki podażowe mogą ograniczyć spadek produkcji.'],
    ['Na czym polega problem niespójności w czasie?', 'Władze mogą zapowiadać niską inflację, a później mieć bodziec do pobudzenia gospodarki, przez co rynek przestaje wierzyć zapowiedziom.']
  ] }
];

const macroFormulaCatalog = [
  { chapter: 1, group: 'Rachunki narodowe', name: 'PKB metodą wydatkową', formula: 'Y = C + I + G + NX', variables: 'Y – PKB; C – konsumpcja; I – inwestycje; G – zakupy państwa; NX – eksport netto', use: 'Rozkłada popyt na krajową produkcję według rodzaju wydatku.' },
  { chapter: 1, group: 'Rachunki narodowe', name: 'Eksport netto', formula: 'NX = X − M', variables: 'X – eksport; M – import', use: 'Pokazuje wkład handlu zagranicznego do krajowego PKB.' },
  { chapter: 1, group: 'Rachunki narodowe', name: 'PKB realny', formula: 'Yʳ = Σ pᵢ⁰qᵢᵗ', variables: 'pᵢ⁰ – cena dobra i w roku bazowym; qᵢᵗ – ilość w okresie t', use: 'Wycena bieżących ilości cenami stałymi usuwa wpływ inflacji.' },
  { chapter: 1, group: 'Poziom życia', name: 'PKB per capita', formula: 'PKB na osobę = Y / N', variables: 'Y – PKB; N – liczba ludności', use: 'Porównuje przeciętną skalę produkcji między populacjami.' },
  { chapter: 2, group: 'Ceny', name: 'Deflator PKB', formula: 'deflator = (PKB nominalny / PKB realny) × 100', variables: 'Rok bazowy ma zwykle wartość 100.', use: 'Mierzy poziom cen krajowej produkcji finalnej.' },
  { chapter: 2, group: 'Ceny', name: 'Indeks CPI', formula: 'CPIₜ = (koszt koszyka w t / koszt koszyka w bazie) × 100', variables: 'Koszyk i okres bazowy muszą być określone.', use: 'Mierzy zmianę kosztu reprezentatywnego koszyka konsumenta.' },
  { chapter: 2, group: 'Ceny', name: 'Stopa inflacji', formula: 'πₜ = [(Pₜ − Pₜ₋₁) / Pₜ₋₁] × 100%', variables: 'P – wybrany indeks poziomu cen', use: 'Oblicza procentową zmianę poziomu cen.' },
  { chapter: 2, group: 'Ceny', name: 'Wartość realna', formula: 'wartość realna = (wartość nominalna / indeks cen) × 100', variables: 'Indeks cen ma bazę 100.', use: 'Przelicza kwotę nominalną na siłę nabywczą cen bazowych.' },
  { chapter: 3, group: 'Wzrost', name: 'Tempo wzrostu', formula: 'g = [(Yₜ − Yₜ₋₁) / Yₜ₋₁] × 100%', variables: 'Y – badana realna wielkość', use: 'Mierzy procentową zmianę produkcji lub dochodu.' },
  { chapter: 3, group: 'Wzrost', name: 'Reguła 70', formula: 'czas podwojenia ≈ 70 / g', variables: 'g – roczne tempo wzrostu w procentach', use: 'Szybko przybliża liczbę lat potrzebnych do podwojenia wielkości.' },
  { chapter: 3, group: 'Produktywność', name: 'Produktywność pracy', formula: 'produktywność = Y / L', variables: 'Y – realna produkcja; L – nakład pracy', use: 'Pokazuje produkcję przypadającą na jednostkę pracy.' },
  { chapter: 3, group: 'Produkcja', name: 'Funkcja produkcji', formula: 'Y = A·F(K,L)', variables: 'A – technologia; K – kapitał; L – praca', use: 'Łączy zasoby i technologię z możliwą produkcją.' },
  { chapter: 4, group: 'Oszczędności', name: 'Oszczędności narodowe', formula: 'S = Y − C − G', variables: 'Y – dochód; C – konsumpcja; G – zakupy państwa', use: 'Pokazuje część dochodu niewydaną na konsumpcję ani zakupy publiczne.' },
  { chapter: 4, group: 'Oszczędności', name: 'Oszczędności prywatne i publiczne', formula: 'S = (Y − T − C) + (T − G)', variables: 'T – podatki netto', use: 'Rozdziela oszczędności narodowe na sektor prywatny i publiczny.' },
  { chapter: 4, group: 'Finanse', name: 'Wartość przyszła', formula: 'FV = PV(1 + r)ⁿ', variables: 'PV – wartość dziś; r – stopa na okres; n – liczba okresów', use: 'Oblicza wartość kapitału po kapitalizacji odsetek.' },
  { chapter: 4, group: 'Finanse', name: 'Wartość bieżąca', formula: 'PV = FV / (1 + r)ⁿ', variables: 'FV – przyszła płatność', use: 'Dyskontuje przyszłą kwotę do wartości dzisiejszej.' },
  { chapter: 5, group: 'Rynek pracy', name: 'Stopa bezrobocia', formula: 'u = U / (E + U) × 100%', variables: 'U – bezrobotni; E – pracujący', use: 'Mierzy udział bezrobotnych w sile roboczej.' },
  { chapter: 5, group: 'Rynek pracy', name: 'Aktywność zawodowa', formula: 'LFPR = (E + U) / P × 100%', variables: 'P – ludność objęta pomiarem', use: 'Mierzy udział siły roboczej w odpowiedniej populacji.' },
  { chapter: 6, group: 'Bankowość', name: 'Prosty mnożnik pieniężny', formula: 'm = 1 / rr', variables: 'rr – stopa rezerw w modelu bez gotówki i nadwyżkowych rezerw', use: 'Pokazuje teoretyczną górną relację depozytów do rezerw w uproszczonym modelu.' },
  { chapter: 6, group: 'Bankowość', name: 'Podaż pieniądza', formula: 'M = m × B', variables: 'm – mnożnik; B – baza monetarna', use: 'Rozkłada szerszą podaż pieniądza na bazę i zachowanie systemu bankowego.' },
  { chapter: 7, group: 'Pieniądz', name: 'Równanie ilościowe', formula: 'M × V = P × Y', variables: 'M – pieniądz; V – szybkość obiegu; P – ceny; Y – realna produkcja', use: 'Łączy wydatki pieniężne z nominalną wartością produkcji.' },
  { chapter: 7, group: 'Stopy procentowe', name: 'Realna stopa procentowa', formula: 'r ≈ i − π', variables: 'i – stopa nominalna; π – faktyczna inflacja', use: 'Przybliża zmianę siły nabywczej kapitału.' },
  { chapter: 7, group: 'Stopy procentowe', name: 'Równanie Fishera', formula: 'i ≈ r + πᵉ', variables: 'πᵉ – oczekiwana inflacja', use: 'Pokazuje składniki nominalnej stopy ustalanej z wyprzedzeniem.' },
  { chapter: 8, group: 'Gospodarka otwarta', name: 'Oszczędności w gospodarce otwartej', formula: 'S = I + NCO', variables: 'I – inwestycje krajowe; NCO – odpływ kapitału netto', use: 'Pokazuje dwa zastosowania oszczędności narodowych.' },
  { chapter: 8, group: 'Gospodarka otwarta', name: 'Tożsamość przepływów zagranicznych', formula: 'NCO = NX', variables: 'NCO – odpływ kapitału netto; NX – eksport netto', use: 'Łączy przepływ dóbr z przepływem finansowania.' },
  { chapter: 9, group: 'Kursy walutowe', name: 'Realny kurs walutowy', formula: 'ε = e × P / P*', variables: 'e – jednostki waluty obcej za krajową; P – ceny krajowe; P* – ceny zagraniczne', use: 'Porównuje względną cenę koszyka krajowego i zagranicznego w podanej konwencji.' },
  { chapter: 9, group: 'Kursy walutowe', name: 'Względny parytet siły nabywczej', formula: '%Δe ≈ π* − π', variables: 'π* – inflacja zagraniczna; π – krajowa; konwencja e jak wyżej', use: 'Przybliża zmianę kursu wynikającą z różnicy inflacji.' },
  { chapter: 10, group: 'Koniunktura', name: 'Luka produktowa', formula: 'luka = (Y − Y*) / Y* × 100%', variables: 'Y – produkcja faktyczna; Y* – potencjalna', use: 'Mierzy odchylenie aktywności od poziomu możliwego do utrzymania.' },
  { chapter: 11, group: 'Polityka fiskalna', name: 'Prosty mnożnik wydatków', formula: 'kᴳ = 1 / (1 − MPC)', variables: 'MPC – krańcowa skłonność do konsumpcji', use: 'Pokazuje wynik w prostym modelu bez podatków, importu i reakcji stóp.' },
  { chapter: 11, group: 'Polityka fiskalna', name: 'Prosty mnożnik podatkowy', formula: 'kᵀ = −MPC / (1 − MPC)', variables: 'MPC – krańcowa skłonność do konsumpcji', use: 'Przybliża reakcję produkcji na autonomiczną zmianę podatków w prostym modelu.' },
  { chapter: 11, group: 'Finanse publiczne', name: 'Relacja długu do PKB', formula: 'd = D / Y × 100%', variables: 'D – dług publiczny; Y – nominalny PKB', use: 'Porównuje skalę zobowiązań publicznych z rozmiarem gospodarki.' },
  { chapter: 13, group: 'Inflacja i bezrobocie', name: 'Krzywa Phillipsa z oczekiwaniami', formula: 'π = πᵉ − β(u − u*) + v', variables: 'π – inflacja; πᵉ – oczekiwania; u – bezrobocie; u* – stopa naturalna; v – wstrząs podażowy; β > 0', use: 'Porządkuje krótkookresowe źródła presji inflacyjnej.' },
  { chapter: 13, group: 'Stabilizacja', name: 'Wskaźnik poświęcenia', formula: 'SR = skumulowana utrata produkcji / spadek inflacji', variables: 'Obie wielkości muszą mieć zgodną skalę i horyzont.', use: 'Opisuje koszt dezinflacji w jednostkach utraconej produkcji.' }
];
