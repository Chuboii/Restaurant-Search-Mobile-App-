import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { styles } from './NoInternetScreen.style'
import { DataContext } from '../../context/DataContext'

const NoInternetScreen = ({navigation}) => {
    const { state, dispatch } = useContext(DataContext)
    
    const navigateToHome = () => {
        state.reloadDataFunction()
        if (state.isNetworkConnected) {
            navigation.navigate("home")
        }
        else {
            navigation.navigate("home")
            setTimeout(() => {
                navigation.navigate("noInternet")
            }, 500)
        }
    }
    
  return (
    <View style={styles.container}>
          <Text style={styles.header}>No Internet Connection</Text>
          <Text style={styles.text}>Check your <Text style={styles.span}>Wifi</Text> or <Text style={styles.span}>mobile data</Text> connection and try again</Text>
          <TouchableOpacity style={styles.btn} onPress={navigateToHome}>
              <Text style={styles.btnText}>Try Agaiin</Text>
       </TouchableOpacity>
      </View>
  )
}

export default NoInternetScreen