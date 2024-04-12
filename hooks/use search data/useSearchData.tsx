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
  
          const response = await Yelp.get("/search", {
            params: {
              term: searchValue,
              limit: 10,
              location:"san jose"
            }
          })
          console.log(response.data.businesses)
          dispatch({ type: "SET_SEARCH_DATA", payload: response.data.businesses })
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
