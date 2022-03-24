import React from 'react';
import ArticleNotFound from '../components/articlesList/modules/ArticleNotFound';
import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <section class="w-full flex-start justify-center items-center px-2">
        <ArticleNotFound display="block" />
      </section>
    </Layout>
  );
};

export default NotFoundPage;
