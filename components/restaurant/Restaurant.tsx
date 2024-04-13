import {View, Text, Image, TouchableOpacity} from "react-native"
import {styles} from "./Restaurant.style"
import Stars from "../stars/Stars"
import {colors} from "../../utils/colors/colors"
import { FontAwesome } from '@expo/vector-icons';

const Restaurant = ({name, image, reviewCount, ratings}) => {
  
  return (
    <TouchableOpacity style={styles.container}>
    <Image style={styles.img} source={{uri:image}}/>
    
    <View style={styles.wrapper}>
    <Text style={styles.title}>{name}</Text>
    </View>
    
    <View style={styles.wrapper}>
    
    <Text style={styles.price}> $100 </Text>
    
    <View style={styles.wrapper}>
    <View style={styles.wrapper1}>
    <Stars color={colors.tertiary}
    size={0} styling={styles.icon}/>
    <Stars color={colors.tertiary}  size={0} styling={styles.icon}/>
    <Stars color={colors.tertiary} size={0} styling={styles.icon}/>
    <Stars color={colors.tertiary}
    size={0} styling={styles.icon}
            />
   <FontAwesome name="star-half-empty" style={styles.icon}
   color={colors.tertiary} />
    </View>
    
    <Text style={styles.text}> ({ratings}) </Text>
    </View>
    </View>

    </TouchableOpacity>
    )
}

export default Restaurant