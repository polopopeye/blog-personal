import { lang } from './default';

const theme = {
  'theme-dark': 'asd Dark',
  'theme-default': 'asd Default',
  'theme-funny': 'asd Funny',
};

export const jp = {
  translation: {
    titleDevPosition: 'Welcome to React and react-i18next',
    tooHotPerson: 'mul bello el wato',
    selectTheme: 'Select Theme',
    ...theme,
    selectLanguage: 'Select your language',
    ...lang,
  },
};
