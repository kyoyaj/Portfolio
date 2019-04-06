import React, { Component } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './LoginForm.css';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        username: '',
        email: '',
        location: '',
        messageField: '',
        signUp: false,
        formValid: false,
        formErrors: {
            username: false, 
            email:false, 
            location: false
        }
    }
  }

  validate = (username, email, location) => {
    // true means invalid, so our conditions got reversed
    return {
      username: username.length === 0,
      email: email.length === 0,
      location: location.length === 0
    };
  }

  checkSubmit = e => {
    e.preventDefault();
    let errors = this.validate(this.state.username, this.state.email, this.state.location);

    // Uh oh... kinda simple validation... probs plugin that handles this better
    if (errors.username || errors.email || errors.location) {
      this.setState({formError:{username: errors.username, email: errors.email, location: errors.location}})
      this.state.formErrors.username = errors.username;
      this.state.formErrors.email = errors.email;
      this.state.formErrors.location = errors.location;

      return;
    } else {
      // check to see if all required field filled out
      //let userNameVal = 'Tony';
      this.props.updateUserName(this.state.username);
      let status = 'SIGN_UP_SUCCESS';
      this.props.changeLoginStatus(status);
    }
  }

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  }
  
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  }

  handleLocationChange = e => {
    this.setState({ location: e[0].value });
    this.props.updateLocation(e)
  }

  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  }
  render() {

    // I guess as long as we don't directly hard code the items right?
    // In real life scenario, we probably get a list via ajax request 
    this.locationList = [
      { value: 'FORTLEE', name: 'Fort Lee' , lattitude:40},
      { value: 'NEWYORK', name: 'New York' },
      { value: 'TOKYO', name: 'Tokyo' },
      { value: 'PARIS', name: 'Paris' }          
    ];

    const defaultInputTextClasses = 'rbt-input-main form-control rbt-input';

    return (
        <div className='login-container container-columns'> 
            <h3>START HERE</h3>
            <form name="form">   
                <div className="form-field">
                  <input type="text" className={defaultInputTextClasses}
                    placeholder="Full Name" name="username" id="username" error-flag={this.state.formErrors.username.toString()}
                    onChange={this.handleUsernameChange} value={this.state.username}/>
                </div>   
                <div className="form-field">
                  <input type="text" className={defaultInputTextClasses} placeholder="Email" name="email" id="email" 
                  error-flag={this.state.formErrors.email.toString()} onChange={this.handleEmailChange} value={this.state.email} />
                </div>
                <Typeahead id="locationInput" labelKey="name" options={this.locationList} placeholder="Location" 
                  error-flag={this.state.formErrors.location.toString()} onChange={this.handleLocationChange}/>
              <div className="form-field">
                <textarea className={defaultInputTextClasses} placeholder="Message for Troops" name="messageField" 
                  id="messageField" rows="5" maxLength="65535" onChange={this.handleMessageChange} value={this.state.message}/>
              </div>      
              <div className="form-field">
                <label className="form-label">Email Signup?</label>
                <div className="switch-field">
                  <input type="radio" id="switch_left" name="signUp" value="No"/>
                  <label htmlFor="switch_left">No</label>
                  <input type="radio" id="switch_right" name="signUp" value="Yes" checked="checked"/>
                  <label htmlFor="switch_right">Yes</label>    
                </div>
              </div>
              <div className="form-field submit-field">
                <input type="submit" onClick={this.checkSubmit.bind(this)} className="submitBtn" />
              </div>
            </form>
         </div>
    );
  }
}

export default LoginForm;
