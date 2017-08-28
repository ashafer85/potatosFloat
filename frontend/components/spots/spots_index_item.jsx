import React from 'react';

import { withRouter } from 'react-router-dom';

class SpotsIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  //SpotsIndexItem
  render(spot) {
    debugger
    const spot = this.props.spot;
    return(
      <div>
        <h3> { spot.title } </h3>
        // details link
      </div>
    );

  }


}

export defaut spotsIndexItem;
