import styled from "styled-components";
import { Link } from "react-router-dom";

import { GlobalColors, GlobalMeasurement } from "../../globals";

export const PostPageSection = styled.div`
    min-height: 100vh;
    background: ${GlobalColors.black};
    margin: ${GlobalMeasurement.navbarHeight}px 0 0 0;
    padding: 20px 20px 0px 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    @media (max-width: 1000px) {
        padding: 20px 20px 60px 20px;
    }
`

export const PostPageContainer = styled.div`
    height: auto;
    width: ${GlobalMeasurement.containerWidth}px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    /* background: orange; */
`
export const PostPageCardOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    background: ${GlobalColors.black};
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const PostPageCard = styled(Link)`
    background: red;
    height: 250px;
    width: 250px;
    flex-grow: 1;
    position: relative;

    &:hover ${PostPageCardOverlay} {
        opacity: 0.5;
    }
`

export const PostPageCardContentImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`
