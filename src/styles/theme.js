import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
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
  fontFamily: ['Muli'],
});

export default theme;
