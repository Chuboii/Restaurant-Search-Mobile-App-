import {View, Text, TouchableOpacity,FlatList, Image} from "react-native"
import {styles} from "./SettingsScreen.style"
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import {DataContext} from "../../context/DataContext"
import {useContext} from "react"

const settingsTabs = [{
  name: "Favorites",
  icon: "hearto"
}, 
{
  name: "about",
  icon: "infocirlceo"
}, 
{
  name:"clear cache",
  icon: "cached",
  materialIcon: "materialIcon"
},
{
  name:"change location",
  icon:"location",
  entypo:"entypo"
},
{
  name:"sign in",
  icon:"login"
}
]
const ItemSeparator = () => <View style={styles.separator} />;


const SettingsScreen = ({navigation}) => {
  const route = useRoute()
  const {state} = useContext(DataContext)
  
  //console.log(route.name)
  
  return (
    <SafeAreaView style={styles.container}>


    <View style={styles.lists}>

    <FlatList 
    keyExtractor={(data) => data.name}
     data={settingsTabs}
     showsVerticalScrollIndicator={false}
     ItemSeparatorComponent={ItemSeparator}
     ListHeaderComponent={
     <>
       <View style={styles.wrapper}>
    <View style={styles.wrap}>
    <Image
    style={styles.image}
    source={require("../../assets/icon.png")}/>
    </View>
    
 {state.userData ?
 <View style={styles.wrapper}>
    <View style={styles.profile}>
    <AntDesign name="user" size={24} color="black" style={styles.icon} /> 
  </View> 
    <Text style={styles.name}> Joe Doe </Text>
    <Text style={styles.email}> joedoe@gmail.com </Text>
  </View>  :
  <View style={styles.signin}>
  <TouchableOpacity style={styles.btn}>
     <AntDesign name={"google"} size={20}
     color="orangered"/>
      <Text style={styles.text1}> Sign in with Google </Text>
    </TouchableOpacity>

  <TouchableOpacity style={styles.btn}>
     <AntDesign name="mail" size={20} color="orangered"  />
      <Text style={styles.text1}> Sign in with Email </Text>
    </TouchableOpacity>
  </View>
 }
    </View> 
     </>
     }
     renderItem={({item}) => <TouchableOpacity style={styles.list}> 
     {item.materialIcon === "materialIcon" ? <MaterialIcons name={item.icon} size={20}
     color="black"/> : item.entypo === "entypo" ? <Entypo name={item.icon}
     size={20} color="black"/> : <AntDesign name={item.icon} size={20}
     color="black"/>}
     <Text style={styles.text}> {item.name} </Text>
     </TouchableOpacity> }
    />
    </View>
    </SafeAreaView>
    )
}

export default SettingsScreen