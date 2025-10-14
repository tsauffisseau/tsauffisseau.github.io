(function(){
  const root = document.documentElement;
  const btn  = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  // 1) lire préférence
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.setAttribute('data-theme','light');
  if (saved === 'dark')  root.setAttribute('data-theme','dark');

  // 2) maj icône
  function refreshIcon(){
    const isDark = root.getAttribute('data-theme') !== 'light';
    if (icon) icon.src = isDark ? '/assets/icon-moon.png' : '/assets/icon-sun.png';
    if (btn)  btn.title = isDark ? 'Passer en clair' : 'Passer en sombre';
  }
  refreshIcon();

  // 3) toggle
  if (btn) btn.addEventListener('click', ()=>{
    const isDark = root.getAttribute('data-theme') !== 'light';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    refreshIcon();
  });
})();
