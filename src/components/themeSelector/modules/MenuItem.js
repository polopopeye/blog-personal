import React from 'react';
import { Menu } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import store from '../../../store';
import currentThemeSlice from '../../../store/slice/currentTheme';

const MenuItem = ({ setShowSelector, theme }) => {
  const changeTheme = () => {
    setShowSelector(false);
    if (theme !== store.getState().currentTheme) {
      store.dispatch(currentThemeSlice.actions.setData(theme));
    }
  };
  const { t } = useTranslation();

  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={() => changeTheme()}
          className="hover:text-green-700 hover:bg-green-100 transation-all bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
        >
          {t(theme)}
        </button>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
