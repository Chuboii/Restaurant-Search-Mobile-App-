import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {View} from "react-native"
import DropDown from "../drop down/DropDown"
import {useState} from "react"
import {styles} from "./HomeHeader.style"


const dropDownItems = [{
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
export default function HomeHeader(){
  const [selectedValue, setSelectedValue] = useState(null)
  
  const onChangeValue = (value) => {
    setSelectedValue(value)
  }
  
  
  
  return(
    <View style={styles.container}>
    <EvilIcons name="location" size={24} color="black"style={styles.icon}/>
    
  <DropDown 
  selectedValue={onChangeValue}
  setValue={onChangeValue}
  dropDownItems={dropDownItems}
  placeholder={{label:"Select a location", value:""}}
  styling=""
  />
<MaterialIcons name="favorite-border" size={24} color="black" />

  </View>
    )
}