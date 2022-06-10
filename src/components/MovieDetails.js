import React from 'react';
import { Box, styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { Chip } from '@mui/material';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import { CircularProgress } from '@mui/material';

////////////////////////////////////////////////////////////////

const MyChip = styled(Chip)(theme => ({
   fontSize: '1.2rem',
   fontWeight: '600',
   backgroundColor: '#f77777',
   color: '#323232',

   '@media (max-width:600px)': {
      fontSize: '0.8rem',
   },
   '@media (max-width:320px)': {
      fontSize: '0.7rem',
   },
}));

const CoverImg = styled('img')(theme => ({
   width: '25vw',
   height: '75vh',
   '@media(max-width:800px)': {
      width: '55vw',
      height: '45vh',
      marginTop: '2rem',
      marginBottom: '1rem',
   },
}));

const useStyles = makeStyles({
   box: {
      padding: '2rem',
      width: '80%',
      textAlign: 'center',

      '@media(max-width:600px)': {
         textAlign: 'right',
         width: '100%',
         marginBottom: '3rem',
      },
   },
});

///////////////////////////////////////////////////////////////////////

export default function MovieDetails(props) {
   const classes = useStyles();

   const releaseDateString = new Date(props.data.releaseDate);

   const releaseDate = `${releaseDateString.getDate()}-${
      releaseDateString.getMonth() + 1
   }-${releaseDateString.getFullYear()}`;

   return (
      <Paper
         elevation={10}
         sx={{
            backgroundColor: '#3B3B3B99',
         }}
      >
         <Grid container justifyContent="center" alignItems="center">
            {props.loading && (
               <CircularProgress
                  color="secondary"
                  style={{ margin: '10rem' }}
               />
            )}
            <Grid
               item
               sx={12}
               md={4}
               display={props.loading ? 'none' : 'block'}
            >
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               >
                  <CoverImg src={props.data.poster} alt="cover"></CoverImg>
               </Box>
            </Grid>

            <Grid
               item
               sx={12}
               md={8}
               display={props.loading ? 'none' : 'block'}
            >
               <Box pl={4} pr={4} py={3}>
                  <Typography
                     color="secondary"
                     variant={'h2'}
                     mb={1}
                     style={{ letterSpacing: '3px' }}
                  >
                     {props.data.title.toUpperCase()}
                  </Typography>
                  <Stack direction="row" spacing={1} mb={3}>
                     <MyChip label={props.data.types[0]} size="large" />
                     <MyChip label={props.data.types[1]} size="large" />
                     <MyChip
                        label={props.data.languages.join(' / ')}
                        size="large"
                     />
                  </Stack>
                  <Typography variant={'body'} color="white">
                     {props.data.plot}
                  </Typography>
                  <Typography variant={'h6'} color="secondary" mt={3}>
                     {props.data.genre.join(', ')}
                  </Typography>
                  <Typography variant={'body'} color="white">
                     {props.data.castCrew.join(', ')}
                  </Typography>
                  <Box className={classes.box}>
                     <Box
                        mb={2}
                        sx={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                        }}
                     >
                        <Box>
                           <Typography variant={'body'} color="white">
                              Release on:
                           </Typography>
                           <Typography variant={'h5'} color="secondary">
                              {releaseDate}
                           </Typography>
                        </Box>
                        <Box>
                           <Typography variant={'body'} color="white">
                              Run Time:
                           </Typography>
                           <Typography variant={'h5'} color="secondary">
                              {props.data.runTime}
                           </Typography>
                        </Box>
                     </Box>
                     <Box
                        sx={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                        }}
                     >
                        <Box>
                           <Typography variant={'body'} color="white">
                              Box Office:
                           </Typography>
                           <Typography variant={'h5'} color="secondary">
                              {props.data.boxOffice}
                           </Typography>
                        </Box>
                        <Box>
                           <Typography variant={'body'} color="white">
                              Ratings:
                           </Typography>
                           <Typography variant={'h5'} color="secondary">
                              {`${props.data.rating}/5`}
                           </Typography>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </Paper>
   );
}
