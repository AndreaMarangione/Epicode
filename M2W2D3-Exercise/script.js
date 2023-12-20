const globalData = {
    navbar: {
        logo: "https://picsum.photos/200/300",
        title: {
            Text: "Il Mio Sito",
            type: "h1",
        },
        menu: [
            "menu1",
            "menu2",
            "menu3",
            "menu4",
        ]
    },

    main: {
        card: [
            {
                title: "Titolo Card 1",
                img: "https://picsum.photos/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo",
                isVisible: true,
                price: 50,
            },
            {
                title: "Titolo Card 2",
                img: "https://picsum.photos/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo",
                isVisible: false,
                price: 38,
            },
            {
                title: "Titolo Card 3",
                img: "https://picsum.photos/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo",
                isVisible: true,
                price: 75,
            },
            {
                title: "Titolo Card 4",
                img: "https://picsum.photos/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo",
                isVisible: false,
                price: 14,
            },
            {
                title: "Titolo Card 5",
                img: "https://picsum.photos/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo",
                isVisible: false,
                price: 53,
            },
            {
                title: "Titolo Card 6",
                img: "https://picsum.photos/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo",
                isVisible: true,
                price: 1,
            },
            {
                title: "Titolo Card 7",
                img: "https://picsum.photos/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo",
                isVisible: true,
                price: 89,
            },
        ]
    }
}

const navbar = document.getElementById("navbar");
function createAndAppendLogo() {
    const logoContainer = document.createElement("div");
    const img = document.createElement("img");
    img.src = globalData.navbar.logo;
    logoContainer.append(img);
    navbar.append(logoContainer);
}
function createAndAppendTitle() {
    const titleContainer = document.createElement("div");
    const title = document.createElement(globalData.navbar.title.type);
    title.textContent = globalData.navbar.title.Text;
    titleContainer.append(title);
    navbar.append(titleContainer);
}
function createAndAppendMenu() {
    const menuUl = document.createElement("ul");

    globalData.navbar.menu.map((index) => {
        const menuLi = document.createElement("li");
        menuLi.textContent = index;
        menuUl.append(menuLi);
        navbar.append(menuUl);
    })

    /*     globalData.navbar.menu.forEach((index) => {
            const menuLi = document.createElement("li");
            menuLi.textContent = index;
            menuUl.append(menuLi);
            navbar.append(menuUl);
        }) */

    /*     for(let index = 0; index < globalData.navbar.menu.length; index++){
            const menuLi = document.createElement("li");
            menuLi.textContent = globalData.navbar.menu[index];
            menuUl.append(menuLi);
            navbar.append(menuUl);
        } */
}
createAndAppendLogo();
createAndAppendTitle();
createAndAppendMenu();

const main = document.getElementById("main");

function createAndAppendCards() {
    globalData.main.card.forEach((card) => {
        if(card.isVisible) {
            const cardContainer = document.createElement("div");
            cardContainer.classList.add("cards");
            const cardTitle = document.createElement("h2");
            cardTitle.textContent = card.title;
            const imgContainer = document.createElement("img");
            imgContainer.src = card.img;
            const cardDescription = document.createElement("p");
            cardDescription.textContent = card.description;
            const cardPrice = document.createElement("p");
            cardPrice.textContent = card.price + " $";
            cardContainer.append(cardTitle, imgContainer, cardDescription, cardPrice);
            main.append(cardContainer);
        }        
    })
}

createAndAppendCards();

let total = 0;

function createAndAppendTotalPrice() {
    const totalPriceContainer = document.createElement("div");

    const totalPrice = globalData.main.card.map((card) => {
        if(card.isVisible) {
            return card.price;
        }else return 0;
    })
    
    totalPrice.forEach((price) => {
        total += price;
    })

    totalPriceContainer.append(total);
    main.append(totalPriceContainer);
}

createAndAppendTotalPrice();
