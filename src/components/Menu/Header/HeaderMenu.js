import React from 'react';
import MenuButton from './MenuButton';

import IconsRowSocial from '../modules/IconRowSocial';

const HeaderMenu = () => {
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

      <IconsRowSocial classCss="text-black" />
    </div>
  );
};

export default HeaderMenu;
