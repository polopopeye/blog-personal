import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import store from '../../../store';
import modalsSlice from '../../../store/slice/modals';

const SideOver = () => {
  const [open, setOpen] = useState(store.getState().modals.techSideOver);
  const [techSideOver, setTechSideOver] = useState(
    store.getState().modals.techSideOverData
  );

  store.subscribe(() => {
    setOpen(store.getState().modals.techSideOver);
    setTechSideOver(store.getState().modals.techSideOverData);
  });

  return (
    <>
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
            <div className="pointer-events-auto ">
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 ">
                  <div className="flex items-start justify-between">
                    <div className="ml-3 flex h-7 items-center"></div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {/* Replace with your content */}
                  <aside className=" w-72 lg:w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto ">
                    <div className="pb-16 space-y-6">
                      <div>
                        <div className="block w-full rounded-lg overflow-hidden">
                          <img
                            src={techSideOver.source}
                            alt=""
                            className="object-cover"
                          />
                        </div>
                        <div className="mt-4 flex items-start justify-between">
                          <div>
                            <h2 className="text-lg font-medium text-gray-900">
                              {techSideOver.name}
                            </h2>
                            <p className="text-sm font-medium text-gray-500">
                              {techSideOver.size}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="py-3 flex justify-between text-sm font-medium">
                          <dt className="text-gray-500">Years of Experience</dt>
                          <dd className="text-gray-900">
                            {techSideOver.years}
                          </dd>
                        </div>
                        <div className="py-3 flex justify-between text-sm font-medium">
                          <dt className="text-gray-500">Learned on</dt>
                          <dd className="text-gray-900">{techSideOver.date}</dd>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Description
                        </h3>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-sm text-black">
                            {techSideOver.description}
                          </p>
                        </div>
                      </div>
                      {techSideOver.sharedWith && (
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Personal projects
                          </h3>
                          <ul
                            role="list"
                            className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
                          >
                            {techSideOver.sharedWith?.map((project, i) => (
                              <li
                                key={i}
                                className="py-3 flex justify-between items-center"
                              >
                                <div className="flex items-center">
                                  <p className="ml-4 text-sm font-medium text-gray-900">
                                    {project.name}
                                  </p>
                                </div>
                                <a
                                  href={project.href}
                                  target="_blank"
                                  type="button"
                                  className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Go to
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SideOver;
