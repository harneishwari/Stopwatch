let timerInterval;
let timeLeft = 0;

function startTimer(durationInSeconds) {
  clearInterval(timerInterval);
  const startTime = Date.now();
  
  timerInterval = setInterval(() => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    timeLeft = durationInSeconds - elapsedTime;
    
    if (timeLeft >= 0) {
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timeLeft = 0;
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  document.getElementById('timer').textContent = formattedTime;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

document.getElementById('start').addEventListener('click', () => {
  const duration = 3600; 
  startTimer(duration);
});

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(timerInterval);
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval);
  timeLeft = 0;
  updateTimerDisplay();
});