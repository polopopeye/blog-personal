import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header/Header';

import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';

import '../translationEngine';
import '../translationEngine/i18n';

import '../styles/global.css';
import store from '../store';
import SubMenu from './Menu/SubMenu/SubMenu';

import getArticlesList from './../components/articlesList/modules/getArticlesList';

import bgPage from '../images/svg/diagonalLines.svg';
import TagManager from 'react-gtm-module';

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

    TagManager.initialize({ gtmId: 'G-GX77BSZGDV' });
  }, []);
  const [currentTheme, setcurrentTheme] = useState(
    store.getState().currentTheme
  );
  store.subscribe(() => setcurrentTheme(store.getState().currentTheme));

  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GX77BSZGDV"
      ></script>
      <div
        className={
          'flex flex-row min-h-screen bg-secondary text-quaternary ' +
          currentTheme
        }
        style={{ backgroundImage: `url(${bgPage})`, overflow: 'hidden' }}
      >
        <Sidebar />
        <main className="flex flex-col flex-grow  w-full -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <SubMenu />
          <div className="flex flex-col  md:ml-64 md:pr-64 w-full">
            {children}
          </div>
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
