const params = new URLSearchParams(location.search);
const id = params.get("id");

const showBookInfo = (book) => {
    const bookSection = document.querySelector("#bookSection");
    const title = document.createElement("h2");
    const image = document.createElement("img");
    const price = document.createElement("p");
    image.classList.add("book-info-image");
    title.textContent = book.title;
    image.src = book.img;
    price.textContent = `${book.price} €`;
    bookSection.append(title, image, price);
}

const getBookInfo = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/books/" + id);
        const body = await response.json();
        return body;
    } catch (error) {
        console.log(error);
    }
}
getBookInfo().then(book => showBookInfo(book));
