const key = "vEXujxX5FtpYQITWq2QkTV1GJkOJfudI5oFXmFm4SIK7wdKSHQn4qS3n";
const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");
const mySection = document.querySelector("#mySection");
const toast = document.querySelector('.toast');
const myToast = new bootstrap.Toast(toast);
const spinner = document.querySelector("#spinner");
const favourites = localStorage.getItem("favourites");
let favouritesPhotos = JSON.parse(favourites);

window.onload = () => {
    if (favouritesPhotos === null) {
        favouritesPhotos = [];
    }
}

const showSpinner = () => {
    spinner.classList.remove("d-none");
}
const hideSpinner = () => {
    spinner.classList.add("d-none");
}
const searchError = () => {
    const toastDescription = document.querySelector("#toastDescription");
    toastDescription.innerHTML = `<p>Scrivi qualcosa</p>`;
    myToast.show();
}

const createCard = (image) => {
    const cardContainer = document.createElement("div");
    const img = document.createElement("img");
    const iconContainer = document.createElement("div");
    cardContainer.classList.add("card-container", "col-12", "col-md-4", "col-xl", "m-auto", "p-0");
    img.src = image.src.large;
    img.classList.add("object-fit-cover");
    iconContainer.classList.add("d-flex", "justify-content-center", "align-items-center");
    iconContainer.innerHTML = `
    <ion-icon id="bookmarkIcon" name="bookmark-outline"></ion-icon>
    <ion-icon id="downloadIcon" name="download-outline"></ion-icon>
    `;
    cardContainer.append(img, iconContainer);
    mySection.append(cardContainer);
}
const favouritesImage = () => {
    const cardsImg = document.querySelectorAll(".card-container > img");
    const bookmarkIcons = document.querySelectorAll("#bookmarkIcon");
    cardsImg.forEach((img, i) => {
        bookmarkIcons[i].addEventListener("click", () => {
            favouritesPhotos.push(img.src);
            localStorage.setItem("favourites", JSON.stringify(favouritesPhotos));
        })
    })
}
const download = (url, filename) => {
    fetch(url)
        .then(res => res.blob())
        .then(blob => {
            const anchor = document.createElement('a');
            anchor.href = URL.createObjectURL(blob);
            anchor.download = filename;
            anchor.click();
        })
}
const downloadImage = () => {
    const cardsImg = document.querySelectorAll(".card-container > img");
    const downloadIcon = document.querySelectorAll("#downloadIcon");
    cardsImg.forEach((img, i) => {
        downloadIcon[i].addEventListener("click", () => {
            download(img.src, "photo.jpg");
        })
    })
}
const getImage = async (category = 1) => {
    showSpinner();
    try {
        const response = await fetch("https://api.pexels.com/v1/search?query=" + category, {
            headers: {
                "authorization": key,
            }
        })
        const data = await response.json();
        if (response.ok) {
            return data.photos;
        } else {
            searchError(data.code);
        }
    } catch (error) {
        console.log(error);
    } finally {
        hideSpinner();
    }
}
getImage().then(res => {
    res.forEach(image => {
        createCard(image);
    });
    favouritesImage();
    downloadImage();
})
searchBtn.addEventListener("click", () => {
    getImage(searchInput.value).then(res => {
        if (res) {
            mySection.innerHTML = "";
            res.forEach(image => {
                createCard(image);
            });
            favouritesImage();
            downloadImage();
        }
    })
})
