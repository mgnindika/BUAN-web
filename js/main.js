/* ============================================================
   PETER CALLAIS INSTITUTE — MAIN JS
   main.js — nav, footer, tabs, accordion, filters, forms, etc.
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────
   HELPERS
────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* Get root path relative to index.html */
function getRootPath() {
  return window.ROOT || '';
}

/* ──────────────────────────────────────────────
   1. NAVIGATION INJECTION + BEHAVIOR
────────────────────────────────────────────── */
function buildNav() {
  const R = getRootPath();

  const navLinks = [
    { label: 'Home', href: `${R}index.html`, dropdown: null },
    {
      label: 'About', href: '#', dropdown: [
        { label: 'Mission & Vision',  href: `${R}pages/about/mission.html` },
        { label: 'Who We Are',        href: `${R}pages/about/who-we-are.html` },
        { label: 'Our Leadership',    href: `${R}pages/about/leadership.html` },
        { label: 'Contact',           href: `${R}pages/about/contact.html` },
        { label: 'Job Opportunities', href: `${R}pages/about/jobs.html` },
      ]
    },
    {
      label: 'Industry', href: '#', dropdown: [
        { label: 'AI for Industry', href: `${R}pages/industry/ai-for-industry.html` },
      ]
    },
    {
      label: 'Students', href: '#', dropdown: [
        { label: 'Major / Double Major',        href: `${R}pages/students/major.html` },
        { label: 'First Year Seminar',           href: `${R}pages/students/first-year-seminar.html` },
        { label: 'Certifications',               href: `${R}pages/students/certifications.html` },
        { label: 'Analytics Guest Lecture (AGL)',href: `${R}pages/students/agl-series.html` },
        { label: 'Data Visualization Competition', href: `${R}pages/students/dvc.html` },
        { label: 'Impact Day',                   href: `${R}pages/students/impact-day.html` },
        { label: 'Training & Workshops',         href: `${R}pages/students/training-workshops.html` },
        { label: 'Pre-College (AAI4HC)',          href: `${R}pages/students/aai4hc.html` },
      ]
    },
    {
      label: 'Impacts Lab', href: `${R}pages/impacts-lab/index.html`, dropdown: [
        { label: 'Statistical Services',         href: `${R}pages/impacts-lab/index.html` },
        { label: 'Tech Startup Program',         href: `${R}pages/startup/index.html` },
        { label: 'Researchers',                  href: `${R}pages/researchers/index.html` },
        { label: 'Databank',                     href: `${R}pages/databank/index.html` },
        { label: 'Data Science Education',       href: `${R}pages/data-science-education/index.html` },
      ]
    },
    {
      label: 'News & Stories', href: '#', dropdown: [
        { label: 'Job Market Candidates', href: `${R}pages/news/job-market-candidates.html` },
        { label: 'Newsletters',           href: `${R}pages/news/newsletters.html` },
        { label: 'News & Stories',        href: `${R}pages/news/news-stories.html` },
      ]
    }
  ];

  function buildDropdownHTML(items, label) {
    return `<div class="nav-dropdown" role="menu">
      <div class="nav-dropdown-header">${label}</div>
      ${items.map(i => `<a href="${i.href}" role="menuitem">${i.label}</a>`).join('')}
    </div>`;
  }

  function buildNavHTML() {
    return `
    <header id="navbar" class="transparent" role="banner">
      <div class="nav-inner">
        <a href="${R}index.html" class="nav-logo" aria-label="Peter Callais Institute for Business Analytics — Home">
          <img src="${R}images/loyola-logo.svg" class="nav-loyola-img" alt="Loyola University New Orleans" aria-hidden="true">
          <div class="nav-logo-text">
            <span class="nav-logo-mark">Peter Callais Institute</span>
            <span class="nav-logo-name">for Business Analytics · Loyola University New Orleans</span>
          </div>
        </a>
        <nav class="nav-links" role="navigation" aria-label="Main navigation">
          ${navLinks.map(link => `
            <div class="nav-item${link.dropdown ? ' has-dropdown' : ''}" role="none"
              ${link.dropdown ? 'tabindex="0"' : ''}>
              <a href="${link.href}" class="nav-link"
                ${link.dropdown ? 'aria-haspopup="true" aria-expanded="false"' : ''}
              >${link.label}${link.dropdown ? ' <span class="chevron" aria-hidden="true">▾</span>' : ''}</a>
              ${link.dropdown ? buildDropdownHTML(link.dropdown, link.label) : ''}
            </div>
          `).join('')}
        </nav>
        <div class="nav-right">
          <a href="${R}pages/industry/ai-for-industry.html" class="btn btn-gold btn-sm" aria-label="Partner with us">Partner With Us</a>
          <button class="hamburger" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>`;
  }

  function buildMobileMenuHTML() {
    const groups = navLinks.filter(l => l.label !== 'Home');
    return `
    <div id="mobile-menu" role="dialog" aria-label="Mobile navigation menu" aria-modal="true">
      <nav class="mobile-nav-links" role="navigation">
        <a href="${R}index.html" class="mobile-nav-link">Home</a>
        ${groups.map(g => `
          <div class="mobile-nav-link">${g.label}</div>
          ${g.dropdown ? `<div class="mobile-nav-sub">
            ${g.dropdown.map(s => `<a href="${s.href}">${s.label}</a>`).join('')}
          </div>` : ''}
        `).join('')}
      </nav>
      <a href="${R}pages/about/contact.html" class="btn btn-gold mt-8">Contact Us</a>
    </div>`;
  }

  // Skip injection if navbar already exists in the HTML (e.g. index.html static fallback)
  if (document.getElementById('navbar')) {
    return;
  }
  document.body.insertAdjacentHTML('afterbegin', buildNavHTML() + buildMobileMenuHTML());

  // Add padding to body for fixed nav
  document.body.style.paddingTop = '0';
}

