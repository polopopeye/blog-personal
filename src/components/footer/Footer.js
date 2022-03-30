import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer px-4 py-6 select-none bg-tertiary">
        <div className="footer-content flex-row">
          <p className="text-sm text-quatertiary text-center">
            <span role="img" aria-label="Hot bro">
              Developed by Kenneth Suarez with 🥵🥵🥵
            </span>
            <a
              className="bg-primary rounded-md p-2"
              href="https://github.com/polopopeye/blog-personal"
            >
              look at the code of this site on github
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
