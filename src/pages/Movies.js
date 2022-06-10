import { Divider, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Cards from '../components/UI/Cards';
import axios from 'axios';
import { InputLabel } from '@mui/material';
import { Paper } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import FilterForm from '../components/FilterForm';
import { NativeSelect } from '@mui/material';
import { Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import MainFooter from '../components/MainFooter';
import { Box } from '@mui/system';

///////////////////////////////////////////////////////////////////////////

const useStyles = makeStyles({
   grid: {
      display: 'block',
      '@media(max-width:900px)': {
         display: 'none',
      },
   },

   filterButton: {
      display: 'none',
      '@media(max-width:900px)': {
         display: 'block',
      },
   },
});

const MyButton = styled(Button)(theme => ({
   visibility: 'hidden',
   marginTop: '0.9rem',
   '@media (max-width:900px)': {
      visibility: 'visible',
   },
}));

////////////////////////////////////////////////////////////

export default function Movies() {
   const [state, setState] = useState({
      loading: true,
      data: [],
      queryObj: {},
      sort: '-releaseDate',
   });
   const [drawer, setDrawer] = useState(false);

   const classes = useStyles();

   useEffect(() => {
      (async function () {
         try {
            const response = await axios.get(
               `https://cinematrix-backend.herokuapp.com/api/v1/movies?sort=${state.sort}`
            );
            setState({ ...state, loading: false, data: response.data.data });
         } catch (error) {
            console.error(error);
         }
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const getFilteredMovies = queryObj => {
      setState(prevState => ({
         ...prevState,
         loading: true,
         data: [],
         queryObj,
      }));

      console.log(state);

      const { genre, rating, censor, language, status } = queryObj;

      let queryString = '';

      if (genre) {
         queryString += `&genre=${genre}`;
      }
      if (rating) {
         queryString += `&rating[gte]=${rating}`;
      }
      if (censor) {
         queryString += `&censor=${censor}`;
      }
      if (language) {
         queryString += `&language=${language}`;
      }

      const query = `https://cinematrix-backend.herokuapp.com/api/v1/movies?${queryString}&sort=${state.sort}`;

      (async function () {
         try {
            const response = await axios.get(query);

            if (status) {
               response.data.data = response.data.data.filter(
                  movie => movie.status === status
               );
            }

            setState({
               ...state,
               loading: false,
               data: response.data.data,
               queryObj: queryObj,
            });
         } catch (error) {
            console.error(error);
         }
      })();
   };

   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(() => getFilteredMovies(state.queryObj), [state.sort]);

   return (
      <>
         <Grid container p={3} gap={5}>
            <Grid item md={2.5} className={classes.grid}>
               <Paper
                  style={{
                     paddingLeft: '1rem',
                     paddingTop: '1rem',
                     paddingBottom: '1rem',
                  }}
               >
                  <Typography variant="h5">Filters</Typography>
                  <Divider style={{ marginBottom: '1rem' }} />
                  <FilterForm getFilteredMovies={getFilteredMovies} />
               </Paper>
            </Grid>
            <Drawer
               anchor="left"
               open={drawer}
               onClose={() => setDrawer(!drawer)}
            >
               <Grid item md={2.5}>
                  <Paper
                     style={{
                        paddingLeft: '1rem',
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                     }}
                  >
                     <Box
                        sx={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                           pr: '1rem',
                           py: '1rem',
                        }}
                     >
                        <Typography variant="h3">Filters</Typography>
                        <Button
                           variant="contained"
                           color="secondary"
                           onClick={() => setDrawer(!drawer)}
                        >
                           Done
                        </Button>
                     </Box>
                     <Divider style={{ marginBottom: '1rem' }} />
                     <FilterForm getFilteredMovies={getFilteredMovies} />
                  </Paper>
               </Grid>
            </Drawer>

            <Grid item md={8} xs={12}>
               <Toolbar
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     marginBottom: '2rem',
                  }}
               >
                  <MyButton
                     variant="contained"
                     color="secondary"
                     startIcon={<FilterAltRoundedIcon />}
                     onClick={() => setDrawer(!drawer)}
                  >
                     Filter
                  </MyButton>
                  <div>
                     <InputLabel sx={{ color: '#fff' }} htmlFor="sort">
                        Sort By
                     </InputLabel>
                     <NativeSelect
                        size="small"
                        color="secondary"
                        variant="standard"
                        inputProps={{
                           name: 'sort',
                           id: 'sort',
                        }}
                        onChange={e =>
                           setState(prevState => ({
                              ...prevState,
                              sort: e.target.value,
                           }))
                        }
                        sx={{
                           backgroundColor: '#fff',
                           borderRadius: '0.2rem',
                           padding: '1px',
                        }}
                     >
                        <option value={'-releaseDate'}>Latest &uarr; </option>
                        <option value={'-rating'}>Rating &uarr;</option>
                        <option value={'rating'}>Rating &darr;</option>
                     </NativeSelect>
                  </div>
               </Toolbar>

               <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
               >
                  {state.loading && <CircularProgress color="secondary" />}

                  {state.data.length !== 0 ? (
                     state.data.map(movie => (
                        <Grid item>
                           <Cards key={movie.id} data={movie} />{' '}
                        </Grid>
                     ))
                  ) : !state.loading ? (
                     <Typography color="secondary" variant="h3" mt={8}>
                        No Movies Found :(
                     </Typography>
                  ) : (
                     ''
                  )}
               </Grid>
            </Grid>
         </Grid>
         <MainFooter />
      </>
   );
}
