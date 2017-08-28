
import { connect } from 'react-redux';
import { requestAllSpots } from '../../actions/spots_actions';
import SpotsIndex from './index';

const mapStateToProps = (state) => {
  return {
    spots: state.spots
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllSpots: () => dispatch(requestAllSpots())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotsIndex);