function initStickyNav() {
  const navbar = $('#navbar');
  if (!navbar) return;

  function updateNav() {
    if (window.scrollY > 80) {
      navbar.classList.remove('transparent');
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
    }
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
}

function initMobileMenu() {
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Close when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ──────────────────────────────────────────────
   2. FOOTER INJECTION
────────────────────────────────────────────── */
function buildFooter() {
  const R = getRootPath();
  const year = new Date().getFullYear();

  const footerHTML = `
  <footer role="contentinfo">
    <div class="footer-top">
      <div class="container">
        <div class="grid grid-4" style="gap:var(--space-10);">
          <div>
            <div class="footer-logo-mark">CI<span>·</span>BA</div>
            <p class="footer-tagline">Peter Callais Institute for Business Analytics at Loyola University New Orleans — where data meets purpose.</p>
            <div class="footer-social" aria-label="Social media links">
              <a href="#" class="social-link" aria-label="LinkedIn" title="LinkedIn">in</a>
              <a href="#" class="social-link" aria-label="Twitter/X" title="Twitter/X">𝕏</a>
              <a href="https://www.youtube.com/@CallaisInstitute" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="YouTube" title="YouTube">▶</a>
              <a href="#" class="social-link" aria-label="Instagram" title="Instagram">◈</a>
            </div>
          </div>
          <div>
            <div class="footer-heading">About</div>
            <nav class="footer-links" aria-label="About footer links">
              <a href="${R}pages/about/mission.html">Mission &amp; Vision</a>
              <a href="${R}pages/about/who-we-are.html">Who We Are</a>
              <a href="${R}pages/about/leadership.html">Our Leadership</a>
              <a href="${R}pages/about/contact.html">Contact</a>
              <a href="${R}pages/about/jobs.html">Job Opportunities</a>
            </nav>
          </div>
          <div>
            <div class="footer-heading">Students</div>
            <nav class="footer-links" aria-label="Students footer links">
              <a href="${R}pages/students/major.html">BA Major</a>
              <a href="${R}pages/students/certifications.html">Certifications</a>
              <a href="${R}pages/students/agl-series.html">AGL Series</a>
              <a href="${R}pages/students/dvc.html">Data Viz Competition</a>
              <a href="${R}pages/students/aai4hc.html">Pre-College (AAI4HC)</a>
              <a href="${R}pages/students/impact-day.html">Impact Day</a>
            </nav>
          </div>
          <div>
            <div class="footer-heading">Research &amp; Connect</div>
            <nav class="footer-links" aria-label="Research footer links">
              <a href="${R}pages/impacts-lab/index.html">Impacts Lab</a>
              <a href="${R}pages/researchers/index.html">Researchers</a>
              <a href="${R}pages/databank/index.html">Databank</a>
              <a href="${R}pages/industry/ai-for-industry.html">AI for Industry</a>
              <a href="${R}pages/startup/index.html">Startup Program</a>
              <a href="${R}pages/news/news-stories.html">News &amp; Stories</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-newsletter">
      <div class="container">
        <div class="footer-newsletter-inner">
          <div class="footer-newsletter-text">
            <h4>Stay Connected</h4>
            <p>Monthly insights, event news, and research updates.</p>
          </div>
          <form class="footer-newsletter-form" id="footer-newsletter" aria-label="Newsletter signup">
            <label for="footer-email" class="sr-only">Email address</label>
            <input type="email" id="footer-email" name="email" placeholder="your@email.com" required aria-label="Email address for newsletter">
            <button type="submit" class="btn btn-gold btn-sm">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner">
          <span>© ${year} Peter Callais Institute for Business Analytics | Loyola University New Orleans | 314 Miller Hall, New Orleans, LA 70118</span>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Accessibility</a>
            <a href="${R}pages/about/contact.html">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Back to top button
  document.body.insertAdjacentHTML('beforeend',
    `<button id="back-to-top" aria-label="Back to top" title="Back to top">↑</button>`
  );

  // Inject chat widget CSS + JS on every page (skip if already loaded)
  if (!document.getElementById('chat-css')) {
    const link = document.createElement('link');
    link.id   = 'chat-css';
    link.rel  = 'stylesheet';
    link.href = `${R}css/chat.css`;
    document.head.appendChild(link);
  }
  if (!document.getElementById('chat-js')) {
    const script = document.createElement('script');
    script.id  = 'chat-js';
    script.src = `${R}js/chat.js`;
    document.body.appendChild(script);
  }
}

/* ──────────────────────────────────────────────
   3. BACK TO TOP
────────────────────────────────────────────── */
function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ──────────────────────────────────────────────
   4. TABS (mission, programs, research areas)
────────────────────────────────────────────── */
function initTabs() {
  $$('.tabs-nav, .mission-tab-nav').forEach(nav => {
    const buttons = $$('[data-tab]', nav);
    const panel   = nav.closest('section, .tabs-container') || nav.parentElement;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        // Deactivate all
        buttons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        $$('.tab-content, .tab-pane', panel).forEach(p => p.classList.remove('active'));

        // Activate clicked
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const pane = $(`[data-tab-content="${target}"]`, panel) || $(`#${target}`, panel);
        if (pane) pane.classList.add('active');
      });
    });

    // Activate first by default
    if (buttons.length && !buttons.some(b => b.classList.contains('active'))) {
      buttons[0].click();
    }
  });
}

