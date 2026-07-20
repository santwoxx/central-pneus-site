// Header: transparente no topo, sólido ao rolar
const siteHeader = document.getElementById('siteHeader');
if (siteHeader) {
  const applyScrollState = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  applyScrollState();
  window.addEventListener('scroll', applyScrollState, { passive: true });
}

// Menu mobile
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// FAQ — lista + painel
const faqPanel = document.getElementById('faqPanel');
document.querySelectorAll('#faqList .faq-item').forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    document.querySelectorAll('#faqList .faq-item').forEach(other => other.classList.remove('active'));
    item.classList.add('active');
    if (faqPanel) {
      faqPanel.querySelector('h3').textContent = item.querySelector('.faq-question').textContent;
      faqPanel.querySelector('p').textContent = item.dataset.answer;
    }
  });
});

// Clique em imagens (Galeria, Serviços, Mosaico) → abre WhatsApp com mensagem pré-preenchida
const WA_URL = 'https://wa.me/557333018133?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Central%20Pneus%20e%20gostaria%20de%20um%20atendimento.%20Pode%20me%20ajudar%3F';

const clickableImages = document.querySelectorAll('.gallery-editorial img, .service-media img, .photo-mosaic img, .split-media img, .impact-section');

clickableImages.forEach(el => {
  el.style.cursor = 'pointer';
  el.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(WA_URL, '_blank', 'noopener,noreferrer');
  });
});

// Clique no hero/banner principal também leva ao WhatsApp
const heroBanner = document.querySelector('.hero');
if (heroBanner) {
  heroBanner.style.cursor = 'pointer';
  heroBanner.addEventListener('click', (e) => {
    // Só redireciona se o clique não foi em um botão/link dentro do hero
    if (!e.target.closest('a, button')) {
      window.open(WA_URL, '_blank', 'noopener,noreferrer');
    }
  });
}

// Modal de imagem (mantido oculto, não usado)
const imageModal = document.getElementById('imageModal');
const closeModalBtn = document.getElementById('closeImageModal');
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    if (imageModal) imageModal.classList.remove('is-open');
  });
}
