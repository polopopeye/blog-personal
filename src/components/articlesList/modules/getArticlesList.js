import firebase from 'gatsby-plugin-firebase';
import store from '../../../store';
import articlesSlice from '../../../store/slice/articles';

const getArticlesList = async (setArticles) => {
  const db = firebase.firestore();
  const response = [];
  db.collection('posts')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        response.push(doc.data());
      });
      if (
        store.getState().articles !== response &&
        typeof setArticles === 'function'
      ) {
        setArticles(response);
        store.dispatch(articlesSlice.actions.setData(response));
      }
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
};

export default getArticlesList;
