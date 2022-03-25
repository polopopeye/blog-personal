import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer px-4 py-6 select-none">
        <div className="footer-content flex-row">
          <p className="text-sm text-gray-600 text-center">
            Proudly developed by Kenneth Suarez with{' '}
            <span role="img" aria-label="Hot bro">
              🥵🥵🥵
            </span>{' '}
            -
            <a href="https://github.com/polopopeye/blog-personal">
              look at the code of this site
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
