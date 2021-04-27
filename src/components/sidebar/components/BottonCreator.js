import React from "react"
import { Link } from "gatsby"

const BottonCreator = props => {
  return (
    <>
      <li class="my-px">
        <Link
          to={props.link}
          class={props.classN}
          activeClassName={props.classNActive}
        >
          <span class="flex items-center justify-center text-lg text-gray-400">
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
                d={props.iconD}
              />
            </svg>
          </span>
          <span class="ml-3 font-mono"> {props.nombre}</span>
        </Link>
      </li>
    </>
  )
}

export default BottonCreator
