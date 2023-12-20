/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let slideVariable;           //Questa è una variabile con datatype undefined perchè è stata creata senza specificare alcun valore, quindi non sappiamo di cosa si tratta, il suo contenuto non è definito.
let slideTagEmpty = null;    //Questa è una variabile con datatype null perchè è stata creata specificandola con un valore nullo.
let slideNumber = 1;         //Questa è una variabile con dataype number perchè è stata creata assegnandogli un numero, abbiamo la libertà di assegnarli il numero che vogliamo.
let slideString = 'Ciao';    //Questa è una variabile con datatype string perchè è stata creata assegnandogli una scritta, abbiamo la libertà di scriverci quello che vogliamo.
let slideBool = true;        //Questa è una variabile con datatype boolean perchè è stata creata assegnandogli lo stato logico true, abbiamo la restrizione di poter assegnare solo due stati, true o false.

/* ESERCIZIO 2
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let slideSomma = 12 + 20;
console.log(slideSomma);

/* ESERCIZIO 3
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let slideX = 12;
console.log(slideX);

/* ESERCIZIO 4
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let slideName = 'Andrea';
console.log(slideName);

/* ESERCIZIO 5
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let slideSottrazione = 4 - x;
console.log(slideSottrazione);

/* ESERCIZIO 6
 Crea un oggetto in Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby)
*/

let user = {
    nome: 'Andrea',
    cognome: 'Marangione',
    hobby: 'Bonsai',
};
console.log(user);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let slideName1 = 'jonh';
let slideName2 = 'Jonh';
console.log((slideName1 != slideName2));
console.log((slideName1.toLowerCase == slideName2.toLowerCase));
