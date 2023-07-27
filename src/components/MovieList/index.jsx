import React, {useEffect,useState} from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import './style.css';
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const MovieList= () =>{
const [movies, setMovies] = useState([]);
const [loading,setLoading] = useState(false);
const [searchPerformed, setSearchPerformed] = useState(false);
const [selectedMovie, setSelectedMovie] = useState(null);


const [error, setError] = useState(null);

useEffect(()=>{
    (async()=>{
        const movies = await getMovies();
        setMovies(movies.results);
        setLoading(false);
        console.log({movies});
    })();
},[]);

const closing = () => {
    setSelectedMovie(movies);
  };

const handleSearchFunction = async (searchValue) => {
    if (!searchValue.trim()) {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData.results);
        setError(null);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
        setError("Failed to fetch movies.");
      }
    } else {
      try {
        const response = await fetch(
          `${BASE_URL}/3/search/movie?query=${searchValue}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Search failed.");
        }
        const result = await response.json();
        setMovies(result.results);
        setError(null);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
        setError("Failed to fetch movies.");
      }
    }
    // Set searchPerformed to true after the search
    setSearchPerformed(true);
  };

  

if(loading){
    return <h1>Loading...</h1>
}

    return(
        <div className="movies">
            <div>
            <Navbar onSearch={handleSearchFunction} />
            </div>

            {error && <p>{error}</p>}
      <div className="image_container">
        {searchPerformed && movies.length === 0 ? (
          <p>No search results found</p>
        ) : (

            movies&& 
                loading===false && 
                movies.length>0 && 
                movies.map((item) => (
                   <Link to={`/Moviedetails/${item.id}`} key={item.id}>
                        < ImageContainer props={item}/>
                 </Link>
                ))
                
                )}
      </div>
   
  
          

        </div>    
        )
}

export default MovieList;



