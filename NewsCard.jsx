import React from "react";
import {View,Text,Image,TextInput} from "react-native"
import  styles  from "./NewsCard.style";

const NewsCard = ({news}) =>{

return(
 
    
    <View style={styles.container}>
       
        <Image style={styles.image} source={{uri:news.imgURL}} ></Image>
       <View style={styles.innercontainer} >
       <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>Stokta bulunuyor : {news.inStock.toString()}</Text>
        <Text style={styles.price}>{news.price}</Text>
       </View>
        
    </View>
)
} 
export default NewsCard