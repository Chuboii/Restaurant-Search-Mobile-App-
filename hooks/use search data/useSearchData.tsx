import { useContext, useState } from "react"
import { DataContext } from "../../context/DataContext"
import Yelp from "../../api/yelp/Yelp"

type SearchSubmitPropTypes = {
  searchValue: string
}

export default () => {
    const { state, dispatch } = useContext(DataContext)

  const onSearchSubmit = async (searchValue, navigation,setRemoveSearchResult)=> {
      try {
    if(searchValue){
          const response = await Yelp.get("/search", {
            params: {
              term: searchValue,
              limit: 5,
              location: state.dropDownValue ? state.dropDownValue : 'san jose'
            }
          })
          console.log(response.data.businesses.length)
      if (response.data.businesses.length > 0) {
setRemoveSearchResult(false)
        //   console.log(response.data.businesses)
        dispatch({type:"IS_SEARCH_RESULTS", payload:false})
        dispatch({ type: "SET_SEARCH_DATA", payload: response.data.businesses })
      }
      else {
        dispatch({type:"IS_SEARCH_RESULTS", payload:true})
        dispatch({ type: "SET_SEARCH_DATA", payload: null })
      }
    }
        }
        catch (err) {
          console.log(err);
          
    if(err.message === "Request failed with status code 504"){
         navigation.navigate("error")
         dispatch({type:"SET_ERROR_MESSAGE", payload: "Connection Timeout"})
       }
       else if(err.message === "Cannot read property 'id' of undefined]"){
         navigation.navigate("error")
         dispatch({type:"SET_ERROR_MESSAGE", payload: "Something went wrong. Please try agin"})
       }
       else{
      dispatch({type:"SET_ERROR_MESSAGE", payload: "Server Timeout"})
        navigation.navigate("error")
       }
        }
        
    }
    
  return [onSearchSubmit]
}
