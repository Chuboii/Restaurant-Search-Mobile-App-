import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main:{
    padding:5
  },
    container: {
        marginHorizontal: 15,
        borderRadius: 30,
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "black",
        borderWidth:1.5,
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
      marginTop:50
    }
})