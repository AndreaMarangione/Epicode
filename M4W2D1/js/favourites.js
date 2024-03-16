const favourites = localStorage.getItem("favourites");
let favouritesPhotos = JSON.parse(favourites);

const deleteFavouritesImg = (image) => {
    favouritesPhotos = favouritesPhotos.filter(photo => photo !== image);
    localStorage.setItem("favourites", JSON.stringify(favouritesPhotos));
    location.reload();
}

const createCard = (image) => {
    const cardContainer = document.createElement("div");
    const img = document.createElement("img");
    const iconContainer = document.createElement("div");
    cardContainer.classList.add("card-container", "col-12", "col-md-4", "col-xl", "m-auto", "p-0");
    iconContainer.innerHTML = `
    <ion-icon id="deleteFavourite" name="close-circle-outline"></ion-icon>
    `;
    const deleteFavourite = iconContainer.querySelector("#deleteFavourite");
    deleteFavourite.addEventListener("click", () => deleteFavouritesImg(image));
    img.src = image;
    img.classList.add("object-fit-cover");
    cardContainer.append(img, iconContainer);
    mySection.append(cardContainer);
}

const showCard = () => {
    favouritesPhotos.forEach(link => {
        createCard(link);
    });
}
showCard();
