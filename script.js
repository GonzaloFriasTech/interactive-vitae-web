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

    'buscamos.label': 'Para quién es',
    'buscamos.title': 'Profesionales que quieren<br /><em>más que un PDF</em>',
    'buscamos.subtitle': 'No hacemos CVs genéricos. Trabajamos con profesionales que entienden que su imagen online importa y quieren diferenciarse de verdad.',
    'buscamos.item1.title': 'Tenés experiencia para mostrar',
    'buscamos.item1.body': 'Trabajás en tu carrera con seriedad y querés que eso se vea de la manera correcta.',
    'buscamos.item2.title': 'Buscás destacar en tu industria',
    'buscamos.item2.body': 'Sabés que la mayoría de los candidatos son similares sobre papel. Querés salir de esa masa.',
    'buscamos.item3.title': 'Valorás la tecnología',
    'buscamos.item3.body': 'Entendés que usar IA en tu posicionamiento profesional no es el futuro — es el presente.',
    'buscamos.item4.title': 'Estás en movimiento',
    'buscamos.item4.body': 'Buscás un nuevo desafío, una promoción o expandir tu red. Querés llegar en modo profesional.',
    'buscamos.item5.title': 'Tu historia merece ser contada bien',
    'buscamos.item5.body': 'Tenés logros y proyectos que en un PDF tradicional quedan perdidos en una lista de bullets.',
    'buscamos.item6.title': 'Querés algo único y tuyo',
    'buscamos.item6.body': 'No templates. No soluciones genéricas. Un CV construido desde cero pensando en vos.',

    'casos.label': 'Casos de éxito',
    'casos.title': 'Profesionales que ya<br /><em>reimaginaron su carrera</em>',
    'casos.subtitle': 'Cada CV interactivo es único. Acá podés explorar el trabajo real que hacemos.',
    'casos.card.tag': 'Tecnología & Producto',
    'casos.card.role': 'Product & Technology Professional',
    'casos.card.body': 'Un CV interactivo que refleja la experiencia multidisciplinaria de Gonzalo en producto, tecnología y liderazgo. Diseñado para destacar en un mercado donde la diferenciación importa más que nunca.',
    'casos.card.link': 'Ver CV interactivo',

    'contacto.label': 'Contacto',
    'contacto.title': 'Empezá a construir<br /><em>tu presencia</em>',
    'contacto.subtitle': 'El mejor momento para reimaginar tu carrera es ahora. Contanos sobre vos y te mostramos cómo podemos presentar tu historia profesional de la mejor manera posible.',
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

    'buscamos.label': "Who it's for",
    'buscamos.title': 'Professionals who want<br /><em>more than a PDF</em>',
    'buscamos.subtitle': "We don't make generic CVs. We work with professionals who understand that their online image matters and want to truly stand out.",
    'buscamos.item1.title': 'You have experience to show',
    'buscamos.item1.body': 'You take your career seriously and you want that to come through in the right way.',
    'buscamos.item2.title': 'You want to stand out in your industry',
    'buscamos.item2.body': 'You know most candidates look similar on paper. You want to break out of that crowd.',
    'buscamos.item3.title': 'You value technology',
    'buscamos.item3.body': "You understand that using AI for professional positioning isn't the future — it's the present.",
    'buscamos.item4.title': "You're on the move",
    'buscamos.item4.body': "You're looking for a new challenge, a promotion, or to grow your network. You want to show up like a pro.",
    'buscamos.item5.title': 'Your story deserves to be told well',
    'buscamos.item5.body': 'You have achievements and projects that get lost in a bullet list in a traditional PDF.',
    'buscamos.item6.title': 'You want something unique and yours',
    'buscamos.item6.body': 'No templates. No generic solutions. A CV built from scratch with you in mind.',

    'casos.label': 'Success stories',
    'casos.title': 'Professionals who already<br /><em>reimagined their career</em>',
    'casos.subtitle': 'Every interactive CV is unique. Here you can explore the real work we do.',
    'casos.card.tag': 'Technology & Product',
    'casos.card.role': 'Product & Technology Professional',
    'casos.card.body': "An interactive CV that captures Gonzalo's multidisciplinary experience in product, technology and leadership. Designed to stand out in a market where differentiation matters more than ever.",
    'casos.card.link': 'View interactive CV',

    'contacto.label': 'Contact',
    'contacto.title': 'Start building<br /><em>your presence</em>',
    'contacto.subtitle': "The best time to reimagine your career is now. Tell us about yourself and we'll show you how we can present your professional story in the best possible way.",
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

// Init on page load
setLanguage(localStorage.getItem('iv-lang') || 'es');
