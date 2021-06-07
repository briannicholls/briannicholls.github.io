let TIMER_RUNNING = false
let INTERVAL = 7
let TIMER = null

window.onload = () => {
  // get DOM nodes
  const startButton = document.querySelector('button')
  const input       = document.getElementById('intervalInput')
  const h1          = document.querySelector('h1')
  const audio       = document.querySelector('audio')
  const unessentials = document.querySelectorAll('.hide-during-game')

  // begin main loop
  const runLoop = () => {
    // calculate game interval based on current value, then begin game
    const intervalMilliseconds = INTERVAL * 1000

    // initialize game before main loop
    let breath = 'Inhale'
    
    // set to TIMER global var so we can stop it later
    // main loop function
    TIMER = setInterval(() => {
      // check if user stopped process
      if (!TIMER_RUNNING) { return; };
      h1.innerHTML = breath   // set display text
      audio.play();           // play audio
      console.log(new Date()) // time stamp

      breath = breath === 'Exhale' ? 'Inhale' : 'Exhale' // toggle breath var
     }, intervalMilliseconds)
  }

  const startTimer = () => {
    TIMER_RUNNING = true  // set global var
    startButton.innerHTML = 'Stop Timer' // set display text
    input.disabled = true                // disable input
    h1.innerHTML = 'Get ready, Exhale...'
    // hide unessential items
    unessentials.forEach(element => {
      element.classList.add('hide')
    });
    
    runLoop() // begin main loop
  }

  const stopTimer = () => {
    TIMER_RUNNING = false // set global var
    clearInterval(TIMER)  // stop main loop
    startButton.innerHTML = 'Start Timer' // toggle button display text
    h1.innerHTML = ''       // clear main display text
    input.disabled = false  // enable input

    // show unessential items
    unessentials.forEach(element => {
      element.classList.remove('hide')
    });
  }

  const toggleTimer = (e) => {
    // toggle start timer
    TIMER_RUNNING ? stopTimer() : startTimer()
  }

  // add button submit function
  startButton.addEventListener('click', toggleTimer)
  
  // add input onChange function
  input.addEventListener('change', (e) => {
    let value = parseInt(e.target.value, 10)

    // audio file doesn't work if delay is less than 6 seconds
    if (value < 6) {
      value = 6
    }
    
    // update interval
    INTERVAL = value

    // make sure input reflects interval
    input.value = value
  })
  
}
