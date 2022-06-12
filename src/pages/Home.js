import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { Box, styled } from '@mui/system';
import MainFooter from '../components/MainFooter';
import CircularProgress from '@mui/material/CircularProgress';
import background from '../assets/netflix.jpg';
import SearchBar from '../components/UI/SearchBar';
import Subheads from '../components/UI/Subheads';
import MainCarousel from '../components/MainCarousel';
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
   fontSize: '1.3rem',

   '@media (max-width: 600px)': {
      fontSize: '0.9rem',
      marginTop: '1rem',
   },
});

export default function Home() {
   const [trending, setTrending] = useState([]);
   const [popular, setPopular] = useState([]);
   const [nowPlaying, setNowPlaying] = useState([]);
   const [genre, setGenre] = useState([]);

   const [isLoading, setLoading] = useState(true);
   const [isLoading1, setLoading1] = useState(true);
   const [isLoading2, setLoading2] = useState(true);
   const classes = useStyles();

   useEffect(() => {
      (async function () {
         try {
            const trendingResponse = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

            setTrending(trendingResponse.data.results);
            
            setLoading(false);
            
            

            const popularResponse = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

            setPopular(popularResponse.data.results);
            
            setLoading1(false);
            

            const nowPlayingResponse = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

            setNowPlaying(nowPlayingResponse.data.results);
            
            setLoading2(false);
            

            const genreResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`);

            setGenre(genreResponse.data.genres);

         } catch (error) {
            console.error(error);
         }
      })();
   }, []);

   return (
      <>
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

         <Subheads>What's Popular</Subheads>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            {isLoading && <CircularProgress color="secondary" />}
         </Box>
         <MainCarousel data={trending} genre={genre} />
         <Box mb={6}>&nbsp;</Box>

         <Subheads>What's Trending</Subheads>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            {isLoading1 && <CircularProgress color="secondary" />}
         </Box>
         <MainCarousel data={popular} genre={genre} />
         <Box mb={6}>&nbsp;</Box>

         <Subheads>Now playing</Subheads>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            {isLoading2 && <CircularProgress color="secondary" />}
         </Box>
         <MainCarousel data={nowPlaying} genre={genre} />
         <Box mb={6}>&nbsp;</Box>

         <MainFooter />
      </>
   );
}
