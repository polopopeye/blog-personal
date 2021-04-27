import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "tooltipster/dist/css/tooltipster.bundle.css"
import "tooltipster/dist/css/tooltipster.bundle.css"
import profileUrl from "../../images/profile.jpg"
let initialState = false
let initialStateSearch = false
let cnt = 0
let cntSearch = 0
const Header = ({ siteTitle }) => {
  const [showMenu, setshowMenu] = React.useState(initialState)
  const [showSearch, setshowSearch] = React.useState(initialState)
  return (
    <header class="bg-white shadow  py-4 px-4 transform translate-y-0  transition-all duration-150 ease-in">
      <div class="  flex md:hidden header-content  items-center flex-row">
        <a href class="mx-4 flex   flex-row items-center">
          <img
            src={profileUrl}
            alt
            class="h-16 w-16 bg-gray-200 border rounded-full"
          />

          <span class="flex flex-col ml-2">
            <span class="truncate w-20 font-mono font-semibold tracking-wide leading-none">
              Kenneth Suarez
            </span>
            <span class="truncate w-20 text-gray-500 text-xs leading-none mt-1">
              Web UI Developer
            </span>
          </span>
        </a>

        <div class="flex ml-auto">
          <form action="#" class="inline-flex  ">
            <div class="flex md:hidden">
              <a
                onClick={function () {
                  if (cnt == 0) {
                    setshowSearch(true)
                  } else {
                    setshowSearch(initialState)

                    if (initialState) {
                      initialState = false
                    } else {
                      initialState = true
                    }
                  }
                  cnt++
                }}
                href="#"
                class="flex items-center justify-center h-10 w-10 border-transparent"
              >
                <svg
                  class="h-6 w-6 text-gray-500"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>
          </form>

          <button
            class="flex text-center align-text-bottom mt-2 ml-6 mr-4"
            onClick={function () {
              if (cntSearch == 0) {
                setshowMenu(true)
              } else {
                setshowMenu(initialStateSearch)

                if (initialStateSearch) {
                  initialStateSearch = false
                } else {
                  initialStateSearch = true
                }
              }
              cntSearch++
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {showSearch ? (
        <>
          <div class=" md:flex relative pt-3">
            <input
              id="search"
              type="text"
              name="search"
              class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
              placeholder="Search..."
            />
          </div>
        </>
      ) : null}
      <div class=" hidden md:flex relative">
        <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
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

        <input
          id="search"
          type="text"
          name="search"
          class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
          placeholder="Search..."
        />
      </div>

      {showMenu ? (
        <>
          <div class="grid grid-flow-col grid-cols-1 grid-rows-4 gap-4 font-mono text-lg">
            <div class="w-full">
              <button class="w-full p-2">Proyectos</button>
            </div>
            <div class="w-full">
              <button class="w-full p-2">Curriculum</button>
            </div>
            <div class="w-full">
              <button class="w-full p-2">Contactar</button>
            </div>
            <div class="w-full">
              <button class="w-full p-2">Sobre mí</button>
            </div>
          </div>
        </>
      ) : null}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
