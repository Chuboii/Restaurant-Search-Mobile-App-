import { View, Text, TextInput, FlatList, Image } from 'react-native'
import React, {useMemo, useCallback, useContext, useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import useSearchData from '../../hooks/use search data/useSearchData';
import { DataContext } from '../../context/DataContext';
import SearchBar from '../../components/search bar/SearchBar';
import {styles} from "./SearchScreen.style"
import { SafeAreaView } from 'react-native-safe-area-context'
import Restaurant from '../../components/restaurant/Restaurant';

import { useFocusEffect, useRoute } from '@react-navigation/native'; 

const SearchScreen = ({navigation}) => {
    const [searchValue, setSearchValue] = useState("")
    const [onSearchSubmit] = useSearchData()
    const { state, dispatch } = useContext(DataContext)
  const route = useRoute()
  const [removeSearchResult, setRemoveSearchResult] = useState(false)
   const memoizedDispatch = useCallback(
    (action) => {
     return dispatch(action)
      }, [dispatch])
  
  
  useFocusEffect(
  
    useCallback(() => {
      if(state.isBusinessScreen){
        //fix the consistent display of sesrvh screen after navigating from
        //business screen
        //console.log(state.searchData)
        memoizedDispatch({ type: "SET_SEARCH_DATA", payload: state.searchData });
      }
      else{
     memoizedDispatch({ type: "SET_SEARCH_DATA", payload: "" });
   //   dispatch({type: "IS_SEARCH_RESULTS", payload: false})
   dispatch({type: "IS_SEARCH_RESULTS", payload: false})
      }

    
   setSearchValue("")
    }, [memoizedDispatch])
  );

  // useEffect(() => {
  //   const isRemoved = removeSearchResult ? styles.opacity : 1
  //   setRemoveSearchResultVar(isRemoved)
  // } , [removeSearchResult])
  

  
  
    useEffect(() => {
        if (state.isNetworkConnected) {
          navigation.navigate("search")
      }
      else {
        navigation.navigate("noInternet")
    }
      }, [state.isNetworkConnected])

    
    const onChangeText = (value: string) => {
      setSearchValue(value)
      setRemoveSearchResult(true)
    }
    

  return (
      <SafeAreaView style={styles.container}>
    <SearchBar
        navigation={navigation}
        value={searchValue}
        onChangeInputText={onChangeText}
        onTextSubmit={() => onSearchSubmit(searchValue, navigation,
        setRemoveSearchResult)}
      />
      {removeSearchResult ? "" :
        state.searchData && <Text style={styles.title}> Search results for <Text
      style={styles.bold}>{searchValue}</Text> </Text> }
      <View style={styles.wrapper}>
        {
          state.searchData ?
        <FlatList
          data={state.searchData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(data) => data.id}
            renderItem={({ item }) =>
              <Restaurant id={item.id} name={item.name} image={item.image_url} navigation={navigation} ratings={item.rating} />}
          />
            : state.noSearchResults ? <Image
            source={require("../../assets/images__1_-removebg-preview.png")}
            style={styles.image2} />  :
            <View style={styles.wrap}>
            <Image source={require("../../assets/images__7_-removebg-preview.png")} style={styles.image} />
           <Text style={styles.text}>Search that business Here</Text>
          </View> 
}
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen