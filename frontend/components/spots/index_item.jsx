import React from 'react';

import { Link } from 'react-router-dom';

const IndexItem = ({ spot }) => {
  return(
    <li className="spotsIndexItem">
        <main className='spotsIdxItemHeader'>
            <div className='spotsIdxItemPic'></div>
            <div className='spotsIdxItemHeaderContent'>
                <div className='spotsIdxItemTitle'>
                  <div className='spotTitle'>{spot.title}</div>
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                </div>
            </div>
        </main>
        <div className='spotsIdxItemDesc'>{spot.description}</div>
        <div className='moreDetails'>
          <Link className='spotsIdxItemMore' to={`/spots/${spot.id}`}> more details </Link>
        </div>
    </li>
  );
};

export default IndexItem;

// <div className='spotsIdxItemLinkToReviews'> Reviews </div>
// <div className='editPic'>eDit</div>
