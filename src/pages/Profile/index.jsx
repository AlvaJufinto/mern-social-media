import { BrowserRouter as Router } from "react-router-dom";
import { LogoutRounded } from '@mui/icons-material';

import { GlobalColors } from "../../globals";
import noAvatar from "../../assets/noAvatar.png";

import { 
    ProfileSection,
    ProfileContainer,
} from './ProfileElements';

const Profile = () => {
    return (
        <Router>
            <ProfileSection>
                <ProfileContainer>
                </ProfileContainer>  
            </ProfileSection>
        </Router> 
     );
}
 
export default Profile;