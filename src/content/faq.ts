export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Was kostet der Führerschein bei euch?",
    answer:
      "Das hängt von Klasse, Vorkenntnissen und Übungsbedarf ab. Fordere unverbindlich ein Angebot an – wir melden uns kurzfristig mit einer individuellen Kalkulation.",
  },
  {
    question: "Wie melde ich mich an?",
    answer:
      "Telefonisch, per E-Mail oder direkt vor Ort während unserer Bürozeiten. Wir klären mit dir die passende Klasse und die nächsten Schritte zu Sehtest, Erste-Hilfe-Kurs und Antrag.",
  },
  {
    question: "Welche Unterlagen brauche ich zur Anmeldung?",
    answer:
      "Personalausweis oder Reisepass, ein biometrisches Passfoto sowie eine Sehtestbescheinigung und den Nachweis über einen Erste-Hilfe-Kurs. Bei minderjährigen Bewerbern (z. B. für BF17) ist zusätzlich die Zustimmung der Erziehungsberechtigten nötig. Ruf uns gerne an oder schreib uns – wir sagen dir genau, was in deinem Fall fehlt.",
  },
  {
    question: "Wo mache ich den Sehtest und den Erste-Hilfe-Kurs?",
    answer:
      "Den Sehtest bekommst du bei jedem Optiker oder Augenarzt, den Erste-Hilfe-Kurs bei Anbietern wie DRK, ASB, Johanniter oder Malteser. Beides brauchst du für den Antrag auf Fahrerlaubnis – melde dich bei uns, wenn du einen Termin in der Nähe suchst.",
  },
  {
    question: "Wie lange dauert die Führerscheinausbildung?",
    answer:
      "Das hängt von der Klasse, der Anzahl der Theorie- und Fahrstunden sowie deinem persönlichen Übungsbedarf ab – realistisch sind einige Wochen bis wenige Monate. Ruf uns an oder schreib uns eine E-Mail, dann sprechen wir über einen konkreten Zeitrahmen für dich.",
  },
  {
    question: "Bietet ihr Automatik-Ausbildung an?",
    answer:
      "Ja. In unserer Flotte stehen unter anderem VW Golf und Kia Niro als Automatikfahrzeuge sowie mehrere Elektrofahrzeuge (VW ID.3, MG4, Tesla Model S) zur Verfügung.",
  },
  {
    question: "Was ist B196 und für wen lohnt es sich?",
    answer:
      "Mit B196 darfst du auf Basis eines bestehenden Führerscheins Klasse B ein 125-cm³-Motorrad fahren – nach einer kompakten Zusatzausbildung, ohne neue Theorieprüfung. Ideal für alle, die unkompliziert ins Motorradfahren einsteigen wollen.",
  },
  {
    question: "Was ist begleitetes Fahren ab 17 (BF17)?",
    answer:
      "Mit BF17 machst du deinen Führerschein Klasse B bereits mit 17 und fährst danach bis zum 18. Geburtstag in Begleitung einer eingetragenen Person. So sammelst du vor dem Alleinfahren wertvolle Praxiserfahrung.",
  },
  {
    question: "Habt ihr einen Fahrsimulator?",
    answer:
      "Ja, wir setzen einen Fahrsimulator ergänzend zur praktischen Ausbildung ein, damit du erste Fahreindrücke sammeln und Gefahrensituationen risikofrei üben kannst.",
  },
];

// ---------------------------------------------------------------------------
// Topic-page FAQs. Rule for every answer (knowledge/seo-strategy.md): a legal
// fact must be covered by one of the official sources listed on that page;
// anything about Fahrschulring itself must come from site.ts / classes.ts /
// fleet.ts / team.ts or the old fahrschulring.de. No prices of our own.
// ---------------------------------------------------------------------------

