class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {

      this.intervalId = setInterval(() => {
      this.currentTime++
  
      if(printTimeCallback) {
        return printTimeCallback()
      }
  }, 1000)  
  }

  getMinutes() {
   return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60 
  }

  computeTwoDigitNumber(value) {
    this.value = value
    if(value < 10){
      return`0${value}`
    }
    return `${value}`
  }

  stop() {
    
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    let time = `${minute}:${seconds}`
    return time
  }
  
}
