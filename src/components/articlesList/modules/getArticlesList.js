import firebase from 'gatsby-plugin-firebase';

const getArticlesList = () => {
  const db = firebase.firestore();

  db.collection('posts')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());

        //       if (document.getElementById('sectionPost')) {
        //         if (document.getElementById(doc.data().name)) {
        //           console.log('YA ESTA ESTE ARTICULO!!');
        //         } else {
        //           document.getElementById('sectionPost').innerHTML += `
        //           <div id="${doc.data().name}"
        //           class="wrapper w-full rounded-b-md shadow-lg overflow-hidden   filteredSearch"
        //           style="background:url('${
        //             doc.data().imgPost
        //           }');background-size: cover;background-position:center;margin-bottom: 0.25em;
        //           padding: 1em;order:${doc.data().order}">
        //           <div class="bg-opacity-30 bg-gray-800 p-4 font-mono text-center  space-y-3 transition duration-300 hover:bg-opacity-60 hover:bg-gray-800 text-white">
        //             <h3 class=" hover:bg-opacity-50 text-xl font-bold   rounded-md  hover:bg-gray-900 hover:text-white">
        //             ${doc.data().name}
        //             </h3>
        //             <hr />
        //             <br />
        //             ${doc.data().desc}

        //           </div>
        //           <a href="/post/article?p=${
        //             doc.data().name
        //           }" class="hover:bg-opacity-60 bg-opacity-70 bg-gray-700 w-full flex justify-center py-4 text-white font-semibold transition duration-300 hover:bg-red-500">
        //             Mas info
        //           </a>
        //         </div>
        // `;
        //         }
        //       }
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
};

export default getArticlesList;
