import React from 'react';

import SideOver from './modules/SideOver';
import modalsSlice from '../../store/slice/modals';
import store from '../../store';

const Tech = () => {
  const files = [
    {
      name: 'React',
      years: '> 4',
      src: '/icons/tech/react.png',
    },
    {
      name: 'IMG_4985.HEIC',
      size: '3.9 MB',
      src:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    // More files...
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const handleOpenSideOver = (currentTechData) => {
    store.dispatch(modalsSlice.actions.techSideOver(true));
    store.dispatch(modalsSlice.actions.setTechSideOver(currentTechData));
  };

  return (
    <>
      <SideOver></SideOver>

      <div className="h-full flex overflow-hidden">
        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">
            <main className="flex-1 ">
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex">
                  <h1 className="flex-1 text-2xl font-bold text-gray-900">
                    Technologies
                  </h1>
                </div>

                {/* Gallery */}
                <section
                  className="mt-8 pb-16"
                  aria-labelledby="gallery-heading"
                >
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
                  >
                    {files.map((file) => (
                      <li
                        onClick={() => {
                          handleOpenSideOver({
                            name: 'React',
                            description:
                              'Used on several projects, one of my favourite technologies',
                            years: '> 3',
                            date: '30/10/2020',
                            source: file.src,
                            sharedWith: [
                              {
                                id: 2,
                                name: 'Andrea McMillan',
                                imageUrl:
                                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                              },
                            ],
                          });
                        }}
                        key={file.name}
                      >
                        <div className="group block w-full aspect-w-8 aspect-h-8 rounded-lg bg-primary overflow-hidden">
                          <img
                            src={file.src}
                            className="pointer-events-none p-4"
                          />
                          <p className="mt-4 ml-4 block text-lg font-medium text-white  truncate pointer-events-none">
                            {file.name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </main>
            {/* Details sidebar */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
