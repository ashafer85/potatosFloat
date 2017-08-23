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

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user).then( () => {
      this.props.history.push('/');
    });
  }

  handleChange(e) {
    this.state[e.target.name] = e.target.value;
    this.setState(this.state);
  }

  render () {
    return(
      <div className='authFull'>
        <div className='authFormContainer'>
          <div className='authFormHeading'>
            <div className='title'>Join PotatosFloat for free</div>
            <Link to='/' className='exit'>
              <i className="fa fa-times" aria-hidden='true'>
              </i>
            </Link>
          </div>
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
        </div>
      </div>
    );
  }

}


export default AuthForm;
