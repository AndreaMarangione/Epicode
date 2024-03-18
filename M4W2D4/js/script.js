const cart = localStorage.getItem("cart");
let myCart = JSON.parse(cart);
const mySection = document.querySelector("#mySection");
const searchInput = document.getElementById("searchInput");

window.onload = () => {
    myCart === null ? myCart = [] : ""; 
    showBookInCart();
}
const showSpinner = () => {
    spinner.classList.remove("d-none");
}
const hideSpinner = () => {
    spinner.classList.add("d-none");
}
const saveToCart = (book) => {
    if (myCart.includes(book)) {
        return;
    } else {
        myCart.push(book);
        showBookInCart();
        localStorage.setItem("cart", JSON.stringify(myCart));
    }
}
const deleteFromCart = (book) => {
    myCart = myCart.filter(cartBook => cartBook !== book);
    showBookInCart();
    defineBooksRemovedFromCart(book);
    localStorage.setItem("cart", JSON.stringify(myCart));
}
const clearCart = () => {
    myCart.forEach(book => {
        defineBooksRemovedFromCart(book);
    })
    myCart = [];
    showBookInCart();
    localStorage.setItem("cart", JSON.stringify(myCart));
}
const showBookInCart = () => {
    const cartContainer = document.querySelector("#cartContainer");
    cartContainer.innerHTML = "";
    if (myCart.length > 0) {
        myCart.forEach(book => {
            const cartItem = document.createElement("li");
            const image = document.createElement("img");
            const title = document.createElement("h6");
            const icon = document.createElement("div");
            cartItem.classList.add("list-group-item", "d-flex", "align-items-center", "gap-2");
            image.classList.add("cart-img");
            icon.innerHTML = `<ion-icon class="cart-delete-book" name="close-outline"></ion-icon>`;
            icon.addEventListener("click", () => deleteFromCart(book))
            image.src = book.img;
            title.textContent = book.title;
            cartItem.append(icon, image, title);
            cartContainer.append(cartItem);
        })
        const totalBooks = document.createElement("li");
        const deleteCartBtn = document.createElement("button");
        totalBooks.classList.add("list-group-item");
        totalBooks.innerHTML = `Total Books: ${myCart.length}`;
        deleteCartBtn.textContent = "Delete Cart";
        deleteCartBtn.addEventListener("click", () => clearCart());
        cartContainer.append(totalBooks, deleteCartBtn);
    } else {
        cartContainer.innerHTML = `<li class="list-group-item">Your cart is empty</li>`;
    }
}
const defineBooksInCart = (asin, card) => {
    const bookInCart = myCart.find(book => book.asin === asin);
    if (bookInCart !== undefined) {
        card.classList.add("book-in-cart");
    }
}
const defineBooksRemovedFromCart = (book) => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        if (card.id === book.asin) {
            card.classList.remove("book-in-cart");
        }
    })
}
const createCard = (book) => {
    const cardContainer = document.createElement("div");
    const card = document.createElement("div");
    const image = document.createElement("img");
    const cardDescription = document.createElement("div");
    const cardTitle = document.createElement("h6");
    const cardText = document.createElement("p");
    const cardAddCartBtn = document.createElement("a");
    cardContainer.classList.add("col-12", "col-md-4", "col-lg-3", "col-auto", "d-flex", "justify-content-center");
    card.classList.add("card", "p-0");
    card.id = book.asin;
    image.classList.add("card-img-top");
    cardDescription.classList.add("card-body", "d-flex", "flex-column", "justify-content-between");
    cardTitle.classList.add("card-title");
    cardText.classList.add("card-text");
    cardAddCartBtn.classList.add("book-add-cart", "btn", "btn-primary");
    image.src = book.img;
    cardTitle.textContent = book.title;
    cardText.textContent = `Price: ${book.price}`;
    cardAddCartBtn.textContent = "Add To Cart";
    cardAddCartBtn.addEventListener("click", () => {
        saveToCart(book);
        defineBooksInCart(book.asin, card);
    })
    defineBooksInCart(book.asin, card);
    cardDescription.append(cardTitle, cardText, cardAddCartBtn);
    card.append(image, cardDescription);
    cardContainer.append(card);
    mySection.append(cardContainer);
}
const getBook = async () => {
    showSpinner();
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/books");
        const books = await response.json();
        return books;
    } catch (error) {
        console.log(error);
    } finally {
        hideSpinner();
    }
}
getBook().then(res => {
    res.forEach(book => createCard(book));
    searchInput.addEventListener("input", () => {
        if (searchInput.value.length > 3) {
            mySection.innerHTML = "";
            myBooks = res.filter(book => book.title.toLowerCase().includes(searchInput.value.toLowerCase()));
            myBooks.forEach(book => createCard(book));
        } else {
            mySection.innerHTML = "";
            res.forEach(book => createCard(book));
        }
    })
})
