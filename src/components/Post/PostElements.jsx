import styled from "styled-components";
import { Link } from "react-router-dom";

import { GlobalColors, GlobalMeasurement } from "../../globals";

export const PostStyled = styled.div`
    min-height: 200px;
    width: 100%;
    background: ${GlobalColors.grey};
    color: ${GlobalColors.white};
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    margin: 10px 0px;
    padding: 20px;
`

export const TopPost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TopPostDescription = styled.div`
    display: flex;
    align-items: center;
`

export const TopPostProfileLink = styled(Link)`
    min-width: 200px;
    color: ${GlobalColors.white};
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const TopPostProfilePicture = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
`

export const TopPostName = styled.div`
    margin: 0px 15px;
`

export const TopPostDate = styled.p`
    font-size: 12px;
    opacity: 0.7;
`

export const MiddlePost = styled.div`
    margin: 20px 0px;
`

export const MiddlePostDescription = styled.div`
    margin: 0px 0px 20px 0px;
`

export const MiddlePostImg = styled.img`
    width: 100%;
    min-height: 300px;
    object-fit: contain;
`

export const BottomPost = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BottomPostLike = styled.div`
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BottomPostLikeCount = styled.p`
    margin: 0px 15px;
`

export const BottomPostComment = styled.p`
    border-bottom: 1px dashed ${GlobalColors.white};
`
