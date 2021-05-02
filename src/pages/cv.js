import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const cv = () => (
  <Layout>
    <Seo title="Curriculum Vitae" />
    <div class=" print:hidden bg-gray-900 text-white">
      <button class="  p-4">Español</button>
      <button class="p-4">English</button>
    </div>
    <div class="p-6 mx-auto page   print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">
      <header class="flex items-center mb-4 md:mb-8">
        <div class="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3">
          <div class="initial text-center">K</div>
          <div class="text-center initial">S</div>
        </div>
        <h1 class="text-2xl font-semibold text-gray-750 pb-px">
          Kenneth Suarez
        </h1>
      </header>

      <section class="mt-4 first:mt-0">
        <div class="break-inside-avoid">
          <h2 class="mb-2 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
            INFORMACIÓN BÁSICA
          </h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <span class="flex flex-inline text-center  rounded-sm p-1   bg-gray-300 w-full">
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
              <span class="flex flex-inline text-center  rounded-sm p-1   bg-gray-300 w-full">
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

        <section class="mb-4.5 break-inside-avoid">
          <header>
            <h2 class="mt-4 mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              WEB UI DEVELOPER
            </h2>
          </header>
          <p class="mt-2.1 text-md text-gray-700 leading-normal">
            Llevo varios años programando, tanto con tecnologias del backend
            como del frontend y conozco su integración y comunicación entre
            ambas partes, asi como desarrollo y comunicacion de APIs.
            <hr></hr>
            Programo usando metodologias ágiles (TDD, GIT, Kanban, Scrum),
            wireframing y mockups de alta resolución, POP y OOP.
            <hr></hr>
            Desarrollo y conozco frameworks como:
            <ul class="list-disc ml-8">
              <li>React</li>
              <li>Angular</li>
              <li>Node JS</li>
              <li>Gatsby</li>
              <li>Laravel (PHP)</li>
              <li>CodeIgniter (PHP)</li>
              <li>Jquery</li>
            </ul>
            <hr></hr>
            <i>
              Ademas he trabajado y desarrollado con Otras tecnologias:
              <br></br>
              Bases de datos, como MySQL, FireStore y MongoDB. <br></br> CMS
              como Wordpress en profundidad
            </i>
          </p>
        </section>
      </section>

      <section class="mt-8 first:mt-0">
        <div class="break-inside-avoid">
          <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
            EXPERIÈNCIA
          </h2>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Sirastudio SL
              </h3>
              <p class="leading-normal text-md text-gray-650">
                Enero 2017 - Diciembre 2017
              </p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              <span class="flex px-4  bg-gray-300">
                Referencia: Marc Torrente Cesteros, CEO +34 616 248 949
              </span>
              Creación de wordpress y prestashops personalizados para clientes
              de SiraStudio &bull; Creación de servidores personalizados,
              Orientados a wordpress &bull; Desarrollo de Scripts en PHP.
            </p>
          </section>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Hard Monkey PC Limited
              </h3>
              <p class="leading-normal text-md text-gray-650">
                Enero 2016 - Enero 2019
              </p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              Creación de pequeña agencia de programación, Dirección y gestión
              de proyectos para los clientes,
              <br />
              <ul>
                <li>Wordpress Personalizados</li>
                <li>Plugins Personalizados</li>
                <li>
                  Creación de servidores Dedicados a traves del Partner de
                  LiquidNet
                </li>
                <li>Programación en PHP</li>
                <li>
                  Creación de Webs utilizando frameworks, Laravel o CodeIgniter
                  PHP
                </li>
                <li>Creación de Webs utilizando frameworks, React y NodeJS</li>
              </ul>
              <span>
                Tamaño de la empresa 6 personas (Marketers, Diseñadores y
                Programadores)
              </span>
            </p>
          </section>
          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Ibermática, S.A
              </h3>
              <p class="leading-normal text-md text-gray-650">
                Enero 2020 - Marzo 2020
              </p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              <span class="flex px-4  bg-gray-300">
                Referencia: Juan Miguel Barajas, Project Manager +34 606 428 989
              </span>
              Creación de una pizarra deportiva virtual en 3D para 1d3a S.L con
              las tecnologias de ThreeJS, WebGL y NodeJS.
            </p>
          </section>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                1d3a S.L
              </h3>
              <p class="leading-normal text-md text-gray-650">
                Abril 2020 - Diciembre 2020
              </p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              <span class="flex px-4  bg-gray-300">
                Referencia: Joan Carbó Laguna, CTO, +34 607 700 297 -
                juan.carbo@1d3a.com
              </span>
              Desarrollo Web FrontEnd / BackEnd <br />
              Desarrollo e Integración de APIs y applicaciones en JS y NodeJS
              para diferentes entornos del core de 1d3a SL.
            </p>
          </section>
        </div>
        <hr></hr>
        <h1 class="p-4 text-center flex   bg-gray-300">
          Proyectos personales en mi blog, kennethsuarez.es
        </h1>
      </section>
    </div>
  </Layout>
)

export default cv
