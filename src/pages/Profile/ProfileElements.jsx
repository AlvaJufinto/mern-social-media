import styled from "styled-components";
import { Link } from "react-router-dom";

import { GlobalColors, GlobalMeasurement } from "../../globals";

export const ProfileSection = styled.div`
    background: ${GlobalColors.black};
    margin: ${GlobalMeasurement.navbarHeight}px 0 0 0;
    padding: 20px 20px 0px 20px;
    display: flex;
    justify-content: center;
    
    @media (max-width: 1000px) {
        padding: 20px 20px 60px 20px;
    }
`

export const ProfileContainer = styled.div`
    /* background: green; */
    min-height: 100vh;
    width: ${GlobalMeasurement.containerWidth}px;
    display: flex;
    position: relative;
`

export const ProfileContainerLeft = styled.div`
    flex: 1;
    /* background: red; */
`

export const ProfileContainerLeftTop = styled.div`
    position: relative;
    height: 300px;
    overflow: none;
    /* border-radius: ${GlobalMeasurement.squareBorderRadius}px; */
`

export const ProfileContainerLeftTopBanner = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
`

export const ProfileContainerLeftTopUser = styled.div`
    position: absolute;
    bottom: 30px;
    left: 30px;
    /* background: blue; */
    display: flex;
    align-items: center;
`

export const ProfileContainerLeftTopPicture = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 0 30px 0 0;
`

export const ProfileContainerLeftTopName = styled.p`
    color: ${GlobalColors.white};

    h3 {
        font-size: 42px;
    }

    p {
        font-size: 28px;
    }
`

export const ProfileContainerLeftBottom = styled.div`
    
`

export const ProfileContainerLeftIntro = styled.div`
    
`

export const ProfileContainerRight = styled.div`
    margin: 0px 0px 0px 20px;
    width: ${GlobalMeasurement.sidebarWidth}px;
    background: orange;

    @media (max-width: 1000px) {
        display: none;
    }
`

