import {View, Text,FlatList, TouchableOpacity} from "react-native"
import {styles} from "./QuickAccess.style"
import {QuickAccessData} from "../../utils/quick access data/quickaccess"

const QuickAccess = () =>{
  
  
  return (
    <View style={styles.container}>
    <FlatList 
    horizontal={true}
    showsHorizontalScrollIndicator={false} 
     keyExtractor={(data)=> data.id}
     data={QuickAccessData}
     renderItem={({item}) =>{
    
    return (
    
    <TouchableOpacity 
     style={item.id === 1 ? styles.active : styles.btn}>
     <Text style={item.id === 1 ? styles.text : styles.textActive}> {item.name} </Text>
    </TouchableOpacity>
       )}
     }
    />

    </View>
    )
}

export default QuickAccess