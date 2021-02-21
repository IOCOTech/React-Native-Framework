// Constants
import THEME from '../src/constants/themeConstants';
// Themes
import generic from './themes/generic';
import dark from './themes/dark';
import light from './themes/light';

const themes = {
  generic: generic,
  dark: dark,
  light: light,
};

const Theme = (() => {
  let currentTheme = themes[THEME.DARK];

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