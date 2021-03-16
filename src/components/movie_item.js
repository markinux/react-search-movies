import React from "react";

export default function movieItem(props) {
  //return <li key={props.movie.imdbID}>{props.movie.Title}</li>;
  return (
    <div className="card col-3">
      <img src={props.movie.Poster} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.movie.Title}</h5>
        <a href="#" className="btn btn-primary">
          View Detail
        </a>
      </div>
    </div>
  );
}
