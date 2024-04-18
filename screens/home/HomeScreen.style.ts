import { StyleSheet } from "react-native";
import {colors} from "../../utils/colors/colors"

export const styles = StyleSheet.create({
  main:{
    padding:0,
  },
    container: {
        marginHorizontal: 5,
        borderRadius: 30,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "black",
        borderWidth:1.5
    },
    icon: {
      left:25
    },
    input: {
        paddingHorizontal:40,
        flex: 1,
        justifyContent: "center",
        height:50
    },
    wrapper:{
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"row",
      marginTop:10,
      paddingBottom:500
    },
    title:{
      fontSize:30,
      marginTop:15,
      color: colors.primary,
      fontWeight:"bold"
    }
})