import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/Header"
import Sidebar from "./sidebar/Sidebar"
import Footer from "./footer/Footer"

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
