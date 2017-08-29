import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { enhanceWithClickOutside } from 'react-click-outside';

class UserDrop extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='userDrop' >
        <ul className='userDropList'>
          <li className='listItemFirst'>Find Spots</li>
          <li className='listItem'>
            <Link className='linkToSpots' to='/spots'> See Spots</Link>
          </li>
          <li className='listItemHosts'>See Hosts</li>
          <li className='bonusUserDrop'>(maybe messages)</li>
          <li className='listItemLast'>
            <button onClick={this.props.logout}>Log Out</button>
          </li>
        </ul>
      </div>
    );
  }

}

export default UserDrop;
