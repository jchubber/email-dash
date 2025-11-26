# Email Dash Development Tools

This directory contains development tools to help understand and work with Gmail's DOM structure.

## ⚠️ Privacy Warning

**IMPORTANT**: Snapshots may contain sensitive data from your inbox:
- Email addresses are automatically sanitized (replaced with `[EMAIL]`)
- URLs are automatically sanitized (replaced with `[URL]`)
- Long text is truncated to prevent capturing email content
- **Never commit snapshots to git repositories**
- Review snapshots before sharing
- Use test Gmail accounts when possible

Snapshots are automatically saved to `dev-tools/snapshots/` which is gitignored.

## DOM Snapshot Tool

The DOM snapshot tool captures the current state of Gmail's DOM for analysis.

### Usage

#### Method 1: Browser Console

1. Open Gmail in your browser
2. Open browser DevTools (F12)
3. Go to Console tab
4. Run:

```javascript
// Capture snapshot
const snapshot = window.emailDashDev.captureSnapshot();

// View in console
window.emailDashDev.logSnapshot(snapshot);

// Download as JSON file (saves to dev-tools/snapshots/ by default)
window.emailDashDev.downloadSnapshot(snapshot);

// Analyze and get suggestions
const analysis = window.emailDashDev.analyzeSnapshot(snapshot);
console.log(analysis);
```

#### Method 2: Enable Dev Mode

1. Add to your extension's localStorage (in console):
```javascript
localStorage.setItem('emailDashDevMode', 'true');
```

2. Reload Gmail
3. Snapshot will be auto-captured after 3 seconds
4. Check console for results

### Snapshot Options

```javascript
const snapshot = window.emailDashDev.captureSnapshot({
  includeText: false,       // ⚠️ WARNING: Setting to true may capture sensitive content
  includeStyles: false,     // Include computed styles
  maxDepth: 10,             // Maximum depth to traverse
  filterSelector: '[role="button"]'  // Only capture matching elements
});
```

**Privacy Note**: Even with `includeText: true`, text content is automatically sanitized to remove email addresses and URLs. However, be cautious as some context may still be captured.

### What Gets Captured

- All interactive elements (buttons, links, inputs)
- Element attributes (role, data-tooltip, aria-label, etc.)
- Position and visibility information
- Multiple selector options for each element
- Summary statistics

### Output Format

The snapshot is a JSON object with:
- `timestamp`: When snapshot was taken
- `url`: Current Gmail URL
- `viewport`: Browser viewport size
- `elements`: Array of captured elements
- `summary`: Statistics about captured elements

### Example Output

```json
{
  "timestamp": "2025-01-31T12:00:00.000Z",
  "url": "https://mail.google.com/mail/u/0/#inbox",
  "summary": {
    "totalElements": 45,
    "visibleElements": 38,
    "buttons": 12,
    "withTooltips": 8
  },
  "elements": [
    {
      "tagName": "div",
      "role": "button",
      "data-tooltip": "Archive",
      "selectors": [
        "[role=\"button\"]",
        "[data-tooltip=\"Archive\"]",
        "[role=\"button\"][data-tooltip=\"Archive\"]"
      ],
      "visible": true
    }
  ]
}
```

## Smoke Test Tool

The smoke test validates that all critical selectors used by Email Dash are still working. This helps detect when Gmail's UI has changed.

### Usage

Run the smoke test from the browser console:

```javascript
// Run smoke test
window.emailDashDev.runSmokeTest();
```

### Context-Aware Testing

The smoke test automatically detects which Gmail context you're in and only tests relevant buttons:

- **Inbox Context**: Tests Archive and Delete buttons
- **Compose Context**: Tests Send and Send and Archive buttons

Different buttons appear in different Gmail views, so the test adapts to what's currently visible.

### What Gets Tested

**In Inbox View:**
- Archive button: `[role='button'][data-tooltip='Archive']`
- Delete button: `[role='button'][data-tooltip='Delete']` (not yet implemented)

**In Compose View:**
- Send button: `[role='button'][data-tooltip*='Send']` (excluding "Send and archive")
- Send and archive button: `[role='button'][data-tooltip*='Send and archive']`

### Output

The test reports:
- ✅ PASS: Selector found and working
- ❌ FAIL: Selector not found (Gmail UI may have changed)
- Context detection (inbox or compose)
- Helpful messages about which buttons can be tested in which context
- Help message for Send and Archive if not found (with link to Gmail settings)
- Suggestions for similar elements if a selector fails

### Example Output

**In Inbox:**
```
🧪 Email Dash Smoke Test
📧 Context detected: INBOX
Testing critical selectors for current context...

ℹ️  Note: Send buttons only appear in compose view. Open a draft to test those.

📊 Test Results:
─────────────────────────────────────
✅ PASS ARCHIVE (2 found)
❌ FAIL DELETE
   Selector not found: [role='button'][data-tooltip='Delete']
─────────────────────────────────────

⚠️ 1 of 2 tests failed in inbox context. Gmail UI may have changed.
   Action required: Update selectors in content-script.js
```

**In Compose:**
```
🧪 Email Dash Smoke Test
📧 Context detected: COMPOSE
Testing critical selectors for current context...

ℹ️  Note: Archive/Delete buttons only appear in inbox view. Go to inbox to test those.

📊 Test Results:
─────────────────────────────────────
✅ PASS SEND (1 found)
❌ FAIL SEND-AND-ARCHIVE
   Selector not found: [role='button'][data-tooltip*='Send and archive']
   💡 Make sure 'Send and Archive' is enabled at https://mail.google.com/mail/u/0/#settings/general
─────────────────────────────────────

⚠️ 1 of 2 tests failed in compose context. Gmail UI may have changed.
   Action required: Update selectors in content-script.js
```

## Workflow

1. **Run smoke test** to check if selectors are still working
   - Run in inbox view to test Archive/Delete buttons
   - Run in compose view to test Send/Send and Archive buttons
2. **Capture snapshot** if selectors fail or when debugging
3. **Analyze snapshot** to find new selectors
4. **Update selectors** in `content-script.js` with comments documenting them
5. **Test again** in the appropriate context to verify new selectors work

## Tips

- **Run smoke test first** when debugging selector issues
- **Test in both contexts**: Run the smoke test in inbox view AND compose view to test all buttons
- If Send and Archive button fails, check that it's enabled in Gmail settings
- Capture snapshots at different Gmail states (inbox, compose, settings)
- Compare snapshots over time to detect Gmail UI changes
- Use the analysis function to quickly find buttons by action type
- **Remember**: Snapshots are gitignored - never commit them
- Selectors are documented inline in `content-script.js` with comments

