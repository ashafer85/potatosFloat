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
    let authFormTitle;
    let submitThis;
    if (this.props.formType === '/login') {
      authFormTitle = 'Log in to PotatosFloat';
      submitThis = 'Log In';
      switchAuthForm =
        <ul className='switchAuthForm'>
          <li className='authFormOption'>Don't have an account?</li>
          <li className='authFormSwitchItem'>
            <Link to='/signup' className='authFormSwitchLink'> Join Now </Link>
          </li>
        </ul>;
    } else {
      authFormTitle = 'Join PotatosFloat for free';
      submitThis = 'Join with Username';
      switchAuthForm =
        <ul className='switchAuthForm'>
          <li className='authFormOption'>Already a member?</li>
          <li className='authFormSwitchItem'>
            <Link to='/login' className='authFormSwitchLink'> Log In </Link>
          </li>
        </ul>;
    }

    return(
      <div className='authFull'>
        <div className='authFormContainer'>
          <div className='authFormHeading'>
            <div className='title'>{authFormTitle}</div>
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
                value={submitThis}/>
          </form>
          { switchAuthForm }
        </div>
        <Link className='authExitTop' to='/'></Link>
        <Link className='authExitRight' to='/'></Link>
        <Link className='authExitBottom' to='/'></Link>
        <Link className='authExitLeft' to='/'></Link>
      </div>
    );
  }

}


export default AuthForm;
