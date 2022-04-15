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
  },
};
