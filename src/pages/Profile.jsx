import { useState, useContext, useEffect } from "react";
import {
  Link,
  useParams 
} from "react-router-dom";
import { UserContext } from "../context/UserContext";

import Navbar from "../components/Navbar";
import AddPost from "../components/AddPost";
import Post from "../components/Post";

import noAvatar from "./../assets/img/noAvatar.png";
import noBanner from "./../assets/img/noBanner.jpg"

import './../styles/pages-css/profile.css';

const Profile = () => {
  const { userAuth, userPosts } = useContext(UserContext);
  const { username } = useParams();
  const [isSelf, setIsSelf] = useState(false);

  useEffect(() => {
    setIsSelf(username === userAuth?.username ? true : false)
   
  }, [username, userAuth])


  return (
    <>
      <Navbar />
      <div className="ProfileContainer section-global">
        <div className="Profile__left-side">
          <div className="Profile__banner-container" style={{
                backgroundImage: `url(${!userAuth?.backgroundPict?.imageUrl && noBanner})`
              }}>
            <div className="Profile__banner-container__Content">
              <img src={!userAuth?.profilePict?.imageUrl && noAvatar} alt="profile img" className="Profile__Content__img" />
              <div className="Profile__Content__bio">
                <h1 className="Profile__bio__Username">{isSelf ? userAuth?.username : "other"}</h1>
                <h2 className="Profile__bio__Fullname">{isSelf ? userAuth?.fullname : "other"}</h2>
                <p className="Profile__bio__Description">{isSelf ? userAuth?.description : "other"}</p>
                <div className="Profile__bio__Connections">
                  <div className="Profile__Connection"><span>{isSelf ? userAuth?.followers?.length : 0}</span> Followers</div>
                  <div className="Profile__Connection"><span>{isSelf ? userAuth?.followings?.length : 0}</span> Followings</div>
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
            <div className="Profile__bottom-container__Intro container-border-global">
              <h1>Intro</h1>
              {isSelf ? 
              <div className="Profile__Intro__categories-container">
                {!userAuth?.detail?.from === "" && 
                  <div className="Profile__intro__category">
                    <i class="fa-solid fa-house"></i>
                    <p>City : {userAuth?.detail?.from}</p>
                  </div>
                }
                {
                  !userAuth?.detail?.work === "" &&
                  <div className="Profile__intro__category">
                    <i class="fa-solid fa-briefcase"></i>
                    <p>Work : Peaky Blinders</p>
                  </div>
                }
                {
                  !userAuth?.detail?.relationship === "" &&
                  <div className="Profile__intro__category">
                    <i class="fa-solid fa-heart"></i>
                    <p>Relationship : Playboy</p>
                  </div>
                }
                {
                  !userAuth?.detail?.website === "" &&
                  <div className="Profile__intro__category">
                    <i class="fa-solid fa-globe"></i>
                    <a href="https://github.com/AlvaJufinto" target="_blank" >Website</a>
                  </div>
                }
                {userAuth?.detail?.from === "" && userAuth?.detail?.work === "" && userAuth?.detail?.relationship === "" && userAuth?.detail?.website === "" && <p>Theres no data available 😔</p>}
                {userAuth?.detail?.from === "" && userAuth?.detail?.work === "" && userAuth?.detail?.relationship === "" && userAuth?.detail?.website === "" && <button className="Profile__intro__Button button-global">Edit Profile</button>}
              </div>
                :
              <div className="Profile__Intro__categories-container">
                <div className="Profile__intro__category">
                  <i class="fa-solid fa-house"></i>
                  <p>City : Birmingham</p>
                </div>
                <div className="Profile__intro__category">
                  <i class="fa-solid fa-briefcase"></i>
                  <p>Work : Peaky Blinders</p>
                </div>
                <div className="Profile__intro__category">
                  <i class="fa-solid fa-heart"></i>
                  <p>Relationship : Playboy</p>
                </div>
                <div className="Profile__intro__category">
                  <i class="fa-solid fa-globe"></i>
                  <a href="https://github.com/AlvaJufinto" target="_blank" >Website</a>
                </div>
              </div>
            }
            </div>
            <div className="Profile__bottom-container__PostContainer">
              {isSelf && <AddPost />}
              {
                isSelf ?
                  userPosts?.sort((a, b) => new Date(b?.post?.date) - new Date(a?.post?.date))?.map(( post, i ) => (
                    <Post 
                      key={i}
                      postId={post?._id}
                      period={post?.post?.date}
                      username={userAuth?.username}
                      description={post?.post?.description}
                      like={post?.post?.likes?.length} 
                      comment={post?.post?.comments?.length} 
                    />
                  ))
                :
                  <Post />
              }
            </div>
          </div>
        </div>
        <div className="Profile__right-side">
          <div className="UserList-global">
            <h2 className="UserList-global__title">Followers</h2>
            <div className="UserList-global__list">
              <Link to="/:username" >
                <img className="UserList-global__image" src={noAvatar} alt="bruh" />
              </Link>
              <h3 className="UserList-global__username" title="Alfie Solomons">Alfie Solomons</h3>
              {isSelf && <p className="Home__UserList__unfollow UserList-global__addition">Unfollow</p>}
            </div>
          </div>
          <div className="UserList-global">
            <h2 className="UserList-global__title">Followings</h2>
            <div className="UserList-global__list">
              <Link to="/:username" >
                <img className="UserList-global__image" src={noAvatar} alt="bruh" />
              </Link>
              <h3 className="UserList-global__username" title="Alfie Solomons">Alfie Solomons</h3>
              {isSelf && <p className="Home__UserList__unfollow UserList-global__addition">Unfollow</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
