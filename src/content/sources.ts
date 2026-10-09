import type { Source } from "@/components/content/Prose";

// Official/primary sources cited on the topic pages. Keep the label honest
// about what the source is and when it was checked (knowledge/
// seo-strategy.md → "No fabrication"). Checked 2026-10-09 via search
// excerpts; re-verify wording on the page before relying on a number.
export const sources = {
  fev10: {
    label: "§ 10 FeV – Mindestalter (gesetze-im-internet.de)",
    href: "https://www.gesetze-im-internet.de/fev_2010/__10.html",
  },
  fev11: {
    label: "§ 11 FeV – Eignung (ärztliche Untersuchung bei C/D-Klassen)",
    href: "https://www.gesetze-im-internet.de/fev_2010/__11.html",
  },
  fevAnlage11: {
    label: "Anlage 11 FeV – Staatenliste für die Umschreibung",
    href: "https://www.gesetze-im-internet.de/fev_2010/anlage_11.html",
  },
  adacB197: {
    label: "ADAC: B197 – Automatik-Prüfung ohne Automatik-Beschränkung",
    href: "https://www.adac.de/verkehr/rund-um-den-fuehrerschein/erwerb/b197-fuehrerschein/",
  },
  adacBf17: {
    label: "ADAC: Begleitetes Fahren ab 17 – Voraussetzungen für Begleitpersonen",
    href: "https://www.adac.de/verkehr/rund-um-den-fuehrerschein/erwerb/begleitetes-fahren/",
  },
  adacAusbildung: {
    label: "ADAC: Fahrschulausbildung – Theoriestunden und Sonderfahrten",
    href: "https://www.adac.de/verkehr/rund-um-den-fuehrerschein/erwerb/ausbildung/",
  },
  adacAntrag: {
    label: "ADAC: Führerscheinantrag – nötige Unterlagen",
    href: "https://www.adac.de/verkehr/rund-um-den-fuehrerschein/erwerb/fuehrerschein-antrag-noetige-papiere/",
  },
  adacTheorie: {
    label: "ADAC: Theoretische Führerscheinprüfung – Fragen und Fehlerpunkte",
    href: "https://www.adac.de/verkehr/rund-um-den-fuehrerschein/erwerb/theoretische-fuehrerscheinpruefung/",
  },
  adacMotorrad: {
    label: "ADAC: Motorradführerschein – Klassen AM, A1, A2, A",
    href: "https://www.adac.de/verkehr/rund-um-den-fuehrerschein/klassen/motorrad/",
  },
  b196: {
    label: "hamburg.de: Schlüsselzahl B196 – Voraussetzungen und Schulungsumfang",
    href: "https://www.hamburg.de/service/info/11392141/n0/",
  },
  b96: {
    label: "Berlin LABO: Schlüsselzahl B96 – Schulung ohne Prüfung",
    href: "https://www.berlin.de/labo/mobilitaet/fahrerlaubnisse-personen-und-gueterbefoerderung/aktuelles/artikel.1445537.php",
  },
  stuttgartUmzug: {
    label: "stuttgart.de: Kfz-Zulassungs- und Führerscheinstelle im Löwentorbogen 11 (Umzug März 2026)",
    href: "https://www.stuttgart.de/service/aktuelle-meldungen/2026/februar/kfz-zulassungs-und-fuehrerscheinstelle-zieht-um-neue-raeume-im-gebaeude-loewentorbogen-11",
  },
  stuttgartTermine: {
    label: "stuttgart.de: Termine Führerscheinstelle",
    href: "https://www.stuttgart.de/fuehrerschein-termine",
  },
  stuttgartErsterteilung: {
    label: "stuttgart.de: Führerschein erstmalig beantragen",
    href: "https://www.stuttgart.de/en/organigramm/leistungen/fuehrerschein-beantragen-erstmalig",
  },
  stuttgartUmschreibung: {
    label: "stuttgart.de: Ausländischen Führerschein umschreiben",
    href: "https://www.stuttgart.de/organigramm/leistungen/fuehrerschein-umschreibung-eines-auslaendischen-nicht-eu-fuehrerscheins-drittstaat-umschreibung-anlage-11-umschreibung-eu-fuehrerschein-beantragen",
  },
  tuevGebuehren: {
    label: "TÜV SÜD: Gebühren für die Führerscheinprüfung",
    href: "https://www.tuvsud.com/de-de/branchen/mobilitaet-und-automotive/fuehrerschein-und-pruefung/fuehrerschein-und-pruefung/rund-um-die-fuehrerscheinpruefung/gebuehren",
    note: "Gebührenordnung GebOSt, Stand laut TÜV SÜD seit 31.01.2024",
  },
  tuevFeuerbach: {
    label: "Stuttgarter Zeitung (April 2025): Praktische Prüfungen in Stuttgart starten einheitlich in Feuerbach",
    href: "https://www.stuttgarter-zeitung.de/inhalt.fahrpruefungen-in-stuttgart-wie-lief-der-erste-tag-am-einheitlichen-pruefort-feuerbach.e3a6e6c8-2c59-4055-9a04-86ff9afd7865.html",
  },
  bmvReform: {
    label: "BMV: Pressemitteilung zum Kabinettsbeschluss „Bezahlbarer Führerschein“ (20.05.2026)",
    href: "https://www.bmv.de/SharedDocs/DE/Pressemitteilungen/2026/043-schnieder-bezahlbarer-fuehrerschein.html",
  },
  bundestagReform: {
    label: "Deutscher Bundestag: Erste Lesung Fahrlehrergesetz-Reform (24.09.2026)",
    href: "https://www.bundestag.de/dokumente/textarchiv/2026/kw39-de-fahrlehrergesetz-1211282",
  },
  sprachen: {
    label: "FIM-Portal (Bund): Theorieprüfung – zugelassene Fremdsprachen",
    href: "https://www.fimportal.de/api/v0/leistung-stammtexte/S100003/S1000030000009347/pvog/de/pdf",
  },
  tuevVerbandQuote: {
    label: "Handelsblatt: Durchfallquoten Führerscheinprüfung 2025 (TÜV-Verband)",
    href: "https://www.handelsblatt.com/mobilitaet/ratgeber-service/fuehrerscheinpruefung-die-aktuelle-durchfallquote-beim-fuehrerschein-01/29418642.html",
  },
} satisfies Record<string, Source>;
