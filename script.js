// ============================================
// NAVBAR — scroll shadow + hamburger toggle
// ============================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});


// ============================================
// SCROLL ANIMATIONS — IntersectionObserver
// ============================================
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

// Hero elements start visible immediately (above the fold)
document.querySelectorAll('.hero .fade-in').forEach(el => {
  setTimeout(() => el.classList.add('visible'), 100);
});

// All other sections use IntersectionObserver
fadeEls.forEach(el => {
  if (!el.closest('.hero')) {
    observer.observe(el);
  }
});


// ============================================
// LANGUAGE TOGGLE — i18n
// ============================================
const translations = {
  es: {
    'nav.que-es': 'Qué es',
    'nav.para-quien': 'Para quién',
    'nav.casos': 'Casos',
    'nav.cta': 'Quiero el mío',

    'hero.badge': 'Potenciado por Inteligencia Artificial',
    'hero.title': 'Your career reimagined',
    'hero.subtitle': 'Tu perfil no debería ser un documento. Debería ser una experiencia. Creamos CVs interactivos con IA que presentan tu carrera de una manera que los reclutadores no pueden ignorar.',
    'hero.btn-primary': 'Quiero mi CV interactivo',
    'hero.btn-outline': 'Ver ejemplos',
    'hero.scroll': 'Explorar',

    'que-es.label': '✦ IMPULSADO POR IA',
    'que-es.title': 'La nueva forma de presentarte ante el mundo.<br /><em>Tu historia. Tu voz. Tu IA.</em>',
    'que-es.subtitle': 'Interactive Vitae cuenta tu historia, aprende de vos y actúa como tu asistente profesional automáticamente. Una herramienta impulsada por IA que te posiciona ante quienes quieren conocerte.',
    'que-es.card1.title': 'Diseño a medida',
    'que-es.card1.body': 'Cada CV se diseña según tu identidad profesional, industria y objetivos.',
    'que-es.card2.title': 'IA integrada',
    'que-es.card2.body': 'Generamos y optimizamos tu contenido con inteligencia artificial.',
    'que-es.card3.title': 'Interactivo',
    'que-es.card3.body': 'Links, proyectos, métricas y logros presentados de forma visual.',
    'que-es.card4.title': 'Siempre online',
    'que-es.card4.body': 'Compartí un link — sin PDFs adjuntos que nadie va a abrir.',

    'buscamos.label': 'PARA QUIÉN ES',
    'buscamos.title': 'El CV evolucionó. ¿Vos también?',
    'buscamos.subtitle': 'Somos el partner ideal para digitalizar tu perfil, automatizar tu presencia y mostrarte exactamente como sos. Sin límites de un PDF. Sin plantillas genéricas.',
    'buscamos.item1.title': 'Tu experiencia, expresada por IA',
    'buscamos.item1.body': 'Un AI Agent cuenta tu historia mejor que cualquier documento',
    'buscamos.item2.title': 'Diferenciáte del resto',
    'buscamos.item2.body': 'Destacá tu perfil en tu industria y salí de la masa',
    'buscamos.item3.title': 'Tecnología de punta',
    'buscamos.item3.body': 'Usá IA hoy, no cuando sea "el futuro"',
    'buscamos.item4.title': 'Siempre en movimiento',
    'buscamos.item4.body': 'Tu perfil online evoluciona con vos',
    'buscamos.item5.title': 'Tu historia, bien contada',
    'buscamos.item5.body': 'Logros y proyectos que un PDF nunca podría mostrar',
    'buscamos.item6.title': '100% único y tuyo',
    'buscamos.item6.body': 'Construido desde cero. Sin templates. Sin copias',

    'casos.label': 'CASOS DE ÉXITO',
    'casos.title': 'Los que ya dieron el paso',
    'casos.subtitle': 'Cada perfil, construido a medida. Cada historia, contada con IA.',
    'casos.card1.role': 'Business Lead & Head of Sales',
    'casos.card2.role': 'Entrepreneur & Growth Leader',
    'casos.card3.name': 'Próximamente',
    'casos.card3.role': 'Tu perfil podría estar acá',

    'contacto.label': 'Contacto',
    'contacto.title': 'Empezá a construir<br /><em>tu presencia</em>',
    'contacto.subtitle': 'Si te interesa contar con un perfil profesional, inteligente y digital, contactanos.',
    'contacto.quote': '"La mayoría de los profesionales tienen carreras increíbles. Solo les falta la forma correcta de mostrarlas."',
    'contacto.form.nombre-label': 'Nombre completo',
    'contacto.form.nombre-placeholder': 'Tu nombre',
    'contacto.form.email-label': 'Email profesional',
    'contacto.form.email-placeholder': 'tu@email.com',
    'contacto.form.industria-label': 'Industria o rol',
    'contacto.form.industria-placeholder': 'Ej: Product Manager, Fintech',
    'contacto.form.mensaje-label': 'Contanos sobre vos',
    'contacto.form.mensaje-placeholder': '¿En qué momento de tu carrera estás? ¿Qué querés lograr?',
    'contacto.form.submit': 'Quiero mi CV interactivo →',

    'footer.copy': '© 2025 Interactive Vitae. All rights reserved.',
    'footer.link1': 'Qué es',
    'footer.link2': 'Casos',
    'footer.link3': 'Contacto',
  },

  en: {
    'nav.que-es': 'What it is',
    'nav.para-quien': 'For who',
    'nav.casos': 'Cases',
    'nav.cta': 'Get mine',

    'hero.badge': 'Powered by Artificial Intelligence',
    'hero.title': 'Your career reimagined',
    'hero.subtitle': "Your profile shouldn't be a document. It should be an experience. We create AI-powered interactive CVs that present your career in a way recruiters can't ignore.",
    'hero.btn-primary': 'I want my interactive CV',
    'hero.btn-outline': 'See examples',
    'hero.scroll': 'Explore',

    'que-es.label': '✦ AI-POWERED',
    'que-es.title': 'The new way to present yourself to the world.<br /><em>Your story. Your voice. Your AI.</em>',
    'que-es.subtitle': 'Interactive Vitae tells your story, learns from you and acts as your personal career assistant automatically. An AI-powered tool that positions you in front of the people who want to know you.',
    'que-es.card1.title': 'Custom design',
    'que-es.card1.body': 'Every CV is designed around your professional identity, industry, and goals.',
    'que-es.card2.title': 'AI built-in',
    'que-es.card2.body': 'We generate and optimize your content using artificial intelligence.',
    'que-es.card3.title': 'Interactive',
    'que-es.card3.body': 'Links, projects, metrics and achievements presented visually.',
    'que-es.card4.title': 'Always online',
    'que-es.card4.body': "Share a link — no PDF attachments nobody is going to open.",

    'buscamos.label': "WHO IT'S FOR",
    'buscamos.title': 'The CV evolved. Did you?',
    'buscamos.subtitle': "We're the ideal partner to digitize your profile, automate your presence and show the world exactly who you are. No PDF limits. No generic templates.",
    'buscamos.item1.title': 'Your experience, told by AI',
    'buscamos.item1.body': 'An AI Agent tells your story better than any document',
    'buscamos.item2.title': 'Stand out from the crowd',
    'buscamos.item2.body': 'Highlight your profile in your industry',
    'buscamos.item3.title': 'Cutting-edge technology',
    'buscamos.item3.body': 'Use AI today, not when it becomes "the future"',
    'buscamos.item4.title': 'Always moving forward',
    'buscamos.item4.body': 'Your online profile evolves with you',
    'buscamos.item5.title': 'Your story, told right',
    'buscamos.item5.body': 'Achievements and projects a PDF could never show',
    'buscamos.item6.title': '100% unique and yours',
    'buscamos.item6.body': 'Built from scratch. No templates. No copies.',

    'casos.label': 'SUCCESS CASES',
    'casos.title': 'Those who already took the step',
    'casos.subtitle': 'Each profile, built to measure. Each story, told with AI.',
    'casos.card1.role': 'Business Lead & Head of Sales',
    'casos.card2.role': 'Entrepreneur & Growth Leader',
    'casos.card3.name': 'Coming soon',
    'casos.card3.role': 'Your profile could be here',

    'contacto.label': 'Contact',
    'contacto.title': 'Start building<br /><em>your presence</em>',
    'contacto.subtitle': 'If you\'re interested in having a professional, intelligent and digital profile, contact us.',
    'contacto.quote': '"Most professionals have incredible careers. They just need the right way to show them."',
    'contacto.form.nombre-label': 'Full name',
    'contacto.form.nombre-placeholder': 'Your name',
    'contacto.form.email-label': 'Professional email',
    'contacto.form.email-placeholder': 'you@email.com',
    'contacto.form.industria-label': 'Industry or role',
    'contacto.form.industria-placeholder': 'E.g.: Product Manager, Fintech',
    'contacto.form.mensaje-label': 'Tell us about yourself',
    'contacto.form.mensaje-placeholder': 'Where are you in your career? What do you want to achieve?',
    'contacto.form.submit': 'I want my interactive CV →',

    'footer.copy': '© 2025 Interactive Vitae. All rights reserved.',
    'footer.link1': 'What it is',
    'footer.link2': 'Cases',
    'footer.link3': 'Contact',
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update text — use innerHTML when the value contains HTML tags (titles with <br><em>)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      const val = t[key];
      if (val.includes('<')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Persist and update <html lang>
  localStorage.setItem('iv-lang', lang);
  document.documentElement.lang = lang;
}

// Language toggle — event delegation on the container
document.getElementById('lang-toggle').addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (btn) {
    setLanguage(btn.getAttribute('data-lang'));
  }
});

