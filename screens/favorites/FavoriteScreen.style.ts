import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors/colors";


export const styles = StyleSheet.create({
    container: {
        padding:10
    },
    header: {
        flexDirection: 'row',
        alignItems:"center"
    },
    hIcon: {
        fontSize:40
    },
    hTxt: {
        fontSize:30,
        fontWeight: "bold",
        marginLeft:10
    },
    wrapper: {
        marginTop:50,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 15,
        borderRadius:10
    },
    wrap: {
        flexDirection:"row"
    },
    image: {
        width: 100,
        height: 90,
        borderRadius:10
    },
    box: {
        justifyContent: "space-between",
        left:10
    },
    title: {
        fontSize: 30,
        fontWeight:"bold"
    },
    text: {
        color: colors.gray,
        fontSize: 20,
        textTransform:"capitalize"
    },
    icon: {
        color: colors.tertiary,
        alignSelf:"flex-end"
    },
    btn: {
        backgroundColor: colors.primary,
        marginTop: 15,
        padding: 10,
        paddingHorizontal: 30,
        borderRadius:40
    },
    btnTxt: {
        fontSize:17,
        color:colors.white
    }
})