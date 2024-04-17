import { useContext, useState } from "react"
import { DataContext } from "../../context/DataContext"
import Yelp from "../../api/yelp/Yelp"

type SearchSubmitPropTypes = {
  searchValue: string
}

export default () => {
    const { state, dispatch } = useContext(DataContext)

  const onSearchSubmit = async (searchValue, navigation)=> {
      try {
    if(searchValue){
          const response = await Yelp.get("/search", {
            params: {
              term: searchValue,
              limit: 5,
              location: state.dropDownValue ? state.dropDownValue : 'san jose'
            }
          })
      if (response.data.businesses) {
        //   console.log(response.data.businesses)
        dispatch({type:"IS_SEARCH_RESULTS", payload:true})
        dispatch({ type: "SET_SEARCH_DATA", payload: response.data.businesses })
      }
      else {
        dispatch({type:"IS_SEARCH_RESULTS", payload:false})
      }
    }
        }
        catch (err) {
          console.log(err);
          
          if (err.code === "ERR_NETWORK") {
               //navigation.navigate("error")
            dispatch({ type: "IS_ERROR", payload: true })
          }
          else {
            dispatch({type:"IS_ERROR", payload: true})
          }
        }
        
    }
    
  return [onSearchSubmit]
}
