import firebase from '../../../../lib/firebase';

const deleteArticle = (articleId: string) => {
  if (!confirm('¿Estás seguro de que quieres eliminar este artículo? Esta acción no se puede deshacer.')) {
    return;
  }

  const db = firebase.firestore();
  db.collection('posts')
    .doc(articleId)
    .delete()
    .then(() => {
      alert('Artículo eliminado correctamente');
      window.location.href = '/';
    })
    .catch((error) => {
      console.error('Error al eliminar artículo:', error);
      alert('Error al eliminar el artículo');
    });
};

export default deleteArticle;
