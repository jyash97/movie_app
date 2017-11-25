import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import MovieCard from './MovieCard';

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      search: 'Shawshank Redemption'
    };
    this.setSearch = this.setSearch.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `http://api.themoviedb.org/3/search/movie?api_key=cc4b67c52acb514bdf4931f7cedfd12b&query="Shawshank Redemption"`
      )
      .then(response => this.setState({ a: response.data.results[0] }))
      .catch(error => this.setState({ fail: true }));
  }

  setSearch(movie) {
    this.setState(
      {
        search: movie,
      },
      () => {
        if(this.state.search){
        axios
          .get(
            `http://api.themoviedb.org/3/search/movie?api_key=cc4b67c52acb514bdf4931f7cedfd12b&query=${
              this.state.search
            }`
          )
          .then(response => this.setState({ a: response.data.results[0] }))
          .catch(error => this.setState({ fail: true }));}
      }
    );
  }

  render() {
    return (
      <div>
        <Navbar
          showsearch
          search={this.state.searchterm}
          setSearch={this.setSearch}
        />
        <MovieCard {...this.state.a} />
      </div>
    );
  }
}

export default Movie;
