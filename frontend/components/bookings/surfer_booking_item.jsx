import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';
import BookingFormUpdate from './booking_form_update';

class SurferBookingItem extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      showUpdateForm: 'no',
      id: this.props.currentBooking.id,
      start_date: this.props.currentBooking.start_date,
      end_date: this.props.currentBooking.end_date
    };
    this.update = this.update.bind(this);
    // this.editDateRange = this.editDateRange.bind(this);
  }

  update(property) {
    return(
      (e) => this.setState({
        [property]: e.target.value
      })
    );
  }

  render() {
    let one_day=1000*60*60*24;
    let end_date_ms = new Date(this.props.currentBooking.end_date).getTime();
    let start_date_ms = new Date(this.props.currentBooking.start_date).getTime();
    let bookingLength = Math.round( (end_date_ms - start_date_ms) / one_day );


    let updateForm;
    if (this.state.showUpdateForm == 'yes') {
      let boostedBooking = this.props.currentBooking;
      boostedBooking.newStart = boostedBooking.start_date;
      boostedBooking.newEnd = boostedBooking.end_date;
      updateForm = <BookingFormUpdate
                      booking={this.state}
                      update = {this.update}
                      updateSurferBooking= {this.props.updateSurferBooking}
                    />
    } else {
      updateForm = <div className='surferBUpdateOptions'>
                    <button className='surferBUpdate'
                      onClick={ () => {this.setState({showUpdateForm: 'yes'})}}>
                        Edit Dates
                    </button>
                    <button className='surferBDestroy'
                      onClick={ () => cancelBooking(this.props.currentBooking)}>
                        Cancel Booking
                    </button>
                  </div>
    }

    return(
      <li className='surferBookingItemContainer'>
          <div className='sBItem'>
              <div className='sBInfo'>
                  <div className='sBDays'> {bookingLength}-day trip </div>
                  <div className='sBStatus'> { this.props.currentBooking.status } </div>
              </div>
              <div className='sBDate'> { this.props.currentBooking.start_date } </div>
              <div className='sBDate'> { this.props.currentBooking.end_date } </div>
              <div className='sBSpot'> {this.props.currentBooking.spot_id} </div>
          </div>

          { updateForm }

      </li>
    )
  }

};

export default SurferBookingItem;
