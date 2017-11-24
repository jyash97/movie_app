import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import MovieDesc from "./MovieDesc";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      a: [],
      fail: false
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=cc4b67c52acb514bdf4931f7cedfd12b&sort_by=popularity.desc"
      )
      .then(response => this.setState({ a: response.data.results }))
      .catch(error => this.setState({ fail: true }));
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1 className="heading">Popular Movies</h1>
        <div className="movies">
          {this.state.fail ? (
            <h1>There is some error.Please try again later.</h1>
          ) : (
            this.state.a.map(i => <MovieDesc key={i.id} {...i} />)
          )}
        </div>
      </div>
    );
  }
}

export default Home;
