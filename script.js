(function () {
  const root = document.documentElement;
  const btn  = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  if (!root.getAttribute('data-theme')) root.setAttribute('data-theme','dark');

  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);

  function refreshIcons() {
    const isDark = root.getAttribute('data-theme') === 'dark';

    // icône du bouton
    if (icon) icon.src = isDark ? '/assets/icon-moon.svg' : '/assets/icon-sun.svg';

    // toutes les icônes sensibles au thème
    document.querySelectorAll('img.swap-theme').forEach(img => {
      const darkSrc  = img.getAttribute('data-src-dark');
      const lightSrc = img.getAttribute('data-src-light');
      if (darkSrc && lightSrc) img.src = isDark ? darkSrc : lightSrc;
    });
  }

  refreshIcons();

  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      refreshIcons();
    });
  }
})();
