import React from "react"
import firebase from "gatsby-plugin-firebase"

const SearchIcon = () => {
  return (
    <>
      <div class="inline-flex items-center justify-center absolute left-0 top-1 h-full w-10 text-gray-400">
        <svg
          class="h-6 w-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </>
  )
}

function checkavalPost() {
  let classElement = "filteredSearch"
  if (document.getElementsByClassName(classElement)[1]) {
    console.log("ya se ha obtenido resultados")
  } else {
    console.log("No hay resultados todavia buscando...")
    let db = firebase.firestore()
    db.collection("posts")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data())
          let idContainer2 = "seccionBuscadorNoIndex"
          if (document.getElementById(idContainer2)) {
            if (document.getElementById(doc.data().name)) {
            } else {
              document.getElementById(idContainer2).innerHTML += `
              <div id="${
                doc.data().name
              }" class="filteredSearch mb-4 rounded-sm bg-center "
              style="background:url('${doc.data().imgPost}');">
              <div class="bg-opacity-50 bg-gray-800">
              
              <h1>${doc.data().name}</h1>
              <p>${doc.data().desc}</p>
<br />
<a href="/post/article?p=${doc.data().name}" 
class="bg-gray-600 w-full flex justify-center py-4 md:py-2 text-white font-semibold transition duration-300 hover:bg-red-500  ">
 Mas info
</a>
            
              </div>
                      
                     </div>
                     <br />
                       `
            }
          }
        })
      })
      .catch(error => {
        console.log("Error getting documents: ", error)
      })
  }
}

function displayResults() {
  let idContainer2 = "seccionBuscadorNoIndex"
  if (document.getElementById(idContainer2)) {
    // checkavalPost()
    console.log("VIENDO DISEÑO")
    if (document.getElementById("search").value.length > 1) {
      document.getElementById(idContainer2).style.display = "block"
      console.log("BLOOOCK")
    } else {
      document.getElementById(idContainer2).style.display = "none"
      console.log("NONEEEE")
    }
  }
  filtradorJS()
  checkavalPost()
}
function hideResults() {
  setTimeout(() => {
    let idContainer2 = "seccionBuscadorNoIndex"
    if (document.getElementById(idContainer2)) {
      document.getElementById(idContainer2).style.display = "none"
    }
  }, 250)
}

function filtradorJS() {
  console.log("FILTRANDO")
  let idContainer = "sectionPost"
  let classElement = "filteredSearch"

  if (document.getElementById(idContainer)) {
    // ES EL INDICE PARA FILTRAR
    var input, filter, container, element, i, txtValue
    input = document.getElementById("search")
    filter = input.value.toUpperCase()
    container = document.getElementById(idContainer)
    element = container.getElementsByClassName(classElement)
    for (i = 0; i < element.length; i++) {
      txtValue = element[i].id || element[i].innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        element[i].style.display = ""
      } else {
        element[i].style.display = "none"
      }
    }
  } else {
    let idContainer2 = "seccionBuscadorNoIndex"
    let classElement2 = "filteredSearch"

    if (document.getElementById(idContainer2)) {
      var input, filter, container, element, i, txtValue
      input = document.getElementById("search")
      filter = input.value.toUpperCase()
      container = document.getElementById(idContainer2)
      element = container.getElementsByClassName(classElement2)
      for (i = 0; i < element.length; i++) {
        txtValue = element[i].id || element[i].innerText
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          element[i].style.display = ""
        } else {
          element[i].style.display = "none"
        }
      }
    }
    // NO INDICE; QUERY Y FILTRAR EN BASE AL RESULTADO
    console.log("NO ES INDICE NO HAGO NADA")
  }
}

const SearchInput = () => {
  return (
    <>
      <div class="w-full md:flex relative pt-3">
        <SearchIcon />

        <input
          onKeyUp={displayResults}
          onFocus={displayResults}
          onBlur={hideResults}
          id="search"
          type="text"
          name="search"
          class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
          placeholder="Search..."
        />
        <div
          id="seccionBuscadorNoIndex"
          class="absolute rounded-xl w-full text-center bg-gray-800 text-white md:mt-11"
          style={{ display: "none" }}
        >
          {/* RESULTADOS */}
        </div>
      </div>
    </>
  )
}

export default SearchInput
