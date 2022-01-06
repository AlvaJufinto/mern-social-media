import { useState } from "react";
import {
    ThumbUp,
    ChatBubbleRounded,
    ThumbUpAltOutlined, 
    MoreVert,
} from '@mui/icons-material';

import Navbar from '../../components/Nav';
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";

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

                            </PostPageCardComment>
                        </PostPageCardComments>
                    </PostPageCard>   
                </PostPageContainer>
            </PostPageSection>
        </>
     );
}
 
export default PostPage;