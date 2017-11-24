import React from "react";

class Dropdown extends React.Component {
  render() {
    let list;
    let movie = this.props.movie;

    const newmovie = movie.filter(
      k => k.toUpperCase().indexOf(this.props.search.toUpperCase()) === 0
    );

    if (this.props.search === "" || newmovie.length === 1) {
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
