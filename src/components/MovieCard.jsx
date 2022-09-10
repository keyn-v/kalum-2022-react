import React from 'react'

export default function MovieCard({movie}) {

  return (
    <div className="movie-card">
      <h5>{movie.title}</h5>     
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.path} />   
    </div>
  )
}
