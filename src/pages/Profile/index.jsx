import { HomeRounded, PlaceRounded, WorkRounded, FavoriteRounded, Link as LinkIcon } from '@mui/icons-material';
import { useResizeDetector } from 'react-resize-detector';
import { GlobalColors } from "../../globals";



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
    const { height:childHeight, ref:childRef } = useResizeDetector();

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
                                    <h3>s.alva_j</h3>
                                    <h4>Stanislaus Alva Jufinto</h4>
                                    <p>Not a perfect programmer, but a good guy</p>
                                </ProfileContainerLeftTopName>
                                <ProfileContainerLeftTopButton>Edit Profile</ProfileContainerLeftTopButton>
                            </ProfileContainerLeftTopUser>
                        </ProfileContainerLeftTop>
                        <ProfileContainerLeftBottom>
                            <ProfileContainerLeftIntro>
                                <h1>Intro</h1>
                                <p><HomeRounded /> City : Jakarta</p>
                                <p><PlaceRounded /> From : Jakarta</p>
                                <p><WorkRounded /> Work : Stark Industries</p>
                                <p><FavoriteRounded />Relationship : Single</p>
                                <a 
                                    target="_blank" 
                                    href="https://github.com/AlvaJufinto/">
                                        <LinkIcon style={{
                                            color: 'white'
                                        }} />Website
                                </a>
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