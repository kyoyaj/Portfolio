import React, { Component } from 'react';
import './MenuNav.css';
import troops_logo from '../assets/troops_logo.svg';



class MenuNav extends React.Component {
 render() {

  var headerStyle = {
    display: 'block'
  }
  if (this.props.hideMenuNav){
    headerStyle.display = 'none'
  }
  return (
     
      <header  style={headerStyle} className="menuHeader">
          <div>
          {this.props.shouldShowNav}
          <img src={troops_logo} />
          </div>
       </header>
    );
 }
}

export default MenuNav;
