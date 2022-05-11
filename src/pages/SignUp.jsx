import { useState, useContext } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

import { authApi } from "../api";

import './../styles/pages-css/auth.css';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  let navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("bruh");
    
    const body = {
      username: e.target.username.value,
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    
    console.log(body)
    try {
      setIsLoading(true);
      let res = await authApi.signUp(body);

      console.log(res);
      setIsLoading(false);
      navigate("../sign-in", { replace: true });
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }

  }

  return (
      <div className="AuthContainer">
          <form className="AuthWrapper container-border-global" onSubmit={e => handleSignUp(e)}>
              <h1 className="AuthWrapper__title">Synchronize</h1>
              <p className="AuthWrapper__description">Let’s get started</p>
              <div className="Auth__input-group">
                  <p className="Auth__input-group__Name">Username</p>
                  <div className="Auth__input-group__wrapper input-wrapper-global">
                    <i className="fa-solid fa-circle-user Auth__input-icon"></i>
                    <input type="text" name="username" placeholder="ex. MikeOxlong69" className="Auth__input-text input-text-global" required/>
                  </div>
              </div>
              <div className="Auth__input-group">
                  <p className="Auth__input-group__Name">Fullname</p>
                  <div className="Auth__input-group__wrapper input-wrapper-global">
                    <i className="fa-solid fa-circle-user Auth__input-icon"></i>
                    <input type="text" name="fullname" placeholder="ex. My Cocks Lang" className="Auth__input-text input-text-global"required/>
                  </div>
              </div>
              <div className="Auth__input-group">
                  <p className="Auth__input-group__Name" >Email</p>
                  <div className="Auth__input-group__wrapper input-wrapper-global">
                    <i className="fa-solid fa-envelope Auth__input-icon"></i>
                    <input type="email" name="email" placeholder="ex. MikeOxlong69" className="Auth__input-text input-text-global"required/>
                  </div>
              </div>
              <div className="Auth__input-group">
                  <p className="Auth__input-group__Name" >Password</p>
                  <div className="Auth__input-group__wrapper input-wrapper-global">
                    <i className="fa-solid fa-lock Auth__input-icon"></i>
                    <input type="password" name="password" placeholder="some secret" className="Auth__input-text input-text-global"required/>
                  </div>
              </div>            
              <button className="Auth__submit-button button-global">
                {isLoading ? 
                  <i class="fas fa-circle-notch fa-spin"></i>
                  :
                  "Sign up"
                }
              </button>
              {error && <p className="Auth__error"><i class="fa-solid fa-circle-exclamation"></i> {error}</p> }
              <p className="Auth__optional-link" >Already have an account? <Link to="/sign-in">Sign up</Link></p>
          </form>
      </div>
  );
}

export default SignUp;
