import {styles} from "./BusinessScreen.style.ts"
import {Text, View, Image} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native';
import Yelp from "../../api/yelp/Yelp"
import {useEffect} from "react"
import { AntDesign } from '@expo/vector-icons';

const BusinessScreen = ({navigation}) => {
 const {id} = useRoute().params
/*
 useEffect(() => {
   const getResultDetails = async () => {
     try{
     const response = await Yelp.get(`/${id}`)
     //console.log(response.data)
     }
     catch(err){
       console.log(err)
     }
   }
  getResultDetails()
 }, [])*/

  return (
    <SafeAreaView>
    <View> 
    <AntDesign name="arrowleft" size={24} color="black" />
    <Image />
    </View>
    
    
    </SafeAreaView>
    )
}

export default BusinessScreen