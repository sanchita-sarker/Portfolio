let seconds = 0;
let interval = null;

function start() {
  if (interval === null) {
    interval = setInterval(() => {
      seconds += 3;
      updateDisplay();
      if (seconds >= 30) {
        reset();
      }
    }, 3000); 
  }
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  updateDisplay();
}

function updateDisplay() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById("display").textContent = `${mins}:${secs}`;
}