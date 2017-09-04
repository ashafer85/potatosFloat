import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { requestOneSpot } from '../../actions/spots_actions';
// import SpotDetail from './'
import BookingFormContainer from '../bookings/booking_form_container';

class SpotShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOneSpot(this.props.match.params.id);
  }

  render() {
    const shownSpotId = this.props.match.params.id;

    // let kids_str;
    // if (this.props.spot.kid === false) { kids_str = 'No' } else { kids_str = 'Yes' };
    // let pets_str;
    // if (this.props.spot.pet === false) { pets_str = 'No' } else { pets_str = 'Yes' };
    // let smoking_str;
    // if (this.props.spot.smoking === false) { smoking_str = 'No' } else { smoking_str = 'Yes' };
    // let wheelchair_str;
    // if (this.props.spot.wheelchair === false) { wheelchair_str = 'No' } else { wheelchair_str = 'Yes' };
    return(

      <div className='spotShowContainer'>
          <div className='spotShowHeader'>
              <div className='spotPic'>
                  <div className='editPic'></div>
              </div>
              <div className='showTitleContainer'>
                  <h2 className='showTitle'> { this.props.spot.title } </h2>
                  <div className='showBooking'>
                    <BookingFormContainer spotId={shownSpotId} />
                  </div>
              </div>
          </div>
          <ul className='spotShowDetailContainer'>
              <div className='spotDetailHeader'>
                  <div className='spotDesc'>{this.props.spot.description}</div>
              </div>
              <div className='spotDetailBody'>
                  <ul className='spotDetailList'>
                    <li>City: {this.props.spot.city}</li>
                    <li>Capacity: {this.props.spot.capacity}</li>
                    <li>Sleep Option: {this.props.spot.sleep_option}</li>
                    <li>lat: {this.props.spot.lat}</li>
                    <li>lng: {this.props.spot.lng}</li>
                  </ul>
              </div>
          </ul>
      </div>
    );
  }

}

export default SpotShow;
// <SpotDetail spot={ this.props.spot } />

// <div className='spotDetailHeaderTitle'>{ this.props.spot.title }   details:</div>
// <li>Sleeping Arrangement: {this.props.spot.sleep_arrangement}</li>
// <li>Roommate Situation: {this.props.spot.roommate_situation}</li>
// <li>Public Transportation:{this.props.spot.public_trans}</li>
// <li>Kids Allowed: {kids_str}</li>
// <li>Pets Allowed:{pets_str}</li>
// <li>Smoking Allowed: {smoking_str}</li>
// <li>Wheelchair Acessible: {wheelchair_str}</li>

// <li>Host identification #: {this.props.spot.host_id}</li>
