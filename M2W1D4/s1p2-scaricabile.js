/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let variable;           //Questa è una variabile con datatype undefined perchè è stata creata senza specificare alcun valore, quindi non sappiamo di cosa si tratta, il suo contenuto non è definito.
let tagEmpty = null;    //Questa è una variabile con datatype null perchè è stata creata specificandola con un valore nullo.
let number = 1;         //Questa è una variabile con dataype number perchè è stata creata assegnandogli un numero, abbiamo la libertà di assegnarli il numero che vogliamo.
let string = 'Ciao';    //Questa è una variabile con datatype string perchè è stata creata assegnandogli una scritta, abbiamo la libertà di scriverci quello che vogliamo.
let bool = true;        //Questa è una variabile con datatype boolean perchè è stata creata assegnandogli lo stato logico true, abbiamo la restrizione di poter assegnare solo due stati, true o false.

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

//L'oggetto in Javascript è un insieme di valori (variabili) che vanno a formare una struttura dati unica, come ad esempio le informazioni per descrivere una persona. 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'Andrea';

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = 'jonh';
let name2 = 'Jonh';
console.log((name1 != name2));
console.log((name1.toLowerCase == name2.toLowerCase));
