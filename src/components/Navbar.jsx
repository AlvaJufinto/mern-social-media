import { useContext } from "react";
import {
  Link
} from "react-router-dom";

import { UserContext } from "../context/UserContext";

import { ReactComponent as SyncLogo } from "./../assets/svg/sync-logo.svg";
import noAvatar from "./../assets/img/noAvatar.png"

import './../styles/components-css/navbar.css';

const Navbar = () => {
  const { userAuth, isAuthLoading, userErrorMessage } = useContext(UserContext);

  return (
      <div className="NavbarWrapper">
        <div className="NavbarContainer section-global">
            <Link className="Navbar__logo left-section-global" to="/">
                <SyncLogo />
                <h2>Synchronize</h2>    
            </Link>
            <div className="Navbar__search-container input-wrapper-global middle-section-global">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for users..." className="Navbar__text-input input-text-global"></input>
            </div>
            <div className="Navbar__links-container right-section-global">
                <div className="Navbar__links-container__Navigations">
                    <Link to="/"><i class="fa-solid fa-house"></i></Link>
                    <Link to="/explore"><i class="fa-solid fa-compass"></i></Link>
                    <Link to="/chat"><i class="fa-solid fa-paper-plane"></i></Link>
                </div>
                <div className="Navbar__links-container__ProfileContainer">
                    <Link to={`/${userAuth?.username}`}>
                        <img src={noAvatar} className="Navbar__ProfileContainer__img" alt="your profile img" />
                    </Link>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Navbar;
