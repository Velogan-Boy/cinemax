import React from 'react';
import Subheads from '../components/UI/Subheads';
import MainCarousel from '../components/MainCarousel';
import CarouselButton from '../components/UI/CarouselButton';
import MainFooter from '../components/MainFooter';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box , styled} from '@mui/system';
import { makeStyles } from '@mui/styles';
import background from '../assets/netflix.jpg';
import SearchBar from '../components/UI/SearchBar';
import SearchIcon from '@mui/icons-material/Search';
import { Typography, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
   box: {
      backgroundImage: ` url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '80vh',
      clipPath: 'polygon(0 0, 100% 0, 100% 65vh, 0% 100%)',
      width: '100%',

      '@media (max-width: 600px)': {
         height: '35vh',
      },
   },

   innerBox: {
      width: '100%',
      height: '100%',
      backdropFilter: 'blur(1.5px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
   },

   heroText: {
      width: '70%',
      fontFamily: 'Noto Sans',
      fontSize: '4.5rem',
      color: 'white',
      position: 'absolute',
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '@media (max-width: 600px)': {
         padding: '1rem 1.2rem',
         width: '100%',
         fontSize: '1.7rem',
      },
   },

   sub1: {
      display: 'block',
      marginTop: '1rem',
   },

   sub1a: {
      color: `${theme.palette.secondary.main}`,
   },

   sub2: {
      color: `${theme.palette.secondary.main}`,
      display: 'block',
   },

   
}));


const ExploreButton = styled(Button)({
   
})

export default function Home() {
   const [state, setState] = useState({ loading: true, data: [] });
   const classes = useStyles();

   // useEffect(() => {
   //    (async function () {
   //       try {
   //          const response = await axios.get(
   //             'https://cinematrix-backend.herokuapp.com/api/v1/movies'
   //          );
   //          setState({ loading: false, data: response.data.data });
   //       } catch (error) {
   //          console.error(error);
   //       }
   //    })();
   // }, []);

   return (
      <React.Fragment>
         <Box className={classes.box}>
            <Box className={classes.innerBox}>
               <h1 className={classes.heroText}>
                  <span className={classes.sub1}>
                     <span className={classes.sub1a}>Movies</span> make our world
                  </span>
                  <span className={classes.sub2}> A Better place</span>
                  <ExploreButton variant="contained" color="secondary">
                     {'Explore now > '}
                  </ExploreButton>
               </h1>
            </Box>
         </Box>

         {/* <Subheads>Now Showing</Subheads>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            {state.loading && <CircularProgress color="secondary" />}
         </Box>
         <MainCarousel data={state.data} label="nowShowing" />
         <Box mb={6}>&nbsp;</Box> */}
         {/* <MainCarousel data={state.data.slice().reverse()} label="nowShowing" /> */}
         {/* <CarouselButton>{'View All >'}</CarouselButton> */}
         {/* <Subheads>Opening next week</Subheads>

         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            {state.loading && <CircularProgress color="secondary" />}
         </Box>
         <MainCarousel data={state.data} label="openingNextWeek" />
         <CarouselButton>{'View All >'}</CarouselButton>
         <Subheads>Coming Soon</Subheads>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            {state.loading && <CircularProgress color="secondary" />}
         </Box>
         <MainCarousel data={state.data} label="comingSoon" />
         <CarouselButton style={{ marginBottom: '10rem' }}>
            {'View All >'}
         </CarouselButton> */}
         <MainFooter />
      </React.Fragment>
   );
}
