/**
 * Smoke Test Script
 * 
 * Tests critical selectors used by Email Dash to detect if Gmail UI has changed.
 * Run this script to verify that all selectors are still working.
 * 
 * Usage:
 *   - In browser console: window.emailDashDev.runSmokeTest()
 */

(function() {
  'use strict';

  /**
   * Detect which Gmail context we're in
   * @returns {string} 'inbox' or 'compose'
   */
  function detectContext() {
    // Check if we're in compose view (send buttons would be visible)
    const sendButtons = document.querySelectorAll("[role='button'][data-tooltip*='Send']");
    if (sendButtons.length > 0) {
      return 'compose';
    }
    // Otherwise assume inbox view
    return 'inbox';
  }

  /**
   * Test selectors used in content-script.js
   * Based on the clickListener function which checks:
   * - role === 'button' && tooltip === "Archive" (inbox context)
   * - role === 'button' && tooltip.includes("Send") (compose context)
   * - role === 'button' && tooltip.includes("Send and archive") (compose context)
   * 
   * Note: Different buttons appear in different contexts:
   * - Inbox: Archive, Delete buttons
   * - Compose: Send, Send and archive buttons
   */
  function runSmokeTest() {
    console.group('🧪 Email Dash Smoke Test');
    
    const context = detectContext();
    console.log(`📧 Context detected: ${context.toUpperCase()}`);
    console.log('Testing critical selectors for current context...\n');

    const results = {};
    
    // Test buttons relevant to inbox context
    if (context === 'inbox') {
      results.archive = testArchiveButton();
      results.delete = testDeleteButton();
      console.log('ℹ️  Note: Send buttons only appear in compose view. Open a draft to test those.');
    } 
    // Test buttons relevant to compose context
    else if (context === 'compose') {
      results.send = testSendButton();
      results.sendAndArchive = testSendAndArchiveButton();
      console.log('ℹ️  Note: Archive/Delete buttons only appear in inbox view. Go to inbox to test those.');
    }

    // Print results
    console.log('\n📊 Test Results:');
    console.log('─────────────────────────────────────');
    
    Object.entries(results).forEach(([action, result]) => {
      const status = result.found ? '✅ PASS' : '❌ FAIL';
      const count = result.count > 0 ? ` (${result.count} found)` : '';
      console.log(`${status} ${action.toUpperCase()}${count}`);
      
      if (!result.found) {
        console.warn(`   Selector not found: ${result.selector}`);
        if (result.helpMessage) {
          console.log(`   💡 ${result.helpMessage}`);
        }
        if (result.suggestions && result.suggestions.length > 0) {
          console.log('   Similar elements found:');
          result.suggestions.forEach(suggestion => {
            console.log(`     - ${suggestion}`);
          });
        }
      }
    });

    console.log('─────────────────────────────────────\n');

    // Summary
    const totalTests = Object.keys(results).length;
    const passedTests = Object.values(results).filter(r => r.found).length;
    const failedTests = totalTests - passedTests;

    if (totalTests === 0) {
      console.warn('⚠️  No tests could be run. Unable to detect Gmail context.');
    } else if (failedTests === 0) {
      console.log(`✅ All ${totalTests} tests passed for ${context} context! Gmail UI appears unchanged.`);
    } else {
      console.warn(`⚠️ ${failedTests} of ${totalTests} tests failed in ${context} context. Gmail UI may have changed.`);
      console.log('   Action required: Update selectors in content-script.js');
    }

    console.groupEnd();
    return { context, results };
  }

  /**
   * Test Archive button selector
   * Current selector: [role='button'][data-tooltip='Archive']
   * Detection method: Checks parentNode for role='button' and data-tooltip='Archive'
   */
  function testArchiveButton() {
    const selector = "[role='button'][data-tooltip='Archive']";
    const elements = document.querySelectorAll(selector);
    const count = elements.length;

    // Also check for elements that might be archive buttons but with different tooltips
    const similar = findSimilarButtons('archive');

    return {
      action: 'archive',
      selector: selector,
      found: count > 0,
      count: count,
      suggestions: similar
    };
  }

  /**
   * Test Send button selector
   * Current selector: [role='button'][data-tooltip*='Send']
   * Note: This also matches "Send and archive", so we test separately
   */
  function testSendButton() {
    // Test for "Send" button that is NOT "Send and archive"
    const allSendButtons = document.querySelectorAll("[role='button'][data-tooltip*='Send']");
    let sendOnlyCount = 0;

    allSendButtons.forEach(btn => {
      const tooltip = btn.getAttribute('data-tooltip') || '';
      // Count only if it contains "Send" but not "Send and archive"
      if (tooltip.includes('Send') && !tooltip.includes('Send and archive')) {
        sendOnlyCount++;
      }
    });

    const similar = findSimilarButtons('send');

    return {
      action: 'send',
      selector: "[role='button'][data-tooltip*='Send'] (excluding 'Send and archive')",
      found: sendOnlyCount > 0,
      count: sendOnlyCount,
      suggestions: similar
    };
  }

  /**
   * Test Send and Archive button selector
   * Current selector: [role='button'][data-tooltip*='Send and archive']
   */
  function testSendAndArchiveButton() {
    const selector = "[role='button'][data-tooltip*='Send and archive']";
    const elements = document.querySelectorAll(selector);
    const count = elements.length;

    const similar = findSimilarButtons('send and archive');

    return {
      action: 'send-and-archive',
      selector: selector,
      found: count > 0,
      count: count,
      suggestions: similar,
      helpMessage: count === 0 ? "Make sure 'Send and Archive' is enabled at https://mail.google.com/mail/u/0/#settings/general" : null
    };
  }

  /**
   * Test Delete button selector (not yet implemented but planned)
   * Current selector: [role='button'][data-tooltip='Delete']
   */
  function testDeleteButton() {
    const selector = "[role='button'][data-tooltip='Delete']";
    const elements = document.querySelectorAll(selector);
    const count = elements.length;

    const similar = findSimilarButtons('delete');

    return {
      action: 'delete',
      selector: selector,
      found: count > 0,
      count: count,
      suggestions: similar,
      note: 'Not yet implemented in extension'
    };
  }

  /**
   * Find similar buttons that might be the target
   * Helps suggest alternatives when selectors fail
   */
  function findSimilarButtons(keyword) {
    const allButtons = document.querySelectorAll("[role='button']");
    const suggestions = [];

    allButtons.forEach(btn => {
      const tooltip = btn.getAttribute('data-tooltip') || '';
      const ariaLabel = btn.getAttribute('aria-label') || '';
      const text = btn.textContent || '';

      const searchText = (tooltip + ' ' + ariaLabel + ' ' + text).toLowerCase();
      
      if (searchText.includes(keyword.toLowerCase())) {
        const suggestion = `[role='button'][data-tooltip='${tooltip}']`;
        if (tooltip && !suggestions.includes(suggestion)) {
          suggestions.push(suggestion);
        }
      }
    });

    return suggestions.slice(0, 5); // Limit to 5 suggestions
  }

  // Expose to window for console access
  try {
    if (typeof window !== 'undefined') {
      // Extend existing emailDashDev object or create new one
      if (!window.emailDashDev) {
        window.emailDashDev = {};
      }
      window.emailDashDev.runSmokeTest = runSmokeTest;
      
      // Verify the assignment worked
      if (typeof window.emailDashDev.runSmokeTest === 'function') {
        console.log('🔧 Email Dash Dev Tools: Smoke Test loaded');
        console.log('   Available methods:', Object.keys(window.emailDashDev));
      } else {
        console.error('❌ Failed to assign runSmokeTest function');
      }
    } else {
      console.error('❌ window is undefined in smoke-test.js');
    }
  } catch (error) {
    console.error('❌ Error loading smoke-test.js:', error);
    console.error('   Stack:', error.stack);
  }

  // Export for use in content script
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      runSmokeTest
    };
  }
})();

