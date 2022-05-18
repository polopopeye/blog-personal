import { lang } from './default';

const theme = {
  'theme-dark': 'Theme Dark',
  'theme-default': 'Theme Default',
  'theme-funny': 'Theme Funny',
};

const cv = {
  basicInformationTittle: 'BASIC INFORMATION',
  contactDetails: 'Contact details',
  phoneNumberField: 'Phone number',
  emailField: 'Email',
  githubField: 'Github',
  LinkedInField: 'LinkedIn',
  LanguagesTittle: 'Languages',
  highLang: 'native',
  normalLang: 'high',
  lowLang: 'bilingual',
  description1:
    'I am programming for a few years now, with both backend and frontend technologies, and know how to integrate them and communicate between the two, and also how to develop and build APIs.',
  description2:
    "I always use agile methods and good practices like TDD, GIT, Kanban or Scrum, wireframming and mockups of high definitions, POP (Prototype-based programming) and OOP (Object-oriented programming), I like to define DTO's, entities and work in an encapsulated way, for a better scalability of the infrastructure. Following principles of DDD (Domain driven design)",

  year: 'Year',
  years: 'Years',
  wordpressDesc: 'Development of plugins, themes and scripts',

  techs: 'MY STACK TECHS ARE',
  techSub: 'I have also worked and developed with other technologies:',
  techSub2: 'You can see all the technologies I have worked with at:',

  experience: 'EXPERIENCE',

  january: 'January',
  february: 'February',
  december: 'December',
  march: 'March',
  april: 'April',

  job1desc:
    'Creation of custom wordpress and Prestashop (Development of plugins and themes) for clients, Creation of custom servers, Oriented to wordpress and Development of Scripts in PHP.',

  job2desc:
    'Creation of a small programming agency, Direction and management of projects for clients, I mainly did:',
  job2desc1: 'Custom WordPress',
  job2desc2: 'Custom Plugins',
  job2desc3:
    'Creation and Sale of Dedicated servers jointly with LiquidNet Ltd.',
  job2desc4:
    'Web creation in PHP using frameworks such as Laravel or CodeIgniter.',
  job2desc5:
    'Creation of Webs in Javascript using frameworks such as React and NodeJS',
  job3desc:
    'Creation of a 3D virtual sports board for 1d3a S.L with ThreeJS, WebGL and NodeJS technologies.',
  job4desc: 'FullStack Developer',
  job4desc1:
    'Development and Integration of APIs and applications in JS, NodeJS and PHP, for different environments of the core of 1d3a SL.',
  job5desc: 'FullStack Developer, NodeJS and React Consultor',
  job5desc1:
    'Creation and development of web tools for international clients, Development in nodeJS and React mainly (Tailwind, Redux, OpenShift, in addition to other tools) for an international client of an artificial intelligence project oriented to chatbots and human language processing.',
  job5desc2:
    'The deployment, development and scalability is international and oriented to a large number of users. Mainly used in (Asia and Europe)',
  job6desc: 'FullStack Developer',
  job6desc1: 'Website development for a German bank.',

  footercvmsg:
    'Personal projects on my Github "polopopeye" or on my blog, kennethsuarez.es',
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
  },
};
