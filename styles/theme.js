import themes from "./themeSetup";
import THEME from "../src/constants/themeConstants";

const appTheme = (theme) => {
    return themes[theme]
};

const useAppTheme = ({theme = THEME.GENERIC} = {}) => {
    return appTheme(theme)
} 

export { appTheme, useAppTheme };