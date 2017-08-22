import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render () {
    return(
      <div className='navBar'>
        <div className='logo'>potatosfloat</div>
        <ul className='auth'>
          <li className='join'>Join</li>
          <li className='login'>Log In</li>
        </ul>
      </div>
    );
  }

}

export default NavBar;
