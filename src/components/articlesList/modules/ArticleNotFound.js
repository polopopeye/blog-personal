import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { notFoundImgs } from '../../utils/globalConsts';
import randomNumber from '../../utils/randomNumber';

const ArticleNotFound = ({ display = 'none' }) => {
  const [imgIndex, setImgIndex] = useState(
    randomNumber(0, notFoundImgs.length - 1)
  );

  useEffect(() => {
    setInterval(() => {
      setImgIndex(randomNumber(0, notFoundImgs.length - 1));
    }, 5000);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <h1
        id="noresultsIndex"
        className="text-2xl text-center p-2 select-none"
        style={{ display: display }}
      >
        {t('sryNotFound')}

        <center>
          <img
            src={notFoundImgs[imgIndex]}
            alt="sry"
            className="w-full rounded-xl select-none pt-12 md:w-64"
          />
        </center>
      </h1>
    </>
  );
};

export default ArticleNotFound;
