import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';

import '../components/translationEngine';
import '../styles/global.css';
import '../components/translationEngine/i18n';
import getArticlesList from './articlesList/modules/getArticlesList';
import store from '../store';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    if (store.getState().articles.length === 0) {
      getArticlesList();
    }
  }, []);

  return (
    <>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <main className="main flex flex-col flex-grow  w-full -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div className="flex flex-col  ">{children}</div>
          <Footer />
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
