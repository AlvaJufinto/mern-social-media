import { useContext } from "react";
import {
  Link
} from "react-router-dom";

import Navbar from "../components/Navbar";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import noAvatar from "./../assets/img/noAvatar.png";

import './../styles/pages-css/post-page.css';

const PostPage = () => {

  return (
    <>
      <Navbar />
      <div className="PostPageContainer section-global">
        <Post />
        <div className="PostPage__CommentSection container-border-global">
          <div className="PostPage__comments-container">
            <div className="PostPage__Comment">
                <img src={noAvatar} alt="profile img" className="PostPage__Comment__img" />
                <div className="PostPage__Comment__right-section">
                  <div className="PostPage__Comment__comment-details">
                    <h3 className="PostPage__Comment__username">tom.shelby</h3>
                    <p className="PostPage__Comment__period">3 days Ago</p>
                  </div>
                  <div className="PostPage__Comment__Content">
                    SLEBEWWWWWWWWW
                  </div>
                </div>
            </div>
            <div className="PostPage__Comment">
                <img src={noAvatar} alt="profile img" className="PostPage__Comment__img" />
                <div className="PostPage__Comment__right-section">
                  <div className="PostPage__Comment__comment-details">
                    <h3 className="PostPage__Comment__username">tom.shelby</h3>
                    <p className="PostPage__Comment__period">3 days Ago</p>
                  </div>
                  <div className="PostPage__Comment__Content">
                    SLEBEWWWWWWWWW
                  </div>
                </div>
            </div>
          </div>
          <form  className="PostPage__AddComment">
            <input type="text" className="PostPage__AddComment__search-input input-wrapper-global" />
            <button className="PostPage__AddComment__search-button button-global">Comment</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostPage;
