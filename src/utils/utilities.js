const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const getMovies =async() =>{
try{
const response = await fetch (`${BASE_URL}/3/trending/all/day`,{
    method:'GET',
    headers:{
        Authorization:`Bearer ${ACCESS_TOKEN}`
    }
})

const result = await response.json();
return result;

}
catch(error){
    return error.message;
}

}

export const getUpcoming = async() =>{
    try{
   const response = await fetch(`${BASE_URL}/3/movie/now_playing`,{
    method:'GET',
    headers:{
        Authorization:`Bearer ${ACCESS_TOKEN}`
    }
   })
   const result = await response.json();
   return result;
    }

    catch (error){
        return error.message
    }
}


// export const getGenre = async() =>{
// try{
//     const response = await fetch(`${BASE_URL}/3/genre/${type}/list`,{
//         method:'GET',
//         headers:{
//             Authorization:`Bearer ${ACCESS_TOKEN}`
//         }  
//     })
//     const result = await response.json();
//     return result;
// }
// catch(error){
//     return error.message
// }
// }

export const getMovieDetails = async (id) => {
    try{
        const response = await fetch(`${BASE_URL}/3/movie/${id}`, {
            method : 'GET',
            headers : {
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
        })
    
        const result = await response.json();
        return result;
    }

    catch (error) {
      return error.message;
    }
}


