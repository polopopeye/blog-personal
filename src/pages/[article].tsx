import React from 'react';
import GetSingleArticle from '../components/articleSingle/GetCurrentArticle';
import Layout from '../layout/Layout';
import Seo from '../components/seo';
import ArticleNotFound from '../components/articlesList/modules/ArticleNotFound';

const testDinamicUrl = ({ article: idOrSlug }) => {
  return (
    <>
      <Layout>
        <Seo title={idOrSlug + ' Article'} />
        {idOrSlug ? (
          <GetSingleArticle idOrSlug={idOrSlug} />
        ) : (
          <ArticleNotFound />
        )}
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
