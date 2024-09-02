// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contact-form').reset();
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Theme toggle functionality with transition
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transition = "background-color 0.5s, color 0.5s";
    }
}

// Remove announcement functionality
function removeAnnouncement(button) {
    const announcementItem = button.parentElement;
    announcementItem.style.opacity = '0';  // Fade out effect
    setTimeout(() => {
        announcementItem.style.display = 'none';
    }, 500); // Matches the CSS transition time
}

// Icon integration in announcements
document.querySelectorAll('.announcement-item button').forEach(button => {
    button.innerHTML = '<i class="fas fa-times"></i> ' + button.innerHTML;
});

// Add this script at the end of the HTML or in your script.js
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Scroll to top button functionality
const scrollToTopBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initial icon integration for services, events, etc.
document.querySelectorAll('.service-item h3, .event-item h3, .location-item h3, .payment-item h3').forEach(header => {
    if (header.innerText.includes('Worship')) {
        header.innerHTML = '<i class="fas fa-church"></i> ' + header.innerHTML;
    } else if (header.innerText.includes('Bible Study')) {
        header.innerHTML = '<i class="fas fa-book"></i> ' + header.innerHTML;
    } else if (header.innerText.includes('Payments')) {
        header.innerHTML = '<i class="fas fa-donate"></i> ' + header.innerHTML;
    }
    // Add more conditions as needed for other icons
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to add the 'fade-up' class when elements are visible
    const fadeUpElements = document.querySelectorAll("section, .slide, .service-item, .event-item, .location-item, .payment-item, .announcement-item, .social-links a");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeUpElements.forEach(element => {
        observer.observe(element);
    });
});
