import React, { useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"
import "./components/styleEditor.css"
import { isConected } from "./components/isConected"
import { createArticle } from "./components/send2DB"
import { Menu } from "@headlessui/react"
import firebase from "gatsby-plugin-firebase"

const CrearArticulos = () => {
  const editorRef = useRef(null)
  let docID

  setTimeout(() => {
    const urlParams = new URLSearchParams(window.location.search)
    docID = urlParams.get("id")
    console.log(docID)
    if (docID != undefined && docID.length > 5) {
      var db = firebase.firestore()
      db.collection("posts")
        .doc(docID)
        .get()
        .then(doc => {
          if (doc.exists) {
            document.getElementById("tituloPost").value = doc.data().name
            document.getElementById("imgPost").value = doc.data().imgPost
            document.getElementById("descPost").value = doc.data().desc
            document.getElementById("orderPost").value = doc.data().order

            editorRef.current.setContent(doc.data().postinHTML)
          } else {
            console.log("No such document!")
          }
        })
        .catch(error => {
          console.log("Error getting document:", error)
        })
    }
  }, 100)

  const crearPost = () => {
    if (editorRef.current && document.getElementById("tituloPost")) {
      if (
        document.getElementById("tituloPost").value.length > 5 &&
        document.getElementById("imgPost").value.length > 5 &&
        document.getElementById("descPost").value.length > 5 &&
        editorRef.current.getContent().length > 10
      ) {
        let tittle = document.getElementById("tituloPost").value
        let imgPost = document.getElementById("imgPost").value
        let descPost = document.getElementById("descPost").value
        let orderPost = document.getElementById("orderPost").value
        let content = editorRef.current.getContent()
        if (docID != undefined && docID.length > 5) {
          createArticle(tittle, content, imgPost, descPost, orderPost, docID)
        } else {
          createArticle(tittle, content, imgPost, descPost, orderPost)
        }
      } else {
        console.log("TITULO O Articulo MUY PEQUEÑO")
      }
    }
  }

  let cnt = 0

  function loopIsConnected() {
    if (cnt < 3) {
      setTimeout(() => {
        isConected()
        loopIsConnected()
      }, 100)
    }
    cnt++
  }
  loopIsConnected()

  return (
    <>
      <script
        src="https://cdn.tiny.cloud/1/4ge8itj7zovsnq0e89lw5enf1fudbp3nyiin4xdch5zmnzjq/tinymce/5/tinymce.min.js"
        referrerpolicy="origin"
      ></script>

      <div id="conected" style={{ display: "none" }}>
        <input
          placeholder="titulo"
          id="tituloPost"
          type="text"
          class="p-4 text-xl w-full"
        ></input>
        <input
          placeholder="imagen URL"
          id="imgPost"
          type="text"
          class="p-4 text-xl w-full"
        ></input>
        <input
          placeholder="Descripción del post"
          id="descPost"
          type="text"
          class="p-4 text-xl w-full"
        ></input>
        <input
          placeholder="Orden"
          id="orderPost"
          type="number"
          class="p-4 text-xl w-full"
        ></input>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue=""
          init={{
            height: 500,
            menubar: false,
            plugins: [
              " imagetools advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
              "a11ychecker   casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker",
            ],

            toolbar_mode: "floating",
            tinycomments_mode: "embedded",
            tinycomments_author: "Kenneth Suarez",

            toolbar:
              " paste preview | undo redo | media image imagetools | checklist code | formatpainter pageembed table | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat ",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <Menu>
          <Menu.Button>
            <button class="p-4 bg-red-600 text-gray-100">
              ¿Publicar Post?
            </button>
          </Menu.Button>
          <Menu.Items>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={crearPost}
                  class="bg-green-400 text-gray-100 rounded-xl p-4"
                >
                  ¡Si, Publicar Post!
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
      <div
        id="notConected"
        class="bg-red-800 text-gray-100 p-4 rounded-sm"
        style={{ display: "none" }}
      >
        Por favor conectate o registrate, para poder crear un post
      </div>
    </>
  )
}

export default CrearArticulos
