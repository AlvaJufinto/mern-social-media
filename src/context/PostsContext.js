import { createContext, useEffect, useReducer } from "react";
import { authApi } from "./../api/api";

const INITIAL_STATE = {
    posts: null,
    isLoading: false,
    isIndividualLoading: false,
    errorMessage: null,
}