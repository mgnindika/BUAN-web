/* ============================================================
   PETER CALLAIS INSTITUTE — AI ASSISTANT CHAT WIDGET
   chat.js
   ============================================================ */

'use strict';

(function () {

  /* ── Knowledge base for mock responses ── */
  const KB = [
    {
      keys: ['program', 'major', 'degree', 'buan', 'business analytics', 'study', 'courses', 'curriculum'],
      answer: 'The <strong>B.S. in Business Analytics</strong> at Loyola is a rigorous 4-year program covering statistics, machine learning, data visualization, and ethics. Students can also pursue a double major with Finance, Marketing, or Computer Science. <a href="pages/students/major.html" style="color:#C8A951;">View the full curriculum →</a>'
    },
    {
      keys: ['dvc', 'data visualization', 'competition', 'compete', 'prize', 'cash'],
      answer: 'The <strong>Data Visualization Competition (DVC)</strong> is open to all Loyola students. Teams of up to 4 present data stories to a panel of judges for prizes up to <strong>$500</strong>. It runs every Spring semester. <a href="pages/students/dvc.html" style="color:#C8A951;">Register here →</a>'
    },
    {
      keys: ['certification', 'certificate', 'google', 'tableau', 'power bi', 'aws', 'sas', 'ibm'],
      answer: 'We support <strong>8 industry certifications</strong> including Google Data Analytics, Tableau Desktop Specialist, Power BI PL-300, AWS Cloud Practitioner, and SAS Base Programmer. Many are free or discounted for enrolled students. <a href="pages/students/certifications.html" style="color:#C8A951;">See all certifications →</a>'
    },
    {
      keys: ['event', 'events', 'upcoming', 'calendar', 'schedule', 'agl', 'lecture', 'guest'],
      answer: 'Upcoming events include the <strong>Analytics Guest Lecture (AGL) Series</strong> running every Fall &amp; Spring, the <strong>Data Visualization Competition</strong> in March, and <strong>BAA Connect</strong> in April. <a href="pages/students/agl-series.html" style="color:#C8A951;">View the AGL schedule →</a>'
    },
    {
      keys: ['impact day', 'impact', 'showcase', 'annual'],
      answer: '<strong>Impact Day</strong> is our annual showcase where students, researchers, and industry partners come together to present analytics projects. It runs from 8:30 AM – 5:00 PM and is open to the public. <a href="pages/students/impact-day.html" style="color:#C8A951;">Learn more →</a>'
    },
    {
      keys: ['partner', 'industry', 'company', 'collaborate', 'sponsor', 'corporate', 'business'],
      answer: 'The Institute offers <strong>four partnership tiers</strong>: Corporate Partnership, Research Partnership, Training &amp; Upskilling, and Event Sponsorship. Partners gain access to talent pipelines, research collaboration, and custom training. <a href="pages/industry/ai-for-industry.html" style="color:#C8A951;">Explore partnerships →</a>'
    },
    {
      keys: ['impacts lab', 'research', 'statistical', 'consulting', 'statistics', 'data analysis'],
      answer: 'The <strong>Impacts Lab</strong> provides applied research, free statistical consulting for nonprofits and community orgs, and a curated open Databank. Faculty and GRAs work on real problems using cutting-edge methods. <a href="pages/impacts-lab/index.html" style="color:#C8A951;">Visit the Lab →</a>'
    },
    {
      keys: ['databank', 'dataset', 'data', 'download', 'open data'],
      answer: 'Our <strong>Databank</strong> hosts 8+ curated datasets covering Louisiana economics, health, crime, education, and environment — all free to download. Perfect for student projects and academic research. <a href="pages/databank/index.html" style="color:#C8A951;">Browse the Databank →</a>'
    },
    {
      keys: ['startup', 'tech', 'entrepreneur', 'incubator', 'venture'],
      answer: 'The <strong>Tech Startup Program</strong> within the Impacts Lab helps early-stage founders leverage analytics and AI to build data-driven products. We offer mentorship, workspace, and connections to the New Orleans startup ecosystem. <a href="pages/startup/index.html" style="color:#C8A951;">Learn more →</a>'
    },
    {
      keys: ['workshop', 'training', 'skill', 'python', 'excel', 'sql', 'tableau'],
      answer: 'We run <strong>50+ workshops per year</strong> for students, faculty, and industry professionals. Topics include Python, SQL, Tableau, Power BI, and AI fundamentals. Most are free for Loyola students. <a href="pages/students/training-workshops.html" style="color:#C8A951;">See workshop schedule →</a>'
    },
    {
      keys: ['contact', 'email', 'phone', 'address', 'office', 'location', 'miller', 'reach'],
      answer: 'You can reach us at <strong>Miller Hall, Room 314</strong>, Loyola University New Orleans, 6363 St. Charles Ave. Email: <strong>analytics@loyno.edu</strong> · Phone: <strong>(504) 865-3000</strong>. Office hours are Mon–Fri, 9 AM – 5 PM. <a href="pages/about/contact.html" style="color:#C8A951;">Contact form →</a>'
    },
    {
      keys: ['director', 'dr', 'indika', 'nuwan', 'faculty', 'professor', 'leadership'],
      answer: '<strong>Dr. Nuwan Indika, Ph.D.</strong> is the Founding Director of the Callais Institute. A J. William Fulbright Scholar and Chase Distinguished Professor, his research focuses on Business Analytics, AI/ML, and Econometrics. <a href="pages/about/leadership.html" style="color:#C8A951;">Meet our team →</a>'
    },
    {
      keys: ['peter callais', 'namesake', 'history', 'founded', 'gift', 'family', 'story'],
      answer: 'The institute is named after <strong>Peter Callais</strong>, a Tulane Freeman School graduate and CEO of Abdon Callais Offshore. He was awarded Louisiana\'s Small Business Person of the Year and Ernst &amp; Young Entrepreneur of the Year. The Callais Family established the institute in 2025. <a href="pages/about/who-we-are.html" style="color:#C8A951;">Read his story →</a>'
    },
    {
      keys: ['jesuit', 'mission', 'values', 'vision', 'ethics', 'loyola'],
      answer: 'Our mission is guided by <strong>Jesuit values</strong> — cura personalis, justice, and service to the common good. We believe analytics should be ethical, inclusive, and applied in service of communities. <a href="pages/about/mission.html" style="color:#C8A951;">Read our mission →</a>'
    },
    {
      keys: ['job', 'career', 'hire', 'position', 'work', 'salary', 'internship', 'placement'],
      answer: 'Business Analytics graduates see a <strong>25% job growth</strong> rate with a <strong>$82K median starting salary</strong>. We track all job market candidates and connect students directly with hiring partners. <a href="pages/news/job-market-candidates.html" style="color:#C8A951;">View job market candidates →</a>'
    },
    {
      keys: ['newsletter', 'news', 'update', 'announcement', 'stories'],
      answer: 'Stay current with the <strong>Callais Institute Newsletter</strong> — published monthly with research highlights, student success stories, and upcoming events. <a href="pages/news/newsletters.html" style="color:#C8A951;">Read our newsletters →</a>'
    },
    {
      keys: ['aai4hc', 'pre-college', 'high school', 'precollege', 'youth', 'teen'],
      answer: 'The <strong>AAI4HC Pre-College Program</strong> introduces high school students to analytics and AI through hands-on workshops. It\'s designed to build early interest in data science before college. <a href="pages/students/aai4hc.html" style="color:#C8A951;">Learn more →</a>'
    },
    {
      keys: ['first year', 'freshman', 'seminar', 'buan 1010', 'orientation'],
      answer: 'The <strong>First Year Seminar (BUAN 1010)</strong> is a required 1-credit pass/fail course for all incoming BA majors. It runs every Fall and includes guest speakers, a team analytics challenge, and peer mentorship. <a href="pages/students/first-year-seminar.html" style="color:#C8A951;">Learn more →</a>'
    },
  ];

  const FALLBACKS = [
    "I don't have a specific answer for that, but I'd be happy to connect you with our team. <a href='pages/about/contact.html' style='color:#C8A951;'>Contact us →</a>",
    "That's a great question — our staff can give you a definitive answer. <a href='pages/about/contact.html' style='color:#C8A951;'>Reach out here →</a>",
    "I'm not sure about that one. Try browsing our <a href='pages/about/mission.html' style='color:#C8A951;'>About section</a> or <a href='pages/students/major.html' style='color:#C8A951;'>Students page</a> for more info.",
  ];

  let fallbackIndex = 0;

  function getResponse(query) {
    const q = query.toLowerCase();
    for (const entry of KB) {
      if (entry.keys.some(k => q.includes(k))) {
        return entry.answer;
      }
    }
    const resp = FALLBACKS[fallbackIndex % FALLBACKS.length];
    fallbackIndex++;
    return resp;
  }

  /* ── Build HTML ── */
  function buildWidget() {
    const html = `
    <!-- AI Chat Widget -->
    <button class="chat-trigger" id="chatTrigger" aria-label="Open AI Assistant" aria-expanded="false">
      <span class="chat-notif-dot" aria-hidden="true"></span>
      <span class="icon-open" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="rgba(255,255,255,0.9)"/>
          <circle cx="8" cy="11" r="1.2" fill="#C8A951"/>
          <circle cx="12" cy="11" r="1.2" fill="#C8A951"/>
          <circle cx="16" cy="11" r="1.2" fill="#C8A951"/>
        </svg>
      </span>
      <span class="icon-close" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="rgba(255,255,255,0.9)" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </span>
    </button>

    <div class="chat-window" id="chatWindow" role="dialog" aria-label="AI Assistant" aria-modal="true">

      <!-- Header -->
      <div class="chat-header">
        <div class="chat-header-avatar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2a5 5 0 015 5v1a5 5 0 01-10 0V7a5 5 0 015-5z" fill="rgba(200,169,81,0.9)"/>
            <path d="M3 19a9 9 0 0118 0" stroke="rgba(200,169,81,0.6)" stroke-width="1.8" stroke-linecap="round"/>
            <circle cx="19" cy="6" r="3" fill="#4ade80"/>
            <path d="M17.5 6h3M19 4.5v3" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="chat-header-info">
          <div class="chat-header-title">AI Assistant</div>
          <div class="chat-header-sub">Peter Callais Institute · Loyola NOLA</div>
        </div>
        <div class="chat-status-dot" title="Online" aria-label="Assistant online"></div>
        <button class="chat-header-close" id="chatClose" aria-label="Close chat">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- Messages -->
      <div class="chat-messages" id="chatMessages" aria-live="polite" aria-relevant="additions"></div>

      <!-- Suggestion chips -->
      <div class="chat-suggestions" id="chatSuggestions">
        <button class="chat-chip" data-q="Tell me about the Business Analytics major">BA Major</button>
        <button class="chat-chip" data-q="What certifications do you offer?">Certifications</button>
        <button class="chat-chip" data-q="Tell me about upcoming events">Events</button>
        <button class="chat-chip" data-q="How can my company partner with the institute?">Partner With Us</button>
      </div>

      <div class="chat-divider"></div>

      <!-- Input -->
      <div class="chat-input-bar">
        <textarea
          class="chat-input"
          id="chatInput"
          placeholder="Ask about programs, events, research…"
          rows="1"
          aria-label="Type your message"
          autocomplete="off"
          spellcheck="true"
        ></textarea>
        <button class="chat-send" id="chatSend" aria-label="Send message" disabled>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="rgba(255,255,255,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="chat-footer">Powered by <span>Callais Institute AI</span> · For general guidance only</div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);
  }

  /* ── Time helper ── */
  function timeNow() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  /* ── Add message ── */
  function addMessage(role, html, skipTime = false) {
    const msgs = document.getElementById('chatMessages');
    const wrap = document.createElement('div');
    wrap.className = `chat-msg ${role}`;
    wrap.innerHTML = `
      <div class="chat-bubble">${html}</div>
      ${skipTime ? '' : `<div class="chat-msg-time">${timeNow()}</div>`}
    `;
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
    return wrap;
  }

  /* ── Typing indicator ── */
  function showTyping() {
    const msgs = document.getElementById('chatMessages');
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg bot chat-typing';
    wrap.id = 'chatTyping';
    wrap.innerHTML = `
      <div class="chat-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>`;
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function hideTyping() {
    const t = document.getElementById('chatTyping');
    if (t) t.remove();
  }

  /* ── Send logic ── */
  function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    // Hide chips after first interaction
    const chips = document.getElementById('chatSuggestions');
    if (chips) chips.style.display = 'none';

    addMessage('user', escapeHtml(trimmed));

    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');
    input.value = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;

    // Simulate thinking delay (600–1200ms)
    const delay = 600 + Math.random() * 600;
    showTyping();

    setTimeout(() => {
      hideTyping();
      addMessage('bot', getResponse(trimmed));
    }, delay);
  }

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  /* ── Init ── */
  function init() {
    buildWidget();

    const trigger  = document.getElementById('chatTrigger');
    const win      = document.getElementById('chatWindow');
    const closeBtn = document.getElementById('chatClose');
    const input    = document.getElementById('chatInput');
    const sendBtn  = document.getElementById('chatSend');
    const chips    = document.querySelectorAll('.chat-chip');

    // Welcome message
    setTimeout(() => {
      addMessage('bot',
        'Hello! I\'m the <strong>Callais Institute AI Assistant</strong>. I can help you with programs, events, certifications, research, partnerships, and more. What would you like to know?',
        true
      );
    }, 400);

    // Toggle open/close
    function toggleChat(open) {
      win.classList.toggle('open', open);
      trigger.classList.toggle('active', open);
      trigger.setAttribute('aria-expanded', open);
      if (open) {
        setTimeout(() => input.focus(), 320);
      }
    }

    trigger.addEventListener('click', () => {
      const isOpen = win.classList.contains('open');
      toggleChat(!isOpen);
    });

    closeBtn.addEventListener('click', () => toggleChat(false));

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && win.classList.contains('open')) toggleChat(false);
    });

    // Enable send when there's text
    input.addEventListener('input', () => {
      sendBtn.disabled = !input.value.trim();
      // Auto-resize textarea
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });

    // Send on Enter (Shift+Enter = newline)
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!sendBtn.disabled) sendMessage(input.value);
      }
    });

    sendBtn.addEventListener('click', () => sendMessage(input.value));

    // Suggestion chips
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        sendMessage(chip.dataset.q);
      });
    });
  }

  /* ── Boot ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
