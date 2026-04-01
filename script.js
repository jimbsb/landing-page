// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const newsItems = document.querySelectorAll('.news-item');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger) {
        closeMenu();
    }
});

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// News Item Toggle
newsItems.forEach(item => {
    const button = item.querySelector('button');
    button.addEventListener('click', () => {
        if(item.classList.contains('expanded')){
            item.classList.remove('expanded');
            return;
        }
        item.classList.add('expanded');
    });   
});