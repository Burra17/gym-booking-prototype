// Enkel mock-data som speglar GymClass i UML
const yogaClass = {
    title: "Morgon Yoga",
    maxCapacity: 10,
    currentParticipants: 8,

    // Metod från klassdiagram
    hasAvailableSpots: function () {
        return this.currentParticipants < this.maxCapacity;
    },

    // Metod från ditt klassdiagram
    addParticipant: function () {
        if (this.hasAvailableSpots()) {
            this.currentParticipants++;
            return true;
        }
        return false;
    }
};

// Micro-interaction för bokning
function bookClass() {
    const statusText = document.getElementById("status-message");
    const spotsLeft = document.getElementById("spots-left");

    if (yogaClass.addParticipant()) {
        statusText.innerText = "Bokning bekräftad!";
        statusText.style.color = "green";
        spotsLeft.innerText = `Platser kvar: ${yogaClass.maxCapacity - yogaClass.currentParticipants}`;
    } else {
        statusText.innerText = "Passet är fullbokat!";
        statusText.style.color = "red";
    }
}