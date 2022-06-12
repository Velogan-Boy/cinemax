import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardActions, CardContent, Typography, Button, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import Stack from '@mui/material/Stack';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import WeekendIconOutlined from '@mui/icons-material/WeekendOutlined';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyChip = styled(Chip)((theme) => ({
   '@media (max-width:600px)': {
      fontSize: '0.6rem',
   },
   '@media (max-width:320px)': {
      fontSize: '0.4rem',
   },
}));

const MyButton = styled(Button)((theme) => ({
   '&:link': {
      color: 'unset',
   },

   '@media (max-width:600px)': {
      display: 'none',
   },
}));

const MyPhoneButton = styled(Button)((theme) => ({
   '&:link': {
      color: 'unset',
   },

   display: 'none',
   textAlign: 'center',
   fontSize: '0.1rem',
   '@media (max-width:600px)': {
      display: 'block',
      marginTop: '-0.5rem',
   },
}));

const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: 300,
      [theme.breakpoints.down('lg')]: {
         maxWidth: 270,
      },
      [theme.breakpoints.down('md')]: {
         maxWidth: 210,
      },
      [theme.breakpoints.down('sm')]: {
         maxWidth: 180,
      },

      '@media (max-width:320px)': {
         maxWidth: 150,
      },
   },

   text: {
      [theme.breakpoints.down('md')]: {
         fontSize: '0.9rem',
      },
   },

   cardImage: {
      height: 390,
      [theme.breakpoints.down('md')]: {
         height: 225,
      },
   },

   content: {
      [theme.breakpoints.down('md')]: {
         height: 80,
      },
   },

   chip: {
      [theme.breakpoints.down('md')]: {
         fontSize: '0.3rem',
      },
   },

   link: {
      textDecoration: 'none',
      display: 'block',

      '@media (max-width:600px)': {
         display: 'none',
      },
   },

   phoneLink: {
      textDecoration: 'none',
      display: 'none',
      '@media (max-width:600px)': {
         display: 'block',
      },
   },
}));

///////////////////////////////////////////////////////////////////////////////

export default function Cards(props) {
   const [genreData, setGenreData] = useState([]);

   const classes = useStyles();

   useEffect(() => {
      props.data.genre_ids.map((genreid) => {
         props.genre.map((genre) => {
            if (genre.id === genreid && !genreData.includes(genre.name)) {
               setGenreData((prevState) => [...prevState, genre.name]);
            }
         });
      });
   }, [props.data.genre_ids, props.genre]);

   return (
      <Card className={classes.root} elevation={20} sx={{ ...props.style }}>
         <CardMedia className={classes.cardImage} component="img" image={`https://image.tmdb.org/t/p/w342/${props.data.poster_path}`} />
         <CardContent className={classes.content}>
            <Typography sx={{ ...classes.text }} variant="h5" align="text" gutterBottom noWrap>
               {props.data.original_title}
            </Typography>
            <Stack direction="row" spacing={0.5}>
               {genreData.map((genre, idx) => {
                  if (idx < 3) return <MyChip key={idx} label={genre} size="small" />;
               })}
            </Stack>
         </CardContent>
         <CardActions
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               mb: 1,
            }}
         >
            <Link to={`/movie/${props.data.id}`} className={classes.link}>
               <MyButton size="small" variant="contained" color="secondary">
                  <PlayArrowOutlinedIcon /> Play Now
               </MyButton>
            </Link>

            <Link to={`/movie/${props.data.id}`} className={classes.phoneLink}>
               <MyPhoneButton size="small" variant="contained" color="secondary">
                  <PlayArrowOutlinedIcon />
               </MyPhoneButton>
            </Link>
         </CardActions>
      </Card>
   );
}
