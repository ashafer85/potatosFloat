import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { enhanceWithClickOutside } from 'react-click-outside';

class UserDrop extends React.Component {

  constructor(props) {
    super(props);
    debugger
  }

  render() {
    debugger
    return(
      <div className='userDrop' >
        <ul className='userDroplist'>
          <li className='userDropListItemFirst'>Find Spots</li>
          <Link className='linkToSpotsIndex' to='/api/spots'> See Spots</Link>
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
