import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import UserDrop from './user_drop';
import LandingPage from '../landing_page/landing_page';
// import { swithcUserDropStatus } from '../../actions/ui_actions';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleDropChange = this.handleDropChange.bind(this)
  }

  handleDropChange() {
    this.props.switchUserDropStatus(this.props.userDropStatus)
  }

  render () {
    let dropIt;
    if (this.props.userDropStatus === false) {
      dropIt = null;
    } else {
      dropIt = <UserDrop logout={this.props.logout}/>;
    }

    if (this.props.currentUser === null) {
      return(
        <main>
          <div className='navBar'>
            <div className='logo'>potatosfloat</div>

            <div className='auth'>
              <Link className='joinLink' to='/signup'> Join </Link>
              <Link className='loginLink' to='/login'> Log In </Link>
            </div>
          </div>
          <LandingPage />
        </main>
      );
    } else {
      return(
        <div className='navBar'>

          <div className='logo'>potatosfloat</div>

          <ul className='userNav'>
            <li className='navGreeting'>Aloha_ {this.props.currentUser.username}</li>
            <li onClick={this.handleDropChange}>
              <img alt="Menu"
                className="person"
                src="https://tcdn.couchsurfing.com/_BA5QbwEuOVerKa3--MgMnk3Guw=/40x40/smart/https://ht-cdn.couchsurfing.com/assets/profile-picture-placeholder.png"
                title="Menu" />
            </li>
          </ul>
          { dropIt }
        </div>
      );
    }
  }
}

export default NavBar;
