Feature: Testy strony Bydgoszcz.pl
#przekazać nazwę obiektu poddawanego testowi w Scenario

  Scenario Outline: Testowanie tytułu strony w różnych menu
    Given Użytkownik otworzy stronę 'https://www.bydgoszcz.pl/'
    #użytkownik użyje obiektu o identyfikatorze umieszczonym we wzorcu '<nazwa-obiektu>'
    When Użytkownik kliknie menu '<menu>'
    Then Tytuł strony kończy się na '<menu>'

    Examples:
      | menu        |
      | Aktualności |
      | Miasto      |
      | Rozwój      |
      | Inwestycje  |
      | Edukacja    |
      | Kultura     |
      | Sport       |
      | Promocja    |
      | NGO         |
      | Osiedla     |
      | Seniorzy    |
      | Świadczenia |


  Scenario Outline: Szukaj tekstu na stronie
    Given Użytkownik otworzy stronę 'https://www.bydgoszcz.pl/'
    #użytkownik użyje obiektu o identyfikatorze umieszczonym we wzorcu '<nazwa-obiektu>'
    When Użytkownik wyszuka słowo '<slowo>'
    Then Użytkownik zobaczy '<liczba>' wyników

    Examples:
      | slowo       | liczba |
      | Niesymfonie | 1      |
      | Ciecierski  | 1      |
      | sportowy    | 10     |


  Scenario Outline: Szukaj tekstu na stronie Portalu Kujawskiego
    Given Użytkownik otworzy stronę Portalu Kujawskiego 'http://www.portalkujawski.pl/'
    When Użytkownik wyszuka słowo w Portalu Kujawskim '<slowoPK>'
    Then Użytkownik zobaczy ilość powtórzeń w Portalu Kujawskim '<liczbaPK>'

    Examples:
      | slowoPK    | liczbaPK |
      | Toruń      | 20       |
      | Ciecierski | 10       |