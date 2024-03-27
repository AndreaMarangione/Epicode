const el = (type, attributes, ...childrens) => {
    const element = document.createElement(type);
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    })
    childrens.forEach(child => {
        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    })
    return element;
}

const home = document.querySelector("#home");
const card = el(
    "div",
    {
        id: "card",
        class: "text-class"
    },
    el("p",
        { class: "card-description" },
        "ciao"));

home.append(card);


// ["string1", "string2"].map(string => console.log(string));


// const sum = (...numbers) => {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(48, 5, 5, 8, 7, 4));
