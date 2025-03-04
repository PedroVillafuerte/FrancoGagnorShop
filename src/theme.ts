import { createTheme, responsiveFontSizes } from '@mui/material/styles'

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
    fontFamily: 'Segoe UI',
  },
})

theme = responsiveFontSizes(theme)

export default theme
