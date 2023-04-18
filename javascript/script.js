const startButton = document.querySelector('[data-button-start]')
const pauseButton = document.querySelector('[data-button-pause]')
const resetButton = document.querySelector('[data-button-reset]')

// const integerRegex = /\d+/;
// const match = string.match(regex);
// const value = parseInt(match[0]);

console.log(value); // 25


startButton.addEventListener('click', () => {
  // alert("Start button clicked")
  // workTimer(currentTime)
  var workTimerDuration = parseInt(document.getElementById("timer-input-value").innerHTML, 10) * 60 // Currently in SECONDS
  workTimerCountdown(workTimerDuration)
})

function workTimerCountdown(workTimerDuration) {
  var timer = setInterval(() => {
    workTimerDuration -= 1
    // console.log(workTimerDuration);

    if (workTimerDuration >= 0) {
      var minutes = Math.floor(workTimerDuration / 60)
      var seconds = Math.floor(workTimerDuration % 60)

      document.getElementById("timer-minutes").innerHTML = minutes;
      document.getElementById("timer-seconds").innerHTML = seconds;
    } else {
      document.getElementById("timer-minutes").innerHTML = "donezo";
      document.getElementById("timer-seconds").innerHTML = "beep beep ";
    };
  }, 1000);
}

pauseButton.addEventListener('click', () => {
  clearInterval(window.timer)
})
