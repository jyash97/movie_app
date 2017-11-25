import React from "react";
import axios from "axios"

class Dropdown extends React.Component {

  constructor(){
    super();
    this.state={
      b:[]
    }
  }

  componentDidUpdate(){
    if(this.props.search){
    axios
      .get(
        `http://api.themoviedb.org/3/search/movie?api_key=cc4b67c52acb514bdf4931f7cedfd12b&query=${
          this.props.search
        }`
      )
      .then(response => {
        const movies = [];
        for (var i = 0; i < 10; i++) {
          movies.push(response.data.results[i].title);
        }
        this.setState({ b: movies, dropdown: true });
      })
      .catch(error => this.setState({ dropdown: false }));}
  }

  render() {
    let list;
    let movie = this.state.b;

    const newmovie = movie.filter(
      k => k.toUpperCase().indexOf(this.props.search.toUpperCase()) === 0
    );

    if (this.props.search === "" || this.state.dropdown === false || this.props.dropdown === false) {
      list = "";
    } else {
      list = newmovie.map((i, index) => (
        <li key={index} onClick={() => this.props.handleDrop(i)}>
          {i}
        </li>
      ));
    }

    return <div className="dropdown">{list}</div>;
  }
}

export default Dropdown;
