import { lang } from './default';

const theme = {
  'theme-dark': 'Theme Dark',
  'theme-default': 'Theme Default',
  'theme-funny': 'Theme Funny',
};

const app = {
  sryNotFound: 'Sry, no results found...',
  edit: 'Edit Article',
  fetching: 'Fetching Article...',
  moreLink: 'See full article',
  connect: 'Connect',
  home: 'Home',
  tech: 'Stack tech',
  search: 'Search...  ',
  developed: 'Developed by Kenneth Suarez ',
  lookCode: ' look at the code of this site on github',
  yearsOfExperience: 'Years of Experience ',
  learnedOn: 'Learned On',
  descriptionField: 'Description',
  personalProjects: 'Personal projects',
  downloadAsPdf: 'Download as PDF',
};

const tech = {
  react:
    'One of my favourite technologies, my first option when we talk about frontEnd',
  angular:
    'Not my main option, but I like this tech developed by google and I now how the basics, I prefer to use react by popularity',

  bootstrap:
    'I love to use bootstrap CSS, nowadays I prefer Tailwind, but sometimes I use it if I want to develop an app fast without to worry about the CSS',

  cloudflare:
    'I love cloudflare for an extra security layer, DDos shield, extra analisys and great dns manager, sad that most of the companies not know about it',

  codeigniter:
    'Easy to use and lot of potential when we talk about to build an app with PHP',

  cypress:
    'first option when we want to test integrational testing and frontend rendering',

  firebase:
    'I love to use the stack of firebase, like firestore and take advantage of the google cloud servers',

  gatsby:
    'love to use Gatsby with nextJS is one of my favorite framework to use in frontend,  easy to use and lot of potential like graphQL',

  googleCloud:
    'I like advantatge of all the enviroment of google platforms, due to scalability and performance',

  heroku:
    'When we talk about backend, the servers of heroku leads us to freedom and scalability',

  jest: 'My first option for unit testing',

  laravel:
    'My first option when we have to develop with PHP, the most professional and powerfull framework to use',

  mongodb: 'My favourite DB besides the firestore, due to scalability',

  mysql: ' My first database engine that I learned, I like it',

  nestjs:
    'First option for the backend with nodeJS, I like all the infrastructure behind, lot of potential for the API',

  nextjs:
    'First option for the frontEnd with react, lot of potential and freedom',
  nodejs:
    'With GoLang I think are the best techs to the backend, my first option to use',

  sanityjs:
    'Good option like db engine for small projects, and easy and fast way to develop, (Not my first option but I like it)',

  tailwind:
    'My first option to use as css framework, mainly performance, mobile first, and scalability in themes',

  tensorflowjs:
    "I love Machine Learning and all related with AI, I'm happy and eager to see the future with this tech, Tensorflow applied to web development is really exciting!",

  threejs:
    'Usefull tool to make interactive websites with canvas, and interaction with other tools, It depends a lot for wich project we use that, otherwise i will go with Unity but still usefull',
  typescript:
    'I love TS, my first option to develop a serius project, is like a javascript but with superpowers',

  webgl:
    'Usefull tech to make interactive a website, not my first option but usefull for small developments of website development',

  wordpress:
    'I loved this tech, and the easy enviroment to develop and integrate plugins and themes, not using it right now... I prefer to go with Typescript tech like nextJS, nestJS etc.',

  golang:
    'One of my favourites langs for the backend after nodeJS, so fast and simple <3',
};

