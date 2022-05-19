import React from 'react';
import { Link } from 'gatsby';

const BottonCreator = ({ data }) => {
  const { link, classN, classNActive, nombre, iconD } = data;
  return (
    <li className="my-px " key={nombre}>
      <Link to={link} className={classN} activeClassName={classNActive}>
        <span className="flex items-center justify-center text-lg text-gray-400 ">
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
              d={iconD}
            />
          </svg>
        </span>
        <span className="ml-3 font-mono"> {nombre}</span>
      </Link>
    </li>
  );
};

export default BottonCreator;
