import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SpotsIndexItem from './spots_index_item';

const SpotsIndex = ( { spots }) => {

  return(
    <div className='spotsIndexContainer'>
      <h2> Spots: </h2>
      { spots.map( (spot) => {
        return <SpotsIndexItem
      })}
    </div>
  );
};
