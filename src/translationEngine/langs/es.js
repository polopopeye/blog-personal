import { lang } from './default';

const theme = {
  'theme-dark': 'Tema Dark',
  'theme-default': 'Tema Default',
  'theme-funny': 'Tema Funny',
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
  },
};
