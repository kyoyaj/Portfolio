import React, { Component } from 'react';
import './HeadingText.css';

class HeadingText extends React.Component {
    
   render() {
      return (
         <h1>
            {this.props.textTitle}
         </h1>
      )
   }
}

export default HeadingText;
