import {StyleSheet} from "react-native"
import {colors} from "../../utils/colors/colors"

export const styles = StyleSheet.create({
   container:{
     marginTop:18,
     paddingHorizontal:5
   },
   btn:{
     borderColor:colors.primary,
     borderWidth:1.5,
     padding:8,
     borderRadius:7,
     marginHorizontal:4
   },
   text:{
     color:colors.white
   },
   active:{
     backgroundColor:colors.primary,
     padding:8,
     borderRadius:7,
     marginHorizontal:4
   },
   textActive:{
     color:colors.primary
   }
})