
const navHamburger = document.getElementById('nav-hamburger');
const navCross = document.getElementById('nav-cross');
const dropDown = document.getElementById('drop-down');
const navLinks = document.getElementById('nav-links');

navHamburger.addEventListener('click', function () {
    navHamburger.classList.remove('active');
    navCross.classList.add('active');
    dropDown.classList.add('active');
    navLinks.classList.add('active');
});

navCross.addEventListener('click', function () {
    navCross.classList.remove('active');
    navHamburger.classList.add('active');
    dropDown.classList.remove('active');
    navLinks.classList.remove('active');
});


