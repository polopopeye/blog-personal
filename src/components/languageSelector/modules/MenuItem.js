import { Menu } from '@headlessui/react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const MenuItem = ({ setShowSelector, lang }) => {
  const { t } = useTranslation();

  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={() => {
            i18next.changeLanguage(lang);
            setShowSelector(false);
          }}
          className="hover:text-green-700 hover:bg-green-100  transation-all bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
        >
          {t(lang)}
        </button>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
