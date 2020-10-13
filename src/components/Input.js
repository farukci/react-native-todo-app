import React from "react"
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions} from "react-native"

const Input = ({onPress}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                placeholder="please input"
            />
            
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add TODO</Text>
                </View>
            </TouchableOpacity>

        </View>

    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height * 0.20,
        justifyContent: "space-around",
        backgroundColor: "#B0BEC5",
        borderRadius: 20,
        margin: 10,
        padding: 5,
    },
    inputText: {
        backgroundColor: "#ECEFF1",
        borderRadius: 10,
        margin: 15,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "#546E7A",
        width: Dimensions.get("window").width / 2,
        alignSelf: "center",
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 16,
        textAlign: "center",
    }

})