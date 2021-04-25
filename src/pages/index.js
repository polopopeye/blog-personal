import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section class="w-full flex-start justify-center items-center px-2">
      <div
        class="wrapper w-full bg-gray-50 rounded-b-md shadow-lg overflow-hidden bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png')",
        }}
      >
        <div class="p-3 space-y-3">
          <h3 class="text-white font-mono font-bold text-center bg-gray-900 bg-opacity-80 rounded-md">
            Nepal Mountain
          </h3>
          <p class="text-sm text-gray-900 leading-sm ">
            Bienvenido a la montaña de nepal un maravilloso lugar en el que
            podras escalar y repirar aire limpio, serás acompoañado por
            profesonales en alpinismo.
          </p>
        </div>
        <button class="bg-teal-600 w-full flex justify-center py-4 text-white font-semibold transition duration-300 hover:bg-teal-500">
          Mas info
        </button>
      </div>
    </section>
  </Layout>
)

export default IndexPage
