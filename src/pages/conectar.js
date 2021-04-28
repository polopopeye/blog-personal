import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LoginRegisterBtn from "../components/loginRegister/LoginRegisterBtn"

const conectar = () => (
  <Layout>
    <Seo title="Conectar" />
    <div class="grid justify-items-center font-size-4 w-full">
      <h1 class="text-xl">Conectar</h1>
      <hr></hr>
      <LoginRegisterBtn />
    </div>
  </Layout>
)

export default conectar
