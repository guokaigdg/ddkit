// import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {purple} from '@material-ui/core/colors';
import Layout from '../Layout';


const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

function Theme() {
    return (
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    );
}

export default Theme;
