import { useContext } from "react";
import {
  Link
} from "react-router-dom";

import './../styles/pages-css/auth.css';

const SignUp = () => {

  return (
      <div className="AuthContainer">
          <form className="AuthWrapper container-border-global">
              <h1 className="AuthWrapper__title">Synchronize</h1>
              <p className="AuthWrapper__description">Let’s get started</p>
              <div className="Auth__input-group">
                  <p className="Auth__input-group__Name" >Username</p>
                  <div className="Auth__input-group__wrapper input-wrapper-global">
                    <i className="fa-solid fa-circle-user Auth__input-icon"></i>
                    <input type="text" placeholder="ex. MikeOxlong69"  className="Auth__input-text input-text-global"></input>
                  </div>
              </div>
              <div className="Auth__input-group">
                  <p className="Auth__input-group__Name" >Fullname</p>
                  <div className="Auth__input-group__wrapper input-wrapper-global">
                    <i className="fa-solid fa-circle-user Auth__input-icon"></i>
                    <input type="text" placeholder="ex. MikeOxlong69"  className="Auth__input-text input-text-global"></input>
                  </div>
              </div>
              <div className="Auth__input-group">
                  <p className="Auth__input-group__Name" >Email</p>
                  <div className="Auth__input-group__wrapper input-wrapper-global">
                    <i className="fa-solid fa-envelope Auth__input-icon"></i>
                    <input type="text" placeholder="ex. MikeOxlong69"  className="Auth__input-text input-text-global"></input>
                  </div>
              </div>
              <div className="Auth__input-group">
                  <p className="Auth__input-group__Name" >Password</p>
                  <div className="Auth__input-group__wrapper input-wrapper-global">
                    <i className="fa-solid fa-lock Auth__input-icon"></i>
                    <input type="password" placeholder="some secret"  className="Auth__input-text input-text-global"></input>
                  </div>
              </div>            
              <button className="Auth__submit-button button-global">Sign up</button>
              <p className="Auth__optional-link" >Already have an account? <Link to="/sign-in">Sign up</Link></p>
          </form>
      </div>
  );
}

export default SignUp;
