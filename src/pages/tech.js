import Layout from '../layout/Layout';
import Seo from '../components/seo';
import TechGallery from '../components/Tech/Tech';
import { useTranslation } from 'react-i18next';

const Tech = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t('tech')} />
      <TechGallery />
    </Layout>
  );
};

export default Tech;
