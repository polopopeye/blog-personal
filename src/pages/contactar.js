import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const contactar = () => {
  const sendEmail = () => {
    setTimeout(() => {
      window.open("mailto:kenneth7e7a@gmail.com ")
    }, 100)
  }
  return (
    <Layout>
      <Seo title="Curriculum Vitae" />
      <div class="text-center">
        <h2>
          Puedes contactar conmigo a traves de mi correo Kenneth7e7a@gmail.com
        </h2>
        <button
          class="p-4 bg-gray-700 text-white rounded-xl hover:bg-gray-300 hover:text-gray-900 transition-all duration-500  "
          onClick={sendEmail}
        >
          Enviar correo
        </button>
      </div>
    </Layout>
  )
}

export default contactar
