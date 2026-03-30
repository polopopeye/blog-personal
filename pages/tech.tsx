import Layout from '../src/layout/Layout';
import Seo from '../src/components/seo';
import TechGallery from '../src/components/Tech/Tech';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const Tech = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Seo title={t('tech')} />
      <TechGallery />
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

export default Tech;