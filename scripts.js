// Theme toggle
const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeButton.classList.toggle('fa-moon');
  themeButton.classList.toggle('fa-sun');
});

// Navbar mobile toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

navToggle?.addEventListener('click', () => navMenu.classList.add('active'));
navClose?.addEventListener('click', () => navMenu.classList.remove('active'));

document.querySelectorAll('.nav__link').forEach(n =>
  n.addEventListener('click', () => navMenu.classList.remove('active'))
);

// Typewriter Effect
const roles = [
  "Cyber Security Intern",
  "Ethical Hacker",
  "Penetration Tester",
  "Network Security Enthusiast"
];
let typeIndex = 0, charIndex = 0, isDeleting = false;
const typewriterText = document.getElementById('typewriter-text');

function typeWriter() {
  const current = roles[typeIndex];
  if (isDeleting) {
    typewriterText.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      typeIndex = (typeIndex + 1) % roles.length;
      setTimeout(typeWriter, 500);
    } else setTimeout(typeWriter, 40);
  } else {
    typewriterText.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1000);
    } else setTimeout(typeWriter, 80);
  }
}
if (typewriterText) typeWriter();

// Animated Name
const animatedName = document.getElementById('animated-name');
if (animatedName) {
  let nameText = "AMOD YADAV";
  let nameIdx = 0;
  function animateName() {
    if (nameIdx <= nameText.length) {
      animatedName.textContent = nameText.substring(0, nameIdx++);
      setTimeout(animateName, 100);
    }
  }
  animateName();
}
const typewriterText = document.getElementById('typewriter-text');
const roles = [
  "Cyber Security Intern",
  "Ethical Hacker",
  "Penetration Tester",
  "Network Security Enthusiast"
];
let typeIndex = 0, charIndex = 0, isDeleting = false;

function typeWriter() {
  const current = roles[typeIndex];
  if (isDeleting) {
    typewriterText.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      typeIndex = (typeIndex + 1) % roles.length;
      setTimeout(typeWriter, 400);
    } else {
      setTimeout(typeWriter, 50);
    }
  } else {
    typewriterText.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1500);
    } else {
      setTimeout(typeWriter, 100);
    }
  }
}

if (typewriterText) typeWriter();
