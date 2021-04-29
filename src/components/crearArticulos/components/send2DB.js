import firebase from "gatsby-plugin-firebase"

export function createArticle(tittle, post, img, desc, id) {
  let db = firebase.firestore()

  if (id == undefined) {
    db.collection("posts")
      .doc()
      .set({
        name: tittle,
        postinHTML: post,
        imgPost: img,
        desc: desc,
      })
      .then(() => {
        console.log("Document successfully written!")
        alert("CORRECTAMENTE PUBLICADO")
        window.location.href = "/"
      })
      .catch(error => {
        console.error("Error writing document: ", error)
      })
  } else {
    db.collection("posts")
      .doc(id)
      .set({
        name: tittle,
        postinHTML: post,
        imgPost: img,
        desc: desc,
      })
      .then(() => {
        console.log("Document successfully written!")
        alert("CORRECTAMENTE PUBLICADO")
        window.location.href = "/"
      })
      .catch(error => {
        console.error("Error writing document: ", error)
      })
  }
}
