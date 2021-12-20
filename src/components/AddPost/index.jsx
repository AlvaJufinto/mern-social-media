import { Image } from '@mui/icons-material';

import {
    AddPostStyled,
    TopAddPost,
    AddPostProfilePicture,
    AddPostTextInput,
    AttachmentsContainer,
    BottomAddPost,
    AddPostButton
} from "./AddPostElements"

import noAvatar from "../../img/noAvatar.png";

const Feed = () => {
    return ( 
        <AddPostStyled>
            <TopAddPost>
                <AddPostProfilePicture src={noAvatar} />
                <AddPostTextInput placeholder="Tell us what you're thnking about, William!" />
            </TopAddPost>
            <BottomAddPost>
                <AttachmentsContainer htmlFor="media">
                    <Image style={{
                        color: '#ff9191',
                        fontSize: '40px',
                        cursor: 'pointer'
                    }} />
                    <span style={{
                        color: 'white',
                        fontSize: '20px',
                        cursor: 'pointer',
                        margin: '0px 10px'
                    }}>Media</span>
                    <input
                        style={{ display: "none" }}
                        type="file" 
                        id="media"
                        accept=".png,.jpeg,.jpg"
                    />
                </AttachmentsContainer>
                <AddPostButton>Share</AddPostButton>
            </BottomAddPost>
        </AddPostStyled>
     );
}
 
export default Feed;