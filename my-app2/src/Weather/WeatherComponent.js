import React, { Component } from 'react';
import './WeatherComponent.css';

class WeatherComponent extends React.Component {
    
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.locationName = '';
  }

  render() {
      return (
        <div className='troops-container container-columns'> 
          <img src='https://www.chorus.ai/wp-content/uploads/2019/01/troopstile.png' />
          <ul className='footer-buttons'>
            <li className='openInButton bing'>
              <a target="_blank" href={'https://bing.com/maps/p/' + this.locationName}><img src={bing_logo} />Open in Bing</a>
            </li>
            <li className='openInButton google'> 
              <a target="_blank" href={"https://www.google.com/maps/search/" + this.locationName}><img src={google_logo} className='google-logo' />Open in Google</a>
            </li>
        </ul>
      </div>
    );
  }
}

export default WeatherComponent;
