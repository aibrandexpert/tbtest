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
  takeover_alle: 120
};
