import { articles } from '../constants';
import firebase from 'gatsby-plugin-firebase';

const handleEditArticle = (
  idArticle,
  {
    inputArticleTitle,
    inputArticleImgURL,
    inputArticleDesc,
    inputArticleOrder,

    setPostInHtml,
  }
) => {
  if (!idArticle) return false;

  const db = firebase.firestore();
  db.collection(articles.dbDocName)
    .doc(idArticle)
    .get()
    .then((doc) => {
      const { name, imgPost, desc, order, postinHTML } = doc.data();

      if (doc.exists) {
        inputArticleTitle.current.value = name;
        inputArticleImgURL.current.value = imgPost;
        inputArticleDesc.current.value = desc;
        inputArticleOrder.current.value = order;
        setPostInHtml(postinHTML);
      } else {
        return 'article not Found';
      }
    });
};
export default handleEditArticle;
