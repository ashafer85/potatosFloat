import React from 'react';
import ReactDOM from 'react-dom';
import { merge } from 'lodash';

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
    debugger
    const user = merge({}, this.state);
    debugger
    this.props.processForm(user).then( () => {
      this.props.history.push('/');
    });
    debugger
  }

  handleChange(e) {
    this.state[e.target.name] = e.target.value;
    this.setState(this.state);
  }

  render () {
    return(
      <div className='authFormContainer'>
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
    );
  }

}


export default AuthForm;
