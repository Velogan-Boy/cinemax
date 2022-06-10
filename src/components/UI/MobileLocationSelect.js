import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { IconButton } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';

////////////////////////////////////////////////////////////////////////////////////

const locations = ['Chennai', 'Mumbai', 'Hyderabad'];

////////////////////////////////////////////////////////////////////////////////////

export default function MobileLocationSelect() {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [selectedIndex, setSelectedIndex] = React.useState(1);
   const open = Boolean(anchorEl);

   const handleClickListItem = event => {
      setAnchorEl(event.currentTarget);
   };

   const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <>
         <IconButton color="secondary" onClick={handleClickListItem}>
            <NavigationIcon />
         </IconButton>

         <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
         >
            {locations.map((location, index) => (
               <MenuItem
                  key={location}
                  selected={index === selectedIndex}
                  onClick={event => handleMenuItemClick(event, index)}
               >
                  {location}
               </MenuItem>
            ))}
         </Menu>
      </>
   );
}
