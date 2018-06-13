'use strict'

const authEvents = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#signUpForm').on('submit', authEvents.onSignUp)
  $('#signInForm').on('submit', authEvents.onSignIn)
  $('#password_change').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // $('#s1').on('click', authEvents.onClicking)
  // $('#s2').on('click', authEvents.onClicking)
  // $('#s3').on('click', authEvents.onClicking)
  // $('#s4').on('click', authEvents.onClicking)
  // $('#s5').on('click', authEvents.onClicking)
  // $('#s6').on('click', authEvents.onClicking)
  // $('#s7').on('click', authEvents.onClicking)
  // $('#s8').on('click', authEvents.onClicking)
  // $('#s9').on('click', authEvents.onClicking)
  // $('#playx').on('click', authEvents.currentPlayer)
  // $('#playo').on('click', authEvents.switchPlayer)
  $('.tic-piece').on('click', authEvents.switchPlayer)
  $('.tic-piece').on('click', authEvents.onClick)
  $('#gameRestart').on('click', authEvents.onRestart)
})
