import styled from "styled-components";
import { Link } from "react-router-dom";

import { GlobalColors, GlobalMeasurement } from "../../globals";

export const SignUpWrapper = styled.div`
    background-color: ${GlobalColors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const SignUpContainer  = styled.div`
    padding: 35px;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    height: auto;
    min-width: 300px;
    background: ${GlobalColors.grey};
    color: ${GlobalColors.white};
    display: flex;
    flex-direction: column;
    text-align: center;
    
    @media (max-width: 768px) {
        background: none;
    }
`

export const SignUpContainerTop = styled.div`
    margin: 0px 0px 40px 0px;
`

export const SignUpContainerTopTitle = styled.h1`
    font-size: 40px;
`

export const SignUpContainerDescription = styled.p`
    font-size: 20px;
    margin: 0px 0px;
`

export const SignUpContainerBottom = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

export const SignUpContainerBottomInput = styled.input`
    font-size: 15px;
    padding: 10px;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    border: none;
    outline: none;
`

export const SignUpContainerBottomButton = styled.button`
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

export const SignUpNoAccountContainer = styled.div`
    margin: 20px 0px;
`

export const SignUpNoAccountLink = styled(Link)`
    margin: 0px 10px;
`