import componentsThemeDark from './components-theme-dark';
import componentsThemeLight from './components-theme-light';

const getComponentsTheme = (themeType: string) => {
  if (themeType === 'dark') {
    return componentsThemeDark;
  }
  return componentsThemeLight;
};

export default getComponentsTheme;
export { componentsThemeDark, componentsThemeLight };
