import { Menu } from '@headlessui/react';
import { useRouter } from 'next/router';

const MenuItem = ({ setShowSelector, lang }: { setShowSelector: (v: boolean) => void; lang: string }) => {
  const router = useRouter();

  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={() => {
            router.push(router.pathname, router.asPath, { locale: lang });
            setShowSelector(false);
          }}
          className="hover:text-green-700 hover:bg-green-100  transation-all bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
        >
          {lang}
        </button>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
