 import { connect } from 'react-redux';
import { updateFilter, searchSpots } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  spots: asArray(state),
  capacity: state.filters.capacity,
  sleepOption: state.filters.sleep_option
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  searchSpots: (filters) => dispatch(searchSpots(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
