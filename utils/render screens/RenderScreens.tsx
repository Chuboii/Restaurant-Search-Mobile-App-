import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../../screens/home/HomeScreen"
import ErrorScreen from "../../screens/error/ErrorScreen"
import NoInternetScreen from "../../screens/no internet/NoInternetScreen"
import SearchScreen from "../../screens/search/SearchScreen"
import TabNavigation from "../../utils/tab navigation/TabNavigation"
import SettingsScreen from "../../screens/settings/SettingsScreen"
const Stack = createNativeStackNavigator()

const RenderScreens = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerShown:false
          }}
          >
          <Stack.Screen name="le" component={TabNavigation} />
              <Stack.Screen name="home" component={HomeScreen} />
              <Stack.Screen name="search" component={SearchScreen} />
             <Stack.Screen name="error" component={ErrorScreen} />
       <Stack.Screen name="settings"
            component={SettingsScreen}/>
              <Stack.Screen name="noInternet" component={NoInternetScreen}/>
          </Stack.Navigator>
   </NavigationContainer>
  )
}

export default RenderScreens