import * as React from 'react';

import Layout from '../components/layout';
import Articles from '../components/CrearArticulos/Articles';
import Seo from '../components/seo';

const crear = () => {
  return (
    <Layout>
      <Seo title="Crear Artículo" />
      <div className="grid justify-items-center font-size-4 w-full">
        <Articles />
      </div>
    </Layout>
  );
};

export default crear;
