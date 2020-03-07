import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SnackbarProvider } from 'notistack';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

if (process.env.NODE_ENV === 'test') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (HelmetProvider as any).canUseDOM = false;
}

export const primary = '#00a3b1';
export const secondary = '#00636e';

const theme = createMuiTheme({ palette: { primary: { main: primary }, secondary: { main: secondary } } });

// eslint-disable-next-line react/display-name
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const wrapWithProvider = ({ element }: any) => {
    return (
        <HelmetProvider>
            <ThemeProvider {...{ theme }}>
                <SnackbarProvider>{element}</SnackbarProvider>
            </ThemeProvider>
        </HelmetProvider>
    );
};

export default wrapWithProvider;
