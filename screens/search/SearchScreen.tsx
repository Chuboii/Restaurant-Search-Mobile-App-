import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import useSearchData from '../../hooks/use search data/useSearchData';
import { DataContext } from '../../context/DataContext';
import SearchBar from '../../components/search bar/SearchBar';
import {styles} from "./SearchScreen.style"
import { SafeAreaView } from 'react-native-safe-area-context'
import Restaurant from '../../components/restaurant/Restaurant';

const SearchScreen = ({navigation}) => {
    const [searchValue, setSearchValue] = useState("")
    const [onSearchSubmit] = useSearchData()
    const { state, dispatch } = useContext(DataContext)
  
  useEffect(() => {
      dispatch({type:"SET_SEARCH_DATA", payload:null})
    }, [])
   
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
      {state.searchData ?
        <FlatList
          data={state.searchData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => <Restaurant name={item.name} image={item.image_url} reviewCount={item.review_count} ratings={item.rating} />}
        /> : <Text>"Nothing to see here..." </Text>
      }
    </SafeAreaView>
  )
}

export default SearchScreen