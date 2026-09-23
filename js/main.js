(function () {
  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggleBtn && themeIcon) {
      const isDark = theme === 'dark';
      themeToggleBtn.setAttribute('aria-pressed', isDark ? 'false' : 'true');
      themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // Initialize button state
  const currentTheme = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
  setTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(activeTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // Listen to OS theme changes if user hasn't set explicit preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Mouse-Following Gradient with RAF throttle
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mediaQuery.matches) {
    let mouseX = 50;
    let mouseY = 20;
    let ticking = false;

    window.addEventListener('mousemove', function (e) {
      mouseX = (e.clientX / window.innerWidth) * 100;
      mouseY = (e.clientY / window.innerHeight) * 100;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          document.documentElement.style.setProperty('--mouse-x', mouseX.toFixed(2) + '%');
          document.documentElement.style.setProperty('--mouse-y', mouseY.toFixed(2) + '%');
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
