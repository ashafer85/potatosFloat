import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import IndexItem from './index_item';
import { requestAllSpots } from '../../actions/spots_actions';

class SpotsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllSpots();
  }

  render() {
    debugger
    const allSpots = Object.keys(this.props.spots).map((key) => {
      return this.props.spots[key];
    })

    debugger
    return(
      <div className='spotsIndexContainer'>
        <span className='spotsIndexHeader'>
          <h2> SPOTS: </h2>




        </span>

        <ul className='spotsIndex'>
          { allSpots.map( (spot) => {
            return (
              <IndexItem
                spot={ spot }
                key={ spot.id } />
              );
            })
          }
        </ul>
      </div>
    );
  }
};

export default SpotsIndex;
