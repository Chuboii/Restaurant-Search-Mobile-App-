import {
  createContext,
  useReducer
} from "react";

export const DataContext = createContext()


const INITIAL_SEARCH_DATA = {
  searchData: null,
  apiData: null,
  touchMenuValue: null,
  errorMessage: null,
  isError: false,
  isLoading: false,
  isNetworkConnected: false,
  dropDownValue: null,
  businessDetails: null,
  noSearchResults: false,
  isBusinessScreen: false,
  userData: null
}

const searchReducer = (state, action) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: payload
      }
    case "IS_ERROR":
      return {
        ...state,
        isError: payload
      }
    case "SET_SEARCH_DATA":
      return {
        ...state,
        searchData: payload
      }
    case "IS_LOADING":
      return {
        ...state,
        isLoading: payload
      }
    case "IS_NETWORK_CONNECTED":
      return {
        ...state,
        isNetworkConnected: payload
      }
    case "SET_API_DATA":
      return {
        ...state,
        apiData: payload
      }
    case "SET_TOUCH_MENU_VALUE":
      return {
        ...state,
        touchMenuValue: payload
      }
    case "SET_DROPDOWN_VALUE":
      return {
        ...state,
        dropDownValue: payload
      }
    case "SET_BUSINESS_DETAILS":
      return {
        ...state,
        businessDetails: payload
      }
    case "IS_SEARCH_RESULTS":
      return {
        ...state,
        noSearchResults: payload
      }
    case "IS_BUSINESS_SCREEN":
      return {
        ...state,
        isBusinessScreen: payload
      }
    case "SET_USER_DATA":
      return{
        ...state,
        userData: payload
      }
    default:
      return state
  }
}
export default function DataProvider( {
  children
}) {
  const [state,
    dispatch] = useReducer(searchReducer, INITIAL_SEARCH_DATA)

  const value = {
    state,
    dispatch
  }

  return (
    <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
  )
}