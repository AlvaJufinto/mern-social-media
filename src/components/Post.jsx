import { useState, useContext } from "react";
import {
  Link
} from "react-router-dom";

import { ReactComponent as LikeOutLine } from "./../assets/svg/like_outline.svg";
import { ReactComponent as LikeBg } from "./../assets/svg/like_bg.svg";

import noAvatar from "./../assets/img/noAvatar.png";
import noBanner from "./../assets/img/noBanner.jpg";

import './../styles/components-css/post.css';

const Post = ({ postId, username, period, description, imgLink }) => { 
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  return (
      <div className="PostWrapper container-border-global ">
        <div className="Post__Top">
            <Link to={`/${username}`}>
                <img src={noAvatar} alt="bruh" className="Post__Top__profile-img" />
                <p className="Post__Top__username">{username}</p>
            </Link>

            <p className="Post__Top__period" >{period}</p>
        </div>
        <div className="Post__Middle">
            <p className="Post__Middle__Description">{description}</p>
            {imgLink && <img src={noBanner} alt="burh" className="Post__Middle__img" />}
        </div>
        <div className="Post__Bottom">
            <div className="Post__Bottom__likes-comments" onClick={() => {
                setIsLiked(!isLiked );
                setLikes(isLiked ? likes - 1 : likes + 1);
            }}>
                {isLiked ? <LikeBg /> : <LikeOutLine />}
                <p>{likes} Like{likes > 1 ? 's' : ''}</p>
            </div>
            <Link className="Post__Bottom__likes-comments" to={`/p/${postId}`}>
                <i class="fa-solid fa-message"></i>
                <p>0 Comment(s)</p>
            </Link>
        </div>
      </div>
  );
}

export default Post;
