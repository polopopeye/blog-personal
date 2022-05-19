import React from 'react';
import { useTranslation } from 'react-i18next';

import ProfilePicture from './modules/ProfilePicture';

import { globalConstants } from '../../components/utils/globalConsts';

import bgSidebar from '../../images/svg/circuitBoard.svg';
import SidebarMenu from '../Menu/Sidebar/SidebarMenu';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div
      className="bg-primary border-r-4 border-tertiary drop-shadow-2xl text-quaternary sidebar w-64 max-w-64 p-2 transform -translate-x-full transition-transform duration-150 ease-in      md:translate-x-0 md:h-screen md:fixed"
      style={{
        backgroundImage: `url(${bgSidebar})`,
        backgroundBlendMode: 'soft-light',
      }}
    >
      <div className="sidebar-header flex items-center justify-center py-4  ">
        <ProfilePicture />
      </div>
      <div className="sidebar-content px-4 py-6 -my-8">
        <h1 className="text-center">{globalConstants.userName}</h1>
        <h4 className="text-center">{globalConstants.shortName}</h4>
        <h6 className="text-center">{t('titleDevPosition')}</h6>

        <SidebarMenu />
      </div>
    </div>
  );
};

export default Sidebar;
