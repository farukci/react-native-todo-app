import React from "react"
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions} from "react-native"

const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                placeholder="please input"
            />
            
            <TouchableOpacity>
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
        borderWidth: 1,
        backgroundColor: "#546E7A",
        width: Dimensions.get("window").width / 2,
        alignSelf: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 16,
        textAlign: "center",
    }

})