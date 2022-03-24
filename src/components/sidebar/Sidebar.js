import React, { useEffect, useState } from 'react';

import FotoPerfil from '../../images/profile.jpg';
import ButtonCreator from './components/BottonCreator';
import Lfirebase from '../../images/buildWith/firebase.png';
import Lgatsby from '../../images/buildWith/gatsby.png';
import Lreact from '../../images/buildWith/react.png';
import Ltailwind from '../../images/buildWith/tailwind.png';

import {
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import isConnected from '../utils/isConnected';
import { MainImage } from 'gatsby-plugin-image';

const IconsRowSocial = () => {
  return (
    <>
      <div class="grid grid-flow-col pt-8 grid-cols-3 gap-1 text-center text-white">
        <div>
          <a href="https://github.com/polopopeye" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/kennethsuarez/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/majestichalcon/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </>
  );
};

const Sidebar = () => {
  const [userConnected, setUserConnected] = useState(false);

  const [userDetails, setUserDetails] = useState(undefined);

  const admEmail = 'kenneth7e7a@gmail.com';

  useEffect(() => {
    isConnected(setUserConnected, setUserDetails);
  }, []);

  return (
    <>
      <aside
        class="sidebar w-64 p-2 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in"
        style={{
          backgroundColor: '#545454',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%232b2b2b' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      >
        <div class="sidebar-header flex items-center justify-center py-4">
          <div class="inline-flex ">
            <MainImage
              class="rounded-full border-white border-8"
              src={FotoPerfil}
            ></MainImage>
          </div>
        </div>
        <div class="sidebar-content px-4 py-6 -my-8">
          <h1 class="text-center text-white font-mono">Kenneth Suarez</h1>
          <h6 class="text-center text-white font-mono">Web UI Developer</h6>
          <ul class="flex flex-col w-full">
            <ButtonCreator
              nombre="Proyectos"
              link="/"
              classN="transition-all duration-500 flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              classNActive="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
              iconD="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />

            <ButtonCreator
              nombre="Curriculum"
              link="/cv/"
              classN="transition-all duration-500 flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              classNActive="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
              iconD="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />

            <ButtonCreator
              nombre="Contactar"
              link="/contactar/"
              classN="transition-all duration-500 flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              classNActive="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
              iconD="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />

            <ButtonCreator
              nombre="Sobre mí"
              link="/hola/"
              classN="transition-all duration-500 flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              classNActive="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
              iconD="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />

            <ButtonCreator
              idH="conectarAdm"
              nombre="Dashboard"
              link="/conectar/"
              classN="transition-all duration-500 flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              classNActive="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
              iconD="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />

            {userConnected && userDetails.email === 'kenneth7e7a@gmail.com' && (
              <ButtonCreator
                nombre="Crear"
                link="/crear/"
                classN="transition-all duration-500 flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                classNActive="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                iconD="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            )}

            <IconsRowSocial />
          </ul>

          <div class="transition-all duration-500 text-black bg-gray-100 -mx-4 rounded-lg absolute bottom-0 align-bottom self-end items-end content-end">
            <p>Build 💖 with:</p>
            <div class=" grid grid-flow-col grid-cols-4  ">
              <div class="p-2">
                <a href="https://firebase.google.com/use-cases" target="_blank">
                  <img alt="Firebase" width="32" src={Lfirebase}></img>
                </a>
              </div>
              <div class="p-2">
                <a href="https://www.gatsbyjs.com/why-gatsby/" target="_blank">
                  <img alt="Gatsby" width="32" src={Lgatsby}></img>
                </a>
              </div>
              <div class="p-2">
                <a href="https://es.reactjs.org/" target="_blank">
                  <img alt="React" width="32" src={Lreact}></img>
                </a>
              </div>
              <div class="p-2">
                <a href="https://tailwindcss.com/" target="_blank">
                  <img alt="Tailwind" width="32" src={Ltailwind}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
