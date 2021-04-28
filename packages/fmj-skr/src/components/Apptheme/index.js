import * as React from 'react';
import {
    useMediaQuery,
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core';
// import getAppTheme from './app-theme';
import {ThemeWrap} from '../Theme';
// eslint-disable-next-line @reskript/import-order
import {QuickFind} from '../QuickFind';


function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const appTheme = React.useMemo(() => {
        const themeType = prefersDarkMode ? 'dark' : 'light';
        // const appThemeConfig = getAppTheme(themeType);
        return createMuiTheme({
            // app: appThemeConfig,
            palette: {
                type: themeType,
                isDark: prefersDarkMode === 'dark',
            },
        });
    }, [prefersDarkMode]);

    return (
        <div>
            <ThemeProvider theme={appTheme}>
                <ThemeWrap>

                    <QuickFind />

                </ThemeWrap>
            </ThemeProvider>
        </div>
    );
}
export default App;
