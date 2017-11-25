import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from "./Dropdown"

import Logo from './logo.svg';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state={
      searchterm:''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const val = this.refs.name.value;
    this.props.setSearch(val);
  }

  handleChange(e){
    e.preventDefault();
    this.setState(
      {
        searchterm: e.target.value
      },
      () => {
        return this.state.searchterm;
      }
    );
  }

  handleDrop(movie) {
    this.setState({
      searchterm: movie
    });
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
            value={this.state.searchterm}
            placeholder="Search"
            onChange={e => this.handleChange(e)}
          />
          <button onClick={this.handleClick}>Search</button>
          <Dropdown
            handleDrop={this.handleDrop}
            dropdown={this.state.dropdown}
            search={this.state.searchterm}
          />
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
