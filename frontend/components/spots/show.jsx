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
    debugger
    return(

      <div className='spotShowContainer'>
        <div className='backToIndexContainer'>
            back2Spots
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
                <div className='spotDetailHeaderTitle'>{ shownSpot.title } '  details:'</div>
            </div>
            <div className='spotDetailBody'>
                <div>BODY</div>
            </div>
        </ul>
        {this.props.spot.description}

        <div className='spotShowFooter'>
            FOOTER
        </div>

      </div>
    );
  }

}

export default SpotShow;
// <SpotDetail spot={ shownSpot } />
