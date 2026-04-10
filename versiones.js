(function () {
  // ── i18n: swap data-en / data-es dentro de #versiones ──
  function applyLang(lang) {
    document.querySelectorAll('#versiones [data-en]').forEach(el => {
      el.textContent = lang === 'en' ? el.dataset.en : el.dataset.es;
    });
  }

  // Leer idioma actual (mismo localStorage que script.js)
  applyLang(localStorage.getItem('iv-lang') || 'es');

  // Escuchar cambios en el toggle existente
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', e => {
      const btn = e.target.closest('.lang-btn');
      if (btn) applyLang(btn.dataset.lang);
    });
  }

  // ── Animación de entrada con IntersectionObserver ──
  const cards = document.querySelectorAll('.ver-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((card, i) => {
    card.style.transitionDelay = (i * 0.12) + 's';
    observer.observe(card);
  });

  // ── Card 3 profile rotation ──
  const card3Inner = document.querySelector('[data-card="3"] .preview-inner');
  if (card3Inner) {
    const badge3 = document.getElementById('ver3Badge');
    const chips3 = document.getElementById('ver3Chips');
    const profiles = [
      { badge: '✦ Startup',   bg: '#6366f1', chips: ['React', 'AWS', 'Docker'],       chipBg: '#ede9fe', chipColor: '#5b21b6', lineBg: '#c4b5fd' },
      { badge: '◆ Corporate', bg: '#1a2f6e', chips: ['Strategy', 'Finance', 'PMO'],   chipBg: '#edf0f7', chipColor: '#1a2f6e', lineBg: '#bfdbfe' },
      { badge: '● Creative',  bg: '#0f766e', chips: ['Branding', 'UX', 'Motion'],     chipBg: '#ccfbf1', chipColor: '#0f766e', lineBg: '#99f6e4' }
    ];
    let p3idx = 0;

    function applyProfile3(p) {
      badge3.textContent      = p.badge;
      badge3.style.background = p.bg;
      chips3.querySelectorAll('span').forEach((s, i) => {
        s.textContent      = p.chips[i];
        s.style.background = p.chipBg;
        s.style.color      = p.chipColor;
      });
      card3Inner.querySelectorAll('.vp-line').forEach(l => {
        l.style.background = p.lineBg;
      });
    }

    function nextProfile3() {
      card3Inner.style.opacity = '0';
      setTimeout(() => {
        p3idx = (p3idx + 1) % profiles.length;
        applyProfile3(profiles[p3idx]);
        card3Inner.style.opacity = '1';
      }, 300);
    }

    card3Inner.style.transition = 'opacity 0.3s ease';
    applyProfile3(profiles[0]);
    setInterval(nextProfile3, 2500);
  }
})();

function startChat2() {
  var box = document.getElementById('vp2chat');
  if (!box) return;
  var convos = [
    { q: 'Is Juan fit for DevOps?',     a: 'Yes! 5+ years cloud infra.' },
    { q: "What's his top achievement?", a: 'Grew product 3x in 6 months.' }
  ];
  var i = 0;

  function showGreeting(cb) {
    box.innerHTML = '';
    var g = document.createElement('p');
    g.className = 'vp-msg bot';
    g.textContent = 'Hi! How can I help you?';
    box.appendChild(g);
    setTimeout(cb, 1500);
  }

  function showConvo() {
    box.innerHTML = '';
    var q = document.createElement('p');
    q.className = 'vp-msg human';
    q.textContent = convos[i].q;
    box.appendChild(q);
    setTimeout(function() {
      var a = document.createElement('p');
      a.className = 'vp-msg bot';
      a.textContent = convos[i].a;
      box.appendChild(a);
      i = (i + 1) % convos.length;
      setTimeout(function() {
        if (i === 0) {
          showGreeting(showConvo);
        } else {
          showConvo();
        }
      }, 2500);
    }, 1200);
  }

  showGreeting(showConvo);
}

document.addEventListener('DOMContentLoaded', function() {
  startChat2();
});
