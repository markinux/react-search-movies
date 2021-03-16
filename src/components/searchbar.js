import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "La dolce vita"
    };
  }

  searchChange = evt => {
    this.setState({ term: evt.target.value });
    //this.props.onSearchTerm.onSearchTerm(evt.target.value);
  };

  searchClick = evt => {
    evt.preventDefault();
    this.props.onSearchTerm.onSearchTerm(this.state.term);
  };

  render() {
    return (
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={this.state.term}
          onChange={this.searchChange}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={this.searchClick}
        >
          Search
        </button>
      </form>
    );
  }
}
