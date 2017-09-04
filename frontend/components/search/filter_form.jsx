import React from 'react';


const FilterForm = ( stuff ) => {
  const handleChange = (filter) => e => {

    return(
      stuff.updateFilter(filter, e.currentTarget.value)
    );
  };

  return (
  <div className='filterFull'>
      <div className='filterContainer'>
          <div className="filterTitle">Search Filters:</div>
          <div className='tempRefreshToClearFilters'>
            (Refresh page to clear filters)
          </div>
          <form className='spotSearchForm'>
              <div className='searchItem'>
                  <label className='searchLabel'> # of Travelers</label>
                  <select
                      className='selectFilter'
                      type='integer'
                      defaultValue='1'
                      value={stuff.capacity}
                      onChange={handleChange('capacity')}>
                      <option value='Any'>Any</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                  </select>
              </div>
              <div className='searchItem'>
                  <label className='searchLabel'> Sleeping Option</label>
                  <select
                      className='selectFilter'
                      type='string'
                      value={stuff.sleep_option}
                      onChange={handleChange('sleep_option')}>
                      <option value='Public Room'>Public Room</option>
                      <option value='Private Room'>Private Room</option>
                      <option value='Shared Room'>Shared Room</option>
                      <option value='Shared Bed'>Shared Bed</option>
                  </select>
              </div>

              <div className='spotsSearchButtons'>
                  <input className='submitSearch' type='submit' value=''/>
              </div>
          </form>
      </div>
  </div>);
};

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
