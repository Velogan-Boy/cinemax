import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import './NotFound.css';

export default function NotFound() {
   return (
      <>
         <figure>
            <div class="sad-mac"></div>
            <figcaption>
               <span class="sr-text">Error 404: Not Found</span>
               <span class="e"></span>
               <span class="r"></span>
               <span class="r"></span>
               <span class="o"></span>
               <span class="r"></span>
               <span class="_4"></span>
               <span class="_0"></span>
               <span class="_4"></span>
               <span class="n"></span>
               <span class="o"></span>
               <span class="t"></span>
               <span class="f"></span>
               <span class="o"></span>
               <span class="u"></span>
               <span class="n"></span>
               <span class="d"></span>
            </figcaption>
            <Link to="/" style={{ color: 'white' }}>
               <Typography align="center" mt={3} variant={'h6'}>
                  {'< Go Back to Home'}
               </Typography>
            </Link>
         </figure>
      </>
   );
}
