import firebase from 'gatsby-plugin-firebase';

export function checkIsLogedIn() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (
      document.getElementById('Conectar') &&
      document.getElementById('Logout')
    ) {
      if (user) {
        console.log(user);
        console.log('YA ESTAS CONECTADO/REGISTRADO');
        document.getElementById('Conectar').style.display = 'none';
        document.getElementById('Logout').style.display = 'block';

        document.getElementById('tittleWelcome').innerHTML = `
        Bienvenido ${user.displayName}
        `;
      } else {
        console.log('NO ESTAS CONECTADO');
        document.getElementById('Conectar').style.display = 'block';
        document.getElementById('Logout').style.display = 'none';
        document.getElementById('tittleWelcome').innerHTML = `
        Bienvenido, conectate o registrate...
        `;
      }
    }
  });
}

export function logOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log('Session Cerrada correctamente');
    })
    .catch((error) => {
      console.log('🚀 ~ file: googleAuth.js ~ line 39 ~ logOut ~ error', error);
    });
}

export function registerConnect() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(
        '🚀 ~ file: googleAuth.js ~ line 49 ~ .then ~ result',
        result
      );
      // var credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = credential.accessToken;
      // The signed-in user info.
      // var user = result.user;
      //   document.getElementById("message").innerHTML = "EXITO"
      // console.log(result.user);
      // ...
    })
    .catch((error) => {
      console.log(
        '🚀 ~ file: googleAuth.js ~ line 59 ~ registerConnect ~ error',
        error
      );
    });
}
