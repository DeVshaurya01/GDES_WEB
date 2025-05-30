// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetID);
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate cards on scroll (fade + slide up)
const cards = document.querySelectorAll('.card');

function animateOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Simple form validation and submission alert
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert(`Thanks for contacting us, ${name}! We'll get back to you soon.`);
    form.reset();
  });
}

// Ripple effect on buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    this.appendChild(circle);

    const d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';

    const rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left - d / 2 + 'px';
    circle.style.top = e.clientY - rect.top - d / 2 + 'px';

    setTimeout(() => circle.remove(), 600);
  });
});
