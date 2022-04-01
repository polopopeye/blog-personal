import React from 'react';

import Layout from '../layout/Layout';
import Seo from '../components/seo';

import ArticleList from '../components/articlesList/ArticleList';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <ArticleList />
    </Layout>
  );
};
export default IndexPage;
