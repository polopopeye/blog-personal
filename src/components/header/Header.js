import * as React from "react"
import PropTypes from "prop-types"
import "tooltipster/dist/css/tooltipster.bundle.css"
import "tooltipster/dist/css/tooltipster.bundle.css"
import profileUrl from "../../images/profile.jpg"

import Menu from "./components/Menu"
import SearchInput from "./components/SearchInput"

let initialState = false
let initialStateSearch = false
let cnt = 0
let cntSearch = 0

const LogoContainer = () => {
  return (
    <>
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
    </>
  )
}

const Header = ({ siteTitle }) => {
  const [showMenu, setshowMenu] = React.useState(initialState)
  const [showSearch, setshowSearch] = React.useState(initialState)

  const handleMenu = () => {
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
  }
  const handleSearch = () => {
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
  }

  return (
    <header
      style={{
        backgroundColor: "#f2f2f2",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.172L6.172 0h5.656L0 11.828V6.172zm40 5.656L28.172 0h5.656L40 6.172v5.656zM6.172 12l12-12h3.656l12 12h-5.656L20 3.828 11.828 12H6.172zm12 0L20 10.172 21.828 12h-3.656z' fill='%23c5c5c5' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
      class="  shadow  py-4 px-4 transform translate-y-0  transition-all duration-150 ease-in"
    >
      <div class="  flex md:hidden header-content  items-center flex-row">
        <LogoContainer></LogoContainer>

        <div class="flex ml-auto">
          <form class="inline-flex  ">
            <div class="flex md:hidden">
              <a
                onClick={handleMenu}
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
            onClick={handleSearch}
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
      {showSearch ? <SearchInput /> : null}
      <div class=" hidden md:flex relative">
        <SearchInput />
      </div>

      {showMenu ? <Menu /> : null}
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
