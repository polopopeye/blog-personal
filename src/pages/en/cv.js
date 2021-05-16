import * as React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
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
  )
}

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
  )
}

const cv = () => (
  <Layout>
    <Seo title="Curriculum Vitae" />
    <div class=" print:hidden bg-gray-900 text-white">
      <Link to="/cv/">
        <button class="p-4">Español</button>
      </Link>
      {/* <button class="  p-4">Español</button> */}
    </div>
    <div class="p-6 mx-auto page   print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">
      <header class="flex items-center mb-4 md:mb-8">
        <div class="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3">
          <div class="initial text-center">K</div>
          <div class="text-center initial">S</div>
        </div>
        <h1 class="text-2xl font-semibold text-gray-750 pb-px">
          Kenneth Suarez Guineart
        </h1>
      </header>

      <section class="mt-4 first:mt-0">
        <div class="break-inside-avoid">
          <h2 class="mb-2 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
            BASIC INFORMATION
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
                Contact details
              </span>
              Phone Number: <b> +34604144510 </b> <br />
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
                Languages
              </span>
              Español:Native <br />
              English:High <br />
              Català:Bilingue <br />
            </div>
          </div>
        </div>

        <section class="mb-4.5 break-inside-avoid">
          <header>
            <h2 class=" text-center mt-4 mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              WEB UI DEVELOPER
            </h2>
          </header>
          <p class="mt-2.1 text-md text-gray-800 leading-normal">
            I've been programming for several years, both with backend and
            frontend technologies, I know their integration and communication
            between both parts, as well as development and communication of
            APIs.
            <br></br>
            Programming I always use agiles methods and good practices like TDD,
            GIT, Kanban or Scrum, I know and develop wireframming and mockups of
            high definitions, normally I use POP (Prototype-based programming)
            and OOP (Object-oriented programming)
            <hr></hr>I know and develop with frameworks like:
            <div class=" grid grid-cols-3 md:grid-cols-6 print:grid-cols-6 gap-1 text-center">
              <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 class="font-bold">React</h6>
                <span class="text-sm">
                  <ClockIcon></ClockIcon> (> 4 Years)
                </span>
              </div>
              <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                <h6 class="font-bold">Angular</h6>
                <span class="text-sm">
                  <ClockIcon></ClockIcon> (1 Year)
                </span>
              </div>
              <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 class="font-bold">Node JS </h6>
                <span class="text-sm">
                  <ClockIcon></ClockIcon> (> 4 Years)
                </span>
              </div>
              <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 class="font-bold">Gatsby </h6>
                <span class="text-sm">
                  <ClockIcon></ClockIcon> (1 Years)
                </span>
              </div>
              <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 class="font-bold"> Tailwind CSS </h6>
                <span class="text-sm">
                  <ClockIcon></ClockIcon> (2 Years)
                </span>
              </div>
              <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 class="font-bold"> Bootstrap CSS </h6>
                <span class="text-sm">
                  <ClockIcon></ClockIcon> (>4 Years)
                </span>
              </div>

              <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                {/* <StarIcon></StarIcon> */}
                <h6 class="font-bold">Laravel (PHP)</h6>
                <span class="text-sm">
                  <ClockIcon></ClockIcon> (> 3 Years)
                </span>
              </div>
              <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                {/* <StarIcon></StarIcon> */}
                <h6 class="font-bold">CodeIgniter (PHP) </h6>
                <span class="text-sm">
                  <ClockIcon></ClockIcon> (> 4 Años)
                </span>
              </div>

              <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 class="font-bold">Jquery </h6>
                <span class="text-sm">
                  <ClockIcon></ClockIcon> (> 4 Years)
                </span>
              </div>
              <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                {/* <StarIcon></StarIcon> */}
                <h6 class="font-bold">WebGL</h6>
                <span class="text-sm">
                  <ClockIcon></ClockIcon> (2 Years)
                </span>
              </div>
              <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                <StarIcon></StarIcon>
                <h6 class="font-bold">ThreeJS</h6>
                <span class="text-sm">
                  <ClockIcon></ClockIcon> (2 Years)
                </span>
              </div>
            </div>
            <br></br>
            <i>
              I have also worked and developed with other technologies:
              <br></br>
              <div class=" grid grid-cols-3 md:grid-cols-6 print:grid-cols-6 gap-1 text-center">
                <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                  <StarIcon></StarIcon>
                  <h6 class="font-bold">MySQL</h6>
                  <span class="text-sm">
                    <ClockIcon></ClockIcon> (> 4 Years)
                  </span>
                </div>
                <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                  <StarIcon></StarIcon>
                  <h6 class="font-bold">Firebase</h6>
                  <span class="text-sm">
                    <ClockIcon></ClockIcon> (2 Years)
                  </span>
                  <p class="text-xs">
                    Including Auth, FireStore, Hosting Deployment, Machine
                    Learning
                  </p>
                </div>
                <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                  <StarIcon></StarIcon>
                  <h6 class="font-bold">FireStore</h6>
                  <span class="text-sm">
                    <ClockIcon></ClockIcon> (2 Years)
                  </span>
                </div>
                <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                  <StarIcon></StarIcon>
                  <h6 class="font-bold">MongoDB</h6>
                  <span class="text-sm">
                    <ClockIcon></ClockIcon> (3 Years)
                  </span>
                </div>
                <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                  {/* <StarIcon></StarIcon> */}
                  <h6 class="font-bold">Advanced Wordpress</h6>
                  <span class="text-sm">
                    <ClockIcon></ClockIcon> (> 4 Years)
                  </span>
                  <p class="text-xs">development of plugins and themes</p>
                </div>
                <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                  <StarIcon></StarIcon>
                  <h6 class="font-bold">Jest</h6>
                  <span class="text-sm">
                    <ClockIcon></ClockIcon> (2 Years)
                  </span>
                  <p class="text-xs">automated testing and mockups</p>
                </div>
                <div class="grid rounded-xl border-solid border-4 border-light-blue-700">
                  {/* <StarIcon></StarIcon> */}
                  <h6 class="font-bold"> TensorFlowJS</h6>
                  <span class="text-sm">
                    <ClockIcon></ClockIcon> (1 Año)
                  </span>
                </div>
              </div>
            </i>
          </p>
        </section>
      </section>

      <section class="mt-8 first:mt-0">
        <div class="break-inside-avoid">
          <h2 class="text-center mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
            EXPERIENCE
          </h2>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Sirastudio SL
              </h3>
              <p class="leading-normal text-md text-gray-650">
                January 2017 - December 2017
              </p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              <span class="flex px-4  bg-gray-300">
                Reference: Marc Torrente Cesteros, CEO +34 616 248 949
              </span>
              Creation of wordpress, prestashops for clients of SiraStudio,
              creation of custom servers oriented to wordpress sites, and
              development of Scripts in PHP.
            </p>
          </section>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Hard Monkey PC Limited
              </h3>
              <p class="leading-normal text-md text-gray-650">
                January 2016 - December 2019
              </p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              Creation of small agency of programming and direction and
              managment of projects of the clients. in these years I worked
              <br />
              <ul class="list-disc ml-8">
                <li>Custom Wordpress Sites</li>
                <li>Custom plugins wordpress</li>
                <li>
                  Creation of dedicated servers through LiquidNet partner.
                </li>

                <li>
                  development of sites using frameworks like Laravel or
                  CodeIgniter. (PHP)
                </li>
                <li>
                  development of sites using frameworks like React and NodeJS
                  (JS)
                </li>
              </ul>
              <span>
                The size of the company reached 6 people (Marketers, Designers,
                and programmers).
              </span>
            </p>
          </section>
          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Ibermática, S.A
              </h3>
              <p class="leading-normal text-md text-gray-650">
                January 2020 - March 2020
              </p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              <span class="flex px-4  bg-gray-300">
                Reference: Juan Miguel Barajas, Project Manager +34 606 428 989
              </span>
              Creation and development of a virtual blackboard in 3D oriented to
              sports for 1d3a SL with javascript Techonoliges, like ThreeJS,
              WebGL and NodeJS.
            </p>
          </section>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                1d3a S.L
              </h3>
              <p class="leading-normal text-md text-gray-650">
                Abril 2020 - December 2020
              </p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              <span class="flex px-4  bg-gray-300">
                Reference: Joan Carbó Laguna, CTO, +34 607 700 297 -
                juan.carbo@1d3a.com
              </span>
              FrontEnd / BackEnd web programming
              <br />
              Development and integration of APIs, applications in Javascript,
              NodeJS and PHP and connect several envoriments of the core of 1d3a
              SL
            </p>
          </section>
        </div>
        <hr></hr>
        <h1 class="p-4 text-center   bg-gray-300">
          Personal projects on my Github "polopopeye" or on my blog,
          kennethsuarez.es
        </h1>
      </section>
    </div>
  </Layout>
)

export default cv
