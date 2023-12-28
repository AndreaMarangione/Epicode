// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

//Website Settings
changeShopNameAndColor("MARANZON", "#E3E6E6"); //(shopName, colorName)
changeBgColor("#131921", "#E3E6E6"); //(headerFooterColor, mainColor)
changeAddress("- Piazza del Duomo Pistoia (PT)"); //(address)
hideImage(false); //(true = hide images, false = view images)

//Functions
function changeShopNameAndColor(shopName, colorName) {
    const headerShopName = document.getElementById("headerShopName");
    headerShopName.textContent = shopName;
    headerShopName.style.color = colorName;
    const footerShopName = document.getElementById("footerShopName");
    footerShopName.textContent = shopName;
    footerShopName.style.color = colorName;
    const footerAddress = document.getElementById("footerAddress");
    footerAddress.style.color = colorName;
}

function changeBgColor(headerFooterColor, mainColor) {
    const headerBgColor = document.querySelector("header");
    const mainBgColor = document.querySelector("main");
    const footerBgColor = document.querySelector("footer");
    headerBgColor.style.backgroundColor = headerFooterColor;
    mainBgColor.style.backgroundColor = mainColor;
    footerBgColor.style.backgroundColor = headerFooterColor;
}

function changeAddress(address) {
    const footerAddress = document.querySelector("#footerAddress");
    footerAddress.textContent = address;
}

function addClassLinkAmazon() {
    const linkAmazon = document.querySelectorAll(".productDescription a");
    linkAmazon.forEach(link => {
        link.classList.add("productLink");
    })
}
addClassLinkAmazon();

function hideImage(hideImage) {
    if (hideImage) {
        const img = document.querySelectorAll(".product img");
        img.forEach(image => {
            image.classList.add("productHideImg");
        })
    }
}

function changePriceColor() {
    const priceClasses = ["colorPrice1", "colorPrice2", "colorPrice3", "colorPrice4", "colorPrice5"]
    const price = document.querySelectorAll(".productPrice");
    for (let index = 0; index < price.length; index++) {
        price[index].addEventListener("click", function () {
            price[index].classList.toggle(priceClasses[index]);
        })
    }
}
changePriceColor();
