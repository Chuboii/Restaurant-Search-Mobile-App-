import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Wave } from 'react-native-animated-spinkit'
import { DataContext } from '../../context/DataContext'

const LoadScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false)
    const { state } = useContext(DataContext)

 
    useEffect(() => {
        let timeout;

        setTimeout(() => {
            navigation.navigate('TabNavigation')
        }, 3000);

        return () => {
            clearImmediate(timeout)
        }

    }, [])


  return (
      <SafeAreaView style={styles.container}>
          <Wave size={50}/>
      {/* <Image source={require("../../assets/images__10_-removebg-preview.png")}/> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#eee",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
    }
})
export default LoadScreen