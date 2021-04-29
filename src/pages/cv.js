import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const cv = () => (
  <Layout>
    <Seo title="Curriculum Vitae" />
    <div class="bg-gray-900 text-white">
      <button class="p-4">Español</button>
      <button class="p-4">English</button>
    </div>
    <div class="p-6 mx-auto page   print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">
      <header class="flex items-center mb-8 md:mb-11">
        <div class="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3">
          <div class="initial text-center">K</div>
          <div class="text-center initial">S</div>
        </div>
        <h1 class="text-2xl font-semibold text-gray-750 pb-px">
          Kenneth Suarez
        </h1>
      </header>

      <section class="mt-8 first:mt-0">
        <div class="break-inside-avoid">
          <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
            Sobre mí
          </h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              Contacto: <br />
              Telefono: +34604144510 <br />
              Email: Kenneth7e7a@gmail.com <br />
            </div>
            <div>
              Idiomas: <br />
              Español:Nativo <br />
              English:Alto <br />
              Català:Bilingue <br />
            </div>
          </div>
        </div>

        <section class="mb-4.5 break-inside-avoid">
          <header>
            <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
              {/* Web UI Developer /  */}
              FullStack Developer
            </h3>
          </header>
          <p class="mt-2.1 text-md text-gray-700 leading-normal">
            Llevo varios años programando y se programar tanto con tecnologias
            del backend como del frontend y conozco su integración y
            comunicación entre ambas partes.
            <hr></hr>
            Programo con metodologias ágiles, wireframing y mockups de alta
            resolución, TDD, Prototype-based programming, object oriented
            programming <br />
            Desarrollo y conozco frameworks como:
            <ul>
              <li>React</li>
              <li>Angular</li>
              <li>Node JS</li>
              <li>Gatsby</li>
              <li>Laravel (PHP)</li>
              <li>CodeIgniter (PHP)</li>
              <li>Jquery</li>
            </ul>
            <br></br>
            Ademas he trabajado y desarrollado con Otras tecnologias: <br></br>
            Bases de datos, como MySQL, FireStore y MongoDB. <br></br> CMS como
            Wordpress en profundidad
          </p>
        </section>
      </section>

      <section class="mt-8 first:mt-0">
        <div class="break-inside-avoid">
          <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
            EXPERIENCE
          </h2>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                WebPraktikos Inc.
              </h3>
              <p class="leading-normal text-md text-gray-650">
                Jun 2018 – Present | Web Developer
              </p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              Built doner pork chop &bull; Served salmon, cream soft cheese, and
              brisket &bull; Acted 55% pork chop &bull; Filled burgdoggen &
              frankfurter strip steak with 90% burger patties and broth
            </p>
          </section>
        </div>

        <section class="mb-4.5 break-inside-avoid">
          <header>
            <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
              Mammoth GmbH
            </h3>
            <p class="leading-normal text-md text-gray-650">
              Feb 2017 – Apr 2018 | Android Developer
            </p>
          </header>
          <ul class="">
            <li class="mt-2.1 text-md text-gray-700 leading-normal">
              <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                ›
              </span>
              Cooked shrimps for 2 to 3 minutes per side, or until opaque; then,
              transfered to a serving dish with limon
            </li>
            <li class="mt-2.1 text-md text-gray-700 leading-normal">
              <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                ›
              </span>
              Roasted a pig, turning frequently, until meat reached 160°F in the
              thickest part of the shoulder or thigh
            </li>
          </ul>
        </section>

        <section class="mb-4.5 break-inside-avoid">
          <header>
            <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
              Exquisite Systems d.o.o.
            </h3>
            <p class="leading-normal text-md text-gray-650">
              May 2015 – Dec 2016 | Software QA Specialist
            </p>
          </header>
          <ul class="">
            <li class="mt-2.1 text-md text-gray-700 leading-normal">
              <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                ›
              </span>
              Made stockfish, which is unsalted fish, usully cod, dried by cold
              air and wind on wooden racks on the foreshore
            </li>
            <li class="mt-2.1 text-md text-gray-700 leading-normal">
              <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                ›
              </span>
              Preserved meat without salt by removing fat, cutting it into very
              thin strips and drying it in the sun or by a fire.
            </li>
          </ul>
        </section>
      </section>
    </div>
  </Layout>
)

export default cv
