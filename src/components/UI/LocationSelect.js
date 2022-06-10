import React, { useState } from 'react';
import { styled } from '@mui/system';

import { Select, MenuItem } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';

/////////////////////////////////////////////////////////////////////////////////

const MyFormControl = styled('FormControl')(({ theme }) => ({
   minWidth: '10rem',
   display: 'none',
   [theme.breakpoints.up('md')]: {
      display: 'block',
   },
}));
const locations = ['Chennai', 'Mumbai', 'Hyderabad'];

/////////////////////////////////////////////////////////////////////////////////

export default function LocationSelect() {
   const [location, setLocation] = useState('Chennai');

   const handleChange = e => {
      setLocation(e.target.value);
   };

   return (
      <MyFormControl>
         <Select
            size="small"
            value={location}
            onChange={handleChange}
            IconComponent={NavigationIcon}
         >
            {locations.map((location, index) => (
               <MenuItem key={location} value={location}>
                  {location}
               </MenuItem>
            ))}
         </Select>
      </MyFormControl>
   );
}
