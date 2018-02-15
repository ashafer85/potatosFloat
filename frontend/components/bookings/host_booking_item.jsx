import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const HostBookingItem = ( {booking, approve, deny}) => {
  let one_day=1000*60*60*24;
  let end_date_ms = new Date(booking.end_date).getTime();
  let start_date_ms = new Date(booking.start_date).getTime();
  let bookingLength = Math.round( (end_date_ms - start_date_ms) / one_day );

  return(
    <li className='bookingItem'>
      <div className='bInfo'>
        <div className='bStatus'> { booking.status } </div>
        <div className='bDays'> {bookingLength}-day guest</div>
      </div>
      <div className='bookingDate'> { booking.start_date } </div>
      <div className='bookingDate'> { booking.end_date } </div>

      <button className='statusUpdate yes' onClick={ () => approve(booking) }> Approve </button>
      <button className='statusUpdate no' onClick={ () => deny(booking) }> Deny </button>

      <div className='bSurfer'> { booking.surfer_id } </div>

    </li>
  );
};

export default HostBookingItem;
