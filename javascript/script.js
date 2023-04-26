const startButton = document.querySelector('[data-button-start]')
const pauseButton = document.querySelector('[data-button-pause]')
const resetButton = document.querySelector('[data-button-reset]')
const continueButton = document.querySelector('[data-button-continue]')
var workCycleText = document.getElementById("work-cycle-counter")

// const integerRegex = /\d+/;
// const match = string.match(regex);
// const value = parseInt(match[0]);

// console.log(value); // 25
// TODO: Change input from static to user input

// Can be used to track total number of loops

var workTimerDuration = parseInt(document.getElementById("timer-input-work-value").innerHTML, 10) * 60 // Currently in SECONDS
var breakTimerDuration = parseInt(document.getElementById("timer-input-break-value").innerHTML, 10) * 60 // Currently in SECONDS

var timerActive = false
var timerPause = false
// TODO: Can display # of workCycleCounter and cycle short with long break if % 4 === 0

function timerCountdown(workTimerDuration) {
  // var workCycleCounter = 0
  // workCycleCounter += 1
  var timer = setInterval(() => {
    // workCycleText.innerHTML = workCycleCounter
    workTimerDuration -= 1
    pauseTimeValue = workTimerDuration
    // console.log(workTimerDuration);
    var minutes = Math.floor(workTimerDuration / 60)
    var seconds = Math.floor(workTimerDuration % 60)
    if (workTimerDuration >= 0 && timerActive === true && timerPause === false) {
      document.getElementById("timer-minutes").innerHTML = minutes + "mins";
      document.getElementById("timer-seconds").innerHTML = seconds + "seconds";
      // console.log('timer tick - if');
    }
    else {
      // workCycleText.innerHTML = workCycleCounter
      //   document.getElementById("timer-minutes").innerHTML = "donezo";
      //   document.getElementById("timer-seconds").innerHTML = "beep beep ";
      console.log('timer tick - else');
      clearInterval(timer)
      // console.log(pauseTimeValue + 1);
    };
    // }, 1000); // TODO: Reset back to 1s timer
  }, 100);
}

startButton.addEventListener('click', () => {
  // alert("Start button clicked")
  if (timerActive === false) {
    timerActive = true
    timerCountdown(workTimerDuration)
    startButton.classList.add("active-timer")
  } else {
    console.log('There is already a timer active');
  }
})

pauseButton.addEventListener('click', () => {
  // console.log('Pause clicked');
  timerPause = true
  console.log( `pauseTimeValue - ${pauseTimeValue}`);
})

continueButton.addEventListener('click', () => {
  // console.log('Continue button pressed');
  timerPause = false
  timerCountdown(pauseTimeValue + 1)
})

resetButton.addEventListener('click', () => {
  // console.log('resetButton pressed');
  if (timerActive === true) {
    timerActive = false
    startButton.classList.remove("active-timer")
    workTimerDuration = parseInt(document.getElementById("timer-input-work-value").innerHTML, 10) * 60
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
