import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#ffffff',
        },
    },
    typography: {
        fontFamily: "Segoe UI"
    }
});

theme = responsiveFontSizes(theme)

export default theme;