import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import {stylesbill} from "./BillBoard.style"


const BillBoard = ({navigation}) => {
  const { state } = useContext(DataContext);

const navigateToBusinessDetails= (id) => navigation.navigate("business", {id})
  
  return (
    <View style={stylesbill.container}>
      {state.apiData ? (
        <Swiper 
        autoplay={true}
  dotStyle={stylesbill.paginationDot}
  activeDotStyle={stylesbill.activePaginationDot}
        loop={true} showsPagination={true} style={stylesbill.swiper}>
          {state.apiData.map((item, idx) => {
          if(idx < 10){
          return(
            <TouchableOpacity onPress={()=> navigateToBusinessDetails(item.id)} style={stylesbill.slide} key={item.id}>
              <Image style={stylesbill.image} source={{ uri: item.image_url}} />
            </TouchableOpacity>
          )}
          }
          )}
        </Swiper>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};


export default BillBoard;
