import {Dimensions, StyleSheet} from "react-native"
import {colors} from "../../utils/colors/colors"

const screenWidth = Dimensions.get("window").width

export const styles = StyleSheet.create({
    container:{
      
    },
    wrapper:{
      justifyContent:"center",
      alignItems:"center",
      marginBottom:20
    },
    wrap:{
      height:150
    },
    name:{
      marginTop:5,
      fontWeight:"bold",
      fontSize:16,
      textTransform:"uppercase"
    },
    text:{
      fontSize:18,
      left:10,
      textTransform:'capitalize'
    },
    image:{
      height: 220,
      width:screenWidth
    },
    profile:{
      width:150,
      height:150,
      borderRadius:200,
      backgroundColor:"gray",
      alignItems:"center",
      justifyContent:"center"
    },
    icon:{
      fontSize:60
    },
    lists:{
      
    },
    list:{
      flexDirection:"row",
      alignItems:"center",
      padding:23
    },
    email:{
      backgroundColor:colors.primary,
      marginTop:5,
      color:"white",
      padding:8,
      borderRadius:30
    },
    item: {
    padding: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#CED0CE',
  },
  signin:{
    marginTop:70,
    color: "white",
    padding:10,
    borderRadius:5,
  
  },
  text1:{
    color:"black",
    marginLeft:10
  },
  btn:{
    marginTop:10,
    borderColor:"black",
    borderWidth:1,
    color: "white",
    padding:10,
    borderRadius:5,
    flexDirection:"row",
    alignItems:"center"
  }
})