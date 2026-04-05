(function () {
  const $ = id => document.getElementById(id);
  const secs = ['ds0', 'ds1', 'ds2', 'ds3'];

  const botSVG = `<div class="demo-msg-bot-icon"><svg width="8" height="8" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2zm8 7H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2v-8a2 2 0 00-2-2zM9 17H7v-5h2v5zm8 0h-2v-5h2v5zm-4 0h-2v-5h2v5z"/></svg></div>`;

  function setP(p) { $('demoPF').style.width = p + '%'; }
  function cap(t) { $('demoCap').textContent = t; }

  function pulse(ringId, cb) {
    const r = $(ringId);
    r.classList.remove('fire');
    void r.offsetWidth;
    r.classList.add('fire');
    if (cb) setTimeout(cb, 350);
  }

  function setDark(on) {
    $('demoBrowser').className = 'demo-browser ' + (on ? 'dark' : 'light');
    $('demoBar').className = 'demo-bar ' + (on ? 'dark' : 'light');
    $('demoUrl').className = 'demo-url ' + (on ? 'dark' : 'light');
    $('demoContent').className = 'demo-content ' + (on ? 'dark' : 'light');
    $('demoAv').className = 'demo-avatar' + (on ? ' dark' : '');
    $('demoAib').className = 'demo-ai-badge ' + (on ? 'dark' : 'light');
    $('demoGuideBtn').className = 'demo-guide-btn' + (on ? ' dark' : '');
    $('demoLangGrp').className = 'demo-lang-grp' + (on ? ' dark' : '');
    $('demoThemeBtn').className = 'demo-theme-btn' + (on ? ' dark' : '');
    $('demoThemeBtn').textContent = on ? '🌙' : '☀';
    $('demoPName').className = 'demo-p-name' + (on ? ' dark' : '');
    $('demoPRole').className = 'demo-p-role' + (on ? ' dark' : '');
    ['dck1', 'dck2', 'dck3', 'dsk1', 'dsk2', 'dsk3', 'dsk4', 'dsk5'].forEach(id => {
      $(id).className = 'demo-chip ' + (on ? 'dark' : 'light');
    });
    ['dsh0', 'dsh1', 'dsh2', 'dsh3'].forEach(id => {
      $(id).className = 'demo-sec-head ' + (on ? 'dark' : 'light');
    });
    ['dl0', 'dl1', 'dl2', 'dl3'].forEach(id => {
      $(id).className = 'demo-sec-label ' + (on ? 'dark' : 'light');
    });
    document.querySelectorAll('#demo .demo-exp-card').forEach(el => {
      el.className = 'demo-exp-card ' + (on ? 'dark' : 'light');
    });
    $('demoAbout').className = 'demo-exp-card ' + (on ? 'dark' : 'light');
  }

  function setLang(en) {
    $('dl0').textContent = en ? 'About' : 'Sobre mí';
    $('dl1').textContent = en ? 'Experience' : 'Experiencia';
    $('dl2').textContent = en ? 'Skills' : 'Habilidades';
    $('dl3').textContent = en ? 'Contact' : 'Contacto';
    $('demoPRole').textContent = en ? 'Software Developer · Buenos Aires' : 'Desarrollador · Buenos Aires';
    $('demoAbout').textContent = en ? 'Software developer with 5+ years building AI-powered web solutions.' : 'Desarrollador con 5+ años construyendo soluciones web con IA.';
    $('demoEs').className = 'demo-lang-btn ' + (en ? 'inactive' : 'active');
    $('demoEn').className = 'demo-lang-btn ' + (en ? 'active' : 'inactive');
  }

  function addMsg(role, text, cb) {
    const msgs = $('demoChatMsgs');
    if (role === 'typing') {
      const t = document.createElement('div');
      t.className = 'demo-typing'; t.id = 'demoTyping';
      t.innerHTML = '<span></span><span></span><span></span>';
      msgs.appendChild(t);
      if (cb) setTimeout(cb, 1300);
      return;
    }
    const old = $('demoTyping'); if (old) old.remove();
    const d = document.createElement('div');
    d.className = 'demo-msg ' + role;
    if (role === 'ai') d.innerHTML = botSVG + '<span>' + text + '</span>';
    else d.textContent = text;
    msgs.appendChild(d);
    if (cb) setTimeout(cb, 400);
  }

  function setGuide(focusId) {
    secs.forEach(id => {
      $(id).classList.remove('guide-focus', 'guide-blur');
      if (focusId) $(id).classList.add(id === focusId ? 'guide-focus' : 'guide-blur');
    });
  }

  function resetAll() {
    setDark(false); setLang(false);
    ['demoPR', 'ds0', 'ds1', 'ds2', 'ds3'].forEach(id => $(id).classList.remove('show'));
    $('demoChatPanel').classList.remove('open');
    $('demoChatMsgs').innerHTML = '';
    $('demoCtaScreen').classList.remove('show');
    $('demoGuideBtn').classList.remove('guide-active');
    setGuide(null);
  }

  function run() {
    resetAll(); setP(0); cap('');

    // Escena 1 — CV se construye de a poco
    cap('CV Profile — your digital identity');
    setP(5);
    setTimeout(() => $('demoPR').classList.add('show'), 400);
    setTimeout(() => $('ds0').classList.add('show'), 900);
    setTimeout(() => $('ds1').classList.add('show'), 1500);
    setTimeout(() => $('ds2').classList.add('show'), 2000);
    setTimeout(() => $('ds3').classList.add('show'), 2500);

    // Escena 2 — Dark mode
    setTimeout(() => {
      cap('Switch to dark mode instantly');
      setP(28);
      pulse('demoTrTheme', () => setDark(true));
    }, 4000);

    // Escena 2b — Idioma
    setTimeout(() => {
      cap('Toggle language — ES ↔ EN');
      pulse('demoTrLang', () => setLang(true));
    }, 5800);

    // Escena 2c — Volver a light + ES
    setTimeout(() => {
      pulse('demoTrTheme', () => setDark(false));
      setTimeout(() => pulse('demoTrLang', () => setLang(false)), 700);
    }, 7400);

    // Escena 3 — AI Chat
    setTimeout(() => {
      cap('Ask Juan anything — AI answers for you');
      setP(52);
      $('demoChatMsgs').innerHTML = '';
      pulse('demoTrFab', () => {
        $('demoChatPanel').classList.add('open');
        setTimeout(() => addMsg('ai', 'Hi! How can I help you today?', () => {
          setTimeout(() => addMsg('user', 'Is Juan a good fit for a DevOps role?', () => {
            setTimeout(() => addMsg('typing', '', () => {
              addMsg('ai', 'Yes! 5+ years in cloud infra and CI/CD at MercadoLibre. Strong DevOps fit.');
            }), 500);
          }), 1000);
        }), 500);
      });
    }, 9200);

    // Escena 4 — AI Guide
    setTimeout(() => {
      cap('AI Guide walks recruiters through your CV');
      setP(75);
      $('demoChatPanel').classList.remove('open');
      pulse('demoTrGuide', () => {
        $('demoGuideBtn').classList.add('guide-active');
        setTimeout(() => setGuide('ds0'), 200);
        setTimeout(() => setGuide('ds1'), 1800);
        setTimeout(() => setGuide('ds2'), 3400);
        setTimeout(() => setGuide('ds3'), 5000);
        setTimeout(() => { setGuide(null); $('demoGuideBtn').classList.remove('guide-active'); }, 6400);
      });
    }, 15000);

    // Escena 5 — CTA
    setTimeout(() => {
      cap('"More than a CV. Your professional identity."');
      setP(100);
      $('demoCtaScreen').classList.add('show');
    }, 22500);

    // Loop
    setTimeout(run, 26500);
  }

  // Arrancar solo cuando la sección es visible
  const section = document.getElementById('demo');
  if (!section) return;

  let started = false;
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      observer.disconnect();
      setTimeout(run, 400);
    }
  }, { threshold: 0.3 });
  observer.observe(section);

})();
