import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LogoutRounded } from '@mui/icons-material';

import { GlobalColors } from "../../globals";
import noAvatar from "../../assets/noAvatar.png";

import { 
    RightbarStyled,
    YourProfileProfileContainer,
    YourProfileImage,
    YourProfileName,
    SuggestionContainer,
    SuggestionCards,
    SuggestionCard,
    SuggestionTitle,
    SuggestionImg,
} from './RightbarElements';

const Rightbar = () => {
    const { user, dispatch } = useContext(AuthContext);

    return (
        <>
            <RightbarStyled>
                <YourProfileProfileContainer>
                    <YourProfileImage src={noAvatar} />
                    <YourProfileName to="/profile/:id" >
                        <p>{user.username}</p>
                        <p>{user.fullname}</p> 
                    </YourProfileName>
                    <LogoutRounded style={{ 
                        fontSize: 30, 
                        color: GlobalColors.red, 
                        cursor: 'pointer', 
                        marginLeft: 'auto'
                    }} onClick={ () => dispatch({ type: "LOGOUT" }) } />
                </YourProfileProfileContainer>
                <SuggestionContainer>
                    <SuggestionTitle>Suggestions</SuggestionTitle>
                    <SuggestionCards>
                        <SuggestionCard to="/profile/:id" exact>
                            <SuggestionImg src={noAvatar} />
                            <p>alva_jufinto</p>
                            <p style={{
                                color: GlobalColors.blue,
                                marginLeft: 'auto'
                            }}>Follow</p>
                        </SuggestionCard>
                        <SuggestionCard to="/profile/:id" exact>
                            <SuggestionImg src={noAvatar} />
                            <p>alva_jufintoasdasd</p>
                            <p style={{
                                color: GlobalColors.blue,
                                marginLeft: 'auto'
                            }}>Follow</p>
                        </SuggestionCard><SuggestionCard to="/profile/:id" exact>
                            <SuggestionImg src={noAvatar} />
                            <p>alva_jufinto</p>
                            <p style={{
                                color: GlobalColors.blue,
                                marginLeft: 'auto'
                            }}>Follow</p>
                        </SuggestionCard><SuggestionCard to="/profile/:id" exact>
                            <SuggestionImg src={noAvatar} />
                            <p>alva_jufinto</p>
                            <p style={{
                                color: GlobalColors.blue,
                                marginLeft: 'auto'
                            }}>Follow</p>
                        </SuggestionCard>
                    </SuggestionCards>
                </SuggestionContainer>
            </RightbarStyled>   
        </> 
     );
}
 
export default Rightbar;