import * as React from 'react';
import Layout from '../src/layout/Layout';
import Articles from '../src/components/crearArticulos/Articles';
import Seo from '../src/components/seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const Crear = () => {
  return (
    <Layout>
      <Seo title="Crear Artículo" />
      <div className="grid justify-items-center font-size-4 w-full">
        <Articles />
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

export default Crear;