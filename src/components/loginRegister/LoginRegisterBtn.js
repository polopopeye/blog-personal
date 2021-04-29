import React, { useEffect } from "react"
import {
  logOut,
  checkIsLogedIn,
  registerConnect,
} from "./components/googleAuth"
// import firebase from "gatsby-plugin-firebase"

const LoginRegisterBtn = () => {
  // let cnt = 0
  // function checkDisplay() {
  //   if (cnt > 3) {
  //     console.log("EJECUTADO VARIAS COMPROBACIONES")
  //   } else {

  //   }
  // }
  // checkDisplay()
  setTimeout(() => {
    checkIsLogedIn()
  }, 0)

  return (
    <div>
      <h1 id="tittleWelcome"></h1>

      <button
        id="Conectar"
        style={{ display: "none" }}
        onClick={registerConnect}
        class="bg-gray-900 text-white p-4"
      >
        Entrar / REGISTRARSE
      </button>
      {/* <button
        href="/crear/"
        id="crear"
        style={{ display: "none" }}
        class="bg-gray-900 text-white p-4"
      >
        CREAR POST
      </button> */}

      <button
        style={{ display: "none" }}
        id="Logout"
        onClick={logOut}
        class="bg-gray-900 text-white p-4"
      >
        LOG OUT
      </button>
    </div>
  )
}

export default LoginRegisterBtn
