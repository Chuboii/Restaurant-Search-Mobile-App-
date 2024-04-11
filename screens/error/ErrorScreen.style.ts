import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors/colors";

export const styles = StyleSheet.create({
    container: {
        padding:15,
        flex: 1,
        flexDirection: "column",
        justifyContent:"center"
    },
    wrapper: {
        flex: 1,
        justifyContent:"flex-end"
    },
    text: {
        fontSize: 17,
        color: colors.TEXT_COLOR,
        marginTop:10
    },
    span: {
        color: colors.DARK_COLOR_BLACK,
        fontWeight:"bold"
    },
    resolve: {
        fontSize: 20,  
    },
    box: {
        flex: 1,
        justifyContent:"flex-end"
    },
    btnWrapper: {
      
    },
    wrap: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'center'
    },
    ul: {
        paddingHorizontal:10
    },
    list: {
      
    },
    boxReload: {
        
    },
    btn: {
        backgroundColor: colors.PRIMARY_COLOR,
        paddingVertical: 17,
        borderRadius: 15,
        marginBottom: 10,
        marginTop:20
    },
    btnText: {
        color: colors.LIGHT_COLOR,
        fontWeight:"bold",
        textAlign: 'center',
        fontSize:17
    },
    btnText1: {
        color: colors.DARK_COLOR_BLACK,
        textAlign: 'center',
        fontSize: 17,
        fontWeight:'bold'
    },
    btn1: {
        borderColor: colors.DARK_COLOR_BLACK,
        borderWidth: 1,
        paddingVertical: 17,
        borderRadius:15
    }
})