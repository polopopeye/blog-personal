import React from 'react';

import { Menu, Transition } from '@headlessui/react';
import { useState } from 'react';
import { ChevronDownIcon, TranslateIcon } from '@heroicons/react/solid';
import MenuItem from './MenuItem';
import { useTranslation } from 'react-i18next';
import twFormater from '../../../utils/twFormater';

const ThemeSelector = () => {
  const { t } = useTranslation();

  const [showSelector, setShowSelector] = useState(false);
  const themes = ['theme-dark', 'theme-funny', 'theme-default'];

  return (
    <div className="w-56 text-center top-16 my-4">
      <Menu as="div" className="relative inline-block text-center">
        <Menu.Button
          as="button"
          className={twFormater({
            base:
              'inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20',
            hover: 'bg-opacity-30 ',
            focus: 'outline-none',
            'focus-visible': 'ring-white ring-opacity-75 ring-2',
          })}
        >
          {({ open }) => {
            setShowSelector(open);
            return (
              <>
                <TranslateIcon className="w-8 pr-3" /> {t('selectTheme')}
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </>
            );
          }}
        </Menu.Button>

        <Transition
          show={showSelector}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={twFormater({
              base:
                'absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ',
              focus: 'outline-none',
            })}
          >
            <div className="px-1 py-1 ">
              {themes.map((theme) => {
                return (
                  <MenuItem setShowSelector={setShowSelector} theme={theme} />
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ThemeSelector;
