import firebase from 'gatsby-plugin-firebase';

const isConnected = (setResponse, setUser) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!setResponse) return null;
    if (user) {
      if (setUser) setUser(user);
      return setResponse(true);
    } else return setResponse(false);
  });
};

export default isConnected;
