// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList';
import  Carousels from './components/Slider';
import Navbar from './components/Navbar';
import Genres from './components/Genreslider';


function App() {
  return (
    <div className='main'>
      <Navbar/>
      <Carousels/>
      <Genres/>
      <MovieList/>
    </div>
  );
}

export default App;




// <BrowserRouter>
// <Navbar/>
// <Genres/>
// <Routes>
//   <Route path='/all' element = {<MovieList/>} exact>
//   {/* <Route path='/' element = {<MovieList/>} exact> */}
//   {/* <Route path='/' element = {<MovieList/>} exact> */}
//   </Route>
// </Routes>
// </BrowserRouter>