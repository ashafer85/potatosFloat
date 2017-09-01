import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { enhanceWithClickOutside } from 'react-click-outside';

class UserDrop extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let mySpotPath;
    if (this.props.currentUser.spot) {
      mySpotPath = <Link className='linkToMySpot' to={`/spots/${this.props.currentUser.spot.id}`}> My Spot </Link>
    } else {
      mySpotPath =  <Link className='linkToMySpot' to='/spots_new'> My Spot </Link>
    }
    return(
      <div className='userDrop' >
          <ul className='userDropList'>
              <li className='listItemFirst'>
                  <Link className='linkToSearch' to='/spots_search'> Search Spots </Link>
              </li>
              <li className='listItem'>
                  <Link className='linkToSpots' to='/spots'> See Spots </Link>
              </li>
              <li className='listItem'>
                  { mySpotPath }
              </li>
              <li className='listItemLast'>
                  <button onClick={this.props.logout}>Log Out</button>
              </li>
          </ul>
      </div>
    );
  }

}

export default UserDrop;
