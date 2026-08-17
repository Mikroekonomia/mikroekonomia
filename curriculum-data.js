// Pełny indeks tematyczny został zbudowany na podstawie spisu treści
// przesłanego wydania. Objaśnienia, odpowiedzi, wzory i schematy są
// autorskim opracowaniem dydaktycznym, a nie kopią stron podręcznika.

const fullBookOutline = [
  {
    number: 1,
    pages: '23–40',
    topics: [
      'Co to jest ekonomia?',
      'Problem ekonomiczny',
      'Rzadkość zasobów i konieczność wyboru',
      'W jaki sposób ludzie podejmują decyzje?',
      'Zasada 1: ludzie muszą stale dokonywać wyborów',
      'Zasada 2: kosztem jest to, z czego trzeba zrezygnować, żeby uzyskać coś innego',
      'Zasada 3: racjonalni ludzie myślą w kategoriach wielkości krańcowych',
      'Zasada 4: ludzie reagują na bodźce',
      'W jaki sposób ludzie współdziałają ze sobą?',
      'Zasada 5: handel może się opłacać wszystkim',
      'Zasada 6: rynki stanowią zwykle dobrą formę organizacji aktywności gospodarczej',
      'Zasada 7: czasami państwo może usprawnić funkcjonowanie rynku',
      'W jaki sposób działa gospodarka?',
      'Mikroekonomia i makroekonomia',
      'Zasada 8: poziom życia zależy od ilości wytwarzanych dóbr i usług',
      'Zasada 9: ceny rosną, gdy państwo drukuje zbyt dużo pieniędzy',
      'Zasada 10: w krótkim okresie społeczeństwo musi wybierać między inflacją a bezrobociem'
    ]
  },
  {
    number: 2,
    pages: '44–80',
    topics: [
      'Ekonomista jako naukowiec',
      'Empiryzm',
      'Metoda naukowa: obserwacja, teoria i znowu obserwacja',
      'Empiryzm czy racjonalizm?',
      'Rola założeń',
      'Eksperymenty w dziedzinie ekonomii',
      'Modele ekonomiczne',
      'Pierwszy model: wykres ruchu okrężnego',
      'Ekonomista jako doradca polityczny',
      'Analiza pozytywna i analiza normatywna',
      'Dlaczego ekonomiści różnią się poglądami?',
      'Rozbieżność poglądów naukowych',
      'Rozbieżność wyznawanych wartości',
      'Wrażenia a rzeczywistość',
      'Ekonomiści jako decydenci',
      'Funkcje matematyczne',
      'Wykresy jednej zmiennej',
      'Wykresy dwóch zmiennych: układ współrzędnych',
      'Krzywe w układzie współrzędnych',
      'Nachylenie krzywej',
      'Związek przyczynowo-skutkowy',
      'Ograniczona optymalizacja',
      'Wartości realne i nominalne'
    ]
  },
  {
    number: 3,
    pages: '86–114',
    topics: [
      'Rynki i konkurencja',
      'Rynki konkurencyjne',
      'Konkurencja doskonała i konkurencja niedoskonała',
      'Popyt',
      'Krzywa popytu: zależność między ceną a wielkością zapotrzebowania',
      'Popyt rynkowy a popyt indywidualny',
      'Przesunięcie krzywej popytu a przesunięcie wzdłuż krzywej popytu',
      'Obliczanie ceny i ilości',
      'Podaż',
      'Krzywa podaży: zależność między ceną a ilością oferowaną',
      'Podaż rynkowa a podaż indywidualna',
      'Przesunięcie krzywej podaży',
      'Podaż w ujęciu matematycznym',
      'Podaż w połączeniu z popytem',
      'Równowaga rynkowa',
      'Cena jako wskazówka',
      'Równowaga rynkowa w ujęciu matematycznym',
      'Trzy etapy analizy zmian stanu równowagi rynkowej',
      'Ceny a alokacja zasobów'
    ]
  },
  {
    number: 4,
    pages: '121–159',
    topics: [
      'Elastyczność cenowa popytu',
      'Czynniki warunkujące elastyczność cenową popytu',
      'Obliczanie elastyczności cenowej popytu',
      'Metoda punktu środkowego (elastyczności łukowej)',
      'Metoda elastyczności punktowej popytu',
      'Różnorodność krzywych popytu',
      'Suma wydatków i utarg całkowity a elastyczność cenowa popytu',
      'Elastyczność i suma wydatków a liniowa krzywa popytu',
      'Elastyczność dochodowa popytu',
      'Mieszana elastyczność cenowa popytu',
      'Elastyczność cenowa podaży',
      'Czynniki warunkujące elastyczność cenową podaży',
      'Obliczanie elastyczności cenowej podaży',
      'Metoda elastyczności punktowej podaży',
      'Różnorodność krzywych podaży',
      'Utarg całkowity a elastyczność cenowa podaży',
      'Elastyczność podaży i popytu w praktyce',
      'Dlaczego ceny biletów zmieniają się w zależności od pory dnia?',
      'Dlaczego dochody rolników spadły mimo wzrostu wydajności?'
    ]
  },
  {
    number: 5,
    pages: '164–205',
    topics: [
      'Standardowy model ekonomiczny',
      'Wartość',
      'Ograniczenie budżetowe: na co stać konsumenta?',
      'Zmiana dochodu',
      'Zmiana ceny',
      'Preferencje, czyli czego chce konsument',
      'Krzywe obojętności jako odzwierciedlenie preferencji',
      'Graficzne przedstawienie krzywych obojętności',
      'Cztery cechy krzywych obojętności',
      'Użyteczność całkowita i użyteczność krańcowa',
      'Krańcowa stopa substytucji',
      'Krzywe obojętności: dwa skrajne przypadki',
      'Optymalizacja, czyli co wybiera konsument',
      'Wybór optymalny konsumenta',
      'Jak zmiana dochodu wpływa na decyzje konsumenta?',
      'Jak zmiana cen wpływa na decyzje konsumenta?',
      'Efekt dochodowy i efekt substytucyjny',
      'Wykreślanie krzywej popytu',
      'Czy wszystkie krzywe popytu są nachylone ku dołowi?',
      'Ścieżka ekspansji dochodowej',
      'Krzywa Engla',
      'Behawioralne spojrzenie na zachowania konsumentów',
      'Nadmierna pewność siebie i heurystyki',
      'Teoria oczekiwanej użyteczności a efekt kontekstu'
    ]
  },
  {
    number: 6,
    pages: '210–265',
    topics: [
      'Koszty produkcji',
      'Koszty alternatywne produkcji',
      'Koszty alternatywne kapitału',
      'Produkcja i koszty',
      'Funkcja produkcji',
      'Od funkcji produkcji do krzywej kosztu całkowitego',
      'Miary kosztów',
      'Koszty stałe i zmienne',
      'Koszt przeciętny i koszt krańcowy',
      'Krzywe kosztów i ich kształty',
      'Typowe krzywe kosztów',
      'Koszty w krótkim i długim okresie',
      'Przeciętny koszt całkowity w krótkim i długim okresie',
      'Przychody ze skali produkcji',
      'Korzyści i niekorzyści skali',
      'Co to jest rynek konkurencyjny?',
      'Utarg przedsiębiorstwa konkurencyjnego',
      'Utarg całkowity, koszt całkowity i zysk',
      'Zysk ekonomiczny a zysk księgowy',
      'Maksymalizacja zysku i krzywa podaży przedsiębiorstwa konkurencyjnego',
      'Zysk normalny i zysk nadzwyczajny',
      'Krzywa kosztu krańcowego i decyzje dotyczące podaży',
      'Decyzja o tymczasowym wstrzymaniu produkcji',
      'Koszty utopione',
      'Decyzja o wyjściu z rynku lub wejściu na rynek',
      'Graficzny pomiar zysku',
      'Krzywa podaży na rynku konkurencyjnym',
      'Podaż rynkowa w krótkim i długim okresie'
    ]
  },
  {
    number: 7,
    pages: '268–290',
    topics: [
      'Nadwyżka konsumenta',
      'Skłonność do płacenia',
      'Pomiar nadwyżki konsumenta za pomocą krzywej popytu',
      'Nadwyżka konsumenta przy niższej cenie',
      'Zastosowanie nadwyżki konsumenta',
      'Nadwyżka konsumenta jako miara dobrobytu',
      'Nadwyżka producenta',
      'Koszt i skłonność do sprzedaży',
      'Pomiar nadwyżki producenta za pomocą krzywej podaży',
      'Wpływ zmiany ceny na nadwyżkę producenta',
      'Efektywność rynku',
      'Efektywność ekonomiczna i marnotrawstwo',
      'Ocena stanu równowagi rynkowej',
      'Efektywność a sprawiedliwość',
      'Efektywność rynku i zawodność rynku'
    ]
  },
  {
    number: 8,
    pages: '295–314',
    topics: [
      'Regulacja cen',
      'Wpływ ceny maksymalnej na sytuację rynkową',
      'Wpływ ceny minimalnej na sytuację rynkową',
      'Podatki',
      'Wpływ podatków obciążających sprzedawców na sytuację rynkową',
      'Elastyczność a rozkład ciężaru opodatkowania',
      'Subwencje',
      'Wpływ subwencji na sytuację rynkową'
    ]
  },
  {
    number: 9,
    pages: '319–353',
    topics: [
      'Podatki a efektywność',
      'Zbędna strata społeczna z tytułu opodatkowania',
      'Wpływ podatku na uczestników rynku',
      'Zbędne straty społeczne i korzyści z wymiany handlowej',
      'Czynniki determinujące zbędną stratę społeczną',
      'Wpływ wysokości podatków na zbędną stratę społeczną i dochody podatkowe',
      'Obciążenia administracyjne',
      'Konstrukcja systemu podatkowego',
      'Cztery zasady podatkowe według Adama Smitha',
      'Krańcowa i przeciętna stopa podatkowa',
      'Podatek ryczałtowy',
      'Podatki i sprawiedliwość',
      'Zasada korzyści',
      'Zasada zdolności do płacenia',
      'Rozkład ciężaru opodatkowania a sprawiedliwość opodatkowania'
    ]
  },
  {
    number: 10,
    pages: '356–375',
    topics: [
      'Rodzaje dóbr',
      'Dobra publiczne',
      'Problem gapowicza',
      'Najważniejsze dobra publiczne',
      'Problemy analizy kosztów i korzyści',
      'Punkt optimum dla dobra publicznego',
      'Zasoby wspólne',
      'Tragedia wspólnego pastwiska',
      'Najważniejsze zasoby wspólne',
      'Dobra społecznie pożądane',
      'Edukacja jako dobro społecznie pożądane',
      'Opieka zdrowotna, ubezpieczenia i fundusze emerytalne',
      'Dobra społecznie niepożądane'
    ]
  },
  {
    number: 11,
    pages: '378–407',
    topics: [
      'Koszty i korzyści społeczne wynikające z decyzji podmiotów ekonomicznych',
      'Efekty zewnętrzne i nieefektywność rynku',
      'Ekonomia dobrobytu – krótkie przypomnienie',
      'Negatywne efekty zewnętrzne',
      'Pozytywne efekty zewnętrzne',
      'Prywatne rozwiązania problemu efektów zewnętrznych',
      'Twierdzenie Coase’a',
      'Dlaczego prywatne rozwiązania nie zawsze się sprawdzają?',
      'Relacyjne efekty zewnętrzne',
      'Polityka państwa w obszarze efektów zewnętrznych',
      'Regulacja',
      'Podatki Pigou i subwencje',
      'Zbywalne pozwolenia na emisję zanieczyszczeń',
      'Publiczno-prywatne rozwiązania problemu efektów zewnętrznych',
      'Prawa własności',
      'Przeciwdziałanie pozycyjnemu wyścigowi zbrojeń',
      'Ekonomiczne podejście do problemu zanieczyszczenia środowiska',
      'Zawodność państwa',
      'Teoria wyboru publicznego',
      'Niewidzialna ręka rynku kontra interes publiczny',
      'Motywy wyborców, polityków i biurokratów',
      'Efekt wąskich interesów',
      'Poszukiwanie renty',
      'Krótkoterminowość',
      'Nieefektywność sektora publicznego',
      'Kumoterstwo',
      'Nieefektywność systemu podatkowego'
    ]
  },
  {
    number: 12,
    pages: '413–428',
    topics: [
      '„Pan” i „sługa”',
      'Asymetria informacji',
      'Ukryte działania i pokusa nadużycia',
      'Ukryte właściwości: negatywna selekcja i problem „cytryny”',
      'Sygnalizowanie ukrytych informacji',
      'Odsiew jako metoda ujawniania informacji',
      'Asymetria informacji a polityka państwa',
      'Odchylenia od standardowego modelu ekonomicznego',
      'Ludzie nie zawsze zachowują się racjonalnie',
      'Ludziom zależy na sprawiedliwości',
      'Decyzje a horyzont czasowy'
    ]
  },
  {
    number: 13,
    pages: '433–445',
    topics: [
      'Izokwanty i izokoszty',
      'Izokwanty produkcji',
      'Izokoszty',
      'Kombinacja nakładów o najniższym koszcie',
      'Krańcowa stopa substytucji technicznej',
      'Warunek styczności izokwanty i izokoszty'
    ]
  },
  {
    number: 14,
    pages: '449–477',
    topics: [
      'Konkurencja niedoskonała',
      'Przyczyny powstawania monopoli',
      'Monopolizacja zasobów',
      'Monopole państwowe',
      'Monopole naturalne',
      'Wzrost zewnętrzny',
      'Decyzje produkcyjne i cenowe przedsiębiorstw monopolistycznych',
      'Monopol a konkurencja',
      'Utarg przedsiębiorstwa monopolistycznego',
      'Maksymalizacja zysku',
      'Zysk monopolowy',
      'Koszt społeczny monopolu',
      'Zbędna strata społeczna',
      'Czy zysk monopolowy jest kosztem społecznym?',
      'Różnicowanie cen',
      'Analiza mechanizmu różnicowania ceny',
      'Przykłady różnicowania ceny',
      'Polityka państwa wobec monopoli',
      'Regulacja, własność publiczna i bezczynność'
    ]
  },
  {
    number: 15,
    pages: '479–503',
    topics: [
      'Konkurencja między zróżnicowanymi produktami',
      'Konkurencja monopolistyczna w ujęciu krótkookresowym',
      'Równowaga długookresowa',
      'Konkurencja monopolistyczna a konkurencja doskonała',
      'Konkurencja monopolistyczna a dobrobyt społeczny',
      'Reklama i budowanie marki',
      'Kontrowersje wokół reklamy',
      'Reklama jako wskaźnik jakości',
      'Marki',
      'Rynki kontestowalne'
    ]
  },
  {
    number: 16,
    pages: '508–541',
    topics: [
      'Charakterystyka oligopolu',
      'Różnicowanie produktów',
      'Współzależność',
      'Przykład duopolu',
      'Konkurencja, monopole i kartele',
      'Równowaga w warunkach oligopolu',
      'Jak wielkość oligopolu wpływa na sytuację rynkową?',
      'Oligopole i złamane krzywe popytu',
      'Teoria gier i ekonomia kooperacji',
      'Dylemat więźnia',
      'Oligopol jako przykład dylematu więźnia',
      'Inne przykłady dylematu więźnia',
      'Równowaga Nasha',
      'Dylemat więźnia a dobrobyt społeczny',
      'Dlaczego ludzie czasami kooperują?',
      'Modele oligopolu',
      'Model Cournota',
      'Model Bertranda',
      'Model Stackelberga',
      'Polityka państwa wobec oligopoli',
      'Ograniczanie handlu i prawo ochrony konkurencji',
      'Kontrowersje wokół polityki ochrony konkurencji'
    ]
  },
  {
    number: 17,
    pages: '547–588',
    topics: [
      'Popyt na pracę',
      'Przedsiębiorstwo konkurencyjne maksymalizujące zysk',
      'Funkcja produkcji i produkt krańcowy pracy',
      'Wartość produktu krańcowego pracy i popyt na pracę',
      'Popyt na czynniki produkcji i podaż produktów',
      'Przesunięcie krzywej popytu na pracę',
      'Podaż pracy',
      'Wybór między pracą a czasem wolnym',
      'Wpływ płac na podaż pracy',
      'Przesunięcia krzywej podaży pracy',
      'Równowaga na rynku pracy',
      'Zmiany podaży pracy',
      'Zmiany popytu na pracę',
      'Monopson',
      'Zróżnicowanie płac',
      'Zróżnicowanie kompensacyjne',
      'Kapitał ludzki',
      'Zdolności, zaangażowanie i przypadek',
      'Wykształcenie jako sygnał',
      'Fenomen megagwiazdy',
      'Płace przewyższające poziom równowagi',
      'Ekonomia dyskryminacji',
      'Dyskryminacja na rynku pracy',
      'Model gustu pracodawcy Beckera',
      'Pozostałe czynniki produkcji: ziemia i kapitał',
      'Równowaga na rynkach ziemi i kapitału',
      'Powiązania między czynnikami produkcji',
      'Renta ekonomiczna'
    ]
  },
  {
    number: 18,
    pages: '595–621',
    topics: [
      'Metody pomiaru nierówności dochodowych',
      'Nierówności dochodowe',
      'Krzywa Lorenza',
      'Współczynnik Giniego',
      'Problemy z pomiarem nierówności',
      'Mobilność ekonomiczna',
      'Stopa ubóstwa',
      'Filozofia polityczna redystrybucji dochodu',
      'Utylitaryzm',
      'Liberalizm',
      'Libertarianizm',
      'Libertariański paternalizm',
      'Metody zwalczania ubóstwa',
      'Płaca minimalna',
      'Finansowa pomoc społeczna',
      'Ujemny podatek dochodowy',
      'Rzeczowa pomoc społeczna',
      'Polityka zwalczania ubóstwa a zachęty do podejmowania pracy'
    ]
  },
  {
    number: 19,
    pages: '627–667',
    topics: [
      'Granica możliwości produkcyjnych',
      'Obliczanie kosztu alternatywnego',
      'Kształt granicy możliwości produkcyjnych',
      'Przesunięcie granicy możliwości produkcyjnych',
      'Handel międzynarodowy',
      'Ilustracja współczesnej gospodarki',
      'Możliwości produkcyjne',
      'Specjalizacja i wymiana handlowa',
      'Zasada korzyści komparatywnych',
      'Przewaga absolutna',
      'Koszt alternatywny i przewaga komparatywna',
      'Przewaga komparatywna i wymiana handlowa',
      'Czy kraje europejskie powinny handlować z innymi krajami?',
      'Uwarunkowania wymiany handlowej',
      'Stan równowagi bez wymiany handlowej',
      'Cena światowa i przewaga komparatywna',
      'Kto zyskuje, a kto traci na wymianie handlowej?',
      'Korzyści i straty kraju eksportującego',
      'Korzyści i straty kraju importującego',
      'Bariery handlowe',
      'Skutki stosowania ceł',
      'Skutki wprowadzenia kontyngentu przywozowego',
      'Bariery pozataryfowe',
      'Wnioski dotyczące polityki handlowej',
      'Argumenty za ograniczeniem wolnego handlu'
    ]
  }
];

