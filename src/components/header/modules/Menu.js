import React from 'react';
import MenuButton from './MenuButton';
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconsRowSocial = () => {
  return (
    <>
      <div class="grid grid-flow-col grid-cols-3 gap-1 text-center text-black">
        <div>
          <a href="https://github.com/polopopeye" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/kennethsuarez/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/majestichalcon/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </>
  );
};

const Menu = () => {
  return (
    <div class="grid grid-flow-col grid-cols-1 grid-rows-5 gap-4 font-mono text-lg text-center ">
      <MenuButton
        nombre="Proyectos"
        link="/"
        classN="w-full p-4"
        classNActive="w-full p-2 text-gray-100 bg-gray-700"
      />
      <MenuButton
        nombre="Curriculum"
        link="/cv/"
        classN="w-full p-4  "
        classNActive="w-full p-2 text-gray-100 bg-gray-700"
      />
      <MenuButton
        nombre="Contactar"
        link="/contactar/"
        classN="w-full p-4  "
        classNActive="w-full p-2 text-gray-100 bg-gray-700"
      />
      <MenuButton
        nombre="Sobre mi"
        link="/hola/"
        classN="w-full p-4   "
        classNActive="w-full p-2 text-gray-100 bg-gray-700"
      />

      <IconsRowSocial />
    </div>
  );
};

export default Menu;
