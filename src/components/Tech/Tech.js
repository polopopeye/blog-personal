import React from 'react';

import { useTranslation } from 'react-i18next';
import store from '../../store';
import modalsSlice from '../../store/slice/modals';
import SideOver from './modules/SideOver';

import angularLogo from '../../images/icons/tech/angular.png';
import bootstrap from '../../images/icons/tech/bootstrap.png';
import cloudflare from '../../images/icons/tech/cloudflare.png';
import codeigniter from '../../images/icons/tech/codeigniter.png';
import cypress from '../../images/icons/tech/cypress.png';
import firebase from '../../images/icons/tech/firebase.png';
import gatsby from '../../images/icons/tech/gatsby.png';
import golang from '../../images/icons/tech/golang.png';
import googleCloud from '../../images/icons/tech/googleCloud.jpg';
import heroku from '../../images/icons/tech/heroku.jpg';
import jest from '../../images/icons/tech/jest.png';
import laravel from '../../images/icons/tech/laravel.png';
import mongodb from '../../images/icons/tech/mongodb.png';
import mysql from '../../images/icons/tech/mysql.png';
import nestjs from '../../images/icons/tech/nestjs.png';
import nextjs from '../../images/icons/tech/nextjs.png';
import nodejs from '../../images/icons/tech/nodejs.png';
import reactLogo from '../../images/icons/tech/react.png';
import sanityjs from '../../images/icons/tech/sanityjs.png';
import tailwind from '../../images/icons/tech/tailwind.png';
import tensorflowjs from '../../images/icons/tech/tensorflowjs.png';
import threejs from '../../images/icons/tech/threejs.png';
import typescript from '../../images/icons/tech/typescript.png';
import webgl from '../../images/icons/tech/webgl.png';
import wordpress from '../../images/icons/tech/wordpress.png';

