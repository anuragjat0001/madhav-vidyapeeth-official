/* ============================================================
   MADHAV VIDYAPEETH — ANIMATIONS CONTROLLER
   Scroll reveal + counters + stagger
   ============================================================ */

(function () {
  'use strict';

  // ── Scroll Progress Bar ──────────────────────────────────
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollH   = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress  = scrollH > 0 ? (scrollTop / scrollH) * 100 : 0;
    progressBar.style.width = progress + '%';
  }, { passive: true });

  // ── Intersection Observer: Reveal ───────────────────────
  const revealOpts = {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  }, revealOpts);

  function observeRevealElements() {
    document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children'
    ).forEach(el => revealObserver.observe(el));
  }

  // ── Number Counter ───────────────────────────────────────
  function animateCounter(el, target, duration = 1800) {
    const start   = performance.now();
    const isFloat = String(target).includes('.');
    const suffix  = el.dataset.suffix || '';

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out quad
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = isFloat
        ? (eased * target).toFixed(1)
        : Math.floor(eased * target);

      el.textContent = current + suffix;

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseFloat(el.dataset.target);
        if (!isNaN(target)) animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  function observeCounters() {
    document.querySelectorAll('[data-target]').forEach(el => {
      counterObserver.observe(el);
    });
  }

  // ── Back to Top Button ───────────────────────────────────
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Hero Image Ken Burns ──────────────────────────────────
  function initHero() {
    const hero = document.querySelector('.hero');
    if (hero) {
      setTimeout(() => hero.classList.add('loaded'), 100);
    }
  }

  // ── Smooth Anchor Scroll ─────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 90;
          const top    = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ── Gallery Hover Labels ──────────────────────────────────
  function initGallery() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
      item.setAttribute('tabindex', '0');
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // In production: open lightbox
        }
      });
    });
  }

  // ── Testimonial Card tilt on hover ───────────────────────
  function initCardTilt() {
    document.querySelectorAll('.why-card, .academic-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect   = card.getBoundingClientRect();
        const x      = (e.clientX - rect.left) / rect.width  - 0.5;
        const y      = (e.clientY - rect.top)  / rect.height - 0.5;
        const maxRot = 4; // degrees
        card.style.transform = `
          translateY(-6px)
          rotateY(${x * maxRot}deg)
          rotateX(${-y * maxRot}deg)
        `;
        card.style.transformStyle = 'preserve-3d';
        card.style.transition     = 'transform 0.1s ease';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform  = '';
        card.style.transition = 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      });
    });
  }

  // ── Image lazy load polyfill ──────────────────────────────
  function initLazyImages() {
    if ('loading' in HTMLImageElement.prototype) return; // native support
    const imgs = document.querySelectorAll('img[loading="lazy"]');
    const imgObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          imgObserver.unobserve(img);
        }
      });
    });
    imgs.forEach(img => imgObserver.observe(img));
  }

  // ── Page transition class ─────────────────────────────────
  function initPageTransition() {
    document.body.classList.add('page-transition');
  }

  // ── Init all ─────────────────────────────────────────────
  function init() {
    initPageTransition();
    observeRevealElements();
    observeCounters();
    initBackToTop();
    initHero();
    initSmoothScroll();
    initGallery();
    initCardTilt();
    initLazyImages();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
