import styled from "styled-components";


import { GlobalColors, GlobalMeasurement } from "../../globals";

export const ExploreSection = styled.div`
    min-height: 100vh;
    background: ${GlobalColors.black};
    margin: ${GlobalMeasurement.navbarHeight}px 0 0 0;
    padding: 20px 20px 0px 20px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    
    @media (max-width: 1000px) {
        padding: 20px 20px 60px 20px;
    }
`

export const ExploreContainer = styled.div`
    height: 10px;
    width: ${GlobalMeasurement.containerWidth}px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background: orange;
`

export const ExploreCard = styled.div`
    background: red;
    height: 300px;
    width: 300px;
    flex-grow: 1;
`
export const ExploreCardOverlay = styled.div`

`

export const ExploreCardContent = styled.div`

`

export const ExploreCardContentImg = styled.div`

`
