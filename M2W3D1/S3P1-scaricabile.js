/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
function crazySum(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        if (num1 === num2) {
            return (num1 + num2) * 3;
        } else {
            return num1 + num2;
        }
    } else {
        console.log("Please put only integer number");
    }
}
console.log(crazySum(5, 5));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num) {
    if (Number.isInteger(num)) {
        if ((num >= 20 && num <= 100) || (num === 400)) {
            return true;
        } else {
            return false;
        }
    } else {
        console.log("Please put only integer number");
    }
}
console.log(boundary(70));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(word) {
    let checkString = String(word);
    if (checkString == "undefined" || checkString.trim() === "") {
        return "Please write something";
    }
    return checkString.split("").reverse().join("");
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(phrase) {
    if (typeof phrase === "string" && phrase.trim() != "") {
        let arrayWord = phrase.split(" ");
        let arrayWordUp = arrayWord.map(word => {
            return word[0].toUpperCase() + word.slice(1);
        })
        return arrayWordUp.join(" ");
    } else {
        return "Please write a word or a phrase";
    }
}
console.log(upperFirst("il mio nome è andrea"));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    if (Number.isInteger(n) && n > 0) {
        let randomNum = [];
        for (let index = 0; index < n; index++) {
            let num = Math.floor(Math.random() * 10);
            randomNum.push(num);
        }
        return randomNum;
    } else {
        return "Please write only positive integer number";
    }
}
console.log(giveMeRandom(15));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    if ([typeof l1 === Number] && [typeof l2 === Number] && l1 > 0 && l2 > 0) {
        return l1 * l2;
    } else {
        return "Please write only positive numbers";
    }
}
console.log(area(7, 5));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num) {
    if (Number.isInteger(num)) {
        let diff = num - 19;
        if (diff < 0) {
            diff = diff * -1;
        }
        if (diff > 19) {
            diff = diff * 3;
        }
        return diff;
    } else {
        return "Please write only integer number";
    }
}
console.log(crazyDiff(39));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(word) {
    if (typeof word === "string" && word.trim() != "") {
        const code = ["c", "o", "d", "e"];
        const arrayChar = word.split("");
        let counter = 0;
        for (let index = 0; index < code.length; index++) {
            if (code[index] === arrayChar[index]) {
                counter += 1;
            }
        }
        if (counter < 4) {
            return code.concat(arrayChar).join("");
        } else {
            return word;
        }
    } else {
        return "Please write one word";
    }
}
console.log(codify("Montagna"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(num) {
    if (Number.isInteger(num) && num > 0) {
        if (num % 3 == 0 || num % 7 == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Please write only a positive integer number";
    }
}
console.log(check3and7(14));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(word) {
    if (typeof word === "string" && word.trim() != "") {
        const checkString = word.trim();
        const arrayChar = checkString.split("");
        return arrayChar.slice(1, (arrayChar.length - 1)).join("");
    } else {
        return "Please write one word";
    }
}
console.log(cutString("marangione"));
