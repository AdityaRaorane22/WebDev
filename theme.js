// theme.js — simple persistent light/dark theme toggle for InstiOLX
(function(){
  function applyTheme(theme){
    if(theme === 'dark'){
      document.body.classList.add('dark');
      const btn = document.getElementById('themeToggle');
      if(btn) btn.textContent = '☀️';
    } else {
      document.body.classList.remove('dark');
      const btn = document.getElementById('themeToggle');
      if(btn) btn.textContent = '🌙';
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    const saved = localStorage.getItem('instiolx-theme') || 'light';
    applyTheme(saved);

    const btn = document.getElementById('themeToggle');
    if(!btn) return;

    btn.addEventListener('click', function(){
      const isDark = document.body.classList.contains('dark');
      const next = isDark ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('instiolx-theme', next);
    });
  });
})();
