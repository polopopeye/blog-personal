import React, { useEffect, useState } from 'react';
import isConnected from '../../utils/isConnected';
import IconsRowSocial from '../modules/IconRowSocial';
import ButtonCreator from './BottonCreator';
const SidebarMenu = () => {
  const [userConnected, setUserConnected] = useState(false);
  const [userDetails, setUserDetails] = useState(undefined);

  useEffect(() => {
    isConnected(setUserConnected, setUserDetails);
  }, []);

  const defaultClassNameButton =
    'transition-all duration-500 flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700';
  const defaultClassNameActiveButton =
    'flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100';

  const menuData = [
    {
      nombre: 'Proyectos',
      link: '/',
      classN: defaultClassNameButton,
      classNActive: defaultClassNameActiveButton,
      iconD:
        'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },

    {
      nombre: 'Curriculum',
      link: '/cv/',
      classN: defaultClassNameButton,
      classNActive: defaultClassNameActiveButton,
      iconD:
        'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    },
    {
      nombre: 'Contactar',
      link: '/contactar/',
      classN: defaultClassNameButton,
      classNActive: defaultClassNameActiveButton,
      iconD:
        'M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20',
    },
    {
      nombre: 'Sobre mí',
      link: '/hola/',
      classN: defaultClassNameButton,
      classNActive: defaultClassNameActiveButton,
      iconD:
        'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      nombre: 'Dashboard',
      link: '/conectar/',
      classN: defaultClassNameButton,
      classNActive: defaultClassNameActiveButton,
      iconD:
        'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    },

    {
      nombre: 'Crear',
      link: '/crear/',
      classN: defaultClassNameButton,
      classNActive: defaultClassNameActiveButton,
      iconD:
        'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
    },
  ];

  return (
    <ul class="flex flex-col w-full">
      {menuData.map((data) => {
        if (data.link === '/crear/') {
          if (userConnected && userDetails.email === 'kenneth7e7a@gmail.com')
            return <ButtonCreator data={data} />;
        } else {
          return <ButtonCreator data={data} />;
        }
      })}

      <IconsRowSocial classCss="text-white" />
    </ul>
  );
};

export default SidebarMenu;
