import { View, Text, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import useSearchData from '../../hooks/use search data/useSearchData';
import { DataContext } from '../../context/DataContext';
import SearchBar from '../../components/search bar/SearchBar';
import {styles} from "./SearchScreen.style"
import { SafeAreaView } from 'react-native-safe-area-context'

const SearchScreen = ({navigation}) => {
    const [searchValue, setSearchValue] = useState("")
    const [onSearchSubmit] = useSearchData()
    const { state, dispatch } = useContext(DataContext)
  
  /*
  
    useEffect(() => {
        if (state.isNetworkConnected) {
          navigation.navigate("search")
      }
      else {
        navigation.navigate("noInternet")
    }
      }, [state.isNetworkConnected])

    */
    const onChangeText = (value: string) => {
        setSearchValue(value)
    }
    

  return (
      <SafeAreaView style={styles.container}>
    <SearchBar
        navigation={navigation}
        value={searchValue}
        onChangeInputText={onChangeText}
        onTextSubmit={() => onSearchSubmit(searchValue, navigation)}
      />
    </SafeAreaView>
  )
}

export default SearchScreen