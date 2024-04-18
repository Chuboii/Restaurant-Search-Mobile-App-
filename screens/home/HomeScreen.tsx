import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/search bar/SearchBar'
import Yelp from '../../api/yelp/Yelp'
import { DataContext } from '../../context/DataContext'
import DetectNetwork from '../../utils/detect network/DetectNetwork'
import useSearchData from '../../hooks/use search data/useSearchData'
import { styles } from './HomeScreen.style'
import { AntDesign } from '@expo/vector-icons';
import Restaurant from "../../components/restaurant/Restaurant"
import QuickAccess from "../../components/quick access/QuickAccess"
import WelcomeText from "../../components/welcome text/WelcomeText"
import BillBoard from "../../components/bill board/BillBoard"
import HomeHeader from "../../components/home header/HomeHeader"
import Spinner from "../../components/spinner/Spinner"


const HomeScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(DataContext)
const [loading, setLoading] = useState(false)
const [dataLimit, setDataLimit] = useState(6)
const [loadingEndData, setLoadingEndData] = useState(false)

const retriveDataFromApi = async (prevent : string) => {
     try{
       if(prevent === "bottom"){
         setLoading(false)
         setLoadingEndData(true)
       }
       else{
       setLoading(true)
setLoadingEndData(false)
       }
       const response = await Yelp.get("/search", {
         params:{
           term:state.touchMenuValue ? state.touchMenuValue : "all",
           limit:dataLimit,
           location: state.dropDownValue ? state.dropDownValue : 'san jose'
           
         }
       })
       
    // console.log(response.data.businesses)
       dispatch({type:"SET_API_DATA", payload:response.data.businesses})
       setLoading(false)
       setLoadingEndData(false)
     }
     catch(err){
       setLoading(false)
setLoadingEndData(false)
       if(err.message === "Request failed with status code 504"){
         navigation.navigate("error")
         dispatch({type:"SET_ERROR_MESSAGE", payload: "Connection Timeout"})
       }
       else if(err.message === "Cannot read property 'id' of undefined]"){
         navigation.navigate("error")
         dispatch({type:"SET_ERROR_MESSAGE", payload: "Something went wrong. Please try agin"})
       }
       else if (err.message === "Network Error") {
        navigation.navigate("noInternet")
         }
       else{
      dispatch({type:"SET_ERROR_MESSAGE", payload: "Server Timeout"})
        navigation.navigate("error")
       }
       console.log(err + "tt")
     }
   }
   
  useEffect(() => {

    retriveDataFromApi("top")
    dispatch({type:"SET_RELOAD_DATA_FUNCTION", payload: retriveDataFromApi})
},[state.touchMenuValue, state.dropDownValue])

  useEffect(() => {
    if (state.isNetworkConnected) {
      // navigation.navigate("TabNavigation")
  }
  else {
    navigation.navigate("noInternet")
}
  }, [state.isNetworkConnected])


 const navigateToSearchScreen = () => navigation.navigate("search")

const handleEndReached = () => {
    if (!loadingEndData) {
      
      setDataLimit(prevLimit => prevLimit + 6);
      retriveDataFromApi("bottom");
    }
  }

  return (
    <>
      <SafeAreaView style={styles.main}>
      <HomeHeader navigation={navigation}/>
      <WelcomeText/>
        <View style={styles.container}>
         
<AntDesign name="search1" size={24} style={styles.icon} color="black" />
      <TouchableOpacity onPress={navigateToSearchScreen}  style={styles.input} >
             <Text>Search your favorite restaurants</Text>
          </TouchableOpacity>
        </View>
        <QuickAccess />

  <View style={styles.wrapper}>

        {loading ? <Spinner/> :<FlatList
            showsVerticalScrollIndicator={false}
            data={state.apiData}
            renderItem={({ item }) => {
            
              return (
              
              <Restaurant
                id={item.id}
                name={item.name}
                ratings={item.rating}
                image={item.image_url}
                navigation={navigation}
        />
  )}}
    keyExtractor={(data) => data.id}
    numColumns={2}
    onEndReached={handleEndReached}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loadingEndData && <Spinner/>}
    ListHeaderComponent={
    <>
         <BillBoard navigation={navigation}/>
        <Text style={styles.title}> Businesses</Text>
        </>
    }
          />  }
        </View> 
      </SafeAreaView>
    </>
  )
}

export default HomeScreen