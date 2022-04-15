import React from 'react';
import Layout from '../layout/Layout';
import Seo from '../components/seo';
import Tech from '../components/Tech/Tech';

const tech = () => {
  return (
    <>
      <Layout>
        <Seo title="Tecnologías" />
        <Tech />
      </Layout>
    </>
  );
};

export default tech;
