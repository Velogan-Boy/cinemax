import { Typography } from '@mui/material';

import { styled } from '@mui/system';

const MyTypography = styled(Typography)(theme => ({
   textDecoration: ' 3px underline  ',
   textUnderlineOffset: '1.5rem',
   padding: 0,
   marginTop: '5rem',
   marginBottom: '6rem',
   textTransform: 'uppercase',
   letterSpacing: '0.5rem',

   '@media (max-width:600px)': {
      letterSpacing: '0.4rem',
      fontSize: '1.4rem',
      textUnderlineOffset: '1rem',
      textDecoration: ' 2px underline  ',
      marginTop: '2.5rem',
      marginBottom: '3.5rem',
   },

   '@media (max-width:400px)': {
      fontSize: '1.1rem',
      letterSpacing: '0.3rem',
      textUnderlineOffset: '1rem',
      textDecoration: ' 2px underline  ',
      marginTop: '2.5rem',
      marginBottom: '3.5rem',
   },
}));

export default function Subheads(props) {
   return (
      <MyTypography color="secondary" align="center" variant="h4">
         "{props.children}"
      </MyTypography>
   );
}
