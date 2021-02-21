// React imports
import React, {useState} from 'react';
// Constants
import THEME from '../constants/ThemeConstants';
// Theme
import Theme from '../../styles/Theme';

const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(Theme.set(THEME.GENERIC));

  const switchTheme = (theme) => {
    setTheme(Theme.set(theme));
  };
  return (
    <ThemeContext.Provider value={{theme, switchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
