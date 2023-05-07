import logo from './logo.svg';
import './App.css';
import './Components/Filter';
import Filter from './Components/Filter';
import MovieCard from './Components/MovieCard';
import MovieList from './Components/MovieList';
import {movieData} from './Data';
import { useState } from 'react';

function App() {

  const[movies, setMovies]= useState(movieData)

  const[filterTitle, setFilterTitle]= useState("")
  const[filterRating,setFilterRating]=useState(0)

  return (
    <div className="">
      
      <Filter setFilterTitle={setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating}/>
      <MovieList movies={movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating}/>
      
    </div>
  );
}

export default App;