/* ──────────────────────────────────────────────
   5. ACCORDION
────────────────────────────────────────────── */
function initAccordion() {
  $$('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const isOpen = item.classList.contains('open');

      // Close all (uncomment for single-open behavior)
      // $$('.accordion-item.open').forEach(i => {
      //   i.classList.remove('open');
      //   i.querySelector('.accordion-body').style.maxHeight = '0';
      // });

      item.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', !isOpen);
      body.style.maxHeight = isOpen ? '0' : body.scrollHeight + 'px';
    });
  });
}

/* ──────────────────────────────────────────────
   6. FILTER BUTTONS (workshops, news, datasets, certs)
────────────────────────────────────────────── */
function initFilters() {
  $$('.filter-bar').forEach(bar => {
    const btns  = $$('.tab-btn', bar);
    const grid  = bar.nextElementSibling?.closest('[data-filter-grid]')
                  || document.querySelector('[data-filter-grid]');
    if (!grid) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        $$('[data-category]', grid).forEach(card => {
          if (filter === 'all' || card.dataset.category === filter ||
              card.dataset.categories?.includes(filter)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Activate 'All' by default
    const allBtn = btns.find(b => b.dataset.filter === 'all') || btns[0];
    if (allBtn) allBtn.click();
  });
}

/* ──────────────────────────────────────────────
   7. CAROUSEL
────────────────────────────────────────────── */
function initCarousels() {
  $$('.carousel').forEach(carousel => {
    const track  = carousel.querySelector('.carousel-track');
    const slides = $$('.carousel-slide', carousel);
    const dotsContainer = carousel.querySelector('.carousel-controls');
    if (!track || !slides.length) return;

    let current = 0;
    let autoTimer;

    // Build dots
    if (dotsContainer) {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
    }

    function goTo(idx) {
      slides[current].setAttribute('aria-hidden', 'true');
      current = (idx + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      slides[current].removeAttribute('aria-hidden');
      $$('.carousel-dot', dotsContainer).forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    // Prev / next buttons
    carousel.querySelector('.carousel-prev')?.addEventListener('click', () => goTo(current - 1));
    carousel.querySelector('.carousel-next')?.addEventListener('click', () => goTo(current + 1));

    // Auto-play
    function startAuto() {
      autoTimer = setInterval(() => goTo(current + 1), 5000);
    }
    function stopAuto() { clearInterval(autoTimer); }

    startAuto();
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
  });
}

/* ──────────────────────────────────────────────
   8. FORM VALIDATION
────────────────────────────────────────────── */
function initFormValidation() {
  $$('form[data-validate]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;

      // Clear previous errors
      $$('.form-error.visible', form).forEach(err => err.classList.remove('visible'));
      $$('.form-input.error, .form-select.error, .form-textarea.error', form)
        .forEach(f => f.classList.remove('error'));

      // Validate required fields
      $$('[required]', form).forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          const err = field.parentElement.querySelector('.form-error');
          if (err) { err.textContent = 'This field is required.'; err.classList.add('visible'); }
          valid = false;
        }
        // Email validation
        if (field.type === 'email' && field.value) {
          const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRe.test(field.value)) {
            field.classList.add('error');
            const err = field.parentElement.querySelector('.form-error');
            if (err) { err.textContent = 'Please enter a valid email.'; err.classList.add('visible'); }
            valid = false;
          }
        }
      });

      if (valid) {
        // Simulate submission
        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          form.reset();
          showToast('Message sent successfully! We\'ll be in touch soon.');

          // Show inline success message if exists
          const successMsg = form.querySelector('.form-success');
          if (successMsg) {
            successMsg.style.display = 'block';
            setTimeout(() => successMsg.style.display = 'none', 5000);
          }
        }, 1200);
      }
    });
  });
}

