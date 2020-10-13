import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions,} from "react-native";

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState("");

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                placeholder="New Todo..."
                onChangeText={changeHandler}
            />
            
            <TouchableOpacity onPress={() => submitHandler(text)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add TODO</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

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