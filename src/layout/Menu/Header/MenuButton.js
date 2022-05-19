import React from 'react';
import { Link } from 'gatsby';

const MenuButton = ({ classN, link, classNActive, nombre }) => {
  return (
    <>
      <div className="w-full">
        <Link className={classN} to={link} activeClassName={classNActive}>
          {nombre}
        </Link>
      </div>
    </>
  );
};

export default MenuButton;
