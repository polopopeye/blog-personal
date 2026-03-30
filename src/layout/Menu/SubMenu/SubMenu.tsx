import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import LanguageSelector from '../../../components/languageSelector/LanguageSelector';
import ThemeSelector from '../../../components/themeSelector/ThemeSelector';
import { useRouter } from 'next/router';
import bgSubmenu from './../../../images/svg/endlessClouds.svg';

const DownloadPdfBtn = ({ url }: { url: string }) => {
  const { t } = useTranslation('common');
  const [pdfSrc, setpdfSrc] = useState(url);

  useEffect(() => {
    setpdfSrc(url);
  }, [url]);

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={pdfSrc}
      className="hover:bg-primary mx-auto px-4 h-9 text-sm font-medium z-0 text-quaternary bg-secondary rounded-md whitespace-nowrap mt-4 items-center flex transition-all duration-500"
    >
      <ArrowDownTrayIcon className="w-8 pr-3" /> {t('downloadAsPdf')}
    </a>
  );
};

const SubMenu = () => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const pathname = router.pathname;
  const lang = i18n.language;

  let defaultUrl: string;
  switch (lang) {
    case 'en':
      defaultUrl = '/pdf/en.pdf';
      break;
    case 'jp':
      defaultUrl = '/pdf/jp.pdf';
      break;
    default:
      defaultUrl = '/pdf/es.pdf';
      break;
  }

  const isHome = pathname === '/';
  const isCv = pathname === '/cv';

  return (
    <div
      className="print:hidden bg-tertiary mt-20 md:mt-0 md:ml-64 md:pr-64 w-full relative z-20"
      style={{
        backgroundImage: `url(${typeof bgSubmenu === 'string' ? bgSubmenu : bgSubmenu?.src})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'round',
        overflowX: 'auto',
      }}
    >
      <div className="md:flex text-quaternary w-min text-center mx-auto p-4">
        <LanguageSelector />
        <ThemeSelector />
        {isCv && <DownloadPdfBtn url={defaultUrl} />}
      </div>
    </div>
  );
};

export default SubMenu;
