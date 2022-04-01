import React, { useEffect, useState } from 'react';
import isConnected from '../../../components/utils/isConnected';
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
      nombre: 'Artículos',
      link: '/',
      classN: defaultClassNameButton,
      classNActive: defaultClassNameActiveButton,
      iconD:
        'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      nombre: 'Tecnologías',
      link: '/tech/',
      classN: defaultClassNameButton,
      classNActive: defaultClassNameActiveButton,
      iconD:
        'M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z',
    },
    {
      nombre: 'Curriculum',
      link: '/cv/',
      classN: defaultClassNameButton,
      classNActive: defaultClassNameActiveButton,
      iconD:
        'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    },
    // {
    //   nombre: 'Contactar',
    //   link: '/contactar/',
    //   classN: defaultClassNameButton,
    //   classNActive: defaultClassNameActiveButton,
    //   iconD:
    //     'M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20',
    // },
    // {
    //   nombre: 'Sobre mí',
    //   link: '/hola/',
    //   classN: defaultClassNameButton,
    //   classNActive: defaultClassNameActiveButton,
    //   iconD:
    //     'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    // },
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
    <ul className="flex flex-col w-full">
      {menuData.map((data) => {
        if (data.link === '/crear/') {
          if (userConnected && userDetails.email === 'kenneth7e7a@gmail.com') {
            return <ButtonCreator data={data} />;
          } else {
            return null;
          }
        }

        return <ButtonCreator data={data} />;
      })}

      <IconsRowSocial classCss="text-white" />
    </ul>
  );
};

export default SidebarMenu;
