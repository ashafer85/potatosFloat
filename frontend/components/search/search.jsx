import React from 'react';

import FilterForm from './filter_form';
import SpotSearchIndex from './spot_search_index';

const Search = ( { spots, capacity, sleepOption } ) => (
  <div className="spotSearchContainer">
      <FilterForm
          capacity={capacity}
          sleepOption={sleepOption}
      />
      <SpotSearchIndex spots={spots} />
  </div>
);

export default Search;
// 40.747967
// -73.975812
