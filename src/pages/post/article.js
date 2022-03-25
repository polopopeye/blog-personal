import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import firebase from 'gatsby-plugin-firebase';

const article = () => {
  let db;
  let postID;

  const deleteArticle = () => {
    db.collection('posts')
      .doc(postID)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
        alert('ELIMINADO');
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  };

  setTimeout(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user && user.email === 'kenneth7e7a@gmail.com') {
        document.getElementById('editionButtons').style.display = 'block';
      } else {
        document.getElementById('editionButtons').style.display = 'none';
      }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const postName = urlParams.get('p');
    console.log(postName);
    if (postName.length > 5 && postName !== 'undefined') {
      db = firebase.firestore();
      db.collection('posts')
        .where('name', '==', postName)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            document.title = 'Error 404';
            document.getElementById('name').innerHTML = 'Error 404';
            document.getElementById('post').innerHTML =
              'El post que estaba buscando no se ha encontrado...';
          } else {
            querySnapshot.forEach((doc) => {
              postID = doc.id;
              document.getElementById('edit').href = '/crear?id=' + doc.id;
              document.title = doc.data().name;
              document.getElementById('name').innerHTML = doc.data().name;
              document.getElementById('post').innerHTML = doc.data().postinHTML;
            });
          }
        })
        .catch((error) => {
          console.log('ERROR');
        });
    }
  }, 100);

  return (
    <div>
      <Layout>
        <Seo title="Artículo del blog de Kenneth Suarez" />
        <h1
          className="text-xl text-center text-gray-100 font-bolder p-8 font-mono"
          style={{
            backgroundColor: '#333333',
            backgroundImage: `url(
                "data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23202020' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
              )`,
          }}
          id="name"
        ></h1>
        <hr></hr>
        <p
          id="post"
          style={{ overflow: 'hidden' }}
          className="w-full p-4 md:p-8 font-mono"
        ></p>
        <hr></hr>
        <div id="editionButtons" className="flex  ">
          <a className="p-4" id="edit" href="/editar/?p=">
            Editar
          </a>
          |
          <a className="p-4" onClick={deleteArticle}>
            Eliminar
          </a>
        </div>
      </Layout>
    </div>
  );
};

export default article;
