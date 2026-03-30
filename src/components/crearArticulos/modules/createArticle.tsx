import { articles } from '../constants';
import firebase from '../../../../lib/firebase';

export const createArticle = ({
  tittle,
  post,
  img,
  desc,
  slug,
  timeStamp,
  lang,
  id,
}: {
  tittle: string;
  post: string;
  img: string;
  desc: string;
  slug: string;
  timeStamp: string;
  lang: string;
  id?: string;
}): string | void => {
  if (
    tittle.length <= articles.minCharLength.default &&
    img.length <= articles.minCharLength.default &&
    desc.length <= articles.minCharLength.default &&
    post.length <= articles.minCharLength.post
  ) {
    return 'TITULO O Articulo MUY PEQUEÑO';
  }

  const db = firebase.firestore();
  const dbCollection = db.collection('posts');
  const docToCreate = id ? dbCollection.doc(id) : dbCollection.doc();

  docToCreate
    .set({
      name: tittle,
      postinHTML: post,
      imgPost: img,
      desc: desc,
      slug: slug,
      timeStamp: timeStamp,
      lang: lang,
    })
    .then(() => {
      alert('CORRECTAMENTE PUBLICADO');
      window.location.href = '/';
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
};
