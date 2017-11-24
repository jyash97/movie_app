import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo.svg';

class Navbar extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const val = this.refs.name.value;
    //using changed setSearch function
    this.props.setSearch(val);
  }

  render() {
    let display;
    const link = {
      color: 'white',
      textDecoration: 'none',
      float: 'right',
      padding: '5px',
    };
    if (!this.props.showsearch)
      display = (
        <Link style={link} to="/movie">
          Browse
        </Link>
      );
    else {
      display = (
        <div className="in">
          <input
            type="text"
            ref="name"
            value={this.props.search}
            placeholder="Search"
            onChange={e => this.props.handleChange(e)}
          />
          <button onClick={this.handleClick}>Search</button>
        </div>
      );
    }
    return (
      <div className="nav">
        <Link to="/">
          <img src={Logo} alt="TMDB" />
        </Link>
        {display}
      </div>
    );
  }
}

export default Navbar;
