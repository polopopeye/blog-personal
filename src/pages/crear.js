import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

import Layout from '../components/layout';
import Articles from '../components/CrearArticulos/Articles';
import Seo from '../components/seo';
import { articles } from '../components/crearArticulos/constants';

const crear = () => (
  <Layout>
    <Seo title="Crear Artículo" />
    <div class="grid justify-items-center font-size-4 w-full">
      <h1 class="text-xl p-2">{articles.ifaceMesssages.createNewArticle}</h1>
      <Articles />
    </div>
  </Layout>
);

export default crear;
