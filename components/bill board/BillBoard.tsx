import React from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import {stylesbill} from "./BillBoard.style"


const BillBoard = () => {
  const { state } = useContext(DataContext);

  return (
    <View style={stylesbill.container}>
      {state.apiData ? (
        <Swiper 
        autoplay={true}
  dotStyle={stylesbill.paginationDot}
  activeDotStyle={stylesbill.activePaginationDot}
        loop={true} showsPagination={true} style={stylesbill.swiper}>
          {state.apiData.map((item, idx) => (
            <View style={stylesbill.slide} key={item.id}>
              <Image style={stylesbill.image} source={{ uri: item.image_url}} />
            </View>
          ))}
        </Swiper>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};


export default BillBoard;
