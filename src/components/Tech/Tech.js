import React from 'react';

import SideOver from './modules/SideOver';
import modalsSlice from '../../store/slice/modals';
import store from '../../store';
import reactLogo from '../../images/icons/tech/react.png';
import { useTranslation } from 'react-i18next';

const Tech = () => {
  const files = [
    {
      name: 'React',
      years: '> 4',
      date: '30/10/2020',
      description: 'Used on several projects, one of my favourite technologies',
      src: reactLogo,
      projects: [
        {
          id: 2,
          name: 'Thiss Blog',
          href: 'https://thiss-blog.netlify.app/',
        },
      ],
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const handleOpenSideOver = (currentTechData) => {
    store.dispatch(modalsSlice.actions.techSideOver(true));
    store.dispatch(modalsSlice.actions.setTechSideOver(currentTechData));
  };
  const { t } = useTranslation();

  return (
    <>
      <SideOver></SideOver>

      <div className="h-full flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex items-stretch overflow-hidden">
            <main className="flex-1 ">
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex">
                  <h1 className="flex-1 text-2xl font-bold text-gray-900">
                    {t('tech.title')}
                  </h1>
                </div>

                <section
                  className="mt-8 pb-16"
                  aria-labelledby="gallery-heading"
                >
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
                  >
                    {files.map((file) => {
                      const {
                        name,
                        years,
                        date,
                        description,
                        src,
                        projects,
                      } = file;
                      return (
                        <>
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
                            key={name}
                          >
                            <div className="group block w-full aspect-w-8 aspect-h-8 rounded-lg bg-primary overflow-hidden">
                              <img src={src} className="p-4" />
                              <p className="mt-4 ml-4 block text-lg font-medium text-white  truncate">
                                {name}
                              </p>
                            </div>
                          </li>
                        </>
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
