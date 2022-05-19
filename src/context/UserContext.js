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
    userErrorMessage: null,
}

export const UserContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                userAuth: null,
                userPosts: null,
                isAuthLoading: true,
                isUserPostsLoading: false,
                userErrorMessage: null,
            };
        case "FETCH_SUCCESS":
            return {
                userAuth: action.payload,
                userPosts: action.payload.posts,
                isAuthLoading: false,
                isUserPostsLoading: false,
                userErrorMessage: null,
            }
        case "FETCH_FAILURE":
            return {
                userAuth: null,
                userPosts: null,
                isAuthLoading: false,
                isUserPostsLoading: false,
                userErrorMessage: action.payload,
            }
        case "ADD_POST_START":
            return {
                userAuth: state.userAuth,
                userPosts: state.userPosts,
                isAuthLoading: false,
                isUserPostsLoading: true,
                userErrorMessage: null,
            }
        case "ADD_POST_SUCCESS":
            return {
                userAuth: state.userAuth,
                userPosts: [action.payload, ...state.userPosts],
                isAuthLoading: false,
                isUserPostsLoading: false,
                userErrorMessage: null,
            }
        case "ADD_POST_FAILURE":
            return {
                userAuth: state.userAuth,
                userPosts: state.userPosts,
                isAuthLoading: false,
                isUserPostsLoading: false,
                userErrorMessage: action.payload,
            }
        default: 
            return state;
    }
}

export const UserContextProvider = ({ children }) => {
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
        <UserContext.Provider
            value={{
                userAuth: state.userAuth,
                userPosts: state.userPosts,
                isAuthLoading: state.isAuthLoading,
                isUserPostsLoading: state.isUserPostsLoading,
                userErrorMessage: state.userErrorMessage,
                dispatch
            }}>
            { children }
        </UserContext.Provider>
    )
}