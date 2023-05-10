import { Button } from '@mui/material'
import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { YouTube } from 'react-youtube'

const MovieTrailer = ({movies}) => {
    const {id} = useParams()
    const idMovie=Number(id)
    const movie = movies.find(elem=> elem.id === idMovie)
    
  return (
    <div>
      <Link to="/">
      <Button variant="contained">Go home</Button>
      </Link>
      <h1>Title:{movie.title}</h1>
      <h5>Description:{movie.description}</h5>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.trailer}`}
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
       clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
    </div>
  )
}

export default MovieTrailer
