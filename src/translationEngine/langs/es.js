import { lang } from './default';

const theme = {
  'theme-dark': 'Tema Dark',
  'theme-default': 'Tema Default',
  'theme-funny': 'Tema Funny',
};

const cv = {
  basicInformationTittle: 'INFORMACIÓN BÁSICA',
  contactDetails: 'Contacto',
  phoneNumberField: 'Teléfono',
  emailField: 'Email',
  githubField: 'Github',
  LinkedInField: 'LinkedIn',
  LanguagesTittle: 'Idiomas',
  highLang: 'nativo',
  normalLang: 'alto',
  lowLang: 'bilingüe',
  description1:
    'Llevo varios años programando, tanto con tecnologías del backend como del frontend, conozco su integración y comunicación entre ambas partes, asi como desarrollo y la creación de APIs.',
  description2:
    'Utilizo metodologías ágiles (TDD, GIT, Scrum, Poker Planning), wireframing y mockups de alta resolución, POP (Programación orientada a propiedades) y POO (Programación orientada a objetos). Me gusta definir DTOS, Entidades y Trabajar de manera encapsulada para una mejor escalabilidad de la infraestructura. Siguiendo principios del DDD (Domain driven design).',

  year: 'Año',
  years: 'Años',
  wordpressDesc: 'Desarrollo de plugins, temas y scripts',

  techs: 'MIS TECNOLOGÍAS FAVORITAS SON',
  techSub: 'Además he trabajado y desarrollado con otras tecnologías:',
  techSub2: 'Puedes ver todas las tecnologías con las que he trabajado en: ',

  experience: 'EXPERIENCIA',

  january: 'enero ',
  february: 'febrero',
  december: 'diciembre',
  march: 'marzo',
  april: 'abril',

  job1desc:
    'Creación de wordpress y Prestashops personalizados (Desarrollo de plugins y temas) para clientes, Creación de servidores personalizados, Orientados a wordpress y Desarrollo de Scripts en PHP.',
  job2desc:
    'Creación de pequeña agencia de programación, Dirección y gestión de proyectos para los clientes, Realicé.',
  job2desc1: 'Wordpress Personalizados',
  job2desc2: 'Plugins Personalizados',
  job2desc3:
    'Creación y Venta de servidores Dedicados conjuntamente con LiquidNet ltd.',
  job2desc4:
    'Creación de Webs en PHP utilizando frameworks como Laravel o CodeIgniter.',
  job2desc5:
    'Creación de Webs en Javascript utilizando frameworks como React y NodeJS',
  job3desc:
    'Creación de una pizarra deportiva virtual en 3D para 1d3a S.L con las tecnologías de ThreeJS, WebGL y NodeJS.',
  job4desc: 'FullStack Developer',
  job4desc1:
    'Desarrollo e Integración de APIs y applicaciones en JS, NodeJS y PHP, para diferentes entornos del core de 1d3a SL.',
  job5desc: 'FullStack Developer, NodeJS and React Consultor',
  job5desc1:
    'Creación y desarrollo de herramientas web para clientes internacionales, Desarrollo en nodeJS y React principalmente (Tailwind, Redux, OpenShift, además de otras herramientas) para un cliente internacional de un proyecto de inteligencia artificial orientada a chatbots y procesamiento del lenguaje humano.',
  job5desc2:
    'El deployment, desarrollo y escalabilidad es a nivel internacional y orientado a gran cantidad de usuarios. Principalmente utilizado en (Asia y Europa)',
  job6desc: 'FullStack Developer',
  job6desc1: 'Desarrollo del sitio web de un banco alemán',
  footercvmsg:
    'Proyectos personales en mi Github "polopopeye" o en mi blog, kennethsuarez.es',
};

export const es = {
  translation: {
    titleDevPosition: 'Programador FullStack',
    tooHotPerson: 'Persona extremadamente potable',
    createNewArticle: 'Crear Nuevo Artículo',
    notLoggedIn:
      'Porfavor, conectate o registrate para crear un nuevo artículo...',
    publishAnsw: 'Publicar articulo?',
    publish: 'Si! Crear nuevo articulo',
    'tech.title': 'Tecnologias ',
    'articles.title': 'Artículos ',
    'curriculum.title': 'Curriculum ',
    'dashboard.title': 'Panel de Control ',
    'create.title': 'Crear ',
    selectTheme: 'Seleccionar Tema',
    // General
    selectLanguage: 'Language',
    ...theme,
    ...lang,
    ...cv,
  },
};
