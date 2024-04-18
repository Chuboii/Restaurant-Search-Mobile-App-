import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';




export default () => {
   const [cachedData, setCachedData] = useState(null)

    const storeData = async (key: string, value) => {
        const stringifiedValue = JSON.stringify(value)

        try {
          await AsyncStorage.setItem(key, stringifiedValue);
          console.log('Data stored successfully!');
        } catch (error) {
          console.log('Error storing data: ', error);
        }
      };
      
    const extractData = async(key = 'data') => {
        try {
    
            
  // Retrieve JSON string from AsyncStorage
  const jsonString = await AsyncStorage.getItem(key);
  if (jsonString !== null) {
    // Parse JSON string back to object
    const userData = JSON.parse(jsonString);
      console.log('User data retrieved successfully: ', userData);
      setCachedData(userData)
  } else {
    console.log('No user data found in storage.');
          }
        } catch (error) {
          console.log('Error retrieving data: ', error);
        }
      };
      

    return [storeData, extractData, cachedData]
}