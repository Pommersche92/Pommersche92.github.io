// Giscus Comments Integration
// https://giscus.app/

(function() {
  const commentsContainer = document.getElementById('giscus-comments');
  
  if (!commentsContainer) return;
  
  // Check GDPR consent before loading Giscus
  function hasGdprConsent() {
    const consent = localStorage.getItem('gdpr-consent');
    return consent === 'accepted';
  }
  
  // Don't load Giscus if user declined
  if (!hasGdprConsent()) {
    // Check periodically if consent is given (in case user accepts later)
    const checkInterval = setInterval(function() {
      if (hasGdprConsent()) {
        clearInterval(checkInterval);
        loadGiscus();
      }
    }, 1000);
    return;
  }
  
  // Load Giscus function
  function loadGiscus() {
    // Create script element for Giscus
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'Pommersche92/Pommersche92.github.io');
    script.setAttribute('data-repo-id', 'R_kgDOSiWGSw');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOSiWGS84C9anq');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;
    
    // Set theme based on current theme (with fallback to localStorage and system preference)
    function getCurrentTheme() {
      const dataTheme = document.documentElement.getAttribute('data-theme');
      if (dataTheme) return dataTheme;
      
      // Fallback to localStorage
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) return storedTheme;
      
      // Fallback to system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      
      return 'light';
    }
    
    const currentTheme = getCurrentTheme();
    script.setAttribute('data-theme', currentTheme === 'dark' ? 'dark' : 'light');
    
    commentsContainer.appendChild(script);
    
    // Listen for theme changes and update Giscus theme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme');
          const iframe = document.querySelector('iframe.giscus-frame');
          
          if (iframe) {
            const message = {
              setConfig: {
                theme: newTheme === 'dark' ? 'dark' : 'light'
              }
            };
            iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
          }
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }
  
  // Load Giscus if consent is given
  loadGiscus();
})();

/* 
 * GISCUS SETUP INSTRUCTIONS:
 * 
 * 1. Go to https://giscus.app/
 * 2. Enable GitHub Discussions in your repository (Settings > Features > Discussions)
 * 3. Install the Giscus App: https://github.com/apps/giscus
 * 4. Follow the instructions on giscus.app to get your Repo-ID and Category-ID
 * 5. Replace the placeholders above with your actual values
 * 
 * ALTERNATIVE COMMENT SYSTEMS:
 * 
 * - utterances (https://utteranc.es/) - Uses GitHub Issues, simpler
 * - Disqus (https://disqus.com/) - Proprietary, many features
 * - Commento (https://commento.io/) - Privacy-focused, paid
 */
