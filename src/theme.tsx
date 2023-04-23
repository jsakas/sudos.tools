import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const defaultTheme = createTheme();

const theme = createTheme({
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
      marginBottom: '.35em',
    },
    h2: {
      fontFamily: 'Alata, "sans-serif"',
      marginBottom: '.35em',
    },
    h3: {
      fontFamily: 'Alata, "sans-serif"',
      marginBottom: '.35em',
    },
    h4: {
      fontFamily: 'Alata, "sans-serif"',
      marginBottom: '.35em',
    },
    h5: {
      fontFamily: 'Alata, "sans-serif"',
      marginBottom: '.35em',
    },
    h6: {
      fontFamily: 'Alata, "sans-serif"',
      marginBottom: '.35em',
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#f6f6f6'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: '1.2em',
        },
      }

    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: defaultTheme.spacing(2, 0),
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: defaultTheme.palette.secondary.main,
        }
      }
    }
  }
});

export default responsiveFontSizes(theme);
