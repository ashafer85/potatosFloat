import React from 'react';
import ReactDOM from 'react-dom';
import FilterForm from './filter_form';
import SpotSearchIndex from './spot_search_index';

// const Search = ( { spots, capacity, sleepOption } ) => (

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spots: '',
      capacity: '',
      sleep_option: ''
    }
  }

  componentWillReceiveProps(newProps) {
    let searchFilters;
    if (this.props.capacity !== newProps.capacity) {
      searchFilters = { 'capacity': newProps.capacity, 'sleep_option': this.props.sleepOption};
      this.props.searchSpots(searchFilters);
    } else if (this.props.sleepOption !== newProps.sleepOption) {
      searchFilters = { 'capacity': this.props.capacity, 'sleep_option': newProps.sleepOption};
      this.props.searchSpots(searchFilters)
    }
  }

  render() {
    return(
      <div className="spotSearchContainer">
        <FilterForm
          updateFilter={this.props.updateFilter}
          capacity={this.state.capacity}
          sleepOption={this.state.sleep_option}
          />
      </div>
    );
  }

}

export default Search;
