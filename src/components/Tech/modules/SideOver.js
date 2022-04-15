import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import store from '../../../store';
import modalsSlice from '../../../store/slice/modals';

const SideOver = () => {
  const [open, setOpen] = useState(store.getState().modals.techSideOver);
  const [currentFile, setCurrentFile] = useState(
    store.getState().modals.techSideOverData
  );

  store.subscribe(() => {
    setOpen(store.getState().modals.techSideOver);
    setCurrentFile(store.getState().modals.techSideOverData);
    console.log(currentFile);
  });

  return (
    <>
      {/* <Transition.Root show={open} as={Fragment}> */}
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={() => {
          store.dispatch(modalsSlice.actions.techSideOver(false));
        }}
        open={open}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            {/* <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            > */}
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <div className="ml-3 flex h-7 items-center"></div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {/* Replace with your content */}
                  <aside className="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
                    <div className="pb-16 space-y-6">
                      <div>
                        <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                          <img
                            src={currentFile.source}
                            alt=""
                            className="object-cover"
                          />
                        </div>
                        <div className="mt-4 flex items-start justify-between">
                          <div>
                            <h2 className="text-lg font-medium text-gray-900">
                              {currentFile.name}
                            </h2>
                            <p className="text-sm font-medium text-gray-500">
                              {currentFile.size}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="py-3 flex justify-between text-sm font-medium">
                          <dt className="text-gray-500">Years of Experience</dt>
                          <dd className="text-gray-900">>3 Years</dd>
                        </div>
                        <div className="py-3 flex justify-between text-sm font-medium">
                          <dt className="text-gray-500">Learned on</dt>
                          <dd className="text-gray-900">30/03/2021</dd>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Description
                        </h3>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-sm text-black">
                            Used on several projects, one of my favourite
                            technologies
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Projects Used
                        </h3>
                        <ul
                          role="list"
                          className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
                        >
                          {currentFile.sharedWith.map((person) => (
                            <li
                              key={person.id}
                              className="py-3 flex justify-between items-center"
                            >
                              <div className="flex items-center">
                                <img
                                  src={person.imageUrl}
                                  alt=""
                                  className="w-8 h-8 rounded-full"
                                />
                                <p className="ml-4 text-sm font-medium text-gray-900">
                                  {person.name}
                                </p>
                              </div>
                              <button
                                type="button"
                                className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Go to
                                <span className="sr-only">{person.name}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </aside>
                  {/* /End replace */}
                </div>
              </div>
            </div>
            {/* </Transition.Child> */}
          </div>
        </div>
      </Dialog>
      {/* </Transition.Root> */}
    </>
  );
};

export default SideOver;
