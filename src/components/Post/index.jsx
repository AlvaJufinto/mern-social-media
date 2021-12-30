import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
    MoreVert, 
    ThumbUp, 
    ThumbUpAltOutlined 
} from '@mui/icons-material';
import noBanner from "../../assets/noBanner.jpg";
import noAvatar from "../../assets/noAvatar.png";

import { 
    PostStyled,
    TopPost,
    TopPostDescription,
    TopPostProfileLink,
    TopPostProfilePicture,
    TopPostName,
    TopPostDate,
    MiddlePost,
    MiddlePostDescription,
    MiddlePostImg,
    BottomPost,
    BottomPostLike,
    BottomPostLikeCount,
    BottomPostComment,
} from "./PostElements";

const Post = () => {
    const [like, setLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const likePost = () => {
        if(isLiked) {
            setLike(like - 1);
            setIsLiked(!isLiked);
        } else {
            setLike(like + 1);
            setIsLiked(!isLiked);
        }
    }

    return ( 
        <Router>
            <PostStyled>
                <TopPost>
                    <TopPostDescription>
                        <TopPostProfileLink to="/profile/:id" >
                            <TopPostProfilePicture src={noAvatar} />
                            <TopPostName>William Schofield</TopPostName>
                        </TopPostProfileLink>
                        <TopPostDate>3 days ago</TopPostDate>
                    </TopPostDescription>
                    <MoreVert />
                </TopPost>
                <MiddlePost>
                    <MiddlePostDescription>Yes bro</MiddlePostDescription>
                    <MiddlePostImg src={noBanner} /> 
                </MiddlePost>
                <BottomPost>
                    <BottomPostLike>
                        {
                            isLiked ? <ThumbUp onClick={likePost} /> : <ThumbUpAltOutlined onClick={likePost} />
                        }
                        <BottomPostLikeCount>{like} like(s)</BottomPostLikeCount>
                    </BottomPostLike>
                    <BottomPostComment>5 comment(s)</BottomPostComment>
                </BottomPost>
            </PostStyled>   
        </Router>
     );
}
 
export default Post;