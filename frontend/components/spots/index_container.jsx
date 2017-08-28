
import { connect } from 'react-redux';
import { requestAllSpots } from '../../actions/spots_actions';
import { selectAllSpots } from '../../reducers/selectors';
import SpotsIndex from './index';

const mapStateToProps = (state) => {
  debugger
  return {
    spots: selectAllSpots(state)
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
