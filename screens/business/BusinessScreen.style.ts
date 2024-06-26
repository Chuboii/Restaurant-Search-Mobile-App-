import {StyleSheet, Dimensions} from "react-native"
import {colors} from "../../utils/colors/colors"

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height


export const styles = StyleSheet.create({
 container:{
    flex:1,
    justifyContent:"space-between"
  },
  image:{
    width:screenWidth,
    height:300
  },
  wrapper:{
    position:"relative"
  },
  back:{
    position:"absolute",
    top:40,
    left:10,
    fontSize:30,
    zIndex:1,
    backgroundColor:"black",
    color:"white",
    borderRadius:50,
    padding:5
  },
  icon:{
    color: colors.tertiary,
    fontSize:20
  },
  name:{
    fontWeight:"900",
    fontSize:20
  },
  cash:{
    borderColor:"black",
    borderWidth:.5,
    color:colors.light,
    fontWeight:"bold",
    fontSize:19,
    padding:5,
    borderRadius:5
  },
  text:{
    fontSize:18,
    textTransform:"capitalize",
    fontWeight:"bold",
    marginTop:10
  },
  wrap:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10
  },
  box1: {
    marginBottom:20,
    paddingHorizontal:10
  },
  wrap2: {
    
  },
  text1: {
    fontSize:18,
    marginTop:5,
    textTransform:"capitalize",
    fontWeight:'bold',
    marginLeft:10
  },
  box:{
    padding:10
  },
  fav:{
    flexDirection:"row",
    alignItems:"center",
  },
  heart:{
    
  },
  local:{
    fontWeight:"bold",
    fontSize:25,
    color:"orangered"
  },
  red:{
    width:25,
    height:25,
    borderRadius:50,
    backgroundColor:"red",
    marginRight:15
  },
  blue:{
    width:25,
    height:25,
    borderRadius:50,
    backgroundColor:"blue",
    marginRight:15
  },
  yellow:{
width:25,
    height:25,
    borderRadius:50,
    backgroundColor:"yellow",
    marginRight:15
  },
  black:{
width:25,
    height:25,
    borderRadius:50,
    backgroundColor:"black",
    marginRight:15
  },
  green:{
width:25,
    height:25,
    borderRadius:50,
    backgroundColor:"green",
    marginRight:15
  },
  wrapBox:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    borderColor:"black",
    borderWidth:.5,
    borderRadius:5,
    
    
  },
  wrapBox1:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    marginBottom:25
  },
  wicon:{
    color:"orangered"
  },
  bold:{
    fontSize:17,
    marginLeft:6,
    fontWeight:"900",
    color:"black"
  },
  wrap1:{
    backgroundColor:"transparent",
    paddingVertical:10,
    borderColor:"black",
    borderWidth:.5,
    borderRadius:30,
    alignItems:"center",
    paddingHorizontal:20
  },
  ebold:{
    backgroundColor:colors.black,
    color:colors.white,
    padding:10,
    borderRadius:30,
    paddingVertical:15,
    fontWeight:"bold",
    fontSize:20,
    paddingHorizontal:20,
    width: screenWidth / 100 * 70
  },
  aicon:{
    color:colors.white,
    backgroundColor:colors.black,
    padding:15,
    borderRadius:50
  },
  pad:{
    padding:10
  },
  down:{
    
  },
  image2:{
    width:screenWidth,
    height:200,
    borderRadius:10
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  swiper:{
    height:200,
  },
  container1:{
    zIndex:100,
    backgroundColor:"red"
  }
})