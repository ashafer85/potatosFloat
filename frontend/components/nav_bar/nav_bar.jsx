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
    if (this.props.currentUser === null) {
      return(
        <div className='navBar'>
          <div className='logo'>potatosfloat</div>
          <div className='auth'>
            <li className='join'>
              <Link to='/signup'> Join </Link>
            </li>
            <li className='login'>
              <Link to='/login'> Log In </Link>
            </li>
          </div>
        </div>
      );
    } else {
      return(
        <div className='navBar'>
          <div className='logo'>potatosfloat</div>
          <ul className='auth'>
            <li className='join'>Hello {this.props.currentUser.username}</li>
            <li className='logout'>
              <button onClick={ this.props.logout }> Log Out </button>
            </li>
          </ul>
        </div>
      );
    }

  }

}

export default NavBar;
