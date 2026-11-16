// Bis wann das Frühstück läuft: 12 Uhr laut Hasans Karte („FRÜHSTÜCK (bis 12Uhr)“, 13.11.2026).
// tabelle: Adresse der veröffentlichten Google-Tabelle (CSV). Leer = Preise aus bauen.py.
// Google-Tabelle „Two Bro's – Preise für die Bildschirme“, angelegt 12.11.2026.
// Ladenschluss laut twobrosburger.de (15.11.2026): So–Do 10–21 Uhr, Fr–Sa 10–22 Uhr; so von Firas bestätigt (15.11.).
// Ab geschlossen_ab (je Wochentag) bis geschlossen_bis zeigen alle Bildschirme „Für heute haben wir geschlossen“.
// Aus- und Einschalten (21:15 bzw. 22:15, an um 9:30) macht der Zeitplan in iiSignage², nicht diese Datei.
window.KONFIG = {
  fruehstueck_bis: "12:00",
  tabelle: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZxdx-b_IwZjBlvgZHEKLtwPD20ka2c7RRQpe37mM2-GRlQ4lhbilFyFZ5YaP11nsNXXzf9g03ifq5/pub?gid=707678712&single=true&output=csv",
  geschlossen_ab: { "so": "21:00", "mo": "21:00", "di": "21:00", "mi": "21:00", "do": "21:00", "fr": "22:00", "sa": "22:00" },
  geschlossen_bis: "05:00",
  wieder_ab: "10 Uhr",
  // Burger über zwei Bildschirme (Firas 15.11.2026): alle so viele Sekunden, abwechselnd 5+6 und 6+7. 0 = aus.
  takeover_alle: 120,
  // Feinkorrektur je Bildschirm in Millisekunden (Firas 15.11.2026): positiv = dieser Bildschirm zeigt den Burger
  // früher, negativ = später. 0 = keine Korrektur. Nur nach einer Messung ändern (Handyvideo einer Runde).
  takeover_feinkorrektur: { "5": 0, "6": 0, "7": 0 },
  // Selbstmessung (Firas 15.11.2026): Nach jeder Burger-Runde schicken Bildschirm 5, 6, 7 ihre Messwerte an dieses
  // Google-Formular („Two Bros – Bildschirm-Messung“). Leer lassen = keine Messung.
  takeover_messung: "https://docs.google.com/forms/d/e/1FAIpQLSc8BYu9IzasiSxCOiT9iC-O7CLAGsYvEaGgeUq7INClbO9k9w/formResponse",
  takeover_messfeld: "entry.678816141",
  // Angebot des Monats (Hasan 16.11.2026; Firas: erst nur bestimmte Bildschirme, kein Wandern, „KI-Video wie Burger“).
  // Vollbild über der Karte: alle `alle` Sekunden, `versatz` Sekunden nach dem Burger-Takt (Burger = gerade Minuten,
  // Angebot also zu ungeraden Minuten), nur von `ab` bis zum Ladenschluss; am Ende `halten` Sekunden Standbild.
  // bildschirme: Nummern der Bildschirme. reihum: true = in jedem Takt nur einer, der Reihe nach (Firas 16.11.2026:
  // „Ja, reihum 1 bis 4“, alle 2 Minuten, jeder Bildschirm also alle 8 Minuten); false = alle gleichzeitig. alle: 0 = aus.
  // Titel, Gericht, Beilagen und Preis stehen nur hier. Preis laut Hasan (WhatsApp 16.11.2026, 16:19).
  angebot: {
    bildschirme: ["1", "2", "3", "4"], reihum: true, alle: 120, versatz: 60, ab: "12:00", halten: 2,
    titel: "Menü des Monats", gericht: "Jay Jay Bowl",
    dazu: ["Sinalco deiner Wahl", "Cookie deiner Wahl"], preis: "15 €"
  }
};
