import { createContext, useEffect, useReducer } from "react";
import {
    useNavigate,
  } from "react-router-dom";
import { userApi } from "../api";

const INITIAL_STATE = {
    userAuth: null,
    isAuthLoading: false,
    authErrorMessage: null,
}

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                userAuth: null,
                isAuthLoading: true,
                authErrorMessage: null,
            };
        case "FETCH_SUCCESS":
            return {
                userAuth: action.payload,
                isAuthLoading: false,
                authErrorMessage: null,
            }
        case "FETCH_FAILURE":
            return {
                userAuth: null,
                isAuthLoading: false,
                authErrorMessage: action.payload,
            }
        case "LOGOUT_START":
            return {
                userAuth: action.payload,
                isAuthLoading: true,
                authErrorMessage: null,
            }
        case "LOGOUT_SUCCESS":
            return {
                userAuth: null,
                isAuthLoading: false,
                authErrorMessage: null,
            }
        default: 
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    let navigate = useNavigate();
    let jwtToken = localStorage.getItem("SM_JWT_Token");

    useEffect(() => {
        (async () => {
            try {
                let res = await userApi.me(jwtToken)
                console.log(res);
                dispatch({ type: "FETCH_START", payload: res.data.data });
              } catch (err) {
                console.log(err.response);
                navigate("/sign-in", { replace: true });
                dispatch({ type: "FETCH_FAILURE", payload: err.response });
              }
        })();
    }, [jwtToken]);
    
    return (
        <AuthContext.Provider
            value={{
                userAuth: state.userAuth,
                isAuthLoading: state.isAuthLoading,
                authErrorMessage: state.authErrorMessage,
                dispatch
            }}>
            { children }
        </AuthContext.Provider>
    )
}