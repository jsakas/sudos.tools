import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2a2a2a',
    },
    secondary: {
      main: '#444',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Alata, "sans-serif"',
    },
    h2: {
      fontFamily: 'Alata, "sans-serif"',
    },
    h3: {
      fontFamily: 'Alata, "sans-serif"',
    },
    h4: {
      fontFamily: 'Alata, "sans-serif"',
    },
    h5: {
      fontFamily: 'Alata, "sans-serif"',
    },
    h6: {
      fontFamily: 'Alata, "sans-serif"',
    }
  }
});

export default responsiveFontSizes(theme);
