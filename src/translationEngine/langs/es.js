import { lang } from './default';

const theme = {
  'theme-dark': 'Tema Dark',
  'theme-default': 'Tema Default',
  'theme-funny': 'Tema Funny',
};

const app = {
  sryNotFound: 'Sry, no hay resultados...',
  edit: 'Editar Artículo',
  fetching: 'Cargando artículo...',
  moreLink: 'Ver Artículo completo',
  connect: 'Conectar',
  home: 'Inicio',
  tech: 'Tecnologías usadas',
  search: 'Buscar...',
  developed: 'Desarrollado por Kenneth Suarez ',
  lookCode: 'mira el código del sitio en github',
  yearsOfExperience: 'Años de experiencia ',
  learnedOn: 'Aprendido el',
  descriptionField: 'Descripción',
  personalProjects: 'Proyectos personales',
  downloadAsPdf: 'Descargar en PDF',
};

const tech = {
  react:
    'Una de mis tecnologías favoritas, mi primera opción cuando hablamos de frontEnd',
  angular:
    'No es mi opción principal, pero me gusta esta tecnología desarrollada por Google y ahora sé lo básico, prefiero usar reaccionar por popularidad',
  bootstrap:
    'Me encanta usar Bootstrap CSS, hoy en día prefiero Tailwind, pero a veces lo uso si quiero desarrollar una aplicación rápido sin preocuparme por el CSS',
  cloudflare:
    'Me encanta Cloudflare por una capa de seguridad adicional, escudo DDos, análisis adicional y excelente administrador de DNS, es triste que la mayoría de las empresas no lo sepan',
  codeigniter:
    'Fácil de usar y con mucho potencial cuando hablamos de construir una aplicación con PHP',
  cypress:
    'primera opción cuando queremos probar pruebas de integración y renderizado frontend',

  firebase:
    'Me encanta usar el entorno de firebase tanto el sistema de login con oauth, como firestore y aprovechar los servidores de la nube de google',

  gatsby:
    'Me encanta usar Gatsby con nextJS, es uno de mis marcos favoritos para usar en la interfaz, es fácil de usar y tiene mucho potencial como graphQL',
  googleCloud:
    'Me gusta la ventaja de todo el entorno de las plataformas de Google, debido a la escalabilidad y el rendimiento',
  heroku:
    'Cuando hablamos de backend, los servidores de heroku nos llevan a la libertad y escalabilidad',

  jest: 'Mi primera opción para pruebas unitarias',

  laravel:
    'Mi primera opción cuando tenemos que desarrollar con PHP, el framework más profesional y potente para usar',
  mongodb:
    'Mi base de datos favorita además de firestore, debido a la escalabilidad',

  mysql: 'Mi primer motor de base de datos que aprendí, me gusta',

  nestjs:
    'Primera opción para el backend con nodeJS, me gusta toda la infraestructura detrás, mucho potencial para la API',
  nextjs:
    'Primera opción para el frontEnd con reacción, mucho potencial y libertad',
  nodejs:
    'junto con GoLang, creo que son las mejores tecnologías para el backend, mi primera opción para usar',

  sanityjs:
    'Buena opción como motor de db para proyectos pequeños, y forma fácil y rápida de desarrollar (no es mi primera opción pero me gusta)',

  tailwind:
    'Mi primera opción para usar como marco css, principalmente por su rendimiento, por que es mobile first y su escalabilidad en temas',

  tensorflowjs:
    'Me encanta el aprendizaje automático y todo lo relacionado con la IA, estoy feliz y ansioso por ver el futuro con esta tecnología, ¡Tensorflow aplicado al desarrollo web es realmente emocionante!',
  threejs:
    'Herramienta útil para hacer sitios web interactivos con lienzo e interacción con otras herramientas. Depende mucho del proyecto que usemos, de lo contrario, usaré Unity pero aún así será útil',
  typescript:
    'Me encanta TS, mi primera opción para desarrollar un proyecto serio, es como un javascript pero con superpoderes',

  webgl:
    'Tecnología útil para hacer un sitio web interactivo, no es mi primera opción pero es útil para pequeños desarrollos de desarrollo de sitios web',

  wordpress:
    'Me encantó esta tecnología y el entorno fácil para desarrollar e integrar complementos y temas, no la uso en este momento... Prefiero ir con la tecnología Typescript como nextJS, nestJS, etc.',

  golang:
    'Uno de mis lenguajes de programación favoritos para el backend después de nodeJS, muy rápido y simple <3',
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
    'Utilizo y me encantan las metodologías ágiles (BDD, Scrum), POP (Programación orientada a propiedades) y POO (Programación orientada a objetos). Me gusta definir DTOS, Entidades y Trabajar de manera encapsulada para una mejor escalabilidad de la infraestructura. Siguiendo principios del DDD (Domain driven design).',

  year: 'Año',
  years: 'Años',
  wordpressDesc: 'Desarrollo de plugins, temas y scripts',

  techs: 'MIS TECNOLOGÍAS FAVORITAS SON',
  techSub: 'Además he trabajado y desarrollado con otras tecnologías:',
  techSub2: 'Puedes ver todas las tecnologías con las que he trabajado en: ',

  experience: 'EXPERIENCIA',

  january: 'Enero',
  february: 'Febrero',
  march: 'Marzo',
  april: 'Abril',
  may: 'Mayo',
  june: 'Junio',
  july: 'Julio',
  august: 'Agosto',
  september: 'Septiembre',
  october: 'Octubre',
  november: 'Noviembre',
  december: 'Diciembre',
  currentlly: 'Actualmente trabajando',

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
  job7desc: 'FullStack Developer',
  job7desc1:
    'Creación de nuevas características y modulos para la app de embat, el cual destaca el modulo de gestion de tesorería para Holdings empresariales y la previsión  de escenarios',
  footercvmsg:
    'Proyectos personales en mi Github "polopopeye" o en mi blog, kennethsuarez.es',

  educationTitle: 'EDUCACIÓN',
  education1: 'Técnico en sistemas microinformaticos y redes locales',
  education2:
    'Comencé un MSC de Seguridad Cibernética en Estonia, pero decidí enfocarme más en el desarrollo web que es lo que mas me gusta',
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
    selectLanguage: 'Idioma',
    ...theme,
    ...lang,
    ...cv,
    ...app,
    ...tech,
  },
};
