import { useContext, useRef } from 'react';
import { CircularProgress } from "@material-ui/core";
import { AuthContext } from '../../context/AuthContext';
import { loginCall } from "../../apiCalls";
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
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch, error, errorMessage } = useContext(AuthContext); 

    const handleSubmit = e => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        ); 
        // console.log(errorMessage);
    };

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
                    <SignInContainerBottom onSubmit={handleSubmit}>
                        <SignInContainerBottomInput 
                            placeholder="Email" 
                            type="text"
                            ref={email} />
                        <SignInContainerBottomInput 
                            placeholder="Password" 
                            type="password"
                            ref={password}
                        />
                        {error && (<p style={{ color: GlobalColors.red }}>{errorMessage.data}</p>)}
                        <SignInContainerBottomButton>
                            { isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Log In"
                            )}
                        </SignInContainerBottomButton>
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