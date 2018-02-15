import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { merge } from 'lodash';
import HostBookingItem from './host_booking_item';
import SurferBookingItem from './surfer_booking_item';

class MyBookings extends React.Component {

  constructor(props) {
    super(props);
    this.approveBooking = this.approveBooking.bind(this);
    this.denyBooking = this.denyBooking.bind(this);
  }

  componentDidMount() {
    if (this.props.current_user.spot) {
      this.props.requestHostBookings(this.props.current_user.spot);
      this.props.requestSurferBookings(this.props.current_user);
    }
  }


  // Booking Status: PENDING APPROVED DENIED
  approveBooking(booking) {
    booking.status = 'APPROVED';
    this.props.requestUpdateHostBooking(booking);
  }

  denyBooking(booking) {
    booking.status = 'DENIED';
    this.props.requestUpdateHostBooking(booking);
  }

  editSurferBookingStartDate(booking) {
    booking.startDate;
    this.props.requestUpdateSurferBooking(booking);
  }
  editSurferBookingEndDate(booking) {
    booking.end_date;
    this.props.requestUpdateSurferBooking(booking);
  }

  deleteSurferBooking(booking) {
    this.props.requestDeleteSurferBooking(booking);
  }


  render() {
    let allHostBookings;

    if (this.props.hostBookings) {
      allHostBookings = Object.values(this.props.hostBookings).map( (booking) => {
        if(booking.id === undefined) {
          return undefined;
        } else {
          return booking;
        }
      })
      allHostBookings = allHostBookings.filter((el) => {
        return el !== undefined;
      });

    } else {
      allHostBookings = [];
    }

    const hostBookingItems = allHostBookings.map( (booking) => {
      return (
        <HostBookingItem
          booking = { booking }
          approve = { this.approveBooking }
          deny = { this.denyBooking }
          key = { booking.id } />
      );
    })

    // const surferBookingItems = "surferBookings coming soon";
    let allSurferBookings;

    if (this.props.surferBookings) {
      allSurferBookings = Object.values(this.props.surferBookings).map( (booking) => {
        if(booking.id === undefined) {
          return undefined;
        } else {
          return booking;
        }
      })
      allSurferBookings = allSurferBookings.filter((el) => {
        return el !== undefined;
      });

    } else {
      allSurferBookings = [];
    }

    const surferBookingItems = allSurferBookings.map( (booking) => {
      return (
        <SurferBookingItem
          booking = { booking }
          key = { booking.id } />
      );
    })

    return(
      <div className='bookingsContainer'>
          <h1> Host Bookings </h1>
          <ul className='myBookingsContainer'>
            { hostBookingItems }
          </ul>

          <h1> Surfer Bookings </h1>
          <ul className='myBookingsContainer'>
            { surferBookingItems }
          </ul>
      </div>
    )
  }
}

export default MyBookings;
