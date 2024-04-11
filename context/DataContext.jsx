import { createContext, useReducer } from "react";

export const DataContext = createContext()


const INITIAL_SEARCH_DATA = {
    searchData: null,
    errorMessage: null,
    isError: false,
    isLoading: false,
    isNetworkConnected: false
}

const searchReducer = (state, action) => {
    const { type, payload } = action
    
    switch (type) {
        case "SET_ERROR_MESSAGE":
            return { ...state, errorMessage: payload }
        case "IS_ERROR":
            return { ...state, isError: payload }
        case "SET_SEARCH_DATA":
            return { ...state, searchData: payload }
        case "IS_LOADING":
            return { ...state, isLoading: payload }
        case "IS_NETWORK_CONNECTED":
            return { ...state, isNetworkConnected: payload }
        default: 
            return state
    }
}
export default function DataProvider({ children }) {
 const [state, dispatch] = useReducer(searchReducer, INITIAL_SEARCH_DATA)

const value = {state, dispatch}

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}