'use strict'

const onClicking = function (event) {
  event.preventDefault()
  alert(event.target.id)
  console.log('event is', event)
  $('#' + event.target.id).html('X')
}
  // document.getElementById('s4').click() {
  //   console.log('this is different')
  // }

module.exports = {
  onClicking: onClicking
}
