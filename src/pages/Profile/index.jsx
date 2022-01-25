import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { HomeRounded, PlaceRounded, WorkRounded, FavoriteRounded, Link as LinkIcon } from '@mui/icons-material';

import { useResizeDetector } from 'react-resize-detector';
import { GlobalColors } from "../../globals";
import { AuthContext } from '../../context/AuthContext';

import Navbar from '../../components/Nav';
import Feed from "../../components/Feed";
import UserFollows from "../../components/UserFollows";

import noAvatar from "../../assets/noAvatar.png";
import noBanner from "../../assets/noBanner.jpg";

import { 
    ProfileSection,
    ProfileContainer,
    ProfileContainerLeft,
    ProfileContainerLeftTop,
    ProfileContainerLeftTopOverlay,
    ProfileContainerLeftTopBanner,
    ProfileContainerLeftTopUser,
    ProfileContainerLeftTopPicture,
    ProfileContainerLeftTopName,
    ProfileContainerLeftTopButton,
    ProfileContainerLeftBottom,
    ProfileContainerLeftIntro,
    ProfileContainerRight,
} from './ProfileElements';

const Profile = () => {
    let { username } = useParams();  
    // const { user:myUser } = useContext(AuthContext);
    const [user, setUser] = useState();
    const { height:childHeight, ref:childRef } = useResizeDetector();
    
    useEffect(() => {
        const fetchUser = async () => { 
            try {
                const res = await axios.get(`/users?username=${username}`);
                setUser(res.data);
            } catch (e) {
                console.log(e.response);
            }
        }
        fetchUser();
    }, [username])

    return (
        <>
            <Navbar />
            <ProfileSection>
                <ProfileContainer>
                    <ProfileContainerLeft>
                        <ProfileContainerLeftTop height={childHeight} >
                            <ProfileContainerLeftTopOverlay></ProfileContainerLeftTopOverlay>
                            <ProfileContainerLeftTopBanner src={noBanner} />
                            <ProfileContainerLeftTopUser ref={childRef} >
                                <ProfileContainerLeftTopPicture src={noAvatar}  />
                                <ProfileContainerLeftTopName>
                                    {/* <h3>{user.username}</h3> */}
                                    {/* <h4>{user.fullname}</h4> */}
                                    {/* <p>{user.description}</p> */}
                                </ProfileContainerLeftTopName>
                                <ProfileContainerLeftTopButton>Edit Profile</ProfileContainerLeftTopButton>
                            </ProfileContainerLeftTopUser>
                        </ProfileContainerLeftTop>
                        <ProfileContainerLeftBottom>
                            <ProfileContainerLeftIntro>
                                <h1>Intro</h1>
                                {user.city && <p><HomeRounded /> City : {user.city}</p>}
                                {user.from && <p><PlaceRounded /> From : {user.from}</p>}
                                {user.work && <p><WorkRounded /> Work : {user.work}</p>}
                                {user.relationship && <p><FavoriteRounded />Relationship : {user.relationship}</p>}
                                {user.website && 
                                    <a 
                                        target="_blank" 
                                        href="https://github.com/AlvaJufinto/">
                                            <LinkIcon style={{
                                                color: 'white'
                                            }} />Website
                                    </a>
                                }
                                { !user.city && !user.from && !user.work && !user.relationship && !user.website && <p>No information is available for now 😞</p> }
                            </ProfileContainerLeftIntro>
                            <Feed />
                        </ProfileContainerLeftBottom>
                    </ProfileContainerLeft>
                    <ProfileContainerRight>
                        <UserFollows title="User Followings" />
                        <UserFollows title="User Followers" />
                    </ProfileContainerRight>
                </ProfileContainer>  
            </ProfileSection>
        </>
     );
}
 
export default Profile;