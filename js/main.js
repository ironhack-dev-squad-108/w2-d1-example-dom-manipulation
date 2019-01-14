var bootcampEndDate = new Date("2019-03-08")
var countDown = new CountDown(bootcampEndDate)

setInterval(function() {
  document.getElementById('nb-of-seconds').innerHTML = countDown.nbOfSeconds
}, 1000)