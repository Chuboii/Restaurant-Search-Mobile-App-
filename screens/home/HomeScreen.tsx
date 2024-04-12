import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'
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
const HomeScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(DataContext)

useEffect(() => {
   const retriveDataFromApi = async() => {
     try{
       const response = await Yelp.get("/search", {
         params:{
           term:"pasta",
           limit:4,
           location:"new york"
         }
       })
       dispatch({type:"SET_API_DATA", payload:response.data.businesses})
     }
     catch(err){
       console.log(err)
     }
   }
   retriveDataFromApi()
},[])


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
      <View style={styles.container}>
<AntDesign name="search1" size={24} style={styles.icon} color="black" />
      <TouchableOpacity onPress={navigateToSearchScreen}  style={styles.input} >
             <Text>Search your favorite restaurants</Text>
          </TouchableOpacity>
        </View>
 <QuickAccess/>
  {state.apiData ? <FlatList
    data={state.apiData}
    renderItem={({item}) => <Restaurant
       name={item.alias}
       reviewCount={item.review_count}
       ratings={item.ratings}
      image={item.image_url}
    />
    }
    keyExtractor={(data) => data.id}
    numColumns={3}
  /> : <Text>loading</Text>}
      </SafeAreaView>
    </>
  )
}

export default HomeScreen