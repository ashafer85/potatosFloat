import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { merge } from 'lodash';
import { processForm } from '../../actions/spots_actions';

class SpotForm extends React.Component {

  constructor(props, ownProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
      capacity: '',
      city: '',
      lat: '',
      lng: '',
      sleep_option: '',
      host_id: '',
      // sleep_arrangement: '',
      // roommate_situation: '',
      // public_trans: '',
      // kid: false,
      // pet: false,
      // smoking: false,
      // wheelchair: false,
      // spot_image_url: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    const spot = merge({}, this.state);

    // processForm returns a promise... thus qualifying the .then
    this.props.processForm(spot).then(
      () => {
        this.props.clearErrors();
        // this.props.history.push(`/spots/${this.state.spot_id}`);
      });
      // ,
      //  () => {
      //
      // });
  }
  componentWillReceiveProps(newProps) {
    if (newProps.currentUser.spot) {
    newProps.history.push(`/spots/${newProps.currentUser.spot.id}`)
    }
  }

  render () {
    let allErrors;
    if (this.props.errors.length != 0) {
      allErrors = this.props.errors.map((el, idx) => {
        return(
          <li key={idx}> <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> {el} </li>
        )
      });
    }
    return(
      <div className='spotFormFull'>
          <div className='spotFormContainer'>
            <h2> You Don't Have a Spot Yet! </h2>
            <h2> Create Your's Now: </h2>
            <ul className='errors'>
              {allErrors}
            </ul>
            <form className='spotForm' onSubmit={this.handleSubmit}>
                <div className='spotFormInput'>
                    <label className='spotLabel'>Title:</label>
                    <input
                        type='string'
                        value={this.state.title}
                        placeholder='Title'
                        onChange={this.update('title')}
                        className="spotField"
                    />
                </div>

                <div className='spotFormInput'>
                    <label className='spotLabel'>Description:</label>
                    <input
                        type='text'
                        value={this.state.description}
                        placeholder= 'Description'
                        onChange={this.update('description')}
                        className="spotField"
                    />
                </div>
                <div className='spotFormInput'>
                    <label className='spotLabel'> Spot Capacity: </label>
                    <select
                      type='integer'
                      defaultValue='1'
                      onChange={this.update('capacity')}
                      className='spotField'>
                      <option value='1'>1</option>
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
                </div>

                <div className='spotFormInput'>
                    <label className='spotLabel'>City:</label>
                    <input
                        type='string'
                        placeholder='leave set to New York City'
                        value={this.state.city}
                        onChange={this.update('city')}
                        className="spotField"
                    />
                </div>
                <div className='spotFormInput'>
                    <label className='spotLabel'>Spot Latitude:</label>
                    <input
                        type='float'
                        placeholder='40.745269'
                        value={this.state.lat}
                        onChange={this.update('lat')}
                        className="spotField"
                    />
                </div>
                <div className='spotFormInput'>
                    <label className='spotLabel'>Spot Longitude:</label>
                    <input
                        type='float'
                        placeholder='-73.994013'
                        value={this.state.lng}
                        onChange={this.update('lng')}
                        className="spotField"
                    />
                </div>
              // lat lng handling????

                  <div className='spotFormInput'>
                      <label className='spotLabel'>Surfer Sleep Option:</label>
                      <select className='spotField'
                          type='string'
                          name='sleep_option'
                          defaultValue='Public Room'
                          onChange={this.update('sleep_option')}>
                          <option value='Public Room'>Public Room</option>
                          <option value='Shared Room'>Shared Room</option>
                          <option value='Private Room'>Private Room</option>
                          <option value='Shared Bed'>Shared Bed</option>
                      </select>
                  </div>

                  <div className='submitContainer'>
                    <input className='submitSpotForm' type='submit' value='Create Spot'/>
                  </div>
              </form>
        </div>
      </div>
    );
  }
}

export default SpotForm;





// <div>
//   <label className='spotLabel'>Sleeping Arrangement:</label>
//   <input
//     type='text'
//     placeholder='Describe sleeping arrangement'
//     value={this.state.sleep_arrangement}
//     onChange={this.update('sleep_arrangement')}
//     className="spotField"
//     />
// </div>
// <div>
//   <label className='spotLabel'>Roommate Situation:</label>
//   <input
//     type='text'
//     placeholder='Describe roommate situation'
//     value={this.state.roommate_situation}
//     onChange={this.update('roommate_situation')}
//     className="spotField"
//     />
// </div>
// <div>
//   <label className='spotLabel'>Public Transportation:</label>
//   <input
//     type='text'
//     placeholder='Describe nearby public transportation options'
//     value={this.state.public_trans}
//     onChange={this.update('public_trans')}
//     className="spotField"
//     />
// </div>
// <div>
//   <label className='spotLabel'>Allow Kids:</label>
//   <input
//     type='boolean'
//     value={this.state.kid}
//     onChange={this.update('kid')}
//     className="spotField"
//     />
// </div>
// <div>
//   <label className='spotLabel'>Allow Pets:</label>
//   <select
//     type='boolean'
//     value={this.state.pet}
//     onChange={this.update('pet')}
//     className="spotField"
//     defaultValue='false'>
//     <option value='false' > No </option>
//     <option value='true' > Yes </option>
//   </select>
// </div>
// <div>
//   <label className='spotLabel'>Allow Smoking:</label>
//   <input
//     type='boolean'
//     value={this.state.smoking}
//     onChange={this.update('smoking')}
//     className="spotField"
//     />
// </div>
// <div>
//   <label className='spotLabel'>Wheelchair Accessible:</label>
//   <input
//     type='boolean'
//     value={this.state.wheelchair}
//     onChange={this.update('wheelchair')}
//     className="spotField"
//     />
// </div>
