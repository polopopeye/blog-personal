import * as React from "react"
import "../styles/global.css"
import firebase from "gatsby-plugin-firebase"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  setTimeout(() => {
    let db = firebase.firestore()

    db.collection("posts")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data())
          if (document.getElementById("sectionPost")) {
            if (document.getElementById(doc.data().name)) {
              console.log("YA ESTA ESTE ARTICULO!!")
            } else {
              document.getElementById("sectionPost").innerHTML += `
              <div id="${doc.data().name}"
              class="wrapper w-full   rounded-b-md shadow-lg overflow-hidden bg-center bg-cover"
               style="background:url('${doc.data().imgPost}');">
              <div class="p-4 font-mono text-center bg-opacity-60 space-y-3 transition duration-300 hover:bg-gray-800 hover:text-white">
                <h3 class=" text-xl font-bold   rounded-md  hover:bg-gray-900 hover:text-white">
                ${doc.data().name}
                </h3>
                <hr />
                <br />
                ${doc.data().desc}
                </p>
              </div>
              <a href="/post/article?p=${
                doc.data().name
              }" class="bg-teal-600 w-full flex justify-center py-4 text-white font-semibold transition duration-300 hover:bg-red-500">
                Mas info
              </a>
            </div>
    `
            }
          }
        })
      })
      .catch(error => {
        console.log("Error getting documents: ", error)
      })
  }, 0)

  return (
    <Layout>
      <Seo title="Home" />
      <section
        id="sectionPost"
        class="w-full flex-start justify-center items-center px-2"
      >
        {/* INICIO PRUEBA */}

        {/* INICIO POST */}
      </section>
    </Layout>
  )
}
export default IndexPage
