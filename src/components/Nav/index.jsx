import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Logout, SearchRounded, HomeRounded, ChatRounded } from '@mui/icons-material';

import {
    NavbarTop,
    NavbarContainer,
    NavbarTitleLogo,
    NavbarTitle,
    NavbarCenter,
    NavbarSearchBar,
    NavbarRight,
    NavbarLinkContainer,
    NavbarLink,
    ProfilePictureContainer,
    ProfilePictureImg,
    ProfileOptions,
    ChatRoundedIcon,
    NavbarBottom,
    NavbarBottomImage,
} from "./NavElements";

import syncLogo from "../../assets/logo/sync-logo.svg";
import noAvatar from "../../assets/noAvatar.png";
import { GlobalColors } from "../../globals";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <NavbarTop>
                <NavbarContainer>
                    <NavbarTitle to="/">
                        <NavbarTitleLogo src={syncLogo} />
                        Synchronize
                    </NavbarTitle>
                    <NavbarCenter>
                        <Search />
                        <NavbarSearchBar    
                            placeholder="Search for users..."
                            type="text" />
                    </NavbarCenter>
                    <NavbarRight>
                        <NavbarLinkContainer>
                            <NavbarLink to="/">
                                 <HomeRounded style={{
                                    color: 'white',
                                    fontSize: '25'
                                }} />
                            </NavbarLink>
                            <NavbarLink to="/explore" exact>
                                <SearchRounded style={{
                                    color: 'white',
                                    fontSize: '25'
                                }} />
                            </NavbarLink>
                            <NavbarLink to="/chat" exact>
                                <ChatRounded style={{
                                    color: 'white',
                                    fontSize: '25'
                                }} />
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
                                        color: GlobalColors.red,
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
                    <Link to="/chat">
                        <ChatRoundedIcon style={{
                            fontSize: '30'
                        }} />
                    </Link>
                </NavbarContainer>
            </NavbarTop>
            <NavbarBottom>
                <Link to="/">
                    <HomeRounded style={{
                        color: 'white',
                        fontSize: '30'
                    }} />
                </Link>
                <Link to="/explore">
                    <SearchRounded style={{
                        color: 'white',
                        fontSize: '30'
                    }} />
                </Link>
                <Link to="/chat">
                    <ChatRoundedIcon style={{
                        fontSize: '30'
                    }} />
                </Link>
                <Link to="/profile/:id">
                    <NavbarBottomImage src={noAvatar} />
                </Link>
            </NavbarBottom>
        </>
     );
}
 
export default Navbar;

