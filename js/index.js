let TIMER_RUNNING = false
let INTERVAL = 7
let TIMER = null

window.onload = () => {

  // get DOM nodes
  const startButton = document.querySelector('button')
  const input = document.getElementById('intervalInput')
  const h1 = document.querySelector('h1')
  const audio = document.querySelector('audio')

  // add button submit function
  document.querySelector('button').addEventListener('click', toggleTimer)
  
  // add input onChange function
  document.querySelector('input').addEventListener('change', (e) => {
    // update interval
    INTERVAL = e.target.value
  })
  
  const runLoop = () => {
    const interval = parseInt(INTERVAL, 10) * 1000

    h1.innerHTML = 'Get ready! Exhale...'
    
    let toggle = true
  
    // main loop
    TIMER = setInterval(() => {
      if (!TIMER_RUNNING) {
        return
      }

      const breath = toggle ? 'Inhale' : 'Exhale'
  
      h1.innerHTML = breath
      
      audio.play();
      console.log(new Date())
      
      toggle = !toggle
     }, interval)
  
  }

  const startTimer = () => {
    TIMER_RUNNING = true
    startButton.innerHTML = 'Stop Timer'
    input.disabled = true
    runLoop()
  }

  const stopTimer = () => {
    TIMER_RUNNING = false
    clearInterval(TIMER)
    startButton.innerHTML = 'Start Timer'
    h1.innerHTML = ''
    input.disabled = false
  }

  const toggleTimer = () => {
    // toggle start timer
    if (TIMER_RUNNING) {
      stopTimer()
    } else {
      startTimer()
    }
    console.log('Timer running: ', TIMER_RUNNING)
  }

  
}
