import {StyleSheet} from "react-native"
import { Dimensions } from 'react-native';
import {colors} from "../../utils/colors/colors"

const screenWidth = Dimensions.get('window').width;

export const stylesbill = StyleSheet.create({
  container:{
   marginTop:30,
   marginHorizontal:5
  },
  image:{
    width:screenWidth,
    height:200,
    borderRadius:10
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  swiper:{
    height:200
  },
  activePaginationDot:{
    backgroundColor:colors.tertiary
  },
  paginationDot:{
    backgroundColor:"rgba(255,255,255,.8)"
  }
})