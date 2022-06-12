import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import { CircularProgress } from '@mui/material';
import MovieDetails from '../components/MovieDetails';
import MainFooter from '../components/MainFooter';
import Subheads from '../components/UI/Subheads';
import MainCarousel from '../components/MainCarousel';

export default function Movie() {
   const { id } = useParams();

   const [state, setState] = useState({
      loading: true,
      data: {},
      jokeComponents: {
         mid: 11,
         title: 'No Time to Die',
         censor: 'PG-13',
         types: ['3D/2D', 'IMAX'],
         genre: ['Action', 'Adventure', 'Thriller'],
         languages: ['English'],
         poster: 'https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg',
         boxOffice: '$605,756,260',
         runTime: '2h 43m',
         trailerURL: 'https://www.youtube.com/watch?v=vw2FOYjCz38',
         plot: 'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
         castCrew: ['Daniel Craig', 'Ana De Armas', 'Cary Joji Fukunga'],
         rating: 4.6,
         releaseDate: '2021-09-29T18:30:00.000Z',
         __v: 0,
         status: 'nowShowing',
      },
   });

   const [dataGenre, setDataGenre] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getMovie = async () => {
         if (id.slice(0, 2) == 'tt') {
            const response = await axios.get(`https://www.omdbapi.com/?i=${id}&plot=full&apiKey=${process.env.REACT_APP_OMDB_API_KEY}`);

            setState({
               loading: false,
               data: {
                  mid: response.data.imdbID,
                  title: response.data.Title,
                  censor: response.data.Rated,
                  types: response.data.Genre.split(','),
                  genre: response.data.Genre.split(','),
                  languages: response.data.Language.split(','),
                  poster: response.data.Poster,
                  boxOffice: response.data.BoxOffice,
                  runTime: response.data.Runtime,
                  trailerURL: response.data.Website,
                  plot: response.data.Plot,
                  castCrew: response.data.Actors.split(','),
                  rating: response.data.imdbRating,
                  releaseDate: response.data.Released,
               },
            });
         } else {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

            setState({
               loading: false,
               data: {
                  mid: response.data.imdb_id,
                  title: response.data.title,
                  censor: response.data.certification,
                  types: response.data.genres.map((genre) => genre.name),
                  genre: response.data.genres.map((genre) => genre.name),
                  languages: response.data.spoken_languages.map((language) => language.name),
                  poster: response.data.poster_path ? `https://image.tmdb.org/t/p/w500/${response.data.poster_path}` : 'https://via.placeholder.com/500x750',
                  boxOffice: response.data.revenue,
                  runTime: response.data.runtime,
                  trailerURL: response.data.homepage,
                  plot: response.data.overview,
                  castCrew: response.data.credits?.cast.map((cast) => cast.name),
                  rating: response.data.vote_average,
                  releaseDate: response.data.release_date,
               },
            });
         }
      };

      getMovie();
   }, [id]);

   return (
      <>
         <MovieDetails loading={state.loading} data={!state.loading ? state.data : state.jokeComponents} />
         <MainFooter />
      </>
   );
}
