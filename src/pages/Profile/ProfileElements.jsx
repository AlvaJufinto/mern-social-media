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
    bottom: 20px;
    left: 20px;
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
    mix-blend-mode: exclusion;
    /* -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #dbdbdb;
    font-weight: 800; */
    h3 {
        font-size: 42px;
    }

    p {
        font-size: 28px;
    }
`

export const ProfileContainerLeftTopButton = styled.button`
    position: absolute;
    color: ${GlobalColors.white};
    background: ${GlobalColors.blue};
    padding: 10px;
    font-size: 24px;
    outline: none;
    border: none;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
`

export const ProfileContainerLeftBottom = styled.div`
    margin: 20px 0 0 0;
    display: flex;
    align-items: flex-start;
    /* background: salmon; */
`

export const ProfileContainerLeftIntro = styled.div`
    background: ${GlobalColors.grey};
    color: ${GlobalColors.white};
    width: ${GlobalMeasurement.sidebarWidth}px;
    height: auto;
    margin: 0px 20px 0 0;
    padding: 20px;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;

    h1 {
        margin: 0 0 15px 0;
    }

    p {
        display: flex;
        gap: 10px;
        margin: 5px 0;
    }

    @media (max-width: 768px) {
        display: none;      
    }
`


export const ProfileContainerRight = styled.div`
    margin: 0px 0px 0px 20px;
    width: ${GlobalMeasurement.sidebarWidth}px;
    background: orange;

    @media (max-width: 1000px) {
        display: none;
    }
`

