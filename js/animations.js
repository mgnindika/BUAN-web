/* ============================================================
   PETER CALLAIS INSTITUTE — ANIMATIONS ENGINE
   animations.js
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────
   1. INTERSECTION OBSERVER (scroll-triggered animations)
────────────────────────────────────────────── */
function initScrollAnimations() {
  const animClasses = ['.fade-up', '.fade-left', '.fade-right', '.scale-in', '.fade-in'];
  const elements = document.querySelectorAll(animClasses.join(', '));

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Don't unobserve — keep visible once triggered
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ──────────────────────────────────────────────
   2. STAGGER CHILDREN OBSERVER
────────────────────────────────────────────── */
function initStaggerChildren() {
  const containers = document.querySelectorAll('.stagger-children');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.children;
        Array.from(children).forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.1}s`;
          child.classList.add('visible');
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px'
  });

  containers.forEach(c => observer.observe(c));
}

/* ──────────────────────────────────────────────
   3. ANIMATED COUNTER
────────────────────────────────────────────── */
function animateCounter(el, end, duration = 1800) {
  const start = 0;
  const startTime = performance.now();
  const hasPlus = el.dataset.suffix || (el.textContent.includes('+'));
  const suffix = el.dataset.suffix || (hasPlus ? '+' : '');
  const prefix = el.dataset.prefix || '';

  // Parse the end value from data attribute or current text
  const target = parseInt(el.dataset.target || end, 10);

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(easeOut(progress) * target);
    el.textContent = prefix + current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = prefix + target.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const target = parseInt(entry.target.dataset.counter, 10);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

/* ──────────────────────────────────────────────
   4. HERO WORD-BY-WORD ANIMATION
────────────────────────────────────────────── */
function initHeroWords() {
  const heroHeadings = document.querySelectorAll('.hero-words');
  heroHeadings.forEach(heading => {
    const words = heading.textContent.trim().split(/\s+/).filter(w => w.length);
    heading.innerHTML = words
      .map((word, i) => `<span class="word" style="animation-delay:${i * 0.12}s">${word}</span>`)
      .join(' ');
  });
}

/* ──────────────────────────────────────────────
   5. PARALLAX (hero backgrounds)
────────────────────────────────────────────── */
function initParallax() {
  const heroes = document.querySelectorAll('.parallax-bg');
  if (!heroes.length) return;

  // Only enable on desktop (no parallax on touch devices)
  if (window.matchMedia('(max-width: 768px)').matches) return;

  function updateParallax() {
    const scrollY = window.pageYOffset;
    heroes.forEach(bg => {
      const parent = bg.closest('.hero, section');
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        bg.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    });
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();
}

/* ──────────────────────────────────────────────
   6. PROGRESS BAR ANIMATION
────────────────────────────────────────────── */
function initProgressBars() {
  const bars = document.querySelectorAll('.progress-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}

/* ──────────────────────────────────────────────
   7. CANVAS PARTICLE ANIMATION (Homepage Hero)
────────────────────────────────────────────── */
function initParticleCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animFrame;
  let particles = [];

  function resize() {
    // Use window dimensions — the hero is always 100vw × 100vh on the homepage
    canvas.width  = window.innerWidth;
    canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
  }

  // Mouse position for interaction
  let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
  canvas.parentElement.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x     = initial ? Math.random() * canvas.width  : (Math.random() < 0.5 ? 0 : canvas.width);
      this.y     = initial ? Math.random() * canvas.height : Math.random() * canvas.height;
      const speed = Math.random() * 1.2 + 0.5;
      const angle = Math.random() * Math.PI * 2;
      this.vx    = Math.cos(angle) * speed;
      this.vy    = Math.sin(angle) * speed;
      this.r     = Math.random() * 2.5 + 0.8;
      this.baseR = this.r;
      this.alpha = Math.random() * 0.6 + 0.25;
      this.pulse = Math.random() * Math.PI * 2; // phase offset for pulsing
      this.pulseSpeed = Math.random() * 0.04 + 0.02;
      const roll = Math.random();
      if (roll > 0.65)       this.hue = 'gold';    // gold
      else if (roll > 0.35)  this.hue = 'white';   // white
      else                   this.hue = 'maroon';  // maroon/red
    }
    move() {
      // Subtle repulsion from mouse cursor
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 140) {
        const force = (140 - dist) / 140 * 0.35;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }
      // Speed cap
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > 2.5) { this.vx *= 2.5 / speed; this.vy *= 2.5 / speed; }
      this.x += this.vx;
      this.y += this.vy;
      // Pulse radius
      this.pulse += this.pulseSpeed;
      this.r = this.baseR + Math.sin(this.pulse) * 0.6;
      // Wrap edges with a reset
      if (this.x < -20 || this.x > canvas.width + 20 ||
          this.y < -20 || this.y > canvas.height + 20) {
        this.reset();
      }
    }
    draw() {
      let r, g, b;
      if (this.hue === 'gold')        { r = 200; g = 169; b = 81;  }
      else if (this.hue === 'white')  { r = 255; g = 255; b = 255; }
      else                            { r = 180; g = 40;  b = 80;  }
      // Glow effect for larger particles
      if (this.r > 2.2) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${this.alpha * 0.12})`;
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${this.alpha})`;
      ctx.fill();
    }
  }

  function createParticles(count = 110) {
    particles = [];
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function drawConnections() {
    const maxDist = 160;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.28;
          // Blend color between the two particles
          const col = particles[i].hue === 'gold' || particles[j].hue === 'gold'
            ? `rgba(200,169,81,${opacity})`
            : `rgba(255,255,255,${opacity * 0.6})`;
          ctx.beginPath();
          ctx.strokeStyle = col;
          ctx.lineWidth = 1.2;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.move(); p.draw(); });
    drawConnections();
    animFrame = requestAnimationFrame(animate);
  }

  // Init — defer one frame so the hero's layout height is computed
  requestAnimationFrame(() => {
    resize();
    mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    createParticles(window.innerWidth > 768 ? 130 : 55);
    animate();
  });

  // Handle resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cancelAnimationFrame(animFrame);
      resize();
      mouse = { x: canvas.width / 2, y: canvas.height / 2 };
      createParticles(window.innerWidth > 768 ? 130 : 55);
      animate();
    }, 200);
  });
}

/* ──────────────────────────────────────────────
   8. COUNTDOWN TIMER
────────────────────────────────────────────── */
function initCountdown() {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  const targetDate = new Date(countdownEl.dataset.target || '2025-03-28T10:00:00');

  function update() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownEl.innerHTML = '<div class="countdown-unit"><span class="countdown-number">Event Live!</span></div>';
      return;
    }

    const d  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h  = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s  = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `
      <div class="countdown-unit"><span class="countdown-number">${String(d).padStart(2,'0')}</span><span class="countdown-label">Days</span></div>
      <div class="countdown-unit"><span class="countdown-number">${String(h).padStart(2,'0')}</span><span class="countdown-label">Hours</span></div>
      <div class="countdown-unit"><span class="countdown-number">${String(m).padStart(2,'0')}</span><span class="countdown-label">Mins</span></div>
      <div class="countdown-unit"><span class="countdown-number">${String(s).padStart(2,'0')}</span><span class="countdown-label">Secs</span></div>
    `;
  }

  update();
  setInterval(update, 1000);
}

/* ──────────────────────────────────────────────
   9. BUTTON RIPPLE EFFECT
────────────────────────────────────────────── */
function initRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${e.clientX - rect.left - size/2}px;
        top:  ${e.clientY - rect.top  - size/2}px;
      `;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
}

/* ──────────────────────────────────────────────
   INIT ALL
────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initStaggerChildren();
  initCounters();
  initHeroWords();
  initParallax();
  initProgressBars();
  initParticleCanvas();
  initCountdown();
  initRipple();
});
