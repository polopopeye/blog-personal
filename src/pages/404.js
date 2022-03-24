import React, { useState } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { notFoundImgs } from '../components/utils/globalConsts';
import randomNumber from '../components/utils/randomNumber';
import twFormater from '../components/utils/twFormater';

const NotFoundPage = () => {
  const [imgIndex, setImgIndex] = useState(
    randomNumber(0, notFoundImgs.length - 1)
  );

  setTimeout(() => {
    setImgIndex(randomNumber(0, notFoundImgs.length - 1));
  }, 5000);

  return (
    <Layout>
      <Seo title="404: Not found" />
      <center>
        <h1>404: Not Found</h1>
        <br></br>
        <p>O NOOO!!!!</p>
        <br></br>
        <img
          src={notFoundImgs[imgIndex]}
          class={twFormater({
            base: 'w-full rounded-xl select-none pt-12',
            md: 'w-64',
          })}
        />
      </center>
    </Layout>
  );
};

export default NotFoundPage;
