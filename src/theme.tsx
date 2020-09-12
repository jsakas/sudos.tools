import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
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
});

export default theme;
