import React, { useState } from 'react';
import { notFoundImgs } from '../../utils/globalConsts';
import randomNumber from '../../utils/randomNumber';

import twFormater from '../../utils/twFormater';

const ArticleNotFound = () => {
  const [imgIndex, setImgIndex] = useState(
    randomNumber(0, notFoundImgs.length - 1)
  );

  setTimeout(() => {
    setImgIndex(randomNumber(0, notFoundImgs.length - 1));
  }, 5000);

  return (
    <>
      <h1
        id="noresultsIndex"
        class="text-2xl text-center p-2 select-none"
        style={{ display: 'none' }}
      >
        Sry, no hay resultados...
        <center>
          <img
            src={notFoundImgs[imgIndex]}
            class={twFormater({
              base: 'w-full rounded-xl select-none pt-12',
              md: 'w-64',
            })}
          />
        </center>
      </h1>
    </>
  );
};

export default ArticleNotFound;
