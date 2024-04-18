import { StyleSheet } from "react-native";
import {colors} from "../../utils/colors/colors"

export const styles = StyleSheet.create({
    container:{
      
    },
    title:{
      fontSize:25,
      color:colors.primary,
      textTransform:"capitalize",
      padding:5
    },
    wrapper:{
      marginTop:15
    },
    bold:{
      fontSize:35,
      color:"orangered",
      fontWeight:"bold"
  },
  opacity: {
      opacity:0
    },
  image: {
    alignSelf: "center",
  },
  wrap: {
    top:30,
    flexDirection: "column",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "capitalize",
    top:30
  },
  image2:{
    alignSelf: "center",
    top:70
  }
})