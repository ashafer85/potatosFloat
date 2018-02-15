import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { merge } from 'lodash';
import { processForm, clearErrors } from '../../actions/bookings_actions';

class BookingForm extends React.Component {

  constructor(props, ownProps) {
    super(props);
    this.state = {
      start_date: '',
      end_date: '',
      spot_id: this.props.spotId,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  update(property) {
    return(
      (e) => this.setState({
        [property]: e.target.value
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const booking = merge({}, this.state);
    // processForm returns a promise... thus qualifying the .then
    this.props.processForm(booking).then( () => {
      this.props.clearErrors();
      // this.props.history.push(`/spots/${this.state.spot_id}`);
    });
  }

  render() {
    let bookingFormErrors;
    if (this.props.errors && this.props.errors.length !== 0) {
      bookingFormErrors =
        <ul className='bookingFormErrors'>
          {this.props.errors.map((el, idx) => {
            return(
              <li key={idx}>
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                {el}
              </li>
            )
          })}
        </ul>;
    }

    return(
      <div className='bookingFormContainer'>
          <h2> Book This Spot: </h2>
            { bookingFormErrors }
          <form className='bookingForm' onSubmit={this.handleSubmit}>
              <div className='bookingDateRange'>
                  <div className='bookingDate'>
                      <label className='bookingLabel'>Start date</label>
                      <input
                        type='date'
                        value={this.state.start_date}
                        onChange={this.update('start_date')}
                        className="bookingField"
                        />
                  </div>
                  <div className='bookingDate'>
                      <label className='bookingLabel'>End date</label>
                      <input
                        type='date'
                        value={this.state.end_date}
                        onChange={this.update('end_date')}
                        className="bookingField"
                        />
                  </div>
              </div>

              <div className='bookingSubmit'>
                <input
                  type='submit'
                  value='Request Booking'
                  className='bookingFormSubmit'
                  />
              </div>
          </form>
      </div>
    );
  }
}

export default BookingForm;
