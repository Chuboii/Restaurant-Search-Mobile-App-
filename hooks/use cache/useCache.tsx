import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';


export default () => {
   const [cachedData, setCachedData] = useState([])




const clearAllData = async () => {
  
  storage.remove({

  key: 'lastPage'

});
storage.remove({
  key: 'user',
  id: '1001'
});

storage.clearMap();
}

const storeData = async (key: string, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('data', jsonValue);
    console.log("data saved")
  } 
  catch(err){
    console.log("error storing data", err)
  }
    }
      
      
      
      
const extractData = async(key) => {

  try {
    const jsonValue = await AsyncStorage.getItem('data');
    console.log(jsonValue != null ? JSON.parse(jsonValue) : null)
    
    return jsonValue != null ? JSON.parse(jsonValue) : null
    
  } catch (e) {
    // error reading value
    console.log("error storin data", e)
  }

}

    return [storeData, extractData, cachedData]
}