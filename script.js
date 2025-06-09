const toggleButton = document.getElementById('toggle-mode');
const body = document.body;
const moonIcon = '🌙';
const sunIcon = '☀️';

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = sunIcon;
  } else {
    toggleButton.textContent = moonIcon;
  }
});

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    
    if(href.startsWith('#')) {
      const target = document.querySelector(href);
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  });
});

window.addEventListener('load', () => {
  document.body.classList.add('fade-in');
});
