const startButton = document.querySelector('[data-button-start]')
const pauseButton = document.querySelector('[data-button-pause]')
const resetButton = document.querySelector('[data-button-reset]')

var countDownDate = new Date("Jan 5, 2024 15:28:00").getTime();

startButton.addEventListener('click', () => {
  // alert("Start button clicked")
  // workTimer(currentTime)
  var workTimerDuration = parseInt(document.getElementById("timer-input-value").innerHTML, 10) * 60 // Currently in SECONDS
  workTimerCountdown(workTimerDuration)
})

function workTimerCountdown(workTimerDuration) {
  setInterval(() => {
    workTimerDuration -= 1
    // console.log(workTimerDuration);
    var minutes = Math.floor(workTimerDuration / 60)
    var seconds = Math.floor(workTimerDuration % 60)

    document.getElementById("timer-minutes").innerHTML = minutes;
    document.getElementById("timer-seconds").innerHTML = seconds;
  }, 1000);
}