// ============================================
// HERO CANVAS — Neural network background
// ============================================
(function () {
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');
  let nodes = [];
  let animId;
  const LINK_DIST = 140;
  const NODE_COLOR = 'rgba(26, 47, 110, ';    // navy, opacidad variable
  const LINE_COLOR = 'rgba(37, 99, 235, ';     // accent, opacidad variable
  const MAX_LINE_ALPHA = 0.10;
  const NODE_ALPHA = 0.28;
  const NODE_RADIUS = 2.5;
  const MAX_SPEED = 0.4;

  function nodeCount() {
    return window.innerWidth <= 640 ? 28 : 55;
  }

  function initCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createNodes() {
    nodes = Array.from({ length: nodeCount() }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * MAX_SPEED * 2,
      vy: (Math.random() - 0.5) * MAX_SPEED * 2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move + bounce
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
    });

    // Lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = MAX_LINE_ALPHA * (1 - dist / LINK_DIST);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = LINE_COLOR + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, NODE_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = NODE_COLOR + NODE_ALPHA + ')';
      ctx.fill();
    });

    animId = requestAnimationFrame(draw);
  }

  function init() {
    initCanvas();
    createNodes();
    cancelAnimationFrame(animId);
    draw();
  }

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      draw();
    }
  });

  // Debounced resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(init, 150);
  }, { passive: true });

  init();
})();

// ============================================
// CASOS CAROUSEL — flechas + dots
// ============================================
(function () {
  const scroll = document.querySelector('.casos-scroll');
  const prevBtn = document.querySelector('.casos-nav--prev');
  const nextBtn = document.querySelector('.casos-nav--next');
  const dots = document.querySelectorAll('.caso-dot');
  if (!scroll || !prevBtn || !nextBtn) return;

  function getCardWidth() {
    const card = scroll.querySelector('.caso-card');
    return card ? card.offsetWidth + 24 : 240; // 24 = gap
  }

  prevBtn.addEventListener('click', () => {
    scroll.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    scroll.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
  });

  scroll.addEventListener('scroll', () => {
    const cardW = getCardWidth();
    const index = Math.round(scroll.scrollLeft / cardW);
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }, { passive: true });
})();

// Init on page load
setLanguage(localStorage.getItem('iv-lang') || 'es');
