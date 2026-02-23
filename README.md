# 🏋️‍♂️ Gym Bokningssystem

Detta projekt är en mini-leverans som visar flödet från problemanalys och objektorienterad modellering till en fungerande gränssnittsprototyp.

---

## 📖 1. Problembeskrivning
Många mindre gym lider av manuell administration kring bokningar. Medlemmar har svårt att se tillgänglighet i realtid, vilket leder till överbokningar eller tomma pass. Denna lösning digitaliserar processen för att förbättra användarupplevelsen och optimera gymmets resursanvändning.

## 👥 2. Intressenter (Stakeholders)
* **Medlem:** Vill kunna se schema, kontrollera lediga platser och hantera sina bokningar.
* **Tränare:** Vill se deltagarlistor för sina pass.
* **Admin:** Ansvarar för schemaläggning, medlemskap och resurshantering.

## 📋 3. Kravlista (MoSCoW)

### Funktionella krav (Functional)
- [x] **Visa schema:** Systemet ska lista tillgängliga träningspass (**Must**).
- [x] **Boka pass:** Medlemmar ska kunna boka plats (**Must**).
- [ ] **Avboka pass:** Möjlighet att avboka senast 60 min innan start (**Should**).
- [ ] **Platsstatus:** Visa antal kvarvarande platser i realtid (**Should**).
- [ ] **Medlemskap:** Hantera Gold, Silver och Bronze (**Could**).

### Icke-funktionella krav (Non-functional)
- **Usability:** Responsiv design för mobil och desktop (**Must**).
- **Performance:** Laddningstid under 2 sekunder (**Should**).
- **Accessibility:** Kontrast och struktur enligt WCAG-riktlinjer (**Must**).

---

## 🔄 4. Use Case: Boka Träningspass
**Aktör:** Medlem

1.  **Navigering:** Användaren öppnar passlistan (`index.html`).
2.  **Val:** Användaren väljer ett pass.
3.  **Validering:** Systemet anropar `hasAvailableSpots()`.
4.  **Action:** Användaren klickar på "Boka".
5.  **Exekvering:** Systemet skapar ett `Booking`-objekt och anropar `addParticipant()`.
6.  **Bekräftelse:** Systemet visar en bokningsbekräftelse.

> *Vid fullbokat pass inaktiveras bokningsknappen automatiskt.*

---

## 🏗 5. Designval och Reflektion (VG)

### UML & Struktur
Jag valde att använda en **Booking-klass** som en länk mellan `Member` och `GymClass`. Detta gör det enkelt att i framtiden lägga till funktioner som bokningshistorik och status (t.ex. reservplats).

### Datatyper
Jag använder **Strings** för alla ID:n istället för Integers. Detta är ett medvetet val för att stödja framtida implementation av **UUID:n**, vilket ökar säkerheten och skalbarheten i ett distribuerat system.

### Risker & Begränsningar
- **Data:** Eftersom detta är en prototyp sparas ingen data vid sidomladdning (saknar databas).
- **Race Conditions:** Vid hög belastning kan två användare försöka boka sista platsen samtidigt. Detta kräver låsningsmekanismer i en backend-miljö.

---

## 📝 6. Ändringslogg (Change Note)

| Version | Typ | Beskrivning |
| :--- | :--- | :--- |
| v1.1 | **Refactoring** | Implementerade `Enum` för `MembershipType`. Tidigare strängar ersattes för att öka robusthet och minska risk för felskrivningar. |
| v1.0 | **Initial** | Grundläggande struktur och logik för bokning. |

---
