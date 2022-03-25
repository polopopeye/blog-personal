import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';

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

  return (
    <>
      <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <main class="main flex flex-col flex-grow  w-full -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div class="flex flex-col  ">{children}</div>
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
