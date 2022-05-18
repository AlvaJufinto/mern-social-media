import { useState, useContext, useEffect } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import noAvatar from "./../assets/img/noAvatar.png";

import { AuthContext } from "../context/AuthContext";

import './../styles/pages-css/home.css';

const Home = () => {
  const { userAuth, isAuthLoading, authErrorMessage } = useContext(AuthContext);
  let navigate = useNavigate();
  
  useEffect(() => {
    // console.log(mySelf?.posts == null);
  }, [])

  const homeLogout = () => {
    localStorage.removeItem("SM_JWT_Token");
    navigate("/sign-in", { replace: true })
  }

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
              <h3 className="UserList-global__username" title="Alfie Solomons">Alfie Solomons</h3>
              <p className="Home__UserList__unfollow UserList-global__addition">Unfollow</p>
            </div>
          </div>
        </div>
        <div className="Home__middle-side middle-section-global">
          <AddPost />
          <div className="Home__middle-side__post-containers">
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
            {
              // mySelf?.posts?.length === 0 ?
              //   <i className="fas fa-circle-notch fa-spin Home__middle-side__IconLoading "></i>
              //     :
              //   <Post />
            }

            
          </div>
        </div>
        <div className="Home__right-side right-section-global">
          <div className="Home__right-side__UserShortcut">
            <img src={noAvatar} alt="bruv" className="UserShortcut__img" />
            <div className="UserShortcut__name">
              <p className="UserShortcut__username">{userAuth?.username}</p>
              <h3 className="UserShortcut__fullname">{userAuth?.fullname}</h3>
            </div>
            <i className="UserShortcut__icon fa-solid fa-arrow-right-from-bracket" onClick={homeLogout}></i>
          </div>
          <div className="UserList-global">
            <h2 className="UserList-global__title">Suggestions</h2>
            <div className="UserList-global__list">
              <Link to="/:username" >
                <img className="UserList-global__image" src={noAvatar} alt="bruh" />
              </Link>
              <h3 className="UserList-global__username" title="Alfie Solomons">Alfie Solomons</h3>
              <p className="Home__UserList__suggestion UserList-global__addition">Follow</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
