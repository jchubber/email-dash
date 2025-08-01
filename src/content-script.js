// Create the scoreboard overlays, and menu

function logoSvg(classNames, width, height) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="${classNames}" width="${width}" zoomAndPan="magnify" viewBox="60 104 255 160" height="${height}" preserveAspectRatio="xMidYMid meet" version="1.0">
  <defs>
    <g />
    <clipPath id="681a026b42">
      <path d="M 37.5 0 L 375 0 L 375 375 L 37.5 375 Z M 37.5 0 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="00d5193943">
      <path d="M 242.835938 133.933594 L 307.335938 133.933594 L 307.335938 245.683594 L 242.835938 245.683594 Z M 242.835938 133.933594 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="4c539be870">
      <path d="M 95.050781 155.121094 L 128.847656 155.121094 L 128.847656 160.230469 L 95.050781 160.230469 Z M 95.050781 155.121094 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="5e5a8b9205">
      <path d="M 128.847656 155.121094 L 95.105469 157.652344 L 128.847656 160.183594 L 128.847656 155.121094 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="6d60ead5b9">
      <path d="M 85.214844 163.515625 L 126.480469 163.515625 L 126.480469 168.625 L 85.214844 168.625 Z M 85.214844 163.515625 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="e9aff4e70e">
      <path d="M 126.480469 163.515625 L 85.28125 166.046875 L 126.480469 168.578125 L 126.480469 163.515625 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="af975867d5">
      <path d="M 76 171.914062 L 123.933594 171.914062 L 123.933594 177 L 76 177 Z M 76 171.914062 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="1ca15622e2">
      <path d="M 123.933594 171.914062 L 76.03125 174.445312 L 123.933594 176.976562 L 123.933594 171.914062 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="b965cd6d50">
      <path d="M 61.585938 180.3125 L 121.480469 180.3125 L 121.480469 185.421875 L 61.585938 185.421875 Z M 61.585938 180.3125 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="38bf42ddcd">
      <path d="M 121.480469 180.3125 L 61.609375 182.84375 L 121.480469 185.378906 L 121.480469 180.3125 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="3e31586082">
      <path d="M 73.511719 188.707031 L 119.023438 188.707031 L 119.023438 193.816406 L 73.511719 193.816406 Z M 73.511719 188.707031 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="862c517984">
      <path d="M 119.023438 188.707031 L 73.523438 191.238281 L 119.023438 193.769531 L 119.023438 188.707031 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="0db10fc70d">
      <path d="M 76.011719 197.109375 L 116.570312 197.109375 L 116.570312 202.21875 L 76.011719 202.21875 Z M 76.011719 197.109375 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="1f3ca33e0b">
      <path d="M 116.570312 197.109375 L 76.035156 199.640625 L 116.570312 202.171875 L 116.570312 197.109375 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="9ea42cf3ee">
      <path d="M 80.429688 205.503906 L 114.226562 205.503906 L 114.226562 210.613281 L 80.429688 210.613281 Z M 80.429688 205.503906 " clip-rule="nonzero" />
    </clipPath>
    <clipPath id="9c104194e0">
      <path d="M 114.226562 205.503906 L 80.488281 208.039062 L 114.226562 210.570312 L 114.226562 205.503906 " clip-rule="nonzero" />
    </clipPath>
  </defs>
  <g clip-path="url(#681a026b42)">
    <path fill="url(#8ae959f796)" d="M 37.5 0 L 37.5 375 L 375 375 L 375 0 Z M 37.5 0 " fill-rule="nonzero" />
  </g>
  <g clip-path="url(#00d5193943)">
    <path fill="#00c4cc" d="M 261.949219 133.9375 L 303.351562 133.9375 L 285.832031 166.742188 L 307.332031 166.742188 L 255.3125 245.679688 L 269.113281 187.539062 L 242.839844 187.539062 L 261.949219 133.9375 " fill-opacity="1" fill-rule="nonzero" />
  </g>
  <g clip-path="url(#4c539be870)">
    <g clip-path="url(#5e5a8b9205)">
      <path fill="#ffffff" d="M 128.847656 155.121094 L 128.847656 160.152344 L 95.128906 160.152344 L 95.128906 155.121094 Z M 128.847656 155.121094 " fill-opacity="1" fill-rule="nonzero" />
    </g>
  </g>
  <g fill="#ffffff" fill-opacity="1">
    <g transform="translate(123.938932, 216.352896)">
      <g>
        <path d="M 10.484375 -65.28125 L 28.5 -65.28125 C 33.164062 -65.28125 36.367188 -63.988281 38.109375 -61.40625 C 39.859375 -58.820312 40.175781 -55 39.0625 -49.9375 L 32.15625 -19.375 C 30.6875 -12.945312 28.441406 -8.109375 25.421875 -4.859375 C 22.410156 -1.617188 18.269531 0 13 0 L -4.5625 0 Z M 13.53125 -11.546875 C 15.914062 -11.546875 17.382812 -12.710938 17.9375 -15.046875 L 25.6875 -48.71875 C 26.039062 -50.1875 26.179688 -51.285156 26.109375 -52.015625 C 26.035156 -52.753906 25.726562 -53.25 25.1875 -53.5 C 24.65625 -53.757812 23.757812 -53.890625 22.5 -53.890625 L 21.046875 -53.890625 L 11.25 -11.546875 Z M 13.53125 -11.546875 " />
      </g>
    </g>
  </g>
  <g fill="#ffffff" fill-opacity="1">
    <g transform="translate(162.773007, 216.352896)">
      <g>
        <path d="M -6.3125 0 L 15.046875 -65.28125 L 37.171875 -65.28125 L 28.34375 0 L 15.96875 0 L 17.484375 -10.5625 L 9.578125 -10.5625 L 6.390625 0 Z M 13 -20.96875 L 18.921875 -20.96875 L 23.640625 -54.1875 L 23.03125 -54.1875 Z M 13 -20.96875 " />
      </g>
    </g>
  </g>
  <g fill="#ffffff" fill-opacity="1">
    <g transform="translate(200.999114, 216.352896)">
      <g>
        <path d="M 10.796875 0.609375 C 4.867188 0.609375 0.929688 -0.859375 -1.015625 -3.796875 C -2.972656 -6.734375 -3.191406 -11.472656 -1.671875 -18.015625 L -0.21875 -24.390625 L 12.625 -24.390625 L 10.71875 -16.265625 C 9.957031 -13.023438 10.613281 -11.40625 12.6875 -11.40625 C 13.851562 -11.40625 14.753906 -11.742188 15.390625 -12.421875 C 16.023438 -13.109375 16.519531 -14.265625 16.875 -15.890625 C 17.382812 -18.015625 17.535156 -19.769531 17.328125 -21.15625 C 17.128906 -22.550781 16.75 -23.71875 16.1875 -24.65625 C 15.632812 -25.59375 14.570312 -27.050781 13 -29.03125 L 8.671875 -34.65625 C 5.328125 -38.914062 4.234375 -43.628906 5.390625 -48.796875 C 6.660156 -54.367188 8.914062 -58.609375 12.15625 -61.515625 C 15.40625 -64.429688 19.484375 -65.890625 24.390625 -65.890625 C 30.273438 -65.890625 34.15625 -64.332031 36.03125 -61.21875 C 37.90625 -58.101562 38.054688 -53.226562 36.484375 -46.59375 L 23.1875 -46.59375 L 24.171875 -51.078125 C 24.367188 -51.929688 24.289062 -52.613281 23.9375 -53.125 C 23.582031 -53.632812 22.976562 -53.890625 22.125 -53.890625 C 21.101562 -53.890625 20.265625 -53.609375 19.609375 -53.046875 C 18.953125 -52.492188 18.519531 -51.734375 18.3125 -50.765625 C 17.8125 -48.640625 18.523438 -46.4375 20.453125 -44.15625 L 26.375 -36.859375 C 27.738281 -35.140625 28.828125 -33.503906 29.640625 -31.953125 C 30.453125 -30.410156 30.972656 -28.585938 31.203125 -26.484375 C 31.429688 -24.378906 31.210938 -21.882812 30.546875 -19 C 29.035156 -12.5625 26.71875 -7.679688 23.59375 -4.359375 C 20.476562 -1.046875 16.210938 0.609375 10.796875 0.609375 Z M 10.796875 0.609375 " />
      </g>
    </g>
  </g>
  <g fill="#ffffff" fill-opacity="1">
    <g transform="translate(237.401303, 216.352896)">
      <g>
        <path d="M -4.5625 0 L 10.484375 -65.28125 L 23.484375 -65.28125 L 18.09375 -41.953125 L 24.25 -41.953125 L 29.640625 -65.28125 L 42.640625 -65.28125 L 27.59375 0 L 14.59375 0 L 21.4375 -29.640625 L 15.28125 -29.640625 L 8.4375 0 Z M -4.5625 0 " />
      </g>
    </g>
  </g>
  <g clip-path="url(#6d60ead5b9)">
    <g clip-path="url(#e9aff4e70e)">
      <path fill="#ffffff" d="M 126.480469 163.515625 L 126.480469 168.546875 L 85.292969 168.546875 L 85.292969 163.515625 Z M 126.480469 163.515625 " fill-opacity="1" fill-rule="nonzero" />
    </g>
  </g>
  <g clip-path="url(#af975867d5)">
    <g clip-path="url(#1ca15622e2)">
      <path fill="#ffffff" d="M 123.933594 171.914062 L 123.933594 176.945312 L 76.066406 176.945312 L 76.066406 171.914062 Z M 123.933594 171.914062 " fill-opacity="1" fill-rule="nonzero" />
    </g>
  </g>
  <g clip-path="url(#b965cd6d50)">
    <g clip-path="url(#38bf42ddcd)">
      <path fill="#ffffff" d="M 121.480469 180.3125 L 121.480469 185.34375 L 61.585938 185.34375 L 61.585938 180.3125 Z M 121.480469 180.3125 " fill-opacity="1" fill-rule="nonzero" />
    </g>
  </g>
  <g clip-path="url(#3e31586082)">
    <g clip-path="url(#862c517984)">
      <path fill="#ffffff" d="M 119.023438 188.707031 L 119.023438 193.738281 L 73.511719 193.738281 L 73.511719 188.707031 Z M 119.023438 188.707031 " fill-opacity="1" fill-rule="nonzero" />
    </g>
  </g>
  <g clip-path="url(#0db10fc70d)">
    <g clip-path="url(#1f3ca33e0b)">
      <path fill="#ffffff" d="M 116.570312 197.109375 L 116.570312 202.140625 L 76.011719 202.140625 L 76.011719 197.109375 Z M 116.570312 197.109375 " fill-opacity="1" fill-rule="nonzero" />
    </g>
  </g>
  <g clip-path="url(#9ea42cf3ee)">
    <g clip-path="url(#9c104194e0)">
      <path fill="#ffffff" d="M 114.226562 205.503906 L 114.226562 210.535156 L 80.507812 210.535156 L 80.507812 205.503906 Z M 114.226562 205.503906 " fill-opacity="1" fill-rule="nonzero" />
    </g>
  </g>
  <g fill="#ffffff" fill-opacity="1">
    <g transform="translate(135.912725, 145.955016)">
      <g>
        <path d="M 0.59375 0 L 2.28125 -10.15625 L 8.40625 -10.15625 L 8.234375 -9.0625 L 3.328125 -9.0625 L 2.765625 -5.640625 L 7.34375 -5.640625 L 7.15625 -4.546875 L 2.578125 -4.546875 L 2 -1.09375 L 6.984375 -1.09375 L 6.8125 0 Z M 0.59375 0 " />
      </g>
    </g>
  </g>
  <g fill="#ffffff" fill-opacity="1">
    <g transform="translate(144.266168, 145.955016)">
      <g>
        <path d="M 2.28125 -10.15625 L 3.75 -10.15625 L 5.8125 -1.71875 L 5.9375 -1.71875 L 10.78125 -10.15625 L 12.25 -10.15625 L 10.5625 0 L 9.40625 0 L 10.6875 -7.71875 L 10.59375 -7.71875 L 6.125 0 L 5.015625 0 L 3.140625 -7.71875 L 3.03125 -7.71875 L 1.75 0 L 0.59375 0 Z M 2.28125 -10.15625 " />
      </g>
    </g>
  </g>
  <g fill="#ffffff" fill-opacity="1">
    <g transform="translate(156.687207, 145.955016)">
      <g>
        <path d="M 1.015625 0 L -0.28125 0 L 5.140625 -10.15625 L 6.40625 -10.15625 L 8.453125 0 L 7.15625 0 L 6.625 -2.875 L 2.515625 -2.875 Z M 3.078125 -3.96875 L 6.421875 -3.96875 L 5.5625 -8.546875 L 5.46875 -8.546875 Z M 3.078125 -3.96875 " />
      </g>
    </g>
  </g>
  <g fill="#ffffff" fill-opacity="1">
    <g transform="translate(166.131958, 145.955016)">
      <g>
        <path d="M 3.515625 -10.15625 L 1.828125 0 L 0.59375 0 L 2.28125 -10.15625 Z M 3.515625 -10.15625 " />
      </g>
    </g>
  </g>
  <g fill="#ffffff" fill-opacity="1">
    <g transform="translate(169.822551, 145.955016)">
      <g>
        <path d="M 0.59375 0 L 2.28125 -10.15625 L 3.515625 -10.15625 L 2 -1.09375 L 6.71875 -1.09375 L 6.546875 0 Z M 0.59375 0 " />
      </g>
    </g>
  </g>
  </svg>
  `
}



const htmlTemplate = `
<div id="scoreboard">
  ${logoSvg('main-logo','unset','auto')}
  <span>Emails:</span><span class="badge" id="emails-count">0</span>
  <span>Time Saved:</span><span class="badge" id="time-saved">0</span>
  <span>Score:</span><span class="badge" id="score-count">0</span>
  <span id="streak-label" style="display: none;">Streak:</span><span class="badge" id="streak-count" style="display: none;">0</span>
  <span>Level:</span><span class="badge level" id="level-display">0</span>
  <div class="menu-icon" data-tooltip="menu-icon">&#9776;</div>
