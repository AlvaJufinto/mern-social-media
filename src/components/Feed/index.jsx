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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </FeedStyled>
     );
}
 
export default Feed;