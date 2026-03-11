// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Adjust for sticky header height
            const headerHeight = document.getElementById('main-header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-active');
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('nav-active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('nav-active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// Simple form validation logic
const form = document.getElementById('contactForm');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const submitBtn = document.querySelector('.submit-btn');

function checkInputs() {
    if (fname.value.trim() !== '' && lname.value.trim() !== '' && email.value.trim() !== '') {
        submitBtn.removeAttribute('disabled');
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
    } else {
        submitBtn.setAttribute('disabled', 'true');
        submitBtn.style.opacity = '0.5';
        submitBtn.style.cursor = 'not-allowed';
    }
}

// Add event listeners to inputs
if (form) {
    [fname, lname, email].forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real scenario, handle form submission via fetch/ajax here
        alert('Thank you for your message! (Simulated submission)');
        form.reset();
        checkInputs();
    });
}

// Scroll Reveal Animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate Hero section immediately
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.classList.add('animate-up');
    }

    // Set up observer for other sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
        section.classList.add('reveal-section');
        sectionObserver.observe(section);
    });
});
