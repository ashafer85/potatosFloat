import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return(
      <ul>
        <li>Item1</li>
        <li>Item2</li>
      </ul>
    );
  }

}

export default NavBar;
