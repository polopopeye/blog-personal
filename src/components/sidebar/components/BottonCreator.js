import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const BottonCreator = props => {
  return (
    <>
      <li class="my-px">
        <Link to={props.link} class={props.classN}>
          <span class="flex items-center justify-center text-lg text-gray-400">
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </span>
          <span class="ml-3 font-mono"> {props.nombre}</span>
        </Link>
      </li>
    </>
  )
}

export default BottonCreator