/* ──────────────────────────────────────────────
   9. TOAST NOTIFICATION
────────────────────────────────────────────── */
function showToast(message, type = 'success') {
  let toast = $('#toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.background = type === 'success' ? '#065f46' : '#7A1330';
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 4000);
}

/* ──────────────────────────────────────────────
   10. MODAL
────────────────────────────────────────────── */
function initModals() {
  // Open
  $$('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.dataset.modal;
      const overlay = $(`#${modalId}`);
      if (overlay) {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        overlay.querySelector('.modal-close, [data-close-modal]')?.focus();
      }
    });
  });

  // Close
  $$('.modal-overlay').forEach(overlay => {
    // Close button
    overlay.querySelector('.modal-close')?.addEventListener('click', () => closeModal(overlay));

    // Click outside
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const open = $('.modal-overlay.open');
      if (open) closeModal(open);
    }
  });

  function closeModal(overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ──────────────────────────────────────────────
   11. SEARCH (Databank)
────────────────────────────────────────────── */
function initSearch() {
  const searchInput = $('#databank-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    $$('.dataset-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });
}

/* ──────────────────────────────────────────────
   12. SMOOTH SCROLL for anchor links
────────────────────────────────────────────── */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ──────────────────────────────────────────────
   13. FOOTER NEWSLETTER FORM
────────────────────────────────────────────── */
function initFooterNewsletter() {
  const form = $('#footer-newsletter');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (email) {
      form.reset();
      showToast('Subscribed! Welcome to the Callais Institute newsletter.');
    }
  });
}

/* ──────────────────────────────────────────────
   14. SET ACTIVE NAV LINK
────────────────────────────────────────────── */
function setActiveNavLink() {
  const path = window.location.pathname;
  $$('.nav-link, .nav-dropdown a').forEach(link => {
    if (link.href && link.href.includes(path) && path !== '/') {
      link.classList.add('active');
    }
  });
}

/* ──────────────────────────────────────────────
   15. SR-ONLY utility (for accessibility labels)
────────────────────────────────────────────── */
const srOnlyStyle = `.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`;
const styleEl = document.createElement('style');
styleEl.textContent = srOnlyStyle;
document.head.appendChild(styleEl);

/* ──────────────────────────────────────────────
   INIT
────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  initStickyNav();
  initMobileMenu();
  initBackToTop();
  initTabs();
  initAccordion();
  initFilters();
  initCarousels();
  initFormValidation();
  initModals();
  initSearch();
  initSmoothScroll();
  initFooterNewsletter();
  setActiveNavLink();
});
