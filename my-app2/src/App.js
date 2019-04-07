import React, { Component } from 'react';
import './App.css';
import LocationComponent from './LocationComponent/LocationComponent';
import LoginForm from './LoginForm/LoginForm';
import MenuNav from './MenuNav/MenuNav';
import HeadingText from './HeadingText/HeadingText';
import WeatherComponent from './Weather/WeatherComponent';
import CareersComponent from './CareersComponent/CareersComponent';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.updateLandingPageView = this.updateLandingPageView.bind(this);
    this.state = {
        headingText: 'Sign-in please',
        location:'',
        locationName: '',
        menuNavClass: 'hidden',
        signedUp: false,
        view: 'SIGN_IN',
        userName: ''
    }
  }
  updateUserName = (name) => {
    this.setState({userName: name});
    this.state.userName = name;
  }

  updateLocation = (location) => {
    if (location.length == 0) {
      this.setState({location: '',locationName: ''});
    } else {
      this.setState({location: location[0].value, locationName: location[0].name});
    }
  }

  /* Gotta update the landing page view */
  updateLandingPageView = (status) => {
    let userNameVal = this.state.userName;
  
    if (status === 'SIGN_UP_SUCCESS'){
      this.setState({
        headingText: "Welcome " + userNameVal + "!",
        menuNavClass: 'visible',
        signedUp: true,
        view:'WEATHER_VIEW',
      });
    } else if (status === 'WEATHER_VIEW'){
      this.setState({
        headingText: "Welcome " + userNameVal + "!",
        menuNavClass: 'visible',
        signedUp: true,
        view:'WEATHER_VIEW',
      });
    } else if (status === 'HOME_VIEW'){
      this.setState({
        headingText: "Home page view",
        menuNavClass: 'visible',
        signedUp: true,
        view:'HOME_VIEW',
      });
    } else {
      this.setState({menuNavClass: 'hidden'});
    }

  }
  render() {
      const isSignedUp = this.state.signedUp;
      const view = this.state.view;
      let loginComponent = '';
      let careersComponent = '';
      let locationComponent = '';
      let weatherComponent = '';

      /* Easier to set up the view here */
      if (!isSignedUp){
        loginComponent = <LoginForm updateLocation={this.updateLocation} updateUserName={this.updateUserName} changeLoginStatus={this.updateLandingPageView}/> 
        careersComponent = <CareersComponent isRegistered={this.state.signedUp} />
      } 
      if (view !== 'WEATHER_VIEW'){
          locationComponent = <LocationComponent location={this.state.location}/>
          careersComponent = <CareersComponent isRegistered={this.state.signedUp} />
      } else {
          weatherComponent = <WeatherComponent locationName={this.state.locationName} location={this.state.location}/>;
      }
    return (
      <div>
      <MenuNav menuView={this.state.view} updateView={this.updateLandingPageView} hideMenuNav={this.state.menuNavClass}/>
      <section>
      <HeadingText textTitle={this.state.headingText}/>
      <div className='mainSection'>
      {loginComponent}
      {careersComponent}
      {locationComponent}
      {weatherComponent}
      </div>
      </section>
      </div>
    )
    
  }
}

export default App;
