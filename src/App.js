import React, {useState} from "react"
import {SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from "react-native"

import AddTodo from "./components/AddTodo";

const Todo = () => {
  
  const [todos, setTodos] = useState([
    {text: "buy coffee ☕", key: "0" },
    {text: "clean house 🧼", key: "1"},
    {text: "play guitar 🎸", key: "2"}
  ])

  const addNewTodo = (text) => {
    setTodos((todos) => {
      return [
        ...todos,
        {text: text, key: Math.random().toString() * 100}
      ]; 
    })
  }

  const deleteTodo = (key) => {
    setTodos((todos) => {
      return todos.filter(todo => todo.key != key);
    });
  }



  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#37474F",}}>
      <ScrollView 
        contentInsetAdjustmentBehavior="automatic" 
        style={{flex:1, }}>
        <View>
          <Text style={styles.header}>TODO</Text>
          <View>
            <FlatList
              data={todos}
              renderItem={({item}) => (
              <View style={styles.todosBar}>
                  <Text style={{color: "white", fontSize: 20,}}>{item.text}</Text>
                  {/* <TouchableOpacity onPress={(item) => console.log(item.text)}>
                    <Image style={{width: 20, height: 20}} source={require("./image/dustbin.png")} />
                  </TouchableOpacity> */}
              </View>
              )} 
            />
          </View>
        </View>
      </ScrollView>
      <AddTodo addNewTodo={addNewTodo}/>
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
    borderRadius: 10,
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
})