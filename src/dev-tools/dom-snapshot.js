/**
 * DOM Snapshot Tool
 * 
 * Captures the current state of Gmail's DOM for analysis.
 * This helps understand the structure and find reliable selectors.
 * 
 * ⚠️ PRIVACY WARNING: Snapshots may contain sensitive data from your inbox.
 * - Never commit snapshots to git repositories
 * - Review snapshots before sharing
 * - Use test Gmail accounts when possible
 * - Text content is sanitized by default to remove email addresses and URLs
 * 
 * Usage:
 *   - In browser console: window.emailDashDev.captureSnapshot()
 *   - Or enable dev mode in extension settings
 */

(function() {
  'use strict';

  const DEV_MODE_KEY = 'emailDashDevMode';
  const PRIVACY_WARNING = '⚠️ WARNING: Snapshots may contain sensitive data. Never commit to git.';
  
  /**
   * Check if dev mode is enabled
   */
  function isDevModeEnabled() {
    return localStorage.getItem(DEV_MODE_KEY) === 'true';
  }

  /**
   * Sanitize text to remove sensitive information
   * Removes email addresses, URLs, and truncates long text
   * @param {string} text - Text to sanitize
   * @returns {string|null} Sanitized text or null if empty
   */
  function sanitizeText(text) {
    if (!text) return null;
    
    // Remove email addresses
    text = text.replace(/[\w.-]+@[\w.-]+\.\w+/g, '[EMAIL]');
    
    // Remove URLs
    text = text.replace(/https?:\/\/[^\s]+/g, '[URL]');
    
    // Truncate long strings that might be email content
    if (text.length > 50 && text.includes(' ')) {
      return text.substring(0, 50) + '... [TRUNCATED]';
    }
    
    return text;
  }

  /**
   * Capture a snapshot of the current DOM state
   * 
   * ⚠️ PRIVACY: By default, text content is sanitized to remove email addresses and URLs.
   * Set includeText: true to capture raw text (use with caution).
   * 
   * @param {Object} options - Snapshot options
   * @param {boolean} options.includeText - Include text content (default: false, sanitized)
   * @param {boolean} options.includeStyles - Include computed styles (default: false)
   * @param {number} options.maxDepth - Maximum depth to traverse (default: 10)
   * @param {string} options.filterSelector - Only capture elements matching this selector
   * @returns {Object} Snapshot data
   */
  function captureSnapshot(options = {}) {
    const {
      includeText = false,
      includeStyles = false,
      maxDepth = 10,
      filterSelector = null
    } = options;

    // Warn about privacy when including text
    if (includeText) {
      console.warn('⚠️ PRIVACY WARNING: includeText=true may capture sensitive email content!');
      console.warn(PRIVACY_WARNING);
    }

    const snapshot = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      elements: [],
      privacyWarning: PRIVACY_WARNING
    };

    // Get all interactive elements (buttons, links, etc.)
    const interactiveElements = document.querySelectorAll(
      'button, [role="button"], a[href], input, textarea, select, [onclick], [data-tooltip]'
    );

    interactiveElements.forEach((el, index) => {
      if (filterSelector && !el.matches(filterSelector)) {
        return;
      }

      const rect = el.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(el);
      
      // Get attributes and sanitize them
      const rawTooltip = el.getAttribute('data-tooltip');
      const rawAriaLabel = el.getAttribute('aria-label');
      
      const elementData = {
        index,
        tagName: el.tagName.toLowerCase(),
        id: el.id || null,
        className: el.className || null,
        role: el.getAttribute('role') || null,
        'data-tooltip': sanitizeText(rawTooltip),
        'aria-label': sanitizeText(rawAriaLabel),
        position: {
          x: Math.round(rect.left),
          y: Math.round(rect.top),
          width: Math.round(rect.width),
          height: Math.round(rect.height)
        },
        visible: rect.width > 0 && rect.height > 0 && computedStyle.display !== 'none',
        selectors: generateSelectors(el)
      };

      if (includeText && el.textContent) {
        // Sanitize text content even when includeText is true
        elementData.textContent = sanitizeText(el.textContent.trim().substring(0, 100));
      }

      if (includeStyles) {
        elementData.styles = {
          display: computedStyle.display,
          visibility: computedStyle.visibility,
          opacity: computedStyle.opacity
        };
      }

      snapshot.elements.push(elementData);
    });

    // Add summary statistics
    snapshot.summary = {
      totalElements: snapshot.elements.length,
      visibleElements: snapshot.elements.filter(e => e.visible).length,
      buttons: snapshot.elements.filter(e => 
        e.tagName === 'button' || e.role === 'button'
      ).length,
      withTooltips: snapshot.elements.filter(e => e['data-tooltip']).length
    };

    return snapshot;
  }

  /**
   * Generate multiple selector options for an element
   * @param {Element} element - DOM element
   * @returns {Array} Array of selector strings
   */
  function generateSelectors(element) {
    const selectors = [];

    // ID selector
    if (element.id) {
      selectors.push(`#${element.id}`);
    }

    // Class selector (first class)
    if (element.className && typeof element.className === 'string') {
      const firstClass = element.className.split(' ')[0];
      if (firstClass) {
        selectors.push(`.${firstClass}`);
      }
    }

    // Role selector
    const role = element.getAttribute('role');
    if (role) {
      selectors.push(`[role="${role}"]`);
    }

    // Data-tooltip selector
    const tooltip = element.getAttribute('data-tooltip');
    if (tooltip) {
      selectors.push(`[data-tooltip="${tooltip}"]`);
    }

    // Combined role + tooltip (most specific)
    if (role && tooltip) {
      selectors.push(`[role="${role}"][data-tooltip="${tooltip}"]`);
    }

    // Aria-label selector
    const ariaLabel = element.getAttribute('aria-label');
    if (ariaLabel) {
      selectors.push(`[aria-label="${ariaLabel}"]`);
    }

    return selectors;
  }

  /**
   * Export snapshot as JSON
   * @param {Object} snapshot - Snapshot data
   * @returns {string} JSON string
   */
  function exportSnapshot(snapshot) {
    return JSON.stringify(snapshot, null, 2);
  }

  /**
   * Download snapshot as file
   * 
   * ⚠️ PRIVACY: Files are saved to your Downloads folder. Review before sharing.
   * Recommended location: dev-tools/snapshots/ (gitignored)
   * 
   * @param {Object} snapshot - Snapshot data
   * @param {string} filename - Optional filename
   */
  function downloadSnapshot(snapshot, filename = null) {
    console.warn(PRIVACY_WARNING);
    const json = exportSnapshot(snapshot);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    // Default filename suggests snapshots directory
    a.download = filename || `dev-tools/snapshots/gmail-dom-snapshot-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log('💾 Snapshot downloaded. Remember: Never commit snapshots to git!');
  }

  /**
   * Analyze snapshot and suggest selectors for common actions
   * @param {Object} snapshot - Snapshot data
   * @returns {Object} Analysis results
   */
  function analyzeSnapshot(snapshot) {
    const analysis = {
      archiveButtons: [],
      sendButtons: [],
      deleteButtons: [],
      otherButtons: []
    };

    snapshot.elements.forEach(element => {
      const tooltip = element['data-tooltip'] || '';
      const role = element.role;

      if (role === 'button') {
        if (tooltip.toLowerCase().includes('archive')) {
          analysis.archiveButtons.push(element);
        } else if (tooltip.toLowerCase().includes('send')) {
          analysis.sendButtons.push(element);
        } else if (tooltip.toLowerCase().includes('delete')) {
          analysis.deleteButtons.push(element);
        } else {
          analysis.otherButtons.push(element);
        }
      }
    });

    return analysis;
  }

  /**
   * Log snapshot to console in a readable format
   * @param {Object} snapshot - Snapshot data
   */
  function logSnapshot(snapshot) {
    console.group('📸 Gmail DOM Snapshot');
    console.warn(PRIVACY_WARNING);
    console.log('Timestamp:', snapshot.timestamp);
    console.log('URL:', snapshot.url);
    console.log('Summary:', snapshot.summary);
    console.group('Interactive Elements');
    snapshot.elements.forEach((el, i) => {
      console.log(`${i + 1}.`, el.tagName, {
        role: el.role,
        tooltip: el['data-tooltip'],
        selectors: el.selectors,
        visible: el.visible
      });
    });
    console.groupEnd();
    console.groupEnd();
  }

  // Expose API to window for console access
  try {
    if (typeof window !== 'undefined') {
      // Initialize if it doesn't exist
      if (!window.emailDashDev) {
        window.emailDashDev = {};
      }
      
      // Add all snapshot methods
      window.emailDashDev.captureSnapshot = captureSnapshot;
      window.emailDashDev.exportSnapshot = exportSnapshot;
      window.emailDashDev.downloadSnapshot = downloadSnapshot;
      window.emailDashDev.analyzeSnapshot = analyzeSnapshot;
      window.emailDashDev.logSnapshot = logSnapshot;
      window.emailDashDev.isDevModeEnabled = () => isDevModeEnabled();
      
      console.log('🔧 Email Dash Dev Tools: DOM Snapshot loaded');
    } else {
      console.error('❌ window is undefined in dom-snapshot.js');
    }
  } catch (error) {
    console.error('❌ Error loading dom-snapshot.js:', error);
  }

  // Export for use in content script
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      captureSnapshot,
      exportSnapshot,
      downloadSnapshot,
      analyzeSnapshot,
      logSnapshot
    };
  }
})();

