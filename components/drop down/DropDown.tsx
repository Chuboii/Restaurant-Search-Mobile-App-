import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {styles} from "./DropDown.style"
import { DataContext } from "../../context/DataContext"
import DropDownPicker from 'react-native-dropdown-picker';


const DropDown = ({setValue, dropDownItems, selectedValue, placeholder, styling, reRender}) => {
  const { dispatch, state } = useContext(DataContext)
  const [open, setOpen] = useState(false);

useEffect(() => {
  if (selectedValue) {
    dispatch({ type: "SET_DROPDOWN_VALUE", payload: selectedValue })
  }
},[reRender])

  
  
  return (
    <View style={styles.container}>
      <DropDownPicker
        searchable={true}
        open={open}
        value={selectedValue}
        items={dropDownItems}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setValue}
        placeholder={"San Jose"}
        style={{
          backgroundColor:"transparent"
        }}
        theme="LIGHT"
        multiple={false}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
      />
    </View>
  );
};


export default DropDown;
