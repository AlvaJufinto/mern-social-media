import styled from "styled-components";
import { Link } from "react-router-dom";

import { GlobalColors, GlobalMeasurement } from "../../globals";

export const SidebarStyled = styled.div`
    position: sticky;
    top: ${GlobalMeasurement.navbarHeight + 20}px;
    height: calc(100vh - ${GlobalMeasurement.navbarHeight}px);
    width: ${GlobalMeasurement.sidebarWidth}px;
    color: white;

    @media (max-width: 1000px) {
        display: none;
    }
`

export const FollowingTitle = styled.h2`
    font-size: 20px;
`
export const FollowingContainer = styled.div`
    min-height: 100vh;
    border-radius: 20px;
`

export const FollowingCards = styled.div`
    margin: 20px 20px 0px 0px;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
`

export const FollowingCard = styled(Link)`
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    color: ${GlobalColors.white};
    text-decoration: none;
    
    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100px;
    }
`

export const FollowingImg = styled.img`
    height: 30px;
    width: 30px;
    margin: 0px 15px 0px 0px; 
    border-radius: 50%;
`