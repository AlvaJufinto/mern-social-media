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
    min-height: 100vh;
    width: ${GlobalMeasurement.containerWidth};
    display: flex;
    position: relative;
`