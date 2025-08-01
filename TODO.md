# ToDo:
✅ - Change the menu background color and layout to be better looking.
✅ - Fix layout and design of the scoreboard. The labels and numbers are too distracting. Make less distracting.
✅ - Change dashboard metrics to be: Emails (which measures both getting rid of emails and also sending out emails), Time Saved, Score, and Level. If there's a streak going on then show that in between score and level.
✅ - Level up (WIP. We have defined levels, and a function called getCurrentLevel() that returns the current level name. But we still need a way to identify if a level just levelled up. And if so, to initiate a celebration of that levelling up.)
✅ - Streaks are broken. Fix them.
- Save max streak value to storage (WIP. ALMOST DONE. NEED TO SAVE LONGESTSTREAK TO STORAGE)
- Display daily summary in menu. Allow user to tweet their progress.
   - Number of emails handled (in past 24 hours)
   - Amount of time saved (in past 24 hours and over all time)
   - Current level
   - Points (all time)
   - Longest streak (all time)
   - Inbox Zeroes (all time)
- Fix the send button not working
- Add support for deleting emails (treat it like archiving)
- Add donate button
- Add todo section to the menu
- Add support for keyboard shortcuts
- Use a zoomMessage after every SEND. Continue to only use it rarely for archiving or deleting.
- Some way for the player to slow the clock to write big emails. For example, they might earn time warps that they can use to add time to the timer. Or use a power-up to stop the clock for 30 seconds. Or maybe they just click a button called "Reply Mode" that gives them more time (but if they don't send the email at the end, then they get a penalty for using reply mode when they weren't replying).
- Add a way to know if we have inbox zero.
- Add special zen-like relief-inducing celebration for inbox zero (slow fade to white with a fade-in of a congratulations message and a prompt to share the love? "All done." "Peace." Maybe with a slowly scrolling relaxing story, like Minecraft's ending. Something that intrigues, and hints at being in (and overcoming) an epic onslaught, but with a tinge of resignation that this was but one of many battles, in an eternal war with no end. How does our protagonist.)

## Mechanics
- Timer ✅
- Points ✅
- Milestones ✅
- Streaks ✅
- Levels ✅
- Daily login rewards (weekday streaks)
- Super bonuses for getting to inbox zero at least once a day for many days on end
- Powerups
- Sounds
- Focus mode (hides tons of stuff. focuses the user on one email at a time. no search bar. no sidebar. just one email at a time.)
- Leaderboards (not sure how to do this. twitter? mailto and a server to listen? just login and post? a special UI in the menu modal to directly update?)
- Achievements:
    - Epic response / Massive response
    - Rapid action (quick archiving)
    - Destroyer of worlds (mass deletion)
    - *SNAP* The Snappening (deleting more than half of the page)

## Suggested by others:
- Quests/Challenges: Introduce daily, weekly, or custom challenges that encourage players to complete specific tasks or hit certain targets for bonus rewards.
- Social features: Implement friend lists, messaging systems, and collaboration features that allow players to team up or compete against each other, fostering a sense of community.
- Random events: Occasionally trigger random events that can either help or hinder the player's progress, adding an element of surprise and excitement to the game.
- Time-limited events: Host special events, holiday-themed content, or limited-time challenges to keep players engaged and coming back for more.
- Daily login rewards: Encourage players to log in regularly by offering daily rewards that increase in value with consecutive logins.
- Combo system: Reward players for performing certain actions in quick succession, like clearing emails or completing tasks, with bonus points or other perks.
- Milestone rewards: Offer exclusive rewards for players who reach significant milestones, such as clearing a certain number of emails, maintaining a long streak, or reaching high levels. (Maybe an Inbox Zero Bonus?)
