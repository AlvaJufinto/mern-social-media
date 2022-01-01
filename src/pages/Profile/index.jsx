import { BrowserRouter as Router } from "react-router-dom";
import Navbar from '../../components/Nav';
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";

import { LogoutRounded } from '@mui/icons-material';

import { GlobalColors } from "../../globals";
import noAvatar from "../../assets/noAvatar.png";

import { 
    ProfileSection,
    ProfileContainer,
} from './ProfileElements';

const Profile = () => {
    return (
        <>
            <Navbar />
            <Router>
                <ProfileSection>
                    <ProfileContainer>
                    </ProfileContainer>  
                </ProfileSection>
            </Router> 
        </>
     );
}
 
export default Profile;