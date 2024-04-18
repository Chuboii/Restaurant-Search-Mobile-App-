import FastImage from 'react-native-fast-image'

const LazyImage = ({url}) => (
    <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri:{url},
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
)
export default LazyImage