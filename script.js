(function(){
  const root = document.documentElement;           // <html>
  const btn  = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  // Mettre dark par défaut si rien en mémoire
  if (!root.getAttribute('data-theme')) root.setAttribute('data-theme','dark');

  // Charger préférence
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);

  function refreshIcon(){
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (icon) icon.src = isDark ? '/assets/icon-moon.svg' : '/assets/icon-sun.svg';

    // Switch GitHub (si tu utilises deux SVG)
    const gh = document.getElementById('ghIcon');
    if (gh){ gh.src = isDark ? gh.dataset.srcDark : gh.dataset.srcLight; }
  }
  refreshIcon();

      // Switch Email (si tu utilises deux SVG)
    const em = document.getElementById('emIcon');
    if (em){ em.src = isDark ? em.dataset.srcDark : em.dataset.srcLight; }
  }
  refreshIcon();



  if (btn){
    btn.addEventListener('click', ()=>{
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      refreshIcon();
    });
  }
})();
