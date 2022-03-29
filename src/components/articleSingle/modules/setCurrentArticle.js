import firebase from 'gatsby-plugin-firebase';

import store from '../../../store';
import currentArticleSlice from '../../../store/slice/currentArticle';
import isId from '../../utils/isId';

// this file set the current article in the store

const setCurrentArticle = ({ idOrSlug }) => {
  if (idOrSlug === 'undefined' || idOrSlug === undefined || idOrSlug.length < 3)
    return console.log(
      '🚀 ~ file: setCurrentArticle.js ~ line 6 ~ setCurrentArticle ~ idOrSlug',
      idOrSlug
    );

  const db = firebase.firestore();
  const dbRef = db.collection('posts');
  const setData = (doc) =>
    store.dispatch(currentArticleSlice.actions.setData(doc.data()));

  const dataNotFound = () =>
    currentArticleSlice.actions.setData({ error: 404 });

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
        if (querySnapshot.empty) dataNotFound();
        else setData(querySnapshot.docs[0]);
      })
      .catch((error) => {
        console.log(
          '🚀 ~ file: setCurrentArticle.js ~ line 16 ~ setCurrentArticle ~ error',
          error
        );
      });
  };

  if (isId(idOrSlug)) {
    console.log('is id');
    getDocFromID();
  } else {
    console.log('is slug');
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
