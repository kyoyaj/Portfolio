import React, { Component } from 'react';
import './LocationComponent.css';
import bing_logo from '../assets/bing_logo.png';
import google_logo from '../assets/google_logo.png';

class LocationComponent extends React.Component {

  render() {
    let locationName = this.props.location;
    return (
      <div className='troops-container container-columns'> 
        <img src='https://www.chorus.ai/wp-content/uploads/2019/01/troopstile.png' />
        <ul className='footer-buttons'>
          <li className='openInButton bing'>
            <a className='bing-link' target="_blank" href={'https://bing.com/maps/p/' + locationName}><img src={bing_logo} />Open in Bing</a>
          </li>
          <li className='openInButton google'> 
            <a target="_blank" href={"https://www.google.com/maps/search/" + locationName}><img src={google_logo} className='google-logo' />Open in Google</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default LocationComponent;
