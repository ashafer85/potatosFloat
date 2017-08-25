import React from 'react';
import ReactDOM from 'react-dom';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  return(
    <main>
      <div className='landingPageImage'>
        <div className='splashContent'>
          <h1 className='splashTitle'> Stay with Locals and Meet Travelers </h1>
          <h2 className='splashSubTitle'> Share Authentic Travel Experiences </h2>

          <ul className='splashNav'>
            <li className='splashNavGuest'>
              <Link to='/login' > Log In (will be Guest Account) </Link>
            </li>
            <li className='splashNavJoin'>
              <Link to='/signup'> Join Now! </Link>
            </li>
          </ul>
        </div>

      </div>

    </main>

  );
}

export default LandingPage;
