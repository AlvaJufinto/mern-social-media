import { BrowserRouter as Router } from "react-router-dom";

import { GlobalColors } from "../../globals";
import noAvatar from "../../assets/noAvatar.png";

import { 
    SidebarStyled,
    FollowingContainer,
    FollowingCards,
    FollowingCard,
    FollowingTitle,
    FollowingImg,
} from './SidebarElements';

const Sidebar = () => {
    return (
        <Router>
            <SidebarStyled>
                <FollowingContainer>
                    <FollowingTitle>Followings</FollowingTitle>
                    <FollowingCards>
                        <FollowingCard to="/profile/:id" exact>
                            <FollowingImg src={noAvatar} />
                            <p>blake_s</p>
                            <p style={{
                                color: GlobalColors.red,
                                marginLeft: 'auto'
                            }}>Unfollow</p>
                        </FollowingCard>
                        <FollowingCard to="/profile/:id" exact>
                            <FollowingImg src={noAvatar} />
                            <p>blake_s</p>
                            <p style={{
                                color: GlobalColors.red,
                                marginLeft: 'auto'
                            }}>Unfollow</p>
                        </FollowingCard>
                        <FollowingCard to="/profile/:id" exact>
                            <FollowingImg src={noAvatar} />
                            <p>blake_s</p>
                            <p style={{
                                color: GlobalColors.red,
                                marginLeft: 'auto'
                            }}>Unfollow</p>
                        </FollowingCard>
                        
                    </FollowingCards>
                </FollowingContainer>
            </SidebarStyled>   
        </Router> 
     );
}
 
export default Sidebar;