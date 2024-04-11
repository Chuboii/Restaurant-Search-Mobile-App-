import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const Bullets = ({text}) => {
  return (
    <View style={styles.container}>
<Entypo style={styles.bullet} name="dot-single" size={24} color="black" />
          <Text style={styles.text}>{ text }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    bullet: {
        fontSize: 30,
        fontWeight:'bold'
    },
    container:{
        flexDirection: "row",
        alignItems:"center"
    },
    text: {
        fontSize: 17,
        marginVertical:10
    }
})
export default Bullets