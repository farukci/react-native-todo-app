import React, {useState} from "react"
import {SafeAreaView, View, Text, StyleSheet, FlatList, Dimensions, TextInput, TouchableOpacity, } from "react-native"

import AddTodo from "./components/AddTodo";

const Todo = () => {
  
  const [todos, setTodos] = useState([
    {text: "buy coffee ☕", key: "0" },
    {text: "clean house 🧼", key: "1"},
    {text: "play guitar 🎸", key: "2"}
  ])

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {text: text, key: Math.random().toString() * 100}
      ]; 
    })
  }


  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#37474F", justifyContent: "space-between"}}>
      <View>
        <Text style={styles.header}>TODO</Text>
        <View>
          <FlatList
            data={todos}
            renderItem={({item}) => (
            <Text style={styles.todosBar}>{item.text}</Text>
            )} 
          />
        </View>
      </View>

      <AddTodo submitHandler={submitHandler}/>

    </SafeAreaView>
  )
}

export default Todo

const styles = StyleSheet.create({
  header: {
    color: "orange",
    fontSize: 50,
    fontWeight: "bold",
    marginLeft: 10,
  },
  todosBar: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#546E7A",
    color: "white",
    borderRadius: 10,
    fontSize: 20,
  },
  
})