'use strict'
//
// const playAsX = function () {
//   console.log('i am playing as X')
//   return ('You are player X')
// }
//
// const playAsO = function () {
//   console.log('i am playing as O')
//   return ('You are player O')
// }
//
// const onClicking = function () {
//   event.preventDefault()
//   if (playAsO) {
//     console.log('event is', event)
//     $('#' + event.target.id).html('O')
//   } else if (playAsX) {
//     console.log('event is', event)
//     $('#' + event.target.id).html('X')
//   } else {
//     console.log('please select a player')
//     return ('Please select a player')
//   }
// }

const board = []
let currentPlayer = 'X'

const switchPlayer = function (event) {
  if (event.target.innerHTML === '') {
    if (currentPlayer === 'X') {
      board[event.target.id] = 'X'
      event.target.innerHTML = 'X'

      currentPlayer = 'O'
    } else {
      board[event.target.id] = 'O'
      event.target.innerHTML = 'O'

      currentPlayer = 'X'
    }
  }
}

module.exports = {
  // onClicking: onClicking,
  // playAsX: playAsX,
  // playAsO: playAsO,
  currentPlayer: currentPlayer,
  switchPlayer: switchPlayer
}
