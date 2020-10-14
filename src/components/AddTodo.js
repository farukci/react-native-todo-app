import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions,} from "react-native";

export default function AddTodo({ addNewTodo }) {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                placeholder="New Todo..."
                onChangeText={newTodo => {setText(newTodo)}}
            />
            
            <TouchableOpacity onPress={() => addNewTodo(text)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add TODO</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height / 6,
        justifyContent: "space-around",
        backgroundColor: "#9575cd",
        borderRadius: 20,
        // marginHorizontal: 10,
        margin: 10,
        padding: 5,
    },
    inputText: {
        backgroundColor: "#ede7f6",
        borderRadius: 10,
        margin: 15,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "#5e35b1",
        width: Dimensions.get("window").width / 2,
        alignSelf: "center",
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        // textTransform: "capitalize",
        fontSize: 16,
        textAlign: "center",
        textTransform: "uppercase",
    }
})