const cv = {
  basicInformationTittle: 'BASIC INFORMATION',
  contactDetails: 'Contact details',
  phoneNumberField: 'Phone number',
  emailField: 'Email',
  githubField: 'Github',
  LinkedInField: 'LinkedIn',
  LanguagesTittle: 'Languages',
  highLang: 'Native',
  normalLang: 'High',
  lowLang: 'Bilingual',
  description1:
    'As a passionate FullStack Developer, my expertise spans API creation and development, with a keen interest in prototyping projects. I engage deeply in every detail, employing methods like sprint design for rapid and effective conceptualization. Capable of handling complete project development, I have experience in teamwork and making crucial decisions in various settings. My approach is grounded in agile practices and sound techniques like TDD, GIT, and methodologies such as Kanban and Scrum, always focusing on scalability and efficiency.',
  year: 'Year',
  years: 'Years',
  wordpressDesc: 'Development of plugins, themes and scripts',

  techs: 'MY STACK TECHS ARE',
  techSub: 'I have also worked and developed with other technologies:',
  techSub2: 'You can see all the technologies I have worked with at:',

  experience: 'EXPERIENCE',

  january: 'January',
  february: 'February',
  march: 'March',
  april: 'April',
  may: 'May',
  june: 'June',
  july: 'July',
  august: 'August',
  september: 'September',
  october: 'October',
  november: 'November',
  december: 'December',
  currently: 'Currently working',

  job1desc:
    'At Sirastudio, I focused on custom WordPress and PrestaShop website development, including the creation of specific plugins and themes. I also set up optimized servers for WordPress and developed PHP scripts, providing comprehensive web solutions to clients',
  job2desc:
    'I founded Hard Monkey PC, a programming agency focused on assisting SMEs in developing their online presence. My services included web design and development, digital marketing, as well as custom WordPress site and plugin development. I was also responsible for creating and selling dedicated servers in collaboration with LiquidNet Ltd., and developing websites using PHP with frameworks like Laravel and CodeIgniter, in addition to JavaScript technologies such as React and NodeJS',
  job3desc:
    'At Ibermática, I created a 3D virtual sports board for 1d3a S.L using ThreeJS, WebGL, and NodeJS. My work garnered positive feedback from the client, leading to a direct engagement to continue the development and expansion of the project. This included tackling more complex aspects and other related applications',
  job4desc: 'FullStack Developer',
  job4desc1:
    'At 1d3a SL, I engaged in the integration of APIs and applications using JS, NodeJS, and PHP. I developed a 3D virtual whiteboard for sports strategies, used by teams like Futbol Club Barcelona. Additionally, I created a video editing tool for coaches and supported the integration of this technology into apps for managing sports teams.',
  job5desc: 'FullStack Developer, NodeJS and React Consultor',
  job5desc1:
    'At AXA, I led the deployment, development, and scaling of a chatbot management application and dashboard, widely used in Asia and Europe. Utilizing NLP.js, an open-source AI tool from Microsoft, I developed a daily backup system for chatbots and an innovative dashboard graph for intuitive user pathway visualization and real-time issue detection. This dashboard was integral for varied global uses, including calls and automated chats on diverse platforms like mobile and social networks.',
  job6desc: 'FullStack Developer',
  job6desc1:
    'At MVST, I developed a website for an investment bank in Berlin, using NextJS, React, and Node for the frontend, and Ruby along with Strapi for the backend. My main project was creating an evaluation tool for rating and contacting the company based on their data. Additionally, the project utilized GraphQL for handling translations and page content. While the concept was basic, I contributed a crucial functionality to the website.',
  job7desc: 'FullStack Developer',
  job7desc1:
    'At Embat Technologies, I focused on creating new features and modules for the Embat app, notably a treasury management module for business holdings and scenario forecasting. My work involved React development, creating a comprehensive Storybook, and utilizing Recharts for various types of responsive, optimized charts. I built modular tables for treasury data visualization and diverse charting, ensuring efficient performance through VirtualDOM. Additionally, I developed the backend using Google Cloud Functions, enhancing overall functionality and scalability.',
  job8desc: 'FullStack Developer',
  job8desc1:
    'At Union Avatars, as a FullStack Developer, I worked on developing the frontend with React and the backend with Python for a 3D avatar model converter. I implemented a 3D viewer in the frontend for previewing and selecting avatar animations, which were also used to display NFTs on OpenSea. I contributed to the integration of analytics systems with Datadog RUM and Google Analytics. I participated in optimizing and debugging an avatar and costume selector developed in Vue, and assisted in its transition to React, implementing improvements such as Zustand, SSR, and developing a Storybook UI',
  job9desc1:
    'I developed key functionalities for the backoffice of a metrics platform, using Strapi and Azure Functions in the backend and React in the frontend. I implemented PDF report modules and dashboards with Highcharts, in addition to integrating the Microsoft Graph API for user monitoring.',
  job9desc: 'FullStack Developer',
  footercvmsg:
    'Personal projects on my Github "polopopeye" or on my blog, kennethsuarez.es',

  educationTitle: 'EDUCATION',
  education1: 'Technician in microcomputer systems and networks.',
  education2:
    'Started in the field of Cyber Security, but I decided to focus more on the website development.',
};

export const en = {
  translation: {
    titleDevPosition: 'FullStack Developer',
    tooHotPerson: 'Person too hot...',
    createNewArticle: 'Create New Article',
    notLoggedIn: 'Please, connect or register to create an article...',
    publishAnsw: 'Publish Post?',
    publish: 'Yes! Create new post',
    'tech.title': 'Technologies ',
    'articles.title': 'Articles ',
    'curriculum.title': 'Curriculum ',
    'dashboard.title': 'Dashboard ',
    'create.title': 'Create ',
    selectTheme: 'Select Theme',
    // General
    selectLanguage: 'Language',
    ...theme,
    ...lang,
    ...cv,
    ...app,

    ...tech,
  },
};
