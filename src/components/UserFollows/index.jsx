import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from '@mui/icons-material';

import {
    UserFollowsSection,
    UserFollowsSectionTitle,
    UserFollowsSectionCards,
    UserFollowsSectionCard,
    UserFollowsImg,
    UserFollowsUsername,
} from "./UserFollowsElements";

import noAvatar from "../../assets/noAvatar.png";
import { GlobalColors } from "../../globals";

const UserFollows = ({ title }) => {

    return (
        <>
            <UserFollowsSection>
                <UserFollowsSectionTitle>{title}</UserFollowsSectionTitle>
                <UserFollowsSectionCards>
                    <Link to="/profile/:id" style={{
                        textDecoration: 'none'
                    }} >
                        <UserFollowsSectionCard>
                            <UserFollowsImg src={noAvatar} />
                            <UserFollowsUsername>alva.jufintoadfsdfsdf</UserFollowsUsername>
                        </UserFollowsSectionCard>
                    </Link>
                    <Link to="/profile/:id" style={{
                        textDecoration: 'none'
                    }} >
                        <UserFollowsSectionCard>
                            <UserFollowsImg src={noAvatar} />
                            <UserFollowsUsername>alva.jufinto</UserFollowsUsername>
                        </UserFollowsSectionCard>
                    </Link>
                    <Link to="/profile/:id" style={{
                        textDecoration: 'none'
                    }} >
                        <UserFollowsSectionCard>
                            <UserFollowsImg src={noAvatar} />
                            <UserFollowsUsername>alva.jufinto</UserFollowsUsername>
                        </UserFollowsSectionCard>
                    </Link>
                </UserFollowsSectionCards>
            </UserFollowsSection>
        </>
     );
}
 
export default UserFollows;

