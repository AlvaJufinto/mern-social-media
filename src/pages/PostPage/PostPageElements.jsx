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
    height: 500px;
    background: ${GlobalColors.black};
`

export const PostPageCardComment = styled.div`
    
`

export const PostPageCardCommentUser = styled.div`

`

export const PostPageCardCommmentUsername = styled.div`
    
`

export const PostPageCardCommentUserProfPic = styled.img`
    
`

export const PostPageCardCommentImg = styled.img`
    
`

export const PostPageCommentContainer = styled.div`
    
`

