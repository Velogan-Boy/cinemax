import React, { useEffect } from 'react';
import { Divider } from '@mui/material';
import { InputLabel } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

//////////////////////////////////////////////////////

export default function FilterForm({ getFilteredMovies }) {
   const [state, setState] = React.useState({
      genre: '',
      language: '',
      type: '',
      censor: '',
      status: '',
      rating: '',
   });

   const handleFormInputs = e => {
      const { name, value } = e.target;

      setState({ ...state, [name]: value });
   };

   useEffect(() => {
      getFilteredMovies(state);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [state]);

   return (
      <form onChange={handleFormInputs}>
         <InputLabel>Genre</InputLabel>
         <RadioGroup name="genre">
            <FormControlLabel
               value="Action"
               control={<Radio size="small" />}
               label="Action"
            />
            <FormControlLabel
               value="Adventure"
               control={<Radio size="small" />}
               label="Adventure"
            />
            <FormControlLabel
               value="Drama"
               control={<Radio size="small" />}
               label="Drama"
            />
            <FormControlLabel
               value="Science Fiction"
               control={<Radio size="small" />}
               label="Science Fiction"
            />
            <FormControlLabel
               value="Thriller"
               control={<Radio size="small" />}
               label="Thriller"
            />
            <FormControlLabel
               value="Romance"
               control={<Radio size="small" />}
               label="Romance"
            />
         </RadioGroup>

         <Divider style={{ marginBottom: '1rem' }} />

         <InputLabel>Language</InputLabel>
         <RadioGroup name="language" row>
            <FormControlLabel
               value="English"
               control={<Radio size="small" />}
               label="English"
            />
            <FormControlLabel
               value=""
               control={<Radio size="small" />}
               label="Other"
            />
         </RadioGroup>

         <Divider style={{ marginBottom: '1rem' }} />

         <InputLabel>Censor Rating</InputLabel>
         <RadioGroup name="censor">
            <FormControlLabel
               value="R"
               control={<Radio size="small" />}
               label="R"
            />

            <FormControlLabel
               value=""
               control={<Radio size="small" />}
               label="Other"
            />
         </RadioGroup>

         <Divider style={{ marginBottom: '1rem' }} />

         <InputLabel>Release Status</InputLabel>
         <RadioGroup name="status">
            <FormControlLabel
               value="nowShowing"
               control={<Radio size="small" />}
               label="Now Showing"
            />
            <FormControlLabel
               value="openingNextWeek"
               control={<Radio size="small" />}
               label="Opening Next Week"
            />
            <FormControlLabel
               value="comingSoon"
               control={<Radio size="small" />}
               label="Coming Soon"
            />

            <Divider style={{ marginBottom: '1rem' }} />

            <FormLabel>Rating</FormLabel>
            <RadioGroup row name="rating">
               <FormControlLabel
                  value={4}
                  control={<Radio />}
                  label="4⭐ & above"
               />
               <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label="3⭐ & above"
               />
               <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="2⭐ & above"
               />
               <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="1⭐ & above"
               />
            </RadioGroup>
         </RadioGroup>
      </form>
   );
}
