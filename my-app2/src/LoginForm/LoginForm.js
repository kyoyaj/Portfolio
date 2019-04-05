import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
  checkSubmit = (e) => {
    e.preventDefault();
    alert('form submitted')
  }
  render() {
      return (
        <div className='login-container container-columns'> 
            <h3>START HERE</h3>
            <form name="form">      
                <div className="form-field"><input type="text" className="form-control" placeholder="Email" name="email" id="email" /></div>
                <div className="form-field"><input type="text" placeholder="Message for Troops" name="messageField" id="messageField" className="text" size="30" maxLength="65535" /></div>
                <div className="form-field">
                  <button onClick={this.props.action.bind(this)} className="btn btn-primary">Login</button>
                
               </div>      
                <div className="form-field"><div className="dropdown closed">
                        <div className="title">Location</div>
                        <div className="dropdown-menu">
                        <input className="typeahead" type="text" id="js-typeAhead" />
                        <ul>
                          <li data-name="Henry Christensen">Henry Christensen</li>
                          <li data-name="Imelda Silva">Imelda Silva</li>
                          <li data-name="Marah Mueller">Marah Mueller</li>
                          <li data-name="Holly Fitzpatrick">Holly Fitzpatrick</li>
                        </ul>
                        </div>
                        </div>
                </div>
                <button type="submit" onClick={this.checkSubmit.bind(this)} className="submitBtn">Submit</button>
          
            </form>
         </div>
    );
  }
}

export default LoginForm;
