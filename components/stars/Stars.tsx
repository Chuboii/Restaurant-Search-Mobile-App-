import { FontAwesome } from '@expo/vector-icons';
import {StyleSheet} from "react-native"
import {styles} from "./Stars.style"

const Stars = ({size, color, styling}) =>{
  
  return (
    <FontAwesome style={[styles.icon, styling]} name="star" size={size} color={color} />
    )
}



export default Stars