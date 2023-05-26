const burgerIcon = document.querySelector('.header__mobile_burger');
const burgerOpen = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.header__link');
if (burgerIcon){
    burgerIcon.addEventListener("click", function(e) {
        burgerIcon.classList.toggle('_active');
        burgerOpen.classList.toggle('_active');
    });
}