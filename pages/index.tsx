import Layout from '../src/layout/Layout';
import Seo from '../src/components/seo';
import ArticleList from '../src/components/articlesList/ArticleList';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const IndexPage = () => {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Seo title={t('home')} />
      <ArticleList />
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

export default IndexPage;