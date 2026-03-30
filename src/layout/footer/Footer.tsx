import React from 'react';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <footer className="footer px-4 py-6 select-none bg-tertiary print:hidden">
        <div className="footer-content flex-row">
          <p className="text-sm text-quatertiary text-center">
            <span role="img" aria-label="Hot bro">
              {t('developed')} 🥵🥵🥵
            </span>
            <a
              className="bg-primary rounded-md p-2"
              href="https://github.com/polopopeye/blog-personal"
            >
              {t('lookCode')}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
