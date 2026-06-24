// Navigation scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 5%';
        navbar.style.background = 'rgba(10, 12, 16, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.padding = '1.5rem 5%';
        navbar.style.background = 'rgba(10, 12, 16, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// Mobile Navigation Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
let isMenuOpen = false;

mobileBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10, 12, 16, 0.95)';
        navLinks.style.padding = '1rem 0';
        navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        navLinks.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        
        // Center the links
        Array.from(navLinks.children).forEach(li => {
            li.style.margin = '10px 0';
            li.style.textAlign = 'center';
            li.style.width = '100%';
        });
    } else {
        navLinks.style.display = 'none';
        navLinks.style.boxShadow = 'none';
    }
});

// Close mobile menu when clicking a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            isMenuOpen = false;
            navLinks.style.display = 'none';
        }
    });
});

// Reset mobile menu on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'row';
        navLinks.style.position = 'static';
        navLinks.style.background = 'transparent';
        navLinks.style.padding = '0';
        navLinks.style.borderBottom = 'none';
        navLinks.style.boxShadow = 'none';
        isMenuOpen = false;
        
        // Reset margins
        Array.from(navLinks.children).forEach(li => {
            li.style.margin = '0';
            li.style.width = 'auto';
        });
    } else if (!isMenuOpen) {
        navLinks.style.display = 'none';
    }
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let mailtoLink = mailto:youremail@gmail.com?subject=Message from ${name}&body=${message} (From: ${email});

  window.location.href = mailtoLink;

  document.getElementById("status").innerText = "Opening mail app...";
});
