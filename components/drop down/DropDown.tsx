import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {styles} from "./DropDown.style"
import {DataContext} from "../../context/DataContext"

const DropDown = ({setValue, dropDownItems, selectedValue, placeholder, styling}) => {
  const {dispatch, state} = useContext(DataContext)
/*
useEffect(() => {
  //console.log(selectedValue)
  dispatch({type:"SET_DROPDOWN_VALUE", payload: selectedValue})
},[])*/

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={dropDownItems}
        placeholder={placeholder}
        value={selectedValue}
        style={{
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      color: 'black',
      paddingRight:30
      
    },
    placeholder: {
      color: 'black'
    },
    iconContainer: {
      top: 0,
      right: 12,
      color:"black"
    }}}
      />
    </View>
  );
};


export default DropDown;
