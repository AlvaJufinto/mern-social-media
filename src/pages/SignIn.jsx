import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './../styles/pages-css/auth.css';

const SignIn = () => {

  return (
      <div className="SignInContainer">
          <form className="SignInWrapper container-border-global">
              <h1 className="SignInWrapper__title">Synchronize</h1>
              <p className="SignInWrapper__description">Welcome back, buddy!</p>
              <div className="SignIn__input-group">
                  <p className="SignIn__input-group__Name" >Username</p>
                  <div className="SignIn__input-group__wrapper input-wrapper-global">
                    <i className="fa-solid fa-circle-user SignIn__input-icon"></i>
                    <input type="text" placeholder="ex. MikeOxlong69"  className="SignIn__input-text input-text-global"></input>
                  </div>
              </div>
              <div className="SignIn__input-group">
                  <p className="SignIn__input-group__Name" >Password</p>
                  <div className="SignIn__input-group__wrapper input-wrapper-global">
                    <i className="fa-solid fa-lock SignIn__input-icon"></i>
                    <input type="text" placeholder="some secret"  className="SignIn__input-text input-text-global"></input>
                  </div>
              </div>
              <button className="SignIn__submit-button button-global">Sign in</button>
          </form>
      </div>
  );
}

export default SignIn;
