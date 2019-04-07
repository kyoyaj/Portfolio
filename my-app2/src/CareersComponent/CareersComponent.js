import React, { Component } from 'react';
import './CareersComponent.css';
import registered_logo from '../assets/registered_logo.jpg';

class CareersComponent extends React.Component {
  render() {
    return (
      <div className='troops-container careers-column container-columns'> 
        <img src={registered_logo} />
        <div className='careers-div'>
          <a className='careers-link' href='https://troops.ai/careers' target='_blank'>Your career @ Troops</a>
          <div className='careers-msg'>
          Get ready for a new and exciting journey surrounded by driven and passionate people making a 
          difference for our customers!
          </div>
        </div>
      </div>
    )
  }
}

export default CareersComponent;
