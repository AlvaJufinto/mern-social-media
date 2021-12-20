import AddPost from "../AddPost"
import Post from "../Post"

import {
    FeedStyled
} from "./FeedElements"

const Feed = () => {
    return ( 
        <FeedStyled>
            <AddPost />
            <Post />
        </FeedStyled>
     );
}
 
export default Feed;