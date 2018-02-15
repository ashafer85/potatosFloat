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
      gender: '',
      age: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
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

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login({username: 'Guest', password: 'password'}).then( () => {
      this.props.clearErrors();
      this.props.history.push('/');
    });
  }

  render () {
    let allErrors;
    if (this.props.errors && this.props.errors.length !== 0) {
      allErrors =
        <ul className='authErrors'>
          { this.props.errors.map((el, idx) => {
            return(
              <li key={idx}>
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                {el}
              </li>
            )
          }
        )}
      </ul>;
    }

    let switchAuthForm;
    let authFormTitle;
    let submitThis;
    let joinInputs;
    if (this.props.formType === '/login') {
      authFormTitle = 'Log in to PotatosFloat';
      submitThis = 'Log In';
      joinInputs = <div></div>;
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
      joinInputs =
        <div className='joinInputContainer'>
          <select className='authFormInput'
            type='string'
            name='gender'
            value={this.state.gender}
            defaultValue='Gender'
            onChange={this.handleChange}>
            <option value='Gender'>Gender</option>
            <option value='Female'>Female</option>
            <option value='Male'>Male</option>
            <option value='Non-Binary'>Non-Binary</option>
          </select>
          <input className='authFormInput'
            type='integer'
            name='age'
            value={this.state.age}
            placeholder='Age (in years)'
            onChange={this.handleChange} />
        </div>;
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
                { allErrors }
            <form className='authForm' onSubmit={this.handleSubmit}>
                { joinInputs }
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
                <button className='guest authFormSubmit' onClick={this.handleGuestLogin}>GUEST/DEMO LOGIN</button>
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
