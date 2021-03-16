import React from "react";
import MovieItem from "./movie_item";
//componente stateless --> senza stato --> quindi creo una funzione

export default function movieList(props) {
  if (!props.movies) return null;

  return (
    <div className="row">
      {props.movies.map(movie => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
