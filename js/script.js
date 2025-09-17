// INTERACTIVE SELECTOR TABS
document.querySelectorAll('.selector-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Deactivate all tabs
    document.querySelectorAll('.selector-tab').forEach(t => t.classList.remove('active'));
    // Hide all grid wrappers
    document.querySelectorAll('.machine-grid-wrapper').forEach(grid => {
      grid.style.display = 'none';
    });

    // Activate the clicked tab
    tab.classList.add('active');
    // Show the target grid
    const target = tab.dataset.target;
    if (target) {
      document.querySelector(target).style.display = 'block';
    }
  });
});

// FAQ TOGGLE
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('active');
  });
});

// Generate FAQ Schema from HTML
const faqItems = [];
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-question').innerText.replace('+', '').trim();
  const a = item.querySelector('.faq-answer').innerText.trim();
  faqItems.push({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": a
    }
  });
});

document.getElementById('faq-schema').textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems
});

// Sticky header enhancement
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
  }
});

// Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
  const animatedSections = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animatedSections.forEach(section => {
    observer.observe(section);
  });
});
