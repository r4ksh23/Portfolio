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