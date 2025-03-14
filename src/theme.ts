import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import testfont from '../src/assets/fonts/BigShouldersInline-VariableFont_opsz,wght.ttf'

let theme = createTheme({
  palette: {
    primary: {
      main: '#FFBC78',
      dark: '#B46C24',
      light: '#FFD6AD',
      contrastText: '#FBE8DA',
    },
    background: {
      paper: '#FBE8DA',
    },
    secondary: {
      main: '#38622F',
      dark: '#1E6B4E',
      light: '#61A289',
      contrastText: '#44290D',
    },
  },
  typography: {
    fontFamily: 'Big Shoulders Inline',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Big Shoulders Inline";
          font-optical-sizing: auto;
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${testfont}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
