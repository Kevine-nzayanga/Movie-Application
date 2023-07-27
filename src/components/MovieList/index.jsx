import React, {useEffect,useState} from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import './style.css';

const MovieList= () =>{
const [movies, setMovies] = useState([]);
const [loading,setLoading] = useState(false);

useEffect(()=>{
    (async()=>{
        const movies = await getMovies();
        setMovies(movies.results);
        setLoading(false);
        console.log({movies});
    })();
},[]);

if(loading){
    return <h1>Loading...</h1>
}

    return(
        <div className="movies">
            {movies&& 
            loading===false && 
            movies.length>0 && 
            movies.map(
                (item) =>(
                    <ImageContainer props={item}/>
                )
            )}

        </div>    
        )
}

export default MovieList;

