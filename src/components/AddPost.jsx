import { useState, useContext } from "react";
import {
  Link
} from "react-router-dom";

import { ReactComponent as SyncLogo } from "./../assets/svg/sync-logo.svg";
import noAvatar from "./../assets/img/noAvatar.png"

import './../styles/components-css/add-post.css';

const Navbar = () => {
  const [img, setImg] = useState(null);

  return (
      <div className="AddPostWrapper container-border-global">
        <div className="AddPost__top">
            <img  className="AddPost__img" src={noAvatar} alt="you cunt" />
            <input className="AddPost__input-text input-text-global"  type="text" placeholder="Tell us what you’re thinking, Thomas!"  />
        </div>
        {img && (
          <div className="AddPost__middle">
            <img className="AddPost__middle__img" src={URL.createObjectURL(img)} alt="AddPost__middle__img" />  
            <i class="AddPost__middle_trash-icon fa-solid fa-trash" onClick={() => setImg(null)}></i>
          </div>
        )}
        <div className="AddPost__bottom">
            <label className="AddPost__bottom_media-container" htmlFor="file">
                <i class="fa-solid fa-image"></i>
                <p>Media</p>
                <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setImg(e.target.files[0])}
                />
            </label>
            <button className="AddPost__button-share button-global">Share</button>
        </div>
      </div>
  );
}

export default Navbar;
