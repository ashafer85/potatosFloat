import React from 'react';

import { Link } from 'react-router-dom';

const IndexItem = ({ spot }) => (
  <li className="spotsIndexItem">
    <Link to={`/spots/${spot.id}`} >
      <div className='spotsInItPicture'> pic </div>/div>
      <div className='spotsInItTitle'>{spot.title}</div>
      <div className='spotsInItDesc'>{spot.description}</div>
    </Link>
  </li>
);

export default IndexItem;
