import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, TranslateIcon } from '@heroicons/react/solid';
import MenuItem from './modules/MenuItem';
import { useTranslation } from 'react-i18next';

import { resources } from '../../translationEngine/langs';

const LanguageSelector = () => {
  const { t } = useTranslation();

  const [showSelector, setShowSelector] = useState(false);
  const langsArr = Object.keys(resources);

  return (
    <div className="w-56 text-center top-16 my-4">
      <Menu as="div" className="relative">
        <Menu.Button
          as="button"
          className="focus-visible:ring-white ring-opacity-75 ring-2 focus:outline-none hover:bg-opacity-30 inline-flex justify-center w-52 px-4 py-2 text-sm font-medium z-0 text-quaternary bg-secondary rounded-md"
        >
          {({ open }) => {
            setShowSelector(open);
            return (
              <>
                <TranslateIcon className="w-8 pr-3" /> {t('selectLanguage')}
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
          enter="transition-all  duration-300"
          enterFrom="h-0"
          enterTo="h-32"
          entered="h-32"
          leave="transation-all  duration-300"
          leaveFrom="h-32"
          leaveTo="h-0"
        >
          <Menu.Items className="z-10 absolute left-4 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ">
            <div className="px-1 py-1 ">
              {langsArr.map((lang, index) => {
                return (
                  <MenuItem
                    setShowSelector={setShowSelector}
                    lang={lang}
                    key={index}
                  />
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default LanguageSelector;
