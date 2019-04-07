import React, { Component } from 'react';
import './WeatherComponent.css';
import weather_cloudy from '../assets/weather_cloudy.png';
import weather_rainy from '../assets/weather_rainy.png';
import weather_sunny from '../assets/weather_sunny.png';


class WeatherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        farenheit: '',
        celcius:'',
        weatherState: '',
        location: props.location,
        weatherImgMapping:{
            cloudy: '../assets/weather_cloudy.png',
            rainy: '../assets/weather_rainy.png',
            sunny: '../assets/weather_sunny.png'
        },
        weatherImg: ''
    }
  }
  // This API doesn't work... getting errors everywhere so using this as an example...
  // we can't even pass longitude and latitude because of stupid oceandrivers bug
  componentDidMount = async() => {
      let apiUrl = 'https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/' + this.state.location +  '/?period=latestdata';
      const apiCall = await fetch(apiUrl);
      const response = await apiCall.json();
      if (response.TEMP_IN){
        this.setState({ farenheit: response.TEMP_IN});
        this.setState({ celcius: response.TEMPERATURE});
        this.setState({ weatherState: response.WEATHER_DES});

        // I'm like totally sure there's a better way of doing image mapping than this janky way 
        switch(response.WEATHER_DES){
          case 'Dry':
            this.setState({weatherImg: this.state.weatherImgMapping.sunny})
            break;
          case 'Cloudy': 
            this.setState({weatherImg: this.state.weatherImgMapping.cloudy})
            break;
          case 'Rainy':
            this.setState({weatherImg: this.state.weatherImgMapping.rainy})
            break;
        }
      } 
  }

  render() {
      return (
        <div className='troops-container container-columns weather-column' location='temp'> 
          <h3 className='weather-name'>Weather in {this.props.locationName}</h3>
          <div className='weather-div'>
            <span className='weather-date'>Today</span>
            <div className='weather-condition-div'>
              <img className='weather-img' src={this.state.weatherImg} />
              <span className='weather-condition'>{this.state.weatherState}</span>
            </div>
            <div className='weather-temp'>
              <span>Farenheit: {this.state.farenheit}</span>
              <span>Celcius: {this.state.celcius}</span>
            </div>
          </div>
          <div className='weather-msg'>We're excited to have you on board!</div>
      </div>
    );
  }
}



export default WeatherComponent;



