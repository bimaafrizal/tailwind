const hamburger = document.querySelector('#hamburger-icon');
const mobileMenu = document.querySelector('#mobile-menu');

hamburger.addEventListener('click', () => {
    let src = (hamburger.getAttribute('src') === 'img/icon-hamburger.svg') ? 'img/icon-close.svg' : 'img/icon-hamburger.svg';
    hamburger.setAttribute('src', src);

    //open the menu
    mobileMenu.classList.toggle('hidden'); 
});