import styled from "styled-components";
import { Link } from "react-router-dom";

import { GlobalColors, GlobalMeasurement } from "../../globals";

export const RightbarStyled = styled.div`
    position: sticky;
    top: ${GlobalMeasurement.navbarHeight + 20}px;
    height: calc(100vh - ${GlobalMeasurement.navbarHeight}px);
    width: ${GlobalMeasurement.sidebarWidth}px;
    color: white;
    margin: 0px 0px 0px 20px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const YourProfileProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0px 0px 30px 0px;
`

export const YourProfileImage = styled.img`
    height: 70px;
    width: 70px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
`

export const YourProfileName = styled(Link)`
    font-size: 15px; 
    margin: 0 0 0 15px;
    text-decoration: none;
    color: white;
    
    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 120px;
    }
`

export const SuggestionTitle = styled.h2`
    font-size: 20px;
`
export const SuggestionContainer = styled.div`
    min-height: 100vh;
    border-radius: 20px;
`

export const SuggestionCards = styled.div`
    margin: 20px 0px 0px 0px;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
`

export const SuggestionCard = styled(Link)`
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
        max-width: 120px;
    }
`

export const SuggestionImg = styled.img`
    height: 50px;
    width: 50px;
    margin: 0px 15px 0px 0px; 
    border-radius: 50%;
`