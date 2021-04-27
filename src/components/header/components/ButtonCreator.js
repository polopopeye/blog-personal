import React from "react"
import { Link } from "gatsby"

const ButtonCreator = props => {
  return (
    <>
      <div class="w-full">
        <Link
          class={props.classN}
          to={props.link}
          activeClassName={props.classNActive}
        >
          {props.nombre}
        </Link>
      </div>
    </>
  )
}

export default ButtonCreator
