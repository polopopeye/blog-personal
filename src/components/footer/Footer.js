import React from "react"
import PropTypes from "prop-types"

const Footer = () => {
  return (
    <>
      <footer class="footer px-4 py-6 select-none">
        <div class="footer-content">
          <p class="text-sm text-gray-600 text-center">
            <img
              class="mx-auto"
              src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
            ></img>
            kennethsuarez.es - 2021 - Desarrollado en Barcelona con ❤️ por
            Kenneth Suarez
          </p>
        </div>
      </footer>
    </>
  )
}

Footer.propTypes = {}

export default Footer
