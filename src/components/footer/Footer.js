import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <>
      <footer class="footer px-4 py-6 select-none">
        <div class="footer-content flex-row">
          <p class="text-sm text-gray-600 text-center">
            Proudly developed by Kenneth Suarez with 🥵🥵🥵 -
            <a href="https://github.com/polopopeye/blog-personal">
              look at the code of this site
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
