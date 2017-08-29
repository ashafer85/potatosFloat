import React from 'react';
import { Link } from 'react-router-dom';

const SpotDetail = ({ spot }) => {
  return(
    <li className="spotsIndexItem">
      <main className='spotsIdxItemHeader'>
        <div className='spotsIdxItemPic'>
          <div className='editPic'>eDit</div>
        </div>
        <div className='spotsIdxItemHeaderContent'>
          <div className='spotsIdxItemTitle'>{spot.title}
            <i className="fa fa-check-circle" aria-hidden="true"></i>
          </div>
          <div className='spotsIdxItemLinkToReviews'> Reviews </div>
        </div>
      </main>
      <div className='spotsIdxItemtDesc'>{spot.description}</div>
      <Link to={`/spots/${spot.id}`}> details </Link>
    </li>
  );
};

export default SpotDetail;
