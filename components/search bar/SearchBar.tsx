import { View, Text, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './SearchBar.style';


const SearchBar = ({onChangeInputText, onTextSubmit, value}) => {

  return (
    <View>
    <AntDesign name="arrowleft" size={24} color="black" />
      <TextInput
            value={value}
            onChangeText={onChangeInputText}
            onEndEditing={onTextSubmit}
            placeholder='Search your favorite restaurant' autoFocus={true} />
    </View>
  )
}

export default SearchBar