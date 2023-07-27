// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList';
import  Carousels from './components/Slider';
import Navbar from './components/Navbar';
import MovieDetailsPage from './components/Details';


function App() {
  return (
    <div className='main'>
 <BrowserRouter>
<Navbar/>
{/* <Genres/> */}
<Carousels/>
<Routes>
  <Route path='/all' element = {<MovieList/>} exact/>
  <Route path='/moviedetails' element = {<MovieDetailsPage/>} exact/>
</Routes>
</BrowserRouter>

  
    </div>
  );
}

export default App;


