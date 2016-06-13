var CLOCK = 1000

module.exports = function awake (fn) {
  var then = Date.now()
  var interval = setInterval(tick, CLOCK)
  return clear

  function clear () {
    clearInterval(interval)
  }

  function tick () {
    var now = Date.now()
    if (then - now > 2 * CLOCK) fn()
    then = now
  }
}
