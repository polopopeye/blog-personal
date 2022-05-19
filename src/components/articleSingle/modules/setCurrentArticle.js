import firebase from 'gatsby-plugin-firebase';

import store from '../../../store';
import currentArticleSlice from '../../../store/slice/currentArticle';
import isId from '../../utils/isId';

// this file get the data from firestore and set the current article in the store

const setCurrentArticle = ({ idOrSlug }) => {
  const db = firebase.firestore();
  const dbRef = db.collection('posts');
  const setData = (doc) =>
    store.dispatch(
      currentArticleSlice.actions.setData({ id: doc.id, ...doc.data() })
    );

  const dataNotFound = () =>
    store.dispatch(currentArticleSlice.actions.setData({ error: 404 }));

  const getDocFromID = () => {
    dbRef
      .doc(idOrSlug)
      .get()
      .then((doc) => {
        if (doc.exists) setData(doc);
        else dataNotFound();

        console.log(
          '🚀 ~ file: setCurrentArticle.js ~ line 23 ~ db.collection ~ doc.data',
          doc.data()
        );
      });
  };

  const getDocFromSlug = () => {
    dbRef
      .where('slug', '==', idOrSlug)
      .limit(1)
      .get()
      .then((querySnapshot) => {
        console.log(
          '🚀 ~ file: setCurrentArticle.js ~ line 61 ~ .then ~ querySnapshot',
          querySnapshot
        );
        if (querySnapshot.empty) {
          console.log('NOT FOUND BRO');
          dataNotFound();
        } else setData(querySnapshot.docs[0]);
      })
      .catch((error) => {
        console.log(
          '🚀 ~ file: setCurrentArticle.js ~ line 16 ~ setCurrentArticle ~ error',
          error
        );
      });
  };

  if (isId(idOrSlug)) {
    getDocFromID();
  } else {
    getDocFromSlug();
  }
};

export default setCurrentArticle;

// const postData = {
//   id: string,
//   lang: string,
//   title: string,
//   slug: string,
//   coverImg: string,
//   desc: string,
//   postInHtml: string,
//   timeStamp: number,
// };
