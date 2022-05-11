import { useState, useContext } from "react"; 
import {
  Link,
  useNavigate
} from "react-router-dom";

import { authApi } from "./../api";
import './../styles/pages-css/auth.css';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  let navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log("bruh");
    
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    }
    
    console.log(body)
    try {
      setIsLoading(true);
      let res = await authApi.signIn(body);

      console.log(res);
      setIsLoading(false);
      navigate("/", { replace: true });
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }

  }

  return (
    <div className="AuthContainer">
      <form className="AuthWrapper container-border-global" onSubmit={handleSignIn}>
        <h1 className="AuthWrapper__title">Synchronize</h1>
        <p className="AuthWrapper__description">Welcome back, buddy!</p>
        {error && <p className="Auth__error"><i class="fa-solid fa-circle-exclamation"></i> {error}</p> }
          <div className="Auth__input-group">
            <p className="Auth__input-group__Name" >Username</p>
            <div className="Auth__input-group__wrapper input-wrapper-global">
              <i className="fa-solid fa-circle-user Auth__input-icon"></i>
              <input type="text" placeholder="ex. MikeOxlong69" name="username"  className="Auth__input-text input-text-global" required/>
            </div>
          </div>
          <div className="Auth__input-group">
            <p className="Auth__input-group__Name" >Password</p>
              <div className="Auth__input-group__wrapper input-wrapper-global">
                <i className="fa-solid fa-lock Auth__input-icon"></i>
                <input type="password" placeholder="some secret" name="password" className="Auth__input-text input-text-global" required/>
              </div>
          </div>
        <button className="Auth__submit-button button-global">Sign in</button>
        <p className="Auth__optional-link" >Don’t have an account? <Link to="/sign-up">Sign up</Link></p>
      </form>
    </div>
  );
}

export default SignIn;
