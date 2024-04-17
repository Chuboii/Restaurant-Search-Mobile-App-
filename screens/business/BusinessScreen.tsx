import {styles} from "./BusinessScreen.style"
import {Text, View,FlatList, Image} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native';
import Yelp from "../../api/yelp/Yelp"
import {useEffect, useContext, useState} from "react"
import {DataContext} from "../../context/DataContext"
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Stars from "../../components/stars/Stars"
import { FontAwesome } from '@expo/vector-icons';
import {colors} from "../../utils/colors/colors"
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {stylesbill} from "../../components/bill board/BillBoard.style"
import Swiper from 'react-native-swiper';

const BusinessScreen = ({navigation}) => {
  const { state, dispatch } = useContext(DataContext)
 const route= useRoute() 
 const [data, setData] = useState(null)
 const [starArr, setStarArr] = useState([])
 const [reRender, setReRender] = useState(false)
 
 useEffect(() => {
   const getResultDetails = async () => {
     try {
      
     const response = await Yelp.get(`/${route.params.id}`)
     setReRender(true)
     setData(response.data)
     console.log(data ? data.photos : "")
     }
     catch(err){
       console.log(err)
     }
   }
  getResultDetails()
 }, [])
 
/*
   const arr = []
   const num = data ? Math.floor(data.rating) : 0
   
  for(let i = 0; i < num;  i++){
    
  arr.push(<Stars key={i.toString()} styling={styles.icon}/>)
  }
  
  if(data && data.rating > 4){
      arr.push( <FontAwesome name="star-half-empty" style={styles.icon}
      color={colors.tertiary} />)
  }
    //console.log(arr)*/
  
 
 

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.wrap2}> 
    <View style={styles.wrapper}>
    <AntDesign name="arrowleft" size={24} color="black" style={styles.back}/>
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
{/* arr ? arr : ""*/}
 

    <Text style={styles.text}> (4.5) </Text>
    </View>
    <View style={styles.fav}>
    <MaterialIcons name="favorite-border" size={30} style={styles.heart}
    color="red" />

    </View>
    </View>
    </View>
    </View>
    
  
      <View style={styles.pad}>
 
  
        <View style={styles.wrap}>
      <View>
  <View style={styles.box1}>
  <View style={styles.wrapBox}>
  <Text> Category </Text>
  </View>
  <Text style={styles.text}> {data ? data.categories[0].title : ""} </Text>
  </View>
  
          <View style={styles.box1}>
            <View style={styles.wrapBox}>
  <Text style={styles.text1}> Country</Text>
  </View>
    <Text style={styles.text}> {data ? data.location.country : ""} </Text>
    </View>
   </View>
          
      <View>
  <View style={styles.box1}>
  <View style={styles.wrapBox}>
  <Text style={styles.text1}>City </Text>
  </View>
<Text style={styles.text}> {data ? data.location.city : ""} </Text>
  </View>
  
 
  <View style={styles.box1}>
  <View style={styles.wrapBox}>
  <Text style={styles.text1}> Review Count </Text>
  </View>
  <Text style={styles.text}>{data ? data.review_count : ""} </Text>
  </View>
  </View>
</View>
{/*<View>
  <FlatList 
  data={data ? data.photos : ""}
  renderItem={({item}) => <Image source={{uri: item }} style={styles.image2}/>}
  horizontal
  />
  </View>*/}

    
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
    
    <View style={styles.wrapBox}>
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
    
    <View style={styles.wrap}>
    <Text style={styles.ebold}> Visit Website </Text>
    <AntDesign style={styles.aicon} name="link" size={24} color="black" />
    </View>
    </View>
    </View>
    </SafeAreaView>
    )
}

export default BusinessScreen