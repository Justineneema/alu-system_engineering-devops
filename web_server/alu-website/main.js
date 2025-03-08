// making Theme Toggle functioning correctly
const themeSelect = document.getElementById('theme-select');
const body = document.body;

themeSelect.addEventListener('change', (e) => {
    body.setAttribute('data-theme', e.target.value);
    localStorage.setItem('theme', e.target.value);
});

// making the chosed theme to load and be saved 
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeSelect.value = savedTheme;
}

// making navigation to be smothly scrolled
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// creating Fade-in Animation while scrolling
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// making form more interactive to the users
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // accepting form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // enabling the data to be sent to the server
    console.log('Form submitted:', data);
    
    // Auto reset form after submission
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// making copyright to auto update every year
document.getElementById('year').textContent = new Date().getFullYear();

// making image load slowly while loading a page
document.querySelectorAll('.scrolling img').forEach(img => {
    img.loading = 'lazy';
});