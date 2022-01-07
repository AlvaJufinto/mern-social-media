import styled from "styled-components";
import { Link } from "react-router-dom";

import { GlobalColors, GlobalMeasurement } from "../../globals";

export const PostPageSection = styled.div`
    min-height: 100vh;
    background: ${GlobalColors.black};
    margin: ${GlobalMeasurement.navbarHeight}px 0 0 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    @media (max-width: 1000px) {
        padding: 20px 20px 60px 20px;
    }
`

export const PostPageContainer = styled.div`
    width: ${GlobalMeasurement.containerWidth}px;
    min-height: 100vh;
`


export const PostPageCard = styled.div`
    background: ${GlobalColors.grey};
    width: auto;
    min-height: 200px;
    flex-grow: 1;
    position: relative;
    color: white;
    padding: 20px;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
`

export const PostPageCardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`

export const PostPageCardTopProfPic = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`

export const PostPageCardTopUsername = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 18px;
`

export const PostPageCardDesc = styled.p`
    margin: 20px 0px;
`

export const PostPageCardImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
`

export const PostPageCardInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
`

export const PostPageCardComments = styled.div`
    height: 400px;
    /* background: ${GlobalColors.black}; */
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const PostPageCardComment = styled.div`
    margin: 50px 0px;
    display: flex;
    gap: 10px;
    align-items: flex-start;
`


export const PostPageCommentContainer = styled.div`
    
`

export const PostPageCardCommmentUsername = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;

    &:hover {
        text-decoration: underline;
    }
`


export const PostPageCardCommentImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`


export const PostPageCommentForm = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    overflow: hidden;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
`

export const PostPageCommentInput = styled.input`
    width: 90%;
    height: 100%;
    outline: none;
    border: none;
    padding: 20px 10px;
    background: ${GlobalColors.black};
    color: white;
`

export const PostPageButton = styled.button`
    width: 10%;
    height: 100%;
    background: ${GlobalColors.blue};
    color: ${GlobalColors.white};
    outline: none;
    border: none;
    font-size: 20px;
`
