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
                <input type='dateTime' className='spotDate arrival' data-datepicker="true" placeholder='yy/mm/dd'/>
              </div>
              <div className='date'>
                <label> DEPART </label>
                <input type='dateTime' className='spotDate departure' placeholder='yy/mm/dd'/>
              </div>
            </div>

            <label className='travelerCount'> # OF TRAVELERS
              <select className='selectNumGuests' type='integer'>
                <option value='Any'>Any</option>
                <option selected='selected' value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
              </select>
            </label>

            <div className='spotsSearchButtons'>
              <div className='clearSearchFilters'> Clear Filters </div>
              <input className='submitSearch' type='submit' value='Search'/> 
            </div>


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


// <input class="mod-host-search mod-big u-text-center hasDatepicker" data-datepicker="true" id="departure_date" name="departure_date" placeholder="yy-mm-dd" readonly="readonly" type="text"/>
