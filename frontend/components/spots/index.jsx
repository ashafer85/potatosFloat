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
    const allSpots = Object.keys(this.props.spots).map((key) => {
      return this.props.spots[key];
    })

    return(
      <div className='spotsIndexContainer'>
        <span className='spotsIndexHeader'>

          <h2> Spots in New York: </h2>

          <form className='spotSearchForm'>

            <div className='boundaryDates'>
              <div className='date'>
                <label> ARRIVE </label>
                <input type='dateTime' className='spotDate arrival' placeholder='yy/mm/dd'/>
              </div>
              <div className='date'>
                <label> DEPART </label>
                <input type='dateTime' className='spotDate departure' placeholder='yy/mm/dd'/>
              </div>
            </div>

            <label className='travelerCount'> # OF TRAVELERS
              <input type='integer' className='' placeholder='1'/>
            </label>


            <div className='moreFilters'>
              <main className='linkToMoreFilters'>
                <i className="fa fa-filter" aria-hidden="true"></i>
                <tag> More Filters </tag>
              </main>
            </div>

          </form>

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
