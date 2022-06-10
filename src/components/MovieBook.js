import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieBook() {
   return (
      <div>
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            <Typography py={15} color="white">
               Booking feature will be implemented later!
               <Typography textAlign="center">
                  <Link to="/" style={{ color: 'unset' }}>
                     {'< Go Back to Home'}
                  </Link>
               </Typography>
            </Typography>
         </Box>
      </div>
   );
}
