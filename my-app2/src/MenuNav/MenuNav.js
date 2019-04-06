import React, { Component } from 'react';
import './MenuNav.css';
import troops_logo from '../assets/troops_logo.svg';



class MenuNav extends React.Component {
  updateView = (view, e) => {
    e.preventDefault();

    this.props.updateView(view);
  }

 render() {

  var headerStyle = {
    visibility: 'visible'
  }
  headerStyle.visibility =  this.props.hideMenuNav;
  
  return (
      
      <header style={headerStyle} className="menuHeader">
          <div className="header-item">
          <a href="https://troops.ai" target="_blank"><img src={troops_logo} /></a>
          </div>
          <div className="header-item">
          <nav>
            <a className={(this.props.menuView === 'HOME_VIEW' ? "selected" : "")} onClick={this.updateView.bind(this, 'HOME_VIEW')} >Home</a>
            <a className={(this.props.menuView === 'WEATHER_VIEW' ? "selected" : "")} onClick={this.updateView.bind(this, 'WEATHER_VIEW')} >Weather</a>
          </nav>
          </div>
       </header>
    );
 }
}

export default MenuNav;
