//count all travels in the page
const travelCounterBtn = document.querySelector("#travelCounterBtn");
travelCounterBtn.addEventListener("click", function () {
    countTravel();
})

function countTravel() {
    let travelsNumber = 0;
    const cardsNumber = document.querySelectorAll(".card");
    travelsNumber = cardsNumber.length + 1; // +1 because of "offer of the day"
    alert(`The number of the travel is ` + travelsNumber);
}

//Delete all cards from the page
const cardsRemoveBtn = document.querySelector("#cardsRemoveBtn");
cardsRemoveBtn.addEventListener("click", function () {
    cardsRemove(this);
})

function cardsRemove(removeBtn) {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.classList.toggle("card-display-none");
    })
    if (removeBtn.innerHTML === "Remove Cards") {
        removeBtn.innerHTML = "Show Cards";
    } else {
        removeBtn.innerHTML = "Remove Cards";
    }
}
