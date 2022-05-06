import { useContext } from "react";
import {
  Link
} from "react-router-dom";

import Navbar from "../components/Navbar";
import noAvatar from "./../assets/img/noAvatar.png";

import './../styles/pages-css/home.css';

const Home = () => {

  return (
    <>
      <Navbar />
      <div className="HomeContainer section-global">
        <div className="Home__left-side left-section-global">
          <div className="UserList-global">
            <h2 className="UserList-global__title">Followings</h2>
            <div className="UserList-global__list">
              <Link to="/:username" >
                <img className="UserList-global__image" src={noAvatar} alt="bruh" />
              </Link>
              <h3 className="UserList-global__username">Alfie Solomons</h3>
              <p className="Home__UserList__addition UserList-global__addition">Follow</p>
            </div>
          </div>
        </div>
        <div className="Home__middle-side middle-section-global">
          asdsad
        </div>
        <div className="Home__right-side right-section-global">
          asdsad
        </div>
      </div>
    </>
  );
}

export default Home;
