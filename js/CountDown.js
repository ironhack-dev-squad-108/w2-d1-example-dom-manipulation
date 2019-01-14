class CountDown {
  constructor(date) {
    this.nbOfSeconds = Math.floor((date.getTime() - Date.now()) / 1000)
    setInterval(() => {
      this.nbOfSeconds--
    }, 1000)
  }
}