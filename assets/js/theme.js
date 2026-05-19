// Theme Switcher with System Preference Detection
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Get stored theme or detect system preference
  function getPreferredTheme() {
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
      return storedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }
  
  // Set theme
  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  
  // Toggle theme
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }
  
  // Initialize theme
  const preferredTheme = getPreferredTheme();
  setTheme(preferredTheme);
  
  // Add event listener to toggle button
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();
