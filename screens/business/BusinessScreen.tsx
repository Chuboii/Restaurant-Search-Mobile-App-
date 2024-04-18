import {styles} from "./BusinessScreen.style"
import {Text,TouchableOpacity, Linking, ScrollView, View,FlatList, Image} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, RouteProp } from '@react-navigation/native';
import Yelp from "../../api/yelp/Yelp"
import {useEffect, useContext, useState} from "react"
import {DataContext} from "../../context/DataContext"
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MySwiper from "../../components/swiper/Swiper"
import { AirbnbRating } from 'react-native-ratings';
import Spinner from '../../components/spinner/Spinner';
import useCache from "../../hooks/use cache/useCache";
import { colors } from "../../utils/colors/colors";

const BusinessScreen = ({navigation}) => {
  const { state, dispatch } = useContext(DataContext)
  const route = useRoute()
 const [storeData, extractData] = useCache()
 const [data, setData] = useState(null)
 const [reRender, setReRender] = useState(false)
 
 useEffect(() => {
   dispatch({type:"IS_BUSINESS_SCREEN", payload:true})
   const getResultDetails = async () => {
     try {

       if (route.params && typeof route.params === 'object' && 'id' in route.params) {
     const response = await Yelp.get(`/${route.params.id}`)
     setReRender(true)
     setData(response.data)
  }
     //console.log(data ? data.photos : "")
     }
     catch(err){
       console.log(err)
       console.log(err.message)
       if(err.message === "Request failed with status code 504"){
         navigation.navigate("error")
         dispatch({type:"SET_ERROR_MESSAGE", payload: "Connection Timeout"})
       }
       else if(err.message === "Cannot read property 'id' of undefined]"){
         navigation.navigate("error")
         dispatch({type:"SET_ERROR_MESSAGE", payload: "Something went wrong. Please try agin"})
       }
       else{
      dispatch({type:"SET_ERROR_MESSAGE", payload: "Server Timeout"})
        navigation.navigate("error")
       }
     }
   }
  getResultDetails()
 }, [])
 
 useEffect(() => {

        if (state.isNetworkConnected) {

          navigation.navigate("business")
      }
      else {
        navigation.navigate("noInternet")
    }
      }, [state.isNetworkConnected])
      
const goBack = () => navigation.goBack()

const openExternalLink = () => {
  if(data){
  Linking.openURL(data.url)
  }
  
}
  


if(data){
  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity style={{zIndex:1}} onPress={goBack}>
        <AntDesign name="arrowleft" size={24} color="black"
        style={styles.back}/>
        </TouchableOpacity>
    <ScrollView>
    <View style={styles.wrap2}> 
    <View style={styles.wrapper}>
    <Image source={{uri: data ? data.image_url : "https://something"}}
    style={styles.image}/>
    </View>
        <View style={styles.box}>
    <View style={styles.wrap}>
    <Text style={styles.name}> {data ? data.name : ""} </Text>
    <Text style={styles.cash}> $100 </Text>
    </View>
    
    <View style={styles.wrap}>
    <View style={styles.wrap}>


{ data ?  

<AirbnbRating
        count={5}
        reviews={['Terrible', 'Bad', 'OK', 'Good', 'Great']}
        defaultRating={data.rating}
        size={20}
                    isDisabled={true}
        showRating={false}
        selectedColor={colors.tertiary}
      />
: ""}

    <Text style={styles.text}> ({data ? data.rating : "" })</Text>
    </View>
    <TouchableOpacity onPress={() => storeData("data", data)} style={styles.fav}>
                <MaterialIcons name="favorite-border" size={30} style={styles.heart}
                  color={colors.tertiary} />

    </TouchableOpacity>
    </View>
    </View>
    </View>
    
  
      <View style={styles.pad}>
 
  
        <View style={styles.wrap}>
      <View>
  <View style={styles.box1}>
  <View style={styles.wrapBox}>
  <FontAwesome5 style={styles.wicon} name="layer-group" size={20} color="black" />
  <Text style={styles.text1}> Category </Text>
  </View>
  <Text style={styles.text}> {data ? data.categories[0].title : ""} </Text>
  </View>
  
          <View style={styles.box1}>
            <View style={styles.wrapBox}>
            <FontAwesome5 style={styles.wicon} name="flag" size={20} color="black" />
  <Text style={styles.text1}> Country</Text>
  </View>
    <Text style={styles.text}> {data ? data.location.country : ""} </Text>
    </View>
   </View>
          
      <View>
  <View style={styles.box1}>
  <View style={styles.wrapBox}>
  <FontAwesome5 name="city" style={styles.wicon} size={20} color="black" />
  <Text style={styles.text1}>City </Text>
  </View>
<Text style={styles.text}> {data ? data.location.city : ""} </Text>
  </View>
  
 
  <View style={styles.box1}>
  <View style={styles.wrapBox}>
  <Octicons name="code-review" size={20} style={styles.wicon} color="black" />
  <Text style={styles.text1}> Review Count </Text>
  </View>
  <Text style={styles.text}>{data ? data.review_count : ""} </Text>
  </View>
  
    <View style={styles.box1}>
  <View style={styles.wrapBox}>
<Ionicons name="business" size={24} color="black"  style={styles.wicon}/>
  <Text style={styles.text1}>Daytime hours  </Text>
  </View>
  <Text style={styles.text}>{data ? data.hours[0].hours_type : ""} </Text>
  </View>
  </View>
</View>
<MySwiper photos={data}/>

    
    <View style={styles.down}>
    <View style={[styles.wrap, styles.wrap1]}>
    <View style={styles.wrap}>
    <Entypo name="location-pin" size={25}
    color="black" style={styles.local}/>
    <Text style={styles.bold}> {data ? data.location.address1 : ""}</Text>
    </View>
    
    <View style={styles.wrap}>
    <Entypo style={styles.wicon} name="old-phone" size={24} color="black" />
    <Text style={styles.bold}> {data ? data.phone : "" }</Text>
    </View>
    </View>
    
    <View style={styles.wrapBox1}>
    <View style={styles.red}>
    </View>
        <View style={styles.blue}>
    </View>
    <View style={styles.green}>
    </View>
    <View style={styles.yellow}>
    </View>
    <View style={styles.black}>
    </View>
    </View>
    
    <TouchableOpacity onPress={openExternalLink} style={styles.wrap}>
    <Text style={styles.ebold}> Visit Website </Text>
    <AntDesign style={styles.aicon} name="link" size={24} color="black" />
    </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    ) 
}
else{
  return <Spinner/>
}
}

export default BusinessScreen