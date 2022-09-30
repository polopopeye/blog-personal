import { DownloadIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../../components/languageSelector/LanguageSelector';
import en from '../../../components/pdfCV/EN_CV.pdf';
import es from '../../../components/pdfCV/EN_CV.pdf';
import jp from '../../../components/pdfCV/JP_CV.pdf';
import ThemeSelector from '../../../components/themeSelector/ThemeSelector';
import useLocation from '../../../components/utils/useLocation';
import bgSubmenu from './../../../images/svg/endlessClouds.svg';

const DownloadPdfBtn = (props) => {
  const { url } = props;

  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href={url}
        className="hover:bg-primary mx-auto px-4 h-9 text-sm font-medium z-0 text-quaternary bg-secondary rounded-md whitespace-nowrap  mt-4 items-center flex transition-all duration-500"
      >
        <DownloadIcon className="w-8 pr-3" /> download as pdf
      </a>
    </>
  );
};

const SubMenu = () => {
  const lang = useTranslation()?.i18n.language;
  let defaultUrl = es;
  switch (lang) {
    case 'en':
      defaultUrl = en;
      break;
    case 'es':
      defaultUrl = es;
      break;
    case 'jp':
      defaultUrl = jp;
      break;
    default:
      defaultUrl = es;
      break;
  }

  const [url, setUrl] = useState(defaultUrl);
  useEffect(() => {
    let defaultUrl = es;
    switch (lang) {
      case 'en':
        defaultUrl = en;
        break;
      case 'es':
        defaultUrl = es;
        break;
      case 'jp':
        defaultUrl = jp;
        break;
      default:
        defaultUrl = es;
        break;
    }

    setUrl(defaultUrl);
  }, [lang]);

  const location = useLocation();

  if (location.loading) return 'loading';

  return (
    <>
      {location.location.pathname !== '/tech/' &&
      location.location.pathname !== '/tech' &&
      location.location.pathname !== '/cv/' &&
      location.location.pathname !== '/cv' &&
      location.location.pathname !== '/conectar/' &&
      location.location.pathname !== '/conectar' &&
      location.location.pathname !== '/crear/' &&
      location.location.pathname !== '/crear' ? (
        <>
          <div
            className="print:hidden bg-tertiary mt-20  md:ml-64 md:pr-64 w-full"
            style={{
              backgroundImage: `url(${bgSubmenu})`,
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'round',
              overflowX: 'auto',
            }}
          >
            <div className="md:flex text-quaternary w-min text-center mx-auto p-4">
              {(location.location.pathname === '/' ||
                location.location.pathname === '') && <LanguageSelector />}
              <ThemeSelector />
              {/* TODO: FINISH ORDER BY: */}
              {/* <OrderBySelector /> */}
              {(location.location.pathname === '/cv/' ||
                location.location.pathname === '/cv') && (
                <DownloadPdfBtn url={url} />
              )}
            </div>
          </div>
        </>
      ) : (
        <div
          className="print:hidden bg-tertiary mt-20 md:mt-0  md:ml-64 md:pr-64 w-full"
          style={{
            backgroundImage: `url(${bgSubmenu})`,
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'round',
            overflowX: 'auto',
          }}
        >
          <div className="md:flex text-quaternary w-min text-center mx-auto p-4">
            {(location.location.pathname === '/' ||
              location.location.pathname === '' ||
              location.location.pathname === '/tech/' ||
              location.location.pathname === '/tech' ||
              location.location.pathname === '/cv/' ||
              location.location.pathname === '/cv' ||
              location.location.pathname === '/conectar/' ||
              location.location.pathname === '/conectar' ||
              location.location.pathname === '/crear/' ||
              location.location.pathname === '/crear') && <LanguageSelector />}
            <ThemeSelector />

            {(location.location.pathname === '/cv/' ||
              location.location.pathname === '/cv') && (
              <DownloadPdfBtn url={url} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SubMenu;
