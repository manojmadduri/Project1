// Select burger menu and mobile nav elements
const burgerMenu = document.getElementById('burger-menu');
const mobileNav = document.getElementById('mobile-nav');

// Toggle active class on burger menu and mobile nav when clicked
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Ensure that the cross lines (X) are clickable and will close the menu
// Close menu when clicking on any mobile nav link
document.querySelectorAll('.mobile-nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});
