import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../../screens/home/HomeScreen"
import SearchScreen from "../../screens/search/SearchScreen"
import { Feather } from '@expo/vector-icons';
import SettingsScreen from "../../screens/settings/SettingsScreen"


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'search') {
            iconName = focused ? 'search' : 'search';
          }
          else if(route.name === "settings"){
            iconName = focused ? "settings" : "settings"
          }
          
          return <Feather name={iconName} size={size} color={color} />
        },
      }), {headerShown:false}}>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="search" component={SearchScreen} />
        <Tab.Screen name="settings" component={SettingsScreen} />
      </Tab.Navigator>
  )
}