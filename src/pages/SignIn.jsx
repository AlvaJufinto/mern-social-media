import { useState, useContext } from "react"; 
import {
  Link
} from "react-router-dom";

import { authApi } from "./../api";
import './../styles/pages-css/auth.css';

const SignIn = () => {


  return (
    <div className="AuthContainer">
      <form className="AuthWrapper container-border-global">
        <h1 className="AuthWrapper__title">Synchronize</h1>
        <p className="AuthWrapper__description">Welcome back, buddy!</p>
          <div className="Auth__input-group">
            <p className="Auth__input-group__Name" >Username</p>
            <div className="Auth__input-group__wrapper input-wrapper-global">
              <i className="fa-solid fa-circle-user Auth__input-icon"></i>
              <input type="text" placeholder="ex. MikeOxlong69"  className="Auth__input-text input-text-global"></input>
            </div>
          </div>
          <div className="Auth__input-group">
            <p className="Auth__input-group__Name" >Password</p>
              <div className="Auth__input-group__wrapper input-wrapper-global">
                <i className="fa-solid fa-lock Auth__input-icon"></i>
                <input type="password" placeholder="some secret" className="Auth__input-text input-text-global"></input>
              </div>
          </div>
        <button className="Auth__submit-button button-global">Sign in</button>
        <p className="Auth__optional-link" >Don’t have an account? <Link to="/sign-up">Sign up</Link></p>
      </form>
    </div>
  );
}

export default SignIn;
