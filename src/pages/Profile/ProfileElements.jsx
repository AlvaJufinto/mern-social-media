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
    
    @media(max-width: 768px) {
        min-height: auto;
        height: ${({ height }) =>  height + 40 }px;

    }
`

export const ProfileContainerLeftTopOverlay = styled.div`
    height: 100%;
    width: 100%;
    position: absolute; 
    background-color: ${GlobalColors.black};
    top: 0;
    left: 0;
    opacity: 0.5;
`

export const ProfileContainerLeftTopBanner = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
`

export const ProfileContainerLeftTopUser = styled.div`
    /* background: blue; */
    width: 100%;
    position: absolute;
    z-index: 2;
    bottom: 0px;
    left: 0px;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ProfileContainerLeftTopPicture = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 0 30px 0 0;

    @media (max-width: 768px) {
        margin: 0;
    }
`

export const ProfileContainerLeftTopName = styled.p`
    color: ${GlobalColors.white};
    /* background: red; */
    /* mix-blend-mode: exclusion; */
    
    h3 {
        font-size: 42px;
    }

    h4 {
        font-weight: 400;
        font-size: 24px;
    }

    p {
        font-size: 18px;
        width: 25vw;
    }

    @media(max-width: 768px) {
        width: 100%;
        text-align: center;
        margin: 20px 0px;
        
        p {
            width: auto;
        }
    }
`

export const ProfileContainerLeftTopButton = styled.button`
    margin-left: auto;
    margin-top: auto;
    color: ${GlobalColors.white};
    background: ${GlobalColors.blue};
    padding: 10px;
    font-size: 24px;
    outline: none;
    border: none;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    cursor: pointer;

    @media(max-width: 768px) {
        width: 100%;
    }
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

    p, a {
        display: flex;
        gap: 10px;
        margin: 5px 0;
    }
    
    a {
        color: ${GlobalColors.blue};
    }

    @media (max-width: 768px) {
        display: none;      
    }
`


export const ProfileContainerRight = styled.div`
    margin: 0px 0px 0px 20px;
    width: ${GlobalMeasurement.sidebarWidth}px;

    @media (max-width: 1000px) {
        display: none;
    }
`

