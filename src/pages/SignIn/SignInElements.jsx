import styled from "styled-components";
import { Link } from "react-router-dom";

import { GlobalColors, GlobalMeasurement } from "../../globals";

export const SignInWrapper = styled.div`
    background-color: ${GlobalColors.black};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
`

export const SignInContainer  = styled.div`
    margin: 100px 0px;
    padding: 35px;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    height: auto;
    min-width: 300px;
    background: ${GlobalColors.grey};
    color: ${GlobalColors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    @media (max-width: 768px) {
        background: none;
    }
`

export const SignInContainerTop = styled.div`
    margin: 0px 0px 40px 0px;
`

export const SignInContainerTopTitle = styled.h1`
    font-size: 40px;
`

export const SignInContainerDescription = styled.p`
    font-size: 20px;
    margin: 0px 0px;
`

export const SignInContainerBottom = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

export const SignInContainerBottomInput = styled.input`
    font-size: 15px;
    padding: 10px;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    border: none;
    outline: none;
`

export const SignInContainerBottomButton = styled.button`
    margin: 20px 0px 0px 0px;
    padding: 10px 0px;
    font-size: 20px;
    background: ${GlobalColors.blue};
    outline: none;
    border: none;
    color: ${GlobalColors.white};
    font-weight: bold;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    cursor: pointer;
`

export const SignInNoAccountContainer = styled.div`
    margin: 20px 0px;
`

export const SignInNoAccountLink = styled(Link)`
    margin: 0px 10px;
`