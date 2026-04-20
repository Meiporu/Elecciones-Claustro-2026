/**
 * Scrolls a carousel container horizontally.
 * @param {string} carouselId - The ID of the carousel container element
 * @param {number} direction - Direction of scroll (-1 for left, 1 for right)
 */
function moveCarousel(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const item = carousel.querySelector('.carousel-item');
  
  if (item) {
    const itemWidth = item.offsetWidth;
    const gapWidth = 24;
    const scrollAmount = (itemWidth + gapWidth) * 2; 
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
}

/**
 * Smoothly scrolls to a specific section on the page.
 * @param {string} sectionId - The ID of the section to scroll to
 */
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        scrollToSection(href.substring(1));
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });
});
