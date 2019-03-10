$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:com/slawomirciecierski/seleniumtest/BydgoszczSite.feature");
formatter.feature({
  "name": "Testy strony Bydgoszcz.pl",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027\u003cmenu\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027\u003cmenu\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "menu"
      ]
    },
    {
      "cells": [
        "Aktualności"
      ]
    },
    {
      "cells": [
        "Miasto"
      ]
    },
    {
      "cells": [
        "Rozwój"
      ]
    },
    {
      "cells": [
        "Inwestycje"
      ]
    },
    {
      "cells": [
        "Edukacja"
      ]
    },
    {
      "cells": [
        "Kultura"
      ]
    },
    {
      "cells": [
        "Sport"
      ]
    },
    {
      "cells": [
        "Promocja"
      ]
    },
    {
      "cells": [
        "NGO"
      ]
    },
    {
      "cells": [
        "Osiedla"
      ]
    },
    {
      "cells": [
        "Seniorzy"
      ]
    },
    {
      "cells": [
        "Świadczenia"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027Aktualności\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027Aktualności\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027Miasto\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027Miasto\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027Rozwój\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027Rozwój\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027Inwestycje\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027Inwestycje\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027Edukacja\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027Edukacja\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027Kultura\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027Kultura\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027Sport\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027Sport\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027Promocja\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027Promocja\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027NGO\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027NGO\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027Osiedla\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027Osiedla\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027Seniorzy\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027Seniorzy\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testowanie tytułu strony w różnych menu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik kliknie menu \u0027Świadczenia\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikKliknieMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tytuł strony kończy się na \u0027Świadczenia\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.tytułStronyKończySieNaMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Szukaj tekstu na stronie",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.step({
  "name": "Użytkownik wyszuka słowo \u0027\u003cslowo\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "Użytkownik zobaczy \u0027\u003cliczba\u003e\u0027 wyników",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "slowo",
        "liczba"
      ]
    },
    {
      "cells": [
        "Niesymfonie",
        "1"
      ]
    },
    {
      "cells": [
        "Ciecierski",
        "1"
      ]
    },
    {
      "cells": [
        "sportowy",
        "10"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Szukaj tekstu na stronie",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik wyszuka słowo \u0027Niesymfonie\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikWyszukaSlowo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik zobaczy \u00271\u0027 wyników",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.użytkownikZobaczyLiczbaWyników(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Szukaj tekstu na stronie",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik wyszuka słowo \u0027Ciecierski\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikWyszukaSlowo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik zobaczy \u00271\u0027 wyników",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.użytkownikZobaczyLiczbaWyników(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Szukaj tekstu na stronie",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę \u0027https://www.bydgoszcz.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSiteB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik wyszuka słowo \u0027sportowy\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikWyszukaSlowo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik zobaczy \u002710\u0027 wyników",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.użytkownikZobaczyLiczbaWyników(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Szukaj tekstu na stronie Portalu Kujawskiego",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Użytkownik otworzy stronę Portalu Kujawskiego \u0027http://www.portalkujawski.pl/\u0027",
  "keyword": "Given "
});
formatter.step({
  "name": "Użytkownik wyszuka słowo w Portalu Kujawskim \u0027\u003cslowoPK\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "Użytkownik zobaczy ilość powtórzeń w Portalu Kujawskim \u0027\u003cliczbaPK\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "slowoPK",
        "liczbaPK"
      ]
    },
    {
      "cells": [
        "Toruń",
        "20"
      ]
    },
    {
      "cells": [
        "Ciecierski",
        "10"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Szukaj tekstu na stronie Portalu Kujawskiego",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę Portalu Kujawskiego \u0027http://www.portalkujawski.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSitePK(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik wyszuka słowo w Portalu Kujawskim \u0027Toruń\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikWyszukaSlowoPK(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik zobaczy ilość powtórzeń w Portalu Kujawskim \u002720\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.użytkownikZobaczyLiczbaWynikówYT(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Szukaj tekstu na stronie Portalu Kujawskiego",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik otworzy stronę Portalu Kujawskiego \u0027http://www.portalkujawski.pl/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "SiteSteps.userOpensSitePK(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik wyszuka słowo w Portalu Kujawskim \u0027Ciecierski\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "SiteSteps.użytkownikWyszukaSlowoPK(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Użytkownik zobaczy ilość powtórzeń w Portalu Kujawskim \u002710\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SiteSteps.użytkownikZobaczyLiczbaWynikówYT(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});