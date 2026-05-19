// GDPR / DSGVO Cookie Consent
(function() {
  const CONSENT_KEY = 'gdpr-consent';
  const CONSENT_DATE_KEY = 'gdpr-consent-date';
  
  // Check if user has already given consent
  function hasConsent() {
    const consent = localStorage.getItem(CONSENT_KEY);
    const consentDate = localStorage.getItem(CONSENT_DATE_KEY);
    
    // Check if consent is still valid (6 months)
    if (consent && consentDate) {
      const sixMonthsAgo = Date.now() - (6 * 30 * 24 * 60 * 60 * 1000);
      if (parseInt(consentDate) > sixMonthsAgo) {
        return consent === 'accepted';
      }
    }
    return null;
  }
  
  // Save consent
  function saveConsent(accepted) {
    localStorage.setItem(CONSENT_KEY, accepted ? 'accepted' : 'declined');
    localStorage.setItem(CONSENT_DATE_KEY, Date.now().toString());
  }
  
  // Show GDPR popup
  function showGdprPopup() {
    const popup = document.createElement('div');
    popup.id = 'gdpr-popup';
    popup.className = 'gdpr-popup glass';
    popup.innerHTML = `
      <div class="gdpr-content">
        <h3>🍪 Privacy & Data</h3>
        <p>
          This website uses <strong>no tracking cookies</strong>. We respect your privacy.
        </p>
        <p>
          The following services are used:
        </p>
        <ul>
          <li><strong>GitHub Pages:</strong> Website hosting (IP address is processed)</li>
          <li><strong>Giscus/GitHub Discussions:</strong> Comment system (only when you comment)</li>
          <li><strong>LocalStorage:</strong> Storing your theme preference and interactions</li>
        </ul>
        <p class="gdpr-small">
          More information can be found in our <a href="/impressum/">Privacy Policy</a>.
        </p>
        <div class="gdpr-buttons">
          <button id="gdpr-accept" class="gdpr-btn gdpr-accept">
            ✓ Got it
          </button>
          <button id="gdpr-decline" class="gdpr-btn gdpr-decline">
            Essential only
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(popup);
    
    // Animate in
    setTimeout(() => {
      popup.classList.add('visible');
    }, 100);
    
    // Handle accept
    document.getElementById('gdpr-accept').addEventListener('click', function() {
      saveConsent(true);
      hidePopup(popup);
    });
    
    // Handle decline
    document.getElementById('gdpr-decline').addEventListener('click', function() {
      saveConsent(false);
      hidePopup(popup);
      // Optionally disable comments or other features
      disableOptionalFeatures();
    });
  }
  
  // Hide popup with animation
  function hidePopup(popup) {
    popup.classList.remove('visible');
    setTimeout(() => {
      popup.remove();
    }, 300);
  }
  
  // Disable optional features if user declines
  function disableOptionalFeatures() {
    // Disable Giscus comments
    const commentsContainer = document.getElementById('giscus-comments');
    if (commentsContainer) {
      commentsContainer.innerHTML = `
        <div class="glass" style="padding: 2rem; text-align: center; margin-top: 2rem;">
          <p style="color: var(--text-secondary);">
            Comments are disabled because you have not consented to data processing.
          </p>
          <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--accent); color: white; border: none; border-radius: 8px; cursor: pointer;">
            Change settings
          </button>
        </div>
      `;
    }
  }
  
  // Initialize on page load
  function init() {
    const consent = hasConsent();
    
    if (consent === null) {
      // Show popup if no consent given
      showGdprPopup();
    } else if (consent === false) {
      // User declined, disable optional features
      disableOptionalFeatures();
    }
    // If consent === true, everything loads normally
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Expose function to reset consent (for testing or user preference changes)
  window.resetGdprConsent = function() {
    localStorage.removeItem(CONSENT_KEY);
    localStorage.removeItem(CONSENT_DATE_KEY);
    location.reload();
  };
})();
