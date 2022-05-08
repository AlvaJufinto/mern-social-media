import { useState, useContext } from "react";
import {
  Link
} from "react-router-dom";

import Navbar from "../components/Navbar";
import AddPost from "../components/AddPost";
import Post from "../components/Post";

import noAvatar from "./../assets/img/noAvatar.png";
import noBanner from "./../assets/img/noBanner.jpg"

import './../styles/pages-css/profile.css';

const Profile = () => {
  const [isSelf, setIsSelf] = useState(true);

  return (
    <>
      <Navbar />
      <div className="ProfileContainer section-global">
        <div className="Profile__left-side">
          <div className="Profile__banner-container" style={{
                backgroundImage: `url(${noBanner})`
              }}>
            <div className="Profile__banner-container__Content">
              <img src={noAvatar} alt="profile img" className="Profile__Content__img" />
              <div className="Profile__Content__bio">
                <h1 className="Profile__bio__Username">tom.shelby</h1>
                <h2 className="Profile__bio__Fullname">Thomas Shelby</h2>
                <p className="Profile__bio__Description">Slebew</p>
                <div className="Profile__bio__Connections">
                  <div className="Profile__Connection"><span>0</span> Followers</div>
                  <div className="Profile__Connection"><span>0</span> Followings</div>
                </div>
              </div>
              {
                isSelf ?
                  <button className="Profile__bio__Button button-global">Edit Profile</button>
                :
                  <button className="Profile__bio__Button button-global">Follow</button>
              }
            </div>
          </div>
          <div className="Profile__bottom-container">
            <div className="Profile__bottom-container__Intro">
              
            </div>
            <div className="Profile__bottom-container__PostContainer">
              <AddPost />
              <Post />
            </div>
          </div>
        </div>
        <div className="Profile__right-side">
          adsadssad 
        </div>
      </div>
    </>
  );
}

export default Profile;
