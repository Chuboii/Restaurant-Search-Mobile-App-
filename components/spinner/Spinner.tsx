import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Chase } from 'react-native-animated-spinkit'
import {colors} from "../../utils/colors/colors"

const mySpinner = ({absolute = "absolute", mb}) => {
  const [isLoading, setIsLoading] = useState(true);

  const toggleSpinner = () => {
    setIsLoading(!isLoading);
  };

  return (
<View style={styles.container}>
      <Chase size={48} style={styles.wrap} color={colors.primary}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:"relative",
    bottom:0
  },
  spinner: {
    marginBottom: 50,
  },
  wrap:{
    marginTop:50
  }
});

export default mySpinner;
