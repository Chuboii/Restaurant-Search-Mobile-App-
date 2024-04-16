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


const HomeScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(DataContext)


  useEffect(() => {

  const retriveDataFromApi = async () => {
     try{
   
       const response = await Yelp.get("/search", {
         params:{
           term:state.touchMenuValue ? state.touchMenuValue : "all",
           limit:2,
           location: state.dropDownValue ? state.dropDownValue : 'san jose'
           
         }
       })
       
    // console.log(response.data.businesses)
       dispatch({type:"SET_API_DATA", payload:response.data.businesses})
     }
     catch(err){
       console.log(err)
     }
   }
   retriveDataFromApi()
   
},[state.touchMenuValue, state.dropDownValue])

/*
  useEffect(() => {
    if (state.isNetworkConnected) {
      navigation.navigate("home")
  }
  else {
    navigation.navigate("noInternet")
}
  }, [state.isNetworkConnected])
*/

 const navigateToSearchScreen = () => navigation.navigate("search")


  return (
    <>
      <SafeAreaView style={styles.main}>
      <HomeHeader/>
      <WelcomeText/>
        <View style={styles.container}>
         
<AntDesign name="search1" size={24} style={styles.icon} color="black" />
      <TouchableOpacity onPress={navigateToSearchScreen}  style={styles.input} >
             <Text>Search your favorite restaurants</Text>
          </TouchableOpacity>
        </View>
        <QuickAccess />
    
    
  <View style={styles.wrapper}>

        {state.apiData ? <FlatList
            showsVerticalScrollIndicator={false}
            data={state.apiData}
            renderItem={({ item }) => {
            
              return (
              
              <Restaurant
                id={item.id}
                name={item.name}
                reviewCount={item.review_count}
                ratings={item.rating}
                image={item.image_url}
                navigation={navigation}
        />
  )}}
    keyExtractor={(data) => data.id}
    numColumns={2}
    ListHeaderComponent={
    <>
          <BillBoard/>
        <Text style={styles.title}> Businesses</Text>
        </>
    }
          /> : <Text>loading</Text>}
        </View>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen