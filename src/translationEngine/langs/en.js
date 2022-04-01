import { lang } from './default';

const theme = {
  'theme-dark': 'Theme Dark',
  'theme-default': 'Theme Default',
  'theme-funny': 'Theme Funny',
};

export const en = {
  translation: {
    titleDevPosition: 'FullStack Developer',
    tooHotPerson: 'Person too hot...',
    createNewArticle: 'Create New Article',
    notLoggedIn: 'Please, connect or register to create an article...',
    publishAnsw: '¿Publicar Post?',
    publish: '¡Si, Publicar Post!',
    selectTheme: 'Select Theme',
    ...theme,
    selectLanguage: 'Select language',
    ...lang,
  },
};
