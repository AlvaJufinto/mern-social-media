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
    PostPageCardContentImg,
} from "./PostPageElements";

import noBanner from "../../assets/noBanner.jpg"; 

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


    return ( 
        <>  
            <Navbar />
            <PostPageSection>
                <PostPageContainer>
                    <PostPageCard>
                        <PostPageCardTop>
                            <PostPageCardTopProfPic />
                            <PostCardTopUsername>alva.jufinto</PostCardTopUsername>
                        </PostPageCardTop>
                        <PostPageCardDesc>Ay yo my first post</PostPageCardDesc>
                        <PostPageCardImg src={noBanner} />
                        <PostPageCardInfo>
                            <p>
                                {
                                    isLiked ? <ThumbUp onClick={likePost} /> : <ThumbUpAltOutlined onClick={likePost} />
                                } 
                                {like} like(s)
                            </p>
                            <p>0 comments</p>
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