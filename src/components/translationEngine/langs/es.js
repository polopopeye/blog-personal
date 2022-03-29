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

    selectTheme: 'Select Theme',
    ...theme,
    selectLanguage: 'Select your language',
    ...lang,
  },
};
