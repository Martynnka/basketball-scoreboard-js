let scorehome = document.getElementById("HomeScore")
let scoreguest = document.getElementById("GuestScore")
let periodnum = document.getElementById("Period")
let timer = document.getElementById("Time")

let scoreh = 0

let scoreg = 0

function add1home()
{ 
    scoreh = scoreh + 1
    scorehome.textContent = scoreh
    console.log("Home Points: " + scoreh)
}

function add2home()
{ 
    scoreh = scoreh + 2
    scorehome.textContent = scoreh
    console.log("Home Points: " + scoreh)
}

function add3home()
{ 
    scoreh = scoreh + 3
    scorehome.textContent = scoreh
    console.log("Home Points: " + scoreh)
}

function sub1home()
{ 
    if(scoreh == 0)
    {
        scorehome.textContent = 0
        console.log("Home Points: " + scoreh)
    }
    else
    {
    scoreh = scoreh - 1
    scorehome.textContent = scoreh
    console.log("Home Points: " + scoreh)
    }
}

function add1guest()
{ 
    scoreg = scoreg + 1
    scoreguest.textContent = scoreg
    console.log("Guest Points: " + scoreg)
}

function add2guest()
{ 
    scoreg = scoreg + 2
    scoreguest.textContent = scoreg
    console.log("Guest Points: " + scoreg)
}

function add3guest()
{ 
    scoreg = scoreg + 3
    scoreguest.textContent = scoreg
    console.log("Guest Points: " + scoreg)
}

function sub1guest()
{ 
    if(scoreg == 0)
    {
        scoreguest.textContent = 0
        console.log("Guest Points: " + scoreg)
    }
    else
    {
    scoreg = scoreg - 1
    scoreguest.textContent = scoreg
    console.log("Guest Points: " + scoreg)
    }
}

let periodnumber = 1;

function periodplus()
{
    periodnumber++;
    
    if (periodnumber <= 4)
        {
            periodnum.textContent = periodnumber;
             console.log("Period: " + periodnumber)
        } 
        else 
            {
                periodnum.textContent = (periodnumber - 4) + " OT";

                 console.log("Period: " + periodnumber)
            }
}

function periodminus()
{
    periodnumber = 1;
    periodnum.textContent = periodnumber;
    console.log("Period: " + periodnumber)
    return;
}

//Timer

let totalSeconds = 10 * 60; 
let interval = null;

function updateTimerDisplay() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  timer.textContent =
    minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

    console.log("Time: " +  minutes + ":" + (seconds < 10 ? "0" + seconds : seconds))
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
