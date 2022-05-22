import { useState, useContext, useEffect } from "react";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import moment from "moment";

import { UserContext } from "../context/UserContext";
import { userApi } from "../api";

import { ReactComponent as LikeOutLine } from "./../assets/svg/like_outline.svg";
import { ReactComponent as LikeBg } from "./../assets/svg/like_bg.svg";

import noAvatar from "./../assets/img/noAvatar.png";
import noBanner from "./../assets/img/noBanner.jpg";

import './../styles/components-css/post.css';

const Post = ({ postId, username, period, description, like, comment, image }) => { 
  const { userAuth, isUserPostsLoading,dispatch } = useContext(UserContext);
  const [likes, setLikes] = useState(like && like);
  const [isLiked, setIsLiked] = useState(false);
  let jwtToken = localStorage.getItem("SM_JWT_Token");
  
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname.split("/")[1]);
  }, [])

const deletePostHandler = async () => {
    dispatch({ type: "DELETE_POST_START" });
    try {
        let res = await userApi.deletePost(jwtToken, postId);
        console.log(res);
        dispatch({ type: "DELETE_POST_SUCCESS", payload: postId });
        if(location.pathname.split("/")[1] === 'p') {
            navigate(-1);
            console.log("ingyah")
        }
    } catch (err) {
        console.log(err.reponse)
        dispatch({ type: "DELETE_POST_FAILURE", payload: err.response.data.message });
        navigate("/sign-in", { replace: true });
    }
  }

  return (
      <div className="PostWrapper container-border-global ">
        <div className="Post__Top">
            <Link to={`/${username}`}>
                <img src={noAvatar} alt="bruh" className="Post__Top__profile-img" />
                <p className="Post__Top__username">{username} •	{moment(period).fromNow()}</p>
            </Link>
            {username === userAuth?.username ? 
                <div>
                    {isUserPostsLoading && <i className="fas fa-circle-notch fa-spin Home__middle-side__IconLoading "></i>}
                    {!isUserPostsLoading && <i class="fa-solid fa-trash  Post__Top__trash" onClick={deletePostHandler}></i>}
                </div>
            :
            ""}
        </div>
        <div className="Post__Middle">
            <p className="Post__Middle__Description">{description}</p>
            {image && <img src={image?.imageUrl} className="Post__Middle__img" alt={image?.imageID} />}
        </div>
        <div className="Post__Bottom">
            <div className="Post__Bottom__likes-comments" onClick={() => {
                setIsLiked(!isLiked );
                setLikes(isLiked ? likes - 1 : likes + 1);
            }}>
                {isLiked ? <LikeBg /> : <LikeOutLine />}
                <p>{likes ? likes : like} Like{likes > 1 && 's'}</p>
            </div>
            <Link className="Post__Bottom__likes-comments" to={`/p/${postId}`}>
                <i class="fa-solid fa-message"></i>
                <p>{comment} Comment{comment?.length > 1 && 's'}</p>
            </Link>
        </div>
      </div>
  );
}

export default Post;
