import { connect } from 'react-redux';
import { requestOneSpot } from '../../actions/spots_actions';
import { selectOneSpot } from '../../reducers/selectors';
import SpotShow from './show';

const mapStateToProps = (state, ownProps) => {
    return {
      spot: state.spots[ownProps.match.params.id] || {}

    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestOneSpot: (id) => dispatch(requestOneSpot(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow)
