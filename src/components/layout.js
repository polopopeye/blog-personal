import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import "./firebaseIni"

import Header from "./header/Header"
import Sidebar from "./sidebar/Sidebar"
import Footer from "./footer/Footer"

// import firebase from "firebase/app"
// import "firebase/analytics"
// import "firebase/auth"
// import "firebase/firestore"

// var firebaseConfig = {
//   apiKey: "AIzaSyCrGBWA3bqK65YK7jaUuFWlr0hRLbUlj1A",
//   authDomain: "blog-personal-kenneth.firebaseapp.com",
//   projectId: "blog-personal-kenneth",
//   storageBucket: "blog-personal-kenneth.appspot.com",
//   messagingSenderId: "833941574074",
//   appId: "1:833941574074:web:701c36ab165f5e84690d83",
// }

// firebase.initializeApp(firebaseConfig)

// global.firebase = firebase

const Layout = ({ children }) => {
  // console.log("TEST")
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header>
        <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
          <Sidebar></Sidebar>
          <main class="main flex flex-col flex-grow  w-full -ml-64 md:ml-0 transition-all duration-150 ease-in">
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div class="flex flex-col  ">{children}</div>
            <Footer></Footer>
          </main>
        </div>
      </header>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