const Tech = () => {
  const { t } = useTranslation();
  const files = [
    {
      name: 'React',
      years: '> 4', // Years of experience
      date: '30/10/2016', //Learned On
      description: t('react'),
      src: reactLogo,
      projects: [
        {
          name: 'My personal Blog',
          href: 'https://kennethsuarez.es/',
        },
        {
          name: 'Stonks Bot Project Front  End',
          href: 'https://stonksbot-344e2.web.app/',
        },
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
      ],
    },
    {
      name: 'Angular JS',
      years: '1', // Years of experience
      date: '2020', //Learned On
      description: t('angular'),
      src: angularLogo,
    },
    {
      name: 'Bootstrap',
      years: '> 4', // Years of experience
      date: '2016', //Learned On
      description: t('bootstrap'),
      src: bootstrap,
      projects: [
        {
          name: 'Stonks Bot Project Front  End',
          href: 'https://stonksbot-344e2.web.app/',
        },
      ],
    },
    {
      name: 'cloudflare',
      years: '> 4', // Years of experience
      date: '2016', //Learned On
      description: t('cloudflare'),
      src: cloudflare,
      projects: [
        {
          name: 'Stonks Bot Project Front  End',
          href: 'https://stonksbot-344e2.web.app/',
        },
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
      ],
    },
    {
      name: 'codeIgniter',
      years: '> 4', // Years of experience
      date: '2016', //Learned On
      description: t('codeigniter'),
      src: codeigniter,
      projects: [
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
      ],
    },
    {
      name: 'cypress',
      years: '> 4', // Years of experience
      date: '2016', //Learned On
      description: t('cypress'),

      src: cypress,
      projects: [
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
      ],
    },
    {
      name: 'firebase',
      years: '3', // Years of experience
      date: '2020', //Learned On
      description: t('firebase'),

      src: firebase,
      projects: [
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
      ],
    },
    {
      name: 'gatsby',
      years: '3', // Years of experience
      date: '2020', //Learned On
      description: t('gatsby'),

      src: gatsby,
      projects: [
        {
          name: 'My personal Blog',
          href: 'https://kennethsuarez.es/',
        },
      ],
    },
    {
      name: 'google cloud',
      years: '3', // Years of experience
      date: '2020', //Learned On
      description: t('googleCloud'),

      src: googleCloud,
      projects: [
        {
          name: 'My personal Blog',
          href: 'https://kennethsuarez.es/',
        },
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
        {
          name: 'Stonks Bot Project Front  End',
          href: 'https://stonksbot-344e2.web.app/',
        },
      ],
    },
    {
      name: 'Heroku',
      years: '3', // Years of experience
      date: '2020', //Learned On
      description: t('heroku'),

      src: heroku,
      projects: [
        {
          name: 'My personal Blog',
          href: 'https://kennethsuarez.es/',
        },
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
        {
          name: 'Stonks Bot Project Front  End',
          href: 'https://stonksbot-344e2.web.app/',
        },
        {
          name: 'Lot Of news ',
          href: 'https://github.com/polopopeye/lotofnews.com',
        },
      ],
    },
    {
      name: 'Jest',
      years: '3', // Years of experience
      date: '2020', //Learned On
      description: t('jest'),
      src: jest,
      projects: [
        {
          name: 'My personal Blog',
          href: 'https://kennethsuarez.es/',
        },
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
        {
          name: 'Stonks Bot Project Front  End',
          href: 'https://stonksbot-344e2.web.app/',
        },
      ],
    },
    {
      name: 'laravel',
      years: '3', // Years of experience
      date: '2020', //Learned On
      description: t('laravel'),

      src: laravel,
    },
    {
      name: 'mongodb',
      years: '3', // Years of experience
      date: '2020', //Learned On
      description: t('mongodb'),
      src: mongodb,
      projects: [
        {
          name: 'AI Arti',
          href: 'https://github.com/polopopeye/AIArti.com',
        },
      ],
    },
    {
      name: 'mysql',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description: t('mysql'),
      src: mysql,
    },
    {
      name: 'Nest JS',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description: t('nestjs'),

      src: nestjs,
      projects: [
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
      ],
    },
    {
      name: 'Next JS',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description: t('nextjs'),

      src: nextjs,
      projects: [
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
      ],
    },
    {
      name: 'Node JS',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description: t('nodejs'),

      src: nodejs,
      projects: [
        {
          name: 'My personal Blog',
          href: 'https://kennethsuarez.es/',
        },
        {
          name: 'Stonks Bot Project Front  End',
          href: 'https://stonksbot-344e2.web.app/',
        },
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
        {
          name: 'AI Arti',
          href: 'https://github.com/polopopeye/AIArti.com',
        },
      ],
    },
    {
      name: 'Sanity JS',
      years: '1', // Years of experience
      date: '2022', //Learned On
      description: t('sanityjs'),

      src: sanityjs,
    },
    {
      name: 'Tailwind css',
      years: '3', // Years of experience
      date: '2019', //Learned On
      description: t('tailwind'),

      src: tailwind,
      projects: [
        {
          name: 'My personal Blog',
          href: 'https://kennethsuarez.es/',
        },
        {
          name: 'Eucalypto Group',
          href: 'https://eucalyptogroup.com/',
        },
      ],
    },
    {
      name: 'Tensorflow JS',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description: t('tensorflowjs'),

      src: tensorflowjs,
      projects: [
        {
          name: 'AI Arti',
          href: 'https://github.com/polopopeye/AIArti.com',
        },
      ],
    },
    {
      name: 'Three JS',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description: t('threejs'),

      src: threejs,
    },
    {
      name: 'Typescript',
      years: '3', // Years of experience
      date: '2020', //Learned On
      description: t('typescript'),

      src: typescript,
    },
    {
      name: 'webgl',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description: t('webgl'),

      src: webgl,
    },
    {
      name: 'wordpress',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description: t('wordpress'),

      src: wordpress,
    },
    {
      name: 'GO lang',
      years: '2', // Years of experience
      date: '2020', //Learned On
      description: t('golang'),

      src: golang,
    },
  ];

  const handleOpenSideOver = (currentTechData) => {
    store.dispatch(modalsSlice.actions.techSideOver(true));
    store.dispatch(modalsSlice.actions.setTechSideOver(currentTechData));
  };

  return (
    <>
      <SideOver />

      <div className="h-full flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex items-stretch overflow-hidden">
            <main className="flex-1 ">
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex">
                  <h1 className="flex-1 text-2xl font-bold text-gray-100">
                    {t('tech.title')}
                  </h1>
                </div>

                <section
                  className="mt-8 pb-16"
                  aria-labelledby="gallery-heading"
                >
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
                    {files.map((file, i) => {
                      const {
                        name,
                        years,
                        date,
                        description,
                        src,
                        projects,
                      } = file;
                      return (
                        <li
                          onClick={() => {
                            handleOpenSideOver({
                              name: name,
                              description: description,
                              years: years,
                              date: date,
                              source: src,
                              sharedWith: projects,
                            });
                          }}
                          key={i}
                        >
                          <div className="group block w-full aspect-w-8 aspect-h-8 rounded-lg bg-primary overflow-hidden">
                            <img
                              src={src}
                              className="p-4 w-full h-auto bg-gray-100 rounded-md"
                              alt=""
                            />
                            <p className="mt-4 ml-4 block text-xl h-8 font-bold text-black bg-gradient-to-b from-gray-100 to-transparent   truncate">
                              {name}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
