import React from 'react';

import Layout from '../components/Layout';
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
