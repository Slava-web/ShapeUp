(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else { 
            header.classList.remove('header__active');
        }
    };
}()); 


(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    burgerItem.addEventListener('click', () => {
        menu.classList.toggle('active'); 
    });

}());

(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__burger');
    burgerItem.addEventListener('click', () => {
        menu.classList.toggle('active'); 
    });

}());


$(document).ready(function() {
    $('.slider').slick({
        dots:true,
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        touchThreshold: 100,
        touchMove: false,
        centerMode: true,
        variableWidth: true,
    });
});


document.querySelectorAll('a.header__link').forEach(link => {
    link.addEventListener('click', function (e) {
    e.preventDefault()

    const href = this.getAttribute('href').substring(1)

    const scrollTarget = document.getElementById(href)

    const topOffset = 90
    const elementPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elementPosition - topOffset
        

    window.scrollBy({   
        top: offsetPosition,
        behavior: "smooth"
    }); 
});
});







