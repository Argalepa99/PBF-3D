import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title">Login Form</h2>
        <form>
          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />
            <label><b>Password</b></label>
            <input type="text" placeholder="Enter Password" name="psw" required />

            <button className type="submit">Login</button>
            <input type="checkbox" defaultChecked /> Remember me
            <br></br>
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">Password?</a></span>
          </div>
        </form>
      </div>
    );
  };
}

export default LoginForm;