export const faqAuto: FaqItem[] = [
  {
    question: "Ab wann kann ich mit dem Autoführerschein (Klasse B) anfangen?",
    answer:
      "Den Antrag kannst du bis zu sechs Monate vor dem Mindestalter stellen: für BF17 (Begleitetes Fahren ab 17) also mit 16½, für den regulären Führerschein Klasse B mit 17½. Die Prüfungen legst du frühestens kurz vor dem Geburtstag ab. Wir sagen dir beim Erstgespräch, wann du dich sinnvollerweise anmeldest.",
  },
  {
    question: "Was ist der Unterschied zwischen B197 und Schlüsselzahl 78?",
    answer:
      "Mit der Schlüsselzahl 78 darfst du nur Automatikfahrzeuge fahren. Mit B197 machst du die Prüfung ebenfalls auf einem Automatik-Auto, hast vorher aber mindestens zehn Fahrstunden à 45 Minuten auf einem Schaltwagen plus eine mindestens 15-minütige Testfahrt mit deinem Fahrlehrer absolviert – und darfst danach beides fahren, ohne zusätzliche Prüfung. B197 ist in der EU anerkannt.",
  },
  {
    question: "Kann ich bei euch auf einem Elektroauto lernen?",
    answer:
      "Ja. In unserem Fuhrpark stehen unter anderem VW ID.3, MG4 und Tesla Model S. Elektroautos sind Automatikfahrzeuge – wer die Prüfung darauf ablegt, bekommt entweder die Schlüsselzahl 78 (nur Automatik) oder macht zusätzlich die B197-Schaltausbildung.",
  },
  {
    question: "Wer darf beim Begleiteten Fahren ab 17 (BF17) als Begleitperson eingetragen werden?",
    answer:
      "Die Begleitperson muss mindestens 30 Jahre alt sein, seit mindestens fünf Jahren ununterbrochen die Fahrerlaubnis Klasse B besitzen und darf zum Zeitpunkt des Antrags höchstens einen Punkt im Fahreignungsregister haben. Es können mehrere Begleitpersonen eingetragen werden, auch nachträglich.",
  },
  {
    question: "Wie viele Theoriestunden und Sonderfahrten sind für Klasse B vorgeschrieben?",
    answer:
      "Nach aktueller Rechtslage: 12 Doppelstunden Grundstoff plus 2 Doppelstunden klassenspezifischer Zusatzstoff (je 90 Minuten) sowie 12 Sonderfahrten à 45 Minuten – 5 Überlandfahrten, 4 Autobahnfahrten und 3 Fahrten bei Dunkelheit. Für die normalen Übungsstunden gibt es keine gesetzliche Mindestzahl; die Anzahl hängt von deinem Lernfortschritt ab. Eine Reform dieser Vorgaben wird im Bundestag beraten, ist aber (Stand Oktober 2026) nicht in Kraft.",
  },
  {
    question: "Wo in Stuttgart finden Theorie- und Praxisprüfung statt?",
    answer:
      "Die Prüfungen nimmt der TÜV SÜD ab. Die praktische Prüfung startet in Stuttgart seit April 2025 am Service-Center in Stuttgart-Feuerbach; den genauen Treffpunkt und Termin bekommst du von uns. Den Antrag auf die Fahrerlaubnis stellst du bei der Führerscheinstelle der Stadt Stuttgart (seit März 2026 im Löwentorbogen 11, Bad Cannstatt) – Stuttgarter können den Erstantrag auch online stellen.",
  },
];

export const faqMotorrad: FaqItem[] = [
  {
    question: "Welche Motorradklasse passt zu mir?",
    answer:
      "Das hängt vor allem von deinem Alter und dem Motorrad ab, das du fahren willst: AM ab 15 für Roller und Kleinkrafträder bis 45 km/h, A1 ab 16 für Leichtkrafträder bis 125 cm³ und 11 kW, A2 ab 18 für Motorräder bis 35 kW und A ab 24 (oder ab 20 nach zwei Jahren A2) ohne Leistungsgrenze. Wer schon einen Autoführerschein hat und nur ein 125er fahren will, kommt oft mit B196 schneller ans Ziel.",
  },
  {
    question: "Was ist B196 und was sind die Voraussetzungen?",
    answer:
      "B196 ist eine Erweiterung des Autoführerscheins Klasse B für Leichtkrafträder bis 125 cm³ und 11 kW. Voraussetzungen: mindestens 25 Jahre alt und seit mindestens fünf Jahren im Besitz der Klasse B. Die Schulung umfasst mindestens 4 Theorie- und 5 Praxiseinheiten à 90 Minuten – ohne Prüfung. B196 gilt nur in Deutschland und ist kein A1-Führerschein.",
  },
  {
    question: "Brauche ich für A nach A2 eine neue Theorieprüfung?",
    answer:
      "Nein. Wer die Klasse A2 seit mindestens zwei Jahren besitzt, kann mit 20 Jahren auf A aufsteigen und legt dafür nur eine praktische Prüfung ab (Stufenaufstieg).",
  },
  {
    question: "Welche Motorräder habt ihr in der Fahrschule?",
    answer:
      "Für AM einen Suzuki-Roller, für A1 eine Aprilia Tuono 125, für B196 eine KTM Duke 125, für A2 eine Honda CB 500 und für die Klasse A Honda Hornet 750 und BMW F900R. Schutzkleidung und Helm besprechen wir beim Erstgespräch.",
  },
  {
    question: "Wann ist Motorradsaison in der Fahrschule?",
    answer:
      "Die praktische Motorradausbildung findet witterungsabhängig statt – klassisch von Frühjahr bis Herbst. Theorie kannst du jederzeit beginnen; melde dich am besten rechtzeitig vor der Saison, damit du zum Saisonstart fahren kannst.",
  },
];

