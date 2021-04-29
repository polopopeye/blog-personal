import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

import Layout from "../components/layout"
import CrearArticulos from "../components/crearArticulos/crearArticulos"
import Seo from "../components/seo"

const crear = () => (
  <Layout>
    <Seo title="Crear Artículo" />
    <div class="grid justify-items-center font-size-4 w-full">
      <h1 class="text-xl p-2">Crear Nuevo Post</h1>
      <CrearArticulos></CrearArticulos>
    </div>
  </Layout>
)

export default crear
