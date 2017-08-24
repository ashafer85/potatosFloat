import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class UserDrop extends React.Component {

  constructor() {
    super(props);
  }

  render() {

    return(
      <div className='userDrop'>
        <ul className='userDroplist'>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
          <li>
            <Link to='/logout'>Log Out</Link>
          </li>
        </ul>
      </div>
    );
  }

}
