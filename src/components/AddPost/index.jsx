import { useState } from 'react';
import { Image, Cancel } from '@mui/icons-material';
import { GlobalColors } from "../../globals";

import {
    AddPostStyled,
    TopAddPost,
    AddPostProfilePicture,
    AddPostTextInput,
    AttachmentsContainer,
    BottomAddPost,
    AddPostButton,
    ShareImgContainer,
    ShareImg,
} from "./AddPostElements"

import noAvatar from "../../assets/noAvatar.png";

const AddPost = () => {
    const [file, setFile] = useState(null);

    return ( 
        <AddPostStyled>
            <TopAddPost>
                <AddPostProfilePicture src={noAvatar} />
                <AddPostTextInput placeholder="Tell us what you're thnking about, William!" />
            </TopAddPost>
            {file && (
                <ShareImgContainer>
                    <ShareImg src={URL.createObjectURL(file)} alt="tempImg" />
                    <Cancel 
                        onClick={() => setFile(null)}
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            // color: GlobalColors.black,
                            opacity: '0.7',
                            cursor: 'pointer'
                        }} 
                    />
                </ShareImgContainer>
            )}
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
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </AttachmentsContainer>
                <AddPostButton>Share</AddPostButton>
            </BottomAddPost>
        </AddPostStyled>
     );
}
 
export default AddPost;