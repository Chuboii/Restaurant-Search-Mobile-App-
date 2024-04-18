import React from 'react';
import { View,Dimensions, Image, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import {colors} from "../../utils/colors/colors"

const screenWidth = Dimensions.get("window").width

const styled = StyleSheet.create({
  slide: {
  
  },
  image: {
    width: screenWidth,
    height:200,
    borderRadius:10
  },
  wrapper:{
    height:200,
    marginBottom:30
  },
  activePaginationDot:{
    backgroundColor:colors.tertiary
  },
  paginationDot:{
    backgroundColor:"rgba(255,255,255,.8)"
  }
});



const MySwiper = ({photos}) => {
  return (
    <Swiper style={styled.wrapper}
    loop={true}
    autoplay={true}
    dotStyle={styled.paginationDot}
  activeDotStyle={styled.activePaginationDot}
    showsButtons={false}>
    {photos && photos.photos ? photos.photos.map((data, idx) => 
      <View key={idx} style={styled.slide}>
<Image 
  source={{ uri: data }}
  style={styled.image}
/>

      </View>) : ""
}
    </Swiper>
  );
};

export default MySwiper;
