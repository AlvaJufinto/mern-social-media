import styled from "styled-components";
import { Link } from 'react-router-dom'

import { GlobalColors, GlobalMeasurement } from "../../globals";

import { ChatRounded } from '@mui/icons-material';

export const UserFollowsSection = styled.nav`
    /* background: violet; */
    color: white;
    margin: 0 0 50px 0;
`

export const UserFollowsSectionTitle = styled.h2`
    font-size: 28px;
    margin: 0 0 30px 0px;
`

export const UserFollowsSectionCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

export const UserFollowsSectionCard = styled.div`
    /* background: salmon; */
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 130px;
`

export const UserFollowsImg = styled.img`
    height: 100px;
    width: 100px;
    object-fit: cover;
    object-position: center;
    border-radius: ${GlobalMeasurement.squareBorderRadius}px;
    `

export const UserFollowsUsername = styled.p`
    margin: 0 0 15px 0;
    font-size: 22px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 130px;
`

