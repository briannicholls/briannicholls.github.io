let TIMER_RUNNING = false
let INTERVAL = 7
let TIMER = null

window.onload = () => {

  const startButton = document.querySelector('button')
  const input = document.querySelector('input')

  document.querySelector('button').addEventListener('click', () => {
    // toggle start timer
    if (TIMER_RUNNING) {
      stopTimer()
    } else {
      startTimer()
    }
    console.log('Timer running: ', TIMER_RUNNING)
  })
  
  document.querySelector('input').addEventListener('change', (e) => {
    // update interval
    INTERVAL = e.target.value
    console.log('interval: ', INTERVAL)
  })
  
  const runLoop = () => {
    document.querySelector('h1').innerHTML = 'Get ready! Exhale...'
    const interval = parseInt(INTERVAL, 10) * 1000
    let audio = document.querySelector('audio')
    let h1 = document.querySelector('h1')
    let toggle = true
  
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
    document.querySelector('button').innerHTML = 'Start Timer'
    document.querySelector('h1').innerHTML = ''
    input.disabled = false
  }

  
}
