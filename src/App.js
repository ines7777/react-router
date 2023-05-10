import logo from './logo.svg';
import './App.css';
import './Components/Filter';
import Filter from './Components/Filter';
import MovieCard from './Components/MovieCard';
import MovieList from './Components/MovieList';
import {movieData} from './Data';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import MovieTrailer from './Components/MovieTrailer';

function App() {

  const[movies, setMovies]= useState(movieData)

  const[filterTitle, setFilterTitle]= useState("")
  const[filterRating,setFilterRating]=useState(0)
  console.log({filterRating})

  return (
    
       <div className="">
      
      <Filter setFilterTitle={setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating}/>
      
      <Routes>
         <Route path="/" element={<MovieList movies={movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating}/>}></Route>
      <Route path="/:id" element={<MovieTrailer movies={movies}/>}/>
      </Routes>
    </div>
    
   
  );
}

export default App;
