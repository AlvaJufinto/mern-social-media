import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalColors, GlobalMeasurement } from "../../globals";

import { 
    SignUpWrapper,
    SignUpContainer,
    SignUpContainerTop,
    SignUpContainerTopTitle,
    SignUpContainerDescription,
    SignUpContainerBottom,
    SignUpContainerBottomInput,
    SignUpContainerBottomButton,
    SignUpNoAccountContainer,
    SignUpNoAccountLink
} from "./SignUpElements";

const SignUp = () => {
    return ( 
        <Router>
            <SignUpWrapper>
                <SignUpContainer>
                    <SignUpContainerTop>
                        <SignUpContainerTopTitle>Synchronize</SignUpContainerTopTitle>
                        <SignUpContainerDescription>
                            Sign Up and let's get started!
                        </SignUpContainerDescription>
                    </SignUpContainerTop>
                    <SignUpContainerBottom>
                        <SignUpContainerBottomInput placeholder="Username" type="text"/>
                        <SignUpContainerBottomInput placeholder="Fullname" type="text"/>
                        <SignUpContainerBottomInput placeholder="Email" type="email" />
                        <SignUpContainerBottomInput placeholder="Password" type="password" />
                        <SignUpContainerBottomButton>Sign up</SignUpContainerBottomButton>
                    </SignUpContainerBottom>
                    <SignUpNoAccountContainer>
                        Have an account? 
                        <SignUpNoAccountLink 
                            to="/sign-in"
                            style={{ 
                                color: GlobalColors.blue,
                                textDecoration: 'none'
                            }}>
                            Sign in
                        </SignUpNoAccountLink> 
                    </SignUpNoAccountContainer>
                </SignUpContainer>
            </SignUpWrapper>
        </Router>
     );
}
 
export default SignUp;