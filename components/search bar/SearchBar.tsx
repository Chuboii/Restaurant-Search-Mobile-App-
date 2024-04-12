import { View, Text,TouchableOpacity, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './SearchBar.style';


const SearchBar = ({onChangeInputText, onTextSubmit, value, navigation}) => {

const navigateToHome = () => navigation.navigate("home")

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={navigateToHome}>
    <AntDesign name="arrowleft" size={24} color="black" style={styles.icon}/>
    </TouchableOpacity>
      <TextInput
          style={styles.input}
            value={value}
            onChangeText={onChangeInputText}
            onEndEditing={onTextSubmit}
            placeholder='Search your favorite restaurant' autoFocus={true} />
    </View>
  )
}

export default SearchBar