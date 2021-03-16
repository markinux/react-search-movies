import React, { Component } from "react";
import "./style.css";
import VideoList from "./components/movie_list";
import Navbar from "./components/navbar";

const OMDBAPIKEY = "https://omdbapi.com/?i=tt3896198&apikey=7d858875";

function fetchMovies(search) {
  return fetch(OMDBAPIKEY + "&s=" + search).then(result => result.json());
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      totCount: 0
    };
  }

  componentDidMount() {
    this.searchMovies("Back to the future");
  }

  searchMovies = (term = "") => {
    if (term.length < 3) return;

    fetchMovies(term).then(res => {
      this.setState({
        movies: res.Search,
        totCount: res.totalResults
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar onSearchTerm={this.searchMovies} />
        <div className="container">
          <h1>My favorite movies!</h1>
          <VideoList movies={this.state.movies} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
