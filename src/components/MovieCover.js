import React from 'react';
import { Box } from '@mui/material';
import img from '../assets/slide3-img.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   root: {
      width: '100vw',
      height: '60vh',
      '@media (max-width:600px)': {
         height: '30vh',
      },
   },
});

export default function MovieCover() {
   const classes = useStyles();

   return (
      <Box sx={{ overflow: 'hidden' }}>
         <img src={img} alt="phto" className={classes.root} />
      </Box>
   );
}
