import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ErrorScreen.style'
import Bullets from '../../components/bullets/Bullets'

const ErrorScreen = () => {
  return (
      <View style={styles.container}>
          <View style={styles.wrap}>
          <Text style={[styles.span, styles.resolve]}>Something went wrong</Text>
              <Text style={styles.text}>Error Message: </Text>
          </View>
          
          <View style={styles.wrapper}>
              <Text style={[styles.span, styles.resolve]}>How can I resolve this error?</Text>
              <View style={styles.ul}>
                  <Bullets text={<Text style={styles.list}>Switch your internet connection from <Text>WiFi</Text> to <Text>Mobile Data</Text> or <Text>Mobile Data</Text> to <Text>WiFi.</Text> Then reload the app</Text>}/>
                <Bullets text={<Text style={styles.list}>Temporarily switch your network provider, then reload the app</Text>}/>
                <Bullets text={<Text style={styles.list}>Ensure your app is updated to the latest version</Text>}/>
              </View>
          </View>

          <View style={styles.box}>
          <View style={styles.boxReload}>
              <Text style={styles.text}>Still stuck on this page? <Text style={styles.span}>Reload</Text> or <Text style={styles.span}>Screenshot this page</Text> and share it with keksbot companies support for assistance</Text>
          </View>

          <View style={styles.btnWrapper}>
              <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>Return Home</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn1}>
                  <Text style={styles.btnText1}>Contact Support</Text>
              </TouchableOpacity>
              </View>
            </View>
    </View>
  )
}

export default ErrorScreen