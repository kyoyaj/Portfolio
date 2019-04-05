import React, { Component } from 'react';
import './App.css';
import LocationComponent from './LocationComponent/LocationComponent';
import LoginForm from './LoginForm/LoginForm';
import MenuNav from './MenuNav/MenuNav';
import HeadingText from './HeadingText/HeadingText';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.updateHeading = this.updateHeading.bind(this);
    this.state = {
        headingText: 'Sign-in please',
        menuNavClass: 'hide'
    }
  }
  updateHeading = (e) => {
    e.preventDefault();
    this.setState({headingText: 'Got it!!'});
   // alert(this.state.headingText)
  }
  render() {
    return (
      <div>
      <MenuNav hideMenuNav={this.state.menuNavClass}/>
      <section>
      <HeadingText textTitle={this.state.headingText}/>
      <div className='mainSection'>
      <LoginForm action={this.updateHeading}/>
      <LocationComponent />
      </div>
      </section>
      </div>
    )
    
  }
}

export default App;
