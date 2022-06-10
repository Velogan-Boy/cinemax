import React from 'react';

import { Button } from '@mui/material';

export default function DrawerButton(props) {
   return (
      <Button
         size="large"
         sx={{ minWidth: '12vw' }}
         style={{ ...props.style }}
         color={props.color}
         startIcon={props.startIcon}
         variant={props.variant || 'contained'}
      >
         {props.children}
      </Button>
   );
}
