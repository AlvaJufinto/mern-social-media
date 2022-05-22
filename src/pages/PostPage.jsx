import { useState, useEffect, useContext } from "react";
import {
  Link,
  useParams
} from "react-router-dom";
import { publicRoute } from "../api";

import Navbar from "../components/Navbar";
import Post from "../components/Post";
import noAvatar from "./../assets/img/noAvatar.png";

import './../styles/pages-css/post-page.css';

const PostPage = () => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState();

  useEffect(() =>{
    console.log(postDetails?.post)
  }, [postDetails])

  useEffect( async () => {
    console.log(id);
    try {
      let res = await publicRoute.getPost(id);
      console.log(res.data.data);
      setPostDetails(res.data.data)
    } catch (err) {
      console.log(err.response)
    }
  }, [id])
  

  return (
    <>
      <Navbar />
      <div className="PostPageContainer section-global">
        <Post
          postId={id}
          username={postDetails?.belongsto?.username}
          period={postDetails?.post?.date}
          image={postDetails?.post?.image}
          description={postDetails?.post?.description}
          comment={postDetails?.comments}
          like={postDetails?.likes}
        />
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
