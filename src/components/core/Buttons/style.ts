import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const getStyles = (bgColor: string) => StyleSheet.create({
    color: {
        backgroundColor: Colors[bgColor],
    },
    touchable: {
        padding: 10,
    },
    text: {
        fontSize: 20,
        color: "#000000",
        textAlign: "center",
    },
});