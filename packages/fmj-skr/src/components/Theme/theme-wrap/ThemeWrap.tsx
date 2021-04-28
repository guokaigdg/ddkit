
import * as React from 'react';
import getComponentsTheme from './components-theme';
import {
    createMuiTheme,
    ThemeProvider,
    useTheme,
} from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface MyTheme {
    components: {
      common: any;
      emoji: any;
      menu: any;
      picker: any;
      setting: any;
      login: any;
      workspace: any;
      Tree: {
        TreeHeader: {
          contentHoverbg: string;
          textColor: string;
          textHoverColor: string;
          iconColor: string;
          iconHoverbg: string;
        };
      };
    };
  }
  interface ThemeOptions {
    components?: {
      common?: any;
      emoji?: any;
      menu?: any;
      picker?: any;
      setting?: any;
      login?: any;
      workspace?: any;
      Tree?: {
        TreeHeader?: {
          contentHoverbg?: string;
          textColor?: string;
          textHoverColor?: string;
          iconColor?: string;
          iconHoverbg?: string;
        };
      };
    };
  }
}

interface MyTheme {
  app: any;
  palette: {
    type: any;
    isDark: any;
  };
}
interface ThemeWrapProps {
  children?: React.ReactNode;
}
function ThemeWrap(props: ThemeWrapProps) {
    const {children = ''} = props;
    // 自动获取父级主题(黑暗模式或者明亮模式)
    const getpropsTheme = useTheme<MyTheme>();
    const propsTheme = getpropsTheme.palette.type;
    const componentsThemeConfig = getComponentsTheme(propsTheme);
    const cmpnentsTheme = React.useMemo(() => {
        return createMuiTheme({
            // components更改组件个性样式
            components: componentsThemeConfig,
            // overrides更改全局默认样式
            overrides: componentsThemeConfig,
        });
    }, [propsTheme]);

    return <ThemeProvider theme={cmpnentsTheme}>{children}</ThemeProvider>;
}
export default ThemeWrap;
