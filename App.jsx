import React from 'react'
import { useState,Dimensions,SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView,Image,TextInput } from 'react-native'
import news_data from "./news_data.json"
import NewsCard from './components/NewsCard'


function App() {
 

  return (
    <SafeAreaView style={style.container} >
      <View>
  <Text style={style.title} >PRODUCTS</Text>
  <TextInput
        style={{height: 40 ,marginTop:6,marginBottom:6,marginLeft:6,marginRight:6, borderColor:"blue",backgroundColor:"white",borderRadius:8}}
        placeholder="Type here to search product!"
   
        defaultValue={""}
      />
        <FlatList 
  numColumns={5} 
      keyExtractor={(item, index) => { item.id.toString() }} data={news_data} renderItem={({ item }) => <NewsCard news={item} ></NewsCard>}></FlatList>

      </View>

    </SafeAreaView>

  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey"
  },
  image:{
    height:Dimensions.get("window").height / 6,
    width:Dimensions.get("window").height / 2,
  },
  title:{
    fontSize:30,
    textAlign:"center",
    fontStyle:"bold"
    
  }
})
export default App

