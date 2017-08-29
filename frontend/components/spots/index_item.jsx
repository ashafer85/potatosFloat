import React from 'react';

import { Link } from 'react-router-dom';

const IndexItem = ({ spot }) => {
  return(
    <li className="spotsIndexItem">
      <main className='spotsIdxItemHeader'>
        <div className='spotsIdxItemPic'> pic </div>
        <div className='spotsIdxItemHeaderContent'>
          <div className='spotsIdxItemTitle'>{spot.title}
            <i className="fa fa-check-circle" aria-hidden="true"></i>
          </div>
          <div className='spotsIdxItemLinkToReviews'> Reviews </div>
        </div>
      </main>
      <div className='spotsIdxItemtDesc'>{spot.description}</div>
      <Link to={`api/spots/${spot.id}`}> details </Link>
    </li>
  );
};

export default IndexItem;
