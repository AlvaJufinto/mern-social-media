import { useState, useContext } from "react";
import {
  Link
} from "react-router-dom";

import { ReactComponent as LikeOutLine } from "./../assets/svg/like_outline.svg";
import { ReactComponent as LikeBg } from "./../assets/svg/like_bg.svg";

import noAvatar from "./../assets/img/noAvatar.png";
import noBanner from "./../assets/img/noBanner.jpg";

import './../styles/components-css/post.css';

const Post = () => { 
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  return (
      <div className="PostWrapper container-border-global ">
        <div className="Post__Top">
            <Link to="/:username">
                <img src={noAvatar} alt="bruh" className="Post__Top__profile-img" />
                <p className="Post__Top__username">Alfie Solomons</p>
            </Link>

            <p className="Post__Top__period" >3 days ago</p>
        </div>
        <div className="Post__Middle">
            <p className="Post__Middle__Description">Some cool photo from Ancestral Plane</p>
            <img src={noBanner} alt="burh" className="Post__Middle__img" />
        </div>
        <div className="Post__Bottom">
            <div className="Post__Bottom__likes-comments" onClick={() => {
                setIsLiked(!isLiked );
                setLikes(isLiked ? likes - 1 : likes + 1);
            }}>
                {isLiked ? <LikeBg /> : <LikeOutLine />}
                <p>{likes} Like{likes > 1 ? 's' : ''}</p>
            </div>
            <div className="Post__Bottom__likes-comments">
                <i class="fa-solid fa-message"></i>
                <p>0 Comment(s)</p>
            </div>
        </div>
      </div>
  );
}

export default Post;
