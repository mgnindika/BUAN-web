/* ============================================================
   PETER CALLAIS INSTITUTE — DATA STORE
   data.js — all dynamic content as structured arrays
   ============================================================ */

const CIDATA = {

  /* ──────────────────────────────────────────────
     HOMEPAGE EVENTS  (rendered into #events-grid)
  ────────────────────────────────────────────── */
  homepageEvents: [
    {
      type:           'Competition',
      title:          'Data Visualization Competition',
      dateDay:        '15',
      dateMonth:      'MAY',
      ongoing:        false,
      location:       'Miller Hall',
      detailIcon:     '🏆',
      detail:         '$500 First Prize',
      description:    'Open to all Loyola students. Tell a story with data, present your visual, and compete for cash prizes and recognition. Register by May 10.',
      link:           'pages/students/dvc.html',
      btnText:        'Learn More &amp; Register',
      btnClass:       'btn-primary',
      headerGradient: 'linear-gradient(135deg,var(--maroon-dark),var(--maroon))',
      pillStyle:      '',
      featured:       true
    },
    {
      type:           'Networking',
      title:          'BAA Connect',
      dateDay:        '15',
      dateMonth:      'MAY',
      ongoing:        false,
      location:       'Miller Hall Atrium',
      detailIcon:     '🎟️',
      detail:         'Free Admission',
      description:    'Connect with Business Analytics Association peers, faculty, and industry professionals at our flagship networking event.',
      link:           'pages/about/contact.html',
      btnText:        'RSVP Now',
      btnClass:       'btn-outline',
      headerGradient: 'linear-gradient(135deg,#1a2e45,var(--navy))',
      pillStyle:      'background:rgba(200,169,81,0.2);color:var(--gold);border-color:rgba(200,169,81,0.3);',
      featured:       false
    },
    {
      type:           'Lecture Series',
      title:          'Analytics Guest Lecture Series',
      dateDay:        '—',
      dateMonth:      'ONGOING',
      ongoing:        true,
      location:       'Hybrid',
      detailIcon:     '📅',
      detail:         'Ongoing Series',
      description:    'Industry leaders share real-world insights with students and faculty. Ongoing Fall &amp; Spring — hybrid format.',
      link:           'pages/students/agl-series.html',
      btnText:        'View Schedule',
      btnClass:       'btn-outline',
      headerGradient: 'linear-gradient(135deg,#2c3e50,#1a2535)',
      pillStyle:      'background:rgba(34,197,94,0.15);color:#86efac;border-color:rgba(34,197,94,0.25);',
      featured:       false
    }
  ]
};

// Export for use
if (typeof module !== 'undefined') module.exports = CIDATA;
