import { Menu, Transition } from '@headlessui/react';
import { useState } from 'react';
import { ChevronDownIcon, PencilAltIcon } from '@heroicons/react/solid';
import MenuItem from './modules/MenuItem';
import { useTranslation } from 'react-i18next';

const ThemeSelector = () => {
  const { t } = useTranslation();

  const [showSelector, setShowSelector] = useState(false);
  const themes = ['theme-dark', 'theme-funny', 'theme-default'];

  return (
    <div className="w-56 text-center top-16 my-4">
      <Menu as="div" className="relative inline-block text-center">
        <Menu.Button
          as="button"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-quaternary focus-visible:ring-opacity-75 inline-flex justify-center w-52 px-4 py-2 text-sm font-medium z-0 text-quaternary bg-secondary rounded-md hover:bg-opacity-30 "
        >
          {({ open }) => {
            setShowSelector(open);
            return (
              <>
                <PencilAltIcon className="w-8 pr-3" /> {t('selectTheme')}
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
          enter="transition-all duration-300"
          enterFrom="h-0"
          enterTo="h-32"
          entered="h-32"
          leave="transation-all duration-300"
          leaveFrom="h-32"
          leaveTo="h-0"
        >
          <Menu.Items className=" z-10 left-4 w-48 mt-2 origin-top-right bg-quaternary divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-primary ring-opacity-5">
            <div className="px-1 py-1 ">
              {themes.map((theme, i) => {
                return (
                  <MenuItem
                    setShowSelector={setShowSelector}
                    theme={theme}
                    key={i}
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

export default ThemeSelector;