export const faqAnhaenger: FaqItem[] = [
  {
    question: "Brauche ich für einen Anhänger überhaupt einen eigenen Führerschein?",
    answer:
      "Mit Klasse B darfst du Anhänger bis 750 kg zulässiger Gesamtmasse ziehen, und auch schwerere, solange die Kombination 3.500 kg nicht überschreitet. Erst wenn das Gespann schwerer wird, brauchst du B96 (bis 4.250 kg) oder BE (Anhänger bis 3.500 kg, auch hinter einem 3,5-t-Zugfahrzeug).",
  },
  {
    question: "B96 oder BE – was ist der Unterschied?",
    answer:
      "B96 ist keine eigene Klasse, sondern eine Schlüsselzahl: eine mindestens siebenstündige Schulung in der Fahrschule ohne Prüfung, danach darf die Kombination bis 4.250 kg wiegen. BE ist eine eigene Fahrerlaubnisklasse mit praktischer Prüfung (keine Theorieprüfung), die Anhänger bis 3.500 kg erlaubt – typisch für größere Wohnwagen, Pferde- oder Autotransporter.",
  },
  {
    question: "Wie lange dauert die BE-Ausbildung?",
    answer:
      "Es gibt keine Mindestzahl an Übungsstunden, aber vorgeschriebene Sonderfahrten (Überland, Autobahn, Dunkelheit). Wer sicher Auto fährt, braucht meist nur wenige Fahrstunden, um Rangieren, Rückwärtsfahren und das Abstellen mit Anhänger sicher zu beherrschen. Wir schätzen den Umfang nach einer ersten Fahrstunde realistisch ein.",
  },
  {
    question: "Mit welchem Fahrzeug übe ich bei euch mit Anhänger?",
    answer:
      "Für die Anhängerausbildung setzen wir einen PKW mit Kastenanhänger ein (Foto im Fuhrpark). Fahrzeuge und Anhänger können sich ändern – welches Gespann du bekommst, sagen wir dir bei der Terminvereinbarung.",
  },
];

export const faqLkwBus: FaqItem[] = [
  {
    question: "Welche LKW- und Busklassen bietet Fahrschulring an?",
    answer:
      "Alle: C1 und C1E (bis 7,5 t bzw. mit Anhänger bis 12 t), C und CE (LKW und Sattelzug) sowie D1, D1E, D und DE (Kleinbus bis Bus mit Anhänger). Dazu die land- und forstwirtschaftlichen Klassen T und L. Unser Inhaber Frank Eibl ist Fahrlehrer aller Klassen.",
  },
  {
    question: "Welche Voraussetzungen gelten für den LKW-Führerschein?",
    answer:
      "Du brauchst die Klasse B, eine ärztliche Untersuchung und ein augenärztliches Gutachten (nicht nur den einfachen Sehtest). Mindestalter: C1/C1E 18 Jahre, C/CE 21 Jahre; für die gewerbliche Fahrt gelten mit abgeschlossener Berufskraftfahrer-Grundqualifikation niedrigere Altersgrenzen. Die Details besprechen wir mit dir – sie hängen davon ab, ob du privat oder beruflich fahren willst.",
  },
  {
    question: "Welche Fahrzeuge setzt ihr in der LKW- und Busausbildung ein?",
    answer:
      "Einen Mercedes Sprinter für C1, einen Mercedes Actros als Sattelzug für C/CE und einen Setra-Bus für die Klasse D.",
  },
  {
    question: "Übernimmt die Agentur für Arbeit die Kosten für den LKW-Führerschein?",
    answer:
      "Das ist im Einzelfall möglich (z. B. Bildungsgutschein bei beruflicher Weiterbildung), wird aber von der Agentur für Arbeit bzw. dem Jobcenter entschieden, nicht von uns. Sprich uns an – wir stellen dir die Unterlagen für den Antrag zusammen.",
  },
];

