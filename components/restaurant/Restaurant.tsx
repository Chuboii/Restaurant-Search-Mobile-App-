import {View, Text, Image} from "react-native"
import {styles} from "./Restaurant.style"
import Stars from "../stars/Stars"
import {colors} from "../../utils/colors/colors"

const Restaurant = ({name, image, reviewCount, ratings}) => {
  
  return (
    <View style={styles.container}>
    <Image style={styles.img} source={{uri:image}}/>
    
    <View style={styles.wrapper}>
    <Text style={styles.title}>{name}</Text>
    </View>
    
    <View style={styles.wrapper}>
    
    <Text style={styles.price}> $55 </Text>
    
    <View style={styles.wrapper}>
    <View style={styles.wrapper}>
    <Stars color={colors.PRIMARY_COLOR}
    size={0} styling={styles.icon}/>
    <Stars color={colors.PRIMARY_COLOR}  size={0} styling={styles.icon}/>
    <Stars color={colors.PRIMARY_COLOR} size={0} styling={styles.icon}/>
    <Stars color={colors.PRIMARY_COLOR}
    size={0} styling={styles.icon}
    />
    </View>
    
    <Text style={styles.text}> {reviewCount} </Text>
    </View>
    </View>

    </View>
    )
}

export default Restaurant