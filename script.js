/* ============================================================
   MADHAV VIDYAPEETH — MAIN SCRIPT
   Forms, Contact, Utilities
   ============================================================ */

(function () {
  'use strict';

  // ── Contact / Admission Form Handler ─────────────────────
  function initForms() {
    const forms = document.querySelectorAll('[data-form]');

    forms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const btn      = form.querySelector('[type="submit"]');
        const origText = btn ? btn.textContent : '';

        // Basic validation
        let valid = true;
        form.querySelectorAll('[required]').forEach(field => {
          field.style.borderColor = '';
          if (!field.value.trim()) {
            field.style.borderColor = '#DC2626';
            valid = false;
          }
        });

        if (!valid) {
          showToast('Please fill in all required fields.', 'error');
          return;
        }

        // Simulate submission
        if (btn) {
          btn.textContent = 'Sending…';
          btn.disabled    = true;
        }

        setTimeout(() => {
          if (btn) {
            btn.textContent = origText;
            btn.disabled    = false;
          }
          form.reset();
          showToast('Thank you! We will contact you shortly.', 'success');
        }, 1800);
      });
    });
  }

  // ── Toast Notification ───────────────────────────────────
  function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className  = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%) translateY(0);
      background: ${type === 'success' ? '#0A1628' : '#DC2626'};
      color: #fff;
      padding: 0.875rem 1.75rem;
      border-radius: 100px;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.9rem;
      font-weight: 500;
      box-shadow: 0 8px 32px rgba(0,0,0,0.25);
      z-index: 9999;
      border: 1px solid ${type === 'success' ? 'rgba(200,168,75,0.3)' : 'rgba(220,38,38,0.4)'};
      animation: toast-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    `;

    // Inject keyframe if not already present
    if (!document.getElementById('toast-style')) {
      const style = document.createElement('style');
      style.id    = 'toast-style';
      style.textContent = `
        @keyframes toast-in {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes toast-out {
          from { opacity: 1; transform: translateX(-50%) translateY(0); }
          to   { opacity: 0; transform: translateX(-50%) translateY(20px); }
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toast-out 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ── Enroll / Apply Now Button Scroll ─────────────────────
  function initCTAButtons() {
    document.querySelectorAll('[data-scroll-to]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.querySelector(btn.dataset.scrollTo);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ── WhatsApp Float Button ─────────────────────────────────
  function injectWhatsApp() {
    const wa = document.createElement('a');
    wa.href  = 'https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions%20at%20Madhav%20Vidyapeeth';
    wa.target   = '_blank';
    wa.rel      = 'noopener noreferrer';
    wa.setAttribute('aria-label', 'Chat on WhatsApp');
    wa.style.cssText = `
      position: fixed;
      bottom: 5rem;
      right: 2rem;
      width: 52px;
      height: 52px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 500;
      box-shadow: 0 6px 20px rgba(37,211,102,0.4);
      transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
      text-decoration: none;
    `;
    wa.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>`;

    wa.addEventListener('mouseenter', () => {
      wa.style.transform = 'scale(1.1) translateY(-2px)';
      wa.style.boxShadow = '0 10px 30px rgba(37,211,102,0.5)';
    });

    wa.addEventListener('mouseleave', () => {
      wa.style.transform = '';
      wa.style.boxShadow = '0 6px 20px rgba(37,211,102,0.4)';
    });

    document.body.appendChild(wa);
  }

  // ── Highlight active tab on academics page ────────────────
  function initTabFilter() {
    const tabs = document.querySelectorAll('[data-tab]');
    const panes = document.querySelectorAll('[data-pane]');

    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => {
          p.style.display = 'none';
          p.style.opacity = '0';
        });

        tab.classList.add('active');
        const target = document.querySelector(`[data-pane="${tab.dataset.tab}"]`);
        if (target) {
          target.style.display = 'block';
          requestAnimationFrame(() => {
            target.style.transition = 'opacity 0.35s ease';
            target.style.opacity    = '1';
          });
        }
      });
    });

    // Init first tab
    if (tabs[0]) tabs[0].click();
  }

  // ── FAQ accordion ─────────────────────────────────────────
  function initAccordion() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const trigger = item.querySelector('.faq-question');
      const content = item.querySelector('.faq-answer');

      if (!trigger || !content) return;

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item.open').forEach(other => {
          other.classList.remove('open');
          other.querySelector('.faq-answer').style.maxHeight = '0';
        });

        if (!isOpen) {
          item.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });

      // Init closed
      content.style.maxHeight    = '0';
      content.style.overflow     = 'hidden';
      content.style.transition   = 'max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  }

  // ── Init ─────────────────────────────────────────────────
  function init() {
    initForms();
    initCTAButtons();
    injectWhatsApp();
    initTabFilter();
    initAccordion();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
