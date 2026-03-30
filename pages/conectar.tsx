import * as React from 'react';
import Layout from '../src/layout/Layout';
import Seo from '../src/components/seo';
import LoginRegisterBtn from '../src/components/loginRegister/LoginRegisterBtn';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Conectar = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Seo title="Conectar" />
      <div className="grid justify-items-center font-size-4 w-full">
        <h1 className="text-xl">{t('connect')}</h1>
        <hr />
        <LoginRegisterBtn />
      </div>
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

export default Conectar;