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
})();

function startChat1() {
  var box = document.getElementById('vp1chat');
  if (!box) return;
  var convos = [
    { q: 'Is Gonzalo a good fit for Sales?', a: 'Yes! 5+ years in B2B and LATAM expansion.' },
    { q: "What's his biggest strength?",     a: 'Strategic client management and cross-functional leadership.' }
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

function startChat2() {
  var box = document.getElementById('vp2chat');
  if (!box) return;
  var convos = [
    { q: 'Is Manuel a good fit for trading roles?', a: 'Yes! Strong background in financial markets and international client management.' },
    { q: "What's his academic background?",         a: 'Master en Finanzas with hands-on experience in cross-asset sales at StoneX.' }
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
  startChat1();
  startChat2();
});
