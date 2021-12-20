import { BrowserRouter as Router } from "react-router-dom";

import noAvatar from "../../img/noAvatar.png";

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
                            <p>William Schofield</p>
                        </FollowingCard>
                        <FollowingCard to="/profile/:id" exact>
                            <FollowingImg src={noAvatar} />
                            <p>William Schofield</p>
                        </FollowingCard>
                        <FollowingCard to="/profile/:id" exact>
                            <FollowingImg src={noAvatar} />
                            <p>William Schofield</p>
                        </FollowingCard>
                        <FollowingCard to="/profile/:id" exact>
                            <FollowingImg src={noAvatar} />
                            <p>William Schofield</p>
                        </FollowingCard>
                        <FollowingCard to="/profile/:id" exact>
                            <FollowingImg src={noAvatar} />
                            <p>William Schofield</p>
                        </FollowingCard>
                        <FollowingCard to="/profile/:id" exact>
                            <FollowingImg src={noAvatar} />
                            <p>William Schofield</p>
                        </FollowingCard>
                        <FollowingCard to="/profile/:id" exact>
                            <FollowingImg src={noAvatar} />
                            <p>William Schofield</p>
                        </FollowingCard>
                        <FollowingCard to="/profile/:id" exact>
                            <FollowingImg src={noAvatar} />
                            <p>William Schofield</p>
                        </FollowingCard>
                    </FollowingCards>
                </FollowingContainer>
            </SidebarStyled>   
        </Router> 
     );
}
 
export default Sidebar;