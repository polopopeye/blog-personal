import { Menu } from '@headlessui/react';
import { TranslateIcon } from '@heroicons/react/solid';
import React from 'react';
import LanguageSelector from '../../../components/languageSelector/LanguageSelector';
import OrderBySelector from '../../../components/orderBy/OrderBySelector';
import ThemeSelector from '../../../components/themeSelector/ThemeSelector';
import twFormater from '../../../components/utils/twFormater';

const DownloadPdfBtn = () => {
  return (
    <>
      <button
        className={twFormater({
          base:
            'mx-auto px-4 h-9 text-sm font-medium z-0 text-quaternary bg-secondary rounded-md whitespace-nowrap  mt-4 items-center flex transition-all duration-500 ',
          hover: 'bg-primary ',
          focus: 'outline-none',
          'focus-visible': 'ring-quaternary ring-opacity-75 ring-2',
        })}
      >
        <TranslateIcon className="w-8 pr-3" /> download as pdf
      </button>
    </>
  );
};

const SubMenu = () => {
  return (
    <div className="print:hidden bg-tertiary ">
      <div
        className={twFormater({
          base: ' text-quaternary w-min text-center mx-auto p-4',
          md: 'flex',
        })}
      >
        <LanguageSelector />
        <ThemeSelector />

        {/* Only home */}
        <OrderBySelector />
        {/* Only on CV View */}
        <DownloadPdfBtn />
      </div>
    </div>
  );
};

export default SubMenu;
