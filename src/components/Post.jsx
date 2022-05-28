import { useState, useContext, useEffect } from "react";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import moment from "moment";

import { UserContext } from "../context/UserContext";
import { userApi, interactApi, publicRoute } from "../api";

import { ReactComponent as LikeOutLine } from "./../assets/svg/like_outline.svg";
import { ReactComponent as LikeBg } from "./../assets/svg/like_bg.svg";

import noAvatar from "./../assets/img/noAvatar.png";
import noBanner from "./../assets/img/noBanner.jpg";

import './../styles/components-css/post.css';

const Post = ({ postId, username, period, description, like, comment, image, }) => { 
  const { userAuth, isUserPostsLoading, dispatch } = useContext(UserContext);
  const [likes, setLikes] = useState(like?.length);
  const [postLikes, setPostLikes] = useState();
  const [isLiked, setIsLiked] = useState(like?.includes(userAuth?._id));
  const [isPostLiked, setIsPostLiked] = useState();
  let jwtToken = localStorage.getItem("SM_JWT_Token");
  
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname.split("/")[1]);
    console.log(like?.includes(userAuth?._id));
    console.log(jwtToken);
  }, [jwtToken])

  useEffect( async () => {
    try {
      let res = await publicRoute.getPostLikes(postId);
      console.log(res.data.data);
      setPostLikes(res.data.data);
    } catch (err) {
      console.log(err.response);
    }
  }, [postId, isLiked])

  useEffect(() => {
    likeChecker()
  }, [postLikes, location])

  const likeChecker = () => {
    postLikes?.map(( like ) => {
      if(like?.username === userAuth?.username ) {
        setIsPostLiked(true);
      }
    });  
  }

  const likePostHandler = async () => {
    if(location.pathname.split("/")[1]) {
      // setPostLikes(isPostLiked ? postLikes?.length - 1 : postLikes?.length + 1);
      
      if(isPostLiked) {
          try {
              let res = await interactApi.unlikePost(jwtToken, postId)
              console.log(res)  
              setIsPostLiked(false);
              // setPostLikes(postLikes - 1)
          } catch (err) {
              console.log(err.response)
          }
      } else {
          try {
              let res = await interactApi.likePost(jwtToken, postId)
              console.log(res)  
              setIsPostLiked(true);
              // setPostLikes(postLikes + 1)
          } catch (err) {
              console.log(err.response)
          }
      }
    } else {
      setLikes(isLiked ? likes - 1 : likes + 1);
      
      if(isLiked) {
          try {
              let res = await interactApi.unlikePost(jwtToken, postId)
              console.log(res)  
              setIsLiked(false);
          } catch (err) {
              console.log(err.response)
          }
      } else {
          try {
              let res = await interactApi.likePost(jwtToken, postId)
              console.log(res)  
              setIsLiked(true);
          } catch (err) {
              console.log(err.response)
          }
      }
    }
  }

  const deletePostHandler = async () => {
    dispatch({ type: "DELETE_POST_START" });
    try {
        let res = await userApi.deletePost(jwtToken, postId);
        console.log(res);
        dispatch({ type: "DELETE_POST_SUCCESS", payload: postId });
        
        if(location.pathname.split("/")[1] === 'p') {
            navigate(-1);
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
            <div className="Post__Bottom__likes-comments" onClick={likePostHandler}>
                {
                  location.pathname.split("/")[1] === 'p' ?
                    isPostLiked ? <LikeBg /> : <LikeOutLine />
                  :
                    isLiked ? <LikeBg /> : <LikeOutLine />
                }
                <p>{likes || postLikes?.length} Like{likes > 1 && 's'}</p>
            </div>
            <Link className="Post__Bottom__likes-comments" to={`/p/${postId}`}>
                <i class="fa-solid fa-message"></i>
                <p>{comment?.length} Comment{comment?.length > 1 && 's'}</p>
            </Link>
        </div>
      </div>
  );
}

export default Post;
