import React from "react"
import PropTypes from "prop-types"
import FotoPerfil from "../../images/profile.jpg"
import ButtonCreator from "./components/BottonCreator"

const Sidebar = props => {
  return (
    <>
      <aside class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-900">
        <div class="sidebar-header flex items-center justify-center py-4">
          <div class="inline-flex ">
            <img
              class="rounded-full border-white border-8"
              src={FotoPerfil}
            ></img>
          </div>
        </div>
        <div class="sidebar-content px-4 py-6 -my-8">
          <h1 class="text-center text-white font-mono">Kenneth Suarez</h1>
          <span class="text-center text-white font-mono">Web UI Developer</span>
          <ul class="flex flex-col w-full">
            <ButtonCreator
              nombre="Proyectos"
              link="/"
              classN="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
            />

            <ButtonCreator
              nombre="Curriculum"
              link="/cv/"
              classN="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            />

            <ButtonCreator
              nombre="Contactar"
              link="/contactar/"
              classN="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            />
            <ButtonCreator
              nombre="Sobre mí"
              link="/hola/"
              classN="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            />
            <div class="grid grid-flow-col grid-cols-3 gap-1 text-center text-white">
              <div>GITHUB</div>
              <div>WEB </div>
              <div>LinkedIn</div>
            </div>
          </ul>
        </div>
      </aside>
    </>
  )
}

Sidebar.propTypes = {}

export default Sidebar
