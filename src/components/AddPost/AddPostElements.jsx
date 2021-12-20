import styled from "styled-components";

import { GlobalColors, GlobalMeasurement } from "../../globals";

export const AddPostStyled = styled.div`
    width: 100%;
    min-height: 100px;
    padding: 20px;
    margin: 0px 0px 40px 0px;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    overflow: hidden;
    background-color: ${GlobalColors.grey};
`

export const TopAddPost = styled.div`
    /* background-color: red; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 50px;
`

export const AddPostProfilePicture = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`

export const AddPostTextInput = styled.input`
    margin: 0px 0px 0px 10px;
    padding: 10px;
    resize: none;
    min-height: 30px;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid ${GlobalColors.white};
    font-size: 20px;
    color: ${GlobalColors.white};
    background: ${GlobalColors.grey};
`

export const BottomAddPost = styled.div`
    margin: 20px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AttachmentsContainer = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #b40000;
`

export const AddPostButton = styled.button`
    font-size: 18px !important;
    padding: 5px 10px;
    outline: none;
    border: none;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    background: ${GlobalColors.blue};
    color: ${GlobalColors.white};
    cursor: pointer;
`