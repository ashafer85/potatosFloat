import React from 'react';
import updateFilter from '../../actions/filter_actions';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ( stuff ) => (
  <div>
      <div className="filterTitle">Apply Filters:</div>
      <form className='spotSearchForm'>
          <label className='searchLabel'> # of Travelers
              <select
                  className='selectNumGuests'
                  type='integer'
                  defaultValue='1'
                  value={stuff.capacity}
                  onChange={handleChange('capacity', updateFilter)}>
                  <option value='Any'>Any</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
              </select>
          </label>

          <label className='searchLabel'> Sleeping Option
              <select className='selectNumGuests' type='integer' defaultValue='1'
                  className='selectNumGuests'
                  type='string'
                  defaultValue='Public Room'
                  value={stuff.sleep_option}
                  onChange={handleChange('sleep_option', updateFilter)}>
                  <option value='Public Room'>Public Room</option>
                  <option value='Private Room'>Private Room</option>
                  <option value='Shared Room'>Shared Room</option>
                  <option value='Shared Bed'>Shared Bed</option>
              </select>
          </label>

          <div className='spotsSearchButtons'>
              <div className='clearSearchFilters' > Clear Filters </div>
              <input className='submitSearch' type='submit' value='Search'/>
          </div>
      </form>
  </div>
);

export default FilterForm;




  //
  //
  //
  //     <div className='boundaryDates'>
  //       <div className='date'>
  //         <label> ARRIVE </label>
  //         <input
  //           type='dateTime'
  //           className='spotDate arrival'
  //           data-datepicker="true"
  //           placeholder='yy/mm/dd'/>
  //       </div>
  //       <div className='date'>
  //         <label> DEPART </label>
  //         <input
  //           type='dateTime'
  //           className='spotDate departure' placeholder='yy/mm/dd'/>
  //       </div>
  //     </div>
  //
  //     <div className='moreFilters'>
  //       <main className='linkToMoreFilters'>
  //         <i className="fa fa-filter" aria-hidden="true"></i>
  //         <tag> More Filters </tag>
  //       </main>
  //     </div>
  //
  //
  //   <label>Minimum Seats</label>
  //   <input
  //     type="number"
  //     value={minSeating}
  //     onChange={handleChange('minSeating', updateFilter)}
  //   />
  //    <br/>
  //   <label>Maximum Seats</label>
  //   <input
  //     type="number"
  //     value={maxSeating}
  //     onChange={handleChange('maxSeating', updateFilter)}
  //   />
  // </div>
