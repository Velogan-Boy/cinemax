import React from 'react';

import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Movie from './pages/Movie';

import NotFound from './pages/NotFound';
import ScrollToTop from './components/UI/ScrollToTop';

export default function App() {
   return (
      <Router>
         <ScrollToTop>
            <NavBar />
            <Switch>
               <Route exact path="/" children={<Home />} />
               <Route exact path="/movie/:id" children={<Movie />} />
               <Route path="*" children={<NotFound />}></Route> 
            </Switch>
         </ScrollToTop>
      </Router>
   );
}