const chapterGuides = [
  {
    number: 1,
    overview: 'Ekonomia bada wybory dokonywane w warunkach rzadkości. Każda decyzja ma koszt alternatywny, ludzie reagują na bodźce, a wymiana i instytucje wpływają na końcowy dobrobyt.',
    qa: [
      ['Dlaczego rzadkość wymusza wybór?', 'Potrzeby są większe niż dostępne zasoby. Wybierając jedno zastosowanie czasu, pieniędzy lub surowców, rezygnujemy z najlepszego niewybranego zastosowania.'],
      ['Co oznacza myślenie krańcowe?', 'Decyzję ocenia się przez porównanie dodatkowej korzyści z dodatkowym kosztem, a nie przez porównanie całych sum historycznych.'],
      ['Dlaczego handel może przynosić korzyści obu stronom?', 'Specjalizacja zgodna z kosztami alternatywnymi pozwala zwiększyć łączną produkcję i zakres konsumpcji.'],
      ['Kiedy państwo może poprawić wynik rynku?', 'Gdy występują efekty zewnętrzne, dobra publiczne, siła rynkowa, asymetria informacji albo potrzeba redystrybucji.'],
      ['Od czego zależy poziom życia?', 'W długim okresie przede wszystkim od produktywności, czyli ilości dóbr i usług wytwarzanych na jednostkę nakładu.']
    ]
  },
  {
    number: 2,
    overview: 'Ekonomiści upraszczają rzeczywistość za pomocą modeli, oddzielają twierdzenia pozytywne od normatywnych i oceniają hipotezy na podstawie danych.',
    qa: [
      ['Po co ekonomistom założenia?', 'Pozwalają wyodrębnić najważniejszy mechanizm. Dobre założenie nie musi być dosłownie realistyczne, lecz musi pomagać trafnie wyjaśniać lub przewidywać.'],
      ['Czym różni się analiza pozytywna od normatywnej?', 'Pozytywna opisuje fakty i zależności możliwe do sprawdzenia, a normatywna zawiera ocenę tego, co powinno być.'],
      ['Co pokazuje model ruchu okrężnego?', 'Przepływy dóbr, czynników produkcji i pieniądza między gospodarstwami domowymi, przedsiębiorstwami oraz rynkami.'],
      ['Jak interpretować nachylenie?', 'Jest to zmiana wartości na osi pionowej przypadająca na jednostkową zmianę wartości na osi poziomej.'],
      ['Dlaczego korelacja nie dowodzi przyczynowości?', 'Współzmienność może wynikać z trzeciej zmiennej, odwrotnego kierunku wpływu lub przypadku. Potrzebna jest identyfikacja mechanizmu przyczynowego.']
    ]
  },
  {
    number: 3,
    overview: 'Model podaży i popytu wyjaśnia, jak cena koordynuje decyzje kupujących i sprzedawców oraz jak zmiany warunków przesuwają stan równowagi.',
    qa: [
      ['Co przesuwa krzywą popytu?', 'Dochody, ceny dóbr powiązanych, gusty, oczekiwania i liczba kupujących. Zmiana ceny badanego dobra oznacza ruch wzdłuż krzywej.'],
      ['Co przesuwa krzywą podaży?', 'Ceny nakładów, technologia, oczekiwania, liczba sprzedawców, podatki, subwencje i warunki naturalne.'],
      ['Jak znaleźć równowagę?', 'Należy zrównać wielkość zapotrzebowania z ilością oferowaną. Otrzymana cena usuwa niedobór lub nadwyżkę.'],
      ['Co dzieje się przy cenie poniżej równowagi?', 'Powstaje niedobór: kupujący chcą nabyć więcej, niż sprzedawcy oferują, co wywiera presję na wzrost ceny.'],
      ['Jak analizować zmianę rynkową?', 'Ustal, która krzywa się przesuwa, określ kierunek przesunięcia, a następnie porównaj nową cenę i ilość równowagi.']
    ]
  },
  {
    number: 4,
    overview: 'Elastyczność mierzy procentową reakcję jednej zmiennej na zmianę innej i pozwala przewidywać utarg, wpływ podatków oraz siłę dostosowań rynkowych.',
    qa: [
      ['Kiedy popyt jest elastyczny?', 'Gdy bezwzględna wartość elastyczności cenowej przekracza 1, więc ilość reaguje procentowo silniej niż cena.'],
      ['Jak elastyczność popytu wpływa na utarg?', 'Przy popycie elastycznym wzrost ceny zmniejsza utarg, przy nieelastycznym go zwiększa, a przy jednostkowym pozostawia utarg bez zmian.'],
      ['Jak interpretować elastyczność dochodową?', 'Wartość dodatnia wskazuje dobro normalne, ujemna dobro niższego rzędu; duża wartość dodatnia jest typowa dla dóbr luksusowych.'],
      ['Co mówi elastyczność mieszana?', 'Wartość dodatnia sugeruje substytuty, ujemna dobra komplementarne, a wartość bliska zeru słaby związek.'],
      ['Dlaczego podaż jest zwykle bardziej elastyczna w długim okresie?', 'Producenci mają więcej czasu na zmianę mocy produkcyjnych, technologii, zatrudnienia i wejście lub wyjście z rynku.']
    ]
  },
  {
    number: 5,
    overview: 'Konsument maksymalizuje użyteczność w granicach budżetu. Optimum znajduje się zwykle tam, gdzie nachylenie krzywej obojętności odpowiada relacji cen.',
    qa: [
      ['Co pokazuje linia budżetowa?', 'Wszystkie koszyki dwóch dóbr, które wyczerpują dochód konsumenta przy danych cenach. Obszar pod linią jest dostępny finansowo.'],
      ['Jakie cechy mają typowe krzywe obojętności?', 'Są opadające, nie przecinają się, wyższa oznacza większą użyteczność i zwykle są wypukłe względem początku układu.'],
      ['Jaki jest warunek optimum konsumenta?', 'Dla rozwiązania wewnętrznego krańcowa stopa substytucji równa się relacji cen dóbr.'],
      ['Czym różni się efekt substytucyjny od dochodowego?', 'Substytucyjny wynika ze zmiany relatywnej ceny, a dochodowy ze zmiany realnej siły nabywczej.'],
      ['Kiedy może wystąpić dobro Giffena?', 'Gdy dobro niższego rzędu ma tak silny ujemny efekt dochodowy, że przeważa on nad efektem substytucyjnym.']
    ]
  },
  {
    number: 6,
    overview: 'Decyzje przedsiębiorstwa łączą technologię, koszty i utarg. Firma konkurencyjna maksymalizuje zysk przy produkcji, dla której cena równa się kosztowi krańcowemu.',
    qa: [
      ['Dlaczego koszt krańcowy przecina koszty przeciętne w minimum?', 'Jeśli koszt kolejnej jednostki jest niższy od średniej, obniża średnią; jeśli jest wyższy, podnosi ją. Punkt zmiany występuje przy równości.'],
      ['Kiedy firma powinna czasowo wstrzymać produkcję?', 'W krótkim okresie, gdy cena jest niższa od przeciętnego kosztu zmiennego, ponieważ utarg nie pokrywa kosztów możliwych do uniknięcia.'],
      ['Kiedy firma powinna wyjść z rynku?', 'W długim okresie, gdy utarg nie pokrywa całkowitego kosztu ekonomicznego, czyli cena pozostaje poniżej przeciętnego kosztu całkowitego.'],
      ['Czym różni się zysk ekonomiczny od księgowego?', 'Zysk ekonomiczny odejmuje koszty jawne i ukryte, a księgowy tylko koszty jawne.'],
      ['Co dzieje się z zyskiem w długookresowej konkurencji doskonałej?', 'Wejście i wyjście firm przesuwa podaż, aż zysk ekonomiczny typowej firmy spada do zera, czyli pozostaje zysk normalny.']
    ]
  },
  {
    number: 7,
    overview: 'Nadwyżki konsumenta i producenta mierzą korzyści z wymiany. Równowaga konkurencyjna maksymalizuje ich sumę przy braku zawodności rynku.',
    qa: [
      ['Jak mierzyć nadwyżkę konsumenta?', 'Jako różnicę między skłonnością do płacenia a faktycznie zapłaconą ceną, sumowaną dla wszystkich nabywców.'],
      ['Jak mierzyć nadwyżkę producenta?', 'Jako różnicę między otrzymaną ceną a kosztem sprzedawcy, sumowaną dla wszystkich sprzedanych jednostek.'],
      ['Dlaczego równowaga jest efektywna?', 'Dobro trafia do kupujących wyceniających je najwyżej, produkcję realizują dostawcy o najniższych kosztach, a korzystne transakcje są wyczerpane.'],
      ['Czy efektywność oznacza sprawiedliwość?', 'Nie. Efektywność dotyczy wielkości łącznej nadwyżki, a sprawiedliwość jej podziału.'],
      ['Kiedy wynik rynkowy przestaje maksymalizować dobrobyt?', 'Przy efektach zewnętrznych, sile rynkowej, dobrach publicznych, asymetrii informacji lub innych zawodności rynku.']
    ]
  },
  {
    number: 8,
    overview: 'Ceny administracyjne, podatki i subwencje tworzą klin między decyzjami kupujących i sprzedawców. Ich skutki zależą od położenia regulacji oraz elastyczności.',
    qa: [
      ['Kiedy cena maksymalna jest wiążąca?', 'Gdy ustawiono ją poniżej ceny równowagi. Powoduje niedobór i potrzebę pozacenowego racjonowania dobra.'],
      ['Kiedy cena minimalna jest wiążąca?', 'Gdy leży powyżej ceny równowagi. Powoduje nadwyżkę ilości oferowanej nad zapotrzebowaniem.'],
      ['Kto faktycznie płaci podatek?', 'Strona rynku mniej elastyczna ponosi większą część ciężaru, niezależnie od tego, kto formalnie odprowadza podatek.'],
      ['Jak działa subwencja?', 'Zwiększa korzyść z transakcji dla kupującego lub sprzedawcy, podnosi ilość równowagi i obciąża budżet państwa.'],
      ['Dlaczego podatek zmniejsza liczbę transakcji?', 'Tworzy różnicę między ceną płaconą przez kupującego a ceną otrzymywaną przez sprzedawcę, eliminując część wzajemnie korzystnych wymian.']
    ]
  },
  {
    number: 9,
    overview: 'System podatkowy finansuje państwo, lecz powoduje koszty administracyjne, zmienia bodźce i może generować zbędną stratę społeczną.',
    qa: [
      ['Skąd bierze się zbędna strata podatku?', 'Część transakcji, których korzyść przewyższa koszt produkcji, nie dochodzi do skutku z powodu klina podatkowego.'],
      ['Od czego zależy rozmiar straty?', 'Rośnie wraz ze stawką podatku oraz elastycznością popytu i podaży, bo większa reakcja ilości usuwa więcej transakcji.'],
      ['Czym różni się stopa przeciętna od krańcowej?', 'Przeciętna to łączny podatek podzielony przez dochód, a krańcowa dotyczy podatku od dodatkowej jednostki dochodu.'],
      ['Co oznacza zasada korzyści?', 'Podatnik powinien płacić proporcjonalnie do korzyści uzyskiwanych z usług publicznych.'],
      ['Co oznacza zasada zdolności do płacenia?', 'Ciężar podatku powinien odpowiadać możliwości finansowej podatnika, co prowadzi do rozważań o równości pionowej i poziomej.']
    ]
  },
  {
    number: 10,
    overview: 'Dobra klasyfikuje się według rywalizacji i zastrzegalności. Dobra publiczne prowadzą do problemu gapowicza, a zasoby wspólne do nadmiernej eksploatacji.',
    qa: [
      ['Jak odróżnić cztery rodzaje dóbr?', 'Sprawdź, czy można wykluczyć niepłacących oraz czy konsumpcja jednej osoby ogranicza konsumpcję innych.'],
      ['Dlaczego rynek dostarcza za mało dóbr publicznych?', 'Nie można łatwo pobierać opłat od wszystkich korzystających, więc ludzie mają bodziec do ukrywania swojej skłonności do płacenia.'],
      ['Na czym polega tragedia wspólnego pastwiska?', 'Każdy użytkownik otrzymuje prywatną korzyść z dodatkowego użycia zasobu, lecz rozprasza społeczny koszt wyczerpania na wszystkich.'],
      ['Jak wyznaczyć społeczne zapotrzebowanie na dobro publiczne?', 'Sumuje się pionowo indywidualne skłonności do płacenia za tę samą ilość dobra.'],
      ['Jak ograniczyć nadmierne zużycie zasobu wspólnego?', 'Przez prawa własności, limity, opłaty, regulacje lub wspólnotowe reguły monitorowania i sankcji.']
    ]
  },
  {
    number: 11,
    overview: 'Efekt zewnętrzny rozdziela koszt lub korzyść prywatną od społecznej. Odpowiedzią mogą być negocjacje, podatki i subwencje Pigou, regulacje albo pozwolenia zbywalne.',
    qa: [
      ['Dlaczego negatywny efekt zewnętrzny prowadzi do nadprodukcji?', 'Producent uwzględnia koszt prywatny, ale pomija koszt narzucony osobom trzecim, więc koszt społeczny jest wyższy.'],
      ['Jak działa podatek Pigou?', 'Zwiększa prywatny koszt krańcowy o krańcowy koszt zewnętrzny, zbliżając decyzję prywatną do optimum społecznego.'],
      ['Co mówi twierdzenie Coase’a?', 'Przy jasno określonych prawach własności i niskich kosztach transakcyjnych strony mogą wynegocjować efektywny wynik niezależnie od początkowego przydziału praw.'],
      ['Jak działają zbywalne pozwolenia?', 'Państwo ustala łączny limit, a handel pozwoleniami kieruje redukcję tam, gdzie jej koszt krańcowy jest najniższy.'],
      ['Czym jest zawodność państwa?', 'Interwencja może dawać słaby wynik z powodu niewiedzy, bodźców politycznych, grup interesu, biurokracji i kosztów administracyjnych.']
    ]
  },
  {
    number: 12,
    overview: 'Nierówna informacja prowadzi do negatywnej selekcji i pokusy nadużycia. Sygnalizowanie, odsiew, kontrakty i regulacje mogą zmniejszać problem.',
    qa: [
      ['Czym różni się negatywna selekcja od pokusy nadużycia?', 'Negatywna selekcja występuje przed transakcją z powodu ukrytych cech, a pokusa nadużycia po transakcji z powodu ukrytych działań.'],
      ['Na czym polega problem „cytryny”?', 'Nabywca nie umie odróżnić jakości, więc oferuje cenę opartą na jakości średniej; dobre produkty znikają, obniżając jakość rynku.'],
      ['Czym różni się sygnał od odsiewu?', 'Sygnał wysyła lepiej poinformowana strona, a mechanizm odsiewu projektuje strona gorzej poinformowana, oferując wybór kontraktów.'],
      ['Na czym polega problem pryncypała i agenta?', 'Agent podejmuje działania w imieniu pryncypała, lecz ma własne cele i informacje, więc potrzebne są bodźce i kontrola.'],
      ['Dlaczego ekonomia behawioralna odchodzi od modelu standardowego?', 'Ludzie stosują heurystyki, mają ograniczoną samokontrolę, zależy im na sprawiedliwości i reagują na sposób przedstawienia wyboru.']
    ]
  },
  {
    number: 13,
    overview: 'Izokwanty opisują technologię, a izokoszty możliwe kombinacje nakładów przy danym budżecie. Najtańsza kombinacja spełnia warunek równości relacji produktywności i cen czynników.',
    qa: [
      ['Co przedstawia izokwanta?', 'Kombinacje pracy i kapitału pozwalające wytworzyć tę samą ilość produktu.'],
      ['Co przedstawia izokoszta?', 'Kombinacje pracy i kapitału o tym samym całkowitym koszcie przy danych cenach czynników.'],
      ['Jak znaleźć kombinację minimalizującą koszt?', 'Dla rozwiązania wewnętrznego izokwanta jest styczna do najniższej osiągalnej izokoszty.'],
      ['Co mierzy MRTS?', 'Ile jednostek jednego czynnika można zastąpić drugim bez zmiany produkcji; odpowiada relacji produktów krańcowych.'],
      ['Co zmienia nachylenie izokoszty?', 'Zmiana relacji ceny pracy do ceny kapitału; zmiana samego budżetu przesuwa izokosztę równolegle.']
    ]
  },
  {
    number: 14,
    overview: 'Monopol wybiera ilość przy MR = MC, a cenę odczytuje z krzywej popytu. Ograniczenie produkcji tworzy marżę i zbędną stratę społeczną.',
    qa: [
      ['Dlaczego utarg krańcowy monopolisty jest niższy od ceny?', 'Aby sprzedać dodatkową jednostkę, monopolista zwykle obniża cenę także na wcześniejsze jednostki, więc przyrost utargu jest mniejszy niż cena.'],
      ['Jak monopol maksymalizuje zysk?', 'Wybiera ilość, dla której MR = MC, a następnie ustala najwyższą cenę akceptowaną przy tej ilości przez popyt.'],
      ['Skąd bierze się zbędna strata monopolu?', 'Monopol nie realizuje części transakcji, dla których skłonność do płacenia przewyższa koszt krańcowy, lecz nie maksymalizują one jego zysku.'],
      ['Kiedy różnicowanie cen zwiększa produkcję?', 'Gdy pozwala obsłużyć klientów, którzy nie kupiliby po jednej cenie monopolowej; doskonałe różnicowanie usuwa stratę efektywności, ale przejmuje nadwyżkę konsumenta.'],
      ['Jak można reagować na monopol naturalny?', 'Regulacją cen, własnością publiczną, przetargiem lub pozostawieniem rynku bez interwencji, oceniając koszty każdej opcji.']
    ]
  },
  {
    number: 15,
    overview: 'Konkurencja monopolistyczna łączy wielu sprzedawców z różnicowaniem produktów. W długim okresie wejście usuwa zysk ekonomiczny, lecz firmy zachowują nadwyżkę mocy.',
    qa: [
      ['Czym różni się od konkurencji doskonałej?', 'Produkty nie są identyczne, więc firma ma opadającą krzywą popytu i pewną kontrolę nad ceną.'],
      ['Co dzieje się w długim okresie?', 'Wejście przesuwa popyt każdej istniejącej firmy, aż cena zrówna się z ATC i zysk ekonomiczny spadnie do zera.'],
      ['Czym jest nadwyżka mocy?', 'Firma produkuje poniżej ilości minimalizującej ATC, ponieważ jej krzywa popytu jest opadająca.'],
      ['Jak reklama może pomagać?', 'Może przekazywać informacje, sygnalizować jakość i ułatwiać porównanie; może też wzmacniać postrzegane różnice i siłę rynkową.'],
      ['Co oznacza rynek kontestowalny?', 'Nawet niewielka liczba firm może zachowywać się konkurencyjnie, jeśli wejście i wyjście są łatwe oraz pozbawione kosztów utopionych.']
    ]
  },
  {
    number: 16,
    overview: 'W oligopolu decyzje firm są współzależne. Teoria gier analizuje strategie, równowagę Nasha, zmowę oraz modele Cournota, Bertranda i Stackelberga.',
    qa: [
      ['Co oznacza współzależność oligopolistyczna?', 'Zysk firmy zależy nie tylko od jej decyzji, lecz także od przewidywanej reakcji kilku konkurentów.'],
      ['Czym jest równowaga Nasha?', 'Zestaw strategii, w którym żadna strona nie poprawi wyniku przez jednostronną zmianę decyzji.'],
      ['Dlaczego kartel jest niestabilny?', 'Wspólne ograniczenie produkcji podnosi zysk grupy, lecz pojedyncza firma ma bodziec do cichego zwiększenia sprzedaży.'],
      ['Czym różnią się modele Cournota i Bertranda?', 'Cournot zakłada konkurencję ilościami, a Bertrand cenami; przy identycznych produktach Bertrand może prowadzić do ceny równej MC.'],
      ['Na czym polega przewaga pierwszego ruchu w modelu Stackelberga?', 'Lider wybiera ilość wcześniej i uwzględnia funkcję reakcji naśladowcy, co może zwiększyć jego udział i zysk.']
    ]
  },
  {
    number: 17,
    overview: 'Popyt na pracę jest popytem pochodnym od wartości produktu pracownika. Płace zależą od produktywności, podaży pracy, kapitału ludzkiego, warunków pracy i instytucji.',
    qa: [
      ['Jak firma wyznacza zatrudnienie?', 'Zatrudnia kolejne jednostki pracy, dopóki wartość produktu krańcowego pracy nie zrówna się z płacą.'],
      ['Co przesuwa popyt na pracę?', 'Cena produktu, technologia, podaż innych czynników oraz produktywność pracy.'],
      ['Dlaczego płace się różnią?', 'Z powodu produktywności, kapitału ludzkiego, ryzyka i uciążliwości pracy, talentu, dyskryminacji, siły rynkowej i instytucji.'],
      ['Jak działa monopson?', 'Jedyny lub dominujący pracodawca napotyka rosnący koszt pozyskania pracy i może ograniczać zatrudnienie oraz płacę poniżej poziomu konkurencyjnego.'],
      ['Czym jest renta ekonomiczna czynnika?', 'Część wynagrodzenia przekraczająca minimalną kwotę potrzebną, by utrzymać czynnik w danym zastosowaniu.']
    ]
  },
  {
    number: 18,
    overview: 'Nierówność mierzy się rozkładem dochodu, krzywą Lorenza i współczynnikiem Giniego. Polityka redystrybucji równoważy cele sprawiedliwości i bodźce.',
    qa: [
      ['Jak czytać krzywą Lorenza?', 'Pokazuje, jaki skumulowany procent dochodu otrzymuje kolejne skumulowane x procent gospodarstw; większe oddalenie od przekątnej oznacza większą nierówność.'],
      ['Co mierzy współczynnik Giniego?', 'Udział pola między linią równości a krzywą Lorenza w całym polu pod linią równości; 0 oznacza pełną równość, 1 skrajną nierówność.'],
      ['Dlaczego dane roczne mogą zawyżać nierówność?', 'Dochód zmienia się w cyklu życia i przejściowo; konsumpcja lub dochód permanentny mogą lepiej odzwierciedlać długookresowy poziom życia.'],
      ['Jak transfery wpływają na bodźce?', 'Świadczenia malejące wraz z dochodem tworzą ukrytą krańcową stopę opodatkowania, która może osłabiać bodziec do pracy.'],
      ['Czym różnią się utylitaryzm, liberalizm i libertarianizm?', 'Utylitaryzm maksymalizuje sumę użyteczności, liberalizm Rawlsa chroni najgorzej sytuowanych, a libertarianizm akcentuje prawa i dobrowolność procesu.']
    ]
  },
  {
    number: 19,
    overview: 'Handel pozwala specjalizować się według przewagi komparatywnej. Cena światowa rozdziela korzyści i straty, a bariery handlowe ograniczają łączną nadwyżkę.',
    qa: [
      ['Czym różni się przewaga absolutna od komparatywnej?', 'Absolutna oznacza większą produktywność, a komparatywna niższy koszt alternatywny. O kierunku specjalizacji decyduje ta druga.'],
      ['Dlaczego obie strony mogą zyskać na handlu?', 'Jeśli warunki wymiany leżą między kosztami alternatywnymi stron, każda otrzymuje dobro taniej niż przy samodzielnej produkcji.'],
      ['Co dzieje się w kraju eksportującym?', 'Cena krajowa rośnie do ceny światowej; producenci zyskują, konsumenci tracą, a łączna nadwyżka rośnie.'],
      ['Co dzieje się w kraju importującym?', 'Cena krajowa spada do ceny światowej; konsumenci zyskują, producenci tracą, a łączna nadwyżka rośnie.'],
      ['Jak działa cło?', 'Podnosi cenę krajową ponad światową, zmniejsza import, przynosi dochód państwu i tworzy straty z nadmiernej produkcji krajowej oraz zbyt małej konsumpcji.']
    ]
  }
];

