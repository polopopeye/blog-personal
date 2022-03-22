import firebase from 'gatsby-plugin-firebase';

const isConnected = (setResponse) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!setResponse) return null;
    if (user) return setResponse(true);
    else return setResponse(false);
  });
};

export default isConnected;
