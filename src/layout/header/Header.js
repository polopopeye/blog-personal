import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import twFormater from '../../components/utils/twFormater';

import profileUrl from '../../images/profile.jpg';
import HeaderMenu from './../Menu/Header/HeaderMenu';

import SearchInput from './modules/SearchInput';
import bgHeader from '../../images/svg/diagonalLines.svg';
import useLocation from '../../components/utils/useLocation';

const Header = ({ siteTitle }) => {
  const [showMenu, setshowMenu] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  const location = useLocation();
  if (location.loading) return <>Loading...</>;

  const pathName = location.location.pathname.replaceAll('/', '').trim();

  const diplay =
    pathName === 'tech' ||
    pathName === 'cv' ||
    pathName === 'crear' ||
    pathName === 'conectar'
      ? 'block'
      : 'block';

  const LogoContainer = () => {
    return (
      <>
        <a href className="mx-4 flex flex-row items-center">
          <img
            src={profileUrl}
            alt="HOT Bro"
            className={twFormater({
              base: 'h-16 w-full bg-gray-200 border rounded-full',
              print: 'hidden',
            })}
          />

          <span className="flex flex-col ml-2">
            <span className="truncate w-20 font-mono font-semibold tracking-wide leading-none">
              Kenneth Suarez
            </span>
            <span className="truncate w-20 text-gray-500 text-xs leading-none mt-1">
              Full Stack Developer
            </span>
          </span>
        </a>
      </>
    );
  };

  return (
    <header
      className={twFormater({
        base:
          ' w-full  fixed z-10 shadow py-4 px-4 transform translate-y-0 transition-all duration-150 ease-in bg-secondary ' +
          diplay,
        print: 'hidden',
        md: 'pr-72 ml-64 ',
      })}
      style={{
        backgroundImage: `url(${bgHeader})`,
      }}
    >
      {/* Mobile */}
      <div
        className={twFormater({
          base: 'flex header-content items-center flex-row',
          print: 'hidden',
          md: 'hidden',
        })}
      >
        <LogoContainer />

        <div
          className={twFormater({
            base: 'flex ml-auto',
            print: 'hidden',
          })}
        >
          <form className="inline-flex">
            <div
              className={twFormater({
                base: 'flex',
                md: 'hidden',
              })}
            >
              <a
                onClick={() => setshowSearch((showSearch) => !showSearch)}
                className="flex items-center justify-center h-10 w-10 border-transparent"
              >
                <svg
                  role={'img'}
                  className="h-6 w-6 text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>
          </form>

          <button
            className={twFormater({
              base: 'flex text-center align-text-bottom mt-2 ml-6 mr-4',
              md: 'hidden',
            })}
            onClick={() => setshowMenu((showMenu) => !showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <Transition
        show={showSearch}
        enter="transition-all duration-500"
        enterFrom="h-0 opacity-0"
        enterTo="h-12 opacity-100"
        leave="transition-all duration-500"
        leaveFrom="h-12 opacity-100"
        leaveTo="h-0 opacity-0"
      >
        <SearchInput />
      </Transition>
      <Transition
        show={showMenu}
        enter="transition-all duration-500"
        enterFrom="h-0 opacity-0"
        enterTo="h-52 opacity-100"
        leave="transition-all duration-500"
        leaveFrom="h-52 opacity-100"
        leaveTo="h-0 opacity-0"
      >
        <HeaderMenu />
      </Transition>

      {/* Desktop */}
      <div
        className={twFormater({
          base: 'hidden ',
          md: 'flex relative',
        })}
      >
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
