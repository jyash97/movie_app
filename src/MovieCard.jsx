import React from "react";
import styled from "styled-components";

class MovieCard extends React.Component {
  render() {
    const Wrapper = styled.div`
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
      background-image: linear-gradient(
          rgba(255, 255, 255, 0.25),
          rgba(255, 255, 255, 0.3)
        ),
        url(${`https://image.tmdb.org/t/p/w1280${this.props.backdrop_path}`});
    `;

    const Container = styled.div`
      width: 52%;
      margin: 20vw auto;
      padding: 15px;
      border-left: 7px solid #01d277;
      overflow: hidden;
      background-image: linear-gradient(
        to bottom,
        rgba(8, 28, 36, 0.55),
        rgba(8, 28, 36, 0.45)
      );
    `;

    const Left = styled.div`
      width: 20%;
      float: left;
    `;

    const Right = styled.div`
      width: 80%;
      box-sizing: border-box;
      padding: 10px;
      float: right;
    `;

    const bar = this.props.vote_average * 10;
    const style = {
      width: `${bar}%`,
      padding: "3px"
    };

    let msg;
    let image = "https://image.tmdb.org/t/p/w500" + this.props.poster_path;
    if (this.props.title) {
      msg = (
        <Container>
          <Left>
            <img src={image} alt={this.props.original_title} />
          </Left>
          <Right>
            <h1 className="title-m">{this.props.title}</h1>
            <h2 className="date-m">{this.props.release_date}</h2>
            <p className="overview-m">{this.props.overview}</p>
            <div className="progress">
              <div className="bar" style={style} />
            </div>
          </Right>
        </Container>
      );
    } else {
      msg = <h1>Try again later</h1>;
    }

    return <Wrapper>{msg}</Wrapper>;
  }
}

export default MovieCard;
