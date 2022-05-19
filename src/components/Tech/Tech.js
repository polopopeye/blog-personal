import React from 'react';

import SideOver from './modules/SideOver';
import modalsSlice from '../../store/slice/modals';
import store from '../../store';
import { useTranslation } from 'react-i18next';

import reactLogo from '../../images/icons/tech/react.png';
import angularLogo from '../../images/icons/tech/angular.png';
import bootstrap from '../../images/icons/tech/bootstrap.png';
import cloudflare from '../../images/icons/tech/cloudflare.png';
import codeigniter from '../../images/icons/tech/codeigniter.png';
import cypress from '../../images/icons/tech/cypress.png';
import firebase from '../../images/icons/tech/firebase.png';
import gatsby from '../../images/icons/tech/gatsby.png';
import googleCloud from '../../images/icons/tech/googleCloud.jpg';
import heroku from '../../images/icons/tech/heroku.jpg';
import jest from '../../images/icons/tech/jest.png';
import laravel from '../../images/icons/tech/laravel.png';
import mongodb from '../../images/icons/tech/mongodb.png';
import mysql from '../../images/icons/tech/mysql.png';
import nestjs from '../../images/icons/tech/nestjs.png';
import nextjs from '../../images/icons/tech/nextjs.png';
import nodejs from '../../images/icons/tech/nodejs.png';
import sanityjs from '../../images/icons/tech/sanityjs.png';
import tailwind from '../../images/icons/tech/tailwind.png';
import tensorflowjs from '../../images/icons/tech/tensorflowjs.png';
import threejs from '../../images/icons/tech/threejs.png';
import typescript from '../../images/icons/tech/typescript.png';
import webgl from '../../images/icons/tech/webgl.png';
import wordpress from '../../images/icons/tech/wordpress.png';
import golang from '../../images/icons/tech/golang.png';

const Tech = () => {
  const files = [
    {
      name: 'React',
      years: '> 4', // Years of experience
      date: '30/10/2016', //Learned On
      description:
        'One of my favourite technologies, my first option when we talk about frontEnd',
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
      description:
        'Not my main option, but I like this tech developed by google and I now how the basics, I prefer to use react by popularity',
      src: angularLogo,
    },
    {
      name: 'Bootstrap',
      years: '> 4', // Years of experience
      date: '2016', //Learned On
      description:
        'I love to use bootstrap CSS, nowadays I prefer Tailwind, but sometimes I use it if I want to develop an app fast without to worry about the CSS',
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
      description:
        'I love cloudflare for an extra security layer, DDos shield, extra analisys and great dns manager, sad that most of the companies not know about it',
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
      description:
        'Easy to use and lot of potential when we talk about to build an app with PHP',
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
      description:
        'first option when we want to test integrational testing and frontend rendering',
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
      description:
        'I love to use the stack of firebase, like firestore and take advantage of the google cloud servers',
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
      description:
        'love to use Gatsby with nextJS is one of my favorite framework to use in frontend,  easy to use and lot of potential like graphQL',
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
      description:
        'I like advantatge of all the enviroment of google platforms, due to scalability and performance',
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
      description:
        'When we talk about backend, the servers of heroku leads us to freedom and scalability',
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
      description: 'My first option for unit testing',
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
      description:
        'My first option when we have to develop with PHP, the most professional and powerfull framework to use',
      src: laravel,
    },
    {
      name: 'mongodb',
      years: '3', // Years of experience
      date: '2020', //Learned On
      description: 'My favourite DB besides the firestore, due to scalability',
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
      description: ' My first database engine that I learned, I like it',
      src: mysql,
    },
    {
      name: 'Nest JS',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description:
        'First option for the backend with nodeJS, I like all the infrastructure behind, lot of potential for the API',
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
      description:
        'First option for the frontEnd with react, lot of potential and freedom',
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
      description:
        'With GoLang I think are the best techs to the backend, my first option to use',
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
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description:
        'Good option like db engine for small projects, and easy and fast way to develop, (Not my first option but I like it)',
      src: sanityjs,
    },
    {
      name: 'Tailwind css',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description:
        'My first option to use as css framework, mainly performance, mobile first, and scalability in themes',
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
      description:
        "I love Machine Learning and all related with AI, I'm happy and eager to see the future with this tech, Tensorflow applied to web development is really exciting!",
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
      description:
        'Usefull tool to make interactive websites with canvas, and interaction with other tools, It depends a lot for wich project we use that, otherwise i will go with Unity but still usefull',
      src: threejs,
    },
    {
      name: 'Typescript',
      years: '3', // Years of experience
      date: '2020', //Learned On
      description:
        'I love TS, my first option to develop a serius project, is like a javascript but with superpowers',
      src: typescript,
    },
    {
      name: 'webgl',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description:
        'Usefull tech to make interactive a website, not my first option but usefull for small developments of website development',
      src: webgl,
    },
    {
      name: 'wordpress',
      years: '>4', // Years of experience
      date: '2016', //Learned On
      description:
        'I loved this tech, and the easy enviroment to develop and integrate plugins and themes, not using it right now... I prefer to go with Typescript tech like nextJS, nestJS etc.',
      src: wordpress,
    },
    {
      name: 'GO lang',
      years: '2', // Years of experience
      date: '2020', //Learned On
      description:
        'One of my favourites langs for the backend after nodeJS, so fast and simple <3',
      src: golang,
    },
  ];

  const handleOpenSideOver = (currentTechData) => {
    store.dispatch(modalsSlice.actions.techSideOver(true));
    store.dispatch(modalsSlice.actions.setTechSideOver(currentTechData));
  };
  const { t } = useTranslation();

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
