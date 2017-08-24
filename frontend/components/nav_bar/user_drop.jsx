import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class UserDrop extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className='userDrop'>
        <ul className='userDroplist'>
          <li className='userDropListItemFirst'>Find Spots</li>
          <li>See Spots</li>
          <li>See Hosts</li>
          <li className='bonusUserDrop'>(maybe messages)</li>
          <li className='userDropListItemLast'>
            <button onClick={this.props.logout}>Log Out</button>
          </li>
        </ul>
      </div>
    );
  }

}

export default UserDrop;
