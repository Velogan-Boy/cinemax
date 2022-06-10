import React from 'react';

import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const MyButton = styled(Button)(theme => ({
   marginTop: '3rem',

   '@media (max-width:600px)': {
      marginTop: '2rem',
      marginBottom: '4rem',
      fontSize: '0.8rem',
   },
}));

export default function CarouselButton(props) {
   return (
      <div style={{ textAlign: 'center' }}>
         <Link to="/movies" style={{ textDecoration: 'none' }}>
            <MyButton style={props.style} variant="outlined" color="secondary">
               {props.children}
            </MyButton>
         </Link>
      </div>
   );
}
