import styled from "styled-components";
import { Link } from 'react-router-dom'

import { GlobalColors, GlobalMeasurement } from "../../globals";

import { ChatRounded } from '@mui/icons-material';

export const NavbarTop = styled.nav`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    height: ${GlobalMeasurement.navbarHeight}px;
    background: ${GlobalColors.blue};
    color: ${GlobalColors.white}; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
`

export const NavbarContainer = styled.div`
    width: ${GlobalMeasurement.containerWidth}px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        justify-content: space-between;
    }
`

export const NavbarTitleLogo = styled.img`
    height: 50px;
    width: 50px;
`

export const NavbarTitle = styled(Link)`
    width: ${GlobalMeasurement.sidebarWidth}px;
    font-size: 25px;
    font-weight: bold;
    color: ${GlobalColors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
`
export const NavbarCenter = styled.div`
    flex: 1;
    background: ${GlobalColors.white};
    display: flex;
    color: ${GlobalColors.black};
    padding: 5px 10px;
    border-radius: 20px;
    
    @media (max-width: 1000px) {
        display: none;
    }
`

export const NavbarSearchBar = styled.input`
    border: none;
    outline: none;
    margin: 0px 10px;
    background: ${GlobalColors.white};
    color: ${GlobalColors.black};
    `

export const NavbarRight = styled.div`
    margin: 0px 0px 0px 20px;
    width: ${GlobalMeasurement.sidebarWidth}px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
        display: none;
    }
`

export const NavbarLinkContainer = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavbarLink = styled(Link)`
    color: ${GlobalColors.white};
    text-decoration: none;
`

export const ProfilePictureContainer = styled.div`
    display: flex;
    position: relative;
`
export const ProfilePictureImg = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`;

export const ProfileOptions = styled.div`
    width: 200px;
    position: absolute;
    ${({ isExtended }) => {
        if (!isExtended) {
            return'top: 50px; right: 0px;'
        } else {
            return 'top: -20px; left: 70px;'
        }
    }}
    display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
    flex-direction: column;
    background: ${GlobalColors.grey};
    padding: 15px 15px;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    box-shadow: 0px 0px 40px -30px ${GlobalColors.white};
`;

export const ChatRoundedIcon = styled(ChatRounded)`
    display: none !important;
    color: white;

    @media (max-width: 1000px) {
        display: flex !important;
    }
`;

export const NavbarBottom = styled.div`
    display: none;

    @media (max-width: 1000px) {
        position: fixed;
        z-index: 5;
        bottom: 0;
        left: 0;
        right: 0;
        height: ${GlobalMeasurement.navbarHeight}px;
        background: ${GlobalColors.blue};
        color: ${GlobalColors.white}; 
        padding: 20px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const NavbarBottomImage = styled.img`
    height: 25px;
    width: 25px;
    border-radius: 50%;
`;