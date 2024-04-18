import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {TouchableOpacity, View} from "react-native"
import DropDown from "../drop down/DropDown"
import {useState} from "react"
import {styles} from "./HomeHeader.style"


const dropDownItems = [
  {
  label:"New York", value: "New York"
},
{
  label: "San Jose", value: "San Jose"
},
{
  label:"London", value:"London"
},
{
  label: "Chicago", value:"Chicago"
},
{
  label:"Los Angeles", value: "Los Angeles"
}
]
export default function HomeHeader({navigation}){
  const [selectedValue, setSelectedValue] = useState(null)
  const [reRender, setReRender] = useState(false)
  


  const onChangeValue = (value: string) => {
    setSelectedValue(value)
    setReRender(!reRender)
  }
  
  const navigateToFavorites = () => {
    navigation.navigate("favorites")
  }

  return(
    <View style={styles.container}>
      
    <EvilIcons name="location"  color="black"style={styles.icon}/>
    
      <DropDown 
        reRender={reRender}
  selectedValue={selectedValue}
  setValue={onChangeValue}
  dropDownItems={dropDownItems}
  placeholder={{label:"Select a location", value:""}}
  styling=""
      />
    <TouchableOpacity onPress={navigateToFavorites}>
<MaterialIcons style={styles.icon} name="favorite-border" size={24} color="black" />
</TouchableOpacity>
  </View>
    )
}