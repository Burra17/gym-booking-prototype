Projekt: Gym bokningssystem 🏋️‍♂️
Detta projekt är en mini-leverans som visar flödet från problemanalys och objektorienterad modellering till en fungerande gränssnittsprototyp.

1. Problembeskrivning
Många mindre gym lider av manuell administration kring bokningar av träningspass. Medlemmar har svårt att se tillgänglighet i realtid, vilket leder till överbokningar eller tomma pass. Denna lösning digitaliserar bokningsprocessen för att förbättra användarupplevelsen och optimera gymmets resursanvändning.

2. Intressenter (Stakeholders)
Medlem (User): Vill kunna se schema, kontrollera lediga platser och boka/avboka pass.

Tränare (Trainer): Vill se deltagarlistor för sina pass.

Admin: Ansvarar för att skapa pass, hantera medlemskap och schemalägga tränare.

3. Kravlista
Här presenteras kraven prioriterade enligt MoSCoW-metoden.

Funktionella krav (Functional Requirements)
Visa schema: Systemet ska visa en lista över tillgängliga träningspass (Must).

Boka pass: En medlem ska kunna boka en plats på ett specifikt pass (Must).

Avboka pass: En medlem ska kunna avboka sin plats senast 60 min innan start (Should).

Visa platsstatus: Systemet ska visa antal kvarvarande platser i realtid (Should).

Medlemskapstyper: Systemet ska kunna skilja på Gold, Silver och Bronze-medlemskap (Could).

Icke-funktionella krav (Non-functional Requirements)
Usability: Gränssnittet ska vara responsivt och fungera på både mobil och desktop (Must).

Performance: Sidan ska laddas på under 2 sekunder vid normal anslutning (Should).

Accessibility: All text ska ha god kontrast och följa grundläggande WCAG-riktlinjer (Must).

4. Use Case: Boka Träningspass
Aktör: Medlem (Member)

Preconditions (Förutsättningar):

Medlemmen är inloggad.

Det finns planerade pass i systemet.

Main Flow (Huvudflöde):

Användaren navigerar till passlistan (index.html).

Användaren väljer ett pass för att se detaljer.

Systemet anropar hasAvailableSpots() för att kontrollera lediga platser.

Användaren klickar på "Boka".

Systemet skapar ett Booking-objekt och anropar addParticipant().

Systemet visar en bekräftelse.

Alternate Flow (Passet är fullt):

Vid steg 3 ser systemet att passet är fullt.

Bokningsknappen avaktiveras och texten "Fullbokat" visas.

Postconditions (Eftervillkor):

En bokning är registrerad på medlemmen.

Antalet deltagare på passet har ökat med 1.

5. Designval och Reflektion (För VG)
UML-struktur: Jag valde att använda en Booking-klass som en länk mellan Member och GymClass. Detta gör det enkelt att i framtiden lägga till funktioner som bokningshistorik och status (t.ex. reservplats).

Datatyper: Jag valde String för alla ID:n istället för Integer. Detta är ett medvetet val för att stödja framtida implementation av UUID:n, vilket ökar säkerheten och skalbarheten.

Risker & Begränsningar: En risk med nuvarande prototyp är att den saknar en databas (data sparas ej vid refresh). I en fullskalig produktion skulle vi behöva hantera "race conditions" där två personer bokar den sista platsen samtidigt.

Förbättringspotential: För att förbättra systemet skulle en väntelista-funktion kunna implementeras i GymClass för att automatiskt boka in nästa person vid en avbokning.

6. Change Note (Ändringslogg)
Ändring 1: Lade till en Enum för MembershipType. Tidigare var det bara en sträng, men en Enum gör koden mer robust och minskar risken för felskrivningar (t.ex. "Guld" vs "Gold").

Ändring 2: Flyttade metoden addParticipant() från Member till GymClass. Jag insåg under modelleringen att det är passet som ska ha kontroll över sina egna deltagare, inte medlemmen.