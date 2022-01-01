import { GlobalColors } from "../../globals";

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
                        </ProfileContainerLeftTop>
                        <ProfileContainerLeftBottom>
                            <ProfileContainerLeftIntro>

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