</div>
<div id="timer-overlay" class="timer-overlay"></div>
<div id="bonus-display" class="bonus-display"></div>
<div id="menu-modal" class="modal">
  <div id="logo-banner">
    <span class="modal-close" data-tooltip="menu-icon">&times;</span>
    ${logoSvg('scaled-svg modal-logo-banner-svg','100%','100%')}
  </div>
  <div class="modal-content">
    <section>
      <h3>Game Off / Game On</h3>
      <p>
        <label class="dash-toggle">
          <input type="checkbox" id="gameToggle" class="dash-toggle-input" />
          <span class="dash-toggle-slider"></span>
        </label>
      </p>
    </section>
    <section>
      <h3>Your stats/history</h3>
      <div class="email-stats">
        <h4>Emails Processed in past 24 hours</h4>
        <div class="email-count">
          <span id="emailCount">0</span> emails
        </div>
        <p>Average: <span id="averageCount">0</span> emails</p>
      </div>
    </section>
    <section>
      <h3>Game explanation</h3>
      <p>Look, e-mail sucks. It's like... the WORST. But at least we can try to make it go quickly and have a little fun along the way. That's the idea behind Email Dash.</p>
      <p>Email Dash is a browser extension that turns your inbox into a game. You'll earn points for archiving and sending emails, and even more points for doing it quickly. But beware: the clock is ticking, and the pressure is on.</p>
      <p>The game is simple, but addictive. It's a great way to add a little excitement to an otherwise mundane task. And who knows? You might just find yourself looking forward to checking your email.</p>
      <p>So give it a try, and see if you can top <a href="https://twitter.com/search?q=%23emaildash&src=typed_query">the leaderboard</a>. Happy dashing!</p>
    </section>
    <section>
      <h3>Why did I make this?</h3>
      <p>I have a day job where I get quite a lot of email. I program mostly for fun, and built this for myself. I was initially inspired by a similar project a decade ago called The Email Game, which was awesome, but that unfortunately got shut down.</p>
    </section>
    <section>
      <h3>Like this game?</h3>
      <p>Please tell people.</p>
      <p>Please buy me a cup of coffee.</p>
      <p>Please leave a 5-star rating on the Chrome Web Store.</p>
    </section>
    <section>
      <h3>Your private data stays private</h3>
      <p>Here's the thing: I don't want your data. I don't need it, I'm not interested in it, I don't want to store it, and I am against the way everyone's data is always getting exploited on the interwebs. The extension you're using right now doesn't even have a home server (the last thing I want to do is manage a new server), and it doesn't save any information about any of the emails in your inbox. Anything it *does* store (like your scores and such) is stored only in your browser on your machine, and it's going to stay there unless you decide to share it with other people.</p>
      <p>So, you can use Email Dash with confidence. Your data is yours alone. And if you ever want to double-check yourself you can check out the Github repo a href="https://www.github.com/" target="_blank">here</a>.</p>
    </section>
    <section>
      <h3>View FAQ/help documentation</h3>
      <p>Find answers to frequently asked questions and get help with the game.</p>
      <h4>How do I get tons of points?</h4>
      <p>The best way to rack up hella points is to build up your bonuses by running long streaks and getting to inbox zero every day.</p>
    </section>
    <section>
      <h3>Looking for something else?</h3>
      <p>Maybe it's the button to donate to the project author?</p>
    </section>
  </div>
