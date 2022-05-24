import React from 'react';
import MenuButton from './MenuButton';

import IconsRowSocial from '../modules/IconRowSocial';
import { useTranslation } from 'react-i18next';

const HeaderMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-flow-col grid-cols-1 grid-rows-4 gap-4 font-mono text-lg text-center ">
      <MenuButton
        nombre={t('articles.title')}
        link="/"
        classN="w-full p-4"
        classNActive="w-full p-2 text-gray-100 bg-gray-700"
      />
      <MenuButton
        nombre={t('tech.title')}
        link="/tech/"
        classN="w-full p-4  "
        classNActive="w-full p-2 text-gray-100 bg-gray-700"
      />
      <MenuButton
        nombre={t('curriculum.title')}
        link="/cv/"
        classN="w-full p-4  "
        classNActive="w-full p-2 text-gray-100 bg-gray-700"
      />

      {/* <MenuButton
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
      /> */}

      <IconsRowSocial />
    </div>
  );
};

export default HeaderMenu;
