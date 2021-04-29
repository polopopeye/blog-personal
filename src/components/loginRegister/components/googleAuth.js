import React from "react"
import firebase from "gatsby-plugin-firebase"

export function checkIsLogedIn() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (
      document.getElementById("Conectar") &&
      document.getElementById("Logout")
    ) {
      if (user) {
        console.log(user)
        console.log("YA ESTAS CONECTADO/REGISTRADO")
        document.getElementById("Conectar").style.display = "none"
        document.getElementById("Logout").style.display = "block"

        document.getElementById("tittleWelcome").innerHTML = `
        Bienvenido ${user.displayName}
        `
      } else {
        console.log("NO ESTAS CONECTADO")
        document.getElementById("Conectar").style.display = "block"
        document.getElementById("Logout").style.display = "none"
        document.getElementById("tittleWelcome").innerHTML = `
        Bienvenido, conectate o registrate...
        `
      }
    }
  })
}

export function logOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("Session Cerrada correctamente")
    })
    .catch(error => {
      console.log("ERROR AL LOGOUT")
    })
}

export function registerConnect() {
  var provider = new firebase.auth.GoogleAuthProvider()
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      var credential = result.credential
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken
      // The signed-in user info.
      var user = result.user
      //   document.getElementById("message").innerHTML = "EXITO"
      console.log(result.user)
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      console.log(error.message)
      // ...
    })
}

//   return (
//     <div>
//       <h1 id="message">TEST</h1>
//     </div>
//   )

// export default googleAuth
