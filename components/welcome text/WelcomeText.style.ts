import {StyleSheet} from "react-native"
import {colors} from "../../utils/colors/colors"

export const styles = StyleSheet.create({
  container:{
    padding:5
  },
  title:{
    fontSize:40,
    color: colors.primary,
    fontWeight:"bold",
    textTransform:"capitalize"
  },
  text:{
    fontSize:40,
    color: colors.primary,
    textTransform:"capitalize"
  }
})