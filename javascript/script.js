const startButton = document.querySelector("[data-button-start]");
const pauseButton = document.querySelector("[data-button-pause]");
const resetButton = document.querySelector("[data-button-reset]");
const endButton = document.querySelector("[data-button-end]");
const continueButton = document.querySelector("[data-button-continue]");
var workCycleText = document.getElementById("work-cycle-counter");

// const integerRegex = /\d+/;
// const match = string.match(regex);
// const value = parseInt(match[0]);

// console.log(value); // 25
// TODO: Change input from static to user input

// Can be used to track total number of loops

var workTimerDuration =
  parseInt(document.getElementById("timer-input-work-value").innerHTML, 10) *
  60; // Currently in SECONDS
var breakTimerDuration =
  parseInt(document.getElementById("timer-input-break-value").innerHTML, 10) *
  60; // Currently in SECONDS

var timerActive = false;
var timerPause = false;
var endSession = false;
// TODO: Can display # of workCycleCounter and cycle short with long break if % 4 === 0

// some aysnc? function await?
// throw it in some sort of loop to repeat call timerCountdown

//  number of cycles before long break: 3
//  length of work cycle: 25min -  workTimerDuration
//  length of short-break cycle: 5 mins - breakTimerDuration
//  length of long-break cycle: 30 mins - breakTimerDuration * 6

// [workTimerDuration, breakTimerDuration, workTimerDuration, breakTimerDuration, workTimerDuration, breakTimerDuration * 6]

// how many workcycles you want to do
// > 10
//     > every 3 work cycles = 1 long break
// >
function resetState() {
  // console.log('Resetting pause and active')
  timerPause = false;
  timerActive = false;
}

function timerCountdown(timerDuration) {
  // var workCycleCounter = 0
  // workCycleCounter += 1
  clearInterval(timer);
  var timer = setInterval(() => {
    // workCycleText.innerHTML = workCycleCounter
    timerDuration -= 1;
    pauseTimeValue = timerDuration;
    // console.log(timerDuration);
    var minutes = Math.floor(timerDuration / 60);
    var seconds = Math.floor(timerDuration % 60);
    if (timerDuration >= 0 && timerActive === true && timerPause === false) {
      // console.log('timer tick - if');
      document.getElementById("timer-minutes").innerHTML = minutes + "mins";
      document.getElementById("timer-seconds").innerHTML = seconds + "seconds";
    } else {
      // workCycleText.innerHTML = workCycleCounter
      console.log("timer tick - else");
      clearInterval(timer);
    }
    // console.log("Test String");
    // }, 1000); // TODO: Reset back to 1s timer
  }, 100);
}

var workSession = false;

startButton.addEventListener("click", () => {
  // console.log('Start clicked');
  // setInterval(() => {
  if (timerActive === false) {
    timerActive = true;
    // workSession = true;
    // console.log("startButton timerCountdown starting");
    timerCountdown(workTimerDuration);
  } else {
    console.log("There is already a timer active");
  }
  // }, 1000);
  // setInterval(() => {
  //   if (timerActive === false && workSession === false) {
  //     timerActive = true;
  //     workSession = true;
  //     // console.log("startButton timerCountdown starting");
  //     timerCountdown(workTimerDuration);
  //   } else if (timerActive === true && workSession === true) {
  //     // timerActive = true;
  //     timerCountdown(breakTimerDuration);
  //   } else {
  //     console.log("There is already a timer active");
  //   }
  // }, 1000);
});

pauseButton.addEventListener("click", () => {
  // console.log('Pause clicked');
  timerPause = true;
  // console.log(`pauseTimeValue - ${pauseTimeValue}`);
});

continueButton.addEventListener("click", () => {
  // console.log('Continue button pressed');
  timerPause = false;
  timerCountdown(pauseTimeValue + 1);
});

resetButton.addEventListener("click", () => {
  // console.log('resetButton pressed');
  if (timerActive === true) {
    resetState();
    workTimerDuration =
      parseInt(
        document.getElementById("timer-input-work-value").innerHTML,
        10
      ) * 60;
    // Can probably refactor this section
    var minutes = Math.floor(workTimerDuration / 60);
    var seconds = Math.floor(workTimerDuration % 60);
    document.getElementById("timer-minutes").innerHTML = minutes + "mins";
    document.getElementById("timer-seconds").innerHTML = seconds + "seconds";
    //
  } else {
    console.log("No active timer to reset");
  }
});

// endButton.addEventListener('click', () => {
//   console.log('endButton pressed');
//   resetState();
//   // endSession = true
// })
