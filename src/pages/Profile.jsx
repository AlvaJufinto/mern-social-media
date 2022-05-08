import { useContext } from "react";
import {
  Link
} from "react-router-dom";

import Navbar from "../components/Navbar";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import noAvatar from "./../assets/img/noAvatar.png";

import './../styles/pages-css/profile.css';

const Profile = () => {

  return (
    <>
      <Navbar />
      <div className="ProfileContainer section-global">
      
      </div>
    </>
  );
}

export default Profile;
