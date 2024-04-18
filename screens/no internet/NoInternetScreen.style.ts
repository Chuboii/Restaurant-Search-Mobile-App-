import { StyleSheet } from "react-native";  
import { colors } from "../../utils/colors/colors";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        height: "100%",
        padding:20
    },
    header: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize:30
    },
    span: {
        color: "black",
        fontWeight: "bold"
    },
    text: {
        color: "gray",
        marginVertical: 30,
        fontSize:17
    },
    btn: {
        backgroundColor: colors.tertiary,
        padding: 10,
        paddingVertical:20,
        width: "100%",
        borderRadius:10
    },
    btnText: {
        textAlign:'center',
        color: "white",
        fontSize:17
    }
})