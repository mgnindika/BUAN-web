/* ============================================================
   PETER CALLAIS INSTITUTE — AI ASSISTANT CHAT WIDGET
   chat.js
   ============================================================ */

'use strict';

(function () {

  /* ── Root path (fixes links on sub-pages) ── */
  const R = window.ROOT || '';

  /* ── Knowledge base ── */
  const KB = [
    {
      keys: ['program', 'major', 'degree', 'buan', 'business analytics', 'study', 'courses', 'curriculum', 'classes'],
      answer: `The <strong>B.S. in Business Analytics</strong> at Loyola is a rigorous 4-year program covering statistics, machine learning, data visualization, and ethics. Students can also double major with Finance, Marketing, or Computer Science. <a href="${R}pages/students/major.html" style="color:#C8A951;">View the full curriculum →</a>`
    },
    {
      keys: ['dvc', 'data visualization competition', 'compete', 'prize', 'cash award', 'competition'],
      answer: `The <strong>Data Visualization Competition (DVC)</strong> is open to all Loyola students. Teams of up to 4 present data stories to a panel of judges for prizes up to <strong>$500</strong>. It runs every Spring semester. <a href="${R}pages/students/dvc.html" style="color:#C8A951;">Register here →</a>`
    },
    {
      keys: ['certification', 'certificate', 'google', 'tableau', 'power bi', 'aws', 'sas', 'ibm', 'credential'],
      answer: `We support <strong>8 industry certifications</strong> including Google Data Analytics, Tableau Desktop Specialist, Power BI PL-300, AWS Cloud Practitioner, and SAS Base Programmer. Many are free or discounted for enrolled students. <a href="${R}pages/students/certifications.html" style="color:#C8A951;">See all certifications →</a>`
    },
    {
      keys: ['event', 'events', 'upcoming', 'calendar', 'schedule', 'agl', 'lecture', 'guest speaker'],
      answer: `Upcoming events include the <strong>Analytics Guest Lecture (AGL) Series</strong> every Fall &amp; Spring, the <strong>Data Visualization Competition</strong> in March, and <strong>BAA Connect</strong> in April. <a href="${R}pages/students/agl-series.html" style="color:#C8A951;">View the AGL schedule →</a>`
    },
    {
      keys: ['impact day', 'impact', 'showcase', 'annual showcase'],
      answer: `<strong>Impact Day</strong> is our annual showcase where students, researchers, and industry partners present analytics projects. It runs 8:30 AM – 5:00 PM and is open to the public. <a href="${R}pages/students/impact-day.html" style="color:#C8A951;">Learn more →</a>`
    },
    {
      keys: ['partner', 'partnership', 'industry', 'company', 'collaborate', 'sponsor', 'corporate'],
      answer: `The Institute offers <strong>four partnership tiers</strong>: Corporate Partnership, Research Partnership, Training &amp; Upskilling, and Event Sponsorship. Partners gain access to talent pipelines, research collaboration, and custom training. <a href="${R}pages/industry/ai-for-industry.html" style="color:#C8A951;">Explore partnerships →</a>`
    },
    {
      keys: ['impacts lab', 'research lab', 'statistical consulting', 'consulting', 'applied research'],
      answer: `The <strong>Impacts Lab</strong> provides applied research, free statistical consulting for nonprofits, and a curated open Databank. Faculty and GRAs work on real-world problems using cutting-edge methods. <a href="${R}pages/impacts-lab/index.html" style="color:#C8A951;">Visit the Lab →</a>`
    },
    {
      keys: ['databank', 'dataset', 'datasets', 'download', 'open data', 'louisiana data'],
      answer: `Our <strong>Databank</strong> hosts 8+ curated datasets covering Louisiana economics, health, crime, education, and environment — all free to download. Perfect for student projects and academic research. <a href="${R}pages/databank/index.html" style="color:#C8A951;">Browse the Databank →</a>`
    },
    {
      keys: ['startup', 'entrepreneur', 'incubator', 'venture', 'founder', 'tech startup'],
      answer: `The <strong>Tech Startup Program</strong> helps early-stage founders leverage analytics and AI to build data-driven products. We offer mentorship, workspace, and connections to the New Orleans startup ecosystem. <a href="${R}pages/startup/index.html" style="color:#C8A951;">Learn more →</a>`
    },
    {
      keys: ['workshop', 'training', 'python', 'excel', 'sql', 'skill building', 'hands-on', 'workshops'],
      answer: `We run <strong>50+ workshops per year</strong> for students, faculty, and professionals. Topics include Python, SQL, Tableau, Power BI, and AI fundamentals. Most are free for Loyola students. <a href="${R}pages/students/training-workshops.html" style="color:#C8A951;">See workshop schedule →</a>`
    },
    {
      keys: ['contact', 'email', 'phone', 'address', 'office', 'location', 'miller hall', 'reach out'],
      answer: `Reach us at <strong>Miller Hall, Room 314</strong>, Loyola University New Orleans. Email: <strong>analytics@loyno.edu</strong> · Phone: <strong>(504) 865-3000</strong>. Hours: Mon–Fri, 9 AM – 5 PM. <a href="${R}pages/about/contact.html" style="color:#C8A951;">Contact form →</a>`
    },
    {
      keys: ['director', 'dr indika', 'dr. indika', 'nuwan', 'faculty', 'professor', 'leadership', 'founding director'],
      answer: `<strong>Dr. Nuwan Indika, Ph.D.</strong> is the Founding Director of the Callais Institute. A J. William Fulbright Scholar and Chase Distinguished Professor, his research spans Business Analytics, AI/ML, and Econometrics. <a href="${R}pages/about/leadership.html" style="color:#C8A951;">Meet our team →</a>`
    },
    {
      keys: ['peter callais', 'namesake', 'history', 'founded', 'callais family', 'gift', 'who is callais'],
      answer: `The institute is named after <strong>Peter Callais</strong>, CEO of Abdon Callais Offshore and Louisiana's Small Business Person of the Year. The Callais Family established the institute in 2025. <a href="${R}pages/about/who-we-are.html" style="color:#C8A951;">Read his story →</a>`
    },
    {
      keys: ['jesuit', 'mission', 'values', 'vision', 'ethics', 'cura personalis', 'loyola values'],
      answer: `Our mission is guided by <strong>Jesuit values</strong> — cura personalis, justice, and service to the common good. We believe analytics should be ethical, inclusive, and community-centered. <a href="${R}pages/about/mission.html" style="color:#C8A951;">Read our mission →</a>`
    },
    {
      keys: ['job', 'career', 'hire', 'hiring', 'position', 'salary', 'internship', 'placement', 'employment'],
      answer: `Business Analytics graduates see <strong>25% job growth</strong> with an <strong>$82K median starting salary</strong>. We track all job market candidates and connect students directly with hiring partners. <a href="${R}pages/news/job-market-candidates.html" style="color:#C8A951;">View job market candidates →</a>`
    },
    {
      keys: ['newsletter', 'news', 'announcement', 'news stories', 'latest updates'],
      answer: `Stay current with the <strong>Callais Institute Newsletter</strong> — published monthly with research highlights, student stories, and upcoming events. <a href="${R}pages/news/newsletters.html" style="color:#C8A951;">Read our newsletters →</a>`
    },
    {
      keys: ['aai4hc', 'pre-college', 'high school', 'precollege', 'youth program', 'teen', 'summer camp'],
      answer: `The <strong>AAI4HC Pre-College Program</strong> introduces high school students to analytics and AI through hands-on workshops, building early interest in data science. <a href="${R}pages/students/aai4hc.html" style="color:#C8A951;">Learn more →</a>`
    },
    {
      keys: ['first year', 'freshman', 'seminar', 'buan 1010', 'orientation', 'new student'],
      answer: `The <strong>First Year Seminar (BUAN 1010)</strong> is a required 1-credit pass/fail course for incoming BA majors each Fall. Includes guest speakers, a team analytics challenge, and peer mentorship. <a href="${R}pages/students/first-year-seminar.html" style="color:#C8A951;">Learn more →</a>`
    },
    {
      keys: ['dean', 'college of business', 'cob', 'business school', 'aacsb college'],
      answer: `The Peter Callais Institute operates within Loyola's <strong>AACSB-accredited College of Business</strong> — one of the most innovative business schools in the Gulf South. We work closely with COB faculty and leadership to integrate analytics across all business disciplines.`
    },
    {
      keys: ['funding', 'gift', 'donation', 'endowment', 'established', 'callais gift'],
      answer: `The Institute was established in <strong>2025</strong> through a transformational gift from the <strong>Callais Family</strong>, honoring the memory of Peter Callais — entrepreneur, community leader, and visionary in the offshore industry. <a href="${R}pages/about/who-we-are.html" style="color:#C8A951;">Read his story →</a>`
    },
    {
      keys: ['accreditation', 'aacsb', 'accredited', 'ranked', 'top business school'],
      answer: `Loyola's College of Business is fully <strong>AACSB accredited</strong> — placing it among the <strong>top 6%</strong> of business schools worldwide. The Business Analytics program meets the highest standards for curriculum, faculty quality, and student outcomes.`
    },
    {
      keys: ['jobs', 'careers', 'employment', 'salary', 'median salary', 'starting salary', 'job market', 'after graduation'],
      answer: `Business Analytics graduates are among the most in-demand professionals today. Our graduates go on to roles as <strong>Data Analysts, Business Intelligence Analysts, Analytics Consultants, and Data Scientists</strong> — with a <strong>median starting salary of $82,000</strong>. <a href="${R}pages/news/job-market-candidates.html" style="color:#C8A951;">View job market candidates →</a>`
    },
    {
      keys: ['research', 'faculty research', 'academic research', 'publications', 'machine learning research', 'econometrics'],
      answer: `Institute faculty are active researchers in <strong>machine learning, econometrics, AI applications in business, and data-driven policy</strong>. Dr. Nuwan Indika, our Founding Director, is a J. William Fulbright Scholar with publications in leading academic journals. <a href="${R}pages/about/leadership.html" style="color:#C8A951;">Meet our faculty →</a>`
    },
    {
      keys: ['visit', 'miller hall', 'where are you', 'pciba email', 'how to contact', 'get in touch'],
      answer: `We're located in <strong>314 Miller Hall</strong> at Loyola University New Orleans, 6363 St. Charles Ave. You can reach us at <strong>pciba@loyno.edu</strong> or <strong>(504) 865-3000</strong>. We'd love to connect! <a href="${R}pages/about/contact.html" style="color:#C8A951;">Contact form →</a>`
    },
    {
      keys: ['apply', 'admission', 'how to join', 'enroll', 'declare major', 'transfer', 'how do i sign up'],
      answer: `Students can declare Business Analytics as a <strong>primary major or double major</strong> through the College of Business. No separate application required — just speak with your academic advisor. Transfer students and incoming freshmen are both welcome. <a href="${R}pages/students/major.html" style="color:#C8A951;">Learn about the major →</a>`
    },
    {
      keys: ['corporate partnership', 'industry partner', 'sponsor us', 'goldman', 'jp morgan', 'recruit', 'hire students', 'executive education'],
      answer: `We partner with organizations across Louisiana and beyond — from <strong>Goldman Sachs and J.P. Morgan</strong> to local nonprofits and startups. Partnership opportunities include research collaborations, student recruiting, sponsored projects, and executive education. <a href="${R}pages/industry/ai-for-industry.html" style="color:#C8A951;">Explore partnerships →</a>`
    },
  ];

  /* ── Special intent patterns ── */
  const GREETINGS  = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings', 'sup', 'what\'s up'];
  const THANKS     = ['thank you', 'thanks', 'thank u', 'appreciate it', 'that helps', 'helpful', 'perfect', 'awesome', 'great answer'];
  const HELP_WORDS = ['help', 'what can you do', 'what do you know', 'topics', 'options', 'menu', 'list everything', 'what can you tell me'];

  const FALLBACKS = [
    `I don't have a specific answer for that, but our team can help. <a href="${R}pages/about/contact.html" style="color:#C8A951;">Contact us →</a>`,
    `Great question — our staff will give you a definitive answer. <a href="${R}pages/about/contact.html" style="color:#C8A951;">Reach out here →</a>`,
    `I'm not sure about that one. Try our <a href="${R}pages/about/mission.html" style="color:#C8A951;">About section</a> or <a href="${R}pages/students/major.html" style="color:#C8A951;">Students page</a> for more.`,
  ];

  let fallbackIndex = 0;
  let chatIsOpen    = false;
  let unreadCount   = 0;

  /* ── Response engine ── */
  function getResponse(query) {
    const q = query.toLowerCase().trim();

    // Greetings
    if (GREETINGS.some(g => q === g || q.startsWith(g + ' ') || q.endsWith(' ' + g))) {
      return 'Hello! I\'m here to help with anything about the <strong>Callais Institute</strong>. Try asking about programs, events, certifications, research, partnerships, or careers!';
    }

    // Thanks
    if (THANKS.some(t => q.includes(t))) {
      return 'You\'re welcome! Is there anything else I can help you with? Feel free to ask about programs, events, or anything related to the Institute.';
    }

    // Help / topics list
    if (HELP_WORDS.some(h => q.includes(h))) {
      return `Here's what I can help with:<br><br>
        📚 <strong>Programs</strong> — BA Major, First Year Seminar<br>
        🏆 <strong>Events</strong> — AGL Series, DVC, Impact Day, BAA Connect<br>
        🎓 <strong>Certifications</strong> — Google, Tableau, AWS, Power BI &amp; more<br>
        🔬 <strong>Research</strong> — Impacts Lab, Databank, Startup Program<br>
        🤝 <strong>Partnerships</strong> — Corporate &amp; Research tiers<br>
        💼 <strong>Careers</strong> — Jobs, salaries, hiring partners<br>
        📬 <strong>Contact</strong> — Office hours &amp; location<br><br>
        Just type your question!`;
    }

    // Score each KB entry — more keyword matches = higher confidence
    let bestScore  = 0;
    let bestAnswer = null;
    for (const entry of KB) {
      const score = entry.keys.filter(k => q.includes(k)).length;
      if (score > bestScore) {
        bestScore  = score;
        bestAnswer = entry.answer;
      }
    }
    if (bestAnswer) return bestAnswer;

    // Fallback (rotates so repeat questions get different suggestions)
    const resp = FALLBACKS[fallbackIndex % FALLBACKS.length];
    fallbackIndex++;
    return resp;
  }

  /* ── Build widget HTML ── */
  function buildWidget() {
    const html = `
    <div class="chat-trigger-wrap" id="chatTriggerWrap">
      <span class="chat-trigger-label" id="chatLabel">AI Assistant</span>
      <button class="chat-trigger" id="chatTrigger" aria-label="Open AI Assistant" aria-expanded="false">

        <!-- Unread count badge -->
        <span class="chat-notif-badge" id="chatBadge" aria-hidden="true"></span>

        <!-- Robot avatar (closed state) -->
        <span class="icon-open" aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
            <!-- Face -->
            <circle cx="32" cy="35" r="20" fill="rgba(255,255,255,0.1)" stroke="rgba(200,169,81,0.55)" stroke-width="1.5"/>
            <!-- Antenna stem -->
            <rect x="29.5" y="12" width="5" height="8" rx="2.5" fill="rgba(200,169,81,0.75)"/>
            <!-- Antenna ball -->
            <circle cx="32" cy="11" r="4" fill="#C8A951"/>
            <circle cx="32" cy="11" r="2" fill="rgba(255,255,255,0.35)"/>
            <!-- Left eye -->
            <rect x="16" y="28" width="12" height="9" rx="3" fill="rgba(200,169,81,0.9)"/>
            <rect x="19.5" y="30.5" width="5" height="4" rx="2" fill="#0e1520"/>
            <circle cx="21" cy="32" r="1" fill="rgba(255,255,255,0.6)"/>
            <!-- Right eye -->
            <rect x="36" y="28" width="12" height="9" rx="3" fill="rgba(200,169,81,0.9)"/>
            <rect x="39.5" y="30.5" width="5" height="4" rx="2" fill="#0e1520"/>
            <circle cx="41" cy="32" r="1" fill="rgba(255,255,255,0.6)"/>
            <!-- Smile -->
            <path d="M22 43 Q32 51 42 43" stroke="rgba(200,169,81,0.9)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <!-- Ear left -->
            <rect x="9"  y="31" width="5" height="10" rx="2.5" fill="rgba(255,255,255,0.08)" stroke="rgba(200,169,81,0.35)" stroke-width="1"/>
            <!-- Ear right -->
            <rect x="50" y="31" width="5" height="10" rx="2.5" fill="rgba(255,255,255,0.08)" stroke="rgba(200,169,81,0.35)" stroke-width="1"/>
          </svg>
        </span>

        <!-- Close X (open state) -->
        <span class="icon-close" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="rgba(255,255,255,0.9)" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </span>
      </button>
    </div>

    <div class="chat-window" id="chatWindow" role="dialog" aria-label="Callais AI Assistant" aria-modal="true">

      <!-- Header -->
      <div class="chat-header">
        <div class="chat-header-avatar">
          <svg width="26" height="26" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="35" r="20" fill="rgba(255,255,255,0.06)" stroke="rgba(200,169,81,0.5)" stroke-width="1.5"/>
            <rect x="29.5" y="12" width="5" height="8" rx="2.5" fill="rgba(200,169,81,0.75)"/>
            <circle cx="32" cy="11" r="4" fill="#C8A951"/>
            <circle cx="32" cy="11" r="2" fill="rgba(255,255,255,0.35)"/>
            <rect x="16" y="28" width="12" height="9" rx="3" fill="rgba(200,169,81,0.9)"/>
            <rect x="19.5" y="30.5" width="5" height="4" rx="2" fill="#1a0a10"/>
            <circle cx="21" cy="32" r="1" fill="rgba(255,255,255,0.5)"/>
            <rect x="36" y="28" width="12" height="9" rx="3" fill="rgba(200,169,81,0.9)"/>
            <rect x="39.5" y="30.5" width="5" height="4" rx="2" fill="#1a0a10"/>
            <circle cx="41" cy="32" r="1" fill="rgba(255,255,255,0.5)"/>
            <path d="M22 43 Q32 51 42 43" stroke="rgba(200,169,81,0.9)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          </svg>
        </div>
        <div class="chat-header-info">
          <div class="chat-header-title">Callais AI Assistant</div>
          <div class="chat-header-sub">Ask anything about programs, events, or analytics</div>
        </div>
        <div class="chat-status-dot" title="Online" aria-label="Assistant online"></div>
        <button class="chat-header-btn" id="chatClear" aria-label="New conversation" title="Start new conversation">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </button>
        <button class="chat-header-btn" id="chatClose" aria-label="Close chat">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
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
        <button class="chat-chip" data-q="What topics can you help me with?">Help</button>
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

  /* ── Helpers ── */
  function timeNow() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function updateBadge(n) {
    const badge = document.getElementById('chatBadge');
    if (!badge) return;
    if (n > 0) {
      badge.textContent = n > 9 ? '9+' : n;
      badge.classList.add('visible');
    } else {
      badge.classList.remove('visible');
    }
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

  function addBotMessage(html, skipTime = false) {
    addMessage('bot', html, skipTime);
    if (!chatIsOpen) {
      unreadCount++;
      updateBadge(unreadCount);
    }
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

    const chips   = document.getElementById('chatSuggestions');
    const input   = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');

    if (chips) chips.style.display = 'none';

    addMessage('user', escapeHtml(trimmed));
    input.value        = '';
    input.style.height = 'auto';
    sendBtn.disabled   = true;

    const delay = 700 + Math.random() * 700;
    showTyping();

    setTimeout(() => {
      hideTyping();
      addBotMessage(getResponse(trimmed));
    }, delay);
  }

  /* ── Clear / new conversation ── */
  function clearChat() {
    document.getElementById('chatMessages').innerHTML = '';
    const chips = document.getElementById('chatSuggestions');
    if (chips) chips.style.display = '';
    setTimeout(() => {
      addMessage('bot',
        'New conversation started! Ask me about programs, events, certifications, research, partnerships, or careers.',
        true
      );
    }, 150);
  }

  /* ── Toggle open / close ── */
  function toggleChat(open) {
    chatIsOpen = open;
    const win     = document.getElementById('chatWindow');
    const trigger = document.getElementById('chatTrigger');
    const label   = document.getElementById('chatLabel');
    const input   = document.getElementById('chatInput');

    win.classList.toggle('open', open);
    trigger.classList.toggle('active', open);
    trigger.setAttribute('aria-expanded', String(open));

    if (label) label.style.opacity = open ? '0' : '';

    if (open) {
      unreadCount = 0;
      updateBadge(0);
      setTimeout(() => input.focus(), 320);
    }
  }

  /* ── Init ── */
  function init() {
    buildWidget();

    const trigger  = document.getElementById('chatTrigger');
    const closeBtn = document.getElementById('chatClose');
    const clearBtn = document.getElementById('chatClear');
    const input    = document.getElementById('chatInput');
    const sendBtn  = document.getElementById('chatSend');

    // Welcome message
    setTimeout(() => {
      addMessage('bot',
        'Hello! I\'m the <strong>Callais Institute AI Assistant</strong>. Ask me about programs, events, certifications, research, partnerships, careers, and more. What can I help you with?',
        true
      );
    }, 500);

    trigger.addEventListener('click', () => toggleChat(!chatIsOpen));
    closeBtn.addEventListener('click', () => toggleChat(false));
    clearBtn.addEventListener('click', clearChat);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && chatIsOpen) toggleChat(false);
    });

    input.addEventListener('input', () => {
      sendBtn.disabled   = !input.value.trim();
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!sendBtn.disabled) sendMessage(input.value);
      }
    });

    sendBtn.addEventListener('click', () => sendMessage(input.value));

    document.querySelectorAll('.chat-chip').forEach(chip => {
      chip.addEventListener('click', () => sendMessage(chip.dataset.q));
    });
  }

  /* ── Boot ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
