let team1Score = 0;
let team2Score = 0;
let raidTimerInterval, matchTimerInterval;
let raidTime = 30;
let matchTime = 15 * 60; // 15 minutes in seconds

// Update team name
function updateTeamName(team) {
  const inputId = `${team}-name-input`;
  const buttonId = `${team}-name-btn`;
  const nameId = `${team}-name`;
  const boxId = `${team}-name-box`;

  const inputField = document.getElementById(inputId);
  const button = document.getElementById(buttonId);
  const box = document.getElementById(boxId);
  const name = inputField.value;

  if (name.trim() !== "") {
    document.getElementById(nameId).textContent = name;

    // Add fade-out animation
    box.classList.add("fade-out");

    // Remove input and button after the animation ends
    setTimeout(() => {
      box.remove();
    }, 500); // Match the animation duration
  } else {
    alert("Please enter a valid team name.");
  }
}


// Update score
function addScore(team) {
  if (team === 'team1') {
    team1Score++;
    document.getElementById('team1-score').textContent = team1Score;
  } else if (team === 'team2') {
    team2Score++;
    document.getElementById('team2-score').textContent = team2Score;
  }
}

// Raid Timer
function startRaidTimer() {
  stopRaidTimer(); // Clear existing timer
  raidTimerInterval = setInterval(() => {
    if (raidTime > 0) {
      raidTime--;
      document.getElementById('raid-timer').textContent = raidTime;
    } else {
      stopRaidTimer();
    }
  }, 1000);
}

function stopRaidTimer() {
  clearInterval(raidTimerInterval);
}

function resetRaidTimer() {
  stopRaidTimer();
  raidTime = 30;
  document.getElementById('raid-timer').textContent = raidTime;
}

// Match Timer
function startMatchTimer() {
  stopMatchTimer(); // Clear existing timer
  matchTimerInterval = setInterval(() => {
    if (matchTime > 0) {
      matchTime--;
      document.getElementById('match-timer').textContent = formatTime(matchTime);
    } else {
      stopMatchTimer();
    }
  }, 1000);
}

function stopMatchTimer() {
  clearInterval(matchTimerInterval);
}

function rechargeMatchTimer() {
  matchTime = 15 * 60; // Reset to 15 minutes
  document.getElementById('match-timer').textContent = formatTime(matchTime);
}

// Helper to format time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// This is Chatbot
