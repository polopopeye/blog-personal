import React from 'react';
import { Link } from 'gatsby';

const ButtonCreator = ({ classN, link, classNActive, nombre }) => {
  return (
    <>
      <div class="w-full">
        <Link class={classN} to={link} activeClassName={classNActive}>
          {nombre}
        </Link>
      </div>
    </>
  );
};

export default ButtonCreator;
