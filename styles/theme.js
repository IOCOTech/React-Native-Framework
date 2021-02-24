// Constants
import THEME from '../src/constants/ThemeConstants';
// Themes
import generic from './themes/Generic';
import dark from './themes/Dark';
import light from './themes/Light';

const themes = {
  generic: generic,
  dark: dark,
  light: light,
};

const Theme = (() => {
  let currentTheme = themes[THEME.GENERIC];

  return {
    set: (theme) => {
      if (!theme) {
        return currentTheme;
      }
      currentTheme = themes[theme];
      return currentTheme;
    },
  };
})();

export default Theme;
