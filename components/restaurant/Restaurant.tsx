import {View, Text, Image, TouchableOpacity} from "react-native"
import {styles} from "./Restaurant.style"
import Stars from "../stars/Stars"
import {colors} from "../../utils/colors/colors"
import { FontAwesome } from '@expo/vector-icons';

const Restaurant = ({name, image, reviewCount, ratings, navigation, id }) => {
  
  
  const navigateToBusinessDetails= () => navigation.navigate("business", {id})
  
  return (
    <TouchableOpacity style={styles.container}
    onPress={navigateToBusinessDetails}
    >
    <Image style={styles.img} source={{uri:image ? image : "https://www.svgheart.com/wp-content/uploads/2020/08/coffee-cup-free-svg-file.png"}}/>
    
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