import React from 'react';
import {
   Card,
   CardMedia,
   CardActions,
   CardContent,
   Typography,
   Button,
   Chip,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import Stack from '@mui/material/Stack';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import WeekendIconOutlined from '@mui/icons-material/WeekendOutlined';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const MyChip = styled(Chip)(theme => ({
   '@media (max-width:600px)': {
      fontSize: '0.6rem',
   },
   '@media (max-width:320px)': {
      fontSize: '0.4rem',
   },
}));

const MyButton = styled(Button)(theme => ({
   '&:link': {
      color: 'unset',
   },

   '@media (max-width:600px)': {
      display: 'none',
   },
}));

const MyPhoneButton = styled(Button)(theme => ({
   '&:link': {
      color: 'unset',
   },

   display: 'none',
   textAlign: 'center',
   fontSize: '0.5rem',
   '@media (max-width:600px)': {
      display: 'block',
      marginTop: '-0.5rem',
   },
}));

const useStyles = makeStyles(theme => ({
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
   const classes = useStyles();

   return (
      <Card className={classes.root} elevation={20} sx={{ ...props.style }}>
         <CardMedia
            className={classes.cardImage}
            component="img"
            image={props.data.poster}
         />
         <CardContent className={classes.content}>
            <Typography
               sx={{ ...classes.text }}
               variant="h5"
               align="text"
               gutterBottom
               noWrap
            >
               {props.data.title}
            </Typography>
            <Stack direction="row" spacing={0.5}>
               <MyChip label={props.data.types[0]} size="small" />
               <MyChip label={props.data.types[1]} size="small" />
               <MyChip label={props.data.languages.join(' / ')} size="small" />
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
            <MyButton
               size="small"
               variant="outlined"
               endIcon={<PlayArrowRoundedIcon />}
               href={props.data.trailerURL}
               target="_blank"
            >
               Play Trailer
            </MyButton>
            <Link to={`/movie/${props.data._id}`} className={classes.link}>
               <MyButton
                  size="small"
                  variant="contained"
                  color="secondary"
                  endIcon={<ConfirmationNumberOutlinedIcon />}
               >
                  Book Now
               </MyButton>
            </Link>
            <MyPhoneButton
               size="small"
               variant="outlined"
               href={props.data.trailerURL}
               target="_blank"
            >
               <PlayArrowOutlinedIcon />
            </MyPhoneButton>
            <Link to={`/movie/${props.data._id}`} className={classes.phoneLink}>
               <MyPhoneButton
                  size="small"
                  variant="contained"
                  color="secondary"
               >
                  <WeekendIconOutlined />
               </MyPhoneButton>
            </Link>
         </CardActions>
      </Card>
   );
}
