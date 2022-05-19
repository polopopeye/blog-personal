import firebase from 'gatsby-plugin-firebase';
import store from '../../../store';
import articlesSlice from '../../../store/slice/articles';

const getArticlesList = () => {
  const db = firebase.firestore();
  const response = [];
  db.collection('posts')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };

        response.push(data);
      });
      if (store.getState().articles.length !== response.length) {
        store.dispatch(articlesSlice.actions.setData(response));
      }
    })
    .catch((error) => {
      console.log(
        '🚀 ~ file: getArticlesList.js ~ line 19 ~ getArticlesList ~ error',
        error
      );
    });
};

export default getArticlesList;
