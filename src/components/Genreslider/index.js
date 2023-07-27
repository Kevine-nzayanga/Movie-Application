// import React, { useEffect, useState } from "react";
// import './style.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import { getGenre } from "../../utils/utilities";


// const Genres= () =>{
// const [state, setState] = useState([]); 
// const [page, setPage] = useState(1); 
// const [genre, setGenre] = useState([]);
// const [value, setValue] = useState([]);

// <Genre
//   genre={genre}
//   setGenre={setGenre}
//   setPage={setPage}
//   type="movie"
//   value={value}
//   setValue={setValue}
// />
// const Genre =({genre, setGenre, setPage, type, value, setValue}) =>{
//  getGenre();
// }

// useEffect(() =>{
//     getGenre();
// },[]);  

// const CategoryAdd = (genres) => {
//     setValue([...value, genres]);
//     setGenre(genre.filter((g) => g.id !== genres.id));
//     setPage(1);
//     };

//     const CategoryRemove = (genres) => {
//         setValue(value.filter((g) => g.id !== genres.id));
//         setGenre([genre, genres]);
//         setPage(1);
//         };
// return(
//     <div>
//         <div>
//             <div>
//                 {value &&

//                 value.map((Val) => {
//                     const { id, name } = Val;
//                     return (
//                       <>
//                         <div className="m-2" key={id}>
//                           <button
//                             className="bg-dark text-white px-4 py-2 text-center buttons"
//                             onClick={() => CategoryRemove(Val)}
//                           >
//                             {name}
//                           </button>
//                         </div>
//                       </>
//                     );
//                   })}



//             {genre &&
//             genre.map((Gen) => {
//                 const { id, name } = Gen;
//                 return (
//                   <>
//                     <div className="m-2" key={id}>
//                       <button
//                         className="bg-dark text-white px-4 py-2 text-center button"
//                         onClick={() => CategoryAdd(Gen)}
//                       >
//                         {name}
//                       </button>
//                     </div>
//                   </>
//                 );
//             })}
//             </div>
//         </div>
//     </div>
// )
//         }

//     // const [buttons, setbuttons]= useState();


//     // const Genre = [
    
//     //     <div className="edit" >
//     //         <button onClick={"/all"} >All</button>
//     //         <button >Action</button>
//     //         <button >Comedy</button>
//     //         <button >Arabic</button>
//     //         <button >Series</button>
//     //         <button >Adventure</button>
//     //         <button >Other</button>

//     //     </div>
//     // ]

// //     return(
// //         <Carousel
// //         showArrows={false}
// //         className="buttons"
// //         >
// //        {Genre}
// //         </Carousel>
// //     )


// export default Genres;


import React, { useState, useEffect } from "react";
// import { img_300, unavailable } from "../Components/config";
// import Pagination from "../Components/Pagination";
// import Genre from "../Components/Genre";
// import useGenre from "../useGenre";

const Genres = () => {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const [value, setValue] = useState([]);
  const genreURL = useGenre(value);
 
 
  const fetchTrending = async () => {
    const data = await fetch(`
    https://api.themoviedb.org/3/discover/tv?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`);
    const dataJ = await data.json();
    setState(dataJ.results);
  };
  useEffect(() => {
    fetchTrending();
  }, [page, genreURL]);
 
 
  return (
    <>
      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-12 text-center mt-2 mb-4 fs-1 fw-bold text-decoration-underline">
            TV Series
          </div>
          <Genre
            genre={genre}
            setGenre={setGenre}
            setPage={setPage}
            type="tv"
            value={value}
            setValue={setValue}
          />
          {state.map((Val) => {
            const {
              name,
              title,
              poster_path,
              first_air_date,
              release_date,
              media_type,
              id,
            } = Val;
            return (
              <>
                <div className="col-md-3 col-sm-4 py-3" id="card" key={id}>
                  <div className="card bg-dark" key={id}>
                    <img
                      src={
                        poster_path ? `${img_300}/${poster_path}` : unavailable
                      }
                      className="card-img-top pt-3 pb-0 px-3"
                      alt={title || name}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center fs-5">
                        {title || name}
                      </h5>
                      <div className="d-flex fs-6 align-items-center justify-content-evenly movie">
                        <div>{media_type === "movie" ? "Movie" : "TV"}</div>
                        <div>{first_air_date || release_date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
    </>
  );
};
 
 
export default Genres;