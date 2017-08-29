import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { requestOneSpot } from '../../actions/spots_actions';
import SpotDetail from './'

class SpotShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOneSpot(this.props.match.params.id);
  }

  render() {
    const shownSpot = this.props.spot;
    
    return(

      <div className='spotShowContainer'>
        <div className='backToIndexContainer'>
            back2SpotsIndex
        </div>

        <div className='spotShowHeader'>
            <div className='spotPic'>
                <div className='editPic'>eDit</div>
            </div>
            <div className='showTitleContainer'>
                <h2 className='showTitle'> { shownSpot.title } </h2>
                <span className='showTitleContent'></span>
                <div className='editTitle'>eDit</div>
            </div>
        </div>

        <ul className='spotShowDetailContainer'>
            <div className='spotDetailHeader'>
                <div className='spotDetailHeaderTitle'>{ shownSpot.title }   details:</div>
            </div>
            <div className='spotDetailBody'>
                <ul>
                  <li> shownSpot.spot_image_url should come into play eventually</li>
                  <li>Description: {shownSpot.description}</li>
                  <li>City: {shownSpot.city}</li>
                  <li>Capacity: {shownSpot.capacity}</li>
                  <li>lat: {shownSpot.lat}</li>
                  <li>lng: {shownSpot.lng}</li>
                  <li>Sleeping Arrangement: {shownSpot.sleep_arrangement}</li>
                  <li>Roommate Situation: {shownSpot.roommate_situation}</li>
                  <li>Public Transportation:{shownSpot.public_trans}</li>
                  <li>Kids Allowed: {shownSpot.kid}</li>
                  <li>Pets Allowed:{shownSpot.pet}</li>
                  <li>Smoking Allowed: {shownSpot.smoking}</li>
                  <li>Wheelchair Acessible: {shownSpot.wheelchair}</li>
                  <li>Host identification #: {shownSpot.host_id}</li>
                </ul>
            </div>
        </ul>

        <div className='spotShowFooter'>
            FOOTER
        </div>

      </div>
    );
  }

}

export default SpotShow;
// <SpotDetail spot={ shownSpot } />
