const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 4,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const watchFavourites = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log("l'elemento è nella viewport");
        }else{
            console.log("l'elemento è uscito dalla viewport");
        }
    });
}

const observer = new IntersectionObserver(watchFavourites, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
})

const targetElement = document.querySelector('.favourites');

observer.observe(targetElement);


