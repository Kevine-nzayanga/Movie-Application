import React, { useState, useEffect } from "react";
import { getMovieDetails } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import { getMovies } from "../../utils/utilities";
import { useParams } from "react-router-dom"; 


const IMG = process.env.REACT_APP_IMAGE_BASE_URL

const MovieDetails = (props) => {
    const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);


  useEffect(async() => {
    const movies = await getMovies();
    const { movie_id } = props.match.params;
    getMovieDetails(movie_id)
      .then((detail) => {
        setDetails(detail);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [props.match.params]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  const closing = () => {
  setSelectedMovie(movies);
  };


  return (

    <div>
           {selectedMovie && (
       <div className='mov-overlay' onClick={closing}>
      <div className='mov-content'>
        <img src={`${IMG}${selectedMovie.poster_path}`} alt={selectedMovie.title} />
        <h2>{selectedMovie.title}</h2>
        <p>{selectedMovie.overview}</p>
        <p>Release Date: {selectedMovie.release_date}</p>
        <ImageContainer data={details} />
      </div>
     </div>
            )}
             </div>
  );
};

export default MovieDetails;

