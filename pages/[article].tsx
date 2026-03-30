import React from 'react';
import { useRouter } from 'next/router';
import GetSingleArticle from '../src/components/articleSingle/GetCurrentArticle';
import Layout from '../src/layout/Layout';
import Seo from '../src/components/seo';
import { GetStaticProps } from 'next';
import ArticleNotFound from '../src/components/articlesList/modules/ArticleNotFound';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ArticlePage = () => {
  const router = useRouter();
  const { article } = router.query;

  return (
    <>
      <Layout>
        <Seo title={article ? article + ' Article' : 'Article'} />
        {article ? (
          <GetSingleArticle idOrSlug={article} />
        ) : (
          <ArticleNotFound />
        )}
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'es', ['common'])),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default ArticlePage;