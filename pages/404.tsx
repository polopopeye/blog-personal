import React from 'react';
import ArticleNotFound from '../src/components/articlesList/modules/ArticleNotFound';
import Seo from '../src/components/seo';
import Layout from '../src/layout/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'es', ['common'])),
    },
  };
}

export default NotFoundPage;