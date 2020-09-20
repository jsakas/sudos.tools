import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2a2a2a',
      contrastText: '#fff'
    },
    secondary: defaultTheme.palette.primary,
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
  },
  overrides: {
    MuiDrawer: {
      paper: {
        background: '#f6f6f6'
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '1.2em',
      },
      h1: {
        marginBottom: '.35em',
      },
      h2: {
        marginBottom: '.35em',
      },
      h3: {
        marginBottom: '.35em',
      },
      h4: {
        marginBottom: '.35em',
      },
      h5: {
        marginBottom: '.35em',
      },
      h6: {
        marginBottom: '.35em',
      }
    },
    MuiLink: {
      root: {
        color: defaultTheme.palette.secondary.main,
      }
    }
  }
});

export default responsiveFontSizes(theme);
