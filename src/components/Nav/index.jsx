import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
    NavbarStyled,
    NavbarTitle,
    NavbarCenter,
    NavbarSearchBar,
    NavbarRight,
    NavbarLinkContainer,
    NavbarLink,
    ProfilePictureContainer,
    ProfilePictureImg,
    ProfileOptions,
    NavbarMenuIcon,
    NavbarExtended,
    NavbarExtendedSearchBar
} from "./NavElements";

import noAvatar from "../../img/noAvatar.png";

import { Search, Logout } from '@mui/icons-material';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExtended, setIsExtended] = useState(false);

    return (
        <Router>
            <NavbarStyled>
                <NavbarTitle to="/">
                    Synchronize
                </NavbarTitle>
                <NavbarCenter>
                    <Search />
                    <NavbarSearchBar    
                        placeholder="Find users, media, posts, and more..."
                        type="text" />
                </NavbarCenter>
                <NavbarRight>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">
                            Home
                        </NavbarLink>
                        <NavbarLink to="/explore" exact>
                            Explore
                        </NavbarLink>
                        <NavbarLink to="/chat" exact>
                            Chat
                        </NavbarLink>
                    </NavbarLinkContainer>
                    <ProfilePictureContainer onClick={() => setIsVisible(!isVisible)}>
                        <ProfilePictureImg src={noAvatar} />
                        <ProfileOptions isVisible={isVisible}>
                            <NavbarLink
                                to="/profile/:id">
                                Profile
                            </NavbarLink>
                            <NavbarLink 
                                style={{
                                    color: '#ff8686',
                                    margin: '10px 0px 0px 0px',
                                    display: 'flex',
                                    width: '50%',
                                    justifyContent: 'space-between'
                                }}
                                to="/logout">
                                Logout <Logout />
                            </NavbarLink>
                        </ProfileOptions>
                    </ProfilePictureContainer>
                </NavbarRight>
                <NavbarMenuIcon onClick={() => {
                    setIsExtended(!isExtended);
                    setIsVisible(false);
                }} />
            </NavbarStyled>
            <NavbarExtended isExtended={isExtended}>
                <NavbarLink to="/" >
                    Home
                </NavbarLink>
                <NavbarLink to="/explore">
                    Explore
                </NavbarLink>
                <NavbarLink to="/chat">
                    Chat
                </NavbarLink>
                <ProfilePictureContainer onClick={() => setIsVisible(!isVisible)}>
                    <ProfilePictureImg
                        style={{
                            height: "50px",
                            width: '50px'
                        }}
                        src={noAvatar} />
                    <ProfileOptions 
                        isVisible={isVisible}
                        isExtended={isExtended}>
                    <NavbarLink
                        to="/profile/:id">
                        Profile
                    </NavbarLink>
                    <NavbarLink 
                        style={{
                            color: '#ff8686',
                            margin: '10px 0px 0px 0px',
                            display: 'flex',
                            width: '50%',
                            justifyContent:'space-between'
                        }}
                        to="/logout">
                        Logout <Logout />
                    </NavbarLink>
                </ProfileOptions>
                </ProfilePictureContainer>
                <NavbarExtendedSearchBar>
                    <Search />
                    <NavbarSearchBar
                        style={{
                            fontSize: '20px',
                        }}    
                        placeholder="Find users, media, posts, and more..."
                        type="text" />   
                </NavbarExtendedSearchBar>
            </NavbarExtended>
        </Router>
     );
}
 
export default Navbar;

