(function(){
  const root = document.documentElement;
  const btn  = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  // préférence
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.setAttribute('data-theme','light');
  if (saved === 'dark')  root.setAttribute('data-theme','dark');

  function refreshIcon(){
    const isDark = root.getAttribute('data-theme') !== 'light';
    if (icon) icon.src = isDark ? '/assets/icon-moon.png' : '/assets/icon-sun.png';

    // >>> switch GitHub icon selon thème
    const gh = document.getElementById('ghIcon');
    if (gh){
      gh.src = isDark ? gh.dataset.srcDark : gh.dataset.srcLight;
    }
  }
  refreshIcon();

  if (btn){
    btn.addEventListener('click', ()=>{
      const isDark = root.getAttribute('data-theme') !== 'light';
      root.setAttribute('data-theme', isDark ? 'light' : 'dark');
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
      refreshIcon();
    });
  }
})();
