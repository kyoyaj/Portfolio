import React, { Component } from 'react';
import './WeatherComponent.css';

const apikey = 'appid=b6907d289e10d714a6e88b30761fae22';
class WeatherComponent extends React.Component {
  constructor(props) {
    super(props);
    
;
    this.state = {
        farenheit: '',
        celcius:'',
        weatherDes: ''
    }
  }
  // This API doesn't work... getting errors everywhere so using this as an example...
  // we can't even pass longitude and latitude because of stupid oceandrivers bug
  componentDidMount = async() => {
      const api_call = await fetch("https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/cnarenal/?period=latestdata");
      const response = await api_call.json();
      if (response.TEMP_IN){
        this.setState({ farenheit: response.TEMP_IN})
        this.setState({ celcius: response.TEMPERATURE})
      } 
      
      //alert(response);
  }

  render() {
      return (
        <div className='troops-container container-columns'> 
          <h2>Weather in {this.props.location}</h2>
          Farenheit: {this.state.farenheit}
          Celcius: {this.state.celcius}
      </div>
    );
  }
}

export default WeatherComponent;



