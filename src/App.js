import React from "react"
import {SafeAreaView, View, Text, StyleSheet, } from "react-native"

const Todo = () => {
  return (
    <SafeAreaView style={{flex:1,}}>
      <View style={styles.container}>
        <Text>Hello React</Text>
      </View>
    </SafeAreaView>
  )
}

export default Todo

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#37474F",
    
  }
})