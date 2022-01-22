import { useContext, useRef, useState, useEffect } from 'react';
import axios from 'axios';

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
    const [errors, setErrors] = useState({});

    const username = useRef();
    const fullname = useRef();
    const email = useRef();
    const password = useRef();

    const handleSubmit = async e => {
        e.preventDefault();
        const userSignUp = {
            username: username.current.value,
            fullname: fullname.current.value,
            email: email.current.value,
            password: password.current.value,
        }
        try {
            await axios.post("/auth/register", userSignUp);
        } catch (err) {
            // console.log(err.response.data.errors)
            setErrors(err.response.data.errors);
            console.log(err.response.data.errors);
            console.log(errors);
        }
    }

    return ( 
        <>
            <SignUpWrapper>
                <SignUpContainer>
                    <SignUpContainerTop>
                        <SignUpContainerTopTitle>Synchronize</SignUpContainerTopTitle>
                        <SignUpContainerDescription>
                            Sign Up and let's get started!
                        </SignUpContainerDescription>
                    </SignUpContainerTop>
                    <SignUpContainerBottom onSubmit={handleSubmit} >
                        <SignUpContainerBottomInput 
                            placeholder="Username" 
                            type="text" 
                            ref={username} />
                        <SignUpContainerBottomInput 
                            placeholder="Fullname" 
                            type="text" 
                            ref={fullname} />
                        <SignUpContainerBottomInput 
                            placeholder="Email" 
                            type="email"  
                            ref={email} />
                        <SignUpContainerBottomInput 
                            placeholder="Password" 
                            type="password"  
                            ref={password} />
                        {Object.keys(errors).length > 0 ? ( 
                            <div style={{
                                color: GlobalColors.red,
                            }}>
                                {Object.keys(errors).map((errors) => (
                                    <p>{errors}</p>
                                ))}
                            </div> 
                            ) : (
                                ""
                            )
                        }
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
        </>
     );
}
 
export default SignUp;