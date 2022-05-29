import { useState, useEffect, useContext, useRef } from "react";
import {
  Link,
  useParams
} from "react-router-dom";
import { publicRoute, interactApi } from "../api";
import { UserContext } from "../context/UserContext";

import Navbar from "../components/Navbar";
import Post from "../components/Post";
import noAvatar from "./../assets/img/noAvatar.png";

import './../styles/pages-css/post-page.css';

const PostPage = () => {
  const { userAuth } = useContext(UserContext);
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState({});
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState([]);
  let jwtToken = localStorage.getItem("SM_JWT_Token");

  useEffect(() =>{
    console.log(postDetails?.comments);
  }, [postDetails])
  
  useEffect(() => {
    fetchPost();
  }, [id])  
  
  const fetchPost = async () => {
    try {
      let res = await publicRoute.getPost(id);
      console.log(res.data.data);
      setPostDetails(res.data.data);
      setPostComments(res.data.data.comments.reverse());
    } catch (err) {
      console.log(err.response);
    }
  }

  const commentHandler = async (e) => {
    e.preventDefault();
    const body = {
      comment: comment, 
    }
    console.log(body)
    try {
      let res = await interactApi.commentPost(jwtToken, id, body);
      setComment("")
      setPostComments([
        { 
          belongsto: { 
            username: userAuth?.username, 
            fullname: userAuth?.fullname,
            profilePict: {
              imageID: 'zamndaniel',
              imageUrl: 'zamndaniel',
            } 
          }, 
          comment: comment 
        },
        ...postComments
      ])
    } catch (err) {
      console.log(err.response);
    }
  }

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
            {postComments?.map(( comment ) => (
              <div className="PostPage__Comment">
                <img src={comment?.belongsto?.profilePict?.imageUrl === "zamndaniel" || null || "" ? noAvatar : comment?.belongsto?.profilePict?.imageUrl} alt="profile img" className="PostPage__Comment__img" />
                <div className="PostPage__Comment__right-section">
                  <Link to={`/${comment?.belongsto?.username}`} className="PostPage__Comment__comment-details">
                    <h3 className="PostPage__Comment__username">{comment?.belongsto?.username}</h3>
                  </Link>
                  <div className="PostPage__Comment__Content">
                    {comment?.comment}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <form className="PostPage__AddComment" onSubmit={e =>commentHandler(e)}>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)} className="PostPage__AddComment__search-input input-wrapper-global" placeholder="Add your comment here.." required/>
            <button className="PostPage__AddComment__search-button button-global">Comment</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostPage;
