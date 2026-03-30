import { useEffect, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

import Header from './header/Header';

import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';

import SubMenu from './Menu/SubMenu/SubMenu';

import getArticlesList from './../components/articlesList/modules/getArticlesList';

import bgPage from '../images/svg/diagonalLines.svg';
import TagManager from 'react-gtm-module';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const articles = useSelector((state: RootState) => state.articles || []);
  const currentTheme = useSelector((state: RootState) => state.currentTheme || 'theme-default');

  useEffect(() => {
    if (articles.length === 0) {
      getArticlesList();
    }

    if (typeof window !== 'undefined') {
      TagManager.initialize({ gtmId: 'G-GX77BSZGDV' });
    }
  }, [articles.length]);

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
          <Header siteTitle="Blog Personal Kenneth" />
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


export default Layout;