const formulaCatalog = [
  { chapter: 2, group: 'Narzędzia', name: 'Nachylenie prostej', formula: 'm = Δy / Δx', variables: 'Δy – zmiana na osi pionowej; Δx – zmiana na osi poziomej', use: 'Mierzy tempo zmiany i kierunek zależności.' },
  { chapter: 2, group: 'Narzędzia', name: 'Funkcja liniowa', formula: 'y = a + bx', variables: 'a – wyraz wolny; b – nachylenie', use: 'Opisuje prostoliniową zależność dwóch zmiennych.' },
  { chapter: 2, group: 'Narzędzia', name: 'Wartość realna', formula: 'wartość realna = (wartość nominalna / indeks cen) × 100', variables: 'Indeks cen ma bazę równą 100.', use: 'Usuwa wpływ zmian poziomu cen.' },
  { chapter: 3, group: 'Popyt i podaż', name: 'Liniowa funkcja popytu', formula: 'Qᴅ = a − bP', variables: 'Qᴅ – zapotrzebowanie; P – cena; a, b > 0', use: 'Pokazuje ujemną zależność ilości od ceny.' },
  { chapter: 3, group: 'Popyt i podaż', name: 'Liniowa funkcja podaży', formula: 'Qₛ = c + dP', variables: 'Qₛ – ilość oferowana; P – cena; d > 0', use: 'Pokazuje dodatnią zależność ilości od ceny.' },
  { chapter: 3, group: 'Popyt i podaż', name: 'Warunek równowagi rynkowej', formula: 'Qᴅ(P*) = Qₛ(P*) = Q*', variables: 'P* – cena równowagi; Q* – ilość równowagi', use: 'Pozwala wyznaczyć cenę i ilość bez niedoboru ani nadwyżki.' },
  { chapter: 3, group: 'Popyt i podaż', name: 'Popyt rynkowy', formula: 'Qᴅʳ(P) = Σ Qᴅᵢ(P)', variables: 'Sumowanie po wszystkich kupujących i.', use: 'Poziome sumowanie popytów indywidualnych.' },
  { chapter: 3, group: 'Popyt i podaż', name: 'Podaż rynkowa', formula: 'Qₛʳ(P) = Σ Qₛᵢ(P)', variables: 'Sumowanie po wszystkich sprzedawcach i.', use: 'Poziome sumowanie podaży indywidualnych.' },
  { chapter: 4, group: 'Elastyczność', name: 'Zmiana procentowa – punkt środkowy', formula: '%ΔX = [(X₂ − X₁) / ((X₂ + X₁)/2)] × 100%', variables: 'X₁, X₂ – wartości początkowa i końcowa', use: 'Daje ten sam wynik niezależnie od kierunku porównania.' },
  { chapter: 4, group: 'Elastyczność', name: 'Elastyczność cenowa popytu', formula: 'Eᴅ = %ΔQᴅ / %ΔP', variables: 'Zwykle analizuje się |Eᴅ|.', use: 'Mierzy procentową reakcję zapotrzebowania na zmianę ceny.' },
  { chapter: 4, group: 'Elastyczność', name: 'Punktowa elastyczność popytu', formula: 'Eᴅ = (dQᴅ/dP) × (P/Qᴅ)', variables: 'dQᴅ/dP – pochodna funkcji popytu', use: 'Mierzy elastyczność w konkretnym punkcie krzywej.' },
  { chapter: 4, group: 'Elastyczność', name: 'Elastyczność cenowa podaży', formula: 'Eₛ = %ΔQₛ / %ΔP', variables: 'Qₛ – ilość oferowana', use: 'Mierzy reakcję podaży na zmianę ceny.' },
  { chapter: 4, group: 'Elastyczność', name: 'Punktowa elastyczność podaży', formula: 'Eₛ = (dQₛ/dP) × (P/Qₛ)', variables: 'dQₛ/dP – pochodna funkcji podaży', use: 'Mierzy elastyczność podaży w punkcie.' },
  { chapter: 4, group: 'Elastyczność', name: 'Elastyczność dochodowa popytu', formula: 'Eʏ = %ΔQᴅ / %ΔY', variables: 'Y – dochód', use: 'Rozróżnia dobra normalne i niższego rzędu.' },
  { chapter: 4, group: 'Elastyczność', name: 'Mieszana elastyczność cenowa', formula: 'Eₓᵧ = %ΔQₓ / %ΔPᵧ', variables: 'Qₓ – popyt na X; Pᵧ – cena Y', use: 'Rozpoznaje substytuty i dobra komplementarne.' },
  { chapter: 4, group: 'Utarg', name: 'Utarg całkowity', formula: 'TR = P × Q', variables: 'P – cena; Q – sprzedana ilość', use: 'Łączna wartość sprzedaży.' },
  { chapter: 5, group: 'Konsument', name: 'Ograniczenie budżetowe', formula: 'PₓX + PᵧY = I', variables: 'Pₓ, Pᵧ – ceny; X, Y – ilości; I – dochód', use: 'Wyznacza koszyki wyczerpujące budżet.' },
  { chapter: 5, group: 'Konsument', name: 'Nachylenie linii budżetowej', formula: 'nachylenie = −Pₓ / Pᵧ', variables: 'Relacja cen wyraża rynkowy koszt alternatywny X.', use: 'Pokazuje, z ilu jednostek Y trzeba zrezygnować dla dodatkowego X.' },
  { chapter: 5, group: 'Konsument', name: 'Użyteczność krańcowa', formula: 'MU = ΔTU / ΔQ', variables: 'TU – użyteczność całkowita', use: 'Przyrost użyteczności z dodatkowej jednostki dobra.' },
  { chapter: 5, group: 'Konsument', name: 'Krańcowa stopa substytucji', formula: 'MRSₓᵧ = MUₓ / MUᵧ', variables: 'MUₓ, MUᵧ – użyteczności krańcowe', use: 'Gotowość zamiany Y na X przy stałej użyteczności.' },
  { chapter: 5, group: 'Konsument', name: 'Optimum konsumenta', formula: 'MRSₓᵧ = Pₓ / Pᵧ', variables: 'Warunek rozwiązania wewnętrznego.', use: 'Zrównuje subiektywną i rynkową stopę wymiany.' },
  { chapter: 5, group: 'Konsument', name: 'Reguła wyrównania użyteczności', formula: 'MUₓ/Pₓ = MUᵧ/Pᵧ', variables: 'Użyteczność krańcowa na jednostkę wydatku.', use: 'Alternatywny zapis optimum konsumenta.' },
  { chapter: 6, group: 'Koszty', name: 'Koszt całkowity', formula: 'TC = FC + VC', variables: 'FC – koszt stały; VC – koszt zmienny', use: 'Rozkłada całkowity koszt produkcji.' },
  { chapter: 6, group: 'Koszty', name: 'Przeciętny koszt stały', formula: 'AFC = FC / Q', variables: 'Q – wielkość produkcji', use: 'Koszt stały przypadający na jednostkę.' },
  { chapter: 6, group: 'Koszty', name: 'Przeciętny koszt zmienny', formula: 'AVC = VC / Q', variables: 'Q – wielkość produkcji', use: 'Koszt zmienny przypadający na jednostkę.' },
  { chapter: 6, group: 'Koszty', name: 'Przeciętny koszt całkowity', formula: 'ATC = TC/Q = AFC + AVC', variables: 'Q – wielkość produkcji', use: 'Całkowity koszt jednej jednostki.' },
  { chapter: 6, group: 'Koszty', name: 'Koszt krańcowy', formula: 'MC = ΔTC / ΔQ', variables: 'Przyrost kosztu przy zmianie produkcji.', use: 'Koszt wytworzenia dodatkowej jednostki.' },
  { chapter: 6, group: 'Produkcja', name: 'Produkt krańcowy', formula: 'MPᴸ = ΔQ / ΔL', variables: 'L – nakład pracy', use: 'Przyrost produkcji z dodatkowej jednostki pracy.' },
  { chapter: 6, group: 'Zysk', name: 'Zysk ekonomiczny', formula: 'π = TR − TC', variables: 'TC obejmuje koszty jawne i ukryte.', use: 'Mierzy nadwyżkę ponad pełny koszt alternatywny.' },
  { chapter: 6, group: 'Zysk', name: 'Utarg krańcowy', formula: 'MR = ΔTR / ΔQ', variables: 'Przyrost utargu z dodatkowej jednostki.', use: 'Podstawa decyzji o wielkości produkcji.' },
  { chapter: 6, group: 'Zysk', name: 'Warunek maksymalizacji zysku', formula: 'MR = MC', variables: 'Przy przecięciu od dołu przez MC.', use: 'Produkcję zwiększa się, dopóki przyrost utargu przewyższa przyrost kosztu.' },
  { chapter: 6, group: 'Zysk', name: 'Zysk na wykresie', formula: 'π = (P − ATC) × Q', variables: 'ATC oceniany przy ilości Q.', use: 'Pole prostokąta zysku firmy.' },
  { chapter: 6, group: 'Konkurencja', name: 'Firma konkurencyjna', formula: 'P = MR = AR', variables: 'AR – utarg przeciętny.', use: 'Firma jest cenobiorcą.' },
  { chapter: 7, group: 'Dobrobyt', name: 'Nadwyżka konsumenta', formula: 'CS = Σ(WTPᵢ − P)', variables: 'WTPᵢ – skłonność do płacenia.', use: 'Korzyść kupujących ponad zapłaconą cenę.' },
  { chapter: 7, group: 'Dobrobyt', name: 'Nadwyżka producenta', formula: 'PS = Σ(P − kosztᵢ)', variables: 'Kosztᵢ – koszt krańcowy sprzedanej jednostki.', use: 'Korzyść sprzedawców ponad koszty zmienne transakcji.' },
  { chapter: 7, group: 'Dobrobyt', name: 'Nadwyżka całkowita', formula: 'TS = CS + PS', variables: 'Przy podatku dochód państwa analizuje się oddzielnie.', use: 'Miara łącznych korzyści uczestników rynku.' },
  { chapter: 8, group: 'Podatki', name: 'Klin podatkowy', formula: 'Pᵦ − Pₛ = t', variables: 'Pᵦ – cena kupującego; Pₛ – cena sprzedawcy; t – podatek jednostkowy', use: 'Pokazuje różnicę cen tworzoną przez podatek.' },
  { chapter: 8, group: 'Podatki', name: 'Przybliżony podział ciężaru podatku', formula: 'udział kupujących ≈ Eₛ/(Eₛ + |Eᴅ|)', variables: 'Drugi udział przypada sprzedawcom.', use: 'Mniej elastyczna strona ponosi większy ciężar.' },
  { chapter: 9, group: 'Podatki', name: 'Dochód podatkowy', formula: 'T = t × Qₜ', variables: 'Qₜ – ilość transakcji po podatku.', use: 'Pole prostokąta klina podatkowego.' },
  { chapter: 9, group: 'Podatki', name: 'Zbędna strata podatku', formula: 'DWL ≈ ½ × t × (Q* − Qₜ)', variables: 'Dla liniowych krzywych.', use: 'Pole trójkąta utraconych transakcji.' },
  { chapter: 9, group: 'Podatki', name: 'Przeciętna stopa podatkowa', formula: 'ATR = podatek całkowity / dochód całkowity', variables: 'ATR – average tax rate.', use: 'Mierzy udział dochodu oddawany w podatkach.' },
  { chapter: 9, group: 'Podatki', name: 'Krańcowa stopa podatkowa', formula: 'MTR = Δpodatku / Δdochodu', variables: 'MTR – marginal tax rate.', use: 'Pokazuje obciążenie dodatkowej jednostki dochodu.' },
  { chapter: 10, group: 'Dobra publiczne', name: 'Społeczna skłonność do płacenia', formula: 'MBₛ(Q) = Σ MBᵢ(Q)', variables: 'Pionowe sumowanie korzyści krańcowych.', use: 'Wyznacza popyt społeczny na dobro publiczne.' },
  { chapter: 10, group: 'Dobra publiczne', name: 'Optimum dobra publicznego', formula: 'Σ MBᵢ(Q*) = MC(Q*)', variables: 'MBᵢ – indywidualna korzyść krańcowa.', use: 'Warunek efektywnej ilości dobra publicznego.' },
  { chapter: 11, group: 'Efekty zewnętrzne', name: 'Krańcowy koszt społeczny', formula: 'MSC = MPC + MEC', variables: 'MPC – koszt prywatny; MEC – koszt zewnętrzny.', use: 'Uwzględnia pełny koszt dodatkowej jednostki.' },
  { chapter: 11, group: 'Efekty zewnętrzne', name: 'Krańcowa korzyść społeczna', formula: 'MSB = MPB + MEB', variables: 'MPB – korzyść prywatna; MEB – korzyść zewnętrzna.', use: 'Uwzględnia korzyści dla osób trzecich.' },
  { chapter: 11, group: 'Efekty zewnętrzne', name: 'Optimum społeczne', formula: 'MSB(Q*) = MSC(Q*)', variables: 'Q* – efektywna społecznie ilość.', use: 'Warunek maksymalizacji nadwyżki społecznej.' },
  { chapter: 11, group: 'Efekty zewnętrzne', name: 'Podatek Pigou', formula: 'tᴾ = MEC(Q*)', variables: 'MEC oceniany w optimum społecznym.', use: 'Internalizuje negatywny efekt zewnętrzny.' },
  { chapter: 13, group: 'Produkcja', name: 'Funkcja produkcji', formula: 'Q = f(L, K)', variables: 'L – praca; K – kapitał.', use: 'Łączy nakłady z maksymalną możliwą produkcją.' },
  { chapter: 13, group: 'Produkcja', name: 'Równanie izokoszty', formula: 'C = wL + rK', variables: 'w – płaca; r – cena kapitału.', use: 'Kombinacje nakładów o tym samym koszcie.' },
  { chapter: 13, group: 'Produkcja', name: 'Nachylenie izokoszty', formula: '−w/r', variables: 'Relacja cen czynników.', use: 'Rynkowy koszt zastępowania kapitału pracą.' },
  { chapter: 13, group: 'Produkcja', name: 'Krańcowa stopa substytucji technicznej', formula: 'MRTSᴸᴷ = MPᴸ / MPᴷ', variables: 'Produkty krańcowe pracy i kapitału.', use: 'Technologiczna możliwość zastępowania czynników.' },
  { chapter: 13, group: 'Produkcja', name: 'Minimum kosztu', formula: 'MPᴸ/w = MPᴷ/r', variables: 'Równoważnie: MRTS = w/r.', use: 'Ostatnia złotówka wydana na każdy czynnik daje taki sam przyrost produkcji.' },
  { chapter: 14, group: 'Monopol', name: 'Monopol – wybór ilości', formula: 'MR(Qₘ) = MC(Qₘ)', variables: 'Cenę Pₘ odczytuje się z popytu.', use: 'Warunek maksymalizacji zysku monopolisty.' },
  { chapter: 14, group: 'Monopol', name: 'Indeks Lernera', formula: '(P − MC)/P = 1/|Eᴅ|', variables: 'Dla monopolisty maksymalizującego zysk.', use: 'Łączy marżę z elastycznością popytu.' },
  { chapter: 16, group: 'Oligopol', name: 'Wskaźnik koncentracji', formula: 'CRₙ = Σ₁ⁿ sᵢ', variables: 'sᵢ – udział rynkowy jednej z n największych firm.', use: 'Mierzy udział największych dostawców.' },
  { chapter: 16, group: 'Oligopol', name: 'Indeks Herfindahla-Hirschmana', formula: 'HHI = Σ sᵢ²', variables: 'Udziały zwykle podaje się w procentach.', use: 'Silniej waży duże udziały rynkowe.' },
  { chapter: 17, group: 'Rynek pracy', name: 'Produkt krańcowy pracy', formula: 'MPᴸ = ΔQ / ΔL', variables: 'Przyrost produkcji z dodatkowego pracownika.', use: 'Podstawa popytu przedsiębiorstwa na pracę.' },
  { chapter: 17, group: 'Rynek pracy', name: 'Wartość produktu krańcowego pracy', formula: 'VMPᴸ = P × MPᴸ', variables: 'P – cena produktu.', use: 'Dodatkowy utarg generowany przez jednostkę pracy przy konkurencyjnym rynku produktu.' },
  { chapter: 17, group: 'Rynek pracy', name: 'Warunek zatrudnienia', formula: 'w = VMPᴸ', variables: 'w – płaca.', use: 'Firma zatrudnia do punktu zrównania płacy z wartością produktu krańcowego.' },
  { chapter: 17, group: 'Rynek pracy', name: 'Renta ekonomiczna', formula: 'renta = wynagrodzenie faktyczne − dochód transferowy', variables: 'Dochód transferowy utrzymuje czynnik w zastosowaniu.', use: 'Mierzy nadwyżkę wynagrodzenia czynnika.' },
  { chapter: 18, group: 'Nierówność', name: 'Współczynnik Giniego', formula: 'G = A / (A + B)', variables: 'A – pole między linią równości a krzywą Lorenza.', use: 'Mierzy stopień nierówności rozkładu.' },
  { chapter: 18, group: 'Nierówność', name: 'Stopa ubóstwa', formula: 'stopa ubóstwa = (liczba osób ubogich / populacja) × 100%', variables: 'Próg ubóstwa musi być zdefiniowany.', use: 'Udział ludności poniżej przyjętego progu.' },
  { chapter: 19, group: 'Handel', name: 'Koszt alternatywny produkcji', formula: 'OCₓ = utracona ilość Y / dodatkowa ilość X', variables: 'Nachylenie granicy możliwości produkcyjnych.', use: 'Porównuje względne koszty i wyznacza przewagę komparatywną.' },
  { chapter: 19, group: 'Handel', name: 'Warunek korzystnych warunków wymiany', formula: 'OCₓᴬ < cena wymienna X < OCₓᴮ', variables: 'A ma niższy koszt alternatywny X niż B.', use: 'Cena między kosztami alternatywnymi pozwala obu stronom zyskać.' },
  { chapter: 19, group: 'Handel', name: 'Import', formula: 'M = Qᴅ(Pw) − Qₛ(Pw)', variables: 'Pw – cena światowa niższa od krajowej autarkicznej.', use: 'Różnica popytu i podaży krajowej przy wolnym handlu.' },
  { chapter: 19, group: 'Handel', name: 'Eksport', formula: 'X = Qₛ(Pw) − Qᴅ(Pw)', variables: 'Pw – cena światowa wyższa od krajowej autarkicznej.', use: 'Nadwyżka podaży krajowej kierowana za granicę.' },
  { chapter: 19, group: 'Handel', name: 'Dochód z cła', formula: 'T = t × Mₜ', variables: 't – cło jednostkowe; Mₜ – import po cle.', use: 'Pole prostokąta wpływów celnych.' }
];
