import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#001f3f',
            dark: '#001323',
            light: '#3498db'
        },
        secondary: {
            main: '#7fdbff',
        },
    },
    typography: {
        fontFamily: "Segoe UI"
    }
});

theme = responsiveFontSizes(theme)

export default theme;