import { useState } from 'react';

import { GlobalColors, GlobalMeasurement } from "../../globals";

import { 
    SignInWrapper,
    SignInContainer,
    SignInContainerTop,
    SignInContainerTopTitle,
    SignInContainerDescription,
    SignInContainerBottom,
    SignInContainerBottomInput,
    SignInContainerBottomButton,
    SignInNoAccountContainer,
    SignInNoAccountLink
} from "./SignInElements";

const SignIn = () => {
    return ( 
        <>
            <SignInWrapper>
                <SignInContainer>
                    <SignInContainerTop>
                        <SignInContainerTopTitle>Synchronize</SignInContainerTopTitle>
                        <SignInContainerDescription>
                            Welcome back, buddy!
                        </SignInContainerDescription>
                    </SignInContainerTop>
                    <SignInContainerBottom>
                        <SignInContainerBottomInput placeholder="Username" type="text"/>
                        <SignInContainerBottomInput placeholder="Password" type="password" />
                        <SignInContainerBottomButton>Sign up</SignInContainerBottomButton>
                    </SignInContainerBottom>
                    <SignInNoAccountContainer>
                        Don't have an account? 
                        <SignInNoAccountLink 
                            to="/sign-up"
                            style={{ 
                                color: GlobalColors.blue,
                                textDecoration: 'none'
                            }}>
                            Sign up
                        </SignInNoAccountLink> 
                    </SignInNoAccountContainer>
                </SignInContainer>
            </SignInWrapper>
        </>
     );
}
 
export default SignIn;