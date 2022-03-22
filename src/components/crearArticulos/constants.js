const ifaceMesssages = {
  btn: {
    publishAnsw: '¿Publicar Post?',
    publish: '¡Si, Publicar Post!',
  },
  notLoggedIn: 'Por favor conectate o registrate, para poder crear un post',
  ArticleFieildTooShort: 'TITULO O Articulo MUY PEQUEÑO',
  notFoundArticleID: 'error No post ID',
  createNewArticle: 'Crear Nuevo Post',
};

export const articles = {
  dbDocName: 'posts',
  minCharLength: {
    default: 5,
    post: 15,
  },
  propID: 'id',
  ifaceMesssages,
};
