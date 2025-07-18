// Watch elements and fade them in when they come into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

// DARK MODE TOGGLE + REMEMBER SETTING

const toggleButton = document.getElementById('darkModeToggle');

// Apply dark mode if user previously enabled it
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('dark');
  });
  toggleButton.textContent = '☀️ Light Mode';
}

// Toggle dark mode on click
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  document.querySelectorAll('section').forEach(section => {
    section.classList.toggle('dark');
  });

  // Save preference
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = '☀️ Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = '🌙 Dark Mode';
  }
});

// Typewriter Effect
const words = ["Rakshith 👨‍💻", "a Developer 💻", "a Fast Learner 🚀", "an MCA Student 🎓"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typewriter-text");

function typeWriter() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeWriter, 1000); // wait before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWriter, 500); // wait before typing next word
  } else {
    setTimeout(typeWriter, isDeleting ? 50 : 150);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);

document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target); // optional: reveal only once
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));
});

const mainCursor = document.querySelector(".cursor-main");
const trailCursor = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  mainCursor.style.transform = `translate(${x}px, ${y}px)`;
  trailCursor.style.transform = `translate(${x}px, ${y}px)`;
});