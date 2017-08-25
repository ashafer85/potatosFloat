import React from 'react';
import ReactDOM from 'react-dom';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';

class AuthForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    // processForm returns a promise... thus qualifying the .then
    this.props.processForm(user).then( () => {
      this.props.clearErrors();
      this.props.history.push('/');
    });
  }

  handleChange(e) {
    const newState = { [e.target.name]: e.target.value }
    this.setState(newState);
  }

  render () {
    let allErrors = this.props.errors.map((el, idx) => {
      return(
        <li key={idx}> <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> {el} </li>
      )
    });
    let switchAuthForm;
    let topMessage;
    if (this.props.formType === '/login') {
      topMessage = 'Log in to PotatosFloat';
      switchAuthForm =
        <ul className='switchAuthForm'>
          <li>Don't have an account?</li>
          <li>
            <Link to='/signup'> Join Now </Link>
          </li>
        </ul>;
    } else {
      topMessage = 'Join PotatosFloat for free';
      switchAuthForm =
        <ul className='switchAuthForm'>
          <li>Already a member?</li>
          <li>
            <Link to='/login'> Log In </Link>
          </li>
        </ul>;
    }

    return(
      <div className='authFull'>
        <div className='authFormContainer'>
          <div className='authFormHeading'>
            <div className='title'>{topMessage}</div>
            <Link to='/' className='exit'>
              <i className="fa fa-times" aria-hidden='true'>
              </i>
            </Link>
          </div>
          <ul className='authErrors'>
            { allErrors }
          </ul>
          <form className='authForm' onSubmit={this.handleSubmit}>
              <input className='authFormInput'
                type='text'
                name='username'
                value={this.state.username}
                placeholder='Username'
                onChange={this.handleChange}/>
              <input className='authFormInput'
                type='password'
                name='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.handleChange}/>
              <input className='authFormSubmit'
                type='submit'
                value='Join with Username'/>
          </form>
          { switchAuthForm }
        </div>
      </div>
    );
  }

}


export default AuthForm;
