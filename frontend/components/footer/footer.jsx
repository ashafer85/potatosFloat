import React from 'react';
import ReactDOM from 'react-dom';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';

const FooterBar = () => {

  return (
    <main className='footerBar'>

      <div className='footerBarNav'>
        <ul className='footerBarOptions'>
          <li>ABOUT</li>
          <li>SAFETY</li>
          <li>SUPPORT</li>
          <li>BLOG</li>
          <li>SHOP</li>
        </ul>
        <div className='languageSelector'> LANGUAGE
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </div>
      </div>

      <div className='footerBarConnect'>
        <div className='connectWithUs'>
          <div> CONNECT WITH US </div>
          <ul className='footerConnections'>
            <li><i className="fa fa-facebook" aria-hidden="true"></i> </li>
            <li><i className="fa fa-twitter" aria-hidden="true"></i> </li>
            <li><i className="fa fa-tumblr" aria-hidden="true"></i> </li>
            <li><i className="fa fa-instagram" aria-hidden="true"></i> </li>
          </ul>
        </div>
        <div className='mobileApps'>
          <div> MOBILE APPS </div>
          <ul className='footerApps'>
            <li><i className="fa fa-apple" aria-hidden="true"></i></li>
            <li><i className="fa fa-android" aria-hidden="true"></i></li>
          </ul>
        </div>
      </div>

      <ul className='footerBarBottom'>
        <li> <i className="fa fa-copyright" aria-hidden="true"></i> 2017 Shafer Worldwide, Inc.</li>
        <li> Terms </li>
        <li> Privacy </li>
        <li> Sitemap </li>
      </ul>

    </main>
  );
};

export default FooterBar;
