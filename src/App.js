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
  return (
    <div className="">
      
      <Filter/>
      <MovieList movies={movies} setMovies={setMovies}/>
      
    </div>
  );
}

export default App;
