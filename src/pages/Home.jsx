import { useState, useContext, useEffect } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import noAvatar from "./../assets/img/noAvatar.png";

import { userApi } from "../api";
import { UserContext } from "../context/UserContext";

import './../styles/pages-css/home.css';

const Home = () => {
  const { userAuth, userPosts, isAuthLoading, userErrorMessage } = useContext(UserContext);
  const [feedPosts, setFeedPosts] = useState([]);
  let navigate = useNavigate();
  let jwtToken = localStorage.getItem("SM_JWT_Token");

  useEffect(() => {
    console.log(userPosts);
  }, [])

  useEffect(async () => {
    try {
      let res = await userApi.feeds(jwtToken);
      setFeedPosts([...userPosts, ...res.data.data])
    } catch (err) {
      console.log(err.response);
    }
  }, [isAuthLoading, userPosts, userAuth, feedPosts]);

  const homeLogout = () => {
    localStorage.removeItem("SM_JWT_Token");
    navigate("/sign-in", { replace: true });
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
            { isAuthLoading && <i className="fas fa-circle-notch fa-spin Home__middle-side__information "></i> }
            { feedPosts?.length > 0 && !isAuthLoading && 
              feedPosts?.sort((a, b) => new Date(b?.post?.date) - new Date(a?.post?.date))?.map(( post, i ) => (
                <Post 
                  key={i}
                  image={post?.post?.image}
                  postId={post?._id}
                  period={post?.post?.date}
                  username={post?.belongsto?.username}
                  description={post?.post?.description}
                  like={post?.post?.likes?.length} 
                  comment={post?.post?.comments?.length} 
                />
              ))
            }
            { userPosts?.length === 0 && !isAuthLoading && <p className="Home__middle-side__information">Sorry there's no data available 😔</p> }
          </div>
        </div>
        <div className="Home__right-side right-section-global">
          { isAuthLoading && <i className="fas fa-circle-notch fa-spin Home__middle-side__IconLoading "></i> }
          { !isAuthLoading && 
            <div className="Home__right-side__UserShortcut">
              <img src={noAvatar} alt="bruv" className="UserShortcut__img" />
              <div className="UserShortcut__name">
                <p className="UserShortcut__username">{userAuth?.username}</p>
                <h3 className="UserShortcut__fullname">{userAuth?.fullname}</h3>
              </div>
              <i className="UserShortcut__icon fa-solid fa-arrow-right-from-bracket" onClick={homeLogout}></i>
            </div>
          }
          <div className="UserList-global">
            <h2 className="UserList-global__title">Suggestions</h2>
            <div className="UserList-global__list">
              <Link to={`/${userAuth?.username}`} >
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
