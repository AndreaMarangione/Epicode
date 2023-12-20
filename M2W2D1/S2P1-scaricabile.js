//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = prompt("Inserisci Numero1");
let numero2 = prompt("Inserisci Numero2");

if (Number(numero1) > Number(numero2)) {
  console.log("numero1 è il più grande");
} else if (Number(numero1) < Number(numero2)) {
  console.log("numero2 è il più grande");
} else if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Per favore inserisci solo numeri!!");
} else {
  console.log("I numeri sono uguali");
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 10;

if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let index = 10; index > -1; index--) {
  if (index == 8 || index == 3) {
    continue;
  }
  console.log(index);
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let index = 0; index < 16; index++) {
  if (index % 2 == 0) {
    console.log(index + " Pari");
  } else {
    console.log(index + " Dispari");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let extraNumero1 = 15;
let extraNumero2 = 7;

if ((extraNumero1 == 8) || (extraNumero2 == 8) || (extraNumero1 + extraNumero2 == 8) || (extraNumero1 - extraNumero2 == 8) || (extraNumero2 - extraNumero1 == 8)) {
  console.log("Uno dei due numeri oppure la loro addizione/sottrazione è uguale a 8");
} else {
  console.log("Nessuno dei due numeri oppure la loro addizione/sottrazione è uguale a 8");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 58;
const shippingCost = 10;
let totalCost = 0;

if (totalShoppingCart > 50) {
  totalCost = totalShoppingCart;
} else {
  totalCost = totalShoppingCart + shippingCost;
}

console.log(totalCost);

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let blackFriday = true;
const blackFridayDiscount = 0.2;
let differenceToFreeShipping = 0;

if (blackFriday) {
  totalShoppingCart = (totalShoppingCart - (totalShoppingCart * blackFridayDiscount));
  differenceToFreeShipping = (Math.round((50 - totalShoppingCart) * 100) / 100);
}

if (totalShoppingCart > 50) {
  totalCost = totalShoppingCart;
  console.log("Complimenti ti sei guadagnato la spedizione gratuita!! Il totale è " + totalCost + " euro");
} else {
  totalCost = totalShoppingCart + shippingCost;
  console.log("Ti mancano " + differenceToFreeShipping + " euro per la spedizione gratuita, il totale da pagare è " + totalCost + " euro");
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true;
let gender = isMale ? "Male" : "Female";
console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let index = 0; index < 101; index++) {
  let i = String(index);

  if (index % 3 == 0) {
    i = index + " Fizz";
  }

  if (index % 5 == 0) {
    i = index + " Buzz";
  }

  if ((index % 3 == 0) && (index % 5 == 0)) {
    i = index + " FizzBuzz"
  }
  console.log(i);
}
