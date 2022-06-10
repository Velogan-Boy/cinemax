import { styled } from '@mui/system';
import { alpha } from '@mui/system';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

////////////////////////////////////////////////////////////////////

const SearchField = styled('div')(({ theme }) => ({
   display: 'none',
   position: 'relative',
   borderRadius: '1.5rem',
   border: '2px solid #707007',
   backgroundColor: alpha(theme.palette.common.white, 0.8),
   '&:hover': {
      border: '2px solid black',
      backgroundColor: alpha(theme.palette.common.white, 1),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      display: 'block',
   },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
         width: '30rem',
      },
   },
}));

////////////////////////////////////////////////////////////////////////////////

export default function SearchBar() {
   const [state, setState] = useState([]);

 

   return (
      <>
         <SearchField>
            <SearchIconWrapper>
               <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
               placeholder="Search for movies powered by OMDB"
            />

          
         </SearchField>
      </>
   );
}
