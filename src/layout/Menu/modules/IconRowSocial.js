import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const IconsRowSocial = ({ classCss = ' ' }) => {
  return (
    <>
      <div
        class={
          'grid grid-flow-col pt-8 grid-cols-3 gap-1 text-center ' + classCss
        }
      >
        <div>
          <a
            href="https://github.com/polopopeye"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/kennethsuarez/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/majestichalcon/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </>
  );
};

export default IconsRowSocial;
