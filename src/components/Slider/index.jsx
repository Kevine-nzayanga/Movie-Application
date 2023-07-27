import React, { useState, useEffect } from "react";
import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getUpcoming } from "../../utils/utilities";
import { Carousel } from 'react-responsive-carousel';
import {LiaStarSolid} from 'react-icons/lia'

const IMAGE_BASE_URL= process.env.REACT_APP_IMAGE_BASE_URL;

const Carousels = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index){
    setCurrentIndex(index)
  }
  useEffect(() => {
    (async() => {
      const images = await getUpcoming();
      setImages(images.results.slice(0, 4));
       console.log({ images });
    })();
  }, []);

  const carouselSlides = images.map((image) =>(
    <div className="resize" key={image.alt}>
      <img
        src={`${IMAGE_BASE_URL}${image.poster_path}`}
        alt={image.title}
        />
        <div className="captions">
          <p>{image.release_date}</p>
          <p className="title">{image.title}</p>
          <p><LiaStarSolid/> {image.vote_average}</p>
           <p>{image.overview}</p>
           </div>
    </div>
  ))

  return (

<Carousel
showArrows={true}
autoPlay ={true}
infiniteLoop ={true}
showThumbs={false}
 selectedItem={images[currentIndex]}
onChange={handleChange}
className="caro">
  {carouselSlides}
</Carousel>


);
};

export default Carousels;

   

