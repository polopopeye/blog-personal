import React from 'react';
import { Menu } from '@headlessui/react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import twFormater from '../../utils/twFormater';

const MenuItem = ({ setShowSelector, lang }) => {
  const changeLang = () => {
    i18next.changeLanguage(lang);
    setShowSelector(false);
  };
  const { t } = useTranslation();

  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={() => changeLang()}
          className={twFormater({
            base:
              'transation-all bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm',
            hover: 'text-green-700 bg-green-100',
          })}
        >
          {t(lang)}
        </button>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
