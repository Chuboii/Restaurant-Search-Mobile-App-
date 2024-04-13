import React from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import {styles} from "./BillBoard.style"

const BillBoard = () => {
  const { state } = useContext(DataContext);

  return (
    <View style={styles.container}>
      {state.apiData ? (
        <Swiper 
        autoplay={true}
  dotStyle={styles.paginationDot}
  activeDotStyle={styles.activePaginationDot}
        loop={true} showsPagination={true} style={styles.swiper}>
          {state.apiData.map((item) => (
            <View style={styles.slide} key={item.id}>
              <Image style={styles.image} source={{ uri: item.image_url }} />
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