export const faqAblauf: FaqItem[] = [
  {
    question: "Welche Unterlagen brauche ich für den Führerscheinantrag in Stuttgart?",
    answer:
      "Personalausweis oder Reisepass, ein biometrisches Passfoto, eine Sehtestbescheinigung (nicht älter als zwei Jahre, von einer amtlich anerkannten Sehteststelle), den Nachweis über einen Erste-Hilfe-Kurs (9 Unterrichtseinheiten) und die Anmeldebestätigung der Fahrschule. Bei BF17 kommen die Angaben zu den Begleitpersonen und die Zustimmung der Erziehungsberechtigten dazu.",
  },
  {
    question: "Wo ist die Führerscheinstelle in Stuttgart?",
    answer:
      "Die Kfz-Zulassungs- und Führerscheinstelle der Stadt Stuttgart ist im März 2026 umgezogen: Sie ist jetzt im Löwentorbogen 11, 70376 Stuttgart (Bad Cannstatt, Stadtbahn-Haltestelle Löwentor). Du brauchst einen Termin; Stuttgarter können den Erstantrag auch online stellen.",
  },
  {
    question: "Wie lange dauert der Führerschein?",
    answer:
      "Realistisch sind einige Wochen bis wenige Monate – abhängig von Klasse, Lernfortschritt, deiner Verfügbarkeit und den Prüfungsterminen beim TÜV. Der Antrag bei der Führerscheinstelle sollte früh gestellt werden, weil er einige Wochen Bearbeitungszeit braucht. Wer schneller fertig sein will, spricht uns auf einen Intensivkurs an.",
  },
  {
    question: "Wie läuft die Theorieprüfung ab?",
    answer:
      "Am Computer beim TÜV SÜD: Für Klasse B werden 30 Fragen gestellt, du darfst höchstens 10 Fehlerpunkte haben (und nicht zwei Fragen mit je 5 Punkten falsch). Die Prüfung gibt es auf Deutsch und in zwölf Fremdsprachen, darunter Englisch, Türkisch, Arabisch, Russisch, Spanisch und Polnisch.",
  },
  {
    question: "Ändert die Führerscheinreform gerade etwas für mich?",
    answer:
      "Noch nicht. Die Bundesregierung hat im Mai 2026 eine Reform der Fahrschulausbildung beschlossen (u. a. flexiblere Theorie, kürzerer Fragenkatalog, Simulator-Anteile), der Bundestag berät sie seit September 2026. Bis sie in Kraft ist – das Ministerium nennt frühestens Anfang 2027 –, gelten die heutigen Regeln. Das Ministerium rät ausdrücklich, mit dem Führerschein nicht zu warten.",
  },
  {
    question: "Bietet ihr Intensivkurse an?",
    answer:
      "Ja, Intensivkurse bieten wir in allen Klassen nach Absprache an. Ob das für dich passt, hängt davon ab, wie viel Zeit du am Stück hast – ruf uns an, dann planen wir das gemeinsam.",
  },
];

