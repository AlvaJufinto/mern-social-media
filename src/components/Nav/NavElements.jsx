import styled from "styled-components";
import { Link } from 'react-router-dom'

import { GlobalColors, GlobalMeasurement } from "../../globals";

import { Menu } from '@mui/icons-material';

export const NavbarStyled = styled.nav`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    height: ${GlobalMeasurement.navbarHeight}px;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${GlobalColors.blue};
    color: ${GlobalColors.white}; 
`

export const NavbarTitle = styled(Link)`
    width: ${GlobalMeasurement.sidebarWidth}px;
    font-size: 25px;
    font-weight: bold;
    color: ${GlobalColors.white};
    text-decoration: none;
`
export const NavbarCenter = styled.div`
    flex: 3;
    background: ${GlobalColors.grey};
    display: flex;
    color: ${GlobalColors.white};
    padding: 5px 10px;
    border-radius: 20px;
    
    @media (max-width: 1000px) {
        display: none;
    }
    `

export const NavbarSearchBar = styled.input`
    border: none;
    outline: none;
    width: 100%;
    margin: 0px 10px;
    background: ${GlobalColors.grey};
    color: ${GlobalColors.white};
    `

export const NavbarRight = styled.div`
    margin: 0px 0px 0px 20px;
    flex: 1.5;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
        display: none;
    }
`

export const NavbarLinkContainer = styled.div`
    display: flex;
    width: 15vw;
    display: flex;
    justify-content: space-between;
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
    border-radius: 10px;
    /* box-shadow: 0px 0px 70px -30px ${GlobalColors.white}; */
`;

export const NavbarMenuIcon = styled(Menu)`
    display: none !important;

    @media (max-width: 1000px) {
        display: flex !important;
    }
`;

export const NavbarExtended = styled.div`
    height: ${GlobalMeasurement.extendedNavbarHeight}px;
    transition: all 0.5s ease;
    position: fixed;
    top: ${({ isExtended }) => { 
        if(isExtended) {
            return GlobalMeasurement.navbarHeight;
        } else {
            return -(GlobalMeasurement.extendedNavbarHeight);
        }
    }}px;
    left: 0;
    right: 0;
    background-color: ${GlobalColors.blue};
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    @media (min-width: 1000px) {
        display: none;
    }
`

export const NavbarExtendedSearchBar = styled.div`
    background: ${GlobalColors.grey};
    display: flex;
    color: ${GlobalColors.white};
    padding: 5px 10px;
    height: 60px;
    justify-content: space-around;
    align-items: center;
    border-radius: 40px;
` 
