// Set target date
const target = new Date("2026-10-01T00:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("timer").innerText = "Time's up!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerText =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// update every second
setInterval(updateTimer, 1000);
updateTimer();
