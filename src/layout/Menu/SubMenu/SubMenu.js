import { Menu } from '@headlessui/react';
import { DownloadIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import LanguageSelector from '../../../components/languageSelector/LanguageSelector';
import OrderBySelector from '../../../components/orderBy/OrderBySelector';
import ThemeSelector from '../../../components/themeSelector/ThemeSelector';
import twFormater from '../../../components/utils/twFormater';
import bgSubmenu from './../../../images/svg/endlessClouds.svg';
import { Location } from '@reach/router';
import useLocation from '../../../components/utils/useLocation';
import { useTranslation } from 'react-i18next';
import en from '../../../components/pdfCV/encv.pdf';
import es from '../../../components/pdfCV/escv.pdf';

const DownloadPdfBtn = (props) => {
  const { url } = props;

  return (
    <>
      <a
        target="_blank"
        href={url}
        className={twFormater({
          base:
            'mx-auto px-4 h-9 text-sm font-medium z-0 text-quaternary bg-secondary rounded-md whitespace-nowrap  mt-4 items-center flex transition-all duration-500 ',
          hover: 'bg-primary ',
          focus: 'outline-none',
          'focus-visible': 'ring-quaternary ring-opacity-75 ring-2',
        })}
      >
        <DownloadIcon className="w-8 pr-3" /> download as pdf
      </a>
    </>
  );
};

const SubMenu = () => {
  const lang = useTranslation()?.i18n.language;

  const [url, setUrl] = useState(lang === 'en' ? en : es);
  useEffect(() => {
    const dwnUrl = lang === 'en' ? en : es;
    setUrl(dwnUrl);
  }, [lang]);

  const location = useLocation();
  if (location.loading) return <>Loading...</>;

  const pathName = location.location.pathname.replaceAll('/', '').trim();

  return (
    <div
      className="print:hidden bg-tertiary mt-24  md:ml-64 md:pr-64 w-full"
      style={{
        backgroundImage: `url(${bgSubmenu})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'round',
        overflowX: 'auto',
      }}
    >
      <div
        className={twFormater({
          base: ' text-quaternary w-min text-center mx-auto p-4',
          md: 'flex',
        })}
      >
        <LanguageSelector />
        <ThemeSelector />
        {pathName === '' && <OrderBySelector />}
        {pathName === 'cv' && <DownloadPdfBtn url={url} />}
      </div>
    </div>
  );
};

export default SubMenu;
