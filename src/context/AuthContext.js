import { createContext, useEffect, useReducer } from "react";
import {
    useNavigate,
  } from "react-router-dom";
import { userApi } from "../api";

const INITIAL_STATE = {
    userAuth: null,
    userPosts: null,
    isAuthLoading: false,
    isUserPostsLoading: false,
    authErrorMessage: null,
}

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                userAuth: null,
                userPosts: null,
                isAuthLoading: true,
                isUserPostsLoading: true,
                authErrorMessage: null,
            };
        case "FETCH_SUCCESS":
            return {
                userAuth: action.payload,
                userPosts: action.payload.posts,
                isAuthLoading: false,
                isUserPostsLoading: true,
                authErrorMessage: null,
            }
        case "FETCH_FAILURE":
            return {
                userAuth: null,
                userPosts: null,
                isAuthLoading: false,
                isUserPostsLoading: false,
                authErrorMessage: action.payload,
            }
        case "ADD_POST_START":
            return {
                userAuth: INITIAL_STATE.userAuth,
                userPosts: INITIAL_STATE.userPosts,
                isAuthLoading: false,
                isUserPostsLoading: true,
                authErrorMessage: null,
            }
        case "ADD_POST_SUCCESS":
            return {
                userAuth: INITIAL_STATE.userAuth,
                userPosts: [action.payload, ...INITIAL_STATE.userPosts],
                isAuthLoading: false,
                isUserPostsLoading: false,
                authErrorMessage: null,
            }
        case "ADD_POST_FAILURE":
            return {
                userAuth: INITIAL_STATE.userAuth,
                userPosts: INITIAL_STATE.userPosts,
                isAuthLoading: false,
                isUserPostsLoading: false,
                authErrorMessage: action.payload,
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
            dispatch({ type: "FETCH_START" });    
            try {
                let res = await userApi.me(jwtToken)
                console.log(res.data.data);
                dispatch({ type: "FETCH_SUCCESS", payload: res.data.data });    
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