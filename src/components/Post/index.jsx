import { BrowserRouter as Router } from 'react-router-dom';

import {
    MoreVert, 
    ThumbUp, 
    ThumbUpAltOutlined 
} from '@mui/icons-material';
import noBanner from "../../img/noBanner.jpg";
import noAvatar from "../../img/noAvatar.png";

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
                        <ThumbUpAltOutlined />
                        <BottomPostLikeCount>5 like(s)</BottomPostLikeCount>
                    </BottomPostLike>
                    <BottomPostComment>5 comment(s)</BottomPostComment>
                </BottomPost>
            </PostStyled>   
        </Router>
     );
}
 
export default Post;