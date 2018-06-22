const store = require('../store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://wdi-library-api.herokuapp.com/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://wdi-library-api.herokuapp.com/sign-in',
    data: data
  })
}

const signOut = function (event) {
  console.log('this is to check for sign out & store', store)
  return $.ajax({
    method: 'DELETE',
    url: 'https://wdi-library-api.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const passwordChange = function (data) {
  console.log('store is ', store)
  console.log('token is ', store.user.token)

  return $.ajax({
    method: 'PATCH',
    url: 'https://wdi-library-api.herokuapp.com/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// const createGame = function () {
//   return $.ajax({
//     method: 'POST',
//     url: 'https://aqueous-atoll-85096.herokuapp.com/games',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//    })
// }

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  passwordChange: passwordChange
}
