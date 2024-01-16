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
    'Como apasionado FullStack Developer, mi experiencia abarca la creación y el desarrollo de APIs, con un amor especial por prototipar proyectos. Me involucro en cada detalle, utilizando métodos como el sprint design para la conceptualización rápida y efectiva. Capaz de manejar el desarrollo completo de proyectos, tengo experiencia trabajando en equipo y tomando decisiones cruciales en diversos entornos. Mi enfoque se basa en prácticas ágiles y buenas técnicas como TDD, GIT, y metodologías como Kanban y Scrum, siempre con un ojo en la escalabilidad y la eficiencia.',
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
    'En Sirastudio, me dediqué al desarrollo de sitios web personalizados en WordPress y PrestaShop, creando plugins y temas específicos. También configuré servidores optimizados para WordPress y desarrollé scripts en PHP, ofreciendo soluciones web integrales a los clientes.',
  job2desc:
    'Fundé Hard Monkey PC, una agencia de programación enfocada en ayudar a PYMES a desarrollar su presencia en internet. Mis servicios incluían diseño y desarrollo web, marketing digital, así como la creación de sitios web personalizados en WordPress y plugins a medida. También estuve a cargo de la creación y venta de servidores dedicados en colaboración con LiquidNet Ltd., y el desarrollo de sitios web utilizando PHP con frameworks como Laravel y CodeIgniter, además de JavaScript con tecnologías como React y NodeJS',
  job3desc:
    'En Ibermática, desarrollé una pizarra deportiva virtual en 3D para 1d3a S.L utilizando ThreeJS, WebGL y NodeJS. Mi trabajo recibió una respuesta positiva del cliente, lo que llevó a que me contrataran directamente para continuar el desarrollo y ampliación del proyecto, abordando aspectos más complejos y otras aplicaciones relacionadas',
  job4desc: 'FullStack Developer',
  job4desc1:
    'En 1d3a SL, trabajé en la integración de APIs y aplicaciones en JS, NodeJS y PHP. Desarrollé una pizarra virtual en 3D para estrategias deportivas, utilizada por equipos como el Futbol Club Barcelona. También creé una herramienta de edición de videos para entrenadores y asistí en la integración de esta tecnología en apps para la gestión de equipos deportivos.',
  job5desc: 'FullStack Developer, NodeJS and React Consultor',
  job5desc1:
    'En AXA, lideré la implementación, desarrollo y escalabilidad de una aplicación y un dashboard para la gestión de chatbots, usados ampliamente en Asia y Europa. Utilicé NLP.js, una herramienta AI de código abierto de Microsoft, para desarrollar un sistema de respaldo diario de los chatbots y un gráfico innovador en el dashboard para visualizar intuitivamente las trayectorias de usuarios y detectar problemas en tiempo real. Este dashboard se utilizó globalmente en diversos escenarios, incluyendo llamadas y chats automatizados en múltiples plataformas como móviles y redes sociales.',
  job6desc: 'FullStack Developer',
  job6desc1:
    'En MVST, desarrollé un sitio web para un banco de inversión en Berlín, empleando NextJS, React, Node en el frontend, y Ruby junto con Strapi en el backend. Implementé una herramienta de evaluación para calificar y contactar a la empresa, basándome en sus datos. Además, el proyecto utilizó GraphQL para manejar las traducciones y el contenido de las páginas. Aunque el concepto era básico, aporté una funcionalidad clave para el sitio web',
  job7desc: 'FullStack Developer',
  job7desc1:
    'En Embat Technologies, me dediqué a la creación de nuevas funcionalidades y módulos para la aplicación Embat, destacando un módulo de gestión de tesorería para holdings empresariales y la proyección de escenarios. Trabajé en el desarrollo con React, incluyendo la creación de un Storybook, y utilicé Recharts para diseñar gráficos responsivos y optimizados de diversos tipos. Desarrollé tablas modulares para la visualización de datos de tesorería y gráficos variados, asegurando un rendimiento eficiente mediante VirtualDOM. Además, estuve a cargo del desarrollo del backend utilizando Cloud Functions de Google Cloud, mejorando la funcionalidad y escalabilidad general.',
  job8desc: 'FullStack Developer',
  job8desc1:
    'En Union Avatars, como FullStack Developer, trabajé en el desarrollo del frontend con React y el backend con Python para un conversor de modelos de avatares 3D. Implementé un visor 3D en el frontend para previsualizar y seleccionar animaciones de avatares, utilizados también para mostrar NFTs en OpenSea. Contribuí en la integración de sistemas de analíticas con Datadog RUM y Google Analytics. Participé en la optimización y corrección de bugs de un selector de avatares y trajes desarrollado en Vue, y asistí en su transición a React, implementando mejoras como zustand, SSR y desarrollando un Storybook UI.',
  job9desc: 'FullStack Developer',
  job9desc1:
    'Desarrollé funcionalidades clave para el backoffice de una plataforma de métricas, utilizando Strapi y Azure Functions en el backend y React en el frontend. Implementé módulos de reportes en PDF y dashboards con Highcharts, además de integrar la API de Microsoft Graph para la monitorización de usuarios.',
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
