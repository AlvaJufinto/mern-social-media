import { BrowserRouter as Router } from "react-router-dom";
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
    return (
        <Router>
            <RightbarStyled>
                <YourProfileProfileContainer>
                    <YourProfileImage src={noAvatar} />
                    <YourProfileName to="/profile/:id" >
                        <p>will.scho_123</p>
                        <p>William Schofield</p> 
                    </YourProfileName>
                    <LogoutRounded style={{ 
                        fontSize: 30, 
                        color: GlobalColors.red, 
                        cursor: 'pointer', 
                        marginLeft: 'auto'
                    }} />
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
        </Router> 
     );
}
 
export default Rightbar;