import { styled } from '@mui/system';
import { alpha } from '@mui/system';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

//////////////////////////////////////////////////////////////

const SearchField = styled('div')(({ theme }) => ({
   display: 'block',
   position: 'relative',
   borderRadius: '5px',
   border: '1px solid #707007',
   backgroundColor: alpha(theme.palette.common.white, 0.55),
   '&:hover': {
      border: '2px solid black',
      backgroundColor: alpha(theme.palette.common.white, 0.55),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: '100%',
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

///////////////////////////////////////////////////////////////////////////////////////

export default function MobileSearchBar() {
   const [state, setState] = useState([]);
   const [autoComplete, setAutocomplete] = useState(false);

   const renderList = async e => {
      if (e.target.value) {
         const response = await axios.get(
            `https://cinematrix-backend.herokuapp.com/api/v1/movies/movie/search?title=${e.target.value}`
         );
         setState(response.data.data);
         setAutocomplete(true);
      } else {
         setAutocomplete(false);
      }
   };

   return (
      <SearchField>
         <SearchIconWrapper>
            <SearchIcon />
         </SearchIconWrapper>
         <StyledInputBase
            placeholder="Search movies or theatres.."
            onChange={renderList}
            onBlur={() => setAutocomplete(false)}
         />
         <List
            elevation={28}
            sx={{
               backgroundColor: '#fff',
               position: 'absolute',
               width: '100%',
               marginTop: '2px',
               borderRadius: '2px',
               borderBottomLeftRadius: '10px',
               borderBottomRightRadius: '10px',
               display: `${autoComplete ? 'block' : 'none'}`,
            }}
         >
            {state.length !== 0 ? (
               state.map(movie => (
                  <ListItem disablePadding key={movie._id}>
                     <ListItemButton
                        // component="a"
                        // href={`movie/${movie.id}`}
                        onMouseDown={e => {
                           window.location = `/movie/${movie.id}`;
                        }}
                     >
                        <ListItemText primary={movie.title} />
                     </ListItemButton>
                  </ListItem>
               ))
            ) : (
               <ListItem>
                  <ListItemText primary={'No results Found ☹️ '} />
               </ListItem>
            )}
         </List>
      </SearchField>
   );
}
