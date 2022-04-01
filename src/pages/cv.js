import * as React from 'react';

import Layout from '../layout/Layout';
import Seo from '../components/seo';
const StarIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute -ml-2 -mt-2 text-yellow-600"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </>
  );
};

const ClockIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 absolute ml-1 -mt-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </>
  );
};

const cv = () => (
  <Layout>
    <Seo title="Curriculum Vitae" />

    <div className="p-6 mx-auto page   print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">
      <header className="flex items-center mb-4 md:mb-8">
        <div className="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3">
          <div className="initial text-center">K</div>
          <div className="text-center initial">S</div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-750 pb-px">
          Kenneth Suarez Guineart
        </h1>
      </header>

      <section className="mt-4 first:mt-0">
        <div className="break-inside-avoid">
          <h2 className="mb-2 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
            INFORMACIÓN BÁSICA
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="flex flex-inline text-center  rounded-sm p-1   bg-gray-300 w-full">
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
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                Contacto
              </span>
              Telefono: <b> +34604144510 </b> <br />
              Email: <b> Kenneth7e7a@gmail.com </b> <br />
              Github: <b> @polopopeye </b> <br />
              LinkedIn: <b> /in/kennethsuarez/ </b> <br />
            </div>
            <div>
              <span className="flex flex-inline text-center  rounded-sm p-1   bg-gray-300 w-full">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Idiomas
              </span>
              Español:Nativo <br />
              English:Alto <br />
              Català:Bilingue <br />
            </div>
          </div>
        </div>

        <section className="mb-4.5 break-inside-avoid">
          <header>
            <h2 className=" text-center mt-4 mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              WEB UI DEVELOPER
            </h2>
          </header>
          <p className="mt-2.1 text-md text-gray-800 leading-normal">
            Llevo varios años programando, tanto con tecnologias del backend
            como del frontend, conozco su integración y comunicación entre ambas
            partes, asi como desarrollo y comunicacion de APIs.
            <br></br>
            Programo usando metodologias ágiles (TDD, GIT, Kanban, Scrum),
            wireframing y mockups de alta resolución, POP (Programación
            orientada a propiedades) y POO (Programación orientada a objetos).
            <hr></hr>
            Desarrollo y conozco frameworks como:
            <div className=" grid grid-cols-3 md:grid-cols-6 print:grid-cols-6 gap-1 text-center">
              <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 className="font-bold">React</h6>
                <span className="text-sm">
                  <ClockIcon></ClockIcon> (> 4 Años)
                </span>
              </div>
              <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                <h6 className="font-bold">Angular</h6>
                <span className="text-sm">
                  <ClockIcon></ClockIcon> (1 Año)
                </span>
              </div>
              <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 className="font-bold">Node JS </h6>
                <span className="text-sm">
                  <ClockIcon></ClockIcon> (> 4 Años)
                </span>
              </div>
              <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 className="font-bold">Gatsby </h6>
                <span className="text-sm">
                  <ClockIcon></ClockIcon> (1 Años)
                </span>
              </div>
              <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 className="font-bold"> Tailwind CSS </h6>
                <span className="text-sm">
                  <ClockIcon></ClockIcon> (2 Años)
                </span>
              </div>
              <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 className="font-bold"> Bootstrap CSS </h6>
                <span className="text-sm">
                  <ClockIcon></ClockIcon> (>4 Años)
                </span>
              </div>

              <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                {/* <StarIcon></StarIcon> */}
                <h6 className="font-bold">Laravel (PHP)</h6>
                <span className="text-sm">
                  <ClockIcon></ClockIcon> (> 3 Años)
                </span>
              </div>
              <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                {/* <StarIcon></StarIcon> */}
                <h6 className="font-bold">CodeIgniter (PHP) </h6>
                <span className="text-sm">
                  <ClockIcon></ClockIcon> (> 4 Años)
                </span>
              </div>

              <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 className="font-bold">Jquery </h6>
                <span className="text-sm">
                  <ClockIcon></ClockIcon> (> 4 Años)
                </span>
              </div>
              <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                {/* <StarIcon></StarIcon> */}
                <h6 className="font-bold">WebGL</h6>
                <span className="text-sm">
                  <ClockIcon></ClockIcon> (2 Años)
                </span>
              </div>
              <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 className="font-bold">ThreeJS</h6>
                <span className="text-sm">
                  <ClockIcon></ClockIcon> (2 Años)
                </span>
              </div>
            </div>
            <br></br>
            <i>
              Además he trabajado y desarrollado con Otras tecnologias:
              <br></br>
              <div className=" grid grid-cols-3 md:grid-cols-6 print:grid-cols-6 gap-1 text-center">
                <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">MySQL</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> (> 4 Años)
                  </span>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">Firebase</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> (2 Años)
                  </span>
                  <p className="text-xs">
                    Including Auth, FireStore, Hosting Deployment, Machine
                    Learning
                  </p>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">FireStore</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> (2 Años)
                  </span>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">MongoDB</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> (3 Años)
                  </span>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                  {/* <StarIcon></StarIcon> */}
                  <h6 className="font-bold">Wordpress Avanzado</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> (> 4 Años)
                  </span>
                  <p className="text-xs">Desarrollo de plugins y temas</p>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">Jest</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> (2 Años)
                  </span>
                  <p className="text-xs">
                    Para el testeo automático de código y mockups
                  </p>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-light-blue-700">
                  {/* <StarIcon></StarIcon> */}
                  <h6 className="font-bold"> TensorFlowJS</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> (1 Año)
                  </span>
                </div>
              </div>
            </i>
          </p>
        </section>
      </section>

      <section className="mt-8 first:mt-0">
        <div className="break-inside-avoid">
          <h2 className="text-center mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
            EXPERIÈNCIA
          </h2>

          <section className="mb-4.5 break-inside-avoid">
            <header>
              <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                Sirastudio SL
              </h3>
              <p className="leading-normal text-md text-gray-650">
                Enero 2017 - Diciembre 2017
              </p>
            </header>
            <p className="mt-2.1 text-md text-gray-700 leading-normal">
              <span className="flex px-4  bg-gray-300">
                Referencia: Marc Torrente Cesteros, CEO +34 616 248 949
              </span>
              Creación de wordpress y prestashops personalizados para clientes
              de SiraStudio &bull; Creación de servidores personalizados,
              Orientados a wordpress &bull; Desarrollo de Scripts en PHP.
            </p>
          </section>

          <section className="mb-4.5 break-inside-avoid">
            <header>
              <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                Hard Monkey PC Limited
              </h3>
              <p className="leading-normal text-md text-gray-650">
                Enero 2016 - Enero 2019
              </p>
            </header>
            <p className="mt-2.1 text-md text-gray-700 leading-normal">
              Creación de pequeña agencia de programación, Dirección y gestión
              de proyectos para los clientes, en ese tiempo trabaje realizando.
              <br />
              <ul className="list-disc ml-8">
                <li>Wordpress Personalizados</li>
                <li>Plugins Personalizados</li>
                <li>
                  Creación de servidores Dedicados a traves del Partner de
                  LiquidNet
                </li>

                <li>
                  Creación de Webs utilizando frameworks, Laravel o CodeIgniter
                  PHP
                </li>
                <li>Creación de Webs utilizando frameworks, React y NodeJS</li>
              </ul>
              <span>
                Tamaño de la empresa alcanzó 6 personas (Marketers, Diseñadores
                y Programadores)
              </span>
            </p>
          </section>
          <section className="mb-4.5 break-inside-avoid">
            <header>
              <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                Ibermática, S.A
              </h3>
              <p className="leading-normal text-md text-gray-650">
                Enero 2020 - Marzo 2020
              </p>
            </header>
            <p className="mt-2.1 text-md text-gray-700 leading-normal">
              <span className="flex px-4  bg-gray-300">
                Referencia: Juan Miguel Barajas, Project Manager +34 606 428 989
              </span>
              Creación de una pizarra deportiva virtual en 3D para 1d3a S.L con
              las tecnologias de ThreeJS, WebGL y NodeJS.
            </p>
          </section>

          <section className="mb-4.5 break-inside-avoid">
            <header>
              <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                1d3a S.L
              </h3>
              <p className="leading-normal text-md text-gray-650">
                Abril 2020 - Diciembre 2020
              </p>
            </header>
            <p className="mt-2.1 text-md text-gray-700 leading-normal">
              <span className="flex px-4  bg-gray-300">
                Referencia: Joan Carbó Laguna, CTO, +34 607 700 297 -
                juan.carbo@1d3a.com
              </span>
              Desarrollo Web FrontEnd / BackEnd <br />
              Desarrollo e Integración de APIs y applicaciones en JS, NodeJS y
              PHP, para diferentes entornos del core de 1d3a SL.
            </p>
          </section>
        </div>
        <hr></hr>
        <h1 className="p-4 text-center   bg-gray-300">
          Proyectos personales en mi Github "polopopeye" o en mi blog,
          kennethsuarez.es
        </h1>
      </section>
    </div>
  </Layout>
);

export default cv;
