import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
   palette: {
      primary: {
         light: '#323332',
         main: '#1B1B1B',
         dark: '#000',
         contrastText: '#fff',
      },
      secondary: {
         light: '#FFE78E',
         main: '#FFCA04',
         dark: '#ffa915',
         contrastText: '#000',
      },
      background: {
         default: '#1B1B1B',
      },
   },
   typography: {
      fontFamily: 'Poppins',
      h5: {
         fontSize: '2rem',
         '@media (max-width:600px)': {
            fontSize: '1rem',
         },
      },

      // button: {
      //    '@media (max-width:600px)': {
      //       fontSize: '0.5rem',
      //    },
      // },
   },
});

theme = responsiveFontSizes(theme);

export default theme;
