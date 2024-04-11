import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/search bar/SearchBar'
import Yelp from '../../api/yelp/Yelp'
import { DataContext } from '../../context/DataContext'
import DetectNetwork from '../../utils/detect network/DetectNetwork'
import useSearchData from '../../hooks/use search data/useSearchData'
import { styles } from './HomeScreen.style'
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(DataContext)


  useEffect(() => {
    if (state.isNetworkConnected) {
      navigation.navigate("home")
  }
  else {
    navigation.navigate("noInternet")
}
  }, [state.isNetworkConnected])

 const navigateToSearchScreen = () => navigation.navigate("search")


  return (
    <>
      <SafeAreaView>
      <View style={styles.container}>
<AntDesign name="search1" size={24} style={styles.icon} color="black" />
      <TouchableOpacity onPress={navigateToSearchScreen}  style={styles.input} >
             <Text>Search your favorite restaurants</Text>
          </TouchableOpacity>
        </View>

        <Text>{state.searchData && state.searchData.length }</Text>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen