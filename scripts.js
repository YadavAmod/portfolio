// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
  }, 900);
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// Responsive Nav
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Typewriter Effect
const roles = [
  "Cyber Security Intern",
  "Ethical Hacker",
  "Full Stack Developer",
  "Network Security Enthusiast"
];
let typeIndex = 0, charIndex = 0, isDeleting = false;
const typewriterText = document.getElementById('typewriter-text');
function typeWriter() {
  let current = roles[typeIndex];
  if (isDeleting) {
      typewriterText.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
          isDeleting = false;
          typeIndex = (typeIndex + 1) % roles.length;
          setTimeout(typeWriter, 800);
      } else {
          setTimeout(typeWriter, 40);
      }
  } else {
      typewriterText.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
          isDeleting = true;
          setTimeout(typeWriter, 1200);
      } else {
          setTimeout(typeWriter, 80);
      }
  }
}
typeWriter();

// Animated Name
const animatedName = document.getElementById('animated-name');
let nameText = "AMOD YADAV";
let nameIdx = 0;
function animateName() {
  if (nameIdx <= nameText.length) {
      animatedName.textContent = nameText.substring(0, nameIdx);
      nameIdx++;
      setTimeout(animateName, 80);
  }
}
animateName();

// Contact Form (Demo only)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('section, .project-card, .cert-modern');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - 100) {
          el.classList.add('visible');
      }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
