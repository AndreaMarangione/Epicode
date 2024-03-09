//Exercise 1
const checkNum50 = (num1, num2) => {
    return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}
console.log("Exercise 1: " + checkNum50(20, 30));

//Exercise 2
const modifyWord = (word, position) => {
    let charPosition;
    if (position > word.length) {
        charPosition = word.length - 1;
    } else if (position <= 0) {
        charPosition = 0;
    } else {
        charPosition = position - 1;
    }
    const newWord = word.slice(0, charPosition) + word.slice(charPosition + 1);
    return newWord;
}
console.log("Exercise 2: " + modifyWord("provola", 3));

//Exercise 3
const checkRangeNum = (num1, num2) => {
    const range1Ok = (num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60);
    const range2Ok = (num1 >= 70 && num1 <= 100) && (num2 >= 70 && num2 <= 100);
    return range1Ok || range2Ok;
}
console.log("Exercise 3: " + checkRangeNum(41, 59));

//Exercise 4
const checkCityName = (city) => {
    const cityLetters = city.toLowerCase();
    if (cityLetters.startsWith("los") || cityLetters.startsWith("new")) {
        return city;
    } else {
        return false;
    }
}
console.log("Exercise 4: " + checkCityName("New York"));

//Exercise 5
const sumArray = (array) => {
    let total = 0;
    array.forEach(element => {
        total += element;
    })
    return total;
}
const arrayNum = [2, 5, 7, 4, 54, 6, 4, 2, 1, 10];
console.log("Exercise 5: " + sumArray(arrayNum));

//Exercise 6
const checkArray = (array) => {
    return array.includes(1) || array.includes(3);
}
console.log("Exercise 6: " + checkArray(arrayNum));

//Exercise 7
const checkAngle = (degree) => {
    if (degree < 90) {
        return "Acuto";
    } else if (degree > 90 && degree < 180) {
        return "Ottuso";
    } else if (degree === 90) {
        return "Retto";
    } else if (degree === 180) {
        return "Piatto";
    }
}
console.log("Exercise 7: " + checkAngle(89));

//Exercise 8
const acronym = (phrase) => {
    let arrayChar = "";
    const wordPhrase = phrase.split(" ");
    wordPhrase.forEach(word => {
        arrayChar += word.toUpperCase().slice(0, 1);
    })
    return arrayChar;
}
console.log("Exercise 8: " + acronym("ciao mi chiamo andrea"));

//Exercise Extra 1
const checkString = (string) => {
    const lowString = string.toLowerCase();
    const counter = {};
    let maxChar = "";
    let maxCount = 0;
    for (let char of lowString) {
        if (counter[char]) {
            counter[char] += 1;
        } else {
            counter[char] = 1;
        }
    }
    for (let char in counter) {
        if (maxCount < counter[char]) {
            maxCount = counter[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log("Extra 1: " + checkString("ciaoCCCCCCCCCCCCoooooii"));

//Exercise Extra 2
const checkAnagram = (word1, word2) => {
    const newWord1 = word1.toLowerCase().replace(/[^\w]/g, "").split("").sort().join("");
    const newWord2 = word2.toLowerCase().replace(/[^\w]/g, "").split("").sort().join("");
    return newWord1 === newWord2;
}
console.log("Extra 2: " + checkAnagram("teatro", "attore"));

//Exercise Extra 3
const findAnagrams = (word, list, checkAnagramCallBack) => {
    const anagramList = list.filter(wordList => {
        if(checkAnagramCallBack(word, wordList)){
            return wordList;
        }
    })
    return anagramList;
}
const list = ["carenti", "incerta", "espatrio", "pippo"];
console.log("Extra 3: " + findAnagrams("cartine", list, checkAnagram));

//Exercise Extra 4
const checkPalindrome = (word) => {
    const reverseWord = word.split("").reverse().join("");
    return word === reverseWord;
}
console.log("Extra 4: " + checkPalindrome("osso"));

//Exercise Extra 5
const reverseNumber = (number) => {
    return String(number).split("").reverse().join("");
}
console.log("Extra 5: " + reverseNumber(165));

//Exercise Extra 6
const makeLadder = (x) => {
    const ladder = [];
    let step = "";
    for (let index = 0; index < x; index++) {
        step += "#";
        ladder.push(step);
    }
    return ladder;
}
console.log("Extra 6:");
console.log(makeLadder(9));

//Exercise Extra 7
const reverseWord = (word) => {
    return word.split("").reverse().join("");
}
console.log("Extra 7: " + reverseWord("Marangione"));

//Exercise Extra 8
const splitList = (list, length) => {
    const maxList = Math.ceil(list.length / length);
    let groupList = [];
    for (let i = 0; i < maxList; i++) {
        groupList.push(list.splice(0, length));
    }
    return groupList;
}
const myList = [5, 6, 9, 7, 3, 6, 5, 6, 3, 48, 65, 3, 2, 7, 8];
console.log("Extra 8:");
console.log(splitList(myList, 4));

//Exercise Extra 9
const makePyramid = (x) => {
    const pyramid = [];
    let level = "";
    for (let index = 0; index < x; index++) {
        if (index === 0) {
            level += "#";
        } else {
            level += "##";
        }
        pyramid.push(level);
    }
    return pyramid;
}
console.log("Extra 9:");
console.log(makePyramid(9));

//Exercise Extra 10
const crazyMatrix = (n) => {
    
}
crazyMatrix(4);