export const faqKosten: FaqItem[] = [
  {
    question: "Warum nennt ihr keinen Festpreis für den Führerschein?",
    answer:
      "Weil der größte Posten – die Anzahl der Übungsfahrstunden – von dir abhängt und sich vorher nicht seriös festlegen lässt. Fest sind Grundgebühr, Lernmaterial, die vorgeschriebenen Sonderfahrten und die Prüfungsgebühren. Du bekommst von uns vor der Anmeldung eine schriftliche Preisliste und ein Angebot für deine Klasse.",
  },
  {
    question: "Welche Gebühren fallen neben der Fahrschule an?",
    answer:
      "Die Prüfungsgebühren des TÜV SÜD (für Klasse B laut Gebührenübersicht 24,99 € Theorie und 129,83 € Praxis), die Antragsgebühr der Führerscheinstelle, Sehtest, Erste-Hilfe-Kurs und Passfoto. Diese Posten gehen nicht an die Fahrschule.",
  },
  {
    question: "Was kostet ein Führerschein Klasse B im Durchschnitt?",
    answer:
      "Das Bundesverkehrsministerium nennt (Mai 2026) rund 3.400 € als bundesweiten Durchschnitt für Klasse B; Baden-Württemberg liegt laut ADAC in dieser Größenordnung. Das ist ein Durchschnitt über alle Fahrschulen, keine Preisangabe von uns – dein Preis hängt von Klasse und Übungsbedarf ab.",
  },
  {
    question: "Was kostet es, wenn ich durch die Prüfung falle?",
    answer:
      "Dann fallen die Prüfungsgebühr des TÜV und in der Regel die Vorstellung durch die Fahrschule erneut an. Deshalb lohnt es sich, erst zur Prüfung zu gehen, wenn Fahrlehrer und Schüler sicher sind – wir drängen dich nicht in eine zu frühe Prüfung.",
  },
  {
    question: "Wird der Führerschein durch die Reform billiger?",
    answer:
      "Die Reform ist (Stand Oktober 2026) noch nicht beschlossen. Der Bundesverkehrsminister schätzt die mögliche Ersparnis auf „mehrere Hundert, bestenfalls bis zu 1.000 Euro“, mit großen regionalen Unterschieden. Das Ministerium rät ausdrücklich davon ab, auf die Reform zu warten.",
  },
];

export const faqUmschreiben: FaqItem[] = [
  {
    question: "Wie lange darf ich mit meinem ausländischen Führerschein in Deutschland fahren?",
    answer:
      "Nach Begründung eines Wohnsitzes in Deutschland sechs Monate (185 Tage). Danach musst du ihn umschreiben lassen – je nach Herkunftsland ohne Prüfung, mit Theorieprüfung oder mit Theorie- und Praxisprüfung.",
  },
  {
    question: "Muss ich für die Umschreibung in die Fahrschule?",
    answer:
      "Bei EU/EWR-Führerscheinen und den Staaten der Anlage 11 FeV ohne Prüfpflicht nicht. Wenn Prüfungen vorgeschrieben sind, brauchst du keine Mindeststundenzahl, aber eine Fahrschule, die dich zur Prüfung vorstellt – und meist einige Fahrstunden, um dich an deutsche Verkehrsregeln, Vorfahrt und das Prüfungsformat zu gewöhnen.",
  },
  {
    question: "Kann ich die Theorieprüfung auf Englisch machen?",
    answer:
      "Ja. Die Theorieprüfung gibt es auf Deutsch und in zwölf Fremdsprachen: Englisch, Französisch, Griechisch, Hocharabisch, Italienisch, Kroatisch, Polnisch, Portugiesisch, Rumänisch, Russisch, Spanisch und Türkisch. Dolmetscher sind nicht zugelassen.",
  },
  {
    question: "Habt ihr Erfahrung mit der Umschreibung ausländischer Führerscheine?",
    answer:
      "Ja – Fahrschüler mit ausländischem Führerschein bereiten wir regelmäßig auf die deutsche Praxisprüfung vor. Ein echtes Beispiel: Eine Google-Rezension beschreibt die Umschreibung bei uns mit Bestehen der praktischen Prüfung im ersten Anlauf (nachzulesen auf unserem Google-Profil).",
  },
  {
    question: "Wo stelle ich in Stuttgart den Antrag auf Umschreibung?",
    answer:
      "Bei der Führerscheinstelle der Stadt Stuttgart (Löwentorbogen 11, 70376 Stuttgart) mit Termin. Welche Unterlagen genau nötig sind (Übersetzung, Meldebescheinigung, Passfoto, Sehtest, Erste-Hilfe-Kurs), hängt vom Herkunftsland ab und wird dort im Einzelfall geklärt.",
  },
];
