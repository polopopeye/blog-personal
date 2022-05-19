import { articles } from '../constants';
import firebase from 'gatsby-plugin-firebase';

const handleEditArticle = (
  idArticle,
  {
    inputArticleTitle,
    inputArticleImgURL,
    inputArticleDesc,
    inputArticleSlug,
    inputArticleTimeStamp,
    inputArticleLang,
    setPostInHtml,
  }
) => {
  if (!idArticle) return false;

  const db = firebase.firestore();
  db.collection(articles.dbDocName)
    .doc(idArticle)
    .get()
    .then((doc) => {
      const {
        name,
        imgPost,
        desc,
        slug,
        postinHTML,
        timeStamp,
        lang,
      } = doc.data();

      if (doc.exists) {
        inputArticleTitle.current.value = name;
        inputArticleImgURL.current.value = imgPost;
        inputArticleDesc.current.value = desc;
        inputArticleSlug.current.value = slug;
        inputArticleTimeStamp.current.value = timeStamp;
        inputArticleLang.current.value = lang;
        setPostInHtml(postinHTML);
      } else {
        return 'article not Found';
      }
    });
};
export default handleEditArticle;
