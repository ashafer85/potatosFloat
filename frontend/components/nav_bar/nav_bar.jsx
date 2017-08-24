import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import UserDrop from './user_drop';

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
            <li onClick>
              <img alt="Menu" className="person" src="https://tcdn.couchsurfing.com/_BA5QbwEuOVerKa3--MgMnk3Guw=/40x40/smart/https://ht-cdn.couchsurfing.com/assets/profile-picture-placeholder.png" title="Menu" />
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default NavBar;
