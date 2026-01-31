let scorehome = document.getElementById("HomeScore")
let scoreguest = document.getElementById("GuestScore")
let timer = document.getElementById("Time")

let scoreh = 0

let scoreg = 0

function add1home()
{ 
    scoreh = scoreh + 1
    scorehome.textContent = scoreh
    console.log(scoreh)
}

function add2home()
{ 
    scoreh = scoreh + 2
    scorehome.textContent = scoreh
    console.log(scoreh)
}

function add3home()
{ 
    scoreh = scoreh + 3
    scorehome.textContent = scoreh
    console.log(scoreh)
}

function sub1home()
{ 
    if(scoreh == 0)
    {
        scorehome.textContent = 0
        console.log(scoreh)
    }
    else
    {
    scoreh = scoreh - 1
    scorehome.textContent = scoreh
    console.log(scoreh)
    }
}

function add1guest()
{ 
    scoreg = scoreg + 1
    scoreguest.textContent = scoreg
    console.log(scoreg)
}

function add2guest()
{ 
    scoreg = scoreg + 2
    scoreguest.textContent = scoreg
    console.log(scoreg)
}

function add3guest()
{ 
    scoreg = scoreg + 3
    scoreguest.textContent = scoreg
    console.log(scoreg)
}

function sub1guest()
{ 
    if(scoreg == 0)
    {
        scoreguest.textContent = 0
        console.log(scoreg)
    }
    else
    {
    scoreg = scoreg - 1
    scoreguest.textContent = scoreg
    console.log(scoreg)
    }
}


//Timer

let totalSeconds = 10 * 60; 
let interval = null;

function updateTimerDisplay() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  timer.textContent =
    minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
}

function startTimer() {
  if (interval !== null) return; 

  interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval);
      interval = null;
      timer.textContent = "00:00";
      return;
    }

    totalSeconds--;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  totalSeconds = 10 * 60;
  updateTimerDisplay();
}