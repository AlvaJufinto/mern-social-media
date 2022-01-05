import { useState } from "react";
import {
    ThumbUp, 
    ChatBubbleRounded
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
    let items = ['1','2','3','4','1'];

    return ( 
        <>  
            <Navbar />
            <PostPageSection>
                <PostPageContainer>
                    <PostPageCard>
                    </PostPageCard>   
                </PostPageContainer>
            </PostPageSection>
        </>
     );
}
 
export default PostPage;