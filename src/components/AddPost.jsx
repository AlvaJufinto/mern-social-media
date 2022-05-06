import { useContext } from "react";
import {
  Link
} from "react-router-dom";

import { ReactComponent as SyncLogo } from "./../assets/svg/sync-logo.svg";
import noAvatar from "./../assets/img/noAvatar.png"

import './../styles/components-css/add-post.css';

const Navbar = () => {

  return (
      <div className="AddPostWrapper container-border-global">
        <div className="AddPost__top">
            <img  className="AddPost__img" src={noAvatar} alt="you cunt" />
            <input className="AddPost__input-text input-text-global"  type="text" placeholder="Tell us what you’re thinking, William!"  />
        </div>
        <div className="AddPost__bottom">
            <div className="AddPost__bottom_media-container">
                <i class="fa-solid fa-image"></i>
                <p>Media</p>
            </div>
            <button className="AddPost__button-share button-global">Share</button>
        </div>
      </div>
  );
}

export default Navbar;
