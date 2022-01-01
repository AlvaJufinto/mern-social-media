import { GlobalColors } from "../../globals";
import { HomeRounded, PlaceRounded, WorkRounded, FavoriteRounded } from '@mui/icons-material';

import Navbar from '../../components/Nav';
import Feed from "../../components/Feed";

import noAvatar from "../../assets/noAvatar.png";
import noBanner from "../../assets/noBanner.jpg";

import { 
    ProfileSection,
    ProfileContainer,
    ProfileContainerLeft,
    ProfileContainerLeftTop,
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
    return (
        <>
            <Navbar />
            <ProfileSection>
                <ProfileContainer>
                    <ProfileContainerLeft>
                        <ProfileContainerLeftTop>
                            <ProfileContainerLeftTopBanner src={noBanner} />
                            <ProfileContainerLeftTopUser>
                                <ProfileContainerLeftTopPicture src={noAvatar} />
                                <ProfileContainerLeftTopName>
                                    <h3>s.alva_j</h3>
                                    <p>Stanislaus Alva Jufinto</p>
                                </ProfileContainerLeftTopName>
                            </ProfileContainerLeftTopUser>
                            <ProfileContainerLeftTopButton>Edit Profile</ProfileContainerLeftTopButton>
                        </ProfileContainerLeftTop>
                        <ProfileContainerLeftBottom>
                            <ProfileContainerLeftIntro>
                                <h1>Intro</h1>
                                <p><HomeRounded /> City : Jakarta</p>
                                <p><PlaceRounded /> From : Jakarta</p>
                                <p><WorkRounded /> Work : Stark Industries</p>
                                <p><FavoriteRounded />Relationship : Single</p>
                            </ProfileContainerLeftIntro>
                            <Feed />
                        </ProfileContainerLeftBottom>
                    </ProfileContainerLeft>
                    <ProfileContainerRight></ProfileContainerRight>
                </ProfileContainer>  
            </ProfileSection>
        </>
     );
}
 
export default Profile;