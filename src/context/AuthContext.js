import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user-synchronize')) || null,
    isFetching: false,
    error: false,
    errorMessage: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() =>{
        localStorage.setItem("user-synchronize", JSON.stringify(state.user))
    }, [state.user]);

    return (
        <AuthContext.Provider 
            value= {{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            errorMessage: state.errorMessage,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}