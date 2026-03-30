import Layout from '../layout/Layout';
import Seo from '../components/seo';

import ArticleList from '../components/articlesList/ArticleList';
import { useTranslation } from 'next-i18next';

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t('home')} />
      <ArticleList />
    </Layout>
  );
};
export default IndexPage;
