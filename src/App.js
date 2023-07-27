// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList';
import  Carousels from './components/Slider';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='main'>
 <BrowserRouter>
<Navbar/>
{/* <Genres/> */}
<Carousels/>
<Routes>
  <Route path='/all' element = {<MovieList/>} exact/>
   {/* <Route path='moviedetails' element = {<MovieDetails/>} exact/>  */}
  <Route path='/' element = {<MovieList/>} exact/>
</Routes>
</BrowserRouter>

  
    </div>
  );
}

export default App;


