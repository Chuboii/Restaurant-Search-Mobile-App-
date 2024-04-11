import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import NetInfo from "@react-native-community/netinfo";
import { DataContext } from '../../context/DataContext';

const DetectNetwork = () => {
  const {dispatch} = useContext(DataContext)
   
    useEffect(() => {
        NetInfo.addEventListener(state => {
                dispatch({type:"IS_NETWORK_CONNECTED", payload: state.isConnected})
        });    
}, [])


    
  return (
    <View>
    </View>
  )
}

export default DetectNetwork