</div>`;

document.body.insertAdjacentHTML('afterbegin', htmlTemplate);

// Declare a variable for the timer and countdownInterval
var countdownInterval;
var timer = 30;

function startCountdown() {
  timer = 30;
  const timerOverlay = document.getElementById("timer-overlay");
  timerOverlay.style.animation = "none";
  timerOverlay.offsetHeight;
  timerOverlay.style.animation = "countdown-animation 30s linear forwards";
  document.getElementById("scoreboard").style.animationDuration = "100s";
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    timer--;
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.style.animationDuration = timer <= 10 ? "50s" : timer <= 20 ? "75s" : "100s";
    if (timer === 0) clearInterval(countdownInterval);
  }, 1000);
}

// Call startCountdown() initially to start the timer
if (isGameEnabled()) {
  startCountdown();
}

// Declare counts and score
var countEmails = 0;
var score = 0;
var streak = 0;
var longestStreak = 0;
var timeSavedCurrentSession = 0;
var timeSavedAllTime = 0;

function updateDisplay(id, value, classAdd = false) {
  const el = document.getElementById(id);
  el.innerHTML = value;
  if (classAdd) el.classList.add("updated");
  return el;
}

function updateClass(el, className, delay) {
  setTimeout(() => el.classList.remove(className), delay);
}

function formatTime(durationInSeconds) {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
}

chrome.storage.local.get("score", (data) => {
  score = data.score || 0;
  updateDisplay("score-count", score, false);
  const levelDisplay = updateDisplay("level-display", getCurrentLevel(score), false);
  updateClass(levelDisplay, "updated", 1000);
});

chrome.storage.local.get("longestStreak", (data) => {
  longestStreak = data.longestStreak || 0;
});

chrome.storage.local.get("timeSavedAllTime", (data) => {
  timeSavedAllTime = data.timeSavedAllTime || 0;
});

// Listen for clicks
document.addEventListener( "click", clickListener );

function clickListener(event) {
  if (isGameEnabled()) {
    const element = event.target;
    const parent = element.parentNode;
    const tooltip = parent.getAttribute('data-tooltip');
    const role = parent.getAttribute('role');
    console.log("tooltip " + tooltip + " role " + role)
    let actionType;
    let pointsEarned = 0;
    let startingLevel = getCurrentLevel(score)

    if (role === 'button' && tooltip) {
      if (tooltip === "Archive") {
        countEmails++;
        actionType = "archived";
        pointsEarned = 10;
      } else if (tooltip.includes("Send &#x202A") || tooltip.includes("Send and archive")) {
        countEmails++;
        countEmails++;
        actionType = "send-and-archived";
        pointsEarned = 35;
      } else if (tooltip.includes("Send")) {
        countEmails++;
        actionType = "sent";
        pointsEarned = 25;
      } else {
        return;
      }

      const timeSaved = timer > 0 ? timer : 0;
      timeSavedCurrentSession += timeSaved;
      timeSavedAllTime += timeSaved;

      if (timer > 0) {
        streak++;
      } else {
        streak = 0;
      }

      let bonus = Math.round(timer);
      if (bonus > 0 && streak >= 3) {
        bonus += streak * 2;
        console.log("Streak: " + streak);
      }
      score += pointsEarned + bonus;

      const bonusDisplay = updateDisplay("bonus-display", `+${bonus}`);
      bonusDisplay.classList.add("bonus-animation");
      updateClass(bonusDisplay, "bonus-animation", 2000);

      party.sparkles(element);

      const action = {
        actionTimestamp: new Date().getTime(),
        actionType,
        pointsEarned,
        timeSaved
      };
      chrome.storage.local.get("actions", (data) => {
        const actions = data.actions || [];
        actions.push(action);
        const actionCount = actions.length;
        chrome.storage.local.set({
          countEmails,
          score,
          actions,
          actionCount,
          timeSavedAllTime
        });
      });

      updateDisplay("emails-count", countEmails, true);
      updateDisplay("score-count", score, true);
      updateDisplay("time-saved", formatTime(timeSavedCurrentSession), true);

      if (streak >= 3) {
        updateDisplay("streak-label", "Streak", false).style.display = "revert";
        const streakCount = updateDisplay("streak-count", streak, true);
        streakCount.style.display = "revert";
        updateClass(streakCount, "updated", 1000);
      } else {
        document.getElementById("streak-label").style.display = "none";
        document.getElementById("streak-count").style.display = "none";
      }

    if (streak > 0 && streak % 10 === 0) {
      createConfetti(streak);
    }

    let endingLevel = getCurrentLevel(score)

    if (endingLevel !== startingLevel) {
      const levelDisplay = updateDisplay("level-display", endingLevel, false);
      updateClass(levelDisplay, "updated", 1000);
      createZoomMessage("LEVEL UP! " + endingLevel);
    } else {
      rand_float = Math.random()
      if (rand_float <= 0.1) { // 10% chance
        createZoomMessage(getRandomMessage());
      }
    }

      startCountdown();

      updateClass(document.getElementById('emails-count'), 'updated', 1000);
      updateClass(document.getElementById('score-count'), 'updated', 1000);
      updateClass(document.getElementById('time-saved'), 'updated', 1000);
    }
  }
}

// Create a message that zooms onto the screen from the right and zooms off to the left
function createZoomMessage(message) {
  const messageElement = document.createElement("span");
  messageElement.classList.add("message-animation");
  messageElement.textContent = message;
  const animationDuration = 2; // Adjust the duration as needed
  messageElement.style.animation = `message-animation ${animationDuration}s linear`;
  document.body.appendChild(messageElement);

  setTimeout(() => {
    document.body.removeChild(messageElement);
  }, animationDuration * 1000);
}

const zoomMessages = [
  "NICE",
  "EPIC",
  "STELLAR",
  "AWESOME",
  "FANTASTIC",
  "EXCELLENT",
  "WELL DONE",
  "IMPRESSIVE",
  "SUPERB",
  "OUTSTANDING",
  "GREAT JOB",
  "INCREDIBLE",
  "AMAZING",
  "KEEP IT UP",
  "SUPERSTAR",
  "BRAVO",
  "SMOOTH",
  "EFFICIENT"
];

function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * zoomMessages.length);
  return zoomMessages[randomIndex];
}


// Get the menu icon, modal, and close button elements
const menuIcon = document.querySelector(".menu-icon");
const modal = document.getElementById("menu-modal");
const closeButton = document.querySelector(".modal-close");

function toggleModal(show) {
  updateGameEnabledToggleState();
  updateStats();
  modal.style.display = show ? "block" : "none";
  show ? pauseTimerAndOverlay() : resumeTimerAndOverlay();
}

menuIcon.onclick = () => toggleModal(true);

modal.addEventListener("click", (event) => {
  if (event.target == modal) toggleModal(false);
});

closeButton.addEventListener("click", () => toggleModal(false));

function pauseTimerAndOverlay() {
  clearInterval(countdownInterval);
  setAnimationPlayState("paused");
}

function resumeTimerAndOverlay() {
  if (isGameEnabled()) {
    startCountdown();
    setAnimationPlayState("running");
  }
}

function setAnimationPlayState(state) {
  document.getElementById("timer-overlay").style.animationPlayState = state;
  document.getElementById("scoreboard").style.animationPlayState = state;
}


// Update modal stats
function updateStats() {
  const emailCountElement = document.getElementById("emailCount");
  const averageCountElement = document.getElementById("averageCount");

  // Update stats
  chrome.storage.local.get("actions", (data) => {
    // Calculate today's processed emails
    let todaysEmails = 0;
    const currentTime = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    const actions = data.actions || [];
    todaysEmails = actions.filter(action => (currentTime - action.actionTimestamp) <= oneDay).length;
    emailCountElement.textContent = todaysEmails;

    // Calculate the average number of emails processed per day
    const daysSinceFirstAction = actions.length ? Math.ceil((currentTime - actions[0].actionTimestamp) / millisecondsInADay) : 1;
    const totalEmails = actions.length;
    const averageEmails = Math.round(totalEmails / daysSinceFirstAction);
    const progressPercentage = (todaysEmails / averageEmails) * 100;
    emailCountElement.textContent = todaysEmails;
    averageCountElement.textContent = averageEmails;
  });

}


// Confetti for big streak milestones
function createConfetti(streak) {
  const confettiCount = 25;
  const confettiWrapper = document.createElement("div");
  confettiWrapper.style.zIndex = "999";
  confettiWrapper.style.position = "fixed";
  confettiWrapper.style.top = "0";
  confettiWrapper.style.left = "0";
  confettiWrapper.style.width = "100%";
  confettiWrapper.style.height = "100%";
  confettiWrapper.style.pointerEvents = "none";
  document.body.appendChild(confettiWrapper);

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("span");
    confetti.innerHTML = streak;
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDelay = (Math.random() * 0.3) + "s";
    confettiWrapper.appendChild(confetti);
    }

  setTimeout(() => {
    document.body.removeChild(confettiWrapper);
  }, 3000);
}

// LEVELS
// Declare the level names and the points required to reach each level
var levelNames = ["Dasher", "Whiz", "Ace", "Hero", "Champ", "Dynamo", "Expert", "Magician", "Wizard", "Prodigy", "Guru", "Genius", "Conqueror", "Elite", "Master", "Legend"];
var levelPoints = [0, 100, 250, 1000, 2000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000, 2500000, 5000000, 10000000];

// Function to get the current level based on the user's accumulated points
function getCurrentLevel(points) {
  for (var i = levelPoints.length - 1; i >= 0; i--) {
    if (points >= levelPoints[i]) {
      return levelNames[i];
    }
  }
  return levelNames[0];
}

// SETTINGS
const gameToggle = document.getElementById("gameToggle");

gameToggle.addEventListener("change", () => {
  if (gameToggle.checked) {
    localStorage.setItem("emailDashEnabled", "true");
  } else {
    localStorage.setItem("emailDashEnabled", "false");
  }
});

function isGameEnabled() {
  const storedValue = localStorage.getItem("emailDashEnabled");
  return storedValue === null || storedValue === "true";
}

function updateGameEnabledToggleState() {
  gameToggle.checked = isGameEnabled();
}



// Import Party.js for celebrations
// retrieved from https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js as of January 17th, 2022
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("party",[],t):"object"==typeof exports?exports.party=t():e.party=t()}(self,(function(){return(()=>{"use strict";var e={"./src/components/circle.ts":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Circle=void 0;var r=function(){function e(e,t,r){void 0===r&&(r=0),this.x=e,this.y=t,this.radius=r}return e.zero=new e(0,0),e}();t.Circle=r},"./src/components/color.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0;var i=r("./src/systems/math.ts"),n=function(){function e(e,t,r){this.values=new Float32Array(3),this.rgb=[e,t,r]}return Object.defineProperty(e.prototype,"r",{get:function(){return this.values[0]},set:function(e){this.values[0]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"g",{get:function(){return this.values[1]},set:function(e){this.values[1]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"b",{get:function(){return this.values[2]},set:function(e){this.values[2]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rgb",{get:function(){return[this.r,this.g,this.b]},set:function(e){this.r=e[0],this.g=e[1],this.b=e[2]},enumerable:!1,configurable:!0}),e.prototype.mix=function(t,r){return void 0===r&&(r=.5),new e(i.lerp(this.r,t.r,r),i.lerp(this.g,t.g,r),i.lerp(this.b,t.b,r))},e.prototype.toHex=function(){var e=function(e){return e.toString(16).padStart(2,"0")};return"#"+e(this.r)+e(this.g)+e(this.b)},e.prototype.toString=function(){return"rgb("+this.values.join(", ")+")"},e.fromHex=function(t){return t.startsWith("#")&&(t=t.substr(1)),new e(parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16))},e.fromHsl=function(t,r,i){if(t/=360,i/=100,0===(r/=100))return new e(i,i,i);var n=function(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e},o=function(e){return Math.min(255,256*e)},s=i<.5?i*(1+r):i+r-i*r,a=2*i-s;return new e(o(n(a,s,t+1/3)),o(n(a,s,t)),o(n(a,s,t-1/3)))},e.white=new e(255,255,255),e.black=new e(0,0,0),e}();t.Color=n},"./src/components/gradient.ts":function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__spreadArray||function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Gradient=void 0;var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.interpolate=function(e,t,r){return e.mix(t,r)},t.solid=function(e){return new t({value:e,time:.5})},t.simple=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var i=1/(e.length-1);return new(t.bind.apply(t,o([void 0],e.map((function(e,t){return{value:e,time:t*i}})))))},t}(r("./src/components/spline.ts").Spline);t.Gradient=s},"./src/components/index.ts":function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r("./src/components/circle.ts"),t),n(r("./src/components/color.ts"),t),n(r("./src/components/gradient.ts"),t),n(r("./src/components/numericSpline.ts"),t),n(r("./src/components/rect.ts"),t),n(r("./src/components/vector.ts"),t)},"./src/components/numericSpline.ts":function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.NumericSpline=void 0;var o=r("./src/systems/math.ts"),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.interpolate=function(e,t,r){return o.slerp(e,t,r)},t}(r("./src/components/spline.ts").Spline);t.NumericSpline=s},"./src/components/rect.ts":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Rect=void 0;var r=function(){function e(e,t,r,i){void 0===r&&(r=0),void 0===i&&(i=0),this.x=e,this.y=t,this.width=r,this.height=i}return e.fromScreen=function(){return new e(window.scrollX,window.scrollY,window.innerWidth,window.innerHeight)},e.fromElement=function(t){var r=t.getBoundingClientRect();return new e(window.scrollX+r.x,window.scrollY+r.y,r.width,r.height)},e.zero=new e(0,0),e}();t.Rect=r},"./src/components/spline.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Spline=void 0;var i=r("./src/systems/math.ts"),n=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Splines require at least one key.");if(Array.isArray(e[0]))throw new Error("You are trying to pass an array to the spline constructor, which is not supported. Try to spread the array into the constructor instead.");this.keys=e}return e.prototype.evaluate=function(e){if(0===this.keys.length)throw new Error("Attempt to evaluate a spline with no keys.");if(1===this.keys.length)return this.keys[0].value;var t=this.keys.sort((function(e,t){return e.time-t.time})),r=t.findIndex((function(t){return t.time>e}));if(0===r)return t[0].value;if(-1===r)return t[t.length-1].value;var n=t[r-1],o=t[r],s=i.invlerp(n.time,o.time,e);return this.interpolate(n.value,o.value,s)},e}();t.Spline=n},"./src/components/vector.ts":function(e,t,r){var i=this&&this.__spreadArray||function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;var n=r("./src/systems/math.ts"),o=function(){function e(e,t,r){void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=0),this.values=new Float32Array(3),this.xyz=[e,t,r]}return Object.defineProperty(e.prototype,"x",{get:function(){return this.values[0]},set:function(e){this.values[0]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.values[1]},set:function(e){this.values[1]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"z",{get:function(){return this.values[2]},set:function(e){this.values[2]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"xyz",{get:function(){return[this.x,this.y,this.z]},set:function(e){this.values[0]=e[0],this.values[1]=e[1],this.values[2]=e[2]},enumerable:!1,configurable:!0}),e.prototype.magnitude=function(){return Math.sqrt(this.sqrMagnitude())},e.prototype.sqrMagnitude=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.scale=function(t){return"number"==typeof t?new e(this.x*t,this.y*t,this.z*t):new e(this.x*t.x,this.y*t.y,this.z*t.z)},e.prototype.normalized=function(){var t=this.magnitude();return 0!==t?this.scale(1/t):new(e.bind.apply(e,i([void 0],this.xyz)))},e.prototype.angle=function(e){return n.rad2deg*Math.acos((this.x*e.x+this.y*e.y+this.z*e.z)/(this.magnitude()*e.magnitude()))},e.prototype.cross=function(t){return new e(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},e.prototype.dot=function(e){return this.magnitude()*e.magnitude()*Math.cos(n.deg2rad*this.angle(e))},e.prototype.toString=function(){return"Vector("+this.values.join(", ")+")"},e.from2dAngle=function(t){return new e(Math.cos(t*n.deg2rad),Math.sin(t*n.deg2rad))},e.zero=new e(0,0,0),e.one=new e(1,1,1),e.right=new e(1,0,0),e.up=new e(0,1,0),e.forward=new e(0,0,1),e}();t.Vector=o},"./src/containers.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.particleContainer=t.debugContainer=t.rootContainer=void 0;var i=r("./src/settings.ts"),n=r("./src/util/index.ts");function o(e){return e&&e.isConnected}function s(e,t,r){var i=document.createElement("div");return i.id="party-js-"+e,Object.assign(i.style,t),r.appendChild(i)}t.rootContainer=new n.Lazy((function(){return s("container",{position:"fixed",left:"0",top:"0",height:"100vh",width:"100vw",pointerEvents:"none",userSelect:"none",zIndex:i.settings.zIndex.toString()},document.body)}),o),t.debugContainer=new n.Lazy((function(){return s("debug",{position:"absolute",top:"0",left:"0",margin:"0.5em",padding:"0.5em 1em",border:"2px solid rgb(0, 0, 0, 0.2)",background:"rgb(0, 0, 0, 0.1)",color:"#555",fontFamily:"monospace"},t.rootContainer.current)}),o),t.particleContainer=new n.Lazy((function(){return s("particles",{width:"100%",height:"100%",overflow:"hidden",perspective:"1200px"},t.rootContainer.current)}),o)},"./src/debug.ts":function(e,t,r){var i=this&&this.__spreadArray||function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Debug=void 0;var n=r("./src/containers.ts"),o=r("./src/settings.ts"),s=function(){function e(e){this.scene=e,this.refreshRate=8,this.refreshTimer=1/this.refreshRate}return e.prototype.tick=function(e){var t=n.debugContainer.current,r=o.settings.debug?"block":"none";t.style.display!==r&&(t.style.display=r),o.settings.debug&&(this.refreshTimer+=e,this.refreshTimer>1/this.refreshRate&&(this.refreshTimer=0,t.innerHTML=this.getDebugInformation(e).join("<br>")))},e.prototype.getDebugInformation=function(e){var t=this.scene.emitters.length,r=this.scene.emitters.reduce((function(e,t){return e+t.particles.length}),0),n=["<b>party.js Debug</b>","--------------","FPS: "+Math.round(1/e),"Emitters: "+t,"Particles: "+r],o=this.scene.emitters.map((function(e){return["⭯: "+(e.currentLoop+1)+"/"+(e.options.loops>=0?e.options.loops:"∞"),"Σp: "+e.particles.length,e.isExpired?"<i>expired</i>":"Σt: "+e.durationTimer.toFixed(3)+"s"].join(", ")}));return n.push.apply(n,i(["--------------"],o)),n},e}();t.Debug=s},"./src/index.ts":function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.forceInit=t.util=t.math=t.random=t.sources=t.variation=t.Emitter=t.Particle=t.settings=t.scene=void 0;var o=r("./src/scene.ts"),s=r("./src/util/index.ts");n(r("./src/components/index.ts"),t),n(r("./src/templates/index.ts"),t),n(r("./src/systems/shapes.ts"),t),n(r("./src/systems/modules.ts"),t),t.scene=new s.Lazy((function(){if("undefined"==typeof document||"undefined"==typeof window)throw new Error("It seems like you are trying to run party.js in a non-browser-like environment, which is not supported.");return new o.Scene}));var a=r("./src/settings.ts");Object.defineProperty(t,"settings",{enumerable:!0,get:function(){return a.settings}});var c=r("./src/particles/particle.ts");Object.defineProperty(t,"Particle",{enumerable:!0,get:function(){return c.Particle}});var u=r("./src/particles/emitter.ts");Object.defineProperty(t,"Emitter",{enumerable:!0,get:function(){return u.Emitter}}),t.variation=r("./src/systems/variation.ts"),t.sources=r("./src/systems/sources.ts"),t.random=r("./src/systems/random.ts"),t.math=r("./src/systems/math.ts"),t.util=r("./src/util/index.ts"),t.forceInit=function(){t.scene.current},t.default=r("./src/index.ts")},"./src/particles/emitter.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Emitter=void 0;var i=r("./src/components/vector.ts"),n=r("./src/settings.ts"),o=r("./src/systems/variation.ts"),s=r("./src/util/config.ts"),a=r("./src/particles/options/index.ts"),c=r("./src/particles/particle.ts"),u=function(){function e(e){this.particles=[],this.currentLoop=0,this.durationTimer=0,this.emissionTimer=0,this.attemptedBurstIndices=[],this.options=s.overrideDefaults(a.getDefaultEmitterOptions(),null==e?void 0:e.emitterOptions),this.emission=s.overrideDefaults(a.getDefaultEmissionOptions(),null==e?void 0:e.emissionOptions),this.renderer=s.overrideDefaults(a.getDefaultRendererOptions(),null==e?void 0:e.rendererOptions)}return Object.defineProperty(e.prototype,"isExpired",{get:function(){return this.options.loops>=0&&this.currentLoop>=this.options.loops},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"canRemove",{get:function(){return 0===this.particles.length},enumerable:!1,configurable:!0}),e.prototype.clearParticles=function(){return this.particles.splice(0).length},e.prototype.tick=function(e){if(!this.isExpired&&(this.durationTimer+=e,this.durationTimer>=this.options.duration&&(this.currentLoop++,this.durationTimer=0,this.attemptedBurstIndices=[]),!this.isExpired)){for(var t=0,r=0,i=this.emission.bursts;r<i.length;r++){var n=i[r];if(n.time<=this.durationTimer&&!this.attemptedBurstIndices.includes(t)){for(var s=o.evaluateVariation(n.count),a=0;a<s;a++)this.emitParticle();this.attemptedBurstIndices.push(t)}t++}this.emissionTimer+=e;for(var c=1/this.emission.rate;this.emissionTimer>c;)this.emissionTimer-=c,this.emitParticle()}var u=function(t){var r=l.particles[t];l.tickParticle(r,e),l.options.despawningRules.some((function(e){return e(r)}))&&l.particles.splice(t,1)},l=this;for(a=this.particles.length-1;a>=0;a--)u(a)},e.prototype.tickParticle=function(e,t){e.lifetime-=t,this.options.useGravity&&(e.velocity=e.velocity.add(i.Vector.up.scale(n.settings.gravity*t))),e.location=e.location.add(e.velocity.scale(t));for(var r=0,o=this.options.modules;r<o.length;r++){(0,o[r])(e)}},e.prototype.emitParticle=function(){var e=new c.Particle({location:this.emission.sourceSampler(),lifetime:o.evaluateVariation(this.emission.initialLifetime),velocity:i.Vector.from2dAngle(o.evaluateVariation(this.emission.angle)).scale(o.evaluateVariation(this.emission.initialSpeed)),size:o.evaluateVariation(this.emission.initialSize),rotation:o.evaluateVariation(this.emission.initialRotation),color:o.evaluateVariation(this.emission.initialColor)});return this.particles.push(e),this.particles.length>this.options.maxParticles&&this.particles.shift(),e},e}();t.Emitter=u},"./src/particles/options/emissionOptions.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultEmissionOptions=void 0;var i=r("./src/components/index.ts"),n=r("./src/systems/sources.ts");t.getDefaultEmissionOptions=function(){return{rate:10,angle:0,bursts:[],sourceSampler:n.rectSource(i.Rect.zero),initialLifetime:5,initialSpeed:5,initialSize:1,initialRotation:i.Vector.zero,initialColor:i.Color.white}}},"./src/particles/options/emitterOptions.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultEmitterOptions=void 0;var i=r("./src/util/rules.ts");t.getDefaultEmitterOptions=function(){return{duration:5,loops:1,useGravity:!0,maxParticles:300,despawningRules:[i.despawningRules.lifetime,i.despawningRules.bounds],modules:[]}}},"./src/particles/options/index.ts":function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r("./src/particles/options/emitterOptions.ts"),t),n(r("./src/particles/options/emissionOptions.ts"),t),n(r("./src/particles/options/renderOptions.ts"),t)},"./src/particles/options/renderOptions.ts":(e,t)=>{function r(e,t){var r=e.toHex();switch(t.nodeName.toLowerCase()){case"div":t.style.background=r;break;case"svg":t.style.fill=t.style.color=r;break;default:t.style.color=r}}function i(e,t){t.style.opacity=e.toString()}function n(e,t){t.style.filter="brightness("+(.5+Math.abs(e))+")"}function o(e,t){t.style.transform="translateX("+(e.location.x-window.scrollX).toFixed(3)+"px) translateY("+(e.location.y-window.scrollY).toFixed(3)+"px) translateZ("+e.location.z.toFixed(3)+"px) rotateX("+e.rotation.x.toFixed(3)+"deg) rotateY("+e.rotation.y.toFixed(3)+"deg) rotateZ("+e.rotation.z.toFixed(3)+"deg) scale("+e.size.toFixed(3)+")"}Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultRendererOptions=void 0,t.getDefaultRendererOptions=function(){return{shapeFactory:"square",applyColor:r,applyOpacity:i,applyLighting:n,applyTransform:o}}},"./src/particles/particle.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Particle=void 0;var i=r("./src/components/index.ts"),n=r("./src/util/config.ts"),o=function(e){var t=n.overrideDefaults({lifetime:0,size:1,location:i.Vector.zero,rotation:i.Vector.zero,velocity:i.Vector.zero,color:i.Color.white,opacity:1},e);this.id=Symbol(),this.size=this.initialSize=t.size,this.lifetime=this.initialLifetime=t.lifetime,this.rotation=this.initialRotation=t.rotation,this.location=t.location,this.velocity=t.velocity,this.color=t.color,this.opacity=t.opacity};t.Particle=o},"./src/particles/renderer.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Renderer=void 0;var i=r("./src/index.ts"),n=r("./src/components/vector.ts"),o=r("./src/containers.ts"),s=r("./src/systems/shapes.ts"),a=r("./src/util/index.ts"),c=function(){function e(){this.elements=new Map,this.light=new n.Vector(0,0,1),this.enabled=!0,this.enabled=!i.settings.respectReducedMotion||!window.matchMedia("(prefers-reduced-motion)").matches}return e.prototype.begin=function(){this.renderedParticles=[]},e.prototype.end=function(){for(var e=this.elements.keys(),t=e.next();!t.done;){var r=t.value;this.renderedParticles.includes(r)||(this.elements.get(r).remove(),this.elements.delete(r)),t=e.next()}return this.renderedParticles.length},e.prototype.renderParticle=function(e,t){if(this.enabled){var r=t.renderer,i=this.elements.has(e.id)?this.elements.get(e.id):this.createParticleElement(e,r);if(r.applyColor&&r.applyColor(e.color,i),r.applyOpacity&&r.applyOpacity(e.opacity,i),r.applyLighting){var n=a.rotationToNormal(e.rotation).dot(this.light);r.applyLighting(n,i)}r.applyTransform&&r.applyTransform(e,i),this.renderedParticles.push(e.id)}},e.prototype.createParticleElement=function(e,t){var r=s.resolveShapeFactory(t.shapeFactory).cloneNode(!0);return r.style.position="absolute",this.elements.set(e.id,o.particleContainer.current.appendChild(r)),r},e}();t.Renderer=c},"./src/scene.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Scene=void 0;var i=r("./src/debug.ts"),n=r("./src/particles/emitter.ts"),o=r("./src/particles/renderer.ts"),s=function(){function e(){this.emitters=[],this.debug=new i.Debug(this),this.renderer=new o.Renderer,this.scheduledTickId=void 0,this.lastTickTimestamp=performance.now(),this.tick=this.tick.bind(this),this.scheduleTick()}return e.prototype.createEmitter=function(e){var t=new n.Emitter(e);return this.emitters.push(t),t},e.prototype.clearEmitters=function(){return this.emitters.splice(0).length},e.prototype.clearParticles=function(){return this.emitters.reduce((function(e,t){return e+t.clearParticles()}),0)},e.prototype.scheduleTick=function(){this.scheduledTickId=window.requestAnimationFrame(this.tick)},e.prototype.cancelTick=function(){window.cancelAnimationFrame(this.scheduledTickId)},e.prototype.tick=function(e){var t=(e-this.lastTickTimestamp)/1e3;try{for(var r=0;r<this.emitters.length;r++){(o=this.emitters[r]).tick(t),o.isExpired&&o.canRemove&&this.emitters.splice(r--,1)}}catch(e){console.error("An error occurred while updating the scene's emitters:\n\""+e+'"')}try{this.renderer.begin();for(var i=0,n=this.emitters;i<n.length;i++)for(var o=n[i],s=0,a=o.particles;s<a.length;s++){var c=a[s];this.renderer.renderParticle(c,o)}this.renderer.end()}catch(e){console.error("An error occurred while rendering the scene's particles:\n\""+e+'"')}this.debug.tick(t),this.lastTickTimestamp=e,this.scheduleTick()},e}();t.Scene=s},"./src/settings.ts":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.settings=void 0,t.settings={debug:!1,gravity:800,zIndex:99999,respectReducedMotion:!0}},"./src/systems/math.ts":(e,t)=>{function r(e,t,r){return(1-r)*e+r*t}Object.defineProperty(t,"__esModule",{value:!0}),t.approximately=t.clamp=t.invlerp=t.slerp=t.lerp=t.epsilon=t.rad2deg=t.deg2rad=void 0,t.deg2rad=Math.PI/180,t.rad2deg=180/Math.PI,t.epsilon=1e-6,t.lerp=r,t.slerp=function(e,t,i){return r(e,t,(1-Math.cos(i*Math.PI))/2)},t.invlerp=function(e,t,r){return(r-e)/(t-e)},t.clamp=function(e,t,r){return Math.min(r,Math.max(t,e))},t.approximately=function(e,r){return Math.abs(e-r)<t.epsilon}},"./src/systems/modules.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleBuilder=void 0;var i=r("./src/components/index.ts"),n=function(){function e(){this.factor="lifetime",this.isRelative=!1}return e.prototype.drive=function(e){return this.driverKey=e,this},e.prototype.through=function(e){return this.factor=e,this},e.prototype.by=function(e){return this.driverValue=e,this},e.prototype.relative=function(e){return void 0===e&&(e=!0),this.isRelative=e,this},e.prototype.build=function(){var e=this;if(void 0===this.driverKey)throw new Error("No driving key was provided in the module builder. Did you forget a '.drive()' call?");if(void 0===this.driverValue)throw new Error("No driving value was provided in the module builder. Did you forget a '.through()' call?");return function(t){o(t,e.driverKey,function(e,t,r){if("object"==typeof e&&"evaluate"in e)return e.evaluate(t);if("function"==typeof e)return e(t,r);return e}(e.driverValue,function(e,t){switch(e){case"lifetime":return t.initialLifetime-t.lifetime;case"relativeLifetime":return(t.initialLifetime-t.lifetime)/t.initialLifetime;case"size":return t.size;default:throw new Error("Invalid driving factor '"+e+"'.")}}(e.factor,t),t),e.isRelative)}},e}();function o(e,t,r,n){if(void 0===n&&(n=!1),n){var s=e["initial"+t[0].toUpperCase()+t.substr(1)];if(void 0===s)throw new Error("Unable to use relative chaining with key '"+t+"'; no initial value exists.");if(r instanceof i.Vector)o(e,t,s.add(r));else{if("number"!=typeof r)throw new Error("Unable to use relative chaining with particle key '"+t+"'; no relative operation for '"+r+"' could be inferred.");o(e,t,s*r)}}else e[t]=r}t.ModuleBuilder=n},"./src/systems/random.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomInsideCircle=t.randomInsideRect=t.randomUnitVector=t.pick=t.randomRange=void 0;var i=r("./src/components/index.ts"),n=r("./src/systems/math.ts");function o(e,t){return void 0===e&&(e=0),void 0===t&&(t=1),n.lerp(e,t,Math.random())}t.randomRange=o,t.pick=function(e){return 0===e.length?void 0:e[Math.floor(Math.random()*e.length)]},t.randomUnitVector=function(){var e=o(0,2*Math.PI),t=o(-1,1);return new i.Vector(Math.sqrt(1-t*t)*Math.cos(e),Math.sqrt(1-t*t)*Math.sin(e),t)},t.randomInsideRect=function(e){return new i.Vector(e.x+o(0,e.width),e.y+o(0,e.height))},t.randomInsideCircle=function(e){var t=o(0,2*Math.PI),r=o(0,e.radius);return new i.Vector(e.x+Math.cos(t)*r,e.y+Math.sin(t)*r)}},"./src/systems/shapes.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resolveShapeFactory=t.resolvableShapes=void 0;var i=r("./src/systems/variation.ts");t.resolvableShapes={square:'<div style="height: 10px; width: 10px;"></div>',rectangle:'<div style="height: 6px; width: 10px;"></div>',circle:'<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1" fill="currentColor"/></svg>',roundedSquare:'<div style="height: 10px; width: 10px; border-radius: 3px;"></div>',roundedRectangle:'<div style="height: 6px; width: 10px; border-radius: 3px;"></div>',star:'<svg viewBox="0 0 512 512" width="15" height="15"><polygon fill="currentColor" points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842"/></svg>'},t.resolveShapeFactory=function(e){var r=i.evaluateVariation(e);if("string"==typeof r){var n=t.resolvableShapes[r];if(!n)throw new Error("Failed to resolve shape key '"+r+"'. Did you forget to add it to the 'resolvableShapes' lookup?");var o=document.createElement("div");return o.innerHTML=n,o.firstElementChild}return r}},"./src/systems/sources.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.circleSource=t.rectSource=t.mouseSource=t.elementSource=t.dynamicSource=void 0;var i=r("./src/components/index.ts"),n=r("./src/systems/random.ts");function o(e){return function(){return n.randomInsideRect(i.Rect.fromElement(e))}}function s(e){return function(){return new i.Vector(window.scrollX+e.clientX,window.scrollY+e.clientY)}}function a(e){return function(){return n.randomInsideRect(e)}}function c(e){return function(){return n.randomInsideCircle(e)}}t.dynamicSource=function(e){if(e instanceof HTMLElement)return o(e);if(e instanceof i.Circle)return c(e);if(e instanceof i.Rect)return a(e);if(e instanceof MouseEvent)return s(e);throw new Error("Cannot infer the source type of '"+e+"'.")},t.elementSource=o,t.mouseSource=s,t.rectSource=a,t.circleSource=c},"./src/systems/variation.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.gradientSample=t.splineSample=t.skewRelative=t.skew=t.range=t.evaluateVariation=void 0;var i=r("./src/systems/random.ts");function n(e){return function(){return e.evaluate(Math.random())}}t.evaluateVariation=function(e){return Array.isArray(e)?i.pick(e):"function"==typeof e?e():e},t.range=function(e,t){return function(){return i.randomRange(e,t)}},t.skew=function(e,t){return function(){return e+i.randomRange(-t,t)}},t.skewRelative=function(e,t){return function(){return e*(1+i.randomRange(-t,t))}},t.splineSample=n,t.gradientSample=function(e){return n(e)}},"./src/templates/confetti.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.confetti=void 0;var i=r("./src/index.ts"),n=r("./src/components/index.ts"),o=r("./src/systems/modules.ts"),s=r("./src/systems/random.ts"),a=r("./src/systems/sources.ts"),c=r("./src/systems/variation.ts"),u=r("./src/util/index.ts");t.confetti=function(e,t){var r=u.overrideDefaults({count:c.range(20,40),spread:c.range(35,45),speed:c.range(300,600),size:c.skew(1,.2),rotation:function(){return s.randomUnitVector().scale(180)},color:function(){return n.Color.fromHsl(s.randomRange(0,360),100,70)},modules:[(new o.ModuleBuilder).drive("size").by((function(e){return Math.min(1,3*e)})).relative().build(),(new o.ModuleBuilder).drive("rotation").by((function(e){return new n.Vector(140,200,260).scale(e)})).relative().build()],shapes:["square","circle"]},t);return i.scene.current.createEmitter({emitterOptions:{loops:1,duration:8,modules:r.modules},emissionOptions:{rate:0,bursts:[{time:0,count:r.count}],sourceSampler:a.dynamicSource(e),angle:c.skew(-90,c.evaluateVariation(r.spread)),initialLifetime:8,initialSpeed:r.speed,initialSize:r.size,initialRotation:r.rotation,initialColor:r.color},rendererOptions:{shapeFactory:r.shapes}})}},"./src/templates/index.ts":function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r("./src/templates/confetti.ts"),t),n(r("./src/templates/sparkles.ts"),t)},"./src/templates/sparkles.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sparkles=void 0;var i=r("./src/index.ts"),n=r("./src/components/index.ts"),o=r("./src/systems/modules.ts"),s=r("./src/systems/random.ts"),a=r("./src/systems/sources.ts"),c=r("./src/systems/variation.ts"),u=r("./src/util/index.ts");t.sparkles=function(e,t){var r=u.overrideDefaults({lifetime:c.range(1,2),count:c.range(10,20),speed:c.range(100,200),size:c.range(.8,1.8),rotation:function(){return new n.Vector(0,0,s.randomRange(0,360))},color:function(){return n.Color.fromHsl(50,100,s.randomRange(55,85))},modules:[(new o.ModuleBuilder).drive("rotation").by((function(e){return new n.Vector(0,0,200).scale(e)})).relative().build(),(new o.ModuleBuilder).drive("size").by(new n.NumericSpline({time:0,value:0},{time:.3,value:1},{time:.7,value:1},{time:1,value:0})).through("relativeLifetime").relative().build(),(new o.ModuleBuilder).drive("opacity").by(new n.NumericSpline({time:0,value:1},{time:.5,value:1},{time:1,value:0})).through("relativeLifetime").build()]},t);return i.scene.current.createEmitter({emitterOptions:{loops:1,duration:3,useGravity:!1,modules:r.modules},emissionOptions:{rate:0,bursts:[{time:0,count:r.count}],sourceSampler:a.dynamicSource(e),angle:c.range(0,360),initialLifetime:r.lifetime,initialSpeed:r.speed,initialSize:r.size,initialRotation:r.rotation,initialColor:r.color},rendererOptions:{applyLighting:void 0,shapeFactory:"star"}})}},"./src/util/config.ts":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.overrideDefaults=void 0,t.overrideDefaults=function(e,t){return Object.assign({},e,t)}},"./src/util/index.ts":function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r("./src/util/config.ts"),t),n(r("./src/util/rotation.ts"),t),n(r("./src/util/rules.ts"),t),n(r("./src/util/lazy.ts"),t)},"./src/util/lazy.ts":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Lazy=void 0;var r=function(){function e(t,r){void 0===r&&(r=e.defaultExists),this.factory=t,this.exists=r}return Object.defineProperty(e.prototype,"current",{get:function(){return this.exists(this.value)||(this.value=this.factory()),this.value},enumerable:!1,configurable:!0}),e.defaultExists=function(e){return void 0!==e},e}();t.Lazy=r},"./src/util/rotation.ts":(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rotationToNormal=void 0;var i=r("./src/components/index.ts"),n=r("./src/systems/math.ts");t.rotationToNormal=function(e){var t=e.x*n.deg2rad,r=e.y*n.deg2rad,o=new i.Vector(Math.cos(r),0,Math.sin(r)),s=new i.Vector(0,Math.cos(t),Math.sin(t));return o.cross(s)}},"./src/util/rules.ts":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.despawningRules=void 0,t.despawningRules={lifetime:function(e){return e.lifetime<=0},bounds:function(e){var t=document.documentElement.scrollHeight;return e.location.y>t}}}},t={};var r=function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,r),o.exports}("./src/index.ts");return r=r.default})()}));
//# sourceMappingURL=party.min.js.map
