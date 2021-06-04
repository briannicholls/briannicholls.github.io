let TIMER_RUNNING = false
let INTERVAL = 7
let TIMER = null

window.onload = () => {

  document.querySelector('button').addEventListener('click', () => {
    // toggle start timer
    if (TIMER_RUNNING) {
      TIMER_RUNNING = false
      clearInterval(TIMER)
      document.querySelector('button').innerHTML = 'Start Timer'
      document.querySelector('h1').innerHTML = ''
    } else {
      TIMER_RUNNING = true
      document.querySelector('button').innerHTML = 'Stop Timer'
      runLoop()
    }
    console.log('Timer running: ', TIMER_RUNNING)
  })
  
  document.querySelector('input').addEventListener('change', (e) => {
    // update interval
    INTERVAL = e.target.value
    console.log('interval: ', INTERVAL)
  })
  
  const runLoop = () => {
    document.querySelector('h1').innerHTML = 'Get ready!'
    const interval = parseInt(INTERVAL, 10) * 1000
    let toggle = true
  
    TIMER = setInterval(() => {
      if (!TIMER_RUNNING) {
        return
      }
  
      const breath = toggle ? 'Inhale' : 'Exhale'
  
      console.log(breath)
      document.querySelector('h1').innerHTML = breath
  
      // PLAY SOUND
      // var audio = new Audio('./sounds/incorrect.m4a');
      let audio = document.querySelector('audio')
      audio.play();
      
      toggle = !toggle
     }, interval)
  
  }
}
