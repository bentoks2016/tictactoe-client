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
        console.log('this entered ', board)
        event.target.innerHTML = 'X'

        currentPlayer = 'O'
      } else {
        board[event.target.id] = 'O'
        console.log('this entered ', board)
        event.target.innerHTML = 'O'

        currentPlayer = 'X'
      }
    }
  }
}

const onClick = function () {
  if ($('#s1').text() && $('#s2').text() && $('#s3').text() === 'X') {
    console.log('player X wins')
    $('.message').text('Player X wins')
    gameOver = true
  } else if ($('#s1').text() && $('#s2').text() && $('#s3').text() === 'O') {
    console.log('player O wins')
    $('.message').text('Player O wins')
  } else if ($('#s4').text() && $('#s5').text() && $('#s6').text() === 'X') {
    $('.message').text('Player X wins')
  } else if ($('#s4').text() && $('#s5').text() && $('#s6').text() === '0') {
    $('.message').text('Player O wins')
  } else if ($('#s7').text() && $('#s8').text() && $('#s9').text() === 'X') {
    $('.message').text('Player X wins')
  } else if ($('#s7').text() && $('#s8').text() && $('#s9').text() === 'O') {
    $('.message').text('Player O wins')
  } else { console.log('no one wins') }
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
