import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from './UI/Cards';

const responsive = {
   largedesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
   },
   desktop: {
      breakpoint: { max: 2000, min: 1200 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
   },
   tablet: {
      breakpoint: { max: 1024, min: 550 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
   },
   mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      // partialVisibilityGutter: 20,
   },
};

function MainCarousel(props) {
   let movieData = props.data.slice(0, 10);

   
   return (
      <Carousel
         // itemClass="image-item"
         centerMode={true}
         // style={{ display: 'flex' }}
         // partialVisbile={true}
         swipeable={true}
         draggable={false}
         showDots={false}
         responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         autoPlay={true}
         autoPlaySpeed={2000}
         keyBoardControl={true}
         customTransition="all 1s ease-out"
         transitionDuration={500}
         arrows={true}
         // renderButtonGroupOutside={true}
         containerClass="carousel-container"
         removeArrowOnDeviceType={['tablet', 'mobile']}
      >
         {movieData.map(movie => (
            <Cards id={movie.id} key={movie.id} data={movie} genre={props.genre} />
         ))}
      </Carousel>
   );
}

export default MainCarousel;
