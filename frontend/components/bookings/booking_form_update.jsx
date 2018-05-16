import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { requestUpdateSurferBooking } from '../../actions/bookings_actions';

const BookingFormUpdate = ({booking, update, updateSurferBooking}) => {
  return(
    <form className='bookingFormUpdate' onSubmit={() => updateSurferBooking(booking)}>

        <div className='bookingDate'>
            <label className='bookingLabel'>New Start date</label>
            <input
              type='date'
              value={booking.start_date}
              onChange={update('start_date')}
              className="bookingField"
              />
        </div>
        <div className='bookingDate'>
            <label className='bookingLabel'>New End date</label>
            <input
              type='date'
              value={booking.end_date}
              onChange={update('end_date')}
              className="bookingField"
              />
        </div>

        <div className='bookingSubmit'>
          <input
            type='submit'
            value='Update Booking'
            className='bookingFormSubmit'
            />
        </div>

    </form>

    // <li className='bookingFormUpdate'>
    //   <div className='bookingDate'> { booking.start_date } </div>
    //   <div className='bookingDate'> { booking.end_date } </div>
    //   <button className='sBUpdate' onClick={ () => requestUpdateSurferBooking(booking) }> Update Booking </button>
    // </li>
  );
};

export default BookingFormUpdate;
