(function () {
  const root = document.documentElement; // <html>
  const btn  = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  // Thème par défaut
  if (!root.getAttribute('data-theme')) root.setAttribute('data-theme', 'dark');

  // Préférence sauvegardée
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }

  function refreshIcons() {
    const isDark = root.getAttribute('data-theme') === 'dark';

    // Icône du bouton
    if (icon) icon.src = isDark ? '/assets/icon-moon.svg' : '/assets/icon-sun.svg';

    // Icône GitHub (noir/blanc)
    const gh = document.getElementById('ghIcon');
    if (gh) gh.src = isDark ? gh.dataset.srcDark : gh.dataset.srcLight;

    // Icône Email (noir/blanc)
    const em = document.getElementById('emIcon');
    if (em) em.src = isDark ? em.dataset.srcDark : em.dataset.srcLight;
  }

  // Première mise à jour
  refreshIcons();

  // Toggle
  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      refreshIcons();
    });
  }
})();
