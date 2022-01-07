import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ThumbUp,
    ChatBubbleRounded,
    ThumbUpAltOutlined, 
    MoreVert,
} from '@mui/icons-material';

import { GlobalColors, GlobalMeasurement } from "../../globals";

import Navbar from '../../components/Nav';

import {
    PostPageSection,
    PostPageContainer,
    PostPageCard,
    PostPageCardTop,
    PostPageCardTopProfPic,
    PostPageCardTopUsername,
    PostPageCardDesc,
    PostPageCardImg,
    PostPageCardInfo,
    PostPageCardComments,
    PostPageCardComment,
    PostPageCardCommentImg,
    PostPageCardCommmentUsername,
    PostPageCommentContainer,
    PostPageCommentForm,
    PostPageCommentInput,
    PostPageButton,
} from "./PostPageElements";

import noBanner from "../../assets/noBanner.jpg"; 
import noAvatar from "../../assets/noAvatar.png"; 

const PostPage = () => {
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

    const cardInfoStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    }

    return ( 
        <>  
            <Navbar />
            <PostPageSection>
                <PostPageContainer>
                    <PostPageCard>
                        <PostPageCardTop>
                            <PostPageCardTopProfPic src={noAvatar} />
                            <PostPageCardTopUsername to="/user/:id" >alva.jufinto</PostPageCardTopUsername>
                            <p>3 days ago</p>
                            <MoreVert style={{
                                marginLeft: 'auto'
                            }} />
                        </PostPageCardTop>
                        <PostPageCardDesc>Ay yo my first post</PostPageCardDesc>
                        <PostPageCardImg src={noBanner} />
                        <PostPageCardInfo>
                            <p style={cardInfoStyle}>
                                {
                                    isLiked ? <ThumbUp onClick={likePost} /> : <ThumbUpAltOutlined onClick={likePost} />
                                } 
                                {like} like(s)
                            </p>
                            <p style={cardInfoStyle}>0 comments</p>
                        </PostPageCardInfo>
                        <PostPageCardComments>
                            <PostPageCardComment>
                                <Link to="/profile/:id" >
                                    <PostPageCardCommentImg src={noAvatar} />
                                </Link>
                                <PostPageCommentContainer>
                                    <PostPageCardCommmentUsername to="/profile/:id" >alva.jufinto</PostPageCardCommmentUsername>
                                    <p style={{
                                        backgroundColor: GlobalColors.black,
                                        maxWidth: '100%',
                                        padding: '10px',
                                        borderRadius: GlobalMeasurement.squareBorderRadius,
                                        margin: '15px 0 5px 0',
                                    }}>damn nice post
                                    </p>
                                    <p>3 days ago</p>
                                </PostPageCommentContainer>
                            </PostPageCardComment>
                            <PostPageCardComment>
                                <Link to="/profile/:id" >
                                    <PostPageCardCommentImg src={noAvatar} />
                                </Link>
                                <PostPageCommentContainer>
                                    <PostPageCardCommmentUsername to="/profile/:id" >alva.jufinto</PostPageCardCommmentUsername>
                                    <p style={{
                                        backgroundColor: GlobalColors.black,
                                        maxWidth: '100%',
                                        padding: '10px',
                                        borderRadius: GlobalMeasurement.squareBorderRadius,
                                        margin: '15px 0 5px 0',
                                    }}>damn nice post
                                    </p>
                                    <p>3 days ago</p>
                                </PostPageCommentContainer>
                            </PostPageCardComment>
                            <PostPageCardComment>
                                <Link to="/profile/:id" >
                                    <PostPageCardCommentImg src={noAvatar} />
                                </Link>
                                <PostPageCommentContainer>
                                    <PostPageCardCommmentUsername to="/profile/:id" >alva.jufinto</PostPageCardCommmentUsername>
                                    <p style={{
                                        backgroundColor: GlobalColors.black,
                                        maxWidth: '100%',
                                        padding: '10px',
                                        borderRadius: GlobalMeasurement.squareBorderRadius,
                                        margin: '15px 0 5px 0',
                                    }}>damn nice post
                                    </p>
                                    <p>3 days ago</p>
                                </PostPageCommentContainer>
                            </PostPageCardComment>
                            <PostPageCardComment>
                                <Link to="/profile/:id" >
                                    <PostPageCardCommentImg src={noAvatar} />
                                </Link>
                                <PostPageCommentContainer>
                                    <PostPageCardCommmentUsername to="/profile/:id" >alva.jufinto</PostPageCardCommmentUsername>
                                    <p style={{
                                        backgroundColor: GlobalColors.black,
                                        maxWidth: '100%',
                                        padding: '10px',
                                        borderRadius: GlobalMeasurement.squareBorderRadius,
                                        margin: '15px 0 5px 0',
                                    }}>damn nice post
                                    </p>
                                    <p>3 days ago</p>
                                </PostPageCommentContainer>
                            </PostPageCardComment>
                            <PostPageCardComment>
                                <Link to="/profile/:id" >
                                    <PostPageCardCommentImg src={noAvatar} />
                                </Link>
                                <PostPageCommentContainer>
                                    <PostPageCardCommmentUsername to="/profile/:id" >alva.jufinto</PostPageCardCommmentUsername>
                                    <p style={{
                                        backgroundColor: GlobalColors.black,
                                        maxWidth: '100%',
                                        padding: '10px',
                                        borderRadius: GlobalMeasurement.squareBorderRadius,
                                        margin: '15px 0 5px 0',
                                    }}>damn nice post
                                    </p>
                                    <p>3 days ago</p>
                                </PostPageCommentContainer>
                            </PostPageCardComment>
                            <PostPageCardComment>
                                <Link to="/profile/:id" >
                                    <PostPageCardCommentImg src={noAvatar} />
                                </Link>
                                <PostPageCommentContainer>
                                    <PostPageCardCommmentUsername to="/profile/:id" >alva.jufinto</PostPageCardCommmentUsername>
                                    <p style={{
                                        backgroundColor: GlobalColors.black,
                                        maxWidth: '100%',
                                        padding: '10px',
                                        borderRadius: GlobalMeasurement.squareBorderRadius,
                                        margin: '15px 0 5px 0',
                                    }}>damn nice post
                                    </p>
                                    <p>3 days ago</p>
                                </PostPageCommentContainer>
                            </PostPageCardComment>
                            <PostPageCardComment>
                                <Link to="/profile/:id" >
                                    <PostPageCardCommentImg src={noAvatar} />
                                </Link>
                                <PostPageCommentContainer>
                                    <PostPageCardCommmentUsername to="/profile/:id" >alva.jufinto</PostPageCardCommmentUsername>
                                    <p style={{
                                        backgroundColor: GlobalColors.black,
                                        maxWidth: '100%',
                                        padding: '10px',
                                        borderRadius: GlobalMeasurement.squareBorderRadius,
                                        margin: '15px 0 5px 0',
                                    }}>damn nice post
                                    </p>
                                    <p>3 days ago</p>
                                </PostPageCommentContainer>
                            </PostPageCardComment>
                            <PostPageCardComment>
                                <Link to="/profile/:id" >
                                    <PostPageCardCommentImg src={noAvatar} />
                                </Link>
                                <PostPageCommentContainer>
                                    <PostPageCardCommmentUsername to="/profile/:id" >s.alva_j</PostPageCardCommmentUsername>
                                    <p style={{
                                        backgroundColor: GlobalColors.black,
                                        maxWidth: '100%',
                                        padding: '10px',
                                        borderRadius: GlobalMeasurement.squareBorderRadius,
                                        margin: '15px 0 5px 0',
                                    }}>damn nice post
                                    </p>
                                    <p>3 days ago</p>
                                </PostPageCommentContainer>
                            </PostPageCardComment>
                        </PostPageCardComments>
                        <PostPageCommentForm>
                            <PostPageCommentInput placeholder="Add your commment..." />
                            <PostPageButton>Post</PostPageButton> 
                        </PostPageCommentForm>
                    </PostPageCard>   
                </PostPageContainer>
            </PostPageSection>
        </>
     );
}
 
export default PostPage;