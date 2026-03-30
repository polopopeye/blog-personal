import firebase from '../../../lib/firebase';

const isConnected = (setResponse: (value: boolean) => void, setUser?: (user: any) => void) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!setResponse) return null;
    if (user) {
      if (setUser) setUser(user);
      return setResponse(true);
    } else return setResponse(false);
  });
};

export default isConnected;
