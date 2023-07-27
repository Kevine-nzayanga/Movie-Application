import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../utils/utilities";
import './style.css';

const poster = process.env.REACT_APP_IMAGE_BASE_URL

const MovieDetailsPage = ()=>{
//     const {movieId} = useParams();
//     const [chosenMovie, setchosenMovie] = useState();

//     useEffect( async()=>{
//     const movies = await getMovieDetails();
//      setchosenMovie=results;
//     },[movieId]);

//    return(
//     <div className="single">
//         <h1>Movie Details</h1>
//         <div >
//         <img src={`${poster}${setchosenMovie.poster_path}`} alt={setchosenMovie.title} />
//         <h2>{setchosenMovie.title}</h2>
//         <p>{setchosenMovie.overview}</p>
   
//         </div>

//     </div>
//    )
}

export default MovieDetailsPage;