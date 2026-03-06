// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    body.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
  } else {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (!data.name || !data.email || !data.message) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Merci pour votre message ! Je vous répondrai bientôt.');

    // Reset form
    this.reset();
  });
}

// Add scroll effect to header
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop;
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  section.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  header {
    transition: transform 0.3s ease;
  }

  .project-card, .skill-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .project-card:hover, .skill-card:hover {
    transform: translateY(-5px);
  }
`;
document.head.appendChild(style);

// Initialize theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '☀️';
}

// Save theme preference
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  localStorage.setItem('theme', currentTheme || 'light');
});