'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('the form was submitted')

  const data = getFormFields(event.target)
  console.log('data is ', data)

  authApi.signUp(data)
    .then(function (signUpResponse) {
      console.log('the sign of response is', signUpResponse)
    })

    .catch(function (signUpError) {
      console.log('sign up error is ', signUpError)
    })
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('this is the sign in part')

  const data = getFormFields(event.target)
  console.log('data is ', data)

  authApi.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
}

const onSignOut = function (event) {
  event.preventDefault()

  authApi.signOut(event)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Please accept new passowrd')
  authApi.passwordChange(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onRestart = function () {
  window.location.reload(true)
}

let gameOver = false
const board = []
let currentPlayer = 'X'

const switchPlayer = function (event) {
  if (gameOver === false) {
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
}
const gameTie = function () {
  if ($('#s1').text() &&
    $('#s2').text() &&
    $('#s3').text() &&
    $('#s4').text() &&
    $('#s5').text() &&
    $('#s6').text() &&
    $('#s7').text() &&
    $('#s8').text() &&
    $('#s9').text() === true) {
    console.log('Game is a draw')
    return true
  }
}

const onClick = function () {
  if ($('#s1').text() === 'X' &&
    $('#s2').text() === 'X' &&
    $('#s3').text() === 'X') {
    $('.message').text('Player X wins')
    gameOver = true
  } else if // (($('#s1').text() && $('#s2').text() && $('#s3').text()) === 'O') {
  // $('.message').text('Player O wins')
  // gameOver = true
  ($('#s1').text() === 'O' &&
    $('#s2').text() === 'O' &&
    $('#s3').text() === 'O') {
    $('.message').text('Player O wins')
    gameOver = true
  } else if // (($('#s4').text() && $('#s5').text() && $('#s6').text()) === 'X') {
  // $('.message').text('Player X wins')
  // gameOver = true
  ($('#s4').text() === 'X' &&
    $('#s5').text() === 'X' &&
    $('#s6').text() === 'X') {
    $('.message').text('Player X wins')
    gameOver = true
  } else if // (($('#s4').text() && $('#s5').text() && $('#s6').text()) === '0') {
  // $('.message').text('Player O wins')
  // gameOver = true
  ($('#s4').text() === 'O' &&
    $('#s5').text() === 'O' &&
    $('#s6').text() === 'O') {
    $('.message').text('Player O wins')
    gameOver = true
  } else if // (($('#s7').text() && $('#s8').text() && $('#s9').text()) === 'X') {
  // $('.message').text('Player X wins')
  // gameOver = true
  ($('#s7').text() === 'X' &&
    $('#s8').text() === 'X' &&
    $('#s9').text() === 'X') {
    $('.message').text('Player X wins')
    gameOver = true
  } else if // (($('#s7').text() && $('#s8').text() && $('#s9').text()) === 'O') {
  // $('.message').text('Player O wins')
  // gameOver = true
  ($('#s7').text() === 'O' &&
    $('#s8').text() === 'O' &&
    $('#s9').text() === 'O') {
    $('.message').text('Player O wins')
    gameOver = true
  } else if // (($('#s1').text() && $('#s4').text() && $('#s7').text()) === 'X') {
  // $('.message').text('Player X wins')
  // gameOver = true
  ($('#s1').text() === 'X' &&
    $('#s4').text() === 'X' &&
    $('#s7').text() === 'X') {
    $('.message').text('Player X wins')
    gameOver = true
  } else if // (($('#s1').text() && $('#s4').text() && $('#s7').text()) === '0') {
  // $('.message').text('Player O wins')
  // gameOver = true
  ($('#s1').text() === 'O' &&
    $('#s4').text() === 'O' &&
    $('#s7').text() === 'O') {
    $('.message').text('Player O wins')
    gameOver = true
  } else if // (($('#s2').text() && $('#s5').text() && $('#s8').text()) === 'X') {
  // $('.message').text('Player X wins')
  // gameOver = true
  ($('#s2').text() === 'X' &&
    $('#s5').text() === 'X' &&
    $('#s8').text() === 'X') {
    $('.message').text('Player X wins')
    gameOver = true
  } else if // (($('#s2').text() && $('#s5').text() && $('#s8').text()) === '0') {
  // $('.message').text('Player O wins')
  // gameOver = true
  ($('#s2').text() === 'O' &&
    $('#s5').text() === 'O' &&
    $('#s8').text() === 'O') {
    $('.message').text('Player O wins')
    gameOver = true
  } else if // (($('#s3').text() && $('#s6').text() && $('#s9').text()) === 'X') {
  // $('.message').text('Player X wins')
  // gameOver = true
  ($('#s3').text() === 'X' &&
    $('#s6').text() === 'X' &&
    $('#s9').text() === 'X') {
    $('.message').text('Player X wins')
    gameOver = true
  } else if // (($('#s3').text() && $('#s6').text() && $('#s9').text()) === '0') {
  // $('.message').text('Player O wins')
  // gameOver = true
  ($('#s3').text() === 'O' &&
    $('#s6').text() === 'O' &&
    $('#s9').text() === 'O') {
    $('.message').text('Player O wins')
    gameOver = true
  } else if // (($('#s7').text() && $('#s5').text() && $('#s3').text()) === 'X') {
  // $('.message').text('Player X wins')
  // gameOver = true
  ($('#s7').text() === 'X' &&
    $('#s5').text() === 'X' &&
    $('#s3').text() === 'X') {
    $('.message').text('Player X wins')
    gameOver = true
  } else if // (($('#s7').text() && $('#s5').text() && $('#s3').text()) === '0') {
  // $('.message').text('Player O wins')
  // gameOver = true
  ($('#s7').text() === 'O' &&
    $('#s5').text() === 'O' &&
    $('#s3').text() === 'O') {
    $('.message').text('Player O wins')
    gameOver = true
  } else if // (($('#s1').text() && $('#s5').text() && $('#s8').text()) === 'X') {
  // $('.message').text('Player X wins')
  // gameOver = true
  ($('#s1').text() === 'X' &&
    $('#s5').text() === 'X' &&
    $('#s8').text() === 'X') {
    $('.message').text('Player X wins')
    gameOver = true
  } else if // (($('#s1').text() && $('#s5').text() && $('#s8').text()) === '0') {
  // $('.message').text('Player O wins')
  // gameOver = true
  ($('#s1').text() === 'O' &&
    $('#s5').text() === 'O' &&
    $('#s8').text() === 'O') {
    $('.message').text('Player O wins')
    gameOver = true
  } else if (gameTie() === true) {
    $('.message').text('This game is a draw')
    console.log('this is game tie')
  }
}
module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onSignOut: onSignOut,
  currentPlayer: currentPlayer,
  switchPlayer: switchPlayer,
  onClick: onClick,
  onRestart: onRestart,
  onChangePassword: onChangePassword
}
