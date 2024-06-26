import {View, Text,FlatList, TouchableOpacity} from "react-native"
import {styles} from "./QuickAccess.style"
import {QuickAccessData} from "../../utils/quick access data/quickaccess"
import { useContext,useEffect } from "react"
import { DataContext } from "../../context/DataContext"
import { useRoute } from '@react-navigation/native';

const QuickAccess = () =>{
   const {dispatch, state} = useContext(DataContext)  
   const route = useRoute()
   
  const addTextValueToContext = (textValue: string) => {
    dispatch({type:"SET_TOUCH_MENU_VALUE", payload:""})
    dispatch({type:"SET_TOUCH_MENU_VALUE", payload:textValue})
  }
  
  useEffect(() => {
    dispatch({type:"SET_TOUCH_MENU_VALUE", payload:"All"})
  },[])
  return (
    <View style={styles.container}>
    <FlatList 
    horizontal={true}
    showsHorizontalScrollIndicator={false} 
     keyExtractor={(data)=> String(data.id)}
     data={QuickAccessData}
     renderItem={({item}) =>{
    
    return (
    
      <TouchableOpacity 
        onPress={() => addTextValueToContext(item.name)}
     style={item.name === state.touchMenuValue? styles.active : styles.btn}>
     <Text style={item.name === state.touchMenuValue ? styles.text : styles.textActive}> {item.name} </Text>
    </TouchableOpacity>
       )}
     }
    />

    </View>
    )
}

export default QuickAccess