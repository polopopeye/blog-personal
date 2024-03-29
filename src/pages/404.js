import React from 'react';
import ArticleNotFound from '../components/articlesList/modules/ArticleNotFound';
import Seo from '../components/seo';
import Layout from '../layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <section className="w-full flex-start justify-center items-center px-2">
        <ArticleNotFound display="block" />
      </section>
    </Layout>
  );
};

export default NotFoundPage;
