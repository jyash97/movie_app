import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import MovieCard from "./MovieCard";
import Dropdown from "./Dropdown";

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      searchterm: "",
      search: "Shawshank Redemption",
      a: [],
      dropdown: false,
      b: []
    };
    this.setSearch = this.setSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `http://api.themoviedb.org/3/search/movie?api_key=cc4b67c52acb514bdf4931f7cedfd12b&query="Shawshank Redemption"`
      )
      .then(response => this.setState({ a: response.data.results[0] }))
      .catch(error => this.setState({ fail: true }));
  }

  handleDrop(movie) {
    this.setState({
      searchterm: movie
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState(
      {
        searchterm: e.target.value,
        dropdown: true
      },
      () => {
        return this.state.searchterm;
      }
    );
    axios
      .get(
        `http://api.themoviedb.org/3/search/movie?api_key=cc4b67c52acb514bdf4931f7cedfd12b&query=${
          this.state.searchterm
        }`
      )
      .then(response => {
        const movies = [];
        for (var i = 0; i < 10; i++) {
          movies.push(response.data.results[i].title);
        }
        this.setState({ b: movies, dropdown: true });
      })
      .catch(error => this.setState({ dropdown: false }));
  }

  setSearch(e, movie) {
    e.preventDefault();
    this.setState({
      search: movie
    });
    axios
      .get(
        `http://api.themoviedb.org/3/search/movie?api_key=cc4b67c52acb514bdf4931f7cedfd12b&query=${
          this.state.search
        }`
      )
      .then(response => this.setState({ a: response.data.results[0] }))
      .catch(error => this.setState({ fail: true }));
  }

  render() {
    return (
      <div>
        <Navbar
          showsearch
          search={this.state.searchterm}
          setSearch={this.setSearch}
          handleChange={this.handleChange}
        />
        <Dropdown
          movie={this.state.b}
          handleDrop={this.handleDrop}
          search={this.state.searchterm}
        />
        <MovieCard {...this.state.a} />
      </div>
    );
  }
}

export default Movie;
