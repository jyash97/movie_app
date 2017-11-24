import React from "react";

class MovieDesc extends React.Component {
  render() {
    const bar = this.props.vote_average * 10;
    const style = {
      width: `${bar}%`,
      padding: "3px"
    };
    return (
      <div className="movie">
        <img
          src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`}
          alt={this.props.original_title}
        />
        <div className="bottom">
          <h1 className="title">{this.props.title}</h1>
          <h2 className="date">{this.props.release_date}</h2>
          <div className="progress">
            <div className="bar" style={style} />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDesc;
