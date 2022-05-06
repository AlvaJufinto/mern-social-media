import { useState, useContext } from "react";
import {
  Link
} from "react-router-dom";

import { ReactComponent as SyncLogo } from "./../assets/svg/sync-logo.svg";
import noAvatar from "./../assets/img/noAvatar.png";
import noBanner from "./../assets/img/noBanner.jpg";

import './../styles/components-css/post.css';

const Post = () => {

  return (
      <div className="PostWrapper container-border-global ">
        <div className="Post__Top">
            <Link to="/:username">
                <img src={noAvatar} alt="bruh" className="Post__Top__profile-img" />
                <p className="Post__Top__username">Alfie Solomons</p>
            </Link>
        </div>
        <div className="Post__Middle">
            <div className="Post__Middle">
                <p className="Post__Middle__Description">Some cool photo from Ancestral Plane</p>
                <img src={noBanner} alt="burh" className="Post__Middle__img" />
            </div>
        </div>
        <div className="Post__Bottom">
            <div className="Post__Bottom__likes-container">
                <i class="fa-solid fa-thumbs-up"></i>
                <p>Like(s)</p>
            </div>
            <div className="Post__Bottom__comments-container">
                <i class="fa-solid fa-message"></i>
                <p>Comment(s)</p>
            </div>
        </div>
      </div>
  );
}

export default Post;
