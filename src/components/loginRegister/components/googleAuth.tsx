import firebase from '../../../../lib/firebase';

export function checkIsLogedIn() {
  if (typeof document === 'undefined') return;

  firebase.auth().onAuthStateChanged(function (user) {
    const conectarEl = document.getElementById('Conectar') as HTMLElement | null;
    const logoutEl = document.getElementById('Logout') as HTMLElement | null;
    const welcomeEl = document.getElementById('tittleWelcome') as HTMLElement | null;

    if (conectarEl && logoutEl && welcomeEl) {
      if (user) {
        conectarEl.style.display = 'none';
        logoutEl.style.display = 'block';
        welcomeEl.innerHTML = `Bienvenido ${user.displayName}`;
      } else {
        conectarEl.style.display = 'block';
        logoutEl.style.display = 'none';
        welcomeEl.innerHTML = 'Bienvenido, conectate o registrate...';
      }
    }
  });
}

export function logOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('Session Cerrada correctamente');
    })
    .catch((error) => {
      console.error('Error al cerrar sesión:', error);
    });
}

export function registerConnect() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .catch((error) => {
      console.error('Error al conectar:', error);
    });
}
