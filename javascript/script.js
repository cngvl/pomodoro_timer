const startButton = document.querySelector('[data-button-start]')
const pauseButton = document.querySelector('[data-button-pause]')
const resetButton = document.querySelector('[data-button-reset]')

// const integerRegex = /\d+/;
// const match = string.match(regex);
// const value = parseInt(match[0]);

// console.log(value); // 25

// Can be used to track total number of loops
// var timerCycles = 0

var workTimerDuration = parseInt(document.getElementById("timer-input-value").innerHTML, 10) * 60 // Currently in SECONDS

startButton.addEventListener('click', () => {
  // alert("Start button clicked")
  if (timerActive === false) {
    timerActive = true
    workTimerCountdown(workTimerDuration)
    startButton.classList.toggle("active-timer")
  } else {
    console.log('There is already a timer active');
  }
})

var timerActive = false

function workTimerCountdown(workTimerDuration) {
  var timer = setInterval(() => {
    workTimerDuration -= 1
    testTimeValue = workTimerDuration
    // console.log(workTimerDuration);
    var minutes = Math.floor(workTimerDuration / 60)
    var seconds = Math.floor(workTimerDuration % 60)
    if (workTimerDuration >= 0 && timerActive === true) {
      document.getElementById("timer-minutes").innerHTML = minutes + "mins";
      document.getElementById("timer-seconds").innerHTML = seconds + "seconds";
      console.log('timer tick - if');
    }
      else {
    //   document.getElementById("timer-minutes").innerHTML = "donezo";
    //   document.getElementById("timer-seconds").innerHTML = "beep beep ";
      console.log('timer tick - else');
      clearInterval(timer)
      console.log(workTimerDuration);
    };
  // }, 1000);
  }, 100);
}

pauseButton.addEventListener('click', () => {
  // clearInterval(window.timer)
  // console.log('Pause clicked');
  console.log(testTimeValue);
})

resetButton.addEventListener('click', () => {
  // console.log('resetButton pressed');
  if (timerActive === true) {
    timerActive = false
    startButton.classList.toggle("active-timer")
    workTimerDuration = parseInt(document.getElementById("timer-input-value").innerHTML, 10) * 60
    // Can probably refactor this section
    var minutes = Math.floor(workTimerDuration / 60)
    var seconds = Math.floor(workTimerDuration % 60)
    document.getElementById("timer-minutes").innerHTML = minutes + "mins";
    document.getElementById("timer-seconds").innerHTML = seconds + "seconds";
    //
  } else {
    console.log('No active timer to reset');
  }
})
