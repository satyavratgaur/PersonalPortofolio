import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Muli',
  },
  palette: {
    primary: {
      main: '#3A89FF',
    },
    secondary: {
      main: green[500],
    },
    gray: {
      main: '#9C9C9C',
    },
  },
});

export default theme;
