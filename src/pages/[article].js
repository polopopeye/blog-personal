// import { string } from 'prop-types';
import React from 'react';
import GetSingleArticle from '../components/articleSingle/GetCurrentArticle';
import Layout from '../components/layout';
import Seo from '../components/seo';

const testDinamicUrl = ({ article: idOrSlug }) => {
  return (
    <>
      <Layout>
        <Seo title={idOrSlug + ' Article'} />
        <div>Article: {idOrSlug}</div>
        <GetSingleArticle idOrSlug={idOrSlug} />
      </Layout>
    </>
  );
};

export default testDinamicUrl;

// const postData = {
//   id: string,
//   lang: string,
//   title: string,
//   slug: string,
//   coverImg: string,
//   desc: string,
//   postInHtml: string,
// };
