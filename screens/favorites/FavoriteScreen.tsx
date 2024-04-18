import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './FavoriteScreen.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, AntDesign } from '@expo/vector-icons';
import useCache from '../../hooks/use cache/useCache';

const FavoriteScreen = ({navigation}) => {
  const [extractData, cachedData] = useCache()
  
  
  const navigateBack = () => navigation.goBack()

  useEffect(() => {
    console.log(cachedData().data).length;
    
    extractData('data', "")
    
  }, [cachedData])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Entypo style={styles.hIcon} name="arrow-with-circle-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.hTxt}>Favorites</Text>
      </View>

      <FlatList
        keyExtractor={(data) => data.id}
        data={cachedData().data}
        renderItem={({item}) => <View style={styles.wrapper}>
        <View style={styles.wrap}>
          <Image style={styles.image} source={require("../../assets/download (7).jpeg")}/>
          <View style={styles.box}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.text}>category</Text>
            <Text style={styles.text}>Price</Text>
          </View>
        </View>

        <View>
          <AntDesign style={styles.icon} name="delete" size={24} color="black" />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>View Business</Text>
          </TouchableOpacity>
        </View>
        </View>
        } />

    </SafeAreaView>
  )
}

export default FavoriteScreen