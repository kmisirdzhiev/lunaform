if (window.matchMedia('(min-width: 901px)').matches && typeof window.Lenis !== 'undefined') {
  const lenis = new window.Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

const siteHeader = document.querySelector('.site-header');
const heroWrap = document.querySelector('.hero-wrap');

if (siteHeader && heroWrap) {
  const onScroll = () => {
    siteHeader.classList.toggle('is-scrolled', heroWrap.getBoundingClientRect().bottom <= 0);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (window.matchMedia('(max-width: 900px)').matches) {
  const cards = document.querySelectorAll('.project-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('in-view', entry.isIntersecting);
      });
    },
    { threshold: 0.35 }
  );
  cards.forEach((card) => observer.observe(card));
}

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  if (!button) return;

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    faqItems.forEach((entry) => {
      entry.classList.remove('open');
      const entryBtn = entry.querySelector('.faq-question');
      if (entryBtn) entryBtn.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});
