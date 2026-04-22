(function () {
  // ── i18n ──────────────────────────────────
  function applyLang(lang) {
    document.querySelectorAll('[data-en][data-es]').forEach(function (el) {
      el.textContent = lang === 'en' ? el.dataset.en : el.dataset.es;
    });
    document.querySelectorAll('[data-placeholder-en][data-placeholder-es]').forEach(function (el) {
      el.placeholder = lang === 'en' ? el.dataset.placeholderEn : el.dataset.placeholderEs;
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('iv-lang', lang);
  }

  var currentLang = localStorage.getItem('iv-lang') || 'es';
  applyLang(currentLang);

  var toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-btn');
      if (btn) applyLang(btn.dataset.lang);
    });
  }

  // ── Filtro + Búsqueda ─────────────────────
  var cards = Array.from(document.querySelectorAll('.com-card'));
  var pills = Array.from(document.querySelectorAll('.com-pill'));
  var searchInput = document.getElementById('com-search');
  var emptyMsg = document.getElementById('com-empty');
  var activeFilter = 'all';

  function applyFilters() {
    var query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    var visible = 0;

    cards.forEach(function (card) {
      var catMatch = activeFilter === 'all' || card.dataset.categoria === activeFilter;
      var nombre = (card.dataset.nombre || '').toLowerCase();
      var rol = (card.dataset.rol || '').toLowerCase();
      var textMatch = !query || nombre.includes(query) || rol.includes(query);

      if (catMatch && textMatch) {
        card.classList.remove('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (emptyMsg) emptyMsg.style.display = visible === 0 ? 'block' : 'none';
  }

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      activeFilter = pill.dataset.filter;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
})();
