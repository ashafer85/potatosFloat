import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import IndexItem from './index_item';

class SpotsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllSpots();
  }

  render() {
    debugger

    const allSpots = Object.keys(this.props.spots).map(function(key) {
      return this.props.spots[key];
    })

    return(
      <div className='spotsIndexContainer'>
        <h2> Spots: </h2>
        <ul>
          { allSpots.map( (spot) => {
            return (
              <IndexItem
                spot={ spot }
                key={ spot.id } />
            )
          })}
        </ul>
      </div>
    );
  }
};

export default SpotsIndex;
