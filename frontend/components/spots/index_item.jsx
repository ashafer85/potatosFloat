import React from 'react';

import { Link } from 'react-router-dom';

const IndexItem = ({ spot }) => {
  debugger
  return(
    <li className="spotsIndexItem">
        <div className='spotsIdxItemPic'> pic </div>
        <div className='spotsIdxItemTitle'>{spot.title}</div>
        <div className='spotsIdxItemtDesc'>{spot.description}</div>
        <Link to={`api/spots/${spot.id}`} >
      </Link>
    </li>
  );
};

export default IndexItem;
