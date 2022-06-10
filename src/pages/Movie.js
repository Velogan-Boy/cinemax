import React, { useEffect, useState } from 'react';
import MovieDetails from '../components/MovieDetails';
import MovieBook from '../components/MovieBook';
import MainFooter from '../components/MainFooter';
import axios from 'axios';

import { useParams } from 'react-router';
import Subheads from '../components/UI/Subheads';
import CarouselButton from '../components/UI/CarouselButton';
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
         poster:
            'https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg',
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

   useEffect(() => {
      (async function () {
         try {
            const response = await axios.get(
               `https://cinematrix-backend.herokuapp.com/api/v1/movies/${id}`
            );
            setState({ loading: false, data: response.data.data });
         } catch (error) {
            console.error(error);
         }
      })();
   }, [id]);

   useEffect(() => {
      (async function () {
         try {
            const response = await axios.get(
               `https://cinematrix-backend.herokuapp.com/api/v1/movies/genre/${state.data.genre[0]}`
            );
            setDataGenre(response.data.data);
         } catch (error) {
            console.error(error);
         }
      })();
   }, [state]);

   // useEffect(() => {
   //    console.log(state);
   // }, [state]);

   return (
      <div>
         <MovieDetails
            loading={state.loading}
            data={!state.loading ? state.data : state.jokeComponents}
         />
         <MovieBook />
         <Subheads>You may also like</Subheads>
         <MainCarousel
            data={dataGenre.filter(movie => movie._id !== id)}
            label="nowShowing"
         />
         <CarouselButton style={{ marginBottom: '10rem' }}>
            {'View All >'}
         </CarouselButton>
         <MainFooter />
      </div>
   );
}
